describe("Components", function() {
    
    var docs_page = require("../../pages/docs"),
        login_page = require("../../pages/login"),
        matchers = new ftf.matchers();
        require("../../steps/components");
    
    beforeEach(function() {

        this.addMatchers({
            shouldContainText: matchers.create("ShouldContain"),
            shouldBePresent: matchers.create("ShouldBePresent")
        });

    });
    
    describe("Navigate to page", function() {
        steps.components.itNavigateTo();
    });
    
    describe("Validate Breadcrumb Component tutorial on frontend page", function() {
        
        beforeEach(function() {
            ftf.helper.waitForAjax();
        });
        
        steps.components.itClickOnRepeater(docs_page.elems.center_repeater, docs_page.parts.frontend);
        
        steps.components.itClickOnRepeater(docs_page.elems.menu_repeater, docs_page.parts.frontend.components.breadcrumb);
        
        steps.components.itThenUrlContains("component_library/breadcrumb");
        
        steps.components.itElemetContains(docs_page.elems.header, docs_page.parts.frontend.components.breadcrumb, "tutorial header", true);
        
        steps.components.itElemetContains(docs_page.elems.header, docs_page.parts.frontend.components.breadcrumb, "tutorial header", false);
        
        steps.components.itElementPresent(docs_page.elems.usage, "subheader Usage", true);
        
        steps.components.itElementPresent(docs_page.elems.dependencies, "subheader Dependencies", true);
        
        steps.components.itElementPresent(docs_page.elems.dependencies, "subheader Dependencies", false);
        
    });    
    
    
});
