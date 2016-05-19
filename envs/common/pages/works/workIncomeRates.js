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

    table.rows = {
        'domestic_values': 'Domestic',
        'non_domestic_values': 'Non-Domestic',
        'total': 'Total'
    };

    table.findIncomeGroup = (name) => {
        table.incomeGroup = element(by.cssContainingText(
            '[ng-repeat="incomeGroup in royaltyLedgerData"]', name
        ));
        pages.base.scrollIntoView(table.incomeGroup);
    };

    table.rowElements = (name) => {
        return table.incomeGroup.all(by.cssContainingText(
            'tr', name
        )).first().$$('td');
    };

    table.addTotal = (data) => {
        let total = {};
        for (let i in data) {
            for (let j in data[i]) {
                total[j] = total[j] || 0;
                total[j] += parseFloat(data[i][j]);
            }
        }
        data['total'] = total;
        return data;
    };

    table.breakdownSelect = () => {
        return element(by.model('dataHolder.selected.breakdown'));
    };

    table.validate = (incomeGroup, expectedData) => {
        expectedData = callResultOrValue(expectedData) || {};
        table.findIncomeGroup(incomeGroup);

        let data = table.addTotal(expectedData),
            breakdownSelect = table.breakdownSelect();

        for (let row in table.rows) {
            let rowDescription = table.rows[row],
                rowElements = table.rowElements(rowDescription);
            pages.base.scrollIntoView(breakdownSelect);
            pages.base.selectDropdownOption.tg(breakdownSelect, rowDescription);

            if (data[row]) {
                for (let column in table.columns) {
                    let order = table.columns[column],
                        backendValue = Number(data[row][column]).toFixed(4),
                        tableValue = rowElements.get(order).getText();

                    expect(tableValue).toBe(backendValue);
                }
            }
        }
    };

    return table;
})();
