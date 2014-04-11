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
            var beforeFeature = feature.beforeFeature,
                afterFeature = feature.afterFeature,
                globalBeforeEach = feature.globalBeforeEach,
                globalAfterEach = feature.globalAfterEach,
                features = feature.feature;
            
            if (!(features instanceof Array)) {
                features = [features];
            }
            controller.processArrayFeatures(features, feature_name, beforeFeature, afterFeature, globalBeforeEach, globalAfterEach);
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
        processArrayFeatures: function(features, feature_name, beforeFeature, afterFeature, globalBeforeEach, globalAfterEach) {
            describe(feature_name, function() {
                if (typeof globalBeforeEach !== "undefined") {
                    beforeEach(function() {
                        globalBeforeEach.call(this);
                    });
                }
                if (typeof globalAfterEach !== "undefined") {
                    afterEach(function() {
                        globalAfterEach.call(this);
                    });
                }
                
                for (var i in features) {
                    controller.processFeature(features[i], beforeFeature, afterFeature);
                } 
            });
        },
        processFeature: function(feature, beforeFeature, afterFeature) {
            if (controller.checkTags(feature)) {
                if (typeof beforeFeature !== "undefined") {
                    describe("\n    Before feature", function() {
                        beforeFeature();
                    });
                }
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
                if (typeof afterFeature !== "undefined") {
                    describe("After feature", function() {
                        afterFeature();
                    });
                }
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