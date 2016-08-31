'use strict';

var using = fnutils.using;

exports.id = 'a4803196-dfad-491b-839e-d362d2408ac1';

exports.commonFeatureTags = [
    'royaltyRatesRegression',
    'royaltyRates',
    'royaltyStatements',
    'royaltyProcessing',
    'regression'
];

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Royalty Statements - Check links',
        tags: ['royaltyStatementsLinks'],
        steps: () => {
            let rh = steps.royaltiesHeader,
                mh = steps.mainHeader;

            mh.goToSubLink('Royalty Processing', 'Royalty Statements');
            rh.clickLink('Upload Electronic File');
            mh.goToSubLink('Royalty Processing', 'Royalty Statements');
            rh.clickLink('Create Manual Statement');
        }
    },
    {
        name: 'Royalty Statements Filters',
        tags: ['royaltyStatementsFilters'],
        steps: () => {
            let rs = steps.royaltyStatements,
                rsf = rs.filters;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');

            rs.selectProcessingTerritory('United States');

            rs.selectFirstRoyaltyPeriod();
            rs.expectStatementListToBePopulated();

            rsf.selectStatus('Unreconciled');
            rs.expectAllVisibleStatementsToHaveStatus('Unreconciled');
            rsf.selectStatus('Closed');
            rs.expectAllVisibleStatementsToHaveStatus('Closed');
            rsf.selectStatus('All');
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
    {
        name: 'Royalty Statements - Validate default table filters and expand statements',
        tags: ['royaltyStatementsDetails'],
        steps: () => {
            let rs = steps.royaltyStatements,
                rsf = rs.filters,
                rsd = rs.statementDetails;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');

            rs.selectProcessingTerritory('United States');

            rs.selectFirstRoyaltyPeriod();
            rs.expectStatementListToBePopulated();
            rsf.validateSelectedStatus('All');
            rsf.validateSelectedType('All');
            rsf.validateSelectedId('All');
            rsf.validateSelectedIncomeProvider('All');
            rsf.validateSelectedCompany('All');
            rsf.selectType('EDI');
            rs.expectAllVisibleStatementsToHaveType('EDI');
            rs.expandStatement(0);
            rsd.expectToBeVisible(0);
            rsf.selectType('Manual');
            rs.expectAllVisibleStatementsToHaveType('MANUAL');
            rs.expandStatement(0);
            rsd.expectToBeVisible(0);
        }
    }
] 
