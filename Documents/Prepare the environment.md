##Prepare the environment

* To install ProtractorJS environment (for protractor_tests), follow `Common` and `ProtractorJS` only Steps and Substeps
* To install CucumberJS environment (for cucumber-protractor-tests), follow `Common` and `CucumberJS` only Steps and Substeps

###Step 1:
1. Install node.js & npm
2. Open CMD/Bash
3. Go to the test project's folder
4. Run `npm install –g protractor` to install ProtractorJS
5. Run `npm install selenium-webdriver` to install Selenium-Webdriver
6. Run `npm install -g grunt` to install GruntJS
7. Run `npm install -g grunt-cli` to install GruntJS CLI
8. Run `npm install -g grunt-protractor-runner` to install Module to allow run tests from Jenkins

###Step 1a:
9. If project doesn't have file `package.json` - run `npm init` - initiating package.json and follow all questions.

###Step 2:
11. Add dependeny to package.json
```js 
  "dependencies": { 
      "selenium-webdriver": "~2.40.0", 
      "protractor": "latest",
      "jasmine-reporters": "latest",
      "grunt": "latest",
      "grunt-protractor-runner": "latest"

  },
```

###Step 3:
12. `npm install` - installing dependency modules

###Step 4:
13. Create Gruntfile.js file in the root directory with next content:

```js
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        protractor: {
            options: {
                configFile: "conf/protractor-conf.js", // Default config file
                keepAlive: true,
                noColor: false,
                args: {}
            },
            run: {}
        }
    });

    grunt.loadNpmTasks('grunt-protractor-runner'); 
    grunt.registerTask('tests', ['protractor:run']);
};
```

###Step 5:
14. Run `npm update` - adding dependencies
15. Run `webdriver-manager update` - installing selenium standalone server and chromedriver
16. Run `webdriver-manager start` - starting selenium standalone server

We recommend to use Jetbrains Webstorm or Oracle Netbeans IDE, but you are free to use any IDE that you like, even RubyMine.
