if (steps.login === undefined) {
    steps.login = {
        itLogin: function() {
            it("User is logged in", function() {
                pages.login.login();
                pages.login.waitForAjax();
            });
        },
        itCheckUserMenuHasUsername: function(userName) {
            it ("User menu has username", function() {
                pages.base.elems.user_icon_menu.getText().then(function(text) {
                    expect(text.toUpperCase()).toEqual(userName.toUpperCase());
                });
            });
        },
        itCheckUserMenuHasOption: function(optionName) {
            it ("User should see '" + optionName + "' option", function() {
                ftf.helper.shouldBeAmoungElements(pages.base.elems.user_dropdown_menu_items, optionName);
            });
        }
    };
}

module.exports = steps.login;