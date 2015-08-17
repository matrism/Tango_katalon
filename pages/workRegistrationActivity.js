'use strict';

var pph = require('../helpers/pph');

pages.workRegistrationActivity = exports;

exports.activitiesGroupContainers = function() {
    return element.all(by.repeater(
        'activitiesGroup in dataHolder.groupedActivities'
    ));
};

exports.activitiesGroupRegistrationNameBinding = function(i) {
    return exports.activitiesGroupContainers().get(i).element(by.binding(
        ' activitiesGroup.registration.name '
    ));
};

exports.activitiesGroupRegistrationName = function(i) {
    var element = exports.activitiesGroupRegistrationNameBinding(i);
    pages.base.scrollIntoView(element);
    return pph.trim(element.getText());
};

exports.validateActivitiesGroupRegistrationName = function(i, value) {
    expect(exports.activitiesGroupRegistrationName(i)).toBe(value);
};

exports.toggleActivitiesGroupContainer = function(i) {
    var element = exports.activitiesGroupContainers().get(i);
    pages.base.scrollIntoView(element);
    return element.click();
};

exports.activityRows = function(groupIndex) {
    return exports.activitiesGroupContainers().get(groupIndex).all(by.repeater(
        'activity in activitiesGroup.activities'
    ));
};

exports.scheduledActivityStatusLabel = function(groupIndex, i) {
    return exports.activityRows(groupIndex).get(i).element(by.cssContainingText(
        '.label', 'Scheduled'
    ));
};

exports.expectActivityToBeScheduled = function(groupIndex, i) {
    var elementRow = exports.activityRows(groupIndex).get(i),
        element = exports.scheduledActivityStatusLabel(groupIndex, i);

    pages.base.scrollIntoView(elementRow);

    expect(element.isDisplayed()).toBeTruthy();
};
