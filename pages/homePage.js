function HomePage () {
    this.newRecordMenu = element(by.css('button[data-tooltip="Add New Record"]'));

    this.addNewWorkButton = element(by.css('a[href="#/create/work"]'));
    this.addNewOrgButton = element(by.css('#DSP-RECORD-CREATE > ul > li > a[href="#/create/org"]'));
    this.addNewPersonButton = element(by.css('#DSP-RECORD-CREATE > ul > li > a[href="#/create/person"]'));
    this.addNewDealButton = element(by.css('#DSP-RECORD-CREATE > ul > li > a[href="#/create/deal"]'));
}

HomePage.prototype = {
    get: function () {
        browser.get('/');
    },

    openNewRecordMenu: function () {
        this.newRecordMenu.click();
    },

    addNewWork: function () {
        browser.actions().mouseMove(this.addNewWorkButton).perform();
        this.addNewWorkButton.click();
    },
    addNewOrg: function () {
        browser.actions().mouseMove(this.addNewOrgButton).perform();
        this.addNewOrgButton.click();
    },
    addNewPerson: function () {
        browser.actions().mouseMove(this.addNewPersonButton).perform();
        this.addNewPersonButton.click();
    },
    addNewDeal: function () {
        browser.actions().mouseMove(this.addNewDealButton).perform();
        this.addNewDealButton.click();
    }
};

module.exports = HomePage;