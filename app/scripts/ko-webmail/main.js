// require(['require.paths'], function main() {
    require(['knockout', 'ko-webmail/webmail', 'ko-webmail/routes'], function (ko, webmail) {
        ko.applyBindings(webmail);

    	// helpful for debuggin
        window.$app = webmail;
    });
// });