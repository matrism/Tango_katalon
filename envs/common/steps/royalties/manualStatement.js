'use strict';

var pageStep = require('../../../../helpers/basicPageStep.js');

steps.manualStatement = exports;

pageStep([
    'Click link',
    'Create',
    ['Form', [
        'Type income provider',
        'Set Statement Distribution Period', 
        'Select Royalty Period',
        'Select Processing Territory',
        'Set statement amount',
        'Set exchange rate',
        'Create manual Statement',
        ]
    ],
    ['View', [
        'Open Statement blind',
        'Expect Statement value to be',
        'Click Back to Statements View link',
        'Click edit button',
        ]
    ],
    ['List', [
        'Open first blind',
        'Click edit button',
        'Expect save button to be disabled',
        'Expect save button to be enabled',
        'Edit field',
        'Click save button',
        'Click Add Batch button',
        'Close statement by Id',
        'Store statement amount by Id',
        'Open Blind by Statement Id',
        ]
    ],
    ['Batches', [
        'Click batches accordion',
        'Select Batch',
        'Click default settings link',
        'Save',
        ['Defaults', [
            'Set income type',
            'Set exploitation territory',
            ]
        ],
        'Enter Batch amount',
        'Use first batch settings',
        'Expect batch defaults to be',
        'Delete active batch',
        'Expect batch to be disabled',
        'Expect batch totals to be',
        ['Works',[
            'Add work by title',
            'Add work by work id',
            'Expect number of works to be',
            'Add income line',
            'Edit income line',
            'Duplicate line'
            ]
        ],
    ]]
]);

exports.create = (data) => {
    var statement = steps.manualStatement,
        statementForm = statement.form,
        statementView = statement.view,
        statementList = statement.list,
        statementBatches = statement.batches;

    steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');
    steps.royaltiesHeader.clickLink('Create Manual Statement');

    describe('Manual Statement', function(){

        statementForm.selectProcessingTerritory(data.processingTerritory);
        statementForm.selectRoyaltyPeriod(data.royaltyPeriod);

        statementForm.typeIncomeProvider(data.incomeProvider);

        statementForm.setStatementDistributionPeriod(
            data.distributionPeriod.start.year,
            data.distributionPeriod.start.month,
            data.distributionPeriod.end.year,
            data.distributionPeriod.end.month
        );

        statementForm.setStatementAmount(data.amount);
        statementForm.setExchangeRate(1);
        statementForm.createManualStatement();
        statement.storeStatementIdInTestVariable('lastCreatedStatementId');
    });

};

addStep(exports, 'Store Statement ID in test variable', function (varName) {
    var binding = 'pageHeaderLabel',
        idBinding = element(by.binding(binding));

    browser.wait(EC.visibilityOf(idBinding));

    idBinding.getText().then(function (value) {
        hash.testVariables[varName] = value.split(' ID ')[1];
        console.log(varName, hash.testVariables[varName]);
    });

});
