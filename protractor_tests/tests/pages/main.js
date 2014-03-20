
var //config = require("config"),
    main_page = {
        url: "http://security-console.devportal-ci.dspdev.wmg.com",//config.app_home
        links: {
            start_creating: {
                text: "Start Creating"
            },
            view_details: {
                text: "View details"
            },
            start_provisioning: {
                text: "Start Provisioning"
            }
        },
        checkButtonByTextToBeDisabledOrNot: function(link_text, should_be_disabled) {
            var el = element(By.xpath("//a[contains(text(), '" + link_text + "')]"));
            
            el.getAttribute('className').then(function(className) {
                var exp = expect(className);
                if (should_be_disabled) {
                    exp.toContain('disabled');
                } else {
                    exp.not.toContain('disabled');
                }
            });
        }
    };

module.exports = main_page;