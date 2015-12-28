'use strict';

var fs = require('fs'),
    mkdirp = require('mkdirp');

module.exports = function(options) {
    mkdirp.sync(options.dest);

    this.specCount = 0;

    this.specDone = function(spec) {
        var path = options.dest + '/' + (this.specCount++) + '.html';

        browser.executeScript(payload).then(function(html) {
            fs.writeFileSync(path, '<!doctype html>\n' + html);
        });
    };
};

function payload() {
    function toArray(value) {
        return [].slice.call(value);
    }

    var els = toArray(document.querySelectorAll('*'));

    function cloneSimpleNeighborNodes(el, direction) {
        var cursorNode = el;

        var iterationPropertyName = {
            prev: 'previousSibling',
            next: 'nextSibling',
        }[direction];

        while(cursorNode = cursorNode[iterationPropertyName]) {
            if(cursorNode.nodeType === Node.ELEMENT_NODE) {
                break;
            }

            el.parentElement.sbClone.appendChild(cursorNode.cloneNode());
        }
    }

    var snapbackBaseEl = (function() {
        var el = document.createElement('base');

        el.href = document.baseURI;

        return el;
    })();

    var snapbackScriptEl = (function() {
        var el = document.createElement('script');

        el.textContent = '(' + (function() {
            document.addEventListener('DOMContentLoaded', function() {
                document.body.addEventListener('click', function(event) {
                    if(event.target.tagName !== 'A') {
                        return;
                    }

                    event.preventDefault();
                });
            });
        }).toString() + ')();';

        return el;
    }());

    function makeStyleFromLink(link) {
        var style = document.createElement('style');

        style.textContent = toArray(link.sheet.cssRules).reduce(function(css, rule) {
            return css + rule.cssText;
        }, '');

        return style;
    }

    function clearTmpData() {
        els.forEach(function(el) {
            delete el.sbClone;
        });
    }

    try {
        els.forEach(function(el) {
            if(el.closest('iframe') !== null) {
                return;
            }

            var clone = el.sbClone = document.createElement(el.tagName);

            if(el.tagName === 'HEAD') {
                clone.appendChild(snapbackBaseEl);
                clone.appendChild(snapbackScriptEl);
            }

            var replacement;

            if(
                el.tagName === 'LINK'
                && el.rel.toLowerCase() === 'stylesheet'
                && !el.closest('iframe')
            ) {
                try {
                    //replacement = makeStyleFromLink(el);
                }
                catch(err) {
                    console.info("Failed to replace stylesheet link with style tag:", err);
                }
            }

            var parent = el.parentElement;

            if(parent) {
                cloneSimpleNeighborNodes(el, 'prev');

                parent.sbClone.appendChild(replacement || clone);

                if(!el.nextElementSibling) {
                    cloneSimpleNeighborNodes(el, 'next');
                }
            }

            if(el.tagName === 'IFRAME') {
                clone.innerHTML = "iframes are not supported.";
                return;
            }

            toArray(el.attributes).forEach(function(attr) {
                if(
                    attr.name.startsWith('on')
                    || (
                        el.tagName === 'SCRIPT'
                        && attr.name === 'src'
                    )
                ) {
                    return;
                }

                clone.setAttribute(attr.name, attr.value);
            });

            if(el.value) {
                clone.setAttribute('value', el.value);
            }

            if(el.tagName !== 'SCRIPT' && el.children.length === 0) {
                toArray(el.childNodes).forEach(function(node) {
                    clone.appendChild(node.cloneNode());
                });
            }

            if(el.classList.contains('m-is-sticky') || el.getAttribute('data-tg-affix') !== null) {
                clone.style.position = 'static';
            }
        });

        var cloneRoot = els[0].sbClone;

        clearTmpData();

        return cloneRoot.outerHTML;
    }
    catch(err) {
        clearTmpData();
        throw err;
    }
}
