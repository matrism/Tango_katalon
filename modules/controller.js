var _ = require("underscore"),
    feature,
    step,
    args,
    controller = {
        process: function(array) {
            if (!(array instanceof Array) || array.length < 1) {
                throw (new Error("Incorrect features number"));
            }

            for(var i in array) {
                feature = require("../../../new_tests/features/"+array[i]);
                controller.processFeature(feature);
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
                    feature.tags.tags instanceof Array
                    &&
                    feature.tags > 0
                    &&
                    _.intersection(_tf_config._cli.tags,feature.tags).length > 0)
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