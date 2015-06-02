"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.edit_deal_scope === undefined) {
    pages.edit_deal_scope = new ftf.pageObject({
        locators: {
            publisherSharesTitle: {css: "div[name='scopeForm'] div.section-header-borderless.publisher-shares.ps-section-header.clearfix"},
            publisherSharesSetArea: {css: "div[name='scopeForm'] div[data-tg-modular-edit-id='publisherShareSets']"},
            publisherSharesSetEditIcon: {css: "div[name='scopeForm'] div[data-tg-modular-edit-id='publisherShareSets'] button[data-ng-click='tgModularViewMethods.switchToEditView()']"},
            editPublisherSharesHeaderTitles: {css: "div[name='scopeForm'] div[data-tg-modular-edit-id='publisherShareSets'] div.clearfix.ps-heading"}

        },

        validateThePublisherSharesTitle: function () {
            pages.edit_deal_scope.elems.publisherSharesTitle.getText().
                then(function (promise) {
                    console.log("Publisher shares set title is : " + promise);
                    expect(promise).toEqual("PUBLISHER SHARES");
                });
        },
        
        editThePublisherSharesSet: function () {
            
        }
    });
}