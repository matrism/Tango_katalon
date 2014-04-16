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
    var options = {
            method: "GET",
            url : this.endpoint + "/" + path,
            headers: this.serviceHeaders
        },
        result = {
            status: 0,
            response: ""
        },
        response = http(options);

    if (response && parseInt(response.statusCode, 10) === 200) { 
        result.status = true;
    } else {
        throw (new Error("GET: " + this.endpoint + "/" + this.path + " => Response body: " + response.body));
    }
    result.response = JSON.parse(response.body);
    return result;
};

DataServicesClient.prototype.post = function(json, path) {
    var options = {
            method: "POST",
            url : this.endpoint + "/" + (typeof path === "undefined" ? "" : path),
            body: json,
            headers: this.serviceHeaders
        },
        result = {
            status: false,
            response: ""
        },
        response = http(options);
        
    if (response && parseInt(response.statusCode, 10) === 200) {
        result.status = true;
    } else {
        throw (new Error("POST: " + this.endpoint + "/" + this.path + " => Response body: " + response.body));
    }
    result.response = JSON.parse(response.body);
    return result;
};

DataServicesClient.prototype.del = function(path) {
    var options = {
            method: "DELETE",
            url : this.endpoint + "/" + path,
            headers: this.serviceHeaders
        },
        result = {
            status: false
        },
        response = http(options);

    if (response && parseInt(response.statusCode, 10) === 200) {
        result.status = true;
    }
    return result;
};

DataServicesClient.prototype.put = function(json, path) {
    var options = {
            method: "PUT",
            url : this.endpoint + "/" + path,
            body: json,
            headers: this.serviceHeaders
        },
        result = {
            status: false
        },
        response = http(options);

    if (response && parseInt(response.statusCode, 10) === 200) {
        result.status = true;
    }
    return result;
};

module.exports = DataServicesClient;