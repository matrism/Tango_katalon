'use strict';
let moment = require('moment');
require('moment-range');

const INPUT_FORMAT = 'MMMM YYYY';
const DATE_FORMAT = 'YYYYMM';

/*
 * Takes a period in the format 'July 2015 - December 2015' and
 * returns it as '201507201512'.
 */

function parseRoyaltyPeriod (periodStr) {
    let arr = periodStr.split(' - '),
        period = moment.range(moment(arr[0], INPUT_FORMAT), moment(arr[1], INPUT_FORMAT)),
        start = period.start,
        end = period.end;

    return `${start.format(DATE_FORMAT)}${end.format(DATE_FORMAT)}`;
}

parseRoyaltyPeriod.toRange = function (periodStr) {
    let range = parseRoyaltyPeriod.unparse(parseRoyaltyPeriod(periodStr));

    return range;
};

parseRoyaltyPeriod.unparse = function (periodStr) {
    let start = moment(periodStr.substr(0,6), DATE_FORMAT),
        end = moment(periodStr.substr(6,6), DATE_FORMAT);

    return moment.range(start, end);
};

module.exports = parseRoyaltyPeriod;
