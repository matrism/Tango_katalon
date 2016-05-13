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

        if (text) {
            results = results.filter(function(elem, index){
                return elem.getText().then(function(elemText){
                    return elemText.toLowerCase().indexOf(text.toLowerCase()) > -1;
                });
            });

            if (isExact) {
                results = results.filter(pph.matchTextExact(text));
            }
        }

        /*if (text) {
            results = typeahead.all(by.cssContainingText(resultSelector, text));

            if (isExact) {
                results = results.filter(pph.matchTextExact(text));
            }
        }*/

        browser.wait(protractor.ExpectedConditions.visibilityOfAny(results));
        return results;
    };

    typeahead.setFilter = function (value) {
        var tagFilter = typeahead.$('.tg-typeahead__tag-filter');

        tagFilter.click();
        tagFilter.element(by.cssContainingText('option', value)).click();
    };

    typeahead.select = function (text, isExact) {
        typeahead.sendKeys(text);
        typeahead.results(text, isExact).first().click();
    };

    typeahead.selectFirst = function(text) {
        typeahead.sendKeys(text);
        typeahead.results().first().click();
    };

    return typeahead;
}

module.exports = Typeahead;

