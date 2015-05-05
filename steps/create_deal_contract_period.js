"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var randomId = require("../helpers/randomId");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(steps_path + "create_deal_contract_period");
require(pages_path + "create_deal_contract_period");
module.exports = steps.create_deal_contract_period = {};


module.exports.fillMandatoryFieldsContractPeriod = function () {
    it("Fill mandatory fields contract period", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.startDate()));
        pages.create_deal_contract_period.fillStartActualDate();
        pages.create_deal_contract_period.fillTargetEndMonths();
    });
};

module.exports.clickOnAddMdrc = function () {
    it("Click on add new MDRC to contract period", function () {
        pages.create_deal_contract_period.clickOnAddMdrcLink();
        browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.mdrcQuantity()));
    });
};

module.exports.chooseIncompleteMdrcOption = function () {
    it("Choose incomplete MDRC option ", function () {
        pages.create_deal_contract_period.clickOnIncompleteOption();
    });
};

module.exports.chooseDeemedCompleteMdrcOption = function () {
    it("Choose deemed complete MDRC option", function () {
        pages.create_deal_contract_period.clickOnDeemedCompleteOption();
        browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.mdrcDateCompleted()));
    });
};

module.exports.chooseCompleteMdrcOption = function () {
    it("Choose complete MDRC option", function () {
        pages.create_deal_contract_period.clickOnCompleteOption();
    });
};

