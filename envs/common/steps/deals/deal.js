'use strict';

var promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

steps.deal = exports;

exports.goToNextPage = function () {
    it("Click on continue to next page button", function () {
        pages.deal.continueToNextPage();
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
        pages.deal.clickScopeHeader();
    });
};

exports.clickLastScopeHeader = function () {
    it("Click the last scope header", function () {
        pages.deal.clickScopeHeaderLast();
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

exports.goToTermsDealTabDetails = function () {
    it("Click on terms header and go to terms deal tab details ", function () {
        pages.deal.goToTermsDealDetails();
        pages.deal.waitForAjax();
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






