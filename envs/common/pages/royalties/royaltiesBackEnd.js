'use strict';

let client = require('http-api-client');

pages.royaltiesBackEnd = exports;

exports.getWorkSummary = (ptc, rp, twc) => {
    let url = systemConfig.env.royalties_url + '/api/v1/royaltyledger/work_summary',
        params = {
            ptc: ptc,
            rp: rp,
            twc: twc
        };

    url += `/processing_territory_code/${params.ptc}/royalty_period/${params.rp}/tango_work_code/${params.twc}/view_work_summaries`;

    return client.request({
        url: url,
        method: 'GET'
    }).then((response) => {
        return browser.controlFlow().execute(() => {
            return response.getJSON();
        });
    });
};

exports.validateWorkSummary = (ptc, rp, twc) => {
    exports.getWorkSummary(ptc, rp, twc).then((data) => {
        console.log(data);
        expect(data.work_code).toEqual(twc);
        expect(String(data.royalty_processing_territory)).toEqual(ptc);
        expect(data.royalty_period).toEqual(rp);
    });

};
