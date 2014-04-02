var _ = require('underscore'),
    cli_args = process.argv.slice(3),
    config = {},
    configer = {
        env: process.env,
        process: function(conf) {
            if (!(conf instanceof Object) || typeof conf._default_ == "undefined") {
                throw (new Error("Incorrect config object was sent to config instancer"));
            }
            config = conf;
            configer.addParamsFromCli();
            configer.parseCliForCommands();
            return configer.prepareConf();;
        },
        parseCliForCommands: function() {
            var res = config._cli_args_.resolution, p, rep = config._cli_args_.reporting;
            if (!_.isEmpty(res)) {
                p = res.split("x");
                config._system_.resolution.width = parseInt(p[0]);
                config._system_.resolution.height = parseInt(p[1]);
            }
            if (!_.isEmpty(rep)) {
                config._system_.reporting = rep;
            }
        },
        getParamsFromCli: function() {
            var splited, waiting_next = false, tmp = {}, splited_val;
            
            _.each(cli_args, function(arg) {
                if(arg.indexOf("=") >= 0) {
                    splited = arg.split("=");
                    splited_val = splited[1].split(",");
                    if (splited_val.length < 2) {
                        tmp[splited[0].replace(/^[-=\s]*/mg, "")] = splited[1];
                    } else {
                        tmp[splited[0].replace(/^[-=\s]*/mg, "")] = splited_val;
                    }
                    waiting_next = false;
                } else {
                    if (waiting_next !== false) {
                        
                        //arg is val
                        if (arg.length === arg.replace(/^[-=\s]*/mg, "").length) {
                            splited_val = arg.split(",");
                            if (splited_val.length < 2) {
                                tmp[waiting_next] = arg;
                            } else {
                                tmp[waiting_next] = splited_val;
                            }
                            waiting_next = false;
                        //arg is new key
                        } else {
                            tmp[waiting_next] = true;
                            waiting_next = arg.replace(/^[-=\s]*/mg, "");
                        }
                    } else {
                        waiting_next = arg.replace(/^[-=\s]*/mg, "");
                    }
                }
            });
            
            if (waiting_next && tmp[waiting_next] == undefined) {
                tmp[waiting_next] = true;
            } 
            
            return tmp;
        },
        addParamsFromCli: function() {
            config._cli_args_ = configer.getParamsFromCli();
            return this;
        },
        prepareConf: function() {
            var res = _.extend(config._default_, config[config._env_.ENV_TYPE]);
            res._cli = config._cli_args_;
            res._env = config._env_;
            res._system_ = config._system_;
            return res;
        }
    };

module.exports = configer;