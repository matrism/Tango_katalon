'use strict';

var fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using;

exports.id = 'fabb5807-8264-4053-8797-26d451fb2e0c';

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['royaltyProcessing', 'dataUtilities', 'sanity', 'royaltyUtilitiesSanity'];

function checkSaveAndRevert (propName, propValue) {
    var propInitialValue;
    browser.sleep(5000);

    using(steps.dataUtilities, function () {
        var self = this;
        self.getProperty(propName).then(function(text){
            propInitialValue = (text || '').replace(/^(TAT_)+/, '');

            if (!propValue) {
                propValue = 'TAT_' + propInitialValue;
            }

            self.expectPropertyToBe(propName, propInitialValue);
            self.clickEditButton();
            self.editProperty(propName, propValue);
            self.clickCancelLink();

            self.expectPropertyToBe(propName, propInitialValue);
            self.clickEditButton();
            self.editProperty(propName, propValue);
            self.clickSaveLink();
            self.expectPropertyToBe(propName, propValue);

            self.clickEditButton();
            self.editProperty(propName, propInitialValue);
            self.clickSaveLink();
            self.expectPropertyToBe(propName, propInitialValue);
        });
    });
};

exports.feature = [
    {
        name: 'Edit DU data',
        tags: [],
        //steps: function () {
        steps: criticalScenario(() => {
            var argentinaItems = ['TEST',
                                    'WCM ARGENTINA ADMINISTRATIONS DEALS',
                                  'WCM ARGENTINA DIRECT FOREIGN DEALS',
                                  'WCM ARGENTINA LOCAL DEALS'];

            using(steps.dataUtilities, function () {
                this.go();

                this.openMenuBoardItem('Royalty Utilities');
                this.openMenuBoardItem('Company Code');
                this.openMenuBoardItem('Argentina');
                this.expectItemsToBe(argentinaItems);
                this.openMenuBoardItem(argentinaItems[0]);
                this.checkSaveAndRevert('VAT NO');

                this.navigateBreadcrumb('Royalty Utilities');
                this.openMenuBoardItem('Income Provider Xref Group');
                this.openMenuBoardItemByIndex(0);
                this.checkSaveAndRevert('Xref Group Name');

                this.navigateBreadcrumb('Royalty Utilities');
                this.openMenuBoardItem('Royalty Period Data');
                this.openMenuBoardItemByIndex(0);
                this.checkSaveAndRevert('Royalty Period Name');

                this.navigateBreadcrumb('Royalty Utilities');
                this.openMenuBoardItem('Royalty Processing Territory');
                this.openMenuBoardItemByIndex(0);
                this.checkSaveAndRevert('Finance System Name');

                this.navigateBreadcrumb('Royalty Utilities');
                this.openMenuBoardItem('Society Royalty Allocation');
                this.openMenuBoardItemByIndex(0);
                this.checkSaveAndRevert('CISAC Abbr');

                this.navigateBreadcrumb('Royalty Utilities');
                this.openMenuBoardItem('Society Royalty Allocation');
                this.openMenuBoardItemByIndex(0);
                this.checkSaveAndRevert('CISAC Abbr');

                this.navigateBreadcrumb('Royalty Utilities');
                this.openMenuBoardItem('Income File Type');
                this.openMenuBoardItemByIndex(0);
                this.checkSaveAndRevert('Income File Type Name');

                this.navigateBreadcrumb('Royalty Utilities');
                this.openMenuBoardItem('Nordic Processing');
                this.openMenuBoardItemByIndex(0);
                this.checkSaveAndRevert('RPT Name');

                this.navigateBreadcrumb('Royalty Utilities');
                this.openMenuBoardItem('Deal Signing Territory');
                this.openMenuBoardItemByIndex(0);
                this.checkSaveAndRevert('Deal Signing Territory Description');

                this.navigateBreadcrumb('Royalty Utilities');
                this.openMenuBoardItem('Company Set');
                this.openMenuBoardItemByIndex(0);
                this.checkSaveAndRevert('Company Set Name');
            });
        })
    }
];
