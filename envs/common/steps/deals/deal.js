'use strict';

var promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions,
    pageStep = require('../../../../helpers/basicPageStep.js');

steps.deal = exports;

exports.goToNextPage = function () {
    it("Click on continue to next page button", function () {
        pages.deal.continueToNextPage();
    });
};

exports.openDealFromSlot = function (slotId) {
    describe('Open deal from slot (' + slotId + ')', function () {
        var mhs = steps.mainHeader.search;

        mhs.selectEntityType('Deal');

        mhs.enterTerms(labeledFn('ID from deal slot', function () {
            return hash.entityDataSlotsByType.deal[slotId].id
        }));

        mhs.selectResultByIndex(0);
    });
};

exports.refreshThePage = function () {
    it("Refresh the page", function () {
        browser.driver.navigate().refresh();
        pages.editDealScope.waitForAjax();
        browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.dealBriefNumber));
    });
};

exports.waitContinueButtonEnabled = function () {
    it("Check continue button to be enabled", function () {
        pages.deal.expectContinueButtonEnabled();
    });
};

exports.saveDeal = function () {
    it("Click on save deal button", function () {
        pages.deal.saveNewDeal();
    });
};

exports.clickFirstScopeHeader = function () {
    it("Click the first scope header", function () {
        pages.deal.clickFirstScopeHeader();
    });
};

exports.clickLastScopeHeader = function () {
    it("Click the last scope header", function () {
        pages.deal.clickLastScopeHeader();
    });
};

exports.waitForDealToBeSaved = function () {
    it("Expect deal screen to be loaded and brief number displayed ", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.dealBriefNumber));
    });
};

exports.returnDealNumber = function () {
    it("Return deal number ", function () {
        pages.deal.elems.dealBriefNumber.getText().
            then(function (promise) {
                console.log("Deal number is " + promise);
            });
    });
};

exports.printDealNumber = function () {
    it("Return deal number ", function () {
        pages.deal.elems.dealBriefNumber.getText().
            then(function (promise) {
                console.log("Deal number is " + promise);
            });
    });
};

exports.findId = function () {
    it('Find deal ID', function () {
        var idBinding = element(by.binding(
            ' getPristineDeal().deal_header.contract_brief_number '
        ));

        idBinding.getText().then(function (value) {
            hash.currentEntityDataSlotsByType.deal.id = value;
        });
    });
};

exports.itContinueToNextPage = function () {
    describe("Check continue button enabled and go to next page", function () {
        //steps.deal.waitContinueButtonEnabled();
        steps.deal.goToNextPage();
    });
};

exports.goToGeneralDealTabDetail = function () {
    it("Click on general header and go to general deal tab details ", function () {
        pages.deal.goToGeneralDealDetails();
    });
};

exports.goToGeneralDealTabDetails = function () {
    it("Click on general header and go to general deal tab details ", function () {
        pages.deal.goToGeneralDealDetails();
        browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.dealGeneralSummaryHeader));
    });
};

exports.goToGeneralDealTabDetailsDirtyCheck = function () {
    it("Click on general header and go to general deal tab details ", function () {
        pages.deal.goToGeneralDealDetails();
        pages.deal.waitForAjax();
    });
};

exports.goToPayeesDealTabDetails = function () {
    it("Click on payees header and go to payees deal tab details ", function () {
        pages.deal.goToPayeesDealDetails();
        browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.dealPayeesSummaryHeader));
    });
};

exports.goToOldPayeesDealTabDetails = function () {
    it("Click on payees header and go to payees deal tab details ", function () {
        pages.deal.goToPayeesDealDetails();
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealPayee.elems.oldPayeeArea));
    });
};

exports.goToTermsDealTabDetailsDirtyCheck = function () {
    it("Click on terms header and go to terms deal tab details ", function () {
        pages.deal.goToTermsDealDetails();
        pages.deal.waitForAjax();
    });
};

exports.goToTermsDealTabDetails = function () {
    it("Click on terms header and go to terms deal tab details ", function () {
        pages.deal.goToTermsDealDetails();
        browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.contractPeriodsScopesHeaderLink));
        pages.deal.waitForAjax();
    });
};

exports.goToTermsDealDetails = function () {
    it("Click on terms header", function () {
        pages.deal.goToTermsDealDetails();
    });
};

exports.goToContractPeriodsAndScopesTermsTabDetails = function () {
    it("Click on contract periods and scopes terms link ", function () {
        pages.deal.goToTheContractPeriodsAndScopesHeaderLink();
        browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.contractPeriodsTitle));
    });
};

