'use strict';

var pageStep = require('../../../../helpers/basicPageStep.js');

steps.manualStatement = exports;

pageStep([
    'Click link',
    ['Form', [
        'Type income provider',
        'Set Statement Distribution Period', 
        'Set statement amount',
        'Set exchange rate',
        'Create manual Statement',
        ]
    ],
    ['View', [
        'Open Statement blind',
        'Expect Statement value to be',
        'Click Back to Statements View link',
        'Click edit button',
        ]
    ],
    ['List', [
        'Open first blind',
        'Click edit button',
        'Expect save button to be disabled',
        'Expect save button to be enabled',
        'Edit field',
        'Click save button',
        'Click Add Batch button',
        ]
    ],
    ['Batches', [
        'Click batches accordion',
        'Select Batch',
        'Click default settings link',
        'Save',
        ['Defaults', [
            'Set income type',
            'Set exploitation territory',
            ]
        ],
        'Enter Batch amount',
        'Use first batch settings',
        'Expect batch defaults to be',
        'Delete active batch',
        'Expect batch to be disabled',
        'Expect batch totals to be',
        ['Works',[
            'Add work by title',
            'Expect number of works to be',
            'Add income line',
            'Edit income line',
            ]
        ],
    ]]
]);
