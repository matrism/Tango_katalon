'use strict';

module.exports = function(fnOrValue, context) {
    if(typeof fnOrValue === 'function') {
        fnOrValue = fnOrValue.apply(context, _.toArray(arguments).slice(3));
    }

    return fnOrValue;
};
