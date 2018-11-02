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
import org.openqa.selenium.Keys as Keys
import org.junit.After as After
import org.openqa.selenium.By as By
import org.openqa.selenium.WebDriver as WebDriver
import org.openqa.selenium.WebElement as WebElement
import com.kms.katalon.core.webui.common.WebUiCommonHelper as WebUiCommonHelper
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory
import com.kms.katalon.core.logging.KeywordLogger as KeywordLogger
import org.apache.commons.lang.RandomStringUtils as RandomStringUtils

// Generate random Number
FirstName = ('Test Person Auto ' + RandomStringUtils.randomNumeric(6))

//println (RandomStringUtils.randomAlphabetic(1))
WebUI.click(findTestObject('Create Person/span_New Record'))

WebUI.click(findTestObject('Create Person/a_Person'))

WebUI.waitForPageLoad(10)

WebUI.waitForAngularLoad(0)

not_run: WebUI.click(findTestObject('Create Person/div_Primary'))

not_run: WebUI.click(findTestObject('Create Person/a_Creator Society Affiliation'))

not_run: WebUI.click(findTestObject('Create Person/a_Contact Information'))

not_run: WebUI.click(findTestObject('Create Person/a_PaymentStatement Info'))

not_run: WebUI.click(findTestObject('Create Person/a_Others'))

not_run: WebUI.click(findTestObject('Create Person/a_Names'))

WebUI.setText(findTestObject('Create Person/input_First Name(s)_firstName'), FirstName)

WebUI.setText(findTestObject('Create Person/input_Last Name_lastName'), 'last name')

FullName = WebUI.getAttribute(findTestObject('Create Person/Input_FullName'), 'value')

println(FullName)

WebUI.setText(findTestObject('Create Person/input_Credits Name_creditsName'), 'credit name')

WebUI.setText(findTestObject('Create Person/input_Date of Birth_span1 ng-u'), Keys.chord('1982', Keys.TAB, '09', Keys.TAB, 
        '30'))

WebUI.verifyElementNotHasAttribute(findTestObject('Create Person/input_Date of Birth_span1 ng-u'), 'disabled', 0, FailureHandling.STOP_ON_FAILURE)

WebUI.setText(findTestObject('Create Person/input_Remove All_tg-typeahead_'), Affiliate_Society)

WebUI.waitForAngularLoad(0)

WebUI.waitForElementPresent(findTestObject('Create Person/AffiliateSociety_Dropdown_text', [('AffSoc') : Affiliate_Society]), 
    0)

WebUI.click(findTestObject('Create Person/AffiliateSociety_Dropdown_text', [('AffSoc') : Affiliate_Society]))

WebUI.verifyElementText(findTestObject('Create Person/Territory0fAffiliation_worldwide'), 'Worldwide')

WebUI.scrollToElement(findTestObject('Create Person/div_CreatorYes NoAffiliated So'), 0)

WebUI.verifyElementChecked(findTestObject('Create Person/Checkbox_Performance'), 0)

WebUI.verifyElementNotChecked(findTestObject('Create Person/Checkbox_Mechanical'), 0)

WebUI.verifyElementNotChecked(findTestObject('Create Person/Checkbox_Synchronisation'), 0)

WebUI.click(findTestObject('Create Person/Checkbox_Mechanical'))

WebUI.click(findTestObject('Create Person/Checkbox_Synchronisation'))

WebUI.scrollToElement(findTestObject('Create Person/button_Add Email'), 0)

WebUI.click(findTestObject('Create Person/button_Add Address'))

WebUI.setText(findTestObject('Create Person/input_Address 1_address1'), 'Address 1')

WebUI.setText(findTestObject('Create Person/input_Address 2_address2'), 'address 2')

WebUI.setText(findTestObject('Create Person/input_Address 3_address3'), 'address 3')

WebUI.setText(findTestObject('Create Person/input_City_cityTown'), 'city')

WebUI.setText(findTestObject('Create Person/input_StateProvinceRegion_regi'), 'state')

WebUI.setText(findTestObject('Create Person/input_ZIPPostal Code_postalCod'), '364733')

