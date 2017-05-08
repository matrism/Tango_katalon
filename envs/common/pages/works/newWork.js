'use strict';

var _ = require('lodash'),
    pph = require('../../../../helpers/pph'),
    random = require('../../../../helpers/random'),
    ExpectedConditions = protractor.ExpectedConditions;

exports = module.exports = pages.newWork = new ftf.pageObject({
	url: _tf_config.urls.app_url + "#/work/create"
});
module.exports.primaryWorkTitleLanguageDropdown = function() {
	return element(by.model('tgModularEditModel.primaryTitle.languageCode'));
};
module.exports.primaryWorkTitleInput = function() {
	return element(by.model('tgModularEditModel.primaryTitle.title'));
};
module.exports.alternateWorkTitleRows = function() {
	return element.all(by.repeater('altTitle in tgModularEditModel.alternativeTitles.$getItems()'));
};
module.exports.alternateWorkTitleRow = function(index) {
	return pages.newWork.alternateWorkTitleRows().get(index);
};
module.exports.alternateWorkTitleLanguageDropdown = function(index) {
	return (
		pages.newWork.alternateWorkTitleRow(index)
			.$('[tg-component-render-template="$templates.main.wrapper"]')
	);
};
module.exports.alternateWorkTitleInput = function(index) {
	return (
		pages.newWork.alternateWorkTitleRow(index)
			.element(by.model("altTitle.title"))
	);
};
exports.compositeWorkCheckbox = function() {
    return element(by.model('tgModularEditModel.isCompositeWork'));
};
exports.compositeWorkTypeDropdown = function() {
    return element(by.model('tgModularEditModel.compositeType'));
};
exports.componentWorkRows = function() {
    return element.all(by.repeater('component in tgModularEditModel.components.$getItems()'));
};

exports.shellWorkRows = function(){
    return element.all(by.repeater('creator in component.nonControlledWork.contributors.creators.$getItems()'));
};

exports.componentWorkRow = function(i) {
    return exports.componentWorkRows().get(i);
};
exports.componentWorkSearchFilterDropdowns = function() {
    return exports.componentWorkRows().all(
        by.model('component.workSearchType')
    );
};
exports.componentWorkSearchFilterDropdown = function(i) {
    return exports.componentWorkSearchFilterDropdowns().get(i);
};
exports.componentWorkSearchField = function(i) {
    return exports.componentWorkRows().get(i).element(
        by.css('div[ng-model="component.work"] div.tg-typeahead__input-wrap input')
    );
};
exports.componentWorkAllocationInputs = function() {
    return exports.componentWorkRows().all(
        by.model('component.allocationPercentage')
    );
};
exports.enterAsNewWorkSuggestion = function() {
    return element(by.cssContainingText('.tg-typeahead__suggestions-footer-inner', 'Enter as a new work'));
};
exports.waitForEnterAsNewWorkToBeDisplayed = function() {
    browser.wait(ExpectedConditions.visibilityOf(element(by.css('.tg-typeahead__suggestions-footer-inner'))));
};

exports.waitForEnterShellWorkToBeDisplayed = function() {
    browser.wait(ExpectedConditions.visibilityOf(element(by.css('.tg-typeahead__suggestions-group-item'))));
};

exports.enterAsWorkSuggestion = function(value) {
    return element(by.cssContainingText('.tg-typeahead__suggestions-group-item.ng-scope', value));
};

exports.waitForEnterAsWorkToBeDisplayed = function(value) {
    browser.wait(ExpectedConditions.visibilityOf(exports.enterAsWorkSuggestion(value)));
};

exports.shellWorkTitleLanguageDropdown = function(i) {
    return exports.componentWorkRows().get(i).element(
        by.model('component.nonControlledWork.primaryTitle.languageCode')
    );
};
exports.shellWorkTitleInput = function(i) {
    return exports.componentWorkRows().get(i).element(
        by.model('component.nonControlledWork.primaryTitle.title')
    );
};
exports.shellWorkCreatorRows = function(i) {
    return exports.componentWorkRows().get(i).all(
        by.repeater('creator in component.shell.tmpCreators')
    );
};
exports.shellWorkCreatorRoleDropdown = function(i, j) {
    return (
        exports.shellWorkRows().get(i)
            .all(by.model('creator.role')).get(j)
   );
};

