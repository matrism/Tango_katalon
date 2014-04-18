##REST Services testing modules

####Services.js 

This module has helper methods and function for preparing and postprocessing requests to REST services.

* `services.restClient(endpoint, use_cookies)` - method creates REST service client, sets it to `restClient` property of global scope and returns it. `endpoint` - url of REST service, `use_cookies` - bool flag: if `true` - client will use cookies for auth, if `false` - client will use token for auth
* `services.parseResponseFields(response, field_name)` - method receives `response` object and `field_name` string as parameters, parses response, collects values in `response.data.field_name` and returns array of collected data.

####DataServiceClient Constructor
This class is designed for performing authenticating via tokens and cookies, get, post, put, del requests. It works with JSON and all methods parse JSON response authomatically.

* `costructor(endpoint, use_cookies)` - the constructor method of DataServiceClient. It stores `endpoint` url into its property, checks which authenticating way to use and makes preparations. 
    * If it should use cookies, it prepares headers object, host names for cookies and makes request with credentials to get access cookies. 
    * If it should use tokens, it makes request to get token with credentials data, prepares headers with token.
    
To create new instance just call `client = new DataServicesClient(url, use_cookies)` and this will create new instance of client

* #####Getting Cookies Access methods

* `client.get2(link, method, body)` - it's the helper internal method which follows all redirects and collects all cookies.
* `client.getAccessCookie()` - method that gets access cookies on e.g. CloudConsole auth service.
* `client.getAccess(path)` - method that connects e.g. CloudConsole auth access with e.g. WebConsole access to given path.

* #####Getting Token Access method

* `client.getAccessToken()` - method retrives access token and returns it.

* #####Common methods: all these methods return objects with status, and `client.get(path)` and `client.post(body, path)` return parsed response bodys:

```js
   result = {
        status: bool
        [, response: parsed_json]
   }
```

* `client.get(path)` - method for performing `GET` request to given path and returns parsed response. 
* `client.post(body, path)` - method performs `POST` request to given path with given body string and returns parsed response.
* `client.del(path)` - method performs `DEL` request to given path.
* `client.put(body, path)` - method performs `PUT` request to given path with given body string.