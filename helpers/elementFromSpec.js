'use strict';

module.exports = function (spec, makers, keysForNonObjects) {
    var specType = typeOf(spec);

    keysForNonObjects = keysForNonObjects || {};

    keysForNonObjects.Number = keysForNonObjects.Number || 'index';

    if(specType !== 'Object') {
        spec = (function() {
            var fs = {},

                keyForType = keysForNonObjects[specType];

            if(!keyForType) {
                throw new Error('Invalid find specification type');
            }

            fs[keyForType] = spec;

            return fs;
        })();
    }

    specType = Object.keys(spec)[0];

    return makers[specType](spec);
};
