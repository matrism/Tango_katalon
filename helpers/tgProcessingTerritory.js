'use strict';
let TgRoyaltiesComponent = require('./TgRoyaltiesComponent');
let tgProcessingTerritory = (locator) => {
    return new TgRoyaltiesComponent(locator);
}

tgProcessingTerritory.byModel = (model) => {
    return tgProcessingTerritory($(`.processing-territory-component[data-processing-territory-model="${model}"]`));
};

module.exports = tgProcessingTerritory;

