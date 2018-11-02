package tango.util

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable
import org.openqa.selenium.By as By
import org.openqa.selenium.WebDriver as WebDriver
import org.openqa.selenium.WebElement as WebElement
import com.kms.katalon.core.webui.common.WebUiCommonHelper as WebUiCommonHelper
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory

public class CommonUtil {

	@Keyword
	def CheckDropDownList(String cssElement, Number actualRows, List type){
		WebDriver driver = DriverFactory.getWebDriver()

		List eleCount = driver.findElements(By.cssSelector(cssElement))

		int rowsInTable = eleCount.size()

		WebUI.verifyEqual(rowsInTable, actualRows)

		for (int n = 1; n <= rowsInTable; n = (n + 1)) {
			WebUI.verifyElementPresent(findTestObject('Create Person/Dropdown_Phone_list', [('Type') : type[(n - 1)]]),0)

			WebUI.comment('Verifying Phone Type Dropdown List: ' + (type[(n - 1)]))
		}
	}
}
