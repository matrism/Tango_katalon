var CreateOrganisation = require('./../../pages/createOrganisation.js');

describe(' Create Organisation E2E ::', function () {
    it(' Should load the page', function () {
        var page = new CreateOrganisation();
        page.get();
    });
});