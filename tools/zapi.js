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
        var deferred = Q.defer(),
            cycleId;

        testCycleName = testCycleName.replace('{1}', moment().format('YYYY-MM-DD'));

        if (!testCycleName) {
            deferred.resolve({cycleId: null});
        } else {
            log('Getting test cycles...');
            ZapiApi.getTestCycles().then((response) => {
                let cycleIds = response['-1'][0];

                for (var id in cycleIds) {
                    if (cycleIds[id].name === testCycleName) {
                        deferred.resolve({cycleId: id, cycleName: testCycleName});
                        cycleId = id;
                        log('Cycle already exists: ' + cycleId + ' - ' + testCycleName);
                        break;
                    }
                }

                if (!cycleId) {
                    log('Creating Cycle...');
                    ZapiApi.createTestCycle(testCycleName).then((result) => {
                        deferred.resolve({cycleId: result.id, cycleName: testCycleName});
                        log(result.responseMessage + ' - ' + testCycleName );
                    });
                }
            });
        }
        return deferred.promise;
    };


    this.issue = (function () {
        var issue = {};
        issue.id = '';
        issue.steps = [];
        issue.getStepsDeferred = Q.defer();
        issue.createStepsPromises = [];

        issue.save = (featureId, featureName, tags) => {
            var deferred = Q.defer(),
                componentName;

            tags.forEach((tag) => {
                if (components[tag]) {
                    componentName = components[tag];
                }
            });

            log('Getting issue by label:', featureId);
            ZapiApi.getIssueByLabel(featureId).then((response) => {

                if (response.issues && response.issues[0]) {
                    issue.id = response.issues[0].id;
                    log('Issue already exists:', issue.id);
                    log('Updating issue...', issue.id);
                    issue.getSteps();
                    ZapiApi.updateIssue(issue.id, featureName, tags).then((result) => {
                        log('Issue updated:', issue.id);
                        deferred.resolve({id: issue.id});
                    });
                }

                if (!issue.id) {
                    log('Creating Issue...');
                    ZapiApi.createIssue(featureId, featureName, componentName).then((result) => {
                        issue.getStepsDeferred.resolve();
                        if (result.id) {
                            deferred.resolve({id: result.id});
                            log('Issue created: ', featureId, featureName, tags, result.id, result.key);
                        }
                    });
                }
            });
            return deferred.promise;
        };

        issue.getSteps = () => {
            log('Getting issue steps...')
            return ZapiApi.getIssueSteps(issue.id).then((response) => {
                issue.getStepsDeferred.resolve();
                log('Issue steps found.');
                issue.steps = response;
            });
        };

        // TODO: update step description, add new ones and remove non existent ones
        issue.saveStep = (description, orderId) => {
            var deferred = Q.defer();
            issue.getStepsDeferred.promise.then(() => {
                if (issue.steps.length) {
                    log('Issue steps already exists.');
                } else {
                    log('Adding issue step...', issue.id, description, orderId);
                    let promise = ZapiApi.createIssueStep(issue.id, description, orderId).then((response) => {
                        log('Issue step added:', response.id);
                        deferred.resolve();
                    });
                    issue.createStepsPromises.push(promise);
                }
            });
            return deferred;
        };

        issue.waitForCreateSteps = () => {
            log('Wait for Create Steps');
            browser.controlFlow().execute(() => { 
                return Q.all(issue.createStepsPromises);
            });
        };

        issue.execute = (cycleId) => {
            log('Executing issue...');
            return ZapiApi.executeTestToTestCycle(cycleId, issue.id).then((response) => {
                log('Execution response:', response);
            });
        };

        return issue;
    })();

};

module.exports = new Zapi();
