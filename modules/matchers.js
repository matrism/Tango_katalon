var Matcher = function() {};

if (!String.prototype.parse) {
    String.prototype.parse = function (params) {
        return this.replace(/{(\d+)}/g, function (match, number) {
            return (params[number] !== undefined) ? params[number] : match;
        });
    };
}

Matcher.prototype.create = function(options) {
    
    var type = options;
    
    // error if the matcher doesn't exist
    if (typeof Matcher[type] !== 'function') {
        throw {
            name: 'Error',
            message: 'Matcher ' + type + ' does not exist'
        };
    }
    
    return new Matcher[type](options);
    
};

Matcher.ShouldContain = function() {
    return function(options) {
        var pass = (this.actual.indexOf(options.compare) !== -1) ? true : false,
            isNot = (this.isNot) ? 'not ' : '';

        this.message = function() {
            return options.message.text.parse(options.message.params);
        };

        return pass;
    };
};

Matcher.ShouldBePresent = function() {
    return function(options) {
        var pass = (this.actual.isPresent()) ? true : false,
            isNot = (this.isNot) ? 'not ' : '';

        this.message = function() {
            return options.message.text.parse(options.message.params);
        };

        return pass;
    };
};

module.exports = Matcher;