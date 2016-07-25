'use strict';

let TgRoyaltiesComponent = require('./TgRoyaltiesComponent');
let tgRoyaltyPeriod = (locator) => {
    return new TgRoyaltiesComponent(locator);
}

tgRoyaltyPeriod.byModel = (model) => {
    return tgRoyaltyPeriod($(`.royalty-period-component[data-royalty-period-model="${model}"]`));
};

tgRoyaltyPeriod.closedPeriod = (index) => {
    return $$('[ng-repeat="period in periods"]').get(index);
};

tgRoyaltyPeriod.selectClosedPeriod = (index) => {
    pages.base.waitForModal();
    tgRoyaltyPeriod.closedPeriod(index).click();
};

tgRoyaltyPeriod.goButton = () => {
    return $('[ng-click="ok()"]');
};

tgRoyaltyPeriod.clickGo = () => {
    tgRoyaltyPeriod.goButton().click();
    pages.base.waitForAjax();
};

module.exports = tgRoyaltyPeriod;

