describe('Provisioning module', function() {
    var login_page = require("../../pages/login"),
        provisioning_page = require("../../pages/provisioning"),
        pageLoaded = false;
    
    beforeEach(function() {
        if (pageLoaded)
            return;
        pageLoaded = true;
        // should be logged in
        login_page.check();
        // user navigates to Provisioning page
        provisioning_page.goToPage();
    });
    
    describe(' First step', function() {

        describe('Select user in typeahead', function() {
            
            beforeEach(function() {
                browser.sleep(1000);
            });

            it('typeahead input should be present', function() {
                provisioning_page.elementByCssIsPresent('input[ng-model="typeahead.model"]', true);
            }); 

            it ('set value for typeahead', function() {
                provisioning_page.setValue('input[ng-model="typeahead.model"]', 'A');
            });

            it ('list of suggestions is displayed',  function() {
                provisioning_page.elementByCssIsPresent('div.ugol-select-wrapper', true);
            });

            it ('select Sam, Alexander from suggestions list',  function() {
                provisioning_page.selectItemFromRepeater("match in matches", 0);
            });

            it ('user should see item Sam, Alexander in typeahead step 1',  function() {
                provisioning_page.repeaterHasItem("tag in tags", "Sam, Alexander");
            });
            
            it ('user clicks on tag option Sam, Alexander in step 1',  function() {
                provisioning_page.selectItemFromRepeater("tag in tags", 0);
            });
            
            it ('currently editing is Sam, Alexander',  function() {
                provisioning_page.elementByCssIsDisplayed('[ui-view="provisioning-tabs"]', true);
            });

        });
        
    });
    
});
