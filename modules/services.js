var http = require("./request"),
    _ = require("underscore"),
    DataServiceClient = require("./dataServicesClient"),
    Services = {
        prepare: function(conf) {
            this.tutorials_service_url = conf.urls.devportal_service + "/api/v1/tutorials";
            this.applications_service_url = conf.urls.webconsole_service + "/api/v1/applications";
            this.webconsole_service_url = conf.urls.webconsole_service;
        },
        tutorials_service_url: "",
        tutorialClient: function() {
            global.tut_client = new DataServiceClient(Services.tutorials_service_url);
            return global.tut_client;
        },
        applications_service_url: "",
        applicationClient: function() {
            global.app_client = new DataServiceClient(Services.applications_service_url);
            return global.app_client;
        },
        webconsole_service_url: "",
        webconsoleClient: function() {
            global.webconsole_client = new DataServiceClient(Services.webconsole_service_url, true);
            return global.webconsole_client;
        },
        parseResponseFields: function(res, field) {
            var array = [], entity, i;
                
            for (i in res.response.data) {
                entity = res.response.data[i];
                array.push(entity[field]);
            }
            return array;
        },
        getAllFatesCategories: function(res) {
            var array = [], terms, i;
            
            for (i in res.response.facets) {
                terms = res.response.facets[i];
                array.push(terms["terms"]["name"]);
            }
            return array;
        },
        getItemFieldNames: function(res) {
            var array = [], items, i, j, field;
            
            for (i in res.response.data) {
                items = res.response.data[i];
                for (j in items) {
                    field = items[j];
                    array.push(field[0]);
                }
            }
            return _.uniq(array);
        }
    };
    
module.exports = Services;
