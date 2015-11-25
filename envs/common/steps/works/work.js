"use strict";

var moment = require('moment'),
    pad = require('left-pad'),
    pph = require('../../../../helpers/pph'),
    random = require('../../../../helpers/random'),
    _ = require('lodash'),
    promise = protractor.promise,
    pageStep = require('../../../../helpers/basicPageStep');

steps.work = exports;

exports.goToWorkPage = function (data, key) {
    it('Go to work page', function () {
        var workId;
        data = data || hash.currentEntityDataSlotsByType.work;
        key = key || 'id';
        workId = data[key];
        pages.work.open(workId);
    });
};

exports.goToWorkPageById = function(workId) {
    it('Go to work page by ID (' + workId + ')', function () {
        pages.work.open(workId);
    });
};

module.exports.goToGeneralTab = function() {
    it('Go to General tab', function() {
        pages.work.goToGeneralTab();
    });
};

module.exports.goToScopeDeliveryTab = function() {
    it('Go to Scope Delivery tab', function() {
        pages.work.goToScopeDeliveryTab();
    });
};

exports.goToRecordingsTab = function() {
    it('Go to Recordings tab', function() {
        pages.work.goToRecordingsTab();
        browser.sleep(200);
        pages.base.waitForAjax();
    });
};

module.exports.findCurrentlyOpenWorkId = function () {
    var deferred = promise.defer();

    it("Find currently open work ID", function () {
        var workId = pages.work.workId();

        workId.then(function (workId) {
            var data = hash.currentEntityDataSlotsByType.work;
            data.id = workId;
            data.songCode = workId.slice(3, -3);
        });

        deferred.fulfill(workId);
    });

    return deferred.promise;
};
exports.validateWorkId = function () {
    it('Validate work ID', function () {
        pages.work.validateWorkId(
            hash.currentEntityDataSlotsByType.work.id
        );
    });
};
module.exports.workInclusionOnWebsite = function () {
    var deferred = promise.defer();
    it(
        "Find out whether this work is to be included on the website", function () {
            deferred.fulfill(pages.work.workInclusionOnWebsite());
        }
    );
    return deferred.promise;
};
module.exports.hoverPrimaryWorkTitleHeading = function () {
    steps.base.hoverElement(
        "primary work title heading", pages.work.primaryWorkTitleHeading()
    );
};
module.exports.editWorkTitles = function () {
    steps.base.clickElement(
        "edit work titles button", pages.work.editWorkTitlesButton()
    );
};
module.exports.enterPrimaryWorkTitle = function (value) {
    it("Enter primary work title", function () {
        pages.work.enterPrimaryWorkTitle(value);
    });
};
module.exports.enterRandomPrimaryWorkTitle = function () {
    var deferred = promise.defer();
    it(
        "Enter a random primary work title", function () {
            var title = "TEST WORK TITLE " + random.id();
            pages.work.enterPrimaryWorkTitle(title);
            deferred.fulfill(title);
        }
    );
    return deferred.promise;
};
module.exports.enterRandomAlternateWorkTitle = function (i) {
    var deferred = promise.defer();
    it(
        "Enter random alternate work title #" + (i + 1), function () {
            var title = "TEST ALTERNATE WORK TITLE " + random.id();
            pages.work.enterAlternateWorkTitle(i, title);
            deferred.fulfill(title);
        }
    );
    return deferred.promise;
};
module.exports.enterNewRandomAlternateWorkTitle = function () {
    var deferred = promise.defer();
    it(
        "Enter new random alternate work title", function () {
            var title = "TEST ALTERNATE WORK TITLE " + random.id();
            pages.work.enterNewAlternateWorkTitle(title);
            deferred.fulfill(title);
        }
    );
    return deferred.promise;
};
module.exports.waitTitleEditorCheckForDuplicates = function () {
    steps.base.sleep(100);
    it("Wait title editor check for duplicates", function () {
        browser.wait(
            function () {
                return pph.not(pages.work.isTitleEditorCheckingForDuplicates());
            },
            _tf_config._system_.wait_timeout
        );
    });
};
module.exports.cancelWorkTitlesEditing = function () {
    steps.base.clickElement(
        "cancel work titles editing button",
        pages.work.cancelWorkTitlesEditingButton(),
        _tf_config._system_.wait_timeout
    );
};
module.exports.saveWorkTitles = function () {
    steps.base.clickElement(
        "save work titles button",
        pages.work.saveWorkTitlesButton()
    );
};
module.exports.hoverCreatorNamesContainer = function () {
    steps.base.hoverElement(
        "creator names container",
        pages.work.creatorNamesContainer()
    );
};
module.exports.editCreators = function () {
    var el = pages.work.editCreatorsButton(),
        notDisabledCssSelector = ':not([disabled], .disabled)';

    it ('Click edit creators button', function() {
        browser.wait (
            function() {
                return pph.matchesCssSelector(el, notDisabledCssSelector);
            }
        );
        el.click();
        pages.base.waitForAjax();
    });
};
exports.clickCompositeWorkCheckbox = function (data, key) {
    it('Click composite work checkbox', function () {
        pages.work.clickCompositeWorkCheckbox().then(function (value) {
            data = data || hash.currentEntityDataSlotsByType.work;
            key = key || 'isCompositeWork';

            data[key] = value;
        });
    });
};
exports.expectDisablingWorkAsCompositePopUpToBeDisplayed = function () {
    it('Expect disabling work as a composite work pop-up to be displayed', function () {
        pages.work.expectDisablingWorkAsCompositePopUpToBeDisplayed();
    });
};
exports.confirmDisablingWorkAsComposite = function () {
    it('Confirm disabling work as a composite work', function () {
        pages.work.confirmDisablingWorkAsComposite();
    });
};
exports.validateCompositeWorkCheckbox = function (data, key) {
    it('Validate composite work checkbox', function () {
        data = data || hash.currentEntityDataSlotsByType.work;
        key = key || 'isCompositeWork';

        expect(pages.work.compositeWorkCheckboxState()).toBe(data[key]);
    });
};
exports.validateRequiredCompositeWorkTypeField = function () {
    it('Validate required composite work type field', function () {
        pages.work.validateRequiredCompositeWorkTypeField();
    });
};
exports.validateDefaultCompositeWorkType = function () {
    it('Validate default composite work type', function () {
        pages.work.validateDefaultCompositeWorkType();
    });
};
exports.selectCompositeWorkType = function (value, data, key) {
    key = key || 'compositeWorkType';
    data = data || hash.currentEntityDataSlotsByType.work;

    it('Select composite work type', function () {
        pages.work.selectCompositeWorkType(value);
        data[key] = value;
    });
};
exports.expectMakingIntoMedleyConfirmationPopUpToBeDisplayed = function () {
    it('Expect making into Medley confirmation pop-up to be displayed', function () {
        pages.work.expectMakingIntoMedleyConfirmationPopUpToBeDisplayed();
    });
};
exports.confirmMakingIntoMedley = function (data, key) {
    it('Confirm making work into a Medley', function () {
        pages.work.confirmMakingIntoMedley();

        data = data || hash.currentEntityDataSlotsByType.work;
        key = key || 'creators';
        data[key] = [];
    });
};
module.exports.calculateEvenCreatorContributions = function () {
    var deferred = promise.defer();
    it("Calculate even creator contributions", function () {
        deferred.fulfill(pages.work.calculateEvenCreatorContributions());
    });
    return deferred.promise;
};
module.exports.selectDifferentRandomCreator = function (i) {
    var deferred = promise.defer();
    describe("Select different random creator #" + (i + 1), function () {
        deferred.fulfill(pages.base.selectRandomTypeaheadValue(
            pages.work.editCreatorNameInput(i),
            {different: true}
        ));
    });
    return deferred.promise;
};
exports.enterMediumCreatorContribution = function (i, contribution, data, key) {
    it('Enter medium creator contribution #' + (i + 1), function () {
        var creator;

        data = data || hash.currentEntityDataSlotsByType.work;
        key = key || 'creators';
        data[key] = data[key] || [];
        creator = data[key][i] = data[key][i] || {};

        creator.contribution = 50;
        pages.work.enterCreatorContribution(i, creator.contribution);
    });
};
exports.enterCreatorContribution = function (i, contribution, data, key) {
    it("Enter creator contribution #" + (i + 1), function () {
        var creator;

        data = data || hash.currentEntityDataSlotsByType.work;
        key = key || 'creators';
        data[key] = data[key] || [];
        creator = data[key][i] = data[key][i] || {};

        pages.work.enterCreatorContribution(i, contribution);
        creator.contribution = contribution;
    });
};
module.exports.expectFirstCreatorContributionFieldValueToBe = function (value) {
    it("Validate creator contribution #1", function () {
        expect(pages.work.editFirstCreatorContributionFieldValue()).toBe(
            pph.toString(value)
        );
    });
};
module.exports.expectFirstCreatorContributionFieldValueNotToBe = function (value) {
    it("Validate creator contribution #1", function () {
        expect(pages.work.editFirstCreatorContributionFieldValue()).not.toBe(
            pph.toString(value)
        );
    });
};
module.exports.waitCreatorsEditorCheckForDuplicates = function () {
    it("Wait creators editor check for duplicates", function () {
        browser.wait(
            function () {
                return pph.not(
                    pages.work.isCreatorsEditorCheckingForDuplicates()
                );
            },
            _tf_config._system_.wait_timeout
        );
    });
};
exports.deleteComponentWork = function (i, data, key) {
    it('Delete component work #' + (i + 1), function () {
        var components;

        data = data || hash.currentEntityDataSlotsByType.work;
        key = key || 'components';
        components = data[key] = data[key] || [];

        pages.work.deleteComponentWork(i);
        components.splice(i, 1);
    });
};
exports.expectComponentWorkDeletionConfirmationPopUpToBeDisplayed = function () {
    it('Expect component work deletion confirmation pop-up to be displayed', function () {
        pages.work.expectComponentWorkDeletionConfirmationPopUpToBeDisplayed();
    });
};
exports.confirmComponentWorkDeletion = function () {
    it('Confirm component work deletion', function () {
        pages.work.confirmComponentWorkDeletion();
    });
};
exports.validateDefaultComponentWorkSearchFilter = function (i) {
    it('Validate default component work search filter', function () {
        pages.work.validateDefaultComponentWorkSearchFilter(i);
    });
};
exports.validateRequiredComponentWorkSearchField = function (i) {
    it('Validate required component work search field', function () {
        pages.work.validateRequiredComponentWorkSearchField(i);
    });
};
exports.selectFirstComponentWorkMatching = function (i, value, data, key) {
    it('Enter search terms on component work search field #' + (i + 1), function () {
        pages.work.enterComponentWorkSearchTerms(i, value);
    });

    it('Wait for component work suggestions to load', function () {
        pages.base.waitForAjax();
    });

    it('Select a random work', function () {
        pages.work.selectFirstComponentWorkSuggestion().then(function (selected) {
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
exports.expectShowComponentWorkDetailsButtonToAppear = function (i) {
    it('Expect "Show Details" button to appear next to component work title', function () {
        pages.work.expectShowComponentWorkDetailsButtonToAppear(i);
    });
};
exports.expectSameWorkCantBeAddedAsComponentMultipleTimesMessageToAppear = function (i) {
    it('Expect "Same work can\'t be added as a component multiple times" message to appear', function () {
        pages.work.expectSameWorkCantBeAddedAsComponentMultipleTimesMessageToAppear(i);
    });
};
exports.validateRequiredComponentWorkAllocationField = function (i) {
    it('Validate required component work allocation field', function () {
        pages.work.validateRequiredComponentWorkAllocationField(i);
    });
};
exports.enterComponentWorkAllocation = function (i, value, data, key) {
    it('Enter component work allocation #' + (i + 1), function () {
        var component;

        data = data || hash.currentEntityDataSlotsByType.work;
        key = key || 'components';
        data[key] = data[key] || [];
        component = data[key][i] = data[key][i] || {};

        pages.work.enterComponentWorkAllocation(i, value);
        component.allocation = value;
    });
};
exports.enterMediumComponentWorkAllocation = function (i, data, key) {
    it('Enter component work allocation #' + (i + 1), function () {
        var component;

        data = data || hash.currentEntityDataSlotsByType.work;
        key = key || 'components';
        data[key] = data[key] || [];
        component = data[key][i] = data[key][i] || {};

        component.allocation = 50;
        pages.work.enterComponentWorkAllocation(i, component.allocation);
    });
};
exports.enterNewShellWork = function (i, value) {
    it('Enter new shell work title as component work #' + (i + 1), function () {
        pages.work.enterComponentWorkSearchTerms(i, value);
    });

    it('Wait for work suggestions to load', function () {
        pages.work.waitForEnterAsNewWorkToBeDisplayed();
    });

    it('Select "Enter as a new work" suggestion', function () {
        pages.work.selectEnterAsNewWorkSuggestion().then(function () {
            var data;
            var components;
            var component;

            data = hash.currentEntityDataSlotsByType.work;

            components = data.components = data.components || [];
            component = components[i] = components[i] || {};

            component.name = value;
            component.workCode = 'WW 000000000 00';
            component.shellWork = true;
        });
    });
};
exports.expectShellWorkTitleToMatchEnteredOne = function (i) {
    it('Expect shell work title #' + (i + 1) + ' to match entered one', function () {
        var data = hash.currentEntityDataSlotsByType.work;
        var components = data.components || [];
        var shellWork = components[i] || {};

        pages.work.validateEnteredShellWorkTitle(i, shellWork.name);
    });
};
exports.selectShellWorkCreatorFromPersonSlot = function(i, j, slotIndex, data, key) {
    var person;

    it(
        'Enter previously selected IPI number into creator search terms field #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function() {
            person = _.merge({}, hash.personSlots[slotIndex]);
            pages.work.enterShellWorkCreatorSearchTerms(i, j, person.ipiNumber);
        }
    );

    it('Expect creator suggestions dropdown to be displayed', function() {
        pages.work.expectCreatorSuggestionsToBeDisplayed();
    });

    it('Select first search result', function() {
        pages.work.selectFirstCreatorSuggestion().then(function(selected) {
            var component,
                creator;

            data = data || hash.currentEntityDataSlotsByType.work;
            key = key || 'components';

            data[key] = data[key] || [];
            component = data[key][i] = data[key][i] || {};

            component.creators = component.creators || [];
            creator = component.creators[j] = component.creators[j] || {};

            creator.name = selected.name;
        });
    });
};
exports.selectRandomShellWorkCreator = function (i, j) {
    it(
        'Type a random letter on creator name field #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function () {
            pages.work.enterRandomLetterOnShellWorkCreatorNameField(i, j);
        }
    );

    it('Expect creator suggestions to be displayed', function () {
        pages.work.expectCreatorSuggestionsToBeDisplayed();
    });

    it('Select a random creator', function () {
        pages.work.selectRandomCreatorSuggestion().then(function (selected) {
            var data;
            var components;
            var component;
            var creators;
            var creator;

            data = hash.currentEntityDataSlotsByType.work;

            components = data.components = data.components || [];
            component = components[i] = components[i] || {};

            creators = component.creators = component.creators || [];
            creator = creators[j] = creators[j] || {};

            creator.name = selected.name;
            creator.ipiNumber = selected.ipiNumber;
        });
    });
};
exports.enterShellWorkCreatorContribution = function (i, j, value) {
    it(
        'Enter creator contribution #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function () {
            pages.work.enterShellWorkCreatorContribution(i, j, value).then(function () {
                var data;
                var components;
                var component;
                var creators;
                var creator;

                data = hash.currentEntityDataSlotsByType.work;

                components = data.components = data.components || [];
                component = components[i] = components[i] || {};

                creators = component.creators = component.creators || [];
                creator = creators[j] = creators[j] || {};

                creator.contribution = value;
                creator.contributionToCompositeWork = (value / 100) * component.allocation;
            });
        }
    );
};
exports.validateDefaultWorkSearchFilterTag = function () {
    var value = 'WORK ID';

    it('Validate default first work search tag filter (' + value + ')', function () {
        pages.work.expectSelectedWorkSearchFilterTagToBe(0, value);
    });
};
exports.selectWorkSearchFilterTag = function (i, value) {
    it('Select "' + value + '" work search filter tag #' + (i + 1), function () {
        pages.work.selectWorkSearchFilterTag(i, value);
    });
};
exports.enterWorkSearchTerms = function (value) {
    it('Search for work (' + value + ')', function () {
        pages.work.enterWorkSearchTerms(value);
    });
};
exports.searchForWorkUsingPreviouslyCreatedWorkId = function () {
    it('Search for work using previously created work ID', function () {
        pages.work.enterWorkSearchTerms(
            hash.currentEntityDataSlotsByType.work.id
        );
    });
};
exports.searchForWorkUsingPreviouslyCreatedSongCode = function () {
    it('Search for work using previously created song code', function () {
        pages.work.enterWorkSearchTerms(
            hash.currentEntityDataSlotsByType.work.songCode
        );
    });
};
exports.searchForWorkUsingPreviouslyCreatedSongCodeWithNoLeadingZeroes = function () {
    it('Search for work using previously created song code with no leading zeroes', function () {
        var data = hash.currentEntityDataSlotsByType.work;
        pages.work.enterWorkSearchTerms(
            data.songCode.toString().replace(/^0*/, '')
        );
    });
};
exports.searchForWorkUsingPreviouslyCreatedSongCodeWithLeadingZeroes = function () {
    it('Search for work using previously created song code with leading zeroes', function () {
        pages.work.enterWorkSearchTerms(
            '0000' + hash.currentEntityDataSlotsByType.work.songCode
        );
    });
};
exports.searchForWorkUsingPreviouslyCreatedSongCodeWithTrailingZeroes = function () {
    it('Search for work using previously created song code trailing zeroes', function () {
        pages.work.enterWorkSearchTerms(
            hash.currentEntityDataSlotsByType.work.songCode + '0000'
        );
    });
};
exports.searchForWorkUsingPreviouslyEnteredPrimaryTitle = function () {
    it('Search for work using previously entered primary work title', function () {
        pages.work.enterWorkSearchTerms(
            hash.currentEntityDataSlotsByType.work.primaryTitle
        );
    });
};
exports.searchForWorkUsingPreviouslyEnteredAlternateTitle = function (i) {
    it('Search for work using previously entered alternate work title #' + (i + 1), function () {
        pages.work.enterWorkSearchTerms(
            hash.currentEntityDataSlotsByType.work.alternateTitles[i]
        );
    });
};
exports.searchForWorkUsingPreviouslySelectedCreatorName = function (i) {
    it('Search for work using previously selected creator name #' + (i + 1), function () {
        pages.work.enterCreatorNameAsWorkSearchTerms(
            hash.currentEntityDataSlotsByType.work.creators[i].name
        );
    });
};
exports.searchForWorkUsingPreviouslySelectedCreatorSuisaIpiNumber = function (i) {
    it('Search for work using previously selected creator SUISA IPI number #' + (i + 1), function () {
        pages.work.enterWorkSearchTerms(
            hash.currentEntityDataSlotsByType.work.creators[i].suisaIpiNumber
        );
    });
};
exports.searchForWorkUsingPreviouslySelectedCreatorInternalIpiNumber = function (i) {
    it('Search for work using previously selected creator internal IPI number #' + (i + 1), function () {
        pages.work.enterWorkSearchTerms(
            hash.currentEntityDataSlotsByType.work.creators[i].internalIpiNumber
        );
    });
};
exports.searchForWorkUsingPreviouslySelectedCreatorIpiNumber = function (i) {
    it('Search for work using previously selected creator IPI number #' + (i + 1), function () {
        pages.work.enterWorkSearchTerms(
            hash.currentEntityDataSlotsByType.work.creators[i].ipiNumber
        );
    });
};
exports.expectWorkSearchMatchCountToBe = function (value) {
    it('Expect work search match count to be ' + value, function () {
        pages.work.expectWorkSearchMatchCountToBe(value);
    });
};
exports.expectWorkSearchMatchCountNotToBe = function (value) {
    it('Expect work search match count not to be ' + value, function () {
        pages.work.expectWorkSearchMatchCountNotToBe(value);
    });
};
exports.expectWorkSearchMatchTitleToBe = function (i, value) {
    it('Expect work search match #' + (i + 1) + ' title to be "' + value + '"', function () {
        pages.work.expectWorkSearchMatchTitleToBe(i, value);
    });
};
exports.expectWorkSearchMatchAlternateTitleToBe = function (i, value) {
    it('Expect work search match #' + (i + 1) + ' alternate title to be "' + value + '"', function () {
        pages.work.expectWorkSearchMatchAlternateTitleToBe(i, value);
    });
};
exports.expectWorkSearchMatchCreatorListToContain = function (i, value) {
    it(
        'Expect work search match #' + (i + 1) +
        ' creator list to contain "' + value + '"', function () {
            pages.work.expectWorkSearchMatchCreatorListToContain(i, value);
        }
    );
};
exports.addAnotherWorkSearchTerm = function () {
    it('Add another work search term', function () {
        pages.work.addAnotherWorkSearchTerm();
    });
};
exports.removeWorkSearchTerm = function (i) {
    it('Remove work search term #' + (i + 1), function () {
        pages.work.removeWorkSearchTerm(i);
    });
};
exports.clickWorkSearchMatch = function (i) {
    it('Click work search match #' + (i + 1), function () {
        pages.work.clickWorkSearchMatch(i);
    });
};
exports.searchForPreviouslyEnteredComponentWork = function (i) {
    it('Select "Title" work search filter tag #1', function () {
        pages.work.selectWorkSearchFilterTag(0, 'Title');
    });

    it('Search for previously entered component work #' + (i + 1), function () {
        pages.work.enterWorkSearchTerms(
            hash.currentEntityDataSlotsByType.work.components[i].name
        );
    });

    it('Wait for search results to load', function () {
        pages.work.waitForWorkSearchResultToBeDisplayed();
    });
};
exports.expectNoResultsForWorkSearchMessageToBeDisplayed = function () {
    it('Expect "No results for work search" to be displayed', function () {
        pages.work.expectNoResultsForWorkSearchMessageToBeDisplayed();
    });
};
module.exports.cancelCreatorsEditing = function () {
    steps.base.clickElement(
        "cancel creators button",
        pages.work.cancelCreatorsButton()
    );
};
module.exports.saveCreators = function () {
    steps.base.clickElement(
        "save creators button",
        pages.work.saveCreatorsButton(),
        true
    );
};
module.exports.hoverCreationDateContainerLabel = function () {
    steps.base.hoverElement(
        "creation date container label",
        pages.work.creationDateContainerLabel()
    );
};
module.exports.editCreationDate = function () {
    steps.base.clickElement(
        "edit creation date button",
        pages.work.editCreationDateButton()
    );
};
module.exports.enterDifferentCreationYear = function () {
    var deferred = promise.defer();
    it("Enter different creation date year", function () {
        var enteredYear = pages.work.enteredCreationYear();
        var differentYear = enteredYear.then(function (enteredYear) {
            return enteredYear - 1;
        });
        pages.work.enterCreationYear(differentYear);
        deferred.fulfill(differentYear);
    });
    return deferred.promise;
};
module.exports.enterCreationYear = function (value) {
    it("Enter the creation year", function () {
        pages.work.enterCreationYear(value);
    });
};
module.exports.enterCreationMonth = function (value) {
    it("Enter the creation month", function () {
        pages.work.enterCreationMonth(value);
    });
};
module.exports.enterCreationDay = function (value) {
    it("Enter the creation day", function () {
        pages.work.enterCreationDay(value);
    });
};
module.exports.cancelCreationDateEditing = function () {
    steps.base.clickElement(
        "cancel creation date editing button",
        pages.work.cancelCreationDateEditingButton()
    );
};
module.exports.saveCreationDate = function () {
    steps.base.clickElement(
        "save creation date button",
        pages.work.saveCreationDateButton()
    );
};
module.exports.hoverDeliveryDateContainerLabel = function () {
    steps.base.hoverElement(
        "delivery date container label",
        pages.work.deliveryDateContainerLabel()
    );
};
module.exports.editDeliveryDate = function () {
    steps.base.clickElement(
        "edit delivery date button",
        pages.work.editDeliveryDateButton()
    );
};
module.exports.enterDifferentDeliveryYear = function () {
    var deferred = promise.defer();
    it("Enter different delivery date year", function () {
        var enteredYear = pages.work.enteredDeliveryYear();
        var differentYear = enteredYear.then(function (enteredYear) {
            return enteredYear - 1;
        });
        pages.work.enterDeliveryYear(differentYear);
        deferred.fulfill(differentYear);
    });
    return deferred.promise;
};
module.exports.enterDeliveryYear = function (value) {
    it("Enter the delivery year", function () {
        pages.work.enterDeliveryYear(value);
    });
};
module.exports.enterDeliveryMonth = function (value) {
    it("Enter the delivery month", function () {
        pages.work.enterDeliveryMonth(value);
    });
};
module.exports.enterDeliveryDay = function (value) {
    it("Enter the delivery day", function () {
        pages.work.enterDeliveryDay(value);
    });
};
module.exports.cancelDeliveryDateEditing = function () {
    steps.base.clickElement(
        "cancel delivery date editing button",
        pages.work.cancelDeliveryDateEditingButton()
    );
};
module.exports.saveDeliveryDate = function () {
    steps.base.clickElement(
        "save delivery date button",
        pages.work.saveDeliveryDateButton()
    );
};
module.exports.hoverAssetTypeContainer = function () {
    steps.base.hoverElement(
        "asset type container",
        pages.work.assetTypeContainer()
    );
};
module.exports.editAssetType = function () {
    steps.base.clickElement(
        "edit asset type button",
        pages.work.editAssetTypeButton()
    );
};
module.exports.selectDifferentRandomMusicalDistributionCategory = function () {
    return steps.base.selectRandomDropdownOption(
        "musical distribution category",
        pages.work.editMusicalDistributionCategoryField(),
        {different: true}
    );
};
module.exports.selectDifferentRandomTextMusicRelationship = function () {
    return steps.base.selectRandomDropdownOption(
        "text music relationship",
        pages.work.editTextMusicRelationshipField(),
        {different: true}
    );
};
module.exports.selectDifferentRandomExcerptType = function () {
    return steps.base.selectRandomDropdownOption(
        "excerpt type",
        pages.work.editExcerptTypeField(),
        {different: true}
    );
};
module.exports.selectDifferentRandomVersionType = function () {
    return steps.base.selectRandomDropdownOption(
        "version type",
        pages.work.editVersionTypeField(),
        {different: true}
    );
};
module.exports.selectDifferentRandomLyricAdaptation = function () {
    return steps.base.selectRandomDropdownOption(
        "lyric adaptation",
        pages.work.editLyricAdaptationField(),
        {skipIfNotPresent: true, different: true}
    );
};
module.exports.selectDifferentRandomMusicArrangement = function () {
    return steps.base.selectRandomDropdownOption(
        "music arrangement",
        pages.work.editMusicArrangementField(),
        {skipIfNotPresent: true, different: true}
    );
};
module.exports.cancelAssetTypeEditing = function () {
    steps.base.clickElement(
        "cancel asset type editing button",
        pages.work.cancelAssetTypeEditingButton()
    );
};
module.exports.saveAssetType = function () {
    steps.base.clickElement(
        "save asset type button",
        pages.work.saveAssetTypeButton()
    );
};
module.exports.hoverWorkOriginContainer = function () {
    steps.base.hoverElement(
        "work origin container",
        pages.work.workOriginContainer()
    );
};
module.exports.editWorkOrigin = function () {
    steps.base.clickElement(
        "edit work origin button",
        pages.work.editWorkOriginButton()
    );
};
module.exports.selectDifferentRandomIntendedPurpose = function () {
    return steps.base.selectRandomDropdownOption(
        "intended purpose",
        pages.work.editIntendedPurposeField(),
        {dropdownType: "tg", different: true}
    );
};
module.exports.enterRandomProductionTitle = function () {
    var deferred = promise.defer();
    it(
        "Enter a random production title (if present)", function () {
            var title = "TEST PRODUCTION TITLE " + random.id();
            deferred.fulfill(
                pages.work.enterProductionTitle(title, {skipIfNotPresent: true})
            );
        }
    );
    return deferred.promise;
};
module.exports.selectDifferentRandomBltvr = function () {
    return steps.base.selectRandomDropdownOption(
        "BLTVR", pages.work.editBltvrField(),
        {skipIfNotPresent: true, different: true}
    );
};
module.exports.selectDifferentRandomMusicLibrary = function () {
    return steps.base.selectRandomDropdownOption(
        "music library",
        pages.work.editMusicLibraryField(),
        {dropdownType: "tg", skipIfNotPresent: true, different: true}
    );
};
module.exports.cancelWorkOriginEditing = function () {
    steps.base.clickElement(
        "cancel work origin editing button",
        pages.work.cancelWorkOriginEditingButton()
    );
};
module.exports.saveWorkOrigin = function () {
    steps.base.clickElement(
        "save work origin button",
        pages.work.saveWorkOriginButton()
    );
};
module.exports.hoverWorkInclusionOnWebsiteIndicator = function () {
    steps.base.hoverElement(
        "work inclusion on website paragraph",
        pages.work.workInclusionOnWebsiteParagraph()
    );
};
module.exports.editWorkInclusionOnWebsite = function () {
    steps.base.clickElement(
        "edit work inclusion on website button",
        pages.work.editWorkInclusionOnWebsiteButton()
    );
};
module.exports.toggleWorkInclusionOnWebsite = function () {
    var deferred = promise.defer();
    it(
        "Toggle work inclusion on website", function () {
            var include = pages.work.selectedWorkInclusionOnWebsiteOption().then(
                function (include) {
                    return !include;
                }
            );
            pages.work.optToIncludeWorkOnWebsite(include);
            deferred.fulfill(include);
        }
    );
    return deferred.promise;
};
module.exports.cancelWorkInclusionOnWebsiteEditing = function () {
    steps.base.clickElement(
        "cancel work inclusion on website button",
        pages.work.cancelWorkInclusionOnWebsiteButton()
    );
};
module.exports.saveWorkInclusionOnWebsite = function () {
    steps.base.clickElement(
        "save work inclusion on website button",
        pages.work.saveWorkInclusionOnWebsiteButton()
    );
};
module.exports.validateDefaultAlternateWorkTitleLanguage = function () {
    it(
        "Validate default alternate work title language", function () {
            expect(pages.work.defaultAlternateWorkTitleLanguage()).toBe("English");
        }
    );
};
module.exports.expectPrimaryWorkTitleFieldValueToBe = function (title) {
    it(
        "Validate primary work title edit field value", function () {
            expect(pages.work.editPrimaryWorkTitleFieldValue()).toBe(title);
        }
    );
};
module.exports.expectPrimaryWorkTitleFieldValueNotToBe = function (title) {
    it(
        "Validate primary work title edit field value", function () {
            expect(pages.work.editPrimaryWorkTitleFieldValue()).not.toBe(title);
        }
    );
};
module.exports.validatePrimaryWorkTitle = function (title) {
    it(
        "Validate primary work title (if validation value is not empty)", function () {
            promise.when(title).then(function (title) {
                if (!title) {
                    return;
                    expect(pages.work.primaryWorkTitle()).toBe(title);
                }
            });
        }
    );
};
module.exports.validateAlternateWorkTitle = function (title) {
    it(
        "Validate alternate work title", function () {
            expect(pages.work.alternateWorkTitles()).toContain(title);
        }
    );
};
module.exports.validateCreatorName = function (name) {
    it(
        "Validate creator name", function () {
            expect(pages.work.creatorNames()).toContain(name);
        }
    );
};
exports.validateSubjectCreatorNames = function(howMany) {
    _.times(howMany, function(i) {
        it('Validate subject creator #' + (i + 1) + ' - name', function() {
            expect(pages.work.creatorNames()).toContain(
                hash.currentEntityDataSlotsByType.work.creators[i].name
            );
        });
    });
};
module.exports.validateCreatorContributionByName = function (name, percentage) {
    it(
        "Validate creator contribution percentage (if validation value is not empty)", function () {
            promise.when(percentage).then(function (percentage) {
                if (!percentage) {
                    return;
                }
                expect(pages.work.creatorContributionByName(name)).toBe(percentage);
            });
        }
    );
};
exports.validateSubjectCreatorContributions = function(howMany) {
    _.times(howMany, function(i) {
        it('Validate subject creator #' + (i + 1) + ' - contribution', function() {
            var data = hash.currentEntityDataSlotsByType.work;
            var creator = data.creators[i];
            expect(pages.work.creatorContributionByName(creator.name)).toBe(
                creator.contribution
            );
        });
    });
};
exports.validateCompositeWorkType = function (data, key) {
    it('Validate composite work type', function () {
        data = data || hash.currentEntityDataSlotsByType.work;
        key = key || 'compositeWorkType';

        pages.work.validateCompositeWorkType(data[key]);
    });
};
exports.validateComponentWorkId = function (i, data, key) {
    it('Validate component work ID', function () {
        var component;

        data = data || hash.currentEntityDataSlotsByType.work;
        key = key || 'components';

        data[key] = data[key] || [];
        component = data[key][i] = data[key][i] || {};

        pages.work.validateComponentWorkId(i, component.workCode);
    });
};
exports.validateComponentWorkName = function (i, data, key) {
    it('Validate component work name #' + (i + 1), function () {
        var component;

        data = data || hash.currentEntityDataSlotsByType.work;
        key = key || 'components';
        component = data[key][i];

        pages.work.validateComponentWorkName(i, component.name);
    });
};
exports.validateComponentWorkAllocation = function (i, data, key) {
    it('Validate component work allocation #' + (i + 1), function () {
        var component;

        data = data || hash.currentEntityDataSlotsByType.work;
        key = key || 'components';
        component = data[key][i];

        pages.work.validateComponentWorkAllocation(i, component.allocation);
    });
};
module.exports.validateCreatorContributionInputMask = function (i, validationTable) {
    it("Validate creator contribution input mask", function () {
        validationTable = validationTable || {
                "1asdf": "1",
                "1,0": "10",
                "1.0.0": "1.00",
                "50": "50",
                "1.0": "1.0",
            };
        _.each(validationTable, function (expectedValue, input) {
            pages.work.enterCreatorContribution(i, input);
            expect(pages.work.enteredCreatorContribution(i)).toBe(expectedValue);
        });
        pages.work.enterCreatorContribution(i, "");
    });
};
exports.clickShowComponentWorkDetailsButton = function (i) {
    it('Click "Show Details" button of component work #' + (i + 1), function () {
        pages.work.clickShowComponentWorkDetailsButton(i);
    });
};
exports.validateShellWorkCreatorName = function (i, j, data, key) {
    it(
        'Validate creator name #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function () {
            var component;
            var creator;

            data = data || hash.currentEntityDataSlotsByType.work;
            key = key || 'components';

            data[key] = data[key] || [];
            component = data[key][i] = data[key][i] || {};

            component.creators = component.creators || [];
            creator = component.creators[j] = component.creators[j] || {};

            pages.work.validateShellWorkCreatorName(i, j, creator.name);
        }
    );
};
exports.validateShellWorkCreatorContribution = function (i, j, data, key) {
    it(
        'Validate creator contribution #' + (j + 1) +
        ' of (shell) component work #' + (i + 1), function () {
            var component;
            var creator;

            data = data || hash.currentEntityDataSlotsByType.work;
            key = key || 'components';

            data[key] = data[key] || [];
            component = data[key][i] = data[key][i] || {};

            component.creators = component.creators || [];
            creator = component.creators[j] = component.creators[j] || {};

            pages.work.validateShellWorkCreatorContribution(
                i, j, creator.contributionToCompositeWork
            );
        }
    );
};
module.exports.validateCreationDate = function (year, month, day) {
    it("Validate creation date (if first validation value is not empty)", function () {
        promise.all([year, month, day]).then(function (values) {
            var date;
            var allTruthy = values.every(function (value) {
                return !!value;
            });
            if (!allTruthy) {
                return;
            }
            _.times(2, function (i) {
                values[i + 1] = pad(values[i + 1], 2, 0);
            });
            date = values.join("-");
            expect(pages.work.creationDate()).toBe(date);
        });
    });
};
module.exports.expectEnteredCreationYearToBe = function (value) {
    it("Validate entered creation year", function () {
        expect(pages.work.enteredCreationYear()).toBe(pph.toString(value));
    });
};
module.exports.expectEnteredCreationYearNotToBe = function (value) {
    it("Validate entered creation year", function () {
        expect(pages.work.enteredCreationYear()).not.toBe(pph.toString(value));
    });
};
module.exports.validateDeliveryDate = function (year, month, day) {
    it("Validate delivery date (if first validation value is not empty)", function () {
        promise.all([year, month, day]).then(function (values) {
            var date;
            var allTruthy = values.every(function (value) {
                return !!value;
            });
            if (!allTruthy) {
                return;
            }
            _.times(2, function (i) {
                values[i + 1] = pad(values[i + 1], 2, 0);
            });
            date = values.join("-");
            expect(pages.work.deliveryDate()).toBe(date);
        });
    });
};

exports.goToRightsTab = function() {
    it('Go to Rights tab', function() {
        pages.work.goToRightsTab();
        pages.base.waitForAjax();
    });
};

exports.goToPreviewCwrTab = function() {
    it('Go to Preview CWR tab', function() {
        pages.work.goToPreviewCwrTab();
    });
};

exports.goToRegistrationActivityTab = function() {
    it('Go to Registration Activity tab', function() {
        pages.work.goToRegistrationActivityTab();
    });
};

module.exports.expectEnteredDeliveryYearToBe = function (value) {
    it("Validate entered delivery year", function () {
        expect(pages.work.enteredDeliveryYear()).toBe(pph.toString(value));
    });
};
module.exports.expectEnteredDeliveryYearNotToBe = function (value) {
    it("Validate entered delivery year", function () {
        expect(pages.work.enteredDeliveryYear()).not.toBe(pph.toString(value));
    });
};
module.exports.validateMusicalDistributionCategory = function (value) {
    it("Validate musical distribution category (if validation value is not empty)", function () {
        promise.when(value).then(function (value) {
            var data = hash.currentEntityDataSlotsByType.work;
            value = value || data.musicalDistributionCategory;
            if(!value) {
                return;
            }
            expect(pages.work.musicalDistributionCategory()).toBe(value);
        });
    });
};
module.exports.validateTextMusicRelationship = function (value) {
    it("Validate text music relationship (if validation value is not empty)", function () {
        promise.when(value).then(function(value) {
            var data = hash.currentEntityDataSlotsByType.work;
            value = value || data.textMusicRelationship;
            if(!value) {
                return;
            }
            if (value.toLowerCase() === "select type") {
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
module.exports.validateExcerptType = function (value) {
    it("Validate excerpt type (if validation value is not empty)", function () {
        promise.when(value).then(function (value) {
            var data = hash.currentEntityDataSlotsByType.work;
            value = value || data.excerptType;
            if(!value) {
                return;
            }
            if (value.toLowerCase() === "select type") {
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
module.exports.validateVersionType = function (value) {
    it("Validate version type (if validation value is not empty)", function () {
        promise.when(value).then(function (value) {
            var data = hash.currentEntityDataSlotsByType.work;
            value = value || data.versionType;
            if(!value) {
                return;
            }
            expect(pages.work.versionType()).toBe(value);
        });
    });
};
module.exports.validateLyricAdaptation = function (value) {
    it("Validate lyric adaptation (if validation value is not empty)", function () {
        promise.when(value).then(function (value) {
            var data = hash.currentEntityDataSlotsByType.work;
            value = value || data.lyricAdaptation;
            if(!value) {
                return;
            }
            expect(pages.work.lyricAdaptation()).toBe(value);
        });
    });
};
module.exports.validateMusicArrangement = function (value) {
    it("Validate music arrangement (if validation value is not empty)", function () {
        promise.when(value).then(function (value) {
            var data = hash.currentEntityDataSlotsByType.work;
            value = value || data.musicArrangement;
            if(!value) {
                return;
            }
            expect(pages.work.musicArrangement()).toBe(value);
        });
    });
};
module.exports.validateIntendedPurpose = function (value) {
    it("Validate intended purpose (if validation value is not empty)", function () {
        promise.when(value).then(function (value) {
            if (!value) {
                return;
            }
            if (value.toLowerCase() === "select type") {
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
module.exports.validateProductionTitle = function (value) {
    it("Validate production title (if validation value is not empty)", function () {
        promise.when(value).then(function (value) {
            if (!value) {
                return;
            }
            expect(pages.work.productionTitle()).toBe(value);
        });
    });
};
module.exports.validateBltvr = function (value) {
    it("Validate BLTVR (if validation value is not empty)", function () {
        promise.when(value).then(function (value) {
            if (!value) {
                return;
            }
            if (value.toLowerCase() === "select type") {
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
module.exports.validateMusicLibrary = function (value) {
    it('Validate music library (if validation value is not empty)', function () {
        promise.when(value).then(function (value) {
            if (!value) {
                return;
            }
            if (value.toLowerCase() === 'select type') {
                expect(pages.base.isPresentAndDisplayed(
                    pages.work.musicLibraryBinding()
                )).toBeFalsy();
            }
            else {
                expect(pages.work.musicLibrary()).toBe(value);
            }
        });
    });
};
module.exports.expectMusicalDistributionCategoryToBe = function (value) {
    it("Validate selected musical distribution category", function () {
        expect(pages.work.selectedMusicalDistributionCategory()).toBe(value);
    });
};
module.exports.expectMusicalDistributionCategoryNotToBe = function (value) {
    it("Validate selected musical distribution category", function () {
        expect(pages.work.selectedMusicalDistributionCategory()).not.toBe(value);
    });
};
module.exports.expectIntendedPurposeToBe = function (value) {
    it("Validate selected intended purpose", function () {
        expect(pages.work.selectedIntendedPurpose()).toBe(value);
    });
};
module.exports.expectIntendedPurposeNotToBe = function (value) {
    it("Validate selected intended purpose", function () {
        expect(pages.work.selectedIntendedPurpose()).not.toBe(value);
    });
};
module.exports.expectWorkInclusionOnWebsiteOptionToBe = function (include) {
    it(
        "Validate work inclusion on website option", function () {
            expect(pages.work.selectedWorkInclusionOnWebsiteOption()).toBe(include);
        }
    );
};
module.exports.expectWorkInclusionOnWebsiteOptionNotToBe = function (include) {
    it(
        "Validate work inclusion on website option", function () {
            expect(pages.work.selectedWorkInclusionOnWebsiteOption()).not.toBe(include);
        }
    );
};
module.exports.validateIncludeWorkOnWebsite = function (include) {
    it(
        "Validate 'Include work on website' option (if validation value is not empty)", function () {
            promise.when(include).then(function (include) {
                if (include === undefined || include === null) {
                    return;
                }
                expect(pages.work.workInclusionOnWebsite()).toBe(include);
            });
        }
    );
};

pageStep([
    ['Merge', [
        'Merge Work',
        'Enter find work using previously entered primary title',
        'Continue',
        'Confirm'
    ]],
    ['Copy', [
        'Copy Work',
        'Continue',
        'Select Original',
        'Select Adaptation',
        'Enter Primary Work Title',
        'Save work',
        'Validate Success Message'
    ]]
]);
