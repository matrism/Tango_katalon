'use strict';

let zapi = require('../tools/zapi'),
    path = require('path');

exports.init = (options) => {
    exports.cycleId = options.cycleId;
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

        zapi.issue.save(suite.obj.id, featureName, suite.obj.commonFeatureTags);
    }
};

exports.specStarted = (spec) => {
};

exports.specDone = (spec) => {
    zapi.issue.saveStep(spec.description, spec.stepNum);
    zapi.issue.waitForCreateSteps();
};

exports.suiteDone = (suite) => {
};

exports.jasmineDone = () => {

};
