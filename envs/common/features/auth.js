"use strict";

exports.commonFeatureTags = ['login', 'broken'];

exports.beforeFeature = [
    [steps.login.itLogin]
];

exports.feature = [
    {
        name: "Verify menu contains Logout option and functionality",
        tags: [],
        steps: [
            [steps.base.itClickOnElement, [pages.base.elems.logout_link, "'Log Out' link"]],
            [steps.base.itCheckIsRedirectToPage, ["logout page", "login"]]
        ]
    }
];