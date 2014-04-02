var ScreenShotReporter = require("protractor-screenshot-reporter-with-postprocessing");
var path = require("path");

global.ftf = require("../bower_components/factory-testing-framework");
global._tf_config = require("./config"); 

global.pages = {};
global.steps = {};

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",

  capabilities: {
    "browserName": _tf_config._system_.browser //firefox, ie
  },

  specs: ["../tests/e2e/**/*.js"],

  
  onPrepare: function() {

    browser.driver.manage().timeouts().setScriptTimeout(5000);
    
    if (_tf_config._system_.resolution.width && _tf_config._system_.resolution.height)
        browser.driver.manage().window().setSize(_tf_config._system_.resolution.width, _tf_config._system_.resolution.height);
    
    if (typeof _tf_config._system_.reporting !== "undefined") {
        if (_tf_config._system_.reporting === "xml") {
            require("jasmine-reporters");
            jasmine.getEnv().addReporter(
                new jasmine.JUnitXmlReporter("reports/xml", true, true)
            );
    
        }

        if (_tf_config._system_.reporting === "html") {
            jasmine.getEnv().addReporter(
                new ScreenShotReporter({
                    baseDirectory: "reports/html"
                })
            );

        }
    
    }
  },  
  jasmineNodeOpts: {
    showColors: true
  }
};
