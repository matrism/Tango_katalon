var pageFactory = require('../helpers/pageFactory.js');

'use strict';

var PageObject = pageFactory.buildPage('CreateOrganisation', {
    url: '/create/org',
    sections: {
        subPublisher: {
            elements: {
                section: {
                    by: by.css('div[data-ng-show="orgHas.subPublishers"]')
                },
                repeater: {
                    type: 'repeater',
                    by: by.repeater('sp in getSubPublishers()')
                },
                addSubPublisherButton: {
                    type: 'button',
                    by: by.css('button[data-ng-click="addSubPublisher()"]')
                },
                yesButton: {
                    type: 'button',
                    element: element.all(by.model('orgHas.subPublishers')).get(0)
                },
                noButton: {
                    type: 'button',
                    element: element.all(by.model('orgHas.subPublishers')).get(1)
                }
            }
        }
    }
});

PageObject.prototype = {
    getSubPublisherByIndex: function (index) {
        return this.subPublisher.repeater.get(index);
    },

    toggleHasSubPublisherOption: function (option) {
        if (option) {
            this.subPublisher.yesButton.click();
        } else {
            this.subPublisher.noButton.click();
        }

    },

    addSubPublisher: function () {
        this.subPublisher.addSubPublisherButton.click();
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

module.exports = PageObject;