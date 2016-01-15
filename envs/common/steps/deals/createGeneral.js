"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

steps.createDealGeneral = exports;

exports.goToNewDealPage = function () {
    it("Go to New Deal page", function () {
        pages.createDealGeneral.open().waitForAjax();
    });
};

exports.selectSigningTerritory = function (value) {
    it('Select deal signing territory (' + value + ')', function () {
        pages.createDealGeneral.selectDesiredSigningTerritory(value);
    });
};

exports.selectDealSigningTerritory = function () {
    it("Select deal signing territory", function () {
            pages.createDealGeneral.selectDesiredSigningTerritory("Argentina");
        }
    );
};

exports.enterContractingPartySearchTerms = function (value) {
    it('Enter contracting party search terms (' + value + ')', function () {
        pages.createDealGeneral.fillContractingPartiesField(value);
    });
};

exports.fillContractingPartyField = function () {
    it("Fill contracting party field", function () {
            pages.createDealGeneral.fillContractingPartiesField("bmi");
        }
    );
};

exports.fillCompanyCodeField = function (value) {
    it("Fill company code field", function () {
            pages.createDealGeneral.fillIntoCompanyCodeField(value);
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
        pages.createDealGeneral.selectContractingPartyValue("(021)\n BMI");
        pages.createDealGeneral.waitForAjax();
    });
};

exports.selectContractingPartySearchResultByIndex = function (i) {
    it('Select contracting party search result #' + (i + 1), function () {
        pages.createDealGeneral.selectContractingPartySearchResultByIndex(i);
    });
};

exports.selectRandomContractingParty = function () {
    it("Select random suggestion", function () {
        pages.createDealGeneral.selectRandomContractingPartyValueFromDropDown();
        pages.createDealGeneral.waitForAjax();
    });
};

exports.selectSpecificCompanyCode = function (value) {
    it("Select specific suggestion", function () {
        pages.createDealGeneral.selectCompanyCodeSpecificValue(value);
        pages.createDealGeneral.waitForAjax();
    });
};

exports.selectRandomCompanyCode = function () {
    it("Select random suggestion", function () {
        pages.createDealGeneral.selectRandomCompanyCodeValueFromDropDown();
        pages.createDealGeneral.waitForAjax();
    });
};

exports.fillIntoInternalContactField = function (internal_contact) {
    it("Fill into internal contact field", function () {
        pages.createDealGeneral.fillIntoInternalContactsField(internal_contact);
        pages.createDealGeneral.waitForAjax();
    });
};

exports.fillIntoInternalContactsFieldRowI = function (i) {
    it("Fill into internal contact row i ", function () {
        pages.createDealGeneral.fillIntoTheIRowInternalContactField(i);
        pages.createDealGeneral.waitForAjax();
    });
};

exports.selectRandomInternalContactDropDown = function () {
    it("Select random value from internal contact drop down", function () {
        pages.createDealGeneral.selectRandomInternalContactsFromDropDown();
    });
};

exports.selectRandomInternalContactDropDownRowI = function (i) {
    it("Select random value from internal contact drop down", function () {
        pages.createDealGeneral.selectRandomInternalContactsFromDropDownRowI(i);
    });
};

exports.clickOnInternalContactRole = function () {
    it("Click on internal contact role field", function () {
        pages.createDealGeneral.clickOnInternalContactsRole();
    });
};

exports.clickOnInternalContactsRoleRowI = function (i) {
    it("Click on internal contact role row i", function () {
        pages.createDealGeneral.clickIntoInternalContactsRoleRowI(i);
    });
};

