"use strict";
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (pages.organisation === undefined) {


    pages.editRoyaltyRates = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",
        locators: {



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


        inboundIncomeTypeInput:function()
        {

            return element(by.css(" .table.input-table>tbody>tr:last-child>td:nth-child(1)"));


        },
        inboundIncomeTypeDescriptionInput:function()
        {
            return element(by.css(" .table.input-table>tbody>tr:last-child>td:nth-child(2)"));
        },
        incomeFileTypeInput:function()
        {
            return element(by.css(" .table.input-table>tbody>tr:last-child>td:nth-child(3)"));
        },
        tangoIncomeTypeInput:function()
        {
            return element(by.css(" .table.input-table>tbody>tr:last-child>td:nth-child(4)"));
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

         //  browser.wait(ExpectedConditions.visibilityOf(pages.organisation.incomeProviderSection()));
           //browser.wait(ExpectedConditions.visibilityOf(this.generalOrganisationSection()));

        //    this.scopeHeading().click();

         //   pages.base.scrollIntoView( this.incomeProviderSection());
        //   this.incomeProviderSection().click();
        }
,

        clickincomeProviderSectionEdit:function()
        {

          browser.wait(ExpectedConditions.visibilityOf(this.incomeProviderSectionEdit()));

           // ftf.helper.waitForElement(this.incomeProviderSectionEdit(), 30000);

            this.incomeProviderSectionEdit().click();
        }
        ,


        typeIntoInboundIncomeTypeInput:function(text)
        {
            this.inboundIncomeTypeInput().sendKeys(text);



        },
        typeIntoInboundIncomeTypeDescriptionInput:function(text)
        {
            this.inboundIncomeTypeDescriptionInput().sendKeys(text);
        },
        typeIntoIncomeFileTypeInput:function(text)
        {
            this.incomeFileTypeInput().sendKeys(text);
            browser.wait(ExpectedConditions.visibilityOf(this.typeaheadInput()));
            this.incomeFileTypeInput().sendKeys(protractor.Key.ENTER);
        },
        typeIntoTangoIncomeTypeInput:function(text)
        {
            this.tangoIncomeTypeInput().sendKeys(text);
            browser.wait(ExpectedConditions.visibilityOf(this.typeaheadInput()));
            this.tangoIncomeTypeInput().sendKeys(protractor.Key.ENTER);
        },
     clickSaveIncomeProviderButton:function()
        {



          this.saveIncomeProviderButton().click();
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




    });
}

module.exports = pages.organisation;