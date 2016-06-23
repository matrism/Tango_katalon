'use strict';

let fs = require('fs-extra'),
    tmp = require('tmp'),
    zipDir = require('zip-folder');

module.exports = albCode => {
    let tmpDir = tmp.dirSync().name,
        outputTmpDir = tmp.dirSync().name,

        excelFilePath = `${outputTmpDir}/TEST_ALBUM_${albCode}.xlsx`;

    fs.copySync(`${__dirname}/excelUploadTemplateFiles`, tmpDir, {
        clobber: true
    });

    let sharedStringsFilePath = `${tmpDir}/xl/sharedStrings.xml`,

        sharedStringsData = fs.readFileSync(sharedStringsFilePath, {
            encoding: 'utf8'
        });

    fs.writeFileSync(sharedStringsFilePath, sharedStringsData.replace(
        /{{albCode}}/g, albCode
    ));

    let deferred = promise.defer();

    zipDir(tmpDir, excelFilePath, err => {
        if(err) {
            deferred.reject(err);
            return;
        }

        deferred.fulfill(excelFilePath);
    });

    return deferred.promise;
};
