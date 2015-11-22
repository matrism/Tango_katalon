'use strict';

var path = require('path'),
    relativePath = path.relative,
    baseName = path.basename,
    glob = require('glob'),
    recursivelyAccess = require('./recursivelyAccess');

glob.sync(__dirname + '/**/*.js').forEach(function(path) {
    var pathSlices = relativePath(__dirname, path).split('/'),

        helperName = baseName(pathSlices.slice(-1)[0], '.js'),

        helperParent = recursivelyAccess(
            global, pathSlices.slice(0, -1), { create: true }
        );

    helperParent[helperName] = require(path);
});
