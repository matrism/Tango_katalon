'use strict';

var data = require('./data/rankedWorkSearchResults.js');

exports.id = 'f9781142-3554-42bb-a9dd-e390049edb6f';

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.commonFeatureTags = [
    'rankedWorkSearchResultsRegression',
    'worksSearch',
    'works',
    'regression'
];

exports.feature = [
    {
        name: 'Create test data',
        tags: [],
        steps: function () {
            executeLegacyStepsArray([
            [function () {
                data.baseWorksData.forEach(function (workData, i) {
                    var evenCreatorContribution = 100 / workData.creators.length;

                    workData.creators.forEach(function (creatorData, j) {
                        steps.person.useBlankPersonSlot(j);

                        steps.newPerson.goToNewPersonPage();

                        if (creatorData.firstName) {
                            creatorData.firstName = creatorData.firstName;
                            steps.newPerson.enterFirstName(creatorData.firstName);
                        }

                        if (creatorData.lastName) {
                            creatorData.lastName = creatorData.lastName;
                            steps.newPerson.enterLastName(creatorData.lastName);
                        }

                        if (creatorData.presentationName) {
                            creatorData.presentationName = creatorData.presentationName;
                            steps.newPerson.enterPresentationName(creatorData.presentationName);
                        }

                        if (creatorData.alternativeNames) {
                            creatorData.alternativeNames.forEach(function (alternative, k) {
                                steps.newPerson.addAlternativeName();

                                if (alternative.firstName) {
                                    alternative.firstName = alternative.firstName;
                                    steps.newPerson.enterAlternativeFirstName(k, alternative.firstName);
                                }

                                if (alternative.lastName) {
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

                    steps.base.useBlankEntityDataSlot('work', i);

                    steps.newWork.goToNewWorkPage();

                    steps.newWork.enterPrimaryWorkTitle(workData.primaryTitle);

                    if (workData.alternateTitles) {
                        workData.alternateTitles.forEach(function (value, j) {
                            steps.newWork.enterAlternateWorkTitle(j, value);
                        });
                    }

                    workData.creators.forEach(function (unused, j) {
                        steps.newWork.selectCreatorFromPersonSlot(j, j);
                        steps.newWork.enterCreatorContribution(j, evenCreatorContribution);
                    });

                    steps.newWork.optToIncludeWorkOnWebsite(false);

                    steps.newWork.saveWork();
                    steps.newWork.validateSaveWorkRedirection();
                });
            }],
            ]);
        }
    },
    {
        name: 'Search by work title (exact match)',
        tags: [],
        steps: function () {
            executeLegacyStepsArray([
            [function () {
                data.searchDataByExactTitleMatch.forEach(function (searchData) {
                    steps.base.goToHomePage();
                    steps.mainHeader.search.selectEntityType('Works');
                    steps.work.selectWorkSearchFilterTag(0, 'Title');
                    steps.work.enterWorkSearchTerms('"' + searchData.terms + '"');
                    steps.work.waitForWorkSearchResultToBeDisplayed();
                    searchData.expectedMatches.forEach(function (expectedMatch, i) {
                        steps.work.expectWorkSearchMatchTitleToBe(i, expectedMatch.title);
                        if (expectedMatch.alternateTitle) {
                            steps.work.expectWorkSearchMatchAlternateTitleToBe(
                                i, expectedMatch.alternateTitle
                            );
                        }
                        expectedMatch.creators.forEach(function (creatorName) {
                            steps.work.expectWorkSearchMatchCreatorListToContain(i, creatorName);
                        });
                    });
                });
            }],
            ]);
        }
    },
    {
        name: 'Search by work title (partial match)',
        tags: [],
        steps: function () {
            executeLegacyStepsArray([
            [function () {
                data.searchDataByPartialTitleMatch.forEach(function (searchData) {
                    steps.base.goToHomePage();
                    steps.mainHeader.search.selectEntityType('Works');
                    steps.work.selectWorkSearchFilterTag(0, 'Title');
                    steps.work.enterWorkSearchTerms(searchData.terms);
                    steps.work.waitForWorkSearchResultToBeDisplayed();
                    searchData.expectedMatches.forEach(function (expectedMatch, i) {
                        steps.work.expectWorkSearchMatchTitleToBe(i, expectedMatch.title);
                        if (expectedMatch.alternateTitle) {
                            steps.work.expectWorkSearchMatchAlternateTitleToBe(
                                i, expectedMatch.alternateTitle
                            );
                        }
                        expectedMatch.creators.forEach(function (creatorName) {
                            steps.work.expectWorkSearchMatchCreatorListToContain(i, creatorName);
                        });
                    });
                });
            }],
            ]);
        }
    },
    {
        name: 'Search by creator #1',
        tags: [],
        steps: function () {
            executeLegacyStepsArray([
            [function () {
                data.searchDataByCreatorMatch1.forEach(function (searchData) {
                    steps.base.goToHomePage();
                    steps.mainHeader.search.selectEntityType('Works');
                    steps.work.selectWorkSearchFilterTag(0, 'Creator');
                    steps.work.enterWorkSearchTerms(searchData.terms);
                    steps.work.waitForWorkSearchResultToBeDisplayed();
                    searchData.expectedMatches.forEach(function (expectedMatch, i) {
                        steps.work.expectWorkSearchMatchTitleToBe(i, expectedMatch.title);
                        if (expectedMatch.alternateTitle) {
                            steps.work.expectWorkSearchMatchAlternateTitleToBe(
                                i, expectedMatch.alternateTitle
                            );
                        }
                        expectedMatch.creators.forEach(function (creatorName) {
                            steps.work.expectWorkSearchMatchCreatorListToContain(i, creatorName);
                        });
                    });
                });
            }],
            ]);
        }
    },
    {
        name: 'Search by creator #2',
        tags: [],
        steps: function () {
            executeLegacyStepsArray([
            [function () {
                data.searchDataByCreatorMatch2.forEach(function (searchData) {
                    steps.base.goToHomePage();
                    steps.mainHeader.search.selectEntityType('Works');
                    steps.work.selectWorkSearchFilterTag(0, 'Creator');
                    steps.work.enterWorkSearchTerms(searchData.terms);
                    steps.work.waitForWorkSearchResultToBeDisplayed();
                    searchData.expectedMatches.forEach(function (expectedMatch, i) {
                        steps.work.expectWorkSearchMatchTitleToBe(i, expectedMatch.title);
                        if (expectedMatch.alternateTitle) {
                            steps.work.expectWorkSearchMatchAlternateTitleToBe(
                                i, expectedMatch.alternateTitle
                            );
                        }
                        expectedMatch.creators.forEach(function (creatorName) {
                            steps.work.expectWorkSearchMatchCreatorListToContain(i, creatorName);
                        });
                    });
                });
            }],
            ]);
        }
    },
    {
        name: 'Search by exact title + creator',
        tags: [],
        steps: function () {
            executeLegacyStepsArray([
            [function () {
                data.searchDataByExactTitleAndCreator.forEach(function (searchData) {
                    steps.base.goToHomePage();
                    steps.mainHeader.search.selectEntityType('Works');
                    steps.work.selectWorkSearchFilterTag(0, 'Title');
                    steps.work.enterWorkSearchTerms('"' + searchData.titleTerms + '"');
                    steps.work.waitForWorkSearchResultToBeDisplayed();
                    steps.work.addAnotherWorkSearchTerm();
                    steps.work.selectWorkSearchFilterTag(1, 'Creator');
                    steps.work.enterWorkSearchTerms(searchData.creatorTerms);
                    steps.work.waitForWorkSearchResultToBeDisplayed();
                    searchData.expectedMatches.forEach(function (expectedMatch, i) {
                        steps.work.expectWorkSearchMatchTitleToBe(i, expectedMatch.title);
                        if (expectedMatch.alternateTitle) {
                            steps.work.expectWorkSearchMatchAlternateTitleToBe(
                                i, expectedMatch.alternateTitle
                            );
                        }
                        expectedMatch.creators.forEach(function (creatorName) {
                            steps.work.expectWorkSearchMatchCreatorListToContain(i, creatorName);
                        });
                    });
                });
            }],
            ]);
        }
    },
    {
        name: 'Search by partial title + creator',
        tags: [],
        steps: function () {
            executeLegacyStepsArray([
            [function () {
                data.searchDataByPartialTitleAndCreator.forEach(function (searchData) {
                    steps.base.goToHomePage();
                    steps.mainHeader.search.selectEntityType('Works');
                    steps.work.selectWorkSearchFilterTag(0, 'Title');
                    steps.work.enterWorkSearchTerms(searchData.titleTerms);
                    steps.work.waitForWorkSearchResultToBeDisplayed();
                    steps.work.addAnotherWorkSearchTerm();
                    steps.work.selectWorkSearchFilterTag(1, 'Creator');
                    steps.work.enterWorkSearchTerms(searchData.creatorTerms);
                    steps.work.waitForWorkSearchResultToBeDisplayed();
                    searchData.expectedMatches.forEach(function (expectedMatch, i) {
                        steps.work.expectWorkSearchMatchTitleToBe(i, expectedMatch.title);
                        if (expectedMatch.alternateTitle) {
                            steps.work.expectWorkSearchMatchAlternateTitleToBe(
                                i, expectedMatch.alternateTitle
                            );
                        }
                        expectedMatch.creators.forEach(function (creatorName) {
                            steps.work.expectWorkSearchMatchCreatorListToContain(i, creatorName);
                        });
                    });
                });
            }],
            ]);
        }
    }
];
