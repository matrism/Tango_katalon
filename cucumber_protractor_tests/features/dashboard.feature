@dashboard_module
Feature: Dashboard Module

  Background:
    Given user is logged in

  @DEVP-750
  Scenario: Verify that Dashboard's Provisioning section is enabled
    Then "Start Provisioning" link should not be disabled

  @DEVP-751 @moreFeatures
  Scenario: Verify that Dashboard's Creation and Management sections are disabled
    Then "Start Creating" link should be disabled
    And "View details" link should be disabled

  @DEVP-754 @again
  Scenario: Verify that Dashboard's test fail
    Then "View details" link should not be disabled