function CreateOrganisation () {
    this.subPublisher = {
        yesButton: element.all(by.model('orgHas.subPublishers')).get(0),
        noButton: element.all(by.model('orgHas.subPublishers')).get(1)
    };
};

CreateOrganisation.prototype = {
    get: function () {
        browser.get('/create/org');
    },

    toggleHasSubPublisherOption: function (option) {
        if (option) {
            browser.actions().mouseMove(this.subPublisher.yesButton).perform();
            this.subPublisher.yesButton.click();
        } else {
            browser.actions().mouseMove(this.subPublisher.noButton).perform();
            this.subPublisher.noButton.click();
        }

    }

};

module.exports = CreateOrganisation;