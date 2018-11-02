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

WebUI.click(findTestObject('Object Repository/Deal/span_New Record'))

WebUI.click(findTestObject('Object Repository/Deal/a_Deal'))

WebUI.click(findTestObject('Object Repository/Deal/button_Deal Signing Territory__2'))

WebUI.click(findTestObject('Deal/Dropdown_SigningTerritory', [('country') : findTestData('Deals/Complete Deal').getValue(
                1, 1)]))

WebUI.setText(findTestObject('Deal/Input_Company_Code'), findTestData('Deals/Complete Deal').getValue(2, 1))

WebUI.verifyElementPresent(findTestObject('Deal/Dropdown_Company_Code', [('CompanyCode') : findTestData('Deals/Complete Deal').getValue(
                2, 1)]), 0)

WebUI.click(findTestObject('Deal/Dropdown_Company_Code', [('CompanyCode') : findTestData('Deals/Complete Deal').getValue(
                2, 1)]))

WebUI.setText(findTestObject('Deal/input_ContractingParties'), findTestData('Deals/Complete Deal').getValue(3, 1))

WebUI.click(findTestObject('Object Repository/Deal/button_Continue'))

WebUI.setText(findTestObject('Object Repository/Deal/input_Start (Actual)_date-pick'), '2017-01-01')

WebUI.setText(findTestObject('Object Repository/Deal/input_End (Target)_targetEndDu'), '64')

WebUI.click(findTestObject('Object Repository/Deal/span_Add Scope'))

WebUI.click(findTestObject('Object Repository/Deal/div_Share Scope 1  Conflicting'))

WebUI.selectOptionByValue(findTestObject('Object Repository/Deal/select_Select oneAdministratio'), '0', true)

WebUI.click(findTestObject('Object Repository/Deal/div_Territory_tg-typeahead__ta'))

WebUI.setText(findTestObject('Object Repository/Deal/input_Remove All_tg-typeahead__46'), 'worldwide')

WebUI.click(findTestObject('Object Repository/Deal/div_Music PublishingLog outPer'))

WebUI.click(findTestObject('Object Repository/Deal/a_Add Publisher Shares Set'))

WebUI.setText(findTestObject('Object Repository/Deal/input_Remove All_tg-typeahead__58'), 'ENDEMOL ARGENTINA S.A.')

WebUI.setText(findTestObject('Object Repository/Deal/input_Remove All_tg-typeahead__59'), '258988397')

WebUI.setText(findTestObject('Object Repository/Deal/input_Remove All_tg-typeahead__60'), 'WARNER CHAPPELL MUSIC ARGENTINA')

WebUI.setText(findTestObject('Object Repository/Deal/input_Remove All_ownShare'), '100')

WebUI.setText(findTestObject('Object Repository/Deal/input__collectShare'), '100')

WebUI.click(findTestObject('Object Repository/Deal/button_Done'))

WebUI.click(findTestObject('Object Repository/Deal/a_Add Royalty Rate Set'))

WebUI.setText(findTestObject('Object Repository/Deal/input_Contractual Rate_span1 n'), '60')

WebUI.click(findTestObject('Object Repository/Deal/i_Contractual Rate_fa fa-caret'))

WebUI.click(findTestObject('Object Repository/Deal/li_Payout 1'))

WebUI.click(findTestObject('Object Repository/Deal/button_At Source'))

WebUI.click(findTestObject('Object Repository/Deal/button_Yes'))

WebUI.click(findTestObject('Object Repository/Deal/button_Done_1'))

WebUI.click(findTestObject('Object Repository/Deal/button_Continue'))

WebUI.click(findTestObject('Object Repository/Deal/div_Contract Period 1 - Exerci'))

WebUI.click(findTestObject('Object Repository/Deal/button_Apply'))

WebUI.click(findTestObject('Object Repository/Deal/strong_Select All (1)'))

WebUI.click(findTestObject('Object Repository/Deal/button_Apply_1'))

WebUI.click(findTestObject('Object Repository/Deal/button_Continue'))

WebUI.setText(findTestObject('Object Repository/Deal/input_Remove All_tg-typeahead__61'), 't')

WebUI.setText(findTestObject('Object Repository/Deal/input_Remove All_tg-typeahead__62'), 'te')

WebUI.setText(findTestObject('Object Repository/Deal/input_Remove All_tg-typeahead__63'), 'tes')

WebUI.setText(findTestObject('Object Repository/Deal/input_Remove All_tg-typeahead__64'), 'test')

WebUI.setText(findTestObject('Object Repository/Deal/input_Remove All_tg-typeahead__65'), 'test ')

WebUI.setText(findTestObject('Object Repository/Deal/input_Remove All_tg-typeahead__66'), 'test a')

WebUI.setText(findTestObject('Object Repository/Deal/input_Remove All_tg-typeahead__67'), 'test au')

WebUI.setText(findTestObject('Object Repository/Deal/input_Remove All_tg-typeahead__68'), 'test aut')

WebUI.setText(findTestObject('Object Repository/Deal/input_Remove All_tg-typeahead__69'), 'test auto')

WebUI.setText(findTestObject('Object Repository/Deal/input_Remove All_tg-typeahead__70'), 'test auto')

WebUI.click(findTestObject('Object Repository/Deal/button_Payout_tg-dropdown-care'))

WebUI.setText(findTestObject('Object Repository/Deal/input_Legal Right_legalRight'), '100')

WebUI.setText(findTestObject('Object Repository/Deal/input_Distribution_distributio'), '100')

WebUI.click(findTestObject('Object Repository/Deal/button_TEST ACCOUNT 2309823048'))

WebUI.click(findTestObject('Object Repository/Deal/button_ADD PAYEE'))

WebUI.click(findTestObject('Object Repository/Deal/button_Continue'))

WebUI.click(findTestObject('Object Repository/Deal/button_Continue'))

