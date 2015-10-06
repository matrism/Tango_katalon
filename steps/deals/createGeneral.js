"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

steps.createDealGeneral = exports;

exports.goToNewDealPage = function () {
    it("Go to New Deal page", function () {
        pages.create_deal_general.open().waitForAjax();
    });
};

exports.selectDesiredSigningTerritory = function(value) {
    it('Select deal signing territory (' + value + ')', function() {
        pages.create_deal_general.selectDesiredSigningTerritory(value);
    });
};

exports.selectDealSigningTerritory = function () {
    it("Select deal signing territory", function () {
        pages.create_deal_general.selectDesiredSigningTerritory("Argentina");
    }
    );
};

exports.enterContractingPartySearchTerms = function(value) {
    it('Enter contracting party search terms (' + value + ')', function() {
        pages.create_deal_general.fillContractingPartiesField(value);
    });
};

exports.fillContractingPartyField = function () {
    it("Fill contracting party field", function () {
        pages.create_deal_general.fillContractingPartiesField("bmi");
    }
    );
};

exports.waitForContractingPartyDropDown = function () {
    it("Wait for suggestions dropdown to appear", function () {
        var suggestion = $(".tg-typeahead__suggestions-container");
        browser.wait(ExpectedConditions.visibilityOf(suggestion));
        expect(suggestion.getText()).not.toContain("No results");
    });
};

exports.selectContractingParty = function () {
    it("Select specific suggestion", function () {
        pages.create_deal_general.selectContractingPartyValue("(021)\n BMI");
        pages.create_deal_general.waitForAjax();
    });
};

exports.selectContractingPartySearchResultByIndex = function(i) {
    it('Select contracting party search result #' + (i + 1), function() {
        pages.create_deal_general.selectContractingPartySearchResultByIndex(i);
    });
};

exports.selectRandomContractingParty = function () {
    it("Select random suggestion", function () {
        pages.create_deal_general.selectRandomContractingPartyValueFromDropDown();
    });
};

exports.fillIntoInternalContactField = function (internal_contact) {
    it("Fill into internal contact field", function () {
        pages.create_deal_general.fillIntoInternalContactsField(internal_contact);
        pages.create_deal_general.waitForAjax();
    });
};

exports.fillIntoInternalContactsFieldRowI = function (i) {
    it("Fill into internal contact row i ", function () {
        pages.create_deal_general.fillIntoTheIRowInternalContactField(i);
        pages.create_deal_general.waitForAjax();
    });
};

exports.selectRandomInternalContactDropDown = function () {
    it("Select random value from internal contact drop down", function () {
        pages.create_deal_general.selectRandomInternalContactsFromDropDown();
    });
};

exports.selectRandomInternalContactDropDownRowI = function (i) {
    it("Select random value from internal contact drop down", function () {
        pages.create_deal_general.selectRandomInternalContactsFromDropDownRowI(i);
    });
};

exports.clickOnInternalContactRole = function () {
    it("Click on internal contact role field", function () {
        pages.create_deal_general.clickOnInternalContactsRole();
    });
};

exports.clickOnInternalContactsRoleRowI = function (i) {
    it("Click on internal contact role row i", function () {
        pages.create_deal_general.clickIntoInternalContactsRoleRowI(i);
    });
};

