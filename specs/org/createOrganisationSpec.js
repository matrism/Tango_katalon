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
            expect(page.subPublisher.section.isDisplayed()).toBeTruthy();

            page.toggleHasSubPublisherOption(false);
            expect(page.subPublisher.section.isDisplayed()).toBeFalsy();
        });

        it(' Should add and remove - when available - the sub-publisher item', function () {
            var byCssRemoveButton = by.css('button[data-ng-click="showDeleteSubPublisherModal($index)"]');

            page.toggleHasSubPublisherOption(true);
            expect(page.subPublisher.repeater.count()).toBe(1);

            expect(page.getSubPublisherByIndex(0).element(byCssRemoveButton).isDisplayed()).toBeFalsy();

            page.addSubPublisher();
            expect(page.subPublisher.repeater.count()).toBe(2);
            expect(page.getSubPublisherByIndex(0).element(byCssRemoveButton).isDisplayed()).toBeFalsy();
            expect(page.getSubPublisherByIndex(1).element(byCssRemoveButton).isDisplayed()).toBeTruthy();

            page.removeSubPublisher(1, false);
            expect(page.subPublisher.repeater.count()).toBe(2);

            page.removeSubPublisher(1, true);
            expect(page.subPublisher.repeater.count()).toBe(1);
        });
    });
});