'use strict';

module.exports = function(object, propertyNames, options) {
    return propertyNames.reduce(function(object, propertyName) {
        var property = object[propertyName];

        if(!property && options && options.create) {
            property = object[propertyName] = {};
        }

        return property;
    }, object);
};
