global.ftf = ftf = {
    configer: require("./modules/configer"),
    pageObject: require("./modules/pageObject"),
    matchers: require("./modules/matchers"),
    helper: require("./modules/helper"),
    loginPage: require("./pages/login"),
    controller: require("./modules/controller"),
    htmlReporter: require("./modules/htmlReporter"),
    services: require("./modules/services"),
    dataServicesClient: require("./modules/dataServicesClient"),
    request: require("./modules/request"),
    mobile: {
        configer: require("./modules/configer"),
        pageObject: require("./modules/pageObject"),
        matchers: require("./modules/matchers"),
        helper: require("./modules/helper"),
        loginPage: require("./pages/login_mobile"),
        controller: require("./modules/controller"),
        request: require("./modules/request"),
        dataServicesClient: require("./modules/dataServicesClient"),
        htmlReporter: require("./modules/htmlReporter")
    }
};

module.exports = global.ftf;