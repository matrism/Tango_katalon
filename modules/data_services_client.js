var request = require('request');

var DataServicesClient = function(endpoint, token) {
    this.endpoint = endpoint;
    this.token = token;
};

DataServicesClient.serviceHeaders = {
    "User-Agent": "Apache-HttpClient/4.1.1 (java 1.5)",
    "Accept": "application/json",
    "Content-Type": "application/json",
    "authorization": this.token
};

DataServicesClient.prototype.get = function() {
    var _this = this,
        res = {
            status: 0,
            response: ""
        };
    request({
        method: "GET",
        url : _this.endpoint + "/" + _this.token,
        headers: _this.serviceHeaders
    }, function(error, response, body) {
        if (error) {
            throw (new Error(error));
        }
        res.status = response.statusCode;
        res.response = response.body;
        if (response.statusCode !== 200) {
            throw (new Error("GET: " + _this.endpoint + "/" + _this.path + " => Response body: " + body));
        }
    });
    return res;
};

DataServicesClient.prototype.post = function(json, path) {
    var _this = this,
        res = {
            status: false,
            response: ""
        };
    request({
        method: "POST",
        url : _this.endpoint + "/" + (typeof path !== undefined) ? path : "",
        body: json,
        headers: _this.serviceHeaders
    }, function(error, response, body) {
        if (error) {
            throw (new Error(error));
        }
        if (response.statusCode === 200) {
            res.status = true;
            res.response = body;
        } else {
            res.response = response;
        }
    });
    return res;
};

DataServicesClient.prototype.del = function(path) {
    var _this = this,
        res = {
            status: false
        };
    request({
        method: "DELETE",
        url : _this.endpoint + "/" + (typeof path !== undefined) ? path : "",
        headers: _this.serviceHeaders
    }, function(error, response) {
        if (error) {
            throw (new Error(error));
        }
        if (response.statusCode === 200) {
            res.status = true;
        }
    });
    return res;
};

DataServicesClient.prototype.put = function(json, path) {
    var _this = this,
        res = {
            status: false
        };
    request({
        method: "PUT",
        url : _this.endpoint + "/" + (typeof path !== undefined) ? path : "",
        body: json,
        headers: _this.serviceHeaders
    }, function(error, response) {
        if (error) {
            throw (new Error(error));
        }
        if (response.statusCode === 200) {
            res.status = true;
        }
    });
    return res;
};

module.exports = DataServicesClient;