'use strict';

module.exports = function (binding) {
    var elem = element(by.binding(binding));

    return function (varName) {
        browser.wait(EC.visibilityOf(elem));

        elem.getText().then(function (value) {
            console.log(`Setting ${varName} to ${value}`);
            hash.testVariables[varName] = value;
        });
    };

};
