"use strict";
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (pages.organisation === undefined) {


    pages.organisation = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",
        locators: {



        },

        incomeProviderControls:function()
        {

           return element(by.css(".income-provider-section>div>.CONTROLS"));
        }
,
        fileTypeIncomeInput:function()
        {
          return element(by.css(".default"));

        }
,

        incomeProvidersEditView:function()
        {

          return element(by.css(".EDITOR.income-provider-section>.edit-view"));
        },
        fileTypeIncomeBlank:function()
        {

          return element(by.css(".default"));
        },

        fileTypeIncomeInputDropdown:function()
        {

          return element(by.css(".active-result.highlighted"));
        },
        generalOrganisationSection:function()
        {
            return element(by.css("#editor-general"));
        },

        incomeProviderSection:function()
        {

            return element(by.css(".income-provider-section"));
        },
        incomeProviderSectionEdit:function()
        {
            return element(by.css(" .income-provider-section>div>button"));

        },



        organisationOption:function()
        {

            return element(by.css("#SEARCH-ORG"));
        },
        searchInput: function () {

            return element(by.css(".tg-typeahead__input"));
        },

        searchTypeAheadDropdown: function () {

            return element(by.css(".tg-typeahead__suggestions-group-item-inner"));
        },


        inboundIncomeTypeInput:function(tableLine)
        {

            return element(by.css(".table.input-table>tbody>tr:nth-child("+tableLine+")>td:nth-child(1)>input"));




        },
        inboundIncomeTypeDescriptionInput:function(tableLine)
        {
            return element(by.css(".table.input-table>tbody>tr:nth-child("+tableLine+")>td:nth-child(2)>input"));
        },
        incomeFileTypeInput:function(tableLine)
        {
            return element(by.css(".table.input-table>tbody>tr:nth-child("+tableLine+")>td:nth-child(3)>input"));
        },
        tangoIncomeTypeInput:function(tableLine)
        {
            return element(by.css(".table.input-table>tbody>tr:nth-child("+tableLine+")>td:nth-child(4)>input"));
        },
        saveIncomeProviderButton:function()
        {



            return element(by.css(".income-provider-section>.edit-view>.CONTROLS>div:first-child>button:first-child"));
        }
        ,
        typeaheadInput:function()
        {

            return element(by.css(".typeahead-result"));
        },



//END OF LOCATORS ///////////////////////////////////////


        
        clickIncomeProviderSection:function()
        {




         //  ftf.helper.waitForElement(this.incomeProviderSection(), 30000);

         browser.wait(ExpectedConditions.visibilityOf(pages.organisation.incomeProviderSection()));
           //browser.wait(ExpectedConditions.visibilityOf(this.generalOrganisationSection()));

        //    this.scopeHeading().click();

            pages.base.scrollIntoView( this.incomeProviderSection());
           this.incomeProviderSection().click();
        }
,

        clickincomeProviderSectionEdit:function()
        {

          //browser.wait(ExpectedConditions.visibilityOf(this.incomeProviderSectionEdit()));

           // ftf.helper.waitForElement(this.incomeProviderSectionEdit(), 30000);

            this.incomeProviderSectionEdit().click();
        }
        ,


        typeIntoInboundIncomeTypeInput:function(text,tableLine)
        {


            browser.wait(ExpectedConditions.visibilityOf(pages.organisation.inboundIncomeTypeInput(tableLine)));
            this.inboundIncomeTypeInput(tableLine).sendKeys(text);
          //  pages.base.scrollIntoView(  this.inboundIncomeTypeInput);



        },
        typeIntoInboundIncomeTypeDescriptionInput:function(text,tableLine)
        {
            this.inboundIncomeTypeDescriptionInput(tableLine).sendKeys(text);
        },
        typeIntoIncomeFileTypeInput:function(text,tableLine)
        {
            this.incomeFileTypeInput(tableLine).sendKeys(text);
            browser.wait(ExpectedConditions.visibilityOf(this.typeaheadInput()));
            this.incomeFileTypeInput(tableLine).sendKeys(protractor.Key.ENTER);
        },
        typeIntoTangoIncomeTypeInput:function(text,tableLine)
        {
            this.tangoIncomeTypeInput(tableLine).sendKeys(text);
            browser.wait(ExpectedConditions.visibilityOf(this.typeaheadInput()));
            this.tangoIncomeTypeInput(tableLine).sendKeys(protractor.Key.ENTER);
        },
     clickSaveIncomeProviderButton:function()
        {



            browser.wait(ExpectedConditions.visibilityOf(this.saveIncomeProviderButton()));
          this.saveIncomeProviderButton().click();
        }
        ,
        waitForSaveToComplete:function()
        {

         //   browser.isElemenetPresent(by.css('element'));



            browser.wait(ExpectedConditions.invisibilityOf (    this.incomeProvidersEditView()));
            //browser.pause();

        }

        ,





        typeOrganisationNameIntoInput:function(organisationName)
        {

            this.searchInput().sendKeys(organisationName);

        },

        selectValueFromDropdown: function () {


            browser.wait(ExpectedConditions.visibilityOf(this.searchTypeAheadDropdown()));
            this.searchTypeAheadDropdown().click();


        }



        ,


        selectIncomeFileType:function(fileType)
        {

            this.fileTypeIncomeInput().click();
            this.fileTypeIncomeInput().sendKeys(fileType);

         //   browser.wait(ExpectedConditions.visibilityOf(this.fileTypeIncomeInputDropdown()));
           this.fileTypeIncomeInput().sendKeys(protractor.Key.ENTER);




        }
        ,




    });
}

module.exports = pages.organisation;