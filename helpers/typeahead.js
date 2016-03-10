'use strict';

function Typeahead (target) {
    var typeahead = target,
        resultSelector = '.tg-typeahead__suggestions-group-item';

    if (!target.element) {
        typeahead = element(target);
    }

    typeahead.sendKeys = function (keys) {
        return typeahead.element(by.model('$term')).sendKeys(keys);
    };

    typeahead.results = function (text, isExact) {
        //var results = typeahead.all(by.repeater('$match in $dataSet.queried.matches'));
        var results = typeahead.$$(resultSelector);

        /*if (isAppendedToBody) {
            results = $('body > .tg-typeahead__suggestions-wrap').all(resultsSelector);
        }*/

        /*if (text) {
            results = results.filter(function(elem, index){
                return elem.getText().then(function(elemText){
                    return elemText.indexOf(text) > -1;
                });
            });
        }*/

        if (text) {
            results = typeahead.all(by.cssContainingText(resultSelector, text));

            if (isExact) {
                results = results.filter(pph.matchTextExact(text));
            }
        }

        browser.wait(protractor.ExpectedConditions.visibilityOfAny(results));
        return results;
    };

    typeahead.select = function (text, isExact) {
        typeahead.sendKeys(text);
        typeahead.results(text, isExact).first().click();
    };

    return typeahead;
}

module.exports = Typeahead;

