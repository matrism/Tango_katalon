describe("Login module", function() {
    
    var //pages
        main_page = require("../../pages/main"),
        provisioning_page = require("../../pages/provisioning");         
        require("../../pages/login");
        
        // steps
        require("../../steps/login"),
        require("../../steps/main"),
        require("../../steps/provisioning");
        
        matchers = new ftf.matchers();
    
    beforeEach(function() {

        this.addMatchers({
            shouldBePresent: matchers.create("ShouldBePresent")
        });

    });
    
    describe("Login to Security Console", function() {
        steps.login.itLogin();

        steps.main.itShouldBeDisabled(main_page.elems.start_provisioning, "Start Provisioning", false);
        steps.main.itShouldBeDisabled(main_page.elems.start_creating, "Start creating", true);
        steps.main.itShouldBeDisabled(main_page.elems.view_details, "View details", true);
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