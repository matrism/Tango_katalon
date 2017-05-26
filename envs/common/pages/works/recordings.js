'use strict';

pages.workRecordings = exports;

// ---

exports.editContainer = () => $(
    '[data-ng-controller="WorkRecordingsEditController"]'
);

// ---

exports.addRecordingsButton = () => exports.editContainer().element(
    by.cssContainingText('button', 'Enter Recording Details')
);

exports.addRecordings = () => asAlways(
    exports.addRecordingsButton(), 'scrollIntoView', 'click'
);

// ---

exports.editButton = () => exports.editContainer().$(
    '[data-ng-click="tgModularViewMethods.switchToEditView()"]'
);

exports.edit = () => asAlways(
    exports.editButton(), 'scrollIntoView', 'click'
);

// ---

exports.editControls = () => exports.editContainer().$('.CONTROLS');

// ---

exports.saveButton = () => exports.editControls().element(
    by.cssContainingText('button', 'Save')
);

exports.save = () => asAlways(
    exports.saveButton(), 'scrollIntoView', 'click', 'waitForAjax'
);

// ---

exports.cancelChangesButton = () => exports.editControls().element(
    by.cssContainingText('button', 'Cancel')
);

exports.cancelChanges = () => asAlways(
    exports.cancelChangesButton(), 'scrollIntoView', 'click'
);

// ---

exports.rows = () => $$('div[ng-repeat="recordingLink in WorkRecordingsCtrl.getRecordingsView().getRecordingLinks()"]');

exports.validateRowCount = val => expect(exports.rows().count()).toBe(val);

// ---

{
    let locator = by.model('$term');

    exports.titleInput = i => exports.rows().get(i).element(locator);

    exports.titleInputs = () => exports.rows().all(locator);
}

// ---

exports.focusTitleField = i => asAlways(
    exports.titleInput(i), 'scrollIntoView', 'click'
);

// ---

exports.titleSuggestionsContainer = () => $(
    '.tg-typeahead__suggestions-group-item'
);



exports.titleSuggestionRows = () => element.all(by.repeater(
    '$match in $dataSet.suggested.matches | limitTo:$dataSet.suggested.limit'
));

exports.selectTitleSuggestionByIndex = (i, val) => {
    let el = exports.titleSuggestionRows();

   el.click();
};

// ---

exports.enterTitle = (i, val) => asAlways(
    exports.titleInput(i), 'scrollIntoView', 'clear'
).sendKeys(val);

// ---

exports.rowIndexByEnteredTitle = val => {
    let el = exports.titleInputs().filter(el => pph.areEqual(
        el.getAttribute('value'), val
    )).first();

    return browser.executeScript(function (el) {
        return $(el).closest('.content-border').index() - 1;
    }, el.getWebElement());
};

exports.findByEnteredTitle = (val, varName) => {
    let iRow;

    return (
        exports.rowIndexByEnteredTitle(val)
            .then(i => iRow = i)
            .then(() => pages.base.scrollIntoView(exports.titleInput(iRow)))
            .then(() => hash.testVariables[varName] = iRow)
    );
};

exports.enteredTitle = i => asAlways(
    exports.titleInput(i), 'scrollIntoView', 'getValue'
);

exports.validateEnteredTitle = (i, val) => expect(
    exports.enteredTitle(i)
).toBe(val);

exports.expectEmptyTitleField = i => exports.validateEnteredTitle(i, '');

// ---

{
    let locator = by.binding('::recordingLink.recording.title');

    exports.titleBinding = i => exports.rows().get(i).element(locator);

    exports.titleBindings = () => exports.rows().all(locator);
}

// ---

exports.rowIndexByTitle = val => {
    let el = exports.titleBindings().filter(el => pph.areEqual(
        pph.getAllText(el), val
    )).first();

    return browser.executeScript(function (el) {
        return $(el).closest('.content-border').index() - 1;
    }, el.getWebElement());
};

exports.findByTitle = (val, varName) => {
    let iRow;

    return (
        exports.rowIndexByTitle(val)
            .then(i => iRow = i)
            .then(() => pages.base.scrollIntoView(exports.titleBinding(iRow)))
            .then(() => hash.testVariables[varName] = iRow)
    );
};

exports.title = i => asAlways(
    exports.titleBinding(i), 'scrollIntoView', 'getAllText'
);

exports.validateTitle = (i, val) => expect(
    exports.title(i)
).toBe(val);

// ---

exports.artistTypeahead = i => Typeahead(exports.rows().get(i).element(
    by.model('recordingLink.recording.artist')
));

