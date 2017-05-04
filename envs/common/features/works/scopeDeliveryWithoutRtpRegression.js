'use strict';

var moment = require('moment'),
    randomId = random.id.makeMemoizedGenerator(),
    randomString = random.string.makeMemoizedGenerator(),
    using = fnutils.using;

exports.id = 'b1f93e66-5f8f-4b7a-a459-59e7d2c17c2d';

exports.commonFeatureTags = [
    'scopeDeliveryWithoutRtpRegression',
    'scopeDelivery',
    'works',
    'regression'
];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create person (work creator)',

        tags: [],

        steps: criticalScenario(() => {
            var p = steps.person,
                np = steps.newPerson;

            p.useBlankPersonSlot(0);

            np.goToNewPersonPage();

            np.enterLastName('TEST PERSON ' + randomId('workCreator'));

            np.enterAffiliatedSocietySearchTerms('ASCAP');
            np.selectAffiliatedSocietySearchResultByIndex(0);

            np.save();

            p.findInternalIpiNumber();
        }),
    },
    {
        name: 'Create work',

        tags: [],

        steps: criticalScenario(() => {
            steps.base.useBlankEntityDataSlot('work', 'mainWork');

            using(steps.newWork, function (nw) {
                nw.goToNewWorkPage();

                nw.enterPrimaryWorkTitle('TEST WORK ' + randomId('mainWork'));

                nw.selectCreatorFromPersonSlot(0, 0);
                nw.enterCreatorContribution(0, 100);

                nw.optToIncludeWorkOnWebsite(false);

                nw.saveWork();
            });

            steps.work.findCurrentlyOpenWorkId();
        })
    },
    {
        name: 'Create deal with publisher shares but no RTP',

        tags: [],

        steps: function () {
            steps.base.useBlankEntityDataSlot('deal', 'pssDeal');

            using(steps.createDealGeneral, function (cdg) {
                cdg.goToNewDealPage();

                cdg.selectSigningTerritory('Argentina');

                    using(cdg.companyCode, function (cd) {
                        cd.enterSearchTerms('WCM');
                        cd.selectSearchResultByIndex(0);
                    });

                cdg.enterContractingPartySearchTerms('ASCAP');
                cdg.selectContractingPartySearchResultByIndex(0);
            });

            steps.deal.itContinueToNextPage();

            using(steps.createDealContractPeriod, function (cdcp) {
                cdcp.enterActualStartDate(moment().format('YYYY-MM-DD'));
                cdcp.enterTargetEndDateInMonths(12);
            });

            using(steps.createDealScope, function (cds) {
                cds.openNewScopeForm();

                cds.selectContractType('Administration');

                cds.enterTerritoryOfControlSearchTerms('Brazil');
                cds.selectTerritoryOfControlSearchResultByIndex(0);

                cds.clickOnAddPublisherShareSet({
                    scrollIntoView: true,
                });

                cds.enterPublisherSearchTerms(0, 0, 'WARNER ALLIANCE MUSIC');
                cds.selectPublisherSearchResultByIndex(0);
                cds.enterOwnPublisherShare(0, 0, 100);

                cds.enterPublisherSearchTerms(0, 1, 'WB MUSIC CORP.');
                cds.selectPublisherSearchResultByIndex(0);
                cds.enterCollectPublisherShare(0, 1, 100);
            });

            using(steps.deal, function (d) {
                d.itContinueToNextPage();

                d.saveDeal();
                d.waitForDealToBeSaved();

                d.findId();
            });
        },
    },
    {
        name: 'Try delivering contribution to deal scope with publisher shares',

        tags: [],

        steps: function () {
            steps.base.useEntityDataSlot('work', 'mainWork');

            using(steps.work, function (w) {
                w.goToWorkPage();

                w.goToScopeDeliveryTab();
            });

            using(steps.scopeDelivery, function (sd) {
                sd.deliverWork();

                sd.searchForDealFromSlotForContribution(0, 'pssDeal');
                sd.selectDealSearchResultByIndex(0);

                sd.validateCheckboxState(0, 0, 'disabled');

                sd.expectValidationMessage('No Rights Term Period');
            });
        }
    },
    {
        name: 'Create deal with no publisher shares',

        tags: [],

        steps: function () {
            steps.base.useBlankEntityDataSlot('deal', 'noPssDeal');

            using(steps.createDealGeneral, function (cdg) {
                cdg.goToNewDealPage();

                cdg.selectSigningTerritory('Argentina');
                console.log(systemConfig.env.name);

                    using(cdg.companyCode, function (cd) {
                        cd.enterSearchTerms('WCM');
                        cd.selectSearchResultByIndex(0);
                    });

                cdg.enterContractingPartySearchTerms('ASCAP');
                cdg.selectContractingPartySearchResultByIndex(0);
            });

            steps.deal.itContinueToNextPage();

            using(steps.createDealContractPeriod, function (cdcp) {
                cdcp.enterActualStartDate(moment().format('YYYY-MM-DD'));
                cdcp.enterTargetEndDateInMonths(12);
            });

            using(steps.createDealScope, function (cds) {
                cds.openNewScopeForm();

                cds.selectContractType('Administration');

                cds.enterTerritoryOfControlSearchTerms('Brazil');
                cds.selectTerritoryOfControlSearchResultByIndex(0);
            });

            using(steps.deal, function (d) {
                d.itContinueToNextPage();

                d.saveDeal();
                d.waitForDealToBeSaved();

                d.findId();
            });
        }
    },
    {
        name: 'Deliver contribution to deal scope with no publisher shares nor RTP',

        tags: [],

        steps: function () {
            steps.base.useEntityDataSlot('work', 'mainWork');

            using(steps.work, function (w) {
                w.goToWorkPage();

                w.goToScopeDeliveryTab();
            });

            using(steps.scopeDelivery, function (sd) {
                sd.deliverWork();

                sd.searchForDealFromSlotForContribution(0, 'noPssDeal');
                sd.selectDealSearchResultByIndex(0);

                sd.clickScopeDeliveryCheckbox(0, 0);

                sd.save();

                steps.base.refreshPage();

                steps.work.goToScopeDeliveryTab();

                sd.validateContributionDealIdFromDealSlot(0, 'noPssDeal');

                sd.validateContributionScopeName(0, 'Scope 1');
            });
        }
    }
];
