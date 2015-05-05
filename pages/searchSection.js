"use strict";
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (pages.searchSection === undefined) {


    pages.searchSection = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",
        locators: {



        },

        searchDropdown: function () {

            return element(by.css(".btn.dropdown-toggle"));


        },
        dropdownMenu:function()
        {

            return element(by.css("#DSP-SEARCH-DROP>.dropdown-menu"));
        }
        ,
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





//END OF LOCATORS ///////////////////////////////////////





        clickDropdownMenu: function () {

            this.searchDropdown().click();

        }
        ,


        selectOrganisationOptionFromDropdown: function () {


            browser.wait(ExpectedConditions.visibilityOf(this.dropdownMenu()));
            this.organisationOption().click();



        },

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

module.exports = pages.searchSection;