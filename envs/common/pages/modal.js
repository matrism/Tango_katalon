"use strict";

var ExpectedConditions = protractor.ExpectedConditions;
var pph = require("../../../helpers/pph");
var promise = protractor.promise;

if (pages.modal === undefined) {
    pages.modal = new ftf.pageObject({
        locators: {
        },

        yesButttonOnModal: function () {
            return $(".modal-footer>.btn-primary");
        },

        okButttonOnModal: function () {
            return $(".modal-footer>.btn");
        },

        //Methods
        clickOnYesButton: function () {
            return pages.base.waitForModal().then(
                () => this.yesButttonOnModal().click()
            );
        },

        clickOnOKButton: function () {
            return pages.base.waitForModal().then(
                () => this.okButttonOnModal().click()
            );
        }
    });
}