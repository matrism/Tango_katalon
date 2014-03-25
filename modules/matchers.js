matchers = {
    
    add: function(scope) {

        scope.addMatchers({
            
            shouldContain: function(elName, content) {
                var elValue = this.actual,
                    pass = (elValue.indexOf(content) !== -1) ? true : false,
                    isNot = (this.isNot) ? 'not ' : '';
                
                this.message = function() {
                    return elName + ' should ' + isNot + 'contain ' + content;
                };
                
                return pass;
            }

        });
        
    }
    
};

module.exports = matchers;


