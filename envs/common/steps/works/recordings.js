'use strict';

steps.workRecordings = exports;

let page = pages.workRecordings;

addBasicStep(exports, page, [
    'Validate row count',

    'Focus title field',
    'Select title suggestion by index',

    'Enter title',
    'Find by entered title',
    'Entered title',
    'Validate entered title',

    'Find by title',
    'Validate title',

    'Enter artist search terms',
    'Validate entered artist search terms',
    'Select artist search result by index',
    'Create entered artist',

    'Validate artist name',

    'Validate library name',

    'Enter duration',
    'Validate entered duration',
    'Validate duration',

    'Toggle first use flag',
    'Validate first use flag state',

    'Validate remove button state',
    'Hover remove button',
    'Remove',

    'Expanded',
    'Toggle'
]);

addStepGroup(exports, 'Albums', g => {
    addBasicStep(exports, page.albums, [
        'Enter search terms',
        'Validate entered search terms',
        'Select search result by index',
        'Validate selected album title',

        'Validate album title',

        'Enter track number',
        'Validate entered track number',

        'Remove',

        'Toggle'
    ]);
});

addStepGroup(exports.albums, 'Release', g => {
    addBasicStep(exports, page.albums.release, [
        'Validate territory',
        'Validate release date',
        'Validate configuration',
        'Validate label name',
        'Validate catalogue number',
        'Validate license code'
    ]);
});
