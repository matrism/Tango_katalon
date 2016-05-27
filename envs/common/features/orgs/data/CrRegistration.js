exports.cr = {
    org: 'BMI',
    date: '2012-07-01',
    view: 'CR_2012-07-01',
    email: {
        primary: 'shilpa.gunna@wmg.com'
    },
    ftp: {
        address: '10.194.1.212',
        directory: 'files/',
        port: '21',
        username: 'Tango_Test',
        password: 'St@rwar1$',
        notification: 'Yes',
        notificationPrimaryEmail: 'shilpa.gunna@axispoint.com',
        notificationCcEmail: 'shilpa.gunnaftp@axispoint.com'
    },
    sftp: {
        address: '10.194.1.212',
        directory: 'files/',
        port: '22',
        username: 'Tango_Test',
        password: 'St@rwar1$',
        notification: 'Yes',
        notificationPrimaryEmail: 'shilpa.gunna@axispoint.com',
        notificationCcEmail: 'shilpa.gunnaftp@axispoint.com'
    },
    thirdParty: 'Lyricfind',
    ack: {
        sftp: {
            address: '10.194.1.212',
            directory: 'files/',
            port: '22',
            username: 'Tango_Test',
            password: 'St@rwar1$'
        },
        ftp: {
            address: '10.194.1.212',
            directory: 'files/',
            port: '21',
            username: 'Tango_Test',
            password: 'St@rwar1$'
        }
    }
};
