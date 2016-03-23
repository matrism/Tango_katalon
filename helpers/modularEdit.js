'use strict';

function modularEdit (target) {
    var el = target,
        saveButton,
        cancelButton;

    if (!target.element) {
        el = element(target);
    }

    saveButton = el.$('.CONTROLS .btn-primary');
    cancelButton = el.$('.CONTROLS .btn-cancel');

    function waitForEditModeToBeClosed() {
        browser.wait(function(){
            return el.evaluate('getCurrentView().isEdit()').then(function(exp){
                return !exp;
            });
        });

    }

    el.save = function () {
        pages.base.scrollIntoView(saveButton);
        saveButton.click();
        waitForEditModeToBeClosed();
    };

    el.cancel = function () {
        pages.base.scrollIntoView(cancelButton);
        cancelButton.click();
        waitForEditModeToBeClosed();
    };

    el.edit = function () {
        var btn = el.$('button.btn-toggle')
        pages.base.scrollIntoView(btn);

        btn.click();
    };

    return el;
}

modularEdit.byTitle = function (title) {
    var el = element(by.cssContainingText('.editor-header h2', title)),
        editorEl = el.element(by.xpath('../..')).$('.modular-edit');

    return modularEdit(editorEl);
};

modularEdit.byId = function (id) {
    return modularEdit($('[data-tg-modular-edit-id="' + id + '"]'));
};

module.exports = modularEdit;

