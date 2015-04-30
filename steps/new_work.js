"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var random = require("../helpers/random");
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
module.exports.ensureContributionRequiredMessageIsDisplayed = function(i) {
	it("Ensure contribution required message is displayed", function() {
		expect(pages.base.isPresentAndDisplayed(
			pages.new_work.contributionRequiredMessage(i)
		)).toBeTruthy();
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
			pages.new_work.enterCreatorContribution(i, input);
			expect(pages.new_work.enteredCreatorContribution(i)).toBe(expectedValue);
		});
		pages.new_work.enterCreatorContribution(i, "");
	});
};
module.exports.ensureTotalContributionTooLowMessageIsDisplayed = function() {
	it("Ensure 'Total contribution is less than 100%' message is displayed", function() {
		expect(pages.base.isPresentAndDisplayed(
			pages.new_work.totalContributionTooLowMessage()
		)).toBeTruthy();
	});
};
module.exports.ensureTotalContributionTooHighMessageIsDisplayed = function() {
	it("Ensure 'Total contribution is more than 100%' message is displayed", function() {
		expect(pages.base.isPresentAndDisplayed(
			pages.new_work.totalContributionTooHighMessage()
		)).toBeTruthy();
	});
};
module.exports.validateTotalContribution = function() {
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
module.exports.enterRandomPrimaryWorkTitle = function(data, key) {
	key = key || "primaryWorkTitle";
	it (
		"Enter random primary work title", function() {
			var title = "TEST WORK TITLE " + random.id();
			pages.new_work.enterPrimaryWorkTitle(title);
			data[key] = title;
		}
	);
};
module.exports.enterRandomAlternateWorkTitle = function(i, data, key) {
	key = key || "alternateWorkTitles";
	it (
		"Enter a random alternate work title #" + (i + 1), function() {
			var title = "TEST ALTERNATE WORK TITLE " + random.id();
			pages.new_work.enterAlternateWorkTitle(i, title);
			data[key] = data[key] || [];
			data[key][i] = title;
		}
	);
};
module.exports.selectRandomCreator = function(i, data, key) {
	key = key || "creators";
	describe (
		"Select random creator #" + (i + 1), function() {
			var creators = data[key];
			var ithCreator;

			if(!creators) {
				creators = data[key] = [];
			}

			ithCreator = creators[i];

			if(!ithCreator) {
				ithCreator = creators[i] = {};
			}

			pages.base.selectRandomTypeaheadValue (
				pages.new_work.creatorNameInput(i)
			).then(function(value) {
				ithCreator.name = value;
			});
		}
	);
};
module.exports.enterMaximumCreatorContribution = function(i, data, key) {
	key = key || "creators";
	it (
		"Enter 100% contribution percentage for creator #" + (i + 1), function() {
			var creators = data[key];
			var ithCreator;

			if(!creators) {
				creators = data[key] = [];
			}

			ithCreator = creators[i];

			if(!ithCreator) {
				ithCreator = creators[i] = {};
			}

			ithCreator.contribution = 100;
			pages.new_work.enterCreatorContribution(i, ithCreator.contribution);
			ithCreator.contribution = 32;
		}
	);
};
module.exports.enterMediumCreatorContribution = function(i, data, key) {
	key = key || "creators";
	it (
		"Enter 50% contribution percentage for creator #" + (i + 1), function() {
			var creators = data[key];
			var ithCreator;

			if(!creators) {
				creators = data[key] = [];
			}

			ithCreator = creators[i];

			if(!ithCreator) {
				ithCreator = creators[i] = {};
			}

			ithCreator.contribution = 50;
			pages.new_work.enterCreatorContribution(i, ithCreator.contribution);
			ithCreator.contribution = 33;
		}
	);
};
module.exports.enterCreatorContribution = function(i, value, data, key) {
	key = key || "creators";
	it (
		"Enter contribution percentage for creator #" + (i + 1), function() {
			var creators = data[key];
			var ithCreator;

			if(!creators) {
				creators = data[key] = [];
			}

			ithCreator = creators[i];

			if(!ithCreator) {
				ithCreator = creators[i] = {};
			}

			pages.new_work.enterCreatorContribution(i, value);
			ithCreator.contribution = value;
		}
	);
};
module.exports.selectRandomMusicalDistributionCategory = function(data, key) {
	key = key || "musicalDistributionCategory";
	it("Select a random musical distribution category", function() {
		pages.base.selectRandomDropdownOption(
			pages.new_work.musicalDistributionCategoryDropdown(),
			{ dropdownType: "tg" }
		).then(function(value) {
			data[key] = value;
		});
	});
};
module.exports.selectRandomTextMusicRelationship = function(data, key) {
	key = key || "textMusicRelationship";
	it("Select a random text music relationship", function() {
		pages.base.selectRandomDropdownOption(
			pages.new_work.textMusicRelationshipDropdown(),
			{ dropdownType: "tg" }
		).then(function(value) {
			data[key] = value;
		});
	});
};
module.exports.selectRandomExcerptType = function(data, key) {
	key = key || "excerptType";
	it("Select a random excerpt type", function() {
		pages.base.selectRandomDropdownOption(
			pages.new_work.excerptTypeDropdown(),
			{ dropdownType: "tg" }
		).then(function(value) {
			data[key] = value;
		});
	});
};
module.exports.selectRandomVersionType = function(data, key) {
	key = key || "versionType";
	it("Select a random version type", function() {
		pages.base.selectRandomDropdownOption(
			pages.new_work.versionTypeDropdown(),
			{ dropdownType: "tg" }
		).then(function(value) {
			data[key] = value;
		});
	});
};
module.exports.selectRandomLyricAdaptation = function(data, key) {
	key = key || "lyricAdaptation";
	it("Select a random lyric adaptation (if displayed)", function() {
		pages.new_work.isLyricAdaptationFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				data[key] = null;
				return;
			}

			pages.base.selectRandomDropdownOption(
				pages.new_work.lyricAdaptationDropdown(),
				{ dropdownType: "tg" }
			).then(function(value) {
				data[key] = value;
			});
		});
	});
};
module.exports.selectRandomMusicArrangement = function(data, key) {
	key = key || "musicArrangement";
	it("Select a random music arrangement (if displayed)", function() {
		pages.new_work.isMusicArrangementFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				data[key] = null;
				return;
			}

			pages.base.selectRandomDropdownOption(
				pages.new_work.musicArrangementDropdown(),
				{ dropdownType: "tg" }
			).then(function(value) {
				data[key] = value;
			});
		});
	});
};
module.exports.selectRandomIntendedPurpose = function(data, key) {
	key = key || "intendedPurpose";
	it("Select a random intended purpose", function() {
		pages.base.selectRandomDropdownOption(
			pages.new_work.intendedPurposeDropdown(),
			{ dropdownType: "tg" }
		).then(function(value) {
			data[key] = value;
		});
	});
};
module.exports.enterRandomProductionTitle = function(data, key) {
	key = key || "productionTitle";
	it("Enter a random production title (if displayed)", function() {
		pages.new_work.isProductionTitleFieldDisplayed().then(function(isDisplayed) {
			var title;

			if(!isDisplayed) {
				data[key] = null;
				return;
			}

			title = "TEST PRODUCTION TITLE " + random.id();
			pages.new_work.enterProductionTitle(title);
			data[key] = title;
		});
	});
};
module.exports.selectRandomBltvr = function(data, key) {
	key = key || "bltvr";
	it("Select a random music arrangement (if displayed)", function() {
		pages.new_work.isBltvrFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				data[key] = null;
				return;
			}
			pages.base.selectRandomDropdownOption(
				pages.new_work.bltvrDropdown(),
				{ dropdownType: "tg" }
			).then(function(value) {
				data[key] = value;
			});
		});
	});
};
module.exports.selectRandomMusicLibrary = function(data, key) {
	key = key || "musicLibrary";
	it("Select a random music library (if displayed)", function() {
		pages.new_work.isMusicLibraryFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				data[key] = null;
				return;
			}

			pages.base.selectRandomDropdownOption(
				pages.new_work.musicLibraryDropdown(),
				{ dropdownType: "tg" }
			).then(function(value) {
				data[key] = value;
			});
		});
	});
};
module.exports.validateDefaultCreationYear = function() {
	it("Validate default creation year", function() {
		expect(pages.new_work.enteredCreationYear()).toBe("");
	});
};
module.exports.enterTwoYearsAgoAsCreationYear = function(data, key) {
	key = key || "creationYear";
	it("Enter two years ago as creation year", function() {
		var twoYearsAgo = new Date().getFullYear() - 2;
		pages.new_work.enterCreationYear(twoYearsAgo);
		data[key] = twoYearsAgo;
	});
};
module.exports.validateDefaultCreationMonth = function() {
	it("Validate default creation month", function() {
		expect(pages.new_work.enteredCreationMonth()).toBe("");
	});
};
module.exports.enterThisMonthAsCreationMonth = function(data, key) {
	key = key || "creationMonth";
	it("Enter this month as creation month", function() {
		var thisMonth = new Date().getMonth() + 1;
		pages.new_work.enterCreationMonth(thisMonth);
		data[key] = thisMonth;
	});
};
module.exports.validateDefaultCreationDay = function() {
	it("Validate default creation day", function() {
		expect(pages.new_work.enteredCreationDay()).toBe("");
	});
};
module.exports.enterTodayAsCreationDay = function(data, key) {
	key = key || "creationDay";
	it("Enter today as creation day", function() {
		var today = new Date().getDate();
		pages.new_work.enterCreationDay(today);
		data[key] = today;
	});
};
module.exports.validateDefaultDeliveryYear = function() {
	it("Validate default delivery year", function() {
		var thisYear = new Date().getFullYear();
		expect(pph.parseInt(pages.new_work.enteredDeliveryYear())).toBe(thisYear);
	});
};
module.exports.enterLastYearAsDeliveryYear = function(data, key) {
	key = key || "deliveryYear";
	it("Enter last year as delivery year", function() {
		var lastYear = new Date().getFullYear() - 1;
		pages.new_work.enterDeliveryYear(lastYear);
		data[key] = lastYear;
	});
};
module.exports.validateDefaultDeliveryMonth = function() {
	it("Validate default delivery month", function() {
		var thisMonth = new Date().getMonth() + 1;
		expect(pph.parseInt(pages.new_work.enteredDeliveryMonth())).toBe(thisMonth);
	});
};
module.exports.enterThisMonthAsDeliveryMonth = function(data, key) {
	key = key || "deliveryMonth";
	it("Enter this month as delivery month", function() {
		var thisMonth = new Date().getMonth() + 1;
		pages.new_work.enterDeliveryMonth(thisMonth);
		data[key] = thisMonth;
	});
};
module.exports.validateDefaultDeliveryDay = function() {
	it("Validate default delivery day", function() {
		var today = new Date().getDate();
		expect(pph.parseInt(pages.new_work.enteredDeliveryDay())).toBe(today);
	});
};
module.exports.enterTodayAsDeliveryDay = function(data, key) {
	key = key || "deliveryDay";
	it("Enter today as delivery day", function() {
		var today = new Date().getDate();
		pages.new_work.enterDeliveryDay(today);
		data[key] = today;
	});
};
module.exports.randomlyOptWhetherToIncludeWorkOnWebsite = function(data, key) {
	key = key || "inclusionOnWebsite";
	it (
		"Randomly opt whether to include work on WarnerChappell.com or not", function() {
			var value = _.sample([true, false]);
			pages.new_work.optToIncludeWorkOnWebsite(value);
			data[key] = value;
		}
	);
};
// Flow.
module.exports.createBasicWork = function(data, more) {
	more = more || {};

	more.skip = more.skip || {};
	more.skip.alternateWorkTitles = true;
	more.skip.assetType = true;
	//more.skip.workOrigin = true;
	more.skip.creationDate = true;
	more.skip.deliveryDate = true;

	describe (
		"Create basic work", function() {
			steps.new_work.goToNewWorkPage();

			steps.new_work.validateDefaultPrimaryWorkLanguage();

			steps.new_work.enterRandomPrimaryWorkTitle(data);

			if(!more.skip.alternateWorkTitles) {
				_.times(2, function(i) {
					steps.new_work.validateDefaultAlternateWorkTitleLanguage(i);
					steps.new_work.enterRandomAlternateWorkTitle(i, data);
				});
			}

			(function() {
				var howMany = 2;

				_.times(howMany, function(i) {
					var creator = {};
					var firstOne = (i === 0);
					var lastOne = (i === howMany - 1);

					steps.new_work.validateDefaultCreatorRole(i);
					steps.new_work.selectRandomCreator(i, data);
					steps.new_work.ensureContributionRequiredMessageIsDisplayed();

					if(firstOne) {
						steps.new_work.validateCreatorContributionInputMask(i);
						steps.new_work.enterMediumCreatorContribution(i, data);
						steps.new_work.ensureTotalContributionTooLowMessageIsDisplayed();
					}

					if(howMany > 1 && lastOne) {
						steps.new_work.enterMaximumCreatorContribution(i, data);
						steps.new_work.ensureTotalContributionTooHighMessageIsDisplayed();
					}

					steps.new_work.enterCreatorContribution(i, 100 / howMany, data);

					if(howMany > 1 && !firstOne && !lastOne) {
						steps.new_work.ensureTotalContributionTooLowMessageIsDisplayed();
					}

					return creator;
				});

				steps.new_work.validateTotalContribution();
			})();

			if(!more.skip.assetType) {
				steps.new_work.validateDefaultMusicalDistributionCategory();
				steps.new_work.selectRandomMusicalDistributionCategory(data)

				steps.new_work.validateDefaultTextMusicRelationship();
				steps.new_work.selectRandomTextMusicRelationship(data);

				steps.new_work.validateDefaultExcerptType();
				steps.new_work.selectRandomExcerptType(data);

				steps.new_work.validateDefaultVersionType();
				steps.new_work.selectRandomVersionType(data);

				steps.new_work.validateDefaultLyricAdaptation();
				steps.new_work.selectRandomLyricAdaptation(data);

				steps.new_work.validateDefaultMusicArrangement();
				steps.new_work.selectRandomMusicArrangement(data);
			}

			if(!more.skip.workOrigin) {
				steps.new_work.validateDefaultIntendedPurpose();
				steps.new_work.selectRandomIntendedPurpose(data);

				steps.new_work.enterRandomProductionTitle(data);

				steps.new_work.validateDefaultBltvr();
				steps.new_work.selectRandomBltvr(data);

				steps.new_work.validateDefaultMusicLibrary();
				steps.new_work.selectRandomMusicLibrary(data);
			}

			if(!more.skip.creationDate) {
				steps.new_work.validateDefaultCreationYear();
				steps.new_work.validateDefaultCreationMonth();
				steps.new_work.validateDefaultCreationDay();

				steps.new_work.enterTwoYearsAgoAsCreationYear(data);
				steps.new_work.enterThisMonthAsCreationMonth(data);
				steps.new_work.enterTodayAsCreationDay(data);
			}

			if(!more.skip.deliveryDate) {
				steps.new_work.validateDefaultDeliveryYear();
				steps.new_work.validateDefaultDeliveryMonth();
				steps.new_work.validateDefaultDeliveryDay();

				steps.new_work.enterLastYearAsDeliveryYear(data);
				steps.new_work.enterThisMonthAsDeliveryMonth(data);
				steps.new_work.enterTodayAsDeliveryDay(data);
			}

			if(!more.skip.inclusionOnWebsite) {
				steps.new_work.randomlyOptWhetherToIncludeWorkOnWebsite(data);
			}

			steps.base.clickElement("Save Work", pages.new_work.saveWorkButton());
			steps.base.validateRedirection("created work page", "/metadata");

			data.workId = steps.work.findCurrentlyOpenWorkId();
		}
	);
};
