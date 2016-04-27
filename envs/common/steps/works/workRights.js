'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.workRights = exports;

exports.expectRightsDataToBeDisplayed = function() {
    it('Expect Rights data to be displayed', function() {
        pages.workRights.expectRightsDataToBeDisplayed();
    });
};

exports.validateSigningTerritoryCode = function(groupIndex, value) {
    it(
        'Rights group #' + (groupIndex + 1) + ' - ' +
        'Validate signing territory code (' + value + ')', function() {
            pages.workRights.validateSigningTerritoryCode(groupIndex, value);
        }
    );
};

exports.validateControlTerritories = function(groupIndex, values) {
    it(
        'Rights group #' + (groupIndex + 1) + ' - ' +
        'Validate control territories (' + values.join(', ') + ')', function() {
            pages.workRights.validateControlTerritories(groupIndex, values);
        }
    );
};

exports.validateSharesSummary = function(groupIndex, values) {
    it(
        'Rights group #' + (groupIndex + 1) + ' - ' +
        'Validate shares summary (' + values.join(', ') + ')', function() {
            pages.workRights.validateSharesSummary(groupIndex, values);
        }
    );
};

exports.toggleRightsGroupContainer = function(groupIndex) {
    it('Toggle rights group container #' + (groupIndex + 1), function() {
        pages.workRights.toggleRightsGroupContainer(groupIndex);
    });
};

exports.validateCreatorRole = function(groupIndex, row, value) {
    it(
        'Rights group #' + (groupIndex + 1) + ', ' + 'row #' + (row + 1) + ' - ' +
        'Validate creator role (' + value + ')', function() {
            pages.workRights.validateCreatorRole(groupIndex, row, value);
        }
    );
};

exports.validateCreatorNameUsingPersonSlot = function(groupIndex, row, slotNumber) {
    it(
        'Rights group #' + (groupIndex + 1) + ', ' + 'row #' + (row + 1) + ' - ' +
        'Validate creator name using person slot #' + (slotNumber + 1), function() {
            pages.workRights.validateCreatorName(
                groupIndex, row, hash.personSlots[slotNumber].name
            );
        }
    );
};

exports.validateCreatorSocieties = function(groupIndex, row, values) {
    it(
        'Rights group #' + (groupIndex + 1) + ', ' + 'row #' + (row + 1) + ' - ' +
        'Validate creator societies (' + values.join(', ') + ')', function() {
            pages.workRights.validateCreatorSocieties(groupIndex, row, values);
        }
    );
};

exports.validateCreatorContribution = function(groupIndex, row, value) {
    it(
        'Rights group #' + (groupIndex + 1) + ', ' + 'row #' + (row + 1) + ' - ' +
        'Validate creator contribution (' + value + ')', function() {
            pages.workRights.validateCreatorContribution(groupIndex, row, value);
        }
    );
};

exports.validatePublisherRole = function(groupIndex, row, value) {
    it(
        'Rights group #' + (groupIndex + 1) + ', ' + 'row #' + (row + 1) + ' - ' +
        'Validate publisher role (' + value + ')', function() {
            pages.workRights.validatePublisherRole(groupIndex, row, value);
        }
    );
};

exports.validatePublisherName = function(groupIndex, row, value) {
    it(
        'Rights group #' + (groupIndex + 1) + ', ' + 'row #' + (row + 1) + ' - ' +
        'Validate publisher name (' + value + ')', function() {
            pages.workRights.validatePublisherName(groupIndex, row, value);
        }
    );
};

exports.validatePublisherSocieties = function(groupIndex, row, values) {
    it(
        'Rights group #' + (groupIndex + 1) + ', ' + 'row #' + (row + 1) + ' - ' +
        'Validate publisher societies (' + values.join(', ') + ')', function() {
            pages.workRights.validatePublisherSocieties(groupIndex, row, values);
        }
    );
};

exports.validatePartyShares = function(groupIndex, row, values) {
    it(
        'Rights group #' + (groupIndex + 1) + ', ' + 'row #' + (row + 1) + ' - ' +
        'Validate party shares (' + values.join(', ') + ')', function() {
            pages.workRights.validatePartyShares(groupIndex, row, values);
        }
    );
};

exports.validateWcmTotalShares = function(groupIndex, values) {
    it(
        'Rights group #' + (groupIndex + 1) + ' - ' +
        'Validate WCM total shares (' + values.join(', ') + ')',
        function() {
            pages.workRights.validateWcmTotalShares(groupIndex, values);
        }
    );
};

pageStep('Expect no errors in rights generation');
