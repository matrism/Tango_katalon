
var //config = require("config"),
    login_page = {
        url: "http://security-console.devportal-ci.dspdev.wmg.com/",//config.app_home
        username: {
            css: "#username",
            id: "username",
            value: ""
        },
        password: {
            css: "#password",
            id: "password",
            value: ""
        },
        button: {
            css: "button[type='submit']"
        },
        loginWith: function(login, pass) {
            this.username.value = login;
            this.password.value = pass;
        }
    }; 

module.exports = login_page;