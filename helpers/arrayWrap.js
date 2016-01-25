'use strict';

module.exports = function(val) {
    if(Array.isArray(val)) {
        return val;
    }

    if(val === null || val === undefined) {
        return [];
    }

    return [val];
};
