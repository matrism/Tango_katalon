"use strict";
var _ = require("lodash");
var pages_path = _tf_config._system_.path_to_pages;
var pph = require('../helpers/pph');
var random = require('../helpers/random');
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "base");
exports = module.exports = pages.new_work = new ftf.pageObject({
	url: _tf_config.urls.app_url + "#/create/work"
});
module.exports.primaryWorkTitleLanguageDropdown = function() {
	return element(by.model("work.primary_title.language_code"));
};
module.exports.primaryWorkTitleInput = function() {
	return element(by.model("work.primary_title.title"));
};
module.exports.alternateWorkTitleRows = function() {
	return element.all(by.repeater("altTitle in work.alternative_titles"));
};
module.exports.alternateWorkTitleRow = function(index) {
	return pages.new_work.alternateWorkTitleRows().get(index);
};
module.exports.alternateWorkTitleLanguageDropdown = function(index) {
	return (
		pages.new_work.alternateWorkTitleRow(index)
            .$('[tg-component-render-template="$templates.main.wrapper"]')
	);
};
module.exports.alternateWorkTitleInput = function(index) {
	return (
		pages.new_work.alternateWorkTitleRow(index)
			.element(by.model("altTitle.title"))
	);
};
exports.compositeWorkCheckbox = function() {
    return element(by.model('work.isCompositeWork'));
};
exports.compositeWorkTypeDropdown = function() {
    return element(by.model('work.composite_type'));
};
exports.componentWorkRows = function() {
    return element.all(by.repeater('component in work.components'));
};
exports.componentWorkRow = function(i) {
    return exports.componentWorkRows().get(i);
};
exports.componentWorkSearchFilterDropdowns = function() {
    return exports.componentWorkRows().all(
        by.model('component.filter')
    );
};
exports.componentWorkSearchFilterDropdown = function(i) {
    return exports.componentWorkSearchFilterDropdowns().get(i);
};
exports.componentWorkSearchField = function(i) {
    return exports.componentWorkRows().get(i).element(
        by.model('component.selected_work')
    );
};
exports.componentWorkAllocationInputs = function() {
    return exports.componentWorkRows().all(
        by.model('component.allocation_percentage')
    );
};
exports.enterAsNewWorkSuggestion = function() {
    return element(by.cssContainingText('.more-results-link', 'Enter as a new work'));
};
exports.waitForEnterAsNewWorkToBeDisplayed = function() {
    browser.wait(ExpectedConditions.visibilityOf(exports.enterAsNewWorkSuggestion()));
};
exports.shellWorkTitleLanguageDropdown = function(i) {
    return exports.componentWorkRows().get(i).element(
        by.model('component.shell.primary_title.language_code')
    );
};
exports.shellWorkTitleInput = function(i) {
    return exports.componentWorkRows().get(i).element(
        by.model('component.shell.primary_title.title')
    );
};
exports.shellWorkCreatorRows = function(i) {
    return exports.componentWorkRows().get(i).all(
        by.repeater('creator in component.shell.tmpCreators')
    );
};
exports.shellWorkCreatorRoleDropdown = function(i, j) {
    return (
        exports.componentWorkRows().get(i)
            .all(by.model('creator.role')).get(j)
   );
};
exports.shellWorkCreatorNameInputs = function(i) {
    return exports.componentWorkRows().get(i).all(
        by.model('creator.person_name')
    );
};
exports.shellWorkCreatorNameInput = function(i, j) {
    return exports.shellWorkCreatorNameInputs(i).get(j);
};
exports.shellWorkCreatorContributionInputs = function(i) {
    return exports.componentWorkRows().get(i).all(
        by.model('creator.contribution')
    );
};
exports.shellWorkCreatorContributionInput = function(i, j) {
    return exports.shellWorkCreatorContributionInputs(i).get(j);
};
exports.deleteComponentWorkButtons = function() {
    return exports.componentWorkRows().$$('.delete-button');
};
exports.deleteComponentWorkButton = function(i) {
    return exports.deleteComponentWorkButtons().get(i);
};
exports.confirmComponentWorkDeletionButton = function() {
    return pages.base.modalFooter().element(
        by.cssContainingText('button', 'Yes')
    );
};
exports.showComponentWorkDetailsButtons = function() {
    return exports.componentWorkRows().all(
        by.cssContainingText('span', 'Show Details')
    );
};
exports.sameWorkCantBeAddedAsComponentMultipleTimesMessage = function(i) {
    return exports.componentWorkRow(i).element(
        by.cssContainingText(
            '.validation-message-text',
            'The same work cannot be added as a component multiple times.'
        )
    );
};
exports.showComponentWorkDetailsButton = function(i) {
    return exports.showComponentWorkDetailsButtons().get(i);
};
exports.componentWorkAllocationInput = function(i) {
    return exports.componentWorkAllocationInputs().get(i);
};
module.exports.creatorContributionRows = function() {
	return element.all(by.repeater("creator in commonDataHolder.creatorsContributions"));
};
module.exports.creatorContributionRow = function(index) {
	return pages.new_work.creatorContributionRows().get(index);
};
module.exports.creatorRoleDropdown = function(index) {
	return (
		pages.new_work.creatorContributionRow(index)
			.element(by.model("creator.role"))
	);
};
module.exports.creatorNameInput = function(index) {
	return (
		pages.new_work.creatorContributionRow(index)
			.element(by.model("creator.person_name"))
	);
};
module.exports.creatorContributionInput = function(index) {
	return (
		pages.new_work.creatorContributionRow(index)
			.element(by.model("creator.contribution"))
	);
};
module.exports.contributionRequiredMessage = function(i) {
	return (
		pages.new_work.creatorContributionRow(i)
			.element(by.cssContainingText(
				".validation-message-text", "Contribution is required"
			))
	);
};
module.exports.contributionTotalBinding = function() {
	return element(by.binding("getContributionTotalFor(work) | number:3"));
};
module.exports.totalContributionTooLowMessage = function() {
	return element(by.cssContainingText(
		".validation-message-text", "Total contribution is less than 100%"
	));
};
module.exports.totalContributionTooHighMessage = function() {
	return element(by.cssContainingText(
		".validation-message-text", "Total contribution is more than 100%"
	));
};
module.exports.musicalDistributionCategoryDropdown = function() {
	return element(by.model("work.musical_work_distribution_category"));
};
module.exports.textMusicRelationshipDropdown = function() {
	return element(by.model("work.text_music_relationship"));
};
module.exports.excerptTypeDropdown = function() {
	return element(by.model("work.excerpt_type"));
};
module.exports.versionTypeDropdown = function() {
	return element(by.model("work.version_type"));
};
module.exports.lyricAdaptationDropdown = function() {
	return element(by.model("work.lyric_adaptation_type"));
};
module.exports.musicArrangementDropdown = function() {
	return element(by.model("work.music_arrangement_type"));
};
module.exports.intendedPurposeDropdown = function() {
	return element(by.model("work.intended_purpose"));
};
module.exports.productionTitleInput = function() {
	return element(by.model("work.production_title.title"));
};
module.exports.bltvrDropdown = function() {
	return element(by.model("work.bltvr"));
};
module.exports.musicLibraryDropdown = function() {
	return element(by.model("work.library_code"));
};
module.exports.creationDateContainer = function() {
	return element(by.model("work.creation_date"));
};
module.exports.creationDatePickerIcon = function() {
	return (
		pages.new_work.creationDateContainer()
			.$(".date .add-on")
	);
};
module.exports.creationYearInput = function() {
	return (
		pages.new_work.creationDateContainer()
			.element(by.model("date.year"))
	);
};
module.exports.creationMonthInput = function() {
	return (
		pages.new_work.creationDateContainer()
			.element(by.model("date.month"))
	);
};
module.exports.creationDayInput = function() {
	return (
		pages.new_work.creationDateContainer()
			.element(by.model("date.day"))
	);
};
module.exports.deliveryDateContainer = function() {
	return element(by.model("work.delivery_date"));
};
module.exports.deliveryDatePickerIcon = function() {
	return (
		pages.new_work.deliveryDateContainer()
			.$(".date .add-on")
	);
};
module.exports.deliveryYearInput = function() {
	return (
		pages.new_work.deliveryDateContainer()
			.element(by.model("date.year"))
	);
};
module.exports.deliveryMonthInput = function() {
	return (
		pages.new_work.deliveryDateContainer()
			.element(by.model("date.month"))
	);
};
module.exports.deliveryDayInput = function() {
	return (
		pages.new_work.deliveryDateContainer()
			.element(by.model("date.day"))
	);
};
module.exports.includeWorkOnWebsiteButtons = function() {
	return element.all(by.model("work.include_on_website"));
};
module.exports.continueToNextTabButton = function() {
    return $('.page-footer').element(by.cssContainingText('button', 'Continue'));
};
module.exports.saveWorkButton = function() {
	return $(".page-footer [type='submit']:nth-child(4):not(.disabled)");
};
module.exports.selectedPrimaryWorkTitleLanguage = function() {
	var element = pages.new_work.primaryWorkTitleLanguageDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedAlternateWorkTitleLanguage = function(i) {
	var element = pages.new_work.alternateWorkTitleLanguageDropdown(i);
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedCreatorRole = function(i) {
	var element = pages.new_work.creatorRoleDropdown(i);
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.enteredCreatorContribution = function(i) {
	var element = pages.new_work.creatorContributionInput(i);
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.totalContribution = function() {
	var element = pages.new_work.contributionTotalBinding();
	pages.base.scrollIntoView(element);
	return element.getText().then (
		function(text) {
			var match = /^TOTAL: (\d+\.\d+%)$/.exec(text);
			if(!match) {
				return text;
			}
			return parseFloat(match[1]);
		}
	);
};
module.exports.selectedMusicalDistributionCategory = function() {
	var element = pages.new_work.musicalDistributionCategoryDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedTextMusicRelationship = function() {
	var element = pages.new_work.textMusicRelationshipDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedExcerptType = function() {
	var element = pages.new_work.excerptTypeDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedVersionType = function() {
	var element = pages.new_work.versionTypeDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.isLyricAdaptationFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(
		pages.new_work.lyricAdaptationDropdown()
	);
};
module.exports.selectedLyricAdaptation = function() {
	return pages.base.selectedTgDropdownOption(
		pages.new_work.lyricAdaptationDropdown()
	);
};
module.exports.isMusicArrangementFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(
		pages.new_work.musicArrangementDropdown()
	);
};
module.exports.selectedMusicArrangement = function() {
	return pages.base.selectedTgDropdownOption(
		pages.new_work.musicArrangementDropdown()
	);
};
module.exports.isIntendedPurposeFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(
		pages.new_work.intendedPurposeDropdown()
	);
};
module.exports.selectedIntendedPurpose = function() {
	var element = pages.new_work.intendedPurposeDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.isProductionTitleFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(
		pages.new_work.productionTitleInput()
	);
};
module.exports.enterProductionTitle = function(title) {
	var element = pages.new_work.productionTitleInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(title);
};
module.exports.isBltvrFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(pages.new_work.bltvrDropdown());
};
module.exports.selectedBltvr = function() {
	var element = pages.new_work.bltvrDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.isMusicLibraryFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(pages.new_work.musicLibraryDropdown());
};
module.exports.selectedMusicLibrary = function() {
	var element = pages.new_work.musicLibraryDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.enteredCreationYear = function() {
	var element = pages.new_work.creationYearInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enteredCreationMonth = function() {
	var element = pages.new_work.creationMonthInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enteredCreationDay = function() {
	var element = pages.new_work.creationDayInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enteredDeliveryYear = function() {
	var element = pages.new_work.deliveryYearInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enteredDeliveryMonth = function() {
	var element = pages.new_work.deliveryMonthInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enteredDeliveryDay = function() {
	var element = pages.new_work.deliveryDayInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enterPrimaryWorkTitle = function(title) {
	var element = pages.new_work.primaryWorkTitleInput();
	pages.base.scrollIntoView(element);
	element.clear();
	return element.sendKeys(title);
};
exports.enterAlternateWorkTitle = function(i, title) {
    var element = pages.new_work.alternateWorkTitleInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(title);
};
exports.validateDefaultCompositeWorkCheckboxState = function() {
    var element = exports.compositeWorkCheckbox();
    pages.base.scrollIntoView(element);
    expect(element.getAttribute('checked')).toBeFalsy();
};
exports.clickCompositeWorkCheckbox = function() {
    var element = exports.compositeWorkCheckbox();
    pages.base.scrollIntoView(element);
    element.click();
    return element.getAttribute('value');
};
exports.validateRequiredCompositeWorkTypeField = function() {
    var element = exports.compositeWorkTypeDropdown();
    pages.base.scrollIntoView(element);
    expect(pph.matchesCssSelector(element, '.ng-invalid-required')).toBeTruthy();
};
exports.validateDefaultCompositeWorkType = function() {
    var element = exports.compositeWorkTypeDropdown();
    pages.base.scrollIntoView(element);
    expect(pages.base.selectedTgDropdownOption(element)).toBe('Select type');
};
exports.selectCompositeWorkType = function(value) {
    var element = exports.compositeWorkTypeDropdown();
    pages.base.scrollIntoView(element);
    pages.base.selectDropdownOption(element, value, { dropdownType: 'tg' });
};
exports.enterComponentWorkSearchTerms = function(i, value) {
    var element = pages.new_work.componentWorkSearchField(i);
    pages.base.scrollIntoView(element);
    element.clear();
    element.sendKeys(value);
};
exports.enterCreatorSearchTerms = function(i, name) {
    var element = pages.new_work.creatorNameInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    element.sendKeys(name);
};
exports.enterRandomLetterOnCreatorNameField = function(i) {
    exports.enterCreatorSearchTerms(i, random.letter());
};
exports.selectEnterAsNewWorkSuggestion = function() {
    return exports.enterAsNewWorkSuggestion().click();
};
exports.validateSelectedShellWorkTitleLanguage = function(i, value) {
    var element = exports.shellWorkTitleLanguageDropdown(i);
    pages.base.scrollIntoView(element);
    expect(pages.base.selectedTgDropdownOption(element)).toBe(value);
};
exports.enteredShellWorkTitle = function(i) {
    var element = exports.shellWorkTitleInput(i);
    pages.base.scrollIntoView(element);
    return element.getAttribute('value');
};
exports.validateEnteredShellWorkTitle = function(i, value) {
    expect(exports.enteredShellWorkTitle(i)).toBe(value);
};
exports.selectedShellWorkCreatorRole = function(i, j) {
    var element = exports.shellWorkCreatorRoleDropdown(i, j);
    pages.base.scrollIntoView(element);
    return pages.base.selectedTgDropdownOption(element);
};
exports.validateSelectedShellWorkCreatorRole = function(i, j, value) {
    expect(exports.selectedShellWorkCreatorRole(i, j)).toBe(value);
};
exports.validateRequiredShellWorkCreatorNameField = function(i, j) {
    var element = exports.shellWorkCreatorNameInput(i, j);
    pages.base.scrollIntoView(element);
    expect(pph.matchesCssSelector(element, '.ng-invalid-required')).toBeTruthy();
};
exports.enterShellWorkCreatorSearchTerms = function(i, j, value) {
    var element = exports.shellWorkCreatorNameInput(i, j);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.enterRandomLetterOnShellWorkCreatorNameField = function(i, j) {
    return exports.enterShellWorkCreatorSearchTerms(i, j, random.letter());
};
exports.validateRequiredShellWorkCreatorContributionField = function(i, j) {
    var element = exports.shellWorkCreatorContributionInput(i, j);
    pages.base.scrollIntoView(element);
    expect(pph.matchesCssSelector(element, '.ng-invalid-required')).toBeTruthy();
};
exports.enterShellWorkCreatorContribution = function(i, j, value) {
    var element = exports.shellWorkCreatorContributionInput(i, j);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.validateDefaultComponentWorkSearchFilter = function(i) {
    var element = exports.componentWorkSearchFilterDropdown(i);
    pages.base.scrollIntoView(element);
    expect(pages.base.selectedDropdownOption(element)).toBe('Title');
};
exports.validateRequiredComponentWorkSearchField = function(i) {
    var element = exports.componentWorkSearchField(i);
    pages.base.scrollIntoView(element);
    expect(pph.matchesCssSelector(element, '.ng-invalid-required')).toBeTruthy();
};
exports.selectFirstComponentWorkSuggestion = function() {
    return $$('.typeahead-result').get(0).then(function(suggestion) {
        var result = {};

        result.name = suggestion.$('.typeahead-result-text').getText();
        result.workCode = suggestion.$('.typeahead-result-right').getText();

        suggestion.click();

        return result;
    });
};
exports.expectShowComponentWorkDetailsButtonToAppear = function(i) {
    var element = exports.showComponentWorkDetailsButton(i);
    var presentAndDisplayed = pages.base.isPresentAndDisplayed(element);
    presentAndDisplayed.then(function(presentAndDisplayed) {
        if(presentAndDisplayed) {
            pages.base.scrollIntoView(element);
        }
        expect(presentAndDisplayed).toBeTruthy();
    });
};
exports.expectSameWorkCantBeAddedAsComponentMultipleTimesMessageToAppear = function(i) {
    var element = exports.sameWorkCantBeAddedAsComponentMultipleTimesMessage(i);
    var presentAndDisplayed = pages.base.isPresentAndDisplayed(element);
    presentAndDisplayed.then(function(presentAndDisplayed) {
        if(presentAndDisplayed) {
            pages.base.scrollIntoView(element);
        }
        expect(presentAndDisplayed).toBeTruthy();
    });
};
exports.deleteComponentWork = function(i) {
    var element = exports.deleteComponentWorkButton(i);
    pages.base.scrollIntoView(element);
    element.click();
};
exports.confirmComponentWorkDeletion = function() {
    exports.confirmComponentWorkDeletionButton().click();
};
exports.selectRandomCreatorSuggestion = function() {
    return $$(".typeahead-result").then(function(suggestions) {
        var randomSuggestion = _.sample(suggestions.slice(0, 3));
        var result = {};

        result.name = pph.trim(randomSuggestion.$('.typeahead-result-text').getText());

        result.ipiNumber = (
            randomSuggestion.$('.typeahead-result-right').getText().then(function(value) {
                if(/^\(.*\)$/.test(value)) {
                    value = value.slice(1, -1);
                }

                return value;
            })
        );

        randomSuggestion.click();

        return result;
    });
};
exports.selectCreatorSuggestionByIpiNumber = function(ipiNumber) {
    var suggestion = $$('.typeahead-result').first();
    var result = {};

    result.name = pph.trim(suggestion.$('.typeahead-result-text').getText());

    result.ipiNumber = (
        suggestion.$('.typeahead-result-right').getText().then(function(value) {
            if(/^\(.*\)$/.test(value)) {
                value = value.slice(1, -1);
            }

            expect(value).toEqual(ipiNumber);

            return value;
        })
    );

    return suggestion.click().then(function() {
        return result;
    });
};
module.exports.enterCreatorContribution = function(i, value) {
	var element = pages.new_work.creatorContributionInput(i);
	pages.base.scrollIntoView(element);
	element.clear();
	return element.sendKeys(value);
};
exports.validateRequiredComponentWorkAllocationField = function(i) {
    var element = exports.componentWorkAllocationInput(i);
    pages.base.scrollIntoView(element);
    expect(pph.matchesCssSelector(element, '.ng-invalid-required')).toBeTruthy();
};
exports.enterComponentWorkAllocation = function(i, value) {
    var element = exports.componentWorkAllocationInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    element.sendKeys(value);
};
exports.selectIntendedPurpose = function(value) {
    var element = exports.intendedPurposeDropdown();
    pages.base.scrollIntoView(element);
    return pages.base.selectDropdownOption(element, value, {
        dropdownType: 'tg'
    });
};
exports.selectMusicLibrary = function(value) {
    var element = exports.musicLibraryDropdown();
    pages.base.scrollIntoView(element);
    return pages.base.selectDropdownOption(element, value, {
        dropdownType: 'tg'
    });
};
module.exports.enterCreationYear = function(value) {
	var element = pages.new_work.creationYearInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterCreationMonth = function(value) {
	var element = pages.new_work.creationMonthInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterCreationDay = function(value) {
	var element = pages.new_work.creationDayInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterDeliveryYear = function(value) {
	var element = pages.new_work.deliveryYearInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterDeliveryMonth = function(value) {
	var element = pages.new_work.deliveryMonthInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterDeliveryDay = function(value) {
	var element = pages.new_work.deliveryDayInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.optToIncludeWorkOnWebsite = function(include) {
	var elements = pages.new_work.includeWorkOnWebsiteButtons();
	var elementIndex;
	var element;
	elementIndex = { "true": 0, "false": 1 }[!!include];
	element = elements.get(elementIndex);
	pages.base.scrollIntoView(element);
	element.click();
};
exports.continueToNextTab = function() {
    return exports.continueToNextTabButton().click();
};
