'use strict';

let enumFeatures = require('../tools/enumFeatures'),

    features = enumFeatures(
        systemConfig.env.name,
        systemConfig.feat,
        systemConfig.tags,
        systemConfig.tags.negated
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

    let skipBroken = !systemConfig.dontSkipBroken,

        noBreakageDescriptionMsg = 'No breakage description provided';

    describe(feature.relPath, () => {
        let fTags = fMod.commonFeatureTags || [];

        if(skipBroken && fTags.includes('broken')) {
            describe('Broken feature', () => {
                describe('Broken feature', () => {
                    it('Broken feature', () => {
                        throw new Error(
                            fMod.breakageDescription || noBreakageDescriptionMsg
                        );
                    });
                });
            });

            return;
        }

        fMod.feature.forEach((scenario) => {
            scenarioList.push(scenario);

            describe(scenario.name, () => {
                let sTags = scenario.tags || [];

                if(skipBroken && sTags.includes('broken')) {
                    describe('Broken scenario', () => {
                        it('Broken scenario', () => {
                            throw new Error(
                                scenario.breakageDescription || noBreakageDescriptionMsg
                            );
                        });
                    });

                    return;
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
