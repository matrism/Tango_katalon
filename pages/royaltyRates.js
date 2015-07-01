"use strict";
var _ = require("lodash");
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
        activeContractPeriod: function () {
          return $(".contract-period-menu-item.ng-scope.active>div>p>strong.overflow");
        },
        editModeActiveScopeName: function () {
          return $(".scope-description-header");
        },
        createModeActiveScopeName:function()
        {
          return $("fieldset>.control-group>.controls>.input-addition>input").getAttribute("value");
        },


        sectionLoader: function () {
          return $(".section-loader");
        },

        originalPublisherName: function () {
return $$(".EDITOR.ps-editor>.DETAIL>div>div>div>.ps-section>div:nth-child(2)>div>.ps-name").first();
        },

            administratorName: function () {
                return $$(".EDITOR.ps-editor>.DETAIL>div>div>div>.ps-section>div:nth-child(3)>div>.ps-name").first();
            },
        publisherSharesSaveButton: function () {
            return $('.CONTROLS>div>button[data-ng-click="tgModularViewMethods.save();"]');
        },
        administratorInput:function()
        {
          return $$(".publisher-share>div:not(.ng-hide).ng-scope>div>div.ps-name>div>div>div>div>div>div>input").last();

        },
        originalPublishersDropdownList:function()
        {
          return $$(".tg-typeahead__suggestions-group-item.ng-scope");
        },


        suggestionDropdown:function()
        {
            return $(".tg-typeahead__suggestions-container");
        },
        originalPublisherInput:function()
        {

          return $$(".publisher-share>.publisher-row>.ps-name>div>div>div>div>div>div>input").last();
        },
        newPublisherSharedButton:function()
        {

          return $(".publisher-share-totals>a");
        },
        rateSetCancelButton:function()
        {

          return $(".btn-cancel");
        },
        incomeProviderDeleteButtons:function(){
var temp =  $$('.ng-scope[ng-switch-when="false"]').last();
          //return element.all(by.css("div:not(.tg-typeahead__tag-wrap)>div>.tg-typeahead__tag-remove"));
            return temp.$("div:not(.tg-typeahead__tag-wrap)>div>.tg-typeahead__tag-remove");

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

        firstSavedRRName: function () {


            return element(by.css(".rate-set-summary-table>table>tbody>tr:first-child>td:nth-child(1)"));
        },
        firstSaveRRIncomeProvider: function () {
            return element(by.css(".rate-set-summary-table>table>tbody>tr:first-child>td:nth-child(3)"));
        },
        firstSavedRRStartDate: function () {

            return element(by.css(".rate-set-summary-table>table>tbody>tr:first-child>td:nth-child(4)"));
        },

        savedRRNames: function () {


            return $$(".rate-set-summary-table>table>tbody>tr>td:nth-child(1)");
        },
        saveRRIncomeProviders: function () {
            return element(by.css(".rate-set-summary-table>table>tbody>tr>td:nth-child(3)"));
        },
        savedRRStartDates: function () {

            return element(by.css(".rate-set-summary-table>table>tbody>tr>td:nth-child(4)"));
        },




        errorMessageRR: function () {

            return element(by.css("div>div>div>.validation-message-text"));
        },

        closeErrorModalHeader: function () {

            return $(".fa.fa-times.pull-right");
        }
        ,
        NPS: function () {
          return   $$(".tg-selectize-contractual-rate>ul>li:not(.m-submenu)").get(1);
        },
        adminFee: function () {
          return   $$(".tg-selectize-contractual-rate>ul>li:not(.m-submenu)").get(2);
        },
        payout: function () {

            return $$(".tg-selectize-contractual-rate>ul>li:not(.m-submenu)").first();
        },
        lastPayoutFromSubmenu: function () {
          return $$(".tg-selectize-contractual-rate>ul:nth-child(2)>li:last-child");
        },

        contractualRateInput: function () {

            return element.all(by.model("set.rate_percentage")).last();

        }
        ,
        effectiveStartDateInput: function () {

            return element.all(by.css(".rate-set-calendar>div>.date-picker-input")).last();
        }

        ,
        newRoyaltyRateSetButton: function () {
            return element(by.css('[data-ng-click="CR.onAddContractualRateSet(activeScope, true)"]'));

        },
        newRoyaltyRateSetButtonEdit: function () {
            return $(".rate-sets-container-inner>a");

        },

        royaltyRateInput: function () {
            return $$(".rate-set-name-input").last();

        },
        scopeHeading: function () {


            return element(by.css(".scope-heading.clearfix.relative"));
        }
        ,
        onReceiptMethodButton: function () {
            return $$(".rate-set-rate-ram>.btn-group").last().element(by.buttonText("On Receipt"));


        }
        ,
        atSourceMethodButton: function () {
            return $$(".rate-set-rate-ram>.btn-group").last().element(by.buttonText("At Source"));
        },

        lastSetOnReceiptFromCoverMechanical: function () {
           return  $$(".rate-set_group__coverMechanical>div>div>div>div>.rate-set-rate-ram>div").last().element(by.buttonText("On Receipt"));
        },
        prevailingPopup: function () {
            return $(".prevailing-icr");
        },
        onReceiptMethodButtonOnPrevailingPopup: function () {
          return $$(".prevailing-icr.ng-scope>div:not(.prevailing-label)>button").last();
        },



        //LOCATORS END


        clickNewRoyaltySetButton: function () {


            browser.wait(ExpectedConditions.visibilityOf(this.newRoyaltyRateSetButton()));


            pages.base.scrollIntoView(this.newRoyaltyRateSetButton());
            this.newRoyaltyRateSetButton().click();
        }
        ,
        clickNewRoyaltySetButtonEdit: function () {


            browser.wait(ExpectedConditions.visibilityOf(this.newRoyaltyRateSetButtonEdit()));


            pages.base.scrollIntoView(this.newRoyaltyRateSetButtonEdit());
            this.newRoyaltyRateSetButtonEdit().click();
        },

        expandAllIncomeGroups: function () {

            browser.driver.sleep(5000);
            var i = 0;

            $$(".icon-chevron-down")
                .then(function (result) {

                    for (i = 0; i < result.length; i++) {
                        result[i].click();
                    }
                }
            )


        },
        closeAllButLastIncomeGroups: function () {


            browser.driver.sleep(5000);
            var i = 0;

            $$(".rate-set-row.rate-set-header>a>.icon-chevron-up")
                .then(function (result) {

                    for (i = 0; i < result.length-1; i++) {
                        result[i].click();
                    }
                }
            )

        },

        typeInAllInputs:function(value){
            var i = 0;



            browser.driver.executeScript(

                " var els = document.querySelectorAll('.rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input');"+
                "   for (var i=0; i < els.length; i++) {"+
                "       els[i].value = '1.23'; }"



            );
           browser.driver.findElements(by.css(".rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input"))

                .then(function (result) {

                    for (i = 0; i < result.length; i++) {

                      result[i].sendKeys("45");


                    }




                    })
                },
        typeAllInputs:function(value){
            var i = 0;



            browser.driver.executeScript(

                " var els = document.querySelectorAll('.rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input');"+
                "   for (var i=0; i < els.length; i++) {"+
                "       els[i].value = '5.55'; }"



            );
          $$(".rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input")

                .then(function (result) {

                    console.log("Inputs to type in : "+ result.length);
                    for (i = 0; i < result.length; i++) {

                        result[i].sendKeys("55");


                    }




                })
        },
        typeAllInputsTest:function(value){
            var i = 0;

            $$(".rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input")

                .then(function (result) {

                    console.log("Inputs to type in : "+ result.length);
                    for (i = 0; i < result.length; i++) {

                        result[i].sendKeys();


                    }




                })
        },
        checkDecimalNumber:function(number)
        {



            console.log("Check Decimal Number : "+number);
            browser.driver.sleep(10000);
            var i ;
            var bool = true;
            browser.driver.executeScript(

                " var els = document.querySelectorAll('.rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input');"+
                "  console.log( els.length);  "



            );
            $$(".rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input")


                .then(function (result) {


                    for (i = 0; i < result.length; i++) {
                        console.log("NUmber of inputs"+i);
                        if(bool)

                        {


                            bool =  result[i].getAttribute('value') == number;
                            console.log( result[i].getAttribute('value'));


                        }
                    }


                });


            return bool;






                }









        ,

        closeRoyaltySet : function () {
            pages.royaltyRates.elems.closeRateSetButton.click();

            ftf.helper.waitForElement(pages.royaltyRates.elems.confirmCancelButton, 30000);
            pages.royaltyRates.elems.confirmCancelButton.click();

        },


        clearRoyaltyRateNameInput: function () {

            browser.wait(ExpectedConditions.visibilityOf($(".rate-set-name-input")));
            this.royaltyRateInput().clear();


        },
        waitPanel:function()
        {
            var element;

            element = $(".rate-set-name-input");
            browser.wait(ExpectedConditions.visibilityOf(element));

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
                  // incomeProviderInput = browser.driver.findElement(by.css(".flex1>.ng-valid>div>div>div>div>div>input"));

                   incomeProviderInput = $$(".flex1>.ng-valid>div>div>div>div>div>input").last();


                    pages.base.scrollIntoView($(".flex1>.ng-valid>div>div>div>div>div>input"));

                    var suggestion = $(".tg-typeahead__item-left>strong");

                    browser.wait(ExpectedConditions.invisibilityOf(suggestion));


                    incomeProviderInput.sendKeys(sentKeys);
                    //   incomeProviderInput.click();


                    suggestion = $(".tg-typeahead__item-left>strong");
                    browser.wait(ExpectedConditions.visibilityOf(suggestion));

                    suggestion.click();



                })
            }
        },
        getIncomeProviderInputValue: function () {

            var incomeProviderInput;

            incomeProviderInput = element.all(by.css(".tg-typeahead__tag-name.ng-binding")).get(2);


            return incomeProviderInput.getText();


        },
        getEditIncomeProviderInputValue: function () {
            var incomeProviderInput;

            incomeProviderInput = $$(".tg-typeahead__tag-name.ng-binding").last();


            return incomeProviderInput.getText();
        },
        getIncomeProviderInputValueOption: function () {

            var incomeProviderInput;
            var temp = [];



            incomeProviderInput = element.all(by.css("div:not(.tg-typeahead__tag-wrap)>div>.tg-typeahead__tag-name.ng-binding"));


            return temp.push(incomeProviderInput.getText());


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

            return this.effectiveStartDateInput().getAttribute('value');

        },

        typeIntoEffectiveStartDateInput: function (date) {

            date = date.trim();
            if (date != "") {

                this.effectiveStartDateInput().clear();
                this.effectiveStartDateInput().sendKeys(date);
                browser.driver.sleep(2000);
            }

        },
        clickcancelRateSet:function()
        {

            this.rateSetCancelButton().click();

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
        typeIntoContractualRateInput: function (percentage) {

            browser.wait(ExpectedConditions.visibilityOf(this.contractualRateInput()));


            this.contractualRateInput().sendKeys(percentage);
            this.contractualRateInput().click();
        },
        addPercentageToContractualRateInput: function () {


            this.payout().click();
            browser.driver.sleep(2000);
           this.lastPayoutFromSubmenu().click();


        }
        ,

        addNPSToContractualRateInput: function () {

            this.NPS().click();
            browser.driver.sleep(2000);

        },
        addAdminFeeToContractualRateInput: function () {

            this.adminFee().click();
            browser.driver.sleep(2000);

        },
        clickButtonOnReceiptApplicationMethod: function () {


            this.onReceiptMethodButton().click();

        },
        clickButtonAtSourceApplicationMethod: function () {
            this.atSourceMethodButton().click();
        },
        clickYesOnRateMethodModal: function () {

            var rateMethodModalYesButton;
            rateMethodModalYesButton = element(by.css(".modal-footer>.btn-primary"));

            rateMethodModalYesButton.click();

        },
        clickLastOnReceiptFromCoverMechanical: function () {

            this.lastSetOnReceiptFromCoverMechanical().click();
        },
        clickDoneButtonForRRSet: function () {


            console.log(JSON.stringify( hash.royaltyRates.royaltyRateObjectsList, null, 4));

            var RRDoneButton;
            RRDoneButton = element(by.css(".rate-sets-top-toolbar>button"));

            RRDoneButton.click();




        },
        waitForLoadToAppear: function () {
            browser.wait(ExpectedConditions.visibilityOf($(".pull-right.rate_set-loader")));
        },
        waitForLoadToFinish: function () {
            browser.wait(ExpectedConditions.invisibilityOf($(".pull-right.rate_set-loader")));
        },

        waitForRRToBeSaved:function()
        {
           browser.driver.sleep(10000);

        },

        clickScopeHeading: function () {


            browser.wait(ExpectedConditions.visibilityOf(this.scopeHeading()));
            this.scopeHeading().click();


        },

        errorMessageIsDisplayed: function () {


            return this.errorMessageRR().isPresent();


        },

        clearIncomeProviderInput:function()
        {
            //while(this.incomeProviderDeleteButtons().isPresent())
            //{

                this.incomeProviderDeleteButtons().click();
          //  }

            //var index;
            //var elements = this.incomeProviderDeleteButtons();
            //console.log( this.incomeProviderDeleteButtons().length);
            //
            //for (index = 0; index < elements.length; ++index) {
            //  //  console.log(a[index]);
            //
            //    elements[index].click();
            //
            //}
          //  elements.forEach(function(element) {
             //   element.click();
            //});

        },
        checkDecimalPlaces:function()
        {
            browser.driver.sleep(5000);
            var i ;
            var bool = true;
            browser.driver.findElements(by.css(".rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input"))

                .then(function (result) {

                    for (i = 0; i < result.length; i++) {

                     //   result[i].sendKeys("45");


                        if(bool)
                        {

                       bool =  result[i].getAttribute('value').length <= 5;
                        }

                    }


                });


            return bool;
        },

        clickAddNewPublisherSharesButton:function()
        {
            this.newPublisherSharedButton().click();


        },
       typeIntoOriginalPublisherInput:function(originalPublisher)
        {
            this.originalPublisherInput().sendKeys(originalPublisher);

        },

        selectFirstOriginalPublisher:function()
        {
            browser.wait(ExpectedConditions.visibilityOf(this.suggestionDropdown()));

           this.originalPublisherInput().sendKeys(protractor.Key.ARROW_DOWN);
            this.originalPublisherInput().sendKeys(protractor.Key.ENTER);



        },
        selectFirstAdministrator:function()
        {

            browser.wait(ExpectedConditions.visibilityOf(this.suggestionDropdown()));

            this.administratorInput().sendKeys(protractor.Key.ARROW_DOWN);
            this.administratorInput().sendKeys(protractor.Key.ENTER);
        }

        ,

        typeIntoAdministratorInput:function(administrator)
        {
            this.administratorInput().sendKeys(administrator);

        },

        clickSavePublisherSharesButton: function () {
            this.publisherSharesSaveButton().click();
        },

        originalPublisherNameHasText:function(text)
        {

            return this.originalPublisherName().getText();
        },
       administratorNameHasText: function (text) {
           return this.administratorName().getText();
       },

        prevailingPopupIsDisplayed: function () {
            pages.base.scrollIntoView( this.prevailingPopup());
            return this.prevailingPopup().isPresent();
        },
        clickOnReceiptMethodOnPrevailingPopup: function () {
            this.onReceiptMethodButtonOnPrevailingPopup().click();
        }




    });
}

module.exports = pages.royaltyRates;