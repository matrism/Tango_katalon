'use strict';

var ExpectedConditions = protractor.ExpectedConditions,
    tgDropdown = require('../../../../helpers/tgDropdown.js'),
    _ = require('lodash'),
    testData = {};

pages.royaltyStatements = exports;

exports.royaltyPeriodDropdown = function () {
    return tgRoyaltyPeriod.byModel('filters.royalty_period');
};

exports.selectFirstRoyaltyPeriod = function () {
    var dropdown = exports.royaltyPeriodDropdown();

    dropdown.select(0);
};

exports.selectRoyaltyPeriod = function (val) {
    var dropdown = exports.royaltyPeriodDropdown();

    dropdown.selectValue(val);
};

exports.processingTerritoryDropdown = () => {
    return tgDropdown(by.model('processingTerritoryModel'));
};

exports.validateProcessingTerritory = (value) => {
    expect(exports.processingTerritoryDropdown().getSelectedValue()).toBe(value);
};

exports.selectProcessingTerritory = (val) => {
    let elem = exports.processingTerritoryDropdown();

    elem.selectValue(val);
    pages.base.waitForAjax();
};

exports.storeSelectedPeriod = (variable) => {
    exports.royaltyPeriodDropdown().getSelectedValue().then((text) => {
        hash.testVariables[variable] = text
    });
};

exports.validateRoyaltyPeriod = (value) => {
    value = callResultOrValue(value);
    expect(exports.royaltyPeriodDropdown().getSelectedValue()).toBe(value);
};

exports.statementList = function () {
    pages.base.waitForAjax();
    return element.all(by.repeater('statement in statements'));
};

exports.storeFirstStatementId = function () {
    var list = exports.statementList();
    list.first().$('.statement-id').getText().then(function(id){
        testData.firstStatementId = id;
    });
};

exports.storeIncomeProviders = function () {
    var list = exports.statementList();

    list.$$('.income-provider').getText().then(function(arr){
        testData.incomeProviders = _.uniq(arr);
    });
}

exports.storeCompanies = function () {
    var list = exports.statementList();

    list.$$('.company').getText().then(function(arr){
        arr = arr.filter(Boolean);
        testData.companies = _.uniq(arr);
    });
}

exports.expectStatementListToBePopulated = function() {
    var list = exports.statementList();

    expect(list.count()).toBeGreaterThan(0);
};

exports.expectAllVisibleStatementsToHaveColumn = function (name, column) {
    var list = exports.statementList();

    list.count().then(function(count){
        if (count) {
            list.$$(column).getText().then(function(arr){

                var onlyItemsOfExpectedType = _.every(arr, function(text) {
                    return text === name;
                });

                expect(onlyItemsOfExpectedType).toBe(true);
            });
        }
    });

};

exports.expectAllVisibleStatementsToHaveStatus = function (name) {
    exports.expectAllVisibleStatementsToHaveColumn(name, '.statement-status');
};

exports.expectAllVisibleStatementsToHaveType = function (name) {
    exports.expectAllVisibleStatementsToHaveColumn(name, '.statement-type');
};

exports.expectNumberOfVisibleStatementsToBe = function (num) {
    var list = exports.statementList();

    expect(list.count()).toBe(num);
};

exports.expectNumberOfVisibleStatementsToBeAtLeast = function (num) {
    var list = exports.statementList();

    expect(list.count()).toBeGreaterThan(num-1);

};

