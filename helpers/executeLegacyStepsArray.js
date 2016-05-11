'use strict';

module.exports = function (steps) {
    steps.forEach(function (step) {
        step[0].apply(null, step[1] || []);
    });
};
