﻿define(['knockout'], function (ko) {

    function WebmailViewModel() {
        // Data
        var self = this;
        self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
        self.chosenFolderId = ko.observable();
        self.chosenFolderData = ko.observable();
        self.chosenMailData = ko.observable();

        // Behaviours    
        self.goToFolder = function (folder) { location.hash = folder };
        self.goToMail = function (mail) { location.hash = mail.folder + '/' + mail.id };

    };
	
    return new WebmailViewModel();
});