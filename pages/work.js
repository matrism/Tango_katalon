"use strict";
var pph = require("../helpers/pph");
var promise = protractor.promise;
module.exports = pages.work = new ftf.pageObject();
// Navigation.
module.exports.open = function(workId) {
	if(!workId) {
		return ftf.pageObject.prototype.open.call(this);
	}
	promise.when(workId).then (
		function(workId) {
			browser.get(_tf_config.urls.app_url + "#/work/" + workId + "/metadata");
			pages.base.waitForAjax();
		}
	);
};
// Locator.
module.exports.workIdBinding = function() {
	return element(by.binding("getWorkFullCode(work.pristine)"));
};
module.exports.primaryWorkTitleBinding = function() {
	return element(by.binding("getWorkName(workPristine)"));
};
module.exports.headerAlternateWorkTitleRows = function() {
	return (
		element.all(by.repeater("altTitle in altTitles | limitTo:workHeaderLimits.altTitles"))
	);
};
module.exports.alternateWorkTitleBindings = function() {
	return (
		element.all(by.repeater("altTitle in altTitles")).all(by.binding("altTitle.title"))
	);
};
module.exports.primaryWorkTitleHeading = function() {
	return $("[data-ng-show='workHeader.title.detail']");
};
module.exports.editWorkTitlesButton = function() {
	return $(".title-edit [data-ng-click='showEdit(workHeader.title, titleEditForm)']");
};
module.exports.editWorkTitlesContainer = function() {
	return $("[data-ng-show='workHeader.title.edit']");
};
module.exports.editPrimaryWorkTitleField = function() {
	return (
		pages.work.editWorkTitlesContainer()
			.element(by.model("work.title.primary_title.title"))
	);
};
module.exports.alternateWorkTitleEditRows = function() {
	return (
		pages.work.editWorkTitlesContainer()
			.all(by.repeater("altTitle in work.title.alternative_titles"))
	);
};
module.exports.alternateWorkTitleEditRow = function(i) {
	return pages.work.alternateWorkTitleEditRows().get(i);
};
module.exports.defaultAlternateWorkTitleLanguage = function(i) {
	return pages.base.selectedDropdownOption (
		pages.work.alternateWorkTitleEditRows().last()
			.element(by.model("altTitle.language_code"))
	);
};
module.exports.editAlternateWorkTitleField = function(i) {
	return (
		pages.work.alternateWorkTitleEditRow(i)
			.element(by.model("altTitle.title"))
	);
};
module.exports.cancelWorkTitlesEditingButton = function() {
	return (
		pages.work.editWorkTitlesContainer()
			.element(by.cssContainingText("button", "Cancel"))
	);
};
module.exports.saveWorkTitlesButton = function() {
	return (
		pages.work.editWorkTitlesContainer()
			.element(by.cssContainingText("button", "Save"))
	);
};
module.exports.assetTypeContainer = function() {
	return $("[data-tg-modular-edit='assetTypeEdit']");
};
module.exports.editAssetTypeButton = function() {
	return (
		pages.work.assetTypeContainer()
			.$("[data-ng-click='$$modularScope.showEdit()']")
	);
};
module.exports.editMusicalDistributionCategoryField = function() {
	return element(by.model("assetTypeEdit.model.musical_work_distribution_category"));
};
module.exports.editTextMusicRelationshipField = function() {
	return element(by.model("assetTypeEdit.model.text_music_relationship"));
};
module.exports.editExcerptTypeField = function() {
	return element(by.model("assetTypeEdit.model.excerpt_type"));
};
module.exports.editVersionTypeField = function() {
	return element(by.model("assetTypeEdit.model.version_type"));
};
module.exports.editLyricAdaptationField = function() {
	return element(by.model("assetTypeEdit.model.lyric_adaptation_type"));
};
module.exports.editMusicArrangementField = function() {
	return element(by.model("assetTypeEdit.model.music_arrangement_type"));
};
module.exports.saveAssetTypeButton = function() {
	return (
		pages.work.assetTypeContainer()
			.element(by.cssContainingText("button", "Save"))
	);
};
module.exports.workOriginContainer = function() {
	return $("[data-tg-modular-edit='workOriginEdit']");
};
module.exports.editWorkOriginButton = function() {
	return (
		pages.work.workOriginContainer()
			.$("[data-ng-click='$$modularScope.showEdit()']")
	);
};
module.exports.saveWorkOriginButton = function() {
	return (
		pages.work.workOriginContainer()
			.element(by.cssContainingText("button", "Save"))
	);
};
module.exports.editIntendedPurposeField = function() {
	return element(by.model("workOriginEdit.model.intended_purpose"));
};
module.exports.editProductionTitleField = function() {
	return element(by.model("workOriginEdit.model.production_title.title"));
};
module.exports.editBltvrField = function() {
	return element(by.model("workOriginEdit.model.bltvr"));
};
module.exports.editMusicLibraryField = function() {
	return element(by.model("workOriginEdit.model.library_code"));
};
module.exports.workInclusionOnWebsiteParagraph = function() {
	return (
		element(by.css("[data-ng-switch='!!wcmWebsiteEdit.model.includeOnWebsite']"))
			.element(by.css(".ng-scope"))
	);
};
module.exports.editWorkInclusionOnWebsiteContainer = function() {
	return $("[data-tg-modular-edit='wcmWebsiteEdit']");
};
module.exports.editWorkInclusionOnWebsiteButton = function() {
	return (
		pages.work.editWorkInclusionOnWebsiteContainer()
			.$("[data-ng-click='$$modularScope.showEdit()']")
	);
};
module.exports.cancelWorkInclusionOnWebsiteButton = function() {
	return (
		pages.work.editWorkInclusionOnWebsiteContainer()
			.element(by.cssContainingText("button", "Cancel"))
	);
};
module.exports.saveWorkInclusionOnWebsiteButton = function() {
	return (
		pages.work.editWorkInclusionOnWebsiteContainer()
			.element(by.cssContainingText("button", "Save"))
	);
};
// Navigation.
module.exports.goToScopeDelivery = function() {
	return browser.executeScript (
		function() {
			jQuery(".nav-tabs span:contains('Scope Delivery')").click();
		}
	);
};
// Data fetching.
module.exports.workId = function() {
	return pages.work.workIdBinding().getText();
};
module.exports.primaryWorkTitle = function() {
	var element = pages.work.primaryWorkTitleBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.alternateWorkTitles = function() {
	var deferred = promise.defer();
	pages.work.headerAlternateWorkTitleRows().then (
		function(headerAlternateWorkTitleRows) {
			if(headerAlternateWorkTitleRows.length === 0) {
				return [];
			}
			pages.base.scrollIntoView(headerAlternateWorkTitleRows[0]);
			browser.actions().mouseMove(headerAlternateWorkTitleRows[0]).perform();
			deferred.fulfill (
				pages.work.alternateWorkTitleBindings().map (
					function(element) {
						return element.getText();
					}
				)
			);
		}
	);
	return deferred.promise;
};
module.exports.workInclusionOnWebsite = function() {
	var element = pages.work.workInclusionOnWebsiteParagraph();
	pages.base.scrollIntoView(element);
	return element.getText().then (
		function(text) {
			return (text.indexOf("is included") !== -1);
		}
	);
};
module.exports.selectedWorkInclusionOnWebsiteOption = function() {
	return pages.work.activeIncludeWorkOnWebsiteButton().getText().then (
		function(text) {
			switch(text.toLowerCase()) {
				case "yes":
					return true;
				case "no":
					return false;
				default:
					return text;
			}
		}
	);
};
module.exports.creatorNames = function(i) {
	var ithElement;
	var elements = (
		$(".scope-delivery-table")
			.all(by.binding("creator.person_name"))
			.filter (
				function(element) {
					return element.isDisplayed();
				}
			)
	);
	function handleElement(el) {
		pages.base.scrollIntoView(el);
		return el.getText();
	}
	if(i !== undefined) {
		return handleElement(elements.get(i));
	}
	else {
		return elements.map(handleElement);
	}
};
module.exports.creatorContributions = function(i) {
	var ithElement;
	var elements = (
		$(".scope-delivery-table")
			.all(by.binding("creator.contribution"))
			.filter (
				function(element) {
					return element.isDisplayed();
				}
			)
	);
	function handleElement(el) {
		pages.base.scrollIntoView(el);
		return el.getText();
	}
	if(i !== undefined) {
		return handleElement(elements.get(i));
	}
	else {
		return elements.map(handleElement);
	}
};
module.exports.creatorContributionByName = function(name) {
	return pph.indexOf(pages.work.creatorNames(), name).then (
		function(creatorIndex) {
			if(creatorIndex === -1) {
				return null;
			}
			return pages.work.creatorContributions(creatorIndex).then (
				function(text) {
					if(!/^\d+\.\d+%$/.test(text)) {
						return text;
					}
					return parseFloat(text);
				}
			);
		}
	);
};
module.exports.editPrimaryWorkTitleFieldValue = function() {
	return pages.work.editPrimaryWorkTitleField().getAttribute("value"); 
};
(function() {
	var buttonCssSelector = "button[data-ng-model='wcmWebsiteEdit.model.includeOnWebsite']";
	var activeButtonCssSelector = buttonCssSelector + ".active";
	module.exports.activeIncludeWorkOnWebsiteButton = function() {
		return $(activeButtonCssSelector);
	};
	module.exports.includeWorkOnWebsiteButton = function() {
		return element(by.cssContainingText(buttonCssSelector, "Yes"));
	};
	module.exports.excludeWorkFromWebsiteButton = function() {
		return element(by.cssContainingText(buttonCssSelector, "No"));
	};
})();
// Data input.
module.exports.enterPrimaryWorkTitle = function(title) {
	var element = pages.work.editPrimaryWorkTitleField();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(title);
};
module.exports.enterAlternateWorkTitle = function(i, title) {
	var element = pages.work.editAlternateWorkTitleField(i);
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(title);
};
module.exports.enterProductionTitle = function(title, more) {
	var element;
	more = more || {};
	element = pages.work.editProductionTitleField();
	return element.isPresent().then(function(elementPresent) {
		expect(more.skipIfNotPresent || elementPresent).toBeTruthy();
		if(!elementPresent) {
			return;
		}
		pages.base.scrollIntoView(element);
		element.clear();
		element.sendKeys(title);
		return title;
	});
};
module.exports.optToIncludeWorkOnWebsite = function(include) {
	promise.when(include).then (
		function(include) {
			var button;
			if(include) {
				button = pages.work.includeWorkOnWebsiteButton();
			}
			else {
				button = pages.work.excludeWorkFromWebsiteButton();
			}
			pages.base.scrollIntoView(button);
			button.click();
		}
	);
};
