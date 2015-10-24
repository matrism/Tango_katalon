"use strict";

if (pages.login === undefined) {
    pages.login = new ftf.loginPage(_tf_config, element(By.css(".brand .navbar-brand")));

    pages.login.check = function (options) {
        var el;
        options = options || {};
        if (options.should_be_logged_in === undefined) {
            options.should_be_logged_in = true;
        }
        el = element(By.id("DSP-LOGOUT"));
        pages.login.scrollIntoView(el);
        expect(el.isPresent()).toBe(options.should_be_logged_in);
    };

    pages.login.injectCookies = function (cookies) {
        browser.driver.get(_tf_config.urls.app_url + '/blank');
        browser.executeScript(function (cookies) {
            for (var key in cookies) {
                document.cookie = key + '=' + cookies[key];
            }
        }, cookies);
        browser.get(_tf_config.urls.app_url);
    };
}

module.exports = pages.login;