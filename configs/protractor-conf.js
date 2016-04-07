'use strict';

require('../helpers');

require('string.prototype.includes');

var path = require('path'),
    glob = require('glob'),
    _ = require('lodash'),
    glob = require('glob'),
    mkdirp = require ('mkdirp'),
    moment = require('moment'),
    now = moment().format('YYYY-MM-DD HH-mm-ss'),
    fs = require('fs'),
    screenShotPath,
    tmp = require('tmp'),
    config,
    orphanOnErrorReporter = require('../tools/orphanOnErrorReporter'),
    demoReporter = require('../tools/demoReporter'),
    zapiReporter = require('../reporter/zapiReporter'),
    stepByStepReporter = require('../tools/stepByStepReporter'),
    unlinkTestRunSnapshots = require('../tools/unlinkTestRunSnapshots'),
    reporterFilePath,
    reporterFileName = 'reporter.htm',
    Zapi = require('./zapi'),
    projectId,
    flow,
    testCycleCliName,
    chromeArgs;

global.ftf = require('factory-testing-framework');
global._tf_config = require('./config');
global.pages = {};
global.steps = {};
global.hash = {};

hash.testVariables = {};

global.systemConfig = global._tf_config._system_;

systemConfig.downloadsDirectoryPath = tmp.dirSync().name;

chromeArgs = [
    'no-sandbox',
    'test-type=browser',
    `window-size=${systemConfig.resolution.width},${systemConfig.resolution.height}`
]

if (systemConfig.persistProfile) {
    chromeArgs.push(`user-data-dir=${process.env.HOME}/.tat/chromeProfile`);
}

if (userConfig) {
    chromeArgs = _.union(chromeArgs, userConfig.chromeArgs);
}

chromeArgs = [
    'no-sandbox',
    'test-type=browser',
    `window-size=${systemConfig.resolution.width},${systemConfig.resolution.height}`
];

if (userConfig) {
    chromeArgs = _.union(chromeArgs, userConfig.chromeArgs);
}

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
            args: chromeArgs,
            prefs: {
                'download': {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': systemConfig.downloadsDirectoryPath
                },
            }
        }
    },

    specs: [
        !systemConfig.interactiveMode ? 'init.js' : 'interactive.js'
    ],

    onPrepare: function() {
        console.time('Tests time');
        var reporting = systemConfig.reporting,
            pph = require('../helpers/pph'),
            testFiles = require('./files.js'),
            matchers,
            browserWait,
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
        systemConfig.path_to_features = testFiles.load().features;

        browser.driver.manage().timeouts().setScriptTimeout(15000);

        /*
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
        */

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

        jasmine.getEnv().addReporter(require('../reporter/shellReporter'));

        if (parseInt(systemConfig.cycle)) {
            jasmine.getEnv().addReporter(zapiReporter);
            zapiReporter.init({
                cycleId: systemConfig.cycle,
                debug: false
            });
        }

        if(systemConfig.orphanOnError) {
            jasmine.getEnv().addReporter(orphanOnErrorReporter);
        }

        jasmine.getEnv().addReporter(stepByStepReporter);

        if (systemConfig.stepByStep) {
            stepByStepReporter.enable();
        }

        /*jasmine.getEnv().addReporter({
            specDone: function () {
                highlightElement.restoreAll().then(null, function (err) {
                    console.error('Ignoring highlightElement.restoreAll error:', err);
                });
            }
        });*/

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
    },
    onCleanUp: function(statusCode) {
        if(statusCode === 0 && systemConfig.saveDiskSpace) {
            unlinkTestRunSnapshots();
        }

        console.log('Finished with code:', statusCode);
        console.timeEnd('Tests time');

        if (parseInt(systemConfig.cycle)) {
            var deferred = protractor.promise.defer();

            zapiReporter.deferred.promise.then(() => {
                deferred.fulfill();
            });

            return deferred;
        }
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
