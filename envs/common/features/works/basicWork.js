'use strict';

var random = require('../../../../helpers/random'),
    moment = require('moment'),
    randomString = random.string.makeMemoizedGenerator();

exports.commonFeatureTags = ['basicWork', 'regression'];

var data = {
	workId: 'WW 015006249 00',
	primaryWorkTitle: 'TEST WORK TITLE 142792447241860',
	alternateWorkTitles: [
		'TEST ALTERNATE WORK TITLE 1427924474205725',
		'TEST ALTERNATE WORK TITLE 1427924476582667'
	],
	creators: [
		{
			contribution: 50
		},
		{
			contribution: 50
		}
	],
	musicalDistributionCategory: 'Jazz',
	textMusicRelationship: 'Music and Text',
	excerptType: 'Movement',
	versionType: 'Original Work',
	intendedPurpose: 'Theatre',
	productionTitle: 'TEST PRODUCTION TITLE 1429744413589291',
	includeOnWebsite: false,
};

exports.beforeFeature = function () {
	steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create persons to use as creators',
        tags: [],
        steps: function() {
            _.times(2, function(i) {
                steps.person.useBlankPersonSlot(i);

                steps.newPerson.goToNewPersonPage();

                steps.newPerson.enterLastName(
                    'TEST PERSON ' + (i + 1) + ' ' + randomString('person' + i)
                );

                steps.newPerson.enterAffiliatedSocietySearchTerms('ASCAP');
                steps.newPerson.selectAffiliatedSocietySearchResultByIndex(0);

                steps.newPerson.save();

                steps.person.findInternalIpiNumber();
           });
        }
    },
	{
		name: 'New basic work',
		tags: ['create'],
		steps: function () {

            var more = {};

            more.skip = more.skip || {};
            //more.skip.alternateWorkTitles = true;
            //more.skip.assetType = true;
            //more.skip.workOrigin = true;
            //more.skip.creationDate = true;
            //more.skip.deliveryDate = true;

            steps.base.useBlankEntityDataSlot('work', 0);

            steps.newWork.goToNewWorkPage();

            steps.newWork.validateDefaultPrimaryWorkLanguage();
            data.primaryWorkTitle = steps.newWork.enterRandomPrimaryWorkTitle();

            if(!more.skip.alternateWorkTitles) {
                data.alternateWorkTitles = _.times (
                    2, function(i) {
                        steps.newWork.validateDefaultAlternateWorkTitleLanguage(i);
                        return steps.newWork.enterRandomAlternateWorkTitle(i);
                    }
                );
            }

            data.creators = (function() {
                var howMany = 2;
                var creators = _.times (
                    howMany, function(i) {
                        var creator = {};
                        var firstOne = (i === 0);
                        var lastOne = (i === howMany - 1);
                        steps.newWork.validateDefaultCreatorRole(i);
                        creator.name = steps.newWork.selectCreatorFromPersonSlot(i, i);
                        steps.newWork.ensureContributionRequiredMessageIsDisplayed();
                        steps.newWork.validateCreatorContributionInputMask(i);
                        if(firstOne) {
                            steps.newWork.enterMediumCreatorContribution(i);
                            steps.newWork.ensureTotalContributionTooLowMessageIsDisplayed();
                        }
                        if(howMany > 1 && lastOne) {
                            steps.newWork.enterMaximumCreatorContribution(i);
                            steps.newWork.ensureTotalContributionTooHighMessageIsDisplayed();
                        }
                        creator.contribution = 100 / howMany;
                        steps.newWork.enterCreatorContribution(i, creator.contribution);
                        if(howMany > 1 && !firstOne && !lastOne) {
                            steps.newWork.ensureTotalContributionTooLowMessageIsDisplayed();
                        }
                        return creator;
                    }
                );
                steps.newWork.validateTotalContribution();
                return creators;
            })();

            if(!more.skip.assetType) {
                steps.newWork.validateDefaultMusicalDistributionCategory();
                data.musicalDistributionCategory = (
                    steps.newWork.selectRandomMusicalDistributionCategory()
                );

                steps.newWork.validateDefaultTextMusicRelationship();
                data.textMusicRelationship = steps.newWork.selectRandomTextMusicRelationship();

                steps.newWork.validateDefaultExcerptType();
                data.excerptType = steps.newWork.selectRandomExcerptType();

                steps.newWork.validateDefaultVersionType();
                data.versionType = steps.newWork.selectRandomVersionType();

                steps.newWork.validateDefaultLyricAdaptation();
                data.lyricAdaptation = steps.newWork.selectRandomLyricAdaptation();

                steps.newWork.validateDefaultMusicArrangement();
                data.musicArrangement = steps.newWork.selectRandomMusicArrangement();
            }

            if(!more.skip.workOrigin) {
                steps.newWork.validateDefaultIntendedPurpose();
                data.intendedPurpose = steps.newWork.selectRandomIntendedPurpose();

                data.productionTitle = steps.newWork.enterRandomProductionTitle();

                steps.newWork.validateDefaultBltvr();
                data.bltvr = steps.newWork.selectRandomBltvr();

                steps.newWork.validateDefaultMusicLibrary();
                data.musicLibrary = steps.newWork.selectRandomMusicLibrary();
            }

            if(!more.skip.creationDate) {
                steps.newWork.validateDefaultCreationYear();
                steps.newWork.validateDefaultCreationMonth();
                steps.newWork.validateDefaultCreationDay();

                data.creationYear = steps.newWork.enterTwoYearsAgoAsCreationYear();
                data.creationMonth = steps.newWork.enterThisMonthAsCreationMonth();
                data.creationDay = steps.newWork.enterTodayAsCreationDay();
            }

            if(!more.skip.deliveryDate) {
                steps.newWork.validateDefaultDeliveryYear();
                steps.newWork.validateDefaultDeliveryMonth();
                steps.newWork.validateDefaultDeliveryDay();

                data.deliveryYear = steps.newWork.enterLastYearAsDeliveryYear();
                data.deliveryMonth = steps.newWork.enterThisMonthAsDeliveryMonth();
                data.deliveryDay = steps.newWork.enterTodayAsDeliveryDay();
            }

            if(!more.skip.inclusionOnWebsite) {
                data.includeOnWebsite = (function() {
                    var include = _.sample([true, false]);
                    steps.newWork.optToIncludeWorkOnWebsite(include);
                    return include;
                })();
            }

            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.work.findCurrentlyOpenWorkId().then(function(value) {
                data.workId = value;
            });

        }
	},
	{
		name: 'Validate basic work',
		tags: ['validate'],
		steps: function () {

            var more = {};

            more.skip = more.skip || {};
            //more.skip.alternateWorkTitles = true;
            //more.skip.assetType = true;
            //more.skip.workOrigin = true;
            //more.skip.creationDate = true;
            //more.skip.deliveryDate = true;

            if (!more.skip.navigation) {
                steps.work.goToWorkPage();
            }

            if (!more.skip.workTitles) {
                steps.work.validatePrimaryWorkTitle(data.primaryWorkTitle);

                if (!more.skip.alternateWorkTitles && data.alternateWorkTitles) {
                    data.alternateWorkTitles.forEach(
                        function (alternateWorkTitle) {
                            steps.work.validateAlternateWorkTitle(alternateWorkTitle);
                        }
                    );
                }
            }

            if (!more.skip.creationDate) {
                steps.work.validateCreationDate(
                    data.creationYear,
                    data.creationMonth,
                    data.creationDay
                );
            }

            if (!more.skip.deliveryDate) {
                steps.work.validateDeliveryDate(
                    data.deliveryYear,
                    data.deliveryMonth,
                    data.deliveryDay
                );
            }

            if (!more.skip.assetType) {
                steps.work.validateMusicalDistributionCategory(data.musicalDistributionCategory);
                steps.work.validateTextMusicRelationship(data.textMusicRelationship);
                steps.work.validateExcerptType(data.excerptType);
                steps.work.validateVersionType(data.versionType);
                steps.work.validateLyricAdaptation(data.lyricAdaptation);
                steps.work.validateMusicArrangement(data.musicArrangement);
            }

            if (!more.skip.workOrigin) {
                steps.work.validateIntendedPurpose(data.intendedPurpose);
                steps.work.validateProductionTitle(data.productionTitle);
                steps.work.validateBltvr(data.bltvr);
                steps.work.validateMusicLibrary(data.musicLibrary);
            }

            if (!more.skip.inclusionOnWebsite) {
                steps.work.validateIncludeWorkOnWebsite(data.includeOnWebsite);
            }

            if (!more.skip.creators && data.creators && data.creators.length !== 0) {
                steps.work.goToScopeDeliveryTab();

                steps.work.validateSubjectCreatorNames(data.creators.length);
                steps.work.validateSubjectCreatorContributions(data.creators.length);
            }
		}
	},
	{
		name: 'Edit basic work',
		tags: ['edit'],
		steps: function () {

            var more = {};

            more.skip = more.skip || {};
            //more.skip.navigation = true;
            //more.skip.workTitles = true;
            //more.skip.creators = true;
            //more.skip.creationDate = true;
            //more.skip.deliveryDate = true;
            //more.skip.assetType = true;
            //more.skip.workOrigin = true;
            //more.skip.inclusionOnWebsite = true;

            if (!more.skip.navigation) {
                steps.work.goToWorkPage();
            }

            if (!more.skip.creationDate) {
                steps.work.hoverCreationDateContainerLabel();
                steps.work.editCreationDate();
                (function () {
                    var daysAgo = _.random(1, 30 * 12 * 2);
                    var pastDate = random.moment(moment().subtract(daysAgo, "day"));

                    data.creationYear = steps.work.enterDifferentCreationYear();
                    steps.work.cancelCreationDateEditing();
                    steps.base.dirtyCheckConfirmCancellation();
                    steps.work.hoverCreationDateContainerLabel();
                    steps.work.editCreationDate();
                    steps.work.expectEnteredCreationYearNotToBe(data.creationYear);

                    data.creationYear = pastDate.year();
                    steps.work.enterCreationYear(data.creationYear);
                    steps.work.cancelCreationDateEditing();
                    steps.base.dirtyCheckContinueEditing();
                    steps.work.expectEnteredCreationYearToBe(data.creationYear);

                    data.creationMonth = pastDate.month();
                    steps.work.enterCreationMonth(data.creationMonth);

                    data.creationDay = pastDate.date();
                    steps.work.enterCreationDay(data.creationDay);
                })();
                steps.work.saveCreationDate();
            }

            if (!more.skip.workTitles) {
                steps.work.hoverPrimaryWorkTitleHeading();
                steps.work.editWorkTitles();
                data.primaryWorkTitle = steps.work.enterRandomPrimaryWorkTitle();
                steps.work.waitTitleEditorCheckForDuplicates();
                steps.work.cancelWorkTitlesEditing();
                steps.base.dirtyCheckConfirmCancellation();
                steps.work.hoverPrimaryWorkTitleHeading();
                steps.work.editWorkTitles();
                steps.work.expectPrimaryWorkTitleFieldValueNotToBe(data.primaryWorkTitle);

                data.primaryWorkTitle = steps.work.enterRandomPrimaryWorkTitle();
                steps.work.waitTitleEditorCheckForDuplicates();
                steps.work.cancelWorkTitlesEditing();
                steps.base.dirtyCheckContinueEditing();
                steps.work.expectPrimaryWorkTitleFieldValueToBe(data.primaryWorkTitle);

                steps.work.validateDefaultAlternateWorkTitleLanguage();

                data.alternateWorkTitles = _.times(
                    2, function (i) {
                        return steps.work.enterRandomAlternateWorkTitle(i);
                    }
                );

                data.alternateWorkTitles.push(
                    steps.work.enterNewRandomAlternateWorkTitle()
                );

                steps.work.saveWorkTitles();
            }

            if (!more.skip.creators) {
                steps.work.hoverCreatorNamesContainer();
                steps.work.editCreators();

                data.creators = (function () {
                    var creators;
                    var howMany = 2;
                    var evenContribution = steps.work.calculateEvenCreatorContributions();

                    creators = _.times(
                        howMany, function (i) {
                            var creator = {};
                            var firstOne = (i === 0);

                            if (firstOne) {
                                creator.contribution = 0;
                                steps.work.enterCreatorContribution(i, creator.contribution);

                                steps.work.cancelCreatorsEditing();
                                steps.base.dirtyCheckConfirmCancellation();

                                steps.work.hoverCreatorNamesContainer();
                                steps.work.editCreators();

                                steps.work.expectFirstCreatorContributionFieldValueNotToBe(
                                    creator.contribution
                                );
                            }

                            creator.name = steps.work.selectDifferentRandomCreator(i);

                            if (firstOne) {
                                steps.work.waitCreatorsEditorCheckForDuplicates();
                            }

                            creator.contribution = evenContribution;
                            steps.work.validateCreatorContributionInputMask(i);
                            steps.work.enterCreatorContribution(i, creator.contribution);

                            if (firstOne) {
                                steps.work.cancelCreatorsEditing();
                                steps.base.dirtyCheckContinueEditing();

                                steps.work.expectFirstCreatorContributionFieldValueToBe(
                                    creator.contribution
                                );
                            }

                            return creator;
                        }
                    );
                })();

                steps.work.saveCreators();
            }

            if (!more.skip.assetType) {
                steps.work.hoverAssetTypeContainer();
                steps.work.editAssetType();
                data.musicalDistributionCategory = (
                    steps.work.selectDifferentRandomMusicalDistributionCategory()
                );
                steps.work.cancelAssetTypeEditing();
                steps.base.dirtyCheckConfirmCancellation();
                steps.work.hoverAssetTypeContainer();
                steps.work.editAssetType();
                steps.work.expectMusicalDistributionCategoryNotToBe(
                    data.musicalDistributionCategory
                );

                data.musicalDistributionCategory = (
                    steps.work.selectDifferentRandomMusicalDistributionCategory()
                );
                steps.work.cancelAssetTypeEditing();
                steps.base.dirtyCheckContinueEditing();
                steps.work.expectMusicalDistributionCategoryToBe(
                    data.musicalDistributionCategory
                );

                data.textMusicRelationship = (
                    steps.work.selectDifferentRandomTextMusicRelationship()
                );
                data.excerptType = steps.work.selectDifferentRandomExcerptType();
                data.versionType = steps.work.selectDifferentRandomVersionType();
                data.lyricAdaptation = steps.work.selectDifferentRandomLyricAdaptation();
                data.musicArrangement = steps.work.selectDifferentRandomMusicArrangement();

                steps.work.saveAssetType();
            }

            if (!more.skip.workOrigin) {
                steps.work.hoverWorkOriginContainer();
                steps.work.editWorkOrigin();

                data.intendedPurpose = steps.work.selectDifferentRandomIntendedPurpose();

                steps.work.cancelWorkOriginEditing();
                steps.base.dirtyCheckConfirmCancellation();
                steps.work.hoverWorkOriginContainer();
                steps.work.editWorkOrigin();
                steps.work.expectIntendedPurposeNotToBe(data.intendedPurpose);

                data.intendedPurpose = steps.work.selectDifferentRandomIntendedPurpose();
                steps.work.cancelWorkOriginEditing();
                steps.base.dirtyCheckContinueEditing();
                steps.work.expectIntendedPurposeToBe(data.intendedPurpose);

                data.productionTitle = steps.work.enterRandomProductionTitle();
                data.bltvr = steps.work.selectDifferentRandomBltvr();
                data.musicLibrary = steps.work.selectDifferentRandomMusicLibrary();

                steps.work.saveWorkOrigin();
            }

            if (!more.skip.deliveryDate) {
                steps.work.hoverDeliveryDateContainerLabel();
                steps.work.editDeliveryDate();
                (function () {
                    var daysAgo = _.random(1, 30 * 12 * 2);
                    var pastDate = random.moment(moment().subtract(daysAgo, "day"));

                    data.deliveryYear = steps.work.enterDifferentDeliveryYear();
                    steps.work.cancelDeliveryDateEditing();
                    steps.base.dirtyCheckConfirmCancellation();
                    steps.work.hoverDeliveryDateContainerLabel();
                    steps.work.editDeliveryDate();
                    steps.work.expectEnteredDeliveryYearNotToBe(data.deliveryYear);

                    data.deliveryYear = pastDate.year();
                    steps.work.enterDeliveryYear(data.deliveryYear);
                    steps.work.cancelDeliveryDateEditing();
                    steps.base.dirtyCheckContinueEditing();
                    steps.work.expectEnteredDeliveryYearToBe(data.deliveryYear);

                    data.deliveryMonth = pastDate.month();
                    steps.work.enterDeliveryMonth(data.deliveryMonth);

                    data.deliveryDay = pastDate.date();
                    steps.work.enterDeliveryDay(data.deliveryDay);
                })();
                steps.work.saveDeliveryDate();
            }

            if (!more.skip.inclusionOnWebsite) {
                steps.work.hoverWorkInclusionOnWebsiteIndicator();
                steps.work.editWorkInclusionOnWebsite();
                data.includeOnWebsite = steps.work.toggleWorkInclusionOnWebsite();
                steps.work.cancelWorkInclusionOnWebsiteEditing();
                steps.base.dirtyCheckConfirmCancellation();
                steps.work.hoverWorkInclusionOnWebsiteIndicator();
                steps.work.editWorkInclusionOnWebsite();
                steps.work.expectWorkInclusionOnWebsiteOptionNotToBe(data.includeOnWebsite);

                data.includeOnWebsite = steps.work.toggleWorkInclusionOnWebsite();
                steps.work.cancelWorkInclusionOnWebsiteEditing();
                steps.base.dirtyCheckContinueEditing();
                steps.work.expectWorkInclusionOnWebsiteOptionToBe(data.includeOnWebsite);

                steps.work.saveWorkInclusionOnWebsite();
            }
		}
	},
	{
		name: 'Validate basic work',
		tags: ['validate'],
		steps: function () {

            var more = {};

            more.skip = more.skip || {};
            //more.skip.alternateWorkTitles = true;
            //more.skip.assetType = true;
            //more.skip.workOrigin = true;
            //more.skip.creationDate = true;
            //more.skip.deliveryDate = true;

            if (!more.skip.navigation) {
                steps.work.goToWorkPage();
            }

            if (!more.skip.workTitles) {
                steps.work.validatePrimaryWorkTitle(data.primaryWorkTitle);

                if (!more.skip.alternateWorkTitles && data.alternateWorkTitles) {
                    data.alternateWorkTitles.forEach(
                        function (alternateWorkTitle) {
                            steps.work.validateAlternateWorkTitle(alternateWorkTitle);
                        }
                    );
                }
            }

            if (!more.skip.creationDate) {
                steps.work.validateCreationDate(
                    data.creationYear,
                    data.creationMonth,
                    data.creationDay
                );
            }

            if (!more.skip.deliveryDate) {
                steps.work.validateDeliveryDate(
                    data.deliveryYear,
                    data.deliveryMonth,
                    data.deliveryDay
                );
            }

            if (!more.skip.assetType) {
                steps.work.validateMusicalDistributionCategory(data.musicalDistributionCategory);
                steps.work.validateTextMusicRelationship(data.textMusicRelationship);
                steps.work.validateExcerptType(data.excerptType);
                steps.work.validateVersionType(data.versionType);
                steps.work.validateLyricAdaptation(data.lyricAdaptation);
                steps.work.validateMusicArrangement(data.musicArrangement);
            }

            if (!more.skip.workOrigin) {
                steps.work.validateIntendedPurpose(data.intendedPurpose);
                steps.work.validateProductionTitle(data.productionTitle);
                steps.work.validateBltvr(data.bltvr);
                steps.work.validateMusicLibrary(data.musicLibrary);
            }

            if (!more.skip.inclusionOnWebsite) {
                steps.work.validateIncludeWorkOnWebsite(data.includeOnWebsite);
            }

            if (!more.skip.creators && data.creators && data.creators.length !== 0) {
                steps.work.goToScopeDeliveryTab();

                steps.work.validateSubjectCreatorNames(data.creators.length);
                steps.work.validateSubjectCreatorContributions(data.creators.length);
            }
		}
	}
];

