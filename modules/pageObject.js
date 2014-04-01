//var By = require('selenium-webdriver').By;
var Page = function(o) {
    o = o || {};
    for (var i in o) {
        this[i] = o[i];
    }
    this.index();
    return this;
};

Page.prototype.url = "";
Page.prototype.text = "";
Page.prototype.title = "";
Page.prototype.html = "";

Page.prototype.index = function() {
    var locs = this.locators,
        elems = {}, i, loc, type;
        
    for(i in locs) {
        loc = locs[i];
        type = Object.keys(loc)[0];
        if (type === "custom") {
            elems[i] = loc[type]();
        } else if (type === "repeater") {
            elems[i] = element.all(By[type](loc[type]));
        } else if (typeof loc[type] === "function") {
            elems[i] = element(By[type](loc[type]()));
        } else {
            elems[i] = element(By[type](loc[type]));
        }
    }
    
    this.elems = elems;
    return this;
};
Page.prototype.prepare = function() {
    var page = this;
    element(By.tagName("body")).getText().then(function(t) {
        page.text = t;
    });
    browser.getTitle().then(function(title) {
        page.title = title; 
    });
    element(By.tagName("body")).getInnerHtml().then(function(html) {
        page.html = html;
    });
};
Page.prototype.getUrl = function() {
    return this.url;
};
Page.prototype.getText = function() {
    return this.text;
};
Page.prototype.getTitle = function() {
    return this.title;
};
Page.prototype.getHtml = function() {
    return this.html;
};
Page.prototype.waitUntil = function(timeout, message, promiseToBeTrue) {
    browser.wait(function() {
        return promiseToBeTrue;
    }, timeout, message);
};
Page.prototype.executeScript = function(code,callback) {
    browser.executeScript(code).then(function(res) {
        callback(res);
    });
};
Page.prototype.refresh = function() {
    browser.navigate().refresh();
};
Page.prototype.back = function() {
    browser.navigate().back();
};
Page.prototype.forward = function() {
    browser.navigate().forward ();
};
Page.prototype.clearCookies = function() {
    browser.manage().deleteAllCookies();  
};
Page.prototype.saveScreen = function(name) {
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
};
Page.prototype.open = function(is_not_angular) {
    is_not_angular = is_not_angular || false;
    if (is_not_angular) {
        browser.ignoreSynchronization = true;
        browser.driver.get(this.url);
    } else {
        browser.get(this.url);
    }
    ftf.helper.waitForAjax(is_not_angular);
    this.prepare();
    return this;
};
Page.prototype.onPage = function(url, curUrl) {
    return url.indexOf(curUrl) >= 0;
};

module.exports = Page;