global.ftf = ftf = {
    configer: require("./modules/configer"),
    pageObject: require("./modules/pageObject"),
    matchers: require("./modules/matchers"),
    helper: require("./modules/helper"),
    loginPage: require("./pages/login"),
    controller: require("./modules/controller"),
    htmlReporter: require("./modules/html_reporter")
};

module.exports = global.ftf;