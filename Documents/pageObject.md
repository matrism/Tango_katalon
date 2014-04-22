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
         * In this way you can extend locators with page modules
         */
        include: {
            header: require("./header")
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
* `page_obj.setUrl(url)` - method sets static url of the page and makes method `page_obj.open()` to use static url.
* `page_obj.setDynamicUrl(template, args)` - method sets template of dynamic url and args to compile url for `page_obj.open()` method and makes `page_obj.open()` to use compiled dynamic url. 

Example

template: `http://www.my_url.com/?id={1}&name={2}&dir={3}&higlight={2}`

args: `[34, "Anna", "ASC"]`

resulting url: `http://www.my_url.com/?id=34&name=Anna&dir=ASC&higlight=Anna`

* `page_obj.setDynamicUrlTemplate(template)` - method sets only template part of dynamic url
* `page_obj.setDynamicUrlArgs(args)` - method sets only args part of dynamic_url
* `page_obj.makeUrlStatic()` - method makes `page_obj.open` to use static url.
* `page_obj.makeUrlDynamic()` - method makes `page_obj.open()` to use compiled dynamic url. 
* `page_obj.prepareUrl()` - method returns url that is used for `page_obj.open()`. It returns static or compiled dynamic url depending on which of next methods was called last: `page_obj.makeUrlStatic()`, `page_obj.makeUrlDynamic()`,  `page_obj.setUrl(url)`, `page_obj.setDynamicUrl(template, args)`. If noone was called, it looks if dynamic or static url data is set and makse its decision. If set both, dynamic url has priority.
* `page_obj.getDynamicUrlData()` - method returns raw dynamic url data - next obj structure:

```js
{
    template: "%string%",
    args: [%array%]
}
```

* `page_obj.getUrl()` - method returns the url you provided to pageObject factory and that is used for navigating to page. Note: if you want to get actual url of browser, you should use 

```js
browser.getCurrentUrl().then(function(url) {
    // perform manipulations with url here
});
```

* `page_obj.getText()` - method returns textified visible content of current page.
* `page_obj.getHtml()` - method returns source code of page.
* `page_obj.getTitle()` - method returns title of page.
* `page_obj.waitUntil(timeout, message, promiseToBeTrue)` - method that waits until `promiseToBeTrue` Webdriver promise will be resolved before `timeout` (in ms), otherwise `message` will be thrown.
* `page_obj.executeScript(code,callback)` - method executes `code` script in active browser window and calls `callback` with result of executing.
* `page_obj.extendLocators(locators)` - method that allows to extend locators. This is useful e.g. for extending locators of login_page that is natively located inside framework and is hard to be extended.

e.g., in your /path/to/js/tests/pages/login_page.js you can specify next:

```js
if (pages.login === undefined) {
    var header = require('./header');
    pages.login = new ftf.loginPage(_tf_config);
    pages.login.extendLocators(header.locators);
}

module.exports = pages.login;
```

in your header module file in /path/to/js/tests/pages/header.js you can specify additional locators:

```js
var header = {
    locators: {
        header: { css: "h1" }
    }
};

module.exports = header;
```

and in `pages.login.elems` you can find `header` and use it as native element.
In this way you can reuse modules of pages in different page_objects.

* `page_obj.refresh()` - method refreshes browser's window
* `page_obj.back()` - method navigates browser to prefious page
* `page_obj.forward()` - metod navigates browser to next page
* `page_obj.clearCookies()` - method clears all cookies in browser
* `page_obj.saveScreen(name)` - method saves screenshot to `./screens` folder and names it `%name%_%date%_%time%.png`.
* `page_obj.waitForAjax()` - method looks into jQuery's `$.active` and angular's `$http.pendingRequests` and waits for them to become empty.
* `page_obj.waitForAngular()` - method looks into angular's `$http.pendingRequests` and wait for it to become empty.
* `page_obj.waitForProgressBar()` - custom wait method for WMG applications which wait ProgressBar to finish loading.
* `page_obj.waitForDocumentToLoad()` - method waits for `document.readyState` to become `"complete"`.
* `page_obj.waitForUrlToChangeTo(regex)` - method waits until the URL changes to match a provided regex.
* `page_obj.open()` - method navigates browser to page url.

####Using of Indexed Property.

Definition in /path/to/js/tests/pages/page_obj.js:

```js
if (pages.page_name === undefined) {
    pages.page_name = new ftf.pageObject({
        ...,
        indexed_properties: {
            spaces: {
                titles: { xpath: "(//div[contains(@ugol-list,'space')]//a)[%s]" },
                number_of_apps: { xpath: "(//div[contains(@ugol-list,'space')]//div[contains(@ng-class,'apps')]//span[@class='ng-binding'])[%s]" },
                number_of_services: { xpath: "(//div[contains(@ugol-list,'space')]//div[contains(@ng-class,'services')]//span[@class='ng-binding'])[%s]"},
                number_of_users: { xpath: "(//div[contains(@ugol-list,'space')]//div[contains(@ng-class,'users')]//span[@class='ng-binding'])[%s]" }
            }
        },
        ...
    });
}

module.exports = pages.orgs;
```

When initializing, page object creates methods of indexed_properties which can be used in next way in steps:

```js
    it("Step by me 2", function() {
        for (var i = 1; i < 4; i++) {
            pages.page_name.spaces(i).number_of_apps.getText().then(function(text) {
                console.log("pages.orgs.spaces.titles => %s", text);
            });
        }
    }); 
```

You can see that `pages.page_name` now has method `spaces` that takes index as argument and returns object of elements for passed index.