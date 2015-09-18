'use strict';

var promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

steps.createDealGeneral = exports;

exports.goToNewDealPage = function () {
    it("Go to New Deal page", function () {
        pages.create_deal_general.open().waitForAjax();
    });
};

exports.selectDesiredSigningTerritory = function (value) {
    it('Select deal signing territory (' + value + ')', function() {
        pages.create_deal_general.selectDesiredSigningTerritory(value);
    });
};

exports.selectDealSigningTerritory = function () {
    it("Select deal signing territory", function () {
        pages.create_deal_general.selectDesiredSigningTerritory("Argentina");
    });
};

exports.enterContractingPartySearchTerms = function (value) {
    it('Enter contracting party search terms (' + value + ')', function() {
        pages.create_deal_general.fillContractingPartiesField(value);
    });
};

exports.fillContractingPartyField = function () {
    it("Fill contracting party field", function () {
        pages.create_deal_general.fillContractingPartiesField("ascap");
    });
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
    });
};

exports.selectContractingPartySearchResultByIndex = function (i) {
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
        steps.createDealGeneral.goToNewDealPage();
        steps.createDealGeneral.selectDealSigningTerritory();
        steps.createDealGeneral.fillContractingPartyField();
        steps.createDealGeneral.waitForContractingPartyDropDown();
        steps.createDealGeneral.selectRandomContractingParty();
    });
};

exports.itAddInternalContactsToDealGeneralTab = function (internal_contact) {
    describe("Add first internal contacts in deals general tab", function () {
        steps.createDealGeneral.fillIntoInternalContactField(internal_contact);
        steps.createDealGeneral.selectRandomInternalContactDropDown();
        steps.createDealGeneral.clickOnInternalContactRole();
        steps.createDealGeneral.selectRandomInternalContactDropDown();
    });
};

exports.itAddInternalContactsRowIToDealGeneralTab = function (i) {
    describe("Add internal contacts in deals general tab", function () {
        steps.createDealGeneral.fillIntoInternalContactsFieldRowI(i);
        steps.createDealGeneral.selectRandomInternalContactDropDown();
        steps.createDealGeneral.clickOnInternalContactsRoleRowI(i);
        steps.createDealGeneral.selectRandomInternalContactDropDown();
    });
};

exports.itAddAllGeneralFieldsForSanityToDealGeneralTab = function () {
    describe("Add all fields for general tab sanity in deals general tab", function () {
        steps.createDealGeneral.goToNewDealPage();
        steps.createDealGeneral.clickOnDraftContractStatus();
        steps.createDealGeneral.clickOnExecutedContractStatus();
        steps.createDealGeneral.fillIntoExecutionDateField();
        steps.createDealGeneral.selectDealSigningTerritory();
        steps.createDealGeneral.fillContractingPartyField();
        steps.createDealGeneral.waitForContractingPartyDropDown();
        steps.createDealGeneral.selectRandomContractingParty();
        steps.createDealGeneral.selectRandomArtistValue();
        steps.createDealGeneral.selectRandomValueRepresentMultipleDeals();
        steps.createDealGeneral.clickOnNonExclusiveDealRights();
        steps.createDealGeneral.clickOnExclusiveDealRights();
        steps.createDealGeneral.selectRandomDealKeywords();
        steps.createDealGeneral.fillIntoWampsContractBriefNumberField();
        steps.createDealGeneral.fillIntoAuditPeriodField();
        steps.createDealGeneral.fillIntoPeriodToFileSuitField();
        steps.createDealGeneral.fillIntoLegalFileReferenceCodeField();
        steps.createDealGeneral.selectRandomExternalContactRoleRowI(1);
        steps.createDealGeneral.selectRandomExternalContactNameRowI(1);
        //steps.createDealGeneral.itAddInternalContactsToDealGeneralTab("test");
        steps.createDealGeneral.fillIntoDemoDealChargeBacksField();
        steps.createDealGeneral.fillIntoUsCopyrightCertificateDealChargeBacksField();
        steps.createDealGeneral.fillIntoLegalFeesDealChargeBacksField();
        steps.createDealGeneral.fillIntoAdvertisingAndPromotionsDealChargeBacksField();
        steps.createDealGeneral.fillIntoLeadSheetsDealChargeBackField();
        steps.base.scrollIntoView("scroll mechanical", pages.create_deal_general.elems.noMechanicalNonTitleBoundIncome);
        steps.createDealGeneral.clickOnNoMechanicalNonTitleBoundIncome();
        steps.createDealGeneral.clickOnYesMechanicalNonTitleBoundIncome();
        steps.createDealGeneral.clickOnYesPerformanceNonTitleBoundIncome();
        steps.createDealGeneral.clickOnNoPerformanceNonTitleBoundIncome();
    });
};
