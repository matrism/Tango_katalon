'use strict';

function Typeahead (target, isElement) {
    var typeahead = target; 

    if (!isElement) {
        typeahead = element(target);
    }

    typeahead.sendKeys = function (keys) {
        return typeahead.element(by.model('$term')).sendKeys(keys);
    };

    typeahead.results = function (text) {
        var results = typeahead.all(by.repeater('$match in $dataSet.queried.matches'));

        if (text) {
            results = results.filter(function(elem, index){
                return elem.getText().then(function(elemText){
                    return elemText.indexOf(text) > -1;
                });
            });
        }

        browser.wait(protractor.ExpectedConditions.visibilityOfAny(results));
        return results;
    };

    return typeahead;
}

module.exports = Typeahead;

