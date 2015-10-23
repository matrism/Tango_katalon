'use strict';

exports = module.exports = pages.mainHeader = new ftf.pageObject ({
	locators: {
		logoutLink: { id: "DSP-LOGOUT" }
	}
});

var navbarLinkSelector = '.nav > li > a',
    ExpectedConditions = protractor.ExpectedConditions;

exports.container = function () {
    return $('#DSP-NAVBAR');
};

exports.navbarLinks = function () {
    return exports.container().$$(navbarLinkSelector);
};

exports.navbarLink = function (text) {
    return exports.container().element(by.cssContainingText(navbarLinkSelector, text));
};

exports.goToLink = function (text) {
    return exports.navbarLink(text).click();
};

exports.goToSubLink = function (link, subLink) {
    return exports.goToLink(link).then(function (){
        return exports.container().element(by.cssContainingText('.dropdown.open a', subLink)).click();
    });
};

exports.clickOnLogoutLink = function () {
    pages.mainHeader.elems.logoutLink.click();
};

exports.validateLogoutRedirection = function () {
    expect(browser.getCurrentUrl()).toMatch(/\/login.+$/);
},

exports.newRecordButton = function () {
    var button = exports.container().$('#DSP-RECORD-CREATE');

    button.click = function () {
        return button.element(by.buttonText('New Record')).click();
    };

    button.dropdownOptions = function () {
        return button.$$('.dropdown-menu > li > a');
    };

    return button;
};

exports.createNewRecord = function (type) {
    var button = exports.newRecordButton();

    return button.click().then(function (){
        if (type) {
            button.dropdownOptions().filter(function(elem){
                return elem.getText().then(function(text){
                    return text === type;
                });
            }).first().click().then(function(){
                pages.base.waitForAjax();
            });
        }
    });
};

exports.search = (function() {
    var search = {};

    search.typeahead = function() {
        return $('#DSP-SEARCH');
    };

    search.entityTypeDropdown = function() {
        return $('#DSP-SEARCH-DROP');
    };

    search.entityTypeOption = function(value) {
        return search.entityTypeDropdown().element(by.cssContainingText(
            'li a', value
        ));
    };

    search.selectEntityType = function(value) {
        var dropdown = search.entityTypeDropdown(),
            option = search.entityTypeOption(value);

        pages.base.scrollIntoView(dropdown);

        dropdown.click();

        return option.click();
    };

    search.filterTagDropdown = function() {
        return search.typeahead().$$('.tg-typeahead__tag-filter').last();
    };

    search.selectFilterTag = function(value) {
        var element = search.filterTagDropdown();
        pages.base.scrollIntoView(element);
        return pages.base.selectDropdownOption(element, value);
    };

    search.termsInput = function() {
        return search.typeahead().element(by.model('$term'));
    };

    search.enterTerms = function(value) {
        var element = search.termsInput();
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    search.resultsContainer = function() {
        var element = $('.tg-typeahead__suggestions');
        browser.wait(ExpectedConditions.visibilityOf(element));
        return element;
    };

    search.results = function() {
        return search.resultsContainer().$$('.tg-typeahead__suggestions-group-item');
    };

    search.selectResultByIndex = function(i) {
        var element = search.results().get(i);

        pages.base.scrollIntoView(element);

        return element.click().then(function() {
            pages.base.waitForAjax();
        });
    };

    search.addAnotherTermOption = function() {
        return search.resultsContainer().$(
            '[data-ng-click="selectFilterMatch($term);"]'
        );
    };

    search.addAnotherTerm = function() {
        var element = search.addAnotherTermOption();
        pages.base.scrollIntoView(element);
        return element.click();
    };

    return search;
})();
