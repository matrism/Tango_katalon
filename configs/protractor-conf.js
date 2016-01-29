'use strict';

require('../helpers');

var path = require('path'),
    glob = require('glob'),
    _ = require('lodash'),
    glob = require('glob'),
    mkdirp = require ('mkdirp'),
    moment = require('moment'),
    now = moment().format('YYYY-MM-DD HH-mm-ss'),
    stepCountReporter = require('../tools/stepCountReporter'),
    HtmlReporter = requireCustom('protractor-jasmine2-screenshot-reporter'),
    JSONReporter = requireCustom('jasmine-json-test-reporter'),
    fs = require('fs'),
    screenShotPath,
    tmp = require('tmp'),
    config,
    SSReporter_instance,
    enhanceHtmlReport = require('../tools/enhanceHtmlReport'),
    SnapbackReporter = require('../tools/enhanceHtmlReport/SnapbackReporter'),
    orphanOnErrorReporter = require('../tools/orphanOnErrorReporter'),
    demoReporter = require('../tools/demoReporter'),
    stepByStepReporter = require('../tools/stepByStepReporter'),
    reporterFilePath,
    reporterFileName = 'reporter.htm',
    Zapi = require('./zapi'),
    projectId,
    flow,
    testCycleCliName;

global.ftf = require('factory-testing-framework');
global._tf_config = require('./config');
global.pages = {};
global.steps = {};
global.hash = {};

hash.testVariables = {};

global.systemConfig = global._tf_config._system_;

if (!systemConfig.noReport) {
    screenShotPath = path.join(__dirname, '../reports/html/');

    if(systemConfig.singleReport) {
        screenShotPath = path.join(screenShotPath, 'single/');
    } else {
        screenShotPath = path.join(screenShotPath, now);
    }

    reporterFilePath = screenShotPath + '/' + reporterFileName;

    //mkdirp(screenShotPath);

    SSReporter_instance = new HtmlReporter({
        dest: screenShotPath + '/',
        filename: reporterFileName,
    });
}

systemConfig.downloadsDirectoryPath = tmp.dirSync().name;

