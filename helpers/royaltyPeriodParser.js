'use strict';
let leftPad = require('left-pad');

/*
 * Takes a period in the format 'July 2015 - December 2015' and
 * returns it as '201507201512'.
 */

function parseRoyaltyPeriod (period) {
    let arr = period.split(' - '),
        start = arr[0],
        end = arr[1];

    function getMonthNumberWithYear(dateStr) {
        let dateArr = dateStr.split(' '),
            d = new Date(Date.parse(`${dateArr[0]} 1, ${dateArr[1]}`)),
            month = leftPad(d.getMonth() + 1, 2, 0),
            year = d.getFullYear();

        return [year, month].join('');
    }

    return arr.map(getMonthNumberWithYear).join('');
}

module.exports = parseRoyaltyPeriod;
