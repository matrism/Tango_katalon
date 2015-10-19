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

        nameElement.click();

        pages.base.closeCurrentTabAndSwitchTo(0);

        return pages.base.waitForAjax();
    };

    activityGroup.toggleBlind = function(targetGroupName) {
        var target = activityGroup.targets[targetGroupName || 'latest'];

        pages.base.scrollIntoView(target.container);

        return target.container.click();
    };

    activityGroup.eventContainer = function(methodSpecifier) {
        methodSpecifierCall(activityGroup.eventContainer, methodSpecifier || 'all');
    };

    activityGroup.eventContainer.all = function() {
        var target = activityGroup.targets.latest;

        return target.container.element(by.repeater(
            'activity in activitiesGroup.activities'
        ));
    };

    activityGroup.validateEventCount = function(count) {
        expect(activityGroup.eventContainer().count()).toBe(count);
    };

    activityGroup.anyEventStatusElement = function(status) {
        var target = activityGroup.targets.latest;

        return target.container.element(by.cssContainingText('.label', status));
    };

    activityGroup.expectAnyEventStatusToBe = function(status) {
        var statusElement = activityGroup.anyEventStatusElement(status);

        pages.base.scrollIntoView(statusElement);

        expect(statusElement.isDisplayed()).toBeTruthy();
    };

    return activityGroup;
})();
