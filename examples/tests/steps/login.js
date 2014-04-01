if (steps.login === undefined) {
    steps.login = {
        
        itLogin: function() {
            it("Login and open page", function() {
               pages.login.login();
            });
        },
        
        itShouldBeDisabled: function(element, elementName, isDisabled) {
            var isNot = (isDisabled) ? "" : "not ";
            it(elementName + " should " + isNot + "be disabled", function() {
                ftf.helper.waitForElement(element);                
                
                element.getAttribute('className').then(function(className) {
                    var exp = expect(className);
                        if (isDisabled) {
                            exp.toContain('disabled');
                        } else {
                            exp.not.toContain('disabled');
                        }
                    });
              });
        }

    };
}

module.exports = steps.components;