"use strict";

var _ = require('lodash'),
    random = require('../../../../helpers/random'),
    pph = require('../../../../helpers/pph'),
    promise = protractor.promise;

steps.newWork = exports;

module.exports.goToNewWorkPage = function() {
	it (
		"Go to New Work page", function() {
			pages.newWork.open().waitForAjax();
		}
	);
};
module.exports.validateDefaultPrimaryWorkLanguage = function() {
	it (
		"Validate default primary work title language", function() {
			expect(pages.newWork.selectedPrimaryWorkTitleLanguage()).toBe("English");
		}
	);
};
module.exports.validateDefaultAlternateWorkTitleLanguage = function(i) {
	it (
		"Validate default alternate work title language #" + (i + 1), function() {
			expect(pages.newWork.selectedAlternateWorkTitleLanguage(i)).toBe("English");
		}
	);
};
module.exports.validateDefaultCreatorRole = function(i) {
	it (
		"Validate default creator role #" + (i + 1), function() {
			expect(pages.newWork.selectedCreatorRole(i)).toBe("CA");
		}
	);
};
/*module.exports.ensureContributionRequiredMessageIsDisplayed = function(i) {
	it("Ensure contribution required message is displayed", function() {
		expect(pages.base.isPresentAndDisplayed(
			pages.newWork.contributionRequiredMessage(i)
		)).toBeTruthy();
	});
};*/
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
			pages.newWork.enterCreatorContribution(i, input);
			expect(pages.newWork.enteredCreatorContribution(i)).toBe(expectedValue);
		});
		pages.newWork.enterCreatorContribution(i, "");
	});
};
module.exports.ensureTotalContributionTooLowMessageIsDisplayed = function() {
	it("Ensure 'Total contribution is less than 100%' message is displayed", function() {
		expect(pages.base.isPresentAndDisplayed(
			pages.newWork.totalContributionTooLowMessage()
		)).toBeTruthy();
	});
};
module.exports.ensureTotalContributionTooHighMessageIsDisplayed = function() {
	it("Ensure 'Total contribution is more than 100%' message is displayed", function() {
		expect(pages.base.isPresentAndDisplayed(
			pages.newWork.totalContributionTooHighMessage()
		)).toBeTruthy();
	});
};
module.exports.validateTotalContribution = function() {
	it (
		"Validate total contribution", function() {
			expect(pages.newWork.totalContribution()).toBe(100);
		}
	);
};
module.exports.validateDefaultMusicalDistributionCategory = function() {
	it (
		"Validate default musical distribution category", function() {
			expect(pages.newWork.selectedMusicalDistributionCategory()).toBe("Popular");
		}
	);
};
module.exports.validateDefaultTextMusicRelationship = function() {
	it (
		"Validate default text music relationship", function() {
			expect(pages.newWork.selectedTextMusicRelationship()).toBe("Select type");
		}
	);
};
module.exports.validateDefaultExcerptType = function() {
	it (
		"Validate default excerpt type", function() {
			expect(pages.newWork.selectedExcerptType()).toBe("Select type");
		}
	);
};
module.exports.validateDefaultVersionType = function() {
	it (
		"Validate default version type", function() {
			expect(pages.newWork.selectedVersionType()).toBe("Original Work");
		}
	);
};
module.exports.validateDefaultLyricAdaptation = function() {
	it("Validate default lyric adaptation (if displayed)", function() {
		pages.newWork.isLyricAdaptationFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				return;
			}
			expect(pages.newWork.selectedLyricAdaptation()).toBe("Unspecified");
		});
	});
};
module.exports.validateDefaultMusicArrangement = function() {
	it("Validate default music arrangement (if displayed)", function() {
		pages.newWork.isMusicArrangementFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				return;
			}
			expect(pages.newWork.selectedMusicArrangement())
				.toBe("Unspecified arrangement");
		});
	});
};
module.exports.validateDefaultIntendedPurpose = function() {
	it (
		"Validate default intended purpose", function() {
			expect(pages.newWork.selectedIntendedPurpose()).toBe("Select type");
		}
	);
};
module.exports.validateDefaultBltvr = function() {
	it("Validate default BLTVR (if displayed)", function() {
		pages.newWork.isBltvrFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				return;
			}
			expect(pages.newWork.selectedBltvr()).toBe("Select type");
		});
	});
};
module.exports.validateDefaultMusicLibrary = function() {
	it("Validate default music library (if displayed)", function() {
		pages.newWork.isMusicLibraryFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				return;
			}
			expect(pages.newWork.selectedMusicLibrary()).toBe("Select Library");
		});
	});
};
module.exports.enterPrimaryWorkTitle = function(value) {
    it('Enter primary work title', function() {
        pages.newWork.enterPrimaryWorkTitle(value).then(function() {
            hash.currentEntityDataSlotsByType.work.primaryTitle = value;
        });
    });
};
module.exports.enterRandomPrimaryWorkTitle = function() {
	var deferred = promise.defer();
	it (
		"Enter random primary work title", function() {
			var title = "TEST WORK TITLE " + random.id();
			pages.newWork.enterPrimaryWorkTitle(title);
			deferred.fulfill(title);
		}
	);
	return deferred.promise;
};
module.exports.enterAlternateWorkTitle = function(i, value) {
    it('Enter alternate work title #' + (i + 1), function() {
        pages.newWork.enterAlternateWorkTitle(i, value).then(function() {
            var data = hash.currentEntityDataSlotsByType.work;
            var alternateTitles = data.alternateTitles = data.alternateTitles || [];

            alternateTitles[i] = value;
        });
    });
};
module.exports.enterRandomAlternateWorkTitle = function(i) {
	var deferred = promise.defer();
	it (
		"Enter a random alternate work title #" + (i + 1), function() {
			var title = "TEST ALTERNATE WORK TITLE " + random.id();
			pages.newWork.enterAlternateWorkTitle(i, title);
			deferred.fulfill(title);
		}
	);
	return deferred.promise;
};
exports.validateDefaultCompositeWorkCheckboxState = function() {
    it('Validate default composite work checkbox state', function() {
        pages.newWork.validateDefaultCompositeWorkCheckboxState();
    });
};
exports.clickCompositeWorkCheckbox = function() {
    it('Click composite work checkbox', function() {
        pages.newWork.clickCompositeWorkCheckbox();
    });
};
exports.validateRequiredCompositeWorkTypeField = function() {
    it('Validate required composite work type field', function() {
        pages.newWork.validateRequiredCompositeWorkTypeField();
    });
};
exports.validateDefaultCompositeWorkType = function() {
    it('Validate default composite work type', function() {
        pages.newWork.validateDefaultCompositeWorkType();
    });
};
exports.selectCompositeWorkType = function(value, data, key) {
    it('Select composite work type', function() {
        key = key || 'compositeWorkType';
        data = data || hash.currentEntityDataSlotsByType.work;

        pages.newWork.selectCompositeWorkType(value);

        data[key] = value;
    });
};
exports.validateDefaultComponentWorkSearchFilter = function(i) {
    it('Validate default component work search filter #' + (i + 1), function() {
        pages.newWork.validateDefaultComponentWorkSearchFilter(i);
    });
};
exports.validateRequiredComponentWorkSearchField = function(i) {
    it('Validate required component work search field #' + (i + 1), function() {
        pages.newWork.validateRequiredComponentWorkSearchField(i);
    });
};
exports.selectFirstComponentWorkMatching = function(i, searchTerms, data, key) {
    it('Enter search terms on component work search field #' + (i + 1), function() {
        pages.newWork.enterComponentWorkSearchTerms(i, searchTerms);
    });

    it('Wait for component work suggestions to load', function() {
        pages.newWork.waitForEnterAsNewWorkToBeDisplayed();
    });

    it('Select a random work', function() {
        pages.newWork.selectFirstComponentWorkSuggestion().then(function(selected) {
            var component;

            data = data || hash.currentEntityDataSlotsByType.work;
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
        pages.newWork.expectShowComponentWorkDetailsButtonToAppear(i);
    });
};
exports.expectSameWorkCantBeAddedAsComponentMultipleTimesMessageToAppear = function(i) {
    it('Expect "Same work can\'t be added as a component multiple times" message to appear', function() {
        pages.newWork.expectSameWorkCantBeAddedAsComponentMultipleTimesMessageToAppear(i);
    });
};
exports.deleteComponentWork = function(i, data, key) {
    it('Delete component work #' + (i + 1), function() {
        var components;

        data = data || hash.currentEntityDataSlotsByType.work;
        key = key || 'components';
        components = data[key] = data[key] || [];

        pages.newWork.deleteComponentWork(i);
        components.splice(i, 1);
    });
};
exports.confirmComponentWorkDeletion = function() {
    it('Confirm component work deletion', function() {
        pages.newWork.confirmComponentWorkDeletion();
    });
};
exports.selectRandomCreator = function(i) {
    it('Type a random letter on creator name field #' + (i + 1), function() {
        pages.newWork.enterRandomLetterOnCreatorNameField(i);
    });

    it('Expect creator suggestions dropdown to be displayed', function() {
        pages.work.expectCreatorSuggestionsToBeDisplayed();
    });

    it('Select a random creator', function() {
        var data = hash.currentEntityDataSlotsByType.work;
        var creator;

        data.creators = data.creators || [];
        data.creators[i] = data.creators[i] || {};

        creator = data.creators[i];

        pages.newWork.selectRandomCreatorSuggestion().then(function(selected) {
           creator.name = selected.name;
           creator.ipiNumber = selected.ipiNumber;
        });
    });
};

addBasicStep(exports, pages.newWork, 'Enter creator search terms');

addBasicStep(exports, pages.newWork, 'Select creator search result by index');
addBasicStep(exports, pages.newWork, 'Continue if prompted');

exports.selectCreatorFromPersonSlot = function(creatorRow, slotIndex) {
    var person;

    it (
        'Type IPI number from person slot #' + (slotIndex + 1) +
        ' on creator search field #' + (creatorRow + 1), function() {
            person = _.merge({}, hash.personSlots[slotIndex]);
            console.log(person.ipiNumber);
            pages.newWork.enterCreatorSearchTerms(creatorRow, person.ipiNumber);
        }
    );

    it('Expect creator suggestions dropdown to be displayed', function() {
        pages.work.expectCreatorSuggestionsToBeDisplayed();
    });

    it('Select result by IPI number', function() {
        pages.newWork.selectCreatorSuggestionByIpiNumber(person.ipiNumber).then(function() {
            var data = hash.currentEntityDataSlotsByType.work;

            data.creators = data.creators || [];
            data.creators[creatorRow] = person;
        });
    });
};
exports.selectPreviouslySelectedCreator = function(i, j, data, key) {
    var deferred = promise.defer();
    var creator;

    it(
        'Enter previously selected creator #' + (j + 1) +
        ' IPI number in search field #' + (i + 1), function() {
            data = data || hash.currentEntityDataSlotsByType.work;
            key = key || 'creators';
            data[key] = data[key] || [];
            creator = data[key][j] = data[key][j] || {};

            expect(creator.ipiNumber).toBeTruthy();
            pages.newWork.enterCreatorSearchTerms(i, creator.ipiNumber);
        }
    );

    it('Expect creator suggestions to be displayed', function() {
        pages.newWork.expectCreatorSuggestionsToBeDisplayed();
    });

    it('Select result by IPI number', function() {
        pages.newWork.selectCreatorSuggestionByIpiNumber(creator.ipiNumber);
    });

    return deferred.promise;
};

exports.enterMaximumCreatorContribution = function(i) {
    exports.enterCreatorContribution(i, 100);
};

exports.enterMediumCreatorContribution = function(i) {
    exports.enterCreatorContribution(i, 50);
};

exports.enterCreatorContribution = function(i, value) {
    it (
        "Enter contribution percentage for creator #" + (i + 1) + '(' + value + ')', function() {
            pages.newWork.enterCreatorContribution(i, value).then(function() {
                var workSlot = hash.currentEntityDataSlotsByType.work,
                    creators = workSlot.creators = (workSlot.creators || []),
                    creator = creators[i] = (creators[i] || {});

                creator.contribution = value;
            });
        }
    );
};

exports.validateRequiredComponentWorkAllocationField = function(i) {
    it('Validate required component work allocation field #' + (i + 1), function() {
        pages.newWork.validateRequiredComponentWorkAllocationField(i);
    });
};
exports.enterComponentWorkAllocation = function(i, value, data, key) {
    it('Enter allocation for component work #' + (i + 1), function() {
        var component;

        data = data || hash.currentEntityDataSlotsByType.work;
        key = key || 'components';

        data[key] = data[key] || [];
        component = data[key][i] = data[key][i] || {};

        pages.newWork.enterComponentWorkAllocation(i, value);
        component.allocation = value;
    });
};
exports.enterMediumComponentWorkAllocation = function(i, data, key) {
    it('Enter 50% allocation for component work #' + (i + 1), function() {
        var component;

        data = data || hash.currentEntityDataSlotsByType.work;
        key = key || 'components';

        data[key] = data[key] || [];
        component = data[key][i] = data[key][i] || {};

        component.allocation = 50;
        pages.newWork.enterComponentWorkAllocation(i, component.allocation);
    });
};
exports.enterNewShellWork = function(i, title, data, key) {
    it('Enter new shell work title as component work #' + (i + 1), function() {
        pages.newWork.enterComponentWorkSearchTerms(i, title);
    });

    it('Wait for "Enter as a new work" suggestion', function() {
        pages.newWork.waitForEnterAsNewWorkToBeDisplayed();
    });

    it('Select "Enter as a new work" suggestion', function() {
        pages.newWork.selectEnterAsNewWorkSuggestion().then(function() {
            var component;

            data = data || hash.currentEntityDataSlotsByType.work;
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
        var data = hash.currentEntityDataSlotsByType.work;
        var components = data.components || [];
        var shellWork = components[i] || {};

        pages.newWork.validateEnteredShellWorkTitle(i, shellWork.name);
    });
};
exports.validateDefaultShellWorkTitleLanguage = function(i) {
    it('Validate default shell work title language #' + (i + 1), function() {
        pages.newWork.validateSelectedShellWorkTitleLanguage(i, 'English');
    });
};
exports.validateDefaultShellWorkCreatorRole = function(i, j) {
    it(
        'Validate default creator role #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function() {
            pages.newWork.validateSelectedShellWorkCreatorRole(i, j, 'CA');
        }
    );
};
exports.validateRequiredShellWorkCreatorNameField = function(i, j) {
    it(
        'Validate required creator name field #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function() {
            pages.newWork.validateRequiredShellWorkCreatorNameField(i, j);
        }
    );
};
exports.selectRandomShellWorkCreator = function(i, j, data, key) {
    it(
        'Type a random letter on creator name field #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function() {
            pages.newWork.enterRandomLetterOnShellWorkCreatorNameField(i, j);
        }
    );

    it('Expect creator suggestions dropdown to be displayed', function() {
        pages.work.expectCreatorSuggestionsToBeDisplayed();
    });

    it('Select a random creator', function() {
        pages.newWork.selectRandomCreatorSuggestion().then(function(selected) {
            var component;
            var creator;

            data = data || hash.currentEntityDataSlotsByType.work;
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
exports.selectShellWorkCreatorFromPersonSlot = function(i, j, slotIndex, data, key) {
    var person;

    it(
        'Enter previously selected IPI number into creator search terms field #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function() {
            person = _.merge({}, hash.personSlots[slotIndex]);
            pages.newWork.enterShellWorkCreatorSearchTerms(i, j, person.ipiNumber);
        }
    );

    it('Expect creator suggestions dropdown to be displayed', function() {
        pages.work.expectCreatorSuggestionsToBeDisplayed();
    });

    it('Select result by IPI number', function() {
        pages.newWork.selectCreatorSuggestionByIpiNumber(person.ipiNumber).then(function(selected) {
            var component,
                creator;

            data = data || hash.currentEntityDataSlotsByType.work;
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
            data = data || hash.currentEntityDataSlotsByType.work;
            key = key || 'components';

            data[key] = data[key] || [];
            previousComponent = data[key][k] || {};

            previousComponent.creators = previousComponent.creators || [];
            previousCreator = previousComponent.creators[l] || {};

            pages.newWork.enterShellWorkCreatorSearchTerms(i, j, previousCreator.ipiNumber);
        }
    );

    it('Expect creator suggestions dropdown to be displayed', function() {
        pages.work.expectCreatorSuggestionsToBeDisplayed();
    });

    it('Select result by IPI number', function() {
        pages.newWork.selectCreatorSuggestionByIpiNumber(previousCreator.ipiNumber).then(function(selected) {
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
            pages.newWork.validateRequiredShellWorkCreatorContributionField(i, j);
        }
    );
};
exports.enterShellWorkCreatorContribution = function(i, j, value, data, key) {
    it(
        'Enter creator contribution #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function() {
            pages.newWork.enterShellWorkCreatorContribution(i, j, value).then(function() {
                var component;
                var creator;

                data = data || hash.currentEntityDataSlotsByType.work;
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
			pages.newWork.musicalDistributionCategoryDropdown(),
			{ dropdownType: "tg" }
		));
		deferred.promise.then(function(value) {
			var data = hash.currentEntityDataSlotsByType.work;
			data.musicalDistributionCategory = value;
		});
	});
	return deferred.promise;
};
module.exports.selectRandomTextMusicRelationship = function() {
	var deferred = promise.defer();
	it("Select a random text music relationship", function() {
		deferred.fulfill(pages.base.selectRandomDropdownOption(
			pages.newWork.textMusicRelationshipDropdown(),
			{ dropdownType: "tg" }
		));
		deferred.promise.then(function(value) {
			var data = hash.currentEntityDataSlotsByType.work;
			data.textMusicRelationship = value;
		});
	});
	return deferred.promise;
};
module.exports.selectRandomExcerptType = function() {
	var deferred = promise.defer();
	it("Select a random excerpt type", function() {
		deferred.fulfill(pages.base.selectRandomDropdownOption(
			pages.newWork.excerptTypeDropdown(),
			{ dropdownType: "tg" }
		));
		deferred.promise.then(function(value) {
			var data = hash.currentEntityDataSlotsByType.work;
			data.excerptType = value;
		});
	});
	return deferred.promise;
};
module.exports.selectRandomVersionType = function() {
	var deferred = promise.defer();
	it("Select a random version type", function() {
		deferred.fulfill(pages.base.selectRandomDropdownOption(
			pages.newWork.versionTypeDropdown(),
			{ dropdownType: "tg" }
		));
		deferred.promise.then(function(value) {
			var data = hash.currentEntityDataSlotsByType.work;
			data.versionType = value;
		});
	});
	return deferred.promise;
};
module.exports.selectRandomLyricAdaptation = function() {
	var deferred = promise.defer();
	it("Select a random lyric adaptation (if displayed)", function() {
		pages.newWork.isLyricAdaptationFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				deferred.fulfill(null);
				return;
			}
			deferred.fulfill(pages.base.selectRandomDropdownOption(
				pages.newWork.lyricAdaptationDropdown(),
				{ dropdownType: "tg" }
			));
			deferred.promise.then(function(value) {
				var data = hash.currentEntityDataSlotsByType.work;
				data.lyricAdaptation = value;
			});
		});
	});
	return deferred.promise;
};
module.exports.selectRandomMusicArrangement = function() {
	var deferred = promise.defer();
	it("Select a random music arrangement (if displayed)", function() {
		pages.newWork.isMusicArrangementFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				deferred.fulfill(null);
				return;
			}
			deferred.fulfill(pages.base.selectRandomDropdownOption(
				pages.newWork.musicArrangementDropdown(),
				{ dropdownType: "tg" }
			));
			deferred.promise.then(function(value) {
				var data = hash.currentEntityDataSlotsByType.work;
				data.musicArrangement = value;
			});
		});
	});
	return deferred.promise;
};
module.exports.selectRandomIntendedPurpose = function() {
	var deferred = promise.defer();
	it('Select a random Intended Purpose (if displayed)', function() {
		pages.newWork.isIntendedPurposeFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				deferred.fulfill(null);
				return;
			}
			deferred.fulfill(pages.base.selectRandomDropdownOption(
				pages.newWork.intendedPurposeDropdown(),
				{ dropdownType: "tg" }
			));
		});
	});
	return deferred.promise;
};
exports.selectIntendedPurpose = function(value) {
    it('Select Intended Purpose (' + value + ')', function() {
        pages.newWork.selectIntendedPurpose(value);
    });
};
module.exports.enterRandomProductionTitle = function() {
	var deferred = promise.defer();
	it("Enter a random production title (if displayed)", function() {
		pages.newWork.isProductionTitleFieldDisplayed().then(function(isDisplayed) {
			var title;
			if(!isDisplayed) {
				deferred.fulfill(null);
				return;
			}
			title = "TEST PRODUCTION TITLE " + random.id();
			pages.newWork.enterProductionTitle(title);
			deferred.fulfill(title);
		});
	});
	return deferred.promise;
};
module.exports.selectRandomBltvr = function() {
	var deferred = promise.defer();
	it("Select a random music arrangement (if displayed)", function() {
		pages.newWork.isBltvrFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				deferred.fulfill(null);
				return;
			}
			deferred.fulfill(pages.base.selectRandomDropdownOption(
				pages.newWork.bltvrDropdown(),
				{ dropdownType: "tg" }
			));
		});
	});
	return deferred.promise;
};
module.exports.selectRandomMusicLibrary = function() {
	var deferred = promise.defer();
	it("Select a random music library (if displayed)", function() {
		pages.newWork.isMusicLibraryFieldDisplayed().then(function(isDisplayed) {
			if(!isDisplayed) {
				deferred.fulfill(null);
				return;
			}
			deferred.fulfill(pages.base.selectRandomDropdownOption(
				pages.newWork.musicLibraryDropdown(),
				{ dropdownType: "tg" }
			));
		});
	});
	return deferred.promise;
};
exports.selectMusicLibrary = function(value) {
    it('Select music library (' + value + ')', function() {
        pages.newWork.selectMusicLibrary(value);
        hash.currentEntityDataSlotsByType.work.musicLibrary = value;
    });
};
module.exports.validateDefaultCreationYear = function() {
	it("Validate default creation year", function() {
		expect(pages.newWork.enteredCreationYear()).toBe("");
	});
};
module.exports.enterTwoYearsAgoAsCreationYear = function() {
	var deferred = promise.defer();
	it("Enter two years ago as creation year", function() {
		var twoYearsAgo = new Date().getFullYear() - 2;
		pages.newWork.enterCreationYear(twoYearsAgo);
		deferred.fulfill(twoYearsAgo);
	});
	return deferred.promise;
};
module.exports.validateDefaultCreationMonth = function() {
	it("Validate default creation month", function() {
		expect(pages.newWork.enteredCreationMonth()).toBe("");
	});
};
module.exports.enterThisMonthAsCreationMonth = function() {
	var deferred = promise.defer();
	it("Enter this month as creation month", function() {
		var thisMonth = new Date().getMonth() + 1;
		pages.newWork.enterCreationMonth(thisMonth);
		deferred.fulfill(thisMonth);
	});
	return deferred.promise;
};
module.exports.validateDefaultCreationDay = function() {
	it("Validate default creation day", function() {
		expect(pages.newWork.enteredCreationDay()).toBe("");
	});
};
module.exports.enterTodayAsCreationDay = function() {
	var deferred = promise.defer();
	it("Enter today as creation day", function() {
		var today = new Date().getDate();
		pages.newWork.enterCreationDay(today);
		deferred.fulfill(today);
	});
	return deferred.promise;
};
module.exports.validateDefaultDeliveryYear = function() {
	it("Validate default delivery year", function() {
		var thisYear = new Date().getFullYear();
		expect(pph.parseInt(pages.newWork.enteredDeliveryYear())).toBe(thisYear);
	});
};
module.exports.enterLastYearAsDeliveryYear = function() {
	var deferred = promise.defer();
	it("Enter last year as delivery year", function() {
		var lastYear = new Date().getFullYear() - 1;
		pages.newWork.enterDeliveryYear(lastYear);
		deferred.fulfill(lastYear);
	});
	return deferred.promise;
};
module.exports.validateDefaultDeliveryMonth = function() {
	it("Validate default delivery month", function() {
		var thisMonth = new Date().getMonth() + 1;
		expect(pph.parseInt(pages.newWork.enteredDeliveryMonth())).toBe(thisMonth);
	});
};
module.exports.enterThisMonthAsDeliveryMonth = function() {
	var deferred = promise.defer();
	it("Enter this month as delivery month", function() {
		var thisMonth = new Date().getMonth() + 1;
		pages.newWork.enterDeliveryMonth(thisMonth);
		deferred.fulfill(thisMonth);
	});
	return deferred.promise;
};
module.exports.validateDefaultDeliveryDay = function() {
	it("Validate default delivery day", function() {
		var today = new Date().getDate();
		expect(pph.parseInt(pages.newWork.enteredDeliveryDay())).toBe(today);
	});
};
module.exports.enterTodayAsDeliveryDay = function() {
	var deferred = promise.defer();
	it("Enter today as delivery day", function() {
		var today = new Date().getDate();
		pages.newWork.enterDeliveryDay(today);
		deferred.fulfill(today);
	});
	return deferred.promise;
};
module.exports.optToIncludeWorkOnWebsite = function(include) {
	it (
		"Opt whether to include work on WarnerChappell.com or not", function() {
			pages.newWork.optToIncludeWorkOnWebsite(include);
		}
	);
};

exports.continueToNextTab = function() {
    it('Continue to next work creation tab', function() {
        pages.newWork.continueToNextTab();
    });
};

exports.save = function() {
     steps.base.clickElement("Save Work", pages.newWork.saveWorkButton());
};

exports.saveWork = exports.save;

exports.validateSaveWorkRedirection = function() {
     steps.base.validateRedirection("created work page", "/general");
};
