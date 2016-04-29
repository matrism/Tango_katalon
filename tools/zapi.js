'use strict';

var Zapi = function () {
    var fs = require('fs'),
        Q = require('q'),
        path = require('path'),
        ZapiApi = require('../tools/zapiApi'),
        cycleId,
        components = {
            'works': 'Works',
            'deals': 'Deals',
            'payees': 'Payees',
            'dataUtilities': 'Data Utilities',
            'royaltyProcessing': 'Royalty Processing',
            'royaltyRates': 'Royalty Rates',
            'copyrightRegistration': 'Copyright Registration',
            'financialInterfaces': 'Financial Interfaces',
            'incomeManagement': 'Income Management'
        };

    function log () {
        console.log('[Zapi]', ...arguments);
    }

    this.setTestCycle = (testCycleName) => {
        var deferred = Q.defer();
        if (!testCycleName) {
            deferred.resolve({cycleId: null});
        } else {
            ZapiApi.getTestCycles().then((response) => {
                let cycleIds = response['-1'][0];

                for (var id in cycleIds) {
                    if (cycleIds[id].name === testCycleName) {
                        deferred.resolve({cycleId: id});
                        //log('Using test cycle: ' + cycleId + ' - ' + testCycleName);
                        break;
                    }
                }

                if (!cycleId) {
                    ZapiApi.createTestCycle(testCycleName).then((result) => {
                        deferred.resolve({cycleId: result.id});
                        //log(result.responseMessage + ' - ' + testCycleName );
                    });
                }
            });
        }
        return deferred.promise;
    };

    this.saveIssue = (featureName, tags) => {
        log(featureName, tags);
        return;
        ZapiApi.createIssue();
    };

};

module.exports = new Zapi();
