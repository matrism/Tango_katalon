'use strict';

var name = 'dealSocietyAgreementNumbers',

    page = pages[name];

steps[name] = exports;

addStepGroup(exports, 'Creator-To-Publisher', function (group) {
    var ctp = page.creatorToPublisher;

    addBasicStep(group, ctp, [
        'Enter creator search terms',
        'Select creator search result by display name',

        'Enter Society Agreement Number',

        'Enter society search terms',
        'Select society search result by name',

        'Validate creator name',
        'Validate society agreement number',
        'Validate society name'
    ]);
});

addBasicStep(exports, page, 'Save');
