! function() {
    "use strict";
    angular.module("app.common").factory("editorUtils", ["$q", "$log", "storage", function(t, e, n) {
        function r(t) {
            if (!t) return {};
            try {
                var e = new URL(t),
                    n = {
                        protocol: e.protocol,
                        hostname: e.hostname
                    };
                return n.hostname && 0 != n.hostname.length ? n : {}
            } catch (t) {
                return {}
            }
        }
        var o = {
            getCurrentTabHostName: function() {
                var e = t.defer();
                return BrowserHandler.tabs.query({
                    active: !0,
                    currentWindow: !0
                }, (function(t) {
                    if (t && t[0] && t[0].url) {
                        var n = t[0].url,
                            o = r(n);
                        "http:" === o.protocol || "https:" === o.protocol ? e.resolve({
                            url: n,
                            hostname: o.hostname
                        }) : e.resolve({})
                    }
                })), e.promise
            },
            siteIsBlocked: function(t) {
                return Utilities.siteIsBlockedByManifest(t)
            },
            openOptionsPage: function() {
                window.open(BrowserHandler.extension.getURL("options.html"), "_blank")
            },
            getHostnameOnlyUrl: function(t) {
                var e = r(t);
                if (e.protocol) return e.protocol + "//" + e.hostname
            },
            getFormattedLocalizedString: function(t, e) {
                return BrowserHandler.i18n.getMessage(t, e)
            },
            readSettingValueOrUndefined: function(t, e) {
                if (t[e]) {
                    var n = JSON.parse(t[e]);
                    if (void 0 !== n.value) return JSON.parse(n.value)
                }
            },
            writeEditorSettingValue: function(t, e) {
                var r = {
                        value: JSON.stringify(e),
                        lastUpdated: Date.now(),
                        manualOverride: !1
                    },
                    o = {};
                o[t] = JSON.stringify(r), n.set(o)
            },
            isHostNameExcluded: function(t, e, n, r) {
                return !(!n || !n.find((function(t) {
                    try {
                        return o.getUrlInfo(t).hostname === e
                    } catch (t) {
                        return !1
                    }
                }))) || !(!r || !r.find((function(e) {
                    try {
                        return new RegExp(e).test(t)
                    } catch (t) {
                        return !1
                    }
                })))
            },
            getUrlInfo: r
        };
        return o
    }])
}();