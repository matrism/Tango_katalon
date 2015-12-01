'use strict';

exports.specDone = function(spec) {
    if(spec.status === 'failed') {
        console.log('Orphaning browser...');
        process.exit(-1);
    }
};
