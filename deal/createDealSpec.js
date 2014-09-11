'use strict';

describe("Create Deal :: ", function () {
    // set up all mock responses
    browser.adminSpecHelper.setUpAllAdminsResponses();
    browser.orgSpecHelper.setUpOrgCacheResponse();
    browser.orgSepcHelper.setUpOrgSearchResponse('test');
    browser.personSepcHelper.setUpPersonSearchResponse('test');
    browser.territorySpecHelper.setUpTerritoriesReponses();

    beforeEach(function () {
        browser.get('/#/create/deal');
    });

    describe("General Section :: ", function() {
        it("should select a contracting party", function () {
            element(by.model('password')).sendKeys('test');
        });
    });
});