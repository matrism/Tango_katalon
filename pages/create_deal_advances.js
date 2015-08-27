"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.create_deal_advances === undefined) {
    pages.create_deal_advances = new ftf.pageObject({
        locators: {
            addFirstAdvanceLink: {css: "a[data-ng-click='addAdvanceFromCreate(true, false)']"}
        },

        clickOnTheAddFirstAdvanceLink: function () {
            pages.create_deal_advances.elems.addFirstAdvanceLink.click();
        }
    })
}