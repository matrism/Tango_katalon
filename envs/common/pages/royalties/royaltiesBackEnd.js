'use strict';

let client = require('http-api-client'),
    _ = require('lodash'),
    queryString = require('query-string');

pages.royaltiesBackEnd = exports;

function request(params) {
    console.info(`Requesting ${params.url}`);
    return browser.controlFlow().execute(() => {
        return client.request(params).then((response) => {
            var obj = response.getJSON();
            console.log(`Request response:`, obj);
            return obj;
        });
    });
}

function requestUntilValue(params, objKey, fn) {
    let deferred = promise.defer();

    if (_.isNil(objKey)) {
        return request(params);
    }

    browser.wait(function(){
        return request(params).then(val => {
                if (_.has(val, objKey)) {
                    let result = val;

                    if (fn) {
                        result = fn(val, objKey);
                    }

                    if (result) {
                        deferred.fulfill(result);
                        return true;
                    }
                }
            });
    }, 30000);

    return deferred.promise;
}

exports.getWorkSummary = (ptc, rp, twc) => {
    let url = systemConfig.env.royalties_url + '/api/v1/royaltyledger/work_summary';

    url += `/processing_territory_code/${ptc}/royalty_period/${rp}/tango_work_code/${twc}/view_work_summaries`;

    return requestUntilValue(
        {
            url: url,
            method: 'GET'
        },
        'work_summary_distributions',
        (val, objKey) => {
            let obj = val[objKey],
                keys = _.keys(obj);

            if (keys.length) {
                let childObj = obj[keys[0]],
                    val = String(childObj.non_domestic_values.gross_received);
                return !_.isNil(val) && val !== '0';
            }
        }
    );
};

exports.validateWorkSummary = (ptc, rp, twc) => {
    exports.getWorkSummary(ptc, rp, twc).then((data) => {
        expect(data.work_code).toEqual(twc);
        expect(String(data.royalty_processing_territory)).toEqual(ptc);
        expect(data.royalty_period).toEqual(rp);
    });
};

exports.getDealSummaries = (ptc, rp, dealId) => {
    ///royaltyledger/deal_summary/processing_territory_code/{ptc}/royalty_period/{rp}/deal_id/{di}/view_deal_summaries 
    let url = systemConfig.env.royalties_url + '/api/v1/royaltyledger/deal_summary';

    url += `/processing_territory_code/${ptc}/royalty_period/${rp}/deal_id/${dealId}/view_deal_summaries `;

    return request({
        url: url,
        method: 'GET'
    });
};

exports.validateDealSummaries = (ptc, rp, dealId, incomeType) => {
    exports.getDealSummaries(ptc, rp, dealId).then(data => {
        console.log(data.deal_summary_distributions);
        expect(_.keys(data.deal_summary_distributions)[0]).toEqual(incomeType);
    });
};

exports.getIncomeApportion = (params) => {
    let url = `http://tanrcalcsrv.tango.qa.wmg.com:80/` + `api/v1/rcalc/income_apportion`;

    params = _.mapValues(params, callResultOrValue);

    url += `?${queryString.stringify(params)}`;

//work_id=WW%20015069382%2000&income_provider_id=7e1fbc34-2f95-4112-a8c8-8b686ca8e742&territory_code=616&income_type=MECH&distribution_start_date=2015-07-01&distribution_end_date=2015-12-31&processing_start_date=2015-07-01&processing_end_date=2015-12-31

    return request({
        url: url
    });
};

exports.getPayeeAccountSummary = (ptc, rp, payeeId) => {
    let url = `http://tandusrv.tango.qa.wmg.com:80/` + `api/v1/payee_accounts/payee_id/${payeeId}`;

    return request({
        url: url
    }).then((payee) => {
        let url = `http://tanrflowsrv.tango.qa.wmg.com:80/` + `api/v1/payee_account_summary/`;
        url += `royalty_territory/${ptc}/royalty_period/${rp}/payee_account_id/${payee.id}/view_payee_account_summary`

        return request({
            url: url
        });
    });
};


