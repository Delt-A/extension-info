! function() {
    "use strict";
    angular.module("app.user", []).factory("userService", ["$q", "$log", "$injector", "constants", "storage", "notification", "msaUserService", "o365UserService", function(e, r, t, n, i, o, s, u) {
        function l(e, o, s, u) {
            3 === arguments.length && "[object Function]" === Object.prototype.toString.call(s) ? (u = s, s = null) : 2 === arguments.length && "[object Function]" === Object.prototype.toString.call(o) && (u = o, o = null);
            var l = a(e);
            if (Utilities.isUndefinedOrNull(l)) return r.error("userService.acquireToken - Invalid type"), void u(null);
            var c = l.getConfig();
            c.params.grant_type = n.OAUTH.REFRESH_TOKEN, 4 !== arguments.length && 3 !== arguments.length || l.type !== n.USER_TYPE.O365 || (Utilities.isUndefinedOrNull(s) ? c.resource = l.getResourceForEndpoint(o) : c.resource = s, c.params.resource = c.resource),
                function(e, r) {
                    i.get("accessToken").then((function(t) {
                        var n, i;
                        Utilities.isUndefinedOrNull(t.accessToken) || Utilities.isUndefinedOrNull(t.accessToken[e]) ? r(null) : (n = t.accessToken[e].expires_on, i = Utilities.getCurrentTime(), r(n && n > i + 120 ? t.accessToken[e].access_token : null))
                    }))
                }(c.resource, (function(e) {
                    Utilities.isNotUndefinedOrNull(e) ? u(e) : function(e, r) {
                        i.get("refreshToken").then((function(t) {
                            Utilities.isUndefinedOrNull(t.refreshToken) || Utilities.isUndefinedOrNull(t.refreshToken[e]) ? r(null) : r(t.refreshToken[e])
                        }))
                    }(l.type, (function(e) {
                        Utilities.isUndefinedOrNull(e) || Utilities.isUndefinedOrNull(e) ? u(null) : (c.params.refresh_token = e, t.get("$http")({
                            method: "POST",
                            url: c.url,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            },
                            data: $.param(c.params)
                        }).success((function(e) {
                            U(c.resource, e), d(l.type, e), i.set({
                                userType: l.type
                            }), u(e.access_token)
                        })).error((function() {
                            f(), u(null)
                        })))
                    }))
                }))
        }

        function f() {
            i.remove("accessToken"), i.remove("refreshToken"), i.remove("userInfo"), i.remove("userType")
        }

        function c(e) {
            i.get("userType").then((function(r) {
                Utilities.isUndefinedOrNull(r.userType) ? e(!1) : l(r.userType, (function(r) {
                    e(Utilities.isNotUndefinedOrNull(r))
                }))
            }))
        }

        function a(e) {
            var t = null;
            switch (e) {
                case n.USER_TYPE.MSA:
                    t = s;
                    break;
                case n.USER_TYPE.O365:
                    t = u;
                    break;
                default:
                    r.error(String.format("userService.getUserServiceProvider - Invalid type - {0}", e))
            }
            return t
        }

        function d(e, r) {
            i.get("refreshToken").then((function(t) {
                Utilities.isUndefinedOrNull(t.refreshToken) && (t.refreshToken = {}), t.refreshToken[e] = r.refresh_token, i.set(t)
            }))
        }

        function U(e, r) {
            Utilities.isUndefinedOrNull(r.expires_on) && (r.expires_on = Utilities.getCurrentTime() + r.expires_in), i.get("accessToken").then((function(t) {
                Utilities.isUndefinedOrNull(t.accessToken) && (t.accessToken = {}), t.accessToken[e] = r, i.set(t)
            }))
        }

        function p(e, r) {
            i.get("userInfo").then((function(t) {
                Utilities.isUndefinedOrNull(t.userInfo) || Utilities.isUndefinedOrNull(t.userInfo[e]) ? r(null) : r(t.userInfo[e])
            }))
        }

        function T(r, t) {
            var o = e.defer();
            return i.get("userInfo").then((function(e) {
                Utilities.isUndefinedOrNull(e.userInfo) && (e.userInfo = {}), e.userInfo[r] = {}, e.userInfo[r].email = t.email, e.userInfo[r].puid = t.puid, e.userInfo[r].tid = t.tid, e.userInfo[r].cid = t.cid, e.userInfo[r].flights = t.flights, e.userInfo[r].features = t.features, e.userInfo[r].photo = t.photo, e.userInfo[r].oneDriveUrl = t.oneDriveUrl, e.userInfo[r].sharePointUrl = t.sharePointUrl;
                var s = new RegExp("(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+\\.)*(?:(?:microsoft|lionbridge).com)");
                e.userInfo[r].userInEditorPreview = r === n.USER_TYPE.O365 && t.email && s.test(t.email), i.set(e), o.resolve(e.userInfo[r])
            })), o.promise
        }

        function g(e, r) {
            a(e).lookupUserInfo(r, (function(r) {
                BrowserHandler.runtime.sendMessage({
                    activity: n.ACTIVITY.USERINFO_AVAILABLE.NAME,
                    data: r
                }), T(e, r), O(e, r)
            }))
        }

        function O(i, o) {
            var s = e.defer(),
                u = t.get("$http");
            return i === n.USER_TYPE.O365 && (Utilities.isUndefinedOrNull(o) || Utilities.isUndefinedOrNull(o.email)) ? (s.reject(), s.promise) : (u({
                method: "GET",
                url: i === n.USER_TYPE.MSA ? n.MSACONFIG.PHOTO_URL : String.format(n.O365CONFIG.PHOTO_URL, o.email),
                responseType: "blob",
                headers: {
                    "X-UserType": i
                }
            }).success((function(e) {
                r.trackEvent(String.format("UserService_GotServerPhoto_{0}", i));
                var t = new FileReader;
                t.onload = function() {
                    p(i, (function(e) {
                        Utilities.isNotUndefinedOrNull(e) && (e.photo = t.result, T(i, e))
                    })), s.resolve(t.result)
                }, t.readAsDataURL(e)
            })).error((function(e) {
                s.reject(e)
            })), s.promise)
        }
        var v = {
            acquireToken: l,
            authenticate: function(e, s) {
                var u = a(e);
                Utilities.isUndefinedOrNull(u) ? r.error("userService.authenticate - Invalid type") : function(e, o, s) {
                    var u = e.getConfig();
                    if (Utilities.isUndefinedOrNull(e)) return r.error("userService.acquireTokenFromCode - Invalid type"), void s(null);
                    u.params.grant_type = n.OAUTH.AUTH_CODE, u.params.code = o, t.get("$http")({
                        method: "POST",
                        url: u.url,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                        },
                        data: $.param(u.params)
                    }).success((function(r) {
                        U(u.resource, r), d(e.type, r), i.set({
                            userType: e.type
                        }), g(e.type, r), s(r.access_token)
                    })).error((function() {
                        s(null)
                    }))
                }(u, s, (function(e) {
                    Utilities.isUndefinedOrNull(e) ? u.type === n.USER_TYPE.O365 && o.show(n.NOTIFICATION.INVALIDSUBSCRIPTION) : r.trackEvent(String.format("Authorization_Success_{0}", u.type))
                }))
            },
            clearToken: f,
            getLoginStatus: c,
            getUserType: function() {
                var r = e.defer();
                return c((function(e) {
                    if (!e) return r.resolve(n.USER_TYPE.NONE), r.promise;
                    i.get("userType").then((function(e) {
                        Utilities.isUndefinedOrNull(e.userType) ? r.resolve(n.USER_TYPE.NONE) : r.resolve(e.userType)
                    }))
                })), r.promise
            },
            getUserInfo: p,
            waitForUserInfo: function(t) {
                var i = e.defer();
                return v.getUserInfo(t, (function(e) {
                    if (Utilities.isNotUndefinedOrNull(e)) return i.resolve(e), i.promise;
                    BrowserHandler.runtime.onMessage.addListener(u);
                    var o = Utilities.isExtensionInTestingMode() ? n.TIMEOUT.USER_INFO_LOOKUP_TEST : n.TIMEOUT.USER_INFO_LOOKUP,
                        s = setTimeout((function() {
                            r.warn(String.format("userService.waitForUserInfo timed out after {0} ms - {1}", n.TIMEOUT.USER_INFO_LOOKUP, t)), BrowserHandler.runtime.onMessage.removeListener(u), i.resolve(e)
                        }), o);

                    function u(e) {
                        e.activity === n.ACTIVITY.USERINFO_AVAILABLE.NAME && (BrowserHandler.runtime.onMessage.removeListener(u), clearTimeout(s), i.resolve(e.data))
                    }
                })), i.promise
            },
            saveUserInfo: T,
            login: function(e) {
                var t = a(e);
                Utilities.isUndefinedOrNull(t) ? r.error("userService.login - Invalid type") : BrowserHandler.tabs.create({
                    url: t.getConfig().loginUrl
                }, (function(e) {
                    i.set({
                        loginTabId: e.id
                    })
                }))
            },
            logout: function(e) {
                f();
                var n = a(e);
                Utilities.isUndefinedOrNull(n) ? r.error("userService.logout - Invalid type") : t.get("$http")({
                    method: "GET",
                    url: n.getConfig().logoutUrl
                }).success((function() {
                    r.debug(String.format("userService.logout - {0}", e))
                }))
            },
            getUserPhoto: function() {
                var t = e.defer();
                return v.getUserType().then((function(e) {
                    if (e === n.USER_TYPE.NONE) return r.warn("UserService.getUserPhoto: no signed-in user"), t.reject(n.RECENTS.ERROR.UNSUPPORTED_USER_TYPE), t.promise;
                    v.getUserInfo(e, (function(n) {
                        if (Utilities.isNotUndefinedOrNull(n) && Utilities.isNotUndefinedOrNull(n.photo)) return r.trackEvent(String.format("UserService_GotLocalPhoto_{0}", e)), t.resolve(n.photo), t.promise;
                        t.reject("No photo in local storage")
                    }))
                })), t.promise
            },
            getPhotoFromServer: O,
            lookupUserInfo: g
        };
        return v
    }])
}();