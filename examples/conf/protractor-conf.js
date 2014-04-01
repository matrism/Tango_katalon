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
                new jasmine.JUnitXmlReporter("xml_reports", true, true)
            );
    
        }

        if (_tf_config._system_.reporting === "html") {
            jasmine.getEnv().addReporter(
                new ScreenShotReporter({
                    baseDirectory: "screenshot_reports",
                    metaDataBuilder: function(spec, descriptions, results, capabilities){
                        var metaData = {
                            description: descriptions.join("|")
                            , passed: results.passed()
                            , os: capabilities.caps_.platform
                            , browser: {
                                name: capabilities.caps_.browserName
                                , version: capabilities.caps_.version
                            }
                          };

                        if(results.items_.length > 0) {
                            var result = results.items_[0];
                            metaData.message = result.message;
                            metaData.trace = result.trace.stack;
                        }

                        return metaData;

                     },
                     pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {

                        var monthMap = {
                          "1": "Jan",
                          "2": "Feb",
                          "3": "Mar",
                          "4": "Apr",
                          "5": "May",
                          "6": "Jun",
                          "7": "Jul",
                          "8": "Aug",
                          "9": "Sep",
                          "10": "Oct",
                          "11": "Nov",
                          "12": "Dec"
                        };

                        var currentDate = new Date(),
                            currentHoursIn24Hour = currentDate.getHours(),
                            currentTimeInHours = currentHoursIn24Hour>12? currentHoursIn24Hour-12: currentHoursIn24Hour,
                            totalDateString = currentDate.getDate()+"-"+ monthMap[currentDate.getMonth()]+ "-"+(currentDate.getYear()+1900) + 
                                                  "-"+ currentTimeInHours+"h-" + currentDate.getMinutes()+"m";

                        return path.join(totalDateString,capabilities.caps_.browserName, descriptions.join("-"));
                    }
                })
            );

        }
    
    }
  },  
  jasmineNodeOpts: {
    showColors: true
  }
};
