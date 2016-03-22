'use strict';

pages.endRules = exports;

exports.addEndRulesLink = function () {
    return element(by.cssContainingText('.mdrc-list a', 'Add End Rules'));
};

exports.clickAddEndRulesLink = function () {
    var button = exports.addEndRulesLink();

    browser.wait(EC.visibilityOf(button));
    pages.base.scrollIntoView(button);
    button.click();
    browser.sleep(500);
};

exports.ruleSets = function () {
    return $$('.create-rules-list .create-rule');
};

exports.setRule = function (endRule, index) {
    var ruleSets = exports.ruleSets(),
        ruleSet = ruleSets.last(),
        endDate = endRule.endRule,
        endDateParam = endRule.endRuleParam,
        params = endRule.ruleParams,
        endDateElem, rules;

    if (index) {
        ruleSet = ruleSets.get(index);
    }

    endDateElem = tgDropdown(ruleSet.element(by.model('rule.end_date_type')), true, true);
    endDateElem.selectValue(endDate);

    rules = ruleSet.$$('.rule-container').first();

    if (endDateParam) {
        ruleSet.element(by.model('rule.specifiedDate')).$('input').sendKeys(endDateParam);
    }

    if (params[0] != undefined) {
        tgDropdown(rules.element(by.model('condition.left_value')), true, true).selectValue(params[0]);
    }

    if (params[1] != undefined) {
        rules.element(by.model('condition.left_value_percent')).sendKeys(params[1]);
    }

    if (params[2] != undefined) {
        rules.element(by.model('condition.notification')).click();
    }

    if (params[3] != undefined) {
        tgDropdown(rules.element(by.model('condition.operator')), true, true).selectValue(params[3]);
    }

    if (params[4] != undefined) {
        tgDropdown(rules.element(by.model('condition.right_value')), true, true).selectValue(params[4]);
    }

    if (params[5] != undefined) {
        rules.element(by.model('condition.right_value_date')).$('input').sendKeys(params[5]);
    }
};

exports.saveButton = function () {
    return $('.end-rules-popup .CONTROLS .btn-primary');
};

exports.saveRules = function () {
    var button = exports.saveButton();

    button.click();
    browser.wait(EC.invisibilityOf(button));
};

exports.addRuleLink = function () {
    return element(by.cssContainingText('.end-rules-popup a', 'Add Rule'));
};

exports.clickAddRuleLink = function () {
    var link = exports.addRuleLink();
    pages.base.scrollIntoView(link);
    link.click();
    browser.sleep(500);
};

