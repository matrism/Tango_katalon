"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var moment = require("moment");
var pad = require("pad");
var pph = require("../helpers/pph");
var random = require("../helpers/random");
var promise = protractor.promise;
require(pages_path + "work");
steps.work = exports;
module.exports.goToWorkPage = function(data, key) {
    var workId;
    data = data || hash.subjectWorkData || {};
    key = key || 'workId';
    workId = data[key];
    it('Go to work page', function() {
        pages.work.open(workId);
    });
};
module.exports.goToScopeDelivery = function() {
	it (
		"Go to Scope Delivery", function() {
			pages.work.goToScopeDelivery();
		}
	);
};
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
module.exports.enterPrimaryWorkTitle = function(value) {
    it("Enter primary work title", function() {
        pages.work.enterPrimaryWorkTitle(value);
    });
};
module.exports.enterRandomPrimaryWorkTitle = function() {
	var deferred = promise.defer();
	it (
		"Enter a random primary work title", function() {
			var title = "TEST WORK TITLE " + random.id();
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
			var title = "TEST ALTERNATE WORK TITLE " + random.id();
			pages.work.enterAlternateWorkTitle(i, title);
			deferred.fulfill(title);
		}
	);
	return deferred.promise;
};
module.exports.enterNewRandomAlternateWorkTitle = function() {
	var deferred = promise.defer();
	it (
		"Enter new random alternate work title", function() {
			var title = "TEST ALTERNATE WORK TITLE " + random.id();
			pages.work.enterNewAlternateWorkTitle(title);
			deferred.fulfill(title);
		}
	);
	return deferred.promise;
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
exports.clickCompositeWorkCheckbox = function(data, key) {
    it('Click composite work checkbox', function() {
        pages.work.clickCompositeWorkCheckbox().then(function(value) {
            data = data || hash.subjectWorkData || {};
            key = key || 'isCompositeWork';

            data[key] = value;
        });
    });
};
exports.expectDisablingWorkAsCompositePopUpToBeDisplayed = function() {
    it('Expect disabling work as a composite work pop-up to be displayed', function() {
        pages.work.expectDisablingWorkAsCompositePopUpToBeDisplayed();
    });
};
exports.confirmDisablingWorkAsComposite = function() {
    it('Confirm disabling work as a composite work', function() {
        pages.work.confirmDisablingWorkAsComposite();
    });
};
exports.validateCompositeWorkCheckbox = function(data, key) {
    it('Validate composite work checkbox', function() {
        data = data || hash.subjectWorkData || {};
        key = key || 'isCompositeWork';

        expect(pages.work.compositeWorkCheckboxState()).toBe(data[key]);
    });
};
exports.validateRequiredCompositeWorkTypeField = function() {
    it('Validate required composite work type field', function() {
        pages.work.validateRequiredCompositeWorkTypeField();
    });
};
exports.validateDefaultCompositeWorkType = function() {
    it('Validate default composite work type', function() {
        pages.work.validateDefaultCompositeWorkType();
    });
};
exports.selectCompositeWorkType = function(value, data, key) {
    key = key || 'compositeWorkType';
    data = data || hash.subjectWorkData || {};

    it('Select composite work type', function() {
        pages.work.selectCompositeWorkType(value);
        data[key] = value;
    });
};
exports.expectMakingIntoMedleyConfirmationPopUpToBeDisplayed = function() {
    it('Expect making into Medley confirmation pop-up to be displayed', function() {
        pages.work.expectMakingIntoMedleyConfirmationPopUpToBeDisplayed();
    });
};
exports.confirmMakingIntoMedley = function(data, key) {
    it('Confirm making work into a Medley', function() {
        pages.work.confirmMakingIntoMedley();

        data = data || hash.subjectWorkData || {};
        key = key || 'creators';
        data[key] = [];
    });
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
exports.enterMediumCreatorContribution = function(i, contribution, data, key) {
    it('Enter medium creator contribution #' + (i + 1), function() {
        var creator;

        data = data || hash.subjectWorkData || {};
        key = key || 'creators';
        data[key] = data[key] || [];
        creator = data[key][i] = data[key][i] || {};

        creator.contribution = 50;
        pages.work.enterCreatorContribution(i, creator.contribution);
    });
};
exports.enterCreatorContribution = function(i, contribution, data, key) {
    it("Enter creator contribution #" + (i + 1), function() {
        var creator;

        data = data || hash.subjectWorkData || {};
        key = key || 'creators';
        data[key] = data[key] || [];
        creator = data[key][i] = data[key][i] || {};

        pages.work.enterCreatorContribution(i, contribution);
        creator.contribution = contribution;
    });
};
module.exports.expectFirstCreatorContributionFieldValueToBe = function(value) {
	it("Validate creator contribution #1", function() {
		expect(pages.work.editFirstCreatorContributionFieldValue()).toBe(
			pph.toString(value)
		);
	});
};
module.exports.expectFirstCreatorContributionFieldValueNotToBe = function(value) {
	it("Validate creator contribution #1", function() {
		expect(pages.work.editFirstCreatorContributionFieldValue()).not.toBe(
			pph.toString(value)
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
exports.deleteComponentWork = function(i, data, key) {
    it('Delete component work #' + (i + 1), function() {
        var components;

        data = data || hash.subjectWorkData || {};
        key = key || 'components';
        components = data[key] = data[key] || [];

        pages.work.deleteComponentWork(i);
        components.splice(i, 1);
    });
};
exports.expectComponentWorkDeletionConfirmationPopUpToBeDisplayed = function() {
    it('Expect component work deletion confirmation pop-up to be displayed', function() {
        pages.work.expectComponentWorkDeletionConfirmationPopUpToBeDisplayed();
    });
};
exports.confirmComponentWorkDeletion = function() {
    it('Confirm component work deletion', function() {
        pages.work.confirmComponentWorkDeletion();
    });
};
exports.validateDefaultComponentWorkSearchFilter = function(i) {
    it('Validate default component work search filter', function() {
        pages.work.validateDefaultComponentWorkSearchFilter(i);
    });
};
exports.validateRequiredComponentWorkSearchField = function(i) {
    it('Validate required component work search field', function() {
        pages.work.validateRequiredComponentWorkSearchField(i);
    });
};
exports.selectFirstComponentWorkMatching = function(i, value, data, key) {
    it('Enter search terms on component work search field #' + (i + 1), function() {
        pages.work.enterComponentWorkSearchTerms(i, value);
    });

    it('Expect work suggestions dropdown to be displayed', function() {
        pages.work.expectComponentWorkSuggestionsToBeDisplayed();
    });

    it('Select a random work', function() {
        pages.work.selectFirstComponentWorkSuggestion().then(function(selected) {
            var component;

            data = data || hash.subjectWorkData || {};
            key = key || 'components';
            data[key] = data[key] || [];
            component = data[key][i] = data[key][i] || {};

            component.name = selected.name;
            component.workCode = selected.workCode;
        });
    });
};
exports.expectShowComponentWorkDetailsButtonToAppear = function(i) {
    it('Expect "Show Details" button to appear next to component work title', function() {
        pages.work.expectShowComponentWorkDetailsButtonToAppear(i);
    });
};
exports.expectSameWorkCantBeAddedAsComponentMultipleTimesMessageToAppear = function(i) {
    it('Expect "Same work can\'t be added as a component multiple times" message to appear', function() {
        pages.work.expectSameWorkCantBeAddedAsComponentMultipleTimesMessageToAppear(i);
    });
};
exports.validateRequiredComponentWorkAllocationField = function(i) {
    it('Validate required component work allocation field', function() {
        pages.work.validateRequiredComponentWorkAllocationField(i);
    });
};
exports.enterComponentWorkAllocation = function(i, value, data, key) {
    it('Enter component work allocation #' + (i + 1), function() {
        var component;

        data = data || hash.subjectWorkData || {};
        key = key || 'components';
        data[key] = data[key] || [];
        component = data[key][i] = data[key][i] || {};

        pages.work.enterComponentWorkAllocation(i, value);
        component.allocation = value;
    });
};
exports.enterMediumComponentWorkAllocation = function(i, data, key) {
    it('Enter component work allocation #' + (i + 1), function() {
        var component;

        data = data || hash.subjectWorkData || {};
        key = key || 'components';
        data[key] = data[key] || [];
        component = data[key][i] = data[key][i] || {};

        component.allocation = 50;
        pages.work.enterComponentWorkAllocation(i, component.allocation);
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
module.exports.enterDifferentCreationYear = function() {
	var deferred = promise.defer();
	it("Enter different creation date year", function() {
		var enteredYear = pages.work.enteredCreationYear();
		var differentYear = enteredYear.then(function(enteredYear) {
			return enteredYear - 1;
		});
		pages.work.enterCreationYear(differentYear);
		deferred.fulfill(differentYear);
	});
	return deferred.promise;
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
module.exports.enterDifferentDeliveryYear = function() {
	var deferred = promise.defer();
	it("Enter different delivery date year", function() {
		var enteredYear = pages.work.enteredDeliveryYear();
		var differentYear = enteredYear.then(function(enteredYear) {
			return enteredYear - 1;
		});
		pages.work.enterDeliveryYear(differentYear);
		deferred.fulfill(differentYear);
	});
	return deferred.promise;
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
module.exports.selectDifferentRandomMusicalDistributionCategory  = function() {
	return steps.base.selectRandomDropdownOption (
		"musical distribution category",
		pages.work.editMusicalDistributionCategoryField(),
		{ different: true }
	);
};
module.exports.selectDifferentRandomTextMusicRelationship  = function() {
	return steps.base.selectRandomDropdownOption (
		"text music relationship",
		pages.work.editTextMusicRelationshipField(),
		{ different: true }
	);
};
module.exports.selectDifferentRandomExcerptType  = function() {
	return steps.base.selectRandomDropdownOption (
		"excerpt type",
		pages.work.editExcerptTypeField(),
		{ different: true }
	);
};
module.exports.selectDifferentRandomVersionType  = function() {
	return steps.base.selectRandomDropdownOption (
		"version type",
		pages.work.editVersionTypeField(),
		{ different: true }
	);
};
module.exports.selectDifferentRandomLyricAdaptation  = function() {
	return steps.base.selectRandomDropdownOption (
		"lyric adaptation",
		pages.work.editLyricAdaptationField(),
		{ skipIfNotPresent: true, different: true }
	);
};
module.exports.selectDifferentRandomMusicArrangement = function() {
	return steps.base.selectRandomDropdownOption (
		"music arrangement",
		pages.work.editMusicArrangementField(),
		{ skipIfNotPresent: true, different: true }
	);
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
module.exports.selectDifferentRandomIntendedPurpose = function() {
	return steps.base.selectRandomDropdownOption (
		"intended purpose",
		pages.work.editIntendedPurposeField(),
		{ dropdownType: "tg", different: true }
	);
};
module.exports.enterRandomProductionTitle = function() {
	var deferred = promise.defer();
	it (
		"Enter a random production title (if present)", function() {
			var title = "TEST PRODUCTION TITLE " + random.id();
			deferred.fulfill (
				pages.work.enterProductionTitle(title, { skipIfNotPresent: true })
			);
		}
	);
	return deferred.promise;
};
module.exports.selectDifferentRandomBltvr = function() {
	return steps.base.selectRandomDropdownOption (
		"BLTVR", pages.work.editBltvrField(),
		{ skipIfNotPresent: true, different: true }
	);
};
module.exports.selectDifferentRandomMusicLibrary = function() {
	return steps.base.selectRandomDropdownOption (
		"music library",
		pages.work.editMusicLibraryField(),
		{ dropdownType: "tg", skipIfNotPresent: true, different: true }
	);
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
		"Validate primary work title (if validation value is not empty)", function() {
			promise.when(title).then(function(title) {
				if(!title) {
					return;
					expect(pages.work.primaryWorkTitle()).toBe(title);
				}
			});
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
		"Validate creator contribution percentage (if validation value is not empty)", function() {
			promise.when(percentage).then(function(percentage) {
				if(!percentage) {
					return;
				}
				expect(pages.work.creatorContributionByName(name)).toBe(percentage);
			});
		}
	);
};
exports.validateCompositeWorkType = function(data, key) {
    data = data || hash.subjectWorkData || {};
    key = key || 'compositeWorkType';

    it('Validate composite work type', function() {
        pages.work.validateCompositeWorkType(data[key]);
    });
};
exports.validateComponentWorkName = function(i, data, key) {
    it('Validate component work name #' + (i + 1), function() {
        var component;

        data = data || hash.subjectWorkData || {};
        key = key || 'components';
        component = data[key][i];

        pages.work.validateComponentWorkName(i, component.name);
    });
};
exports.validateComponentWorkAllocation = function(i, data, key) {
    it('Validate component work allocation #' + (i + 1), function() {
        var component;

        data = data || hash.subjectWorkData || {};
        key = key || 'components';
        component = data[key][i];

        pages.work.validateComponentWorkAllocation(i, component.allocation);
    });
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
module.exports.validateCreationDate = function(year, month, day) {
	it("Validate creation date (if first validation value is not empty)", function() {
		promise.all([year, month, day]).then(function(values) {
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
module.exports.expectEnteredCreationYearToBe = function(value) {
	it("Validate entered creation year", function() {
		expect(pages.work.enteredCreationYear()).toBe(pph.toString(value));
	});
};
module.exports.expectEnteredCreationYearNotToBe = function(value) {
	it("Validate entered creation year", function() {
		expect(pages.work.enteredCreationYear()).not.toBe(pph.toString(value));
	});
};
module.exports.validateDeliveryDate = function(year, month, day) {
	it("Validate delivery date (if first validation value is not empty)", function() {
		promise.all([year, month, day]).then(function(values) {
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
module.exports.expectEnteredDeliveryYearToBe = function(value) {
	it("Validate entered delivery year", function() {
		expect(pages.work.enteredDeliveryYear()).toBe(pph.toString(value));
	});
};
module.exports.expectEnteredDeliveryYearNotToBe = function(value) {
	it("Validate entered delivery year", function() {
		expect(pages.work.enteredDeliveryYear()).not.toBe(pph.toString(value));
	});
};
module.exports.validateMusicalDistributionCategory = function(value) {
	it("Validate musical distribution category (if validation value is not empty)", function() {
		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}
			expect(pages.work.musicalDistributionCategory()).toBe(value);
		});
	});
};
module.exports.validateTextMusicRelationship = function(value) {
	it("Validate text music relationship (if validation value is not empty)", function() {
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
module.exports.validateExcerptType = function(value) {
	it("Validate excerpt type (if validation value is not empty)", function() {
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
module.exports.validateVersionType = function(value) {
	it("Validate version type (if validation value is not empty)", function() {
		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}
			expect(pages.work.versionType()).toBe(value);
		});
	});
};
module.exports.validateLyricAdaptation = function(value) {
	it("Validate lyric adaptation (if validation value is not empty)", function() {
		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}
			expect(pages.work.lyricAdaptation()).toBe(value);
		});
	});
};
module.exports.validateMusicArrangement = function(value) {
	it("Validate music arrangement (if validation value is not empty)", function() {
		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}
			expect(pages.work.musicArrangement()).toBe(value);
		});
	});
};
module.exports.validateIntendedPurpose = function(value) {
	it("Validate intended purpose (if validation value is not empty)", function() {
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
module.exports.validateProductionTitle = function(value) {
	it("Validate production title (if validation value is not empty)", function() {
		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}
			expect(pages.work.productionTitle()).toBe(value);
		});
	});
};
module.exports.validateBltvr = function(value) {
	it("Validate BLTVR (if validation value is not empty)", function() {
		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}
			if(value.toLowerCase() === "select type") {
				expect(pages.base.isPresentAndDisplayed(
					pages.work.bltvrBinding()
				)).toBeFalsy();
			}
			else {
				expect(pages.work.bltvr()).toBe(value);
			}
		});
	});
};
module.exports.validateMusicLibrary = function(value) {
	it("Validate music library (if validation value is not empty)", function() {
		promise.when(value).then(function(value) {
			if(!value) {
				return;
			}
			expect(pages.work.musicLibrary()).toBe(value);
		});
	});
};
module.exports.expectMusicalDistributionCategoryToBe = function(value) {
	it("Validate selected musical distribution category", function() {
		expect(pages.work.selectedMusicalDistributionCategory()).toBe(value);
	});
};
module.exports.expectMusicalDistributionCategoryNotToBe = function(value) {
	it("Validate selected musical distribution category", function() {
		expect(pages.work.selectedMusicalDistributionCategory()).not.toBe(value);
	});
};
module.exports.expectIntendedPurposeToBe = function(value) {
	it("Validate selected intended purpose", function() {
		expect(pages.work.selectedIntendedPurpose()).toBe(value);
	});
};
module.exports.expectIntendedPurposeNotToBe = function(value) {
	it("Validate selected intended purpose", function() {
		expect(pages.work.selectedIntendedPurpose()).not.toBe(value);
	});
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
		"Validate 'Include work on website' option (if validation value is not empty)", function() {
			promise.when(include).then(function(include) {
				if(include === undefined || include === null) {
					return;
				}
				expect(pages.work.workInclusionOnWebsite()).toBe(include);
			});
		}
	);
};
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
				steps.work.goToWorkPage(data);
			}

			if(!more.skip.workTitles) {
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
					2, function(i) {
						return steps.work.enterRandomAlternateWorkTitle(i);
					}
				);

				data.alternateWorkTitles.push(
					steps.work.enterNewRandomAlternateWorkTitle()
				);

				steps.work.saveWorkTitles();
			}

			if(!more.skip.creators) {
				steps.work.hoverCreatorNamesContainer();
				steps.work.editCreators();

				data.creators = (function() {
					var creators;
					var howMany = 2;
					var evenContribution = steps.work.calculateEvenCreatorContributions();

					creators = _.times(
						howMany, function(i) {
							var creator = {};
							var firstOne = (i === 0);

							if(firstOne) {
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

							if(firstOne) {
								steps.work.waitCreatorsEditorCheckForDuplicates();
							}

							creator.contribution = evenContribution;
							steps.work.validateCreatorContributionInputMask(i);
							steps.work.enterCreatorContribution(i, creator.contribution);

							if(firstOne) {
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

			if(!more.skip.creationDate) {
				steps.work.hoverCreationDateContainerLabel();
				steps.work.editCreationDate();
				(function() {
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

			if(!more.skip.deliveryDate) {
				steps.work.hoverDeliveryDateContainerLabel();
				steps.work.editDeliveryDate();
				(function() {
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

			if(!more.skip.assetType) {
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

			if(!more.skip.workOrigin) {
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

			if(!more.skip.inclusionOnWebsite) {
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
module.exports.validateWork = function(data, more) {
	data = data || hash.subjectWorkData;

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
				steps.work.validatePrimaryWorkTitle(data.primaryWorkTitle);

				if(data.alternateWorkTitles) {
					data.alternateWorkTitles.forEach (
						function(alternateWorkTitle) {
							steps.work.validateAlternateWorkTitle(alternateWorkTitle);
						}
					);
				}
			}

			if(!more.skip.creationDate) {
				steps.work.validateCreationDate(
					data.creationYear,
					data.creationMonth,
					data.creationDay
				);
			}

			if(!more.skip.deliveryDate) {
				steps.work.validateDeliveryDate(
					data.deliveryYear,
					data.deliveryMonth,
					data.deliveryDay
				);
			}

			if(!more.skip.assetType) {
				steps.work.validateMusicalDistributionCategory(data.musicalDistributionCategory);
				steps.work.validateTextMusicRelationship(data.textMusicRelationship);
				steps.work.validateExcerptType(data.excerptType);
				steps.work.validateVersionType(data.versionType);
				steps.work.validateLyricAdaptation(data.lyricAdaptation);
				steps.work.validateMusicArrangement(data.musicArrangement);
			}

			if(!more.skip.workOrigin) {
				steps.work.validateIntendedPurpose(data.intendedPurpose);
				steps.work.validateProductionTitle(data.productionTitle);
				steps.work.validateBltvr(data.bltvr);
				steps.work.validateMusicLibrary(data.musicLibrary);
			}

			if(!more.skip.inclusionOnWebsite) {
				steps.work.validateIncludeWorkOnWebsite(data.includeOnWebsite);
			}

			if(!more.skip.creators && data.creators && data.creators.length !== 0) {
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
		}
	);
};
