"use strict";

var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

if (pages.registrationFileActivity === undefined) {
    var pages_path = _tf_config._system_.path_to_pages;
    require(pages_path + "base");

    pages.registrationFileActivity = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",
        locators: {
        },

        lastDelivery: function () {

            return $$(".row-header").first();
        },

        activityRecordsTable: function () {
            return $("#ACTIVITY-RECORDS");
        },

        regActivityHeader: function () {
            return $$(".dropdown-toggle.transition").first();
        },

        regActivityDropdown: function () {
            return $('.dropdown.open>ul>li>a');
        },

        getStatus: function (event) {
            return event.$$('div>div[data-ng-init="activityIndex = $index"]>div:nth-child(2)>span').first().getText();
        },

        lastDisplayedDeliveredWork: function () {

        },

        clickRegActivityHeader: function () {
            return this.regActivityHeader().click();
        },

        clickRegActivityDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.regActivityDropdown()));
            this.regActivityDropdown().click();
        },

        clickOnLastDisplayedDeliveredWork: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.activityRecordsTable()));
            this.lastDelivery().click();
        },

        validateLastDelivery: function () {
            return true;
        },

        workHasDeliveredStatus: function () {
            return this.getStatus(this.lastDelivery());
        }
    });
}

module.exports = pages.registrationFileActivity;