"use strict";
let _ = require('lodash'),
    futureDate = new Date(Date.now()*2);

if (steps.login === undefined) {
    steps.login = {
        itLogin: function() {
            it("User is logged in", function() {
                console.log('User: ' + _tf_config.user_name);
                pages.login.open(true);

                browser.manage().getCookies().then((cookies) => {
                    if (!_.find(cookies, {name: 'TAT_Login'})) {
                        pages.login.login();

                        pages.login.waitForAjax();
                        pages.login.check();

                        browser.manage().getCookies().then((cookies) => {
                            let cookie = _.find(cookies, {name: 'JSESSIONID'});

                            if (cookie) {
                                browser.manage().deleteCookie(cookie.name);
                                browser.manage().addCookie(cookie.name, cookie.value, undefined, undefined, false, futureDate);
                                browser.manage().addCookie('TAT_Login', true, undefined, undefined, false, futureDate);
                            }
                        });
                    }
                });


            });
        },
        itCheckUserMenuHasUsername: function(userName) {
            it ("User menu has username", function() {
                pages.base.elems.user_icon_menu.getText().then(function(text) {
                    expect(text.trim().toUpperCase()).toEqual(userName.toUpperCase());
                });
            });
        },
        itCheckUserMenuHasOption: function(optionName) {
            it ("User should see '" + optionName + "' option", function() {
                ftf.helper.shouldBeInArrayOfElements(pages.base.elems.user_dropdown_menu_items, optionName, false, false);
            });
        }
    };
}

module.exports = steps.login;
