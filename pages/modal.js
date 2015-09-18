'use strict';

var pph = require('../helpers/pph'),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.modal === undefined) {
    pages.modal = new ftf.pageObject({
        locators: {
        },
          yesButttonOnModal:function(){

              return $(".modal-footer>.btn-primary");
          },
        //Methods
        clickOnYesButton:function()
        {
            browser.wait(ExpectedConditions.visibilityOf(this.yesButttonOnModal()));
            this.yesButttonOnModal().click();
        }
    });
}
