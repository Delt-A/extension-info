! function() {
    "use strict";
    angular.module("app.file").service("oneDriveFileService", ["$http", "$log", "constants", "localize", function(e, t, o, n) {
        this.doUpload = function(r, i) {
            var a = {
                method: "PUT",
                url: o.ONEDRIVE.INSTANCE + "/drive/root:/" + encodeURIComponent(n.getLocalizedString("AppFolderName")) + "/" + r.name + ":/content" + o.ONEDRIVE.QUERY_OPTION,
                headers: {
                    "Content-Type": "application/octet-stream",
                    "X-UserType": o.USER_TYPE.MSA
                },
                data: r.content,
                transformRequest: []
            };
            e(a).success((function(e, o) {
                t.debug(String.format("oneDriveFileService.doUpload - {0} - {1}", o, e.webUrl)), i(e.webUrl)
            })).error((function(e, t) {
                i(null, e, t)
            }))
        }
    }])
}();