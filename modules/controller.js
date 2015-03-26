var _ = require("underscore"),
    feature,
    step,
    args,
    fn,
    controller = {
        process: function() {
            var path_to_features, i = 0, max;
            if (!(_tf_config._cli.tags instanceof Array) && _.isString(_tf_config._cli.tags)) {
                _tf_config._cli.tags = [_tf_config._cli.tags];
            }
            if (!(_tf_config._cli["@tags"] instanceof Array) && _.isString(_tf_config._cli["@tags"])) {
                _tf_config._cli["@tags"] = [_tf_config._cli["@tags"]];
            }

            path_to_features = (typeof _tf_config.path_to_features === "undefined") ? _tf_config._system_.path_to_features : _tf_config.path_to_features;
            if (typeof path_to_features === "string") {
                controller.readFeatures(path_to_features);
            } else if (path_to_features instanceof Array) {
                max = path_to_features.length;
                for (; i < max; i++) {
                    controller.readFeatures(path_to_features[i]);
                }
            }
        },
        prepareFeatures: function(feature, feature_name) {
            var beforeFeature = feature.beforeFeature,
                afterFeature = feature.afterFeature,
                globalBeforeEach = feature.globalBeforeEach,
                globalAfterEach = feature.globalAfterEach,
                features = feature.feature,
                commonFeatureTags = feature.commonFeatureTags || [];

            if (!(features instanceof Array)) {
                features = [features];
            }
            controller.processArrayFeatures(features, feature_name, beforeFeature, afterFeature, globalBeforeEach, globalAfterEach, commonFeatureTags);
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
                if (!files[i].endsWith(".js")) {
                    continue;
                }
                feature = require(route + "/" + files[i]);
                controller.prepareFeatures(feature, controller.stringUCFirst(files[i]));
            };
        },
        processArrayFeatures: function(features, feature_name, beforeFeature, afterFeature, globalBeforeEach, globalAfterEach, commonFeatureTags) {
            describe(feature_name, function() {
                var empty;
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
                    controller.processFeature(features[i], beforeFeature, afterFeature, commonFeatureTags);
                } 
            });
        },
        processFeature: function(feature, beforeFeature, afterFeature, commonFeatureTags) {
            var runContext = {};
            if (controller.checkTags(feature, commonFeatureTags)) {
                describe(feature.name + ". Tags: '" + feature.tags.join("', '") + "'.", function() {
                    if (typeof beforeFeature !== "undefined") {
                        describe("Pre-feature steps: ", function() {
                            var step, args, fn;
                            if(typeof(beforeFeature) === "function") {
                                beforeFeature.call(runContext);
                            }
                            else {
                                for (var i in beforeFeature) {
                                    step = beforeFeature[i];
                                    args = step[1] || [];
                                    fn = step[0];
                                    try {
                                        fn.apply(runContext, args);
                                    } catch(e) {
                                        throw new Error("Could not run step in 'Before feature: " + feature.name + "'. Check step name please. Error: " + e.message);
                                    }
                                }
                            }
                        });
                    }

                    describe("Feature steps:", function() {
                        var step, args, fn;
                        if (typeof feature.beforeEach !== "undefined") {
                            beforeEach(feature.beforeEach);
                        }

                        if (typeof feature.afterEach !== "undefined") {
                            afterEach(feature.afterEach);
                        } 

                        if(typeof(feature.steps) === "function") {
                            feature.steps.call(runContext);
                        }
                        else {
                            for (var i in feature.steps) {
                                step = feature.steps[i];
                                args = step[1] || [];
                                fn = step[0];
                                try {
                                    fn.apply(runContext, args);
                                } catch(e) {
                                    throw new Error("Could not run step in '" + feature.name + "'. Check step name please. Error: " + e.message);
                                }
                            }
                        }
                    });

                    if (typeof afterFeature !== "undefined") {
                        describe("Post-feature steps:", function() {
                            var step, args, fn;
                            if(typeof(afterFeature) === "function") {
                                afterFeature.call(runContext);
                            }
                            else {
                                for (var i in afterFeature) {
                                    step = afterFeature[i];
                                    args = step[1] || [];
                                    fn = step[0];
                                    try {
                                        fn.apply(runContext, args);
                                    } catch(e) {
                                        throw new Error("Could not run step in 'After feature: " + feature.name + "'. Check step name please. Error: " + e.message);
                                    }
                                }
                            }
                        });
                    }
                });
            } else if (typeof process.env.__using_grunt === "undefined" && _tf_config._system_.show_skipped_tests) {
                describe(feature.name + ". Tags: '" + feature.tags.join("', '") + "'.", function() {
                    it("Skipped", function() {});
                });
            }
        },
        checkTags: function(feature, commonFeatureTags) {
            var first_check = (
                    typeof feature !== "undefined"
                    &&    
                    typeof feature.tags !== "undefined" || commonFeatureTags !== "undefined"
                    &&
                    feature.tags instanceof Array || commonFeatureTags instanceof Array
                    &&
                    feature.tags.length > 0 || commonFeatureTags.lenght > 0
                ), tags, check;

                if (typeof feature.tags !== "undefined" && commonFeatureTags !== "undefined") {
                    feature.tags = _.union(feature.tags, commonFeatureTags);
                } else if (typeof commonFeatureTags !== "undefined") {
                    feature.tags = commonFeatureTags;
                }

            if (typeof process.env.__using_grunt !== "undefined") {
                if (_tf_config._cli.tags.indexOf("single_thread_only") < 0) {
                    if (typeof _tf_config._cli["@tags"] === "undefined" || !(_tf_config._cli["@tags"] instanceof Array)) {
                        _tf_config._cli["@tags"] = [];
                    }
                    _tf_config._cli["@tags"].push("single_thread_only");
                }
            }

            check = (
                first_check
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
