function CreateOrganisation () {
    this.subPublisher = {
        yesButton: element(by.model('orgHas.subPublishers'))
    }
};

CreateOrganisation.prototype = {
    get: function () {
        browser.get('/create/org');
    },

    toggleHasSubPublisherOption: function (option) {
        console.log(this.yesButton);
        if (option) {
            this.yesButton.click();
        } else {
            this.noButton.click();
        }
    }

};

module.exports = CreateOrganisation;