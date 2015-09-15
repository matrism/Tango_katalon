"use strict";
var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(pages_path + "login");
require(pages_path + "base");
require(steps_path + "login");
require(steps_path + "base");

exports.beforeFeature = [
    [steps.login.itLogin]
];

exports.commonFeatureTags = ['login', 'broken'];

exports.feature = [
    {
        name: "Verify menu contains Logout option and functionality",
        tags: ["smoke"],
        steps: [
            [steps.base.itClickOnElement, ["'Log Out' link", pages.base.elems.logout_link]],
            [steps.base.itCheckIsRedirectToPage, ["logout page", "login"]]
        ]
    }
];