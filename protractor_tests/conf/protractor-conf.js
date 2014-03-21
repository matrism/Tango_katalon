// An example configuration file.

var ScreenShotReporter = require('protractor-screenshot-reporter-with-postprocessing');
var path = require('path');

exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome' //firefox, ie
  },

  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  specs: ['../tests/e2e/**/*.js'],
  
  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  suites: {
      dashboard: '../tests/e2e/dashboard/**/*.js',
      provision_1: "../tests/e2e/provisioning_step_1/**/*Spec.js"
  },
  
  onPrepare: function() {

    // The require statement must be down here, since jasmine-reporters
    // needs jasmine to be in the global and protractor does not guarantee
    // this until inside the onPrepare function.

    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
        new jasmine.JUnitXmlReporter('xml_reports', true, true)
    );
    
    // Screenshots reports with HTML and JSON
    jasmine.getEnv().addReporter(
        new ScreenShotReporter({
            baseDirectory: 'screenshot_reports',
            metaDataBuilder: function(spec, descriptions, results, capabilities){
                var metaData = {
                    description: descriptions.join('|')
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
                    totalDateString = currentDate.getDate()+'-'+ monthMap[currentDate.getMonth()]+ '-'+(currentDate.getYear()+1900) + 
                                          '-'+ currentTimeInHours+'h-' + currentDate.getMinutes()+'m';

                return path.join(totalDateString,capabilities.caps_.browserName, descriptions.join('-'));
            }
        })
    );

  },  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true // Use colors in the command line report.
  }
};