WebUI.click(findTestObject('Create Person/button_Country_tg-dropdown-car'))

WebUI.setText(findTestObject('Create Person/SearchCountry_input'), 'Malaysia')

WebUI.verifyElementText(findTestObject('Create Person/CountrySelect'), 'Malaysia')

if (true) {
    WebUI.click(findTestObject('Create Person/CountrySelect'))
}

WebUI.click(findTestObject('Create Person/button_Yes - Payee'))

WebUI.click(findTestObject('Create Person/button_Yes - StatementRecipient'))

WebUI.focus(findTestObject('Create Person/div_CreatorYes NoAffiliated So'))

WebUI.click(findTestObject('Create Person/button_Add Phone'))

WebUI.click(findTestObject('Create Person/button_Select_PhoneType', [('index') : 1]))

CustomKeywords.'tango.util.CommonUtil.CheckDropDownList'('[tg-model-class-validation="tgModularEditModel.number"] .dropdown-menu .tg-dropdown-menu-item.ng-scope', 
    4, Phone_type)

//get element count
/*
WebDriver driver = DriverFactory.getWebDriver()

List eleCount = driver.findElements(By.cssSelector('[tg-model-class-validation="tgModularEditModel.number"] .dropdown-menu .tg-dropdown-menu-item.ng-scope'))

int rowsInTable = eleCount.size()

WebUI.verifyEqual(rowsInTable, 4)

for (n = 1; n <= rowsInTable; n = (n + 1)) {
    WebUI.verifyElementText(findTestObject('Create Person/Dropdown_Phone_list', [('index') : n]), Phone_type[(n - 1)])

    WebUI.comment('Verifying Phone Type Dropdown List: ' + (Phone_type[(n - 1)]))
}
*/
WebUI.click(findTestObject('Create Person/Dropdown_Phone_list', [('index') : 3]))

WebUI.verifyElementText(findTestObject('Create Person/button_Select_PhoneType', [('index') : 1]), Phone_type[2])

WebUI.setText(findTestObject('Create Person/input_PhoneNumber', [('index') : 1]), '13123123123123')

WebUI.click(findTestObject('Create Person/button_Add Email'))

WebUI.click(findTestObject('Create Person/button_Select_EmailType', [('index') : 3]))

CustomKeywords.'tango.util.CommonUtil.CheckDropDownList'('form > div > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(3) [ng-model="tgModularEditModel.type"] .dropdown-menu .tg-dropdown-menu-item.ng-scope', 
    7, Email_type)

/*

WebDriver driver2 = DriverFactory.getWebDriver()

List eleCount1 = driver2.findElements(By.cssSelector('form > div > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(3) [ng-model="tgModularEditModel.type"] .dropdown-menu .tg-dropdown-menu-item.ng-scope'))

int rowsInTable1 = eleCount1.size()

WebUI.verifyEqual(rowsInTable1, 7)

for (n = 1; n <= rowsInTable1; n = (n + 1)) {
    WebUI.verifyElementText(findTestObject('Create Person/Dropdown_Email_list', [('index') : n]), Email_type[(n - 1)])

    WebUI.comment('Verifying Email Type Dropdown List: ' + (Email_type[(n - 1)]))
}

*/
WebUI.click(findTestObject('Create Person/Dropdown_Email_list', [('index') : 6]))

WebUI.verifyElementText(findTestObject('Create Person/button_Select_EmailType', [('index') : 3]), Email_type[5])

WebUI.setText(findTestObject('Create Person/input_Emaill_Address'), 'test@email.com')

WebUI.setText(findTestObject('Create Person/input_Place of Birth_placeOfBi'), 'selangor')

WebUI.setText(findTestObject('Create Person/input_Citizenship_citizenship'), 'Malaysia')

not_run: WebUI.click(findTestObject('Create Person/button_Marital Status_tg-dropd'))

WebUI.click(findTestObject('Create Person/button_Done'))

WebUI.waitForPageLoad(0)

WebUI.waitForAngularLoad(0)

FullName = FullName.toUpperCase()

WebUI.verifyTextPresent(FullName, false)

