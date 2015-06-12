"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var random = require("../helpers/random");
var pph = require("../helpers/pph");
var promise = protractor.promise;
require(pages_path + "new_work");
require(steps_path + "base");
require(steps_path + "work");
steps.new_work = exports;
module.exports.goToNewWorkPage = function() {
	it (
		"Go to New Work page", function() {
			pages.new_work.open().waitForAjax();
		}
	);
};
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
module.exports.enterPrimaryWorkTitle = function(value) {
    it('Enter primary work title', function() {
        pages.new_work.enterPrimaryWorkTitle(value).then(function() {
            hash.subjectWorkData.primaryTitle = value;
        });
    });
};
module.exports.enterRandomPrimaryWorkTitle = function() {
	var deferred = promise.defer();
	it (
		"Enter random primary work title", function() {
			var title = "TEST WORK TITLE " + random.id();
			pages.new_work.enterPrimaryWorkTitle(title);
			deferred.fulfill(title);
		}
	);
	return deferred.promise;
};
module.exports.enterAlternateWorkTitle = function(i, value) {
    it('Enter alternate work title #' + (i + 1), function() {
        pages.new_work.enterAlternateWorkTitle(i, value);
    });
};
module.exports.enterRandomAlternateWorkTitle = function(i) {
	var deferred = promise.defer();
	it (
		"Enter a random alternate work title #" + (i + 1), function() {
			var title = "TEST ALTERNATE WORK TITLE " + random.id();
			pages.new_work.enterAlternateWorkTitle(i, title);
			deferred.fulfill(title);
		}
	);
	return deferred.promise;
};
exports.validateDefaultCompositeWorkCheckboxState = function() {
    it('Validate default composite work checkbox state', function() {
        pages.new_work.validateDefaultCompositeWorkCheckboxState();
    });
};
exports.clickCompositeWorkCheckbox = function() {
    it('Click composite work checkbox', function() {
        pages.new_work.clickCompositeWorkCheckbox();
    });
};
exports.validateRequiredCompositeWorkTypeField = function() {
    it('Validate required composite work type field', function() {
        pages.new_work.validateRequiredCompositeWorkTypeField();
    });
};
exports.validateDefaultCompositeWorkType = function() {
    it('Validate default composite work type', function() {
        pages.new_work.validateDefaultCompositeWorkType();
    });
};
exports.selectCompositeWorkType = function(value, data, key) {
    key = key || 'compositeWorkType';
    data = data || hash.subjectWorkData || {};

    it('Select composite work type', function() {
        pages.new_work.selectCompositeWorkType(value);
        data[key] = value;
    });
};
exports.validateDefaultComponentWorkSearchFilter = function(i) {
    it('Validate default component work search filter #' + (i + 1), function() {
        pages.new_work.validateDefaultComponentWorkSearchFilter(i);
    });
};
exports.validateRequiredComponentWorkSearchField = function(i) {
    it('Validate required component work search field #' + (i + 1), function() {
        pages.new_work.validateRequiredComponentWorkSearchField(i);
    });
};
exports.selectFirstComponentWorkMatching = function(i, searchTerms, data, key) {
    it('Enter search terms on component work search field #' + (i + 1), function() {
        pages.new_work.enterComponentWorkSearchTerms(i, searchTerms);
    });

    it('Wait for component work suggestions to load', function() {
        pages.base.waitForAjax();
    });

    it('Select a random work', function() {
        pages.new_work.selectFirstComponentWorkSuggestion().then(function(selected) {
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
        pages.new_work.expectShowComponentWorkDetailsButtonToAppear(i);
    });
};
exports.expectSameWorkCantBeAddedAsComponentMultipleTimesMessageToAppear = function(i) {
    it('Expect "Same work can\'t be added as a component multiple times" message to appear', function() {
        pages.new_work.expectSameWorkCantBeAddedAsComponentMultipleTimesMessageToAppear(i);
    });
};
exports.deleteComponentWork = function(i, data, key) {
    it('Delete component work #' + (i + 1), function() {
        var components;

        data = data || hash.subjectWorkData || {};
        key = key || 'components';
        components = data[key] = data[key] || [];

        pages.new_work.deleteComponentWork(i);
        components.splice(i, 1);
    });
};
exports.confirmComponentWorkDeletion = function() {
    it('Confirm component work deletion', function() {
        pages.new_work.confirmComponentWorkDeletion();
    });
};
exports.selectRandomCreator = function(i, data, key) {
    var deferred = promise.defer();
    var creator;

    data = data || hash.subjectWorkData || {};
    key = key || 'creators';
    data[key] = data[key] || [];
    creator = data[key][i] = data[key][i] || {};

    it('Type a random letter on creator name field #' + (i + 1), function() {
        pages.new_work.enterRandomLetterOnCreatorNameField(i);
    });

    it('Expect creator suggestions dropdown to be displayed', function() {
        pages.work.expectCreatorSuggestionsToBeDisplayed();
    });

    it('Select a random creator', function() {
        pages.new_work.selectRandomCreatorSuggestion().then(function(selected) {
           creator.name = selected.name;
           creator.ipiNumber = selected.ipiNumber;
        });
    });

    return deferred.promise;
};
exports.selectPreviouslySelectedCreator = function(i, j, data, key) {
    var deferred = promise.defer();
    var creator;

    data = data || hash.subjectWorkData || {};
    key = key || 'creators';
    data[key] = data[key] || [];
    creator = data[key][j] = data[key][j] || {};

    it(
        'Enter previously selected creator #' + (j + 1) +
        ' IPI number in search field #' + (i + 1), function() {
            expect(creator.ipiNumber).toBeTruthy();
            pages.new_work.enterCreatorSearchTerms(i, creator.ipiNumber);
        }
    );

    it('Expect creator suggestions to be displayed', function() {
        pages.new_work.expectCreatorSuggestionsToBeDisplayed();
    });

    it('Select first creator suggestion', function() {
        pages.new_work.selectFirstCreatorSuggestion();
    });

    return deferred.promise;
};
module.exports.enterMaximumCreatorContribution = function(i) {
	it (
		"Enter 100% contribution percentage for creator #" + (i + 1), function() {
			pages.new_work.enterCreatorContribution(i, 100);
		}
	);
};
module.exports.enterMediumCreatorContribution = function(i) {
	it (
		"Enter 50% contribution percentage for creator #" + (i + 1), function() {
			pages.new_work.enterCreatorContribution(i, 50);
		}
	);
};
module.exports.enterCreatorContribution = function(i, value) {
	it (
		"Enter contribution percentage for creator #" + (i + 1), function() {
			pages.new_work.enterCreatorContribution(i, value);
		}
	);
};
exports.validateRequiredComponentWorkAllocationField = function(i) {
    it('Validate required component work allocation field #' + (i + 1), function() {
        pages.new_work.validateRequiredComponentWorkAllocationField(i);
    });
};
exports.enterComponentWorkAllocation = function(i, value, data, key) {
    it('Enter allocation for component work #' + (i + 1), function() {
        var component;

        data = data || hash.subjectWorkData || {};
        key = key || 'components';

        data[key] = data[key] || [];
        component = data[key][i] = data[key][i] || {};

        pages.new_work.enterComponentWorkAllocation(i, value);
        component.allocation = value;
    });
};
exports.enterMediumComponentWorkAllocation = function(i, data, key) {
    it('Enter 50% allocation for component work #' + (i + 1), function() {
        var component;

        data = data || hash.subjectWorkData || {};
        key = key || 'components';

        data[key] = data[key] || [];
        component = data[key][i] = data[key][i] || {};

        component.allocation = 50;
        pages.new_work.enterComponentWorkAllocation(i, component.allocation);
    });
};
exports.enterNewShellWork = function(i, title, data, key) {
    it('Enter new shell work title as component work #' + (i + 1), function() {
        pages.new_work.enterComponentWorkSearchTerms(i, title);
    });

    it('Wait for work suggestions to load', function() {
        pages.base.waitForAjax();
    });

    it('Select "Enter as a new work" suggestion', function() {
        pages.new_work.selectEnterAsNewWorkSuggestion().then(function() {
            var component;

            data = data || hash.subjectWorkData || {};
            key = key || 'components';

            data[key] = data[key] || [];
            component = data[key][i] = data[key][i] || {};

            component.name = title;
            component.workCode = 'WW 000000000 00';
            component.shellWork = true;
        });
    });
};
exports.expectShellWorkTitleToMatchEnteredOne = function(i) {
    it('Expect shell work title #' + (i + 1) + ' to match entered one', function() {
        var components = hash.subjectWorkData.components || [];
        var shellWork = components[i] || {};

        pages.new_work.validateEnteredShellWorkTitle(i, shellWork.name);
    });
};
exports.validateDefaultShellWorkTitleLanguage = function(i) {
    it('Validate default shell work title language #' + (i + 1), function() {
        pages.new_work.validateSelectedShellWorkTitleLanguage(i, 'English');
    });
};
exports.validateDefaultShellWorkCreatorRole = function(i, j) {
    it(
        'Validate default creator role #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function() {
            pages.new_work.validateSelectedShellWorkCreatorRole(i, j, 'CA');
        }
    );
};
exports.validateRequiredShellWorkCreatorNameField = function(i, j) {
    it(
        'Validate required creator name field #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function() {
            pages.new_work.validateRequiredShellWorkCreatorNameField(i, j);
        }
    );
};
exports.selectRandomShellWorkCreator = function(i, j, data, key) {
    it(
        'Type a random letter on creator name field #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function() {
            pages.new_work.enterRandomLetterOnShellWorkCreatorNameField(i, j);
        }
    );

    it('Expect creator suggestions dropdown to be displayed', function() {
        pages.work.expectCreatorSuggestionsToBeDisplayed();
    });

    it('Select a random creator', function() {
        pages.new_work.selectRandomCreatorSuggestion().then(function(selected) {
            var component;
            var creator;

            data = data || hash.subjectWorkData || {};
            key = key || 'components';

            data[key] = data[key] || [];
            component = data[key][i] = data[key][i] || {};

            component.creators = component.creators || [];
            creator = component.creators[j] = component.creators[j] || {};

            creator.name = selected.name;
            creator.ipiNumber = selected.ipiNumber;
        });
    });
};
exports.selectPreviouslySelectedShellWorkCreator = function(i, j, k, l, data, key) {
    var previousComponent;
    var previousCreator;

    it(
        'Enter previously selected IPI number into creator search terms field #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function() {
            data = data || hash.subjectWorkData || {};
            key = key || 'components';

            data[key] = data[key] || [];
            previousComponent = data[key][k] || {};

            previousComponent.creators = previousComponent.creators || [];
            previousCreator = previousComponent.creators[l] || {};

            pages.new_work.enterShellWorkCreatorSearchTerms(i, j, previousCreator.ipiNumber);
        }
    );

    it('Expect creator suggestions dropdown to be displayed', function() {
        pages.work.expectCreatorSuggestionsToBeDisplayed();
    });

    it('Select first creator suggestion', function() {
        pages.new_work.selectFirstCreatorSuggestion().then(function(selected) {
            var component;
            var creator;

            component = data[key][i] = data[key][i] || {};

            component.creators = component.creators || [];
            creator = component.creators[j] = component.creators[j] || {};

            creator.name = selected.name;
            creator.ipiNumber = selected.ipiNumber;
        });
    });
};
exports.validateRequiredShellWorkCreatorContributionField = function(i, j) {
    it(
        'Validate required creator contribution field #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function() {
            pages.new_work.validateRequiredShellWorkCreatorContributionField(i, j);
        }
    );
};
exports.enterShellWorkCreatorContribution = function(i, j, value, data, key) {
    it(
        'Enter creator contribution #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function() {
            pages.new_work.enterShellWorkCreatorContribution(i, j, value).then(function() {
                var component;
                var creator;

                data = data || hash.subjectWorkData || {};
                key = key || 'components';

                data[key] = data[key] || [];
                component = data[key][i] = data[key][i] || {};

                component.creators = component.creators || [];
                creator = component.creators[j] = component.creators[j] || {};

                creator.contribution = value;
                creator.contributionToCompositeWork = (value / 100) * component.allocation;
            });
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
			title = "TEST PRODUCTION TITLE " + random.id();
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
module.exports.validateDefaultCreationYear = function() {
	it("Validate default creation year", function() {
		expect(pages.new_work.enteredCreationYear()).toBe("");
	});
};
module.exports.enterTwoYearsAgoAsCreationYear = function() {
	var deferred = promise.defer();
	it("Enter two years ago as creation year", function() {
		var twoYearsAgo = new Date().getFullYear() - 2;
		pages.new_work.enterCreationYear(twoYearsAgo);
		deferred.fulfill(twoYearsAgo);
	});
	return deferred.promise;
};
module.exports.validateDefaultCreationMonth = function() {
	it("Validate default creation month", function() {
		expect(pages.new_work.enteredCreationMonth()).toBe("");
	});
};
module.exports.enterThisMonthAsCreationMonth = function() {
	var deferred = promise.defer();
	it("Enter this month as creation month", function() {
		var thisMonth = new Date().getMonth() + 1;
		pages.new_work.enterCreationMonth(thisMonth);
		deferred.fulfill(thisMonth);
	});
	return deferred.promise;
};
module.exports.validateDefaultCreationDay = function() {
	it("Validate default creation day", function() {
		expect(pages.new_work.enteredCreationDay()).toBe("");
	});
};
module.exports.enterTodayAsCreationDay = function() {
	var deferred = promise.defer();
	it("Enter today as creation day", function() {
		var today = new Date().getDate();
		pages.new_work.enterCreationDay(today);
		deferred.fulfill(today);
	});
	return deferred.promise;
};
module.exports.validateDefaultDeliveryYear = function() {
	it("Validate default delivery year", function() {
		var thisYear = new Date().getFullYear();
		expect(pph.parseInt(pages.new_work.enteredDeliveryYear())).toBe(thisYear);
	});
};
module.exports.enterLastYearAsDeliveryYear = function() {
	var deferred = promise.defer();
	it("Enter last year as delivery year", function() {
		var lastYear = new Date().getFullYear() - 1;
		pages.new_work.enterDeliveryYear(lastYear);
		deferred.fulfill(lastYear);
	});
	return deferred.promise;
};
module.exports.validateDefaultDeliveryMonth = function() {
	it("Validate default delivery month", function() {
		var thisMonth = new Date().getMonth() + 1;
		expect(pph.parseInt(pages.new_work.enteredDeliveryMonth())).toBe(thisMonth);
	});
};
module.exports.enterThisMonthAsDeliveryMonth = function() {
	var deferred = promise.defer();
	it("Enter this month as delivery month", function() {
		var thisMonth = new Date().getMonth() + 1;
		pages.new_work.enterDeliveryMonth(thisMonth);
		deferred.fulfill(thisMonth);
	});
	return deferred.promise;
};
module.exports.validateDefaultDeliveryDay = function() {
	it("Validate default delivery day", function() {
		var today = new Date().getDate();
		expect(pph.parseInt(pages.new_work.enteredDeliveryDay())).toBe(today);
	});
};
module.exports.enterTodayAsDeliveryDay = function() {
	var deferred = promise.defer();
	it("Enter today as delivery day", function() {
		var today = new Date().getDate();
		pages.new_work.enterDeliveryDay(today);
		deferred.fulfill(today);
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
exports.saveWork = function() {
     steps.base.clickElement("Save Work", pages.new_work.saveWorkButton());
};
exports.validateSaveWorkRedirection = function() {
     steps.base.validateRedirection("created work page", "/metadata");
};
module.exports.createBasicWork = function(data, more) {
    more = more || {};

    more.skip = more.skip || {};
    //more.skip.alternateWorkTitles = true;
    //more.skip.assetType = true;
    //more.skip.workOrigin = true;
    //more.skip.creationDate = true;
    //more.skip.deliveryDate = true;

    describe (
        "Create basic work", function() {
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
                        creator.name = steps.new_work.selectRandomCreator(i);
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

            data.workId = steps.work.findCurrentlyOpenWorkId();
        }
    );
};
