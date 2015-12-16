"use strict";

exports.commonFeatureTags = ['zapiFeature'];


exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'View person test scenario zapi',
        tags: ['person', 'view', 'dataUtilities'],
        steps: function () {
            steps.searchSection.accessSavedPersonByName('katy perry');
            steps.person.validateAlternativeName(0, 'KATY PERRY')
            steps.person.validateAlternativeName(0, 'KATY PERRYijijs')
            steps.person.validateAlternativeName(0, 'KATY PERRYsds')
            steps.person.validateAlternativeName(0, 'KATY PERRYdasssi')
        }
    }
];
