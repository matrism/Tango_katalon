'use strict';

let TgRoyaltiesComponent = require('./TgRoyaltiesComponent');
let tgRoyaltyPeriod = (locator) => {
    return new TgRoyaltiesComponent(locator);
}

tgRoyaltyPeriod.byModel = (model) => {
    return tgRoyaltyPeriod($(`.royalty-period-component[data-royalty-period-model="${model}"]`));
};

module.exports = tgRoyaltyPeriod;

