//var config = require("config"),
    
module.exports = {
    wait_for_ajax: function(callback) {
        this.browser.sleep(1500); //config.default_timeout;
        if (callback) {
            callback();
        }
    }
};