'use strict';

require('array.prototype.includes');

let path = require('path'),
    glob = require('glob'),

    rootDir = path.normalize(__dirname + '/..'),

    fMods = (() => {
        if(systemConfig.feat) {
            return [rootDir + '/' + systemConfig.feat];
        }
        else {
            return glob.sync(rootDir + '/envs/**/features/**/*.js');
        }
    })();

global.featureList = [];
global.scenarioList = [];

function tagMatches(a, b) {
    return a.some((a) => {
        return b.includes(a);
    });
}

fMods.forEach((fPath) => {
    let fMod = require(fPath);

    // Not a feature module? Skip.
    if(!fMod.feature) {
        return;
    }

    let shortPath = fPath.slice(rootDir.length + 1),

        fTags = fMod.commonFeatureTags || [];

    if(tagMatches(fTags, systemConfig.tags.negated)) {
        return;
    }

    if(systemConfig.tags.length > 0) {
        let fAllTags = fTags.slice(0);

        fMod.feature.forEach((scenario) => {
            fAllTags.push(...scenario.tags);
        });

        if(!tagMatches(fAllTags, systemConfig.tags)) {
            return;
        }
    }

    featureList.push(fMod);

    describe(shortPath, () => {
        fMod.feature.forEach((scenario) => {
            describe(scenario.name, () => {
                scenarioList.push(scenario);

                if(systemConfig.tags.length > 0) {
                    let tags = fMod.commonFeatureTags.concat(scenario.tags);

                    if(!tagMatches(tags, systemConfig.tags)) {
                        return;
                    }
                }

                if(fMod.beforeFeature) {
                    describe('Before feature', () => {
                        fMod.beforeFeature();
                    });
                }

                describe('Feature steps', () => {
                    scenario.steps();
                });
            });
        });
    });
});
