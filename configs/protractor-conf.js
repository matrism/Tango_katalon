'use strict';

var path = require('path'),
    mkdirp = require ('mkdirp'),
    moment = require('moment'),
    now = moment().format('YYYY-MM-DD HH-mm-ss'),
    HtmlReporter = require('protractor-jasmine2-html-reporter'),
    screenShotPath,
    config,
    systemConfig,
    SSReporter_instance;

global.ftf = require('factory-testing-framework');
global._tf_config = require('./config');
global.pages = {};
global.steps = {};
global.hash = {};

require('../helpers/services_helper');

systemConfig = global._tf_config._system_;

if (!systemConfig.noReport) {
    screenShotPath = path.join(__dirname, '../reports/html/');

    if(systemConfig.singleReport) {
        screenShotPath = path.join(screenShotPath, 'single/');
    }
    else {
        screenShotPath = path.join(screenShotPath, now);
    }

    //mkdirp(screenShotPath);

    SSReporter_instance = new HtmlReporter({
        savePath: screenShotPath + '/',
    });
}

config = {
    capabilities: {
        browserName: global._tf_config._system_.browser, //firefox, ie
        chromeOptions: {
            args: ['--test-type']
        }
    },
    specs: ['init.js'],
    onPrepare: function() {
        console.time('Tests time');
        var reporting = systemConfig.reporting,
            pph = require('../helpers/pph'),
            matchers,
            browserWait,
            SpecReporter = require('jasmine-spec-reporter'),
            jasmineReporters,
            asciiPrefixes;

        browser.driver.manage().timeouts().setScriptTimeout(15000);

        browserWait = browser.wait;
        browser.wait = function(testFn, timeout, options) {
            if(timeout === undefined || timeout === null) {
                timeout = systemConfig.wait_timeout;
            }

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

        if (systemConfig.resolution.width && systemConfig.resolution.height) {
            browser.driver.manage().window().setSize(systemConfig.resolution.width, systemConfig.resolution.height);
        }

        asciiPrefixes = {
            success: '[Pass] ',
            failure: '[Fail] ',
            pending: '[Pending] ',
        };

        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'all',
            prefixes: systemConfig.noUnicode? asciiPrefixes : null,
        }));

        if (reporting === 'xml' || reporting === 'all') {
            jasmineReporters = require('jasmine-reporters');

            jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
                consolidateAll: true,
                savePath: 'reports/xml',
                useDotNotation: true
            }));
        }

        if (SSReporter_instance && (reporting === 'html' || reporting === 'all')) {
            jasmine.getEnv().addReporter(SSReporter_instance);
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
        global.pages_path = _tf_config._system_.path_to_pages;
        global.steps_path = _tf_config._system_.path_to_steps;

    },
    onCleanUp: function(statusCode) {
        /*if (typeof process.env.__using_grunt === 'undefined' && SSReporter_instance) {
            try {
                //SSReporter_instance.compileReport();
            } catch(e) {
                //console.error('Error on compileReport: ', e.stack);
            }
        }*/
        console.log('Finished with code:', statusCode);
        console.timeEnd('Tests time');
    },
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 600000,
        print: function(){}
    }
};

if (systemConfig.seleniumAddress) {
    config.seleniumAddress = systemConfig.seleniumAddress;
}
else {
    config.directConnect = systemConfig.directConnect;
}

exports.config = config;
