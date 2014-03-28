###PageObject

PageObject pattern is very useful way to implement e2e tests and it provides features to make tests implementation easier and clearer.

We found next advantages of PageObject pattern:

1. It reduces the duplication of code.
2. It makes tests more readable
3. It improves the maintainability of tests.

Because of these advantages we decided to implement most widely used methods in our Factory Testing Framework.

####I. To start use pageObject pattern, you should include framework into your project:

```js
global.ftf = require("path/to/framework");
```

Registering framework as the property of global allows you to get access to all framework methods from any part of your project.

####II. You should define the barebone of your future page object with custom methods and properties. 

```js
var pagePrepare = {
        /**
         * The URL of page. 
         * required.
         */
        url: _tf_config.urls.security_console,
        
        /**
         * Locators of elements that should be accessible through the page.
         * When initializing, pageObject factory takes all locators, creates 
         * elements and puts them into "elems" property.
         * elements should be accessible in page.elems, 
         * e.g. page.elems.username
         */
        locators: {
            username: { css: "#username" },
            password: { css: "#password" },
            login_button: { css: "button[type='submit']" },
        },
        
        /**
         * This method will override existing method in prototype
         */
        open: function() {
            console.log("open method should be overriden and browser should be closed");
            browser.close();
        },
        
        /**
         * Custom methods
         */
        setUsername: function(username) {
            pages.login.elems.username.clear().sendKeys(username);
            return this;
        },
        setPassword: function(password) {
            pages.login.elems.password.clear().sendKeys(password);
            return this;
        },
        doLogin: function() {
            pages.login
                .setUsername(_tf_config.user_name)
                .setPassword(_tf_config.user_password);

            browser.wait(pages.login.shouldWeLogin);

            pages.login.elems.login_button.click();
            return this;
        },
        shouldWeLogin: function() {
            return pages.login.elems.password.getAttribute('value').then(function(text) {
                return text === _tf_config.user_password;
            }) && pages.login.elems.username.getAttribute('value').then(function(text) {
                return text === _tf_config.user_name;
            });                    
        },
        check: function() {
            pages.login.open(true);
            
            pages.login.elems.username.isPresent().then(function(present) {
                if (present) {
                    pages.login.doLogin();
                } 
            });
            
            browser.getTitle().then(function(title) {
                expect(title).toEqual('Security-console');
            });
        }
    }
```

Note: _You can override method of PageObject naming your method as prototype method_

####III. You should pass your barebone object to pageObject factory:

```js
var pagePrepare;
if (pages.login === undefined) {
    pagePrepare = {...};
    pages.login = new ftf.pageObject(pagePrepare);
}

module.exports = pages.login;
```

*Notes: 

* _We create page objects as singletones. You should define `global.pages = {};` in your protractor config file_;
* _If you create your page objects in modules, you can call once `require("path/to/page");` and then have access to page via global object `pages`._ 

####IV. Use page object

```js
require("path/to/page");

describe("your description", function() {
    /**
     * Before each step in this Feature we check, if we are logged in. If no, we do log in.
     */
    beforeEach(pages.login.check);
    
    it("your step description", function() {
        // navigating to page
        pages.login.open();
        // element 'username' should be present on page
        expect(pages.login.elems.username.isPresent()).toBe(true);
    }); 
});
```

###PageObject API:

* `page_obj.index()` - method takes all locators of page object and creates elements for them in `elems` property. Can be used for dynamic reindex of locators if any is added dynamicly. This method is always called in constructor.
* `page_obj.prepare()` - method takes care of initializing all properties, such as text, html, title, which can be accessed through appropriate methods. It is called each time after navigating to necessary page.
* `page_obj.getUrl()` - method returns the url you provided to pageObject factory and that is used for navigating to page. Note: if you want to get actual url of browser, you should use 

```js
browser.getCurrentUrl().then(function(url) {
    // perform manipulations with url here
});
```

* `page_obj.getText()` - method returns textified visible content of current page.
* `page_obj.getHtml()` - method returns source code of page.
* `page_obj.waitUntil(timeout, message, promiseToBeTrue)` - method that waits until `promiseToBeTrue` Webdriver promise will be resolved before `timeout` (in ms), otherwise `message` will be thrown.
* `page_obj.executeScript(code,callback)` - method executes `code` script in active browser window and calls `callback` with result of executing.
* `page_obj.refresh()` - method refreshes browser's window
* `page_obj.back()` - method navigates browser to prefious page
* `page_obj.forward()` - metod navigates browser to next page
* `page_obj.clearCookies()` - method clears all cookies in browser
* `page_obj.saveScreen(name)` - method saves screenshot to `./screens` folder and names it `%name%_%date%_%time%.png`.
* `page_obj.open()` - method navigates browser to page url.