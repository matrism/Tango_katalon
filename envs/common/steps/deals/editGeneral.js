'use strict';

var promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions,
    internalContacts = [];

steps.editDealGeneral = exports;

exports.returnAndCheckInternalContactsTitle = function () {
    it("Return internal contacts ", function () {
        element(By.css("div.summary-section.ng-scope div.span12.nomargins:nth-child(3) h2")).getText().
            then(function (promise) {
                console.log("Internal Contacts title is: " + promise);
                expect(promise).toEqual("INTERNAL CONTACTS");
            });
    });
};

exports.editInternalContactsArea = function () {
    it("Edit internal contacts area ", function () {
        pages.edit_deal_general.clickOnEditInternalContactsArea();
        browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.elems.internalContactsEditIcon));
        pages.edit_deal_general.clickOnEditIconInternalContacts();
        browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.elems.internalContactsEditInputField));
    });
};

exports.returnAndCheckInternalContactsHeaderTable = function () {
    it("Return internal contacts table header ", function () {
        element(By.xpath("//*[@class='view-internal-contact']//tbody//tr[1]")).getText().
            then(function (promise) {
                console.log("Internal Contacts header table is: " + promise);
                expect(promise).toEqual("Contact Name Role Email");
                internalContacts[0] = promise + "\n";
            });
    });
};

exports.returnAndCheckFirstInternalContactsValues = function () {
    it("Return first internal contacts values added ", function () {
        element(By.xpath("//*[@class='view-internal-contact']//tbody//tr[2]")).getText().
            then(function (promise) {
                //console.log("First internal Contacts values added: " + promise);
                expect(promise).not.toEqual("");
                internalContacts[1] = promise + "\n";
            });
    });
};

exports.returnAndCheckInternalContactsValues = function (i) {
    it("Return second third... the rest of internal contacts values added ", function () {
        element(By.xpath("//*[@class='view-internal-contact']//tbody//tr[" + (i + 1) + "]")).getText().
            then(function (promise) {
                console.log("Internal Contacts values added: " + promise);
                expect(promise).not.toEqual("");
                internalContacts[i] = promise + "\n";
            });
    });
};

exports.returnAndCheckAddInternalContactsLinkPresent = function () {
    it("Return add internal contacts link text ", function () {
        element(By.css("div.add-new-button button.btn.btn-link")).getText().
            then(function (promise) {
                //console.log("Add Internal Contacts list is present and it's name is: " + promise);
                expect(promise).toEqual("Add External Contact");
            });
    });
};

exports.addInternalContactLink = function () {
    it("Add internal contacts on edit mode", function () {
        pages.edit_deal_general.clickOnAddInternalContactsLink();
        //browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.internalContactsEditInputField()));
    });
};

exports.printInternalContactList = function () {
    it("Return internal contact list contains ", function () {
        console.log("Internal contacts list is \n" + internalContacts);
    });
};

exports.editInternalContactField = function (internal_contact) {
    it("Edit internal contact field", function () {
        pages.edit_deal_general.editInternalContactsField(internal_contact);
    });
};

exports.editInternalContactsFieldRowI = function (i) {
    it("Edit internal contact row i ", function () {
        pages.edit_deal_general.editTheIRowInternalContactField(i);
        pages.edit_deal_general.waitForAjax();
    });
};

exports.selectEditRandomInternalContactDropDown = function () {
    it("Select edit random value from internal contact drop down", function () {
        pages.edit_deal_general.selectEditRandomInternalContactsFromDropDown();
        pages.edit_deal_general.waitForAjax();
    });
};

exports.clickEditInternalContactRole = function () {
    it("Click edit internal contact role field", function () {
        pages.edit_deal_general.clickEditInternalContactsRole();
    });
},

exports.clickEditInternalContactRoleRowI = function (i) {
    it("Click edit internal contact role row i", function () {
        pages.edit_deal_general.clickEditInternalContactsRoleRowI(i);
        pages.edit_deal_general.waitForAjax();
    });
};

exports.removeInternalContactsRole = function () {
    it("Remove first internal contact role", function () {
        pages.edit_deal_general.removeEditInternalContactRole();
    });
};

exports.removeInternalContactsRoleRowI = function (i) {
    it("Remove internal contact role row i", function () {
        pages.edit_deal_general.removeEditInternalContactsRoleRowI(i);
    });
};