exports.enterArtistSearchTerms = (i, val) => asAlways(
    exports.artistTypeahead(i), 'scrollIntoView', 'clear'
).sendKeys(val);

exports.enteredArtistSearchTerms = i => asAlways(
    exports.artistTypeahead(i), 'scrollIntoView'
).getValue();

exports.validateEnteredArtistSearchTerms = (i, val) => expect(
    exports.enteredArtistSearchTerms(i)
).toBe(val);

exports.expectEmptyArtistSearchTermsField = i => (
    exports.validateEnteredArtistSearchTerms(i, '')
);

// ---

exports.artistSearchResultNameBinding = (i, j) => (
    exports.artistTypeahead(i).results().get(j).$('.ng-binding')
);

exports.selectArtistSearchResultByIndex = (i, j, name) => {
    let el = asAlways(
        exports.artistSearchResultNameBinding(i, j), 'scrollIntoView'
    );

    if(name) {
        expect(pph.getAllText(el)).toBe(name);
    }

    return el.click();
};

exports.createEnteredArtistOption = () => element(by.cssContainingText(
    '.tg-typeahead__suggestions-footer a', 'Create New Artist'
));

exports.createEnteredArtist = () => asAlways(
    exports.createEnteredArtistOption(),
    'waitUntilVisible', 'scrollIntoView', 'click', 'waitForAjax'
);

// ---

exports.artistNameBinding = i => exports.rows().get(i).element(by.binding(
    'recording.artist.displayName'
));

exports.artistName = i => asAlways(
    exports.artistNameBinding(i), 'scrollIntoView', 'getAllText'
);

exports.validateArtistName = (i, val) => expect(
    exports.artistName(i)
).toBe(val);

// ---

exports.libraryNameBinding = i => exports.rows().get(i).$(
    'span[ng-bind="::WorkRecordingsCtrl.getLibraryName(recordingLink.recording.libraryCode)"]'
);

exports.libraryName = i => asAlways(
    exports.libraryNameBinding(i), 'scrollIntoView', 'getAllText'
);

exports.validateLibraryName = (i, val) => expect(
    exports.libraryName(i)
).toBe(val);

// ---

exports.durationInput = i => exports.rows().get(i).$(
    '.tg-time-selector input'
);

exports.enterDuration = (i, val) => {
    let el = asAlways(exports.durationInput(i), 'scrollIntoView', 'clear');

    browser.sleep(200);

    return el.sendKeys(val);
};

exports.enteredDuration = i => asAlways(
    exports.durationInput(i), 'scrollIntoView', 'getValue'
);

exports.validateEnteredDuration = (i, val) => expect(
    exports.enteredDuration(i)
).toBe(val);

exports.expectEmptyDurationField = i => exports.validateEnteredDuration(i, '');

// ---

exports.durationBinding = i => exports.rows().get(i).element(by.binding(
    '::recordingLink.recording.getDuration()'
));

exports.duration = i => asAlways(
    exports.durationBinding(i), 'scrollIntoView', 'getAllText'
);

exports.validateDuration = (i, val) => expect(
    exports.duration(i)
).toBe(val);

// ---

exports.firstUseCheckbox = i => exports.rows().get(i).$(
    '.recordingLink.firstUse'
);

exports.toggleFirstUseFlag = i => asAlways(
    exports.firstUseCheckbox(i), 'scrollIntoView', 'click'
);

exports.firstUseChecked = i => asAlways(
    exports.firstUseCheckbox(i), 'scrollIntoView', 'isChecked'
);

exports.validateFirstUseFlagState = (i, st) => expect(
    exports.firstUseChecked(i)
).toBe(st);

// ---

exports.removeButton = i => exports.rows().get(i).$(
    '.content-border.m-remove'
);

// ---

exports.removeButtonEnabled = i => pph.matchesCssSelector(asAlways(
    exports.removeButton(i), 'scrollIntoView'
), ':not(.disabled)');

exports.removeButtonState = i => {
    return promise.all([
        exports.removeButtonEnabled(i).then(enabled => (
            enabled? 'enabled' : 'disabled'
        ))
    ]);
};

exports.validateRemoveButtonState = (i, st) => expect(
    exports.removeButtonState(i)
).toContain(st);

// ---

exports.hoverRemoveButton = i => {
    asAlways(exports.removeButton(i), 'scrollIntoView', 'hover');
    return browser.sleep(500);
};

// ---

exports.remove = i => asAlways(
    exports.removeButton(i), 'scrollIntoView', 'click'
);

// ---

exports.toggleButton = i => exports.rows().get(i).$(
    '.fa.fa-angle-up.fa-angle-down'
);

