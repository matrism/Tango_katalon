var http = require("request-sync"),
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
        }
    };
    
module.exports = Services;