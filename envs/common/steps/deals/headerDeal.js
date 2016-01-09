'use strict';

var promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

steps.headerDeal = exports;

exports.checkContractTypeText = function () {
    it("Check that the contract type text is present in the deal header", function () {
        pages.headerDeal.checkTheContractTypeText();
    });
};

exports.checkContractTypeValue = function (value) {
    it("Check that the contract type value from deal header is correct", function () {
        pages.headerDeal.checkTheContractTypeValue(value);
    });
};

exports.checkExactContractTypeValue = function (value) {
    it("Check that the contract type value from deal header is correct", function () {
        pages.headerDeal.checkTheExactContractTypeValue(value);
    });
};

exports.checkStatusText = function () {
    it("Check that the status text is present in the deal header", function () {
        pages.headerDeal.checkTheStatusText();
    });
};

exports.checkStatusValue = function (value) {
    it("Check that the status value from deal header is correct", function () {
        pages.headerDeal.checkTheStatusValue(value);
    });
};

exports.checkSigningTerritoryText = function () {
    it("Check that the signing territory text is present in the deal header", function () {
        pages.headerDeal.checkTheSigningTerritoryText();
    });
};

exports.checkSigningTerritoryValue = function (value) {
    it("Check that the signing territory value from deal header is correct", function () {
        pages.headerDeal.checkTheSigningTerritoryValue(value);
    });
};

exports.checkTerritoriesText = function () {
    it("Check that the territories text is present in the deal header", function () {
        pages.headerDeal.checkTheTerritoriesText();
    });
};

exports.checkOwnershipText = function () {
    it("Check that the ownership text is present in the deal header", function () {
        pages.headerDeal.checkTheOwnershipText();
    });
};

exports.checkOwnershipValue = function (value) {
    it("Check that the ownership value from deal header is correct", function () {
        pages.headerDeal.checkTheOwnershipValue(value);
    });
};

exports.checkAdministrationText = function () {
    it("Check that the administration text is present in the deal header", function () {
        pages.headerDeal.checkTheAdministrationText();
    });
};

exports.checkAdministrationValue = function (value) {
    it("Check that the administration value from deal header is correct", function () {
        pages.headerDeal.checkTheAdministrationValue(value);
    });
};

exports.checkStartDateText = function () {
    it("Check that the start date text is present in the deal header", function () {
        pages.headerDeal.checkTheStartDateText();
    });
};

exports.checkStartDateValue = function (value) {
    it("Check that the start date value from deal header is correct", function () {
        pages.headerDeal.checkTheStartDateValue(value);
    });
};

exports.checkEndDateText = function () {
    it("Check that the end date text is present in the deal header", function () {
        pages.headerDeal.checkTheEndDateText();
    });
};

exports.checkEndDateValue = function (value) {
    it("Check that the end date value from deal header is correct", function () {
        pages.headerDeal.checkTheEndDateValue(value);
    });
};

exports.checkArtistText = function () {
    it("Check that the artist text is present in the deal header", function () {
        pages.headerDeal.checkTheArtistText();
    });
};

exports.checkArtistValue = function (value) {
    it("Check that the artist value from deal header is correct", function () {
        pages.headerDeal.checkTheArtistValue(value);
    });
};

exports.checkContractBriefNumberText = function () {
    it("Check that the contract brief number text is present in the deal header", function () {
        pages.headerDeal.checkTheContractBriefNumberText();
    });
};

exports.checkContractBriefNumberValue = function (value) {
    it("Check that the contract brief number value from deal header is correct", function () {
        pages.headerDeal.checkTheContractBriefNumberValue(value);
    });
};

exports.checkLastUpdateText = function () {
    it("Check that the last update text is present in the deal header", function () {
        pages.headerDeal.checkTheLastUpdateText();
    });
};

exports.checkLastUpdateValue = function (value) {
    it("Check that the last update value from deal header is correct", function () {
        pages.headerDeal.checkTheLastUpdateValue(value);
    });
};

exports.clickOnLastUpdateValueAndCheckTheAuditLogScreen = function(){
    it("Click on the last update value deal header and check you are redirected to the audit log screen ", function(){
        pages.headerDeal.clickOnTheLastUpdateValueAndCheckTheAuditLogScreen();
    })
};


