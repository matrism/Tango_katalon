/** 
 * example of possible structure of writing tests with tags and 
 *      flexible system of extending features
 */      

var feature = {
    name: "Components",
    features: [{
        name: 'Validate Breadcrumb Component tutorial on frontend page',
        tags: ['wip', 'smoke'],
        beforeEach: ftf.helper.waitForAjax,
        steps: [
            {
                fn: steps.components.itWhenClickOnRepeater,
                args: [page.elems.center_repeater, page.parts.frontend]
            }
        ]
    },
    {
        name: 'Validate Breadcrumb Component tutorial on backend page',
        tags: ['wip', '@2345423'],
        beforeEach: ftf.helper.waitForAjax,
        steps: [
            {
                fn: steps.components.itWhenClickOnRepeater,
                args: [page.elems.center_repeater, page.parts.frontend]
            },
            {
                fn: steps.components.itAndClickOnRepeater,
                args: [page.elems.menu_repeater, page.parts.frontend.components.breadcrumb]
            }
        ]
    }]
}