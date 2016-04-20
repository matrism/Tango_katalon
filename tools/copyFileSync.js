'use strict';

let fs = require('fs'),
    path = require('path');

module.exports = (src, dest) => {
    let destStat;

    try {
        destStat = fs.statSync(dest);
    }
    catch(err) {
    }

    if(destStat && destStat.isDirectory()) {
        dest = path.join(dest, path.basename(src));
    }

    fs.writeFileSync(dest, fs.readFileSync(src));
};
