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

WebUI.verifyElementPresent(findTestObject('Deal/ADD_Payees/Header_Payees_selected'), 10)

WebUI.click(findTestObject('Deal/ADD_Payees/Add_PayeeToDeal'))

WebUI.setText(findTestObject('Deal/ADD_Payees/Add_PayeeToDeal'), payee)

WebUI.waitForAngularLoad(0)

WebUI.click(findTestObject('Deal/Search_list_dropdown', [('text') : payee]))

WebUI.selectOptionByValue(findTestObject('Deal/Search_list_dropdown'), '', false)

