var CreateOrganisation = require('./../../pages/createOrganisation.js');

describe(' Create Organisation E2E ::', function () {
    var page;
    beforeEach(function () {
        page = new CreateOrganisation();
    });

    describe(' Sub-Publisher Relationships ::', function () {
        beforeEach(function () {
            page.get();
        });

        it(' Should toggle between yes and no', function () {
            page.toggleHasSubPublisherOption(true);
            page.toggleHasSubPublisherOption(false);
        });
    });
});