module.exports.checkIncompleteMdrcOptionIsSelected = function () {
    it("Check incomplete MDRC option is selected ", function () {
        var test = pages.create_deal_contract_period.incompleteMdrc().getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

module.exports.checkDeemedCompleteMdrcOptionIsSelected = function () {
    it("Check deemed complete MDRC option is selected ", function () {
        var test = pages.create_deal_contract_period.deemedCompleteMdrc().getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

module.exports.checkCompleteMdrcOptionIsSelected = function () {
    it("Check complete MDRC option is selected ", function () {
        var test = pages.create_deal_contract_period.completeMdrc().getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

module.exports.fillMdrcQuantity = function () {
    it("Fill into MDRC quantity field ", function () {
        pages.create_deal_contract_period.fillIntoMdrcQuantity();
    });
};

module.exports.fillMdrcMinimumWorkContribution = function () {
    it("Fill into MDRC minimum work contribution ", function () {
        pages.create_deal_contract_period.fillIntoMdrcMinimumWorkContribution();
    });
};

module.exports.fillMdrcQuantityForCommercialRelease = function () {
    it("Fill into MDRC quantity for commercial release ", function () {
        pages.create_deal_contract_period.fillIntoMdrcQuantityForCommercialRelease();
    });
};

module.exports.fillInMdrcMajorTerritoriesForCommercialRelease = function () {
    it("Fill into MDRC major territories for commercial release ", function () {
        pages.create_deal_contract_period.fillIntoMdrcMajorTerritoriesForCommercialeRelease();
    });
};

module.exports.addMdrcTerritory = function () {
    it("Add MDRC territory ", function () {
        pages.create_deal_contract_period.fillIntoTerritoriesFieldLetter();
        pages.create_deal_contract_period.selectRandomTerritory();
    });
};

module.exports.clickMdrcYesCommercialReleaseByMajorLabel = function () {
    it("Click on MDRC yes commercial release by major label ", function () {
        pages.create_deal_contract_period.clickOnMdrcYesCommercialReleaseByMajorLabel();
    });
};


module.exports.clickMdrcNoCommercialReleaseByMajorLabel = function () {
    it("Click on MDRC no commercial release by major label ", function () {
        pages.create_deal_contract_period.clickOnMdrcNoCommercialReleaseByMajorLabel();
    });
};

module.exports.checkMdrcYesCommercialReleaseByMajorLabelOptionIsSelected = function () {
    it("Check MDRC yes commercial release by major label option is selected ", function () {
        var test = pages.create_deal_contract_period.mdrcYesCommercialReleaseByMajorLabel().getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

module.exports.checkMdrcNoCommercialReleaseByMajorLabelOptionIsSelected = function () {
    it("Check MDRC no commercial release by major label option is selected ", function () {
        var test = pages.create_deal_contract_period.mdrcNoCommercialReleaseByMajorLabel().getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

module.exports.selectMdrcRandomLabel = function () {
    it("Select random mdrc label ", function () {
        pages.create_deal_contract_period.fillIntoMdrcLabelsField();
        pages.create_deal_contract_period.selectMdrcRandomValueFromLabel();
    })
};


module.exports.clickMdrcYesSelfRecord = function () {
    it("Click on MDRC yes self record ", function () {
        pages.create_deal_contract_period.clickOnMdrcYesSelfRecord();
    });
};


module.exports.clickOnMdrcNoSelfRecord = function () {
    it("Click on MDRC no self record ", function () {
        pages.create_deal_contract_period.clickOnMdrcNoSelfRecord();
    });
};

module.exports.checkMdrcYesSelfRecordOptionIsSelected = function () {
    it("Check MDRC yes self record option is selected ", function () {
        var test = pages.create_deal_contract_period.mdrcYesSelfRecord().getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

module.exports.checkMdrcNoSelfRecordOptionIsSelected = function () {
    it("Check MDRC no self record option is selected ", function () {
        var test = pages.create_deal_contract_period.mdrcNoSelfRecord().getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

module.exports.fillMdrcPercentOfMinStatutoryRate = function () {
    it("Fill MDRC percent of min statutory rate ", function () {
        pages.create_deal_contract_period.fillIntoMdrcPercentOfMinStatutoryRate();
    });
};

module.exports.fillMdrcInNoEventLessThan = function () {
    it("Fill MDRC in no event less than ", function () {
        pages.create_deal_contract_period.fillIntoMdrcInNoEventLessThan();
    });
};

module.exports.clickMdrcYesProportionalRecoupmentAllowed = function () {
    it("Click on MDRC yes proportional recoupment allowed ", function () {
        pages.create_deal_contract_period.clickOnMdrcYesProportionalRecoupmentAllowed();
    });
};

module.exports.clickOnMdrcNoProportionalRecoupmentAllowed = function () {
    it("Click on MDRC no proportional recoupment allowed ", function () {
        pages.create_deal_contract_period.clickOnMdrcNoProportionalRecoupmentAllowed();
    });
};

module.exports.checkMdrcYesProportionalRecoupmentAllowedOptionIsSelected = function () {
    it("Check MDRC yes proportional recoupment allowed option is selected ", function () {
        var test = pages.create_deal_contract_period.mdrcYesProportionalRecoupmentAllowed().getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

module.exports.checkMdrcNoProportionalRecoupmentAllowedOptionIsSelected = function () {
    it("Check MDRC no proportional recoupment allowed option is selected ", function () {
        var test = pages.create_deal_contract_period.mdrcNoProportionalRecoupmentAllowed().getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

module.exports.clickMdrcYesSeeContractForAdditionalMdrcComplexities = function () {
    it("Click on MDRC yes see contract for additional MDRC complexities", function () {
        pages.create_deal_contract_period.clickOnMdrcYesSeeContractForAdditionalMdrcComplexities();
    });
};

module.exports.clickOnMdrcNoSeeContractForAdditionalMdrcComplexities = function () {
    it("Click on MDRC no see contract for additional MDRC complexities", function () {
        pages.create_deal_contract_period.clickOnMdrcNoSeeContractForAdditionalMdrcComplexities();
    });
};

module.exports.checkMdrcYesSeeContractForAdditionalMdrcComplexitiesOptionIsSelected = function () {
    it("Check MDRC yes see contract for additional MDRC complexities option is selected ", function () {
        var test = pages.create_deal_contract_period.mdrcYesSeeContractForAdditionalMdrcComplexities().getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

module.exports.checkMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelected = function () {
    it("Check MDRC no see contract for additional MDRC complexities option is selected ", function () {
        var test = pages.create_deal_contract_period.mdrcNoSeeContractForAdditionalMdrcComplexities().getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

module.exports.fillMdrcDeliverySchedule = function () {
    it("Fill MDRC delivery schedule ", function () {
        pages.create_deal_contract_period.fillIntoMdrcDeliverySchedule();
    });
};

module.exports.fillMdrcEveryWeeks = function () {
    it("Fill MDRC every weeks", function () {
        pages.create_deal_contract_period.fillIntoMdrcEveryWeeks();
    });
};

module.exports.fillDateCompleted = function () {
    it("Fill into date completed field ", function () {
        pages.create_deal_contract_period.fillIntoDateCompleted();
    });
};

module.exports.clickMdrcForgivenShortfallAction = function () {
    it("Click on MDRC Forgiven shortfall action button", function () {
        pages.create_deal_contract_period.clickOnMdrcForgivenShortfallActionButton();
    });
};

module.exports.checkMdrcForgivenShortfallActionOptionIsSelected = function () {
    it("Check MDRC forgiven shortfall action option is selected ", function () {
        var test = pages.create_deal_contract_period.mdrcForgivenShortfallButton().getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

module.exports.clickMdrcCarriedForwardShortfallAction = function () {
    it("Click on MDRC carried forward shortfall action button", function () {
        pages.create_deal_contract_period.clickOnMdrcCarriedForwardShortfallActionButton();
    });
};

module.exports.checkMdrcCarriedForwardShortfallActionOptionIsSelected = function () {
    it("Check MDRC carried forward shortfall action option is selected ", function () {
        var test = pages.create_deal_contract_period.mdrcCarriedForwardShortfallButton().getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};


module.exports.saveMdrcForm = function () {
    it("Save mdrc form ", function () {
        pages.create_deal_contract_period.clickOnSaveMdrcForm();
        browser.wait(ExpectedConditions.invisibilityOf(pages.create_deal_contract_period.mdrcPercentOfMinStatutoryRate()));
    });
};


module.exports.itAddIncompleteMdrcContractPeriod = function () {
    describe("Add incomplete MDRC on  contract period screen", function () {
        steps.create_deal_contract_period.clickOnAddMdrc();
        steps.create_deal_contract_period.checkIncompleteMdrcOptionIsSelected();
        steps.create_deal_contract_period.fillMdrcQuantity();
        steps.create_deal_contract_period.fillMdrcQuantityForCommercialRelease();
        steps.create_deal_contract_period.addMdrcTerritory();
        steps.create_deal_contract_period.checkMdrcYesCommercialReleaseByMajorLabelOptionIsSelected();
        steps.create_deal_contract_period.clickMdrcNoCommercialReleaseByMajorLabel();
        steps.create_deal_contract_period.checkMdrcNoCommercialReleaseByMajorLabelOptionIsSelected();
        steps.create_deal_contract_period.selectMdrcRandomLabel();
        steps.create_deal_contract_period.checkMdrcNoSelfRecordOptionIsSelected();
        steps.create_deal_contract_period.fillMdrcPercentOfMinStatutoryRate();
        steps.create_deal_contract_period.fillMdrcInNoEventLessThan();
        steps.create_deal_contract_period.checkMdrcNoProportionalRecoupmentAllowedOptionIsSelected();
        steps.create_deal_contract_period.checkMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelected();
        steps.create_deal_contract_period.fillMdrcDeliverySchedule();
        steps.create_deal_contract_period.fillMdrcEveryWeeks();
        steps.base.scrollIntoView("Save MDRC button", pages.create_deal_contract_period.mdrcSaveButton());
        steps.create_deal_contract_period.saveMdrcForm();
    });
};


module.exports.itAddDeemedCompleteMdrcContractPeriod = function () {
    describe("Add incomplete MDRC on  contract period screen", function () {
        steps.create_deal_contract_period.clickOnAddMdrc();
        steps.create_deal_contract_period.checkIncompleteMdrcOptionIsSelected();
        steps.create_deal_contract_period.chooseDeemedCompleteMdrcOption();
        steps.create_deal_contract_period.checkDeemedCompleteMdrcOptionIsSelected();
        steps.create_deal_contract_period.fillDateCompleted();
        steps.create_deal_contract_period.fillMdrcQuantity();
        steps.create_deal_contract_period.fillMdrcQuantityForCommercialRelease();
        steps.create_deal_contract_period.addMdrcTerritory();
        steps.create_deal_contract_period.checkMdrcYesCommercialReleaseByMajorLabelOptionIsSelected();
        steps.create_deal_contract_period.clickMdrcNoCommercialReleaseByMajorLabel();
        steps.create_deal_contract_period.checkMdrcNoCommercialReleaseByMajorLabelOptionIsSelected();
        steps.create_deal_contract_period.selectMdrcRandomLabel();
        steps.create_deal_contract_period.checkMdrcNoSelfRecordOptionIsSelected();
        steps.create_deal_contract_period.fillMdrcPercentOfMinStatutoryRate();
        steps.create_deal_contract_period.fillMdrcInNoEventLessThan();
        steps.create_deal_contract_period.checkMdrcNoProportionalRecoupmentAllowedOptionIsSelected();
        steps.create_deal_contract_period.checkMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelected();
        steps.create_deal_contract_period.fillMdrcDeliverySchedule();
        steps.create_deal_contract_period.fillMdrcEveryWeeks();
        steps.base.scrollIntoView("Save MDRC button", pages.create_deal_contract_period.mdrcSaveButton());
        steps.create_deal_contract_period.saveMdrcForm();
    });
};

module.exports.itFillDealMandatoryFieldsContractPeriod = function () {
    describe("Fill mandatory fields contract period screen", function () {
            steps.create_deal_contract_period.fillMandatoryFieldsContractPeriod();
        }
    );
};
