var repl = require('repl'),
    os = require('os'),

    $files = require('./files'),

    $emptyCmd = '(' + os.EOL + ')',

    $absurdTimeout = 1e8,

    $nextUp = null,
    $replCallback = null,

    $break = false,

    $vs = [],
    $v;

$vs.clear = function() {
    this.length = 0;
};
console.log(jasmine.DEFAULT_TIMEOUT_INTERVAL);
steps.login.itLogin();

it('Run REPL', () => {
    console.log(jasmine.DEFAULT_TIMEOUT_INTERVAL);
    var replServer = repl.start({
        input: process.stdin,
        output: process.stdout,

        eval: function (cmd, context, filename, callback) {
            if (cmd === $emptyCmd) {
                return callback();
            }

            cmd = cmd.trim();

            if(cmd.startsWith('@')) {
                cmd = 'browser.executeScript(function() {' +
                    'return (' + cmd.slice(1) + ');' +
                '})';
            }

            eval('$nextUp = () => (' + cmd + ')');

            $replCallback = (err, val) => {
                if(err === undefined && val === undefined) {
                    return callback();
                }

                if(val !== undefined) {
                    $v = val;

                    if(val !== $vs) {
                        $vs.unshift(val);
                    }
                }

                callback(err, val);
            };
        }
    });

    replServer.defineCommand('reload', function () {
        $files.load();
        this.displayPrompt();
    });

    replServer.defineCommand('orphan', () => {
        process.exit();
    });

    replServer.on('exit', () => {
        $break = true;
    });

    browser.wait(() => {
        var deferred;

        if(!$nextUp) {
            return $break;
        }

        deferred = promise.defer();

        try {
            deferred.fulfill($nextUp());
        }
        catch(err) {
            deferred.reject(err);
        }

        $nextUp = null;

        return deferred.promise.then(val => {
            if(val === undefined) {
                $replCallback();
                return;
            }

            $replCallback(null, val);
        }, err => {
            $replCallback(err);
        }).then(() => $break);
    }, $absurdTimeout);
}, $absurdTimeout);
