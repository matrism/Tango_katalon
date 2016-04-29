'use strict';

let fs = require('fs'),
    path = require('path'),
    Q = require('q'),
    tgRequest = require('../helpers/tgRequest');

var ZapiApi = function () {
    var BASE_URL = 'https://jira.wmg.com',
        ZAPI_URL = BASE_URL + '/rest/zapi/latest/',
        projectId = '14306',
        versionId = '-1',
        projectName = 'WC';

    this.createTestCycle = (name) => {
        var obj = {
            name: name,
            environment: "qa",
            projectId: projectId,
            versionId: versionId
        };

        return this.post(ZAPI_URL + 'cycle', null, obj);
    };

    this.getTestStepsForIssue = (issueId) => {
        return this.get(ZAPI_URL + 'teststep/' + issueId);
    };

    // TODO remove reporter or add another
    this.createIssue = (name, componentName) => {
        var createUrl = BASE_URL + '/rest/api/2/issue',
            obj = {
                'fields': {
                    'project': {
                        'id': projectId
                    },
                    'summary': name,
                    'issuetype': {
                        'id': '10302'
                    },
                    'reporter': {
                        'name': 'Constantine.Crismaru'
                    },
                    'components': [
                        {'name': componentName}
                    ],
                    'labels': [
                        'auto_created'
                    ],
                    'description': 'Optional Description.'
                }
            };

        return this.post(createUrl, null, obj, 201);
    };

    this.updateJiraIssue = (name) => {
        var updateUrl = BASE_URL + '/rest/api/2/issue/' + name,
            obj = {
                'update': {
                    'assignee': [{'set':[{'name': 'works'}]}]
                }
            };

        console.log(updateUrl);

        return this.put(updateUrl, null, {"update": {"components": [{"add":{"name": "works"}}]}});
    };

    this.createJiraBug = (issueId, feature, testStep, bugLabel) => {
        var createUrl = BASE_URL + '/rest/api/2/issue',
            obj = {
                'fields': {
                    'project': {
                        'id': this.projectId
                    },
                    'summary': 'Test Bug through Jira API - linked to ' + testStep.step.name + ' --- ' + feature.key,
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

    /*    this.getAllProjects = () => {
     console.log('---getAllProjects---');
     var getProjectUrl = BASE_URL + '/rest/api/2/project';
     return this.get(getProjectUrl);
     };*/

    this.createTestStepForIssue = (issueId, testStep, orderId) => {
        var testStepUrl = ZAPI_URL + 'teststep/' + issueId,
            testStepObject = {
                step: testStep.name,
                orderId: orderId,
                result: 'Successfully completes.'
            };

        return this.post(testStepUrl, null, testStepObject);
    };

    this.getIssueId = (issueName) => {
        return this.get(BASE_URL + '/rest/api/2/issue/' + issueName);
    };

    this.getTestCycles = () => {
        return this.get(ZAPI_URL + 'cycle?projectId=' + projectId);
    };

    this.getIssueByLabel = (label) => {
        return this.get(BASE_URL + '/rest/api/2/search?jql=project=' + projectName + '%20and%20issuetype%20%3D%2010302%20and%20labels=' + label + '&maxResults=1');
    };

    // TODO remove reporter filter and startAt
    this.getTestCases = () => {
        return this.get(BASE_URL + '/rest/api/2/search?jql=project=' + projectName + '%20and%20reporter=Constantine.Crismaru%20and%20issuetype%20%3D%2010302&startAt=0&maxResults=1000');
    };

    // TODO remove reporter filter
    this.getTestBugs = () => {
        return this.get(BASE_URL + '/rest/api/2/search?jql=project=' + projectName + '%20and%20reporter=Constantine.Crismaru%20and%20issuetype%20%3D%201&startAt=0&maxResults=1000');
    };

    this.getTestStepResultsForExecution = (jiraExecutionId) => {
        return this.get(ZAPI_URL + 'stepResult?executionId=' + jiraExecutionId);
    };

    this.bulkUpdateExecutionDefects = (createdBugs, jiraExecutionId) => {
        var updateObject = {
            executions: [ jiraExecutionId ],
            defects: [],
            detailedResponse: false
        };

        createdBugs.forEach((createdBug) => {
            updateObject.defects.push(createdBug.key)
        });

        return this.put(ZAPI_URL + 'execution/updateWithBulkDefects', null, updateObject, 200);
    };

    this.updateTestStepResult = (jiraIssueId, jiraExecutionId, testStepObject, feature, linkedIssue) => {
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

    this.updateTestExecutionStatus = (passed, execId) => {
        return this.put(ZAPI_URL + 'execution/' + execId + '/execute', null, { comment: 'Automated Execution.', status: passed ? 1 : 2});
    };

    this.executeTestToTestCycle = (cycleId, issueId) => {
        var obj = {
            cycleId: cycleId,
            issueId: issueId,
            projectId: this.projectId,
            versionId: versionId
        };

        return this.post(ZAPI_URL + 'execution/', null, obj);
    };

    this.updateTestExecution = (executionId, status, comment) => {
        var obj = {
            executionId: executionId,
            status: status,
            comment: comment
        };

        return this.put(ZAPI_URL + 'execution/' + executionId + '/execute', null, obj);
    };

    this.getAttachments = (entityId) => {
        var entityType = 'TESTSTEPRESULT';
        return this.get(ZAPI_URL + 'attachment/attachmentsByEntity?entityId=' + entityId + '&entityType=' + entityType);
    };

    this.addAttachment = (entityId, file) => {
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

    this.deleteAttachment = (id) => {
        return this.delete(ZAPI_URL + 'attachment/' + id);
    };

    this.deleteAttachmentsByStep = (stepId) => {
        var self = this,
            promise = this.getAttachments(stepId);

        promise.then((response) => {
            var responseJson = JSON.parse(response);
            responseJson.data.forEach((file) => {
                self.deleteAttachment(file.fileId);
            })
        });
        return promise;
    };

    this.updateAttachment = (stepId, file) => {
        var self = this;
        return this.deleteAttachmentsByStep(stepId).then(() => {
            return self.addAttachment(stepId, file);
        });
    };

    this.get = (url, qs) => {
        var deferred = Q.defer();

        tgRequest.get(url, qs, (error, response, body) => {
            if(response) {
                var status = response.statusCode ? response.statusCode : null;

                if (error || status !== 200) {
                    deferred.reject(status, body);
                } else {
                    deferred.resolve(JSON.parse(body));
                }
            }
        });

        return deferred.promise;
    };

    // TODO: can we just use post?
    this.postFile = (url, qs, formData, successfulStatusCode) => {
        var deferred = Q.defer();

        tgRequest.postFile(url, qs, formData, (error, response, body) => {
            if(response) {
                var status = response.statusCode,
                    success = successfulStatusCode || 200;

                if (error || status !== success) {
                    deferred.reject(status, body);
                } else {
                    deferred.resolve(body);
                }
            }
        });

        return deferred.promise;
    };

    this.post = (url, qs, obj, successfulStatusCode) => {
        var deferred = Q.defer();

        tgRequest.post(url, qs, obj, (error, response, body) => {
            if(response) {
                var status = response.statusCode,
                    success = successfulStatusCode || 200;

                if (error || status !== success) {
                    console.log(response);
                    console.log(body);
                    deferred.reject(status, body);
                } else {
                    deferred.resolve(JSON.parse(body));
                }
            }
        });

        return deferred.promise;
    };

    this.put = (url, qs, obj, successfulStatusCode) => {
        var deferred = Q.defer();

        tgRequest.put(url, qs, obj, (error, response, body) => {
            if(response) {
                var status = response.statusCode,
                    success = successfulStatusCode || 200;

                if (error || status !== success) {
                    deferred.reject(status, body);
                } else {
                    deferred.resolve(body);
                }
            }
        });

        return deferred.promise;
    };

    this.delete = (url, successfulStatusCode) => {
        var deferred = Q.defer();

        tgRequest.delete(url, null, (error, response) => {
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
};

module.exports = new ZapiApi();
