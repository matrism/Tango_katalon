'use strict';

var Zapi = function () {
    var BASE_URL = 'https://jira.wmg.com',
        ZAPI_URL = BASE_URL + '/rest/zapi/latest/',
        projectId,
        versionId = '-1',
        projectName = 'WC',
        fs = require('fs'),
        path = require('path'),
        tgRequest = require('../helpers/tgRequest');

    this.onCleanUp = function (testCycleName, flow, screenShotPath) {
        var deferred = protractor.promise.defer();
        var Zapi = this;

        testCycleName = testCycleName.replace('{1}', moment().format('YYYY-MM-DD'));

        browser.getProcessedConfig().then(function (config) {
            var capabilities = config.capabilities.tags,
                issueName = Array.isArray(capabilities) ? capabilities[0] : capabilities,
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

                    if (responseJson['-1'] === undefined) {
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

                            if (featureName) {
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

                                localFeature.key = localFeature.key.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })

                                try {
                                    var tagNames = featureName.split('. ')[1].split(': ')[1].split('.')[0].split(',');
                                    for (var j = 0; j < tagNames.length; j++) {
                                        localFeature.tagNames.push(tagNames[j].match('[a-zA-Z0-9]*-[a-zA-Z0-9]*')[0]);
                                    }
                                } catch (e) {
                                    //do nothing
                                }

                                for (var spec = 0; spec < featureFileSpecs.length; spec++) {

                                    var subFeature = featureFileSpecs[spec],
                                        subFeatureName = subFeature.fullName,
                                        subFeaturePassed = (subFeature.status == 'passed'),
                                        parts = subFeatureName.split(':');

                                    var subLocalFeature = {
                                        name: parts[3],
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

                                    if (!subFeaturePassed) {
                                        localFeature.passed = false;
                                    }

                                    localFeature.steps.push(subLocalFeature);

                                }

                                if (localFeature.steps.length > 0) {
                                    if (localFeature.steps[0].name != '  User is logged in') {
                                        features.push(localFeature);
                                    }
                                }
                            }
                        }
                        var scriptFeature = {},
                            scriptPassed = true;

                        for (var j = 0; j < features.length; j++) {
                            var feature = features[j];

                            if (!feature.passed) {
                                scriptPassed = false;
                            }

                            if (_.isEmpty(scriptFeature)) {
                                scriptFeature = feature;

                                if (j == (features.length - 1)) {
                                    scriptFeature.passed = scriptPassed;
                                    scriptFeatures.push(scriptFeature);
                                }
                            } else {
                                var steps = feature.steps,
                                    scriptSteps = scriptFeature.steps;

                                if (j < features.length - 1) {

                                    var nextFeature = features[j + 1];
                                    if (scriptFeature.key != nextFeature.key) {

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
                                    if (j == (features.length - 1)) {
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
                            .then(function () {
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
                            .then(function () {
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
                                        testStepBug = {},
                                        nameParts = feature.name.split('Tags:'),
                                        componentArray = nameParts[1].split('.'),
                                        componentNames = componentArray[0].split(', '),
                                        testFullName = feature.key;

                                    componentNames.forEach(function (comp) {
                                        components.forEach(function (component) {
                                            var componentHash = '\'' + component + '\'';
                                            comp.replace(' ', '');
                                            if (comp === componentHash) {
                                                componentName = component;
                                            }
                                        });
                                    });

                                    switch (componentName) {
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
                                                    bugFound = false,
                                                    linkedIssue;

                                                if (!feature.passed) {
                                                    feature.bugsCreated = [];
                                                }

                                                testSteps.forEach(function (localTestStep) {

                                                    if (localTestStep.step) {
                                                        if (!localTestStep.step.passed) {
                                                            console.log('Not passed step found, creating bug and linking ...');

                                                            if (!bugFound) {
                                                                if (_.isEmpty(testStepBug)) {
                                                                    testStepBug = localTestStep;
                                                                } else {
                                                                    if (testStepBug.step.severity == 'minor') {
                                                                        if (localTestStep.step.severity == 'major') {
                                                                            testStepBug = localTestStep;
                                                                        } else if (localTestStep.step.severity == 'critical') {
                                                                            testStepBug = localTestStep;
                                                                            bugFound = true;
                                                                        }
                                                                    } else if (testStepBug.step.severity == 'major') {
                                                                        if (localTestStep.step.severity == 'critical') {
                                                                            testStepBug = localTestStep;
                                                                            bugFound = true;
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

                                                if (!_.isEmpty(testStepBug)) {
                                                    var summary = 'Test Bug through Jira API - linked to ' + testStepBug.step.name + ' --- ' + feature.key,
                                                        foundTestBug = false;

                                                    projectTestBugs.forEach(function (testBug) {
                                                        if (!foundTestBug && (testBug.summary == summary)) {
                                                            linkedIssue = {
                                                                id: testBug.id,
                                                                key: testBug.key,
                                                                self: testBug.self
                                                            };
                                                            feature.bugsCreated.push(linkedIssue);
                                                            foundTestBug = true;
                                                        }
                                                    });

                                                    if (!foundTestBug && systemConfig.bugLabel) {
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

                                                testStepResultPromise.fulfill();

                                                return testStepResultPromise;
                                            }, failCallback)
                                            .then(function () {
                                                if (feature.bugsCreated && feature.bugsCreated.length > 0) {
                                                    console.log('Prepare to link bugs...');
                                                    return Zapi.bulkUpdateExecutionDefects(feature.bugsCreated, jiraExecutionId)
                                                        .then(function (response) {
                                                            console.log('Succesfully linked defects (bugs created) to the execution with ID: ' + jiraExecutionId);
                                                        }, failCallback)
                                                        .then(function () {
                                                            return Zapi.updateTestStepResult(testCaseId, jiraExecutionId, testStepBug, feature, feature.bugsCreated);
                                                        })
                                                        .then(function () {
                                                            return Zapi.updateAttachment(testStepBug.resultStep.id, path.join(screenShotPath, testStepBug.step.filename));
                                                        });
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
                                                    bugFound = false,
                                                    linkedIssue;

                                                if (!feature.passed) {
                                                    feature.bugsCreated = [];
                                                }

                                                testSteps.forEach(function (localTestStep) {

                                                    if (!localTestStep.step.passed) {
                                                        console.log('Not passed step found, creating bug and linking ...');

                                                        if (!bugFound) {
                                                            if (_.isEmpty(testStepBug)) {
                                                                testStepBug = localTestStep;
                                                            } else {
                                                                if (testStepBug.step.severity == 'minor') {
                                                                    if (localTestStep.step.severity == 'major') {
                                                                        testStepBug = localTestStep;
                                                                    } else if (localTestStep.step.severity == 'critical') {
                                                                        testStepBug = localTestStep;
                                                                        bugFound = true;
                                                                    }
                                                                } else if (testStepBug.step.severity == 'major') {
                                                                    if (localTestStep.step.severity == 'critical') {
                                                                        testStepBug = localTestStep;
                                                                        bugFound = true;
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

                                                if (!_.isEmpty(testStepBug)) {
                                                    var summary = 'Test Bug through Jira API - linked to ' + testStepBug.step.name + ' --- ' + feature.key,
                                                        foundTestBug = false;

                                                    projectTestBugs.forEach(function (testBug) {
                                                        if (!foundTestBug && (testBug.summary === summary)) {
                                                            linkedIssue = {
                                                                id: testBug.id,
                                                                key: testBug.key,
                                                                self: testBug.self
                                                            };
                                                            feature.bugsCreated.push(linkedIssue);
                                                            foundTestBug = true;
                                                        }
                                                    });

                                                    if (!foundTestBug && systemConfig.bugLabel) {
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

                                                testStepResultPromise.fulfill();

                                                return testStepResultPromise;
                                            }, failCallback)
                                            .then(function () {
                                                if (feature.bugsCreated && feature.bugsCreated.length) {
                                                    return Zapi.bulkUpdateExecutionDefects(feature.bugsCreated, jiraExecutionId)
                                                        .then(function (response) {
                                                            console.log('Succesfully linked defects (bugs created) to the execution with ID: ' + jiraExecutionId);
                                                        }, failCallback)
                                                        .then(function () {
                                                            return Zapi.updateTestStepResult(testCaseId, jiraExecutionId, testStepBug, feature, feature.bugsCreated);
                                                        })
                                                        .then(function () {
                                                            return Zapi.updateAttachment(testStepBug.resultStep.id, path.join(screenShotPath, testStepBug.step.filename));
                                                        });
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
            } else if (flow == 2) {
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

        return deferred;
    };

    this.createTestCycle = function (name) {
        var obj = {
            name: name,
            environment: "qa",
            projectId: this.projectId || '14306',
            versionId: versionId
        };

        return this.post(ZAPI_URL + 'cycle', null, obj);
    };

    this.getTestStepsForIssue = function (issueId) {
        return this.get(ZAPI_URL + 'teststep/' + issueId);
    };

    this.createJiraIssue = function (name, jiraComponentName) {
        var createUrl = BASE_URL + '/rest/api/2/issue',
            obj = {
                'fields': {
                    'project': {
                        'id': this.projectId || '14306'
                    },
                    'summary': name,
                    'issuetype': {
                        'id': '10302'
                    },
                    'reporter': {
                        'name': 'Constantine.Crismaru'
                    },
                    'components': [
                        {'name': jiraComponentName}
                    ],
                    'labels': [
                        'auto_created'
                    ],
                    'description': 'Optional Description.'
                }
            };

        return this.post(createUrl, null, obj, 201);
    };

    this.updateJiraIssue = function (name) {
        var updateUrl = BASE_URL + '/rest/api/2/issue/' + name,
            obj = {
                'update': {
                    'assignee': [{'set':[{'name': 'works'}]}]
                }
            };

        console.log(updateUrl);

        return this.put(updateUrl, null, {"update": {"components": [{"add":{"name": "works"}}]}});
    };

    this.createJiraBug = function (issueId, feature, testStep, bugLabel) {
        var createUrl = BASE_URL + '/rest/api/2/issue',
            obj = {
                'fields': {
                    'project': {
                        'id': this.projectId || '14306'
                    },
                    'summary': 'Test Bug through Jira API - linked to ' + testStep.step.name + ' --- ' + feature.key,
                    'issuetype': {
                        'id': '1'
                    },
                    'reporter': {
                        'name': 'Constantine.Crismaru'
                    },
                    'labels': [
                        testStep.step.severity,
                        bugLabel
                    ],
                    /*                    'severity': {
                     'name': testStep.step.severity
                     },*/
                    'description': 'Optional Description.'
                }
            };

        return this.post(createUrl, null, obj, 201);
    };

    /*    this.getAllProjects = function () {
     console.log('---getAllProjects---');
     var getProjectUrl = BASE_URL + '/rest/api/2/project';
     return this.get(getProjectUrl);
     };*/

    this.createTestStepForIssue = function (issueId, testStep, orderId) {
        var testStepUrl = ZAPI_URL + 'teststep/' + issueId,
            testStepObject = {
                step: testStep.name,
                orderId: orderId,
                result: 'Successfully completes.'
            };

        return this.post(testStepUrl, null, testStepObject);
    };

    this.getIssueId = function (issueName) {
        return this.get(BASE_URL + '/rest/api/2/issue/' + issueName);
    };

    this.getTestCycles = function () {
        return this.get(ZAPI_URL + 'cycle?projectId=' + (this.projectId || '14306'));
    };

    this.getTestCases = function () {
        return this.get(BASE_URL + '/rest/api/2/search?jql=project=' + projectName + '%20and%20reporter=Constantine.Crismaru%20and%20issuetype%20%3D%2010302&startAt=0&maxResults=1000');
    };

    this.getTestBugs = function () {
        return this.get(BASE_URL + '/rest/api/2/search?jql=project=' + projectName + '%20and%20reporter=Constantine.Crismaru%20and%20issuetype%20%3D%201&startAt=0&maxResults=1000');
    };

    this.getTestStepResultsForExecution = function (jiraExecutionId) {
        return this.get(ZAPI_URL + 'stepResult?executionId=' + jiraExecutionId);
    };

    this.bulkUpdateExecutionDefects = function (createdBugs, jiraExecutionId) {
        var updateObject = {
            executions: [ jiraExecutionId ],
            defects: [],
            detailedResponse: false
        };

        createdBugs.forEach(function (createdBug) {
            updateObject.defects.push(createdBug.key)
        });

        return this.put(ZAPI_URL + 'execution/updateWithBulkDefects', null, updateObject, 200);
    };

    this.updateTestStepResult = function (jiraIssueId, jiraExecutionId, testStepObject, feature, linkedIssue) {
        var updateObject = {
            id: testStepObject.resultStep.id,
            issueId: jiraIssueId,
            executionId: jiraExecutionId,
            comment: feature.name,
            status: testStepObject.step.passed ? 1 : 2
        };

        if (linkedIssue) {
            updateObject.updateDefectList = true;
            updateObject.defectList = [ linkedIssue.key ];
        }

        return this.put(ZAPI_URL + 'stepResult/' + testStepObject.resultStep.id, null, updateObject);
    };

    this.updateTestExecutionStatus = function (passed, execId) {
        return this.put(ZAPI_URL + 'execution/' + execId + '/execute', null, { comment: 'Automated Execution.', status: passed ? 1 : 2});
    };

    this.executeTestToTestCycle = function (cycleId, issueId) {
        var obj = {
            cycleId: cycleId,
            issueId: issueId,
            projectId: this.projectId || '14306',
            versionId: versionId
        };

        return this.post(ZAPI_URL + 'execution/', null, obj);
    };

    this.updateTestExecution = function (executionId, status, comment) {
        var obj = {
            executionId: executionId,
            status: status,
            comment: comment
        };

        return this.put(ZAPI_URL + 'execution/' + executionId + '/execute', null, obj);
    };

    this.getAttachments = function (entityId) {
        var entityType = 'TESTSTEPRESULT';
        return this.get(ZAPI_URL + 'attachment/attachmentsByEntity?entityId=' + entityId + '&entityType=' + entityType);
    };

    this.addAttachment = function (entityId, file) {
        var entityType = 'TESTSTEPRESULT',
            formData = {
                file: {
                    value: fs.createReadStream(file),
                    options: {
                        filename: path.basename(file),
                        contentType: 'image/' + path.extname(file)
                    }
                }
            };

        return this.postFile(ZAPI_URL + 'attachment/?entityId=' + entityId + '&entityType=' + entityType, null, formData);
    };

    this.deleteAttachment = function (id) {
        return this.delete(ZAPI_URL + 'attachment/' + id);
    };

    this.deleteAttachmentsByStep = function (stepId) {
        var self = this,
            promise = this.getAttachments(stepId);

        promise.then(function(response) {
            var responseJson = JSON.parse(response);
            responseJson.data.forEach(function (file) {
                self.deleteAttachment(file.fileId);
            })
        });
        return promise;
    };

    this.updateAttachment = function (stepId, file) {
        var self = this;
        return this.deleteAttachmentsByStep(stepId).then(function() {
            return self.addAttachment(stepId, file);
        });
    };

    this.get = function (url, qs) {
        var deferred = protractor.promise.defer();

        tgRequest.get(url, qs, function (error, response, body) {
            if(response) {
                var status = response.statusCode ? response.statusCode : null;

                if (error || status !== 200) {
                    deferred.reject(status, body);
                } else {
                    deferred.fulfill(body);
                }
            }
        });

        return deferred.promise;
    };

    this.postFile = function (url, qs, formData, successfulStatusCode) {
        var deferred = protractor.promise.defer();

        tgRequest.postFile(url, qs, formData, function (error, response, body) {
            if(response) {
                var status = response.statusCode,
                    success = successfulStatusCode || 200;

                if (error || status !== success) {
                    deferred.reject(status, body);
                } else {
                    deferred.fulfill(body);
                }
            }
        });

        return deferred.promise;
    };

    this.post = function (url, qs, obj, successfulStatusCode) {
        var deferred = protractor.promise.defer();

        tgRequest.post(url, qs, obj, function (error, response, body) {
            if(response) {
                var status = response.statusCode,
                    success = successfulStatusCode || 200;

                if (error || status !== success) {
                    console.log(response);
                    console.log(body);
                    deferred.reject(status, body);
                } else {
                    deferred.fulfill(body);
                }
            }
        });

        return deferred.promise;
    };

    this.put = function (url, qs, obj, successfulStatusCode) {
        var deferred = protractor.promise.defer();

        tgRequest.put(url, qs, obj, function (error, response, body) {
            if(response) {
                var status = response.statusCode,
                    success = successfulStatusCode || 200;

                if (error || status !== success) {
                    deferred.reject(status, body);
                } else {
                    deferred.fulfill(body);
                }
            }
        });

        return deferred.promise;
    };

    this.delete = function (url, successfulStatusCode) {
        var deferred = protractor.promise.defer();

        tgRequest.delete(url, null, function (error, response) {
            var status = response.statusCode,
                success = successfulStatusCode || 200;

            if (error || status !== success) {
                deferred.reject(status);
            } else {
                deferred.fulfill(status);
            }
        });

        return deferred.promise;
    };

    this.setProjectId = function (projectId) {
        this.projectId = projectId;
    };
};

module.exports = new Zapi();
