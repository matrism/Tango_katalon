'use strict';

var changeCase = require('change-case');

function recursivelyAccess(object, propertyNames, options) {
    return propertyNames.reduce(function(object, propertyName) {
        var property = object[propertyName];

        if(!property && options && options.create) {
            property = object[propertyName] = {};
        }

        return property;
    }, object);
}

module.exports = function(options) {
    var propertyNames = options.name.map(changeCase.camelCase),
        firstPropertyNames = propertyNames.slice(0, -1),
        lastPropertyName = _.last(propertyNames),

        description = options.name.join(' > '),

        where = recursivelyAccess(
            options.where, firstPropertyNames, { create: true }
        ),

        pageFnContext = recursivelyAccess(options.page, firstPropertyNames),

        pageFn = pageFnContext[lastPropertyName];

    where[lastPropertyName] = function() {
        var stepArguments = [].slice.call(arguments),
            descriptionWithArguments = description;

        if(stepArguments.length !== 0) {
            descriptionWithArguments += ' (' + stepArguments.join(', ') + ')';
        }

        it(descriptionWithArguments, function() {
            if(options.before) {
                options.before.apply(context, stepArguments);
            }

            if(options.customFn) {
                options.customFn.apply(
                    context, [pageFn, pageFnContext].join(stepArguments)
                );
            }
            else {
                pageFn.apply(pageFnContext, stepArguments);
            }

            if(options.after) {
                options.after.apply(context, stepArguments);
            }
        });
    };
};
