'use strict';

var random = require('../../../../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

exports.baseWorksData = [
    {
        primaryTitle: randomId(0) + 'DIAMONDS IN THE SKY',
        creators: [
            {
                firstName: randomId(0) + 'ALBERT',
                lastName: randomId(0) + 'KENNEDY'
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'DIAMONDS IN THE SKY',
        creators: [
            {
                firstName: randomId(0) + 'DANNY2',
                lastName: randomId(0) + 'MCGREGOR',
                alternativeNames: [
                    {
                        firstName: (
                            randomId(0) + 'DANNY AKA:) ' +
                            randomId(0) + 'KENNEDY, ' +
                            randomId(0) + 'BOB'
                        ),
                        lastName: randomId(0) + '(MCGREGOR'
                    },
                ],
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'DIAMONDS IN THE SKY',
        creators: [
            {
                firstName: randomId(0) + 'BRIAN',
                lastName: randomId(0) + 'KENNEDY'
            },
            {
                firstName: randomId(0) + 'BUDDY',
                lastName: randomId(0) + 'JOHNSON'
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'DIAMONDS IN THE SKY',
        creators: [
            {
                firstName: randomId(0) + 'MAX',
                lastName: randomId(0) + 'WALKER'
            },
            {
                firstName: randomId(0) + 'RONALD',
                lastName: randomId(0) + 'KENNEDY-MCDONALD'
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'CRIMINAL',
        alternateTitles: [
            randomId(0) + 'DIAMONDS IN THE SKY',
        ],
        creators: [
            {
                firstName: randomId(0) + 'GUISEPPE',
                lastName: randomId(0) + 'BONDI'
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'CRIMINAL',
        alternateTitles: [
            randomId(0) + 'DIAMONDS IN THE SKY',
        ],
        creators: [
            {
                firstName: randomId(0) + 'LUCY',
                lastName: randomId(0) + 'KENNEDY'
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'OH GOD',
        alternateTitles: [
            randomId(0) + 'OH ' + randomId(0) + 'DIAMONDS IN THE SKY',
        ],
        creators: [
            {
                firstName: randomId(0) + 'VINCE',
                lastName: randomId(0) + 'CLARKE'
            },
            {
                firstName: randomId(0) + 'ANDY',
                lastName: randomId(0) + 'BELL'
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'DIAMONDS IN THE SKY BABY',
        creators: [
            {
                firstName: randomId(0) + 'FRED',
                lastName: randomId(0) + 'KENNEDY'
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'SADNESS',
        alternateTitles: [
            '(' + randomId(0) + 'DIAMONDS IN THE SKY) SADNESS'
        ],
        creators: [
            {
                firstName: randomId(0) + 'ROMEO2',
                lastName: randomId(0) + 'GIDDY',
                alternativeNames: [
                    {
                        firstName: (
                            randomId(0) + 'ROMEO AKA:) ' +
                            randomId(0) + 'KENNEDY, ' +
                            randomId(0) + 'LUCAS'
                        ),
                        lastName: randomId(0) + '(GIDDY'
                    },
                ],
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'DO YOU KNOW ' + randomId(0) + 'DIAMONDS IN THE SKY',
        creators: [
            {
                firstName: randomId(0) + 'KANYE',
                lastName: randomId(0) + 'WEST'
            },
            {
                firstName: randomId(0) + 'SIMON',
                lastName: randomId(0) + 'KENNEDY'
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'TERE ARE IN THE SKY ' + randomId(0) + 'DIAMONDS',
        creators: [
            {
                firstName: randomId(0) + 'FRED',
                lastName: randomId(0) + 'KENNEDY'
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'SUNDAY MORNING',
        creators: [
            {
                firstName: randomId(0) + 'ELIZABETH',
                lastName: randomId(0) + 'KENNEDY'
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'WINTER IS COMING',
        creators: [
            {
                firstName: randomId(0) + 'ELIZABETH2',
                lastName: randomId(0) + 'TABERNER',
                alternativeNames: [
                    {
                        firstName: (
                            randomId(0) + 'ELIZABETH AKA:) ' +
                            randomId(0) + 'KENNEDY, ' +
                            randomId(0) + 'LIZ'
                        ),
                        lastName: randomId(0) + '(TABERNER'
                    },
                ],
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'BLACK PANTS',
        creators: [
            {
                lastName: randomId(0) + 'UNUSEDREQUIREDFIELD',
                presentationName: (
                    randomId(0) + 'THE ' +
                    randomId(0) + 'BLACKENNEDY'
                ),
                alternativeNames: [
                    {
                        firstName: randomId(0) + 'LUKE2',
                        lastName: (
                            randomId(0) + '(THE ' +
                            randomId(0) + 'BLACKSMITH AKA:) ' +
                            randomId(0) + 'PARK'
                        ),
                    },
                ],
            },
        ],
    },
];

exports.searchDataByExactTitleMatch = [
    {
        terms: randomId(0) + 'DIAMONDS IN THE SKY',
        expectedMatches: [
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'ALBERT',
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'BRIAN',
                    randomId(0) + 'JOHNSON, ' + randomId(0) + 'BUDDY',
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'MCGREGOR, ' + randomId(0) + 'DANNY2',
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'WALKER, ' + randomId(0) + 'MAX',
                    randomId(0) + 'KENNEDY-MCDONALD, ' + randomId(0) + 'RONALD',
                ],
            },
            {
                title: randomId(0) + 'CRIMINAL',
                alternateTitle: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'BONDI, ' + randomId(0) + 'GUISEPPE',
                ],
            },
            {
                title: randomId(0) + 'CRIMINAL',
                alternateTitle: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'LUCY',
                ],
            },
        ],
    },
];

exports.searchDataByPartialTitleMatch = [
    {
        terms: randomId(0) + 'DIAMONDS IN THE SKY',
        expectedMatches: [
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'ALBERT'
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'BRIAN',
                    randomId(0) + 'JOHNSON, ' + randomId(0) + 'BUDDY'
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'MCGREGOR, ' + randomId(0) + 'DANNY2'
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'WALKER, ' + randomId(0) + 'MAX',
                    randomId(0) + 'KENNEDY-MCDONALD, ' + randomId(0) + 'RONALD'
                ],
            },
            {
                title: randomId(0) + 'CRIMINAL',
                alternateTitle: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'BONDI, ' + randomId(0) + 'GUISEPPE'
                ],
            },
            {
                title: randomId(0) + 'CRIMINAL',
                alternateTitle: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'LUCY'
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY BABY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'FRED'
                ],
            },
            {
                title: randomId(0) + 'DO YOU KNOW ' + randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'WEST, ' + randomId(0) + 'KANYE',
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'SIMON'
                ],
            },
            {
                title: randomId(0) + 'SADNESS',
                alternateTitle: '(' + randomId(0) + 'DIAMONDS IN THE SKY) SADNESS',
                creators: [
                    randomId(0) + 'GIDDY, ' + randomId(0) + 'ROMEO2'
                ],
            },
            {
                title: randomId(0) + 'OH GOD',
                alternateTitle: randomId(0) + 'OH ' + randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'CLARKE, ' + randomId(0) + 'VINCE',
                    randomId(0) + 'BELL, ' + randomId(0) + 'ANDY'
                ],
            },
        ],
    },
];

exports.searchDataByCreatorMatch1 = [
    {
        terms: randomId(0) + 'KENNEDY',
        expectedMatches: [
            {
                title: randomId(0) + 'CRIMINAL',
                alternateTitle: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'LUCY'
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'ALBERT'
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'BRIAN',
                    randomId(0) + 'JOHNSON, ' + randomId(0) + 'BUDDY'
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'WALKER, ' + randomId(0) + 'MAX',
                    randomId(0) + 'KENNEDY-MCDONALD, ' + randomId(0) + 'RONALD'
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY BABY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'FRED'
                ],
            },
            {
                title: randomId(0) + 'DO YOU KNOW ' + randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'WEST, ' + randomId(0) + 'KANYE',
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'SIMON'
                ],
            },
            {
                title: randomId(0) + 'SUNDAY MORNING',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'ELIZABETH'
                ],
            },
            {
                title: randomId(0) + 'TERE ARE IN THE SKY ' + randomId(0) + 'DIAMONDS',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'FRED'
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'MCGREGOR, ' + randomId(0) + 'DANNY2'
                ],
            },
            {
                title: randomId(0) + 'SADNESS',
                alternateTitle: '(' + randomId(0) + 'DIAMONDS IN THE SKY) SADNESS',
                creators: [
                    randomId(0) + 'GIDDY, ' + randomId(0) + 'ROMEO2'
                ],
            },
        ],
    },
];

exports.searchDataByCreatorMatch2 = [
    {
        terms: randomId(0) + 'FRED ' + randomId(0) + 'KENNEDY',
        expectedMatches: [
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY BABY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'FRED'
                ],
            },
            {
                title: randomId(0) + 'TERE ARE IN THE SKY ' + randomId(0) + 'DIAMONDS',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'FRED'
                ],
            },
        ],
    },
];

exports.searchDataByExactTitleAndCreator = [
    {
        titleTerms: randomId(0) + 'DIAMONDS IN THE SKY',
        creatorTerms: randomId(0) + 'KENNEDY',
        expectedMatches: [
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'ALBERT'
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'BRIAN',
                    randomId(0) + 'JOHNSON, ' + randomId(0) + 'BUDDY'
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'WALKER, ' + randomId(0) + 'MAX',
                    randomId(0) + 'KENNEDY-MCDONALD, ' + randomId(0) + 'RONALD'
                ],
            },
            {
                title: randomId(0) + 'CRIMINAL',
                alternateTitle: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'LUCY'
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'MCGREGOR, ' + randomId(0) + 'DANNY2'
                ],
            },
        ],
    },
];

exports.searchDataByPartialTitleAndCreator = [
    {
        titleTerms: randomId(0) + 'DIAMONDS IN THE SKY',
        creatorTerms: randomId(0) + 'KENNEDY',
        expectedMatches: [
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'ALBERT'
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'BRIAN',
                    randomId(0) + 'JOHNSON, ' + randomId(0) + 'BUDDY'
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'WALKER, ' + randomId(0) + 'MAX',
                    randomId(0) + 'KENNEDY-MCDONALD, ' + randomId(0) + 'RONALD'
                ],
            },
            {
                title: randomId(0) + 'CRIMINAL',
                alternateTitle: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'LUCY'
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'MCGREGOR, ' + randomId(0) + 'DANNY2'
                ],
            },
        ],
    },
];