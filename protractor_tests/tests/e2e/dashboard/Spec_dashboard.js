describe('Dashboard module', function() {
    var login_page = require("../../pages/login"),
    main_page = require("../../pages/main"),
    provision_page = require("../../pages/provisioning"); 
    
    // should be logged in
    // background: 
    beforeEach(login_page.check);    
    
    //Scenario:
    describe('Verify that Dashboard\'s Provisioning section is enabled', function() {
        //Then
        it('Start Provisioning link should not be disabled', function() {
            main_page.checkButtonByTextToBeDisabledOrNot(main_page.links.start_provisioning.text, false);
        });
    });
    
    //Scenario:
    describe('Verify that Dashboard\'s Creation and Management sections are disabled', function() {
        //Then
        it('Start Creating link should be disabled', function() {
            main_page.checkButtonByTextToBeDisabledOrNot(main_page.links.start_creating.text, true);
        });
        //And
        it('View details link should be disabled', function() {
            main_page.checkButtonByTextToBeDisabledOrNot(main_page.links.view_details.text, true);
        });
    });
    
    //Scenario
    describe('Navigate to Provisioning page', function() {
        it('View details link should not be disabled', function() {
            provision_page.buttonAttrShouldBeAsVal("className", "active");
        });
    });
    
    //Scenario:
    describe('Verify that Dashboard\'s test fail', function() {
        //Then
        it('View details link should not be disabled', function() {
            main_page.checkButtonByTextToBeDisabledOrNot("View details", false);
        });
    });
});