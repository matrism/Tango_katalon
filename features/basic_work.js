'use strict';

var random = require('../helpers/random'),
    randomString = random.string.makeMemoizedGenerator();

require(steps_path + 'login');
require(steps_path + 'new_work');
    
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

            steps.new_work.goToNewWorkPage();

            steps.new_work.validateDefaultPrimaryWorkLanguage();
            data.primaryWorkTitle = steps.new_work.enterRandomPrimaryWorkTitle();

            if(!more.skip.alternateWorkTitles) {
                data.alternateWorkTitles = _.times (
                    2, function(i) {
                        steps.new_work.validateDefaultAlternateWorkTitleLanguage(i);
                        return steps.new_work.enterRandomAlternateWorkTitle(i);
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
                        steps.new_work.validateDefaultCreatorRole(i);
                        creator.name = steps.new_work.selectCreatorFromPersonSlot(i, i);
                        steps.new_work.ensureContributionRequiredMessageIsDisplayed();
                        steps.new_work.validateCreatorContributionInputMask(i);
                        if(firstOne) {
                            steps.new_work.enterMediumCreatorContribution(i);
                            steps.new_work.ensureTotalContributionTooLowMessageIsDisplayed();
                        }
                        if(howMany > 1 && lastOne) {
                            steps.new_work.enterMaximumCreatorContribution(i);
                            steps.new_work.ensureTotalContributionTooHighMessageIsDisplayed();
                        }
                        creator.contribution = 100 / howMany;
                        steps.new_work.enterCreatorContribution(i, creator.contribution);
                        if(howMany > 1 && !firstOne && !lastOne) {
                            steps.new_work.ensureTotalContributionTooLowMessageIsDisplayed();
                        }
                        return creator;
                    }
                );
                steps.new_work.validateTotalContribution();
                return creators;
            })();

            if(!more.skip.assetType) {
                steps.new_work.validateDefaultMusicalDistributionCategory();
                data.musicalDistributionCategory = (
                    steps.new_work.selectRandomMusicalDistributionCategory()
                );

                steps.new_work.validateDefaultTextMusicRelationship();
                data.textMusicRelationship = steps.new_work.selectRandomTextMusicRelationship();

                steps.new_work.validateDefaultExcerptType();
                data.excerptType = steps.new_work.selectRandomExcerptType();

                steps.new_work.validateDefaultVersionType();
                data.versionType = steps.new_work.selectRandomVersionType();

                steps.new_work.validateDefaultLyricAdaptation();
                data.lyricAdaptation = steps.new_work.selectRandomLyricAdaptation();

                steps.new_work.validateDefaultMusicArrangement();
                data.musicArrangement = steps.new_work.selectRandomMusicArrangement();
            }

            if(!more.skip.workOrigin) {
                steps.new_work.validateDefaultIntendedPurpose();
                data.intendedPurpose = steps.new_work.selectRandomIntendedPurpose();

                data.productionTitle = steps.new_work.enterRandomProductionTitle();

                steps.new_work.validateDefaultBltvr();
                data.bltvr = steps.new_work.selectRandomBltvr();

                steps.new_work.validateDefaultMusicLibrary();
                data.musicLibrary = steps.new_work.selectRandomMusicLibrary();
            }

            if(!more.skip.creationDate) {
                steps.new_work.validateDefaultCreationYear();
                steps.new_work.validateDefaultCreationMonth();
                steps.new_work.validateDefaultCreationDay();

                data.creationYear = steps.new_work.enterTwoYearsAgoAsCreationYear();
                data.creationMonth = steps.new_work.enterThisMonthAsCreationMonth();
                data.creationDay = steps.new_work.enterTodayAsCreationDay();
            }

            if(!more.skip.deliveryDate) {
                steps.new_work.validateDefaultDeliveryYear();
                steps.new_work.validateDefaultDeliveryMonth();
                steps.new_work.validateDefaultDeliveryDay();

                data.deliveryYear = steps.new_work.enterLastYearAsDeliveryYear();
                data.deliveryMonth = steps.new_work.enterThisMonthAsDeliveryMonth();
                data.deliveryDay = steps.new_work.enterTodayAsDeliveryDay();
            }

            if(!more.skip.inclusionOnWebsite) {
                data.includeOnWebsite = (function() {
                    var include = _.sample([true, false]);
                    steps.new_work.optToIncludeWorkOnWebsite(include);
                    return include;
                })();
            }

            steps.new_work.saveWork();
            steps.new_work.validateSaveWorkRedirection();

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
            //more.skip.alternateWorkTitles = true; // broken
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
                //steps.work.validateMusicLibrary(data.musicLibrary);
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
            more.skip.alternateWorkTitles = true;
            more.skip.assetType = true;
            more.skip.workOrigin = true;
            more.skip.creationDate = true;
            more.skip.deliveryDate = true;

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
                //steps.work.validateMusicLibrary(data.musicLibrary);
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

