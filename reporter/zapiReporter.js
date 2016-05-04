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

        zapi.issue.save(suite.obj.id, featureName, suite.obj.commonFeatureTags).then(() => {
            return zapi.issue.execute(options.cycleId);
        });
    }
};

exports.specStarted = (spec) => {
};

exports.specDone = (spec) => {
    if (spec.description != 'User is logged in') {
        //console.log(spec);
        var scenario = '';
        if (true) {
            //zapi.issue.saveStep(spec.description, spec.stepNum);
        }
        zapi.issue.saveStep(spec.description, spec.stepNum).then(() => {
        });
        //zapi.issue.waitForCreateSteps();
    }
};

exports.suiteDone = (suite) => {
};

exports.jasmineDone = () => {

};
