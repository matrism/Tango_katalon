'use strict';

var pph = require('../../../../helpers/pph'),
    ExpectedConditions = protractor.ExpectedConditions,
    promise = protractor.promise;

if (pages.headerDeal === undefined) {
    pages.headerDeal = exports = new ftf.pageObject({
        locators: {
            dealContractingPartiesValue: {css: "h1 div.overflow"},
            dealBriefNumberText: {css: "div.header-info div.metadata-box:nth-child(6) div.metadata-info:nth-child(1) p:nth-child(1)"},
            dealBriefNumberValue: {css: "div.header-info div.metadata-box:nth-child(6) div.metadata-info:nth-child(1) p.info.ng-binding:nth-child(2)"},
            dealContractTypeText: {css: "div.header-info div:nth-child(1)  div.metadata-info:nth-child(1) p:nth-child(1)"},
            dealContractTypeValue: {css: "div.header-info div:nth-child(1)  div.metadata-info:nth-child(1) p:nth-child(2)"},
            dealStatusText: {css: "div.header-info div:nth-child(2) div.metadata-info:nth-child(1) p:nth-child(1)"},
            dealStatusValue: {css: "div.header-info div:nth-child(2) div.metadata-info:nth-child(1) p span"},
            dealSigningTerritoryText: {css: "div.header-info div:nth-child(2) div.metadata-info:nth-child(2) p:nth-child(1)"},
            dealSigningTerritoryValue: {css: "div.header-info div:nth-child(2) div.metadata-info:nth-child(2) p span"},
            dealTerritoriesText: {css: "div.header-info div:nth-child(3) div.metadata-info:nth-child(1) p"},
            dealOwnershipText: {css: "div.header-info div:nth-child(3) div.relative.clearfix.ownership:nth-child(2) div.metadata-label"},
            dealOwnershipValue: {css: "div.header-info div:nth-child(3) div.relative.clearfix.ownership:nth-child(2) div[data-tg-territory-label='getPristineDeal().territory_of_ownership.territories']"},
            dealAdministrationText: {css: "div.header-info div:nth-child(3) div.relative.clearfix.administration:nth-child(3) div.metadata-label"},
            dealAdministrationValue: {css: "div.header-info div:nth-child(3) div.relative.clearfix.administration:nth-child(3) div[data-tg-territory-label='getPristineDeal().territory_of_administration.territories']"},
            dealStartDateText: {css: "div.header-info div:nth-child(4) div.metadata-info:nth-child(1) p:nth-child(1)"},
            dealStartDateValue: {css: "div.header-info div:nth-child(4) div.metadata-info:nth-child(1) p:nth-child(2)"},
            dealEndDateText: {css: "div.header-info div:nth-child(4) div.metadata-info:nth-child(2) p:nth-child(1)"},
            dealEndDateValue: {css: "div.header-info div:nth-child(4) div.metadata-info:nth-child(2) p:nth-child(2)"},
            dealArtistText: {css: "div.header-info div.metadata-box:nth-child(5) div.metadata-info:nth-child(1) p:nth-child(1)"},
            dealArtistValue: {css: "div.header-info div.metadata-box:nth-child(5) div.metadata-info:nth-child(1) p:nth-child(3)"},
            dealLastUpdateText: {css: "div.header-info div.metadata-box:nth-child(6) div.metadata-info:nth-child(2) p:nth-child(1)"},
            dealLastUpdateValue: {css: "div.header-info div.metadata-box:nth-child(6) div.metadata-info:nth-child(2) p:nth-child(2)"},
            dealLastUpdateDateLink: {css: "div.header-info div.metadata-box:nth-child(6) div.metadata-info:nth-child(2) p:nth-child(2) a"}
        },


        checkTheContractTypeText: function () {
            pages.headerDeal.elems.dealContractTypeText.getText().
            then(function (promise) {
                console.log("Contract type title text is  : " + promise);
                expect(promise).toEqual("CONTRACT TYPE:");
            });
        },

        checkTheContractTypeValue: function (value) {
            pages.headerDeal.elems.dealContractTypeValue.getText().
            then(function (promise) {
                console.log("Contract type value is  : " + promise);
                expect(promise).toContain(value);
            });
        },

        checkTheContractTypeValueNotDisplayed: function (value) {
            pages.headerDeal.elems.dealContractTypeValue.getText().
            then(function (promise) {
                console.log("Contract type value is  : " + promise);
                expect(promise).not.toContain(value);
            });
        },

        checkTheExactContractTypeValue: function (value) {
            pages.headerDeal.elems.dealContractTypeValue.getText().
            then(function (promise) {
                console.log("Contract type value is  : " + promise);
                expect(promise).toEqual(value);
            });
        },

        checkTheContractingPartyValue: function (value) {
            pages.headerDeal.elems.dealContractingPartiesValue.getText().
            then(function (promise) {
                console.log("Contracting party value is  : " + promise);
                expect(promise.toLowerCase()).toContain(value);
            });
        },

        clickOnTheContractingPartyValue: function () {
            browser.actions().mouseMove(pages.headerDeal.elems.dealContractingPartiesValue).perform();
        },

        checkTheStatusText: function () {
            pages.headerDeal.elems.dealStatusText.getText().
            then(function (promise) {
                console.log("Status title text is  : " + promise);
                expect(promise).toEqual("STATUS:");
            });
        },

        checkTheStatusValue: function (value) {
            var el = pages.headerDeal.elems.dealStatusValue;
            pages.base.scrollIntoView(el);
            el.getText().
            then(function (promise) {
                console.log("Status value is  : " + promise);
                expect(promise).toEqual(value);
            });
        },

        checkTheSigningTerritoryText: function () {
            pages.headerDeal.elems.dealSigningTerritoryText.getText().
            then(function (promise) {
                console.log("Signing territory title text is  : " + promise);
                expect(promise).toEqual("SIGNING TERRITORY:");
            });
        },

        checkTheSigningTerritoryValue: function (value) {
            pages.headerDeal.elems.dealSigningTerritoryValue.getText().
            then(function (promise) {
                console.log("Signing territory value is  : " + promise);
                expect(promise).toEqual(value);
            });
        },

        checkTheTerritoriesText: function () {
            pages.headerDeal.elems.dealTerritoriesText.getText().
            then(function (promise) {
                console.log("Territories title text is  : " + promise);
                expect(promise).toEqual("TERRITORIES");
            });
        },


        checkTheOwnershipText: function () {
            pages.headerDeal.elems.dealOwnershipText.getText().
            then(function (promise) {
                console.log("Ownership title text is  : " + promise);
                expect(promise).toEqual("OWNERSHIP: ");
            });
        },

        checkTheOwnershipValue: function (value) {
            pages.headerDeal.elems.dealOwnershipValue.getText().
            then(function (promise) {
                console.log("Ownership value is  : " + promise);
                expect(promise).toEqual(value);
            });
        },

        checkTheAdministrationText: function () {
            pages.headerDeal.elems.dealAdministrationText.getText().
            then(function (promise) {
                console.log("Administration title text is  : " + promise);
                expect(promise).toEqual("ADMINISTRATION: ");
            });
        },

        checkTheAdministrationValue: function (value) {
            pages.headerDeal.elems.dealAdministrationValue.getText().
            then(function (promise) {
                console.log("Administration value is  : " + promise);
                expect(promise).toEqual(value);
            });
        },

        checkTheStartDateText: function () {
            pages.headerDeal.elems.dealStartDateText.getText().
            then(function (promise) {
                console.log("Start date title text is  : " + promise);
                expect(promise).toEqual("START:");
            });
        },

        checkTheStartDateValue: function (value) {
            pages.headerDeal.elems.dealStartDateValue.getText().
            then(function (promise) {
                console.log("Start date value is  : " + promise);
                expect(promise).toEqual(value);
            });
        },

        checkTheEndDateText: function () {
            pages.headerDeal.elems.dealEndDateText.getText().
            then(function (promise) {
                console.log("End date title text is  : " + promise);
                expect(promise).toEqual("END:");
            });
        },

        checkTheEndDateValue: function (value) {
            pages.headerDeal.elems.dealEndDateValue.getText().
            then(function (promise) {
                console.log("End date value is  : " + promise);
                expect(promise).toEqual(value);
            });
        },

        checkTheArtistText: function () {
            pages.headerDeal.elems.dealArtistText.getText().
            then(function (promise) {
                console.log("Artist title text is  : " + promise);
                expect(promise).toContain("ARTIST:");
            });
        },

        checkTheArtistValue: function (value) {
            pages.headerDeal.elems.dealArtistValue.getText().
            then(function (promise) {
                console.log("Artist value is  : " + promise);
                expect(promise).toEqual(value);
            });
        },

        checkTheContractBriefNumberText: function () {
            pages.headerDeal.elems.dealBriefNumberText.getText().
            then(function (promise) {
                console.log("Deal brief number title text is  : " + promise);
                expect(promise).toEqual("CONTRACT BRIEF #:");
            });
        },

        checkTheContractBriefNumberValue: function (value) {
            pages.headerDeal.elems.dealBriefNumberValue.getText().
            then(function (promise) {
                console.log("Deal brief number value is  : " + promise);
                expect(promise).not.toEqual("");
            });
        },

        checkTheLastUpdateText: function () {
            pages.headerDeal.elems.dealLastUpdateText.getText().
            then(function (promise) {
                console.log("Last update title text is  : " + promise);
                expect(promise).toEqual("LAST UPDATE:");
            });
        },

        checkTheLastUpdateValue: function (value) {
            pages.headerDeal.elems.dealLastUpdateValue.getText().
            then(function (promise) {
                console.log("Last update value is  : " + promise);
                expect(promise).toEqual(value);
            });
        },

        clickOnTheLastUpdateValueAndCheckTheAuditLogScreen: function () {
            pages.base.scrollIntoView(pages.headerDeal.elems.dealLastUpdateDateLink);
            pages.headerDeal.elems.dealLastUpdateDateLink.click();
            pages.base.waitForAjax();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div h1 strong"))));
            browser.driver.findElement(By.css("div h1 strong")).getText().
            then(function (promise) {
                console.log("Audit log text  is  : " + promise);
                expect(promise).toEqual("AUDIT LOG");
            });
        }


    });
}