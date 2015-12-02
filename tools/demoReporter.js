'use strict';

exports.specStarted = function(spec) {
    browser.executeScript(function(spec){
        var $overlay;

        if (!window.$) { return; }

        $overlay = $('body > #TAT_REPORTER_OVERLAY');

        if (!$overlay.length) {
            $overlay = (
                $('<div>')
                    .attr('id', 'TAT_REPORTER_OVERLAY')
                    .css('pointer-events', 'none')
                    .css('position', 'fixed')
                    .css('top', 0)
                    .css('right', 0)
                    .css('z-index', 9999)
                    .css('width', '200px')
                    .css('padding', '30px 10px')
                    .css('text-align', 'center')
                    .css('color', 'white')
                    .css('background-color', 'rgba(0, 0, 0, 0.3)')
            );

            $('body').prepend($overlay);
        }

        $overlay.text(spec.description);

    }, spec);
};
