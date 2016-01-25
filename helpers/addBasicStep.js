'use strict';

var camelCase = require('change-case').camelCase;

module.exports = function (target, dest, descs) {
    arrayWrap(descs).forEach(function (desc) {
        var name = camelCase(desc);

        addStep(target, desc, function () {
            callResultOrValue(dest)[name].apply(dest, arguments);
        });
    });
};
