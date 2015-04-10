"use strict";
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (pages.new_deal === undefined) {
    pages.new_deal = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",
        locators: {
            dealSigningTerritory: {css: "button.openPopupButton"},
            dealSigningTerritoryDropDownData: {css: "div.typeaheadDropdown"},zz
            contractingPartiesInput: {xpath: "//*[@ng-model='contractingParties']//div[@ng-class='tgTypeaheadWrapClass']//input[@ng-disabled='$isDisabled()']"},
            contractingPartiesField: {xpath: "//*[@ng-model='contractingParties']//div[@ng-class='tgTypeaheadWrapClass']"},
            contractingPartiesDropDownData: {xpath: "//*[@class='ng-scope']//ul[@class='tg-typeahead__suggestions ng-scope']//li[@class='tg-typeahead__suggestions-group-item ng-scope']/div"},
            continueButton: {xpath: "//*[@class='page-footer']//button[contains(text(),'Continue')]"},
            start_date: {xpath: "//*[@id='actualStartDate']//input"},
            end_target_months: {xpath: "//*[@name='targetEndDuration']"},
            add_scope_icon: {xpath: "//*[@class='overview-header']//h3[contains(text(),'Scopes')]//a[@class='column-add-button']"},
            contract_type_dropdown: {name: "scopeContractType"},
            territory_field: {xpath: "//*[@class='territoriesStaticView']"},
            territory_input: {xpath: "//fieldset[2]/div/div/div/div[2]/div[3]/div[1]/input"}
        },


        selectDesiredSigningTerritory: function () {
            pages.new_deal.elems.dealSigningTerritory.click();



            element(by.css("  .territoriesContainer")).sendKeys("Argentina");

            expect(pages.new_deal.elems.dealSigningTerritoryDropDownData.isDisplayed);
            var desiredOption;
            browser.driver.findElements(by.xpath('//*[@class="item ng-scope"]'))
                .then(function findMatchingOption(options) {
                    options.some(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf("Argentina") != -1) {
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

        fillContractingPartiesField: function (field) {
            pages.new_deal.elems.contractingPartiesField.click();
            pages.new_deal.elems.contractingPartiesInput.sendKeys(field);
        },

        selectContractingPartyValue: function (specific_value) {
            var desiredOption;
            browser.driver.findElements(by.xpath("//*[@class='ng-scope']//ul[@class='tg-typeahead__suggestions ng-scope']//li[@class='tg-typeahead__suggestions-group-item ng-scope']/div"))
                .then(function findMatchingOption(options) {
                    options.some(function (option) {
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

        continueToNextPage: function () {
            pages.new_deal.elems.continueButton.click();
        },

        fillStartActualDate: function () {
            pages.new_deal.elems.start_date.sendKeys("2015-03-12");
        },

        fillTargetEndMonths: function () {
            pages.new_deal.elems.end_target_months.sendKeys("3");
        },

        addScopeForm: function () {
            pages.new_deal.elems.add_scope_icon.click();
            expect(pages.new_deal.elems.contract_type_dropdown.isDisplayed);
        },

        selectContractTypeScope: function (specific_value) {
            var desiredOption;
            browser.driver.findElements(by.name(""))
                .then(function findMatchingOption(options) {
                    options.some(function (option) {
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
            pages.new_deal.elems.territory_field.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.new_deal.elems.territory_input));
            pages.new_deal.elems.territory_input.sendKeys("a");
            //browser.wait(ExpectedConditions.visibilityOf(element(by.xpath("//*[@class='typeaheadDropdown']//div"))));
            var suggestion = $(".typeaheadDropdown");
            browser.wait(ExpectedConditions.visibilityOf(suggestion));
            expect(suggestion.getText()).not.toContain("No results");
        }

    });
}

module.exports = pages.new_deal;