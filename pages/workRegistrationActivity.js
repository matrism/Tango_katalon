'use strict';

var pph = require('../helpers/pph'),
    methodSpecifierCall = require('../helpers/methodSpecifierCall');

pages.workRegistrationActivity = exports;

exports.activityGroup = (function() {
    var activityGroup = {};

    activityGroup.targets = {};

    activityGroup.container = function(methodSpecifier) {
        return methodSpecifierCall(
            activityGroup.container, methodSpecifier || 'all'
        );
    };

    activityGroup.container.all = function() {
        return element.all(by.repeater(
            'activitiesGroup in dataHolder.groupedActivities'
        ));
    };

    activityGroup.container.first = function() {
        return activityGroup.container().first();
    };

    activityGroup.find = function(methodSpecifier, targetGroupName) {
        var container = activityGroup.container(methodSpecifier),
            resultPromise = pages.base.scrollIntoView(container);

        activityGroup.targets.latest = {
            methodSpecifier: methodSpecifier,
            container: container
        };

        if(targetGroupName) {
            activityGroup.targets[targetGroupName] = activityGroup.targets.latest;
        }

        return resultPromise;
    };

    activityGroup.recipientNameElement = function(targetGroupName) {
        var target = activityGroup.targets[targetGroupName || 'latest'];

        return target.container.element(by.binding(
            ' activitiesGroup.registration.name '
        ));
    };

    activityGroup.recipientName = function(targetGroupName) {
        var nameElement = activityGroup.recipientNameElement(targetGroupName);

        pages.base.scrollIntoView(nameElement);

        return pph.trim(nameElement.getText());
    };

    activityGroup.validateRecipientName = function(name, targetGroupName) {
        expect(activityGroup.recipientName(targetGroupName)).toBe(name);
    };

    activityGroup.goToRecipientPage = function(targetGroupName) {
        var nameElement = activityGroup.recipientNameElement(targetGroupName);

        pages.base.scrollIntoView(nameElement);

        return nameElement.click();
    };

    activityGroup.toggleBlind = function(targetGroupName) {
        var target = activityGroup.targets[targetGroupName || 'latest'];

        pages.base.scrollIntoView(target.container);

        return target.container.click();
    };

    return activityGroup;
})();

exports.activityGroup.event = (function() {
    var event = {};

    event.targets = {};

    event.container = function(methodSpecifier) {
        return methodSpecifierCall(event.container, methodSpecifier || 'all');
    };

    event.container.all = function() {
        var groupContainer = exports.activityGroup.targets.latest.container;

        return groupContainer.all(by.repeater(
            'activity in activitiesGroup.activities'
        )).filter(function(container) {
            return container.isDisplayed();
        });
    };

    event.container.latest = function() {
        return event.container().last();
    };

    event.find = function(methodSpecifier, targetEventName) {
        var container = event.container(methodSpecifier),
            resultPromise = pages.base.scrollIntoView(container);

        event.targets.latest = {
            methodSpecifier: methodSpecifier,
            container: container
        };

        if(targetEventName) {
            event.targets[targetEventName] = event.targets.latest;
        }

        return resultPromise;
    };

    event.statusElement = function(status, targetEventName) {
        var targetEvent = event.targets[targetEventName || 'latest'];

        return targetEvent.container.element(by.cssContainingText('.label', status));
    };

    event.validateStatus = function(status, targetEventName) {
        var statusElement = event.statusElement(status, targetEventName);

        pages.base.scrollIntoView(statusElement);

        expect(statusElement.isDisplayed()).toBeTruthy();
    };

    return event;
})();
