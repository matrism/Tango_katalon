var helper = ftf.helper;
if (pages.docs === undefined) {
    pages.docs = new ftf.pageObject({
        
        url: "http://devportal.devportal-ci.dspdev.wmg.com/docs",

        locators: {
            header: { css: 'h1' },
            usage: { css: '#usage' },
            dependencies: { css: "#dependencies" },
            center_repeater: { repeater: "center in docs" },
            menu_repeater: { repeater: "article in section.children" }
        },
        
        parts: {
            android: {index: 0, value: "ANDROID"},
            common: {index: 1, value: "COMMON"},
            creative: {index: 2, value: "CREATIVE"},
            frontend: {index: 3, value: "FRONTEND", components: { breadcrumb: {index: 0, value: "Breadcrumb"}, tags: {index: 12, value: "Tags"}}},
            infrastructure: {index: 4, value: "INFRASTRUCTURE"},
            ios: {index: 5, value: "IOS"},
            java: {index: 6, value: "JAVA"},
            nodejs: {index: 7, value: "NODE.JS"},
            reliability: {index: 8, value: "RELIABILITY"},
            ruby: {index: 9, value: "RUBY"}
        },
        
        selectItemFromRepeater: function(repeater_el, itemIndex) {
            repeater_el.get(itemIndex).then(function(elem) {
                elem.click();
            });
        }
        
    });
};

module.exports = pages.docs;


