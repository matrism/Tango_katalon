'use strict';

var path = require('path'),
    mkdirp = require ('mkdirp'),
    moment = require('moment'),
    now = moment().format('YYY-MM-DD HH-mm-ss'),
    screenShotPath = path.join(__dirname, '../reports/html/', now),
    config,
    systemConfig,
    ScreenShotReporter,
    SSReporter_instance;

global.ftf = require('factory-testing-framework');
global._tf_config = require('./config');
global.pages = {};
global.steps = {};
global.hash = {};

require('../helpers/services_helper');

systemConfig = global._tf_config._system_;
ScreenShotReporter = global.ftf.htmlReporter;

mkdirp(screenShotPath);
SSReporter_instance = new ScreenShotReporter({
    baseDirectory: screenShotPath
});

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
        var reporting = systemConfig.reporting;
        var matchers;
        browser.driver.manage().timeouts().setScriptTimeout(15000);

        if (systemConfig.resolution.width && systemConfig.resolution.height) {
            browser.driver.manage().window().setSize(systemConfig.resolution.width, systemConfig.resolution.height);
        }

        if (reporting === 'xml' || reporting === 'all') {
            require('jasmine-reporters');
            jasmine.getEnv().addReporter(
                new jasmine.JUnitXmlReporter('reports/xml', true, true)
            );
        }

        if (reporting === 'html' || reporting === 'all') {
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
        jasmine.Matchers.prototype.shouldBePresent = matchers.create('ShouldBePresent');

    },
    onCleanUp: function(statusCode) {
        if (typeof process.env.__using_grunt === 'undefined') {
            try {
                SSReporter_instance.compileReport();
            } catch(e) {
                console.error('Error on compileReport', e.stack);
            }
        }
        console.log('Finished with code:', statusCode);
        console.timeEnd('Tests time');
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 600000
    }
};

if (systemConfig.seleniumAddress) {
    config.seleniumAddress = systemConfig.seleniumAddress;
}
else {
    config.directConnect = true;
    //config.chromeDriver = '../node_modules/protractor/selenium/chromedriver';
}

exports.config = config;
