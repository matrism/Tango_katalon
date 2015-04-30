"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var moment = require("moment");
var pad = require("pad");
var pph = require("../helpers/pph");
var random = require("../helpers/random");
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
module.exports.enterRandomPrimaryWorkTitle = function(data, key) {
	key = key || "primaryWorkTitle";
	it (
		"Enter a random primary work title", function() {
			var title = "TEST WORK TITLE " + random.id();
			pages.work.enterPrimaryWorkTitle(title);
			data[key] = title;
		}
	);
};
module.exports.enterRandomAlternateWorkTitle = function(i) {
	var deferred = promise.defer();
	it (
		"Enter random alternate work title #" + (i + 1), function() {
			var title = "TEST ALTERNATE WORK TITLE " + random.id();
			pages.work.enterAlternateWorkTitle(i, title);
			deferred.fulfill(title);
		}
	);
	return deferred.promise;
};
module.exports.enterNewRandomAlternateWorkTitle = function(data, key) {
	key = key || "alternateWorkTitles";
	it (
		"Enter new random alternate work title", function() {
			var title = "TEST ALTERNATE WORK TITLE " + random.id();
			pages.work.enterNewAlternateWorkTitle(title);
			data[key] = data[key] || [];
			data[key].push(title);
		}
	);
};
module.exports.waitTitleEditorCheckForDuplicates = function() {
	it("Wait title editor check for duplicates", function() {
		browser.wait(
			function() {
				return pph.not(pages.work.isTitleEditorCheckingForDuplicates());
			},
			_tf_config._system_.wait_timeout
		);
	});
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
module.exports.hoverCreatorNamesContainer = function() {
	steps.base.hoverElement (
		"creator names container",
		pages.work.creatorNamesContainer()
	);
};
module.exports.editCreators = function() {
	steps.base.clickElement (
		"edit creators button",
		pages.work.editCreatorsButton()
	);
};
module.exports.calculateEvenCreatorContributions = function() {
	var deferred = promise.defer();
	it("Calculate even creator contributions", function() {
		deferred.fulfill(pages.work.calculateEvenCreatorContributions());
	});
	return deferred.promise;
};
module.exports.selectDifferentRandomCreator = function(i) {
	var deferred = promise.defer();
	describe("Select different random creator #" + (i + 1), function() {
		deferred.fulfill(pages.base.selectRandomTypeaheadValue(
			pages.work.editCreatorNameInput(i),
			{ different: true }
		));
	});
	return deferred.promise;
};
module.exports.enterCreatorContribution = function(i, contribution) {
	it("Enter creator contribution #" + (i + 1), function() {
		pages.work.enterCreatorContribution(i, contribution);
	});
};
module.exports.expectFirstCreatorContributionFieldValueToBe = function(data, key) {
	key = key || "creators";
	it("Validate first creator's entered contribution", function() {
		var firstCreator = data[key][0];

		expect(pages.work.editFirstCreatorContributionFieldValue()).toBe(
			pph.toString(firstCreator.contribution)
		);
	});
};
module.exports.expectFirstCreatorContributionFieldValueNotToBe = function(data, key) {
	key = key || "creators";
	it("Validate first creator's entered contribution", function() {
		var firstCreator = data[key][0];

		expect(pages.work.editFirstCreatorContributionFieldValue()).not.toBe(
			pph.toString(firstCreator.contribution)
		);
	});
};
module.exports.waitCreatorsEditorCheckForDuplicates = function() {
	it("Wait creators editor check for duplicates", function() {
		browser.wait(
			function() {
				return pph.not(
					pages.work.isCreatorsEditorCheckingForDuplicates()
				);
			},
			_tf_config._system_.wait_timeout
		);
	});
};
module.exports.cancelCreatorsEditing = function() {
	steps.base.clickElement (
		"cancel creators button",
		pages.work.cancelCreatorsButton()
	);
};
module.exports.saveCreators = function() {
	steps.base.clickElement (
		"save creators button",
		pages.work.saveCreatorsButton()
	);
};
module.exports.hoverCreationDateContainerLabel = function() {
	steps.base.hoverElement(
		"creation date container label",
		pages.work.creationDateContainerLabel()
	);
};
module.exports.editCreationDate = function() {
	steps.base.clickElement(
		"edit creation date button",
		pages.work.editCreationDateButton()
	);
};
module.exports.enterDifferentCreationYear = function(data, key) {
	key = key || "creationYear";
	it("Enter different creation date year", function() {
		var enteredYear = pages.work.enteredCreationYear();
		var differentYear = enteredYear.then(function(enteredYear) {
			return enteredYear - 1;
		});
		pages.work.enterCreationYear(differentYear);
		data[key] = differentYear;
	});
};
module.exports.enterCreationYear = function(value) {
	it("Enter the creation year", function() {
		pages.work.enterCreationYear(value);
	});
};
module.exports.enterCreationMonth = function(value) {
	it("Enter the creation month", function() {
		pages.work.enterCreationMonth(value);
	});
};
module.exports.enterCreationDay = function(value) {
	it("Enter the creation day", function() {
		pages.work.enterCreationDay(value);
	});
};
module.exports.cancelCreationDateEditing = function() {
	steps.base.clickElement(
		"cancel creation date editing button",
		pages.work.cancelCreationDateEditingButton()
	);
};
module.exports.saveCreationDate = function() {
	steps.base.clickElement(
		"save creation date button",
		pages.work.saveCreationDateButton()
	);
};
module.exports.hoverDeliveryDateContainerLabel = function() {
	steps.base.hoverElement(
		"delivery date container label",
		pages.work.deliveryDateContainerLabel()
	);
};
module.exports.editDeliveryDate = function() {
	steps.base.clickElement(
		"edit delivery date button",
		pages.work.editDeliveryDateButton()
	);
};
module.exports.enterDifferentDeliveryYear = function(data, key) {
	key = key || "deliveryYear";
	it("Enter different delivery date year", function() {
		var enteredYear = pages.work.enteredDeliveryYear();
		var differentYear = enteredYear.then(function(enteredYear) {
			return enteredYear - 1;
		});
		pages.work.enterDeliveryYear(differentYear);
		data[key] = differentYear;
	});
};
module.exports.enterDeliveryYear = function(value) {
	it("Enter the delivery year", function() {
		pages.work.enterDeliveryYear(value);
	});
};
module.exports.enterDeliveryMonth = function(value) {
	it("Enter the delivery month", function() {
		pages.work.enterDeliveryMonth(value);
	});
};
module.exports.enterDeliveryDay = function(value) {
	it("Enter the delivery day", function() {
		pages.work.enterDeliveryDay(value);
	});
};
module.exports.cancelDeliveryDateEditing = function() {
	steps.base.clickElement(
		"cancel delivery date editing button",
		pages.work.cancelDeliveryDateEditingButton()
	);
};
module.exports.saveDeliveryDate = function() {
	steps.base.clickElement(
		"save delivery date button",
		pages.work.saveDeliveryDateButton()
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
module.exports.selectDifferentRandomMusicalDistributionCategory = function(data, key) {
	key = key || "musicalDistributionCategory";
	steps.base.selectRandomDropdownOption(
		"musical distribution category",
		pages.work.editMusicalDistributionCategoryField(),
		{ different: true }
	).then(function(value) {
		data[key] = value;
	});
};
module.exports.selectDifferentRandomTextMusicRelationship = function(data, key) {
	key = key || "textMusicRelationship";
	steps.base.selectRandomDropdownOption(
		"text music relationship",
		pages.work.editTextMusicRelationshipField(),
		{ different: true }
	).then(function(value) {
		data[key] = value;
	});
};
module.exports.selectDifferentRandomExcerptType = function(data, key) {
	key = key || "excerptType";
	steps.base.selectRandomDropdownOption(
		"excerpt type",
		pages.work.editExcerptTypeField(),
		{ different: true }
	).then(function(value) {
		data[key] = value;
	});
};
module.exports.selectDifferentRandomVersionType = function(data, key) {
	key = key || "versionType";
	steps.base.selectRandomDropdownOption(
		"version type",
		pages.work.editVersionTypeField(),
		{ different: true }
	).then(function(value) {
		data[key] = value;
	});
};
module.exports.selectDifferentRandomLyricAdaptation = function(data, key) {
	key = key || "lyricAdaptation";
	steps.base.selectRandomDropdownOption(
		"lyric adaptation",
		pages.work.editLyricAdaptationField(),
		{ skipIfNotPresent: true, different: true }
	).then(function(value) {
		data[key] = value;
	});
};
module.exports.selectDifferentRandomMusicArrangement = function(data, key) {
	key = key || "musicArrangement";
	steps.base.selectRandomDropdownOption(
		"music arrangement",
		pages.work.editMusicArrangementField(),
		{ skipIfNotPresent: true, different: true }
	).then(function(value) {
		data[key] = value;
	});
};
module.exports.cancelAssetTypeEditing = function() {
	steps.base.clickElement (
		"cancel asset type editing button",
		pages.work.cancelAssetTypeEditingButton()
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
module.exports.selectDifferentRandomIntendedPurpose = function(data, key) {
	key = key || "intendedPurpose";
	steps.base.selectRandomDropdownOption(
		"intended purpose",
		pages.work.editIntendedPurposeField(),
		{ dropdownType: "tg", different: true }
	).then(function(value) {
		data[key] = value;
	});
};
module.exports.enterRandomProductionTitle = function(data, key) {
	key = key || "productionTitle";
	it (
		"Enter a random production title (if present)", function() {
			var title = "TEST PRODUCTION TITLE " + random.id();
			pages.work.enterProductionTitle(
				title, { skipIfNotPresent: true }
			).then(function(value) {
				data[key] = value;
			});
		}
	);
};
module.exports.selectDifferentRandomBltvr = function(data, key) {
	key = key || "bltvr";
	steps.base.selectRandomDropdownOption(
		"BLTVR", pages.work.editBltvrField(),
		{ skipIfNotPresent: true, different: true }
	).then(function(value) {
		data[key] = value;
	});
};
module.exports.selectDifferentRandomMusicLibrary = function(data, key) {
	key = key || "musicLibrary";
	steps.base.selectRandomDropdownOption(
		"music library",
		pages.work.editMusicLibraryField(),
		{ dropdownType: "tg", skipIfNotPresent: true, different: true }
	).then(function(value) {
		data[key] = value;
	});
};
module.exports.cancelWorkOriginEditing = function() {
	steps.base.clickElement (
		"cancel work origin editing button",
		pages.work.cancelWorkOriginEditingButton()
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
module.exports.toggleWorkInclusionOnWebsite = function(data, key) {
	key = key || "inclusionOnWebsite";
	it (
		"Toggle work inclusion on website", function() {
			var include = pages.work.selectedWorkInclusionOnWebsiteOption().then (
				function(include) {
					return !include;
				}
			);
			pages.work.optToIncludeWorkOnWebsite(include);
			data[key] = include;
		}
	);
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
module.exports.expectPrimaryWorkTitleFieldValueToBe = function(data, key) {
	key = key || "primaryWorkTitle";
	it (
		"Validate primary work title edit field value", function() {
			expect(pages.work.editPrimaryWorkTitleFieldValue()).toBe(data[key]);
		}
	);
};
module.exports.expectPrimaryWorkTitleFieldValueNotToBe = function(data, key) {
	key = key || "primaryWorkTitle";
	it (
		"Validate primary work title edit field value", function() {
			expect(pages.work.editPrimaryWorkTitleFieldValue()).not.toBe(data[key]);
		}
	);
};
module.exports.validatePrimaryWorkTitle = function(data, key) {
	key = key || "primaryWorkTitle";
	it (
		"Validate primary work title (if validation value is not empty)", function() {
			var title = data[key];
			promise.when(title).then(function(title) {
				if(!title) {
					return;
				}
				expect(pages.work.primaryWorkTitle()).toBe(title);
			});
		}
	);
};
module.exports.validateAlternateWorkTitles = function(data, key) {
	key = key || "alternateWorkTitles";
	it (
		"Validate alternate work titles (if validation list is not empty)", function() {
			var titles = data[key];
			if(!titles) {
				return;
			}
			titles.forEach(function(title) {
				expect(pages.work.alternateWorkTitles()).toContain(title);
			});
		}
	);
};
module.exports.validateCreatorNames = function(data, key) {
	key = key || "creators";
	it (
		"Validate creator names (if validation list is not empty)", function() {
			var creators = data[key] || [];

			creators.forEach(function(creator) {
				expect(pages.work.creatorNames()).toContain(creator.name);
			});
		}
	);
};
module.exports.validateCreatorContributions = function(data, key) {
	key = key || "creators";
	it (
		"Validate creator contributions (if validation list is not empty)", function() {
			var creators = data[key] || [];

			creators.forEach(function(creator) {
				pph.spread(
					[creator.name, creator.contribution], function(name, contribution) {
						if(!contribution) {
							return;
						}

						expect(pages.work.creatorContributionByName(name)).toBe(contribution);
					}
				);
			});
		}
	);
};
module.exports.validateCreatorContributionInputMask = function(i, validationTable) {
	it("Validate creator contribution input mask", function() {
		validationTable = validationTable || {
			"1asdf": "1",
			"1,0": "10",
			"1.0.0": "1.00",
			"50": "50",
			"1.0": "1.0",
		};
		_.each(validationTable, function(expectedValue, input) {
			pages.work.enterCreatorContribution(i, input);
			expect(pages.work.enteredCreatorContribution(i)).toBe(expectedValue);
		});
		pages.work.enterCreatorContribution(i, "");
	});
};
module.exports.validateCreationDate = function(data, keys) {
	keys = keys || {
		year: "creationYear",
		month: "creationMonth",
		day: "creationDay",
	};
	it("Validate creation date (if first validation value is not empty)", function() {
		var values = [
			data[keys.year],
			data[keys.month],
			data[keys.day],
		];
		promise.all(values).then(function(values) {
			var date;
			var allTruthy = values.every(function(value) {
				return !!value;
			});
			if(!allTruthy) {
				return;
			}
			_.times(2, function(i) {
				values[i + 1] = pad(2, values[i + 1], "0");
			});
			date = values.join("-");
			expect(pages.work.creationDate()).toBe(date);
		});
	});
};
module.exports.expectEnteredCreationYearToBe = function(data, key) {
	key = key || "creationYear";
	it("Validate entered creation year", function() {
		expect(pages.work.enteredCreationYear()).toBe(
			pph.toString(data[key])
		);
	});
};
module.exports.expectEnteredCreationYearNotToBe = function(data, key) {
	key = key || "creationYear";
	it("Validate entered creation year", function() {
		expect(pages.work.enteredCreationYear()).not.toBe(
			pph.toString(data[key])
		);
	});
};
module.exports.validateDeliveryDate = function(data, keys) {
	keys = keys || {
		year: "deliveryYear",
		month: "deliveryMonth",
		day: "deliveryDay",
	};
	it("Validate delivery date (if first validation value is not empty)", function() {
		var values = [
			data[keys.year],
			data[keys.month],
			data[keys.day],
		];
		promise.all(values).then(function(values) {
			var date;
			var allTruthy = values.every(function(value) {
				return !!value;
			});
			if(!allTruthy) {
				return;
			}
			_.times(2, function(i) {
				values[i + 1] = pad(2, values[i + 1], "0");
			});
			date = values.join("-");
			expect(pages.work.deliveryDate()).toBe(date);
		});
	});
};
module.exports.expectEnteredDeliveryYearToBe = function(data, key) {
	key = key || "deliveryYear";
	it("Validate entered delivery year", function() {
		expect(pages.work.enteredDeliveryYear()).toBe(
			pph.toString(data[key])
		);
	});
};
module.exports.expectEnteredDeliveryYearNotToBe = function(data, key) {
	key = key || "deliveryYear";
	it("Validate entered delivery year", function() {
		expect(pages.work.enteredDeliveryYear()).not.toBe(
			pph.toString(data[key])
		);
	});
};
module.exports.validateMusicalDistributionCategory = function(data, key) {
	key = key || "musicalDistributionCategory";
	it("Validate musical distribution category (if validation value is not empty)", function() {
		var value = data[key];
		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}

			expect(pages.work.musicalDistributionCategory()).toBe(value);
		});
	});
};
module.exports.validateTextMusicRelationship = function(data, key) {
	key = key || "textMusicRelationship";
	it("Validate text music relationship (if validation value is not empty)", function() {
		var value = data[key];
		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}

			if(value.toLowerCase() === "select type") {
				expect(pages.base.isPresentAndDisplayed(
					pages.work.textMusicRelationshipBinding()
				)).toBeFalsy();
			}
			else {
				expect(pages.work.textMusicRelationship()).toBe(value);
			}
		});
	});
};
module.exports.validateExcerptType = function(data, key) {
	key = key || "excerptType";
	it("Validate excerpt type (if validation value is not empty)", function() {
		var value = data[key];
		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}

			if(value.toLowerCase() === "select type") {
				expect(pages.base.isPresentAndDisplayed(
					pages.work.excerptTypeBinding()
				)).toBeFalsy();
			}
			else {
				expect(pages.work.excerptType()).toBe(value);
			}
		});
	});
};
module.exports.validateVersionType = function(data, key) {
	key = key || "versionType";
	it("Validate version type (if validation value is not empty)", function() {
		var value = data[key];
		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}

			expect(pages.work.versionType()).toBe(value);
		});
	});
};
module.exports.validateLyricAdaptation = function(data, key) {
	key = key || "lyricAdaptation";

	it("Validate lyric adaptation (if validation value is not empty)", function() {
		var value = data[key];

		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}

			expect(pages.work.lyricAdaptation()).toBe(value);
		});
	});
};
module.exports.validateMusicArrangement = function(data, key) {
	key = key || "musicArrangement";

	it("Validate music arrangement (if validation value is not empty)", function() {
		var value = data[key];

		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}

			expect(pages.work.musicArrangement()).toBe(value);
		});
	});
};
module.exports.validateIntendedPurpose = function(data, key) {
	key = key || "intendedPurpose";

	it("Validate intended purpose (if validation value is not empty)", function() {
		var value = data[key];

		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}

			if(value.toLowerCase() === "select type") {
				expect(pages.base.isPresentAndDisplayed(
					pages.work.intendedPurposeBinding()
				)).toBeFalsy();
			}
			else {
				expect(pages.work.intendedPurpose()).toBe(value);
			}
		});
	});
};
module.exports.validateProductionTitle = function(data, key) {
	key = key || "productionTitle";

	it("Validate production title (if validation value is not empty)", function() {
		var value = data[key];

		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}
			expect(pages.work.productionTitle()).toBe(value);
		});
	});
};
module.exports.validateBltvr = function(data, key) {
	key = key || "bltvr";

	it("Validate BLTVR (if validation value is not empty)", function() {
		var value = data[key];

		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}
			expect(pages.work.bltvr()).toBe(value);
		});
	});
};
module.exports.validateMusicLibrary = function(data, key) {
	key = key || "musicLibrary";

	it("Validate music library (if validation value is not empty)", function() {
		var value = data[key];

		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}

			expect(pages.work.musicLibrary()).toBe(value);
		});
	});
};
module.exports.expectMusicalDistributionCategoryToBe = function(data, key) {
	key = key || "musicalDistributionCategory";

	it("Validate selected musical distribution category", function() {
		expect(pages.work.selectedMusicalDistributionCategory()).toBe(
			data[key]
		);
	});
};
module.exports.expectMusicalDistributionCategoryNotToBe = function(data, key) {
	key = key || "musicalDistributionCategory";

	it("Validate selected musical distribution category", function() {
		expect(pages.work.selectedMusicalDistributionCategory()).not.toBe(
			data[key]
		);
	});
};
module.exports.expectIntendedPurposeToBe = function(data, key) {
	key = key || "intendedPurpose";

	it("Validate selected intended purpose", function() {
		expect(pages.work.selectedIntendedPurpose()).toBe(data[key]);
	});
};
module.exports.expectIntendedPurposeNotToBe = function(data, key) {
	key = key || "intendedPurpose";

	it("Validate selected intended purpose", function() {
		expect(pages.work.selectedIntendedPurpose()).not.toBe(data[key]);
	});
};
module.exports.expectWorkInclusionOnWebsiteOptionToBe = function(data, key) {
	key = key || "workInclusionOnWebsiteOption";

	it (
		"Validate work inclusion on website option", function() {
			expect(pages.work.selectedWorkInclusionOnWebsiteOption()).toBe(
				data[key]
			);
		}
	);
};
module.exports.expectWorkInclusionOnWebsiteOptionNotToBe = function(data, key) {
	key = key || "workInclusionOnWebsiteOption";

	it (
		"Validate work inclusion on website option", function() {
			expect(pages.work.selectedWorkInclusionOnWebsiteOption()).not.toBe(
				data[key]
			);
		}
	);
};
module.exports.validateIncludeWorkOnWebsite = function(data, key) {
	key = key || "inclusionOnWebsite";

	it (
		"Validate 'Include work on website' option (if validation value is not empty)", function() {
			var value = data[key];
			promise.when(value).then(function(value) {
				if(value === undefined || value === null) {
					return;
				}
				expect(pages.work.workInclusionOnWebsite()).toBe(value);
			});
		}
	);
};
// Flow.
module.exports.editBasicWork = function(data, more) {
	more = more || {};

	more.skip = more.skip || {};
	//more.skip.navigation = true;
	//more.skip.workTitles = true;
	//more.skip.creators = true;
	//more.skip.creationDate = true;
	//more.skip.deliveryDate = true;
	//more.skip.assetType = true;
	//more.skip.workOrigin = true;
	//more.skip.inclusionOnWebsite = true;

	describe (
		"Edit basic work", function() {
			if(!more.skip.navigation && data.workId) {
				steps.work.goToWorkPage(data.workId);
			}

			if(!more.skip.workTitles) {
				steps.work.hoverPrimaryWorkTitleHeading();
				steps.work.editWorkTitles();
				steps.work.enterRandomPrimaryWorkTitle(data);
				steps.work.waitTitleEditorCheckForDuplicates();
				steps.work.cancelWorkTitlesEditing();
				steps.base.dirtyCheckConfirmCancellation();
				steps.work.hoverPrimaryWorkTitleHeading();
				steps.work.editWorkTitles();
				steps.work.expectPrimaryWorkTitleFieldValueNotToBe(data);

				steps.work.enterRandomPrimaryWorkTitle(data);
				steps.work.waitTitleEditorCheckForDuplicates();
				steps.work.cancelWorkTitlesEditing();
				steps.base.dirtyCheckContinueEditing();
				steps.work.expectPrimaryWorkTitleFieldValueToBe(data);

				steps.work.validateDefaultAlternateWorkTitleLanguage();

				_.times(
					2, function(i) {
						steps.work.enterRandomAlternateWorkTitle(i, data);
					}
				);

				steps.work.enterNewRandomAlternateWorkTitle(data);

				steps.work.saveWorkTitles();
			}

			if(!more.skip.creators) {
				steps.work.hoverCreatorNamesContainer();
				steps.work.editCreators();

				(function() {
					var evenContribution = steps.work.calculateEvenCreatorContributions();

					_.times(
						2, function(i) {
							var firstOne = (i === 0);

							if(firstOne) {
								steps.work.enterCreatorContribution(i, 0, data);

								steps.work.cancelCreatorsEditing();
								steps.base.dirtyCheckConfirmCancellation();

								steps.work.hoverCreatorNamesContainer();
								steps.work.editCreators();

								steps.work.expectFirstCreatorContributionFieldValueNotToBe(data);
							}

							steps.work.selectDifferentRandomCreator(i, data);

							if(firstOne) {
								steps.work.waitCreatorsEditorCheckForDuplicates();

								steps.work.validateCreatorContributionInputMask(i);
							}

							steps.work.enterCreatorContribution(i, evenContribution, data);

							if(firstOne) {
								steps.work.cancelCreatorsEditing();
								steps.base.dirtyCheckContinueEditing();

								steps.work.expectFirstCreatorContributionFieldValueToBe(evenContribution);
							}
						}
					);
				})();

				steps.work.saveCreators();
			}

			if(!more.skip.creationDate) {
				steps.work.hoverCreationDateContainerLabel();
				steps.work.editCreationDate();

				(function() {
					var daysAgo = _.random(1, 30 * 12 * 2);
					var pastDate = random.moment(moment().subtract(daysAgo, "day"));

					steps.work.enterDifferentCreationYear(data);
					steps.work.cancelCreationDateEditing();
					steps.base.dirtyCheckConfirmCancellation();
					steps.work.hoverCreationDateContainerLabel();
					steps.work.editCreationDate();
					steps.work.expectEnteredCreationYearNotToBe(data);

					steps.work.enterCreationYear(pastDate.year(), data);
					steps.work.cancelCreationDateEditing();
					steps.base.dirtyCheckContinueEditing();
					steps.work.expectEnteredCreationYearToBe(data);

					steps.work.enterCreationMonth(pastDate.month(), data);

					steps.work.enterCreationDay(pastDate.date(), data);
				})();

				steps.work.saveCreationDate();
			}

			if(!more.skip.deliveryDate) {
				steps.work.hoverDeliveryDateContainerLabel();
				steps.work.editDeliveryDate();

				(function() {
					var daysAgo = _.random(1, 30 * 12 * 2);
					var pastDate = random.moment(moment().subtract(daysAgo, "day"));

					steps.work.enterDifferentDeliveryYear(data);
					steps.work.cancelDeliveryDateEditing();
					steps.base.dirtyCheckConfirmCancellation();
					steps.work.hoverDeliveryDateContainerLabel();
					steps.work.editDeliveryDate();
					steps.work.expectEnteredDeliveryYearNotToBe(data);

					steps.work.enterDeliveryYear(pastDate.year(), data);
					steps.work.cancelDeliveryDateEditing();
					steps.base.dirtyCheckContinueEditing();
					steps.work.expectEnteredDeliveryYearToBe(data);

					steps.work.enterDeliveryMonth(pastDate.month(), data);

					steps.work.enterDeliveryDay(pastDate.date(), data);
				})();

				steps.work.saveDeliveryDate();
			}

			if(!more.skip.assetType) {
				steps.work.hoverAssetTypeContainer();
				steps.work.editAssetType();
				steps.work.selectDifferentRandomMusicalDistributionCategory(data);
				steps.work.cancelAssetTypeEditing();
				steps.base.dirtyCheckConfirmCancellation();
				steps.work.hoverAssetTypeContainer();
				steps.work.editAssetType();
				steps.work.expectMusicalDistributionCategoryNotToBe(data);

				steps.work.selectDifferentRandomMusicalDistributionCategory(data);
				steps.work.cancelAssetTypeEditing();
				steps.base.dirtyCheckContinueEditing();
				steps.work.expectMusicalDistributionCategoryToBe(data);

				steps.work.selectDifferentRandomTextMusicRelationship(data)
				steps.work.selectDifferentRandomExcerptType(data);
				steps.work.selectDifferentRandomVersionType(data);
				steps.work.selectDifferentRandomLyricAdaptation(data);
				steps.work.selectDifferentRandomMusicArrangement(data);

				steps.work.saveAssetType();
			}

			if(!more.skip.workOrigin) {
				steps.work.hoverWorkOriginContainer();
				steps.work.editWorkOrigin();
				steps.work.selectDifferentRandomIntendedPurpose(data);
				steps.work.cancelWorkOriginEditing();
				steps.base.dirtyCheckConfirmCancellation();
				steps.work.hoverWorkOriginContainer();
				steps.work.editWorkOrigin();
				steps.work.expectIntendedPurposeNotToBe(data);

				steps.work.selectDifferentRandomIntendedPurpose(data);
				steps.work.cancelWorkOriginEditing();
				steps.base.dirtyCheckContinueEditing();
				steps.work.expectIntendedPurposeToBe(data);

				steps.work.enterRandomProductionTitle(data);
				steps.work.selectDifferentRandomBltvr(data);
				steps.work.selectDifferentRandomMusicLibrary(data);

				steps.work.saveWorkOrigin();
			}

			if(!more.skip.inclusionOnWebsite) {
				steps.work.hoverWorkInclusionOnWebsiteIndicator();
				steps.work.editWorkInclusionOnWebsite();
				steps.work.toggleWorkInclusionOnWebsite(data);
				steps.work.cancelWorkInclusionOnWebsiteEditing();
				steps.base.dirtyCheckConfirmCancellation();
				steps.work.hoverWorkInclusionOnWebsiteIndicator();
				steps.work.editWorkInclusionOnWebsite();
				steps.work.expectWorkInclusionOnWebsiteOptionNotToBe(data);

				steps.work.toggleWorkInclusionOnWebsite(data);
				steps.work.cancelWorkInclusionOnWebsiteEditing();
				steps.base.dirtyCheckContinueEditing();
				steps.work.expectWorkInclusionOnWebsiteOptionToBe(data);

				steps.work.saveWorkInclusionOnWebsite();
			}
		}
	);
};
module.exports.validateWork = function(data, more) {
	more = more || {};

	more.skip = more.skip || {};
	//more.skip.navigation = true;
	//more.skip.workTitles = true;
	//more.skip.creators = true;
	//more.skip.creationDate = true;
	//more.skip.deliveryDate = true;
	//more.skip.assetType = true;
	//more.skip.workOrigin = true;
	//more.skip.inclusionOnWebsite = true;

	describe (
		"Validate work data", function() {
			if(!more.skip.navigation && data.workId) {
				steps.work.goToWorkPage(data.workId);
			}

			if(!more.skip.workTitles) {
				steps.work.validatePrimaryWorkTitle(data);
				steps.work.validateAlternateWorkTitles(data);
			}

			if(!more.skip.creationDate) {
				steps.work.validateCreationDate(data);
			}

			if(!more.skip.deliveryDate) {
				steps.work.validateDeliveryDate(data);
			}

			if(!more.skip.assetType) {
				steps.work.validateMusicalDistributionCategory(data);
				steps.work.validateTextMusicRelationship(data);
				steps.work.validateExcerptType(data);
				steps.work.validateVersionType(data);
				steps.work.validateLyricAdaptation(data);
				steps.work.validateMusicArrangement(data);
			}

			if(!more.skip.workOrigin) {
				steps.work.validateIntendedPurpose(data);
				steps.work.validateProductionTitle(data);
				steps.work.validateBltvr(data);
				steps.work.validateMusicLibrary(data);
			}

			if(!more.skip.inclusionOnWebsite) {
				steps.work.validateIncludeWorkOnWebsite(data);
			}

			if(!more.skip.creators) {
				steps.work.goToScopeDelivery();
				steps.work.validateCreatorNames(data);
				steps.work.validateCreatorContributions(data);
			}
		}
	);
};