exports.filters = (function(){
    var filters = {};

    filters.status = function () {
        return tgDropdown(by.model('filters.status'));
    };

    filters.type = function () {
        var dropdown = tgDropdown(by.model('filters.type'));
        return dropdown;
    };

    filters.selectType = function (name) {
        var dropdown = filters.type();

        dropdown.click();
        dropdown.results(name).first().click();
        pages.base.waitForAjax();
    };

    filters.selectStatus = function (name) {
        var dropdown = filters.status();

        dropdown.click();
        dropdown.results(name).first().click();
        pages.base.waitForAjax();
    };

    filters.id = function () {
        var elem = $('[data-tg-searchable-column-id="filterStatementsById"]');
        return elem;
    }

    filters.filterByStatementId = function (id) {
        var elem = filters.id();

        elem.$('.tg-searchable-column__button-toggle').click();
        elem.element(by.model('$internal.matches')).sendKeys(id);
        elem.$('.btn-primary').click();
    };

    filters.filterByFirstStatementId = function () {
        filters.filterByStatementId(testData.firstStatementId);
    };

    filters.expectDisabledFiltersToBe = function (num) {
        var elems = $$('.columnhead-filters .disabled');
        expect(elems.count()).toBe(num);
    };

    filters.clearIdFilter = function () {
        var elem = filters.id();

        elem.$('.tg-searchable-column__button-reset-filter').click();
        pages.base.waitForAjax();
    };

    filters.incomeProvider = function () {
        var elem = $('[data-tg-searchable-column-id="filterStatementsByIncomeProvider"]');
        return elem;
    };

    filters.company = () => {
        var elem = $('[data-tg-searchable-column-id="filterStatementsByCompanyName"]');
        return elem;
    };

    filters.clearIncomeProviderFilter = () => {
        var elem = filters.incomeProvider();

        elem.$('.tg-searchable-column__button-reset-filter').click();
        pages.base.waitForAjax();
    };

    filters.multiFilter = (elem, names) => {
        var results = elem.$$('.tg-typeahead__suggestions-group-item');

        elem.$('.tg-searchable-column__button-toggle').click();

        _.each(names, function (name) {
            elem.$('.tg-typeahead__input').sendKeys(name);
            pages.base.waitForAjax();

            browser.wait(ExpectedConditions.visibilityOfAny(results));
            results.first().click();
        });

        elem.$('.btn-primary').click();
        pages.base.waitForAjax();
    };

    filters.filterByIncomeProvider = (names) => {
        let elem = filters.incomeProvider();
        filters.multiFilter(elem, names);
    };

    filters.filterByCompany = (names) => {
        let elem = filters.company();
        filters.multiFilter(elem, names);
    };

    filters.filterByKnownIncomeProviders = function () {
        filters.filterByIncomeProvider([testData.incomeProviders[0], testData.incomeProviders[1]]);
    };

    filters.filterByKnownCompanies = function () {
        filters.filterByCompany([testData.companies[0]]);
    };

    return filters;
})();

exports.viewIncomeLinesLink = function () {
    return $('.view-income-lines-link');
};

exports.viewDetailsForIncomeLines = function () {
    var link = exports.viewIncomeLinesLink();

    link.click();
    pages.base.waitForAjax();
};

exports.incomeWorks = (function(){
    var incomeWorks = {};

    incomeWorks.works = function () {
        var works = $$('.incomeWorksHolder .accordion-group');

        return works;
    };

    incomeWorks.workById = function(workId) {
        var works = incomeWorks.works(),
            binding = '::incomeWork.source_work_id',
            idBinding;

        browser.wait(EC.visibilityOfAny(works));
        works = works.filter(function(elem){
            return elem.element(by.binding(binding)).getText().then(function(text){
                console.log(text, workId);
                return text === workId;
            });
        });

        return works.first();
    };

    incomeWorks.openWorkById = function (id) {
        console.log('id', id);
        var work = incomeWorks.workById(id);
        work.$('.suspense-title > p:first-child > a').click();
    };

    incomeWorks.workSearchTypeahead = function () {
        return typeahead(by.model('incomeWork.selectedTangoWork'), false, true);
    };

    incomeWorks.searchForWork = function (val, filterType) {
        var typeahead = incomeWorks.workSearchTypeahead();

        if (filterType) {
            typeahead.setFilter('Work ID');
        }

        typeahead.selectFirst(val);
    };

    incomeWorks.matchButton = function () {
        return element(by.cssContainingText('.selected-work .btn-primary', 'Match'));
    };

    incomeWorks.matchWork = function (val, filterType) {
        var matchButton = incomeWorks.matchButton();
        incomeWorks.searchForWork(val, filterType);

        matchButton.click();
        pages.base.waitForAjax();
    };

    incomeWorks.tabs = function () {
        return $$('.edi-matched .nav-tabs > li > a');
    };

    incomeWorks.goToTab = function (name) {
        var tabs = incomeWorks.tabs();

        tabs.filter(function(tab){
            return tab.$('span > span:not(.muted)').getText().then(function(text){
                return text.split(' (')[0] === name;
            });
        }).first().click();
    };

    incomeWorks.workTotalAmount = function () {
        var elem = element(by.binding('getTotalAmount() | tgNumeric:{decimals:4}'));

        browser.wait(EC.visibilityOf(elem));

        return elem;
    };

    incomeWorks.expectWorkTotalAmountToBe = function (val) {
        incomeWorks.workTotalAmount().getText().then(function(total){
            total = Number(total);

            expect(total).toEqual(Number(val)+1);
        });
    };

    return incomeWorks;
})();
