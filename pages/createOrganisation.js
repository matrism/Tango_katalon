'use strict';

var pageFactory = require('../helpers/pageFactory.js'),

    PageObject = pageFactory.buildPage('CreateOrganisation', {
    url: '/create/org',
    sections: {
        modal: {
          elements: {
              yesButton: {
                  type: 'button',
                  by: by.css('.modal-footer > button[data-ng-click="ok()"]')
              },
              noButton: {
                  type: 'button',
                  by: by.css('.modal-footer > button[data-ng-click="cancel()"]')
              }
          }
        },
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
        this.subPublisher.addSubPublisherButton.click(true);
    },

    removeSubPublisher: function (index, confirmation) {
        var byCssRemoveButton = by.css('button[data-ng-click="showDeleteSubPublisherModal($index)"]'),
            button = this.getSubPublisherByIndex(index).element(byCssRemoveButton);

        browser.actions().mouseMove(button).perform();
        button.click();

        if (confirmation) {
            this.modal.yesButton.click(true);

        } else {
            this.modal.noButton.click(true);

        }


    }
};

module.exports = PageObject;