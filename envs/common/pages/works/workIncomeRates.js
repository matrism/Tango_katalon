'use strict';

pages.workIncomeRates = exports;

exports.filters = (() => {
    var filters = {};

    filters.royaltyPeriodDropdown = () => {
        return tgRoyaltyPeriod.byModel('dataHolder.selected.royaltyPeriod');
    };

    filters.selectRoyaltyPeriod = (name) => {
        let dropdown = filters.royaltyPeriodDropdown();

        dropdown.selectValue(name);
    };

    filters.processingTerritoryDropdown = () => {
        return tgDropdown(by.model('processingTerritoryModel'));
    };

    filters.selectProcessingTerritory = (val) => {
        let elem = filters.processingTerritoryDropdown();

        elem.selectValue(val);
        pages.base.waitForAjax();
    };

    return filters;
})();

exports.table = (() => {
    var table = {};

    table.columns = {
        'gross_received': 1,
        'net_received': 2,
        'dst_nps': 5,
        'paid_out': 6,
        'admin': 4,
        'subpublisher_nps': 3
    };

    table.findIncomeGroup = (name) => {
        table.incomeGroup = element(by.cssContainingText(
            '[ng-repeat="incomeGroup in royaltyLedgerData"]', name
        ));
    };

    table.breakdown = (name) => {
        return table.incomeGroup.all(by.cssContainingText(
            '[ng-repeat="breakdown in incomeGroup.distributions"]', name
        )).first();
    };

    table.validate = (incomeGroup, backendData) => {
        backendData = callResultOrValue(backendData) || {};
        table.findIncomeGroup(incomeGroup);
        let breakdownRows = {
            'domestic_values': table.breakdown('Domestic').$$('td'),
            'non_domestic_values': table.breakdown('Non-Domestic').$$('td')
        };

        for (let row in breakdownRows) {
            for (let column in table.columns) {
                if (backendData[row] && breakdownRows[row]) {
                    let order = table.columns[column],
                        backendValue = Number(backendData[row][column]).toFixed(4);

                    expect(breakdownRows[row].get(order)).toBe(backendValue);
                }
            }
        }
    };

    return table;
})();
