var port = chrome.runtime.connect();
window.postMessage({
    name: "sync-ready"
}, "*");
window.addEventListener("message", function(event) {
    if (event.data == "page-ready") {
        try {
            chrome.runtime.sendMessage({
                method: "request-login"
            }, function(response) {
                var token = response.data.token;
                window.postMessage({
                    name: "extension-token",
                    token: token
                }, "*");
            });
        } catch (e) {
            window.catpet.log("CatPet: Failed background request", e);
        }
    } else {
        try {
            chrome.runtime.sendMessage(event.data, function(response) {

            });
        } catch (e) {
            window.catpet.log("CatPet: Failed background request 2", e);
        }
    }
}, false);