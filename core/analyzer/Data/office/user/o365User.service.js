! function() {
    "use strict";
    angular.module("app.user").service("o365UserService", ["$log", "$injector", "constants", "notification", function(e, r, n, t) {
        function i() {
            r.get("userService").clearToken()
        }

        function o(r) {
            var t = {},
                i = function(r) {
                    var n = function(r) {
                        var n = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(r);
                        if (!n || n.length < 4) return e.error("The returned id_token is not parseable."), null;
                        return {
                            header: n[1],
                            JWSPayload: n[2],
                            JWSSig: n[3]
                        }
                    }(r);
                    if (!n) return null;
                    try {
                        var t = function(e) {
                            if (e = e.replace(/-/g, "+").replace(/_/g, "/"), window.atob) return decodeURIComponent(escape(window.atob(e)));
                            return null
                        }(n.JWSPayload);
                        return t ? JSON.parse(t) : (this._logstatus("The returned id_token could not be base64 url safe decoded."), null)
                    } catch (r) {
                        e.error("The returned id_token could not be decoded: " + r.stack)
                    }
                    return null
                }(r);
            return i && i.hasOwnProperty("aud") && (i.aud.toLowerCase() === n.O365CONFIG.CLIENT_ID.toLowerCase() ? (i.hasOwnProperty("upn") ? t.email = i.upn : i.hasOwnProperty("email") && (t.email = i.email), i.hasOwnProperty("puid") && (t.puid = i.puid), i.hasOwnProperty("tid") && (t.tid = i.tid)) : e.error("IdToken has invalid aud field")), t
        }
        this.type = n.USER_TYPE.O365, this.getConfig = function() {
            return {
                url: n.O365CONFIG.INSTANCE + "token",
                params: {
                    client_id: n.O365CONFIG.CLIENT_ID,
                    client_secret: n.O365CONFIG.CLIENT_SECRET,
                    redirect_uri: n.O365CONFIG.REDIRECT_URI,
                    resource: n.O365CONFIG.GRAPH_RESOURCE
                },
                resource: n.O365CONFIG.GRAPH_RESOURCE,
                loginUrl: n.O365CONFIG.INSTANCE + "authorize?response_type=code&client_id=" + n.O365CONFIG.CLIENT_ID + "&redirect_uri=" + n.O365CONFIG.REDIRECT_URI,
                logoutUrl: n.O365CONFIG.LOGOUT_URI
            }
        }, this.getResourceForEndpoint = function(e) {
            var r = null;
            if (Utilities.isUndefinedOrNull(e)) return r;
            for (var t in n.O365CONFIG.ENDPOINTS) n.O365CONFIG.ENDPOINTS.hasOwnProperty(t) && e.indexOf(t) > -1 && (r = n.O365CONFIG.ENDPOINTS[t]);
            return r
        }, this.lookupUserInfo = function(u, l) {
            var s = o(u.id_token);
            ! function(o) {
                r.get("$http")({
                    method: "GET",
                    url: n.O365CONFIG.ONEDRIVE_URL,
                    headers: {
                        "X-UserType": n.USER_TYPE.O365
                    }
                }).success((function(r) {
                    Utilities.isNotUndefinedOrNull(r.webUrl) ? o(r.webUrl) : (i(), t.show(n.NOTIFICATION.INVALIDSUBSCRIPTION), e.info(String.format("o365UserService.DiscoverServiceEndpoint - Invalid resource")), o(null))
                })).error((function() {
                    i(), t.show(n.NOTIFICATION.INVALIDSUBSCRIPTION), o(null)
                }))
            }((function(e) {
                s.oneDriveUrl = e,
                    function(e) {
                        r.get("$http")({
                            method: "GET",
                            url: n.O365CONFIG.SHAREPOINT_URL,
                            headers: {
                                "X-UserType": n.USER_TYPE.O365
                            }
                        }).success((function(r) {
                            Utilities.isNotUndefinedOrNull(r.webUrl) ? e(r.webUrl) : e(null)
                        })).error((function() {
                            e(null)
                        }))
                    }((function(e) {
                        s.sharePointUrl = Utilities.isUndefinedOrNull(e) ? n.LINKS.APP.SHAREPOINT_DEFAULT : e, l(s)
                    }))
            }))
        }
    }])
}();