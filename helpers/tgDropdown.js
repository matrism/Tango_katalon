'use strict';

function TgDropdown (locator, dummy, isAppendedToBody) {
    var dropdown = locator;

    if (!dropdown.element) {
        dropdown = element(locator);
    };

    dropdown.click = function () {
        return dropdown.$('.tg-dropdown-button').click();
    };

    dropdown.results = function (text) {
        var results = dropdown.$$('.dropdown-menu a');

        if (isAppendedToBody) {
            browser.sleep(500);
            results = $$('body > div[tg-component-render-template] > .tg-dropdown-menu:not(.ng-hide) li');
        }

        if (text) {
            results = results.filter(function(elem, index){
                return elem.getText().then(function(elemText){
                    return elemText.indexOf(text) > -1;
                });
            });
        }

        return results;
    };

    dropdown.selectValue = function (val) {
        pages.base.scrollIntoView(dropdown);
        dropdown.click();
        dropdown.results(val).first().click();
    };

    dropdown.select = function (idx) {
        pages.base.scrollIntoView(dropdown);
        dropdown.click();
        dropdown.results().get(idx).click();
    };

    return dropdown;
}

module.exports = TgDropdown;

