! function() {
    "use strict";
    angular.module("app.experimentation").factory("sharingService", ["$http", "$q", "$log", "constants", "userService", function(e, r, i, n, t) {
        return {
            setShareUrl: function(e, r) {
                if (Utilities.isUndefinedOrNull(e) || Utilities.isUndefinedOrNull(e.url)) return;
                if (e.shareUrl = "", r === n.USER_TYPE.MSA) {
                    var i = e.url.replace("&page=view", "&page=self");
                    i.indexOf("&page=self") < 0 && (i += "&page=self"), i += "&action=share", e.shareUrl = i
                }
            },
            setFlagFromPermissions: function(s, l) {
                var o = r.defer();
                if (Utilities.isUndefinedOrNull(s)) return o.resolve(), o.promise;
                if (l === n.USER_TYPE.MSA) {
                    return function(i) {
                        var s = r.defer();
                        return function() {
                            var e = r.defer();
                            return t.waitForUserInfo(n.USER_TYPE.MSA).then((function(r) {
                                if (Utilities.isUndefinedOrNull(r)) return e.resolve(null), e.promise;
                                e.resolve(r.cid)
                            })), e.promise
                        }().then((function(r) {
                            if (Utilities.isUndefinedOrNull(r)) return s.reject("null cid"), s.promise;
                            if (Utilities.isUndefinedOrNull(i.id)) return s.reject("no document id"), s.promise;
                            var t = i.id.split("."),
                                l = t[t.length - 1],
                                o = {
                                    method: "GET",
                                    url: n.MSACONFIG.ONEDRIVE_ITEMS_URL + l + "/permissions",
                                    headers: {
                                        "X-UserType": n.USER_TYPE.MSA
                                    }
                                };
                            e(o).success((function(e) {
                                var i = function(e, r) {
                                    if (Utilities.isUndefinedOrNull(e) || Utilities.isUndefinedOrNull(e.value)) return !0;
                                    for (var i = !0, n = r.substring(1, r.length), t = 0; t < e.value.length; ++t) {
                                        var s = e.value[t];
                                        if (!Utilities.isUndefinedOrNull(s.grantedTo)) {
                                            var l = s.grantedTo.user;
                                            if (l.id === r || l.id === n) {
                                                var o = s.roles;
                                                i = o.toString().toLowerCase().indexOf("write") > -1
                                            }
                                        }
                                    }
                                    return i
                                }(e, r);
                                s.resolve(i)
                            })).error((function(e) {
                                s.reject(e)
                            }))
                        })), s.promise
                    }(s).then((function(e) {
                        s.canBeShared = e, o.resolve()
                    }), (function(e) {
                        i.error(String.format("sharingService.setFlagFromPermissions error: {0}", e)), s.canBeShared = !1, o.resolve()
                    })), o.promise
                }
                return s.canBeShared = !1, o.resolve(), o.promise
            }
        }
    }])
}();