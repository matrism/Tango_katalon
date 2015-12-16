'use strict';

var path = require('path'),
    glob = require('glob'),
    _ = require('lodash'),
    glob = require('glob'),
    mkdirp = require ('mkdirp'),
    moment = require('moment'),
    now = moment().format('YYYY-MM-DD HH-mm-ss'),
    HtmlReporter = require('protractor-jasmine2-screenshot-reporter'),
    fs = require('fs'),
    screenShotPath,
    tmp = require('tmp'),
    config,
    SSReporter_instance,
    enhanceHtmlReport = require('../tools/enhanceHtmlReport'),
    SnapbackReporter = require('../tools/enhanceHtmlReport/SnapbackReporter'),
    orphanOnErrorReporter = require('../tools/orphanOnErrorReporter'),
    demoReporter = require('../tools/demoReporter'),
    reporterFilePath,
    reporterFileName = 'reporter.htm';

global.ftf = require('factory-testing-framework');
global._tf_config = require('./config');
global.pages = {};
global.steps = {};
global.hash = {};

hash.testVariables = {};

require('../helpers');

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

        browser.driver.manage().timeouts().setScriptTimeout(15000);
        browser.driver.manage().window().maximize();

        browser.driver.manage().window().getSize().then(function (size) {
            if (systemConfig.resolution.width && systemConfig.resolution.height && (size.width < systemConfig.resolution.width || size.height < systemConfig.resolution.height)) {
                browser.driver.manage().window().setSize(systemConfig.resolution.width, systemConfig.resolution.height);

                browser.driver.manage().window().getSize().then(function (size) {
                    console.log('Browser window size:' + JSON.stringify(size));
                });
            } else {
                console.log('Browser window size:' + JSON.stringify(size));
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

        //setTimeout(function () {
        //    if (systemConfig.resolution.width && systemConfig.resolution.height) {
        //        browser.driver.manage().window().setSize(systemConfig.resolution.width, systemConfig.resolution.height);
        //    } else {
        //        browser.driver.manage().window().maximize();
        //    }

        //    browser.driver.manage().window().getSize().then(function (size) {
        //        console.log('')
        //        console.log('Browser size:' + JSON.stringify(size));
        //    });
        //});

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

        if(systemConfig.orphanOnError) {
            jasmine.getEnv().addReporter(orphanOnErrorReporter);
        }

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

        console.log('Finished with code:', statusCode);
        console.timeEnd('Tests time');
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
