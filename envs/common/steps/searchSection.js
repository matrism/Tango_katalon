var _ = require('lodash'),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

steps.searchSection = exports;

exports.addIncomeProvidersToOrganisation = function (table, message) {
    var fields = table.shift();
    _.each(table, function (row, index) {
        var inboundIncomeType = row[0],
            inboundIncomeTypeDescription = row[1],
            incomeFileType = row[3],
            tangoIncomeType = row[4];
        var consoleMessage;

        consoleMessage = message.replace("%InboundIncomeType%", inboundIncomeType);
        consoleMessage =  consoleMessage.replace("%InboundIncomeTypeDescription%", inboundIncomeTypeDescription);
        consoleMessage =  consoleMessage.replace("%IncomeFileType%", incomeFileType);
        consoleMessage =  consoleMessage.replace("%TangoIncomeType%", tangoIncomeType);

        it(consoleMessage,function() {
            pages.organisation.typeIntoInboundIncomeTypeInput(inboundIncomeType);
            pages.organisation.typeIntoInboundIncomeTypeDescriptionInput(inboundIncomeTypeDescription);
            pages.organisation.typeIntoIncomeFileTypeInput(incomeFileType);
            pages.organisation.typeIntoTangoIncomeTypeInput(tangoIncomeType);
        }
        );
    }
)};

exports.openIncomeProviderEdit = function () {
    browser.wait(ExpectedConditions.visibilityOf(this.incomeProviderSection()));
    this.incomeProviderSection().click();
    browser.wait(ExpectedConditions.visibilityOf(this.incomeProviderSectionEdit()));
    this.incomeProviderSectionEdit().click();
};
        
exportsselectEntityType = function (value) {
    it('Select entity type "' + value + '" for search', function() {
        pages.searchSection.clickDropdownMenu();
        pages.searchSection.selectEntityTypeOption(value);
    });
};

exportsaccessSavedDealByNumber = function (dealContractNumber) {
    it("User accesses deal with number " + dealContractNumber, function () {
        pages.searchSection.clickDropdownMenu();
        pages.searchSection.selectDeal();
        pages.searchSection.typeDealNumberIntoInput(dealContractNumber);
        pages.searchSection.selectValueFromDropdown();
    });
};

exports.accessSavedWorkById = function (workID) {
    it("User accesses work with number "+ workID,function(){
        pages.searchSection.clickDropdownMenu();
        pages.searchSection.selectWork();
        pages.searchSection.typeDealNumberIntoInput(workID);
        pages.searchSection.selectValueFromDropdown();
    })
};

exports.accessSavedOrganisationByName = function (organisationName) {
    it("User accesses organisation with name " + organisationName, function () {
        pages.searchSection.clickDropdownMenu();
        pages.searchSection.selectOrganisationOptionFromDropdown();
        pages.searchSection.typeOrganisationNameIntoInput(organisationName);
        pages.searchSection.selectValueFromDropdown();
    });
};

exports.accessSavedPersonByName = function (personName) {
    it("User accesses person  with name " + personName, function () {
        pages.searchSection.clickDropdownMenu();
        pages.searchSection.selectPersonOptionFromDropdown();
        pages.searchSection.typeIntoSearchInput(personName);
        pages.searchSection.selectValueFromDropdown();
    })
};

exports.accessSavedOrganisationByNameInHash = function () {
    var organisationName =   "Lyricfind";
    it("User accesses organisation with name " + organisationName, function () {
        pages.searchSection.clickDropdownMenu();
        pages.searchSection.selectOrganisationOptionFromDropdown();
        pages.searchSection.typeOrganisationNameIntoInput(organisationName);
        pages.searchSection.selectValueFromDropdown();
    });
};
        
exports.test = function () {
    it("Test Step", function () {
        browser.pause();
    });
};
