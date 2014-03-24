// Use the external Chai As Promised to deal with resolving promises in
// expectations.
module.exports = function() {
    this.World = require('../support/world').World;
            
    this.Then(/^"([^"]*)" link should( not)? be disabled$/, function(link_name, if_link_disabled, next) {
        var el = this.getElement("//a[contains(text(), '" + link_name + "')]", 'xpath'),
            W = this;
        
        //a[contains(text(), 'Start Provisioning')]
        
        el.getAttribute('className').then(function(className) {
            var exp = W.expect(className);
            if (if_link_disabled) {
                exp.not.to.contain('disabled');
            } else {
                exp.to.contain('disabled');
            }
        }).then(function() {
            if (next) {
                next();
            }
        });
    });
};

//include GeneralHelper
//
//When /^user is on the main page$/ do
//  on_page(MainPage).title_element.text.should == "Security-console"
//end
//
//When /^link "([^"]*)" should be visible$/ do |link|
//  actual_link="#{link.downcase.tr(" ", "_")}_link_element"
//  @current_page.send(actual_link).visible?.should be_true, "Link #{link} is not visible"
//end
//
//Then /^get back to previous page$/ do
//  @browser.navigate.back
//end
//
//Given(/^user menu has username$/) do
//  on_page(MainPage).wait_for_ajax
//  on_page(MainPage).wait_until(5,"Username is incorrect. Actual:#{on_page(MainPage).user_icon_menu_element.text}. Expected: #{$user_name.upcase}") do
//    on_page(MainPage).user_icon_menu_element.text == $user_name.upcase
//  end
//end
//
//Then(/^"([^"]*)" link should( not)? be disabled$/) do |link_name, if_link_disabled|
//  a = {"Start Provisioning"=>0,"Start Creating"=>1,"View Details"=>2}
//  if if_link_disabled.nil?
//    on_page(MainPage).main_page_nav_elements[a[link_name]].attribute('class').should include 'disabled'
//  else
//    on_page(MainPage).main_page_nav_elements[a[link_name]].attribute('class').should_not include 'disabled'
//  end
//end