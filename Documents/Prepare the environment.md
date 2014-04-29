##Prepare the environment

###Step 1:
1. Install [node.js](http://nodejs.org/) & [npm](https://www.npmjs.org/)
2. Add npm to PATH Environment variable.
3. Open CMD/Bash.
4. Navigate to the test project's folder
5. Run `npm install –g protractor` to install ProtractorJS
6. Run `npm install -g selenium-webdriver` to install Selenium-Webdriver
Jenkins
7. Run `npm install -g jasmine-reporters` to install reports feature for Jenkins
8. Run `npm install -g mkdirp` to install helper package
9. Run `npm install -g path` to install helper package
10. Run `npm install -g underscore` to install helper package
11. Run `npm install -g bower` - to install bower package manager
grunt-protractor-runner package manager
12. Download [`webdriver.ie.driver`](http://docs.seleniumhq.org/download/) to make it possible run tests on ie (only for Windows).
Please make sure that this is available on your $PATH (or %PATH% on Windows) in order for the IE Driver to work as expected.
(Maybe you should run next command: `java -jar path\to\selenium-server-standalone-2.40.0.jar -Dwebdriver.ie.driver="path\to\IEDriverServer.exe"`)

###Step 1a:
1. If project doesn't have file `package.json` - run `npm init` - initiating package.json and follow all questions.
2. If project doesn't have file `bower.json` - run `bower init` - initiating bower.json and follow all questions.

###Step 2:
- Add dependency to package.json

```js 
  "dependencies": { 
        "protractor"        : "latest",
        "jasmine-reporters" : "latest",
        "underscore"        : "latest",
        "mkdirp"            : "latest",
        "path"              : "latest"
  },
```

- Add dependency to bower.json

```js 
"dependencies": {
    "factory-testing-framework": "git@github.com:wmgdsp/factory-testing-framework#master"
  }
```

Be sure you have ssh-configured [access to github repo](https://help.github.com/articles/generating-ssh-keys).

###Step 3:
1. `npm install` - installing dependency modules
2. `bower install` - installing bower dependency modules

###Step 4:
1. Define framework object in `configs/protractor-conf.js`:
```js
    global.ftf = require("../bower_components/factory-testing-framework");
```

###Step 4:
1. Run `npm update` - adding dependencies
2. Run `bower update` - adding bower dependencies
3. Run `webdriver-manager update` - installing selenium standalone server and chromedriver
4. Run `webdriver-manager start` - starting selenium standalone server

###Step 5:
- Run tests with command `start.sh`.

We recommend to use Jetbrains Webstorm or Oracle Netbeans IDE, but you are free to use any IDE that you like, even RubyMine.
