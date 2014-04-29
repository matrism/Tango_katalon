if (pages.provisioning === undefined) {
    pages.provisioning = new ftf.pageObject({
        url: "http://security-console.devportal-ci.dspdev.wmg.com/provisioning",
        locators: {
            single: { xpath: "//button[contains(text(), 'Single')]" },
            typeahead_model: { css: "input[ng-model='typeahead.model']" },
            div_ugol_select_wrapper: { css: "div.ugol-select-wrapper" },
            matches_repeater: { repeater: "match in matches" },
            tags_repeater: { repeater: "tag in tags" },
            provisioning_tabs: { css: "[ui-view='provisioning-tabs']" },
            progress_bar: { css: ".ugol-page-progress-bar .progress-bar" }
        },
        
        elementIsPresent: function(element, elementName, isPresent) {
            var params = {
                message: elementName + " should {not} be present"
            };

            if (isPresent) {
                expect(element).shouldBePresent(params);
            }else{
                expect(element).not.shouldBePresent(params);
            }
        }
    });
}

module.exports = pages.provisioning;