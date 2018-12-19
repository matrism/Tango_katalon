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
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory
import org.openqa.selenium.WebDriver as WebDriver
import org.openqa.selenium.Dimension as Dimension


WebUI.openBrowser('')

// resize browser
WebDriver driver = DriverFactory.getWebDriver()

driver.manage().window().setSize(new Dimension(1920, 1080))

//----------------------------------------------------
WebUI.navigateToUrl(GlobalVariable.URL)

WebUI.setText(findTestObject('Login page/Username'), GlobalVariable.Username)

WebUI.setEncryptedText(findTestObject('Login page/Password'), GlobalVariable.Password)

WebUI.click(findTestObject('Login page/button_Login'))

WebUI.waitForPageLoad(30)

WebUI.waitForAngularLoad(20)

WebUI.verifyElementVisible(findTestObject('Main Nav Bar/a_Music Publishing'))

WebUI.verifyElementVisible(findTestObject('Main Nav Bar/div_Works WorksAlbumsOrganisat'))

WebUI.verifyElementVisible(findTestObject('Main Nav Bar/a_Registration Activity'))

WebUI.verifyElementVisible(findTestObject('Main Nav Bar/a_Royalty Processing'))

WebUI.verifyElementVisible(findTestObject('Main Nav Bar/a_Finance Processing'))

WebUI.verifyElementVisible(findTestObject('Main Nav Bar/a_Works Upload History'))

WebUI.verifyElementVisible(findTestObject('Main Nav Bar/a_Utilities'))

