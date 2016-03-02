'use strict';

var rrst = pages.royaltyRatesSummaryTable,
    currentTable;

steps.royaltyRatesSummaryTable = exports;

addBasicStep(exports, rrst, 'Wait loader');

addBasicStep(exports, rrst, 'Filter by');

addStep(exports, 'Validate count', function (expected) {
    expect(rrst.list().count()).toBe(expected);
});

addStep(exports, 'Find', function (spec) {
    currentTable = rrst.find(spec);
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
    }, 'Toggle');

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

        addBasicStep(group, function () {
            return currentGroup;
        }, 'Toggle');

        addStepGroup(group, 'Income Types', function (group) {
            var currentIncomeType;

            addStep(group, 'Validate count', function (expected) {
                expect(currentGroup.incomeTypes.list().count()).toBe(expected);
            });

            addStep(group, 'Find', function (spec) {
                currentIncomeType = currentGroup.incomeTypes.find(spec);
            });

            addStep(group, 'Validate name', function (expected) {
                expect(currentIncomeType.name()).toBe(expected);
            });

            addStepGroup(group, 'Rate Items', function (group) {
                var currentRateItem;

                addStep(group, 'Validate count', function (expected) {
                    expect(
                        currentIncomeType.rateItems.list().count()
                    ).toBe(expected);
                });

                addStep(group, 'Find', function (spec) {
                    currentRateItem = currentIncomeType.rateItems.find(spec);
                });

                addStep(group, 'Validate name', function (expected) {
                    expect(currentRateItem.name()).toBe(expected);
                });

                addStep(group, 'Validate percentage', function (expected) {
                    expect(currentRateItem.percentage()).toBe(expected);
                });

                addStep(group, 'Validate application method', function (expected) {
                    expect(currentRateItem.applicationMethod()).toBe(expected);
                });
            });
        });
    });
});
