'use strict';

var ssh2 = require('ssh2'),
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
            hash.ftpOptions.directory,
            hash.ftpOptions.port,
            hash.ftpOptions.user,
            hash.ftpOptions.pass
        ];

    browser.controlFlow().execute(function() {
        promise.all(ftpOptionsPromise).then(function (ftpOptions) {

            var conn = new ssh2(),
                ftpDirectory = ftpOptions[1];

            conn.connect({
                host: ftpOptions[0],
                port: ftpOptions[2],
                username: ftpOptions[3],
                password: ftpOptions[4]
            });

            conn.on('ready', () => {
                conn.sftp((err, sftp) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    sftp.readdir(ftpDirectory, (err, files) => {
                        let readStream,
                            writeStream;

                        if (err) {
                            console.error(err);
                            return;
                        }

                        // Get the next sequencial counter
                        files.forEach((file) => {
                            let fileSplit = file.filename.split('_'),
                                filePrefix = fileSplit[0],
                                fileCounter = 0;

                            if (fileSplit.length > 1) {
                                fileCounter = fileSplit[1].split('-')[0];
                            }

                            if (filePrefix == ackFilePrefix
                                && fileCounter >= ackFileCounter) {
                                ackFileCounter = parseInt(fileCounter) + 1;
                            }
                            ackNewFile = ackFileName.replace('001', ackFileCounter);
                        });

                        // Upload file
                        console.log('Uploading...', ackNewFile);
                        readStream = fs.createReadStream(ackFileFullName);
                        writeStream = sftp.createWriteStream(ftpDirectory + ackNewFile);
                        writeStream.on('close', () => {
                            hash.testVariables['current ACK file name'] = ackNewFile;
                            console.log('Uploaded');
                            deferred.fulfill(ackNewFile);
                            conn.end();
                        });
                        readStream.pipe(writeStream);
                    });
                });
            });
        });
        return deferred.promise;
    });
};
