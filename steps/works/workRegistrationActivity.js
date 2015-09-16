'use strict';

steps.workRegistrationActivity = exports;

exports.validateActivitiesGroupRegistrationName = function(i, value) {
    it(
        'Activities group #' + (i + 1) + ' - ' +
        'Validate registration name (' + value + ')', function() {
            pages.workRegistrationActivity.validateActivitiesGroupRegistrationName(
                i, value
            );
        }
    );
};

exports.toggleActivitiesGroupContainer = function(i) {
    it('Activities group #' + (i + 1) + ' - Toggle container', function() {
        pages.workRegistrationActivity.toggleActivitiesGroupContainer(i);
    });
};

exports.expectActivityToBeScheduled = function(groupIndex, i) {
    it(
        'Activities group #' + (groupIndex + 1) + ', activity #' + (i + 1) + ' - ' +
        'Expect activity to be scheduled', function() {
            pages.workRegistrationActivity.expectActivityToBeScheduled(groupIndex, i);
        }
    );
};
