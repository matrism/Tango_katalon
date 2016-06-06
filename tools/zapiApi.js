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

    this.createBug = (summary, description, severity, bugLabel) => {
        var createUrl = BASE_URL + '/rest/api/2/issue',
            obj = {
                'fields': {
                    'project': {
                        'id': projectId
                    },
                    'summary': summary,
                    'issuetype': {
                        'id': '1'
                    },
                    'labels': [
                        'auto_created', 'live',
                        //severity,
                        //bugLabel
                    ],
                    /* 
                      'severity': {
                     'name': testStep.step.severity
                     },*/
                    'description': description
                }
            };

        return this.post({url: createUrl, body: obj});
    };

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

    // TODO: filter by cycle name
    this.getTestCycles = () => {
        return this.get({
            url: ZAPI_URL + 'cycle', 
            qs: {
                projectId: projectId
            }
        });
    };

    this.getIssueByLabel = (label) => {
        return this.get({
            url: BASE_URL + '/rest/api/2/search',
            qs: {
                jql: 'project=' + projectName + ' AND issuetype = 10302 AND labels=' + label,
                maxResults: 1
            }
        });
    };

    this.getIssueSteps = (issueId) => {
        return this.get({url: ZAPI_URL + 'teststep/' + issueId});
    };

    this.getBug = (description) => {
        description = description.replace(/[-\[\]\,\(\)\'"]/g, '');
        return this.get({
            url: BASE_URL + '/rest/api/2/search',
            qs: {
                jql: 'project=' + projectName + ' AND summary~"' + description + '" AND issuetype = 1 AND status != Closed',
                startAt: '0',
                maxResults: '1'
            }
        });
    };

    this.getExecutionSteps = (executionId) => {
        return this.get({
            url: ZAPI_URL + 'stepResult',
            qs: {
                executionId: executionId
            }
        });
    };

    this.bulkUpdateExecutionDefects = (executionId, createdBugs) => {
        var updateObject = {
            executions: [ executionId ],
            defects: createdBugs,
            detailedResponse: false
        };

        return this.put({url: ZAPI_URL + 'execution/updateWithBulkDefects', body: updateObject});
    };

    this.updateExecutionStepResult = (issueId, executionId, stepId, status, comment, bugId) => {
        var updateObject = {
            id: stepId,
            issueId: issueId,
            executionId: executionId,
            comment: comment,
            updateDefectList: true,
            defectList: [ bugId ],
            status: status == 'passed' ? 1 : 2
        };

        return this.put({url: ZAPI_URL + 'stepResult/' + stepId, body: updateObject});
    };

    this.updateExecutionStatus = (executionId, status) => {
        var updateObject = { comment: 'Automated Execution.', status: status ? 1 : 2};
        return this.put({url: ZAPI_URL + 'execution/' + executionId + '/execute', body: updateObject});
    };

    this.clearExecutionStatus = (executionId) => {
        var updateObject = { comment: '', status: -1};
        return this.put({url: ZAPI_URL + 'execution/' + executionId + '/execute', body: updateObject});
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

    this.getExecution = (executionId, issueId) => {
        return this.get({
            url: ZAPI_URL + 'execution/navigator/' + executionId,
            qs: {
                zql: 'issue=' + issueId,
                offset: '0',
                maxRecords: '0',
                expand: 'executionStatus,checksteps'
            }
        });
    };

    this.updateTestExecution = (executionId, status, comment) => {
        var obj = {
            executionId: executionId,
            status: status,
            comment: comment
        };

        return this.put({
            url: ZAPI_URL + 'execution/' + executionId + '/execute',
            body: obj
        });
    };

    this.getAttachments = (entityId) => {
        var entityType = 'TESTSTEPRESULT';
        return this.get({
            url: ZAPI_URL + 'attachment/attachmentsByEntity',
            qs: {
                entityId: entityId,
                entityType: entityType
            }
        });
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

        return this.postFile({
            url: ZAPI_URL + 'attachment/',
            qs: {
                entityId: entityId,
                entityType: entityType
            },
            formData: formData
        });
    };

    this.deleteAttachment = (id) => {
        return this.delete({url: ZAPI_URL + 'attachment/' + id});
    };

    this.deleteAttachmentsByStep = (stepId) => {
        var self = this;

        return this.getAttachments(stepId).then((response) => {
            let promises = [];
            response.data.forEach((file) => {
                promises.push(self.deleteAttachment(file.fileId));
            })
            return Q.all(promises);
        });
    };

    this.updateAttachment = (stepId, file) => {
        var self = this;
        return this.deleteAttachmentsByStep(stepId).then(() => {
            return self.addAttachment(stepId, file);
        });
    };

    this.get = (req) => {
        req.method = 'GET';
        return this.request(req);
    };

    this.post = (req) => {
        req.method = 'POST';
        return this.request(req);
    };

    this.postFile = (req) => {
        req.headers = {'X-Atlassian-Token': 'nocheck'};
        req.method = 'POST';
        return this.request(req);
    };

    this.put = (req) => {
        req.method = 'PUT';
        return this.request(req);
    };

    this.delete = (req) => {
        req.method = 'DELETE';
        return this.request(req);
    };

    this.request = (req) => {
        var deferred = Q.defer(),
            bodyParams,
            r,
            writeBody = (req.body);

        req.headers = req.headers || {};
        // base64.encode('User:password');
        req.headers['Authorization'] = 'Basic ' + 'RGFuaWVsLkFyZW5oYXJ0OiR0ZW1wb3JhcnlwYXNzd29yZDEyMw==';
        req.headers['Content-Type'] = 'application/json';

        if (writeBody) {
            bodyParams = JSON.stringify(req.body);
            delete req.body;
            req.headers['Content-Length'] = bodyParams.length;
        }

        //log('START -',req.method, req.url);
        r = request(req, (error, response, body) => {
            //log('DONE  -', req.method, req.url, response.statusCode);
            if(response) {
                let status = response.statusCode ? response.statusCode : null,
                    parsedBody = {};

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
            } else {
                log(req.url, error);
                deferred.reject();
            }
        }, (error) => {
            log('Error - ', req.method, req.url, error);
            deferred.reject();
        });

        if (writeBody) {
            r.write(bodyParams);
            r.end();
        }

        return deferred.promise;
    };
};

module.exports = new ZapiApi();
