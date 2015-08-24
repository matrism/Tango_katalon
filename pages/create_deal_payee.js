"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.create_deal_payee === undefined) {
    pages.create_deal_payee = new ftf.pageObject({
        locators: {
            addNewPayeeField: {css: "div[data-ng-model='DPAY.filteredPayees'] div[ng-class='tgTypeaheadWrapClass']"},
            addNewPayeeInputField: {css: "div[data-ng-model='DPAY.filteredPayees'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"}

        }

    })
}