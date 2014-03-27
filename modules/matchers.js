var Matcher = function() {};

Matcher.prototype.create = function(options) {
    
    var type = options.type;
    
    // error if the matcher doesn't exist
    if (typeof Matcher[type] !== 'function') {
        throw {
            name: 'Error',
            message: 'Matcher ' + type + ' does not exist'
        };
    }
    
    return new Matcher[type](options);
    
};

Matcher.ShouldContain = function(options) {
    this.compare = function(elName, content) {
        var elValue = this.actual,
            pass = (elValue.indexOf(content) !== -1) ? true : false,
            isNot = (this.isNot) ? 'not ' : '';

        this.message = function() {
            return elName + ' should ' + isNot + 'contain ' + content;
            //return options.message;
        };

        return pass;
    };
};

module.exports = Matcher;