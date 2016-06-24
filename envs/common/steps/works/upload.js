'use strict';

steps.uploadWorks = exports;

let page = pages.uploadWorks;

[
    'Enter file path',
    'Enter source search terms',
    'Select source search result by index',
    'Select format',
    'Select music library',
    'Upload'
].forEach(desc => addBasicStep(exports, page, desc));
