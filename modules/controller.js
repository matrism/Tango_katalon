var _ = require("underscore"),
    feature,
    step,
    args,
    fn,
    controller = {
        process: function() {
            if (!(_tf_config._cli.tags instanceof Array) && _.isString(_tf_config._cli.tags)) {
                _tf_config._cli.tags = [_tf_config._cli.tags];
            }
            if (!(_tf_config._cli["@tags"] instanceof Array) && _.isString(_tf_config._cli["@tags"])) {
                _tf_config._cli["@tags"] = [_tf_config._cli["@tags"]];
            }
            controller.readFeatures(_tf_config._system_.path_to_features);
        },
        prepareFeatures: function(feature, feature_name) {
            var background = feature.background || function(){},
                foreground = feature.foreground || function(){},
                features = feature.feature;
            
            if (!(features instanceof Array)) {
                features = [features];
            }
            controller.processArrayFeatures(features, feature_name, background, foreground);
        },
        stringUCFirst: function(str) {
            return str.charAt(0).toUpperCase() + str.substr(1, str.length-1);
        },
        readFeatures: function(path) {
            var fs = require('fs'),
                route = fs.realpathSync(path),
                feature,
                files;
        
            files = fs.readdirSync(route);
            for (var i in files) {
                feature = require(route + "/" + files[i]);
                controller.prepareFeatures(feature, controller.stringUCFirst(files[i]));
            };
        },
        processArrayFeatures: function(features, feature_name, background, foreground) {
            return describe(feature_name, function() {
                if (typeof background !== "undefined") {
                    beforeEach(background);
                }
                for (var i in features) {
                    controller.processFeature(features[i]);
                } 
                if (typeof foreground !== "undefined") {
                    afterEach(foreground);
                }
            });
        },
        processFeature: function(feature) {
            if (controller.checkTags(feature)) {
                describe(feature.name, function() {
                    if (typeof feature.beforeEach !== "undefined") {
                        beforeEach(feature.beforeEach);
                    }
                    for (var i in feature.steps) {
                        step = feature.steps[i];
                        args = step[1] || [];
                        fn = step[0];
                        fn.apply(null, args);
                    }
                    if (typeof feature.afterEach !== "undefined") {
                        afterEach(feature.afterEach);
                    } 
                });
            }
        },
        checkTags: function(feature) {
            var check = (
                typeof feature.tags !== "undefined"
                &&
                feature.tags instanceof Array
                &&
                feature.tags.length > 0
                &&
                (
                    typeof _tf_config._cli.tags === "undefined"
                    ||
                    !(_tf_config._cli.tags instanceof Array)
                    ||
                    _tf_config._cli.tags.length === 0
                    ||
                    (_.intersection(_tf_config._cli.tags, feature.tags).length > 0)
                )
                && 
                (
                    typeof _tf_config._cli["@tags"] === "undefined"
                    ||
                    !(_tf_config._cli["@tags"] instanceof Array)
                    ||
                    _tf_config._cli["@tags"].length === 0
                    ||
                    (_.intersection(_tf_config._cli["@tags"], feature.tags).length === 0)
                )
            );
            return check;
        }
    };

module.exports = controller;