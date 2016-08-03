'use strict';

var using = fnutils.using;

exports.id = '4b83d03e-62e9-4718-8207-76717a81ee37';

exports.commonFeatureTags = [
    'royaltyRatesRegression',
    'royaltyRates',
    'royaltyStatementsFilters',
    'regression'
];

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Royalty Statements Filters',
        tags: [],
        steps: () => {
            let rs = steps.royaltyStatements,
                rsf = rs.filters;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');

            rs.selectProcessingTerritory('United States');

            rs.selectFirstRoyaltyPeriod();
            rs.expectStatementListToBePopulated();

            rsf.selectType('EDI');
            rs.expectAllVisibleStatementsToHaveType('EDI');
            rsf.selectType('Manual');
            rs.expectAllVisibleStatementsToHaveType('MANUAL');
            rs.storeFirstStatementId();
            rs.storeIncomeProviders();
            rs.storeCompanies();

            rsf.expectDisabledFiltersToBe(0);
            rsf.filterByFirstStatementId();
            rsf.expectDisabledFiltersToBe(4);
            rs.expectNumberOfVisibleStatementsToBe(1);

            rsf.clearIdFilter();

            rsf.filterByKnownIncomeProviders();
            rs.expectNumberOfVisibleStatementsToBeAtLeast(2);
            rs.expectAllVisibleStatementsToHaveType('MANUAL');
            rsf.clearIncomeProviderFilter();

            rsf.filterByKnownCompanies();
            rs.expectNumberOfVisibleStatementsToBeAtLeast(1);
            rs.expectAllVisibleStatementsToHaveType('MANUAL');
        }
    },
] 
