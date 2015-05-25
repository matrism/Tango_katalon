"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.create_deal_scope === undefined) {
    pages.create_deal_scope = new ftf.pageObject({
        locators: {
            addScopeIcon: {xpath: "//*[@class='overview-header']//h3[contains(text(),'Scopes')]//a[@class='column-add-button']"},
            descriptionField: {css: "input[name='scopeDescription']"},
            contractTypeDropDown: {css: "select[name='scopeContractType'] option"},
            territoryField: {css: "div[ng-model='modularEditModels.model.deal_scope_territories.territories'] div[ng-class='tgTypeaheadWrapClass']"},
            territoryInput: {css: "div[ng-model='modularEditModels.model.deal_scope_territories.territories'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            territoryDropDown: {css: "div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            addPublisherShareSetLink: {css: "div.publisher-share-totals a[data-ng-click='addChain(modularEditModels.model.id, modularEditModels.activeScope.id);']"},
            firstPublisherNameField: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix input[name='acquirer']"},
            firstPublisherOwnPercent: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix input[name='ownShare']"},
            firstPublisherCollectPercent: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix input[name='collectShare']"},
            firstPublisherNameAMField: {css: "#deal-publisher div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] input[name='acquirer']"},
            firstPublisherNameAMCollectPercent: {css: "#deal-publisher div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] input[name='collectShare']"},
            publisherNameDropDownData: {css: "ul.typeahead.dropdown-menu.ng-scope li.ng-scope a"},
            firstPublisherTypeEOrPAArrow: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix div.tg-dropdown-button button.tg-dropdown-caret.fa.fa-caret-down"},
            firstPublisherTypeEOrPADropDown: {css: "ul.typeahead.dropdown-menu.ng-scope li.ng-scope"},
            savePublisherShareSet: {css: "div[data-tg-modular-edit-id='publisherShareSets'] div.CONTROLS.ng-scope button[data-ng-click='tgModularViewMethods.save();']"},
            cancelPublisherShareSet: {css: "div[data-tg-modular-edit-id='publisherShareSets'] div.CONTROLS.ng-scope button.btn.btn-cancel.ng-binding.pull-left"}
        },

        addScopeForm: function () {
            pages.create_deal_scope.elems.addScopeIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.contractTypeDropDown));
        },

        fillScopeDescriptionField: function () {
            pages.create_deal_scope.elems.descriptionField.sendKeys("description");
        },

        selectRandomContractTypeScope: function () {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("select[name='scopeContractType'] option"))));
            browser.driver.findElements(By.css("select[name='scopeContractType'] option"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        selectContractTypeScope: function (element, specific_value) {
            var desiredOption;
            browser.driver.findElements(By.css("select[name='scopeContractType'] option"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(specific_value) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },


        addTerritoryByTypingToScope: function () {
            pages.create_deal_scope.elems.territoryField.click();
            pages.create_deal_scope.elems.territoryInput.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.territoryDropDown));
        },


        selectRandomCountry: function () {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.territoryDropDown));
            browser.driver.findElements(By.css("div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        clickOnAddPublisherShareSetLink: function () {
            pages.create_deal_scope.elems.addPublisherShareSetLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.firstPublisherNameField));
        },

        fillInFirstPublisherNameField: function () {
            pages.create_deal_scope.elems.firstPublisherNameField.sendKeys("test");
        },

        fillInFirstPublisherNameOwnPercent: function () {
            var percent = (Math.random() * 3 + 30).toFixed(2);
            pages.create_deal_scope.elems.firstPublisherOwnPercent.sendKeys(percent);
        },

        fillInFirstPublisherNameCollectPercent: function () {
            var percent = (Math.random() * 9 + 1).toFixed(2);
            pages.create_deal_scope.elems.firstPublisherCollectPercent.sendKeys(percent);
        },

        fillInFirstPublisherNameAMField: function () {
            pages.create_deal_scope.elems.firstPublisherNameAMField.sendKeys("wb music corp");
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.publisherNameDropDownData));
        },

        fillInFirstPublisherNameAMOwnPercent: function () {
            var percent = (Math.random() * 9 + 1).toFixed(2);
            pages.create_deal_scope.elems.firstPublisherNameAMCollectPercent.sendKeys(percent);
        },

        selectRandomPublisherNameDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.publisherNameDropDownData));
            browser.driver.findElements(By.css("ul.typeahead.dropdown-menu.ng-scope li.ng-scope a"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        selectSpecificPublisherNameDropDown : function(publisherName){
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.publisherNameDropDownData));
            browser.driver.findElements(By.css("ul.typeahead.dropdown-menu.ng-scope li.ng-scope a"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(publisherName) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        clickOnPublisherTypeEOrPAArrow: function () {
            pages.create_deal_scope.elems.firstPublisherTypeEOrPAArrow.click();
        },

        selectSpecificOptionEOrPAPublisherType: function (publisherType) {
            var desiredOption;
            browser.wait(pages.create_deal_scope.elems.firstPublisherTypeEOrPADropDown);
            browser.driver.findElements(by.css("ul.typeahead.dropdown-menu.ng-scope li.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(publisherType) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        savePublisherShareSet: function () {
            pages.create_deal_scope.elems.savePublisherShareSet.click();
            pages.create_deal_scope.waitForAjax();
        },

        cancelPublisherShareSet: function () {
            pages.create_deal_scope.elems.cancelPublisherShareSet.click();
            pages.create_deal_scope.waitForAjax();
        }


    });
}