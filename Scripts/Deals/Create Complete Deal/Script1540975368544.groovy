import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/span_New Record'))

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/a_Deal'))

WebUI.waitForAngularLoad(0)

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/button_Deal Signing Territory_'))

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/DST_dropdown', [('DST_country') : 'Argentina']))

WebUI.setText(findTestObject('Deal/Deal with PSS_RR_RTP/input_CompanyCode'), 'a')

WebUI.waitForAngularLoad(0)

not_run: WebUI.waitForElementPresent(findTestObject('Deal/Search_list_dropdown'), 0)

WebUI.click(findTestObject('Deal/Search_list_dropdown', [('CompanyCode') : 'WCM ARGENTINA DIRECT FOREIGN DEALS']))

WebUI.verifyElementAttributeValue(findTestObject('Deal/Deal with PSS_RR_RTP/Selected_CompanyCode'), 'value', 'WCM ARGENTINA DIRECT FOREIGN DEALS', 
    0)

WebUI.setText(findTestObject('Deal/Deal with PSS_RR_RTP/input_ContractingParties'), 'mars, bruno')

WebUI.click(findTestObject('Deal/Search_list_dropdown', [('CompanyCode') : 'Mars, Bruno']))

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/button_Continue'))

WebUI.waitForAngularLoad(0)

WebUI.setText(findTestObject('Deal/Deal with PSS_RR_RTP/input_Start (Actual)_date-pick'), '2016-01-01')

WebUI.setText(findTestObject('Deal/Deal with PSS_RR_RTP/input_End (Target)_targetEndDu'), '62')

WebUI.mouseOver(findTestObject('Deal/Deal with PSS_RR_RTP/AddScopeButton'))

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/AddScopeButton'))

WebUI.waitForAngularLoad(0)

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/div_Share Scope 1  Conflicting'))

WebUI.selectOptionByValue(findTestObject('Deal/Deal with PSS_RR_RTP/select_Select oneAdministratio'), '0', true)

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/div_Territory_tg-typeahead__ta'))

WebUI.setText(findTestObject('null'), 'w')

WebUI.setText(findTestObject('null'), 'wo')

WebUI.setText(findTestObject('null'), 'wor')

WebUI.setText(findTestObject('null'), 'worl')

WebUI.setText(findTestObject('null'), 'world')

WebUI.setText(findTestObject('null'), 'worldw')

WebUI.setText(findTestObject('null'), 'worldwi')

WebUI.setText(findTestObject('null'), 'worldwid')

WebUI.setText(findTestObject('Deal/Deal with PSS_RR_RTP/input_Remove All_tg-typeahead__10'), 'worldwide')

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/a_Add Publisher Shares Set'))

WebUI.setText(findTestObject('null'), 'WB Music Corp.')

WebUI.setText(findTestObject('Deal/Deal with PSS_RR_RTP/input_Remove All_ownShare'), '100')

WebUI.setText(findTestObject('Deal/Deal with PSS_RR_RTP/input_Remove All_tg-typeahead__60'), 'WB Music Corp.')

WebUI.setText(findTestObject('Deal/Deal with PSS_RR_RTP/input__collectShare'), '100')

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/button_Done'))

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/a_Add Royalty Rate Set'))

WebUI.setText(findTestObject('Deal/Deal with PSS_RR_RTP/input_Contractual Rate_span1 n'), '60')

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/i_Contractual Rate_fa fa-caret'))

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/li_Payout 1'))

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/button_At Source'))

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/button_Yes'))

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/button_Done_1'))

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/button_Continue'))

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/div_Contract Period 1 - Exerci'))

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/button_Apply'))

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/div_Select All (1)'))

WebUI.click(findTestObject('Deal/Deal with PSS_RR_RTP/button_Apply_1'))

