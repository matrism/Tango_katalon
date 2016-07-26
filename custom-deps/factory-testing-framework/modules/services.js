var http = require("./request"),
    _ = require("underscore"),
    DataServiceClient = require("./dataServicesClient"),
    Services = {
        restClient: function(endpoint, use_cookies, debug) {
            use_cookies = use_cookies || false;
            global.restClient = new DataServiceClient(endpoint, use_cookies, debug);
            return global.restClient;
        },
        parseResponseFields: function(res, field) {
            var array = [], entity, i;
                
            for (i in res.response.data) {
                entity = res.response.data[i];
                array.push(entity[field]);
            }
            return array;
        }
    };
    
module.exports = Services;
