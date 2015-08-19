"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.create_deal_rtp === undefined) {
    pages.create_deal_rtp = new ftf.pageObject({
        locators: {



        }
    });
}