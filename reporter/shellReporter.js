'use strict';

let fs = require('fs'),

    takeHtmlSnapshot = require('./takeHtmlSnapshot'),

    eventDateTimeString = require('./eventDateTimeString'),
    timeTakenSince = require('./timeTakenSince'),

    indent = 0,
    latestStepNum = 0;

// TODO: Move this somewhere appropriate.
systemConfig.screenshotsPath = 'reports/html/testing';

function log() {
    let indentStr = new Array(indent + 1).join('    ');
    console.log(indentStr + '[(+)]', ...arguments);
};

exports.jasmineStarted = (info) => {
    afterEach(() => {
        let currentStepNum = ++latestStepNum;

        browser.getCurrentUrl().then((url) => {
            log('Browser URL:', url);
        });

        browser.takeScreenshot().then((png) => {
            let fName = systemConfig.streamId + '_' + currentStepNum + '.png',
                fPath = systemConfig.screenshotsPath + '/' + fName;

            fs.writeFileSync(fPath, new Buffer(png, 'base64'));

            log('PNG saved');
        });

        return takeHtmlSnapshot().then((html) => {
            let fName = systemConfig.streamId + '_' + currentStepNum + '.html',
                fPath = systemConfig.screenshotsPath + '/' + fName;

            fs.writeFileSync(fPath, html);

            log('HTML saved');
        });
    });

    log('Testing started with', info.totalSpecsDefined, 'steps to run');
};

let suiteLv = 0,

    iNextFeature = 0,
    iNextScenario = 0;

exports.suiteStarted = (suite) => {
    suite.startTime = Date.now();

    let prefix = {
        0: 'Feature',
        1: 'Scenario'
    }[suiteLv++] || 'Block';

    suite.type = prefix.toLowerCase();

    log(prefix + ':', suite.description);

    switch(suite.type) {
        case 'feature':
            suite.obj = featureList[iNextFeature++];
            break;

        case 'scenario':
            suite.obj = scenarioList[iNextScenario++];
            break;
    }

    if(suite.type !== 'block') {
        let obj = suite.obj,
            tags = obj.commonFeatureTags || obj.tags || [];

        if(tags.length === 0) {
            tags = ['none'];
        }

        log('Tags:', tags.join(','));
    }

    ++indent;
};

exports.specStarted = (spec) => {
    spec.stepNum = latestStepNum;

    spec.startTime = Date.now();

    log('Step:', spec.description);

    ++indent;
};

exports.specDone = (spec) => {
    spec.failedExpectations.forEach((failure) => {
        console.log(failure.stack);
    });

    --indent;

    log(
        'End step:', spec.status, eventDateTimeString(),
        '(took', timeTakenSince(spec.startTime) + ')'
    );
};

exports.suiteDone = (suite) => {
    suite.failedExpectations.forEach((failure) => {
        console.log('Failed expectation:', failure.message);
        console.log('Stack:', failure.stack);
    });

    --indent;

    log(
        'End ' + suite.type + ':', suite.status,
        eventDateTimeString(), '(took',
        timeTakenSince(suite.startTime) + ')'
    );

    --suiteLv;
};

exports.jasmineDone = () => {
    log('Testing finished');
};
