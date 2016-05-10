'use strict';

var JSFtp = require('jsftp'),
    fs = require('fs'),
    promise = protractor.promise;

pages.ftp = exports;

exports.uploadAckFile = function() {

    var ftp,
        ackFileCounter = 1,
        ackNewFile,
        deferred = promise.defer(),
        ackFilePath = './envs/common/features/orgs/data/',
        ackFileName = 'CW131231021_001-WB.V21',
        ackFileFullName = ackFilePath + ackFileName,
        ackFilePrefix = ackFileName.split('_')[0],
        ftpOptionsPromise = [
            hash.ftpOptions.host,
            hash.ftpOptions.port,
            hash.ftpOptions.user,
            hash.ftpOptions.pass
        ];

    browser.controlFlow().execute(function() {
        promise.all(ftpOptionsPromise).then(function (ftpOptions) {
            ftp = new JSFtp({
                host: ftpOptions[0],
                port: ftpOptions[1],
                user: ftpOptions[2],
                pass: ftpOptions[3]
            });
            ftp.ls("/files", function(err, res) {
                if (err) {
                    console.error(err);
                } else {

                    // Get the next sequencial counter
                    res.forEach(function(file) {
                        var fileSplit = file.name.split('_'),
                            filePrefix = fileSplit[0],
                            fileCounter = fileSplit.length > 1 ? fileSplit[1].split('-')[0] : 0;
                            
                        if (filePrefix == ackFilePrefix && fileCounter >= ackFileCounter) {
                            ackFileCounter = parseInt(fileCounter) + 1;
                        }
                        ackNewFile = ackFileName.replace('001', ackFileCounter);
                    });

                    // Upload file
                    ftp.put(ackFileFullName, '/files/' + ackNewFile, function(putError) {
                        if (putError) {
                            console.error(putError);
                        } else {
                            hash.testVariables['current ACK file name'] = ackNewFile;
                            deferred.fulfill(ackNewFile);
                        }
                    });
                }
            });
        });
        return deferred.promise;
    });
};

