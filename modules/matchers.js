var Matcher = function() {},
    _ = require("underscore");

Matcher.prototype.create = function(options) {
    var type = options;

    if (typeof Matcher[type] !== "function") {
        throw {
            name: "Error",
            message: "Matcher " + type + " does not exist"
        };
    }
    
    if (typeof Matcher[type].prototype.match !== "function") {
        Matcher[type].prototype = new Matcher();
    }
    return new Matcher[type](options);
};

Matcher.prototype.match = function(){
    var pass = this.pass;
    return function(options) {
        var isNot = (this.isNot) ? "not" : "";

        this.message = function() {
            return (options && options.message) ? options.message.replace("{not}", isNot) : "Error";
        };
        return pass.apply(this, [this.actual, options, this.expected]);
    };
};

Matcher.ShouldContain = function() {
    this.pass = function(actual, options){
        return (options && options.compare && actual.indexOf(options.compare) !== -1) ? true : false;
    };
    return this.match();
};

Matcher.ShouldBePresent = function() {
    this.pass = function(actual){
        return (actual.isPresent()) ? true : false;
    };
    return this.match();
};

Matcher.ShouldContainA = function() {
    this.pass = function(actual, options){
        return actual.indexOf("a") >= 0;
    };
    return this.match();
};

Matcher.ShouldBeEqualToObject = function() {
    this.pass = function(actual, options) {
        return _.isEqual(actual, options.expected);
    };
    return this.match();
};

Matcher.ArrayShouldContainsValues = function() {
    this.pass = function(actual, options) {
        return _.isEqual(_.intersection(actual, options.expected).sort(), options.expected.sort());
    };
    return this.match();
};

Matcher.ShouldBeVisible = function() {
    this.pass = function(actual, options) {
        return actual.indexOf("ng-hide") === -1;
    };
    return this.match();
};

module.exports = Matcher;
