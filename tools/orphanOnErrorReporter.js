'use strict';

exports.specDone = function(spec) {
    if(spec.status === 'failed') {
        pages.base.orphanBrowser();
    }
};
