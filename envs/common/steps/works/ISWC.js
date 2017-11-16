'use strict';

//var pageStep = require('../../../../helpers/basicPageStep');

steps.ISWC = exports;


exports.expectSaveButtonToBeDisabled = function(value) {
    it('Expect Save button to be Disabled', function() {
        var el=element(by.css('div[tg-modular-edit-id="iswcReferences"] button[data-ng-click="tgModularViewMethods.save()"].disabled'));
        expect(el.isPresent()).toBeTruthy();
    });

};

exports.expectSaveButtonToBeEnabled = function() {
    it('Expect Save button to be Enabled', function() {
        var el=element(by.css('div[tg-modular-edit-id="iswcReferences"] button[data-ng-click="tgModularViewMethods.save()"]'));
        expect(el.isPresent()).toBeTruthy();
    });

};

exports.validateISWCPrimaryNoHeader = function(value) {
    it('Validate Primary ISWC Code', function() {
        var el=element(by.css('div[tg-work-header-id="WorkViewHeader"] .cf-col-2:nth-child(6) .cf-col:nth-child(3)>div>div:nth-child(1)'));

        el.getText().then(function(result){
            var str=result.replace(/\s+/g, '');
            console.log(str);
            expect(str).toBe(value);
        });

    });

};

exports.validateISWCPopup = function(value) {
    var el=element(by.css('div[tg-work-header-id="WorkViewHeader"] [ng-show="__iswc.popup"]'));
    var el2=element(by.css('div[tg-work-header-id="WorkViewHeader"] .cf-col-2:nth-child(6) .cf-col:nth-child(3)>div>div:nth-child(1)'));

    steps.base.hoverElement(
        "Hover ISWC code to view the popup List",
        el2
    );
    it('Validate ISWC Code popup list ' + value, function() {
        expect(el.getText()).toContain(value);
    });


};

exports.editValidateISWC = function(value,row) {
    it('Validate ISWC Code in Edit view', function() {

                //var ISWCcode = [], ISWCcomb;

                    for (var i=0;i<row;i++) {
                        pages.work.editISWCfield(i).getAttribute("value").then(function(result){
                                console.log(result);
                                expect(value).toContain(result);

                        });

                    }


    });

};

exports.deleteISWCcode = function(row) {
    it('Delete ISWC code', function() {
        var el=element(by.css('div[tg-modular-edit-id="iswcReferences"] [name="IswcForm_'+ row + '"] [ng-click="confirmIswcRemove(tgModularEditModel, iswc, $viewForm);"]'));
        var el2 = element(by.css('.modal'));

        asAlways(
            el,
            'scrollIntoView', 'click', 'waitForAjax'
        );
        el2.element(by.cssContainingText('button', 'Yes')).click();
        browser.wait(ExpectedConditions.invisibilityOf(el2));

    });
};

exports.searchISWC = function(value) {
    it('Enter Search ISWC code - ' + value, function() {
        pages.work.enterWorkSearchTerms(value);
        browser.sleep(1000);
        steps.base.waitForAjax();
    });
};

exports.validateISWCSearchResult = function(value) {
    it('Validate ISWC Search Result - ' + value, function() {

    });
};


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

//pageStep('Expect no errors in rights generation');
