'use strict';

var pph = require('../../../../helpers/pph'),
    random = require('../../../../helpers/random'),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

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
exports.workSearchFilterTagDropdown = function(i) {
    return pages.base.mainSearchBar().element(by.model('$filterTag.filter'));
};
exports.workSearchTermsInput = function() {
    return pages.base.mainSearchBar().element(by.model('$term'));
};
exports.noResultsForWorkSearchMessage = function() {
    return pages.base.mainSearchBar().$('[data-ng-if="$dataSets[0].data.noResults"]');
};
exports.addAnotherWorkSearchTermOption = function() {
    return pages.base.mainSearchBar().$('[data-ng-click="selectFilterMatch($term);"]');
};
exports.removeWorkSearchTermButton = function(i) {
    return pages.base.mainSearchBar().$$('.tg-typeahead__tag-remove').get(i);
};
exports.workSearchMatches = function() {
    return pages.base.mainSearchBar().$$('.tg-typeahead__suggestions-group-item');
};
exports.workSearchMatch = function(i) {
    return exports.workSearchMatches().get(i);
};
exports.workSearchMatchCount = function() {
    return exports.workSearchMatches().count();
};
exports.workSearchResult = function() {
    return $$('.tg-typeahead__suggestions');
};
exports.expectWorkSearchMatchCountToBe = function(value) {
    expect(exports.workSearchMatchCount()).toBe(value);
};
exports.expectWorkSearchMatchCountNotToBe = function(value) {
    expect(exports.workSearchMatchCount()).not.toBe(value);
};
exports.workSearchMatchMainLabelBinding = function(i) {
    return exports.workSearchMatch(i).$('.tg-typeahead__item-left');
};
exports.workSearchMatchMainLabelParts = function(i) {
    return (
        pph.getAllText(exports.workSearchMatchMainLabelBinding(i)).then(
            function(value) {
                var reResult = /^(.+?) - \((.+?)\)( \(Alt\) (.+?))?$/.exec(value);
                return {
                    title: reResult[1],
                    alternateTitle: reResult[4],
                    creatorNames: reResult[2].split(' / '),
                };
            }
        )
    );
};
exports.workSearchMatchTitle = function(i) {
    return exports.workSearchMatchMainLabelParts(i).then(function(parts) {
        return parts.title;
    });
};
exports.expectWorkSearchMatchTitleToBe = function(i, value) {
    expect(exports.workSearchMatchTitle(i)).toBe(value);
};
exports.workSearchMatchAlternateTitle = function(i) {
    return exports.workSearchMatchMainLabelParts(i).then(function(parts) {
        return parts.alternateTitle;
    });
};
exports.expectWorkSearchMatchAlternateTitleToBe = function(i, value) {
    expect(exports.workSearchMatchAlternateTitle(i)).toBe(value);
};
exports.workSearchMatchCreatorNames = function(i) {
    return exports.workSearchMatchMainLabelParts(i).then(function(parts) {
        return parts.creatorNames;
    });
};
exports.expectWorkSearchMatchCreatorListToContain = function(i, value) {
    expect(exports.workSearchMatchCreatorNames(i)).toContain(value);
};
exports.expectSelectedWorkSearchFilterTagToBe = function(i, value) {
    var element = exports.workSearchFilterTagDropdown(i);
    pages.base.scrollIntoView(element);
    expect(pages.base.selectedDropdownOption(element)).toBe(value);
};
exports.selectWorkSearchFilterTag = function(i, value) {
    var element = exports.workSearchFilterTagDropdown(i);
    pages.base.scrollIntoView(element);
    return pages.base.selectDropdownOption(element, value);
};
exports.enterWorkSearchTerms = function(value) {
    var element = exports.workSearchTermsInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.enterCreatorNameAsWorkSearchTerms = function(value) {
    return promise.when(value).then(function(value) {
        var reResult;
        if(value && value.indexOf(',') !== -1) {
            reResult = /^(.+), ([^,]+)$/.exec(value)[1];
            value = reResult[1] + ' ' + reResult[0];
        }
        return exports.enterWorkSearchTerms(value);
    });
};
exports.expectNoResultsForWorkSearchMessageToBeDisplayed = function() {
    var element = exports.noResultsForWorkSearchMessage();
    expect(pages.base.isPresentAndDisplayed(element)).toBeTruthy();
};
exports.addAnotherWorkSearchTerm = function() {
    return exports.addAnotherWorkSearchTermOption().click();
};
exports.removeWorkSearchTerm = function(i) {
    return exports.removeWorkSearchTermButton(i).click();
};
exports.clickWorkSearchMatch = function(i) {
    return exports.workSearchMatch(i).click();
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
	return $('div[data-ng-show="workHeader.creators.edit"]');
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
module.exports.editCreatorRoles = function () {
    return element.all(by.model("creator.role"));
};
module.exports.editCreatorRole = function (i) {
    return pages.work.editCreatorRoles().get(i);
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
        by.binding('getWorkName(component.model)')
    );
};
exports.componentWorkNameBinding = function(i) {
    return exports.componentWorkNameBindings().get(i);
};
exports.componentWorkIdLabel = function(i) {
    return exports.componentWorkRows().get(i).element(
        by.binding('getWorkFullCode(component.model)')
    );
};
exports.showComponentWorkDetailsButton = function(i) {
    return exports.componentWorkRows().get(i).$('.show-hide-ca');
};
exports.shellWorkCreatorRows = function(i) {
    return exports.componentWorkRows().get(i).all(
        by.repeater('creator in component.model.creatorsOrderedList')
    );
};
exports.shellWorkCreatorNameLabel = function(i, j) {
    return exports.componentWorkRows().get(i).$$('.show-ca_name').get(j);
};
exports.shellWorkCreatorContributionLabel = function(i, j) {
    return exports.componentWorkRows().get(i).$$('.show-ca_percenrage').get(j);
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
exports.enterAsNewWorkSuggestion = function() {
    return element(by.cssContainingText('.more-results-link', 'Enter as a new work'));
};
exports.waitForEnterAsNewWorkToBeDisplayed = function() {
    browser.wait(ExpectedConditions.visibilityOf(exports.enterAsNewWorkSuggestion()));
};
exports.shellWorkTitleInput = function(i) {
    return exports.componentWorkRows().get(i).element(
        by.model('component.shell.primary_title.title')
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
exports.statusBinding = function () {
    return element(by.binding('dealUtility.getRightsTermsPeriodName(work.workHeader.status)'));
};
exports.waitForStatusToBeDisplayed = function () {
    var el = exports.statusBinding();
    browser.wait(ExpectedConditions.visibilityOf(el));
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
    return $("[data-tg-modular-edit-id='assetType']");
};
module.exports.musicalDistributionCategoryBinding = function() {
    return element(by.binding(
        "getAdminDataName(dataHolder.musicalDistributionCategories, " +
        "modularEditModels.model.musical_work_distribution_category)"
    ));
};
module.exports.textMusicRelationshipBinding = function() {
    return element(by.binding(
        "getAdminDataName(dataHolder.textMusicRelationships, " +
        "modularEditModels.model.text_music_relationship)"
    ));
};
module.exports.excerptTypeBinding = function() {
    return element(by.binding(
        "getAdminDataName(dataHolder.excerptTypes, modularEditModels.model.excerpt_type)"
    ));
};
module.exports.versionTypeBinding = function() {
    return element(by.binding(
        "getAdminDataName(dataHolder.versionTypes, modularEditModels.model.version_type)"
    ));
};
module.exports.versionTypeIdBinding = function() {
    return element(by.binding(
        "getWorkFullCode(dataHolder.modifiedWork)"
    ));
};
module.exports.lyricAdaptationBinding = function() {
    return element(by.binding(
        "getAdminDataName(dataHolder.lyricAdaptations, " +
        "modularEditModels.model.lyric_adaptation_type)"
    ));
};
module.exports.musicArrangementBinding = function() {
    return element(by.binding(
        "getAdminDataName(dataHolder.musicArrangements, " +
        "modularEditModels.model.music_arrangement_type)"
    ));
};
module.exports.intendedPurposeBinding = function() {
    return element(by.binding(
        'getAdminDataName(dataHolder.intendedPurposes, ' +
        'modularEditModels.model.intended_purpose)'
    ));
};
module.exports.productionTitleBinding = function() {
    return element(by.binding('modularEditModels.model.production_title.title'));
};
module.exports.bltvrBinding = function() {
    return element(by.binding(
        'getAdminDataName(dataHolder.bltvrs, ' +
        'modularEditModels.model.bltvr)'
    ));
};
module.exports.musicLibraryBinding = function() {
    return element(by.binding(
        ' getAdminDataName(dataHolder.musicLibrarys, ' +
        'modularEditModels.model.library_code) '
    ));
};
module.exports.editAssetTypeButton = function() {
    return (
        pages.work.assetTypeContainer()
            .$('[data-ng-click="tgModularViewMethods.switchToEditView()"]')
    );
};
module.exports.editMusicalDistributionCategoryField = function() {
    return element(by.model("modularEditModels.model.musical_work_distribution_category"));
};
module.exports.editTextMusicRelationshipField = function() {
    return element(by.model("modularEditModels.model.text_music_relationship"));
};
module.exports.editExcerptTypeField = function() {
    return element(by.model("modularEditModels.model.excerpt_type"));
};
module.exports.editVersionTypeField = function() {
    return element(by.model("modularEditModels.model.version_type"));
};
module.exports.editLyricAdaptationField = function() {
    return element(by.model("modularEditModels.model.lyric_adaptation_type"));
};
module.exports.editMusicArrangementField = function() {
    return element(by.model("modularEditModels.model.music_arrangement_type"));
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
    return $("[data-tg-modular-edit-id='workOrigin']");
};
module.exports.editWorkOriginButton = function() {
    return (
        pages.work.workOriginContainer()
            .$('[data-ng-click="tgModularViewMethods.switchToEditView()"]')
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
    return $('[data-ng-model="modularEditModels.model.intended_purpose"]>div');
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
        element(by.css("[data-ng-switch='!!modularEditModels.model.includeOnWebsite']"))
            .element(by.css(".ng-scope"))
    );
};
module.exports.editWorkInclusionOnWebsiteContainer = function() {
    return $("[data-tg-modular-edit-id='wcmWebsite']");
};
module.exports.editWorkInclusionOnWebsiteButton = function() {
    return (
        pages.work.editWorkInclusionOnWebsiteContainer()
            .$('[data-ng-click="tgModularViewMethods.switchToEditView()"]')
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
module.exports.workId = function() {
    var element = pages.work.workIdBinding();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.validateWorkId = function(value) {
    expect(exports.workId()).toBe(value);
};
module.exports.primaryWorkTitle = function() {
    var element = pages.work.primaryWorkTitleBinding();
    pages.base.scrollIntoView(element);
    return element.getText();
};
module.exports.alternateWorkTitles = function() {
    var elements = pages.work.headerAlternateWorkTitleRows();
    return elements.getText();
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
            .all(by.binding("::creatorContribution.creator.name"))
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
        $('.scope-delivery-table')
            .all(by.binding(' ::(creatorContribution.contribution.value | number:3) '))
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
module.exports.versionTypeId = function() {
    var element = pages.work.versionTypeIdBinding();
    pages.base.waitForAjax();
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

exports.validateMusicLibrary = function(value) {
    expect(exports.musicLibrary()).toBe(value);
};

module.exports.editPrimaryWorkTitleFieldValue = function() {
    return pages.work.editPrimaryWorkTitleField().getAttribute("value"); 
};
module.exports.editFirstCreatorContributionFieldValue = function() {
    return pages.work.editFirstCreatorContributionInput().getAttribute("value"); 
};
(function() {
    var buttonCssSelector = 'button[data-ng-model="modularEditModels.model.includeOnWebsite"]';
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
exports.validateComponentWorkId = function(i, value) {
    var element = exports.componentWorkIdLabel(i);
    pages.base.scrollIntoView(element);
    expect(element.getText()).toBe(value);
};
exports.validateComponentWorkName = function(i, value) {
    expect(exports.selectedComponentWorkName(i)).toEqual(value);
};
exports.validateComponentWorkAllocation = function(i, value) {
    expect(exports.enteredComponentWorkAllocation(i)).toEqual(
        pph.toFixed(value, 3)
    );
};
exports.clickShowComponentWorkDetailsButton = function(i) {
    var element = exports.showComponentWorkDetailsButton(i);
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.validateShellWorkCreatorName = function(i, j, value) {
    var element = exports.shellWorkCreatorNameLabel(i, j);
    pages.base.scrollIntoView(element);
    expect(element.getText()).toContain(value);
};
exports.validateShellWorkCreatorContribution = function(i, j, value) {
    var element = exports.shellWorkCreatorContributionLabel(i, j);
    pages.base.scrollIntoView(element);
    expect(pph.parseFloat(element.getText())).toBe(value);
};
module.exports.enterCreatorContribution = function(i, value) {
    var element = pages.work.editCreatorContributionInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    element.sendKeys(value);
};
module.exports.selectCreatorRole = function (i, value) {
    var element = pages.work.editCreatorRole(i);
    pages.base.scrollIntoView(element);
    pages.base.selectDropdownOption(element, value, { dropdownType: 'tg' });
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
exports.enteredShellWorkTitle = function(i) {
    var element = exports.shellWorkTitleInput(i);
    pages.base.scrollIntoView(element);
    return element.getAttribute('value');
};
exports.selectEnterAsNewWorkSuggestion = function() {
    return exports.enterAsNewWorkSuggestion().click();
};
exports.validateEnteredShellWorkTitle = function(i, value) {
    expect(exports.enteredShellWorkTitle(i)).toBe(value);
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
exports.enterShellWorkCreatorContribution = function(i, j, value) {
    var element = exports.shellWorkCreatorContributionInput(i, j);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.expectCreatorSuggestionsToBeDisplayed = function() {
    browser.wait(
        ExpectedConditions.visibilityOf($('.typeahead-result')),
        _tf_config._system_.wait_timeout
    );
};
exports.waitForWorkSearchResultToBeDisplayed = function() {
    browser.wait(ExpectedConditions.visibilityOfAny(exports.workSearchResult()));
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
    var suggestion = $$('.typeahead-result').get(0),
        result = {};

    result.name = suggestion.$('.typeahead-result-text').getText();

    return suggestion.click().then(function() {
        return result;
    });
};
exports.selectFirstCreatorSuggestion = function() {
    var suggestion = $$('.typeahead-result').first(),
        result = {};
 
    result.name = pph.trim(suggestion.$('.typeahead-result-text').getText());
 
    return suggestion.click().then(function() {
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
    var el = exports.confirmComponentWorkDeletionButton();
    browser.wait(EC.visibilityOf(el));
    pages.base.waitForModal();
    return el.click();
};
exports.selectRandomCreatorSuggestion = function() {
    return $$(".typeahead-result").then(function(suggestions) {
        var randomSuggestion = _.sample(suggestions);
        var randomSuggestionResultRight;
        var deferredIpiNumber;
        var result = {};

        result.name = pph.trim(randomSuggestion.$('.typeahead-result-text').getText());

        deferredIpiNumber = promise.defer();
        result.ipiNumber = deferredIpiNumber.promise;

        randomSuggestionResultRight = randomSuggestion.$('.typeahead-result-right');

        randomSuggestionResultRight.isPresent().then(function(hasResultRight) {
            if(!hasResultRight) {
                deferredIpiNumber.fulfill(null);
                return;
            }

            randomSuggestionResultRight.getText().then(function(value) {
                if(/^\(.*\)$/.test(value)) {
                    value = value.slice(1, -1);
                }

                deferredIpiNumber.fulfill(value);
            })
        });

        randomSuggestion.click();

        return result;
    });
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

exports.tabSetContainer = function() {
    return $('[data-tg-tabset-id="workEditTabset"]');
};

exports.generalTab = function() {
    return exports.tabSetContainer().element(
        by.cssContainingText('span', 'General')
    );
};

exports.goToGeneralTab = function() {
    var element = exports.generalTab();
    pages.base.scrollIntoView(element);
    return element.click().then(function(){
        pages.base.waitForAjax();
    });
};

exports.recordingsTab = function() {
    return exports.tabSetContainer().element(
        by.cssContainingText('span', 'Recordings')
    );
};

exports.goToRecordingsTab = function() {
    var element = exports.recordingsTab();
    pages.base.scrollIntoView(element);
    return element.click();
};

exports.scopeDeliveryTab = function() {
    return exports.tabSetContainer().element(
        by.cssContainingText('span', 'Scope Delivery')
    );
};

exports.goToScopeDeliveryTab = function() {
    var element = exports.scopeDeliveryTab();
    pages.base.scrollIntoView(element);
    return element.click();
};

exports.rightsTab = function() {
    return exports.tabSetContainer().element(
        by.cssContainingText('span', 'Rights')
    );
};

exports.goToRightsTab = function() {
    var element = exports.rightsTab();
    pages.base.scrollIntoView(element);
    return element.click();
};

exports.previewCwrTab = function () {
    return exports.tabSetContainer().element(
        by.cssContainingText('span', 'Preview CWR')
    );
};

exports.goToPreviewCwrTab = function() {
    var element = exports.previewCwrTab();
    pages.base.scrollIntoView(element);

    return element.click().then(function(){
        pages.base.waitForAjax();
    });
};

exports.registrationActivityTab = function() {
    return exports.tabSetContainer().element(
        by.cssContainingText('span', 'Registration Activity')
    );
};

exports.goToRegistrationActivityTab = function() {
    var element = exports.registrationActivityTab();

    pages.base.scrollIntoView(element);

    return element.click().then(function() {
        pages.base.waitForAjax();
    });
};

exports.lastUpdateDateBinding = function () {
    return element(by.binding('work.pristine.last_updated_date | tgIsoDate'));
};

exports.clickOnLastUpdateDate = function() {
    var element = exports.lastUpdateDateBinding();
    pages.base.scrollIntoView(element);
    return element.click().then(function() {
        pages.base.waitForAjax();
    });
};

exports.getLastUpdateDate = function () {
    var element = exports.lastUpdateDateBinding();
    pages.base.scrollIntoView(element);
    return element.getText();
};

exports.copy = (function () {
    var copy = {};

    copy.copyWorkButton = function() {
        return element(by.cssContainingText('a', 'Copy Work'));
    };

    copy.continueButton = function() {
        return pages.base.modalFooter().element(
            by.cssContainingText('button', 'Continue')
        );
    };

    copy.originalSelect = function() {
        return $('#copy_original+label');
    };

    copy.adaptationSelect = function() {
        return $('#copy_adaptation_or_arrangement+label');
    };

    copy.primaryWorkTitleInput = function(i) {
        return element.all(by.model("work.primary_title.title")).get(i);
    };

    copy.saveWorkButton = function() {
        return element(by.cssContainingText('button', 'Create Work'));
    };

    copy.successMessage = function() {
        return element(by.cssContainingText(
            'p', 'Work(s) are created successfully.'
        ));
    };

    copy.enterPrimaryWorkTitle = function(i, value) {
        var element = copy.primaryWorkTitleInput(i);
        return element.sendKeys(value);
    };

    copy.copyWork = function() {
        var element = copy.copyWorkButton();
        pages.base.scrollIntoView(element);
        return element.click().then(function() {
            browser.sleep(200);
        });
    };

    copy.continue = function() {
        copy.continueButton().click();
        pages.base.waitForAjax();
    };

    copy.selectOriginal = function() {
        var element = copy.originalSelect();
        browser.wait(ExpectedConditions.elementToBeClickable(element));
        return element.click();
    };

    copy.selectAdaptation = function() {
        var element = copy.adaptationSelect();
        browser.wait(ExpectedConditions.elementToBeClickable(element));
        return element.click();
    };

    copy.saveWork = function() {
        var element = copy.saveWorkButton();
        browser.wait(ExpectedConditions.elementToBeClickable(element));
        element.click();
        pages.base.waitForAjax();
    };

    copy.validateSuccessMessage = function() {
        var element = copy.successMessage();
        expect(pages.base.isPresentAndDisplayed(element)).toBeTruthy();
    };

    return copy;
})();

exports.merge = (function () {
    var merge = {};

    merge.mergeWorkButton = function() {
        return element(by.cssContainingText('a', 'Merge Work'));
    };

    merge.findWorkInput = function() {
        return element(by.model('data.workSearch.selected_work'));
    };

    merge.enterFindWorkUsingPreviouslyEnteredPrimaryTitle = function() {
        merge.enterFindWork(hash.currentEntityDataSlotsByType.work.primaryTitle);
        pages.work.expectCreatorSuggestionsToBeDisplayed();
        pages.work.selectFirstCreatorSuggestion();
    };

    merge.continueButton = function() {
        return element(by.cssContainingText('button', 'Quick Merge'));
    };

    merge.confirmButton = function() {
        return pages.base.modalFooter().element(
            by.cssContainingText('button', 'Confirm')
        );
    };

    merge.mergeWork = function() {
        var element = merge.mergeWorkButton();
        pages.base.scrollIntoView(element);
        return element.click();
    };

    merge.enterFindWork = function(value) {
        var element = merge.findWorkInput();
        browser.wait(ExpectedConditions.visibilityOf(element));
        return element.sendKeys(value);
    };

    merge.continue = function() {
        merge.continueButton().click();
    };

    merge.confirm = function() {
        var element = merge.confirmButton();
        browser.wait(ExpectedConditions.visibilityOf(element));
        return element.click();
    };

    return merge;
})();

exports.auditLog = (function () {
    var auditLog = {};

    auditLog.headerTitle = function () {
        return $('#RECORD-HEADER h1 strong');
    };

    auditLog.validateHeaderTitle = function () {
        var element = auditLog.headerTitle();
        expect(pages.base.isPresentAndDisplayed(element)).toBeTruthy();
    };

    auditLog.expectNoErrorMessage = function () {
        expect(pages.base.isPresentAndDisplayed(pages.base.modalHeading())).toBe(false);
    };

    return auditLog;
})();
