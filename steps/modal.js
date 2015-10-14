"use strict";
var steps_path = _tf_config._system_.path_to_steps;
var pages_path = _tf_config._system_.path_to_pages;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(steps_path + "modal");
require(pages_path + "modal");

if (steps.modal === undefined) {
    steps.modal = {

        clickYesOnPopupModal: function () {
            it("Confirm Popup Modal", function () {


                pages.modal.clickOnYesButton();


            })


        }


    };
}


