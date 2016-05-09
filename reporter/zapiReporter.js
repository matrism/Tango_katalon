'use strict';

let zapi = require('../tools/zapi'),
    path = require('path'),
    Q = require('q'),
    promises = [];

exports.init = (cycleId) => {
    zapi.setCycleId(cycleId);
};

exports.deferred = Q.defer();

exports.jasmineStarted = (info) => {
};

exports.suiteStarted = (suite) => {
    if (suite.type = 'feature' && suite.obj && suite.obj.id) {
        var featureName = suite.fullName;
        if (suite.obj.featureName) {
            featureName = suite.obj.featureName;
        } else {
            featureName = path.parse(featureName).name.replace(/^[a-z]|[A-Z]/g, function(v, i) {
                return i === 0 ? v.toUpperCase() : ' ' + v;
            });
        }

        zapi.issue.save(suite.obj.id, featureName, suite.obj.commonFeatureTags);
        zapi.issue.execute();
    }
};

exports.specStarted = (spec) => {
};

exports.specDone = (spec) => {
    var description = spec.description,
        stepNum = spec.stepNum + 1,
        comment = '';

    if (spec.description == 'User is logged in') {
        let scenario = spec.fullName.split(' ').splice(1).join(' ').replace('Before feature User is logged in', '');
        description = '-------- Scenario: ' + scenario;
    }

    if (spec.failedExpectations.length) {
        comment = spec.fullName;
        spec.failedExpectations.forEach((expectation) => {
            comment += ' -- ' + expectation.message;
        });
    }

    zapi.issue.saveStep(description, stepNum);
    zapi.processStepResult(stepNum, spec.status, comment);
};

exports.suiteDone = (suite) => {
};

exports.jasmineDone = () => {
    zapi.issue.postExecution();
    zapi.execution.updateStatus().then(() => {
        exports.deferred.resolve()
    });
};
