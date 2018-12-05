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

WebUI.verifyElementText(findTestObject('Create Person/strong_katalon test person 1'), 'katalon test person 2')

WebUI.verifyElementText(findTestObject('Create Person/strong_katalon last name'), 'katalon last name')

WebUI.verifyElementText(findTestObject('Create Person/strong_katalon last name katal'), 'katalon last name, katalon test person 2')

WebUI.verifyElementText(findTestObject('Create Person/strong_katalon credit name'), 'katalon credit name')

WebUI.verifyElementText(findTestObject('Create Person/strong_TP0078BEF'), '1982-09-30')

WebUI.verifyElementText(findTestObject('Create Person/strong_1982-09-30'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_Yes'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_MACP'), '')

WebUI.verifyElementText(findTestObject('Create Person/div_Worldwide                 '), '')

WebUI.verifyElementText(findTestObject('Create Person/div_Performance Mechanical Syn'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_Address 1'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_address 2'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_address 3'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_city'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_state'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_364733'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_Madagascar'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_13123123123123'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_123154545454'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_Yes'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_Yes'), '')

WebUI.verifyElementText(findTestObject('Create Person/button_Paper Statement'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_English'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_selangor'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_Malaysia'), '')

WebUI.verifyElementText(findTestObject('Create Person/strong_MARRIED (FEMALE)'), '')

