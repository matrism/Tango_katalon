##Comparing ProtractorJS to another webdriverjs-angular and wd-tractor and PageObject-JS

###Contents

1. [Choosing drivers](#choosing_drivers)
2. [Drivers-dependent tools list](#tools_list)
3. [Choosing framework](#choosing_framework)
4. [Conclusion](#conclusion)

<span id="choosing_drivers"><a name="choosing_drivers"></a></span>
####Choosing drivers

Before we start comparing frameworks it is necessary to say that [WebDriver API](http://www.w3.org/TR/2013/WD-webdriver-20130117/) is the interface for interacting with browsers to create automated tests in browser. While investigating this subject, we've found 4 implementations of this API (there can be more, but we didn't meet them when searching through Google, GitHub and StackOverflow):
1. [selenium-webdriver](https://code.google.com/p/selenium/wiki/WebDriverJs),  [npm link](https://www.npmjs.org/package/selenium-webdriver)
2. [webdriverjs](http://www.webdriver.io/), [github](https://github.com/camme/webdriverjs), [npm link](https://www.npmjs.org/package/webdriverjs)
3. [wd](http://admc.io/wd/), [github](https://github.com/admc/wd), [npm link](https://www.npmjs.org/package/wd)
4. [browserstack-webdriver](https://github.com/browserstack/selenium-webdriver-nodejs), [npm link](https://www.npmjs.org/package/browserstack-webdriver)
5. Built-in drivers (e.g. Nightwatch)

Browserstack webdriver - is a full copy of selenium-webdriver. The proof of this can be found in Changes.md file of both modules: [browserstack CHANGE.md](https://github.com/browserstack/selenium-webdriver-nodejs/blob/master/CHANGES.md) and [selenium-webdriver CHANGE.md](https://code.google.com/p/selenium/source/browse/javascript/node/selenium-webdriver/CHANGES.md?r=410f33489469744069bbc3debffcfcfd27f93700). That is why it won't be compared separately.

Criterias to compare
1. Downloads number (for last month, info from npmjs website, info is actual on March 13, 2014)
2. Current version
3. Last update
4. BrowserStack support
5. SauceLabs support

| Criteria   | selenium-webdriver | webdriverjs | wd |
| --- | --- | --- | --- |
| Downloads number (for last month) | 52 698 | 1 602 | 33 216 |
| Current version | 2.40.0 | 1.3.4 | 0.2.12 |
| Last update | Feb 19, 2014 | March 14, 2014 | March 7, 2014 |
| BrowserStack support | + | \+ ([declaration by developer](http://www.webdriver.io/)) | \+ ([proof](https://www.browserstack.com/automate/node#wd)) |
| SauceLabs support | + | + | + |

<span id="tools_list"><a name="tools_list"></a></span>
####Drivers-dependent tools list

We decided to make table of tooks and libs that have more then 100 downloads

| Name | Short Description | Downloads number (for last month) | Current version | Last Update | Dependent driver | Angular specific |
| --- | --- | --- | --- | --- | --- | --- |
| [buster-selenium](https://www.npmjs.org/package/buster-selenium) | [Buster.js](http://docs.busterjs.org/en/latest/) extension to work with selenium-webdriver, wd, or webdriverjs. | 12(2.7k+ has buster) | 0.0.5(buster - 0.7.8) | 4 month ago | selenium-webdriver, webdriverjs, wd | no |
| ___[chai-webdriver](https://www.npmjs.org/package/chai-webdriver)___ | Build more expressive integration tests with some webdriver sugar for [chai.js](http://chaijs.com/) (see also [PageObject module for chai](https://www.npmjs.org/package/selenium-pageobject)) | 600+(156k+ for chai.js) | 0.6.2(1.9.0 for chai.js) | 17 days ago(1 month ago for chai.js) | selenium-webdriver | no |
| __[protractor](https://github.com/angular/protractor)__ | Webdriver E2E test wrapper for Angular. | 26k+ | 0.20.1 | 8 days ago | selenium-webdriver | __yes__ |
| [yahoo-arrow](https://github.com/yahoo/arrow) | FrontEnd Testing Framework | 18k+ | 0.4.3 | March 13, 2014 | selenium-webdriver | no |
| [grunt-webdriver](https://github.com/webdriverjs/grunt-webdriver) | grunt plugin to run selenium tests with Mocha and WebdriverJS | 140+ | 0.3.0 | March 13, 2014 | webdriverjs | no |
| __[webdriverjs-angular](https://github.com/webdriverjs/webdriverjs-angular)__ | Webdriverjs lib compatible with angular.js apps | 28 | 0.1.0 | March 10, 2014 | webdriverjs | __yes__ |
| ___[nightwatch](http://nightwatchjs.org/)___ | A node.js bindings implementation for selenium 2.0/webdriver | 600+ | 0.3.7 | 17 days ago | built-in ([supports BrowserStack](http://www.browserstack.com/automate/node#nightwatchjs) and [SauceLabs](https://github.com/beatfactor/nightwatch/issues/1)) | no |
| [grunt-mocha-webdriver](https://github.com/jmreidy/grunt-mocha-webdriver) | Grunt task to run Mocha tests against a Selenium grid | 400+ | 0.9.17 | a month ago | wd | no |
| [intern](http://theintern.io/) (requires chai) | Intern. A next-generation code testing stack for JavaScript. (using AMD) | 1.2k+ | 1.5.0 | 11 days ago | wd | no |
| [intern-geezer](http://theintern.io/) (doesn't require chai) | The geezer branch provides support for testing ancient browsers that do not support EcmaScript 5 (IE 6–8). It does not use the Chai library, as Chai also requires ES5. Instead, there is an assertion library at intern/assert that is API-compatible with Chai’s assert-style API | 700+ | 1.5.0 | 11 days ago | wd | no |
| __[wd-tractor](https://github.com/sebv/wd-tractor)__ | A port of protractor to the admc/wd driver. Angularjs e2e and midway testing using a straightforward api. | 5 | 0.1.0 | 4 months ago | wd | __yes__ |
| [yeti](http://yeti.cx/) | Yeti automates browser testing. | 1k+ | 0.2.27 | a month ago | wd | no |
| [yiewd](https://github.com/jlipps/yiewd) | Generator-based WebDriver client, wrapper around Wd.js | 700+ | 0.4.2 | 2 months ago | wd | no |
| [zuul](https://github.com/shtylman/zuul) | simple browser testing | 950+ | 1.5.4 | a month ago | wd | no | 

As AngularJS is one of the most important requirenments, we should compare only angular-specific frameworks:  (but, we should also mention such frameworks as chai[156k+ downloads] and nightwatch[only 600+ downloads, but project was started on Jan 2014]))
We need framework-base, which is tightly and rapidly and still developed and is commonly used.

(List of nice helpers:
    [webdriver-helper](https://www.npmjs.org/package/webdriver-helper) - for selenium-webdriver with underscore
    [browser-perf](https://www.npmjs.org/package/browser-perf) - Measure browser performance metrics (for webdriverjs)
    [grunt-sauce-screenshots](https://github.com/cvrebert/grunt-sauce-screenshots) - for wd - making screenshot on SauceLabs
)

<span id="choosing_framework"><a name="choosing_framework"></a></span>
####Choosing framework

We decided to compare some e2e testing frameworks that use Selenium.
They are:
1. ProtractorJS
2. webdriverjs-angular
3. WD-tractor
4. Chai + webdriver module
5. NightwatchJS

####Choosing comparing criteria:
1. Downloads number (last month)
2. Number of releases (if applied)
    1. Last release date
3. Angular benefits
4. Login page with domain redirecting test passing
5. [PageObject Pattern](https://github.com/jamesottaway/js-page-object) Support.
6. Integration with Jenkins support

####Comparing table

| Criteria   | ProtractorJS | webdriverjs-angular | WD-tractor | Chai(+webdriver module) | NightwatchJS |
| ----------  | ------------ | --- | --- | --- | --- |
| 1. Downloads number (last month) | 26k+ | 28 | 5 | 156k+ (driver 600+) | 600+ |
| 2. Releases Number | 20 | 3 | 1 | 13 (webdriver) | 8 |
| 3. Last Release Date(For Mar 14, 2014) | Mar 6, 2014 | Mar 10, 2014 | Nov 17, 2013 | Feb 25, 2014 | Feb 25, 2014 | 
| 4. Angular benefits | Protrractor was initially designed to be used with AngularJS framework. It is being developed by AngularJS Team. It is designed to be used with Jasmine, but can be alse used with Mocha and supports special angular locators (e.g. `by.binding()`, `by.model()`, `by.repeater()`, etc)| Developer of this framework describes the difference between this one and protractor in next words: '_we do not enhance webdriverjs API with angularJS-related command You will not find any `elementByNgBinding`, `addMockModule`, `hasElementByNgRepeaterRow` or any other specific, angularJS-related methods. We think your functionnal tests should be as framework-agnostic as possible. If you need `elementByNgBinding`, just use regular camme/webdriverjs commands like `.element('[ng-binding=model]').`_' | Based on Protractor, [Extra methods](https://github.com/sebv/wd-tractor#extra-methods) | no | no |
| PageObject Pattern | supported with [Astrolabe](https://github.com/stuplum/astrolabe) extension | N/A | N/A | supported with WD lib [selenium-pageobject](https://github.com/overnightFailure/selenium-pageobject) | N/A | 
| Integration with Jenkins support | [Can be used](https://github.com/angular/protractor/issues/60) with [jasmine-reporters](https://www.npmjs.org/package/jasmine-reporters), [github example](https://github.com/angular/protractor/blob/master/spec/junitOutputConf.js) | N/A | N/A | [can be used](https://github.com/visionmedia/mocha/issues/83) with Mocha | [yes](http://juristr.com/blog/2014/02/nightwatch-test-automation/) |


<span id="conclusion"><a name="conclusion"></a></span>
####Conclusion

As the conclusion, the ProtractorJS framework looks like the most preferable decision. 
Advantages: 
1. Angular specific
2. Huge community
3. Rapidly developed
4. Supports PageObject with extension, Jenkins integration with extension. 

In addition we tried to implement test on login with redirects to other domain and ProtractorJS successfully passed that test
Also Angular team [recommends](https://github.com/angular/angular-seed#end-to-end-testing) to use protractor for e2e testing