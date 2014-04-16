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
    request: require("./modules/request")
};

module.exports = global.ftf;
