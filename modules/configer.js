var env = process.env,
    _ = require('underscore'),
    cli_args = process.argv.slice(3),
    config = {},
    configer = {
        process: function(conf) {
            if (!(conf instanceof Object) || typeof conf._default_ == "undefined") {
                throw (new Error("Incorrect config object was sent to config instancer"));
            }
            config = conf;
            return configer.addParamsFromCli().setEnv().prepareConf();;
        },
        addParamsFromCli: function() {
            var splited, waiting_next = false;

            config._cli_args_ = {};

            _.each(cli_args, function(arg) {
                if(arg.indexOf("=") >= 0) {
                    splited = arg.split("=");
                    config._cli_args_[splited[0].replace(/^[-=\s]*/mg, "")] = splited[1];
                } else {
                    if (waiting_next !== false) {
                        config._cli_args_[waiting_next] = arg;
                        waiting_next = false;
                    } else {
                        waiting_next = arg.replace(/^[-=\s]*/mg, "");
                    }
                }
            });

            return this;
        },
        setEnv: function() {
            for(var i in config._env_) {
                env[i] = config._env_[i];
            }
            return this;
        },
        prepareConf: function() {
            var res = _.extend(config._default_, config[config._env_.ENV_TYPE]);
            res._cli = config._cli_args_;
            res._env = env;
            return res;
        }
    };

module.exports = configer;