"use strict";
var pph = require("../helpers/pph");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
exports = module.exports = pages.work = new ftf.pageObject();
module.exports.open = function(workId) {
	if(!workId) {
		return ftf.pageObject.prototype.open.call(this);
	}
	promise.when(workId).then (
		function(workId) {
			browser.get(_tf_config.urls.app_url + "#/work/" + workId + "/metadata");
			pages.base.waitForAjax();
		}
	);
};
module.exports.workIdBinding = function() {
	return element(by.binding("getWorkFullCode(work.pristine)"));
};
module.exports.primaryWorkTitleBinding = function() {
	return element(by.binding("getWorkName(workPristine)"));
};
module.exports.headerAlternateWorkTitleRows = function() {
	return (
		element.all(by.repeater("altTitle in altTitles | limitTo:workHeaderLimits.altTitles"))
	);
};
module.exports.alternateWorkTitleBindings = function() {
	return (
		element.all(by.repeater("altTitle in altTitles")).all(by.binding("altTitle.title"))
	);
};
module.exports.primaryWorkTitleHeading = function() {
	return $("[data-ng-show='workHeader.title.detail']");
};
module.exports.editWorkTitlesButton = function() {
	return $(".title-edit [data-ng-click='showEdit(workHeader.title, titleEditForm)']");
};
module.exports.editWorkTitlesContainer = function() {
	return $("[data-ng-show='workHeader.title.edit']");
};
module.exports.editPrimaryWorkTitleField = function() {
	return (
		pages.work.editWorkTitlesContainer()
			.element(by.model("work.title.primary_title.title"))
	);
};
module.exports.alternateWorkTitleEditRows = function() {
	return (
		pages.work.editWorkTitlesContainer()
			.all(by.repeater("altTitle in work.title.alternative_titles"))
	);
};
module.exports.alternateWorkTitleEditRow = function(i) {
	return pages.work.alternateWorkTitleEditRows().get(i);
};
module.exports.defaultAlternateWorkTitleLanguage = function(i) {
	return pages.base.selectedDropdownOption (
		pages.work.alternateWorkTitleEditRows().last()
			.element(by.model("altTitle.language_code"))
	);
};
module.exports.editAlternateWorkTitleField = function(i) {
	return (
		pages.work.alternateWorkTitleEditRow(i)
			.element(by.model("altTitle.title"))
	);
};
module.exports.newAlternateWorkTitleField = function() {
	return (
		pages.work.alternateWorkTitleEditRows().last()
			.element(by.model("altTitle.title"))
	);
};
module.exports.titleEditorCheckingForDuplicatesMessage = function() {
	return $(".title-edit [data-ng-show='show.requests.checkDuplicates']");
};
module.exports.cancelWorkTitlesEditingButton = function() {
	return (
		pages.work.editWorkTitlesContainer()
			.element(by.cssContainingText("button", "Cancel"))
	);
};
module.exports.saveWorkTitlesButton = function() {
	return (
		pages.work.editWorkTitlesContainer()
			.element(by.cssContainingText("button", "Save"))
	);
};
module.exports.creatorNamesContainer = function() {
	return $(".EDITOR.creators-edit");
};
module.exports.editCreatorsContainer = function() {
	return $("[data-ng-show='workHeader.creators.edit'");
};
module.exports.editCreatorsButton = function() {
	return $(
		"[data-ng-click='showEdit(workHeader.creators, " +
			"contributionEditForm)']"
	);
};
exports.compositeWorkCheckbox = function() {
    return element(by.model('work.contribution.isCompositeWork'));
};
exports.confirmDisablingWorkAsCompositeButton = function() {
    return pages.base.modalFooter().element(
        by.cssContainingText('button', 'Yes')
    );
};
exports.compositeWorkTypeDropdown = function() {
    return element(by.model('work.contribution.composite_type'));
};
exports.confirmMakingIntoMedleyButton = function() {
    return pages.base.modalFooter().element(
        by.cssContainingText('button', 'Yes')
    );
};
module.exports.editCreatorNameInputs = function() {
	return element.all(by.model("creator.person_name"));
};
module.exports.editCreatorNameInput = function(i) {
	return pages.work.editCreatorNameInputs().get(i);
};
module.exports.editCreatorContributionInputs = function() {
	return element.all(by.model("creator.contribution"));
};
module.exports.editCreatorContributionInput = function(i) {
	return pages.work.editCreatorContributionInputs().get(i);
};
module.exports.editFirstCreatorContributionInput = function(i) {
	return pages.work.editCreatorContributionInputs().first();
};
module.exports.creatorsEditorCheckingForDuplicatesMessage = function() {
	return $(".creators-edit [data-ng-show='show.requests.checkDuplicates']");
};
exports.componentWorkRows = function() {
    return element.all(by.repeater('component in work.contribution.components'));
};
exports.componentWorkRow = function(i) {
    return exports.componentWorkRows().get(i);
};
exports.componentWorkNameBindings = function() {
    return exports.componentWorkRows().all(
        by.binding('{{ getWorkName(component.model) }}')
    );
};
exports.componentWorkNameBinding = function(i) {
    return exports.componentWorkNameBindings().get(i);
};
exports.showComponentWorkDetailsButton = function(i) {
    return exports.componentWorkRows().get(i).$('.show-hide-ca');
};
exports.sameWorkCantBeAddedAsComponentMultipleTimesMessage = function(i) {
    return exports.componentWorkRow(i).element(
        by.cssContainingText(
            '.validation-message-text',
            'The same work cannot be added as a component multiple times.'
        )
    );
};
exports.componentWorkSearchFilterDropdowns = function() {
    return exports.componentWorkRows().all(
        by.model('component.filter')
    );
};
exports.componentWorkSearchFilterDropdown = function(i) {
    return exports.componentWorkSearchFilterDropdowns().get(i);
};
exports.componentWorkSearchTermsField = function(i) {
    return exports.componentWorkRow(i).element(
        by.model('component.selected_work')
    );
};
exports.componentWorkAllocationInputs = function() {
    return exports.componentWorkRows().all(
        by.model('component.allocation_percentage')
    );
};
exports.componentWorkAllocationInput = function(i) {
    return exports.componentWorkAllocationInputs().get(i);
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
module.exports.cancelCreatorsButton = function() {
	return (
		pages.work.editCreatorsContainer()
			.element(by.cssContainingText("button", "Cancel"))
	);
};
module.exports.saveCreatorsButton = function() {
	return (
		pages.work.editCreatorsContainer()
			.element(by.cssContainingText("button", "Save"))
	);
};
exports.similarWorksPopUpScrollArea = function() {
    return pages.base.modalDialog().$('[style*="max-height"]');
};
exports.similarWorkTitleBindings = function() {
    return pages.base.modalDialog().$$('.work-name');
};
exports.firstSimilarWorkTitleBinding = function() {
    return exports.similarWorkTitleBindings().first();
};
exports.ignoreSimilarWorksButton = function() {
    return pages.base.modalFooter().element(
        by.cssContainingText('button', 'Ignore and continue to enter new work')
    );
};
module.exports.creationDateContainerLabel = function() {
	return element(by.cssContainingText(".metadata-label", "CREATION"));
};
module.exports.editCreationDateButton = function() {
	return $(
		"[data-ng-click='showEdit(workHeader.creationDate, " +
		"creationDateEditForm)']"
	);
};
module.exports.editCreationDateContainer = function() {
	return $("[data-ng-show='workHeader.creationDate.edit']");
};
module.exports.creationYearInput = function() {
	return (
		pages.work.editCreationDateContainer()
			.element(by.model("date.year"))
	);
};
module.exports.creationMonthInput = function() {
	return (
		pages.work.editCreationDateContainer()
			.element(by.model("date.month"))
	);
};
module.exports.creationDayInput = function() {
	return (
		pages.work.editCreationDateContainer()
			.element(by.model("date.day"))
	);
};
module.exports.cancelCreationDateEditingButton = function() {
	return pages.work.editCreationDateContainer().element(
		by.cssContainingText("button", "Cancel")
	);
};
module.exports.saveCreationDateButton = function() {
	return pages.work.editCreationDateContainer().element(
		by.cssContainingText("button", "Save")
	);
};
module.exports.creationDateBinding = function() {
	return element(by.binding("work.pristine.creation_date"));
};
module.exports.deliveryDateContainerLabel = function() {
	return element(by.cssContainingText(".metadata-label", "DELIVERY"));
};
module.exports.editDeliveryDateButton = function() {
	return $(
		"[data-ng-click='showEdit(workHeader.deliveryDate, " +
		"deliveryDateEditForm)']"
	);
};
module.exports.editDeliveryDateContainer = function() {
	return $("[data-ng-show='workHeader.deliveryDate.edit']");
};
module.exports.deliveryYearInput = function() {
	return (
		pages.work.editDeliveryDateContainer()
			.element(by.model("date.year"))
	);
};
module.exports.deliveryMonthInput = function() {
	return (
		pages.work.editDeliveryDateContainer()
			.element(by.model("date.month"))
	);
};
module.exports.deliveryDayInput = function() {
	return (
		pages.work.editDeliveryDateContainer()
			.element(by.model("date.day"))
	);
};
module.exports.cancelDeliveryDateEditingButton = function() {
	return pages.work.editDeliveryDateContainer().element(
		by.cssContainingText("button", "Cancel")
	);
};
module.exports.saveDeliveryDateButton = function() {
	return pages.work.editDeliveryDateContainer().element(
		by.cssContainingText("button", "Save")
	);
};
module.exports.deliveryDateBinding = function() {
	return element(by.binding("work.pristine.delivery_date"));
};
module.exports.assetTypeContainer = function() {
	return $("[data-tg-modular-edit='assetTypeEdit']");
};
module.exports.musicalDistributionCategoryBinding = function() {
	return element(by.binding(
		"getAdminDataName(dataHolder.musicalDistributionCategories, " +
		"assetTypeEdit.model.musical_work_distribution_category)"
	));
};
module.exports.textMusicRelationshipBinding = function() {
	return element(by.binding(
		"getAdminDataName(dataHolder.textMusicRelationships, " +
		"assetTypeEdit.model.text_music_relationship)"
	));
};
module.exports.excerptTypeBinding = function() {
	return element(by.binding(
		"getAdminDataName(dataHolder.excerptTypes, assetTypeEdit.model.excerpt_type)"
	));
};
module.exports.versionTypeBinding = function() {
	return element(by.binding(
		"getAdminDataName(dataHolder.versionTypes, assetTypeEdit.model.version_type)"
	));
};
module.exports.lyricAdaptationBinding = function() {
	return element(by.binding(
		"getAdminDataName(dataHolder.lyricAdaptations, " +
		"assetTypeEdit.model.lyric_adaptation_type)"
	));
};
module.exports.musicArrangementBinding = function() {
	return element(by.binding(
		"getAdminDataName(dataHolder.musicArrangements, " +
		"assetTypeEdit.model.music_arrangement_type)"
	));
};
module.exports.intendedPurposeBinding = function() {
	return element(by.binding(
		"getAdminDataName(dataHolder.intendedPurposes, " +
		"workOriginEdit.model.intended_purpose)"
	));
};
module.exports.productionTitleBinding = function() {
	return element(by.binding("workOriginEdit.model.production_title.title"));
};
module.exports.bltvrBinding = function() {
	return element(by.binding(
		"getAdminDataName(dataHolder.bltvrs, " +
		"workOriginEdit.model.bltvr)"
	));
};
module.exports.musicLibraryBinding = function() {
	return element(by.binding(
		"getAdminDataName(dataHolder.musicLibrarys, " +
		"workOriginEdit.model.library_code)"
	));
};
module.exports.editAssetTypeButton = function() {
	return (
		pages.work.assetTypeContainer()
			.$("[data-ng-click='$$modularScope.showEdit()']")
	);
};
module.exports.editMusicalDistributionCategoryField = function() {
	return element(by.model("assetTypeEdit.model.musical_work_distribution_category"));
};
module.exports.editTextMusicRelationshipField = function() {
	return element(by.model("assetTypeEdit.model.text_music_relationship"));
};
module.exports.editExcerptTypeField = function() {
	return element(by.model("assetTypeEdit.model.excerpt_type"));
};
module.exports.editVersionTypeField = function() {
	return element(by.model("assetTypeEdit.model.version_type"));
};
module.exports.editLyricAdaptationField = function() {
	return element(by.model("assetTypeEdit.model.lyric_adaptation_type"));
};
module.exports.editMusicArrangementField = function() {
	return element(by.model("assetTypeEdit.model.music_arrangement_type"));
};
module.exports.cancelAssetTypeEditingButton = function() {
	return (
		pages.work.assetTypeContainer()
			.element(by.cssContainingText("button", "Cancel"))
	);
};
module.exports.saveAssetTypeButton = function() {
	return (
		pages.work.assetTypeContainer()
			.element(by.cssContainingText("button", "Save"))
	);
};
module.exports.workOriginContainer = function() {
	return $("[data-tg-modular-edit='workOriginEdit']");
};
module.exports.editWorkOriginButton = function() {
	return (
		pages.work.workOriginContainer()
			.$("[data-ng-click='$$modularScope.showEdit()']")
	);
};
module.exports.cancelWorkOriginEditingButton = function() {
	return (
		pages.work.workOriginContainer()
			.element(by.cssContainingText("button", "Cancel"))
	);
};
module.exports.saveWorkOriginButton = function() {
	return (
		pages.work.workOriginContainer()
			.element(by.cssContainingText("button", "Save"))
	);
};
module.exports.editIntendedPurposeField = function() {
	return element(by.model("workOriginEdit.model.intended_purpose"));
};
module.exports.editProductionTitleField = function() {
	return element(by.model("workOriginEdit.model.production_title.title"));
};
module.exports.editBltvrField = function() {
	return element(by.model("workOriginEdit.model.bltvr"));
};
module.exports.editMusicLibraryField = function() {
	return element(by.model("workOriginEdit.model.library_code"));
};
module.exports.workInclusionOnWebsiteParagraph = function() {
	return (
		element(by.css("[data-ng-switch='!!wcmWebsiteEdit.model.includeOnWebsite']"))
			.element(by.css(".ng-scope"))
	);
};
module.exports.editWorkInclusionOnWebsiteContainer = function() {
	return $("[data-tg-modular-edit='wcmWebsiteEdit']");
};
module.exports.editWorkInclusionOnWebsiteButton = function() {
	return (
		pages.work.editWorkInclusionOnWebsiteContainer()
			.$("[data-ng-click='$$modularScope.showEdit()']")
	);
};
module.exports.cancelWorkInclusionOnWebsiteButton = function() {
	return (
		pages.work.editWorkInclusionOnWebsiteContainer()
			.element(by.cssContainingText("button", "Cancel"))
	);
};
module.exports.saveWorkInclusionOnWebsiteButton = function() {
	return (
		pages.work.editWorkInclusionOnWebsiteContainer()
			.element(by.cssContainingText("button", "Save"))
	);
};
module.exports.goToScopeDelivery = function() {
	return browser.executeScript (
		function() {
			jQuery(".nav-tabs span:contains('Scope Delivery')").click();
		}
	);
};
module.exports.workId = function() {
	return pages.work.workIdBinding().getText();
};
module.exports.primaryWorkTitle = function() {
	var element = pages.work.primaryWorkTitleBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.alternateWorkTitles = function() {
	var deferred = promise.defer();
	pages.work.headerAlternateWorkTitleRows().then (
		function(headerAlternateWorkTitleRows) {
			if(headerAlternateWorkTitleRows.length === 0) {
				return [];
			}
			pages.base.scrollIntoView(headerAlternateWorkTitleRows[0]);
			browser.actions().mouseMove(headerAlternateWorkTitleRows[0]).perform();
			deferred.fulfill (
				pages.work.alternateWorkTitleBindings().map (
					function(element) {
						return element.getText();
					}
				)
			);
		}
	);
	return deferred.promise;
};
module.exports.isTitleEditorCheckingForDuplicates = function() {
	return pages.base.isPresentAndDisplayed(
		pages.work.titleEditorCheckingForDuplicatesMessage()
	);
};
module.exports.calculateEvenCreatorContributions = function() {
	var rows = pages.work.editCreatorContributionInputs();
	pages.base.scrollIntoView(rows.first());
	return rows.count().then(function(count) {
		return 100 / (count - 1);
	});
};
exports.selectedCompositeWorkType = function() {
    var element = exports.compositeWorkTypeDropdown();
    pages.base.scrollIntoView(element);
    return pages.base.selectedDropdownOption(element);
};
module.exports.enteredCreatorContribution = function(i) {
	var element = pages.work.editCreatorContributionInput(i);
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.isCreatorsEditorCheckingForDuplicates = function() {
	return pages.base.isPresentAndDisplayed(
		pages.work.creatorsEditorCheckingForDuplicatesMessage()
	);
};
exports.selectedComponentWorkName = function(i) {
    var element = exports.componentWorkNameBinding(i);
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.enteredComponentWorkAllocation = function(i) {
    var element = exports.componentWorkAllocationInput(i);
    pages.base.scrollIntoView(element);
    return element.getAttribute('value');
};
module.exports.enteredCreationYear = function() {
	return pages.work.creationYearInput().getAttribute("value");
};
module.exports.creationDate = function() {
	var element = pages.work.creationDateBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.enteredDeliveryYear = function() {
	return pages.work.deliveryYearInput().getAttribute("value");
};
module.exports.deliveryDate = function() {
	var element = pages.work.deliveryDateBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.workInclusionOnWebsite = function() {
	var element = pages.work.workInclusionOnWebsiteParagraph();
	pages.base.scrollIntoView(element);
	return element.getText().then (
		function(text) {
			return (text.indexOf("is included") !== -1);
		}
	);
};
module.exports.selectedMusicalDistributionCategory = function() {
	return pages.base.selectedDropdownOption(
		pages.work.editMusicalDistributionCategoryField()
	);
};
module.exports.selectedIntendedPurpose = function() {
	return pages.base.selectedTgDropdownOption(
		pages.work.editIntendedPurposeField()
	);
};
module.exports.selectedWorkInclusionOnWebsiteOption = function() {
	return pages.work.activeIncludeWorkOnWebsiteButton().getText().then (
		function(text) {
			switch(text.toLowerCase()) {
				case "yes":
					return true;
				case "no":
					return false;
				default:
					return text;
			}
		}
	);
};
module.exports.creatorNames = function(i) {
	var ithElement;
	var elements = (
		$(".scope-delivery-table")
			.all(by.binding("creator.person_name"))
			.filter (
				function(element) {
					return element.isDisplayed();
				}
			)
	);
	function handleElement(el) {
		pages.base.scrollIntoView(el);
		return el.getText();
	}
	if(i !== undefined) {
		return handleElement(elements.get(i));
	}
	else {
		return elements.map(handleElement);
	}
};
module.exports.creatorContributions = function(i) {
	var ithElement;
	// FIXME: Move this into its own locator.
	var elements = (
		$(".scope-delivery-table")
			.all(by.binding("creator.contribution"))
			.filter (
				function(element) {
					return element.isDisplayed();
				}
			)
	);
	function handleElement(el) {
		pages.base.scrollIntoView(el);
		return el.getText();
	}
	if(i !== undefined) {
		return handleElement(elements.get(i));
	}
	else {
		return elements.map(handleElement);
	}
};
module.exports.creatorContributionByName = function(name) {
	return pph.indexOf(pages.work.creatorNames(), name).then (
		function(creatorIndex) {
			if(creatorIndex === -1) {
				return null;
			}
			return pages.work.creatorContributions(creatorIndex).then (
				function(text) {
					if(!/^\d+\.\d+%$/.test(text)) {
						return text;
					}
					return parseFloat(text);
				}
			);
		}
	);
};
module.exports.musicalDistributionCategory = function() {
	var element = pages.work.musicalDistributionCategoryBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.textMusicRelationship = function() {
	var element = pages.work.textMusicRelationshipBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.excerptType = function() {
	var element = pages.work.excerptTypeBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.versionType = function() {
	var element = pages.work.versionTypeBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.lyricAdaptation = function() {
	var element = pages.work.lyricAdaptationBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.musicArrangement = function() {
	var element = pages.work.musicArrangementBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.intendedPurpose = function() {
	var element = pages.work.intendedPurposeBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.productionTitle = function() {
	var element = pages.work.productionTitleBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.bltvr = function() {
	var element = pages.work.bltvrBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.musicLibrary = function() {
	var element = pages.work.musicLibraryBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.editPrimaryWorkTitleFieldValue = function() {
	return pages.work.editPrimaryWorkTitleField().getAttribute("value"); 
};
module.exports.editFirstCreatorContributionFieldValue = function() {
	return pages.work.editFirstCreatorContributionInput().getAttribute("value"); 
};
(function() {
	var buttonCssSelector = "button[data-ng-model='wcmWebsiteEdit.model.includeOnWebsite']";
	var activeButtonCssSelector = buttonCssSelector + ".active";
	module.exports.activeIncludeWorkOnWebsiteButton = function() {
		return $(activeButtonCssSelector);
	};
	module.exports.includeWorkOnWebsiteButton = function() {
		return element(by.cssContainingText(buttonCssSelector, "Yes"));
	};
	module.exports.excludeWorkFromWebsiteButton = function() {
		return element(by.cssContainingText(buttonCssSelector, "No"));
	};
})();
module.exports.enterPrimaryWorkTitle = function(title) {
	var element = pages.work.editPrimaryWorkTitleField();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(title);
};
module.exports.enterAlternateWorkTitle = function(i, title) {
	var element = pages.work.editAlternateWorkTitleField(i);
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(title);
};
module.exports.enterNewAlternateWorkTitle = function(title) {
	var element = pages.work.newAlternateWorkTitleField();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(title);
};
exports.validateCompositeWorkType = function(value) {
    if(value.toLowerCase() === 'select type') {
        expect(
            pph.isElementPresentAndDisplayed(
               exports.compositeWorkTypeDropdown()
            )
        ).toBeFalsy();
    }
    else {
        expect(exports.selectedCompositeWorkType()).toBe(value);
    }
};
exports.validateComponentWorkName = function(i, value) {
    expect(exports.selectedComponentWorkName(i)).toEqual(value);
};
exports.validateComponentWorkAllocation = function(i, value) {
    expect(exports.enteredComponentWorkAllocation(i)).toEqual(
        pph.toFixed(value, 3)
    );
};
module.exports.enterCreatorContribution = function(i, value) {
	var element = pages.work.editCreatorContributionInput(i);
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
exports.expectDuplicateWorksPopUpToBeDisplayed = function(more) {
    more = more || {};

    pages.base.expectModalPopUpToBeDisplayed({ timeout: more.timeout });

    expect(pages.base.modalHeadingText()).toContain(
        'SIMILAR WORKS ARE FOUND'
    );
};
exports.expectSimilarWorksPopUpToHaveScrollbar = function() {
    expect(pages.base.elementHasVerticalScrollbar(
        exports.similarWorksPopUpScrollArea()
    )).toBeTruthy();
};
exports.clickCompositeWorkCheckbox = function() {
    var element = exports.compositeWorkCheckbox();
    pages.base.scrollIntoView(element);
    element.click();
    return element.getAttribute('checked');
};
exports.compositeWorkCheckboxState = function() {
    var element = exports.compositeWorkCheckbox();
    pages.base.scrollIntoView(element);
    return element.getAttribute('checked');
};
exports.expectDisablingWorkAsCompositePopUpToBeDisplayed = function(more) {
    more = more || {};

    pages.base.expectModalPopUpToBeDisplayed({ timeout: more.timeout });

    expect(pages.base.modalHeadingText()).toContain(
        'ARE YOU SURE YOU WANT TO DISABLE WORK AS COMPOSITE WORK?'
    );
};
exports.confirmDisablingWorkAsComposite = function() {
    exports.confirmDisablingWorkAsCompositeButton().click();
};
exports.selectCompositeWorkType = function(value) {
    var element = exports.compositeWorkTypeDropdown();
    pages.base.scrollIntoView(element);
    pages.base.selectDropdownOption(element, value);
};
exports.expectMakingIntoMedleyConfirmationPopUpToBeDisplayed = function(more) {
    more = more || {};

    pages.base.expectModalPopUpToBeDisplayed({ timeout: more.timeout });

    expect(pages.base.modalHeadingText()).toContain(
        'ARE YOU SURE YOU WANT TO MAKE THIS WORK AS MEDLEY COMPOSITE WORK?'
    );
};
exports.confirmMakingIntoMedley = function() {
    exports.confirmMakingIntoMedleyButton().click();
};
exports.validateRequiredCompositeWorkTypeField = function() {
    var element = exports.compositeWorkTypeDropdown();
    pages.base.scrollIntoView(element);
    expect(pph.matchesCssSelector(element, '.ng-invalid-required')).toBeTruthy();
};
exports.validateDefaultCompositeWorkType = function() {
    var element = exports.compositeWorkTypeDropdown();
    pages.base.scrollIntoView(element);
    expect(pages.base.selectedDropdownOption(element)).toBe('Select type');
};
exports.validateDefaultComponentWorkSearchFilter = function(i) {
    var element = exports.componentWorkSearchFilterDropdown(i);
    pages.base.scrollIntoView(element);
    expect(pages.base.selectedDropdownOption(element)).toBe('Title');
};
exports.validateRequiredComponentWorkSearchField = function(i) {
    var element = exports.componentWorkSearchTermsField(i);
    pages.base.scrollIntoView(element);
    expect(pph.matchesCssSelector(element, '.ng-invalid-required')).toBeTruthy();
};
exports.enterComponentWorkSearchTerms = function(i, value) {
    var element = exports.componentWorkSearchTermsField(i);
    pages.base.scrollIntoView(element);
    element.clear();
    element.sendKeys(value);
};
exports.expectCreatorSuggestionsToBeDisplayed = function() {
    browser.wait(
        ExpectedConditions.visibilityOf($('.typeahead-result')),
        _tf_config._system_.wait_timeout
    );
};
exports.expectComponentWorkSuggestionsToBeDisplayed = function() {
    browser.wait(
        ExpectedConditions.visibilityOf($('.typeahead-result')),
        _tf_config._system_.wait_timeout
    );
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
    expect(pages.base.isPresentAndDisplayed(element)).toBeTruthy();
    pages.base.scrollIntoView(element);
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
exports.expectComponentWorkDeletionConfirmationPopUpToBeDisplayed = function(more) {
    more = more || {};

    pages.base.expectModalPopUpToBeDisplayed({ timeout: more.timeout });

    expect(pages.base.modalHeadingText()).toContain(
        'DELETE COMPONENT & ALLOCATION'
    );
};
exports.confirmComponentWorkDeletion = function() {
    exports.confirmComponentWorkDeletionButton().click();
};
module.exports.enterCreationYear = function(value) {
	var element = pages.work.creationYearInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterCreationMonth = function(value) {
	var element = pages.work.creationMonthInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterCreationDay = function(value) {
	var element = pages.work.creationDayInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterDeliveryYear = function(value) {
	var element = pages.work.deliveryYearInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterDeliveryMonth = function(value) {
	var element = pages.work.deliveryMonthInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterDeliveryDay = function(value) {
	var element = pages.work.deliveryDayInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterProductionTitle = function(title, more) {
	var element;
	more = more || {};
	element = pages.work.editProductionTitleField();
	return element.isPresent().then(function(elementPresent) {
		expect(more.skipIfNotPresent || elementPresent).toBeTruthy();
		if(!elementPresent) {
			return;
		}
		pages.base.scrollIntoView(element);
		element.clear();
		element.sendKeys(title);
		return title;
	});
};
exports.clickFirstSimilarWorkTitle = function() {
    exports.firstSimilarWorkTitleBinding().click();
    pages.base.waitForAjax();
};
exports.ignoreSimilarWorksWarning = function() {
    exports.ignoreSimilarWorksButton().click();
};
module.exports.optToIncludeWorkOnWebsite = function(include) {
	promise.when(include).then (
		function(include) {
			var button;
			if(include) {
				button = pages.work.includeWorkOnWebsiteButton();
			}
			else {
				button = pages.work.excludeWorkFromWebsiteButton();
			}
			pages.base.scrollIntoView(button);
			button.click();
		}
	);
};
