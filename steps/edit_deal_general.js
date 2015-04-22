"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var randomId = require("../helpers/randomId");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "edit_deal_general");
module.exports = steps.edit_deal_general = {};

var internalContacts = [];
module.exports.returnAndCheckInternalContactsTitle = function () {
    it("Return internal contacts ", function () {
        element(By.xpath("//*[@data-ng-show='showSummary']//h2[contains(text(), 'Internal Contacts')]")).getText().
            then(function (promise) {
                console.log("Internal Contacts title is: " + promise);
                expect(promise).toEqual("INTERNAL CONTACTS");
            });
    });
};

module.exports.editInternalContactsArea = function () {
    it("Edit internal contacts area ", function () {
        pages.edit_deal_general.clickOnEditInternalContactsArea();
        browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.internalContactsEditIcon()));
        pages.edit_deal_general.clickOnEditIconInternalContacts();
        browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.internalContactsEditInputField()));
    });
};

module.exports.returnAndCheckInternalContactsHeaderTable = function () {
    it("Return internal contacts table header ", function () {
        element(By.xpath("//*[@class='view-internal-contact ng-scope']//tbody//tr[1]")).getText().
            then(function (promise) {
                console.log("Internal Contacts header table is: " + promise);
                expect(promise).toEqual("Contact Name Role Email");
                internalContacts[0] = promise + "\n";
            });
    });
};

module.exports.returnAndCheckFirstInternalContactsValues = function () {
    it("Return first internal contacts values added ", function () {
        element(By.xpath("//*[@class='view-internal-contact ng-scope']//tbody//tr[2]")).getText().
            then(function (promise) {
                //console.log("First internal Contacts values added: " + promise);
                expect(promise).not.toEqual("");
                internalContacts[1] = promise + "\n";
            });
    });
};

module.exports.returnAndCheckInternalContactsValues = function (i) {
    it("Return second third... the rest of internal contacts values added ", function () {
        element(By.xpath("//*[@class='view-internal-contact ng-scope']//tbody//tr[" + (i + 1) + "]")).getText().
            then(function (promise) {
                //console.log("Internal Contacts values added: " + promise);
                expect(promise).not.toEqual("");
                internalContacts[i] = promise + "\n";
            });
    });
};

module.exports.returnAndCheckAddInternalContactsLinkPresent = function () {
    it("Return add internal contacts link text ", function () {
        element(By.css("div.add-new-button.ng-scope button.btn.btn-link")).getText().
            then(function (promise) {
                //console.log("Add Internal Contacts list is present and it's name is: " + promise);
                expect(promise).toEqual("Add External Contact");
            });
    });
};

module.exports.addInternalContactLink = function () {
    it("Add internal contacts on edit mode", function () {
        pages.edit_deal_general.clickOnAddInternalContactsLink();
        //browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.internalContactsEditInputField()));
    });
};

module.exports.printInternalContactList = function () {
    it("Return internal contact list contains ", function () {
        console.log("Internal contacts list is \n" + internalContacts);
    });
};

module.exports.editInternalContactField = function (internal_contact) {
    it("Edit internal contact field", function () {
            pages.edit_deal_general.editInternalContactsField(internal_contact);
        }
    );
};

module.exports.editInternalContactsFieldRowI = function (i) {
    it("Edit internal contact row i ", function () {
            pages.edit_deal_general.editTheIRowInternalContactField(i);
        }
    );
};

module.exports.selectEditRandomInternalContactDropDown = function () {
    it("Select edit random value from internal contact drop down", function () {
            pages.edit_deal_general.selectEditRandomInternalContactsFromDropDown();
        }
    );
};

module.exports.clickEditInternalContactRole = function () {
    it("Click edit internal contact role field", function () {
            pages.edit_deal_general.clickEditInternalContactsRole();
        }
    );
};

module.exports.clickEditInternalContactRoleRowI = function (i) {
    it("Click edit internal contact role row i", function () {
        pages.edit_deal_general.clickEditInternalContactsRoleRowI(i);
    });
};

module.exports.removeInternalContactsRole = function () {
    it("Remove first internal contact role", function () {
        pages.edit_deal_general.removeEditInternalContactRole();
    });
};

