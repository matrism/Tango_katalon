var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (steps.organisation === undefined) {
    steps.organisation = {





        addIncomeProvidersToOrganisation:function(table, message) {





            var fields = table.shift();
            var tableLine=1;
            _.each(table, function (row, index) {

                var inboundIncomeType = row[0],
                    inboundIncomeTypeDescription = row[1],
                    incomeFileType = row[2],
                    tangoIncomeType = row[3]

                    ;
                var consoleMessage;


                consoleMessage = message.replace("%InboundIncomeType%", inboundIncomeType);
                consoleMessage =  consoleMessage.replace("%InboundIncomeTypeDescription%", inboundIncomeTypeDescription);
                consoleMessage =  consoleMessage.replace("%IncomeFileType%", incomeFileType);
                consoleMessage =  consoleMessage.replace("%TangoIncomeType%", tangoIncomeType);




                it(consoleMessage,function()
                    {


                      //  pages.organisation.fillIncomeProvider(inboundIncomeType,inboundIncomeTypeDescription,incomeFileType,tangoIncomeType);


                        pages.organisation.typeIntoInboundIncomeTypeInput(inboundIncomeType,tableLine);

                        pages.organisation.typeIntoInboundIncomeTypeDescriptionInput(inboundIncomeTypeDescription,tableLine);

                        pages.organisation.typeIntoIncomeFileTypeInput(incomeFileType,tableLine);

                        pages.organisation.typeIntoTangoIncomeTypeInput(tangoIncomeType,tableLine);

                        tableLine++;




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

        waitForProvidersSaveToComplete:function()
        {
          it("Waits for save to complete",function()

          {

              pages.organisation.waitForSaveToComplete();

          })



        },
        chooseIncomeFileType:function(fileType)
        {
            it("Choose "+fileType+"Income File Type",function()
            {

                pages.organisation.selectIncomeFileType(fileType);


            })


        }
,

        pause: function () {


            it("Test Step", function () {
                browser.pause();

            });

        }

    };
}

module.exports = steps.organisation;
