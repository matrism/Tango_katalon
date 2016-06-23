'use strict';

steps.worksUploadHistory = exports;

let page = pages.worksUploadHistory;

[
    'Upload works',
    'Wait until file name is staged',
    'Find row by file name',
    'Validate unconfirmed count',
    'Validate open count',
    'Validate created count',
    'Validate upload date',
    'Validate source',
    'Validate file name',
    'View file'
].forEach(desc => addBasicStep(exports, page, desc));
