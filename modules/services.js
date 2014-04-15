var http = require("request-sync"),
    _ = require("underscore"),
    Services = {
        getAccessToken: function() {
            var options = {
                //"#{$sso}/oauth/token"
                url: _tf_config.urls.sso + "/oauth/token",
                auth: {
                    username: _tf_config.client_id,
                    password: _tf_config.client_secret
                },
                headers: {
                    'Accept': 'application/json'
                },
                qs: {
                    username: _tf_config.user_name,
                    password: _tf_config.user_password,
                    grant_type: "password"
                },
                method: "POST"
            },            
            res = http(options);
            if (parseInt(res.statusCode) !== 200) {
                throw new Error("Failed to obtain access_token for #{" + _tf_config.client_id + "}")
            }
            return "Bearer #{" + JSON.parse(res.body).access_token + "}";
        },
        tutorials_service_url: _tf_config.urls.devportal_service,
        tutorialClient: function() {
            return new DataServiceClient(Services.tutorials_service_url, Services.getAccessToken());
        },
        applications_service_url: _tf_config.urls.webconsole_service,
        applicationClient: function() {
            return new DataServiceClient(Services.applications_service_url, Services.getAccessToken());
        },
        parseResponseFields: function(res, field) {
            var array = [], entity, i;
                
            for (i in res['data']) {
                entity = res['data'][i];
                array.push(entity[field]);
            }
            return array;
        },
        getAllFatesCategories: function(res) {
            var array = [], terms, i;
            
            for (i in res['facets']) {
                terms = res['facets'][i];
                array.push(terms['terms']['name']);
            }
            return array;
        },
        getItemFieldNames: function(res) {
            var array = [], items, i, j, field;
            
            for (i in res['data']) {
                items = res['data'][i];
                for (j in items) {
                    field = items[j];
                    array.push(field[0]);
                }
            }
            return _.uniq(array);
        },
        getApplicationsFromResponse: function(res) {
            return JSON.parse(res);
        }
    };
    
module.exports = Services;