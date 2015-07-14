"use strict";
var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (pages.royaltyRatesValidations === undefined) {


    var pages_path = _tf_config._system_.path_to_pages;
    require(pages_path + "base");

    pages.royaltyRatesValidations = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",
        locators: {},

        royaltyRateErrorText: function () {
            return $(".rate-set-header>div>.rate-set-messages>.text-error>div>.validation-message-text");
        },
        royaltyRateGroupText: function () {

            return $(".rate-set_group__coverMechanical>.rate-set-group-body>.rate-set-income-type>.text-error>div>.validation-message-text");
        },
        royaltyRateGroupWarningText: function () {
            return $$(".rate-set_group__coverMechanical>.rate-set-group-body>.rate-set-income-type>div>div>div.flex1>div>div>div.validation-message-text").first();
        },
        royaltyRateSummaryText: function () {
            return $(".section-header-borderless~.text-error>div>.validation-message-text");
        },


        getRoyaltyRateErrorText: function () {

            var element = this.royaltyRateErrorText();
            pages.base.scrollIntoView(element);

            return element.getText();
        },

        getRoyaltyRateGroupsErrorText: function () {
            var element = this.royaltyRateGroupText();
            pages.base.scrollIntoView(element);

            return element.getText();
        },
        getRoyaltyRateGroupsWarningText: function () {
            var element = this.royaltyRateGroupWarningText();
            pages.base.scrollIntoView(element);

            return element.getText();
        },

        getRRSummaryText: function () {
            var element = this.royaltyRateSummaryText();
            pages.base.scrollIntoView(element);

            return element.getText();
        }


    });
}

module.exports = pages.royaltyRatesValidations;