"use strict";
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "login");
if (steps.login === undefined) {
    steps.login = {
        itLogin: function() {
            it("User is logged in", function() {
                var cookies = _tf_config._system_.cookies;
                if(!cookies || cookies.length === 0) {
                    pages.login.login();
                }
                else {
                    pages.login.injectCookies(cookies);
                }
                pages.login.waitForAjax();
                pages.login.check();
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
        },


    };



}

module.exports = steps.login;
