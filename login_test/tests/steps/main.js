if (steps.main === undefined) {
    steps.main = {
        
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

module.exports = steps.main;


