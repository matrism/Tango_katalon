'use strict';

require('array.prototype.includes');

let path = require('path'),
    glob = require('glob'),

    rootDir = path.normalize(__dirname + '/..');

function tagMatches(a, b) {
    return a.some((a) => {
        return b.includes(a);
    });
}

module.exports = (tags, negatedTags) => {
    let paths = [];

    glob.sync(rootDir + '/envs/**/features/**/*.js').forEach((fPath) => {
        let fMod = require(fPath);

        // Not a feature module? Skip.
        if(!fMod.feature) {
            return;
        }

        let fTags = fMod.commonFeatureTags || [];

        if(tagMatches(fTags, negatedTags)) {
            return;
        }

        if(tags.length > 0) {
            let fAllTags = fTags.slice(0);

            fMod.feature.forEach((scenario) => {
                fAllTags.push(...scenario.tags);
            });

            if(!tagMatches(fAllTags, tags)) {
                return;
            }
        }

        paths.push(fPath.slice(rootDir.length + 1));
    });

    return paths;
};
