var HomePage = require('./../pages/homePage.js');

describe(' Home Page E2E ::', function () {
    var page;
    beforeEach(function () {
        page = new HomePage();
    });

    it(' Should', function () {
        page.get();

        page.openNewRecordMenu();

        expect(element(by.css('#DSP-RECORD-CREATE ul.dropdown-menu')).isPresent());
        page.addNewWork();

        expect(browser.getCurrentUrl()).toMatch(/.*\/create\/work/);
    });
});