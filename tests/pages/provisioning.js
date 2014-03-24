var //config = require("config"),
    helper = require("../helpers/helper"),
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
            return browser.get(provisioning_page.url);
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
        },
        buttonAttrShouldBeAsVal: function(attr_name, attr_val) {
            var el;
                
            this.goToPage();
            browser.wait(function() {
                return element(By.css('.ugol-page-progress-bar .progress-bar')).getCssValue('width').then(function(width) {
                    return width === '0px';
                });
            });  
            var el = element(
                by.xpath(
                    this.buttons.setup(
                        this.buttons.xpath_by_text, 
                        this.buttons.single.text
                    )
                )
            );
            helper.checkAttributeOfElementContainsValue(el, attr_name, attr_val)
        }
        
    };

module.exports = provisioning_page;