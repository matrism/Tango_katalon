'use strict';

var pph = require('../../../../helpers/pph'),
    callResultOrValue = require('../../../../helpers/callResultOrValue'),
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

    activityGroup.container.firstWithRecipientName = function(name) {
        return element.all(
            by.cssContainingText(
                '[data-ng-repeat="activitiesGroup in dataHolder.groupedActivities"]', name
            )
         ).first();
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

    events.container.firstWithFileName = function(name) {
        name = callResultOrValue(name);
        return events.containerOfDetails(
            element.all(by.cssContainingText(
                '[data-ng-repeat-start="activity in activitiesGroup.activities"]+tr', name
            )).first()
        );
    };

    events.containerOfDetails  = function(detailsElement) {
        return detailsElement.element(by.xpath('preceding-sibling::tr[1]'));
    }

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

    events.getAckCreationDate = function() {
        var target = events.targets.latest;
        return target.detailsContainer.element(
            by.binding('activity.created_date | tgIsoDate')
        ).getText();
    };

    events.getInitiatedBy = function() {
        var target = events.targets.latest;
        return target.detailsContainer.element(
            by.binding('activity.initiated_by')
        ).getText();
    };

    events.getMessage = function() {
        var target = events.targets.latest;
        return target.detailsContainer.element(
            by.binding('::message.message_text')
        ).getText();
    };

    events.getRecordType = function() {
        var target = events.targets.latest;
        return target.detailsContainer.element(
            by.binding('::message.record_type')
        ).getText();
    };

    events.getMessageLevel = function() {
        var target = events.targets.latest;
        return target.detailsContainer.element(
            by.binding('::getMessageLevelLabel(message.message_level)')
        ).getText();
    };

    events.getValidationNumber = function() {
        var target = events.targets.latest;
        return target.detailsContainer.element(
            by.binding('::message.validation_number')
        ).getText();
    };

    events.validateAckCreationDate = function(date) {
        expect(events.getAckCreationDate()).toBe(date);
    };

    events.validateInitiatedBy = function(value) {
        expect(events.getInitiatedBy()).not.toBe(null);
    };

    events.validateMessage = function(value) {
        expect(events.getMessage()).toBe(value);
    };

    events.validateRecordType = function(value) {
        expect(events.getRecordType()).toBe(value);
    };

    events.validateMessageLevel = function(value) {
        expect(events.getMessageLevel()).toBe(value);
    };

    events.validateValidationNumber = function(value) {
        expect(events.getValidationNumber()).toBe(value);
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
        var element = events.targets.latest.container;
        pages.base.scrollIntoView(element);
        return element.click();
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
