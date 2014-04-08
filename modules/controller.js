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
        prepareFeatures: function(feature) {
            if (feature instanceof Array) {
                controller.processArrayFeatures(feature);
            } else {
                controller.processFeature(feature);
            }
        },
        readFeatures: function(path) {
            var fs = require('fs'),
                route = fs.realpathSync(path),
                feature,
                files;
        
            files = fs.readdirSync(route);
            for (var i in files) {
                feature = require(route + "/" + files[i]);
                controller.prepareFeatures(feature);
            };
        },
        processArrayFeatures: function(features) {
            for (var i in features) {
                controller.processFeature(features[i]);
            } 
        },
        processFeature: function(feature) {
            if (controller.checkTags(feature)) {
                describe(feature.name, function() {
                    if (typeof feature.beforeEach !== "undefined") {
                        beforeEach(feature.beforeEach);
                    }
                    for (var i in feature.steps) {
                        step = feature.steps[i];
//                        args = step.args || [];
//                        step.fn.apply(null, args);
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