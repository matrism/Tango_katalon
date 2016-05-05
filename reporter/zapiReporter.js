'use strict';

let zapi = require('../tools/zapi'),
    path = require('path');

exports.init = (cycleId) => {
    exports.cycleId = cycleId;
};

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

        zapi.issue.save(suite.obj.id, featureName, suite.obj.commonFeatureTags).then(() => {
            return zapi.issue.execute(exports.cycleId);
        });
    }
};

exports.specStarted = (spec) => {
    //console.log('SPEC STARTED');
    /*
    log('Wait for execute');
    browser.controlFlow().execute(() => { 
        //return Q.all([issue.executeDeferred]);
        return zapi.issue.executeDeferred.promise;
    });
    */
};

exports.specDone = (spec) => {
    if (spec.description != 'User is logged in') {
        zapi.issue.saveStep(spec.description, spec.stepNum).then(() => {
            var comment = ''; 
            if (spec.failedExpectations.length) {
                comment = spec.fullName;
                spec.failedExpectations.forEach((expectation) => {
                    comment += ' -- ' + expectation.message;
                });
            }
            zapi.execution.updateStepResult(spec.stepNum, spec.status, comment);
        });
    }
};

exports.suiteDone = (suite) => {
};

exports.jasmineDone = () => {

};
