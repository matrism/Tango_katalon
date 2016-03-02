'use strict';

pages.royaltyRatesSummaryTable = exports;

exports.loader = function () {
    return $(
        '[data-ng-show="' +
            'dataHolder.paginationProcessors.dealScopes.isBusy()' +
        '"]'
    );
};

exports.waitLoader = function () {
    browser.wait(function () {
        return pph.matchesCssSelector(exports.loader(), '.ng-hide');
    });
};

exports.filterDropdown = function () {
    return element(by.model('RS.dataHolder.filters.contractPeriod'));
};

exports.filterBy = function (val) {
    var el = exports.filterDropdown();

    pages.base.scrollIntoView(el);

    pages.base.selectDropdownOption(el, val);

    pages.base.waitForAjax();
};

exports.list = function () {
    return $$('.rate-summary-table__scope');
};

exports.find = function find (spec) {
    var rstEl = elementFromSpec(spec, find.by, {
        Number: 'index'
    });

    pages.base.scrollIntoView(rstEl);

    rstEl.scope = (function () {
        var s = {};

        s.descriptionLabel = function () {
            return rstEl.element(by.binding(' ::dealScope.description '));
        };

        s.description = function () {
            return asAlways(
                s.descriptionLabel(), 'scrollIntoView', 'getAllText', 'trim'
            );
        };

        return s;
    })();

    rstEl.contractPeriod = (function () {
        var cp = {};

        cp.list = function () {
            return rstEl.all(by.repeater('scopeCP in scopeCPList'));
        };

        cp.find = function find (spec) {
            var cpEl = elementFromSpec(spec, find.by, {
                Number: 'index',
                String: 'string'
            });

            pages.base.scrollIntoView(cpEl);

            cpEl.description = function (i) {
                return asAlways(cpEl, 'scrollIntoView', 'getAllText', 'trim');
            };

            return cpEl;
        };

        cp.find.by = (function () {
            var by = {};

            by.index = function (spec) {
                return cp.list().get(spec.index);
            };

            by.string = function (spec) {
                return by.string[spec.string](spec);
            };

            by.string.single = function () {
                var list = cp.list();

                pages.base.scrollIntoView(list);

                expect(list.count()).toBe(1);

                return list.first();
            };

            return by;
        })();

        return cp;
    })();

    rstEl.rateSet = (function () {
        var rs = {};

        rs.list = function () {
            return rstEl.$$('.rate-summary-table__scope-rates');
        };

        rs.find = function find (spec) {
            var rsEl = elementFromSpec(spec, find.by, {
                Number: 'index'
            });

            pages.base.scrollIntoView(rsEl);

            rsEl.header = function () {
                return rsEl.$('.rate-summary-table__scope-item');
            };

            rsEl.descriptionLabel = function () {
                return rsEl.header().element(by.binding(
                    ' ::RSScopeItem.rateSet.description '
                ));
            };

            rsEl.description = function (i) {
                return asAlways(
                    rsEl.descriptionLabel(), 'scrollIntoView', 'getAllText', 'trim'
                );
            };

            rsEl.incomeProviderLabel = function () {
                return rsEl.header().element(by.binding(
                    ' ::getIncomeProvidersString(' +
                        'RSScopeItem.rateSet.income_providers' +
                    ') '
                ));
            };

            rsEl.incomeProvider = function () {
                return asAlways(
                    rsEl.incomeProviderLabel(),
                    'scrollIntoView', 'getAllText', 'trim'
                );
            };

            rsEl.effectiveDateLabel = function () {
                return rsEl.header().element(by.binding(
                    ' ::RSScopeItem.rateSet.effective_date '
                ));
            };

            rsEl.effectiveDate = function () {
                return asAlways(
                    rsEl.effectiveDateLabel(),
                    'scrollIntoView', 'getAllText', 'trim'
                );
            };

            rsEl.toggleButton = function () {
                return rsEl.header().$('.rate-summary-table__collapse-btn');
            };

            rsEl.toggle = function () {
                asAlways(rsEl.toggleButton(), 'scrollIntoView', 'click');

                return pages.base.waitForAjax();
            };

            rsEl.group = (function () {
                var g = {};

                g.list = function () {
                    return rsEl.all(by.repeater(
                        '(RSGroupItemKey, RSGroupItemVal) in ' +
                        'RSScopeItem.rateSet.data'
                    ));
                };

                g.find = function find (spec) {
                    var gEl = elementFromSpec(spec, find.by, {
                        Number: 'index'
                    });

                    pages.base.scrollIntoView(gEl);

                    gEl.header = function () {
                        return gEl.$('.rate-summary-table__rate-group-item');
                    };

                    gEl.keyLabel = function () {
                        return gEl.header().element(by.binding(
                            ' ::RSGroupItemKey '
                        ));
                    };

                    gEl.key = function () {
                        return asAlways(
                            gEl.keyLabel(), 'scrollIntoView', 'getAllText', 'trim'
                        );
                    };

                    gEl.toggleButton = function () {
                        return gEl.header().$(
                            '.rate-summary-table__collapse-btn'
                        );
                    };

                    gEl.toggle = function () {
                        return asAlways(
                            gEl.toggleButton(), 'scrollIntoView', 'click'
                        );
                    };

                    gEl.incomeTypes = (function () {
                        var it = {};

                        it.list = function () {
                            return gEl.$$(
                                '.rate-summary-table__rate-type-item-wrap'
                            );
                        };

                        it.find = function find (spec) {
                            var itEl = elementFromSpec(spec, find.by, {
                                Number: 'index'
                            });

                            pages.base.scrollIntoView(itEl);

                            itEl.nameLabel = function () {
                                return itEl.element(by.binding(
                                    ' ::RSRateTypeItem.income_type_name '
                                ));
                            };

                            itEl.name = function () {
                                return asAlways(
                                    itEl.nameLabel(),
                                    'scrollIntoView', 'getAllText', 'trim'
                                );
                            };

                            itEl.rateItems = (function () {
                                var ri = {};

                                ri.list = function () {
                                    return itEl.$$(
                                        '.rate-summary-table__rate-item'
                                    );
                                };

                                ri.find = function find (spec) {
                                    var riEl = elementFromSpec(spec, find.by, {
                                        Number: 'index'
                                    });

                                    riEl.nameLabel = function () {
                                        return riEl.element(by.binding(
                                            ' ::getRateTypeNameByCode(RSRateItem) '
                                        ));
                                    };

                                    riEl.name = function () {
                                        return asAlways(
                                            riEl.nameLabel(),
                                            'scrollIntoView', 'getAllText', 'trim'
                                        );
                                    };

                                    riEl.percentageLabel = function () {
                                        return riEl.element(by.binding(
                                            ' ::getRatePercentage(RSRateItem) '
                                        ));
                                    };

                                    riEl.percentage = function () {
                                        return asAlways(
                                            riEl.percentageLabel(),
                                            'scrollIntoView', 'getAllText', 'trim'
                                        );
                                    };

                                    riEl.applicationMethodLabel = function () {
                                        return riEl.element(by.binding(
                                            ' ::getRateApplicationMethod(' +
                                                'RSRateItem.rate_application_method_code' +
                                            ') '
                                        ));
                                    };

                                    riEl.applicationMethod = function () {
                                        return asAlways(
                                            riEl.applicationMethodLabel(),
                                            'scrollIntoView', 'getAllText', 'trim'
                                        );
                                    };

                                    return riEl;
                                };

                                ri.find.by = (function () {
                                    var by = {};

                                    by.index = function (spec) {
                                        return ri.list().get(spec.index);
                                    };

                                    return by;
                                })();

                                return ri;
                            })();

                            return itEl;
                        };

                        it.find.by = (function () {
                            var by = {};

                            by.index = function (spec) {
                                return it.list().get(spec.index);
                            };

                            return by;
                        })();

                        return it;
                    })();

                    return gEl;
                };

                g.find.by = (function () {
                    var by = {};

                    by.index = function (spec) {
                        return g.list().get(spec.index);
                    };

                    return by;
                })();

                return g;
            })();

            return rsEl;
        };

        rs.find.by = (function () {
            var by = {};

            by.index = function (spec) {
                return rs.list().get(spec.index);
            };

            return by;
        })();

        return rs;
    })();

    return rstEl;
};

exports.find.by = (function() {
    var by = {};

    by.index = function (spec) {
        return exports.list().get(spec.index);
    };

    return by;
})();
