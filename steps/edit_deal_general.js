"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "edit_deal_general");

var internalContacts = [];

if (steps.edit_deal_general === undefined) {
    steps.edit_deal_general = {

        returnAndCheckInternalContactsTitle: function () {
            it("Return internal contacts ", function () {
                element(By.css("div.summary-section.ng-scope div.span12.nomargins:nth-child(3) h2")).getText().
                    then(function (promise) {
                        console.log("Internal Contacts title is: " + promise);
                        expect(promise).toEqual("INTERNAL CONTACTS");
                    });
            });
        },

        editInternalContactsArea: function () {
            it("Edit internal contacts area ", function () {
                pages.edit_deal_general.clickOnEditInternalContactsArea();
                browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.elems.internalContactsEditIcon));
                pages.edit_deal_general.clickOnEditIconInternalContacts();
                browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.elems.internalContactsEditInputField));
            });
        },

        returnAndCheckInternalContactsHeaderTable: function () {
            it("Return internal contacts table header ", function () {
                element(By.css("table.view-internal-contact tbody tr:nth-child(1)")).getText().
                    then(function (promise) {
                        console.log("Internal Contacts header table is: " + promise);
                        expect(promise).toEqual("Contact Name Role Email");
                        internalContacts[0] = promise + "\n";
                    });
            });
        },

        returnAndCheckFirstInternalContactsValues: function () {
            it("Return first internal contacts values added ", function () {
                element(By.css("table.view-internal-contact tbody tr:nth-child(2)")).getText().
                      then(function (promise) {
                        //console.log("First internal Contacts values added: " + promise);
                        expect(promise).not.toEqual("");
                        internalContacts[1] = promise + "\n";
                    });
            });
        },

        returnAndCheckInternalContactsValues: function (i) {
            it("Return second third... the rest of internal contacts values added ", function () {
                element(By.css("table.view-internal-contact tbody tr:nth-child(" + (i + 1) + ")")).getText().
                    then(function (promise) {
                        console.log("Internal Contacts values added: " + promise);
                        expect(promise).not.toEqual("");
                        internalContacts[i] = promise + "\n";
                    });
            });
        },

        returnAndCheckAddInternalContactsLinkPresent: function () {
            it("Return add internal contacts link text ", function () {
                element(By.css("div.add-new-button button.btn.btn-link")).getText().
                    then(function (promise) {
                        //console.log("Add Internal Contacts list is present and it's name is: " + promise);
                        expect(promise).toEqual("Add External Contact");
                    });
            });
        },

        addInternalContactLink: function () {
            it("Add internal contacts on edit mode", function () {
                pages.edit_deal_general.clickOnAddInternalContactsLink();
                //browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.internalContactsEditInputField()));
            });
        },

        printInternalContactList: function () {
            it("Return internal contact list contains ", function () {
                console.log("Internal contacts list is \n" + internalContacts);
            });
        },

        editInternalContactField: function (internal_contact) {
            it("Edit internal contact field", function () {
                    pages.edit_deal_general.editInternalContactsField(internal_contact);
                }
            );
        },

        editInternalContactsFieldRowI: function (i) {
            it("Edit internal contact row i ", function () {
                    pages.edit_deal_general.editTheIRowInternalContactField(i);
                }
            );
        },

        selectEditRandomInternalContactDropDown: function () {
            it("Select edit random value from internal contact drop down", function () {
                    pages.edit_deal_general.selectEditRandomInternalContactsFromDropDown();
                    pages.edit_deal_general.waitForAjax();
                }
            );
        },

        clickEditInternalContactRole: function () {
            it("Click edit internal contact role field", function () {
                    pages.edit_deal_general.clickEditInternalContactsRole();
                }
            );
        },

        clickEditInternalContactRoleRowI: function (i) {
            it("Click edit internal contact role row i", function () {
                pages.edit_deal_general.clickEditInternalContactsRoleRowI(i);
                pages.edit_deal_general.waitForAjax();
            });
        },

        removeInternalContactsRole: function () {
            it("Remove first internal contact role", function () {
                pages.edit_deal_general.removeEditInternalContactRole();
            });
        },

        removeInternalContactsRoleRowI: function (i) {
            it("Remove internal contact role row i", function () {
                pages.edit_deal_general.removeEditInternalContactsRoleRowI(i);
           });
        },

        removeInternalContactsRow: function () {
            it("Remove internal contact row", function () {
                pages.edit_deal_general.removeEditInternalContactsRow();
            });
        },

        removeInternalContactsRowI: function (i) {
            it("Remove internal contact row i", function () {
                pages.edit_deal_general.removeEditInternalContactsRowI(i);
            });
        },

        confirmModalDialog: function () {
            it("Confirm modal dialog action", function () {
                browser.wait(ExpectedConditions.elementToBeClickable(pages.edit_deal_general.elems.yesModalDialog));
                pages.edit_deal_general.clickOnYesModalDialog();
                browser.wait(ExpectedConditions.invisibilityOf(pages.edit_deal_general.elems.yesModalDialog));
            });
        },

        expectSaveEditInternalContactButtonPresent: function () {
            it("Expect save edit internal contact button present", function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.elems.saveEditInternalContactsButton));
            });
        },

        cancelModalDialog: function () {
            it("Cancel modal dialog action", function () {
                browser.wait(ExpectedConditions.elementToBeClickable(pages.edit_deal_general.elems.noModalDialog));
                pages.edit_deal_general.clickOnNoModalDialog();
                browser.wait(ExpectedConditions.invisibilityOf(pages.edit_deal_general.elems.modalDialog));
            });
        },

        itSaveInternalContactsChanges: function () {
            it("Save internal contacts changes after editing them", function () {
                pages.edit_deal_general.clickOnSaveEditInternalContacts();
                pages.edit_deal_general.waitForAjax();
            })
        },

        itCancelInternalContactsChanges: function () {
            it("Cancel internal contacts changes after editing them", function () {
                pages.edit_deal_general.clickOnCancelEditInternalContacts();
                browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.elems.yesModalDialog));
            })
        },

        itEditInternalContactsToDealGeneralTab: function (internal_contact) {
            describe("Edit - internal contacts in deals general tab", function () {
                    steps.edit_deal_general.editInternalContactField(internal_contact);
                    steps.edit_deal_general.selectEditRandomInternalContactDropDown();
                    steps.edit_deal_general.removeInternalContactsRole();
                    steps.edit_deal_general.clickEditInternalContactRole();
                    steps.edit_deal_general.selectEditRandomInternalContactDropDown();
                }
            );
        },


        itEditAndRemoveInternalContactsRowIToDealGeneralTab: function (i) {
            describe("Edit - internal contacts  remove and add role in deals general tab", function () {
                    steps.edit_deal_general.editInternalContactsFieldRowI(i);
                    steps.edit_deal_general.selectEditRandomInternalContactDropDown();
                    steps.edit_deal_general.removeInternalContactsRoleRowI(i);
                    steps.edit_deal_general.clickEditInternalContactRoleRowI(i);
                    steps.edit_deal_general.selectEditRandomInternalContactDropDown();
                }
            );
        },

        itEditAddInternalContactsRowIToDealGeneralTab: function (i) {
            describe("Edit - internal contacts edit values in deals general tab", function () {
                    steps.edit_deal_general.editInternalContactsFieldRowI(i);
                    steps.edit_deal_general.selectEditRandomInternalContactDropDown();
                    steps.edit_deal_general.clickEditInternalContactRoleRowI(i);
                    steps.edit_deal_general.selectEditRandomInternalContactDropDown();
                }
            );
        },

        itEditAddInternalContactsRoleRowIToDealGeneralTab: function (i) {
            describe("Edit - internal contacts edit roles in deals general tab", function () {
                    steps.edit_deal_general.clickEditInternalContactRoleRowI(i);
                    steps.edit_deal_general.selectEditRandomInternalContactDropDown();
                }
            );
        },

        itRemoveFirstInternalContactsRowToDealGeneralTab: function () {
            describe("Remove first internal contacts row in deals general tab", function () {
                    steps.edit_deal_general.removeInternalContactsRow();
                    steps.edit_deal_general.confirmModalDialog();
                    steps.edit_deal_general.expectSaveEditInternalContactButtonPresent();
                }
            );
        },

        itRemoveInternalContactsRowIToDealGeneralTab: function (i) {
            describe("Remove internal contacts row  i in deals general tab", function () {
                    steps.edit_deal_general.removeInternalContactsRowI(i);
                    steps.edit_deal_general.confirmModalDialog();
                }
            );
        }

    };
}