module.exports.removeInternalContactsRoleRowI = function (i) {
    it("Remove internal contact role row i", function () {
        pages.edit_deal_general.removeEditInternalContactsRoleRowI(i);
    });
};

module.exports.removeInternalContactsRow = function () {
    it("Remove internal contact row", function () {
        pages.edit_deal_general.removeEditInternalContactsRow();
    });
};

module.exports.removeInternalContactsRowI = function (i) {
    it("Remove internal contact row i", function () {
        pages.edit_deal_general.removeEditInternalContactsRowI(i);
    });
};

module.exports.confirmModalDialog = function () {
    it("Confirm modal dialog action", function () {
        browser.wait(ExpectedConditions.elementToBeClickable(pages.edit_deal_general.yesModalDialog()));
        pages.edit_deal_general.clickOnYesModalDialog();
        browser.wait(ExpectedConditions.invisibilityOf(pages.edit_deal_general.yesModalDialog()));
    });
};

module.exports.expectSaveEditInternalContactButtonPresent = function () {
    it("Expect save edit internal contact button present", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.saveEditInternalContactsButton()));
    });
};

module.exports.cancelModalDialog = function () {
    it("Cancel modal dialog action", function () {
        browser.wait(ExpectedConditions.elementToBeClickable(pages.edit_deal_general.noModalDialog()));
        pages.edit_deal_general.clickOnNoModalDialog();
        browser.wait(ExpectedConditions.invisibilityOf(pages.edit_deal_general.modalDialog()));
    });
};


module.exports.itSaveInternalContactsChanges = function () {
    it("Save internal contacts changes after editing them", function () {
        pages.edit_deal_general.clickOnSaveEditInternalContacts();
        browser.wait(ExpectedConditions.invisibilityOf(pages.edit_deal_general.internalContactsEditInputField()));
    })
};


module.exports.itEditInternalContactsToDealGeneralTab = function (internal_contact) {
    describe("Edit - internal contacts in deals general tab", function () {
            steps.edit_deal_general.editInternalContactField(internal_contact);
            steps.edit_deal_general.selectEditRandomInternalContactDropDown();
            steps.edit_deal_general.removeInternalContactsRole();
            steps.edit_deal_general.clickEditInternalContactRole();
            steps.edit_deal_general.selectEditRandomInternalContactDropDown();
        }
    );
};


module.exports.itEditAndRemoveInternalContactsRowIToDealGeneralTab = function (i) {
    describe("Edit - internal contacts in deals general tab", function () {
            steps.edit_deal_general.editInternalContactsFieldRowI(i);
            steps.edit_deal_general.selectEditRandomInternalContactDropDown();
            steps.edit_deal_general.removeInternalContactsRoleRowI(i);
            steps.edit_deal_general.clickEditInternalContactsRoleRowI(i);
            steps.edit_deal_general.selectEditRandomInternalContactDropDown();
        }
    );
};

module.exports.itEditAddInternalContactsRowIToDealGeneralTab = function (i) {
    describe("Edit - internal contacts in deals general tab", function () {
            steps.edit_deal_general.editInternalContactsFieldRowI(i);
            steps.edit_deal_general.selectEditRandomInternalContactDropDown();
            steps.edit_deal_general.clickEditInternalContactRoleRowI(i);
            steps.edit_deal_general.selectEditRandomInternalContactDropDown();
        }
    );
};

module.exports.itEditAddInternalContactsRoleRowIToDealGeneralTab = function (i) {
    describe("Edit - internal contacts in deals general tab", function () {
            steps.edit_deal_general.clickEditInternalContactRoleRowI(i);
            steps.edit_deal_general.selectEditRandomInternalContactDropDown();
        }
    );
};

module.exports.itRemoveFirstInternalContactsRowToDealGeneralTab = function () {
    describe("Remove first internal contacts row in deals general tab", function () {
            steps.edit_deal_general.removeInternalContactsRow();
            steps.edit_deal_general.confirmModalDialog();
            steps.edit_deal_general.expectSaveEditInternalContactButtonPresent();
        }
    );
};

module.exports.itRemoveInternalContactsRowIToDealGeneralTab = function (i) {
    describe("Remove internal contacts row  i in deals general tab", function () {
            steps.edit_deal_general.removeInternalContactsRowI(i);
            steps.edit_deal_general.confirmModalDialog();
        }
    );
};



