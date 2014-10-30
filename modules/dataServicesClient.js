var http = require("./request"),
    url = require("url"),

DataServicesClient = function(endpoint, use_cookies, debug) {
    use_cookies = use_cookies || false;
    this.endpoint = endpoint;
    this.debug = debug || false;
    if (use_cookies) {
        this.auth_host = url.parse(_tf_config.urls.sso).host;
        this.console_host = url.parse(endpoint).host;
        this.cookies = {};
        this.AuthHeaders = { 
            'User-Agent':       'Apache-HttpClient/4.1.1 (java 1.5)',
            'accept':           'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'content-type':     'application/x-www-form-urlencoded'
        };
        this.serviceHeaders = {
            "User-Agent":       "Apache-HttpClient/4.1.1 (java 1.5)",
            "accept":           "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "content-type":     "application/json"
        };
        this.getAccessCookie();
    } else {
        this.serviceHeaders = {
            "User-Agent":       "Apache-HttpClient/4.1.1 (java 1.5)",
            "accept":           "application/json",
            "content-type":     "application/json",
            "Authorization":    this.getAccessToken()
        };
    }
};

DataServicesClient.prototype.get2 = function(link, method, body) {
    var host = url.parse(link).host, options, res, i, cookie, cookie_as_arr, cookie_split, cookies = [], new_link, tmp_url;
    body = body || null;
    method = method || "GET";
    
    switch (host) {
        case this.auth_host: 
            options = {
                url: link,
                headers: this.AuthHeaders,
                method: method
            };
            break;
            
        case this.console_host:
            options = {
                method: method,
                url : link,
                headers: this.serviceHeaders
            };
            break;
            
        default:
            throw new Error("Incorrect host: " + link);
    }
    
    if (body !== null) {
        options.body = body;
    }
    res = http(options);
    if (this.debug) {
        console.log("~~~~res headers", res.headers);
    }

    if ((res.statusCode == 200 || res.statusCode == 304 || res.statusCode == 302)) {
        
        if (typeof this.cookies[host] === "undefined") {
            this.cookies[host] = {};
        }
        if (typeof res.headers["set-cookie"] !== "undefined") {
            cookie_split = res.headers["set-cookie"].split(";");
            for (i in cookie_split) {
                cookie = cookie_split[i];
                cookie_as_arr = cookie.split("=");
                if (typeof cookie_as_arr[1] === "undefined")
                    cookie_as_arr[1] = true;
                this.cookies[host][cookie_as_arr[0]] = cookie_as_arr[1];
            }
            for (i in this.cookies[host]) {
                cookies.push(i + "=" + this.cookies[host][i]);
            }
            if (this.debug) {
                console.log("");
                console.log("~~~~getting cookies");
                console.log("~~~~host", host);
                console.log("~~~~res set-cookie", res.headers["set-cookie"]);
                console.log("~~~~cookies", cookies);
                console.log("~~~~typeof", typeof cookies);
                console.log("");
            }
        
            switch (host) {
                case this.auth_host: 
                    this.AuthHeaders['Cookie'] = cookies.join("; ");
                    break;
                case this.console_host:
                    this.serviceHeaders['Cookie'] = cookies.join("; ");
                    break;
            }
        }
        if (res.statusCode == 200 || res.statusCode == 304) {
            return res;
        } else if (res.statusCode == 302) {
            new_link = res.headers['Location'] || res.headers['location'];
            try {
                tmp_url = url.parse(new_link);
                if (tmp_url.host === null) {
                    throw new Error();
                }
            } catch (e) {
                tmp_url = url.parse(link);
                new_link = tmp_url.protocol + "//" + host + new_link;
            }
            return this.get2(new_link, "GET");
        }
    } else {
        throw new Error("Could not reach " + options.url + "\n    Response: " + JSON.stringify(res));
    }
};

DataServicesClient.prototype.getAccessCookie = function() {
    var res = this.get2(_tf_config.urls.sso, "POST", "username=" + _tf_config.user_name + "&password=" + _tf_config.user_password);
    return this;
};

DataServicesClient.prototype.getAccess = function(path) {
    var response = this.get2(this.endpoint + "/" + path);
    return this;
};

DataServicesClient.prototype.getAccessToken = function() {
    var options = {
        url: _tf_config.urls.sso + "/oauth/token",
        auth: {
            username: _tf_config.client_id,
            password: _tf_config.client_secret
        },
        headers: {
            "Accept": "application/json"
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
        throw new Error("Failed to obtain access_token for " + _tf_config.client_id + "\n    Response: " + JSON.stringify(res));
    }
    return "Bearer " + JSON.parse(res.body).access_token;
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
        response = http(options, null, debug);

    if (this.debug) {
        console.log("~~~headers:", this.serviceHeaders);
    }

    if (response && parseInt(response.statusCode, 10) === 200) { 
        result.status = true;
    } else {
        throw (new Error("GET: " + options.url + "\n    Response: " + JSON.stringify(response)));
    }
    try {
        result.response = JSON.parse(response.body);
    } catch(e) {
        throw (new Error(response.body));
    }
    if (this.debug) {
        console.log("~~~get response:", JSON.stringify(response));
    }
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
        response = http(options, null, debug);

    if (response && parseInt(response.statusCode, 10) === 200 || parseInt(response.statusCode, 10) === 204) {
        result.status = true;
    } else {
        throw (new Error("POST: " + this.endpoint + "/" + path + "\n    Response: " + JSON.stringify(response)));
    }
    result.response = parseInt(response.statusCode, 10) === 204 ? "" : JSON.parse(response.body);
    if (this.debug) {
        console.log("~~~post response:", JSON.stringify(response));
    }
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
        response = http(options, null, debug);

    if (response && parseInt(response.statusCode, 10) === 200) {
        result.status = true;
    }
    if (this.debug) {
        console.log("~~~del response:", JSON.stringify(response));
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
        response = http(options, null, debug);

    if (response && parseInt(response.statusCode, 10) === 200) {
        result.status = true;
    }
    if (this.debug) {
        console.log("~~~put response:", JSON.stringify(response));
    }
    return result;
};

module.exports = DataServicesClient;