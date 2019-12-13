! function() {
    "use strict";
    angular.module("app.file").service("sharePointFileService", ["$http", "$log", "constants", "localize", "userService", function(e, i, r, n, o) {
        this.doUpload = function(t, l) {
            var a, d;
            t.name = (a = t.name, d = (new Date).toISOString().replace(/(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+).+/, "_$1$2$3_$4$5$6."), a.replace(".", d)), o.getUserInfo(r.USER_TYPE.O365, (function(o) {
                if (Utilities.isUndefinedOrNull(o) || Utilities.isUndefinedOrNull(o.oneDriveUrl)) return i.error("sharePointFileService.doUpload - Invalid OneDriveUrl"), void l(null);
                var a = {
                    method: "PUT",
                    url: r.O365CONFIG.UPLOAD_URL + encodeURIComponent(n.getLocalizedString("AppFolderName")) + "/" + t.name + ":/content",
                    headers: {
                        "Content-Type": "application/octet-stream",
                        "X-UserType": r.USER_TYPE.O365
                    },
                    data: t.content,
                    transformRequest: []
                };
                e(a).success((function(e, r) {
                    var n, o;
                    return Utilities.isUndefinedOrNull(e.eTag) ? (i.error("sharePointFileService.doUpload - Missing eTag"), void l(null, e, r)) : (n = e.eTag.substring(1, e.eTag.indexOf(",")), Utilities.isUndefinedOrNull(e["@microsoft.graph.downloadUrl"]) ? (i.error("sharePointFileService.doUpload - Missing downloadUrl"), void l(null, e, r)) : (o = e["@microsoft.graph.downloadUrl"].replace(/download.aspx?.+/, "WopiFrame.aspx?sourcedoc=" + n), i.debug(String.format("sharePointFileService.doUpload - {0} - {1}", r, o)), void l(o)))
                })).error((function(e, i) {
                    l(null, e, i)
                }))
            }))
        }
    }])
}();