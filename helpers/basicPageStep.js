'use strict';
delete require.cache[__filename];

var path = require('path'),
    isomorphicPageStep = require('./isomorphicPageStep');

function iterateArrayTree(array, parents, fn) {
    array.forEach(function(child) {
        var ownParents = parents.slice();

        if(Array.isArray(child)) {
            ownParents.push(child[0]);
            iterateArrayTree(child[1], ownParents, fn);
        }
        else {
            ownParents.push(child);
            fn.apply(null, ownParents);
        }
    });
}

module.exports = function() {
    var moduleName;

    if(Array.isArray(arguments[0])) {
        iterateArrayTree(arguments[0], [], module.exports);
    }
    else {
        moduleName = path.basename(module.parent.filename, '.js');

        isomorphicPageStep({
            name: [].slice.call(arguments),
            where: module.parent.exports,
            page: pages[moduleName],
        });
    }
};
