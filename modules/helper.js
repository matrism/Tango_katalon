_ = require("underscore");

var Helper = {
    checkAttributeOfElementContainsValue: function(elem, attr_name, value) {
        elem.getAttribute(attr_name).then(function(attr) {
            expect(attr).toContain(value);
        });
    },
        
    clickOnOneEqual: function(elements, item) {
        elements._all.each(function(elem) {
            elem.getText().then(function(text) {
                if (text === item) {
                    elem.click();
                }
            });
        });
    },
    
    clickOnOneInclude: function(elements, item) {
        elements._all.each(function(elem) {
            elem.getText().then(function(text) {
                if (text.indexOf(item) >= 0) {
                    elem.click();
                }
            });
        });
    },
    
    clickOnSame: function(elements, item, time) {
        var i = 0;
        elements._all.each(function(elem) {
            elem.getText().then(function(text) {
                if (text.indexOf(item) >= 0) {
                    i++;
                }
                if (i === time) {
                    elem.click();
                }
            });
        });
    },
    
    returnOneOfMany: function(elements, item) {
        var flag = false;
        
        elements._all.each(function(elem) {
            elem.getText().then(function(text) {
                if (text === item) {
                    flag = true;
                }
            });
        });
        
        browser.wait(function() {
            return flag;
        }, 1500);
        
        if (!flag) {
            throw (new Error("Cannot find item " + item + " in the list"))
        }
    },
    
    shouldBeOne: function(elements, item, should) {
        var countAll,
            counter = 0,
            hasItem = false;

        elements._all.count().then(function(count) {
            countAll = count;
        });
        
        elements._all.each(function(elem) {
            elem.getText().then(function(text) {
                counter++;
                if (text.indexOf(item) !== -1) {
                    hasItem = true;
                }
                if (counter === countAll) {
                    expect(hasItem).toBe(should);
                }
            });
        });
    },
    
    splitAndCompare: function(text, elements) {
        var ar = text.split(", "),
            actual_array = [],
            all_count = 0;
    
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
    }
};

module.exports = Helper;