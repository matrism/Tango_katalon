'use strict';

var fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using;

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['royaltyProcessing', 'dataUtilities', 'royaltyUtilitiesSmoke', 'smoke'];

exports.feature = [
    {
        name: 'Navigate across every royalty utility menu item and check first form fields',
        tags: ['smoke', 'sanity', 'dataUtilitiesSmoke', 'dataUtilitiesSanity'],
        steps: function () {
            using(steps.dataUtilities, function () {
                this.go();

                this.openMenuBoardItem('Royalty Utilities');

                this.openMenuBoardItem('Company Code');

                this.openMenuBoardItemByIndex(0);

                this.openMenuBoardItemByIndex(0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem('Statement Group');

                this.openMenuBoardItemByIndex(0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem('Royalty Period Data');

                this.openMenuBoardItemByIndex(0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem('Royalty Processing Territory');

                this.openMenuBoardItemByIndex(0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem('Society Royalty Allocation');

                this.openMenuBoardItemByIndex(0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem('Income File Type');

                this.openMenuBoardItemByIndex(0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem('Nordic Processing');

                this.openMenuBoardItemByIndex(0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem('Deal Signing Territory');

                this.openMenuBoardItemByIndex(0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem('Company Set');

                this.openMenuBoardItemByIndex(0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');
            });
        }
    }
];
