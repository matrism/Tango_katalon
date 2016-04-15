'use strict';

var exports = function (callbacks) {
        this.cbs = callbacks;

        this.passedFeatures = 0;
        this.failedFeatures = 0;

        this.totalScenarios = 0;
        this.passedScenarios = 0;
        this.failedScenarios = 0;

        this.totalSteps = 0;
        this.passedSteps = 0;
        this.failedSteps = 0;

        this.streams = [];

        this.setStream(0);
    },

    proto = exports.prototype,

    parseStateHandlers = {},

    lineStmIdRe = /^([0-9]+): (.+)$/;

proto.setStream = function (id) {
    this.stm = this.streams[id] || {
        id: id,
        parseState: (id !== 0? 'processStartUp' : 'control')
    };

    this.streams[id] = this.stm;
};

proto.unexpectedLine = function (l) {
    throw new Error(
        'Unexpected line on stream ' + this.stm.id + ', ' +
        'parse state ' + this.stm.parseState + ': ' + l
    );
};

proto.fire = function (name) {
    var allCb = this.cbs.all,
        cb = this.cbs[name],

        cbArgs;

    if(!allCb && !cb) {
        return;
    }

    cbArgs = [].slice.call(arguments, 1);
    cbArgs.unshift(this.stm.id);

    if(allCb) {
        allCb.apply(null, [name].concat(cbArgs));
    }

    if(cb) {
        cb.apply(null, cbArgs);
    }
};

proto.parseLine = function (l) {
    var parser = this,

        stmIdReRes = lineStmIdRe.exec(l),

        parseStateHandlerOptions;

    if(!stmIdReRes) {
        this.setStream(0);
    }
    else {
        this.setStream(parseInt(stmIdReRes[1]));
        l = stmIdReRes[2];
    }

    l = l.replace(/^ +/, '');

    parseStateHandlerOptions = parseStateHandlers[this.stm.parseState];

    if(!parseStateHandlerOptions) {
        throw new Error('Unimplemented parse state: ' + this.stm.parseState);
    }

    if(!l.startsWith('[(+)]')) {
        this.fire('log', l);
        return;
    }

    l = l.slice('[(+)] '.length);

    parseStateHandlerOptions = (
        parseStateHandlerOptions.slice().concat(parseStateHandlers.fallback)
    );

    if(!parseStateHandlerOptions.some(function (parseOption) {
        var reRes,
            fnRes;

        reRes = parseOption.re.exec(l);

        if(!reRes) {
            return false;
        }

        fnRes = parseOption.fn.apply(parser, reRes);

        if(fnRes === undefined) {
            fnRes = true;
        }

        return fnRes;
    })) {
        this.unexpectedLine(l);
    }
};

function parseTags (str) {
    if(['none', 'all'].indexOf(str) !== -1) {
        return [];
    }

    return str.split(',');
}

parseStateHandlers.control = [
    {
        re: /^Target environment is (.+) \((.+)\)$/,

        fn: function (l, envType, appUrl) {
            this.fire('targetEnvType', envType, l);
            this.fire('targetAppUrl', appUrl, l);
        }
    },

    {
        re: /^Test code branch is (.+) \((.+)\)$/,

        fn: function (l, branchName, commitHash) {
            this.fire('testBranchName', branchName, l);
            this.fire('testCommitHash', commitHash, l);
        }
    },

    {
        re: /^Host time zone is (.+)$/, fn: function (l, tz) {
            this.fire('hostTimeZone', tz, l);
        }
    },

    {
        re: /^Silent job timeout is (.+)$/, fn: function (l, timeout) {
            this.fire('silentJobTimeout', timeout, l);
        }
    },

    {
        re: /^Starting ([0-9]+) feature processes with ([0-9]+) parallel jobs on (.+)$/,

        fn: function (l, fCount, jCount, dateTime) {
            this.fire('featureCount', parseInt(fCount), l);
            this.fire('jobCount', parseInt(jCount), l);
            this.fire('startDateTime', dateTime, l);
        }
    },

    {
        re: /^Requested tags: (.+)$/, fn: function (l, tags) {
            this.fire('requestedTestTags', parseTags(tags), l);
        }
    },

    {
        re: /^Negated tags: (.+)$/, fn: function (l, tags) {
            this.fire('negatedTestTags', parseTags(tags), l);
        }
    },

    {
        re: /^Total time taken so far: (.+)$/, fn: function (l, timeTaken) {
            this.fire('totalTimeTakenSoFar', timeTaken, l);
        }
    },

    {
        re: /^All done on (.+)$/, fn: function (l, dateTime) {
            this.fire('endDateTime', dateTime, l);
            this.fire('allDone');
        }
    }
];

