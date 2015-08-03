'use strict';

pages.workRecordings = exports;

exports.recordingContainers = function() {
    return $$('.work-recordings-table-tr-wrap');
};

exports.recordingContainer = function(i) {
    return exports.recordingContainers().get(i);
};

exports.recordingNameBindings = function() {
    return exports.recordingContainers().all(
        by.binding('recording.title')
    );
};

exports.recordingNames = function() {
    var elements = exports.recordingNameBindings();

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return element.getText();
    });
};

exports.validateRecordingNames = function(values) {
    var names = exports.recordingNames();

    values.forEach(function(value) {
        expect(names).toContain(value);
    });
};

exports.artistNameBindings = function() {
    return exports.recordingContainers().all(
        by.binding('recording.artist.display_name')
    );
};

exports.artistNames = function() {
    var elements = exports.artistNameBindings();

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return element.getText();
    });
};

exports.validateArtistNames = function(values) {
    var names = exports.artistNames();

    values.forEach(function(value) {
        expect(names).toContain(value);
    });
};

exports.recordingDurationBindings = function() {
    return exports.recordingContainers().all(
        by.binding('secondsToTime(recording.duration)')
    );
};

exports.recordingDurations = function() {
    var elements = exports.recordingDurationBindings();

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return element.getText();
    });
};

exports.validateRecordingDurations = function(values) {
    var durations = exports.recordingDurations();

    values.forEach(function(value) {
        expect(durations).toContain(value);
    });
};
