'use strict';

function TgDropdown (locator, dummy, isAppendedToBody) {
    var dropdown = locator;

    if (!dropdown.element) {
        dropdown = element(locator);
    };

    dropdown.click = function () {
        return dropdown.$('.tg-dropdown-button').click();
    };

    dropdown.results = function (text, isExact) {
        var results = dropdown.$$('.dropdown-menu a');

        if (isAppendedToBody) {
            browser.sleep(500);
            results = $$('body > div[tg-component-render-template] > .tg-dropdown-menu:not(.ng-hide) li');
        }

        browser.wait(ExpectedConditions.visibilityOfAny(results));

        if (text) {
            results = results.filter(pph.matchText(text, isExact));
        }

        return results;
    };

    dropdown.selectValue = function (val, isExact) {
        pages.base.scrollIntoView(dropdown);
        dropdown.click();
        dropdown.results(val, isExact).first().click();
    };

    dropdown.select = function (idx) {
        pages.base.scrollIntoView(dropdown);
        dropdown.click();
        dropdown.results().get(idx).click();
    };

    return dropdown;
}

module.exports = TgDropdown;

