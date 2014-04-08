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
    
    /**
     * From here: https://github.com/angular/protractor/issues/610#issuecomment-37917269
     * 
     * @name waitForUrlToChangeTo
     * @description Wait until the URL changes to match a provided regex
     * @param {RegExp} urlRegex wait until the URL changes to match this regex
     * @returns {!webdriver.promise.Promise} Promise
     */
    waitForUrlToChangeTo: function(urlRegex) {
        var currentUrl;

        return browser.getCurrentUrl().then(function storeCurrentUrl(url) {
                currentUrl = url;
            }
        ).then(function waitForUrlToChangeTo() {
                return browser.wait(function waitForUrlToChangeTo() {
                    return browser.getCurrentUrl().then(function compareCurrentUrl(url) {
                        return urlRegex.test(url);
                    });
                });
            }
        );
    },
    
    waitForElement: function(el, timeout) {
        timeout = timeout || 2000;
        return browser.wait(function() {
            return el.isPresent().then(function(present) {
                return present === true;
            });
        }, timeout);
    },
    
    waitForProgressBar: function(timeout) {
        timeout = timeout || 2000;
        return browser.wait(function() {
            return pages.provisioning.elems.progress_bar.getCssValue("width").then(function(width) {
                return width === "0px";
            });
        }, timeout);  
    },
    
    waitForDocumentToLoad: function() {
        return browser.wait(function() {
            return browser.executeScript("return document.readyState === 'complete';").then(function(res) {
                return res === true;
            });
        });
    }
};

module.exports = Helper;