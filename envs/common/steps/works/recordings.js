'use strict';

steps.workRecordings = exports;

exports.validateLibraryNameRec = function(){
    it('Validate Library Name', function () {
        pages.workRecordings.validateLibraryNameRec1;
    });
}




let page = pages.workRecordings;

addBasicStep(exports, page, [
    'Add recordings',
    'Edit',

    'Cancel changes',
    'Save',

    'Validate row count',

    'Focus title field',
    'Select title suggestion by index',

    'Enter title',
    'Find by entered title',
    'Entered title',
    'Validate entered title',
    'Expect empty title field',

    'Find by title',
    'Validate title',

    'Enter artist search terms',
    'Validate entered artist search terms',
    'Expect empty artist search terms field',
    'Select artist search result by index',
    'Create entered artist',

    'Validate artist name',

    'Validate library name',

    'Enter duration',
    'Validate entered duration',
    'Expect empty duration field',
    'Validate duration',

    'Toggle first use flag',
    'Validate first use flag state',

    'Validate remove button state',
    'Hover remove button',
    'Remove',

    'Expanded',
    'Toggle',
    'Toggle Down'
]);

addStepGroup(exports, 'Albums', g => {
    addBasicStep(g, page.albums, [
        'Validate row count',

        'Enter search terms',
        'Validate entered search terms',
        'Expect empty search terms field',
        'Select search result by index',
        'Validate selected album title',

        'Validate album title',

        'Enter track number',
        'Validate entered track number',
        'Expect empty track number field',
        'Validate track number',

        'Remove',

        'Toggle',

        'Open'
    ]);
});

addStepGroup(exports.albums, 'Release', g => {
    addBasicStep(g, page.albums.release, [
        'Validate territory',
        'Validate release date',
        'Validate configuration',
        'Validate label name',
        'Find by catalogue number',
        'Validate catalogue number',
        'Validate license code'
    ]);
});
