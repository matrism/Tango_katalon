var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

    require(pages_path + "login_page");
    require(pages_path + "base_page");
    require(steps_path + "login_steps");
    require(steps_path + "base_steps");
    
var beforeFeature = [
        [steps.login.itLogin]
    ],
    feature = [{
        name: "Verify menu contains Logout option and functionality",
        tags: [],
        steps: [
            [steps.login.itCheckUserMenuHasUsername, [_tf_config.user_name]],
            [steps.base.itClickOnElement, [pages.base.elems.user_icon_menu, "user icon menu"]],
            [steps.login.itCheckUserMenuHasOption, ["Logout"]],
            [steps.base.itClickOnElement, [pages.base.elems.user_dropdown_menu_logout, "'Logout' option from drowdown menu"]],
            [steps.base.itCheckIsRedirectToPage, ["logout page", "login"]]
        ]
    }];

module.exports = {
    commonFeatureTags: ["login"],
    feature: feature,
    beforeFeature: beforeFeature
};


