'use strict';

var _ = require('lodash');

pages.manualStatement = exports;

exports.form = (function(){
    var form = {};

    form.royaltyPeriodDropdown = function () {
        return tgRoyaltyPeriod.byModel('statement.royalty_period');
    };

    form.selectFirstRoyaltyPeriod = function () {
        var dropdown = form.royaltyPeriodDropdown();

        dropdown.select(0);
    };

    form.selectRoyaltyPeriod = function (name) {
        var dropdown = form.royaltyPeriodDropdown();

        dropdown.selectValue(name);
    };

    form.processingTerritoryDropdown = function () {
        return tgDropdown(by.model('processingTerritoryModel'));
    };

    form.selectProcessingTerritory = function (val) {
        var elem = form.processingTerritoryDropdown();

        elem.selectValue(val);
        pages.base.waitForAjax();
    };

    form.incomeProviderTypeahead = function () {
        return Typeahead(by.model('statement.income_provider'));
    };

    form.typeIncomeProvider = function (name) {
        var typeahead = form.incomeProviderTypeahead();

        typeahead.sendKeys(name);
        pages.base.waitForAjax();
        typeahead.results(name).first().click();
    };

    form.setStatementDistributionPeriod = function (startYear, startMonth, endYear, endMonth) {

        element(by.model('statement.earnings_start.year')).sendKeys(startYear);
        element(by.model('statement.earnings_start.month')).sendKeys(startMonth);

        element(by.model('statement.earnings_end.year')).sendKeys(endYear);
        element(by.model('statement.earnings_end.month')).sendKeys(endMonth);
    };

    form.statementAmountInput = function () {
        return element(by.model('statement.statement_amount'));
    };

    form.setStatementAmount = function (val) {
        form.statementAmountInput().sendKeys(val);
    };

    form.exchangeRateInput = function () {
        return element(by.model('statement.exchange_rate'));
    };

    form.setExchangeRate = function (val) {
        form.exchangeRateInput().sendKeys(val);
    };

    form.createManualStatementButton = function () {
        return $('.btn-primary');
    };

    form.createManualStatement = function () {
        return form.createManualStatementButton().click().then(function(){
            pages.base.waitForAjax();
        });
    };

    return form;
})();

exports.view = (function(){
    var view = {};

    view.openStatementBlind = function () {
        var el = element(by.cssContainingText('.accordion-heading', 'Statement Information'));

        el.click();
    };

    view.expectStatementValueToBe = function (label, val) {

        var parentElem = element(by.cssContainingText('.control-label', label)).element(by.xpath('..'));

        expect(parentElem.$('.controls').getText()).toMatch(val);
    };

    view.backToStatementsViewLink = function () {
        return element(by.cssContainingText('a', 'Back to Statements View'));
    };

    view.clickBackToStatementsViewLink = function () {
        view.backToStatementsViewLink().click();
        pages.base.waitForAjax();
    };

    view.activeBlind = function () {
        return $('.accordion-body.in');
    };

    view.editButton = function () {
        var blind = view.activeBlind();

        browser.wait(EC.visibilityOf(blind));
        return blind.$('i.fa-pencil');
    };

    view.clickEditButton = function () {
        var button = view.editButton();

        browser.actions()
            .mouseMove($('.batches-accordion-content'))
            .click(button).perform();
        //return view.editButton().click();
    };

    return view;
})();

