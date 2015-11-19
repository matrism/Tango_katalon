'use strict';

var path = require('path'),
    glob = require('glob'),
    recursivelyAccess = require('./recursivelyAccess');

glob.sync(__dirname + '/**/*.js').forEach(function(path) {
    var pathSlices = path.split('/'),

        helperName = pathSlices.slice(-1)[0],

        helperParent = recursivelyAccess(
            global, pathSlices.slice(0, -1), { create: true }
        );

    helperParent[helperName] = require(path);
});
