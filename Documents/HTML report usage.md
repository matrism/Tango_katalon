##HTML reporter usage
-------------------------------

### Reporter for Protractor with HTML and JSON Reports and Screenshots

This reporter is the module of Factory Testing Framework

### Usage
In your Protractor configuration file, register helper in Jasmine:
```js
global.ftf = require("../bower_components/factory-testing-framework");
...
var ScreenShotReporter = ftf.htmlReporter;

    exports.config = {
       // your config here ...
    
       onPrepare: function() {
          ...
          // Add a screenshot reporter and store screenshots to `reports/html`:
        if (reporting === "html" || reporting === "all") {
            jasmine.getEnv().addReporter(
                new ScreenShotReporter({
                    baseDirectory: "reports/html"
                })
            );
        }

       }
    }
```

### Postprocess Meta Data

To switch reporter on, use cli parameter `--reporting=all` or `--reporting=html`. First one will make XML reporting module work too.

On running the task reporter will be generating json and png files for each test and also html page showing the results.

Example of the HTML result reporter:

![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/html_report2.png "HTML report")