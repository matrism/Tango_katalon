'use strict';

var camelCase = require('change-case').camelCase;

module.exports = function (target, desc, fn) {
    var name = camelCase(desc),

        group = target[name] = {};

    if(target.__groupDesc) {
        desc = target.__groupDesc + ' > ' + desc;
    }

    group.__groupDesc = desc;

    fn(group);
};
