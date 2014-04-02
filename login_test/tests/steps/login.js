if (steps.login === undefined) {
    steps.login = {
        
        itLogin: function() {
            it("Login and open page", function() {
               pages.login.login();
            });
        }
        
    };
}

module.exports = steps.components;