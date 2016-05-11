'use strict';

let zapi = require('../tools/zapi'),
    path = require('path'),
    Q = require('q'),
    promises = [];

exports.init = (obj) => {
    zapi.setCycleId(obj.cycleId);
    zapi.setDebug(obj.debug);
};

exports.deferred = Q.defer();

exports.jasmineStarted = (info) => {
};

exports.suiteStarted = (suite) => {
    if (suite.type == 'feature' && suite.obj && suite.obj.id) {
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
    var stepName = spec.description,
        stepNum = spec.stepNum + 1,
        failMessage = '';

    if (stepName == 'User is logged in') {
        let scenario = spec.fullName.split(' ').splice(1).join(' ').replace('Before feature User is logged in', '');
        stepName = '[Scenario] ' + scenario;
    }

    if (spec.failedExpectations.length) {
        failMessage = spec.fullName;
        spec.failedExpectations.forEach((expectation) => {
            failMessage += ' -- ' + expectation.message;
        });
    }

    zapi.issue.saveStep(stepName, stepNum);
    zapi.processStepResult(stepName, stepNum, spec.status, failMessage);
};

exports.suiteDone = (suite) => {
};

exports.jasmineDone = () => {
    zapi.issue.postExecution();
    zapi.execution.updateStatus().then(() => {
        console.log('[Zapi] Done');
        exports.deferred.resolve()
    });
};
