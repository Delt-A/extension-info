! function() {
    "use strict";
    angular.module("app.editor", []).controller("EditorController", ["$scope", "$log", "constants", "storage", "userService", "localize", "editorUtils", function(e, t, i, r, o, n, a) {
        var l = this,
            d = "enableSpelling",
            s = "enableGrammar",
            c = "enableRefinements",
            u = "userExcludedUrls",
            E = "disabledWebSites";

        function S(e) {
            l.currentTabUrl = e.url, l.currentHostName = e.hostname, l.editorDisableShow = !1, l.editorEnableShow = !1, l.editorSiteBlockedShow = !1, l.currentHostName && (l.editorSiteBlockedShow = a.siteIsBlocked(l.currentTabUrl), l.editorIsBlockedLabel = a.getFormattedLocalizedString("EditorIsBlockedOnThisSiteLabel", l.currentHostName), l.editorSiteBlockedShow || l.storage.get([u, E]).then((function(e) {
                var t = l.currentHostName;
                l.userExcludedUrls = a.readSettingValueOrUndefined(e, u), l.disabledWebSites = a.readSettingValueOrUndefined(e, E), l.editorDisableLabel = a.getFormattedLocalizedString("DisableEditorOnThisSiteLabel", t), l.editorEnableLabel = a.getFormattedLocalizedString("EnableEditorOnThisSiteLabel", t), l.editorIsDisabledLabel = a.getFormattedLocalizedString("EditorIsDisabledOnThisSiteLabel", t);
                var i = a.isHostNameExcluded(l.currentTabUrl, t, l.userExcludedUrls, l.disabledWebSites);
                l.editorDisableShow = !i, l.editorEnableShow = i
            })))
        }

        function g() {
            t.trackEvent("EditorSpellingChange"), a.writeEditorSettingValue(d, l.editorSpelling)
        }

        function b() {
            t.trackEvent("EditorGrammarChange"), a.writeEditorSettingValue(s, l.editorGrammar)
        }

        function m() {
            t.trackEvent("EditorRefinementsChange"), a.writeEditorSettingValue(c, l.editorRefinements)
        }

        function h() {
            t.trackEvent("EditorSettingsClick"), a.openOptionsPage()
        }

        function f() {
            t.trackEvent("onEditorDisableClick");
            var e = a.getHostnameOnlyUrl(l.currentTabUrl);
            e && (l.userExcludedUrls.push(e), a.writeEditorSettingValue(u, l.userExcludedUrls), l.editorDisableShow = !1, l.editorEnableShow = !0)
        }

        function U() {
            t.trackEvent("onEditorEnableClick"), l.userExcludedUrls = l.userExcludedUrls.filter((function(e) {
                return a.getUrlInfo(e).hostname !== l.currentHostName
            })), a.writeEditorSettingValue(u, l.userExcludedUrls), l.editorDisableShow = !0, l.editorEnableShow = !1
        }

        function k() {
            t.trackEvent("onEditorGoPremiumClick"), Utilities.navigateToUrlWithNewTab(l.constants.LINKS.EDITOR_GO_PREMIUM_URL, !0)
        }
        l.onLoad = function() {
            t.debug("Loading EditorController"), l.storage.get([d, s, c]).then((function(e) {
                var t = a.readSettingValueOrUndefined(e, d);
                void 0 !== t && (l.editorSpelling = t);
                var i = a.readSettingValueOrUndefined(e, s);
                void 0 !== i && (l.editorGrammar = i);
                var r = a.readSettingValueOrUndefined(e, c);
                void 0 !== r && (l.editorRefinements = r)
            })), a.getCurrentTabHostName().then(S)
        }, l.constants = i, l.storage = r, l.userService = o, l.localize = n, l.editorDisableShow = !1, l.editorEnableShow = !1, l.editorShowUpsell = !1, l.editorSiteBlockedShow = !1, l.editorSpelling = !0, l.editorGrammar = !0, l.editorRefinements = !0, l.onEditorSettingsClick = h, l.onEditorDisableClick = f, l.onEditorEnableClick = U, l.onEditorGoPremiumClick = k, l.onEditorSpellingChange = g, l.onEditorGrammarChange = b, l.onEditorRefinementsChange = m
    }])
}();