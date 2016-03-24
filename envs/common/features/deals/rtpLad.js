'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
},

exports.commonFeatureTags = ['dealLad'];

exports.feature = [
    {
        name: 'Create a basic deal for LAD with RTP sets',
        tags: ['rtpLad'],
        steps: function () {
            var countPtc = 0;

            steps.searchSection.accessSavedDealByNumber('268203');

            steps.deal.goToTermsDealTabDetails();
            steps.deal.goToRightsTermPeriodsTermsTabDetails();

            for (var acq = 0; acq <= 4; acq++) {
                countPtc = 0;
                steps.editDealRtp.editClickOnAddAnotherAcquisitionPeriodLink();
                steps.editDealRtp.selectScopeNumberIFromInput(0, 0, 'acq');

                for (var ret = 0; ret <= 1; ret++) {
                    steps.editDealRtp.clickOnAddRetentionFromAcquisitionLink();
                    steps.editDealRtp.selectScopeNumberIFromInput(0, ret, 'ret');
                    steps.editDealRtp.selectScopeNumberIFromInput(1, ret, 'ret');
                    steps.editDealRtp.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI(ret + 1, 'Life of Copyright');
                    for (var ptc = 0; ptc <= 1; ptc++) {
                        steps.editDealRtp.clickOnAddPostTermCollectionFromRetention(ret);
                        steps.editDealRtp.selectScopeNumberIFromInput(0, countPtc, 'ptc');
                        steps.editDealRtp.selectScopeNumberIFromInput(1, countPtc, 'ptc');
                        steps.editDealRtp.editFillIntoDurationFieldPostTermCollectionFromRetention(ret, ptc);
                        countPtc++;
                    }
                }

                steps.editDealRtp.editSaveAnotherAcquisitionForm();
            }
        }
    }
]
