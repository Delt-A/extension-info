! function(i) {
    "use strict";
    jQuery(window).load((function() {
        "https://login.microsoftonline.com" === window.location.origin ? window.location.search.indexOf("code=") >= 0 && BrowserHandler.runtime.sendMessage({
            activity: "authorization",
            type: "o365UserService",
            query: window.location.search.substring(1)
        }) : "https://login.live.com" === window.location.origin && window.location.search.indexOf("code=") >= 0 && BrowserHandler.runtime.sendMessage({
            activity: "authorization",
            type: "msaUserService",
            query: window.location.search.substring(1)
        })
    }))
}();