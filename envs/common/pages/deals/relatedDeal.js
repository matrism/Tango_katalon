'use strict';

var pph = require('../../../../helpers/pph'),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.relatedDeal === undefined) {
    pages.relatedDeal = new ftf.pageObject({
        locators: {
            relatedDealsTitleName: {css: "div h2"},
            relatedDealsTitleTooltip: {css: "div h2 i"},
            contractingPartiesTitleTable: {css: "div.table-header.clearfix div.pull-left.contracting-parties"},
            contractTypeTitleTable: {css: "div.table-header.clearfix div.pull-left.contract-type"},
            dealStatusTitleTable: {css: "div.table-header.clearfix div.pull-left.deal-status"},
            contractExecutionDateTitleTable: {css: "div.table-header.clearfix div.pull-left.execution-date"},
            relationshipTitleTable: {css: "div.table-header.clearfix div.pull-left.relationship"},
            addRelatedDealLink: {css: "p.add-related-deal a"},
            contractingPartiesField: {css: "[ng-model='relatedDeal.deal'] div[ng-class='tgTypeaheadWrapClass']"},
            contractingPartiesInputField: {css: "[ng-model='relatedDeal.deal'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editRelatedDealArea: {css: "div[tg-modular-edit-id='relatedDeals']"},
            editRelatedDealIcon: {css: "div[tg-modular-edit-id='relatedDeals'] button[data-ng-click='tgModularViewMethods.switchToEditView()']"},
            saveRelatedDealButton: {css: "div[tg-modular-edit-id='relatedDeals'] div.CONTROLS.ng-scope button[data-ng-click='tgModularViewMethods.save()']"},
            cancelRelatedDealButton: {css: "div[tg-modular-edit-id='relatedDeals'] div.CONTROLS.ng-scope button.btn.btn-cancel.ng-binding.pull-left"}
        },

        getRelationshipDropDownButton: function () {
            return $$("div[ng-model='relatedDeal.relationship']").$$("div[ng-click='toggleOpenState($event);']").last();

        },

        getRelationshipDropDownListElement: function () {
            var i = Math.floor(Math.random() * 5) + 1;
            return $$("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope:nth-child("+ i +")");

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
                    expect(promise).toContain("RELATED DEALS");
                });
        },

        checkTheRelatedDealsTooltipTitle: function () {
            pages.relatedDeal.elems.relatedDealsTitleTooltip.getAttribute("tooltip").
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

        clickOnTheAddRelatedDealLink: function () {
            pages.relatedDeal.elems.addRelatedDealLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.relatedDeal.elems.saveRelatedDealButton));
        },

        fillIntoTheContractingPartiesField: function () {
            pages.relatedDeal.elems.contractingPartiesField.click();
            pages.relatedDeal.elems.contractingPartiesInputField.sendKeys("a");
        },

        fillIntoTheContractingPartiesFieldSpecificValue: function (contracting) {
            pages.relatedDeal.elems.contractingPartiesField.click();
            pages.relatedDeal.elems.contractingPartiesInputField.clear();
            pages.relatedDeal.elems.contractingPartiesInputField.sendKeys(contracting);
        },

        fillIntoTheContractingPartiesFieldSpecificValueRowNumberI: function (contracting, i) {
            pages.deal.waitForAjax();
            pages.base.scrollIntoView(element(by.css('[ng-model="relatedDeal.deal"]')));
            browser.driver.findElement(By.css("div.table-body.clearfix>div:nth-child(" + i + ") div[ng-class='tgTypeaheadWrapClass']")).click();
            browser.driver.findElement(By.css("div.table-body.clearfix>div:nth-child(" + i + ") div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']")).sendKeys(contracting);
        },

        clearIntoTheContractingPartiesField: function (ocntracting) {
            pages.relatedDeal.elems.contractingPartiesField.click();
            pages.relatedDeal.elems.contractingPartiesInputField.clear();
        },

        selectTheRandomContractingPartyRelatedDeal: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
        },

        selectTheRandomValueFromRelationshipDropDownRowNumberI: function (i) {
            browser.driver.findElement(By.css("div.table-body.clearfix>div:nth-child(" + i + ") div.pull-left.relationship div.tg-dropdown-button")).click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"))));
            pages.base.scrollIntoView(element(By.css("div.table-body.clearfix>div:nth-child(" + i + ") .relationship-dropdown li:nth-child(5)")));
            browser.driver.findElements(By.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
        },

        clickValueRelationshipDropDown: function () {
            pages.relatedDeal.getRelationshipDropDownButton().click();
            steps.base.sleep(200);
        },

        selectRandomValueRelationshipDropDown: function () {
            //browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"))));
            pages.relatedDeal.getRelationshipDropDownListElement().click();
        },

        clickOnTheSaveRelatedDeal: function () {
            pages.relatedDeal.elems.saveRelatedDealButton.click();
        },

        clickOnTheCancelRelatedDeal: function () {
            pages.relatedDeal.elems.cancelRelatedDealButton.click();
        },

        editTheRelatedDealForm: function () {
            pages.relatedDeal.elems.editRelatedDealArea.click();
            pages.relatedDeal.elems.editRelatedDealIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.relatedDeal.elems.saveRelatedDealButton));
        },

        clickOnTheContractingPartyRelatedDealRowNumberI: function (i) {
            browser.driver.findElement(By.css("div.table-body.clearfix>div:nth-child(" + i + ") div.pull-left.contracting-parties a")).click();
            pages.relatedDeal.waitForAjax();
        }

    });
}