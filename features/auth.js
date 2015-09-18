'use strict';

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
