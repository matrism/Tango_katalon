_ = require("underscore");

var Helper = {
    checkAttributeOfElementContainsValue: function(elem, attr_name, value) {
        elem.getAttribute(attr_name).then(function(attr) {
            expect(attr).toContain(value);
        });
    },
    
    clickOnOneEqual: function(elements, item) {
        var findEl;
        elements._all.map(function(elem) {
            elem.getText().then(function(text) {
                if (text === item) {
                    findEl = elem;
                }
            });
        }).then(function(){
            findEl.click();
        });
    },
    
    clickOnOneInclude: function(elements, item) {
        var findEl;
        elements._all.map(function(elem) {
            elem.getText().then(function(text) {
                if (text.indexOf(item) >= 0) {
                    findEl = elem;
                }
            });
        }).then(function(){
            findEl.click();
        });
    },
    
    clickOnSame: function(elements, item, time) {
        var i = 0,
            findEl;
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
    
    shouldBeAmoungElements: function(elements, item) {
        var foundItems = 0;
        
        elements._all.map(function(elem) {
            elem.getText().then(function(text) {
                if (text === item) {
                    foundItems++;
                }
            });
        }).then(function(){
            expect(foundItems).toBeGreaterThan(0);
        });
    },
    
    shouldNotBeAmoungElements: function(elements, item) {
        var foundItems = 0;
        
        elements._all.map(function(elem) {
            elem.getText().then(function(text) {
                if (text === item) {
                    foundItems++;
                }
            });
        }).then(function(){
            expect(foundItems).toBe(0);
        });
    },
    
    shouldBeOnlyOne: function(elements, item) {
        var foundItems = 0;
       
        elements._all.map(function(elem) {
            elem.getText().then(function(text) {
                if (text === item) {
                    foundItems++;
                }
            });
        }).then(function(){
            expect(foundItems).toBe(1);
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
