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
        return termInput.sendKeys(keys);
    };

    typeahead.getValue = () => {
        return termInput.getAttribute('value');
    };

    typeahead.results = function (text, isExact) {
        //var results = typeahead.all(by.repeater('$match in $dataSet.queried.matches'));
        var results = typeahead.$$(resultSelector);

        if (isAppendedToBody) {
            results = $('body > .tg-typeahead__suggestions-wrap').$$(resultSelector);
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

    typeahead.select = function (text, isExact) {
        return typeahead.clear().then(
            () => typeahead.sendKeys(text)
        ).then(
            () => typeahead.results(text, isExact).first().click()
        );
    };

    typeahead.selectFirst = function(text) {
        return typeahead.select();
    };

    return typeahead;
}

module.exports = Typeahead;

