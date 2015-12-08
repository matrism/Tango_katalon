'use strict';

var configer = global.ftf.configer,
    cli = configer.getParamsFromCli(),
    env = {
        ENV_TYPE: cli.env || configer.getEnvVarByKey('ENV_TYPE') || 'qa'
    };

var fs = require('fs'),
    path = require('path'),
    extname = path.extname,
    glob = require('glob'),

    basePath = __dirname,
    basePathSlash = basePath + '/',

    commonModulePaths = glob.sync(basePath + '/../envs/common/**/*.js'),
    envModulePaths = glob.sync(basePath + '/../envs/' + env.ENV_TYPE + '/**/*.js'),

    selectedModulePaths;

function parseModulePath(path) {
    var tail = path.slice(basePathSlash.length),
        parts = tail.slice(0, -extname(tail).length).split('/');

    return {
        fullPath: path,                        // e.g.: __dirname + /common/features/works/insanity.json
        env: parts[0],                         // e.g.: common (staging, e2e, etc.)
        envFilePath: parts.slice(1).join('/'), // e.g.: features/works/insanity.json
        envObjectPath: parts.slice(1, -1),     // e.g.: [features, works] (this is used to create objects in module.exports)
        name: parts.slice(-1)[0],              // e.g.: insanity
    };
}

commonModulePaths = commonModulePaths.map(parseModulePath);

envModulePaths = envModulePaths.map(parseModulePath);

selectedModulePaths = commonModulePaths;

envModulePaths.forEach(function (info) {
    var selectedEquivalentIndex = -1;

    selectedModulePaths.forEach(function (otherInfo, index) {
        if (info.envFilePath === otherInfo.envFilePath) {
            selectedEquivalentIndex = index;
        }
    });

    if (selectedEquivalentIndex === -1) {
        selectedModulePaths.push(info);
    }
    else {
        selectedModulePaths[selectedEquivalentIndex] = info;
    }
});

var features = [],
      steps = [],
      pages = [];

selectedModulePaths.forEach(function (info) {
    var fullPath = info.fullPath;

    if (fullPath.indexOf('/features/') > -1 && fullPath.indexOf('/data/') === -1) {
        features.push(fullPath);
    } else if (fullPath.indexOf('/pages/') > -1) {
        pages.push(fullPath);
    } else if (fullPath.indexOf('/steps/') > -1) {
        steps.push(fullPath);
    }
});

module.exports = {
    features: features,
    steps: steps,
    pages: pages
}