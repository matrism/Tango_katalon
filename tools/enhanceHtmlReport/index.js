'use strict';

var fs = require('fs'),

    path = require('path'),
    resolvePath = path.resolve,

    time,
    moment = require('moment'),

    hbs = require('handlebars'),

    template = hbs.compile(fs.readFileSync(
        resolvePath(__dirname, 'enhancements.hbs'), {
            encoding: 'utf8'
        }
    ));

try {
    time = require('time');
}
catch(error) {
    console.log('Could not load optional dependency (time).');
}

module.exports = function(path, data) {
    var startMoment = moment(data.startDate, 'YYYY-MM-DD HH-mm-ss'),
        endMoment = moment();

    data.isoStartDate = startMoment.toISOString();

    data.endDate = endMoment.format('YYYY-MM-DD HH-mm-ss');
    data.isoEndDate = endMoment.toISOString();

    if(time) {
        data.timezone = new time.Date().getTimezoneAbbr();
    }

    data.duration = moment.duration(endMoment.diff(startMoment)).humanize();

    fs.appendFileSync(path, template(data));
};
