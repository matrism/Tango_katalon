'use strict';
let originalTimeout;

module.exports = setTestTimeout;

function setTestTimeout(time) {
    beforeEach(function(){
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = time;
    });

    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
}
