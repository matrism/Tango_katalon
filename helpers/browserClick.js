'use strict';

exports = module.exports = function(el) {
    if(!(el instanceof protractor.WebElement)) {
        el = el.getWebElement();
    }

    return browser.executeScript(function(elem){
        var $elem = $(elem);

        $elem.click();
    }, el);
};