config = {
    capabilities: {

        platform: 'ANY',
        version: 'ANY',

        // No way around for Firefox until https://code.google.com/p/selenium/issues/detail?id=7978
        // 'profile.browser.helperApps.neverAsk.saveToDisk': mimeTypes.join(', '),
        // 'profile.browser.download.dir': '/e2e/downloads/',
        browserName: global._tf_config._system_.browser, //firefox, ie
        chromeOptions: {
          //  args: ['--test-type']
            args: ['--no-sandbox', '--test-type=browser'],
            prefs: {
                'download': {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': systemConfig.downloadsDirectoryPath
                },
            }
        }
    },
    specs: ['init.js'],
    onPrepare: function() {
        console.time('Tests time');
        var reporting = systemConfig.reporting,
            pph = require('../helpers/pph'),
            testFiles = require('./files.js'),
            matchers,
            browserWait,
            SpecReporter = require('jasmine-spec-reporter'),
            jasmineReporters,
            asciiPrefixes,
            failFast = require('jasmine-fail-fast'),
            beforeReporter = require('../helpers/beforeReporter');

        global.promise = protractor.promise;
        global.ExpectedConditions = protractor.ExpectedConditions;
        global.EC = ExpectedConditions;

        if(systemConfig.fingerprints) {
            (function () {
                var webdriver = require('selenium-webdriver'),

                    WEP = webdriver.WebElement.prototype;

                ['click', 'sendKeys', 'getAttribute', 'getText', 'clear'].forEach(function (name) {
                    var originalFn = WEP[name];

                    WEP[name] = function () {
                        highlightElement(this);

                        return originalFn.apply(this, arguments);
                    };
                });
            })();
        }

        if (systemConfig.failFast) {
            jasmine.getEnv().addReporter(failFast.init());
        }

        //jasmine.getEnv().addReporter(beforeReporter);

        // set path to features in config
        systemConfig.path_to_features = testFiles.features;

        // require all pages and steps files
        testFiles.pages.concat(testFiles.steps).forEach(function (filePath) {
            require(filePath);
        });

        projectId = systemConfig.projectId;
        flow = 2;
        /*flow = systemConfig.flow;*/
        testCycleCliName = systemConfig.tcn;

        if (projectId) {
            Zapi.projectId = projectId;
            Zapi.setProjectId(projectId);
        }

        browser.driver.manage().timeouts().setScriptTimeout(15000);

        // maximize browser size, then check if it's bigger than our config resolution
        browser.driver.manage().window().maximize();

        browser.driver.manage().window().getSize().then(function (size) {
            // check if we have a system resolution and if either width/height is larger than actual browser width/height
            if (systemConfig.resolution.width && systemConfig.resolution.height && (size.width < systemConfig.resolution.width || size.height < systemConfig.resolution.height)) {
                // if so, set browser width/height to config and then out browser size
                browser.driver.manage().window().setSize(systemConfig.resolution.width, systemConfig.resolution.height);

                browser.driver.manage().window().getSize().then(function (size) {
                    console.log('Browser Window Size: ' + JSON.stringify(size));
                });
            } else {
                console.log('Browser Window Size: ' + JSON.stringify(size));
            }
        });

        browserWait = browser.wait;
        browser.wait = function(testFn, timeout, options) {
            if (timeout === undefined || timeout === null) {
                timeout = systemConfig.wait_timeout;
            }

            timeout = parseInt(timeout);

            options = options || {};

            return browserWait.call(browser, function() {
                var testFnResult = testFn.apply(this, arguments);

                if(options.dontThrowOnError) {
                    return testFnResult;
                }

                return pph.and(
                    testFnResult, pages.base.dialogError().then(function(errorMessage) {
                        if(!errorMessage) {
                            return true;
                        }

                        throw new Error(errorMessage);
                    })
                );
            }, timeout);
        };

        jasmine.getEnv().addReporter(stepCountReporter);

        asciiPrefixes = {
            success: '[Pass] ',
            failure: '[Fail] ',
            pending: '[Pending] ',
        };

        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'specs',
            displayFailuresSummary: false,
            displaySpecDuration: true,
            prefixes: systemConfig.noUnicode? asciiPrefixes : null,
        }));

        if (systemConfig.demoReporter) {
            jasmine.getEnv().addReporter(demoReporter);
        }

        if (reporting === 'xml' || reporting === 'all') {
            jasmineReporters = require('jasmine-reporters');

            jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
                consolidateAll: false,
                savePath: 'reports/xml',
                useDotNotation: true,
                filePrefix: (new Date).getTime() + '-'  // makes it unique when running tests in parallel
            }));
        }

        if (SSReporter_instance && (reporting === 'html' || reporting === 'all')) {
            jasmine.getEnv().addReporter(SSReporter_instance);

            jasmine.getEnv().addReporter(new SnapbackReporter({
                dest: screenShotPath
            }));
        }

        jasmine.getEnv().addReporter(new JSONReporter({
            file: path.join(screenShotPath, 'jasmine-test-results.json'),
            beautify: true,
            indentationLevel: 4 // used if beautify === true
        }));

        if(systemConfig.orphanOnError) {
            jasmine.getEnv().addReporter(orphanOnErrorReporter);
        }

        jasmine.getEnv().addReporter(stepByStepReporter);

        if (systemConfig.stepByStep) {
            stepByStepReporter.enable();
        }

        jasmine.getEnv().addReporter({
            specDone: function () {
                highlightElement.restoreAll().then(null, function (err) {
                    console.error('Ignoring highlightElement.restoreAll error:', err);
                });
            }
        });

        if (typeof process.env.__using_grunt === 'undefined') {
//            var spawn = require('child_process').spawn;
//            var child = spawn('bash', ['grunt','clearReports']);
//            child.stdout.on('data', function (data) { console.log(data.toString()); });
//            child.stderr.on('data', function (data) { console.log(data.toString()); });
//            child.on('error', function() { console.log(arguments); });
        }
        matchers = new global.ftf.matchers();
        //jasmine.Matchers.prototype.shouldBePresent = matchers.create('ShouldBePresent');

        protractor.ExpectedConditions.presenceOfAny = function (elems) {
            return function () {
                return elems.count();
            };
        };

        protractor.ExpectedConditions.visibilityOfAny = function (elems) {
            return function () {
                return protractor.ExpectedConditions.presenceOfAny(elems)().then(function (count) {
                    return count && pph.arraySome(elems, function(element){
                        return protractor.ExpectedConditions.visibilityOf(element);
                    });
                });
            };
        };

        global.Typeahead = require('../helpers/typeahead.js');
        global.TgDropdown = require('../helpers/tgDropdown.js');

        function makeBrokenTestSteps(description) {
            return function() {
                steps.base.fail(
                    description || 'Broken for unknown or unspecified reasons.'
                );
            };
        }

        if(!systemConfig.dontSkipBroken) {
            glob.sync(__dirname + '/../features/*.js').forEach(
                function(featureModulePath) {
                    var featureModule = require(featureModulePath),
                        feature;

                    if(featureModule.commonFeatureTags.indexOf('broken') !== -1) {
                        delete featureModule.beforeFeature;

                        feature = featureModule.feature[0];
                        featureModule.feature = [feature];

                        feature.name = 'Broken feature test';

                        feature.steps = makeBrokenTestSteps(
                            featureModule.breakageDescription
                        );

                        return;
                    }

                    featureModule.feature.forEach(function(feature) {
                        if(feature.tags.indexOf('broken') === -1) {
                            return;
                        }

                        feature.steps = makeBrokenTestSteps(
                            feature.breakageDescription
                        );
                    });
                }
            );
        }
    },
    onCleanUp: function(statusCode) {
        /*if (typeof process.env.__using_grunt === 'undefined' && SSReporter_instance) {
            try {
                //SSReporter_instance.compileReport();
            } catch(e) {
                //console.error('Error on compileReport: ', e.stack);
            }
        }*/

        if(!systemConfig.noReport) {
            enhanceHtmlReport(reporterFilePath, {
                startDate: now,
                env: systemConfig.env,
                buildNumber: systemConfig.buildNumber,
                branch: systemConfig.branch,
                commit: {
                    hash: systemConfig.commitHash,
                    shortHash: systemConfig.commitHash ? systemConfig.commitHash.slice(0, 7) : ''
                },
                includedTagsString: systemConfig.tags.join(', '),
                excludedTagsString: systemConfig.tags.negated.join(', ')
            });
        }

        var deferred = protractor.promise.defer();

        browser.getProcessedConfig().then(function (config) {
            var capabilities = config.capabilities.tags,
                issueName = Array.isArray(capabilities) ? capabilities[0] : capabilities,
                testCycleName = testCycleCliName || ('NightlyJob_' + moment().format('YYYY-MM-DD')),
                components = ['deals', 'payees', 'works', 'dataUtilities', 'royaltyProcessing', 'royaltyRates', 'copyrightRegistration', 'financialInterfaces', 'incomeManagement'],
                cycleExists,
                cycleId,
                internalIssueId,
                internalExecutionId,
                responseJson,
                features = [],
                scriptFeatures = [],
                projectTestCases = [],
                projectTestBugs = [],
                missingReport = false,
                zapiFlowsDone = 0,

                getTestCyclesComplete = function (response) {

                    var testCycles,
                        testCycleIds;

                    responseJson = JSON.parse(response);

                    if(responseJson['-1'] === undefined) {
                        console.log('create test cycle');
                        createTestCycle();
                    } else {
                        //-1 is versionId
                        console.log('test cycle exists');
                        testCycles = responseJson['-1'];
                        testCycleIds = testCycles[0];

                        for (var existingTestCycleId in testCycleIds) {
                            if (testCycleIds[existingTestCycleId].name === testCycleName) {
                                cycleId = existingTestCycleId;
                                cycleExists = true;
                                console.log('Existing test cycle has been found and will not be created.');
                                console.log('Test cycle name is : ' + testCycleName);
                                console.log('Test cycle id is : ' + cycleId);
                                break;
                            }
                        }
                    }
                },

                failCallback = function (status, response) {
                    console.log('Something went wrong during Zapi interaction.');
                    console.log('Response (with status : ' + status + ') was : ');
                    console.log(response);
                },

                createTestCycle = function () {
                    if (!cycleExists) {
                        return Zapi.createTestCycle(testCycleName)
                            .then(createTestCycleComplete, failCallback);
                    } else {
                        return protractor.promise.defer().fulfill();
                    }
                },

                createTestCycleComplete = function (response) {
                    responseJson = JSON.parse(response);
                    cycleId = responseJson.id;

                    console.log('Cycle id is : ' + cycleId);
                },

                getProtractorTestResults = function () {

                    var testResultsPath = path.join(screenShotPath, 'jasmine-test-results.json'),
                        testResults,
                        scriptTests = [];

                    if (fs.existsSync(testResultsPath)) {
                        testResults = require(testResultsPath);
                    }

                    if (!testResults) {
                        //a json file was not created, something went wrong so we have to use the fallback solution, using statusCode with which protractor exited
                        missingReport = true;
                    } else {
                        for (var featureFileJsonId in testResults) {
                            var zapiPromise = protractor.promise.defer(),
                                featureFile = testResults[featureFileJsonId],
                                featureName = featureFile.fullName;

                            if(featureName) {
                                var featureParts = featureName.split('.js'),
                                    featureFileSpecs = featureFile.specs;

                                var localFeature = {
                                    name: featureName,
                                    key: featureParts[0],
                                    subFeatures: [],
                                    tagNames: [],
                                    steps: [],
                                    passed: true
                                };

                                localFeature.key = localFeature.key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })

                                try {
                                    var tagNames = featureName.split('. ')[1].split(': ')[1].split('.')[0].split(',');
                                    for (var j = 0; j < tagNames.length; j++) {
                                        localFeature.tagNames.push(tagNames[j].match('[a-zA-Z0-9]*-[a-zA-Z0-9]*')[0]);
                                    }
                                } catch (e) {
                                    //do nothing
                                }

                                for (var spec =0; spec < featureFileSpecs.length; spec++) {

                                    var subFeature = featureFileSpecs[spec],
                                        subFeatureName = subFeature.fullName,
                                        subFeaturePassed = (subFeature.status == 'passed'),
                                        parts = subFeatureName.split(':');

                                    var subLocalFeature = {
                                        name: parts[2],
                                        passed: subFeaturePassed,
                                        severity: subFeature.severity,
                                        filename: subFeature.filename,
                                        tagNames: []
                                    };

                                    try {
                                        var tagNames = subFeatureName.split('. ')[1].split(': ')[1].split('.')[0].split(',');
                                        for (var j = 0; j < tagNames.length; j++) {
                                            subLocalFeature.tagNames.push(tagNames[j].match('[a-zA-Z0-9]*-[a-zA-Z0-9]*')[0]);
                                        }
                                    } catch (e) {
                                        //do nothing
                                    }

                                    if(!subFeaturePassed) {
                                        localFeature.passed = false;
                                    }

                                    localFeature.steps.push(subLocalFeature);

                                }

                                if(localFeature.steps.length > 0) {
                                    if (localFeature.steps[0].name != '  User is logged in') {
                                        features.push(localFeature);
                                    }
                                }
                            }
                        }
                        var scriptFeature = {},
                            scriptPassed = true;

                        for(var j =0; j < features.length; j++) {
                            var feature = features[j];

                            if(!feature.passed) {
                                scriptPassed = false;
                            }

                            if (_.isEmpty(scriptFeature)) {
                                scriptFeature = feature;

                                if(j == (features.length - 1)) {
                                    scriptFeature.passed = scriptPassed;
                                    scriptFeatures.push(scriptFeature);
                                }
                            } else {
                                var steps = feature.steps,
                                    scriptSteps = scriptFeature.steps;

                                if(j < features.length - 1) {

                                    var nextFeature = features[j + 1];
                                    if(scriptFeature.key != nextFeature.key) {

                                        for (var i = 0; i < steps.length; i++) {
                                            scriptSteps.push(steps[i]);
                                        }

                                        scriptFeature.passed = scriptPassed;
                                        scriptFeatures.push(scriptFeature);
                                        scriptPassed = true;
                                        scriptFeature = {};
                                    } else {
                                        for (var i = 0; i < steps.length; i++) {
                                            scriptSteps.push(steps[i]);
                                        }
                                    }
                                } else {
                                    if(j == (features.length - 1)) {
                                        for (var i = 0; i < steps.length; i++) {
                                            scriptSteps.push(steps[i]);
                                        }

                                        scriptFeature.passed = scriptPassed;
                                        scriptFeatures.push(scriptFeature);
                                    }
                                }
                            }
                        }
                    }

                    return protractor.promise.defer().fulfill();
                },

/*                setUpCompleteZapiFlowOne = function () {

                    var zapiPromise = protractor.promise.defer(),
                        featuresDone = 0;

                    if (!missingReport) {
                        features.forEach(function (feature) {
                            feature.zapiDone = false;

                            var jiraIssue,
                                testSteps = [],
                                jiraExecutionId;

                            Zapi.getIssueId(feature.tagNames[0])
                                .then(function (response) {
                                    var responseJson = JSON.parse(response);
                                    feature.issueId = responseJson.id;
                                    jiraIssue = {
                                        id: responseJson.id
                                    };
                                }, failCallback)
                                .then(function () {
                                    return Zapi.executeTestToTestCycle(cycleId, feature.issueId)
                                        .then(function (response) {
                                            var execIdObject = JSON.parse(response);

                                            for (var key in execIdObject) {
                                                feature.executionId = key;
                                                jiraExecutionId = key;
                                            }
                                        }, failCallback)
                                        .then(function () {
                                            console.log('Getting Steps for Issue ...');

                                            return Zapi.getTestStepsForIssue(feature.issueId)
                                                .then(function (response) {
                                                    testSteps = JSON.parse(response);
                                                }, failCallback);
                                        })
                                        .then(function () {

                                            console.log('Mapping Steps for Issue ...');

                                            var allFeatureSteps = [];

                                            feature.subFeatures.forEach(function (subFeature) {
                                                subFeature.steps.forEach(function (step) {
                                                    allFeatureSteps.push(step);
                                                });
                                            });

                                            var localTestSteps = [];

                                            testSteps.forEach(function (testStep, i) {
                                                localTestSteps.push({
                                                    step: allFeatureSteps[i],
                                                    createdStep: testStep,
                                                    index: i
                                                });
                                            });

                                            testSteps = localTestSteps;

                                            return protractor.promise.defer().fulfill();

                                        }, failCallback)
                                        .then(function () {
                                            console.log('Getting Result Steps for Execution ...');
                                            return Zapi.getTestStepResultsForExecution(jiraExecutionId)
                                                .then(function (response) {
                                                    var executionStepResults = JSON.parse(response);
                                                    executionStepResults.forEach(function (localExecutionStepResult) {
                                                        testSteps.forEach(function (localTestStep) {
                                                            if (localTestStep.createdStep.id === localExecutionStepResult.stepId) {
                                                                localTestStep.resultStep = localExecutionStepResult;
                                                            }
                                                        });
                                                    });
                                                }, failCallback);
                                        }, failCallback)
                                        .then(function () {
                                            console.log('Updating Test Execution to Executed and taking feature passed value ...');
                                            return Zapi.updateTestExecutionStatus(feature.passed, jiraExecutionId);
                                        })
                                        .then(function () {
                                            console.log('Updating step results ...')
                                            var testStepResultPromise = protractor.promise.defer(),
                                                testStepResultsDone = 0;
                                            if (!feature.passed) {
                                                feature.bugsCreated = [];
                                            }

                                            testSteps.forEach(function (localTestStep) {
                                                var linkedIssue;

                                                if (!localTestStep.step.passed) {
                                                    console.log('Not passed step found, creating bug and linking ...');
                                                    Zapi.createJiraBug(jiraIssue.id, feature, localTestStep)
                                                        .then(function (response) {
                                                            linkedIssue = JSON.parse(response);
                                                            feature.bugsCreated.push(linkedIssue);
                                                        }, failCallback)
                                                        .then(function () {
                                                            Zapi.updateTestStepResult(jiraIssue.id, jiraExecutionId, localTestStep, feature, linkedIssue)
                                                                .then(function () {
                                                                    testStepResultsDone++;

                                                                    if (testStepResultsDone === testSteps.length) {
                                                                        testStepResultPromise.fulfill();
                                                                    }
                                                                });
                                                        });
                                                } else {
                                                    Zapi.updateTestStepResult(jiraIssue.id, jiraExecutionId, localTestStep, feature)
                                                        .then(function () {
                                                            testStepResultsDone++;

                                                            if (testStepResultsDone === testSteps.length) {
                                                                testStepResultPromise.fulfill();
                                                            }
                                                        });
                                                }
                                            });

                                            return testStepResultPromise;
                                        }, failCallback);
                                })
                                .then(function () {
                                    if (feature.bugsCreated && feature.bugsCreated.length) {
                                        return Zapi.bulkUpdateExecutionDefects(feature.bugsCreated, jiraExecutionId)
                                            .then(function (response) {
                                                console.log('Succesfully linked defects (bugs created) to the execution with ID: ' + jiraExecutionId);
                                            }, failCallback);
                                    } else {
                                        return protractor.promise.defer().fulfill();
                                    }
                                })
                                .then(function () {
                                    featuresDone++;
                                    feature.zapiDone = true;
                                    if (featuresDone === features.length) {
                                        console.log('All done.');
                                        zapiPromise.fulfill();
                                    }
                                });
                        });
                    } else {
                        Zapi.getIssueId(issueName)
                            .then(function (response) {
                                responseJson = JSON.parse(response);
                                internalIssueId = responseJson.id;
                                console.log(internalIssueId);
                            }, failCallback)
                            .then(function () {
                                return Zapi.executeTestToTestCycle(cycleId, internalIssueId)
                                    .then(executeTestsToCycleComplete, failCallback);
                            })
                            .then(function () {
                                return Zapi.updateTestExecution(internalExecutionId, statusCode === 0 ? '1' : '2', 'test update')
                                    .then(function (response) {
                                        responseJson = JSON.parse(response);
                                        console.log(responseJson);
                                        zapiPromise.fulfill();
                                    }, failCallback);
                            });
                    }

                    zapiPromise.then(function () {
                        var allFeaturesPassed = true;

                        for (var i = 0, ln = features.length; i < ln; i++) {
                            if (features[i].passed === false) {
                                allFeaturesPassed = false;
                                break;
                            }
                        }

                        //this means test cycle has been successful, as all features passed.

                    });

                    return zapiPromise;
                },*/

                setUpCompleteZapiFlowTwo = function () {

                    function executeStepsAsync(steps) {
                        var fExecuteStep = function () {
                            var step = steps.shift();

                            if (step) {
                                return step()
                                    .then(function () {
                                        return fExecuteStep();
                                    });
                            }
                        };

                        return fExecuteStep();
                    }

                    var zapiPromise = protractor.promise.defer();

                    if (!missingReport) {
                        Zapi.getTestCases()
                            .then(function (response) {
                                responseJson = JSON.parse(response);

                                var issues = responseJson.issues;
                                issues.forEach(function (issue) {
                                    projectTestCases.push({
                                        "id": issue.id,
                                        "key": issue.key,
                                        "summary": issue.fields.summary
                                    })
                                });
                            }, failCallback)
                            .then(function() {
                                return Zapi.getTestBugs()
                                    .then(function (response) {
                                        responseJson = JSON.parse(response);

                                        var issues = responseJson.issues;
                                        issues.forEach(function (issue) {
                                            projectTestBugs.push({
                                                "id": issue.id,
                                                "key": issue.key,
                                                "summary": issue.fields.summary,
                                                "self": issue.self
                                            })
                                        });
                                    }, failCallback)
                            })
                            .then(function() {
                                scriptFeatures.forEach(function (feature) {
                                    feature.zapiDone = false;

                                    var jiraIssue,
                                        testSteps = [],
                                        jiraExecutionId,
                                        foundTestCase = false,
                                        testCaseName,
                                        testCaseId,
                                        componentName = '',
                                        jiraComponentName = '',
                                        featuresDone = 0,
                                        nameParts = feature.name.split('Tags:'),
                                        componentArray = nameParts[1].split('.'),
                                        componentNames = componentArray[0].split(', '),
                                        testFullName = feature.key;

                                    componentNames.forEach(function (comp) {
                                        components.forEach(function (component) {
                                            var componentHash = '\'' + component + '\'';
                                            comp.replace(' ','');
                                            if(comp === componentHash) {
                                                componentName = component;
                                            }
                                        });
                                    });

                                    switch(componentName) {
                                        case 'works': jiraComponentName = 'Works';
                                            break;
                                        case 'deals': jiraComponentName = 'Deals';
                                            break;
                                        case 'payees': jiraComponentName = 'Payees';
                                            break;
                                        case 'dataUtilities': jiraComponentName = 'Data Utilities';
                                            break;
                                        case 'royaltyProcessing': jiraComponentName = 'Royalty Processing';
                                            break;
                                        case 'royaltyRates': jiraComponentName = 'Royalty Rates';
                                            break;
                                        case 'copyrightRegistration': jiraComponentName = 'Copyright Registration';
                                            break;
                                        case 'financialInterfaces': jiraComponentName = 'Financial Interfaces';
                                            break;
                                        case 'incomeManagement': jiraComponentName = 'Income Management';
                                            break;
                                        default: jiraComponentName = 'Works';
                                            break;
                                    }

                                    projectTestCases.forEach(function (issue) {
                                        if ((feature.steps.length != 1) && (feature.steps[0].name != '  User is logged in')) {
                                            if ((!foundTestCase) && (issue.summary == testFullName)) {
                                                foundTestCase = true;
                                                testCaseName = issue.key;
                                                testCaseId = issue.id;
                                            }
                                        }
                                    });

                                    if (foundTestCase) {
                                        Zapi.executeTestToTestCycle(cycleId, testCaseId)
                                            .then(function (response) {
                                                var execIdObject = JSON.parse(response);

                                                for (var key in execIdObject) {
                                                    jiraExecutionId = key;
                                                }
                                            })
                                            .then(function () {
                                                console.log('Getting Steps for Issue ...');

                                                return Zapi.getTestStepsForIssue(testCaseId)
                                                    .then(function (response) {
                                                        testSteps = JSON.parse(response);
                                                    }, failCallback);
                                            })
                                            .then(function () {

                                                console.log('Mapping Steps for Issue ...');

                                                var allFeatureSteps = [];

                                                feature.steps.forEach(function (step) {
                                                    allFeatureSteps.push(step);
                                                });

                                                var localTestSteps = [];

                                                testSteps.forEach(function (testStep, i) {
                                                    localTestSteps.push({
                                                        step: allFeatureSteps[i],
                                                        createdStep: testStep,
                                                        index: i
                                                    });
                                                });

                                                testSteps = localTestSteps;

                                                return protractor.promise.defer().fulfill();

                                            }, failCallback)
                                            .then(function () {
                                                console.log('Getting Result Steps for Execution ...');
                                                return Zapi.getTestStepResultsForExecution(jiraExecutionId)
                                                    .then(function (response) {
                                                        var executionStepResults = JSON.parse(response);
                                                        executionStepResults.forEach(function (localExecutionStepResult) {
                                                            testSteps.forEach(function (localTestStep) {
                                                                if (localTestStep.createdStep.id === localExecutionStepResult.stepId) {
                                                                    localTestStep.resultStep = localExecutionStepResult;
                                                                }
                                                            });
                                                        });
                                                    }, failCallback);
                                            }, failCallback)
                                            .then(function () {
                                                return Zapi.updateTestExecutionStatus(feature.passed, jiraExecutionId);
                                            })
                                            .then(function () {
                                                console.log('Updating step results ...')
                                                var testStepResultPromise = protractor.promise.defer(),
                                                    testStepResultsDone = 0,
                                                    bugFound =false,
                                                    testStepBug = {},
                                                    linkedIssue;

                                                if (!feature.passed) {
                                                    feature.bugsCreated = [];
                                                }

                                                testSteps.forEach(function (localTestStep) {

                                                    console.log('-----------localTestStep----------------');
                                                    console.log(localTestStep);
                                                    console.log('-----------localTestStep----------------');

                                                    if (localTestStep.step) {
                                                        if (!localTestStep.step.passed) {
                                                            console.log('Not passed step found, creating bug and linking ...');

                                                            if(!bugFound) {
                                                                if(_.isEmpty(testStepBug)){
                                                                    testStepBug = localTestStep;
                                                                } else {
                                                                    if(testStepBug.step.severity == 'minor') {
                                                                        if(localTestStep.step.severity == 'major') {
                                                                            testStepBug = localTestStep;
                                                                        } else if(localTestStep.step.severity == 'critical') {
                                                                            testStepBug = localTestStep;
                                                                            bugFound =true;
                                                                        }
                                                                    } else if(testStepBug.step.severity == 'major') {
                                                                        if(localTestStep.step.severity == 'critical') {
                                                                            testStepBug = localTestStep;
                                                                            bugFound =true;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } else {
                                                            Zapi.updateTestStepResult(testCaseId, jiraExecutionId, localTestStep, feature)
                                                                .then(function () {
                                                                    testStepResultsDone++;

                                                                    if (testStepResultsDone === testSteps.length) {
                                                                        testStepResultPromise.fulfill();
                                                                    }
                                                                }, failCallback);
                                                        }
                                                    }
                                                });

                                                if(!_.isEmpty(testStepBug)) {
                                                    var summary = 'Test Bug through Jira API - linked to ' + testStepBug.step.name + ' --- ' + feature.key,
                                                        foundTestBug = false;

                                                    projectTestBugs.forEach(function(testBug) {
                                                        if(!foundTestBug && (testBug.summary === summary)) {
                                                            linkedIssue = {
                                                                id:  testBug.id,
                                                                key: testBug.key,
                                                                self: testBug.self
                                                            };
                                                            feature.bugsCreated.push(linkedIssue);
                                                            foundTestBug = true;
                                                        }
                                                    });

                                                    if(!foundTestBug && systemConfig.bugLabel) {
                                                        Zapi.createJiraBug(testCaseId, feature, testStepBug, systemConfig.bugLabel)
                                                            .then(function (response) {
                                                                linkedIssue = JSON.parse(response);
                                                                feature.bugsCreated.push(linkedIssue);
                                                            }, failCallback)
                                                            .then(function () {
                                                                return Zapi.updateTestStepResult(testCaseId, jiraExecutionId, testStepBug, feature, linkedIssue);
                                                            })
                                                            .then(function () {
                                                                return Zapi.updateAttachment(testStepBug.resultStep.id, path.join(screenShotPath, testStepBug.step.filename));
                                                            })
                                                            .then(function () {
                                                                testStepResultsDone++;

                                                                if (testStepResultsDone === testSteps.length) {
                                                                    testStepResultPromise.fulfill();
                                                                }
                                                            }, failCallback);
                                                    }
                                                }

                                                //testStepResultPromise.fulfill();

                                                return testStepResultPromise;
                                            }, failCallback)
                                            .then(function () {
                                                if (feature.bugsCreated && feature.bugsCreated.length > 0) {
                                                    console.log('Prepare to link bugs...');
                                                    return Zapi.bulkUpdateExecutionDefects(feature.bugsCreated, jiraExecutionId)
                                                        .then(function (response) {
                                                            console.log('Succesfully linked defects (bugs created) to the execution with ID: ' + jiraExecutionId);
                                                        }, failCallback);
                                                } else {
                                                    return protractor.promise.defer().fulfill();
                                                }
                                            })
                                            .then(function () {
                                                console.log('Features Done: ', featuresDone);
                                                console.log('Features length: ', features.length);
                                                featuresDone++;
                                                feature.zapiDone = true;
                                                if (featuresDone === features.length) {
                                                    console.log('All done.');
                                                    zapiPromise.fulfill();
                                                }
                                            });

                                    } else {
                                        console.log('Creating a Jira Issue ...');
                                        Zapi.createJiraIssue(testFullName, jiraComponentName)
                                            .then(function (response) {
                                                jiraIssue = JSON.parse(response);
                                                console.log('Jira Issue created with ID : ' + jiraIssue.id);
                                                return protractor.promise.defer().fulfill();
                                            }, failCallback)
                                            .then(function () {

                                                console.log('Creating Steps for Issue ...');

                                                var testStepsPromise = protractor.promise.defer(),
                                                    allFeatureSteps = [],
                                                    stepsDone = 0;

                                                feature.steps.forEach(function (step) {
                                                    allFeatureSteps.push(step);
                                                });

                                                var featureStepsFunctions = [];

                                                allFeatureSteps.forEach(function (step, i) {
                                                    var stepFunction = function () {
                                                        return Zapi.createTestStepForIssue(jiraIssue.id, step, i)
                                                            .then(function (response) {
                                                                var testStep = JSON.parse(response);
                                                                testSteps.push({
                                                                    step: step,
                                                                    createdStep: testStep,
                                                                    index: i
                                                                });

                                                                stepsDone++;

                                                                if (stepsDone === allFeatureSteps.length) {
                                                                    testStepsPromise.fulfill();
                                                                }
                                                            }, failCallback);
                                                    };

                                                    featureStepsFunctions.push(stepFunction);
                                                });

                                                executeStepsAsync(featureStepsFunctions);

                                                return testStepsPromise;
                                            }, failCallback)
                                            .then(function () {
                                                console.log('Creating Execution for Issue ...');
                                                return Zapi.executeTestToTestCycle(cycleId, jiraIssue.id)
                                                    .then(function (response) {
                                                        var execIdObject = JSON.parse(response);

                                                        for (var key in execIdObject) {
                                                            jiraExecutionId = key;
                                                        }
                                                    }, failCallback);
                                            }, failCallback)
                                            .then(function () {
                                                console.log('Getting Result Steps for Exection ...');
                                                return Zapi.getTestStepResultsForExecution(jiraExecutionId)
                                                    .then(function (response) {
                                                        var executionStepResults = JSON.parse(response);

                                                        executionStepResults.forEach(function (localExecutionStepResult) {
                                                            testSteps.forEach(function (localTestStep) {
                                                                if (localTestStep.createdStep.id === localExecutionStepResult.stepId) {
                                                                    localTestStep.resultStep = localExecutionStepResult;
                                                                }
                                                            });
                                                        });
                                                    }, failCallback);
                                            }, failCallback)
                                            .then(function () {
                                                console.log('Updating Test Execution to Executed and taking feature passed value ...');
                                                return Zapi.updateTestExecutionStatus(feature.passed, jiraExecutionId);
                                            })
                                            .then(function () {
                                                console.log('Updating step results ...');
                                                var testStepResultPromise = protractor.promise.defer(),
                                                    testStepResultsDone = 0,
                                                    bugFound =false,
                                                    testStepBug = {},
                                                    linkedIssue;

                                                if (!feature.passed) {
                                                    feature.bugsCreated = [];
                                                }

                                                testSteps.forEach(function (localTestStep) {

                                                    if (!localTestStep.step.passed) {
                                                        console.log('Not passed step found, creating bug and linking ...');

                                                        if(!bugFound) {
                                                            if(_.isEmpty(testStepBug)){
                                                                testStepBug = localTestStep;
                                                            } else {
                                                                if(testStepBug.step.severity == 'minor') {
                                                                    if(localTestStep.step.severity == 'major') {
                                                                        testStepBug = localTestStep;
                                                                    } else if(localTestStep.step.severity == 'critical') {
                                                                        testStepBug = localTestStep;
                                                                        bugFound =true;
                                                                    }
                                                                } else if(testStepBug.step.severity == 'major') {
                                                                    if(localTestStep.step.severity == 'critical') {
                                                                        testStepBug = localTestStep;
                                                                        bugFound =true;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else {
                                                        Zapi.updateTestStepResult(jiraIssue.id, jiraExecutionId, localTestStep, feature)
                                                            .then(function () {
                                                                testStepResultsDone++;

                                                                if (testStepResultsDone === testSteps.length) {
                                                                    testStepResultPromise.fulfill();
                                                                }
                                                            });
                                                    }
                                                });

                                                if(!_.isEmpty(testStepBug)) {
                                                    var summary = 'Test Bug through Jira API - linked to ' + testStepBug.step.name + ' --- ' + feature.key,
                                                        foundTestBug = false;

                                                    projectTestBugs.forEach(function(testBug) {
                                                        if(!foundTestBug && (testBug.summary === summary)) {
                                                            linkedIssue = {
                                                                id:  testBug.id,
                                                                key: testBug.key,
                                                                self: testBug.self
                                                            };
                                                            feature.bugsCreated.push(linkedIssue);
                                                            foundTestBug = true;
                                                        }
                                                    });

                                                    if(!foundTestBug && systemConfig.bugLabel) {
                                                        Zapi.createJiraBug(testCaseId, feature, testStepBug, systemConfig.bugLabel)
                                                            .then(function (response) {
                                                                linkedIssue = JSON.parse(response);
                                                                feature.bugsCreated.push(linkedIssue);
                                                            }, failCallback)
                                                            .then(function () {
                                                                return Zapi.updateTestStepResult(testCaseId, jiraExecutionId, testStepBug, feature, linkedIssue);
                                                            })
                                                            .then(function () {
                                                                return Zapi.updateAttachment(testStepBug.resultStep.id, path.join(screenShotPath, testStepBug.step.filename));
                                                            })
                                                            .then(function () {
                                                                testStepResultsDone++;

                                                                if (testStepResultsDone === testSteps.length) {
                                                                    testStepResultPromise.fulfill();
                                                                }
                                                            }, failCallback);
                                                    }
                                                }

                                                return testStepResultPromise;
                                            }, failCallback)
                                            .then(function () {
                                                if (feature.bugsCreated && feature.bugsCreated.length) {
                                                    return Zapi.bulkUpdateExecutionDefects(feature.bugsCreated, jiraExecutionId)
                                                        .then(function (response) {
                                                            console.log('Succesfully linked defects (bugs created) to the execution with ID: ' + jiraExecutionId);
                                                        }, failCallback);
                                                } else {
                                                    return protractor.promise.defer().fulfill();
                                                }
                                            })
                                            .then(function () {
                                                featuresDone++;
                                                if (featuresDone === features.length) {
                                                    console.log('All done.');
                                                    zapiPromise.fulfill();
                                                }
                                            });
                                    }

                                });

                            }, failCallback);

                    } else {
                        Zapi.getIssueId(issueName)
                            .then(function (response) {
                                responseJson = JSON.parse(response);
                                internalIssueId = responseJson.id;
                                console.log(internalIssueId);
                            }, failCallback)
                            .then(function () {
                                return Zapi.executeTestToTestCycle(cycleId, internalIssueId)
                                    .then(executeTestsToCycleComplete, failCallback);
                            })
                            .then(function () {
                                return Zapi.updateTestExecution(internalExecutionId, statusCode === 0 ? '1' : '2', 'test update')
                                    .then(function (response) {
                                        responseJson = JSON.parse(response);
                                        console.log(responseJson);
                                        zapiPromise.fulfill();
                                    }, failCallback);
                            });
                    }

                    zapiPromise.then(function () {
                        var allFeaturesPassed = true;

                        for (var i = 0, ln = features.length; i < ln; i++) {
                            if (features[i].passed === false) {
                                allFeaturesPassed = false;
                                break;
                            }
                        }

                        //this means test cycle has been successful, as all features passed.

                    });

                    return zapiPromise;
                },

                executeTestsToCycleComplete = function (response) {
                    responseJson = JSON.parse(response);

                    for (var key in responseJson) {
                        internalExecutionId = key;
                    }

                    console.log(internalExecutionId);
                };

            //FLOW 1 : Assumes issues already exist by name on Jira, grabs them, creates executions for each of them
            //updates them with the GLOBAL result from each feature separately
            //does NOT include a step-by-step breakdown

            //FLOW 2 : It is going to create a Jira Issue for each feature, it will grab the test results on a per step level
            //for each feature, creates an execution against this test case (jira issue) and then proceeds to update
            //every single step with it's results

            if (flow == 1) {
                console.log('flow 1');
                return Zapi.getTestCycles()
                    .then(getTestCyclesComplete, failCallback)
                    .then(createTestCycle)
                    .then(getProtractorTestResults)
                    .then(setUpCompleteZapiFlowOne);
            } else if(flow == 2) {
                console.log('flow 2');

                return Zapi.getTestCycles()
                    .then(getTestCyclesComplete, failCallback)
                    .then(createTestCycle)
                    .then(getProtractorTestResults)
                    .then(setUpCompleteZapiFlowTwo);
            }
        }).then(function () {
            //console.timeEnd('Clean Up and complete Zapi Flow');
            deferred.fulfill();
        });

        console.log('Finished with code:', statusCode);
        console.timeEnd('Tests time');

        return deferred;
    },
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 10 * 60 * 1000,
        print: function(){}
    }
};

if (systemConfig.seleniumAddress) {
    config.seleniumAddress = systemConfig.seleniumAddress;
} else {
    config.directConnect = systemConfig.directConnect;
}

exports.config = config;
