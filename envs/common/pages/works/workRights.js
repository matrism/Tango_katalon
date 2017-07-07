'use strict';

var promise = protractor.promise,
    pph = require('../../../../helpers/pph');

pages.workRights = exports;

exports.rightsGroupContainers = function() {
    return $('.accordion').all(by.repeater(
        'genericRights in dataHolder.groupedWorkRights.generic ' +
        '| filter:filterTerritoriesRights'
    ));
};

exports.expectRightsDataToBeDisplayed = function() {
    expect(exports.rightsGroupContainers().first().isDisplayed()).toBeGreaterThan(0);
};

exports.signingTerritoryCodeBinding = function(groupIndex) {
    return exports.rightsGroupContainers().get(groupIndex).element(by.binding(
        'signingTerritoryGroup.alphanumeric_code'
    ));
};

exports.signingTerritoryCode = function(groupIndex) {
    var element = exports.signingTerritoryCodeBinding(groupIndex);
    pages.base.scrollIntoView(element);
    return pph.trim(element.getText());
};

exports.validateSigningTerritoryCode = function(groupIndex, value) {
    expect(exports.signingTerritoryCode()).toBe(value);
};

exports.controlTerritoryBindings = function(groupIndex) {
    return exports.rightsGroupContainers().get(groupIndex).all(by.binding(
        'territoryGroup.territory.title'
    ));
};

exports.controlTerritories = function(groupIndex) {
    var elements = exports.controlTerritoryBindings(groupIndex);

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return pph.trim(element.getText());
    });
};

exports.validateControlTerritories = function(groupIndex, values) {
    var territories = exports.controlTerritories();

    promise.when(values).then(function(values) {
        values.forEach(function(value) {
            expect(territories).toContain(value);
        });
    });
};

exports.sharesSummaryColumns = function(groupIndex) {
    return exports.rightsGroupContainers().get(groupIndex).all(by.repeater(
        'type in dataHolder.ownershipDetails.types | filter:{ visible:true }'
    ));
};

exports.sharesSummaryBindings = function(groupIndex) {
    return exports.sharesSummaryColumns(groupIndex).$$('.ng-binding')
};

exports.sharesSummary = function(groupIndex) {
    var elements = exports.sharesSummaryBindings(groupIndex);

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return pph.trim(element.getText());
    });
};

exports.validateSharesSummary = function(groupIndex, values) {
    expect(exports.sharesSummary(groupIndex)).toEqual(values);
};

exports.toggleRightsGroupContainer = function(i) {
    var element = exports.rightsGroupContainers().get(i);

    pages.base.scrollIntoView(element);

    return element.click().then(function() {
        pages.base.waitForAjax();
    });
};

exports.rightsGroupTableRows = function(groupIndex) {
    return exports.rightsGroupContainers().get(groupIndex).$$('.rights-table-row');
};

exports.creatorRoleBinding = function(groupIndex, row) {
    return exports.rightsGroupTableRows(groupIndex).get(row).all(
        by.binding('::rightsCreator.role')
    ).filter(function(element) {
        return element.isDisplayed();
    }).get(0);
};

exports.creatorRole = function(groupIndex, row) {
    var element = exports.creatorRoleBinding(groupIndex, row);
    pages.base.scrollIntoView(element);
    return element.getText();
};

exports.validateCreatorRole = function(groupIndex, row, value) {
    expect(exports.creatorRole(groupIndex, row)).toBe(value);
};

exports.creatorNameBinding = function(groupIndex, row) {
    return exports.rightsGroupTableRows(groupIndex).get(row).all(
        by.binding('::rightsCreator.name')
    ).filter(function(element) {
        return element.isDisplayed();
    }).get(0);
};

exports.creatorName = function(groupIndex, row) {
    var element = exports.creatorNameBinding(groupIndex, row);
    pages.base.scrollIntoView(element);
    return element.getText();
};

exports.validateCreatorName = function(groupIndex, row, value) {
    expect(exports.creatorName(groupIndex, row)).toBe(value);
};

exports.creatorContributionBinding = function(groupIndex, row) {
    return exports.rightsGroupTableRows(groupIndex).get(row).element(by.binding(
        '::shareDisplayFormat(rightsCreator.contribution, \'–\')'
    ));
};

exports.creatorContribution = function(groupIndex, row) {
    var element = exports.creatorContributionBinding(groupIndex, row);
    pages.base.scrollIntoView(element);
    return element.getText();
};

