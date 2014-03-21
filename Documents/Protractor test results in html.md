Protractor test results in html
-------------------------------

### Reporter for Protractor with HTML and JSON Reports and Screenshots

Node module [protractor-screenshot-reporter-with-postprocessing](https://github.com/jintoppy/protractor-screenshot-reporter-with-postprocessing) can generate HTML and json reporters with links to screenshots.

### Usage
To install reporter add dependeny to package.json

      "dependencies": {
          ...
          "protractor-screenshot-reporter-with-postprocessing": "latest"
      }

In your Protractor configuration file, register `protractor-screenshot-reporter-with-postprocessing` in Jasmine:

    var ScreenShotReporter = require('protractor-screenshot-reporter-with-postprocessing');

    exports.config = {
       // your config here ...
    
       onPrepare: function() {
          ...
          // Add a screenshot reporter and store screenshots to `result_reports`:
          jasmine.getEnv().addReporter(new ScreenShotReporter({
             baseDirectory: 'result_reports'
          }));
       }
    }


### Postprocess Meta Data

On running the task reporter will be generating json and png files for each test and also html page showing the results.
