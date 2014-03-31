###conf/protractor-conf.js

####I. Including modules.

- ScreenShotReportrer - module for creating reports with screenshots
- path - module that allows reporter to create folders

```js
var ScreenShotReporter = require("protractor-screenshot-reporter-with-postprocessing");
var path = require("path");
```

####II. Including framework as a global variable `ftf`
From `/bower_components/` directory

```js
global.ftf = require("../bower_components/factory-testing-framework");
```

####III. Including config object and assigning it to `_tf_config` global variable

```js
global._tf_config = require("./config"); 
```

####IV. Creating Pages and Steps global objects

* Pages and Steps objects are created for objects in them were created only once (singletones)
* `pages` contain all page objects
* `steps` contain all step objects

```js
global.pages = {};
global.steps = {};
```
####============= Protractor Config ===========
####V. Start of Protractor configuration object

```js
exports.config = {
```

####VI. The address of a running selenium server.

```js
  seleniumAddress: "http://localhost:4444/wd/hub",
```

####VII. Capabilities to be passed to the webdriver instance.

```js
  capabilities: {
    "browserName": "chrome" //firefox, ie
  },
```

####VIII. Spec patterns are relative to the location of the spec file. They may include glob patterns.


```js
  specs: ["../tests/e2e/p*/*.js"],
```

####IX. `onPrepare` - initial function of Protractor tests.

```js
  onPrepare: function() {
```

####X. Setting timeout for executing testing scripts inside browser (e.g. for `browser.executeScript` command)

```js
    browser.driver.manage().timeouts().setScriptTimeout(5000);
```

####XI. Configuring browser window resolution

```js
    if (_tf_config.resolution.width && _tf_config.resolution.height)
        browser.driver.manage().window().setSize(_tf_config.resolution.width, _tf_config.resolution.height);
```

####XII. Creating and configuring reporters
```js
    if (typeof _tf_config.reporting !== "undefined") {
        if (_tf_config.reporting == "xml") {
            
            // The require statement must be down here, since jasmine-reporters
            // needs jasmine to be in the global and protractor does not guarantee
            // this until inside the onPrepare function.
            require("jasmine-reporters");
            jasmine.getEnv().addReporter(
                new jasmine.JUnitXmlReporter("xml_reports", true, true)
            );
    
        }

        if (_tf_config.reporting == "html") {
            // Screenshots reports with HTML and JSON
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
```

####XII. End of `onPrepare` function

```js
  },
```

####XIII. Options to be passed to Jasmine-node.

```js
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
```

####XIV. End of Protractor configuration object

```js
};
```
####============= End of Protractor Config ==========