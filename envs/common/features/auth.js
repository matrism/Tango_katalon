'use strict';

exports.commonFeatureTags = [
    'authSmoke',
    'smoke'
];

exports.feature = [
    {
        name: 'Log in and out',

        tags: [],

        steps: function() {
            steps.login.itLogin();
            steps.mainHeader.logout();
            steps.mainHeader.validateLogoutRedirection();
        }
    }
];
