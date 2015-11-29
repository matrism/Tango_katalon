'use strict';

var _ = require('lodash'),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.royaltyRates === undefined) {
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
            scopeHeadingElement: {css: ".scope-heading"},
            yesInterCompanyRateCoverMechanical: {css: "div.rate-set_group__coverMechanical button[data-ng-model='group.determines_inter_company_rate']:nth-child(1)"},
            yesInterCompanyRateMechanical: {css: "div.rate-set_group__mechanical button[data-ng-model='group.determines_inter_company_rate']:nth-child(1)"},
            yesInterCompanyRateNonSocietyPerformance: {css: "div.rate-set_group__nonSocietyPerformance button[data-ng-model='group.determines_inter_company_rate']:nth-child(1)"},
            yesInterCompanyRateOthers: {css: "div.rate-set_group__others button[data-ng-model='group.determines_inter_company_rate']:nth-child(1)"},
            yesInterCompanyRatePerformance: {css: "div.rate-set_group__performance button[data-ng-model='group.determines_inter_company_rate']:nth-child(1)"},
            yesInterCompanyRatePrint: {css: "div.rate-set_group__print button[data-ng-model='group.determines_inter_company_rate']:nth-child(1)"},
            yesInterCompanyRateSynch: {css: "div.rate-set_group__synch button[data-ng-model='group.determines_inter_company_rate']:nth-child(1)"},
            yesInterCompanyRateTpp: {css: "div.rate-set_group__tpp button[data-ng-model='group.determines_inter_company_rate']:nth-child(1)"},
            interCompanyInputField: {css: "input[data-ng-model='set.ic_rate']"},
            confirmOverrideModalDialog: {css: "div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='ok()']"},
            overrideModalDialog: {css: "div.modal-dialog.ng-scope"},
            interCompanyArrow: {css: "div.rate-set-header-row span.ng-scope i[data-ng-click='onChevronClick()']"},
            rateSetNameFieldIcon: {css: "div.rate-set-entity-name i[data-ng-click='onChevronClick()']"}
        },

        activeContractPeriod: function () {
            return $(".contract-period-menu-item.ng-scope.active>div>p>strong.overflow");
        },

        editModeActiveScopeName: function () {
            return $(".scope-description-header");
        },

        createModeActiveScopeName: function () {
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

        administratorInput: function () {
            return $$(".publisher-share>div:not(.ng-hide).ng-scope>div>div.ps-name>div>div>div>div>div>div>input").last();
        },

        originalPublishersDropdownList: function () {
            return $$(".tg-typeahead__suggestions-group-item.ng-scope");
        },

        suggestionDropdown: function () {
            return $(".tg-typeahead__suggestions-container");
        },

        originalPublisherInput: function () {
            return $$(".publisher-share>.publisher-row>.ps-name>div>div>div>div>div>div>input").last();
        },

        newPublisherSharedButton: function () {
            return $(".publisher-share-totals>a");
        },

        rateSetCancelButton: function () {
            return $(".btn-cancel");
        },

        incomeProviderDeleteButtons: function () {
            var temp = $$('.ng-scope[ng-switch-when="false"]').last();
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
        },

        NPS: function () {
            return $$(".tg-selectize-contractual-rate>ul>li:not(.m-submenu)").get(1);
        },

        adminFee: function () {
            return $$(".tg-selectize-contractual-rate>ul>li:not(.m-submenu)").get(2);
        },

        payout: function () {

            return $$(".tg-selectize-contractual-rate>ul>li:not(.m-submenu)").first();
        },

        lastPayoutFromSubmenu: function () {
            return $$(".tg-selectize-contractual-rate>ul:nth-child(2)>li:last-child");
        },

        contractualRateInput: function () {
            return element.all(by.model("set.rate_percentage")).last();
        },

        effectiveStartDateInput: function () {
            //return element.all(by.css(".rate-set-calendar>div>.date-picker-input")).last();
            return element(by.css("div.rate-set-calendar div[name='effectiveDate'] input.date-picker-input"));
        },

        newRoyaltyRateSetButton: function () {
            return element(by.css('[data-ng-click="CR.onAddContractualRateSet(activeScope, true)"]'));
        },

        newRoyaltyRateSetButtonEdit: function () {
            return $(".rate-sets-container-inner>a");
        },

        openRRButton: function () {
            return $$(".icon-chevron-down").first();
        },

        royaltyRateInput: function () {
            return $$(".rate-set-name-input").last();

        },
        scopeHeading: function () {
            return element(by.css(".scope-heading.clearfix.relative"));
        },

        onReceiptMethodButton: function () {
            return $$(".rate-set-rate-ram>.btn-group").last().element(by.buttonText("On Receipt"));
        },

        atSourceMethodButton: function () {
            return $$(".rate-set-rate-ram>.btn-group").last().element(by.buttonText("At Source"));
        },

        lastSetOnReceiptFromCoverMechanical: function () {
            return $$(".rate-set_group__coverMechanical>div>div>div>div>.rate-set-rate-ram>div").last().element(by.buttonText("On Receipt"));
        },

        prevailingPopup: function () {
            return $(".prevailing-icr");
        },

        onReceiptMethodButtonOnPrevailingPopup: function () {
            return $$(".prevailing-icr.ng-scope>div:not(.prevailing-label)>button").last();
        },

        //ROYALTY PROCESSING
        royaltyProcessingLink: function () {
            return $(".nav>li:nth-child(2)>a")
        },

        royaltyStatementsLink: function () {
            return $(".nav>li:nth-child(2)>ul>li:first-child>a");
        },

        createManualStatementButton: function () {
            return $(".upper>a:last-child");
        },

        royaltyStatementsTable: function () {
            return $(".clearfix.accordion-filters.columnhead-filters");
        },

        startYearInput: function () {
            return $$(".input-mini.ng-pristine.ng-untouched.ng-valid-ng-max.ng-valid-ng-min.ng-invalid.ng-invalid-required").first();
        },

        startMonthDropdown: function () {
            return $$(".input-mini.ng-pristine.ng-untouched.ng-invalid.ng-invalid-required").first();
        },

        endYearInput: function () {
            return $$(".input-mini.ng-pristine.ng-untouched.ng-valid-ng-max.ng-valid-ng-min.ng-invalid.ng-invalid-required").last();
        },

        endMonthDropdown: function () {
            return $$(".input-mini.ng-pristine.ng-untouched.ng-invalid.ng-invalid-required").last();
        },

        statementAmountInput: function () {
            return $(".span3.ng-pristine.ng-untouched.ng-invalid.ng-invalid-required");
        },

        exchangeRateInput: function () {
            return $(".ng-pristine.ng-untouched.ng-invalid.ng-invalid-required");
        },

        createManualStatementInnerButton: function () {
            return $(".btn.btn-primary.pull-right.ng-scope.ng-binding");
        },

        batchAmountInput: function () {
            return $(".active>.batch-input>input");
        },

        batchDefaultsettings: function () {
            return $(".pull-left>a");
        },

        dropdownMenu: function () {
            return $$(".tg-dropdown-menu>.dropdown-menu").first();
        },

        exploitationDropdownMenu: function () {
            return $$(".tg-dropdown-menu>.dropdown-menu").last();
        },

        incomeTypeDropdown: function () {
            return $$(".tg-dropdown-caret.fa.fa-caret-down").first();
        },

        exploitationTerritoryDropdown: function () {
            return $$(".tg-dropdown-caret.fa.fa-caret-down").last();
        },

        workSearchOptionsDropdown: function () {
            return $('[ng-switch="!!$filterTag.match"]>select');
        },

        workInput: function () {
            return $('.tg-typeahead__input.ng-pristine.ng-untouched.ng-valid[placeholder="Search by Title, Creator or Work ID"]');
        },

        amountRecievedInput: function () {
            return $(".clearfix.table-row.ng-scope>.amount>input");
        },

        manualStatementDoneButton: function () {
            return $(".btn.btn-primary.pull-right.ng-scope.ng-binding");
        },

        expandManualStatementButton: function () {
            return $(".accordion>div:first-child>div>a>div>div.caret-acc");
        },
        //LOCATORS END

        clickNewRoyaltySetButton: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.newRoyaltyRateSetButton()));

            pages.base.scrollIntoView(this.newRoyaltyRateSetButton());
            this.newRoyaltyRateSetButton().click();
        },

        clickAddAnotherRoyaltySetButton: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.newRoyaltyRateSetButton()));

            pages.base.scrollIntoView(this.newRoyaltyRateSetButton());
            this.newRoyaltyRateSetButton().click();
        },

        clickNewRoyaltySetButtonEdit: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.newRoyaltyRateSetButtonEdit()));

            pages.base.scrollIntoView(this.newRoyaltyRateSetButtonEdit());
            this.newRoyaltyRateSetButtonEdit().click();
        },

        expandAllIncomeGroups: function () {
            browser.sleep(5000);
            var i = 0;
            pages.base.scrollIntoView(this.openRRButton());
            browser.wait(ExpectedConditions.visibilityOf(this.openRRButton()));
            browser.wait(ExpectedConditions.elementToBeClickable(this.openRRButton()));

            $$(".icon-chevron-down")
                .then(function (result) {

                    for (i = 0; i < result.length; i++) {
                        pages.base.scrollIntoView(result[i]);
                        browser.wait(ExpectedConditions.visibilityOf(result[i]));
                        browser.wait(ExpectedConditions.elementToBeClickable(result[i]));
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

                    for (i = 0; i < result.length - 1; i++) {
                        result[i].click();
                    }
                }
            )
        },

        typeInAllInputs: function (value) {
            var i = 0;

            browser.driver.executeScript(" var els = document.querySelectorAll('.rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input');" +
                "   for (var i=0; i < els.length; i++) {" +
                "       els[i].value = '1.23'; }");
            browser.driver.findElements(by.css(".rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input"))
                .then(function (result) {
                    for (i = 0; i < result.length; i++) {
                        result[i].sendKeys("45");
                    }
                }
            )
        },
        typeAllInputs: function (value) {
            var i = 0;

            browser.driver.executeScript(" var els = document.querySelectorAll('.rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input');" +
                "   for (var i=0; i < els.length; i++) {" +
                "       els[i].value = '5.55'; }");
            $$(".rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input")
                .then(function (result) {
                    console.log("Inputs to type in : " + result.length);
                    for (i = 0; i < result.length; i++) {
                        result[i].sendKeys("55");
                    }
                });
        },

        typeAllInputsTest: function (value) {
            var i = 0;

            $$(".rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input")
                .then(function (result) {
                    console.log("Inputs to type in : " + result.length);

                    for (i = 0; i < result.length; i++) {
                        result[i].sendKeys();
                    }
                });
        },

        checkDecimalNumber: function (number) {
            console.log("Check Decimal Number : " + number);

            browser.driver.sleep(10000);
            var i;
            var bool = true;
            browser.driver.executeScript(" var els = document.querySelectorAll('.rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input');" +
                "  console.log( els.length);  ");
            $$(".rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input")
                .then(function (result) {
                    for (i = 0; i < result.length; i++) {
                        console.log("NUmber of inputs" + i);

                        if (bool) {
                            bool = result[i].getAttribute('value') == number;
                            console.log(result[i].getAttribute('value'));
                        }
                    }
                });

            return bool;
        },

        closeRoyaltySet: function () {
            pages.royaltyRates.elems.closeRateSetButton.click();

            ftf.helper.waitForElement(pages.royaltyRates.elems.confirmCancelButton, 30000);
            pages.royaltyRates.elems.confirmCancelButton.click();
        },

        clearRoyaltyRateNameInput: function () {
            browser.wait(ExpectedConditions.visibilityOf($(".rate-set-name-input")));
            this.royaltyRateInput().clear();
        },

        waitPanel: function () {
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
        },

        isIncomeDateMethodToggleVisible: function () {
            var dateIncomeToggle;
            dateIncomeToggle = element(by.model('set.income_date_method_code'));
            return dateIncomeToggle.isPresent();
        },

        clickOnTheYesInterCompanyRateCoverMechanical: function () {
            pages.royaltyRates.elems.yesInterCompanyRateCoverMechanical.click();
        },

        clickOnTheYesInterCompanyRateMechanical: function () {
            pages.royaltyRates.elems.yesInterCompanyRateMechanical.click();
        },

        clickOnTheYesInterCompanyRateNonSocietyPerformance: function () {
            pages.royaltyRates.elems.yesInterCompanyRateNonSocietyPerformance.click();
        },

        clickOnTheYesInterCompanyRateOthers: function () {
            pages.royaltyRates.elems.yesInterCompanyRateOthers.click();
        },

        clickOnTheYesInterCompanyRatePerformance: function () {
            pages.royaltyRates.elems.yesInterCompanyRatePerformance.click();
        },

        clickOnTheYesInterCompanyRatePrint: function () {
            pages.royaltyRates.elems.yesInterCompanyRatePrint.click();
        },

        clickOnTheYesInterCompanyRateSynch: function () {
            pages.royaltyRates.elems.yesInterCompanyRateSynch.click();
        },

        clickOnTheYesInterCompanyRateTpp: function () {
            pages.royaltyRates.elems.yesInterCompanyRateTpp.click();
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
        },

        effectiveStartDateLabelIsPresent: function () {
            var effectiveStartDateLabel;
            effectiveStartDateLabel = element(by.css(".rate-set-calendar .control-label"));
            return effectiveStartDateLabel.isPresent();
        },

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

        clickcancelRateSet: function () {
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
        },

        typeIntoContractualRateInput: function (percentage) {
            browser.wait(ExpectedConditions.visibilityOf(this.contractualRateInput()));
            this.contractualRateInput().sendKeys(percentage);
            this.contractualRateInput().click();
        },

        addPercentageToContractualRateInput: function (percentage) {
            var input = this.contractualRateInput();
            pages.base.scrollIntoView(input);
            input.click();
            input.sendKeys(percentage);
            this.payout().click();
            browser.driver.sleep(2000);
            this.lastPayoutFromSubmenu().click();
        },

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
            browser.wait(ExpectedConditions.visibilityOf(element(by.css(".modal-footer>.btn.btn-primary"))));
            rateMethodModalYesButton = element(by.css(".modal-footer>.btn.btn-primary"));
            pages.base.scrollIntoView(rateMethodModalYesButton);
            rateMethodModalYesButton.click();
        },

        clickLastOnReceiptFromCoverMechanical: function () {
            this.lastSetOnReceiptFromCoverMechanical().click();
        },

        clickDeleteButtonForRRSet: function () {
            var RRDoneButton;
            RRDoneButton = element(by.css("button[data-ng-click='CR.onRatesSetDelete(set, activeScope)']"));
            pages.base.scrollIntoView(RRDoneButton);
            RRDoneButton.click();

            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.modal-footer button[data-ng-click='data.delete()']"))));
            browser.wait(ExpectedConditions.elementToBeClickable(element(by.css("div.modal-footer button[data-ng-click='data.delete()']"))));
            //pages.base.scrollIntoView(element(by.css("div.modal-footer button[data-ng-click='data.delete()']")));
            browser.actions().mouseMove(element(by.css("div.modal-footer button[data-ng-click='data.delete()']"))).perform();
            //browser.actions().click(element(by.css("div.modal-footer button[data-ng-click='data.delete()']"))).perform();
            browser.driver.findElement(by.css("div.modal-footer button[data-ng-click='data.delete()']")).click();
            //browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div.modal-dialog.ng-scope"))));
        },


        clickDoneButtonForRRSet: function () {

            var RRDoneButton;
            RRDoneButton = element(by.css(".rate-sets-top-toolbar>button"));

            pages.base.scrollIntoView(RRDoneButton);
            RRDoneButton.click();
        },

        waitForLoadToAppear: function () {
            browser.wait(ExpectedConditions.visibilityOf($(".pull-right.rate_set-loader")));
        },

        waitForLoadToFinish: function () {
            browser.wait(ExpectedConditions.invisibilityOf($(".pull-right.rate_set-loader")));
        },

        waitForRRToBeSaved: function () {
            browser.driver.sleep(10000);
        },

        clickScopeHeading: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.scopeHeading()));
            this.scopeHeading().click();
            browser.driver.sleep(2000);
            this.scopeHeading().click();
        },

        errorMessageIsDisplayed: function () {
            var messageEl = this.errorMessageRR(),
                isPresent = messageEl.isPresent();

            isPresent.then(function(isPresent) {
                if(!isPresent) {
                    return;
                }

                pages.base.scrollIntoView(messageEl);
            });

            return isPresent;
        },

        clearIncomeProviderInput: function () {
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

        checkDecimalPlaces: function () {
            browser.driver.sleep(5000);
            var i;
            var bool = true;
            browser.driver.findElements(by.css(".rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input"))
                .then(function (result) {
                    for (i = 0; i < result.length; i++) {
                        //   result[i].sendKeys("45");
                        if (bool) {
                            bool = result[i].getAttribute('value').length <= 5;
                        }
                    }
                });

            return bool;
        },

        clickAddNewPublisherSharesButton: function () {
            this.newPublisherSharedButton().click();
        },

        typeIntoOriginalPublisherInput: function (originalPublisher) {
            this.originalPublisherInput().sendKeys(originalPublisher);
        },

        selectFirstOriginalPublisher: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.suggestionDropdown()));

            this.originalPublisherInput().sendKeys(protractor.Key.ARROW_DOWN);
            this.originalPublisherInput().sendKeys(protractor.Key.ENTER);
        },

        selectFirstAdministrator: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.suggestionDropdown()));

            this.administratorInput().sendKeys(protractor.Key.ARROW_DOWN);
            this.administratorInput().sendKeys(protractor.Key.ENTER);
        },

        typeIntoAdministratorInput: function (administrator) {
            this.administratorInput().sendKeys(administrator);
        },

        clickSavePublisherSharesButton: function () {
            this.publisherSharesSaveButton().click();
        },

        originalPublisherNameHasText: function (text) {
            return this.originalPublisherName().getText();
        },

        administratorNameHasText: function (text) {
            return this.administratorName().getText();
        },

        prevailingPopupIsDisplayed: function () {
            pages.base.scrollIntoView(this.prevailingPopup());
            return this.prevailingPopup().isPresent();
        },

        clickOnReceiptMethodOnPrevailingPopup: function () {
            this.onReceiptMethodButtonOnPrevailingPopup().click();
        },

        fillIntoTheInterCompanyRateInputField: function () {
            var number = Math.floor(Math.random() * 80) + 1;
            pages.royaltyRates.elems.interCompanyInputField.click();
            pages.royaltyRates.elems.interCompanyInputField.clear();
            pages.royaltyRates.elems.interCompanyInputField.sendKeys(number);
        },

        selectFromInterCompanyRateRandomValueDropDown: function () {
            pages.royaltyRates.elems.interCompanyArrow.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.scr-ul li.sor-li.ng-scope"))));
            browser.driver.findElements(By.css("ul.scr-ul li.sor-li.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        confirmTheOverrideRRModalDialog: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.royaltyRates.elems.overrideModalDialog));
            browser.wait(ExpectedConditions.elementToBeClickable(pages.royaltyRates.elems.confirmOverrideModalDialog));
            pages.royaltyRates.elems.confirmOverrideModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.royaltyRates.elems.confirmOverrideModalDialog));
        },

        overrideTheRoyaltyRateSetNumberI: function (i) {
            pages.royaltyRates.elems.rateSetNameFieldIcon.click();
            browser.wait(ExpectedConditions.elementToBeClickable(element(By.css("div.rates-set-selector.ng-scope div.rates-set-scr-row.ng-scope"))));
            browser.driver.findElements(By.css("div.rates-set-selector.ng-scope div.rates-set-scr-row.ng-scope"))
                .then(function (options) {
                    options[i - 1].click();
                });
        },

        //ROYALTY PROCESSING
        clickRoyaltyProcessing: function () {
            this.royaltyProcessingLink().click();
        },

        clickRoyaltyStatements: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.royaltyStatementsLink()));
            this.royaltyStatementsLink().click();
        },

        clickCreateManualStatementButton: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.royaltyStatementsTable()));
            browser.driver.sleep(3000);
            this.createManualStatementButton().click();

        },

        typeInIncomeProvider: function (sentKeys) {
            var incomeProviderInput;

            incomeProviderInput = $$(".tg-typeahead__input.ng-pristine.ng-untouched.ng-valid").last();

            var rateSetTab = $('[data-close-others="oneAtATime"]');
            browser.driver.sleep(5000);

            if (sentKeys != "") {
                var suggestion = $(".tg-typeahead__item-left>strong");
                browser.wait(ExpectedConditions.invisibilityOf(suggestion));
                incomeProviderInput.sendKeys(sentKeys);
                suggestion = $(".tg-typeahead__item-left>strong");
                browser.wait(ExpectedConditions.visibilityOf(suggestion));
                suggestion.click();
            }
        },

        typeStartYear: function (value) {
            this.startYearInput().sendKeys(value);
        },

        selectStartMonth: function (value) {
            this.startMonthDropdown().element(by.cssContainingText('option', value)).click()
        },

        typeEndYear: function (value) {
            this.endYearInput().sendKeys(value);
        },

        selectEndMonth: function (value) {
            this.endMonthDropdown().element(by.cssContainingText('option', value)).click()
        },

        typeInStatementAmount: function (value) {
            this.statementAmountInput().sendKeys(value);
        },

        typeInExchangeRate: function (value) {
            this.exchangeRateInput().sendKeys(value);
        },

        createManualStatementClick: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(this.createManualStatementInnerButton()));
            this.createManualStatementInnerButton().click();
        },

        typeInBatchAmount: function (value) {
            browser.wait(ExpectedConditions.visibilityOf(this.batchAmountInput()));
            this.batchAmountInput().sendKeys(value);
        },

        expandBatchDefaultSettings: function () {
            this.batchDefaultsettings().click();
        },

        selectIncomeTypeForBatchFromDropdown: function (value) {
            this.incomeTypeDropdown().click();

            browser.wait(ExpectedConditions.visibilityOf(this.dropdownMenu()));
            this.dropdownMenu().element(by.cssContainingText('li>a', value)).click()
        },

        selectExploitationTerritoryForBatchFromDropdown: function (value) {
            this.exploitationTerritoryDropdown().click();

            browser.wait(ExpectedConditions.visibilityOf(this.exploitationDropdownMenu()));
            this.exploitationDropdownMenu().element(by.cssContainingText('li>a>span', value)).click()
        },

        selectAddByTitleOption: function () {
            this.workSearchOptionsDropdown().element(by.cssContainingText('option', 'Title')).click()
        },

        addWorkByTitleFromTypeAhead: function (sentKeys) {
            var workInput;

            workInput = this.workInput();

            var rateSetTab = $('[data-close-others="oneAtATime"]');
            browser.driver.sleep(5000);

            if (sentKeys != "") {
                var suggestion = $(".tg-typeahead__item-left>strong");
                browser.wait(ExpectedConditions.invisibilityOf(suggestion));
                workInput.sendKeys(sentKeys);
                suggestion = $(".tg-typeahead__item-left>strong");
                browser.wait(ExpectedConditions.visibilityOf(suggestion));
                suggestion.click();
            }
        },

        inputAmountRecievedForWork: function (value) {
            browser.wait(ExpectedConditions.visibilityOf(this.amountRecievedInput()));

            pages.base.scrollIntoView(this.amountRecievedInput());

            browser.wait(ExpectedConditions.elementToBeClickable(this.amountRecievedInput()));
            this.amountRecievedInput().click();
            this.amountRecievedInput().sendKeys(value);
        },

        clickManualStatementDoneButton: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(this.manualStatementDoneButton()));
            pages.base.scrollIntoView(this.manualStatementDoneButton());
            this.manualStatementDoneButton().click();
        },

        manualStatementSavePageIsDisplayed: function () {
            browser.sleep(3000);
            ////  browser.wait(ExpectedConditions.invisibilityOf( this.manualStatementDoneButton()));
            //return this.manualStatementDoneButton().isPresent();
            return true;
        },

        clickExpandManualStatement: function () {
            browser.sleep(5000);
            browser.wait(ExpectedConditions.visibilityOf(this.expandManualStatementButton()));
            this.expandManualStatementButton().click()
        },

        validateManualStatementData: function () {
            browser.sleep(3000);
            return true;
        }
    });
}

module.exports = pages.royaltyRates;
