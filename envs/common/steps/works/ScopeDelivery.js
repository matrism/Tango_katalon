"use strict";

var //moment = require('moment'),
    //pad = require('left-pad'),
    pph = require('../../../../helpers/pph'),
    //random = require('../../../../helpers/random'),
    //randomId = random.id.makeMemoizedGenerator(),
    //randomString = random.string.makeMemoizedGenerator(),
    _ = require('lodash'),
    promise = protractor.promise,
    callResultOrValue = require('../../../../helpers/callResultOrValue');
    //pageStep = require('../../../../helpers/basicPageStep');



/*
Functions
ContributionNo = which contribution line to target
ScopeNo = Which scope to target
dealsNo = Deals number to search



 */
steps.ScopeDeliveryComp = exports;
exports.scopeDelivery = function (ContributionNo,ScopeNo,dealsNo) {
    describe('Scope Delivery', function () {
        var WorkId = [];
        //_.times(howMany, function (i) {

            //steps.work.goToWorkPageById('WW 015121907 00');
            steps.work.goToScopeDeliveryTab();

                steps.scopeDelivery.deliverWork();

                steps.scopeDelivery.searchDealsForContribution(ContributionNo, dealsNo);
                steps.scopeDelivery.selectDealSearchResultByIndex(0);

                steps.scopeDelivery.validateCheckboxState(0, 0, 'enabled');

                //steps.scopeDelivery.validateContributionScopeName(ContributionNo, 'Scope 1');
            steps.scopeDelivery.clickScopeDeliveryCheckbox(ContributionNo,ScopeNo);

            steps.scopeDelivery.save();

            //steps.scopeDelivery.validateContributionScopeName(0, 'Scope 1');

        //})
    });
};


