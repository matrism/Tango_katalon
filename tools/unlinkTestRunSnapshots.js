'use strict';

let fs = require('fs'),
    glob = require('glob'),

    unlinkSyncIgnoringErrors = path => {
        try {
            fs.unlinkSync(path);
        }
        catch(err) {
            console.error(`Can\`t unlink ${path}:`, err);
        }
    };

module.exports = () => {
    let reportPath = systemConfig.htmlReportPath,
        streamId = systemConfig.streamId;

    glob.sync(`${reportPath}/${streamId}_*.@(png|html)`).forEach(path => (
        unlinkSyncIgnoringErrors(path)
    ));
};
