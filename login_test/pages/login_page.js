if (pages.login === undefined) {
    pages.login = new ftf.loginPage(_tf_config, element(By.css("a.dropdown-toggle.ng-binding")));
}

module.exports = pages.login;
