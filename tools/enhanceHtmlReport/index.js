'use strict';

var fs = require('fs'),

    path = require('path'),
    resolvePath = path.resolve,

    hbs = require('handlebars'),

    template = hbs.compile(fs.readFileSync(
        resolvePath(__dirname, 'enhancements.hbs'), {
            encoding: 'utf8'
        }
    ));

module.exports = function(path) {
    fs.appendFileSync(path, template());
};
