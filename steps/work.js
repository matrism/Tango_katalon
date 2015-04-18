"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var randomId = require("../helpers/randomId");
var promise = protractor.promise;
require(pages_path + "work");
module.exports = steps.work = {};
// Navigation.
module.exports.goToWorkPage = function(workId) {
	it (
		"Go to work page", function() {
			pages.work.open(workId);
		}
	);
};
module.exports.goToScopeDelivery = function() {
	it (
		"Go to Scope Delivery", function() {
			pages.work.goToScopeDelivery();
		}
	);
};
// Data fetching.
module.exports.findCurrentlyOpenWorkId = function() {
	var deferred = promise.defer();
	it (
		"Find currently open work ID", function() {
			deferred.fulfill(pages.work.workId());
		}
	);
	return deferred.promise;
};
module.exports.workInclusionOnWebsite = function() {
	var deferred = promise.defer();
	it (
		"Find out whether this work is to be included on the website", function() {
			deferred.fulfill(pages.work.workInclusionOnWebsite());
		}
	);
	return deferred.promise;
};
// Interaction.
module.exports.hoverPrimaryWorkTitleHeading = function() {
	steps.base.hoverElement (
		"primary work title heading", pages.work.primaryWorkTitleHeading()
	);
};
module.exports.editWorkTitles = function() {
	steps.base.clickElement (
		"edit work titles button", pages.work.editWorkTitlesButton()
	);
};
module.exports.enterRandomPrimaryWorkTitle = function() {
	var deferred = promise.defer();
	it (
		"Enter a random primary work title", function() {
			var title = "TEST WORK TITLE " + randomId();
			pages.work.enterPrimaryWorkTitle(title);
			deferred.fulfill(title);
		}
	);
	return deferred.promise;
};
module.exports.enterRandomAlternateWorkTitle = function(i) {
	var deferred = promise.defer();
	it (
		"Enter random alternate work title #" + (i + 1), function() {
			var title = "TEST ALTERNATE WORK TITLE " + randomId();
			pages.work.enterAlternateWorkTitle(i, title);
			deferred.fulfill(title);
		}
	);
	return deferred.promise;
};
module.exports.cancelWorkTitlesEditing = function() {
	steps.base.clickElement (
		"cancel work titles editing button",
		pages.work.cancelWorkTitlesEditingButton(),
		_tf_config._system_.wait_timeout
	);
};
module.exports.saveWorkTitles = function() {
	steps.base.clickElement (
		"save work titles button",
		pages.work.saveWorkTitlesButton()
	);
};
module.exports.hoverAssetTypeContainer = function() {
	steps.base.hoverElement (
		"asset type container",
		pages.work.assetTypeContainer()
	);
};
module.exports.editAssetType = function() {
	steps.base.clickElement (
		"edit asset type button",
		pages.work.editAssetTypeButton()
	);
};
module.exports.selectDifferentRandomMusicalDistributionCategory  = function() {
	steps.base.selectRandomDropdownOption (
		"musical distribution category",
		pages.work.editMusicalDistributionCategoryField(),
		{ different: true }
	);
};
module.exports.selectDifferentRandomTextMusicRelationship  = function() {
	steps.base.selectRandomDropdownOption (
		"text music relationship",
		pages.work.editTextMusicRelationshipField(),
		{ different: true }
	);
};
module.exports.selectDifferentRandomExcerptType  = function() {
	steps.base.selectRandomDropdownOption (
		"excerpt type",
		pages.work.editExcerptTypeField(),
		{ different: true }
	);
};
module.exports.selectDifferentRandomVersionType  = function() {
	steps.base.selectRandomDropdownOption (
		"version type",
		pages.work.editVersionTypeField(),
		{ different: true }
	);
};
module.exports.selectDifferentRandomLyricAdaptation  = function() {
	steps.base.selectRandomDropdownOption (
		"lyric adaptation",
		pages.work.editLyricAdaptationField(),
		{ skipIfNotPresent: true, different: true }
	);
};
module.exports.selectDifferentRandomMusicArrangement = function() {
	steps.base.selectRandomDropdownOption (
		"music arrangement",
		pages.work.editMusicArrangementField(),
		{ skipIfNotPresent: true, different: true }
	);
};
module.exports.saveAssetType = function() {
	steps.base.clickElement (
		"save asset type button",
		pages.work.saveAssetTypeButton()
	);
};
module.exports.hoverWorkOriginContainer = function() {
	steps.base.hoverElement (
		"work origin container",
		pages.work.workOriginContainer()
	);
};
module.exports.editWorkOrigin = function() {
	steps.base.clickElement (
		"edit work origin button",
		pages.work.editWorkOriginButton()
	);
};
module.exports.selectDifferentRandomIntendedPurpose = function() {
	steps.base.selectRandomDropdownOption (
		"intended purpose",
		pages.work.editIntendedPurposeField(),
		{ dropdownType: "tg", different: true }
	);
};
module.exports.enterRandomProductionTitle = function() {
	var deferred = promise.defer();
	it (
		"Enter a random production title (if present)", function() {
			var title = "TEST PRODUCTION TITLE " + randomId();
			deferred.fulfill (
				pages.work.enterProductionTitle(title, { skipIfNotPresent: true })
			);
		}
	);
	return deferred.promise;
};
module.exports.selectDifferentRandomBltvr = function() {
	steps.base.selectRandomDropdownOption (
		"BLTVR", pages.work.editBltvrField(),
		{ skipIfNotPresent: true, different: true }
	);
};
module.exports.selectDifferentRandomMusicLibrary = function() {
	steps.base.selectRandomDropdownOption (
		"music library",
		pages.work.editMusicLibraryField(),
		{ dropdownType: "tg", skipIfNotPresent: true, different: true }
	);
};
module.exports.saveWorkOrigin = function() {
	steps.base.clickElement (
		"save work origin button",
		pages.work.saveWorkOriginButton()
	);
};
module.exports.hoverWorkInclusionOnWebsiteIndicator = function() {
	steps.base.hoverElement (
		"work inclusion on website paragraph",
		pages.work.workInclusionOnWebsiteParagraph()
	);
};
module.exports.editWorkInclusionOnWebsite = function() {
	steps.base.clickElement (
		"edit work inclusion on website button",
		pages.work.editWorkInclusionOnWebsiteButton()
	);
};
module.exports.toggleWorkInclusionOnWebsite = function() {
	var deferred = promise.defer();
	it (
		"Toggle work inclusion on website", function() {
			var include = pages.work.selectedWorkInclusionOnWebsiteOption().then (
				function(include) {
					return !include;
				}
			);
			pages.work.optToIncludeWorkOnWebsite(include);
			deferred.fulfill(include);
		}
	);
	return deferred.promise;
};
module.exports.cancelWorkInclusionOnWebsiteEditing = function() {
	steps.base.clickElement (
		"cancel work inclusion on website button",
		pages.work.cancelWorkInclusionOnWebsiteButton()
	);
};
module.exports.saveWorkInclusionOnWebsite = function() {
	steps.base.clickElement (
		"save work inclusion on website button",
		pages.work.saveWorkInclusionOnWebsiteButton()
	);
};
// Validation.
module.exports.validateDefaultAlternateWorkTitleLanguage = function() {
	it (
		"Validate default alternate work title language", function() {
			expect(pages.work.defaultAlternateWorkTitleLanguage()).toBe("English");
		}
	);
};
module.exports.expectPrimaryWorkTitleFieldValueToBe = function(title) {
	it (
		"Validate primary work title edit field value", function() {
			expect(pages.work.editPrimaryWorkTitleFieldValue()).toBe(title);
		}
	);
};
module.exports.expectPrimaryWorkTitleFieldValueNotToBe = function(title) {
	it (
		"Validate primary work title edit field value", function() {
			expect(pages.work.editPrimaryWorkTitleFieldValue()).not.toBe(title);
		}
	);
};
module.exports.validatePrimaryWorkTitle = function(title) {
	it (
		"Validate primary work title", function() {
			expect(pages.work.primaryWorkTitle()).toBe(title);
		}
	);
};
module.exports.validateAlternateWorkTitle = function(title) {
	it (
		"Validate alternate work title", function() {
			expect(pages.work.alternateWorkTitles()).toContain(title);
		}
	);
};
module.exports.validateCreatorName = function(name) {
	it (
		"Validate creator name", function() {
			expect(pages.work.creatorNames()).toContain(name);
		}
	);
};
module.exports.validateCreatorContributionByName = function(name, percentage) {
	it (
		"Validate creator contribution percentage", function() {
			expect(pages.work.creatorContributionByName(name)).toBe(percentage);
		}
	);
};
module.exports.expectWorkInclusionOnWebsiteOptionToBe = function(include) {
	it (
		"Validate work inclusion on website option", function() {
			expect(pages.work.selectedWorkInclusionOnWebsiteOption()).toBe(include);
		}
	);
};
module.exports.expectWorkInclusionOnWebsiteOptionNotToBe = function(include) {
	it (
		"Validate work inclusion on website option", function() {
			expect(pages.work.selectedWorkInclusionOnWebsiteOption()).not.toBe(include);
		}
	);
};
module.exports.validateIncludeWorkOnWebsite = function(include) {
	it (
		"Validate 'Include work on website' option", function() {
			expect(pages.work.workInclusionOnWebsite()).toBe(include);
		}
	);
};
// Flow.
module.exports.editBasicWork = function(data) {
	var debugSkip = [
		"work titles", "asset type", "inclusion on website",
	];
	describe (
		"Edit basic work", function() {
			if(data.workId) {
				steps.work.goToWorkPage(data.workId);
			}

			if(debugSkip.indexOf("work titles") === -1) {
				steps.work.hoverPrimaryWorkTitleHeading();
				steps.work.editWorkTitles();
				data.primaryWorkTitle = steps.work.enterRandomPrimaryWorkTitle();
				steps.work.cancelWorkTitlesEditing();
				steps.base.dirtyCheckConfirmCancellation();
				steps.work.hoverPrimaryWorkTitleHeading();
				steps.work.editWorkTitles();
				steps.work.expectPrimaryWorkTitleFieldValueNotToBe(data.primaryWorkTitle);

				data.primaryWorkTitle = steps.work.enterRandomPrimaryWorkTitle();
				steps.work.cancelWorkTitlesEditing();
				steps.base.dirtyCheckContinueEditing();
				steps.work.expectPrimaryWorkTitleFieldValueToBe(data.primaryWorkTitle);

				steps.work.validateDefaultAlternateWorkTitleLanguage();

				data.alternateWorkTitles = _.times (
					2, function(i) {
						return steps.work.enterRandomAlternateWorkTitle(i);
					}
				);

				steps.work.saveWorkTitles();
			}

			if(debugSkip.indexOf("asset type") === -1) {
				steps.work.hoverAssetTypeContainer();
				steps.work.editAssetType();
				data.musicalDistributionCategory = steps.work.selectDifferentRandomMusicalDistributionCategory();
				data.textMusicRelationship = steps.work.selectDifferentRandomTextMusicRelationship();
				data.excerptType = steps.work.selectDifferentRandomExcerptType();
				data.versionType = steps.work.selectDifferentRandomVersionType();
				data.lyricAdaptation = steps.work.selectDifferentRandomLyricAdaptation();
				data.musicArrangement = steps.work.selectDifferentRandomMusicArrangement();

				steps.work.saveAssetType();
			}

			if(debugSkip.indexOf("work origin") === -1) {
				steps.work.hoverWorkOriginContainer();
				steps.work.editWorkOrigin();
				_.times(500, function() {
				data.intendedPurpose = steps.work.selectDifferentRandomIntendedPurpose();
				data.productionTitle = steps.work.enterRandomProductionTitle();
				data.bltvr = steps.work.selectDifferentRandomBltvr();
				data.musicLibrary = steps.work.selectDifferentRandomMusicLibrary();
				});

				steps.work.saveWorkOrigin();
			}

			if(debugSkip.indexOf("inclusion on website") === -1) {
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
	);
};
module.exports.validateWork = function(data) {
	describe (
		"Validate work data", function() {
			if(data.workId) {
				steps.work.goToWorkPage(data.workId);
			}
			steps.work.validatePrimaryWorkTitle(data.primaryWorkTitle);
			if(data.alternateWorkTitles) {
				data.alternateWorkTitles.forEach (
					function(alternateWorkTitle) {
						steps.work.validateAlternateWorkTitle(alternateWorkTitle);
					}
				);
			}
			steps.work.validateIncludeWorkOnWebsite(data.includeOnWebsite);
			steps.work.goToScopeDelivery();
			data.creators.forEach (
				function(creator, i) {
					describe (
						"Validate creator #" + (i + 1), function() {
							steps.work.validateCreatorName(creator.name);
							steps.work.validateCreatorContributionByName(creator.name, creator.contribution);
						}
					);
				}
			);
		}
	);
};
