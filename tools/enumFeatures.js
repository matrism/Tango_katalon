'use strict';

require('array.prototype.includes');

let path = require('path'),
    glob = require('glob'),

    _ = require('lodash'),

    rootDir = path.normalize(__dirname + '/..');

function tagMatches(a, b) {
    a = a || [];
    b = b || [];

    return a.some((a) => {
        return b.includes(a);
    });
}

module.exports = (envType, tags, negatedTags) => {
    let ret = [],

        overrideCandidates = glob.sync(
            rootDir + '/envs/' + envType + '/features/**/*.js'
        ),

        candidates = glob.sync(rootDir + '/envs/common/features/**/*.js').filter((path) => {
            let tail = path.slice((rootDir + '/envs/common/features/').length),

                hasNoOverride = (overrideCandidates.indexOf(
                    rootDir + '/envs/' + envType + '/features/' + tail
                ) === -1);

            return hasNoOverride;
        }),

        allCandidates = overrideCandidates.concat(candidates);

    allCandidates.forEach((fPath) => {
        let fMod = _.cloneDeep(require(fPath));

        // Skip if not a feature module.
        if(!fMod.feature) {
            return;
        }

        let fTags = fMod.commonFeatureTags || [];

        // Skip if any of the feature tags are being negated.
        if(tagMatches(fTags, negatedTags)) {
            return;
        }

        // Feature file is explicitly matched if there are no requested tags
        // or one or more of the requested tags match a feature tag.
        let fExplicitlyMatched = tags.length === 0 || tagMatches(fTags, tags);

        // For each feature scenario...
        fMod.feature = fMod.feature.filter((scenario) => {
            let sTags = scenario.tags || [];

            // Skip scenario if any of its tags are being negated,
            // even if the feature file was explicitly matched.
            if(tagMatches(sTags, negatedTags)) {
                return false;
            }

            // Skip scenario if feature file wasn't explicitly matched, and
            // there are requested tags, and none of them matches the
            // scenario tags.
            if(!fExplicitlyMatched && tags.length > 0 && !tagMatches(sTags, tags)) {
                return false;
            }

            return true;
        });

        // Skip feature file if all scenarios have been filtered out.
        if(fMod.feature.length === 0) {
            return;
        }

        ret.push({
            path: fPath,
            relPath: fPath.slice(rootDir.length + 1),
            module: fMod
        });
    });

    return ret;
};
