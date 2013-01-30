define(['knockout', 'spa/router', './webmail', './fakeData'], 
    function (ko, router, webmail, fakeData) {
    
    router.configure({
        defaultRoute: 'Inbox'
    });

    // Client-side routes  
    router.get('{folder}/{mailId}', 
        function(path, folder, mailId){
            console.log('get mail item', arguments);
            webmail.chosenFolderId(folder);
            webmail.chosenFolderData(null);
            setTimeout(function () {
                console.log('debug', folder, fakeData)
                webmail.chosenMailData(ko.utils.arrayFirst(fakeData[folder], function (item) {
                    return item.id == mailId;
                }));
            }, 0);
    });
    router.get('{folder}', 
        function (path, folder) {
                webmail.chosenFolderId(folder);
                webmail.chosenMailData(null);
                setTimeout(function () {
                    webmail.chosenFolderData({ mails: fakeData[folder] })
                }, 0);
    });    
    router.start();
});