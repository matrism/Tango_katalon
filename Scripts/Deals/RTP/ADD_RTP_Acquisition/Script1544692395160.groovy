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

WebUI.click(findTestObject('Deal/Add RTP/Input_Contract Period', [('ACQ_index') : ACQ_index]))

WebUI.click(findTestObject('Deal/Add RTP/Select_Contract Period'))

WebUI.click(findTestObject('Object Repository/Deal/Add RTP/button_Apply'))

WebUI.setText(findTestObject('Deal/Add RTP/input_Post-Term Collection_inp', [('ACQ_index') : ACQ_index]), 'acq description')

WebUI.click(findTestObject('Deal/Add RTP/Acq_ScopeSelection_field', [('ACQ_index') : ACQ_index]))

WebUI.click(findTestObject('Deal/Add RTP/Select_Scope', [('scope') : 'Select All (1)']))

WebUI.click(findTestObject('Object Repository/Deal/Add RTP/button_Apply_1'))

WebUI.click(findTestObject('Object Repository/Deal/Add RTP/button_Continue'))

