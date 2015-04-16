var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(pages_path + "new_deal");
require(steps_path + "new_deal");

var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [{
        name: "Create basic deal",
        tags: [],
        steps: function () {
            steps.new_deal.itCreateBasicDeal();
        }
    }];

module.exports = {
    commonFeatureTags: ["deal"],
    feature: feature,
    beforeFeature: beforeFeature
};