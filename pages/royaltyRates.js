"use strict";
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (pages.royaltyRates === undefined) {


    var pages_path = _tf_config._system_.path_to_pages;
    require(pages_path + "base");

    pages.royaltyRates = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",
        locators: {

            newRoyaltyRateSetButton: {css: ".ng-scope.ng-warn.ng-dirty>div>a"},


            closeRateSetButton: {css: ".btn-cancel"},

            confirmCancelButton: {css: ".modal-footer>.btn-primary"},

            RRNameLabel: {css: ".rate-set-entity-name>div>label"},
            incomeProvidesLabel: {css: ".flex1>label"},
            incomeProviderInput: {css: ".ux-multiselect-type"},
            incomeDateMethodLabel: {css: ".flex1>div:nth-child(2)>div:not([class])>label"},
            effectiveStartDateLabel: {css: ".rate-set-calendar>label"},
            contractualRateLabel: {css: ".rate-set-rate-field>label"},
            interCompanyLabel: {css: ".rate-set-header-row:nth-child(3)>div:not([class])>label"},

            scopeHeadingElement: {css: ".scope-heading"}


        },


        lastSavedRRName: function () {


            return element(by.css(".rate-set-summary-table>table>tbody>tr:last-child>td:nth-child(1)"));
        },
        lastSaveRRIncomeProvider: function () {
            return element(by.css(".rate-set-summary-table>table>tbody>tr:last-child>td:nth-child(3)"));
        },
        lastSavedRRStartDate: function () {

            return element(by.css(".rate-set-summary-table>table>tbody>tr:last-child>td:nth-child(4)"));
        },


        errorMessageRR: function () {

            return element(by.css("div>div>div>.validation-message-text"));
        },

        closeErrorModalHeader: function () {

            return $(".fa.fa-times.pull-right");
        }
        ,
        payout: function () {

            return element.all(by.css(".tg-selectize-contractual-rate__ul>li:first-child")).get(0);
        },

        contractualRateInput: function () {

            return element(by.model("set.rate_percentage"));

        }
        ,
        effectiveStartDateInput: function () {

            return element(by.css(".rate-set-calendar>div>.date-picker-input"));
        }

        ,
        newRoyaltyRateSetButton: function () {
            return element(by.css(" .ng-warn.ng-warn-check-publisher-share-set>div:not(.view-header)>a"));

        },

        royaltyRateInput: function () {
            return browser.driver.findElement(by.css(".rate-set-name-input"));

        },
        scopeHeading: function () {


            return element(by.css(".scope-heading.clearfix.relative"));
        }
        ,
        onReceiptMethodButton: function () {
            return element(by.css(".rate-set-rate-ram>.btn-group")).element(by.buttonText("On Receipt"));


        }
        ,


        //LOCATORS END


        clickNewRoyaltySetButton: function () {


            browser.wait(ExpectedConditions.visibilityOf(this.newRoyaltyRateSetButton()));


            pages.base.scrollIntoView(this.newRoyaltyRateSetButton());
            this.newRoyaltyRateSetButton().click();
        }
        ,
        expandAllIncomeGroups: function () {
            var i = 0;
            browser.driver.findElements(by.xpath(".//*[@id='VIEW-CREATE-DEAL']/div[2]/form/div[1]/div[2]/div/div/div[3]/div[2]/div[2]/div/div[6]/div/div/div[2]/div/div[7]/div[3]/div/div[1]/a/i"))

                .then(function (result) {

                    for (i = 0; i < result.length; i++) {
                        result[i].click();
                    }
                }
            )


        },

        closeRoyaltySet: function () {
            pages.royaltyRates.elems.closeRateSetButton.click();

            ftf.helper.waitForElement(pages.royaltyRates.elems.confirmCancelButton, 30000);
            pages.royaltyRates.elems.confirmCancelButton.click();

        },


        clearRoyaltyRateNameInput: function () {
            var element;

            element = this.royaltyRateInput();
            element.clear();


        },

        selectIncomeProvider: function (sentKeys) {


            var incomeProviderInput;

            incomeProviderInput = browser.driver.findElement(by.css(".ux-multiselect-li>input"));

            incomeProviderInput.sendKeys(sentKeys);
            incomeProviderInput.click();

            var suggestion = $(".ng-scope.ng-binding>strong");
            browser.wait(ExpectedConditions.visibilityOf(suggestion));
            expect(suggestion.getText()).not.toContain("No results");


            var desiredOption;
            browser.driver.findElements(by.css('.ng-scope.ng-binding>strong'))
                .then(function findMatchingOption(options) {
                    options.some(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(sentKeys) != -1) {
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
        selectIncomeProviderByPartialMatch: function (sentKeys) {

            var rateSetTab = $(".rate-sets-top-toolbar");
            browser.wait(ExpectedConditions.visibilityOf(rateSetTab));

            sentKeys = sentKeys.trim();

            if (sentKeys != "") {

                var table = sentKeys.split(",");


                _.each(table, function (element) {


                    sentKeys = element;

                    var incomeProviderInput;
                    incomeProviderInput = browser.driver.findElement(by.css(".flex1>.ng-valid>div>div>div>div>div>input"));


                    pages.base.scrollIntoView($(".flex1>.ng-valid>div>div>div>div>div>input"));

                    var suggestion = $(".tg-typeahead__item-left>strong");

                    browser.wait(ExpectedConditions.invisibilityOf(suggestion));


                    incomeProviderInput.sendKeys(sentKeys);
                    //   incomeProviderInput.click();


                    suggestion = $(".tg-typeahead__item-left>strong");
                    browser.wait(ExpectedConditions.visibilityOf(suggestion));
                    //expect(suggestion.getText()).not.toContain("No results");


                    // incomeProviderInput.sendKeys(protractor.Key.ENTER);
                    suggestion.click();

                    var desiredOption;
                    //
                    //browser.driver.findElements(by.css('.ng-scope.ng-binding>strong'))
                    //    .then(function findMatchingOption(options) {
                    //        options.some(function (option) {
                    //            option.getText().then(function doesOptionMatch(text) {
                    //
                    //
                    //                    if( text.search(sentKeys) > -1){
                    //
                    //                        desiredOption = option;
                    //                        return true;
                    //                    }
                    //                }
                    //            )
                    //        });
                    //    })
                    //    .then(function clickOption() {
                    //        if (desiredOption) {
                    //
                    //            console.log("MAtch");
                    //           // desiredOption.click();
                    //            incomeProviderInput.sendKeys(protractor.Key.ENTER);
                    //        }
                    //    });


                })
            }
        },
        getIncomeProviderInputValue: function () {

            var incomeProviderInput;

            incomeProviderInput = element.all(by.css(".tg-typeahead__tag-name.ng-binding")).get(2);

            return incomeProviderInput.getText();


        },

        getRRInputBorderTopValue: function () {

            var element;

            element = this.royaltyRateInput();

            return element.getCssValue('border-top-color');
        },
        getRRInputBorderRightValue: function () {

            var element;

            element = this.royaltyRateInput();

            return element.getCssValue('border-right-color');
        },

        getRRInputBorderBottomValue: function () {


            var element;

            element = this.royaltyRateInput();

            return element.getCssValue('border-bottom-color');
        },

        getRRInputBorderLeftValue: function () {

            var element;

            element = this.royaltyRateInput();

            return element.getCssValue('border-left-color');
        },
        getRRInputPlaceholderValue: function () {
            var element;

            element = this.royaltyRateInput();

            return element.getAttribute('placeholder');

        },
        typeIntoRRInput: function (text) {
            var element;

            element = this.royaltyRateInput();
            element.clear();
            element.sendKeys(text);

        },
        getRRInputValue: function () {

            var element;

            element = this.royaltyRateInput();
            return element.getAttribute('value');


        }
        ,
        isIncomeDateMethodToggleVisible: function () {
            var dateIncomeToggle;
            dateIncomeToggle = element(by.model('set.income_date_method_code'));


            return dateIncomeToggle.isPresent();


        },

        getActiveIncomeToggle: function () {


            return element.all(by.css('.btn.rate-set-toggle-btn.ng-valid.active')).get(0).getText();


        },
        clickDealSigningTerritoryToggle: function () {
            var dealSigningTerritoryToggle = element.all(by.model('set.income_date_method_code')).get(0);
            dealSigningTerritoryToggle.click();
            browser.driver.sleep(5000);
        },
        clickWarnerChappellToggle: function () {
            var warnerChappellToggle = element.all(by.model('set.income_date_method_code')).get(1);
            warnerChappellToggle.click();
            browser.driver.sleep(5000);


        }
        ,

        effectiveStartDateLabelIsPresent: function () {
            var effectiveStartDateLabel;
            effectiveStartDateLabel = element(by.css(".rate-set-calendar .control-label"));
            return effectiveStartDateLabel.isPresent();

        }
        ,
        effectiveStartDateInputFieldIsPresent: function () {

            var effectiveStartDateInput;
            effectiveStartDateInput = element(by.model("date"));
            return effectiveStartDateInput.isPresent();


        },
        effectiveStartDateCalendarIconIsPresent: function () {
            var effectiveStartDateCalendarIco;
            effectiveStartDateCalendarIco = element(by.css("   .icon-calendar"));
            return effectiveStartDateCalendarIco.isPresent();

        },
        getEffectiveStartDateContextualHelp: function () {
            var effectiveStartDateContextualHelpIcon;
            effectiveStartDateContextualHelpIcon = element(by.css(".rate-set-calendar>.control-label>i"));
            var effectiveStartDateContextualHelp;

            effectiveStartDateContextualHelpIcon.click();
            effectiveStartDateContextualHelp = element(by.css(".tooltip"));


            browser.wait(ExpectedConditions.visibilityOf(effectiveStartDateContextualHelp), 10000);

            return effectiveStartDateContextualHelp.getText();


        },
        getEffectiveStartDateInputValue: function () {
            //var effectiveStartDateInput;
            //effectiveStartDateInput = element(by.css(".rate-set-calendar>div>.date-picker-input"));


            return this.effectiveStartDateInput().getAttribute('value');

        },

        typeIntoEffectiveStartDateInput: function (date) {

            date = date.trim();
            if (date != "") {
                //var effectiveStartDateInput;
                //effectiveStartDateInput = element(by.css(".rate-set-calendar>div>.date-picker-input"));
                this.effectiveStartDateInput().clear();
                this.effectiveStartDateInput().sendKeys(date);
                browser.driver.sleep(2000);
            }

        },
        getEffectiveStartDateErrorMessage: function () {


            var displayedMessage = element(by.css(".rate-set-calendar>.help-inline")).getText();
            return displayedMessage;
        },

        clickEffectiveStartDateCalendarIcon: function () {

            var effectiveStartDateCalendarIco;

            effectiveStartDateCalendarIco = element(by.css(".rate-set-calendar>.control-group>span"));
            effectiveStartDateCalendarIco.click();
        }
        ,

        addPercentageToContractualRateInput: function (percentage) {

            //var contractualRateInput;
            //contractualRateInput = element(by.model("set.rate_percentage"));

            browser.wait(ExpectedConditions.visibilityOf(this.contractualRateInput()));


            this.contractualRateInput().sendKeys(percentage);
            this.contractualRateInput().click();
            //var payout;
            //payout = element(by.css(".tg-selectize-contractual-rate__ul>li:first-child"));
            this.payout().click();
            browser.driver.sleep(2000);
            element(by.css(".tg-selectize-contractual-rate>ul:nth-child(2)>li:nth-child(2)")).click();


        }
        ,
        clickOnReceiptApplicationMethod: function () {


            this.onReceiptMethodButton().click();

        },
        clickYesOnRateMethodModal: function () {

            var rateMethodModalYesButton;
            rateMethodModalYesButton = element(by.css(".modal-footer>.btn-primary"));

            rateMethodModalYesButton.click();

        },
        clickDoneButtonForRRSet: function () {

            var RRDoneButton;
            RRDoneButton = element(by.css(".rate-sets-top-toolbar>button"));

            RRDoneButton.click();


        },

        clickScopeHeading: function () {


            browser.wait(ExpectedConditions.visibilityOf(this.scopeHeading()));
            this.scopeHeading().click();


        },

        errorMessageIsDisplayed: function () {


            return this.errorMessageRR().isPresent();


        }


    });
}

module.exports = pages.royaltyRates;