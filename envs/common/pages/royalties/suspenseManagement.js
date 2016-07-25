'use strict';

pages.suspenseManagement = exports;

exports.selectedTab = () => {
    return $('[ng-repeat="$tab in $tabs"].active');
};

exports.validateSelectedTab = (value) => {
    expect(exports.selectedTab().getText()).toBe(value);
};

exports.filters = (() => {
    var filters = {};

    filters.royaltyPeriodDropdown = () => {
        return tgRoyaltyPeriod.byModel('dataHolder.royalty_period');
    };

    filters.selectRoyaltyPeriod = (name) => {
        let dropdown = filters.royaltyPeriodDropdown();

        dropdown.selectValue(name);
        pages.base.waitForAjax();
        pages.base.waitForModal();
    };

    filters.selectClosedPeriod = (index) => {
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

    return filters;
})();

exports.activitySummary = (() => {
    var activitySummary = {};

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
