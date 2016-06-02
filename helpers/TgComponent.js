'use strict';

function TgComponent (locator, isAppendedToBody) {
    var elem = locator;

    if (!locator.element) {
        elem = element(locator);
    };

    return elem;
}

module.exports = TgComponent;

