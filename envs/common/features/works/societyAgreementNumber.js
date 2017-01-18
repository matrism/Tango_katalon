/**
 * Created by AfinaAshley on 4/1/2017.
 */

'use strict';
//exports.commonFeatureTags = ['deals', 'society', 'regression'];

//var fromTestVariable = require('../../../../helpers/fromTestVariable'),
    //random = require('../../../../helpers/random'),
    var randomId = random.id.makeMemoizedGenerator()


exports.commonFeatureTags = [
    'societyAgreementNumber',
     'society',
      'TAT207'];

var workData = {
        primary_work_title: 'WORK TAT'+ randomId('organisation'),
        creators_and_contributions: [
            {
                role: 'CA',
                name: 'TATPerson'+ randomId('organisation'),
                percentage: 100
            }
        ]
},
dealData = {
    deal_signing_territory: 'Malaysia',
    company_code: 'MALAYSIA - DOMESTIC DEALS',
    contracting_parties: 'TATPerson20171',
    contract_periods: [
        {
            start: '2016-07-10',
            end: 12,
            scopes: [
                {
                    contract_type: 'Administration',
                    territory: 'Worldwide',
                    publisher_share_sets: [
                        {
                            role: 'E',
                            name: 'socpub1',
                            own: 100
                        },
                        {
                            role: 'AM',
                            name: 'WB MUSIC CORP.',
                            collect: 100
                        }
                    ],
                    royalty_rate_sets: [
                        {
                            effective_start_date: '',
                            application_method: 'At Source',
                            contractual_rate: 10,
                            NPS: 10
                        }
                    ]
                }
            ]
        },
    ],
    rtp_contract_periods: 'all',
    payee: {
    }

},

 scope2 = {
        contract_type: 'Co-Publishing',
        territory: 'Worldwide',
        publisher_share_sets: [
            {
                role: 'E',
                name: 'socpub1',
                own: 0
            },
            {
                role: 'AM',
                name: 'WB MUSIC CORP.',
                collect: 0
            }
        ],
        rtp_contract_periods: 'all',
    },

mockValues = {
    lastCreatedWorkId: 'WW 015069382 00',
    lastCreatedDealId: '355597',
    lastCreatedDealUuid: '224c699b-21c3-447d-9927-94eed2c7b634',
    lastCreatedOrgId: 'TO0012F5A',
    lastCreatedOrgUuid: '7e1fbc34-2f95-4112-a8c8-8b686ca8e742',
    lastCreatedStatementId: '8664'
};

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: "Create Person",
        tags: [],
        steps: function() {
            _.defaults(hash.testVariables, mockValues);
            var p = steps.person,
                np = steps.newPerson;

                p.useBlankPersonSlot(0);

                np.goToNewPersonPage();
                np.enterLastName('TATPerson'+ randomId('organisation')
                );
                np.enterAffiliatedSocietySearchTerms('MACP');
                np.selectAffiliatedSocietySearchResultByIndex(0);
                np.save();
                //steps.base.sleep(5000);
                p.findInternalIpiNumber()
            }
    }, // Create a person as Creator

    {
        name: "Create New Work and Deal",
        tags: ['Test 03'],
        steps: function () {
            var base = steps.base,

             deal = steps.deal;


            _.defaults(hash.testVariables, mockValues);
            steps.base.useBlankEntityDataSlot('deal', 'mainDeal');
            steps.login.itLogin();
            deal.createDeal(dealData);
            deal.waitForDealToBeSaved();
            deal.findId();
            deal.returnDealNumber();
            // steps.work.createWork(workData);
            // steps.work.goToScopeDeliveryTab();
            // steps.work.scopeDelivery.clickOnDeliverWorkToDealScopeButton();
            // console.log(fromTestVariable('lastCreatedDealId'));
            // steps.work.scopeDelivery.selectDeal(fromTestVariable('lastCreatedDealId'));
            // steps.work.scopeDelivery.checkScope(0);
            // steps.work.scopeDelivery.save();
            // steps.base.sleep(5000);


        }
    }

    // {
    //     name:"Add Society Number",
    //     tags: ['Test01'],
    //     steps:function()
    //     {
    //
    //         _.defaults(hash.testVariables,mockValues);
    //         steps.deal.openDealFromSlot('mainDeal');
    //         steps.deal.clickFirstScopeHeader();
    //         steps.base.sleep(5000);
    //         steps.deal.addSocietyAgreementNumbersToPssChain(0);
    //         steps.base.sleep(5000);
    //         steps.dealSocietyAgreementNumbers.publisher.enterSocietySearchTerms(0,'ASCAP');
    //         steps.dealSocietyAgreementNumbers.publisher.selectSocietySearchResultByName('ASCAP');
    //         steps.base.sleep(5000);
    //         steps.dealSocietyAgreementNumbers.publisher.enterSocietyAgreementNumber(0,'ABC123456');
    //         steps.dealSocietyAgreementNumbers.save();
    //         steps.base.sleep(10000);
    //         steps.base.sleep(10000);
    //         console.log(fromTestVariable('lastCreatedWorkId'));
    //         steps.work.goToWorkPageById(fromTestVariable('lastCreatedWorkId'));
    //         // steps.login.itLogin();
    //         // steps.work.goToWorkPageById('WW 015107212 00');
    //         steps.work.goToPreviewCwrTab();
    //         steps.workCwrPreview.searchForRegistrationRecipient('ASCAP');
    //         steps.workCwrPreview.selectRegistrationRecipientResultByIndex(0);
    //         steps.base.sleep(10000);
    //         steps.workCwrPreview.validateSocietyNumber(2,'ABC123456')
    //
    //     }
    //
    //
    // },
    //
    // {
    //     name:"Remove Society Number",
    //     tags: ['Test02'],
    //     steps:function()
    //     {
    //         _.defaults(hash.testVariables,mockValues);
    //         steps.deal.openDealFromSlot('mainDeal');
    //         steps.deal.clickFirstScopeHeader();
    //         steps.base.sleep(5000);
    //         steps.deal.viewPssChainSocietyAgreementNumbers(0);
    //         steps.base.sleep(5000);
    //         steps.dealSocietyAgreementNumbers.publisher.deleteSocietyAgreementNumber(0);
    //         steps.dealSocietyAgreementNumbers.save();
    //         // steps.base.sleep(10000);
    //         //console.log(fromTestVariable('lastCreatedWorkId'));
    //         steps.work.goToWorkPageById(fromTestVariable('lastCreatedWorkId'));
    //         //steps.login.itLogin();
    //         //steps.work.goToWorkPageById('WW 015107307 00');
    //         steps.work.goToPreviewCwrTab();
    //         steps.workCwrPreview.searchForRegistrationRecipient('ASCAP');
    //         steps.workCwrPreview.selectRegistrationRecipientResultByIndex(0);
    //         steps.base.sleep(10000);
    //         steps.workCwrPreview.validateRecordExist(2)
    //     }
    //
    // }


];

