'use strict';

let TgComponent = require('./TgComponent');

function TgRoyaltiesComponent (locator) {
    let elem = new TgComponent(locator),
        button;

    button = elem.$('button.ng-binding');

    elem.results = function (text) {
        var results = elem.$$('.dropdown-menu > li');

        browser.wait(EC.visibilityOfAny(results));

        if (text) {
            results = results.filter(function(elem, index){
                return elem.getText().then(function(elemText){
                    return elemText.indexOf(text) > -1;
                });
            });
        }

        return results;
    };

    elem.selectValue = function (val) {
        pages.base.scrollIntoView(elem);
        browser.wait(ExpectedConditions.visibilityOf(button));
        button.click();

        elem.results(val).first().click();
    };

    elem.select = function (idx) {
        pages.base.scrollIntoView(elem);
        browser.wait(ExpectedConditions.visibilityOf(button));
        button.click();

        elem.results().get(idx).click();
    };

    elem.getSelectedValue = () => {
        return elem.$('.btn-group').getText();
    };

    return elem;
}

module.exports = TgRoyaltiesComponent;

