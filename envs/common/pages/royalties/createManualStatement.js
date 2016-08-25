"use strict";

var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;

if (pages.createManualStatement === undefined) {
    pages.createManualStatement = new ftf.pageObject({
        locators: {
            processingTerritoryButton: {css: "div[data-ng-model='processingTerritoryModel'] div.tg-dropdown-button"},
            incomeProviderInputField: {css: "div[name='income_provider'] input"},
            royaltyPeriodButton: {css: "div[data-royalty-period-model='statement.royalty_period'] div.btn-group.ng-scope"},
            royaltyFilterPeriodButton: {css: "div[data-royalty-period-model='filters.royalty_period'] div.btn-group.ng-scope"},
            startStatementDistributionYear: {css: "input[data-ng-model='statement.earnings_start.year']"},
            startStatementDistributionMonthDropDown: {css: "select[data-ng-model='statement.earnings_start.month'] option"},
            endStatementDistributionYear: {css: "input[data-ng-model='statement.earnings_end.year']"},
            endStatementDistributionMonthDropDown: {css: "select[data-ng-model='statement.earnings_end.month'] option"},
            statementAmountInputField: {css: "input[name='statement_amount']"},
            statementAmountCurrencyButton: {css: "div.clearfix.statement.ng-scope div:nth-child(6) a.btn.dropdown-toggle.pull-left"},
            commissionRateInputField: {css: "input[data-ng-model='statement.commission_percentage']"},
            exchangeRateInputField: {css: "input[name='exchange_rate']"},
            createTheManualStatementButton: {css: "button[data-ng-click='onSaveClick()']"},
            batchAmountInputField: {css: "input[data-ng-model='batch.amount']"},
            defaultSettingsButtonLink: {css: "div[data-ng-click='stateHolder.showBatchesDefault = !stateHolder.showBatchesDefault']"},
            incomeTypeDropDownButton: {css: "div[data-ng-model='activeBatch.batch_income_defaults.income_type'] div.tg-dropdown-button"},
            exploitationTerritoryDropDownButton: {css: "div[data-ng-model='activeBatch.batch_income_defaults.exploitation_territory'] div.tg-dropdown-button"},
            worksSearchInputField: {css: "div[data-ng-model='workEntries.newWork'] input"},
            receivedAmountInputField: {css: "div.amount.pull-left.table-cell input"},
            manualStatementIdNumber: {css: "div.RECORD-HEADER h1"},
            useBatch1SettingsCheckBox: {css: "div.pull-right.use-other-batch.ng-scope i.fa.pull-left.fa-square-o"},
            batch1LinkManualStatement: {css: "button[data-ng-click='checkNavigation(statement, getStatementRouteParams(statement, batch), statementForm)']"},
            backToStatementViewLink: {css: "a[data-ui-sref='royalties.statements({statementId: statement.statement_id})']"},
            closedBatchCheckBox: {css: "i[data-ng-click='stateHolder.isEditingBatches && openCloseBatch(activeBatch) && $event.stopPropagation()']"},
            addBatchLinkManualStatement: {css: "button[data-ng-click='checkNavigation(statement, getStatementRouteParams(statement), statementForm)']"},
            incomeStatementGroupDropDownButton: {css: "div[data-ng-model='dataHolder.selected.incomeGroup'] div.tg-dropdown-button"},
            breakdownDropDownButton: {css: "div[data-ng-model='dataHolder.selected.breakdown'] div.tg-dropdown-button"}
        },

        selectTheDesiredProcessingTerritory: function (country) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.createManualStatement.elems.processingTerritoryButton));
            pages.createManualStatement.elems.processingTerritoryButton.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(country) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        selectTheDesiredRoyaltyPeriod: function (royaltyPeriod) {
            var desiredOption;
            pages.createManualStatement.elems.royaltyPeriodButton.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.dropdown-menu li.ng-scope.status-OPEN"))));
            browser.driver.findElements(By.css("ul.dropdown-menu li.ng-scope.status-OPEN"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(royaltyPeriod) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        fillIntoTheIncomeProviderFieldSpecificValue: function (incomeProvider) {
            pages.base.scrollIntoView(pages.createManualStatement.elems.incomeProviderInputField);
            pages.createManualStatement.elems.incomeProviderInputField.sendKeys(incomeProvider);
        },

        selectTheRandomValueForIncomeProviderDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[0].click();
                });
        },

        fillIntoTheStatementDistributionPeriodStartYear: function (year) {
            pages.createManualStatement.elems.startStatementDistributionYear.sendKeys(year);
        },

        selectTheDesiredStatementDistributionPeriodStartMonth: function (month) {
            var desiredOption;
            browser.driver.findElements(By.css("select[data-ng-model='statement.earnings_start.month'] option"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(month) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        fillIntoTheStatementDistributionPeriodEndYear: function (year) {
            pages.createManualStatement.elems.endStatementDistributionYear.sendKeys(year);
        },

        selectTheDesiredStatementDistributionPeriodEndMonth: function (month) {
            var desiredOption;
            browser.driver.findElements(By.css("select[data-ng-model='statement.earnings_end.month'] option"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(month) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        fillIntoTheStatementAmountInputField: function (amount) {
            pages.createManualStatement.elems.statementAmountInputField.sendKeys(amount);
        },

        selectTheCurrencyFromStatementAmountCurrencyDropDown: function (currency) {
            pages.createManualStatement.elems.statementAmountCurrencyButton.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.dropdown-menu.pull-right li.ng-scope"))));
            var desiredOption;
            browser.driver.findElements(By.css("ul.dropdown-menu.pull-right li.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(currency) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        fillIntoTheCommissionRateInputField: function (value) {
            pages.createManualStatement.elems.commissionRateInputField.clear();
            pages.createManualStatement.elems.commissionRateInputField.sendKeys(value);
        },

        fillIntoTheExchangeRateInputField: function (value) {
            pages.createManualStatement.elems.exchangeRateInputField.sendKeys(value);
        },

        clickOnTheCreateButtonManualStatement: function () {
            pages.base.scrollIntoView(pages.createManualStatement.elems.createTheManualStatementButton);
            pages.createManualStatement.elems.createTheManualStatementButton.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createManualStatement.elems.batchAmountInputField));
        },

        fillIntoTheBatchAmountValue: function (amount) {
            pages.createManualStatement.elems.batchAmountInputField.sendKeys(amount);
        },

        clickOnTheDefaultSettingsLink: function () {
            pages.createManualStatement.elems.defaultSettingsButtonLink.click();
        },

        selectTheDesiredIncomeTypeValueFromDropDown: function (incomeType) {
            pages.createManualStatement.elems.incomeTypeDropDownButton.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[data-ng-model='activeBatch.batch_income_defaults.income_type'] ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))));
            var desiredOption;
            browser.driver.findElements(By.css("div[data-ng-model='activeBatch.batch_income_defaults.income_type'] ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(incomeType) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        pages.base.scrollIntoView(desiredOption);
                        desiredOption.click();
                    }
                });
        },

        selectTheDesiredExploitationTerritoryValueFromDropDown: function (territory) {
            pages.createManualStatement.elems.exploitationTerritoryDropDownButton.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[data-ng-model='activeBatch.batch_income_defaults.exploitation_territory'] ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))));
            var desiredOption;
            browser.driver.findElements(By.css("div[data-ng-model='activeBatch.batch_income_defaults.exploitation_territory'] ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(territory) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        pages.base.scrollIntoView(desiredOption);
                        desiredOption.click();
                    }
                });
        },

        selectTheDesiredWorkTypeToSearchFromDropDown: function (workType) {
            var desiredOption;
            pages.base.scrollIntoView(element(by.css("div[data-ng-model='workEntries.newWork'] select")));
            browser.driver.findElements(By.css("div[data-ng-model='workEntries.newWork'] select option"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(workType) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        fillIntoTheWorksInputFieldDesiredWork: function (workIdentifier) {
            pages.createManualStatement.elems.worksSearchInputField.sendKeys(workIdentifier);
        },

        selectTheDesiredWorkForManualStatement: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container"))
                .then(function (options) {
                    var element = options[0];
                    element.click();
                })
        },

        selectAndAddTheWorkForManualStatement: function () {
            var desiredOption;
            var createWorkText = "Create Shell Work to Defer Payment";
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.tg-typeahead__suggestions.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(createWorkText) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                                else {
                                    browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container"))
                                        .then(function (options) {
                                            var element = options[0];
                                            element.click();
                                        })
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                        browser.driver.findElement(By.css("textarea[data-ng-model='workEntry.work.creatorsName']")).sendKeys("test");
                    }
                });
        },

        fillIntoTheAmountReceivedValueWorkIRowJ: function (i, j, amount) {
            pages.base.scrollIntoView(element(by.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.amount.pull-left.table-cell input")));
            browser.driver.findElement(By.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.amount.pull-left.table-cell input")).sendKeys(amount);
            browser.sleep(2000);
        },

        fillIntoTheAmountReceivedValue: function (amount) {
            pages.base.scrollIntoView(pages.createManualStatement.elems.receivedAmountInputField);
            pages.createManualStatement.elems.receivedAmountInputField.clear();
            pages.createManualStatement.elems.receivedAmountInputField.sendKeys(amount);
            browser.sleep(2000);
        },

        fillIntoTheSourceValueWorkIRowJ: function (i, j, source) {
            pages.base.scrollIntoView(element(by.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.source.pull-left.table-cell input")));
            browser.driver.findElement(By.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.source.pull-left.table-cell input")).sendKeys(source);
        },

        selectTheDesiredIncomeTypeWorkIRowJ: function (i, j, incomeType) {
            pages.base.scrollIntoView(element(by.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.income-type.pull-left.table-cell div.tg-dropdown-button")));
            browser.driver.findElement(By.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.income-type.pull-left.table-cell div.tg-dropdown-button")).click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.income-type.pull-left.table-cell div[data-ng-model='line.incomeType'] ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))));
            var desiredOption;
            browser.driver.findElements(By.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.income-type.pull-left.table-cell div[data-ng-model='line.incomeType'] ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(incomeType) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        pages.base.scrollIntoView(desiredOption);
                        desiredOption.click();
                    }
                });
        },

        selectTheDesiredTerritoryWorkIRowJ: function (i, j, country) {
            pages.base.scrollIntoView(element(by.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.territory.pull-left.table-cell div.tg-dropdown-button")));
            browser.driver.findElement(By.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.territory.pull-left.table-cell div.tg-dropdown-button")).click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.territory.pull-left.table-cell div[data-ng-model='line.territory'] ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))));
            var desiredOption;
            browser.driver.findElements(By.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.territory.pull-left.table-cell div[data-ng-model='line.territory'] ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(country) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        pages.base.scrollIntoView(desiredOption);
                        desiredOption.click();
                    }
                });
        },

        fillIntoTheYearFromPeriodWorkIRowJ: function (i, j, year) {
            pages.base.scrollIntoView(element(by.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.period-from.pull-left.table-cell input[data-ng-model='line.period.from.year']")));
            browser.driver.findElement(By.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.period-from.pull-left.table-cell input[data-ng-model='line.period.from.year']")).sendKeys(year);
        },

        selectTheDesiredMonthFromPeriodWorkIRowJ: function (i, j, month) {
            pages.base.scrollIntoView(element(by.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.period-from.pull-left.table-cell select[data-ng-model='line.period.from.month'] option")));
            var desiredOption;
            browser.driver.findElements(By.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.period-from.pull-left.table-cell select[data-ng-model='line.period.from.month'] option"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(month) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });

        },

        fillIntoTheYearToPeriodWorkIRowJ: function (i, j, year) {
            pages.base.scrollIntoView(element(by.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.period-to.pull-left.table-cell input[data-ng-model='line.period.to.year']")));
            browser.driver.findElement(By.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.period-to.pull-left.table-cell input[data-ng-model='line.period.to.year']")).sendKeys(year);
        },

        selectTheDesiredMonthToPeriodWorkIRowJ: function (i, j, month) {
            pages.base.scrollIntoView(element(by.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.period-to.pull-left.table-cell select[data-ng-model='line.period.to.month'] option")));
            var desiredOption;
            browser.driver.findElements(By.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.period-to.pull-left.table-cell select[data-ng-model='line.period.to.month'] option"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(month) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });

        },

        fillIntoTheUnitsWorkIRowJ: function (i, j, unitsNumber) {
            pages.base.scrollIntoView(element(by.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.units.pull-left.table-cell input[data-ng-model='line.units']")));
            browser.driver.findElement(By.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.units.pull-left.table-cell input[data-ng-model='line.units']")).sendKeys(unitsNumber);
        },

        fillIntoTheProductDetailsWorkIRowJ: function (i, j, productDetails) {
            pages.base.scrollIntoView(element(by.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.product-details.pull-left.table-cell input[data-ng-model='line.productDetail']")));
            browser.driver.findElement(By.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.product-details.pull-left.table-cell input[data-ng-model='line.productDetail']")).sendKeys(productDetails);
        },

        fillIntoTheSharePercentWorkIRowJ: function (i, j, sharePercent) {
            pages.base.scrollIntoView(element(by.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.share.pull-left.table-cell input[data-ng-model='line.share']")));
            browser.driver.findElement(By.css("div.works-entries.ng-scope > div > div.ng-scope:nth-child(" + i + ") div.clearfix.table-row.ng-scope:nth-child(" + (j + 1) + ") div.share.pull-left.table-cell input[data-ng-model='line.share']")).sendKeys(sharePercent);
            browser.sleep(1000);
        },

        clickOnTheDoneButtonManualStatement: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.createManualStatement.elems.createTheManualStatementButton));
            pages.base.scrollIntoView(pages.createManualStatement.elems.createTheManualStatementButton);
            pages.createManualStatement.elems.createTheManualStatementButton.click();
        },

        selectTheDesiredFilterRoyaltyPeriod: function (royaltyPeriod) {
            var desiredOption;
            pages.createManualStatement.elems.royaltyFilterPeriodButton.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.dropdown-menu li.ng-scope.status-OPEN"))));
            browser.driver.findElements(By.css("ul.dropdown-menu li.ng-scope.status-OPEN"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(royaltyPeriod) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        editTheExpandedManualStatementNumberIFromList: function (i) {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.accordion-inner"))));
            browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.accordion-inner")).click();
            browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") button[data-ng-click='toggleEditState(statement, $index, statementForm)']")).click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") textarea[data-ng-model='statement.account_reference']"))));
        },

        clickOnTheBatch1LinkManualStatementEditMode: function () {
            pages.base.scrollIntoView(pages.createManualStatement.elems.batch1LinkManualStatement);
            pages.createManualStatement.elems.batch1LinkManualStatement.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createManualStatement.elems.batchAmountInputField));
        },

        clickOnTheBackToStatementViewLink: function () {
            pages.base.scrollIntoView(pages.createManualStatement.elems.backToStatementViewLink);
            pages.createManualStatement.elems.backToStatementViewLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createManualStatement.elems.processingTerritoryButton));
        },

        clickOnTheAddBatchLinkManualStatementEditMode: function () {
            pages.base.scrollIntoView(pages.createManualStatement.elems.addBatchLinkManualStatement);
            pages.createManualStatement.elems.addBatchLinkManualStatement.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createManualStatement.elems.batchAmountInputField));
        },

        fillIntoTheBatchAmountDesiredValueNumberI: function (i, amount) {
            pages.base.scrollIntoView(element(by.css("ul.nav.nav-tabs.pull-left li:nth-child(" + (i + 1) + ") input[data-ng-model='batch.amount']")));
            browser.driver.findElement(By.css("ul.nav.nav-tabs.pull-left li:nth-child(" + (i + 1) + ") input[data-ng-model='batch.amount']")).sendKeys(amount);
        },

        clickOnTheUseBatch1SettingsCheckBox: function () {
            pages.base.scrollIntoView(pages.createManualStatement.elems.useBatch1SettingsCheckBox);
            pages.createManualStatement.elems.useBatch1SettingsCheckBox.click();
        },

        clickOnTheClosedBatchCheckBox: function () {
            pages.base.scrollIntoView(pages.createManualStatement.elems.closedBatchCheckBox);
            pages.createManualStatement.elems.closedBatchCheckBox.click();
        },

        clickOnTheRematchButtonLinkForIncomeStatementsLineNumberI: function (i) {
            pages.base.scrollIntoView(element(by.css("div.accordion div[data-ng-repeat='incomeWork in getIncomeWorks()']:nth-child(" + i + ") a[data-ng-click='incomeWork.rematch = true']")));
            browser.driver.findElement(By.css("div.accordion div[data-ng-repeat='incomeWork in getIncomeWorks()']:nth-child(" + i + ") a[data-ng-click='incomeWork.rematch = true']")).click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.accordion div[data-ng-repeat='incomeWork in getIncomeWorks()']:nth-child(" + i + ") div[data-ng-model='incomeWork.selectedTangoWork'] input"))));
        },

        selectTheDesiredWorkTypeToSearchFromDropDownIncomeLineI: function (workType, i) {
            var desiredOption;
            pages.base.scrollIntoView(element(by.css("div.accordion div[data-ng-repeat='incomeWork in getIncomeWorks()']:nth-child(" + i + ") div[data-ng-model='incomeWork.selectedTangoWork'] select")));
            browser.driver.findElements(By.css("div.accordion div[data-ng-repeat='incomeWork in getIncomeWorks()']:nth-child(" + i + ") div[data-ng-model='incomeWork.selectedTangoWork'] select option"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(workType) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        fillIntoTheWorksInputFieldDesiredWorkIncomeLineNumberI: function (workId, i) {
            pages.base.scrollIntoView(element(By.css("div.accordion div[data-ng-repeat='incomeWork in getIncomeWorks()']:nth-child(" + i + ") div[data-ng-model='incomeWork.selectedTangoWork'] input")));
            browser.driver.findElement(By.css("div.accordion div[data-ng-repeat='incomeWork in getIncomeWorks()']:nth-child(" + i + ") div[data-ng-model='incomeWork.selectedTangoWork'] input")).sendKeys(workId);
        },

        confirmOnTheMatchWorkOnIncomeLineNumberIAfterIsSelected: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.modal-dialog.ng-scope"))));
            pages.base.scrollIntoView(element(by.css("div.modal-footer button[data-ng-click='data.rematchMatchedIncomeWork()']")));
            browser.driver.findElement(by.css("div.modal-footer button[data-ng-click='data.rematchMatchedIncomeWork()']")).click();
        },

        selectTheDesiredFilterRoyaltyPeriodIncomeRates: function (royaltyPeriod) {
            var desiredOption;
            browser.driver.findElement(By.css("div[data-periods-filter-function='filterRoyaltyPeriod(period)'] div.btn-group.ng-scope")).click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.dropdown-menu li.ng-scope.status-OPEN"))));
            browser.driver.findElements(By.css("ul.dropdown-menu li.ng-scope.status-OPEN"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(royaltyPeriod) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        selectTheSpecificStatementIncomeGroupValueDropDown: function (incomeStatementGroup) {
            var desiredOption;
            pages.base.scrollIntoView(pages.createManualStatement.elems.incomeStatementGroupDropDownButton);
            pages.createManualStatement.elems.incomeStatementGroupDropDownButton.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-model='dataHolder.selected.incomeGroup'] ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))));
            browser.driver.findElements(By.css("div[data-ng-model='dataHolder.selected.incomeGroup'] ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(incomeStatementGroup) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        selectTheSpecificBreakdownValueDropDown: function (breakdown) {
            var desiredOption;
            pages.base.scrollIntoView(pages.createManualStatement.elems.breakdownDropDownButton);
            pages.createManualStatement.elems.breakdownDropDownButton.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-model='dataHolder.selected.breakdown'] ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))));
            browser.driver.findElements(By.css("div[data-ng-model='dataHolder.selected.breakdown'] ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(breakdown) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        }


    })
}
