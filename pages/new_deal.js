"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var randomId = require("../helpers/randomId");
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
module.exports = pages.new_deal = new ftf.pageObject({
    url: _tf_config.urls.app_url + "#/create/deal"
});

// Locator.
module.exports.dealSigningTerritoryPopup = function () {
    return element(by.css('button.openPopupButton'));
};

module.exports.dealSigningTerritoryDropDownData = function () {
    return element(by.css("div.typeaheadDropdown div[ng-click='selectTypeaheadOption($index)']"));
};

module.exports.contractingPartiesInput = function () {
    return element(by.css("div[ng-model='contractingParties'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"));
};

module.exports.contractingPartiesField = function () {
    return element(by.css("div[ng-model='contractingParties'] div[ng-class='tgTypeaheadWrapClass']"));
};

module.exports.continueButton = function () {
    return element(by.css("div.page-footer button[data-ng-click='next()']"));
};

module.exports.startDate = function () {
    return element(by.css("div#actualStartDate input"));
};

module.exports.endTargetMonths = function () {
    return element(by.name("targetEndDuration"));
};

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

module.exports.saveDealButton = function () {
    return element(by.css("div.page-footer button[data-ng-click='done()']"));
};


module.exports.selectDesiredSigningTerritory = function (specific_country) {
    pages.new_deal.dealSigningTerritoryPopup().click();
    expect(pages.new_deal.dealSigningTerritoryDropDownData().isDisplayed);
    var desiredOption;
    browser.driver.findElements(by.css("div.typeaheadDropdown div[ng-click='selectTypeaheadOption($index)']"))
        .then(function findMatchingOption(options) {
            options.forEach(function (option) {
                option.getText().then(function doesOptionMatch(text) {
                        if (text.indexOf(specific_country) != -1) {
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

module.exports.selectDesiredSigningTerritorye = function (specific_country) {
    pages.new_deal.dealSigningTerritoryPopup().click();
    expect(pages.new_deal.dealSigningTerritoryDropDownData().isDisplayed);
    var desiredOption;
    browser.driver.findElements(by.css("div.typeaheadDropdown div[ng-click='selectTypeaheadOption($index)']"))
        .then(function findMatchingOption(options) {
            options.forEach(function (option) {
                option.getText().then(function doesOptionMatch(text) {
                        if (specific_country === text){
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


module.exports.fillContractingPartiesField = function (field) {
    pages.new_deal.contractingPartiesField().click();
    pages.new_deal.contractingPartiesInput().sendKeys(field);
};

module.exports.selectContractingPartyValue = function (specific_value) {
    var desiredOption;
    browser.driver.findElements(by.xpath("//*[@class='ng-scope']//ul[@class='tg-typeahead__suggestions ng-scope']//li[@class='tg-typeahead__suggestions-group-item ng-scope']/div"))
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

module.exports.continueToNextPage = function () {
    pages.new_deal.continueButton().click();
};

module.exports.fillStartActualDate = function () {
    pages.new_deal.startDate().sendKeys("2015-03-12");
};

module.exports.fillTargetEndMonths = function () {
    pages.new_deal.endTargetMonths().sendKeys("3");
};

module.exports.addScopeForm = function () {
    pages.new_deal.addScopeIcon().click();
    browser.wait(ExpectedConditions.visibilityOf(pages.new_deal.contractTypeDropDown()));
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
    pages.new_deal.territoryField().click();
    browser.wait(ExpectedConditions.visibilityOf(pages.new_deal.territoryInput()));
    pages.new_deal.territoryInput().sendKeys("a");
    browser.wait(ExpectedConditions.visibilityOf(pages.new_deal.territoryDropDown()));
};


module.exports.selectRandomCountry = function () {
    var desiredOption;
    browser.driver.findElements(By.css("div.typeaheadDropdown div"))
        .then(function (options) {
            var randomNumber = Math.floor((Math.random() * options.length));
            options[randomNumber].click();
        })
};

module.exports.saveNewDeal = function(){
    pages.new_deal.saveDealButton().click();
};



