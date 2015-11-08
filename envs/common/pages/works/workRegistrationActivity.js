'use strict';

var pph = require('../../../../helpers/pph'),
    methodSpecifierCall = require('../../../../helpers/methodSpecifierCall'),
    ExpectedConditions = protractor.ExpectedConditions;

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

        target.container.click();

        return browser.wait(ExpectedConditions.visibilityOfAny(
            activityGroup.events.container()
        ));
    };

    return activityGroup;
})();

exports.activityGroup.events = (function() {
    var events = {};

    events.targets = {};

    events.containerFromChild = function(childElement) {
        return childElement.element(by.xpath(
            'ancestor::*[@data-ng-repeat-start="' +
                'activity in activitiesGroup.activities' +
            '"][1]'
        ));
    };

    events.container = function(methodSpecifier) {
        return methodSpecifierCall(events.container, methodSpecifier || 'all');
    };

    events.container.all = function() {
        var target = exports.activityGroup.targets.latest;

        return target.container.all(by.repeater(
            'activity in activitiesGroup.activities'
        )).filter(function(containerElement) {
            return containerElement.isDisplayed();
        });
    };

    events.container.first = function() {
        return events.container().first();
    };

    events.container.firstWithStatus = function(status) {
        return events.containerFromChild(
            events.container().all(by.cssContainingText(
                '.label', status
            )).first()
        );
    };

    events.detailsContainerOf = function(primaryContainer) {
        return primaryContainer.element(by.xpath('following-sibling::tr[1]'));
    };

    events.find = function(methodSpecifier) {
        var container = events.container(methodSpecifier),
            resultPromise = pages.base.scrollIntoView(container);

        events.targets.latest = {
            methodSpecifier: methodSpecifier,
            container: container,
            detailsContainer: events.detailsContainerOf(container)
        };

        return resultPromise;
    };

    events.validateEventCount = function(count) {
        expect(events.container().count()).toBe(count);
    };

    events.statusElement = function(status) {
        var target = events.targets.latest;

        return target.container.element(by.cssContainingText('.label', status));
    };

    events.validateStatus = function(status) {
        var statusElement = events.statusElement(status);

        pages.base.scrollIntoView(statusElement);

        expect(statusElement.isDisplayed()).toBeTruthy();
    };

    events.anyEventStatusElement = function(status) {
        var target = exports.activityGroup.targets.latest;

        return target.container.element(by.cssContainingText('.label', status));
    };

    events.waitUntilAnyEventStatusBecomes = function(status) {
        var statusElement = events.anyEventStatusElement(status);

        browser.wait(function() {
            browser.wait(function() {
                return statusElement.isPresent();
            });

            pages.base.scrollIntoView(statusElement);

            return pph.trim(statusElement.getText()).then(function(text) {
                if(text === status) {
                    return true;
                }

                pages.base.refreshPage();

                activityGroup.toggleBlind();

                return false;
            });
        });
    };

    events.toggleBlind = function() {
        return events.targets.latest.container.click();
    };

    events.fileNameElement = function() {
        var target = events.targets.latest;

        return target.detailsContainer.$('[data-ng-bind="activity.file_name"]');
    };

    events.storeFileNameInTestVariable = function(variableName) {
        var fileNameElement = events.fileNameElement();

        pages.base.scrollIntoView(fileNameElement);

        return pph.trim(fileNameElement.getText()).then(function(text) {
            hash.testVariables[variableName] = text;
        });
    };

    return events;
})();