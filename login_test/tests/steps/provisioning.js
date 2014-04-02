if (steps.provisioning === undefined) {
    steps.provisioning = {
        itOpen: function() {
            it("Login and open page", function() {
               pages.provisioning.open();
            });
        },
        
        itElementIsPresent: function(element, elName, isPresent){
            var isNot = (isPresent === false) ? "not " : "";
            it(elName + " should " + isNot + "be present", function() {
                pages.provisioning.elementIsPresent(element, elName, isPresent);
            });
        }
    };
}

module.exports = steps.main;