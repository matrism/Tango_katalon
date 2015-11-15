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
    var startMoment = moment(data.startDate, 'YYYY-MM-DD HH-mm-ss'),
        endMoment = moment();

    data.isoStartDate = startMoment.toISOString();

    data.endDate = endMoment.format('YYYY-MM-DD HH-mm-ss');
    data.isoEndDate = endMoment.toISOString();

    data.duration = moment.duration(endMoment.diff(startMoment)).humanize();

    fs.appendFileSync(path, template(data));
};
