var Page = function(o) {
    o = o || {};
    for (var i in o) {
        this[i] = o[i];
    }
    this.index();
    return this;
},
_ = require("underscore");

Page.prototype.url = "";
Page.prototype._url = {
    template: "",
    args: []
};
Page.prototype.dynamic_url = false;
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
        } else if (typeof loc[type] === "function") {
            elems[i] = element(By[type](loc[type]()));
            elems[i]._all = element.all(By[type](loc[type]()));
        } else {
            elems[i] = element(By[type](loc[type]));
            elems[i]._all = element.all(By[type](loc[type]));
        }
    }
    
    if (this._url.template === "" || this._url.args.length < 1) {
        this.dynamic_url = false;
    } else {
        this.dynamic_url = true;
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
Page.prototype.setUrl = function(url) {
    this.url = url;
    this.dynamic_url = false;
    return this;
};
Page.prototype.setDynamicUrl = function(template, args) {
    this.dynamic_url = true;
    this._url.template = template;
    this._url.args = _.clone(args);
    return this;
};
Page.prototype.setDynamicUrlTemplate = function(template) {
    this._url.template = template;
    return this;
};
Page.prototype.setDynamicUrlArgs = function(args) {
    this._url.args = _.clone(args);
    return this;
};
Page.prototype.makeUrlStatic = function() {
    this.dynamic_url = false;
    return this;
};
Page.prototype.makeUrlDynamic = function() {
    this.dynamic_url = true;
    return this;
};
Page.prototype.prepareUrl = function() {
    var arg, 
        _split_,
        _url_ = this._url.template, 
        args = this._url.args,
        i = 0, max = args.length;
    
    if (!this.dynamic_url) {
        return this.url;
    }
    for ( ;i < max; i++) {
        arg = args[i];
        _split_ = new Array("{",i+1,"}").join("");
        _url_ = _url_.split(_split_).join(arg);
    }
    return _url_;
};
Page.prototype.getUrl = function() {
    return this.url;
};
Page.prototype.getDynamicUrlData = function() {
    return this._url;
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
Page.prototype.executeScript = function(code,callback) {
    return browser.executeScript(code).then(function(res) {
        callback(res);
    });
};
Page.prototype.refresh = function() {
    browser.navigate().refresh();
    return this;
};
Page.prototype.back = function() {
    browser.navigate().back();
    return this;
};
Page.prototype.forward = function() {
    browser.navigate().forward();
    return this;
};
Page.prototype.clearCookies = function() {
    browser.manage().deleteAllCookies();  
    return this;
};
Page.prototype.saveScreen = function(name) {
    name = name || "screen";
    browser.takeScreenshot().then(function(png) {
        var fs = require("fs"),
            date = new Date(),
            newdate = date.getDate() + "_" + date.getMonth() + "_" + date.getFullYear() + "-" + date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds(),
            filename = "screens/" + name + "_" + newdate + ".png",
            stream = fs.createWriteStream(filename);

        stream.write(new Buffer(png, "base64"));
        stream.end();
    });
    return this;
};
Page.prototype.waitForAjax = function() {
    return browser.wait(function() {
        browser.sleep(300);
        return browser.executeScript("return typeof $ === 'undefined' ? 0 : $.active").then(function(res) {
            return res == 0;
        }) && browser.executeScript("return typeof angular === 'undefined' ? 0 : angular.element([$('body')]).injector().get('$http').pendingRequests.length").then(function(res) {
            return res == 0;
        });
    }, _tf_config._system_.wait_timeout);
};
Page.prototype.waitForAngular = function() {
    return browser.wait(function() {
        browser.sleep(300);
        return browser.executeScript("return angular.element([$('body')]).injector().get('$http').pendingRequests.length").then(function(res) {
            return res == 0;
        });
    }, _tf_config._system_.wait_timeout);
};
Page.prototype.waitForProgressBar = function(timeout) {
    timeout = timeout || _tf_config._system_.wait_timeout;
    return browser.wait(function() {
        return pages.provisioning.elems.progress_bar.getCssValue("width").then(function(width) {
            return width === "0px";
        });
    }, timeout);  
};
Page.prototype.waitForDocumentToLoad = function() {
    return browser.wait(function() {
        return browser.executeScript("return document.readyState === 'complete';").then(function(res) {
            return res === true;
        });
    });
};

/**
 * From here: https://github.com/angular/protractor/issues/610#issuecomment-37917269
 * 
 * @name waitForUrlToChangeTo
 * @description Wait until the URL changes to match a provided regex
 * @param {RegExp} urlRegex wait until the URL changes to match this regex
 * @returns {!webdriver.promise.Promise} Promise
 */
Page.prototype.waitForUrlToChangeTo = function(urlRegex) {
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
};
Page.prototype.open = function(is_not_angular) {
    is_not_angular = is_not_angular || false;
    if (is_not_angular) {
        browser.ignoreSynchronization = true;
        browser.driver.get(this.prepareUrl());
    } else {
        browser.get(this.prepareUrl());
    }
    this.prepare();
    return this;
};

module.exports = Page;