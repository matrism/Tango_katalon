"use strict";
var _ = require("underscore");

if (pages.base === undefined) {
    pages.base = new ftf.pageObject({
        locators: {
            logout_link: { id: "DSP-LOGOUT" }
        }
    });
};

module.exports = pages.base;
