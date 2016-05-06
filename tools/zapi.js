'use strict';

var zapi = function () {
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
        },
        self = this;

    this.cycleId = null;

    function log () {
        console.log('[Zapi]', ...arguments);
    }

    this.setTestCycle = (testCycleName) => {
        var deferred = Q.defer(),
            cycleId,
            failCallback = () => {
                deferred.resolve({cycleId: null});
            };

        testCycleName = testCycleName.replace('{1}', moment().format('YYYY-MM-DD'));

        if (!testCycleName) {
            failCallback();
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
                    }, failCallback);
                }
            }, failCallback);
        }
        return deferred.promise;
    };

    this.setCycleId = (cycleId) => {
        this.cycleId = cycleId
    };

    this.issue = (() => {
        var issue = {
            id: null,
            steps: [],
            stepsFound: false,
            saveStepPromises: [],
            saveDeferred: Q.defer(),
            getStepsDeferred: Q.defer(),
            postExecutionDeferred: Q.defer()
        };

        issue.save = (featureId, featureName, tags) => {
            var componentName;

            tags.forEach((tag) => {
                if (components[tag]) {
                    componentName = components[tag];
                }
            });
            componentName = componentName || 'Works';

            log('Getting issue by label:', featureId);
            ZapiApi.getIssueByLabel(featureId).then((response) => {

                if (response.issues && response.issues[0]) {
                    issue.id = response.issues[0].id;
                    log('Issue already exists:', issue.id);
                    log('Updating issue...', issue.id);
                    ZapiApi.updateIssue(issue.id, featureName, tags).then((result) => {
                        log('Issue updated:', issue.id);
                        issue.getSteps();
                        issue.saveDeferred.resolve({id: issue.id});
                    });
                }

                if (!issue.id) {
                    log('Creating Issue...');
                    ZapiApi.createIssue(featureId, featureName, componentName).then((result) => {
                        if (result.id) {
                            issue.id = result.id;
                            log('Issue created: ', featureId, featureName, tags, issue.id, result.key);
                            issue.saveDeferred.resolve({id: issue.id});
                        }
                    });
                }
            });
            return issue.saveDeferred.promise;
        };

        issue.getSteps = () => {
            log('Getting issue steps...')
            return ZapiApi.getIssueSteps(issue.id).then((response) => {
                log('Get issue steps done.');
                issue.steps = Array.isArray(response) ? response : [];
                issue.stepsFound = issue.steps.length;
                issue.getStepsDeferred.resolve();
            });
        };

        // TODO: update step description, add new ones and remove non existent ones
        issue.saveStep = (description, orderId) => {
            var promise = issue.getStepsDeferred.promise.then(() => {
                if (issue.stepsFound) {
                    log('Issue steps already exists.');
                } else {
                    log('Adding issue step...', issue.id, description, orderId);
                    return ZapiApi.createIssueStep(issue.id, description, orderId).then((response) => {
                        log('Issue step added:', response.id);
                        issue.steps.push(response);
                    });
                }
            });
        };

        issue.execute = () => {
            return issue.saveDeferred.promise.then(() => {
                log('Executing issue...', this.cycleId, issue.id);
                return ZapiApi.executeTestToTestCycle(this.cycleId, issue.id).then((response) => {
                    for (var key in response) {
                        self.execution.id = key;
                    }
                    log('Execution response:', self.execution.id);
                    log('Getting execution...', self.execution.id);
                    return ZapiApi.getExecution(self.execution.id).then(() => {
                        log('Get execution done.')
                        self.execution.getSteps();
                    });
                });
            });
        };

        issue.postExecution = () => {
            Q.all(issue.saveStepPromises)
                .then(issue.execute())
                .then(issue.postExecutionDeferred.resolve());
        };

        return issue;
    })();

    this.execution = (() => {
        var execution = {
            id: null,
            steps: [],
            updateStepPromises: [],
            getStepsDeferred: Q.defer(),
            passing: true
        };

        execution.getSteps = () => {
            log('Getting execution steps...');
            return ZapiApi.getExecutionSteps(execution.id).then((response) => {
                execution.getStepsDeferred.resolve();
                execution.steps = Array.isArray(response) ? response.reverse() : [];
                log('Get execution steps done');
            });
        };

        execution.updateStepResult = (orderId, status, comment) => {
            if (status != 'passed') {
                execution.passing = false;
            }

            var promise = execution.getStepsDeferred.promise.then(() => {
                var issueStep = self.issue.steps.find((step) => {
                        return step.orderId == orderId;
                    }),
                    execStep = execution.steps.find((step) => {
                        return step.stepId == issueStep.id; 
                    });

                log('Updating execution step result...', execStep.id, status, comment);
                return ZapiApi.updateExecutionStepResult(this.issue.id, execution.id, execStep.id, status, comment).then((response) => {
                    log('Execution step updated:', response.id);
                });
            });
            execution.updateStepPromises.push(promise);
        };

        execution.updateStatus = () => {
            return Q.all(execution.updateStepPromises).then(() => {
                log('Updating execution final result...', execution.id, execution.passing);
                return ZapiApi.clearExecutionStatus(execution.id).then(() => {
                    return ZapiApi.updateExecutionStatus(execution.id, execution.passing).then((response) => {
                        log('Execution final result updated.', response.id);
                    });
                });
            });
        };

        return execution;
    })();
};

module.exports = new zapi();
