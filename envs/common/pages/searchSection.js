"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (pages.searchSection === undefined) {
    pages.searchSection = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",
        locators: {
        },

        searchDropdown: function () {
            return $("#DSP-SEARCH-DROP>button")
        },

        dropdownMenu: function () {
            return element(by.css("#DSP-SEARCH-DROP>.dropdown-menu"));
        },

        organisationOption: function () {
            return element(by.css("#SEARCH-ORG"));
        },

        personOption: function () {
            return $("#SEARCH-PERSON");
        },

        searchInput: function () {
            return element(by.css(".tg-typeahead__input"));
        },

        searchTypeAheadDropdown: function () {
            return element(by.css(".tg-typeahead__suggestions-group-item-inner"));
        },

        entityTypeOption: function (value) {
            return this.dropdownMenu().element(by.cssContainingText(
                'a', value
            ));
        },

        dealOption: function () {
            return $("#SEARCH-DEAL");
        },

        workOption: function () {
            return $("#SEARCH-WORK");
        },

        //END OF LOCATORS ///////////////////////////////////////

        clickDropdownMenu: function () {
            var element = this.searchDropdown();
            pages.base.scrollIntoView(element);
            return element.click();
        },

        selectEntityTypeOption: function (value) {
            return this.entityTypeOption(value).click();
        },

        selectDeal: function () {
            this.dealOption().click();
        },

        selectWork: function () {
            this.workOption().click();
        },

        selectOrganisationOptionFromDropdown: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.dropdownMenu()));
            this.organisationOption().click();
        },

        selectPersonOptionFromDropdown: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.dropdownMenu()));
            this.personOption().click();
        },

        typeOrganisationNameIntoInput: function (organisationName) {
            this.searchInput().sendKeys(organisationName);
        },

        typeIntoSearchInput: function (value) {
            this.searchInput().sendKeys(value);
        },

        selectValueFromDropdown: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.searchTypeAheadDropdown()));
            this.searchTypeAheadDropdown().click();
            pages.base.waitForAjax();
        },

        typeDealNumberIntoInput: function (dealContractNumber) {
            this.searchInput().sendKeys(dealContractNumber);
        }
    });
}

module.exports = pages.searchSection;