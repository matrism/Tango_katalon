'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    random = require('../helpers/random'),
    randomId = random.id.makeMemoizedGenerator(),
    baseWorksData,
    searchDataByExactTitleMatch,
    searchDataByPartialTitleMatch,
    searchDataByCreatorMatch1,
    searchDataByCreatorMatch2,
    searchDataByExactTitleAndCreator;

require(steps_path + 'login');
require(steps_path + 'new_work');

//randomId = function() {
    //return '3351435348937238';
//};

hash.subjectWorkData = {};

baseWorksData = [
    {
        primaryTitle: randomId(0) + 'DIAMONDS IN THE SKY',
        creators: [
            {
                firstName: randomId(0) + 'FILIP',
                lastName: randomId(0) + 'ALISON',
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'DIAMONDS IN THE SKY',
        creators: [
            {
                firstName: randomId(0) + 'ALBERT',
                lastName: randomId(0) + 'KENNEDY',
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'DIAMONDS IN THE SKY',
        creators: [
            {
                firstName: randomId(0) + 'ALEX',
                lastName: randomId(0) + 'MACKINTOSH',
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'DIAMONDS IN THE SKY',
        creators: [
            {
                firstName: randomId(0) + 'JEREMY',
                lastName: randomId(0) + 'BLIETZ',
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
                        lastName: randomId(0) + '(MCGREGOR',
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
                lastName: randomId(0) + 'KENNEDY',
            },
            {
                firstName: randomId(0) + 'BUDDY',
                lastName: randomId(0) + 'JOHNSON',
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'DIAMONDS IN THE SKY',
        creators: [
            {
                firstName: randomId(0) + 'MAX',
                lastName: randomId(0) + 'WALKER',
            },
            {
                firstName: randomId(0) + 'RONALD',
                lastName: randomId(0) + 'KENNEDY-MCDONALD',
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
                lastName: randomId(0) + 'BONDI',
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
                lastName: randomId(0) + 'KENNEDY',
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'OH GOD',
        alternateTitles: [
            randomId(0) + 'OH DIAMONDS IN THE SKY',
        ],
        creators: [
            {
                firstName: randomId(0) + 'VINCE',
                lastName: randomId(0) + 'CLARKE',
            },
            {
                firstName: randomId(0) + 'ANDY',
                lastName: randomId(0) + 'BELL',
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'DIAMONDS IN THE SKY BABY',
        creators: [
            {
                firstName: randomId(0) + 'FRED',
                lastName: randomId(0) + 'KENNEDY',
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'SADNESS',
        alternateTitles: [
            randomId(0) + '(DIAMONDS IN THE SKY) SADNESS',
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
                        lastName: randomId(0) + '(GIDDY',
                    },
                ],
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'DO YOU KNOW DIAMONDS IN THE SKY',
        creators: [
            {
                firstName: randomId(0) + 'KANYE',
                lastName: randomId(0) + 'WEST',
            },
            {
                firstName: randomId(0) + 'SIMON',
                lastName: randomId(0) + 'KENNEDY',
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'TERE ARE IN THE SKY DIAMONDS',
        creators: [
            {
                firstName: randomId(0) + 'FRED',
                lastName: randomId(0) + 'KENNEDY',
            },
        ],
    },
    {
        primaryTitle: randomId(0) + 'SUNDAY MORNING',
        creators: [
            {
                firstName: randomId(0) + 'ELIZABETH',
                lastName: randomId(0) + 'KENNEDY',
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
                        lastName: randomId(0) + '(TABERNER',
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

searchDataByExactTitleMatch = [
    {
        terms: randomId(0) + 'DIAMONDS IN THE SKY',
        expectedMatches: [
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'ALISON, ' + randomId(0) + 'FILIP',
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'BLIETZ, ' + randomId(0) + 'JEREMY',
                ],
            },
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
                    randomId(0) + 'MACKINTOSH, ' + randomId(0) + 'ALEX',
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

searchDataByPartialTitleMatch = [
    {
        terms: randomId(0) + 'DIAMONDS IN THE SKY',
        expectedMatches: [
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'ALISON, ' + randomId(0) + 'FILIP',
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'BLIETZ, ' + randomId(0) + 'JEREMY',
                ],
            },
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
                    randomId(0) + 'MACKINTOSH, ' + randomId(0) + 'ALEX',
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
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY BABY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'FRED',
                ],
            },
            {
                title: randomId(0) + 'DO YOU KNOW DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'WEST, ' + randomId(0) + 'KANYE',
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'SIMON',
                ],
            },
            {
                title: randomId(0) + 'SADNESS',
                alternateTitle: '(DIAMONDS IN THE SKY) SADNESS',
                creators: [
                    randomId(0) + 'GIDDY, ' + randomId(0) + 'ROMEO2',
                ],
            },
            {
                title: randomId(0) + 'OH GOD',
                alternateTitle: 'OH DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'CLARKE, ' + randomId(0) + 'VINCE',
                    randomId(0) + 'BELL, ' + randomId(0) + 'ANDY',
                ],
            },
        ],
    },
];

searchDataByCreatorMatch1 = [
    {
        terms: randomId(0) + 'KENNEDY',
        expectedMatches: [
            {
                title: randomId(0) + 'CRIMINAL',
                alternateTitle: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'LUCY',
                ],
            },
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
                    randomId(0) + 'WALKER, ' + randomId(0) + 'MAX',
                    randomId(0) + 'KENNEDY-MCDONALD, ' + randomId(0) + 'RONALD',
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY BABY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'FRED',
                ],
            },
            {
                title: randomId(0) + 'DO YOU KNOW DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'WEST, ' + randomId(0) + 'KANYE',
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'SIMON',
                ],
            },
            {
                title: randomId(0) + 'SUNDAY MORNING',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'ELIZABETH',
                ],
            },
            {
                title: randomId(0) + 'TERE ARE IN THE SKY DIAMONDS',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'FRED',
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'MCGREGOR, ' + randomId(0) + 'DANNY2',
                ],
            },
            {
                title: randomId(0) + 'SADNESS',
                alternateTitle: randomId(0) + '(DIAMONDS IN THE SKY) SADNESS',
                creators: [
                    randomId(0) + 'GIDDY, ' + randomId(0) + 'ROMEO2',
                ],
            },
            {
                title: randomId(0) + 'WINTER IS COMING',
                creators: [
                    randomId(0) + 'TABERNER, ' + randomId(0) + 'ELIZABETH2',
                ],
            },
        ],
    },
];

searchDataByCreatorMatch2 = [
    {
        terms: randomId(0) + 'FRED ' + randomId(0) + 'KENNEDY',
        expectedMatches: [
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY BABY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'FRED',
                ],
            },
            {
                title: randomId(0) + 'TERE ARE IN THE SKY DIAMONDS',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'FRED',
                ],
            },
       ],
    },
];

searchDataByExactTitleAndCreator = [
    {
        titleTerms: randomId(0) + 'DIAMONDS IN THE SKY',
        creatorTerms: randomId(0) + 'KENNEDY',
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
                    randomId(0) + 'WALKER, ' + randomId(0) + 'MAX',
                    randomId(0) + 'KENNEDY-MCDONALD, ' + randomId(0) + 'RONALD',
                ],
            },
            {
                title: randomId(0) + 'CRIMINAL',
                alternateTitle: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'KENNEDY, ' + randomId(0) + 'LUCY',
                ],
            },
            {
                title: randomId(0) + 'DIAMONDS IN THE SKY',
                creators: [
                    randomId(0) + 'MCGREGOR, ' + randomId(0) + 'DANNY2',
                ],
            },
       ],
    },
];

var beforeFeature = [
        [steps.login.itLogin],
        [function() {
            baseWorksData.forEach(function(workData, i) {
                var evenCreatorContribution = 100 / workData.creators.length;

                workData.creators.forEach(function(creatorData, j) {
                    steps.person.useBlankPersonSlot(j);

                    steps.newPerson.goToNewPersonPage();

                    if(creatorData.firstName) {
                        creatorData.firstName = creatorData.firstName;
                        steps.newPerson.enterFirstName(creatorData.firstName);
                    }

                    if(creatorData.lastName) {
                        creatorData.lastName = creatorData.lastName;
                        steps.newPerson.enterLastName(creatorData.lastName);
                    }

                    if(creatorData.presentationName) {
                        creatorData.presentationName = creatorData.presentationName;
                        steps.newPerson.enterPresentationName(creatorData.presentationName);
                    }

                    if(creatorData.alternativeNames) {
                        creatorData.alternativeNames.forEach(function(alternative, k) {
                            steps.newPerson.addAlternativeName();

                            if(alternative.firstName) {
                                alternative.firstName = alternative.firstName;
                                steps.newPerson.enterAlternativeFirstName(k, alternative.firstName);
                            }

                            if(alternative.lastName) {
                                alternative.lastName = alternative.lastName;
                                steps.newPerson.enterAlternativeLastName(k, alternative.lastName);
                            }
                        });
                    }

                    steps.newPerson.enterAffiliatedSocietySearchTerms('ASCAP');
                    steps.newPerson.selectAffiliatedSocietySearchResultByIndex(0);

                    steps.newPerson.save();
                    steps.newPerson.validateSaveRedirection();

                    steps.person.findInternalIpiNumber();
                });

                steps.new_work.goToNewWorkPage();

                steps.new_work.enterPrimaryWorkTitle(workData.primaryTitle);

                if(workData.alternateTitles) {
                    workData.alternateTitles.forEach(function(value, j) {
                        steps.new_work.enterAlternateWorkTitle(j, value);
                    });
                }

                workData.creators.forEach(function(unused, j) {
                    steps.new_work.selectCreatorFromPersonSlot(j, j);
                    steps.new_work.enterCreatorContribution(j, evenCreatorContribution);
                });

                steps.new_work.optToIncludeWorkOnWebsite(false);

                steps.new_work.saveWork();
                steps.new_work.validateSaveWorkRedirection();
            });
        }],
    ],
    feature = [
        {
            name: 'Search by work title (exact match)',
            tags: [],
            steps: [
                [function() {
                    searchDataByExactTitleMatch.forEach(function(searchData) {
                        steps.base.goToHomePage();
                        steps.work.selectWorkSearchTagFilter(0, 'Title');
                        steps.work.enterWorkSearchTerms('"' + searchData.terms + '"');
                        steps.base.waitForAjax();
                        searchData.expectedMatches.forEach(function(expectedMatch, i) {
                            steps.work.expectWorkSearchMatchTitleToBe(i, expectedMatch.title);
                            if(expectedMatch.alternateTitle) {
                                steps.work.expectWorkSearchMatchAlternateTitleToBe(
                                    i, expectedMatch.alternateTitle
                                );
                            }
                            expectedMatch.creators.forEach(function(creatorName) {
                                steps.work.expectWorkSearchMatchCreatorListToContain(i, creatorName);
                            });
                        });
                    });
                }],
            ],
        },
        {
            name: 'Search by work title (partial match)',
            tags: [],
            steps: [
                [function() {
                    searchDataByPartialTitleMatch.forEach(function(searchData) {
                        steps.base.goToHomePage();
                        steps.work.selectWorkSearchTagFilter(0, 'Title');
                        steps.work.enterWorkSearchTerms(searchData.terms);
                        steps.base.waitForAjax();
                        searchData.expectedMatches.forEach(function(expectedMatch, i) {
                            steps.work.expectWorkSearchMatchTitleToBe(i, expectedMatch.title);
                            if(expectedMatch.alternateTitle) {
                                steps.work.expectWorkSearchMatchAlternateTitleToBe(
                                    i, expectedMatch.alternateTitle
                                );
                            }
                            expectedMatch.creators.forEach(function(creatorName) {
                                steps.work.expectWorkSearchMatchCreatorListToContain(i, creatorName);
                            });
                        });
                    });
                }],
            ],
        },
        {
            name: 'Search by creator #1',
            tags: [],
            steps: [
                [function() {
                    searchDataByCreatorMatch1.forEach(function(searchData) {
                        steps.base.goToHomePage();
                        steps.work.selectWorkSearchTagFilter(0, 'Creator');
                        steps.work.enterWorkSearchTerms(searchData.terms);
                        steps.base.waitForAjax();
                        searchData.expectedMatches.forEach(function(expectedMatch, i) {
                            steps.work.expectWorkSearchMatchTitleToBe(i, expectedMatch.title);
                            if(expectedMatch.alternateTitle) {
                                steps.work.expectWorkSearchMatchAlternateTitleToBe(
                                    i, expectedMatch.alternateTitle
                                );
                            }
                            expectedMatch.creators.forEach(function(creatorName) {
                                steps.work.expectWorkSearchMatchCreatorListToContain(i, creatorName);
                            });
                        });
                    });
                }],
            ],
        },
        {
            name: 'Search by creator #2',
            tags: [],
            steps: [
                [function() {
                    searchDataByCreatorMatch2.forEach(function(searchData) {
                        steps.base.goToHomePage();
                        steps.work.selectWorkSearchTagFilter(0, 'Creator');
                        steps.work.enterWorkSearchTerms(searchData.terms);
                        steps.base.waitForAjax();
                        searchData.expectedMatches.forEach(function(expectedMatch, i) {
                            steps.work.expectWorkSearchMatchTitleToBe(i, expectedMatch.title);
                            if(expectedMatch.alternateTitle) {
                                steps.work.expectWorkSearchMatchAlternateTitleToBe(
                                    i, expectedMatch.alternateTitle
                                );
                            }
                            expectedMatch.creators.forEach(function(creatorName) {
                                steps.work.expectWorkSearchMatchCreatorListToContain(i, creatorName);
                            });
                        });
                    });
                }],
            ],
        },
        {
            name: 'Search by exact title + creator',
            tags: [],
            steps: [
                [function() {
                    searchDataByExactTitleAndCreator.forEach(function(searchData) {
                        steps.base.goToHomePage();
                        steps.work.selectWorkSearchTagFilter(0, 'Title');
                        steps.work.enterWorkSearchTerms('"' + searchData.titleTerms + '"');
                        steps.base.waitForAjax();
                        steps.work.addAnotherWorkSearchTerm();
                        steps.work.selectWorkSearchTagFilter(1, 'Creator');
                        steps.work.enterWorkSearchTerms(searchData.creatorTerms);
                        steps.base.waitForAjax();
                        searchData.expectedMatches.forEach(function(expectedMatch, i) {
                            steps.work.expectWorkSearchMatchTitleToBe(i, expectedMatch.title);
                            if(expectedMatch.alternateTitle) {
                                steps.work.expectWorkSearchMatchAlternateTitleToBe(
                                    i, expectedMatch.alternateTitle
                                );
                            }
                            expectedMatch.creators.forEach(function(creatorName) {
                                steps.work.expectWorkSearchMatchCreatorListToContain(i, creatorName);
                            });
                        });
                    });
                }],
            ],
        },
    ];

module.exports = {
    commonFeatureTags: ['ranked-work-search-results'],
    feature: feature,
    beforeFeature: beforeFeature
};
