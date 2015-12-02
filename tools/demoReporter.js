'use strict';

exports.specStarted = function(result) {
    browser.executeScript(function(result){
        if (!window.$) { return; }
        var $reportWindow = $('body > #TAT_REPORTER');

        if (!$reportWindow.length) {
            $reportWindow = $('<div id="TAT_REPORTER" style="pointer-events: none; width: 200px; padding:30px 10px; color:#FFF; background:rgba(0,0,0,0.3); text-align:center; position:fixed; top:0;right:0; z-index: 9999;"></div>');

            $('body').prepend($reportWindow);
        }

        $reportWindow.text(result.description);

    }, result);
};
