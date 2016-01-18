'use strict';

exports.commonFeatureTags = [
    'broken',
    'authSmoke',
    'smoke'
];

exports.feature = [
    {
        name: 'Log in and out',

        breakageDescription: (
            'Error on last step (angular is not defined) crashes Protractor.'
        ),

        tags: [],

        steps: function() {
            steps.login.itLogin();
            steps.mainHeader.logout();
            steps.mainHeader.validateLogoutRedirection();
        }
    }
];