exports.clickOnDraftContractStatus = function () {
    it("Click on the draft contract status and check that it is selected ", function () {
        pages.createDealGeneral.clickOnTheDraftContractStatus();
        var test = pages.createDealGeneral.elems.draftContractStatusButton.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.clickOnExecutedContractStatus = function () {
    it("Click on the executed contract status and check that it is selected ", function () {
        pages.createDealGeneral.clickOnTheExecutedContractStatus();
        var test = pages.createDealGeneral.elems.executedContractStatusButton.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.fillIntoExecutionDateField = function () {
    it("Fill into execution date field ", function () {
        pages.createDealGeneral.fillIntoTheExecutionYearField();
        pages.createDealGeneral.elems.monthExecutionDate.isEnabled();
        pages.createDealGeneral.fillIntoTheExecutionMonthField();
        pages.createDealGeneral.elems.dayExecutionDate.isEnabled();
        pages.createDealGeneral.fillIntoTheExecutionDayField();
    });
};

exports.fillIntoExecutionDateFieldSpecificYearValue = function (year) {
    it("Fill into execution date year field ", function () {
        pages.createDealGeneral.fillIntoTheExecutionYearField(year);
    });
};

exports.fillIntoExecutionDateFieldSpecificMonthValue = function (month) {
    it("Fill into execution date month field ", function () {
        pages.createDealGeneral.elems.monthExecutionDate.isEnabled();
        pages.createDealGeneral.fillIntoTheExecutionMonthField(month);
    });
};

exports.fillIntoExecutionDateFieldSpecificDayValue = function (day) {
    it("Fill into execution date day field ", function () {
        pages.createDealGeneral.elems.dayExecutionDate.isEnabled();
        pages.createDealGeneral.fillIntoTheExecutionDayField(day);
    });
};

exports.selectRandomArtistValue = function () {
    it("Select a random value for artist field ", function () {
        pages.createDealGeneral.selectTheRandomArtist();
    });
};

exports.selectRandomValueRepresentMultipleDeals = function () {
    it("Select random value from represent multiple deals drop down", function () {
        pages.createDealGeneral.selectTheRandomValueRepresentMultipleDeals();
    });
};

exports.clickOnExclusiveDealRights = function () {
    it("Click on the exclusive deal rights and validate that is successfully selected ", function () {
        pages.createDealGeneral.clickOnTheExclusiveDealRights();
        var test = pages.createDealGeneral.elems.exclusiveDealRights.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.clickOnNonExclusiveDealRights = function () {
    it("Click on the non exclusive deal rights and validate that is successfully selected ", function () {
        pages.createDealGeneral.clickOnTheNonExclusiveDealRights();
        var test = pages.createDealGeneral.elems.nonExclusiveDealRights.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.selectRandomDealKeywords = function () {
    it("Select the random deal keywords", function () {
        pages.createDealGeneral.selectTheRandomDealKeywords();
    });
};

exports.fillIntoWampsContractBriefNumberField = function () {
    it("Fill into wamps contract brief number field ", function () {
        pages.createDealGeneral.fillIntoTheWampsContractBriefNumberField();
    })
};

exports.fillIntoAuditPeriodField = function () {
    it("Fill into the audit period field ", function () {
        pages.createDealGeneral.fillIntoTheAuditPeriodField();
    });
};

exports.fillIntoPeriodToFileSuitField = function () {
    it("Fill into the period to file suit field", function () {
        pages.createDealGeneral.fillIntoThePeriodToFileSuitField();
    });
};

exports.fillIntoLegalFileReferenceCodeField = function () {
    it("Fill into the legal file reference code field ", function () {
        pages.createDealGeneral.fillIntoTheLegalFileReferenceCodeField();
    });
};

exports.selectRandomExternalContactRoleRowI = function (i) {
    it("Select the random external contact role row i ", function () {
        pages.createDealGeneral.selectTheRandomExternalContactRoleRowI(i);
    });
};

exports.selectSpecificExternalContactRoleRowI = function (i, role) {
    it("Select the specific external contact role row i ", function () {
        pages.createDealGeneral.selectTheSpecificExternalContactRoleRowI(i, role);
    });
};

exports.selectRandomExternalContactNameRowI = function (i) {
    it("Select the random external contact name row i ", function () {
        pages.createDealGeneral.selectTheRandomExternalContactNameRowI(i);
    });
};

exports.fillIntoDemoDealChargeBacksField = function () {
    it("Fill into the demo deal charge backs field ", function () {
        pages.createDealGeneral.fillIntoTheDemoDealChargeBacksField();
    });
};

exports.fillIntoUsCopyrightCertificateDealChargeBacksField = function () {
    it("Fill into the us copyright certificate deal charge backs field ", function () {
        pages.createDealGeneral.fillIntoTheUsCopyrightCertificateDealChargeBacksField();
    });
};

exports.fillIntoLegalFeesDealChargeBacksField = function () {
    it("fill into the legal fees deal charge back field ", function () {
        pages.createDealGeneral.fillIntoTheLegalFeesDealChargeBacksField();
    });
};

exports.fillIntoAdvertisingAndPromotionsDealChargeBacksField = function () {
    it("Fill into the advertising and promotions deal charge backs field ", function () {
        pages.createDealGeneral.fillIntoTheAdvertisingAndPromotionsDealChargeBacksField();
    });
};

exports.fillIntoLeadSheetsDealChargeBackField = function () {
    it("Fill into the lead sheets deal charge backs field ", function () {
        pages.createDealGeneral.fillIntoTheLeadSheetsDealChargeBackField();
    });
};

exports.clickOnYesMechanicalNonTitleBoundIncome = function () {
    it("Click on the yes mechanical non title bound income and check it is successfully selected ", function () {
        pages.createDealGeneral.clickOnTheYesMechanicalNonTitleBoundIncome();
        var test = pages.createDealGeneral.elems.yesMechanicalNonTitleBoundIncome.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.clickOnNoMechanicalNonTitleBoundIncome = function () {
    it("Click on the no mechanical non title bound income and check it is successfully selected ", function () {
        pages.createDealGeneral.clickOnTheNoMechanicalNonTitleBoundIncome();
        var test = pages.createDealGeneral.elems.noMechanicalNonTitleBoundIncome.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.clickOnYesPerformanceNonTitleBoundIncome = function () {
    it("Click on the yes performance non title bound income and check it is successfully selected ", function () {
        pages.createDealGeneral.clickOnTheYesPerformanceNonTitleBoundIncome();
        var test = pages.createDealGeneral.elems.yesPerformanceNonTitleBoundIncome.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.clickOnNoPerformanceNonTitleBoundIncome = function () {
    it("Click on the no performance non title bound income and check it is successfully selected ", function () {
        pages.createDealGeneral.clickOnTheNoPerformanceNonTitleBoundIncome();
        var test = pages.createDealGeneral.elems.noPerformanceNonTitleBoundIncome.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.itFillDealMandatoryFieldsGeneralTab = function () {
    describe("Fill mandatory fields in deals general tab", function () {
        steps.createDealGeneral.goToNewDealPage();
        steps.createDealGeneral.selectDealSigningTerritory();
        steps.createDealGeneral.fillCompanyCodeField("a");
        steps.createDealGeneral.waitForContractingPartyDropDown();
        steps.createDealGeneral.selectRandomCompanyCode();
        steps.createDealGeneral.fillContractingPartyField();
        steps.createDealGeneral.waitForContractingPartyDropDown();
        steps.createDealGeneral.selectRandomContractingParty();
    });
};


exports.itFillDealGeneralYearExecutionDateValue = function(year){
    it("Fill deal general year execution date specific value ", function(){
        pages.createDealGeneral.fillIntoTheExecutionYearFieldValue(year);
    });
};

exports.itFillDealGeneralMonthExecutionDateValue = function(month){
    it("Fill deal general month execution date specific value ", function(){
        pages.createDealGeneral.fillIntoTheExecutionMonthFieldValue(month);
    });
};

exports.itFillDealGeneralDayExecutionDateValue = function(day){
    it("Fill deal general day execution date specific value ", function(){
        pages.createDealGeneral.fillIntoTheExecutionDayFieldDayValue(day);
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
        steps.createDealGeneral.fillCompanyCodeField("a");
        steps.createDealGeneral.waitForContractingPartyDropDown();
        steps.createDealGeneral.selectRandomCompanyCode();
        steps.createDealGeneral.fillContractingPartyField();
        steps.createDealGeneral.waitForContractingPartyDropDown();
        steps.createDealGeneral.selectContractingPartySearchResultByIndex(1);
        steps.createDealGeneral.selectRandomArtistValue();
        steps.createDealGeneral.selectRandomValueRepresentMultipleDeals();
        steps.createDealGeneral.clickOnNonExclusiveDealRights();
        steps.createDealGeneral.clickOnExclusiveDealRights();
        steps.base.scrollIntoView("Deal keywords ", pages.createDealGeneral.elems.dealKeywordsField);
        steps.createDealGeneral.selectRandomDealKeywords();
        steps.createDealGeneral.fillIntoWampsContractBriefNumberField();
        steps.createDealGeneral.fillIntoAuditPeriodField();
        steps.createDealGeneral.fillIntoPeriodToFileSuitField();
        steps.createDealGeneral.fillIntoLegalFileReferenceCodeField();
        //steps.createDealGeneral.selectRandomExternalContactRoleRowI(1);
        //steps.createDealGeneral.selectRandomExternalContactNameRowI(1);
        //steps.base.scrollIntoView("Internal contacts", pages.createDealGeneral.elems.internalContactsInputField);
        //steps.createDealGeneral.itAddInternalContactsToDealGeneralTab("test");
        steps.createDealGeneral.fillIntoDemoDealChargeBacksField();
        steps.createDealGeneral.fillIntoUsCopyrightCertificateDealChargeBacksField();
        steps.createDealGeneral.fillIntoLegalFeesDealChargeBacksField();
        steps.createDealGeneral.fillIntoAdvertisingAndPromotionsDealChargeBacksField();
        steps.createDealGeneral.fillIntoLeadSheetsDealChargeBackField();
        steps.base.scrollIntoView("scroll mechanical", pages.createDealGeneral.elems.noMechanicalNonTitleBoundIncome);
        steps.createDealGeneral.clickOnNoMechanicalNonTitleBoundIncome();
        steps.createDealGeneral.clickOnYesMechanicalNonTitleBoundIncome();
        steps.createDealGeneral.clickOnYesPerformanceNonTitleBoundIncome();
        steps.createDealGeneral.clickOnNoPerformanceNonTitleBoundIncome();
    });
}