'use strict';

exports.id = 'd3abf302-cc7c-4539-aeb4-ecd379acca56';

exports.commonFeatureTags = [
    'authSmoke',
    'auth'
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
