'use strict';

function CreateOrganisation () {
    this.subPublisher = {
        yesButton: element.all(by.model('orgHas.subPublishers')).get(0),
        noButton: element.all(by.model('orgHas.subPublishers')).get(1),
        section: element(by.css('div[data-ng-show="orgHas.subPublishers"]')),
        repeater: element.all(by.repeater('sp in getSubPublishers()')),
        addSubPublisherButton: element(by.css('button[data-ng-click="addSubPublisher()"]'))
    };
}

CreateOrganisation.prototype = {
    get: function () {
        browser.get('/create/org');
    },

    getSubPublisherByIndex: function (index) {
        return this.subPublisher.repeater.get(index);
    },

    toggleHasSubPublisherOption: function (option) {
        if (option) {
            browser.actions().mouseMove(this.subPublisher.yesButton).perform();
            this.subPublisher.yesButton.click();
        } else {
            browser.actions().mouseMove(this.subPublisher.noButton).perform();
            this.subPublisher.noButton.click();
        }

    },

    addSubPublisher: function () {
        var button = element(by.css('button[data-ng-click="addSubPublisher()"]'));
        button.isPresent().then(function (present) {
            if (present) {
                browser.actions().mouseMove(button).perform();
                button.click();
            }
        });
    },

    removeSubPublisher: function (index, confirmation) {
        var byCssRemoveButton = by.css('button[data-ng-click="showDeleteSubPublisherModal($index)"]'),
            button = this.getSubPublisherByIndex(index).element(byCssRemoveButton),
            confirmationButton;

        browser.actions().mouseMove(button).perform();
        button.click();

        if (confirmation) {
            confirmationButton = element(by.css('.modal-footer > button[data-ng-click="ok()"]'));
        } else {
            confirmationButton = element(by.css('.modal-footer > button[data-ng-click="cancel()"]'));
        }

        browser.actions().mouseMove(confirmationButton).perform();
        confirmationButton.click();
    }

};

module.exports = CreateOrganisation;