//var By = require('selenium-webdriver').By;

var Page = function(o) {
    o = o || {};
    for (var i in o) {
        this[i] = o[i];
    }
    return this;
};

//for (var i in By) {
//    Page.prototype["by" + i.charAt(0).toUpperCase() + i.slice(1)] = By[i];
//}
//
Page.prototype.url = "";
//Page.prototype.getTitle = function() {
//    return browser.getTitle();
//};
Page.prototype.setUrl = function(url) {
    this.url = url;
};
Page.prototype.getUrl = function() {
    return browser.driver.getCurrentUrl();
};
Page.prototype.open = function(is_not_angular) {
    is_not_angular = is_not_angular || false;
    if (is_not_angular) {
        browser.ignoreSynchronization = true;
        browser.driver.get(this.url);
    } else {
        browser.get(this.url);
    }
    return this;
};
Page.prototype.extend = function(o) {
    o = o || {};
    for (var i in o) {
        this[i] = o[i];
    }
    return this;
}
//Page.prototype.byNgModel = function(ng_model) {
//    
//};

module.exports = Page;