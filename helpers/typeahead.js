'use strict';

function Typeahead (target, dummy, isAppendedToBody) {
    var typeahead = target,
        resultSelector = '.tg-typeahead__suggestions-group-item';

    if (!target.element) {
        typeahead = element(target);
    }

    let termInput = typeahead.element(by.model('$term'));

    typeahead.clear = () => {
        return termInput.clear();
    };

    typeahead.sendKeys = function (keys) {
        pages.base.scrollIntoView(termInput);
        return termInput.sendKeys(keys);
    };

    typeahead.getValue = () => {
        return termInput.getAttribute('value');
    };

    typeahead.noResultsMessage = function () {
        return $('[data-ng-if="$dataSets[0].data.noResults"]');
    };

    typeahead.expectNoResultsMessage = function () {
        var element = typeahead.noResultsMessage();
        browser.wait(EC.visibilityOf(element));
        expect(pages.base.isPresentAndDisplayed(element)).toBeTruthy();
    };

    typeahead.results = function (text, isExact) {
        //var results = typeahead.all(by.repeater('$match in $dataSet.queried.matches'));
        var results = typeahead.$$(resultSelector);

        if (isAppendedToBody) {
            results = $$('body > .tg-typeahead__suggestions-wrap > ul').first().$$(resultSelector);
        }

        browser.wait(protractor.ExpectedConditions.visibilityOfAny(results));

        if (text) {
            results = results.filter(pph.matchText(text, isExact));
        }

        /*if (text) {
            results = typeahead.all(by.cssContainingText(resultSelector, text));

            if (isExact) {
                results = results.filter(pph.matchTextExact(text));
            }
        }*/

        return results;
    };

    typeahead.setFilter = function (value) {
        var tagFilter = typeahead.$('.tg-typeahead__tag-filter');

        tagFilter.click();
        tagFilter.element(by.cssContainingText('option', value)).click();
    };

    typeahead.select = function (text, isExact, index) {
        return typeahead.enterText(text).then(() => {
            typeahead.clickResult(text, isExact, index);
        });
    };

    typeahead.selectTW = function (text, index) {
        return typeahead.enterText(text).then(() => {
                $$('body > .tg-typeahead__suggestions-wrap > ul').get(index).click();
        });
    };

    typeahead.enterText = (text) => {
        typeahead.clear();
        return typeahead.sendKeys(text).then(() => {
            browser.sleep(400);
            return pages.base.waitForAjax();
        });
    };

    typeahead.clickResult = (text, isExact, index) => {
        if (!_.isNumber(index)) {
            typeahead.results(text, isExact).first().click();
        } else {
            typeahead.results().get(index).click();
        }
    };

    typeahead.selectFirst = function(text) {
        return typeahead.select(text, false, 0);
    };

    typeahead.selectFirstTangoWork = function(text) {
        return typeahead.selectTW(text, 0);
    };

    return typeahead;
}

module.exports = Typeahead;

