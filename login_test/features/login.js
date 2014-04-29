var //paths
    path_steps = _tf_config._system_.path_to_steps,
    page_steps = _tf_config._system_.path_to_pages,
    
    //pages
    main_page = require(page_steps + "main"),
    provisioning_page = require(page_steps + "provisioning");       
     
    require(page_steps + "login");

    // steps
    require(path_steps + "login"),
    require(path_steps + "main"),
    require(path_steps + "provisioning");
    
    var globalBeforeEach = function() {
        var matchers = new ftf.matchers();
        this.addMatchers({
            shouldBePresent: matchers.create("ShouldBePresent")
        });
        this.addMatchers({
            shouldContainA: matchers.create("ShouldContainA")
        });
    },
            
    feature = [{
        name: "Login to Security Console",
        tags: ["example"],
        steps: [
            [steps.login.itLogin],
            [steps.main.itShouldBeDisabled,[main_page.elems.start_provisioning, "Start Provisioning", false]],
            [steps.main.itShouldBeDisabled,[main_page.elems.start_creating, "Start creating", true]],
            [steps.main.itShouldBeDisabled,[main_page.elems.view_details, "View details", true]]
        ]
    },{
        name: "Provisioning. First step: Navigate to provisioning page",
        tags: ["example"],
        steps: [
            [steps.provisioning.itOpen]
        ]
    },{
        name: "Provisioning. First step: typeahead should be present on the page",
        tags: ["example"],
        steps: [
            [steps.provisioning.itElementIsPresent,[provisioning_page.elems.typeahead_model, "typeahead input", true]],
            [steps.provisioning.itTextToContainA,["momomo"]]
        ]
    }];

module.exports = {
    feature: feature,
    globalBeforeEach: globalBeforeEach
};