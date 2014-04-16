var http = require("./request"),

DataServicesClient = function(endpoint, token) {
    this.endpoint = endpoint;
    this.token = token;
    this.serviceHeaders = {
        "User-Agent": "Apache-HttpClient/4.1.1 (java 1.5)",
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": token
    };
};

DataServicesClient.prototype.get = function(path) {
    var response,
        result = {
            status: 0,
            response: ""
        },
        url = this.endpoint,
        token = this.token,
        options = {
            method: "GET",
            url : url + "/" + path,
            headers: {
                'User-Agent': "Apache-HttpClient/4.1.1 (java 1.5)",
                'Accept': "application/json, text/javascript; q=0.01",
                'Content-Type': "application/json",
                'Authorization': token
            }
        };
        
    response = http(options);
    result.status = response.statusCode;
    result.response = response.body;
    if (response && parseInt(response.statusCode, 10) !== 200) {
        throw (new Error("GET: " + this.endpoint + "/" + this.path + " => Response body: " + response.body));
    }
    return result;
};

DataServicesClient.prototype.post = function(json, path) {
    var response,
        result = {
            status: false,
            response: ""
        };
    response = http({
        method: "POST",
        url : this.endpoint + "/" + path,
        body: json,
        headers: this.serviceHeaders
    });
    if (response && parseInt(response.statusCode, 10) === 200) {
        result.status = true;
    }
    result.response = response.body;
    return result;
};

DataServicesClient.prototype.del = function(path) {
    var response,
        result = {
            status: false
        };
    response = http({
        method: "DELETE",
        url : this.endpoint + "/" + path,
        headers: this.serviceHeaders
    });
    if (response && parseInt(response.statusCode, 10) === 200) {
        result.status = true;
    }
    return result;
};

DataServicesClient.prototype.put = function(json, path) {
    var response,
        result = {
            status: false
        };
    response = http({
        method: "PUT",
        url : this.endpoint + "/" + path,
        body: json,
        headers: this.serviceHeaders
    });
    if (response && parseInt(response.statusCode, 10) === 200) {
        result.status = true;
    }
    return result;
};

module.exports = DataServicesClient;