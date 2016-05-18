'use strict';

var iso = require('iso-3166-1');

exports.commonFeatureTags = ['royaltyProcessing'];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

// Test data
var fileData = {
    processingTerritory: 'Poland',
    royaltyPeriod: 'July 2015 - December 2015',
    incomeProvider: 'WARNER MUSIC HONG KONG',
    fileFormat: 'ASIAN - WARNER',
    fileName: './data/war07_smallfile_02.txt',
    mockedFileName: 'TAT_2016-05-04T03_24_59.815Z.edi',
    amount: '100.0000',
    currency: 'USD',
    summaryByType: {
        'Folio Sales': '100.0000'
    },
    distributionPeriod: {
        start: {
            year: '2015',
            month: '01'
        },
        end: {
            year: '2016',
            month: '01'
        }
    }
},

mockValues = {
    lastCreatedWorkId: 'WW 015069382 00',
    lastCreatedDealId: '295228',
    lastCreatedDealUuid: '224c699b-21c3-447d-9927-94eed2c7b634',
    lastCreatedOrgId: 'TO0012F5A',
    lastCreatedStatementId: '8664'
};

exports.feature = [
    {
        name: 'Work Ledger Summary - Validate income&rates table',
        tags: ['workLedgerSummary', 'workLedgerSummaryIncomeRatesTable'],
        steps: () => {
            var w = steps.work,
                wir = steps.workIncomeRates,
                rb = steps.royaltiesBackEnd;

            hash.testVariables['lastCreatedWorkId'] = mockValues.lastCreatedWorkId;
            w.goToWorkPageById(mockValues.lastCreatedWorkId);
            w.goToIncomeRatesTab();

            wir.filters.selectProcessingTerritory(fileData.processingTerritory);
            wir.filters.selectRoyaltyPeriod(fileData.royaltyPeriod);

            rb.storeWorkSummaryInTestVariable(
                iso.whereCountry(fileData.processingTerritory).numeric,
                royaltyPeriodParser(fileData.royaltyPeriod),
                fromTestVariable('lastCreatedWorkId'),
                'work summary'
            );

            wir.table.validate('Mechanical', fromTestVariable('work summary'));
        }
    }
];
