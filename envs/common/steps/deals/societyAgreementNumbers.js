'use strict';

var name = 'dealSocietyAgreementNumbers',

    page = pages[name];

steps[name] = exports;

addStepGroup(exports, 'Creator-To-Publisher', function (group) {
    var ctp = page.creatorToPublisher;

    addBasicStep(group, ctp, [
        'Validate form heading',

        'Focus',

        'Find creator row',

        'Enter creator search terms',
        'Expect no creator search results',
        'Select creator search result by display name',

        'Validate creator search terms field state',

        'Enter society agreement number',

        'Enter society search terms',
        'Select society search result by name',
        'Expect society search result to be disallowed',

        'Validate Add Creator link state',
        'Add creator',

        'Validate creator row count',

        'Find creator set',

        'Validate society agreement number row count',
        'Validate society agreement number field state',
        'Validate society agreement number',

        'Validate society name',
        'Validate society field state',

        'Validate form state',

        'Click creator search terms field',

        'Delete creator',
        'Delete society agreement number',

        'Validate form header tooltip'
    ]);
});

addStepGroup(exports, 'Publisher', function (group) {
    var p = page.publisher;

    addBasicStep(group, p, [
        'Validate form heading',

        'Enter society agreement number',

        'Enter society search terms',
        'Expect no society search results',
        'Select society search result by name',

        'Validate society agreement number row count',
        'Validate society agreement number field state',
        'Validate society agreement number',

        'Validate society name',
        'Validate society field state',

        'Validate form state',

        'Click society agreement number field',

        'Delete society agreement number',

        'Validate form header tooltip'
    ]);
});

addBasicStep(exports, page, 'Validate modal header tooltip');

addBasicStep(exports, page, 'Validate save button state');

addBasicStep(exports, page, 'Save');
