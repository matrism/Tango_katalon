'use strict';

var Zapi = function () {
    var BASE_URL = 'https://jira.wmg.com',
        ZAPI_URL = BASE_URL + '/rest/zapi/latest/',
        projectId,
        versionId = '-1',
        projectName = 'WC',
        fs = require('fs'),
        path = require('path'),
        tgRequest = require('../helpers/tgRequest');

    this.createTestCycle = function (name) {
        var obj = {
            name: name,
            environment: "qa",
            projectId: this.projectId || '14306',
            versionId: versionId
        };

        return this.post(ZAPI_URL + 'cycle', null, obj);
    };

    this.getTestStepsForIssue = function (issueId) {
        return this.get(ZAPI_URL + 'teststep/' + issueId);
    };

    this.createJiraIssue = function (name, jiraComponentName) {
        var createUrl = BASE_URL + '/rest/api/2/issue',
            obj = {
                'fields': {
                    'project': {
                        'id': this.projectId || '14306'
                    },
                    'summary': name,
                    'issuetype': {
                        'id': '10302'
                    },
                    'reporter': {
                        'name': 'Constantine.Crismaru'
                    },
                    'components': [
                        {'name': jiraComponentName}
                    ],
                    'labels': [
                        'auto_created'
                    ],
                    'description': 'Optional Description.'
                }
            };

        return this.post(createUrl, null, obj, 201);
    };

    this.updateJiraIssue = function (name) {
        var updateUrl = BASE_URL + '/rest/api/2/issue/' + name,
            obj = {
                'update': {
                    'assignee': [{'set':[{'name': 'works'}]}]
                }
            };

        console.log(updateUrl);

        return this.put(updateUrl, null, {"update": {"components": [{"add":{"name": "works"}}]}});
    };

    this.createJiraBug = function (issueId, feature, testStep, bugLabel) {
        var createUrl = BASE_URL + '/rest/api/2/issue',
            obj = {
                'fields': {
                    'project': {
                        'id': this.projectId || '14306'
                    },
                    'summary': 'Test Bug through Jira API - linked to  --- ' + feature.key,
                    'issuetype': {
                        'id': '1'
                    },
                    'reporter': {
                        'name': 'Constantine.Crismaru'
                    },
                    'labels': [
                        testStep.step.severity,
                        bugLabel
                    ],
                    /*                    'severity': {
                     'name': testStep.step.severity
                     },*/
                    'description': 'Optional Description.'
                }
            };

        return this.post(createUrl, null, obj, 201);
    };

    /*    this.getAllProjects = function () {
     console.log('---getAllProjects---');
     var getProjectUrl = BASE_URL + '/rest/api/2/project';
     return this.get(getProjectUrl);
     };*/

    this.createTestStepForIssue = function (issueId, testStep, orderId) {
        var testStepUrl = ZAPI_URL + 'teststep/' + issueId,
            testStepObject = {
                step: testStep.name,
                orderId: orderId,
                result: 'Successfully completes.'
            };

        return this.post(testStepUrl, null, testStepObject);
    };

    this.getIssueId = function (issueName) {
        return this.get(BASE_URL + '/rest/api/2/issue/' + issueName);
    };

    this.getTestCycles = function () {
        return this.get(ZAPI_URL + 'cycle?projectId=' + (this.projectId || '14306'));
    };

    this.getTestCases = function () {
        return this.get(BASE_URL + '/rest/api/2/search?jql=project=' + projectName + '%20and%20reporter=Constantine.Crismaru%20and%20issuetype%20%3D%2010302&startAt=0&maxResults=1000');
    };

    this.getTestBugs = function () {
        return this.get(BASE_URL + '/rest/api/2/search?jql=project=' + projectName + '%20and%20reporter=Constantine.Crismaru%20and%20issuetype%20%3D%201&startAt=0&maxResults=1000');
    };

    this.getTestStepResultsForExecution = function (jiraExecutionId) {
        return this.get(ZAPI_URL + 'stepResult?executionId=' + jiraExecutionId);
    };

    this.bulkUpdateExecutionDefects = function (createdBugs, jiraExecutionId) {
        var updateObject = {
            executions: [ jiraExecutionId ],
            defects: [],
            detailedResponse: false
        };

        createdBugs.forEach(function (createdBug) {
            updateObject.defects.push(createdBug.key)
        });

        return this.put(ZAPI_URL + 'execution/updateWithBulkDefects', null, updateObject, 200);
    };

    this.updateTestStepResult = function (jiraIssueId, jiraExecutionId, testStepObject, feature, linkedIssue) {
        var updateObject = {
            id: testStepObject.resultStep.id,
            issueId: jiraIssueId,
            executionId: jiraExecutionId,
            comment: feature.name,
            status: testStepObject.step.passed ? 1 : 2
        };

        if (linkedIssue) {
            updateObject.updateDefectList = true;
            updateObject.defectList = [ linkedIssue.key ];
        }

        return this.put(ZAPI_URL + 'stepResult/' + testStepObject.resultStep.id, null, updateObject);
    };

    this.updateTestExecutionStatus = function (passed, execId) {
        return this.put(ZAPI_URL + 'execution/' + execId + '/execute', null, { comment: 'Automated Execution.', status: passed ? 1 : 2});
    };

    this.executeTestToTestCycle = function (cycleId, issueId) {
        var obj = {
            cycleId: cycleId,
            issueId: issueId,
            projectId: this.projectId || '14306',
            versionId: versionId
        };

        return this.post(ZAPI_URL + 'execution/', null, obj);
    };

    this.updateTestExecution = function (executionId, status, comment) {
        var obj = {
            executionId: executionId,
            status: status,
            comment: comment
        };

        return this.put(ZAPI_URL + 'execution/' + executionId + '/execute', null, obj);
    };

    this.getAttachments = function (entityId) {
        var entityType = 'TESTSTEPRESULT';
        return this.get(ZAPI_URL + 'attachment/attachmentsByEntity?entityId=' + entityId + '&entityType=' + entityType);
    };

    this.addAttachment = function (entityId, file) {
        var entityType = 'TESTSTEPRESULT',
            formData = {
                file: {
                    value: fs.createReadStream(file),
                    options: {
                        filename: path.basename(file),
                        contentType: 'image/' + path.extname(file)
                    }
                }
            };

        return this.postFile(ZAPI_URL + 'attachment/?entityId=' + entityId + '&entityType=' + entityType, null, formData);
    };

    this.deleteAttachment = function (id) {
        return this.delete(ZAPI_URL + 'attachment/' + id);
    };

    this.deleteAttachmentsByStep = function (stepId) {
        var self = this,
            promise = this.getAttachments(stepId);

        promise.then(function(response) {
            var responseJson = JSON.parse(response);
            responseJson.data.forEach(function (file) {
                self.deleteAttachment(file.fileId);
            })
        });
        return promise;
    };

    this.updateAttachment = function (stepId, file) {
        var self = this;
        return this.deleteAttachmentsByStep(stepId).then(function() {
            return self.addAttachment(stepId, file);
        });
    };

    this.get = function (url, qs) {
        var deferred = protractor.promise.defer();

        tgRequest.get(url, qs, function (error, response, body) {
            if(response) {
                var status = response.statusCode ? response.statusCode : null;

                if (error || status !== 200) {
                    deferred.reject(status, body);
                } else {
                    deferred.fulfill(body);
                }
            }
        });

        return deferred.promise;
    };

    this.postFile = function (url, qs, formData, successfulStatusCode) {
        var deferred = protractor.promise.defer();

        tgRequest.postFile(url, qs, formData, function (error, response, body) {
            if(response) {
                var status = response.statusCode,
                    success = successfulStatusCode || 200;

                if (error || status !== success) {
                    deferred.reject(status, body);
                } else {
                    deferred.fulfill(body);
                }
            }
        });

        return deferred.promise;
    };

    this.post = function (url, qs, obj, successfulStatusCode) {
        var deferred = protractor.promise.defer();

        tgRequest.post(url, qs, obj, function (error, response, body) {
            if(response) {
                var status = response.statusCode,
                    success = successfulStatusCode || 200;

                if (error || status !== success) {
                    console.log(response);
                    console.log(body);
                    deferred.reject(status, body);
                } else {
                    deferred.fulfill(body);
                }
            }
        });

        return deferred.promise;
    };

    this.put = function (url, qs, obj, successfulStatusCode) {
        var deferred = protractor.promise.defer();

        tgRequest.put(url, qs, obj, function (error, response, body) {
            if(response) {
                var status = response.statusCode,
                    success = successfulStatusCode || 200;

                if (error || status !== success) {
                    deferred.reject(status, body);
                } else {
                    deferred.fulfill(body);
                }
            }
        });

        return deferred.promise;
    };

    this.delete = function (url, successfulStatusCode) {
        var deferred = protractor.promise.defer();

        tgRequest.delete(url, null, function (error, response) {
            var status = response.statusCode,
                success = successfulStatusCode || 200;

            if (error || status !== success) {
                deferred.reject(status);
            } else {
                deferred.fulfill(status);
            }
        });

        return deferred.promise;
    };

    this.setProjectId = function (projectId) {
        this.projectId = projectId;
    };
};

module.exports = new Zapi();