exports.removeInternalContactsRow = function () {
    it("Remove internal contact row", function () {
        pages.edit_deal_general.removeEditInternalContactsRow();
    });
};

exports.removeInternalContactsRowI = function (i) {
    it("Remove internal contact row i", function () {
        pages.edit_deal_general.removeEditInternalContactsRowI(i);
    });
};

exports.confirmModalDialog = function () {
    it("Confirm modal dialog action", function () {
        browser.wait(ExpectedConditions.elementToBeClickable(pages.edit_deal_general.elems.yesModalDialog));
        pages.edit_deal_general.clickOnYesModalDialog();
        browser.wait(ExpectedConditions.invisibilityOf(pages.edit_deal_general.elems.yesModalDialog));
    });
};

exports.expectSaveEditInternalContactButtonPresent = function () {
    it("Expect save edit internal contact button present", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.elems.saveEditInternalContactsButton));
    });
};

exports.cancelModalDialog = function () {
    it("Cancel modal dialog action", function () {
        browser.wait(ExpectedConditions.elementToBeClickable(pages.edit_deal_general.elems.noModalDialog));
        pages.edit_deal_general.clickOnNoModalDialog();
        browser.wait(ExpectedConditions.invisibilityOf(pages.edit_deal_general.elems.modalDialog));
    });
};

exports.itSaveInternalContactsChanges = function () {
    it("Save internal contacts changes after editing them", function () {
        pages.edit_deal_general.clickOnSaveEditInternalContacts();
        pages.edit_deal_general.waitForAjax();
    })
};

exports.itCancelInternalContactsChanges = function () {
    it("Cancel internal contacts changes after editing them", function () {
        pages.edit_deal_general.clickOnCancelEditInternalContacts();
        browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.elems.yesModalDialog));
    })
};

exports.itEditInternalContactsToDealGeneralTab = function (internal_contact) {
    describe("Edit - internal contacts in deals general tab", function () {
        steps.editDealGeneral.editInternalContactField(internal_contact);
        steps.editDealGeneral.selectEditRandomInternalContactDropDown();
        steps.editDealGeneral.removeInternalContactsRole();
        steps.editDealGeneral.clickEditInternalContactRole();
        steps.editDealGeneral.selectEditRandomInternalContactDropDown();
    });
};

exports.itEditAndRemoveInternalContactsRowIToDealGeneralTab = function (i) {
    describe("Edit - internal contacts  remove and add role in deals general tab", function () {
        steps.editDealGeneral.editInternalContactsFieldRowI(i);
        steps.editDealGeneral.selectEditRandomInternalContactDropDown();
        steps.editDealGeneral.removeInternalContactsRoleRowI(i);
        steps.editDealGeneral.clickEditInternalContactRoleRowI(i);
        steps.editDealGeneral.selectEditRandomInternalContactDropDown();
    });
};

exports.itEditAddInternalContactsRowIToDealGeneralTab = function (i) {
    describe("Edit - internal contacts edit values in deals general tab", function () {
        steps.editDealGeneral.editInternalContactsFieldRowI(i);
        steps.editDealGeneral.selectEditRandomInternalContactDropDown();
        steps.editDealGeneral.clickEditInternalContactRoleRowI(i);
        steps.editDealGeneral.selectEditRandomInternalContactDropDown();
    });
};

exports.itEditAddInternalContactsRoleRowIToDealGeneralTab = function (i) {
    describe("Edit - internal contacts edit roles in deals general tab", function () {
        steps.editDealGeneral.clickEditInternalContactRoleRowI(i);
        steps.editDealGeneral.selectEditRandomInternalContactDropDown();
    });
};

exports.itRemoveFirstInternalContactsRowToDealGeneralTab = function () {
    describe("Remove first internal contacts row in deals general tab", function () {
        steps.editDealGeneral.removeInternalContactsRow();
        steps.editDealGeneral.confirmModalDialog();
        steps.editDealGeneral.expectSaveEditInternalContactButtonPresent();
    });
};

exports.itRemoveInternalContactsRowIToDealGeneralTab = function (i) {
    describe("Remove internal contacts row  i in deals general tab", function () {
        steps.editDealGeneral.removeInternalContactsRowI(i);
        steps.editDealGeneral.confirmModalDialog();
    });
};