exports.goToRightsTermPeriodsTermsTabDetails = function () {
    it("Click on rights term periods terms link ", function () {
        pages.deal.goToTheRightsTermPeriodsHeaderLink();
        pages.deal.waitForAjax();
        browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.addAnotherRightsTermPeriodLink));
    });
};

exports.expectTermsDetailsAreOk = function () {
    it("Expect terms tab is opened successfully ", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.dealTermsSummaryHeader));
    });
};

exports.goToFinderDealTermsTabDetails = function () {
    it("Click on finder deal terms link ", function () {
        pages.deal.goToFinderDealTerms();
        browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.finderDealsTitle));
    });
};

exports.goToRelatedDealsGeneralTabDetails = function () {
    it("Click on related deals general link ", function () {
        pages.deal.goToRelatedDealsGeneral();
        browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.relatedDealsTitle));
    });
};

exports.goToDealSummaryGeneralTabDetails = function () {
    it("Click on deal summary general link ", function () {
        pages.deal.goToDealSummaryGeneral();
        browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.dealSummaryTitle));
    });
};

exports.goToIncomeRatesPage = function () {
    it("Go to Income Rates Summary Page", function () {
        pages.deal.clickIncomeRatesLink();
    });
};

exports.verifyErrorMessages = function () {
    it("Check that error messages are displayed correctly", function () {
        expect(pages.deal.errorHeaderIsVisible()).toBeTruthy();

        //  expect(pages.deal.errorIconsAreVisible()).toBeTruthy();
        expect(pages.deal.errorRRIsVisible()).toBeTruthy();
    });
};

exports.getRRIconData = function () {
    it("", function () {
        pages.deal.errorIconsAreVisible();
    });
};

exports.refreshThePage = function () {
    it("Refresh the page", function () {
        browser.driver.navigate().refresh();
        pages.deal.waitForAjax();
        browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.dealBriefNumber));
    });
};

exports.checkContractPeriodsAndScopesHeaderTitlePresent = function () {
    it("Check that contract periods and scopes header title is present ", function () {
        expect(pages.deal.elems.contractPeriodsScopesHeaderLink.isDisplayed()).toBeTruthy();
    });
};

exports.checkRightsTermPeriodsHeaderTitlePresent = function () {
    it("Check that rights term periods header title is present ", function () {
        expect(pages.deal.elems.rightsTermPeriodsHeaderLink.isDisplayed()).toBeTruthy();
    });
};

exports.checkFinderDealsHeaderTitlePresent = function () {
    it("Check that finder deals header title is present ", function () {
        expect(pages.deal.elems.finderDealsHeaderLink.isDisplayed()).toBeTruthy();
    });
};

exports.checkGrowlMessageDisplayedAfterScopeEdited = function (message) {
    it("Check that the success message after saving in the top of the screen is ok ", function () {
        browser.driver.findElement(By.css("div.growl-item.ng-scope.growl-item-success p")).getText().then(function (promise) {
            console.log("The success message after saving in the top of the screen is " + promise);
            expect(promise).toEqual(message);
        });
    });
};
//div.growl-item.ng-scope.growl-item-success

addBasicStep(
    exports, pages.deal, 'Validate Society Agreement Numbers link presence'
);

addBasicStep(exports, pages.deal, 'Add Society Agreement Numbers to PSS chain');
addBasicStep(exports, pages.deal, 'View PSS chain Society Agreement Numbers');
pageStep([
    'Go to tab'
]);
addBasicStep(exports, pages.deal, 'Click Add External Contact Link');
addBasicStep(exports, pages.deal, 'Add External Contact');
addBasicStep(exports, pages.deal, 'Click Add Internal Contact Link');
addBasicStep(exports, pages.deal, 'Add Internal Contact');
addBasicStep(exports, pages.deal, 'Save Internal Contacts');
addBasicStep(exports, pages.deal, 'Save External Contacts');
addBasicStep(exports, pages.deal, 'Add Contracting Parties');
addBasicStep(exports, pages.deal, 'Expect number of Contracting Parties to be');
addBasicStep(exports, pages.deal, 'Expect number of External Contacts to be');
addBasicStep(exports, pages.deal, 'Expect number of Internal Contacts to be');

