'use strict';

describe("Tango", function() {
    describe("index", function() {
        it("should display the correct title", function() {
            expect(browser.getTitle()).toBe('Music Publishing');
        });

        it("should have a search bar", function() {
            expect(element(by.id('DSP-SEARCH-BAR')).isPresent());
        });
    });
});