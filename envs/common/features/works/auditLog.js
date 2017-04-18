'use strict';

var randomString = random.string.makeMemoizedGenerator(),
    using = fnutils.using;

exports.id = '1e729eb6-7585-42d0-b517-ca72b723527b';
exports.featureName = 'Works Audit Log';

exports.commonFeatureTags = [
    'workAuditLogRegression',
    'workAuditLog',
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
        steps: criticalScenario(() => {
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
        })
    },
    {
        name: 'Create a work',
        tags: [],
        steps: criticalScenario(() => {
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
            steps.work.findCurrentlyOpenWorkId()
        })
    },
    {
        name: 'Validate Last Update Date and go to audit log page',
        tags: [],
        steps: criticalScenario(() => {
            var today = new Date(),
                currentDate = today.getFullYear() + '-' +
                    ('0' + (today.getMonth() + 1)).slice(-2) + '-' +
                    ('0' + (today.getDate())).slice(-2);
            steps.base.useEntityDataSlot('work', 0);
            using(steps.work, function () {
                this.goToWorkPage();
                this.validateLastUpdateDate(currentDate);
                this.clickOnLastUpdateDate();
                this.auditLog.validateHeaderTitle();
                this.auditLog.expectNoErrorMessage();

                steps.base.refreshPage();
                steps.searchSection.selectEntityType('Works');
                this.selectWorkSearchFilterTag(0, 'Title');
                this.enterWorkSearchTerms('TESTING AUDIT LOG');
                steps.base.sleep(200);
                steps.base.waitForAjax();
                this.clickWorkSearchMatch(Math.round(Math.random()*8));
                steps.base.waitForAjax();
                this.hoverPrimaryWorkTitleHeading();
                this.editWorkTitles();
                this.enterPrimaryWorkTitle('TEST WORK GRINCH ' + randomString(0));
                this.saveWorkTitles();
                this.validateLastUpdateDate(currentDate);
            });
        })
    }
];
