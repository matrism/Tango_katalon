var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (steps.searchSection === undefined) {
    steps.searchSection = {





        addIncomeProvidersToOrganisation:function(table, message) {



            var fields = table.shift();
            _.each(table, function (row, index) {
                    var inboundIncomeType = row[0],
                        inboundIncomeTypeDescription = row[1],
                        incomeFileType = row[3],
                        tangoIncomeType = row[4]

                        ;
                    var consoleMessage;

                    consoleMessage = message.replace("%InboundIncomeType%", inboundIncomeType);
                    consoleMessage =  consoleMessage.replace("%InboundIncomeTypeDescription%", inboundIncomeTypeDescription);
                    consoleMessage =  consoleMessage.replace("%IncomeFileType%", incomeFileType);
                    consoleMessage =  consoleMessage.replace("%TangoIncomeType%", tangoIncomeType);




                    it(consoleMessage,function()
                        {
                            pages.organisation.typeIntoInboundIncomeTypeInput(inboundIncomeType);
                            pages.organisation.typeIntoInboundIncomeTypeDescriptionInput(inboundIncomeTypeDescription);
                            pages.organisation.typeIntoIncomeFileTypeInput(incomeFileType);
                            pages.organisation.typeIntoTangoIncomeTypeInput(tangoIncomeType);




                        }
                    );


                }



            )}
        ,
        openIncomeProviderEdit:function()
        {


            browser.wait(ExpectedConditions.visibilityOf(this.incomeProviderSection()));
            this.incomeProviderSection().click();
            browser.wait(ExpectedConditions.visibilityOf(this.incomeProviderSectionEdit()));
            this.incomeProviderSectionEdit().click();

        }
        ,

        accessSavedDealByNumber:function(dealContractNumber)
        {

            it("User accesses deal with number "+ dealContractNumber,function(){
                //
                pages.searchSection.clickDropdownMenu();
                pages.searchSection.selectDeal();
                pages.searchSection.typeDealNumberIntoInput(dealContractNumber);
                pages.searchSection.selectValueFromDropdown();


            })




        }
        ,
        accessSavedOrganisationByName:function(organisationName)
        {

            it("User accesses organisation with name "+ organisationName,function(){

                pages.searchSection.clickDropdownMenu();
                pages.searchSection.selectOrganisationOptionFromDropdown();
                pages.searchSection.typeOrganisationNameIntoInput(organisationName);
                pages.searchSection.selectValueFromDropdown();

            })


        }
        ,
        accessSavedOrganisationByNameInHash:function()
        {
         var organisationName =   "Lyricfind";
            it("User accesses organisation with name "+ organisationName,function(){

                pages.searchSection.clickDropdownMenu();
                pages.searchSection.selectOrganisationOptionFromDropdown();
                pages.searchSection.typeOrganisationNameIntoInput(organisationName);
                pages.searchSection.selectValueFromDropdown();

            })


        }
        ,





        test: function () {


            it("Test Step", function () {
                browser.pause();

            });

        }

    };
}

module.exports = steps.searchSection;