parseStateHandlers.processStartUp = [
    {
        re: /^Starting process on (.+)$/, fn: function (l, dateTime) {
            this.fire('processStarted', l);
            this.fire('processStartTime', dateTime, l);
        }
    },

    {
        re: /^Testing started with ([0-9]+) steps to run$/,

        fn: function (l, stepCount) {
            this.fire('testingStarted', l);
            this.fire('totalSteps', parseInt(stepCount), l);

            this.stm.stepNum = 0;
            this.stm.parseState = 'testing';
        }
    }
];

parseStateHandlers.testing = [
    {
        re: /^Feature: (.+)$/, fn: function (l, name) {
            this.fire('featureStarted', name, l);

            this.stm.parseState = 'feature';
            this.stm.blockLevel = 0;
        }
    },

    {
        re: /^Testing finished$/, fn: function (l) {
            this.fire('testingFinished', l);
            this.stm.parseState = 'testingFinished';
        }
    }
];

parseStateHandlers.testingFinished = [
    {
        re: /^Process finished on (.+) \(took (.+)\)$/,

        fn: function (l, dateTime, timeTaken) {
            this.fire('processFinishedDateTime', dateTime, l);
            this.fire('processTimeTaken', timeTaken, l);
            this.fire('processFinished', 'cleanly', l);
        }
    }
];

parseStateHandlers.feature = [
    {
        re: /^Tags: (.+)$/, fn: function (l, tags) {
            this.fire('featureTags', parseTags(tags), l);
        }
    },

    {
        re: /^Scenario: (.+)$/, fn: function (l, name) {
            this.fire('scenarioStarted', name, l);

            this.stm.parseState = 'scenario';
            ++this.stm.blockLevel;
        }
    },

    {
        re: /^End feature: (.+) on (.+) \(took (.+)\)$/,

        fn: function (l, result, dateTime, timeTaken) {
            this.fire('featureFinishDateTime', dateTime, l);
            this.fire('featureTimeTaken', timeTaken, l);
            this.fire('featureFinished', result, l);

            this.stm.parseState = 'testing';
            --this.stm.blockLevel;
        }
    }
];

parseStateHandlers.scenario = [
    {
        re: /^Tags: (.+)$/, fn: function (l, tags) {
            this.fire('scenarioTags', parseTags(tags), l);
        }
    },

    {
        re: /^Block: (.+)$/, fn: function (l, name) {
            this.fire('blockStarted', name, l);

            this.stm.parseState = 'block';
            ++this.stm.blockLevel;
        }
    },

    {
        re: /^End scenario: (.+) on (.+) \(took (.+)\)$/,

        fn: function (l, result, dateTime, timeTaken) {
            this.fire('scenarioFinishDateTime', dateTime, l);
            this.fire('scenarioTimeTaken', timeTaken, l);
            this.fire('scenarioFinished', result, l);

            this.stm.parseState = 'feature';
            --this.stm.blockLevel;
        }
    }
];

parseStateHandlers.block = [
    {
        re: /^Block: (.+)$/, fn: function (l, name) {
            this.fire('blockStarted', name, l);
            ++this.stm.blockLevel;
        }
    },

    {
        re: /^Step: (.+)$/, fn: function (l, name) {
            this.fire('stepStarted', name, l);
            this.stm.parseState = 'step';
        }
    },

    {
        re: /^End block: (.+) on (.+) \(took (.+)\)$/,

        fn: function (l, result, dateTime, timeTaken) {
            this.fire('blockFinishDateTime', dateTime, l);
            this.fire('blockTimeTaken', timeTaken, l);
            this.fire('blockFinished', result, l);

            if(--this.stm.blockLevel < 2) {
                this.stm.parseState = 'scenario';
            }
        }
    }
];

parseStateHandlers.step = [
    {
        re: /^Browser URL: (.+)$/, fn: function (l, url) {
            this.fire('browserUrl', url, l);
        }
    },

    {
        re: /^PNG saved$/, fn: function (l) {
            var stm = this.stm;

            this.fire('pngSaved', stm.id + '_' + stm.stepNum + '.png', l);
        }
    },

    {
        re: /^HTML saved$/, fn: function (l) {
            var stm = this.stm;

            this.fire('htmlSaved', stm.id + '_' + stm.stepNum + '.html', l);
        }
    },

    {
        re: /^End step: (.+) on (.+) \(took (.+)\)$/,

        fn: function (l, result, dateTime, timeTaken) {
            this.fire('stepFinishedDateTime', dateTime, l);
            this.fire('stepTimeTaken', timeTaken, l);
            this.fire('stepFinished', result, l);

            this.stm.parseState = 'block';
        }
    }
];

parseStateHandlers.fallback = [
    {
        re: /^Process finished on (.+) \(took (.+)\)$/,

        fn: function (l, dateTime, timeTaken) {
            this.fire('processFinishedDateTime', dateTime, l);
            this.fire('processTimeTaken', timeTaken, l);
            this.fire('processFinished', 'prematurely', l);
        }
    }
];

if(typeof window !== 'undefined') {
    window.TatLogParser = exports;
}
else {
    module.exports = exports;
}
