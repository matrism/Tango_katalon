'use strict';

var pph = require('../helpers/pph'),
    methodSpecifierCall = require('../helpers/methodSpecifierCall');

pages.organisationRegistrationStack = exports;

exports.works = (function() {
    var works = {};

    works.targets = {};

    works.container = function(methodSpecifier) {
        return methodSpecifierCall(works.container, methodSpecifier || 'all');
    };

    works.container.all = function() {
        return element.all(by.repeater('work in processorsContext.works.getAll()'));
    };

    works.container.title = function(title) {
        return works.container().all(by.cssContainingText(
            '.ng-binding', title
        )).all(by.xpath('ancestor::li[1]')).first();
    };

    works.find = function(methodSpecifier, targetWorkName) {
        var container = works.container(methodSpecifier),
            resultPromise = pages.base.scrollIntoView(container);

        works.targets.latest = {
            methodSpecifier: methodSpecifier,
            container: container
        };

        if(targetWorkName) {
            works.targets[targetWorkName] = works.targets.latest;
        }

        return resultPromise;
    };

    works.validationErrorsElement = function(targetWorkName) {
        var target = works.targets[targetWorkName || 'latest'];

        return target.container.$(
            '[data-ng-switch="work.validation_status"] [data-ng-switch-when]'
        );
    };

    works.validateErrors = function(errors, targetWorkName) {
        var errorsElement = works.validationErrorsElement(targetWorkName),
            ngSwitchWhen;

        if(errors === 'none') {
            expect(errorsElement.isPresent()).toBeFalsy();
        }
        else {
            pages.base.scrollIntoView(errorsElement);

            ngSwitchWhen = {
                'critical': 'CRITICAL',
                'non-critical': 'NON_CRITICAL'
            }[errors];

            expect(pph.matchesCssSelector(
                errorsElement, '[data-ng-switch-when="' + ngSwitchWhen + '"]'
            )).toBeTruthy();
        }
    };

    works.idElement = function(targetWorkName) {
        var target = works.targets[targetWorkName || 'latest'];

        return target.container.element(by.binding(
            ' workUtility.makeFullCode(work.work_code) '
        ));
    };

    works.id = function(targetWorkName) {
        var idElement = works.idElement(targetWorkName);

        pages.base.scrollIntoView(idElement);

        return pph.trim(idElement.getText());
    };

    works.validateId = function(id, targetWorkName) {
        expect(works.id(targetWorkName)).toBe(id);
    };

    works.statusElement = function(targetWorkName) {
        var target = works.targets[targetWorkName || 'latest'];

        return target.container.$(
            '[data-ng-class="getStatusClass(work.stack_status)"]'
        );
    };

    works.status = function(targetWorkName) {
        var statusElement = works.statusElement(targetWorkName);

        pages.base.scrollIntoView(statusElement);

        return pph.trim(statusElement.getText());
    };

    works.validateStatus = function(status, targetWorkName) {
        expect(works.status(targetWorkName)).toBe(status);
    };

    works.validateAbsence = function(methodSpecifier) {
        var container = works.container(methodSpecifier);

        expect(container.isPresent().then(null, function() {
            return false;
        })).toBeFalsy();
    };

    works.waitUntilWorkDisappears = function(targetWorkName) {
        var container = works.targets[targetWorkName || 'latest'].container;

        return browser.wait(function() {
            pages.base.refreshPage();

            return container.isPresent().then(function(isPresent) {
                if(isPresent) {
                    pages.base.scrollIntoView(container);
                }

                return !isPresent;
            }, function() {
                return true;
            });
        });
    };

    return works;
})();

exports.registrationRun = (function() {
    var registrationRun = {};

    registrationRun.stackHeader = function() {
        return $('#ACTIVITY-HEADER');
    };

    registrationRun.executeButton = function() {
        return registrationRun.stackHeader().element(by.cssContainingText(
            'button', 'Execute Registration Run'
        ));
    };

    registrationRun.execute = function() {
        var button = registrationRun.executeButton();

        pages.base.scrollIntoView(button);

        return button.click().then(function() {
            pages.base.waitUntilModalAnimationFinishes();
        });
    };

    registrationRun.confirmationDialog = function() {
        return pages.base.modalDialog();
    };

    registrationRun.proceedButton = function() {
        return registrationRun.confirmationDialog().element(by.cssContainingText(
            'button', 'OK'
        ));
    };

    registrationRun.proceed = function() {
        var button = registrationRun.proceedButton();

        pages.base.scrollIntoView(button);

        return button.click();
    };

    return registrationRun;
})();

exports.registrationRun.startSuccessMessage = (function() {
    var startSuccessMessage = {};

    startSuccessMessage.element = function() {
        return element(by.cssContainingText(
            '.alert-success', 'You have successfully initiated a Registration Run'
        ));
    };

    startSuccessMessage.waitUntilDisplayed = function() {
        browser.wait(protractor.ExpectedConditions.visibilityOf(
            startSuccessMessage.element()
        ));
    };

    startSuccessMessage.dialog = function() {
        return pages.base.modalDialog();
    };

    startSuccessMessage.dismissButton = function() {
        return startSuccessMessage.dialog().element(by.cssContainingText(
            'button', 'OK'
        ));
    };

    startSuccessMessage.dismiss = function() {
        var dismissButton = startSuccessMessage.dismissButton();

        pages.base.scrollIntoView(dismissButton);

        return dismissButton.click();
    };

    return startSuccessMessage;
})();
