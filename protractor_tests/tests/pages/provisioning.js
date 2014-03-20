var //config = require("config"),
    provisioning_page = {
        
        url: "http://security-console.devportal-ci.dspdev.wmg.com/provisioning",
        
        buttons: {
            single: {
                text: "Single"
            },
            xpath_by_text: "//button[contains(text(), '%s')]",
            setup: function(template, text) {
                return template.replace("%s",text);
            }
        },
        goToPage: function() {
            browser.get(provisioning_page.url);
        },
        
        elementByCssIsPresent: function(cssSelector, shouldBePresent) {
            expect(element(by.css(cssSelector)).isPresent()).toBe(shouldBePresent);
        },
        
        setValue: function(cssSelector, value) {
            element(by.css(cssSelector)).sendKeys(value);
        },
        
        selectItemFromRepeater: function(ngRepeaterName, itemIndex) {
            element(by.repeater(ngRepeaterName).row(itemIndex)).click();
        },
        
        repeaterHasItem: function(ngRepeaterName, itemContent) {
            var all = element.all(by.repeater(ngRepeaterName));
            
            all.each(function(item) {
                item.getText().then(function(text) {
                    expect(text).toContain(itemContent);
                });
            });
        },
        
        elementByCssIsDisplayed: function(cssSelector, shouldBeDisplayed) {
            expect(element(by.css(cssSelector)).isDisplayed()).toBe(shouldBeDisplayed);
        }
        
    };

module.exports = provisioning_page;