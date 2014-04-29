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
        },
        
        itTextToContainA: function(text) {
            var params = {
                message: "'" + text + "' should contain 'a'"
            };
            it("to contain a", function() {
                expect(text).shouldContainA(params);
            });
        }
    };
}

module.exports = steps.main;