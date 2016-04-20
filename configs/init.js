'use strict';

let enumFeatures = require('../tools/enumFeatures'),

    features = enumFeatures(
        systemConfig.env.name, systemConfig.tags, systemConfig.tags.negated
    );

global.featureList = [];
global.scenarioList = [];

features.forEach((feature) => {
    let fMod = feature.module;

    // Not a feature module? Skip.
    if(!fMod.feature) {
        return;
    }

    featureList.push(fMod);

    describe(feature.relPath, () => {
        fMod.feature.forEach((scenario) => {
            scenarioList.push(scenario);

            describe(scenario.name, () => {
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
