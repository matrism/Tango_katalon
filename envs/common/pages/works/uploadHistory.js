'use strict';

pages.worksUploadHistory = exports;

exports.headingContainer = () => $('.work-history-heading__container');

exports.waitForPage = timeout => {
    browser.wait(EC.visibilityOf(exports.headingContainer()));

    return pages.base.waitForAjax(timeout);
};

exports.uploadWorksLink = () => exports.headingContainer().element(
    by.cssContainingText('a', 'UPLOAD WORKS')
);

exports.uploadWorks = () => asAlways(
    exports.uploadWorksLink(), 'scrollIntoView', 'click', 'waitForAjax'
);

exports.rows = () => element.all(by.repeater(
    'historyFiles in processorsContext.workFiles.getAll()'
));

exports.fileNameBindingForRow = row => row.element(by.binding(
    '::historyFiles.file_name'
));

exports.findRowByFileName = (name, testVarName, dontExpect) => {
    let rows = exports.rows();

    let iFound = -1;

    let updateTestVar = () => {
        if(!testVarName) {
            return;
        }

        hash.testVariables[testVarName] = iFound;
    };

    updateTestVar();

    let i = 0;

    return rows.count().then(count => {
        return browser.wait(() => {
            if(i >= count) {
                return true;
            }

            let binding = exports.fileNameBindingForRow(rows.get(i));

            return pph.areEqual(pph.getAllText(binding), name).then(equal => {
                if(!equal) {
                    ++i;
                    return false;
                }

                iFound = i;
                updateTestVar();

                return true;
            });
        }).then(() => {
            if(!dontExpect) {
                expect(iFound).not.toBe(-1);
            }

            return iFound;
        });
    });
};

exports.waitUntilFileNameIsStaged = fileName => {
    return browser.wait(() => {
        return exports.findRowByFileName(fileName, 'uploaded row', false).then(
            i => {
                if(i === -1) {
                    return false;
                }

                return pph.isDisplayed(exports.viewFileLink(i)).then(
                    displayed => {
                        if(!displayed) {
                            pages.base.refreshPage();
                        }

                        return displayed;
                    }
                );
            }
        );
    });
};

exports.rowHeading = i => exports.rows().get(i).$('.accordion-heading');

exports.unconfirmedCountBinding = i => exports.rowHeading(i).element(
    by.binding('::historyFiles.unconfirmed_count || 0')
);

exports.unconfirmedCount = i => asAlways(
    exports.unconfirmedCountBinding(i), 'scrollIntoView', 'getAllText'
);

exports.validateUnconfirmedCount = (i, val) => expect(
    exports.unconfirmedCount(i)
).toBe(val.toString());

exports.openCountBinding = i => exports.rowHeading(i).element(by.binding(
    '::(historyFiles.in_progress_count + historyFiles.delivered_count) || 0'
));

exports.openCount = i => asAlways(
    exports.openCountBinding(i), 'scrollIntoView', 'getAllText'
);

exports.validateOpenCount = (i, val) => expect(
    exports.openCount(i)
).toBe(val.toString());

exports.createdCountBinding = i => exports.rowHeading(i).element(
    by.binding('::historyFiles.created_count || 0')
);

exports.createdCount = i => asAlways(
    exports.createdCountBinding(i), 'scrollIntoView', 'getAllText'
);

exports.validateCreatedCount = (i, val) => expect(
    exports.createdCount(i)
).toBe(val.toString());

exports.uploadDateBinding = i => exports.rowHeading(i).element(by.binding(
    '::historyFiles.upload_date | tgIsoDate'
));

exports.uploadDate = i => asAlways(
    exports.uploadDateBinding(i), 'scrollIntoView', 'getAllText'
);

exports.validateUploadDate = (i, val) => expect(
    exports.uploadDate(i)
).toBe(val);

exports.sourceBinding = i => exports.rowHeading(i).element(by.binding(
    '::historyFiles.organisation_name'
));

exports.source = i => asAlways(
    exports.sourceBinding(i), 'scrollIntoView', 'getAllText'
);

exports.validateSource = (i, val) => expect(exports.source(i)).toBe(val);

exports.fileNameBinding = i => exports.fileNameBindingForRow(
    exports.rowHeading(i)
);

exports.fileName = i => asAlways(
    exports.fileNameBinding(i), 'scrollIntoView', 'getAllText'
);

exports.validateFileName = (i, val) => expect(exports.fileName(i)).toBe(val);

exports.viewFileLink = i => exports.rowHeading(i).$(
    '[ui-sref="worksViewFile({workFileId:historyFiles.id})"]'
);

exports.viewFile = i => asAlways(
    exports.viewFileLink(i), 'scrollIntoView', 'click'
);
