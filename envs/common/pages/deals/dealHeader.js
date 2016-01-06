'use strict';

var pph = require('../../../../helpers/pph'),
    ExpectedConditions = protractor.ExpectedConditions,
    promise = protractor.promise;

if (pages.dealHeader === undefined) {
    pages.dealHeader = new ftf.pageObject({
        locators: {
            dealBriefNumberText: {css: "#RECORD-HEADER div.header-info div.metadata-box:nth-child(6) div.metadata-info:nth-child(1) p:nth-child(1)"},
            dealBriefNumberValue: {css: "#RECORD-HEADER div.header-info div.metadata-box:nth-child(6) div.metadata-info:nth-child(1) p.info.ng-binding:nth-child(2)"},
            dealContractTypeText: {css: "#RECORD-HEADER div.header-info div:nth-child(1)  div.metadata-info:nth-child(1) p:nth-child(1)"},
            dealContractTypeValue: {css: "#RECORD-HEADER div.header-info div:nth-child(1)  div.metadata-info:nth-child(1) p:nth-child(2)"},
            dealStatusText: {css: "#RECORD-HEADER div.header-info div:nth-child(2) div.metadata-info:nth-child(1) p:nth-child(1)"},
            dealStatusValue: {css: "#RECORD-HEADER div.header-info div:nth-child(2) div.metadata-info:nth-child(1) p span"},
            dealSigningTerritoryText: {css: "#RECORD-HEADER div.header-info div:nth-child(2) div.metadata-info:nth-child(2) p:nth-child(1)"},
            dealSigningTerritoryValue: {css: "#RECORD-HEADER div.header-info div:nth-child(2) div.metadata-info:nth-child(2) p span"},
            dealTerritoriesText: {css: "#RECORD-HEADER div.header-info div:nth-child(3) div.metadata-info:nth-child(1) p"},
            dealOwnershipText: {css: "#RECORD-HEADER div.header-info div:nth-child(3) div.relative.clearfix.ownership:nth-child(2) div.metadata-label"},
            dealOwnershipValue: {css: "#RECORD-HEADER div.header-info div:nth-child(3) div.relative.clearfix.ownership:nth-child(2) div[data-tg-territory-label='getPristineDeal().territory_of_ownership.territories']"},
            dealAdministrationText: {css: "#RECORD-HEADER div.header-info div:nth-child(3) div.relative.clearfix.administration:nth-child(3) div.metadata-label"},
            dealAdministrationValue: {css: "#RECORD-HEADER div.header-info div:nth-child(3) div.relative.clearfix.administration:nth-child(3) div[data-tg-territory-label='getPristineDeal().territory_of_administration.territories']"},
            dealStartDateText: {css: "#RECORD-HEADER div.header-info div:nth-child(4) div.metadata-info:nth-child(1) p:nth-child(1)"},
            dealStartDateValue: {css: "#RECORD-HEADER div.header-info div:nth-child(4) div.metadata-info:nth-child(1) p:nth-child(2)"},
            dealEndDateText: {css: "#RECORD-HEADER div.header-info div:nth-child(4) div.metadata-info:nth-child(2) p:nth-child(1)"},
            dealEndDateValue: {css: "#RECORD-HEADER div.header-info div:nth-child(4) div.metadata-info:nth-child(2) p:nth-child(2)"},

            dealArtistText: {css: "#RECORD-HEADER div.header-info div.metadata-box:nth-child(5) div.metadata-info:nth-child(1) p:nth-child(1)"},
            dealArtistValue: {css: "#RECORD-HEADER div.header-info div.metadata-box:nth-child(5) div.metadata-info:nth-child(1) p:nth-child(2)"},

            dealLastUpdateText: {css: "#RECORD-HEADER div.header-info div.metadata-box:nth-child(6) div.metadata-info:nth-child(1) p:nth-child(1)"},
            dealLastUpdateValue: {css: "#RECORD-HEADER div.header-info div.metadata-box:nth-child(6) div.metadata-info:nth-child(1) p.info.ng-binding:nth-child(2)"},

        }
    });
}