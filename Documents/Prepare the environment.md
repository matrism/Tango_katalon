##Prepare the environment

###Step 1:
1. Install [node.js](http://nodejs.org/) & [npm](https://www.npmjs.org/)
2. Open CMD/Bash
3. Go to the test project's folder
4. Run `npm install –g protractor` to install ProtractorJS
5. Run `npm install -g selenium-webdriver` to install Selenium-Webdriver
Jenkins
6. Run `npm install -g jasmine-reporters` to install reports feature for Jenkins
7. Run `npm install -g jasminewd` to install helper package
8. Run `npm install -g path` to install helper package
9. Run `npm install -g underscore` to install helper package
10. Run `npm install -g protractor-screenshot-reporter-with-postprocessing` to install helper package
11. Run `npm install -g bower` - to install bower package manager
12. Run `npm install -g grunt` - to install grunt 
13. Run `npm install -g grunt-protractor-runner` - to install grunt-protractor-runner package manager
14. Download [`webdriver.ie.driver`](http://docs.seleniumhq.org/download/) to make it possible run tests on ie (only for Windows).
Please make sure that this is available on your $PATH (or %PATH% on Windows) in order for the IE Driver to work as expected.
(Maybe you should run next command: `java -jar path\to\selenium-server-standalone-2.40.0.jar -Dwebdriver.ie.driver="path\to\IEDriverServer.exe"`)

###Step 1a:
1. If project doesn't have file `package.json` - run `npm init` - initiating package.json and follow all questions.
2. If project doesn't have file `bower.json` - run `bower init` - initiating bower.json and follow all questions.

###Step 2:
1. Add dependency to package.json
```js 
  "devDependencies": {
        "grunt": "latest",
        "grunt-protractor-runner": "latest"
  },
  "dependencies": { 
        "selenium-webdriver": "~2.40.0", 
        "protractor": "latest",
        "jasmine-reporters": "latest",
        "jasminewd": "latest",
        "path": "latest",
        "protractor-screenshot-reporter-with-postprocessing": "latest",
        "underscore": "latest",
        "bower": "latest"
  },
```

2. Add dependency to package.json
```js 
  "dependencies": {
      "factory-testing-framework": "https://github.com/wmgdsp/factory-testing-framework.git#master"
  }
```

###Step 3:
1. `npm install` - installing dependency modules
2. `bower install` - installing bower dependency modules

###Step 4:
1. Define framework object in `conf/protractor-conf.js`:
```js
    global.ftf = require("../bower_components/factory-testing-framework");
```

###Step 4:
1. Run `npm update` - adding dependencies
2. Run `bower update` - adding bower dependencies
3. Run `webdriver-manager update` - installing selenium standalone server and chromedriver
4. Run `webdriver-manager start` - starting selenium standalone server

We recommend to use Jetbrains Webstorm or Oracle Netbeans IDE, but you are free to use any IDE that you like, even RubyMine.
