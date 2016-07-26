if (pages.login === undefined) {
    pages.login = new ftf.loginPage(_tf_config, element(By.css(".brand .navbar-brand")));
}

module.exports = pages.login;
