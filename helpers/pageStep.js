'use strict';
delete require.cache[__filename];

var path = require('path'),
    changeCase = require('change-case');

function pageStep (page) {
    page = page || path.basename(module.parent.filename, '.js');

    return function (title, methodName) {
        methodName = methodName || changeCase.camelCase(title);

        module.parent.exports[methodName] = function () {
            var args = arguments, 
                argsList, 
                itTitle = title;

            if (args.length) {
                argsList = Array.prototype.slice.call(args).join(', ');
                itTitle = [title, ' (', argsList, ')'].join('');
            }

            it(itTitle, function(){
                pages[page][methodName].apply(this, args);
            })
        }
    }
}

module.exports = pageStep;
