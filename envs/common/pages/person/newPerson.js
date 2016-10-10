//
//var pages_path = _tf_config._system_.path_to_pages,

//

//
//require(pages_path + '/base');
//"use strict";
//var _ = require("lodash");
//var promise = protractor.promise;
//var ExpectedConditions = protractor.ExpectedConditions;
//pages.royaltyRates = new ftf.pageObject({
//    url: _tf_config.urls.app_url + "#/create/deal",
//    locators: {},
'use strict';

var _ = require('lodash'),
    pph = require('../../../../helpers/pph'),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.newPerson === undefined) {


    pages.newPerson = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/person",
        locators: {

        },

        waitForPageToBeShown: function () {


            browser.wait(ExpectedConditions.visibilityOf(this.lastNameInput()));
        },
        open: function () {
            ftf.pageObject.prototype.open.call(this);
            return pages.base.waitForAjax();
        },




        creditsNameInput: function () {
            return $("#primaryCreditsName");
        },
        dateOfDeath: function () {
            return element(by.model('tgModularEditModel.deathDate'));
        },
        dateOfDeathYear: function () {
            return this.dateOfDeath().element(by.css("[data-ng-model='date.year']"));
        },
        dateOfDeathMonth: function () {
            return this.dateOfDeath().element(by.css("[data-ng-model='date.month']"));
        },
        dateOfDeathDay: function () {
            return this.dateOfDeath().element(by.css("[data-ng-model='date.day']"));
        },
        dateOfBirth: function () {
            return element(by.model('tgModularEditModel.birthDate'));
        },
        dateOfBirthYear: function () {
            return this.dateOfBirth().element(by.css("[data-ng-model='date.year']"));
        },
        dateOfBirthMonth: function () {
            return this.dateOfBirth().element(by.css("[data-ng-model='date.month']"));
        },
        dateOfBirthDay: function () {
            return this.dateOfBirth().element(by.css("[data-ng-model='date.day']"));
        },
        dateOfBirthError: function () {
            return element(by.css("[tg-model-validation-field='birthDate']"));
        },
        dateOfDeathError: function () {
            return element(by.css("[tg-model-validation-field='deathDate']"));
        },
        dateOfDeathBeforeBirthError(){
            return element(by.css("[date-of-death-before-birth-message]"));
        },
        cityInput: function () {
            return $("#city-0");
        },
        regionInput: function () {
            return $("#region-0");
        },
        postalCodeInput: function () {
            return $("#zipCode-0");
        },

        addAlternativeNameButton: function () {
            return element(by.cssContainingText('button', 'Add Alternative Name'));
        },
        addAddressButton: function () {
            return element(by.cssContainingText('button', 'Add Address'));
        },
        addPhoneButton: function () {
            return element(by.cssContainingText('button', 'Add Phone'));
        },
        addEmailButton: function () {
            return element(by.cssContainingText('button', 'Add Email'));
        },
        addAlternativeName: function () {
            var element = this.addAlternativeNameButton();
            pages.base.scrollIntoView(element);
            return element.click();
        },
        addAddress: function () {
            var element = this.addAddressButton();
            pages.base.scrollIntoView(element);
            return element.click();
        },
        addPhone: function () {
            var element = this.addPhoneButton();
            pages.base.scrollIntoView(element);
            return element.click();
        },
        addEmail: function () {
            var element = this.addEmailButton();
            pages.base.scrollIntoView(element);
            return element.click();
        },




        pageFooter: function () {
            return $('#FORM-CONTROLS');
        },
        doneButton: function () {
            return $(".btn.btn-primary.ng-scope");
        },

        expectDoneButtonToBeEnabled: function () {
            expect(pph.matchesCssSelector(this.doneButton(), '.disabled')).toBeFalsy();
        },

        save: function () {

            // console.log(JSON.stringify(hash.personSlots, null, 4));
            this.expectDoneButtonToBeEnabled();
            this.doneButton().click();
            return pages.base.waitForAjax();
        },

        validateSaveRedirection: function () {
            expect(browser.getCurrentUrl()).toMatch(/#\/person\/.+$/);
        },

        typeIntoRegionInput: function (value) {

            return this.regionInput().sendKeys(value);
        },
        typeIntoPostalCodeInput: function (value) {

            return this.postalCodeInput().sendKeys(value);
        },
        typeIntoCityInput: function (value) {

            return this.cityInput().sendKeys(value);
        },
        typeCreditsName: function (value) {
            return this.creditsNameInput().sendKeys(value);
        },

        typeDateOfDeath: function (year, month, day) {
            this.dateOfDeathYear().clear();
            this.dateOfDeathYear().sendKeys(year);
            this.dateOfDeathMonth().clear();
            this.dateOfDeathMonth().sendKeys(month);
            this.dateOfDeathDay().clear();
            return this.dateOfDeathDay().sendKeys(day);

        },

        typeDateOfBirth: function (year, month, day) {
            this.dateOfBirthYear().clear()
            this.dateOfBirthYear().sendKeys(year);
            this.dateOfBirthMonth().clear();
            this.dateOfBirthMonth().sendKeys(month);
            this.dateOfBirthDay().clear();
            return this.dateOfBirthDay().sendKeys(day);

        },

        selectTheAsPayeeOptionToYes :function(){
            pages.base.scrollIntoView(element(by.css("div[ng-model='modularEditModels.model.isPayee'] button:nth-child(1)")));
            browser.driver.findElement(By.css("div[ng-model='modularEditModels.model.isPayee'] button:nth-child(1)")).click();
        }

    });
}

module.exports = pages.newPerson;
