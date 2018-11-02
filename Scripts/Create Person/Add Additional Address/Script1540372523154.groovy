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

WebUI.click(findTestObject('Create Person/button_Add Address'))

WebUI.setText(findTestObject('Create Person/input_Address 1_address1'), 'Address 1')

WebUI.setText(findTestObject('Create Person/input_Address 2_address2'), 'address 2')

WebUI.setText(findTestObject('Create Person/input_Address 3_address3'), 'address 3')

WebUI.setText(findTestObject('Create Person/input_City_cityTown'), 'city')

WebUI.setText(findTestObject('Create Person/input_StateProvinceRegion_regi'), 'state')

WebUI.setText(findTestObject('Create Person/input_ZIPPostal Code_postalCod'), '364733')

