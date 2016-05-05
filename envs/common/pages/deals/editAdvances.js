'use strict';

pages.editAdvances = exports;

exports.editSelectTheContractPeriodAdvancesByIndex = function(index){
    pages.base.scrollIntoView(element(by.css("select[name='advanceContractPeriod']")));
    browser.wait(ExpectedConditions.visibilityOf(element(By.css("select[name='advanceContractPeriod'] option"))));
    browser.driver.findElements(By.css("select[name='advanceContractPeriod'] option"))
        .then(function (options) {
            options[index].click();
        })
};

exports.addAdvanceButton = function () {
    return element(by.cssContainingText('button.btn-primary', 'Add Advance'));
};

exports.clickAddAdvanceButton = function () {
    var button = exports.addAdvanceButton();
    pages.base.scrollIntoView(button);
    browser.wait(EC.visibilityOf(button));

    button.click();
};

exports.contractPeriodSelect = function () {
    return element(by.model('activeAdvance.cpId'));
};

exports.selectContractPeriodByIndex = function (i) {
    var select = exports.contractPeriodSelect();

    select.click();
    select.$$('option').get(i).click();
};

exports.amountInput = function () {
    return element(by.model('activeAdvance.amount'));
};

exports.setAdvanceAmount = function (val) {
    var input = exports.amountInput();

    input.sendKeys(val);
};

exports.currencyTypeahead = function () {
    return element(by.model('activeAdvance.currency'));
};

exports.currencyResults = function () {
    return $('.advance-currency-dropdown');
};

exports.setCurrency = function (name) {
    var typeahead = exports.currencyTypeahead(),
        parent = typeahead.element(by.xpath('..')),
        dropdownButton = parent.$('button.dropdown-toggle'),
        results = exports.currencyResults();

        dropdownButton.click();

        results.element(by.cssContainingText('a', name)).click();
};

exports.distributionRules = (function(){
    var distributionRules = {};

    distributionRules.whenSelect = function () {
        return $('.advance-condition-select');
    };

    distributionRules.setWhen = function (text) {
        var select = distributionRules.whenSelect();

        select.click();
        select.$('option[label="'+ text +'"').click();
    };

    return distributionRules;
})();

exports.saveButton = function () {
    return $('.create-models-buttons-holder .btn-primary');
};

exports.saveAdvance = function () {
    exports.saveButton().click();
};

exports.advanceSummaryHeader = function () {
    return element(by.cssContainingText('.advances-summary h3.clearfix', 'Advance Summary'));;
};

exports.expectToBeRedirectedToAdvanceSummary = function () {
    var header = exports.advanceSummaryHeader();

    browser.wait(EC.visibilityOf(header));
    expect(header.isDisplayed()).toBeTruthy();
};

exports.contractPeriodList = function () {
    return $$('.view-advance');
};

exports.expectContractPeriodsToBe = function (num) {
    var cpList = exports.contractPeriodList();

    expect(cpList.count()).toEqual(num);
};

exports.expectEachContractPeriodToHaveAdvances = function (num) {
    var cpList = exports.contractPeriodList();

    cpList.each(function(elem){
        expect(elem.$$('.accordion-group').count()).toEqual(num);
    });
};

exports.viewAdvanceAssumptionLinks = function () {
    return $$('.show-advance-assumption:not(.ng-hide)');
};

exports.expectContractPeriodsToDisplayAdvanceAssumptionsLink = function () {
    var cpList = exports.contractPeriodList(),
        aaLinks = exports.viewAdvanceAssumptionLinks();

    expect(cpList.count()).toEqual(aaLinks.count());
};

exports.advanceAssumptionsPopUp = function () {

};

exports.expectAdvanceAssumptionsPopUpToAppear = function () {
    var aaLinks = exports.viewAdvanceAssumptionLinks();

    aaLinks.each(function(elem) {
        pages.base.scrollIntoView(elem);
        browser.actions().mouseMove(elem).perform();
        browser.sleep(5000);
    });
};
