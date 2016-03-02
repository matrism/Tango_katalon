'use strict';

module.exports = function(object, methodSpecifier) {
    var name,
        args;

    switch(typeof methodSpecifier) {
        case 'string':
            methodSpecifier = (function() {
                var methodSpecifierObject = {};

                methodSpecifierObject[methodSpecifier] = true;

                return methodSpecifierObject;
            })();
            break;

        case 'number':
            methodSpecifier = { index: methodSpecifier };
            break;
    }

    name = Object.keys(methodSpecifier)[0];
    args = _.values(methodSpecifier)[0];

    if(!Array.isArray(args)) {
        args = [args];
    }

    return object[name].apply(object, args);
};
