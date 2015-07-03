"use strict";
var path = require("path"),
    moment,
    ScreenShotReporter, config, SSReporter_instance;

moment = require('moment');
global.ftf = require("../vendor/factory-testing-framework");
global._tf_config = require("./config");
ScreenShotReporter = ftf.htmlReporter;
SSReporter_instance = new ScreenShotReporter({
    baseDirectory: "reports/html/" + moment().format("YYYY-MM-DD HH-mm-ss"),
});

global.pages = {};
global.steps = {};
global.hash = {};

require("../helpers/services_helper");

config = {
    capabilities: {
        "browserName": _tf_config._system_.browser, //firefox, ie
        'chromeOptions': {
            args: ['--test-type']
        }
    },
    specs: ["init.js"],
    onPrepare: function() {
        console.time("Tests time");
        var reporting = _tf_config._system_.reporting;
        var matchers;
        browser.driver.manage().timeouts().setScriptTimeout(15000);

        if (_tf_config._system_.resolution.width && _tf_config._system_.resolution.height)
            browser.driver.manage().window().setSize(_tf_config._system_.resolution.width, _tf_config._system_.resolution.height);

        if (reporting === "xml" || reporting === "all") {
            require("jasmine-reporters");
            jasmine.getEnv().addReporter(
                new jasmine.JUnitXmlReporter("reports/xml", true, true)
            );
        }

        if (reporting === "html" || reporting === "all") {
            jasmine.getEnv().addReporter(SSReporter_instance);
        }

        if (typeof process.env.__using_grunt === "undefined") {
            var spawn = require('child_process').spawn
            var child = spawn("bash", ["grunt","clearReports"]);
//            child.stdout.on('data', function (data) { console.log(data.toString()); });
//            child.stderr.on('data', function (data) { console.log(data.toString()); });
//            child.on('error', function() { console.log(arguments); });
        }
        matchers = new ftf.matchers();
        jasmine.Matchers.prototype.shouldBePresent = matchers.create("ShouldBePresent");

    },
    onCleanUp: function(statusCode) {
        if (typeof process.env.__using_grunt === "undefined") {
            try {
                SSReporter_instance.compileReport();
            } catch(e) {
                console.error("Error on compileReport", e.stack);
            }
        }
        console.log("Finished with code:", statusCode);
        console.timeEnd("Tests time");
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 600000
    }
};

if(_tf_config._system_.seleniumAddress) {
    config.seleniumAddress = _tf_config._system_.seleniumAddress;
}
else {
    config.chromeOnly = true;
    config.chromeDriver = '../node_modules/protractor/selenium/chromedriver';
}

exports.config = config;
