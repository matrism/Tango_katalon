'use strict';

module.exports = function(fnExpr) {
    var fnExprSlices = fnExpr.split('.'),

        fnCtxObjPath = fnExprSlices.slice(0, -1),

        fnCtx = recursivelyAccess(global, fnCtxObjPath),

        fnName = _.last(fnExprSlices),

        fnArgs = _.toArray(arguments).slice(1),

        fnArgsDesc = (
            fnArgs.length === 0
                ? ''
                : ' (' + fnArgs.join(', ') + ')'
        );

    it(fnExpr + fnArgsDesc, function() {
        fnCtx[fnName].apply(fnCtx, fnArgs);
    });
};