exports.expanded = i => asAlways(
    exports.toggleButton(i), 'scrollIntoView'
).then(el => pph.matchesCssSelector(el, '.fa-chevron-up'));

exports.toggle = i => asAlways(
    exports.toggleButton(i), 'scrollIntoView', 'click', 'waitForAjax'
);

// ---

exports.albums = (() => {
    let alb = {};

    alb.rows = i => exports.rows().get(i).$$(
        '[ng-repeat="track in recordingLink.recording.tracks.$getItems()"]');

    alb.validateRowCount = (i, val) => expect(alb.rows(i).count()).toBe(val);

    // ---

    alb.searchTypeaheadContainer = (i, j) => alb.rows(i).get(j).$(
        '[data-tg-typeahead-id^="albumsSearchTypeahead_"]'
    );

    alb.searchInput = (i, j) => alb.searchTypeaheadContainer(i, j).element(
        by.model('$term')
    );

    // ---

    alb.enterSearchTerms = (i, j, val) => asAlways(
        alb.searchInput(i, j), 'scrollIntoView', 'clear'
    ).sendKeys(val);

    alb.enteredSearchTerms = (i, j) => asAlways(
        alb.searchInput(i, j), 'scrollIntoView', 'getValue'
    );

    alb.validateEnteredSearchTerms = (i, j, val) => expect(
        alb.enteredSearchTerms(i, j)
    ).toBe(val);

    exports.expectEmptySearchTermsField = i => (
        exports.validateEnteredSearchTerms(i, '')
    );

    // ---

    alb.searchResultRows = () => $$('.tg-typeahead__suggestions-group-item');

    alb.waitForSearchResults = () => browser.wait(EC.visibilityOfAny(
        alb.searchResultRows()
    ));

    alb.searchResultRowTitleBindingByIndex = i => (
        alb.searchResultRows().get(i).$('.span3')
    );

    alb.selectSearchResultByIndex = (i, title) => {
        alb.waitForSearchResults();

        let result = alb.searchResultRows().get(i);

        return pages.base.scrollIntoView(result).then(() => {
            if(title) {
                expect(pph.getAllText(
                    alb.searchResultRowTitleBindingByIndex(i)
                )).toBe(title);
            }
        }).then(() => result.click());
    };

    // ---

    alb.selectedAlbumTitleBinding = (i, j) => alb.rows(i).get(j).element(
        by.binding(' ::track.album.title ')
    );

    alb.selectedAlbumTitle = (i, j) => asAlways(
        alb.selectedAlbumTitleBinding(i, j), 'scrollIntoView', 'getAllText'
    );

    alb.validateSelectedAlbumTitle = (i, j, val) => expect(
        alb.selectedAlbumTitle(i, j)
    ).toBe(val);

    // ---

    alb.albumTitleBinding = (i, j) => alb.rows(i).get(j).element(
        by.binding("::track.album.title")
    );

    alb.albumTitle = (i, j) => asAlways(
        alb.albumTitleBinding(i, j), 'scrollIntoView', 'getAllText'
    );

    alb.validateAlbumTitle = (i, j, val) => expect(
        alb.albumTitle(i, j)
    ).toBe(val);

    alb.open = (i, j) => asAlways(
        alb.albumTitleBinding(i, j),
        'scrollIntoView', 'click', 'waitForAjax'
    );

    // ---

    alb.trackNumberInput = (i, j) => alb.rows(i).get(j).element(by.model(
        'track.trackNumber'
    ));

    alb.enterTrackNumber = (i, j, val) => asAlways(
        alb.trackNumberInput(i, j), 'scrollIntoView', 'clear'
    ).sendKeys(val);

    alb.enteredTrackNumber = (i, j) => asAlways(
        alb.trackNumberInput(i, j), 'scrollIntoView', 'getValue'
    );

    alb.validateEnteredTrackNumber = (i, j, val) => expect(
        alb.enteredTrackNumber(i, j)
    ).toBe(val.toString());

    alb.expectEmptyTrackNumberField = (i, j) => (
        alb.validateEnteredTrackNumber(i, j, '')
    );

    // ---

    alb.trackNumberBinding = (i, j) => alb.rows(i).get(j).element(
        by.binding("::track.trackNumber")
    );

    alb.trackNumber = (i, j) => asAlways(
        alb.trackNumberBinding(i, j), 'scrollIntoView', 'getAllText'
    );

    alb.validateTrackNumber = (i, j, val) => expect(
        alb.trackNumber(i, j)
    ).toBe(val.toString());

    // ---

    alb.removeButton = (i, j) => alb.rows(i).get(j).$(
        '.content-border.m-remove'
    );

    alb.remove = (i, j) => asAlways(
        alb.removeButton(i, j), 'scrollIntoView', 'click'
    );

    // ---

    alb.toggleButton = (i, j) => alb.rows(i).get(j).$(
        '.fa fa-angle-up.fa-angle-down'
    );

    alb.toggle = (i, j) => asAlways(
        alb.toggleButton(i, j),
        'scrollIntoView', 'click', 'waitForAjax'
    );

    return alb;
})();

