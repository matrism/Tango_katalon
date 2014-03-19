describe('Dashboard module', function() {
    var login_page = require("../../pages/login"),
    main_page = require("../../pages/main"),
    helper = require("../../helpers/helper"); 
    
    // should be logged in
    // background: 
    beforeEach(login_page.check);    
    
    //Scenario:
    describe('Verify that Dashboard\'s Provisioning section is enabled', function() {
        //Then
        it('Start Provisioning link should not be disabled', function() {
            main_page.checkButtonByTextToBeDisabledOrNot("Start Provisioning", false);
        });
    });
    
    //Scenario:
    describe('Verify that Dashboard\'s Creation and Management sections are disabled', function() {
        //Then
        it('Start Creating link should be disabled', function() {
            main_page.checkButtonByTextToBeDisabledOrNot("Start Creating", true);
        });
        //And
        it('View details link should be disabled', function() {
            main_page.checkButtonByTextToBeDisabledOrNot("View details", true);
        });
    });
    
    //Scenario
    describe('Navigate to Provisioning page', function() {
        it('View details link should not be disabled', function() {
            var el,
                link_text = "Single",
                attr_name = "className",
                attr_val = "active";
                
            browser.get(main_page.url + "/provisioning");
            browser.sleep(1000);
            el = element(by.xpath("//button[contains(text(), '" + link_text + "')]"));
            helper.checkAttributeOfElementContainsValue(el, attr_name, attr_val)
        });
    });
    
    //Scenario:
//    describe('Verify that Dashboard\'s test fail', function() {
//        //Then
//        it('View details link should not be disabled', function() {
//            main_page.checkButtonByTextToBeDisabledOrNot("View details", false);
//        });
//    });
});