'use strict';

var pph = require('../../../../helpers/pph'),
    ExpectedConditions = protractor.ExpectedConditions,
    promise = protractor.promise;

if (pages.dealHeader === undefined) {
    pages.dealHeader = new ftf.pageObject({
        locators: {
            dealBriefNumber: {css: "#RECORD-HEADER div.header-info div.metadata-box:nth-child(6) p.info.ng-binding"},
            dealStatusText: {css: "#RECORD-HEADER div.header-info div:nth-child(2) div.metadata-info:nth-child(1) p:nth-child(1)"},
            dealStatusValue: {css: "#RECORD-HEADER div.header-info div:nth-child(2) div.metadata-info:nth-child(1) p span"},
            dealSigningTerritoryText: {css: "#RECORD-HEADER div.header-info div:nth-child(2) div.metadata-info:nth-child(2) p:nth-child(1)"},
            dealSigningTerritoryValue: {css: "#RECORD-HEADER div.header-info div:nth-child(2) div.metadata-info:nth-child(2) p span"},
            dealTerritoriesText: {css: "#RECORD-HEADER div.header-info div:nth-child(3) div.metadata-info:nth-child(1) p "},

            dealOwnershipText: {css: "#RECORD-HEADER div.header-info div:nth-child(3) div.metadata-info:nth-child(1) div:nth-child(2) div:nth-child(1)"}
        }

    });
}