exports.list = (function(){
    var list = {};

    list.statementsRepeater = function () {
        return element.all(by.repeater('statement in statements'));
    };

    list.blindsByStatementId = function (id) {
        var blind = list.statementsRepeater().filter(function(elem){
            var statementIdElement = elem.$('.statement-id');

            return statementIdElement.getText().then(function(text){
                console.log(text, id);
                return text === id;
            });
        }).first();

        return blind;
    };

    list.openBlindByStatementId = function (id) {
        var blind = list.blindsByStatementId(id);

        blind.$('.accordion-toggle').click();
    };

    list.openFirstBlind = function () {
        var statements = list.statementsRepeater(),
            blind;

        browser.wait(EC.visibilityOfAny(statements));
        blind = statements.first();

        browserClick(blind.$('.accordion-toggle'));
        browser.sleep(500);
    };

    list.activeBlind = function () {
        return $('.accordion-body.in');
    };

    list.editButton = function () {
        return list.activeBlind().$('.btn-toggle');
    };

    list.clickEditButton = function () {
        return list.editButton().click();
    };

    list.saveButton = function () {
        return list.activeBlind().$('.control-buttons .btn-primary');
    };

    list.expectSaveButtonToBeDisabled = function () {
        var btn = list.saveButton();

        expect(btn.isEnabled()).not.toBeTruthy();
    };

    list.expectSaveButtonToBeEnabled = function () {
        var btn = list.saveButton();

        expect(btn.isEnabled()).toBeTruthy();
    };

    list.editField = function (labelText, val) {
        var label = list.activeBlind().element(by.cssContainingText('strong', labelText)),
            parentElem = label.element(by.xpath('..')),
            input = parentElem.$('[data-ng-model]');

        input.sendKeys(val);
    };

    list.clickSaveButton = function () {
        list.saveButton().click();
        pages.base.waitForAjax();
    };

    list.addBatchButton = function () {
        return list.activeBlind().element(by.buttonText('Add Batch'));
    };

    list.clickAddBatchButton = function () {
        list.addBatchButton().click();
        pages.base.waitForAjax();
    };

    list.closeStatementButton = function () {
        return $('.royalties-common-filters + .clearfix .btn-primary');
    };

    list.closeStatementById = function (id) {
        let statement = list.blindsByStatementId(id),
            closeButton = list.closeStatementButton();
        statement.$('.statement-toggle i').click();

        closeButton.click();

        browser.wait(function(){
            return closeButton.isEnabled().then((enabled) => { return !enabled});
        });
    };

    list.storeStatementAmountById = function (id) {
        let statement = list.blindsByStatementId(id);

        statement.$('.converted-amount').getText().then((amount) => {
            console.log(amount);
            hash.testVariables['lastCreatedStatementAmount'] = amount;
        });

    };

    return list;
})();

