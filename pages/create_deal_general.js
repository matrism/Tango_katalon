"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
module.exports = pages.create_deal_general = new ftf.pageObject({
    url: _tf_config.urls.app_url + "#/create/deal"
});

// Locator.
module.exports.dealSigningTerritoryPopup = function () {
    return element(By.css('button.openPopupButton'));
};

module.exports.dealSigningTerritoryDropDownData = function () {
    return element(By.css("div.typeaheadDropdown div[ng-click='selectTypeaheadOption($index)']"));
};

module.exports.contractingPartiesInput = function () {
    return element(By.css("div[ng-model='contractingParties'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"));
};

module.exports.contractingPartiesField = function () {
    return element(By.css("div[ng-model='contractingParties'] div[ng-class='tgTypeaheadWrapClass']"));
};

module.exports.internalContactsInputField = function () {
    return element(by.css("div[data-ng-model='internalContact.contact'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"));
};

module.exports.internalContactsDropDownData = function () {
    return element(by.css("div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"));
};

module.exports.internalContactRoleInputField = function () {
    return element(By.css("div[data-ng-model='internalContact.roles'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"));
};

module.exports.internalContactCreateRoleRowIRequiredErrorIcon = function (i) {
    return element(By.css("div[data-tg-modular-edit='internalContacts'] div div div:nth-child(" + i + ") div.internal-contact__col.m-role i.internal-contact__error.fa.fa-exclamation-triangle.ng-scope"))
};


module.exports.selectDesiredSigningTerritory = function (specific_country) {
    pages.create_deal_general.dealSigningTerritoryPopup().click();
    expect(pages.create_deal_general.dealSigningTerritoryDropDownData().isDisplayed);
    var desiredOption;
    browser.driver.findElements(by.css("div.typeaheadDropdown div[ng-click='selectTypeaheadOption($index)']"))
        .then(function findMatchingOption(options) {
            options.forEach(function (option) {
                option.getText().then(function doesOptionMatch(text) {
                        if (text.indexOf(specific_country) != -1) {
                            desiredOption = option;
                            return true;
                        }
                    }
                )
            });
        })
        .then(function clickOption() {
            if (desiredOption) {
                desiredOption.click();
            }
        });
};

module.exports.fillContractingPartiesField = function (field) {
    pages.create_deal_general.contractingPartiesField().click();
    pages.create_deal_general.contractingPartiesInput().sendKeys(field);
};

module.exports.selectContractingPartyValue = function (specific_value) {
    var desiredOption;
    browser.driver.findElements(by.xpath("//*[@class='ng-scope']//ul[@class='tg-typeahead__suggestions ng-scope']//li[@class='tg-typeahead__suggestions-group-item ng-scope']/div"))
        .then(function findMatchingOption(options) {
            options.forEach(function (option) {
                option.getText().then(function doesOptionMatch(text) {
                        if (text.indexOf(specific_value) != -1) {
                            desiredOption = option;
                            return true;
                        }
                    }
                )
            });
        })
        .then(function clickOption() {
            if (desiredOption) {
                desiredOption.click();
            }
        });
};

module.exports.fillIntoInternalContactsField = function (internal_contact) {
    pages.create_deal_general.internalContactsInputField().sendKeys(internal_contact);
};

module.exports.selectRandomInternalContactsFromDropDown = function () {
    var desiredOption;
    browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_general.internalContactsDropDownData()));
    browser.driver.findElements(By.xpath("//*[@class='ng-scope']//ul[@class='tg-typeahead__suggestions-group']//li[@class='tg-typeahead__suggestions-group-item ng-scope']"))
        .then(function (options) {
            var randomNumber = Math.floor((Math.random() * options.length));
            options[randomNumber].click();
            browser.sleep(1000);
        })
};

module.exports.clickOnInternalContactsRole = function () {
    pages.create_deal_general.internalContactRoleInputField().click();
};

module.exports.fillIntoTheIRowInternalContactField = function (i) {
    var element = browser.findElement(By.css("div.span7.nomargins div:nth-child(" + i + ") div div[data-ng-model='internalContact.contact'] div div div div div input[ng-model='$term']"));
    element.sendKeys("test");
};


module.exports.clickIntoInternalContactsRoleRowI = function (i) {
    var element = browser.findElement(By.css("div.span7.nomargins div:nth-child(" + i + ") div div[data-ng-model='internalContact.roles'] div div div div div input[ng-model='$term']"));
    element.click();
};
