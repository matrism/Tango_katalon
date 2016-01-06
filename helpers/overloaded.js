'use strict';

module.exports = function(args, specs) {
    var spec,
        ret = {};

    for(var key in specs) {
        if(args.length === parseInt(key)) {
            spec = specs[key];
            break;
        }
    }

    if(!spec) {
        if(specs.default) {
            return specs.default.apply(specs, args);
        }
        else {
            throw new TypeError('Bad function arguments');
        }
    }

    for(var i in spec) {
        ret[spec[i]] = args[i];
    }

    return ret;
};
