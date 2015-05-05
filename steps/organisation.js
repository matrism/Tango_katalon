var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (steps.organisation === undefined) {
    steps.organisation = {





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



     it("Open Income Provider Section for Editing",function(){




         pages.organisation.clickIncomeProviderSection();

         pages.organisation.clickincomeProviderSectionEdit();


     });


        }
,
        saveIncomeProviders:function()
        {

            it("Save edited Income Providers",function()
            {

           pages.organisation.clickSaveIncomeProviderButton();

            })

        },


        test: function () {


            it("Test Step", function () {
                browser.pause();

            });

        }

    };
}

module.exports = steps.organisation;
