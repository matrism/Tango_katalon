##Prepare the environment for CucumberJS

* To install CucumberJS environment (for cucumber-protractor-tests), follow `Common` and `CucumberJS` only Steps and Substeps

###Step 1:
1. Install [node.js](http://nodejs.org/) & [npm](https://www.npmjs.org/)
2. Open CMD/Bash
3. Go to the test project's folder
4. Run `npm install –g protractor` to install ProtractorJS
5. Run `npm install selenium-webdriver` to install Selenium-Webdriver
6. Run `npm install -g cucumber` to install CucumberJS
7. Run `npm install -g grunt-cli` to install GruntJS
8. Run `npm install -g grunt-cucumber` to install grunt-cucumber 
9. Run `npm install -g expect.js` to install expect.js 
10. If project doesn't have file `package.json` - run `npm init` - initiating package.json and follow all questions.

###Step 2:
11. Add dependeny to package.json

```js 
    "dependencies": { 
        "selenium-webdriver": "~2.40.0", 
        "protractor": "latest", 
        "cucumber": "latest", 
        "expect.js": "latest", 
        "grunt-cucumber": "latest", 
        "grunt": "^0.4.4" 
    },
```

###Step 3:
12. `npm install` - installing dependency modules

###Step 4:
13. Create Gruntfile.js file in the root directory with next content:

```js
    module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cucumberjs: {
            // put your `.feature` files to this directory
            src: 'features',
            options: {
                // put your `.js` files with step definitions into this folder
                steps: "features/step_definitions",
                // output format
                format: "pretty",
                // define tags for tests to be run
                tags: "@moreFeatures,@again"
            }
          }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-cucumber');
    // Default task(s).
    grunt.registerTask('default', ['cucumber']);
};
```

###Step 5:
12. Run `npm update` - adding dependencies
13. Run `webdriver-manager update` - installing selenium standalone server and chromedriver
14. Run `webdriver-manager start` - starting selenium standalone server

We recommend to use Jetbrains Webstorm or Oracle Netbeans IDE, but you are free to use any IDE that you like, even RubyMine.
