'use strict';

function TgDropdown (locator) {
    var dropdown = element(locator);

    dropdown.click = function () {
        return dropdown.$('.tg-dropdown-button').click();
    };

    dropdown.results = function (text) {
        var results = dropdown.$$('.dropdown-menu a');

        if (text) {
            results = results.filter(function(elem, index){
                return elem.getText().then(function(elemText){
                    return elemText.indexOf(text) > -1;
                });
            });
        }

        return results;
    };

    return dropdown;
}

module.exports = TgDropdown;

