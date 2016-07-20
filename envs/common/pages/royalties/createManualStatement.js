"use strict";

var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;

if (pages.createManualStatement === undefined) {
    pages.createManualStatement = new ftf.pageObject({
        locators: {
            processingTerritoryButton: {css: "div[data-ng-model='processingTerritoryModel'] div.tg-dropdown-button"},
            incomeProviderInputField: {css: "div[name='income_provider'] input"},
            royaltyPeriodButton: {css: "div[data-royalty-period-model='statement.royalty_period'] div.btn-group.ng-scope"},
            startStatementDistributionYear: {css: "input[data-ng-model='statement.earnings_start.year']"},
            startStatementDistributionMonthDropDown: {css: "select[data-ng-model='statement.earnings_start.month'] option"},
            endStatementDistributionYear: {css: "input[data-ng-model='statement.earnings_end.year']"},
            endStatementDistributionMonthDropDown: {css: "select[data-ng-model='statement.earnings_end.month'] option"}

        },

        selectTheDesiredProcessingTerritory: function (country) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.createManualStatement.elems.processingTerritoryButton));
            pages.createManualStatement.elems.processingTerritoryButton.click();
            browser.driver.findElement(by.css("div.tg-dropdown-menu.ng-scope.tg-dropdown-menu-has-search input")).sendKeys(country);
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(country) != -1) {
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

        selectTheDesiredRoyaltyPeriod: function (royaltyPeriod) {
            var desiredOption;
            pages.createManualStatement.elems.royaltyPeriodButton.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.dropdown-menu li.ng-scope.status-OPEN"))));
            browser.driver.findElements(By.css("ul.dropdown-menu li.ng-scope.status-OPEN"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(royaltyPeriod) != -1) {
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

        fillIntoTheIncomeProviderFieldSpecificValue: function(incomeProvider){
            pages.base.scrollIntoView(pages.createManualStatement.elems.incomeProviderInputField);
            pages.createManualStatement.elems.incomeProviderInputField.sendKeys(incomeProvider);
        },

        selectTheRandomValueForIncomeProviderDropDown: function(){
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
        }


    })
}