// ---

exports.albums.release = (() => {
    let alb = exports.albums,
        rel = {};

    rel.rows = (i, j) => alb.rows(i).get(j).all(by.repeater(
        'albumRelease in track.album.albumReleases'
    ));

    // ---

    rel.territoryBindings = (i, j, k) => rel.rows(i, j).get(k).all(by.binding(
        'getTerritory(territory).title'
    ));

    rel.territory = (i, j, k, l) => asAlways(
        rel.territoryBindings(i, j, k).get(l),
        'scrollIntoView', 'getAllText'
    );

    rel.validateTerritory = (i, j, k, l, val) => expect(
        rel.territory(i, j, k, l)
    ).toBe(val);

    // ---

    rel.releaseDateBinding = (i, j, k) => rel.rows(i, j).get(k).element(
        by.binding(" albumRelease.release_date || ' ' ")
    );

    rel.releaseDate = (i, j, k) => asAlways(
        rel.releaseDateBinding(i, j, k), 'scrollIntoView', 'getAllText'
    );

    rel.validateReleaseDate = (i, j, k, val) => expect(
        rel.releaseDate(i, j, k)
    ).toBe(val);

    // ---

    rel.configurationBinding = (i, j, k) => rel.rows(i, j).get(k).element(
        by.binding(" albumRelease.configuration || ' ' ")
    );

    rel.configuration = (i, j, k) => asAlways(
        rel.configurationBinding(i, j, k), 'scrollIntoView', 'getAllText'
    );

    rel.validateConfiguration = (i, j, k, val) => expect(
        rel.configuration(i, j, k)
    ).toBe(val);

    // ---

    rel.labelNameBinding = (i, j, k) => rel.rows(i, j).get(k).element(
        by.binding(" albumRelease.label[0].name || ' ' ")
    );

    rel.labelName = (i, j, k) => asAlways(
        rel.labelNameBinding(i, j, k), 'scrollIntoView', 'getAllText'
    );

    rel.validateLabelName = (i, j, k, val) => expect(
        rel.labelName(i, j, k)
    ).toBe(val);

    // ---

    {
        let locator = by.binding(" albumRelease.catalog_number || ' ' ");

        rel.catalogueNumberBindings = (i, j) => rel.rows(i, j).all(locator);

        rel.catalogueNumberBinding = (i, j, k) => rel.rows(i, j).get(k).element(
            locator
        );
    }

    // ---

    rel.rowIndexByCatalogueNumber = (i, j, val) => {
        let el = rel.catalogueNumberBindings(i, j).filter(el => pph.areEqual(
            pph.getAllText(el), val.toString()
        )).first();

        return browser.executeScript(function (el) {
            return $(el).closest('.work-recordings-table3-tr').index();
        }, el.getWebElement());
    };

    rel.findByCatalogueNumber = (i, j, val, varName) => {
        let iRow;

        return (
            rel.rowIndexByCatalogueNumber(i, j, val)
                .then(i => iRow = i)
                .then(() => pages.base.scrollIntoView(
                    rel.catalogueNumberBinding(iRow)
                ))
                .then(() => hash.testVariables[varName] = iRow)
        );
    };

    // ---

    rel.catalogueNumber = (i, j, k) => asAlways(
        rel.catalogueNumberBinding(i, j, k), 'scrollIntoView', 'getAllText'
    );

    rel.validateCatalogueNumber = (i, j, k, val) => expect(
        rel.catalogueNumber(i, j, k)
    ).toBe(val);

    // ---

    rel.licenseCodeBinding = (i, j, k) => rel.rows(i, j).get(k).element(
        by.binding(" albumRelease.license_code || ' ' ")
    );

    rel.licenseCode = (i, j, k) => asAlways(
        rel.licenseCodeBinding(i, j, k), 'scrollIntoView', 'getAllText'
    );

    rel.validateLicenseCode = (i, j, k, val) => expect(
        rel.licenseCode(i, j, k)
    ).toBe(val);

    return rel;
})();
