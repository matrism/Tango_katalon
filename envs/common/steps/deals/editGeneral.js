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
        pages.editDealGeneral.clickOnEditInternalContactsArea();
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealGeneral.elems.internalContactsEditIcon));
        pages.editDealGeneral.clickOnEditIconInternalContacts();
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealGeneral.elems.internalContactsEditInputField));
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
        pages.editDealGeneral.clickOnAddInternalContactsLink();
        //browser.wait(ExpectedConditions.visibilityOf(pages.editDealGeneral.internalContactsEditInputField()));
    });
};

exports.printInternalContactList = function () {
    it("Return internal contact list contains ", function () {
        console.log("Internal contacts list is \n" + internalContacts);
    });
};

exports.editInternalContactField = function (internal_contact) {
    it("Edit internal contact field", function () {
        pages.editDealGeneral.editInternalContactsField(internal_contact);
    });
};

exports.editInternalContactsFieldRowI = function (i) {
    it("Edit internal contact row i ", function () {
        pages.editDealGeneral.editTheIRowInternalContactField(i);
        pages.editDealGeneral.waitForAjax();
    });
};

exports.selectEditRandomInternalContactDropDown = function () {
    it("Select edit random value from internal contact drop down", function () {
        pages.editDealGeneral.selectEditRandomInternalContactsFromDropDown();
        pages.editDealGeneral.waitForAjax();
    });
};

exports.selectEditSpecificInternalContactDropDown = function (role) {
    it("Select edit random value from internal contact drop down", function () {
        pages.editDealGeneral.selectEditSpecificInternalContactsFromDropDown(role);
        pages.editDealGeneral.waitForAjax();
    });
};

exports.clickEditInternalContactRole = function () {
    it("Click edit internal contact role field", function () {
        pages.editDealGeneral.clickEditInternalContactsRole();
    });
},

    exports.clickEditInternalContactRoleRowI = function (i) {
        it("Click edit internal contact role row i", function () {
            pages.editDealGeneral.clickEditInternalContactsRoleRowI(i);
            pages.editDealGeneral.waitForAjax();
        });
    };

exports.removeInternalContactsRole = function () {
    it("Remove first internal contact role", function () {
        pages.editDealGeneral.removeEditInternalContactRole();
    });
};

exports.removeInternalContactsRoleRowI = function (i) {
    it("Remove internal contact role row i", function () {
        pages.editDealGeneral.removeEditInternalContactsRoleRowI(i);
    });
};

exports.removeInternalContactsRow = function () {
    it("Remove internal contact row", function () {
        pages.editDealGeneral.removeEditInternalContactsRow();
    });
};

exports.removeInternalContactsRowI = function (i) {
    it("Remove internal contact row i", function () {
        pages.editDealGeneral.removeEditInternalContactsRowI(i);
    });
};

exports.confirmModalDialog = function () {
    it("Confirm modal dialog action", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealGeneral.elems.confirmationModalDialog));
        browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealGeneral.elems.yesModalDialog));
        pages.editDealGeneral.clickOnYesModalDialog();
        browser.wait(ExpectedConditions.invisibilityOf(pages.editDealGeneral.elems.yesModalDialog));
    });
};

exports.confirmTheCancelModalDialog = function () {
    it("Confirm modal dialog action", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealGeneral.elems.cancelModalDialogElement));
        browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealGeneral.elems.yesModalDialog));
        pages.editDealGeneral.clickOnYesModalDialog();
        browser.wait(ExpectedConditions.invisibilityOf(pages.editDealGeneral.elems.cancelModalDialogElement));
    });
};

exports.expectSaveEditInternalContactButtonPresent = function () {
    it("Expect save edit internal contact button present", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealGeneral.elems.saveEditInternalContactsButton));
    });
};

exports.cancelTheModalDialog = function () {
    it("Cancel modal dialog action", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealGeneral.elems.cancelModalDialogElement));
        browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealGeneral.elems.noModalDialog));
        pages.editDealGeneral.clickOnNoModalDialog();
        browser.wait(ExpectedConditions.invisibilityOf(pages.editDealGeneral.elems.cancelModalDialogElement));
    });
};

exports.itSaveInternalContactsChanges = function () {
    it("Save internal contacts changes after editing them", function () {
        pages.editDealGeneral.clickOnSaveEditInternalContacts();
        pages.editDealGeneral.waitForAjax();
    })
};

exports.itCancelInternalContactsChanges = function () {
    it("Cancel internal contacts changes after editing them", function () {
        pages.editDealGeneral.clickOnCancelEditInternalContacts();
    })
};

exports.editSigningTerritory = function (value) {
    it("Edit the signing territory general screen", function () {
        pages.editDealGeneral.editSelectDesiredSigningTerritory(value);
        pages.editDealGeneral.waitForAjax();

        if(systemConfig.env.name === 'qa') {
            pages.editDealGeneral.editFillIntoTheCompanyCode("a");
            pages.editDealGeneral.editSelectRandomValueDropDownCompanyCode();
            pages.editDealGeneral.waitForAjax();
        }
    });
};

exports.editRandomArtistField = function (value) {
    it("Edit select random artist field", function () {
        pages.editDealGeneral.editSelectTheRandomArtist(value);
        pages.editDealGeneral.waitForAjax();
    });
};

exports.editSpecificRandomArtistField = function (artistSearch, artist) {
    it("Edit select specific artist field", function () {
        pages.editDealGeneral.editSelectTheRandomSpecificArtist(artistSearch, artist);
        pages.editDealGeneral.waitForAjax();
    });
};

