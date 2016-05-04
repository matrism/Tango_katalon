'use strict';

var fs = require('fs'),
    path = require('path'),
    extname = path.extname,
    glob = require('glob'),

    basePath = __dirname,
    basePathSlash = basePath + '/',

    configer = global.ftf.configer,
    cli = configer.getParamsFromCli(),
    env = {
        ENV_TYPE: cli.env || configer.getEnvVarByKey('ENV_TYPE') || 'qa'
    };

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

exports.load = () => {
    var commonModulePaths = glob.sync(basePath + '/../envs/common/**/*.js'),
        envModulePaths = glob.sync(basePath + '/../envs/' + env.ENV_TYPE + '/**/*.js'),

        selectedModulePaths;

    commonModulePaths = commonModulePaths.map(parseModulePath);

    envModulePaths = envModulePaths.map(parseModulePath);

    selectedModulePaths = commonModulePaths;

    envModulePaths.forEach(function (info) {
        var dupePosition = null;

        selectedModulePaths.forEach(function (otherInfo, index) {
            if (info.envFilePath === otherInfo.envFilePath) {
                dupePosition = index;
            }
        });

        if (dupePosition !== null) {
            selectedModulePaths.splice(dupePosition, 1);
        }

        selectedModulePaths.push(info);
    });

    let ret = {};

    ret.features = [];
    ret.steps = [];
    ret.pages = [];

    selectedModulePaths.forEach(function (info) {
        var fullPath = info.fullPath;

        if (fullPath.indexOf('/features/') > -1 && fullPath.indexOf('/data/') === -1) {
            ret.features.push(fullPath);
        } else if (fullPath.indexOf('/pages/') > -1) {
            ret.pages.push(fullPath);
        } else if (fullPath.indexOf('/steps/') > -1) {
            ret.steps.push(fullPath);
        }
    });

    Object.keys(steps).forEach(k => delete steps[k]);
    Object.keys(pages).forEach(k => delete pages[k]);

    ret.pages.concat(ret.steps).forEach(path => {
        delete require.cache[require.resolve(path)];
        require(path);
    });

    return ret;
};
