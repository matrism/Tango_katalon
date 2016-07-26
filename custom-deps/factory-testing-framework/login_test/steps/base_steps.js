if (steps.base === undefined) {
    steps.base = {
        itClickOnElement: function(el, elName) {
            it ("Click on " + elName, function() {
                el.click();
                pages.base.waitForAjax();
            });
        },
        itCheckIsRedirectToPage: function(pageName, expUrl) {
            it ("User should be redirected to " + pageName, function() {
                browser.getCurrentUrl().then(function(url) {
                    expect(url).toContain(expUrl);
                });
            });
        }
    };
}

module.exports = steps.base;
