describe("Login module", function() {
    
    var //pages
        login_page = require("../../pages/login"),
        main_page = require("../../pages/main"),
        provisioning_page = require("../../pages/provisioning"); 
        
        // steps
        require("../../steps/login"),
        require("../../steps/provisioning");
        
        matchers = new ftf.matchers();
    
    beforeEach(function() {

        this.addMatchers({
            shouldBePresent: matchers.create("ShouldBePresent")
        });

    });
    
    describe("Login to Security Console", function() {
        steps.login.itLogin();

        steps.login.itShouldBeDisabled(main_page.elems.start_provisioning, "Start Provisioning", false);
        steps.login.itShouldBeDisabled(main_page.elems.start_creating, "Start creating", true);
        steps.login.itShouldBeDisabled(main_page.elems.view_details, "View details", true);
    });
    
    describe('Provisioning. First step', function() {
        
        describe("Navigate to provisioning page", function() {
            steps.provisioning.itOpen();
        });

        describe('typeahead should be present on the page', function() {
            steps.provisioning.itElementIsPresent(provisioning_page.elems.typeahead_model, 'typeahead input', true);
        });
        
    });
    
});