exports.creatorSocietiesBinding = function(groupIndex, row) {
    return exports.rightsGroupTableRows(groupIndex).get(row).element(by.binding(
        '::rightsCreator.societies.names.join(\', \')'
    ));
};

exports.creatorSocieties = function(groupIndex, row) {
    var element = exports.creatorSocietiesBinding(groupIndex, row);

    pages.base.scrollIntoView(element);

    return pph.trim(element.getText()).then(function(value) {
        var values = value.split(', ');

        if(values.length === 1 && values[0] === '') {
            values = [];
        }

        return values;
    });
};

exports.validateCreatorSocieties = function(groupIndex, row, values) {
    expect(exports.creatorSocieties(groupIndex, row)).toEqual(values);
};

exports.validateCreatorContribution = function(groupIndex, row, value) {
    expect(exports.creatorContribution(groupIndex, row)).toBe(value);
};

exports.publisherRoleBinding = function(groupIndex, row) {
    return exports.rightsGroupTableRows(groupIndex).get(row).element(by.binding(
        '::rightsPublisher.role'
    ));
};

exports.publisherRole = function(groupIndex, row) {
    var element = exports.publisherRoleBinding(groupIndex, row);
    pages.base.scrollIntoView(element);
    return element.getText();
};

exports.validatePublisherRole = function(groupIndex, row, value) {
    expect(exports.publisherRole(groupIndex, row)).toBe(value);
};

exports.publisherNameBinding = function(groupIndex, row) {
    return exports.rightsGroupTableRows(groupIndex).get(row).all(
        by.binding('::rightsPublisher.name')
    ).filter(function(element) {
        return element.isDisplayed();
    }).get(0);
};

exports.publisherName = function(groupIndex, row) {
    var element = exports.publisherNameBinding(groupIndex, row);
    pages.base.scrollIntoView(element);
    return element.getText();
};

exports.validatePublisherName = function(groupIndex, row, value) {
    expect(pph.toUpperCase(exports.publisherName(groupIndex, row))).toBe(
        value.toUpperCase()
    );
};

exports.publisherSocietiesBinding = function(groupIndex, row) {
    return exports.rightsGroupTableRows(groupIndex).get(row).element(by.binding(
        '::rightsPublisher.societies.names.join(\', \')'
    ));
};

exports.publisherSocieties = function(groupIndex, row) {
    var element = exports.publisherSocietiesBinding(groupIndex, row);

    pages.base.scrollIntoView(element);

    return pph.trim(element.getText()).then(function(value) {
        var values = value.split(', ');

        if(values.length === 1 && values[0] === '') {
            values = [];
        }

        return values;
    });
};

exports.validatePublisherSocieties = function(groupIndex, row, values) {
    expect(exports.publisherSocieties(groupIndex, row)).toEqual(values);
};

exports.partyShareBindings = function(groupIndex, row) {
    return (
        exports.rightsGroupTableRows(groupIndex).get(row)
            .$$('.rights-share .ng-binding')
    );
};

exports.partyShares = function(groupIndex, row) {
    var elements = exports.partyShareBindings(groupIndex, row);

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return pph.trim(element.getText());
    });
};

exports.validatePartyShares = function(groupIndex, row, values) {
    expect(exports.partyShares(groupIndex, row)).toEqual(values);
};

exports.wcmTotalSharesRow = function(groupIndex) {
    return exports.rightsGroupContainers().get(groupIndex).$(
        'tr[watched-init="wcts = territoryGroup.rights.totalWcmCrtShares;"]'
    )
};

exports.wcmTotalShareBindings = function(groupIndex) {
    return exports.wcmTotalSharesRow(groupIndex).all(by.repeater(
        'type in dataHolder.ownershipDetails.types | filter:{ visible:true, summary:false }'
    )).$$('.ng-binding');
};

exports.wcmTotalShares = function(groupIndex) {
    var elements = exports.wcmTotalShareBindings(groupIndex);

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return pph.trim(element.getText());
    });
};

exports.validateWcmTotalShares = function(groupIndex, values) {
    expect(exports.wcmTotalShares(groupIndex)).toEqual(values);
};

exports.expectNoErrorsInRightsGeneration = function () {
    expect($$('.rights-table .text-error').count()).toEqual(0);
};
