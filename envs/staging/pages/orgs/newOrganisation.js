'use strict';

pages.newOrganisation = exports = module.exports = (
    require('../../../common/pages/orgs/newOrganisation')
);

exports.subpublisherTypeahead = function () {
    var elem = exports.subpublishersRepeater().last().element(by.model('modularEditModels.model.publisher'));

    elem.resultsContainer = () => {
        return $('.tg-typeahead__suggestions-group');
    };

    elem.results = function () { 
        return $$('.tg-typeahead__suggestions-group-item');
    };

    return elem;
};

exports.fillRequiredFieldsForLastSubpublisher = function (name, territory) {
    var subpublisherTypeahead = exports.subpublisherTypeahead(),
        territoryOfControl = exports.subpublishersRepeater().last().element(by.model('modularEditModels.model.territoryOfControl')),
        territoryTypeahead = Typeahead(territoryOfControl.element(by.model('$dataHolder.internalModel')), true),
        results;

    pages.base.scrollIntoView(subpublisherTypeahead);
    subpublisherTypeahead.element(by.model('$term')).sendKeys(name);

    browser.wait(EC.visibilityOf(subpublisherTypeahead.resultsContainer()));

    subpublisherTypeahead.results().first().click();

    territoryOfControl.$('.tg-typeahead__tags-text').click();
    territoryTypeahead.sendKeys(territory);
    pages.base.waitForAjax();
    territoryTypeahead.results().filter(pph.matchTextExact(territory)).first().click();
};

exports.statementRecipientOptions = () => {
    return $('[tg-modular-edit-id="payment_statement"]').$$(
        '.e2e-payment-statement-format'
    );
};

exports.statementRecipientSubOptions = (option) => {
    return option.all(by.repeater('item in ::format.formatAndDelivery'));
};