exports.clickOnDraftContractStatus = function () {
    it("Click on the draft contract status and check that it is selected ", function () {
        pages.create_deal_general.clickOnTheDraftContractStatus();
        var test = pages.create_deal_general.elems.draftContractStatusButton.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.clickOnExecutedContractStatus = function () {
    it("Click on the executed contract status and check that it is selected ", function () {
        pages.create_deal_general.clickOnTheExecutedContractStatus();
        var test = pages.create_deal_general.elems.executedContractStatusButton.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.fillIntoExecutionDateField = function () {
    it("Fill into execution date field ", function () {
        pages.create_deal_general.fillIntoTheExecutionYearField();
        pages.create_deal_general.elems.monthExecutionDate.isEnabled();
        pages.create_deal_general.fillIntoTheExecutionMonthField();
        pages.create_deal_general.elems.dayExecutionDate.isEnabled();
        pages.create_deal_general.fillIntoTheExecutionDayField();
    });
};

exports.selectRandomArtistValue = function () {
    it("Select a random value for artist field ", function () {
        pages.create_deal_general.selectTheRandomArtist();
    });
};

exports.selectRandomValueRepresentMultipleDeals = function () {
    it("Select random value from represent multiple deals drop down", function () {
        pages.create_deal_general.selectTheRandomValueRepresentMultipleDeals();
    });
};

exports.clickOnExclusiveDealRights = function () {
    it("Click on the exclusive deal rights and validate that is successfully selected ", function () {
        pages.create_deal_general.clickOnTheExclusiveDealRights();
        var test = pages.create_deal_general.elems.exclusiveDealRights.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.clickOnNonExclusiveDealRights = function () {
    it("Click on the non exclusive deal rights and validate that is successfully selected ", function () {
        pages.create_deal_general.clickOnTheNonExclusiveDealRights();
        var test = pages.create_deal_general.elems.nonExclusiveDealRights.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.selectRandomDealKeywords = function () {
    it("Select the random deal keywords", function () {
        pages.create_deal_general.selectTheRandomDealKeywords();
    });
};

exports.fillIntoWampsContractBriefNumberField = function () {
    it("Fill into wamps contract brief number field ", function () {
        pages.create_deal_general.fillIntoTheWampsContractBriefNumberField();
    })
};

exports.fillIntoAuditPeriodField = function () {
    it("Fill into the audit period field ", function () {
        pages.create_deal_general.fillIntoTheAuditPeriodField();
    });
};

exports.fillIntoPeriodToFileSuitField = function () {
    it("Fill into the period to file suit field", function () {
        pages.create_deal_general.fillIntoThePeriodToFileSuitField();
    });
};

exports.fillIntoLegalFileReferenceCodeField = function () {
    it("Fill into the legal file reference code field ", function () {
        pages.create_deal_general.fillIntoTheLegalFileReferenceCodeField();
    });
};

exports.selectRandomExternalContactRoleRowI = function (i) {
    it("Select the random external contact role row i ", function () {
        pages.create_deal_general.selectTheRandomExternalContactRoleRowI(i);
    });
};

exports.selectSpecificExternalContactRoleRowI = function (i, role) {
    it("Select the specific external contact role row i ", function () {
        pages.create_deal_general.selectTheSpecificExternalContactRoleRowI(i, role);
    });
};

exports.selectRandomExternalContactNameRowI = function (i) {
    it("Select the random external contact name row i ", function () {
        pages.create_deal_general.selectTheRandomExternalContactNameRowI(i);
    });
};

exports.fillIntoDemoDealChargeBacksField = function () {
    it("Fill into the demo deal charge backs field ", function () {
        pages.create_deal_general.fillIntoTheDemoDealChargeBacksField();
    });
};

exports.fillIntoUsCopyrightCertificateDealChargeBacksField = function () {
    it("Fill into the us copyright certificate deal charge backs field ", function () {
        pages.create_deal_general.fillIntoTheUsCopyrightCertificateDealChargeBacksField();
    });
};

exports.fillIntoLegalFeesDealChargeBacksField = function () {
    it("fill into the legal fees deal charge back field ", function () {
        pages.create_deal_general.fillIntoTheLegalFeesDealChargeBacksField();
    });
};

exports.fillIntoAdvertisingAndPromotionsDealChargeBacksField = function () {
    it("Fill into the advertising and promotions deal charge backs field ", function () {
        pages.create_deal_general.fillIntoTheAdvertisingAndPromotionsDealChargeBacksField();
    });
};

exports.fillIntoLeadSheetsDealChargeBackField = function () {
    it("Fill into the lead sheets deal charge backs field ", function () {
        pages.create_deal_general.fillIntoTheLeadSheetsDealChargeBackField();
    });
};

exports.clickOnYesMechanicalNonTitleBoundIncome = function () {
    it("Click on the yes mechanical non title bound income and check it is successfully selected ", function () {
        pages.create_deal_general.clickOnTheYesMechanicalNonTitleBoundIncome();
        var test = pages.create_deal_general.elems.yesMechanicalNonTitleBoundIncome.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.clickOnNoMechanicalNonTitleBoundIncome = function () {
    it("Click on the no mechanical non title bound income and check it is successfully selected ", function () {
        pages.create_deal_general.clickOnTheNoMechanicalNonTitleBoundIncome();
        var test = pages.create_deal_general.elems.noMechanicalNonTitleBoundIncome.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.clickOnYesPerformanceNonTitleBoundIncome = function () {
    it("Click on the yes performance non title bound income and check it is successfully selected ", function () {
        pages.create_deal_general.clickOnTheYesPerformanceNonTitleBoundIncome();
        var test = pages.create_deal_general.elems.yesPerformanceNonTitleBoundIncome.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.clickOnNoPerformanceNonTitleBoundIncome = function () {
    it("Click on the no performance non title bound income and check it is successfully selected ", function () {
        pages.create_deal_general.clickOnTheNoPerformanceNonTitleBoundIncome();
        var test = pages.create_deal_general.elems.noPerformanceNonTitleBoundIncome.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.itFillDealMandatoryFieldsGeneralTab = function () {
    describe("Fill mandatory fields in deals general tab", function () {
        steps.create_deal_general.goToNewDealPage();
        steps.create_deal_general.selectDealSigningTerritory();
        steps.create_deal_general.fillContractingPartyField();
        steps.create_deal_general.waitForContractingPartyDropDown();
        steps.create_deal_general.selectRandomContractingParty();
    });
};

exports.itAddInternalContactsToDealGeneralTab = function (internal_contact) {
    describe("Add first internal contacts in deals general tab", function () {
        steps.create_deal_general.fillIntoInternalContactField(internal_contact);
        steps.create_deal_general.selectRandomInternalContactDropDown();
        steps.create_deal_general.clickOnInternalContactRole();
        steps.create_deal_general.selectRandomInternalContactDropDown();
    });
};

exports.itAddInternalContactsRowIToDealGeneralTab = function (i) {
    describe("Add internal contacts in deals general tab", function () {
        steps.create_deal_general.fillIntoInternalContactsFieldRowI(i);
        steps.create_deal_general.selectRandomInternalContactDropDown();
        steps.create_deal_general.clickOnInternalContactsRoleRowI(i);
        steps.create_deal_general.selectRandomInternalContactDropDown();
    });
};

exports.itAddAllGeneralFieldsForSanityToDealGeneralTab = function () {
    describe("Add all fields for general tab sanity in deals general tab", function () {
        steps.create_deal_general.goToNewDealPage();
        steps.create_deal_general.clickOnDraftContractStatus();
        steps.create_deal_general.clickOnExecutedContractStatus();
        steps.create_deal_general.fillIntoExecutionDateField();
        steps.create_deal_general.selectDealSigningTerritory();
        steps.create_deal_general.fillContractingPartyField();
        steps.create_deal_general.waitForContractingPartyDropDown();
        steps.create_deal_general.selectContractingPartySearchResultByIndex(1);
        steps.create_deal_general.selectRandomArtistValue();
        steps.create_deal_general.selectRandomValueRepresentMultipleDeals();
        steps.create_deal_general.clickOnNonExclusiveDealRights();
        steps.create_deal_general.clickOnExclusiveDealRights();
        steps.base.scrollIntoView("Deal keywords ", pages.create_deal_general.elems.dealKeywordsField);
        steps.create_deal_general.selectRandomDealKeywords();
        steps.create_deal_general.fillIntoWampsContractBriefNumberField();
        steps.create_deal_general.fillIntoAuditPeriodField();
        steps.create_deal_general.fillIntoPeriodToFileSuitField();
        steps.create_deal_general.fillIntoLegalFileReferenceCodeField();
        //steps.create_deal_general.selectRandomExternalContactRoleRowI(1);
        //steps.create_deal_general.selectRandomExternalContactNameRowI(1);
        //steps.base.scrollIntoView("Internal contacts", pages.create_deal_general.elems.internalContactsInputField);
        //steps.create_deal_general.itAddInternalContactsToDealGeneralTab("test");
        steps.create_deal_general.fillIntoDemoDealChargeBacksField();
        steps.create_deal_general.fillIntoUsCopyrightCertificateDealChargeBacksField();
        steps.create_deal_general.fillIntoLegalFeesDealChargeBacksField();
        steps.create_deal_general.fillIntoAdvertisingAndPromotionsDealChargeBacksField();
        steps.create_deal_general.fillIntoLeadSheetsDealChargeBackField();
        steps.base.scrollIntoView("scroll mechanical", pages.create_deal_general.elems.noMechanicalNonTitleBoundIncome);
        steps.create_deal_general.clickOnNoMechanicalNonTitleBoundIncome();
        steps.create_deal_general.clickOnYesMechanicalNonTitleBoundIncome();
        steps.create_deal_general.clickOnYesPerformanceNonTitleBoundIncome();
        steps.create_deal_general.clickOnNoPerformanceNonTitleBoundIncome();
    });
}