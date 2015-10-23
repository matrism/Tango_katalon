"use strict";

require(steps_path + "login");
require(steps_path + "mainHeader");
    
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
