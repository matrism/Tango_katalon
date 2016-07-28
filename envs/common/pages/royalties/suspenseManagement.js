'use strict';

pages.suspenseManagement = exports;

exports.tabsSelector = 'li[ng-repeat="$tab in $tabs"]';

exports.selectedTab = () => {
    return $(exports.tabsSelector + '.active');
};

exports.validateSelectedTab = (value) => {
    expect(exports.selectedTab().getText()).toBe(value);
};

exports.clickTab = (value) => {
    let el = element(by.cssContainingText(exports.tabsSelector, value));
    el.click();
    pages.base.waitForAjax();
};

exports.filters = (() => {
    let filters = {};

    filters.currentSelectedPeriod = '';

    filters.royaltyPeriodDropdown = () => {
        return tgRoyaltyPeriod.byModel('dataHolder.royalty_period');
    };

    filters.selectRoyaltyPeriod = (name, index) => {
        let dropdown = filters.royaltyPeriodDropdown();

        if (index) {
            dropdown.select(index);
        } else {
            dropdown.selectValue(name);
        }
        pages.base.waitForAjax();
    };

    filters.selectClosedPeriod = (index) => {
        pages.base.waitForModal();
        tgRoyaltyPeriod.selectClosedPeriod(index);
    };

    filters.clickGo = () => {
        tgRoyaltyPeriod.clickGo();
    };

    filters.processingTerritoryDropdown = () => {
        return tgDropdown(by.model('processingTerritoryModel'));
    };

    filters.validateProcessingTerritory = (value) => {
        expect(filters.processingTerritoryDropdown().getSelectedValue()).toBe(value);
    };

    filters.selectProcessingTerritory = (val) => {
        let elem = filters.processingTerritoryDropdown();

        elem.selectValue(val);
        pages.base.waitForAjax();
    };

    filters.storeSelectedPeriod = () => {
        filters.royaltyPeriodDropdown().getSelectedValue().then((text) => {
            filters.currentSelectedPeriod = text;
        });
    };

    filters.validateRoyaltyPeriod = (value) => {
        value = value || filters.currentSelectedPeriod;
        expect(filters.royaltyPeriodDropdown().getSelectedValue()).toBe(value);
    };

    return filters;
})();

exports.activitySummary = (() => {
    let activitySummary = {};

    activitySummary.lastValues = '';

    activitySummary.get = () => {
        let el = $('.activity-summary');
        pages.base.scrollIntoView(el);
        return el;
    };

    activitySummary.labels = () => {
        return activitySummary.get().$$('.pull-left').getText();
    };

    activitySummary.values = () => {
        return activitySummary.get().$$('.pull-right').getText();
    };

    activitySummary.validateLabels = (labels) => {
        activitySummary.labels().then((text) => {
            text.forEach((label, index) => {
                expect(label).toMatch(labels[index]);
            });
        });
    };

    activitySummary.validateValues = (numRegex) => {
        activitySummary.values().then((text) => {
            expect(text.length).toBe(9);
            activitySummary.lastValues = text;
            text.forEach((value, index) => {
                expect(value).toMatch(numRegex);
            });
        });
    };

    activitySummary.expectValuesToBeUpdated = () => {
        expect(activitySummary.values()).not.toEqual(activitySummary.lastValues);
    };

    return activitySummary;
})();

exports.suspense = (() => {
    let suspense = {};

    suspense.firstRowText = '';

    suspense.rows = () => {
        return element.all(by.repeater('incomeWork in dataHolder.suspenseLines track by incomeWork.id'));
    };

    suspense.expectRowsToBePresent = () => {
        let elements = suspense.rows();
        expect(elements.count()).not.toBe(0);
        elements.first().getText().then((text) => {
            suspense.firstRowText = text;
        });
    };

    suspense.expectRowsToBeUpdated = () => {
        let elements = suspense.rows();
        expect(elements.first().getText()).not.toEqual(suspense.firstRowText);
    };

    return suspense;
})();
