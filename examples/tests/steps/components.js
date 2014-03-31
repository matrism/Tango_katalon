if (steps.components === undefined) {
    steps.components = {
        
        itNavigateTo: function() {
            it("Login and open page", function() {
               pages.login.login();
               pages.docs.open();
            });
        },
        
        itClickOnRepeater: function(repeater, elementData) {
            it("Click on " + elementData.value + " item", function() {
                pages.docs.selectItemFromRepeater(repeater, elementData.index);
            });
        },
        
        itThenUrlContains: function(contain) {
            it("Then current url contains " + contain, function() {
                browser.getCurrentUrl().then(function(url) {
                    expect(url).shouldContainText({
                            compare: contain,
                            message: "Url should {not} contain " + contain
                        });
                });
            });
        },
        
        itElemetContains: function(element, elementData, elementName, isContain) {
            var isNot = (isContain) ? "" : "not ";
            it("And component " + elementName + " is " + isNot + elementData.value, function() {
                var params = {
                        compare: elementData.value,
                        message: elementName + " should {not} contain " + elementData.value
                    };
                    
                if (isContain) {
                    expect(element.getText()).shouldContainText(params);
                }else{
                    expect(element.getText()).not.shouldContainText(params);
                }
                
            });
        },
        
        itElementPresent: function(element, elementName, isPresent) {
            var isNot = (isPresent) ? "" : "not ";
            it("And there is " + isNot + "tutorial " + elementName, function() {
                var params = {
                        message: elementName + " should {not} be present"
                    };
                    
                if (isPresent) {
                    expect(element).shouldBePresent(params);
                }else{
                    expect(element).not.shouldBePresent(params);
                }
            });
        }

    };
}

module.exports = steps.components;



