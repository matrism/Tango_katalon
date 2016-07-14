'use strict';

pages.crossReference = exports;

exports.searchCriteria = () => {
    let elem = $('.search-by-container');
    return tgDropdown(elem.$('[data-tg-dropdown="item for item in getSearchTypes()"]'));
};

exports.selectSearchCriterion = (name) => {
    let elem = exports.searchCriteria();

    elem.selectValue(name);
};

exports.incomingWorksSearch = () => {
    return Typeahead(by.model('$parent.incomeWork'));
};

exports.searchForIncomingWork = (text, filter) => {
    let typeahead = exports.incomingWorksSearch();

    if (filter) {
        typeahead.setFilter(filter);
    }

    typeahead.selectFirst(text);
    setTestVariable('Last Incoming Work search term', text);
};

exports.enterIncomingWorkSearchTerms = (text, filter) => {
    let typeahead = exports.incomingWorksSearch();

    if (filter) {
        typeahead.setFilter(filter);
    }

    typeahead.enterText(text);
};

exports.expectNoResultsMessage = () => {
    exports.incomingWorksSearch().expectNoResultsMessage();
};

exports.tangoWorkSearch = () => {
    return Typeahead(by.model('$parent.tangoWork'));
};

exports.searchForTangoWork = (text, filter) => {
    let typeahead = exports.tangoWorkSearch();

    if (filter) {
        typeahead.setFilter(filter);
    }

    typeahead.selectFirst(text);
    setTestVariable('Last Tango Work search term', text);
};

exports.incomingWorkContainer = () => {
    return $('.incoming-work');
};

exports.tangoWorkContainer = () => {
    return $('.matching-work');
};

exports.expectIncomingWorkToBeVisible = () => {
    let incomingWork = exports.incomingWorkContainer();

    expect(incomingWork.isDisplayed()).toBeTruthy();
};

exports.expectTangoWorkToBeVisible = () => {
    let tangoWork = exports.tangoWorkContainer();

    expect(tangoWork.isDisplayed()).toBeTruthy();
};

exports.expectNoCrossReference = () => {
    expect(exports.incomingWorkContainer().getText()).toContain('No cross references found using this criteria');
};

exports.incomingWorkId = () => {
    let incomingWork = exports.incomingWorkContainer();

    return incomingWork.element(by.binding('::xref.source_work_id'));
};

exports.expectIncomingWorkIdToContain = (term) => {
    let elem = exports.incomingWorkId();

    elem.getText().then((text) => {
        expect(text.toLowerCase()).toContain(term);
    });
};

exports.expectIncomingWorkIdToContainSearchTerm = () => {
    let searchTerm = hash.testVariables['Last Incoming Work search term'];
    exports.expectIncomingWorkIdToContain(searchTerm);
};

exports.tangoWorkTitle = (index) => {
    index = index || 0;
    return $$('[data-ui-sref^="workView"]').get(index);
};

exports.expectTangoWorkTitleToContain = (text, index) => {
    let elem = exports.tangoWorkTitle(index);
    expect(elem.getText()).toContain(text);
};

exports.addCrossReferenceButton = () => {
    return element(by.buttonText('Add Cross Reference'));
};

exports.clickAddCrossReferenceButton = () => {
    let elem = exports.addCrossReferenceButton();

    elem.click();
    pages.base.waitForAjax();
};

exports.items = (() => {
    let item = {};

    item.index = 0;

    item.get = (index) => {
        item.index = index ? index : item.index;
        return $$('tg-cross-reference-item').get(item.index);
    };

    item.expand = (index) => {
        item.get(index).click();
    };

    item.getText = () => {
        return item.get().getText();
    };

    item.validateTitle = (value) => {
        expect(item.getText()).toContain(value);
    };

    item.validateCreators = (value) => {
        expect(item.getText()).toContain(value);
    };

    item.validateId = (value) => {
        expect(item.getText()).toContain(value);
    };

    item.rematchButton = () => {
        return item.get().$('[data-ng-click="xref._rematch = true;"]');
    };

    item.rematch = () => {
        asAlways(
            item.rematchButton(),
            'waitUntilVisible',
            'click'
        );
    };

    item.rematchWorkSearch = () => {
        return Typeahead(by.model('xref.rematchTangoWork'), false, true);
    };

    item.searchForRematchWork = (text, filter) => {
        let typeahead = item.rematchWorkSearch();

        if (filter) {
            typeahead.setFilter(filter);
        }

        typeahead.selectFirst(text);
    };

    item.confirmButton = () => {
        return $('[data-ng-click="ok()"]');
    };

    item.confirm = () => {
        pages.base.waitForModal();
        item.confirmButton().click();
        pages.base.waitForAjax();
    };

    item.unmatchButton = () => {
        return item.get().$('[data-ng-click="xref._rematch = false; unmatchCrossReference(xref)"]');
    };

    item.unmatch = () => {
        asAlways(
            item.unmatchButton(),
            'waitUntilVisible',
            'click'
        );
    };

    return item;
})();

exports.addForm = (() => {
    let addForm = {};

    addForm.crossReferenceForm = () => {
        return $('form[data-name="addCrossRefForm"]');
    };

    addForm.labels = () => {
        let form = addForm.crossReferenceForm();
        return form.$$('.control-label');
    };

    addForm.expectCrossReferenceFormToBeVisible = () => {
        let form = addForm.crossReferenceForm();
        expect(form.isDisplayed()).toBeTruthy();
    };

    addForm.expectFormLabelsToBe = (labels) => {
        expect(addForm.labels().getText()).toEqual(labels);
    };

    addForm.titleInput = () => {
        return element(by.model('newCrossRefModel.incoming_song_title'));
    };

    addForm.creatorsInput = () => {
        return element(by.model('newCrossRefModel.incoming_composer'));
    };

    addForm.idInput = () => {
        return element(by.model('newCrossRefModel.source_work_id'));
    };

    addForm.incomeProviderTypeahead = () => {
        return Typeahead(by.model('newCrossRefModel.incomeProvider'));
    };

    addForm.confirmButtom = () => {
        return $('[data-ng-click="addNewCrossReference(newCrossRefModel)"]');
    };

    addForm.enterTitle = (value) => {
        addForm.titleInput().sendKeys(value);
    };

    addForm.enterCreators = (value) => {
        addForm.creatorsInput().sendKeys(value);
    };

    addForm.enterId = (value) => {
        addForm.idInput().sendKeys(value);
    };

    addForm.enterIncomeProvider = (value) => {
        let typeahead = addForm.incomeProviderTypeahead();
        typeahead.selectFirst(value);
    };

    addForm.expectConfirmButtomToBeDisabled = () => {
        expect(addForm.confirmButtom().isEnabled()).toBeFalsy();
    };

    addForm.confirm = () => {
        addForm.confirmButtom().click();
        pages.base.waitForAjax();
    };

    addForm.successMessage = () => {
        return element(by.cssContainingText(
            'p', 'Cross reference has been added to work'
        ));
    };

    addForm.validateSuccessMessage = () => {
        let element = addForm.successMessage();
        expect(pages.base.isPresentAndDisplayed(element)).toBeTruthy();
    };

    return addForm;
})();
