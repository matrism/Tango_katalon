'use strict';

module.exports = function(file) {
    var result;
    try {
        result = require('../envs/' + systemConfig.env.name + '/' + file);
    } catch (e) {
        result = require('../envs/common/' + file);
    }
    return result;
};
