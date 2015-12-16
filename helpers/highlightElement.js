'use strict';

exports = module.exports = function(el, color) {
    if(!(el instanceof protractor.WebElement)) {
        el = el.getWebElement();
    }

    return browser.executeScript(function(el, color) {
        var $el = $(el);

        if($el.data('tatHighlightRestoreData')) {
            return;
        }

        $el.data('tatHighlightRestoreData', el.style.outline);
        el.style.outline = '3px solid ' + (color || 'purple');
    }, el, color);
};

exports.restore = function(el) {
    if(!(el instanceof protractor.WebElement)) {
        el = el.getWebElement();
    }

    return browser.executeScript(function(el) {
        var $el = $(el),
            restoreData = $el.data('tatHighlightRestoreData');

        if(restoreData === undefined) {
            return;
        }

        el.style.outline = restoreData;
        $el.removeData('tatHighlightRestoreData');
    }, el);
};
