'use strict';

var fs = require('fs'),

    path = require('path'),
    resolvePath = path.resolve,

    moment = require('moment'),

    hbs = require('handlebars'),

    template = hbs.compile(fs.readFileSync(
        resolvePath(__dirname, 'enhancements.hbs'), {
            encoding: 'utf8'
        }
    ));

module.exports = function(path, data) {
    data.isoStartDate = moment(
        data.startDate, "YYYY-MM-DD HH-mm-ss"
    ).toISOString();

    fs.appendFileSync(path, template(data));
};
