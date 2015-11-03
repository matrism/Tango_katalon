"use strict";

exports.commonFeatureTags = ['smoke', 'login', 'logout'];

exports.feature = [
    {
        name: "Log in and out",
        tags: [],
        steps: function() {
            steps.login.itLogin();
            steps.mainHeader.logout();
            steps.mainHeader.validateLogoutRedirection();
        }
    }
];
