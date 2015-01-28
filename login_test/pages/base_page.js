var _ = require("underscore");

if (pages.base === undefined) {
    pages.base = new ftf.pageObject({
        locators: {
            user_icon_menu: { css: "header a.dropdown-toggle" },
            user_dropdown_menu_items: { css: "header ul.dropdown-menu li" },
            user_dropdown_menu_logout: { partialLinkText: "Logout" }
        }
    });
};

module.exports = pages.base;
