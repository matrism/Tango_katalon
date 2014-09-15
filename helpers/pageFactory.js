'use strict';

var typeMapper = {
        'button': function (elDef) {
            var button = this.default(elDef),
                oldClickFunction = button.click;

            button.click = function (saferClick) {
                var self = this;
                return this.isDisplayed().then(function (present) {
                    if (present) {
                        self.hover();

                        if (saferClick) {
                            var saferClickAction = function (location, screenSize) {
                                if (location.y > screenSize.height - 100) {
                                    var scroll = location.y - screenSize.height / 2;
                                    scroll = scroll < 0 ? 0 : scroll;
                                    return browser.executeScript('window.scrollTo(' + location.x + ',' + scroll + ');').then(function () {
                                        return oldClickFunction.call(self);
                                    });
                                } else {
                                    return oldClickFunction.call(self);

                                }

                            };

                            return browser.manage().window().getSize().then(function (size) {
                                return browser.executeScript(function(elem) {
                                    elem.scrollIntoView(false);
                                }, self).then(function () {
                                    return self.getLocation().then(function (location) {
                                        return saferClickAction(location, size)
                                    });
                                });
                            });

                        } else {
                            return oldClickFunction.call(self);

                        }
                    }
                });
            };
            return button;
        },
        'repeater': function (elDef) {
            var el = elDef.by ? element.all(elDef.by) : elDef.element;
            return el;
        },
        'default': function (elDef) {
            var el = elDef.by ? element(elDef.by) : elDef.element;
            el.hover = function () {
                browser.actions().mouseMove(this).perform();
            };

            return el;
        }
    },

    parseElements = function (holder, elements) {
        var el, type;

        for (el in elements) {
            type = elements[el].type;
            if (typeof typeMapper[type] === 'function') {
                holder[el] = typeMapper[type](elements[el]);

            } else {
                holder[el] = typeMapper.default(elements[el]);

            }

        }
    };

module.exports = {
    buildPage: function (name, definition) {
        var Page = function () {
            if (definition) {
                if (definition.sections) {
                    for (var property in definition.sections) {
                        this[property] = {};
                        parseElements(this[property], definition.sections[property].elements);
                    }
                }
            }

            this.name = name;
            this.definition = definition;
            this.get = function () {
                browser.get(this.definition.url);
            };

        };

        return Page;
    }
}