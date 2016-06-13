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

exports.addCrossReferenceButton = () => {
    return element(by.buttonText('Add Cross Reference'));
};

exports.clickAddCrossReferenceButton = () => {
    let elem = exports.addCrossReferenceButton();

    elem.click();
    pages.base.waitForAjax();
};

exports.crossReferenceForm = () => {
    return $('form[data-name="addCrossRefForm"]');
};

exports.expectCrossReferenceFormToBeVisible = () => {
    let form = exports.crossReferenceForm();

    expect(form.isDisplayed()).toBeTruthy();
};

exports.expectFormLabelsToBe = (labels) => {
    let form = exports.crossReferenceForm(),
        formLabels = form.$$('.control-label');

    expect(formLabels.getText()).toEqual(labels);
};
