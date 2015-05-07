"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var randomId = require("../helpers/randomId");
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.create_deal_scope === undefined) {
    pages.create_deal_scope = new ftf.pageObject({
        locators: {
            addScopeIcon: {xpath: "//*[@class='overview-header']//h3[contains(text(),'Scopes')]//a[@class='column-add-button']"},
            contractTypeDropDown: {css: "select[name='scopeContractType'] option"},
            territoryField: {xpath: "//*[@class='territoriesStaticView']"},
            territoryInput: {css: "div#scopeTerritory input#searchQueryInput"},
            territoryDropDown: {css: "div.typeaheadDropdown div.item.ng-scope"},
            addPublisherShareSetLink: {xpath: "//*[@data-ng-click='addChain(pubShareSetEdit.model.id, pubShareSetEdit.activeScope.id);']"},
            firstPublisherNameField: {css: "#deal-publisher div.ng-scope:first-child input[name='acquirer']"},
            publisherNameDropDownData: {xpath: "//*[@class='typeahead dropdown-menu ng-scope']/li[@class='ng-scope']/a"}
        },

        addScopeForm: function () {
            pages.create_deal_scope.elems.addScopeIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.deal_scope.elems.contractTypeDropDown));
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
            browser.wait(ExpectedConditions.visibilityOf(pages.deal_scope.elems.territoryInput));
            pages.create_deal_scope.elems.territoryInput.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(pages.deal_scope.elems.territoryDropDown));
        },


        selectRandomCountry: function () {
            var desiredOption;
            browser.driver.findElements(By.css("div.typeaheadDropdown div"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        clickOnAddPublisherShareSetLink: function () {
            pages.create_deal_scope.elems.addPublisherShareSetLink.click();
        },

        fillInFirstPublisherNameField: function () {
            pages.create_deal_scope.elems.firstPublisherNameField.sendKeys("test");
        },

        selectRandomPublisherNameDropDown: function () {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.deal_scope.elems.publisherNameDropDownData));
            browser.driver.findElements(By.xpath("//*[@class='typeahead dropdown-menu ng-scope']/li[@class='ng-scope']/a"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        }

    });
}