exports.editSpecificArtistField = function (artistSearch, artist) {
    it("Edit select specific artist field", function () {
        pages.editDealGeneral.editSelectTheSpecificArtist(artistSearch, artist);
        pages.editDealGeneral.waitForAjax();
    });
};

exports.editRemoveArtistNumberI = function (i) {
    it("Edit remove the artist number i from list ", function () {
        browser.driver.findElement(By.css("div[name='artists'] div.ng-scope:nth-child(" + i + ") span[ng-click='!$isDisabled() && $removeTag($tag)']")).click();
        pages.editDealGeneral.waitForAjax();
    });
};

exports.editContractExecutionDate = function () {
    it("Edit the contract execution date ", function () {
        pages.editDealGeneral.editFillIntoTheValidExecutionDateYear();
        pages.editDealGeneral.editFillIntoTheValidExecutionDateMonth();
        pages.editDealGeneral.editFillIntoTheValidExecutionDateDay();
    });
};

exports.editGeneralTabFirstElementsLeftArea = function () {
    it("Edit the general tab first elements left area ", function () {
        pages.editDealGeneral.editTheGeneralTabFirstLeftElements();
    });
};

exports.editRemoveTheExistingContractingParty = function () {
    it("Edit remove existing contracting party", function () {
        pages.editDealGeneral.editRemoveTheExistingContractingParty();
    });
};

exports.editExistingContractingParty = function (contracting) {
    it("Edit existing contracting party -  add new one ", function () {
        pages.editDealGeneral.editFillIntoTheContractingParty(contracting);
        pages.editDealGeneral.editSelectRandomValueDropDownContractingParty();
        pages.editDealGeneral.waitForAjax();
    });
};

exports.editAddCompanyCode = function () {
    it("Edit add company code ", function () {
        pages.editDealGeneral.editFillIntoTheCompanyCode("a");
        pages.editDealGeneral.editSelectRandomValueDropDownCompanyCode();
        pages.editDealGeneral.waitForAjax();
    });
};

exports.saveEditGeneralTabFirstElementsLeftArea = function () {
    it("Save edit general tab first elements left area ", function () {
        pages.editDealGeneral.clickOnTheSaveEditGeneralLeftTabArea();
        pages.editDealGeneral.waitForAjax();
    });
};

exports.cancelEditGeneralTabFirstElementsLeftArea = function () {
    it("Cancel edit general tab first elements left area ", function () {
        pages.editDealGeneral.clickOnTheCancelEditGeneralLeftTabArea();
        pages.editDealGeneral.waitForAjax();
    });
};

exports.editSelectTheExecutedContractStatus = function (value) {
    it("Edit select the executed contract status and check that it is selected ", function () {
        pages.editDealGeneral.editSelectToTheExecutedContractStatus(value);
    });
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

exports.itEditAddInternalContactsSpecificRoleRowIToDealGeneralTab = function (i, role) {
    describe("Edit - internal contacts edit specific roles in deals general tab", function () {
        steps.editDealGeneral.clickEditInternalContactRoleRowI(i);
        steps.editDealGeneral.selectEditSpecificInternalContactDropDown(role);
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

exports.editCheckDealSigningTerritoryCannotBeChangedTooltip = function () {
    it("Edit check that deal signing territory cannot be changed, it is greyed out and check the error message ", function () {
        pages.editDealGeneral.editCheckTheDealSigningTerritoryCannotBeChangedTooltip();
    });
};

exports.editCheckDealSigningTerritoryFieldGeneralTabIsDisabled = function () {
    it("Edit check that deal signing territory general tab is disabled, cannot be clicked ", function () {
        pages.base.scrollIntoView(element(by.css("div[name='dealSigningTerritory'] div[ng-class='tgDropdownWrapClass']")));
        browser.driver.findElement(By.css("div[name='dealSigningTerritory'] div[ng-class='tgDropdownWrapClass']>div")).getAttribute("class").
        then(function (promise) {
            console.log(" Deal territory class contains disabled text : " + promise);
            expect(promise).toContain("disabled");
        });
    });
};


exports.editCheckDealSigningTerritoryFieldGeneralTabIsNotDisabled = function () {
    it("Edit check that deal signing territory general tab is disabled, cannot be clicked ", function () {
        pages.base.scrollIntoView(element(by.css("div[name='dealSigningTerritory'] div[ng-class='tgDropdownWrapClass']")));
        browser.driver.findElement(By.css("div[name='dealSigningTerritory'] div[ng-class='tgDropdownWrapClass']>div")).getAttribute("class").
        then(function (promise) {
            console.log(" Deal territory class contains disabled text : " + promise);
            expect(promise).not.toContain("disabled");
        });
    });
};

exports.editCheckDealSigningTerritoryValueIs = function (country) {
    it("Edit check that deal signing territory general tab is successfully changed and the value is ", function () {
        pages.base.scrollIntoView(element(by.css("div[data-tg-modular-edit-id='generalLeft'] div.control-group div:nth-child(3) div.controls.span4.break-word.ng-binding")));
        browser.driver.findElement(By.css("div[data-tg-modular-edit-id='generalLeft'] div.control-group div:nth-child(3) div.controls.span4.break-word.ng-binding")).getText().
        then(function (promise) {
            console.log(" Deal territory value is  : " + promise);
            expect(promise).toEqual(country);
        });
    });
};
