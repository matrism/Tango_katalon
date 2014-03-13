##**[Nightwatch.js](https://github.com/beatfactor/nightwatch)**
Nightwatch.js is an easy to use Node.js based End-to-End (E2E) testing solution for browser based apps and websites.

It uses the powerful Selenium WebDriver API to perform commands and assertions on DOM elements.

### Main Features
1. Simple but powerful syntax which enables you to write tests very quickly, using only Javascript and CSS selectors. No need to initialize other objects and classes, you only need to write the test specs.

2. Built-in command-line test runner which enables you to run the tests either altogether, by group or single.

3. Manages the Selenium server automatically; can be disabled if Selenium runs on another machine.

4. Continous Integration support: JUnit XML reporting is built-in so you can integrate your tests in your build process with systems suchs as Hudson or Teamcity.

5. Use CSS selectors or Xpath to locate and verify elements on the page or execute commands.

6. Easy to extend if you need to implement your own commands specific to your application.

### Weaknesses
The weaknesses of Nightwatch are the queue based chain and underline communication protocol used between Nightwatch and the Selenium Server (http protocol has no retry, no timeout setting).

Example:

    module.exports = {
      "Demo test Google" : function (client) {
        client
          .url("http://www.google.com")
          .waitForElementVisible("body", 1000)
          .assert.title("Google")
          .assert.visible("input[type=text]")
          .setValue("input[type=text]", "nightwatch")
          .waitForElementVisible("button[name=btnG]", 1000)
          .click("button[name=btnG]")
          .pause(1000)
          .assert.containsText("#main", "The Night Watch")
          .end();
      }
    };

## **[Wd-tractor](https://github.com/sebv/wd-tractor)**
Wd extension to do AngularJS e2e/midway testing.  A lot of ideas and code have been lifted from Protractor.
Has extra methods for Angular support:

    /**
     * Wait until Angular has finished rendering and has
     * no outstanding $http calls before continuing.
     */
    waitForAngular(cb) -> cb(err)

    /**
     * Original wd get.
     */
    wdGet(url, cb) -> cb(err)
    
    /**
     * Angular Javascript get. Use the `NG_DEFER_BOOTSTRAP!` functionality
     * to enable Angular module mocking. Default get.
     */
    ngGet(url, cb) -> cb(err)
    
    /**
     * Sets the angular root element.
     */
    setRootEl(rootEl)
    
    /**
     * Evaluate angular expression in element scope.
     */
    ngEval(el, expr, cb) -> cb(err, res)
    element.ngEval(expr, cb) -> cb(err, res)
    
    /**
     * Methods to lookup element(s) using angular bindings.
     */
    elementByNgBinding(binding, cb) -> cb(err, el)
    elementByNgBindingIfExists(binding, cb) -> cb(err, el)
    elementByNgBindingOrNull(binding, cb) -> cb(err, el)
    elementsByNgBinding(binding, cb) -> cb(err, els)
    hasElementByNgBinding(binding, cb) -> cb(err, status)
    waitForElementByNgBinding(binding, cb) -> cb(err)
    waitForVisibleByNgBinding(binding, cb) -> cb(err)
    
    
    /**
     * Methods to lookup input bound with ng-model.
     */
    elementByNgInput(model.cb) -> cb(err, el)
    elementByNgInputIfExists(model.cb) -> cb(err, el)
    elementByNgInputOrNull(model.cb) -> cb(err, el)
    hasElementByNgInput(model.cb) -> cb(err, status)
    waitForElementByNgInput(model.cb) -> cb(err)
    waitForVisibleByNgInput(model.cb) -> cb(err)
    
    /**
     * Methods to lookup select bound with ng-model.
     */
    elementByNgSelect(model.cb) -> cb(err, el)
    elementByNgSelectIfExists(model.cb) -> cb(err, el)
    elementByNgSelectOrNull(model.cb) -> cb(err, el)
    hasElementByNgSelect(model.cb) -> cb(err, status)
    waitForElementByNgSelect(model.cb) -> cb(err)
    waitForVisibleByNgSelect(model.cb) -> cb(err)
    
    /**
     * Methods to lookup selected options bound with ng-model.
     */
    elementByNgSelectedOption(model.cb) -> cb(err, el)
    elementByNgSelectedOptionIfExists(model.cb) -> cb(err, el)
    elementByNgSelectedOptionOrNull(model.cb) -> cb(err, el)
    hasElementByNgSelectedOption(model.cb) -> cb(err, status)
    waitForElementByNgSelectedOption(model.cb) -> cb(err)
    waitForVisibleByNgSelectedOption(model.cb) -> cb(err)
    
    /**
     * Methods to lookup specific elements within ng repeaters, identified by a row
     * and a column.
     */
    elementByNgRepeater(repeatDescriptor, index, binding, cb) -> cb(err, el)
    elementByNgRepeaterIfExists(repeatDescriptor, index, binding, cb) -> cb(err, el)
    elementByNgRepeaterOrNull(repeatDescriptor, index, binding, cb) -> cb(err, el)
    hasElementByNgRepeater(repeatDescriptor, index, binding, cb) -> cb(err, status)
    waitForElementByNgRepeater(repeatDescriptor, index, binding, cb) -> cb(err)
    waitForVisibleByNgRepeater(repeatDescriptor, index, binding, cb) -> cb(err)
    
    /**
     * Methods to lookup a row elements within ng repeaters. This returns the div
     * containing the whole row.
     */
    elementByNgRepeaterRow(repeatDescriptor, index, cb) -> cb(err, el)
    elementByNgRepeaterRowIfExists(repeatDescriptor, index, cb) -> cb(err, el)
    elementByNgRepeaterRowOrNull(repeatDescriptor, index, cb) -> cb(err, el)
    hasElementByNgRepeaterRow(repeatDescriptor, index, cb) -> cb(err, status)
    waitForElementByNgRepeaterRow(repeatDescriptor, index, cb) -> cb(err)
    waitForVisibleByNgRepeaterRow(repeatDescriptor, index, cb) -> cb(err)
    
    /**
     * Method to lookup a column within ng repeaters. This returns a list containing
     * the column elements.
     */
    elementsByNgRepeaterColumn(repeatDescriptor, binding, cb) -> cb(err, els)


#Comparing table

| Criteria   | NightwatchJS | Wd-tractor | WD.js |
| ----------  | ------------ | --- | --- |
| 1. Community | Small community  | Small community | Big community |
| 2. Releases Number | 8 | 1 | 51 |
| 3. Last Release Date(For Mar 12, 2014) | Feb 25, 2014 | 4 months ago | Mar 7, 2014 |
| 4. Angular benefits | Uses the CSS selector model to locate elements on a page | Wd extension to do AngularJS e2e/midway testing. It has extra methods for Angular support: `waitForAngular(cb) -> cb(err)`, `ngGet(url, cb) -> cb(err)`, `setRootEl(rootEl)`, `ngEval(el, expr, cb) -> cb(err, res)`. Methods to lookup element(s) using angular bindings: `elementByNgBinding(binding, cb) -> cb(err, el)`, `elementByNgBindingIfExists(binding, cb) -> cb(err, el)` and others| It's pure WD library |
| 5. WebDriverJS version | [Selenium WebDriverJS](http://docs.seleniumhq.org/docs/03_webdriver.jsp) | node.js Webdriver/Selenium 2 client | node.js Webdriver/Selenium 2 client |
| 6. PageObject Pattern | N/A | N/A | N/A |


