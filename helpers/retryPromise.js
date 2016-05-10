'use strict';

module.exports = function (fn, maxRetries, description, errors) {
    errors = errors || [];

    description = description || 'Promise';

    return promise.when(fn()).then(null, function (error) {
        let compositeErrorMsg;

        errors.push(error);

        if(errors.length >= maxRetries) {
            compositeErrorMsg = 'Maximum number of retries exhausted (' + maxRetries + '):';

            errors.forEach((error, i) => {
                compositeErrorMsg += '\n#' + i + ': ' + error.message;
            });

            throw new Error(compositeErrorMsg);
        }
        else {
            console.error(
                description, 'has failed: Retrying (' +
                errors.length, 'of', maxRetries + ').'
            );

            return retryPromise(fn, maxRetries, description, errors);
        }
    });
};