exports.shellWorkCreatorNameInputs = function(i) {
    return exports.componentWorkRows().get(i).all(
    	by.css('div[ng-model="creator.person"] input')
    );
};

exports.shellWorkCreatorNameRequired = function(i) {
    return exports.shellWorkRows().get(i).all(
        by.css('div[ng-model="creator.person"]')
    );
};

exports.shellWorkCreatorNameInput = function(i, j) {
    return exports.shellWorkCreatorNameInputs(i).get(j);
};

exports.shellWorkCreatorName = function(i, j) {
    return exports.shellWorkCreatorNameRequired(i).get(j);
};

exports.shellWorkCreatorContributionInputs = function(i) {
    return exports.componentWorkRows().get(i).all(
        by.model('creator.workContribution')
    );
};
exports.shellWorkCreatorContributionInput = function(i, j) {
    return exports.shellWorkCreatorContributionInputs(i).get(j);
};
exports.deleteComponentWorkButtons = function() {
    return exports.componentWorkRows().$$('[ng-click="confirmComponentRemove(tgModularEditModel.components, component, $viewForm);"]');
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
        by.cssContainingText('a', 'Show Details')
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

exports.componentWorkTitleInput = function(i) {
    return exports.componentWorkSearchField().get(i);
};

exports.componentWorkAllocationInput = function(i) {
    return exports.componentWorkAllocationInputs().get(i);
};
module.exports.creatorContributionRows = function() {
	return element.all(by.repeater('creator in tgModularEditModel.creators.$getItems()'));
};
module.exports.creatorContributionRow = function(index) {
	return pages.newWork.creatorContributionRows().get(index);
};
module.exports.creatorRoleDropdown = function(index) {
	return (
		pages.newWork.creatorContributionRow(index)
			.element(by.model("creator.role"))
	);
};
module.exports.creatorNameInput = function(index) {
	return (
		pages.newWork.creatorContributionRow(index)
		.element(by.model('creator.person'))
	);
};
exports.creatorSearchResultElements = function () {
    return $$('.tg-typeahead__suggestions-group-item');
};

module.exports.creatorContributionInput = function(index) {
	return (
		pages.newWork.creatorContributionRow(index)
			.element(by.model("creator.workContribution"))
	);
};

module.exports.contributionTotalBinding = function() {
	return element(by.binding("(tgModularEditModel.getTotal(true, true) | number:3)"));
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
	return element(by.model("tgModularEditModel.musicalWorkDistributionCategory"));
};
module.exports.textMusicRelationshipDropdown = function() {
	return element(by.model("tgModularEditModel.textMusicRelationship"));
};
module.exports.excerptTypeDropdown = function() {
	return element(by.model("tgModularEditModel.excerptType"));
};
module.exports.versionTypeDropdown = function() {
	return element(by.model("tgModularEditModel.versionType"));
};
module.exports.lyricAdaptationDropdown = function() {
	return element(by.model("tgModularEditModel.lyricAdaptationType"));
};
module.exports.musicArrangementDropdown = function() {
	return element(by.model("tgModularEditModel.musicArrangementType"));
};
module.exports.intendedPurposeDropdown = function() {
	return element(by.model("tgModularEditModel.intendedPurpose"));
};
module.exports.productionTitleInput = function() {
	return element(by.model("tgModularEditModel.productionTitle.title"));
};
module.exports.bltvrDropdown = function() {
	return element(by.model("tgModularEditModel.bltvr"));
};
module.exports.musicLibraryDropdown = function() {
	return element(by.model("tgModularEditModel.libraryCode"));
};
module.exports.creationDateContainer = function() {
	return element(by.model("tgModularEditModel.date"));
};
module.exports.creationDatePickerIcon = function() {
	return (
		pages.newWork.creationDateContainer()
			.$(".date .add-on")
	);
};
module.exports.creationYearInput = function() {
	return (
		pages.newWork.creationDateContainer()
			.element(by.model("date.year"))
	);
};
module.exports.creationMonthInput = function() {
	return (
		pages.newWork.creationDateContainer()
			.element(by.model("date.month"))
	);
};
module.exports.creationDayInput = function() {
	return (
		pages.newWork.creationDateContainer()
			.element(by.model("date.day"))
	);
};
module.exports.deliveryDateContainer = function() {
	return element(by.model("tgModularEditModel.date"));
};
module.exports.deliveryDatePickerIcon = function() {
	return (
		pages.newWork.deliveryDateContainer()
			.$(".date .add-on")
	);
};
module.exports.deliveryYearInput = function() {
	return (
		pages.newWork.deliveryDateContainer()
			.element(by.model("date.year"))
	);
};
module.exports.deliveryMonthInput = function() {
	return (
		pages.newWork.deliveryDateContainer()
			.element(by.model("date.month"))
	);
};
module.exports.deliveryDayInput = function() {
	return (
		pages.newWork.deliveryDateContainer()
			.element(by.model("date.day"))
	);
};
module.exports.includeWorkOnWebsiteButtons = function() {
	return element.all(by.model("tgModularEditModel.includeOnWebsite"));
};
module.exports.continueToNextTabButton = function() {
    return $('.page-footer').element(by.cssContainingText(
        'button:not(.disabled)', 'Continue'
    ));
};
module.exports.saveWorkButton = function() {
	return $(".page-footer [type='submit']:nth-child(4):not(.disabled)");
};
module.exports.selectedPrimaryWorkTitleLanguage = function() {
	var element = pages.newWork.primaryWorkTitleLanguageDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedAlternateWorkTitleLanguage = function(i) {
	var element = pages.newWork.alternateWorkTitleLanguageDropdown(i);
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedCreatorRole = function(i) {
	var element = pages.newWork.creatorRoleDropdown(i);
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.enteredCreatorContribution = function(i) {
	var element = pages.newWork.creatorContributionInput(i);
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.totalContribution = function() {
	var element = pages.newWork.contributionTotalBinding();
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
	var element = pages.newWork.musicalDistributionCategoryDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedTextMusicRelationship = function() {
	var element = pages.newWork.textMusicRelationshipDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedExcerptType = function() {
	var element = pages.newWork.excerptTypeDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedVersionType = function() {
	var element = pages.newWork.versionTypeDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.isLyricAdaptationFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(
		pages.newWork.lyricAdaptationDropdown()
	);
};
module.exports.selectedLyricAdaptation = function() {
	return pages.base.selectedTgDropdownOption(
		pages.newWork.lyricAdaptationDropdown()
	);
};
module.exports.isMusicArrangementFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(
		pages.newWork.musicArrangementDropdown()
	);
};
module.exports.selectedMusicArrangement = function() {
	return pages.base.selectedTgDropdownOption(
		pages.newWork.musicArrangementDropdown()
	);
};
module.exports.isIntendedPurposeFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(
		pages.newWork.intendedPurposeDropdown()
	);
};
module.exports.selectedIntendedPurpose = function() {
	var element = pages.newWork.intendedPurposeDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.isProductionTitleFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(
		pages.newWork.productionTitleInput()
	);
};
module.exports.enterProductionTitle = function(title) {
	var element = pages.newWork.productionTitleInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(title);
};
module.exports.isBltvrFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(pages.newWork.bltvrDropdown());
};
module.exports.selectedBltvr = function() {
	var element = pages.newWork.bltvrDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.isMusicLibraryFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(pages.newWork.musicLibraryDropdown());
};
module.exports.selectedMusicLibrary = function() {
	var element = pages.newWork.musicLibraryDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.enteredCreationYear = function() {
	var element = pages.newWork.creationYearInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enteredCreationMonth = function() {
	var element = pages.newWork.creationMonthInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enteredCreationDay = function() {
	var element = pages.newWork.creationDayInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enteredDeliveryYear = function() {
	var element = pages.newWork.deliveryYearInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enteredDeliveryMonth = function() {
	var element = pages.newWork.deliveryMonthInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enteredDeliveryDay = function() {
	var element = pages.newWork.deliveryDayInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enterPrimaryWorkTitle = function(title) {
	var element = pages.newWork.primaryWorkTitleInput();
	pages.base.scrollIntoView(element);
	element.clear();
	return element.sendKeys(title);
};
exports.enterAlternateWorkTitle = function(i, title) {
    var element = pages.newWork.alternateWorkTitleInput(i);
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
    var element = pages.newWork.componentWorkSearchField(i);
    pages.base.scrollIntoView(element);
    //element.clear();
    element.sendKeys(value);

};
exports.enterCreatorSearchTerms = function(i, name) {
	var element = pages.newWork.creatorNameInput(i).element(by.css('input[ng-model="$term"]'));
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
    var element = exports.shellWorkCreatorName(i, j);
    pages.base.scrollIntoView(element);
    expect(pph.matchesCssSelector(element, '.ng-invalid-required')).toBeTruthy();
};
exports.enterShellWorkCreatorSearchTerms = function(i, j, value) {
    var element = exports.shellWorkCreatorNameInput(i, j);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.enterRandomLetterOnShellWorkCreatorNameField = function(i, j, value) {
    return exports.enterShellWorkCreatorSearchTerms(i, j, value);
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
    var suggestion = $$('.tg-typeahead__suggestions-group-item').get(0),
        result = {};

    result.name = suggestion.$('span[ng-bind-html="::$match.data.primaryTitle.title | tgHighlight:$term"]').getText();
    result.workCode = suggestion.$('span[ng-bind-html="::$match.data.workCode.getFullCode() | tgHighlight:$term"]').getText();

    return suggestion.click().then(function() {
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
    pages.base.waitForModal();

    return exports.confirmComponentWorkDeletionButton().click();
};
exports.selectRandomCreatorSuggestion = function() {
    return exports.creatorSearchResultElements().then(function(suggestions) {
        var randomSuggestion = _.sample(suggestions.slice(0, 3));
        var result = {};

        result.name = pph.trim(randomSuggestion.$('.tg-typeahead__suggestions-group-item .cf-col-8').getText());

        result.ipiNumber = (
            randomSuggestion.$('.tg-typeahead__suggestions-group-item .cf-col-4').getText().then(function(value) {
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
    var suggestion = exports.creatorSearchResultElements().first();
    var result = {};

    result.name = pph.trim(suggestion.$('.tg-typeahead__suggestions-group-item .cf-col-8').getText());

    result.ipiNumber = (
        suggestion.$('.tg-typeahead__suggestions-group-item .cf-col-4').getText().then(function(value) {
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

exports.selectCreatorSearchResultByIndex = function (i) {
    var els = exports.creatorSearchResultElements();

    browser.wait(EC.visibilityOfAny(els));

    return asAlways(els.get(i), 'scrollIntoView', 'click');
};

module.exports.enterCreatorContribution = function(i, value) {
	var element = pages.newWork.creatorContributionInput(i);
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
	var element = pages.newWork.creationYearInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterCreationMonth = function(value) {
	var element = pages.newWork.creationMonthInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterCreationDay = function(value) {
	var element = pages.newWork.creationDayInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterDeliveryYear = function(value) {
	var element = pages.newWork.deliveryYearInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterDeliveryMonth = function(value) {
	var element = pages.newWork.deliveryMonthInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterDeliveryDay = function(value) {
	var element = pages.newWork.deliveryDayInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.optToIncludeWorkOnWebsite = function(include) {
	var elements = pages.newWork.includeWorkOnWebsiteButtons();
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
exports.continueIfPrompted = function () {
    var btn = element.all(by.buttonText('Ignore and continue to enter new work'));
    browser.sleep(1000);

    btn.count().then(function(num){
        if (num > 0) {
            btn.first().click();
            browser.sleep(500);
        }
    });
};