'use strict';

module.exports = (msWhen) => {
    return ((Date.now() - msWhen) / 1000).toFixed(3) + 's';
};
