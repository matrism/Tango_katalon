var request = require("request-sync");

var DataServicesClient = function(endpoint, token) {
    this.endpoint = endpoint;
    this.token = token;
    this.serviceHeaders = {
        "user-agent": "Apache-HttpClient/4.1.1 (java 1.5)",
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": token
    };
};

DataServicesClient.prototype.get = function(path) {
    var response,
        result = {
            status: 0,
            response: ""
        };
    response = request({
        method: "GET",
        url : this.endpoint + "/#" + path,
        headers: this.serviceHeaders
    });
    result.status = response.statusCode;
    result.response = response.body;
    console.log(response.headers);
    if (response && parseInt(response.statusCode, 10) !== 200) {
        throw (new Error("GET: " + this.endpoint + "/#" + this.path + " => Response body: " + response.body));
    }
    return result;
};

DataServicesClient.prototype.post = function(json, path) {
    var response,
        result = {
            status: false,
            response: ""
        };
    response = request({
        method: "POST",
        url : this.endpoint + "/#" + path,
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
    response = request({
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
    response = request({
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