exports.batches = (function () {
    var batches = {};

    batches.batches = function () {
        return $$('.batch-item');
    };

    batches.activeBatch = function () {
        return $('.batch-item.active');
    };

    batches.batchInputs = function () {
        return $$('.batch-input input');
    };

    batches.activeBatchInput = function () {
        return $('.active .batch-input input');
    };

    batches.defaultSettingsLink = function () {
        return element(by.linkText('Default Settings'));
    };

    batches.clickDefaultSettingsLink = function () {
        return batches.defaultSettingsLink().click();
    };

    batches.defaults = {};

    batches.defaults.incomeTypeDropdown = function () {
        var model = 'activeBatch.batch_income_defaults.income_type';
        return TgDropdown(by.model(model));
    };

    batches.defaults.setIncomeType = function (name) {
        var dropdown = batches.defaults.incomeTypeDropdown();

        dropdown.click();
        dropdown.results(name).first().click();
    };

    batches.defaults.exploitationTerritoryDropdown = function () {
        var model = 'activeBatch.batch_income_defaults.exploitation_territory';
        return TgDropdown(by.model(model));
    };

    batches.defaults.setExploitationTerritory = function (name) {
        var dropdown = batches.defaults.exploitationTerritoryDropdown();

        dropdown.click();
        dropdown.results(name).first().click();
    };

    batches.selectBatch = function (i) {
        var input = batches.batchInputs().get(i);

        return input.click();
    };

    batches.deleteBatchLink = function () {
        return batches.activeBatch().$('.batch-title a.pull-right');
    };

    batches.deleteActiveBatch = function () {
        return batches.deleteBatchLink().click();
    };

    batches.expectBatchToBeDisabled = function (idx) {
        var batch = batches.batches().get(idx);

        expect(batch.evaluate('batch.isDisabled')).toBeTruthy();
    };

    batches.enterBatchAmount = function (value, i) {
        var input = batches.activeBatchInput();

        if (i) {
            input = batches.batchInputs().get(i);
        }

        pages.base.waitForAjax();
        return input.sendKeys(value);
    };

    batches.useFirstBatchSettingsLink = function () {
        return $('.use-other-batch');
    };

    batches.useFirstBatchSettings = function () {
        return batches.useFirstBatchSettingsLink().click();
    };

    batches.batchDefaultsValues = function () {
        var parent = $('.default-content'),
            dropdownTexts = parent.$$('.tg-dropdown-label').getText(),
            inputValues = parent.$$('.input-small').getAttribute('value');

        return promise.all([dropdownTexts, inputValues]).then(function(arr){
            var results = arr.reduce(function(a, b){
                return a.concat(b);
            });

            return results;
        });
    };

    batches.expectBatchDefaultsToBe = function () {
        var values = batches.batchDefaultsValues(),
            vals = _.toArray(arguments);
        expect(values).toEqual(vals);
    };

    batches.clickBatchesAccordion = function () {
        $('.batches-accordion').click();
    };

    batches.batchTotals = function () {
        return $('.batch-total > .clearfix:first-child > .pull-right strong');
    };

    batches.expectBatchTotalsToBe = function (val) {
        var totals = batches.batchTotals();

        expect(totals.getText()).toEqual(val);
    };

    batches.doneButton = function () {
        return element(by.cssContainingText('button[type="submit"].btn-primary', 'Done'));
    };

    batches.save = function () {
        return batches.doneButton().click();
    };

    batches.works = (function () {
        var works = {};

        works.newWorkTypeahead = function () {
            return Typeahead(by.model('workEntries.newWork'), false, true);
        };

        works.newWorkTypeaheadFilter = function () {
            return works.newWorkTypeahead().element(by.model('$filterTag.filter'));
        };

        works.addWorkByTitle = function (title) {
            var typeahead = works.newWorkTypeahead(),
                filter = works.newWorkTypeaheadFilter();

            filter.element(by.cssContainingText('option', 'Title')).click();
            browser.sleep(1000);
            typeahead.select(title);
        };

        works.addWorkByWorkId = function (val) {
            var typeahead = works.newWorkTypeahead(),
                filter = works.newWorkTypeaheadFilter();
                filter.element(by.cssContainingText('option', 'Work ID')).click();
                browser.sleep(1000);

                typeahead.select(val);
        };

        works.workList = function () {
            return element.all(by.repeater('(workIndex, workEntry) in activeBatch.workEntries.workInstances'));
        };

        works.work = function (idx) {
            var work = works.workList().get(idx);

            work.incomeLines = function () {
                return work.all(by.repeater('line in workEntry.incomeLines'));
            };

            return work;
        };

        works.expectNumberOfWorksToBe = function (num) {
            var workList = works.workList();

            expect(workList.count()).toEqual(num);
        };

        works.incomeLines = function (idx) {
            var workList = works.workList(),
                work = workList.last();

            if (idx) {
                work = workList.get(idx);
            }

            var lines = work.all(by.repeater('line in workEntry.incomeLines'));

            return lines;
        };

        works.addIncomeLine = function (data, idx) {
            var lines = works.incomeLines(idx),
                newLine;

                lines.count().then(function(num){
                    newLine = lines.get(num-1);


                _.forIn(data, function (val, key) {
                    if (['period', 'incomeType', 'territory'].indexOf(key) > -1) {
                        return;
                    }

                    newLine.element(by.model('line.' + key)).sendKeys(val);
                });
            });

        };

        works.editIncomeLine = function (workIndex, lineIndex, label, val) {
            var lines, line, input; 
                lines = works.incomeLines(workIndex);
                line = lines.get(lineIndex);

                input = line.$('.table-cell.' + label).$('input');

            input.clear();
            input.sendKeys(val);
        };

        works.duplicateLineLink = (i) => {
            i = i || 0;
            return $$('[data-ng-click="duplicateLastIncomeLine(workEntry)"]').get(i);
        };

        works.duplicateLine = (i) => {
            works.duplicateLineLink(i).click();
        };

        return works;
    })();

    return batches;
})();

