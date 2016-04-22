'use strict';

module.exports = (stm, cb) => {
    let lnRe = /^(.*)\n/,
        lnReRes,

        outBuf = '';

    stm.on('data', (data) => {
        outBuf += data;

        while(lnReRes = lnRe.exec(outBuf)) {
            outBuf = outBuf.slice(lnReRes[0].length);
            cb(lnReRes[1]);
        }
    });

    stm.on('end', () => {
        if(outBuf.length === 0) {
            return;
        }

        cb(outBuf);
    });
};
