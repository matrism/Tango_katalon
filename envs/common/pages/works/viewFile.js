'use strict';

pages.viewWorkFile = exports;

exports.fileNameBinding = () => element(by.binding(
    'dataHolder.uploadFile.file_name'
));

exports.fileName = () => asAlways(
    exports.fileNameBinding(), 'scrollIntoView', 'getAllText'
);

exports.validateFileName = val => expect(exports.fileName()).toBe(val);

exports.totalWorksMsgBinding = () => element(by.css(
    "p.work_ph"
));

exports.totalWorksMsg = () => asAlways(
    exports.totalWorksMsgBinding(), 'scrollIntoView', 'getAllText'
);

exports.totalWorks = () => {
    return exports.totalWorksMsg().then(msg => {
        let iSlice = msg.indexOf(':');

        // if(iSlice === -1) {
        //     throw new Error(`Parse error (missing colon): ${msg}`);
        // }

        return msg.slice(iSlice + 1).trim();
    });
};

exports.validateTotalWorks = val => expect(
    exports.totalWorks()
).toBe(val.toString());

exports.tabs = () => $(
    '[tg-tabset-id="stagedWorksTabset"] ul.nav-tabs'
).all(by.repeater('$tab in $tabs'));

exports.tabByName = name => exports.tabs().filter(el => {
    return pph.getAllText(el).then(label => {
        let reRes = /^([^\(]+)(\([^\)]+\))?$/.exec(label);

        if(!reRes) {
            console.error(`WARNING - Cannot parse tab label: ${label}`);
            return false;
        }

        return reRes[1].trim() === name;
    });
}).first();

exports.goToTab = name => asAlways(
    exports.tabByName(name), 'scrollIntoView', 'click', 'waitForAjax'
);

exports.unconfirmed = (() => {
    let unc = {};

    unc.rows = () => $$('.accordion-group');

    unc.validateRowCount = val => expect(unc.rows().count()).toBe(val);

    unc.workTitleBinding = i => unc.rows().get(i).element(by.model(
        ' stage.work_base_data.title '
    ));

    unc.workTitle = i => asAlways(
        unc.workTitleBinding(i), 'scrollIntoView', 'getAllText'
    );

    unc.validateWorkTitle = (i, val) => expect(
        unc.workTitle(i)
    ).toBe(val);

    unc.toggleButton = i => unc.rows().get(i).$('.caret-acc');

    unc.toggle = i => asAlways(
        unc.toggleButton(i), 'scrollIntoView', 'click'
    );

    unc.createLink = i => unc.rows().get(i).element(by.cssContainingText(
        'a', 'Create'
    ));

    unc.create = i => asAlways(
        unc.createLink(i), 'scrollIntoView', 'click', 'waitForAjax'
    );

    unc.clickConfirmation = () => $('.modal.fade.in div.modal-footer button[data-ng-click="ok();"]');



    unc.confirmation = () => asAlways(
        unc.clickConfirmation(), 'scrollIntoView', 'click'
    );

    return unc;
})();

exports.created = (() => {
    let creat = {};

    creat.topContainer = () => $('.create-top-container');

    creat.viewCreatedWorksLink = creat.topContainer().element(
        by.cssContainingText('a', 'Works created')
    );

    creat.viewCreatedWorks = () => asAlways(
        creat.viewCreatedWorksLink(), 'scrollIntoView', 'click'
    );

    creat.viewCreatorContributionsAndScopeDeliveryLink = () => (
        creat.topContainer().element(by.cssContainingText(
            'a', 'Creator contributions and scope delivery'
        ))
    );

    creat.viewCreatorContributionsAndScopeDelivery = () => asAlways(
        creat.viewCreatorContributionsAndScopeDeliveryLink(),
        'scrollIntoView', 'click'
    );

    creat.createdWorksView = (() => {
        let cwv = {};

        cwv.rows = () => $$('.accordion-group');

        cwv.validateRowCount = val => expect(cwv.rows().count()).toBe(val);

        cwv.workTitleBinding = i => cwv.rows().get(i).element(by.model(
            ' stage.work_base_data.title '
        ));

        cwv.workTitle = i => asAlways(
            cwv.workTitleBinding(i), 'scrollIntoView', 'getAllText'
        );

        cwv.validateWorkTitle = (i, val) => expect(
            cwv.workTitle(i)
        ).toBe(val);

        cwv.workIdBinding = i => cwv.rows().get(i).element(by.binding(
            'workUtility.makeFullCode(stage.matched_work_code)'
        ));

        cwv.workId = i => asAlways(
            cwv.workIdBinding(i), 'scrollIntoView', 'getAllText'
        );

        cwv.validateWorkId = (i, val) => expect(cwv.workId(i)).toBe(val);

        cwv.workIdLink = i => cwv.workIdBinding(i);

        cwv.openWork = i => asAlways(
            cwv.workIdLink(i), 'scrollIntoView', 'click', 'waitForAjax'
        );

        return cwv;
    })();

    creat.contributionsAndDeliveryView = (() => {
        let cdv = {};

        cdv.rows = () => $$('.accordion-group');

        cdv.validateRowCount = val => expect(cdv.rows().count()).toBe(val);

        cdv.workTitleBinding = i => cdv.rows().get(i).element(by.binding(
            ' stage.work_title '
        ));

        cdv.workTitle = i => asAlways(
            exports.workTitleBinding(i), 'scrollIntoView', 'getAllText'
        );

        cdv.validateWorkTitle = (i, val) => expect(
            exports.workTitle(i)
        ).toBe(val);

        return cdv;
    })();

    return creat;
})();
