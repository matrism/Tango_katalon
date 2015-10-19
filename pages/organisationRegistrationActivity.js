'use strict';

var pph = require('../helpers/pph'),
    methodSpecifierCall = require('../helpers/methodSpecifierCall');

pages.organisationRegistrationActivity = exports;

exports.events = (function() {
    var events = {};

    events.targets = {};

    events.container = function(methodSpecifier) {
        return methodSpecifierCall(events.container, methodSpecifier || 'all');
    };

    events.container.all = function() {
        return element.all(by.repeater('activity in regActivities_hash.data'));
    };

    events.container.latestInitiatedBy = function(whom) {
        return events.container().all(by.cssContainingText(
            '[data-ng-show="activity.initiated_by != null"]', whom
        )).first().element(by.xpath(
            'ancestor::li[contains(' +
                'concat(" ", normalize-space(@class), " "), " DATA-CHILD "' +
            ')][1]'
        ));
    };

    events.find = function(methodSpecifier) {
        var container = events.container(methodSpecifier);

        events.targets.latest = {
            methodSpecifier: methodSpecifier,
            container: container
        };

        return pages.base.scrollIntoView(container);
    };

    events.toggleBlind = function() {
        var container = events.targets.latest.container;

        pages.base.scrollIntoView(container);

        return container.click();
    };

    events.statusElement = function() {
        var container = events.targets.latest.container;

        return container.all(by.binding(
            ' activity.sub_status '
        )).filter(function(el) {
            return el.isDisplayed();
        }).first();
    };

    events.waitUntilStatusBecomes = function(status) {
        var statusElement = events.statusElement();

        browser.wait(function() {
            pages.base.scrollIntoView(statusElement);

            return pph.trim(statusElement.getText()).then(function(text) {
                if(text === status) {
                    return true;
                }

                pages.base.refreshPage();

                return false;
            });
        });
    };

    return events;
})();
