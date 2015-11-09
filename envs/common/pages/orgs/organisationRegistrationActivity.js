'use strict';

var pph = require('../../../../helpers/pph'),
    methodSpecifierCall = require('../../../../helpers/methodSpecifierCall'),
    callResultOrValue = require('../../../../helpers/callResultOrValue');

pages.organisationRegistrationActivity = exports;

exports.events = (function() {
    var events = {};

    events.targets = {};

    events.containerFromChild = function(childElement) {
        return childElement.element(by.xpath(
            'ancestor::li[contains(' +
                'concat(" ", normalize-space(@class), " "), " DATA-CHILD "' +
            ')][1]'
        ));
    };

    events.container = function(methodSpecifier) {
        return methodSpecifierCall(events.container, methodSpecifier || 'all');
    };

    events.container.all = function() {
        return element.all(by.repeater('activity in regActivities_hash.data'));
    };

    events.container.latestInitiatedBy = function(whom) {
        return events.containerFromChild(
            events.container().all(by.cssContainingText(
                '[data-ng-show="activity.initiated_by != null"]', whom
            )).first()
        );
    };

    events.container.fileName = function(fileName) {
        fileName = callResultOrValue(fileName);

        return events.containerFromChild(
            events.container().all(by.cssContainingText(
                '[data-ng-if="activity.file_name"]', fileName
            )).first()
        );
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

    events.validateStatus = function(status) {
        var statusElement = events.statusElement();

        pages.base.scrollIntoView(statusElement);

        expect(pph.trim(statusElement.getText())).toBe(status);
    };

    return events;
})();
