'use strict';

module.exports = function(file) {
    var result;
    try {
        result = require('../envs/' + systemConfig.env.name + '/' + file);
    } catch (e) {
        if(e.code !== 'MODULE_NOT_FOUND') {
            throw e;
        }

        result = require('../envs/common/' + file);
    }
    return result;
};
