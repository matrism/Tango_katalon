var _ = require("underscore"),
    feature,
    step,
    args,
    controller = {
        process: function(array) {
            if (!(array instanceof Array) || array.length < 1) {
                throw (new Error("Incorrect features number"));
            }
            if (!(_tf_config._cli.tags instanceof Array) && _.isString(_tf_config._cli.tags)) {
                _tf_config._cli.tags = [_tf_config._cli.tags];
            }
            for(var i in array) {
                feature = require("../../../new_tests/features/"+array[i]);
                if (feature instanceof Array) {
                    controller.processArrayFeatures(feature);
                } else {
                    controller.processFeature(feature);
                }
            }
        },
        processArrayFeatures: function(features) {
            for (var i in features) {
                controller.processFeature(features[i]);
            } 
        },
        processFeature: function(feature) {
            if (
                    typeof _tf_config._cli.tags === undefined
                    ||
                    !(_tf_config._cli.tags instanceof Array)
                    ||
                    _tf_config._cli.tags.length === 0
                    ||
                    (typeof feature.tags !== undefined
                    &&
                    feature.tags instanceof Array
                    &&
                    feature.tags.length > 0
                    &&
                    _.intersection(_tf_config._cli.tags, feature.tags).length > 0)
            ) {
                describe(feature.name, function() {
                    if (typeof feature.beforeEach !== "undefined") {
                        beforeEach(feature.beforeEach);
                    }
                    for (var i in feature.steps) {
                        step = feature.steps[i];
                        args = step.args || [];
                        step.fn.apply(null, args);
                    }
                    if (typeof feature.afterEach !== "undefined") {
                        afterEach(feature.afterEach);
                    } 
                });
            }
        }
    };

module.exports = controller;