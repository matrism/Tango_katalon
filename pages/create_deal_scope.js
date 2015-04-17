"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var randomId = require("../helpers/randomId");
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
module.exports = pages.create_deal_scope = new ftf.pageObject({});


//locators
module.exports.addScopeIcon = function () {
    return element(by.xpath("//*[@class='overview-header']//h3[contains(text(),'Scopes')]//a[@class='column-add-button']"));
};

module.exports.contractTypeDropDown = function () {
    return element(by.css("select[name='scopeContractType'] option"));
};

module.exports.territoryField = function () {
    return element(by.xpath("//*[@class='territoriesStaticView']"));
};

module.exports.territoryInput = function () {
    return element(by.css("div#scopeTerritory input#searchQueryInput"));
};

module.exports.territoryDropDown = function () {
    return element(by.css("div.typeaheadDropdown div.item.ng-scope"));
};

module.exports.addPublisherShareSetLink = function () {
    return element(by.xpath("//*[@data-ng-click='addChain(pubShareSetEdit.model.id, pubShareSetEdit.activeScope.id);']"));
    //return element(by.css("a[data-ng-click='addChain(pubShareSetEdit.model.id, pubShareSetEdit.activeScope.id);']"));
};

module.exports.firstPublisherNameField = function () {
    return element(by.css("#deal-publisher div.ng-scope:first-child input[name='acquirer']"));
};

module.exports.publisherNameDropDownData = function () {
    return element(by.xpath("//*[@class='typeahead dropdown-menu ng-scope']/li[@class='ng-scope']/a"));
};


//methods
module.exports.addScopeForm = function () {
    pages.create_deal_scope.addScopeIcon().click();
    browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.contractTypeDropDown()));
};


module.exports.selectContractTypeScope = function (element, specific_value) {
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
};


module.exports.addTerritoryByTypingToScope = function () {
    pages.create_deal_scope.territoryField().click();
    browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.territoryInput()));
    pages.create_deal_scope.territoryInput().sendKeys("a");
    browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.territoryDropDown()));
};


module.exports.selectRandomCountry = function () {
    var desiredOption;
    browser.driver.findElements(By.css("div.typeaheadDropdown div"))
        .then(function (options) {
            var randomNumber = Math.floor((Math.random() * options.length));
            options[randomNumber].click();
        })
};

module.exports.clickOnAddPublisherShareSetLink = function () {
    pages.create_deal_scope.addPublisherShareSetLink().click();
};

module.exports.fillInFirstPublisherNameField = function () {
    pages.create_deal_scope.firstPublisherNameField().sendKeys("test");
};

module.exports.selectRandomPublisherNameDropDown = function () {
    var desiredOption;
    browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.publisherNameDropDownData()));
    browser.driver.findElements(By.xpath("//*[@class='typeahead dropdown-menu ng-scope']/li[@class='ng-scope']/a"))
        .then(function (options) {
            var randomNumber = Math.floor((Math.random() * options.length));
            options[randomNumber].click();
        })
};


