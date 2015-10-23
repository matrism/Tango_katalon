"use strict";
var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(steps_path + "login");
require(steps_path + "mainHeader");
    
exports.commonFeatureTags = ['smoke', 'login', 'logout'];

exports.beforeFeature = [
    [steps.login.itLogin]
];

exports.feature = [
    {
        name: "Verify menu contains Logout option and functionality",
        tags: [],
        steps: function() {
            steps.mainHeader.clickOnLogoutLink();
            steps.mainHeader.validateLogoutRedirection();
        }
    }
];
