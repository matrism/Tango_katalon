var Matcher = function() {};

Matcher.prototype.create = function(options) {
    
    var type = options;

    if (typeof Matcher[type] !== 'function') {
        throw {
            name: 'Error',
            message: 'Matcher ' + type + ' does not exist'
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
        var isNot = (this.isNot) ? 'not' : '';

        this.message = function() {
            return options.message.replace('{not}', isNot);
        };

        return pass;
    };
};

Matcher.ShouldContain = function() {
    this.pass = function(){
        return (this.actual.indexOf(options.compare) !== -1) ? true : false;
    };
    return this.match();
};

Matcher.ShouldBePresent = function() {
    this.pass = function(){
        return (this.actual.isPresent()) ? true : false;
    };
    return this.match();
};

module.exports = Matcher;