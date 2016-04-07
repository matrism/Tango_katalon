'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.royaltyStatements = exports;

pageStep([
    'Select first royalty period',
    'Select Royalty Period',
    'Expect statement list to be populated',
    'Store first statement ID',
    'Store Income Providers',
    'Expect all visible statements to have type',
    'Expect number of visible statements to be',
    'Expect number of visible statements to be at least',
    ['Filters', [
        'Select type',
        'Filter by first statement ID',
        'Expect disabled filters to be',
        'Clear ID filter',
        'Filter by known income providers'
    ]],
    'View details for income lines',
    ['Income Works', [
        'Search for work',
        'Match work',
        'Go to tab',
        'Open Work by Id',
        'Expect work total amount to be'
    ]],
]);

addStep(exports.incomeWorks, 'Store Source Work Id in test variable', function (varName) {

    var binding = '::incomeWork.source_work_id',
        idBinding = element(by.binding(binding));

    browser.wait(EC.visibilityOf(idBinding));

    idBinding.getText().then(function (value) {
        console.log(value);
        hash.testVariables[varName] = value;
    });

});

addStep(exports.incomeWorks, 'Store Work amount by id in test variable', function (workId, varName) {

    var works = $$('.incomeWorksHolder .accordion-group'),
        binding = '::incomeWork.source_work_id',
        idBinding;

    browser.wait(EC.visibilityOfAny(works));
    works = works.filter(function(elem){
        return elem.element(by.binding(binding)).getText().then(function(text){
            return text === workId;
        });
    });

    idBinding = works.first().element(by.binding('::incomeWork.amount | tgNumeric:{decimals:2}'));

    //browser.wait(EC.visibilityOf(idBinding));

    idBinding.getText().then(function (value) {
        console.log(value);
        hash.testVariables[varName] = value;
    });

});
