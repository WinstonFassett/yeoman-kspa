// require(['require.paths'], function main() {
    require(['knockout', 'kspa-foundation/app'
    	], function (ko, app) {
        ko.applyBindings(app);

    	// helpful for debuggin
        window.$app = app;
    });
// });