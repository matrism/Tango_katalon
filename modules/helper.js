var Helper = {
    
    checkAttributeOfElementContainsValue: function(elem, attr_name, value) {
        elem.getAttribute(attr_name).then(function(attr) {
            expect(attr).toContain(value);
        });
    },
        
    saveScreen: function(name) {
        name = name || "screen";
        browser.takeScreenshot().then(function(png) {
            var fs = require('fs'),
                date = new Date(),
                newdate = date.getDate() + '_' + date.getMonth() + '_' + date.getFullYear() + "-" + date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds(),
                filename = "screens/" + name + "_" + newdate + ".png",
                stream = fs.createWriteStream(filename);

            console.log("stream", stream)

            stream.write(new Buffer(png, "base64"));
            stream.end();
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
    
    waitForProgressBar: function() {
        return browser.wait(function() {
            return pages.provisioning.elems.progress_bar.getCssValue('width').then(function(width) {
                return width === '0px';
            });
        }, 1500);  
    },
    
    waitForAjax: function() {
        return browser.wait(function() {
            return browser.executeScript("return $.active;").then(function(res) {
                return res === 0;
            }) && browser.executeScript("return angular.element([$('body')]).injector().get('$http').pendingRequests.length;").then(function(res) {
                return res === 0;
            });
        }, 2000);
    }

};

module.exports = Helper;