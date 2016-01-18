'use strict';

var fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using;

exports.beforeFeature = function () {
    steps.login.itLogin();
    steps.searchSection.accessSavedOrganisationByName('BMI');
};

exports.commonFeatureTags = ['orgs', 'previewRegRun'];

exports.feature = [
    {
        name: 'Preview Reg run and validate Errors',
        tags: ['organisationPreviewRegistrationRun'],
        steps: function () {
            steps.organisation.goToPreviewRegistrationRunTab();
            //primary
            using(steps.organisation, function() {
                //primary
                this.checkStatusNumber();
                this.scrollRegRunPage();
                this.listWorkDetails();
                this.checkFilters();
                this.checkRunTypeFilters();
                this.downloadCrFile();
                this.validateCrFile('primary');
                // validation errors
                this.viewPrimaryValidationErrors();
                this.scrollPrimaryValidationPage();
                this.listErrorPrimaryValidationDetails();
                this.checkPrimaryValidationErrorsFilters();
                this.validateCriticalErrorsFilter();
                this.validateNonCriticalErrorsFilter();
                this.validateErrorSortFilters();
                this.downloadCrFile();
                this.validatePrimaryErrorCrFile('error');
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
                this.validateCrFile('custom');
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
                this.validateErrorCrFile('error_custom');
                this.backValidationErrors('custom');
            });
        }
    }
];

