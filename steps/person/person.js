'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

steps.person = exports;

hash.personSlots = {};
hash.currentPersonSlot = null;

require(pages_path + 'person/person');

exports.usePersonSlot = function(i) {
    it('Use person slot #' + (i + 1), function() {
        var currentPersonSlot;

        if(!hash.personSlots[i]) {
            currentPersonSlot = hash.personSlots[i] = {};
            currentPersonSlot.slotIndex = i;
        }
        else {
            currentPersonSlot = hash.personSlots[i];
        }

        hash.currentPersonSlot = currentPersonSlot;
    });
};

exports.clearCurrentPersonSlot = function() {
    it('Clear current person slot', function() {
        var currentIndex = hash.currentPersonSlot.slotIndex;

        hash.currentPersonSlot = hash.personSlots[currentIndex] = {
            slotIndex: currentIndex,
        };
    });
};

exports.useBlankPersonSlot = function(i) {
    exports.usePersonSlot(i);
    exports.clearCurrentPersonSlot();
};

exports.findId = function() {
    it('Find the person ID', function() {
        pages.person.findId().then(function(value) {
            hash.currentPersonSlot.id = value;
        });
    });
};

exports.findInternalIpiNumber = function() {
    it('Find internal IPI number', function() {
        pages.person.internalIpiNumber().then(function(value) {
            hash.currentPersonSlot.ipiNumber = value;
            hash.currentPersonSlot.internalIpiNumber = value;
        });
    });


};
exports.validateIPI = function(ipi)
{ it('Validate IPI Number', function() {

    expect(pages.person.getSuisaIPI()).toBe(ipi)
});
};

exports.validateAlternativeName = function(alternativeName)
{ it('Validate Alternative Name', function() {
    expect(pages.person.getAlternativeName()).toBe(alternativeName)
});
};


