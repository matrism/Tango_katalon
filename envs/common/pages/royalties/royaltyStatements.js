'use strict';

var ExpectedConditions = protractor.ExpectedConditions,
    tgDropdown = require('../../../../helpers/tgDropdown.js'),
    _ = require('lodash'),
    testData = {};

pages.royaltyStatements = exports;

exports.royaltyPeriodDropdown = function () {
    return $('.royalty-period-component[data-royalty-period-model="filters.royalty_period"]');
};

exports.selectFirstRoyaltyPeriod = function () {
    var dropdown = exports.royaltyPeriodDropdown(), 
        button = dropdown.$('button.ng-binding');

    browser.wait(ExpectedConditions.visibilityOf(button));
    button.click();

    browser.wait(function(){
        return dropdown.$$('.dropdown-menu > li').count().then(function(count){
            return count > 2;
        });
    });

    return dropdown.$$('.dropdown-menu > li > a').first().click();
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

exports.expectStatementListToBePopulated = function() {
    var list = exports.statementList();

    expect(list.count()).toBeGreaterThan(0);
};

exports.expectAllVisibleStatementsToHaveType = function (name) {
    var list = exports.statementList();

    list.count().then(function(count){
        if (count) {
            list.$$('.statement-type').getText().then(function(arr){

                var onlyItemsOfExpectedType = _.every(arr, function(text) {
                    return text === name;
                });

                expect(onlyItemsOfExpectedType).toBe(true);
            });
        }
    });

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

    filters.filterByIncomeProvider = function () {
        var elem = filters.incomeProvider(),
            results = elem.$$('.tg-typeahead__suggestions-group-item'),
            names = _.toArray(arguments);

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

    filters.filterByKnownIncomeProviders = function () {
        filters.filterByIncomeProvider(testData.incomeProviders[0], testData.incomeProviders[1]);
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

    incomeWorks.workSearchTypeahead = function () {
        return typeahead(by.model('incomeWork.selectedTangoWork'), false, true);
    };

    incomeWorks.searchForWork = function (val) {
        var typeahead = incomeWorks.workSearchTypeahead();

        typeahead.selectFirst(val);
    };

    incomeWorks.matchButton = function () {
        return element(by.cssContainingText('.selected-work .btn-primary', 'Match'));
    };

    incomeWorks.matchWork = function (val) {
        var matchButton = incomeWorks.matchButton();
        incomeWorks.searchForWork(val);

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

    return incomeWorks;
})();
