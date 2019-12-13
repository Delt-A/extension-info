var Utilities = function() {
    "use strict";
    var e = {
        deserializeQuery: function(e) {
            var n, r = /\+/g,
                t = /([^&=]+)=?([^&]*)/g,
                i = function(e) {
                    return decodeURIComponent(e.replace(r, " "))
                },
                o = {};
            for (n = t.exec(e); n;) o[i(n[1])] = i(n[2]), n = t.exec(e);
            return o
        },
        getFileExtension: function(e) {
            var n = "",
                r = e.split(".");
            return r.length > 1 && (n = r[r.length - 1].toLowerCase()), n
        },
        navigateToUrlWithNewTab: function(n, r) {
            BrowserHandler.tabs.create({
                url: n,
                active: !!e.isUndefinedOrNull(r) || r
            })
        },
        isNotUndefinedOrNull: function(n) {
            return !e.isUndefinedOrNull(n)
        },
        isUndefinedOrNull: function(e) {
            return null == e
        },
        isExtensionInTestingMode: function() {
            return e.isNotUndefinedOrNull(window.jasmine)
        },
        isExtensionInDevelopmentMode: function() {
            if (e.isExtensionInTestingMode()) return !1;
            if (window.browser && window.browser.extension) {
                var n = BrowserHandler.runtime.getURL("");
                if (null != n && /_microsoftofficeonline_/i.test(n)) return !1
            } else if (window.chrome && window.chrome.extension) {
                var r = e.getManifest();
                if (null == r) return !1;
                if (void 0 !== r.key || void 0 !== r.update_url) return !1
            }
            return !0
        },
        isEditorEnabled: function() {
            if (!window.chrome || !window.chrome.extension) return !1;
            var n = e.getManifest();
            return n && n.background && "background/background_editor.html" === n.background.page
        },
        shouldShowEditorMaterial: function() {
            if (!window.chrome || !window.chrome.extension) return !1;
            var n = e.getManifest();
            return n && n.version_name && -1 != n.version_name.indexOf("[ed]")
        },
        getAppDescription: function() {
            if (window.chrome && window.chrome.extension) return e.getManifest().description
        },
        getManifest: function() {
            if ("object" != typeof BrowserHandler.runtime || "function" != typeof BrowserHandler.runtime.getManifest) return null;
            var e = BrowserHandler.runtime.getManifest();
            return null == e ? null : e
        },
        isBackgroundContext: function() {
            var e = window.location.href;
            return !!(window.browser && window.browser.extension && /^ms-browser-extension/.test(e) && window === BrowserHandler.extension.getBackgroundPage()) || !!(window.chrome && window.chrome.extension && /^chrome/.test(e) && window === BrowserHandler.extension.getBackgroundPage())
        },
        getCurrentTime: function() {
            return Math.round((new Date).getTime() / 1e3)
        },
        isChrome: function() {
            var n = window.navigator,
                r = n.userAgent.indexOf("OPR") > -1,
                t = n.userAgent.indexOf("Edge") > -1;
            return e.isNotUndefinedOrNull(window.chrome) && n.vendor.indexOf("Google") > -1 && !1 === r && !1 === t
        },
        getBrowserName: function() {
            return e.isChrome() ? "Chrome" : "Edge"
        },
        isRTL: function() {
            var e = BrowserHandler.i18n.getUILanguage();
            return !!(/^ar/i.test(e) || /^fa/i.test(e) || /^he/i.test(e))
        },
        setIcon: function(e) {
            BrowserHandler.browserAction.setIcon({
                path: e
            })
        },
        siteIsBlockedByManifest: function(n) {
            if (!window.chrome || !window.chrome.extension) return !1;
            var r = e.getManifest();
            if (!r || !r.content_scripts) return !1;
            var t = r.content_scripts.filter((function(e) {
                return e.matches && e.matches.find((function(e) {
                    return "<all_urls>" === e
                }))
            }));
            return 1 === t.length && t[0].exclude_matches.find((function(e) {
                return new RegExp(e.replace("*", ".*")).test(n)
            }))
        }
    };
    return e
}();