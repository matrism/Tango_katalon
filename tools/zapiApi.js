'use strict';

let fs = require('fs'),
    path = require('path'),
    Q = require('q'),
    request = require('request');

var ZapiApi = function () {
    var BASE_URL = 'https://jira.wmg.com',
        ZAPI_URL = BASE_URL + '/rest/zapi/latest/',
        projectId = '14306',
        versionId = '-1',
        projectName = 'WC';

    function log () {
        console.log('[Zapi]', ...arguments);
    }

    this.createTestCycle = (name) => {
        var body = {
            name: name,
            environment: "qa",
            projectId: projectId,
            versionId: versionId
        };

        return this.post({
            url: ZAPI_URL + 'cycle',
            body: body
        });
    };

    this.getTestStepsForIssue = (issueId) => {
        return this.get(ZAPI_URL + 'teststep/' + issueId);
    };

    this.createIssue = (featureId, featureName, componentName) => {
        var createUrl = BASE_URL + '/rest/api/2/issue',
            obj = {
                'fields': {
                    'project': {
                        'id': projectId
                    },
                    'summary': featureName,
                    'issuetype': {
                        'id': '10302'
                    },
                    /*
                    'reporter': {
                        'name': 'Constantine.Crismaru'
                    },
                    */
                    'components': [
                        {'name': componentName}
                    ],
                    'labels': [
                        'auto_created', 'live', featureId
                    ],
                    //'description': 'Optional Description.'
                }
            };

        return this.post({url: createUrl, body: obj});
    };

    this.updateIssue = (issueId, featureName, componentName) => {
        var updateUrl = BASE_URL + '/rest/api/2/issue/' + issueId,
            obj = {
                'fields': {
                    'summary': featureName
                }
            };

        return this.put({url: updateUrl, body: obj});
    };

    this.createJiraBug = (issueId, feature, testStep, bugLabel) => {
        var createUrl = BASE_URL + '/rest/api/2/issue',
            obj = {
                'fields': {
                    'project': {
                        'id': projectId
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

        return this.post({url: createUrl, body: obj});
    };

    /*    this.getAllProjects = () => {
     console.log('---getAllProjects---');
     var getProjectUrl = BASE_URL + '/rest/api/2/project';
     return this.get(getProjectUrl);
     };*/

    this.createIssueStep = (issueId, description, orderId) => {
        var url = ZAPI_URL + 'teststep/' + issueId,
            obj = {
                step: description,
                orderId: orderId,
                result: ''
            };

        return this.post({url: url, body: obj});
    };

    this.getIssueId = (issueName) => {
        return this.get({url: BASE_URL + '/rest/api/2/issue/' + issueName});
    };

    this.getTestCycles = () => {
        return this.get({url: ZAPI_URL + 'cycle?projectId=' + projectId});
    };

    this.getIssueByLabel = (label) => {

        return this.get({url: BASE_URL + '/rest/api/2/search?jql=project=' + projectName + '%20and%20issuetype%20%3D%2010302%20and%20labels=' + label + '&maxResults=1'});
    };

    this.getIssueSteps = (issueId) => {
        return this.get({url: ZAPI_URL + 'teststep/' + issueId});
    };

    // TODO remove reporter filter and startAt
    this.getTestCases = () => {
        return this.get({url: BASE_URL + '/rest/api/2/search?jql=project=' + projectName + '%20and%20reporter=Constantine.Crismaru%20and%20issuetype%20%3D%2010302&startAt=0&maxResults=1000'});
    };

    // TODO remove reporter filter
    this.getTestBugs = () => {
        return this.get({url: BASE_URL + '/rest/api/2/search?jql=project=' + projectName + '%20and%20reporter=Constantine.Crismaru%20and%20issuetype%20%3D%201&startAt=0&maxResults=1000'});
    };

    this.getTestStepResultsForExecution = (jiraExecutionId) => {
        return this.get({url: ZAPI_URL + 'stepResult?executionId=' + jiraExecutionId});
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

        return this.put({url: ZAPI_URL + 'execution/updateWithBulkDefects', body: updateObject});
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

        return this.put({url: ZAPI_URL + 'stepResult/' + testStepObject.resultStep.id, body:updateObject});
    };

    this.updateTestExecutionStatus = (passed, execId) => {
        var updateObject = { comment: 'Automated Execution.', status: passed ? 1 : 2};
        return this.put({url: ZAPI_URL + 'execution/' + execId + '/execute', body: updateObject});
    };

    this.executeTestToTestCycle = (cycleId, issueId) => {
        var obj = {
            cycleId: cycleId,
            issueId: issueId,
            projectId: projectId,
            versionId: versionId
        };

        return this.post({url: ZAPI_URL + 'execution/', body: obj});
    };

    this.updateTestExecution = (executionId, status, comment) => {
        var obj = {
            executionId: executionId,
            status: status,
            comment: comment
        };

        return this.put({url: ZAPI_URL + 'execution/' + executionId + '/execute', body: obj});
    };

    this.getAttachments = (entityId) => {
        var entityType = 'TESTSTEPRESULT';
        return this.get({url: ZAPI_URL + 'attachment/attachmentsByEntity?entityId=' + entityId + '&entityType=' + entityType});
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

        return this.postFile({url: ZAPI_URL + 'attachment/?entityId=' + entityId + '&entityType=' + entityType, formData: formData});
    };

    this.deleteAttachment = (id) => {
        return this.delete({url: ZAPI_URL + 'attachment/' + id});
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

    this.request = (req) => {
        var deferred = Q.defer(),
            bodyParams,
            r;

        req.headers = {
            'Authorization': 'Basic ' + base64.encode('Constantine.Crismaru:America66%'),
            'Content-Type': 'application/json'
        }
        if (req.method == 'POST') {
            bodyParams = JSON.stringify(req.body);
            delete req.body;
            req.headers['Content-Length'] = bodyParams.length;
        }
        r = request(req, (error, response, body) => {
            //log(req.url, body);
            if(response) {
                let status = response.statusCode ? response.statusCode : null,
                    parsedBody;

                if (error || [200,201,204].indexOf(status) == -1) {
                    log(req.url, 'Status: ' + status, error, body);
                    deferred.reject(status, body);
                } else {
                    try {
                        parsedBody = JSON.parse(body);
                    }
                    catch(err) {
                    }
                    deferred.resolve(parsedBody);
                }
            }
        });

        if (req.method == 'POST') {
            r.write(bodyParams);
            r.end();
        }

        return deferred.promise;
    };

    this.get = (req) => {
        req.method = 'GET';
        return this.request(req);
    };

    // TODO: can we just use post?
    this.postFile = (url, qs, formData, successfulStatusCode) => {
        //tgRequest.postFile(url, qs, formData, (error, response, body) => {
    };

    this.post = (req) => {
        req.method = 'POST';
        return this.request(req);
    };

    this.put = (url, qs, obj) => {
        //tgRequest.put(url, qs, obj, (error, response, body) => {
    };

    this.delete = (url) => {
    //tgRequest.delete(url, null, (error, response) => {
    };

    this.postFile = function (url, qs, formData, fn) {
        request({
            method: 'POST',
            url: url,
            formData: formData,
            headers: {
                'Authorization': authorization,
                'X-Atlassian-Token': 'nocheck'
            }
        }, fn);
    };

    this.put = function (url, qs, body, fn) {
        var _body = JSON.stringify(body),
            _req = request({
                method: 'PUT',
                url: url,
                qs: qs,
                headers: {
                    'Authorization': authorization,
                    'Content-Type': 'application/json',
                    'Content-Length': _body.length
                }
            }, fn);

        _req.write(_body);
        _req.end();
    };

    this.delete = function (url, qs, fn) {
        request({
            method: 'DELETE',
            url: url,
            qs: qs,
            headers: {
                'Authorization': authorization,
                'Content-Type': 'application/json'
            }
        }, fn);
    };
};

module.exports = new ZapiApi();
