'use strict';

module.exports = function (id) {
    return require(__dirname + '/../custom-deps/' + id);
};
