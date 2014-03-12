##Comparing ProtractorJS to another webdriverjs-angular and wd-tractor and PageObject-JS

####Choosing framework
I've decided to compare some e2e testing frameworks that use Selenium.
They are:

1. [ProtractorJS](https://github.com/angular/protractor)
2. [webdriverjs-angular](https://github.com/webdriverjs/webdriverjs-angular)
3. [WD-tractor](https://github.com/sebv/wd-tractor)
4. [WebdriverJS](https://code.google.com/p/selenium/wiki/WebDriverJs)

####Choosing comparing criteria:
1. Community
2. Number of releases (if applied)
    1. Last release date
3. Angular benefits
4. Login page with domain redirecting test passing
5. WebdriverJS (native == browserstack) support
6. [PageObject Pattern](https://github.com/jamesottaway/js-page-object) Support.

####Comparing table

| Criteria   | ProtractorJS | webdriverjs-angular | WebdriverJS |
| ----------  | ------------ | --- | --- |
| 1. Community | 234 questions on StackOverflow | community is less because the initial commit was made on Jan 27, 2014 | community is very huge |
| 2. Releases Number | 20 | 3 | \>100 |
| 3. Last Release Date(For Mar 12, 2014) | Mar 06, 2014 | Mar 10, 2014 | N/A |
| 4. Angular benefits | Protrractor was initially designed to be used with AngularJS framework. It is being developed by AngularJS Team. It is designed to be used with Jasmine, but can be alse used with Mocha and supports special angular locators (e.g. `by.binding()`, `by.model()`, `by.repeater()`, etc)| Developer of this framework describes the difference between this one and protractor in next words: '_we do not enhance webdriverjs API with angularJS-related command You will not find any `elementByNgBinding`, `addMockModule`, `hasElementByNgRepeaterRow` or any other specific, angularJS-related methods. We think your functionnal tests should be as framework-agnostic as possible. If you need `elementByNgBinding`, just use regular camme/webdriverjs commands like `.element('[ng-binding=model]').`_' | It's Pure WebDriverJS library |
| 5. WebDriverJS version | [Selenium WebDriverJS](http://docs.seleniumhq.org/docs/03_webdriver.jsp) | [WebDriverJS(compatible with SauceLabs and BrowserStack](http://www.webdriver.io/) By syntax it looks like [A node.js client for webdriver/selenium 2 - WD](https://github.com/admc/wd) | [Selenium WebDriverJS](http://docs.seleniumhq.org/docs/03_webdriver.jsp) |
| 6. PageObject Pattern | supported with [Astrolabe](https://github.com/stuplum/astrolabe) extension | N/A | N/A |
