'use strict';

module.exports = function (ctx, name) {
    let fn = ctx[name];

    if(!fn) {
        return;
    }

    let args = [...arguments].slice(2);

    return fn.apply(ctx, args);
};
