"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

if (pages.editRoyaltyRates === undefined) {
    pages.editRoyaltyRates = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",
        locators: {
            editRrArea: {css: "div.rate-set-summary-table"},
            editRrIcon: {css: "button[ng-click='onAddContractualRateSet()']"},
            newRoyaltyRate: {css: ".ng-pristine.ng-warn.ng-warn-check-publisher-share-set>div>a"},
            newRoyaltyRateSetButton: {css: ".ng-scope.ng-warn.ng-dirty>div>a"},
            closeRateSetButton: {css: ".rate-set-footer>.btn-cancel"},
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

        editTheExistingRoyaltyRate: function () {
            browser.actions().mouseMove(pages.editRoyaltyRates.elems.editRrArea).perform();
            pages.editRoyaltyRates.elems.editRrIcon.click();
        },

        clickCancelToTheModalDialog: function () {
            var cancelModal = element(By.css("div.modal-footer button[data-ng-click='cancel()']"));
            browser.wait(ExpectedConditions.visibilityOf(cancelModal));
            pages.base.scrollIntoView(cancelModal);
            cancelModal.click();
        },

        clickCancelButtonForRRSet: function () {
            var RRCancelButton;
            RRCancelButton = element(by.css("button[ng-click='onRateSetCancel(set)']"));

            pages.base.scrollIntoView(RRCancelButton);
            RRCancelButton.click();
            //browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.modal-footer button[data-ng-click='ok()']"))));
        },

        clickConfirmCancelButtonForRRSet: function () {
            var elem = element(by.css("div.modal-footer button[data-ng-click='ok()']"));
            pages.base.scrollIntoView(elem);
            elem.click();
        },

        clickDeleteButtonForRRSet: function () {
            var RRDeleteButton;
            RRDeleteButton = element(by.css("button[ng-click='onRatesSetDelete(set)']"));

            pages.base.scrollIntoView(RRDeleteButton);
            RRDeleteButton.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.cssContainingText("button","Delete"))));
        },

        clickConfirmDeleteButtonForRRSet: function () {
            var elem = element(by.cssContainingText('[data-ng-click="data.delete()"]',"Delete"));
            pages.base.scrollIntoView(elem);
            elem.click();
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css('[ng-model="set.description"]'))));
        },

        clickDeleteButtonForRRSetWithoutConfirm: function () {
            var RRDeleteButton;
            RRDeleteButton = element(by.css("button[data-ng-click='CR.onRatesSetDelete(set, activeScope)']"));

            pages.base.scrollIntoView(RRDeleteButton);
            RRDeleteButton.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.modal-footer button[data-ng-click='data.delete()']"))));
        },

        openRRButton: function () {
            return element(by.css('div[ng-repeat="set in tgModularEditModel.ratesSets.$getItems() | tgOrderObjectBy : \'sequence_number\' : false"] .rate-set-chevron'));
            //return $(".icon-chevron-down");
        },

        rrSumarryTable: function () {
            return element(by.css(".rate-set-summary-table"));
        },

        editSavedRRIcon: function () {
            return element(by.css(".rate-set-summary-table>button"));
        },

        royaltyRateName: function () {
            return element(by.css(".ng-scope>td>strong"));
        },

        searchTypeAheadDropdown: function () {
            return element(by.css(" .tg-typeahead__suggestions-group-item-inner"));
        },

        royaltyRateDate: function () {
            return element(by.css(".rate-sets-table>tbody>tr>td:nth-child(4)"));
        },

        RRIncomeDateMethodButton: function () {
        },

        RApplicationMethodButton: function () {
            return this.RApplicationMethodButton().getText();
        },

        newRoyaltySetButton: function () {
            //return element(by.css('[data-ng-click="CR.onAddContractualRateSet(activeScope, true)"]'));
            return element(by.css('a[ng-click="onAddContractualRateSet(true)"]'));
        },

        royaltyRateInput: function () {
            return element(by.css(".rate-set-name-input"));
        },

        scopeHeading: function () {
            return element(by.css(".scope-heading.clearfix.relative"));
        },

        ///END OF LOCATORS
        clickNewRoyaltySetButton: function () {
            browser.driver.sleep(3000);
            asAlways(
                this.newRoyaltySetButton(),
                'scrollIntoView', 'click', 'waitForAjax'
            );
        },

        closeRoyaltySet: function (options) {
            options = options || {};

            var cancelBtn = pages.editRoyaltyRates.elems.closeRateSetButton,
                confirmBtn = pages.editRoyaltyRates.elems.confirmCancelButton;

            pages.base.scrollIntoView(cancelBtn);

            cancelBtn.click();

            if (options.confirm || options.confirm === undefined) {
                ftf.helper.waitForElement(confirmBtn, 30000);
                confirmBtn.click();
            }
        },

        clearRoyaltyRateNameInput: function () {
            this.royaltyRateInput().clear();
        },

        incomeProviderTypeahead: function () {
            return element(by.model('set.income_providers'));
        },

        incomeProviderInput: function () {
            return this.incomeProviderTypeahead().element(by.model('$term'));
        },

        incomeProviderSearchResultsContainer: function () {
            return $('.tg-typeahead__suggestions');
        },

        waitForIncomeProviderSearchResults: function () {
            browser.wait(EC.visibilityOf(
                this.incomeProviderSearchResultsContainer()
            ));
        },

        incomeProviderSearchResultElements: function () {
            this.waitForIncomeProviderSearchResults();
            return $$('.tg-typeahead__suggestions-group-item');
        },

        selectIncomeProvider: function (value) {
            this.incomeProviderInput().sendKeys(value);
            this.incomeProviderSearchResultElements().first().click();
        },

        getIncomeProviderInputValue: function () {
            return this.incomeProviderInput().getText();
        },

        getRRInputBorderTopValue: function () {
            var element = this.royaltyRateInput();

            return element.getCssValue('border-top-color');
        },

        getRRInputBorderRightValue: function () {
            var element = this.royaltyRateInput();

            return element.getCssValue('border-right-color');
        },

        getRRInputBorderBottomValue: function () {
            var element = this.royaltyRateInput();

            return element.getCssValue('border-bottom-color');
        },

        getRRInputBorderLeftValue: function () {
            var element = this.royaltyRateInput();

            return element.getCssValue('border-left-color');
        },

        getRRInputPlaceholderValue: function () {

            var element = this.royaltyRateInput();

            return element.getAttribute('placeholder');

        },

        typeIntoRRInput: function (text) {
            var element = this.royaltyRateInput();

            element.clear();
            element.sendKeys(text);
        },

        getRRInputValue: function () {
            var element = this.royaltyRateInput();

            return element.getAttribute('value');
        },

        validateRRInput: function () {
            var input = this.royaltyRateInput();

            pages.base.scrollIntoView(input);
            expect(pph.matchesCssSelector(input, '.ng-valid')).toBeTruthy();
        },

        isIncomeDateMethodToggleVisible: function () {
            var dateIncomeToggle;
            dateIncomeToggle = element(by.model('set.income_date_method_code'));

            return dateIncomeToggle.isPresent();
        },

        getActiveIncomeToggle: function () {
            return element.all(by.css('.btn.rate-set-toggle-btn.ng-valid.active')).get(0).getText();
        },

        incomeDateMethodButtonsContainer: function () {
            return element.all(by.model(
                'set.income_date_method_code'
            )).first().element(by.xpath('..'));
        },

        clickDealSigningTerritoryToggle: function () {
            var dealSigningTerritoryToggle = this.incomeDateMethodButtonsContainer().$(
                '[data-btn-radio="\'DRDST\'"]'
            );

            dealSigningTerritoryToggle.click();

            browser.driver.sleep(5000);
        },

        clickWarnerChappellToggle: function () {
            var warnerChappellToggle = this.incomeDateMethodButtonsContainer().$(
                '[data-btn-radio="\'DRWC\'"]'
            );

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
            effectiveStartDateContextualHelp = element(by.css(".tooltip"));
            effectiveStartDateContextualHelpIcon.click();

            browser.wait(ExpectedConditions.visibilityOf(effectiveStartDateContextualHelp), 10000);

            return effectiveStartDateContextualHelp.getText();
        },

        getEffectiveStartDateInputValue: function () {
            var effectiveStartDateInput;
            effectiveStartDateInput = element(by.css(".rate-set-calendar>div>.date-picker-input"));

            return effectiveStartDateInput.getAttribute('value');
        },

        typeIntoEffectiveStartDateInput: function (date) {
            var effectiveStartDateInput;
            effectiveStartDateInput = element(by.css(".rate-set-calendar>div>.date-picker-input"));
            effectiveStartDateInput.clear();
            effectiveStartDateInput.sendKeys(date);
            browser.driver.sleep(2000);
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

        addPercentageToContractualRateInput: function (percentage) {
            var contractualRateInput;
            contractualRateInput = element(by.model("set.rate_percentage"));
            contractualRateInput.sendKeys(percentage);
            contractualRateInput.click();
            var payout;
            payout = element(by.css(".tg-selectize-contractual-rate__ul>li:first-child"));
            payout.click();
            browser.driver.sleep(2000);
            element(by.css(".tg-selectize-contractual-rate>ul:nth-child(2)>li:nth-child(2)")).click();
        },

        clickOnReceiptApplicationMethod: function () {
            var onReceiptMethodButton;
            onReceiptMethodButton = element(by.css(".rate-set-rate-ram>.btn-group")).element(by.buttonText("On Receipt"));

            onReceiptMethodButton.click();
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
            browser.driver.sleep(5000);
            this.scopeHeading.click();
        },

        clickRRSumarryTable: function () {
            var el = this.rrSumarryTable();

            browser.wait(ExpectedConditions.visibilityOf(el));

            return asAlways(el, 'scrollIntoView', 'click');
        },

        clickOpenRRButton: function () {
            pages.base.scrollIntoView(this.openRRButton());
            browser.wait(ExpectedConditions.visibilityOf(this.openRRButton()));
            browser.wait(ExpectedConditions.elementToBeClickable(this.openRRButton()));

            this.openRRButton().click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("button[ng-click='onRateSetCancel(set)']"))));
        },

        clickEditSavedRRIcon: function () {
            asAlways(this.rrSumarryTable(), 'scrollIntoView', 'hover');
            this.editSavedRRIcon().click();
        },

        getSavedRRName: function () {
            return this.royaltyRateName().getText();
        },

        getSavedRRDate: function () {
            return this.royaltyRateDate().getText();
        },

        getSavedRRIncomeDateMethod: function () {
            return this.RRIncomeDateMethodButton().getText();
        },

        getSavedRRApplicationMethod: function () {
            return this.RApplicationMethodButton().getText();
        },

        selectValueFromDropdown: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.searchTypeAheadDropdown()));
            this.searchTypeAheadDropdown().click();
        }
    });
}

module.exports = pages.editRoyaltyRates;
