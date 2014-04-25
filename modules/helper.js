_ = require("underscore");

var Helper = {
    checkAttributeOfElementContainsValue: function(elem, attr_name, value, strict) {
        strict = strict || false;
        expect(elem.isPresent()).toBe(true);
        elem.getAttribute(attr_name).then(function(attr) {
            if (strict) {
                expect(attr).toBe(value);
            } else {
                expect(attr).toContain(value);
            }
        });
    },
    
    clickOnOneEqual: function(elements, item) {
        Helper.clickOnOneInclude(elements, item, true);
    },
    
    clickOnOneInclude: function(elements, item, strict) {
        var findEl;
        strict = strict || false;
        expect(elements._all.count()).toBeGreaterThan(0);
        elements._all.map(function(elem) {
            elem.getText().then(function(text) {
                if (strict) {
                    if (text === item) {
                        findEl = elem;
                    }
                } else {
                    if (text.indexOf(item) >= 0) {
                        findEl = elem;
                    }
                }
            });
        }).then(function(){
            findEl.click();
        });
    },
    
    clickOnSame: function(elements, item, time) {
        var i = 0, findEl;
        expect(elements._all.count()).toBeGreaterThan(0);
        elements._all.map(function(elem) {
            elem.getText().then(function(text) {
                if (text.indexOf(item) >= 0) {
                    i++;
                }
                if (i === time) {
                    findEl = elem;
                }
            });
        }).then(function(){
            findEl.click();
        });
    },
    
    shouldOrNotBeAmongElements: function(elements, item, not_be, strict) {
        not_be = not_be || false;
        strict = strict || false;
        var foundItems = 0;
        
        expect(elements._all.count()).toBeGreaterThan(0);
        elements._all.map(function(elem) {
            elem.getText().then(function(text) {
                if (strict) {
                    if (text === item) {
                        foundItems++;
                    }
                } else {
                    if (text.indexOf(item) >= 0) {
                        foundItems++;
                    }
                }
            });
        }).then(function(){
            if (not_be) {
                expect(foundItems).toBe(0);
            } else {
                expect(foundItems).toBeGreaterThan(0);
            }
        });

    },
    
    shouldBeAmoungElements: function(elements, item) {
        Helper.shouldOrNotBeAmongElements(elements, item, false, true);
    },
    
    shouldNotBeAmoungElements: function(elements, item) {
        Helper.shouldOrNotBeAmongElements(elements, item, true, true);
    },
    
    shouldBeOnlyOneWithText: function(elements, given, strict) {
        strict = strict || false;
        var foundItems = 0;
        expect(elements._all.count()).toBeGreaterThan(0);
       
        elements._all.map(function(elem) {
            elem.getText().then(function(text) {
                if (strict) {
                    if (text === given) {
                        foundItems++;
                    }
                } else {
                    if (given.indexOf(text) >= 0) {
                        foundItems++;
                    }
                }
            });
        }).then(function(){
            expect(foundItems).toBe(1);
        });
    },
    
    shouldBeOnlyOne: function(elements, item) {
        Helper.shouldBeOnlyOneWithText(elements, text, true);
    },
    
    splitAndCompare: function(text, elements) {
        var ar = text.split(", "),
            actual_array = [],
            all_count = 0;
    
        expect(elements._all.count()).toBeGreaterThan(0);
        elements._all.count().then(function(count){
            all_count = count;
        });
        
        elements._all.each(function(el) {
            el.getText().then(function(text) {
                actual_array.push(text);
                if (all_count === actual_array.length) {
                    expect(_.isEqual(actual_array.sort(), ar.sort())).toBe(true);
                }
            });
        });
    },
    
    waitForElement: function(el, timeout) {
        timeout = timeout || 5000;
        return browser.wait(function() {
            return el.isPresent().then(function(present) {
                return present === true;
            });
        }, timeout);
    },
    
    switchToNextTab: function() {
        browser.getAllWindowHandles().then(function(data){
            browser.switchTo().window(data[data.length -1]);
        });
    },
    
    closeCurrentTab: function() {
        browser.getAllWindowHandles().then(function(data){
            browser.switchTo().window(data[data.length -1]);
            if (data.length > 0) {
                browser.close();
                browser.switchTo().window(data[0]);
            } else {
                browser.quit();
            }
        });
    },
    
    pageShouldBeScrolledDown: function() {
        browser.executeScript("return window.pageYOffset;").then(function(top) {
            expect(top).toBeGreaterThan(0);
        });
    }
};

module.exports = Helper;
