'use strict';

var using = fnutils.using;

exports.id = '8356e1e0-0625-4696-80b9-260e2839e9fd';

exports.commonFeatureTags = [
    'previewRegistrationRunRegression',
    'previewRegistrationRun',
    'orgs',
    'regression'
];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Preview Reg run and validate Errors',
        tags: ['organisationPreviewRegistrationRun'],
        steps: function () {
            steps.searchSection.accessSavedOrganisationByName('BMI');
            steps.organisation.goToPreviewRegistrationRunTab();

            using(steps.organisation, function() {
                //primary
                this.checkStatusNumber();
                this.scrollRegRunPage();
                this.listWorkDetails();
                this.checkFilters();
                this.checkRunTypeFilters();
                this.downloadCrFile();
                this.validateCrFile('primary', 'BMI');
                // validation errors
                this.viewPrimaryValidationErrors();
                this.scrollPrimaryValidationPage();
                this.listErrorPrimaryValidationDetails();
                this.checkPrimaryValidationErrorsFilters();
                this.validateCriticalErrorsFilter();
                steps.base.scrollToBottom(20);
                this.validateNonCriticalErrorsFilter();
                this.validateErrorSortFilters();
                this.downloadCrFile();
                this.validatePrimaryErrorCrFile('error', 'BMI');
                this.backValidationErrors();
                //custom   CR_2013-09-15 CR_2013-10-01 CR_2013-06-15 CR_2013-10-15
                this.selectCustomRegistrationRun('CR_2200-05-15');
                this.executeRegistrationRunValidation('CR_2200-05-15');
                this.selectCustomRegistrationRun('CR_2013-09-15');
                this.checkStatusNumber();
                this.scrollRegRunPage();
                this.listWorkDetails();
                this.checkFilters();
                this.downloadCrFile();
                this.validateCrFile('custom', 'BMI');
                this.executeRegistrationRunValidation('CR_2013-09-15');
                this.checkValidationErrorsButton();
                // validation errors
                this.viewValidationErrors();
                this.scrollValidationPage();
                this.listErrorValidationDetails();
                this.checkValidationErrorsFilters();
                this.validateCriticalErrorsFilter();
                this.validateNonCriticalErrorsFilter();
                this.validateErrorSortFilters();
                this.downloadCrFile('error');
                this.validateErrorCrFile('errorCustom', 'BMI');
                this.backValidationErrors('custom');
            });
        }
    }
];
