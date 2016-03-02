'use strict';

var path = require('path'),
    basename = path.basename,
    fs = require('fs'),
    mkdirpSync = require('mkdirp').sync,
    globSync = require('glob').sync,
    hbs = require('handlebars'),

    template = hbs.compile(fs.readFileSync(
        __dirname + '/report-dirs-index.hbs', { encoding: 'utf8' }
    )),

    htmlReportsPath = __dirname + '/../reports/html',

    directories = globSync(htmlReportsPath + '/*/').map(function(path) {
        return basename(path);
    }),

    output = template({ directories: directories }),

    outputDirectory = htmlReportsPath + '/single';

mkdirpSync(outputDirectory);

fs.writeFileSync(outputDirectory + '/reporter.htm', output);
