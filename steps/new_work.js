"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var randomId = require("../helpers/randomId");
var pph = require("../helpers/pph");
var promise = protractor.promise;
require(pages_path + "new_work");
require(steps_path + "base");
require(steps_path + "work");
module.exports = steps.new_work = {};
// Navigation.
module.exports.goToNewWorkPage = function() {
	it (
		"Go to New Work page", function() {
			pages.new_work.open().waitForAjax();
		}
	);
};
// Validation.
module.exports.validateDefaultPrimaryWorkLanguage = function() {
	it (
		"Validate default primary work title language", function() {
			expect(pages.new_work.selectedPrimaryWorkTitleLanguage()).toBe("English");
		}
	);
};
module.exports.validateDefaultAlternateWorkTitleLanguage = function(i) {
	it (
		"Validate default alternate work title language #" + (i + 1), function() {
			expect(pages.new_work.selectedAlternateWorkTitleLanguage(i)).toBe("English");
		}
	);
};
module.exports.validateDefaultCreatorRole = function(i) {
	it (
		"Validate default creator role #" + (i + 1), function() {
			expect(pages.new_work.selectedCreatorRole(i)).toBe("CA");
		}
	);
};
module.exports.validateTotalContributionPercentage = function() {
	it (
		"Validate total contribution", function() {
			expect(pages.new_work.totalContribution()).toBe(100);
		}
	);
};
module.exports.validateDefaultMusicalDistributionCategory = function() {
	it (
		"Validate default musical distribution category", function() {
			expect(pages.new_work.selectedMusicalDistributionCategory()).toBe("Popular");
		}
	);
};
module.exports.validateDefaultTextMusicRelationship = function() {
	it (
		"Validate default text music relationship", function() {
			expect(pages.new_work.selectedTextMusicRelationship()).toBe("Select type");
		}
	);
};
module.exports.validateDefaultExcerptType = function() {
	it (
		"Validate default excerpt type", function() {
			expect(pages.new_work.selectedExcerptType()).toBe("Select type");
		}
	);
};
module.exports.validateDefaultVersionType = function() {
	it (
		"Validate default version type", function() {
			expect(pages.new_work.selectedVersionType()).toBe("Original Work");
		}
	);
};
module.exports.validateDefaultLyricAdaptation = function() {
	it("Validate default lyric adaptation (if displayed)", function() {
		pages.new_work.isLyricAdaptationFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				return;
			}
			expect(pages.new_work.selectedLyricAdaptation()).toBe("Unspecified");
		});
	});
};
module.exports.validateDefaultMusicArrangement = function() {
	it("Validate default music arrangement (if displayed)", function() {
		pages.new_work.isMusicArrangementFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				return;
			}
			expect(pages.new_work.selectedMusicArrangement())
				.toBe("Unspecified arrangement");
		});
	});
};
module.exports.validateDefaultIntendedPurpose = function() {
	it (
		"Validate default intended purpose", function() {
			expect(pages.new_work.selectedIntendedPurpose()).toBe("Select type");
		}
	);
};
module.exports.validateDefaultBltvr = function() {
	it("Validate default BLTVR (if displayed)", function() {
		pages.new_work.isBltvrFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				return;
			}
			expect(pages.new_work.selectedBltvr()).toBe("Select type");
		});
	});
};
module.exports.validateDefaultMusicLibrary = function() {
	it("Validate default music library (if displayed)", function() {
		pages.new_work.isMusicLibraryFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				return;
			}
			expect(pages.new_work.selectedMusicLibrary()).toBe("Select Library");
		});
	});
};
// Data input.
module.exports.enterRandomPrimaryWorkTitle = function() {
	var deferred = promise.defer();
	it (
		"Enter random primary work title", function() {
			var title = "TEST WORK TITLE " + randomId();
			pages.new_work.enterPrimaryWorkTitle(title);
			deferred.fulfill(title);
		}
	);
	return deferred.promise;
};
module.exports.enterRandomAlternateWorkTitle = function(i) {
	var deferred = promise.defer();
	it (
		"Enter a random alternate work title #" + (i + 1), function() {
			var title = "TEST ALTERNATE WORK TITLE " + randomId();
			pages.new_work.enterAlternateWorkTitle(i, title);
			deferred.fulfill(title);
		}
	);
	return deferred.promise;
};
module.exports.selectRandomCreator = function(i) {
	var deferred = promise.defer();
	describe (
		"Select random creator #" + (i + 1), function() {
			deferred.fulfill (
				pages.base.selectRandomTypeaheadValue (
					pages.new_work.creatorNameInput(i)
				)
			);
		}
	);
	return deferred.promise;
};
module.exports.enterCreatorContribution = function(i, value) {
	it (
		"Enter contribution percentage for creator #" + (i + 1), function() {
			pages.new_work.enterContributionPercentage(i, value);
		}
	);
};
module.exports.selectRandomMusicalDistributionCategory = function() {
	var deferred = promise.defer();
	it("Select a random musical distribution category", function() {
		deferred.fulfill(pages.base.selectRandomDropdownOption(
			pages.new_work.musicalDistributionCategoryDropdown(),
			{ dropdownType: "tg" }
		));
	});
	return deferred.promise;
};
module.exports.selectRandomTextMusicRelationship = function() {
	var deferred = promise.defer();
	it("Select a random text music relationship", function() {
		deferred.fulfill(pages.base.selectRandomDropdownOption(
			pages.new_work.textMusicRelationshipDropdown(),
			{ dropdownType: "tg" }
		));
	});
	return deferred.promise;
};
module.exports.selectRandomExcerptType = function() {
	var deferred = promise.defer();
	it("Select a random excerpt type", function() {
		deferred.fulfill(pages.base.selectRandomDropdownOption(
			pages.new_work.excerptTypeDropdown(),
			{ dropdownType: "tg" }
		));
	});
	return deferred.promise;
};
module.exports.selectRandomVersionType = function() {
	var deferred = promise.defer();
	it("Select a random version type", function() {
		deferred.fulfill(pages.base.selectRandomDropdownOption(
			pages.new_work.versionTypeDropdown(),
			{ dropdownType: "tg" }
		));
	});
	return deferred.promise;
};
module.exports.selectRandomLyricAdaptation = function() {
	var deferred = promise.defer();
	it("Select a random lyric adaptation (if displayed)", function() {
		pages.new_work.isLyricAdaptationFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				deferred.fulfill(null);
				return;
			}
			deferred.fulfill(pages.base.selectRandomDropdownOption(
				pages.new_work.lyricAdaptationDropdown(),
				{ dropdownType: "tg" }
			));
		});
	});
	return deferred.promise;
};
module.exports.selectRandomMusicArrangement = function() {
	var deferred = promise.defer();
	it("Select a random music arrangement (if displayed)", function() {
		pages.new_work.isMusicArrangementFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				deferred.fulfill(null);
				return;
			}
			deferred.fulfill(pages.base.selectRandomDropdownOption(
				pages.new_work.musicArrangementDropdown(),
				{ dropdownType: "tg" }
			));
		});
	});
	return deferred.promise;
};
module.exports.selectRandomIntendedPurpose = function() {
	var deferred = promise.defer();
	it("Select a random music arrangement (if displayed)", function() {
		pages.new_work.isIntendedPurposeFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				deferred.fulfill(null);
				return;
			}
			deferred.fulfill(pages.base.selectRandomDropdownOption(
				pages.new_work.intendedPurposeDropdown(),
				{ dropdownType: "tg" }
			));
		});
	});
	return deferred.promise;
};
module.exports.enterRandomProductionTitle = function() {
	var deferred = promise.defer();
	it("Enter a random production title (if displayed)", function() {
		pages.new_work.isProductionTitleFieldDisplayed().then(function(isDisplayed) {
			var title;
			if(!isDisplayed) {
				deferred.fulfill(null);
				return;
			}
			title = "TEST PRODUCTION TITLE " + randomId();
			pages.new_work.enterProductionTitle(title);
			deferred.fulfill(title);
		});
	});
	return deferred.promise;
};
module.exports.selectRandomBltvr = function() {
	var deferred = promise.defer();
	it("Select a random music arrangement (if displayed)", function() {
		pages.new_work.isBltvrFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				deferred.fulfill(null);
				return;
			}
			deferred.fulfill(pages.base.selectRandomDropdownOption(
				pages.new_work.bltvrDropdown(),
				{ dropdownType: "tg" }
			));
		});
	});
	return deferred.promise;
};
module.exports.selectRandomMusicLibrary = function() {
	var deferred = promise.defer();
	it("Select a random music library (if displayed)", function() {
		pages.new_work.isMusicLibraryFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				deferred.fulfill(null);
				return;
			}
			deferred.fulfill(pages.base.selectRandomDropdownOption(
				pages.new_work.musicLibraryDropdown(),
				{ dropdownType: "tg" }
			));
		});
	});
	return deferred.promise;
};
module.exports.optToIncludeWorkOnWebsite = function(include) {
	it (
		"Opt whether to include work on WarnerChappell.com or not", function() {
			pages.new_work.optToIncludeWorkOnWebsite(include);
		}
	);
};
// Flow.
module.exports.createBasicWork = function(data) {
	describe (
		"Create basic work", function() {
			steps.new_work.goToNewWorkPage();

			steps.new_work.validateDefaultPrimaryWorkLanguage();
			data.primaryWorkTitle = steps.new_work.enterRandomPrimaryWorkTitle();

			data.alternateWorkTitles = _.times (
				2, function(i) {
					steps.new_work.validateDefaultAlternateWorkTitleLanguage(i);
					return steps.new_work.enterRandomAlternateWorkTitle(i);
				}
			);

			data.creators = (function() {
				var howMany = 2;
				var creators = _.times (
					howMany, function(i) {
						var creator = {};
						steps.new_work.validateDefaultCreatorRole(i);
						creator.name = steps.new_work.selectRandomCreator(i);
						creator.contribution = 100 / howMany;
						steps.new_work.enterCreatorContribution(i, creator.contribution);
						return creator;
					}
				);
				steps.new_work.validateTotalContributionPercentage();
				return creators;
			})();

			steps.new_work.validateDefaultMusicalDistributionCategory();
			steps.new_work.selectRandomMusicalDistributionCategory();

			steps.new_work.validateDefaultTextMusicRelationship();
			steps.new_work.selectRandomTextMusicRelationship();

			steps.new_work.validateDefaultExcerptType();
			steps.new_work.selectRandomExcerptType();

			steps.new_work.validateDefaultVersionType();
			steps.new_work.selectRandomVersionType();

			steps.new_work.validateDefaultLyricAdaptation();
			steps.new_work.selectRandomLyricAdaptation();

			steps.new_work.validateDefaultMusicArrangement();
			steps.new_work.selectRandomMusicArrangement();

			steps.new_work.validateDefaultIntendedPurpose();
			steps.new_work.selectRandomIntendedPurpose();

			steps.new_work.enterRandomProductionTitle();

			steps.new_work.validateDefaultBltvr();
			steps.new_work.selectRandomBltvr();

			steps.new_work.validateDefaultMusicLibrary();
			steps.new_work.selectRandomMusicLibrary();

			data.includeOnWebsite = (function() {
				var include = _.sample([true, false]);
				steps.new_work.optToIncludeWorkOnWebsite(include);
				return include;
			})();

			steps.base.clickElement("Save Work", pages.new_work.saveWorkButton());
			steps.base.validateRedirection("created work page", "/metadata");

			data.workId = steps.work.findCurrentlyOpenWorkId();
		}
	);
};
