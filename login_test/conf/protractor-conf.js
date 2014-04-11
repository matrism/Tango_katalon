var path = require("path"),
    ScreenShotReporter,
    is_old;

global.ftf = require("../bower_components/factory-testing-framework");
global._tf_config = require("./config"); 
ScreenShotReporter = ftf.htmlReporter;

global.pages = {};
global.steps = {};

exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    capabilities: {
        "browserName": _tf_config._system_.browser //firefox, ie
    },
    specs: ["init.js"],
    onPrepare: function() {
        var reporting = _tf_config._system_.reporting;
        browser.driver.manage().timeouts().setScriptTimeout(5000);
    
        if (_tf_config._system_.resolution.width && _tf_config._system_.resolution.height)
            browser.driver.manage().window().setSize(_tf_config._system_.resolution.width, _tf_config._system_.resolution.height);
    
        if (reporting === "xml" || reporting === "all") {
            require("jasmine-reporters");
            jasmine.getEnv().addReporter(
                new jasmine.JUnitXmlReporter("reports/xml", true, true)
            );
        }

        if (reporting === "html" || reporting === "all") {
            jasmine.getEnv().addReporter(
                new ScreenShotReporter({
                    baseDirectory: "reports/html"
                })
            );
        }
    },  
    jasmineNodeOpts: {
        showColors: true
    }
};