'use strict';

var rst = pages.royaltyRatesSummaryTable,
    currentTable;

steps.royaltyRatesSummaryTable = exports;

addBasicStep(exports, rst, 'Wait loader');

addStep(exports, 'Validate count', function (expected) {
    expect(rst.list().count()).toBe(expected);
});

addStep(exports, 'Find', function (spec) {
    currentTable = rst.find(spec);
});

addStepGroup(exports, 'Scope', function (group) {
    addStep(group, 'Validate description', function (expected) {
        expect(currentTable.scope.description()).toBe(expected);
    });
});

addStepGroup(exports, 'Contract period', function (group) {
    var currentContractPeriod;

    addStep(group, 'Validate count', function (expected) {
        expect(currentTable.contractPeriod.list().count()).toBe(expected);
    });

    addStep(group, 'Find', function (spec) {
        currentContractPeriod = currentTable.contractPeriod.find(spec);
    });

    addStep(group, 'Validate description', function (expected) {
        expect(currentContractPeriod.description()).toBe(expected);
    });
});

addStepGroup(exports, 'Rate set', function (group) {
    var currentRateSet;

    addStep(group, 'Validate count', function (expected) {
        expect(currentTable.rateSet.list().count()).toBe(expected);
    });

    addStep(group, 'Find', function (spec) {
        currentRateSet = currentTable.rateSet.find(spec);
    });

    addStep(group, 'Validate description', function (expected) {
        expect(currentRateSet.description()).toBe(expected);
    });

    addStep(group, 'Validate income provider', function (expected) {
        expect(currentRateSet.incomeProvider()).toBe(expected);
    });

    addStep(group, 'Validate effective date', function (expected) {
        expect(currentRateSet.effectiveDate()).toBe(expected);
    });

    addBasicStep(group, function () {
        return currentRateSet;
    },'Toggle');

    addStepGroup(group, 'Group', function (group) {
        var currentGroup;

        addStep(group, 'Validate count', function (expected) {
            expect(currentRateSet.group.list().count()).toBe(expected);
        });

        addStep(group, 'Find', function (spec) {
            currentGroup = currentRateSet.group.find(spec);
        });

        addStep(group, 'Validate key', function (expected) {
            expect(currentGroup.key()).toBe(expected);
        });
    });
});
