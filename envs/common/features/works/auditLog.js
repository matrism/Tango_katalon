'use strict';

var random = require('../../../../helpers/random'),
    randomString = random.string.makeMemoizedGenerator(),
    fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using;

exports.commonFeatureTags = [
    'auditLogRegression',
    'auditLog',
    'works',
    'regression'
];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create person to use as creator',
        tags: [],
        steps: function() {
            _.times(1, function(i) {
                steps.person.useBlankPersonSlot(i);
                using(steps.newPerson, function () {
                    this.goToNewPersonPage();
                    this.enterLastName(
                        'TEST PERSON ' + (i + 1) + ' ' + randomString('person' + i)
                    );
                    this.enterAffiliatedSocietySearchTerms('ASCAP');
                    this.selectAffiliatedSocietySearchResultByIndex(0);
                    this.save();
                });
                steps.person.findInternalIpiNumber();
           });
        }
    },
    {
        name: 'Go to work audit log page',
        tags: [],
        steps: function () {
            steps.base.useBlankEntityDataSlot('work', 0);
            using(steps.newWork, function () {
                this.goToNewWorkPage();
                this.enterPrimaryWorkTitle(
                    'TESTING AUDIT LOG ' + randomString('work')
                );
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterCreatorContribution(0, 100);
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();
            });
            using(steps.work, function () {
                var today = new Date(),
                    currentDate = today.getFullYear() + "-" + 
                        ("0" + (today.getMonth() + 1)).slice(-2) + "-" + 
                        today.getDate();
                this.validateLastUpdateDate(currentDate);
                this.clickOnLastUpdateDate();

                steps.base.refreshPage();
                steps.searchSection.selectEntityType('Works');
                this.selectWorkSearchFilterTag(0, 'Title');
                this.enterWorkSearchTerms(Math.ceil(Math.random()*5));
                steps.base.sleep(200);
                steps.base.waitForAjax();
                this.clickWorkSearchMatch(Math.round(Math.random()*8));
                steps.base.waitForAjax();
                this.hoverPrimaryWorkTitleHeading();
                this.editWorkTitles();
                this.saveWorkTitles();
                this.validateLastUpdateDate(currentDate);
            });
        }
    }
];
