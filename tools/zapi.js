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
    this.debug = false;
    this.processStepPromises = [];

    function log () {
        if (self.debug) {
            console.log('[Zapi]', ...arguments);
        }
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
        this.cycleId = cycleId;
    };

    this.setDebug = (debug) => {
        this.debug = debug;
    };

    this.issue = (() => {
        var issue = {
            id: null,
            steps: [],
            stepsFound: false,
            featureName: '',
            saveStepPromises: [],
            saveDeferred: Q.defer(),
            getStepsDeferred: Q.defer(),
            postExecutionDeferred: Q.defer()
        };

        issue.save = (featureId, featureName, tags) => {
            var componentName;
            issue.featureName = featureName;

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
                            issue.getStepsDeferred.resolve();
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
                    log('Getting execution...', self.execution.id, issue.id);
                    return ZapiApi.getExecution(self.execution.id, issue.id).then(() => {
                        log('Get execution done.')
                        return self.execution.getSteps();
                    });
                });
            });
        };

        issue.postExecution = () => {
            Q.all(issue.saveStepPromises)
                .then(() => {
                    return issue.getSteps();
                })
                .then(() => {
                    return issue.execute();
                })
                .then(() => {
                    return issue.postExecutionDeferred.resolve();
                });
        };

        return issue;
    })();

    this.execution = (() => {
        var execution = {
            id: null,
            steps: [],
            getStepsDeferred: Q.defer(),
            passing: true
        };

        execution.getSteps = () => {
            log('Getting execution steps...');
            return ZapiApi.getExecutionSteps(execution.id).then((response) => {
                execution.steps = Array.isArray(response) ? response : [];
                execution.getStepsDeferred.resolve();
                log('Get execution steps done');
            });
        };

        execution.updateStepResult = (orderId, status, comment, bugKey) => {
            var promise;

            if (status != 'passed') {
                execution.passing = false;
            }

            var fnUpdateStepResult = () => {
                var issueStep = self.issue.steps.find((step) => {
                        return step.orderId == orderId;
                    }),
                    execStep = execution.steps.find((step) => {
                        return step.stepId == issueStep.id; 
                    });

                log('Updating execution step result...', execStep.id, status, comment, bugKey || '');
                return ZapiApi.updateExecutionStepResult(
                        this.issue.id, execution.id, execStep.id, status, comment, bugKey
                       ).then((response) => {
                    log('Execution step updated:', response.id);
                    return response.id;
                });
            };

            if (self.issue.stepsFound) {
                promise = execution.getStepsDeferred.promise.then(() => {
                    return fnUpdateStepResult();
                });
            } else {
                promise = self.issue.postExecutionDeferred.promise.then(() => {
                    return fnUpdateStepResult();
                });
            }

            return promise;
        };

        execution.updateStatus = () => {
            return Q.all(self.processStepPromises).then(() => {
                    log('Updating execution final result...', execution.id, execution.passing);
                    return ZapiApi.clearExecutionStatus(execution.id);
                }).then(() => {
                    return ZapiApi.updateExecutionStatus(execution.id, execution.passing)
                }).then((response) => {
                    log('Execution final result updated:', response.id);
                    if (self.bugs.bugsCreated.length) {
                        log('Linking defects to execution.', execution.id, self.bugs.bugsCreated);
                        return ZapiApi.bulkUpdateExecutionDefects(
                                execution.id, self.bugs.bugsCreated
                            ).then((result) => {
                            log('Defects linked to execution.');
                        });
                    }
                });
        };

        return execution;
    })();


    this.bugs = (() => {
        var bugs = {
            stepFailed: false,
            bugsCreated: []
        };

        bugs.save = (stepName, failMessage) => {
            var summaryCreate = bugs.getSummary(self.issue.featureName, stepName),
                summaryFind = self.issue.featureName + ' ' + stepName,
                deferred = Q.defer();

            bugs.stepFailed = true;
            log('Getting bug... ', summaryFind);
            ZapiApi.getBug(summaryFind).then((response) => {
                log('Bugs found:', response.total);
                if (response.issues && response.issues.length) {
                    log('Bug already exists:', response.issues[0].key);
                    bugs.bugsCreated.push(response.issues[0].key);
                    deferred.resolve(response.issues[0].key);
                } else {
                    log('Creating bug...', summaryCreate, failMessage);
                    return ZapiApi.createBug(summaryCreate, failMessage).then((result) => {
                        log('Bug created:', result.id, result.key);
                        bugs.bugsCreated.push(result.key);
                        deferred.resolve(result.key);
                    });
                }
            });

            return deferred.promise;
        };

        bugs.getSummary = (featureName, stepName) => {
            return 'Added by Zapi - Feature: ' + featureName + ' -- Step:  ' + stepName;
        };

        return bugs;
    })();

    this.processStepResult = (stepName, orderId, status, failMessage) => {
        var saveBugDeferred = Q.defer(),
            promise,
            createBugAndAttachment;

        if (stepName.indexOf('[Scenario]') > -1) {
            self.bugs.stepFailed = false;
        }

        createBugAndAttachment = (failMessage && ! self.bugs.stepFailed);

        if (createBugAndAttachment) {
            self.bugs.save(stepName, failMessage).then((response) => {
                saveBugDeferred.resolve(response);
            });
        } else {
            saveBugDeferred.resolve();
        }

        promise = saveBugDeferred.promise.then((response) => {
            return self.execution.updateStepResult(orderId, status, failMessage, response)
                .then((stepExecutionId) => {
                let fName = systemConfig.streamId + '_' + orderId + '.png',
                    fPath = systemConfig.htmlReportPath + '/' + fName;

                if (createBugAndAttachment) {
                    log('Updating attachment...', stepExecutionId, '../'+fPath);
                    return ZapiApi.updateAttachment(stepExecutionId, fPath).then((result) => {
                        log('Attachment updated', result);
                    });
                }
            });
        });

        self.processStepPromises.push(promise);
    };
};

module.exports = new zapi();
