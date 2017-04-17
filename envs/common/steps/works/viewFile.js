'use strict';

steps.viewWorkFile = exports;

let page = pages.viewWorkFile;

[
    'Validate file name',
    'Validate total works',
    'Go to tab'
].forEach(desc => addBasicStep(exports, page, desc));

addStepGroup(exports, 'Unconfirmed', g => {
    let gPage = page.unconfirmed;

    [
        'Validate row count',
        'Validate work title',
        'Toggle',
        'Create',
        'Confirmation'
    ].forEach(desc => addBasicStep(g, gPage, desc));
});

addStepGroup(exports, 'Created', g => {
    let gPage = page.created;

    [
        'View created works',
        'View creator contributions and scope delivery'
    ].forEach(desc => addBasicStep(g, gPage, desc));
});

addStepGroup(exports.created, 'Created works view', g => {
    let gPage = page.created.createdWorksView;

    [
        'Validate row count',
        'Validate work title',
        'Validate work ID',
        'Open work'
    ].forEach(desc => addBasicStep(g, gPage, desc));
});
