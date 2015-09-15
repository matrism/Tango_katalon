'use strict';

var steps_path = _tf_config._system_.path_to_steps,
    fnutils = require('../../helpers/fnutils'),
    using = fnutils.using;

require(steps_path + 'login');
require(steps_path + 'dataUtilities');

exports.beforeFeature = [
    [steps.login.itLogin],
];

exports.commonFeatureTags = ['royalties', 'royaltyUtilities', 'smokeTest'];

exports.feature = [
    {
        name: 'Navigate across every royalty utility menu item and check first form fields',
        tags: ['royaltyUtilitiesSmokeTestNavigation', 'royaltyUtilitiesSmokeTestDataLoading', ],
        steps: function () {
            using(steps.dataUtilities, function () {
                this.go();

                this.openMenuBoardItem(0, 'Royalty Utilities');

                this.openMenuBoardItem(1, 'Company Code');

                this.openMenuBoardItemByIndex(2, 0);

                this.openMenuBoardItemByIndex(3, 0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem(1, 'Statement Group');

                this.openMenuBoardItemByIndex(2, 0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem(1, 'Royalty Period Data');

                this.openMenuBoardItemByIndex(2, 0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem(1, 'Royalty Processing Territory');

                this.openMenuBoardItemByIndex(2, 0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem(1, 'Society Royalty Allocation');

                this.openMenuBoardItemByIndex(2, 0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem(1, 'Income File Type');

                this.openMenuBoardItemByIndex(2, 0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem(1, 'Nordic Processing');

                this.openMenuBoardItemByIndex(2, 0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem(1, 'Deal Signing Territory');

                this.openMenuBoardItemByIndex(2, 0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');

                this.openMenuBoardItem(1, 'Company Set');

                this.openMenuBoardItemByIndex(2, 0);

                this.expectFormControlLabelToBeVisible(0);
                this.expectFormControlGroupDataNotToBeBlank(0);

                this.navigateBreadcrumb('Royalty Utilities');
            });
        }
    }
];