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
    
    clickOnElementFromArrayThatHasEqualText: function(elements, item) {
        Helper.clickOnElementFromArrayThatContainText(elements, item, true);
    },
    
    clickOnElementFromArrayThatContainText: function(elements, item, strict) {
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
    
    shouldBeInArrayOfElements: function(elements, item, not_be, strict) {
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
        Helper.shouldBeInArrayOfElements(elements, item, false, true);
    },
    
    shouldNotBeAmoungElements: function(elements, item) {
        Helper.shouldBeInArrayOfElements(elements, item, true, true);
    },
    
    shouldSplittedTextBeEqualToElementsText: function(elements, textToSplit, strict) {
        var ar = textToSplit.split(", "),
            actual_array = [],
            all_count = 0, i = 0, contain_count = 0;
    
        expect(elements._all.count()).toBeGreaterThan(0);

        elements._all.count().then(function(count){
            all_count = count;
        });

        expect(elements._all.count()).toBe(ar.length);

        elements._all.each(function(el) {
            el.getText().then(function(text) {
                actual_array.push(text);
                if (all_count === actual_array.length) {
                    actual_array.sort();
                    ar.sort();
                    if (strict) {
                        expect(_.isEqual(actual_array, ar)).toBe(true);
                    } else {
                        for(; i < all_count; i++) {
                            if(actual_array[i].indexOf(ar[i]) >= 0) {
                                contain_count++;
                            }
                        }
                        expect(contain_count).toBe(all_count);
                    }
                }
            });
        });
    },
    
    shouldElementsTextContainSplittedText: function(elements, textToSplit, strict) {
        var ar = textToSplit.split(", "),
            actual_array = [],
            all_count = 0, i = 0, j, contain_count = 0, max = ar.length;
    
        expect(elements._all.count()).toBeGreaterThan(0);

        elements._all.count().then(function(count){
            all_count = count;
        });

        elements._all.each(function(el) {
            el.getText().then(function(text) {
                actual_array.push(text);
                if (all_count === actual_array.length) {
                    for (; i < max; i++) {
                        if (strict) {
                            if (actual_array.indexOf(ar[i]) >= 0) {
                                contain_count++;
                                actual_array.splice(actual_array.indexOf(ar[i]), 1);
                            }
                        } else {
                            for (j = 0; j < all_count; j++) {
                                if (actual_array[j].indexOf(ar[i]) >= 0) {
                                    contain_count++;
                                    actual_array.splice(j, 1);
                                    break;
                                }
                            }
                        }
                    }
                    expect(contain_count).toBe(max);
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
    }
};

module.exports = Helper;
