'use strict';

pages.uploadWorks = exports;

exports.fileInput = () => $('[name="work_upload_file"] [type="file"]');

exports.enterFilePath = path => asAlways(
    exports.fileInput(), 'scrollIntoView'
).sendKeys(path);

exports.sourceTypeahead = () => Typeahead(by.model('tgOrgTypeaheadModel'));

exports.enterSourceSearchTerms = val => asAlways(
    exports.sourceTypeahead(), 'scrollIntoView', 'clear'
).sendKeys(val);

exports.waitForSourceSearchResults = () => browser.wait(EC.visibilityOfAny(
    exports.sourceTypeahead().results()
));

exports.selectSourceSearchResultByIndex = (i, name) => {
    exports.waitForSourceSearchResults();

    let result = exports.sourceTypeahead().results().get(i);

    return pages.base.scrollIntoView(result).then(() => {
        if(name) {
            expect(pph.getAllText(
                result.$('.tg-typeahead__item-left')
            )).toBe(name);
        }
    }).then(() => result.click());
};

exports.formatDropdown = () => element(by.model('dataHolder.model.format'));

exports.openFormatDropdownButton = () => exports.formatDropdown().$(
    '.tg-dropdown-caret'
);

exports.formatDropdownOption = name => exports.formatDropdown().element(
    by.cssContainingText('.tg-dropdown-menu-item', name)
);

exports.selectFormat = name => {
    asAlways(
        exports.openFormatDropdownButton(), 'scrollIntoView', 'click'
    );

    return asAlways(
        exports.formatDropdownOption(name), 'scrollIntoView'
    ).click();
};

exports.musicLibraryDropdown = () => Typeahead(by.model(
    'dataHolder.model.musicLibrary'
));

exports.openMusicLibraryDropdownButton = () => (
    exports.musicLibraryDropdown().$('.tg-dropdown-caret')
);

exports.musicLibraryDropdownOption = name => (
    exports.musicLibraryDropdown().element(by.cssContainingText(
        '.tg-dropdown-menu-item', name
    ))
);

exports.selectMusicLibrary = name => {
    asAlways(
        exports.openMusicLibraryDropdownButton(), 'scrollIntoView', 'click'
    );

    return asAlways(
        exports.musicLibraryDropdownOption(name), 'scrollIntoView'
    ).click();
};

exports.uploadButton = () => $('[ng-click="uploadFile();"]');

exports.upload = () => {
    asAlways(exports.uploadButton(), 'scrollIntoView', 'click');

    return pages.worksUploadHistory.waitForPage(3 * 6e4);
};