exports.createDeal = data => {
    var newDeal = this;

    describe('Create new deal', () => {
        steps.mainHeader.createNewRecord('Deal');

        steps.createDealGeneral.selectSigningTerritory(data.deal_signing_territory);
        steps.createDealGeneral.fillCompanyCodeField(data.company_code);
        steps.createDealGeneral.selectSpecificCompanyCode(data.company_code);
        steps.createDealGeneral.enterContractingPartySearchTerms(data.contracting_parties);
        steps.createDealGeneral.waitForContractingPartyDropDown();
        steps.createDealGeneral.selectContractingPartySearchResultByIndex(0);
        exports.itContinueToNextPage();

        if (data.contract_periods) {
            describe('Contract periods', () => {
                _.each(data.contract_periods, (cp, i) => {
                    if (i > 0) {
                        steps.createDealContractPeriod.addNewContractPeriod();
                    } else {
                        steps.createDealContractPeriod.enterActualStartDate(cp.start);
                    }

                    steps.createDealContractPeriod.enterTargetEndDateInMonths(cp.end);

                    describe('Scopes', () => {
                        _.each(cp.scopes, (scp, j) => {
                            steps.createDealScope.addSpecificScopeTypeAndTerritory(scp.contract_type, scp.territory);

                            if (scp.publisher_share_sets) {
                                describe('Publisher Share Sets', () => {
                                    steps.createDealScope.clickOnAddPublisherShareSet({scrollIntoView: true});

                                    _.each(scp.publisher_share_sets, (pss, k) => {
                                        if (k === 0) {
                                            steps.createDealScope.selectPublisherRole(0, k, pss.role);
                                        }

                                        steps.createDealScope.enterPublisherSearchTerms(0, k, pss.name);
                                        steps.createDealScope.selectPublisherSearchResultByIndex(0);

                                        if (pss.own) {
                                            steps.createDealScope.enterOwnPublisherShare(0, k, pss.own);
                                        }

                                        if (pss.collect) {
                                            steps.createDealScope.enterCollectPublisherShare(0, k, pss.collect);
                                        }
                                    });

                                    steps.createDealScope.saveSharePublisherShareSet();
                                });
                            }

                            if (scp.royalty_rate_sets) {
                                describe('Royalty Rates', () => {
                                    steps.royaltyRates.addNewRoyaltySet();

                                    _.each(scp.royalty_rate_sets, (rr, k) => {
                                        steps.royaltyRates.enterEffectiveStartDateForLastRateSet(rr.effective_start_date);

                                        if (rr.application_method === 'At Source') {
                                            steps.royaltyRates.clickAtSourceApplicationMethod();
                                        } else if (rr.application_method === 'On Receipt') {
                                            steps.royaltyRates.clickOnReceiptApplicationMethod();
                                        }
                                        steps.royaltyRates.confirmChangingRateApplicationMethod();

                                        steps.royaltyRates.addRatePercentageToContractualField(rr.contractual_rate);
                                        steps.royaltyRates.addNPSToContractualField(rr.NPS);
                                    });

                                    steps.royaltyRates.saveRateSet();
                                    steps.base.sleep(10000);
                                });
                            }
                        });
                    });

                });
            });

            steps.deal.goToNextPage();

            describe('Right Term Periods', () => {
                if (data.rtp_contract_periods === 'all') {
                    steps.createDealRtp.selectRtpAllContractPeriods();
                } else if (data.rtp_contract_periods) {
                    //TBI
                }
                steps.createDealRtp.selectSpecificScopeNumberIRtpAcquisition(1);
                steps.createDealRtp.fillIntoAcquisitionStartDateField('2013-09-18');
                steps.deal.goToNextPage();
            });

            describe('Payees', () => {
                //steps.createDealPayee.selectPayeeOrganisationFromDropDown(data.payee.name);
                steps.createDealPayee.selectPayeeOrganisationFromDropdown(data.payee.name || fromTestVariable('lastCreatedOrgId'));
                steps.createDealPayee.fillPayeeInfo('Payout 1', 100, 100);
                steps.createDealPayee.savePayeeForm();
            });
            steps.deal.waitContinueButtonEnabled();
            steps.deal.goToNextPage();

            steps.deal.waitContinueButtonEnabled();
            steps.deal.goToNextPage();
            steps.deal.saveDeal();
            steps.deal.storeDealIdInTestVariable('lastCreatedDealId', 'lastCreatedDealUuid');
        }
    });
};


addStep(exports, 'Store Deal ID in test variable', function (varName, uuidVarName) {

    var binding = 'getPristineDeal().deal_header.contract_brief_number',
        idBinding = element(by.binding(binding));

    browser.wait(EC.visibilityOf(idBinding));

    if (uuidVarName) {
        idBinding.evaluate('getPristineDeal().id').then(value => { 
            setTestVariable(uuidVarName, value);
        });
    }

    idBinding.getText().then(value => {
        setTestVariable(varName, value);
    });

});

