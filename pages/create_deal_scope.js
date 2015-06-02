"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
var SelectWrapper  = require('../helpers/select-wrapper');


require(pages_path + "base");
if (pages.create_deal_scope === undefined) {
    pages.create_deal_scope = new ftf.pageObject({
        locators: {
            addScopeIcon: {xpath: "//*[@class='overview-header']//h3[contains(text(),'Scopes')]//a[@class='column-add-button']"},
            descriptionField: {css: "input[name='scopeDescription']"},
            contractTypeDropDown: {css: "select[name='scopeContractType'] option"},
            territoryField: {css: "div.tg-territory__input-container div[ng-class='tgTypeaheadWrapClass']"},
            territoryInput: {css: "div.tg-territory__input-container div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            territoryDropDown: {css: "div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            addPublisherShareSetLink: {xpath: "//*[@data-ng-click='addChain(pubShareSetEdit.model.id, pubShareSetEdit.activeScope.id);']"},
            firstPublisherNameField: {css: "#deal-publisher div.ng-scope:first-child input[name='acquirer']"},
            publisherNameDropDownData: {xpath: "//*[@class='typeahead dropdown-menu ng-scope']/li[@class='ng-scope']/a"},
            emptyScopeDiv:{css:".text-warning>.validation-message-error>.validation-message-text"},
            newContractPeriodButton:{css:""}
        },
        //LOCATORS
        emptyScopeDiv:function()
        {
          return $(".ps-container>.text-warning>.validation-message-error>.validation-message-text");

        },
        newContractPeriodButton:function()
        {
            return $$(".column-add-button-icon").first();

        },

        clickNewContractPeriodButton:function(){

            this.newContractPeriodButton().click();

        },
        waitForContractPeriodToBeCreated:function()
        {
            browser.wait(ExpectedConditions.visibilityOf(this.emptyScopeDiv()));

        }
,



        addScopeForm: function () {
            pages.create_deal_scope.elems.addScopeIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.contractTypeDropDown));
        },

        fillScopeDescriptionField: function () {
          pages.create_deal_scope.elems.descriptionField.sendKeys("description");
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
//
//            var mySelect = new SelectWrapper(element);
//
//
//
//// select by visible text
//            mySelect.selectByText(specific_value);


          //  element(by.cssContainingText("select[name='scopeContractType'] option", specific_value)).click();

          //  element(by.cssContainingText('option', specific_value)).click();
          //  var dog = element(by.cssContainingText('.pet', 'Dog'));
        },


        addTerritoryByTypingToScope: function () {
            pages.create_deal_scope.elems.territoryField.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.territoryInput));
            pages.create_deal_scope.elems.territoryInput.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.territoryDropDown));
        },


        selectRandomCountry: function () {
            var desiredOption;
         //   browser.driver.findElements(By.css("div.tg-territory__clusters i[ng-click='$event.stopPropagation(); $toggleClusterSelection(cluster);']"))

            browser.driver.findElements(By.css(".tg-typeahead__suggestions-group-item.ng-scope"))

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
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.publisherNameDropDownData));
            browser.driver.findElements(By.xpath("//*[@class='typeahead dropdown-menu ng-scope']/li[@class='ng-scope']/a"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        }

    });
}