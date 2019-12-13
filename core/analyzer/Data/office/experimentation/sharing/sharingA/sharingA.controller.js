! function() {
    "use strict";
    angular.module("app.experimentation").controller("SharingAController", ["$log", "sharingService", "userService", "localize", function(e, i, r, t) {
        var n = this;
        n.shareDoc = null, n.isChrome = Utilities.isChrome(), n.localize = t, n.init = function(e) {
            n.shareDoc = e, r.getUserType().then((function(e) {
                i.setShareUrl(n.shareDoc, e), i.setFlagFromPermissions(n.shareDoc, e)
            }))
        }, n.shareDocument = function(i) {
            e.trackEvent(String.format("ShareRecentDocument_{0}", n.shareDoc.application));
            var r = !(!Utilities.isUndefinedOrNull(i) && !Utilities.isUndefinedOrNull(i.ctrlKey)) || !i.ctrlKey;
            Utilities.navigateToUrlWithNewTab(n.shareDoc.shareUrl, r), window.close()
        }
    }])
}();