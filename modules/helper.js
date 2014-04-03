var Helper = {
    checkAttributeOfElementContainsValue: function(elem, attr_name, value) {
        elem.getAttribute(attr_name).then(function(attr) {
            expect(attr).toContain(value);
        });
    },
        
    clickOnOneEqual: function(elements, item) {
        elements.each(function(elem) {
            elem.getText().then(function(text) {
                if (text === item) {
                    elem.click();
                }
            });
        });
    },
    
    clickOnOneInclude: function(elements, item) {
        elements.each(function(elem) {
            elem.getText().then(function(text) {
                if (text.indexOf(item) >= 0) {
                    elem.click();
                }
            });
        });
    },
    
    clickOnSame: function(elements, item, time) {
        var i = 0;
        elements.each(function(elem) {
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
        
        elements.each(function(elem) {
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
    
    splitAndCompare: function(text, elements) {
        var ar = text.split("; "),
            actual_array = [],
            items = elements.length;
    
        elements.each(function(el) {
            el.getText().then(function(text) {
                actual_array.push(text);
            });
        });
        
        browser.wait(function() {
            return elements.count().then(function(count){
                return count === actual_array.length;
            });
        });
        
        expect(elements.count()).toEqual(actual_array.length);
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