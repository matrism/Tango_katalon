'use strict';

var pph = require('../../../../helpers/pph'),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.relatedDeal === undefined) {
    pages.relatedDeal = new ftf.pageObject({
        locators: {
            relatedDealsTitleName: {css: "div.related-section.ng-scope h2"},
            relatedDealsTitleTooltip: {css: "div.related-section.ng-scope h2 i"},
            contractingPartiesTitleTable: {css: "div.table-header.clearfix div.pull-left.contracting-parties"},
            contractTypeTitleTable: {css: "div.table-header.clearfix div.pull-left.contract-type"},
            dealStatusTitleTable: {css: "div.table-header.clearfix div.pull-left.deal-status"},
            contractExecutionDateTitleTable: {css: "div.table-header.clearfix div.pull-left.execution-date"},
            relationshipTitleTable: {css: "div.table-header.clearfix div.pull-left.relationship"},
            addRelatedDealLink: {css: "p.add-related-deal a"},
            contractingPartiesField: {css: "#related_deal_typeahead div[ng-class='tgTypeaheadWrapClass']"},
            contractingPartiesInputField: {css: "#related_deal_typeahead div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            saveRelatedDealButton: {css: "div[data-tg-modular-edit-id='relatedDeals'] div.CONTROLS.ng-scope button[data-ng-click='tgModularViewMethods.save();']"},
            cancelRelatedDealButton: {css: "div[data-tg-modular-edit-id='relatedDeals'] div.CONTROLS.ng-scope button.btn.btn-cancel.ng-binding.pull-left"}
        },

        checkThatNoRelatedDealsDefined: function () {
            browser.driver.findElement(By.css("div.table-body.clearfix div.table-row.no-deals.ng-scope span")).getText().
            then(function (promise) {
                console.log("Check that no related deals defined  " + promise);
                expect(promise).toContain("No Related Deals have been defined.");
            });
        },

        checkTheRelatedDealsTitle: function () {
            pages.relatedDeal.elems.relatedDealsTitleName.getText().
            then(function (promise) {
                console.log("Check that related deals title is  " + promise);
                expect(promise).toContain("Related Deals");
            });
        },

        checkTheRelatedDealsTooltipTitle: function () {
            pages.relatedDeal.elems.relatedDealsTitleTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("Check that related deals tooltip title is  " + promise);
                expect(promise).toEqual("Defines how other Deals are related to this one.");
            });
        },

        checkTheContractingPartiesTitleTableRelatedDeals: function () {
            pages.relatedDeal.elems.contractingPartiesTitleTable.getText().
            then(function (promise) {
                console.log("Check that contracting parties title is  " + promise);
                expect(promise).toContain("Contracting Parties");
            });
        },

        checkTheContractTypeTitleTableRelatedDeals: function () {
            pages.relatedDeal.elems.contractTypeTitleTable.getText().
            then(function (promise) {
                console.log("Check that contract type title is  " + promise);
                expect(promise).toContain("Contract Type");
            });
        },

        checkTheDealStatusTitleTableRelatedDeals: function () {
            pages.relatedDeal.elems.dealStatusTitleTable.getText().
            then(function (promise) {
                console.log("Check that deal status title is  " + promise);
                expect(promise).toContain("Deal Status");
            });
        },

        checkTheContractExecutionDateTitleTableRelatedDeals: function () {
            pages.relatedDeal.elems.contractExecutionDateTitleTable.getText().
            then(function (promise) {
                console.log("Check that contract execution date title is  " + promise);
                expect(promise).toContain("Contract Execution Date");
            });
        },

        checkTheRelationshipTitleTableRelatedDeals: function () {
            pages.relatedDeal.elems.relationshipTitleTable.getText().
            then(function (promise) {
                console.log("Check that relationship title is  " + promise);
                expect(promise).toContain("Relationship");
            });
        },

        clickOnTheAddRelatedDealLink: function(){
            pages.relatedDeal.elems.addRelatedDealLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.relatedDeal.elems.saveRelatedDealButton));
        },

        fillIntoTheContractingPartiesField : function(){
            pages.relatedDeal.elems.contractingPartiesField.click();
            pages.relatedDeal.elems.contractingPartiesInputField.sendKeys("a");
        },

        fillIntoTheContractingPartiesFieldSpecificValue : function(contracting){
            pages.relatedDeal.elems.contractingPartiesField.click();
            pages.relatedDeal.elems.contractingPartiesInputField.sendKeys(contracting);
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        clearIntoTheContractingPartiesField : function(ocntracting){
            pages.relatedDeal.elems.contractingPartiesField.click();
            pages.relatedDeal.elems.contractingPartiesInputField.clear();
        },

        selectTheRandomContractingPartyRelatedDeal : function(){
             browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    options[randomNumber].click();
                });
        }

    });
}
