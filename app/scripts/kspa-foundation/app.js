define(['knockout'], function (ko) {

    function ApplicationViewModel() {
        // Data
        title =  ko.observable('kspa Foundation');

        return {
            title: title
        };
    };
	
    return new ApplicationViewModel();
});