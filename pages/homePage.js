function HomePage () {
    this.newRecordMenu = element(by.css('button.btn.ng-scope[tooltip="Add New Record'));

    this.addNewWorkButton = element(by.css('#DSP-RECORD-CREATE > ul > li > a[href=#/create/work]'));
    this.addNewOrgButton = element(by.css('#DSP-RECORD-CREATE > ul > li > a[href=#/create/org]'));
    this.addNewPersonButton = element(by.css('#DSP-RECORD-CREATE > ul > li > a[href=#/create/person]'));
    this.addNewDealButton = element(by.css('#DSP-RECORD-CREATE > ul > li > a[href=#/create/deal]'));
}

HomePage.prototype = {
    addNewWork: function () {
        this.newRecordMenu.click();
        this.addNewWorkButton.click();
    },
    addNewOrg: function () {
        this.newRecordMenu.click();
        this.addNewOrgButton.click();
    },
    addNewPerson: function () {
        this.newRecordMenu.click();
        this.addNewPersonButton.click();
    },
    addNewDeal: function () {
        this.newRecordMenu.click();
        this.addNewDealButton.click();
    }
};

module.exports = HomePage;