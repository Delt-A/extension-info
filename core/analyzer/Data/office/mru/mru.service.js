! function() {
    "use strict";
    angular.module("app.mru", []).factory("mruService", ["$q", "$log", "$http", "constants", "userService", function(e, t, r, n, i) {
        function o(t, i) {
            var o = e.defer();
            return r({
                method: "GET",
                accept: "application/json",
                url: i,
                contentType: "application/json",
                headers: {
                    "X-UserType": t
                }
            }).success((function(e) {
                o.resolve(e)
            })).error((function() {
                o.reject(n.RECENTS.ERROR.GENERIC)
            })), o.promise
        }

        function a(e) {
            var t = [];
            if (Utilities.isUndefinedOrNull(e)) return t;
            for (var r = 0; r < e.length; r++) {
                var i;
                if (e[r].remoteItem)
                    if (e[r].remoteItem.mru)(i = e[r].remoteItem.mru).app && -1 !== n.FILE.SUPPORTED_APPLICATIONS.indexOf(i.app) && t.push({
                        DocumentUrl: i.url,
                        Timestamp: i.timeStamp,
                        Application: i.app.toLowerCase(),
                        FileName: e[r].name,
                        Id: e[r].id
                    });
                    else if ((i = e[r].remoteItem).webDavUrl) {
                    var o = n.FILE.SUPPORTED_FILE_TYPES[Utilities.getFileExtension(i.webDavUrl)];
                    i.package && i.package.type && "onenote" === i.package.type.toLowerCase() && (o = "onenote");
                    var a = i.fileSystemInfo ? i.fileSystemInfo.lastAccessedDateTime : "";
                    o && a && t.push({
                        DocumentUrl: i.webDavUrl,
                        Timestamp: a,
                        Application: o,
                        FileName: e[r].name,
                        Id: e[r].id
                    })
                }
            }
            return t
        }
        return {
            getRecentDocumentList: function() {
                var t = e.defer();
                return i.getUserType().then((function(e) {
                    if (e !== n.USER_TYPE.MSA && e !== n.USER_TYPE.O365) return t.reject(n.RECENTS.ERROR.UNSUPPORTED_USER_TYPE), t.promise;
                    var r = e === n.USER_TYPE.MSA ? n.RECENTS.ONEDRIVE_ENDPOINT : n.O365CONFIG.MRU_URL + n.RECENTS.FILTER;
                    o(e, r).then((function(r) {
                        t.resolve(e === n.USER_TYPE.MSA ? a(r.value) : r)
                    }), (function(e) {
                        return t.reject(e), t.promise
                    }))
                })), t.promise
            },
            getRecentDocs: o,
            normalizeMruList: a
        }
    }])
}();