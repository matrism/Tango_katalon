if (pages.main === undefined) {
    pages.main = new ftf.pageObject({
        url: _tf_config.urls.app_url,
        locators: {
            start_creating: { xpath: "//a[contains(text(), 'Start Creating')]" },
            view_details: { xpath: "//a[contains(text(), 'View details')]" },
            start_provisioning: { xpath: "//a[contains(text(), 'Start Provisioning')]" },
            h1: { css: "h1" }
        }
    });
}

module.exports = pages.main;