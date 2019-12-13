! function() {
    "use strict";
    angular.module("app.background", []).controller("BackgroundController", ["$window", "$http", "$q", "$log", "constants", "notification", "storage", "userService", "fileService", "copyPasteService", function(e, t, i, r, n, s, o, a, l, d) {
        var c, u, f;

        function S(e) {
            var t = new Date;
            u ? O(e, !1, t) : o.get("LastSession").then((function(i) {
                u = i && i.LastSession && i.LastSession.duration && i.LastSession.startTime && !Number.isNaN(Date.parse(i.LastSession.startTime)) ? i.LastSession : {
                    startTime: new Date(t),
                    duration: 0
                }, O(e, !0, t)
            }))
        }

        function O(e, t, i) {
            u.hasOwnProperty("start_time") && (u.startTime = u.start_time, delete u.start_time);
            var n = new Date(u.startTime),
                s = new Date(i);
            (e || s.setHours(0, 0, 0, 0) !== n.setHours(0, 0, 0, 0)) && (r.trackEvent("Session", u), u.duration = 0), t && (u.startTime = new Date(i)), u.duration += Date.parse(i) - Date.parse(u.startTime), u.startTime = i.toString(), o.set({
                LastSession: u
            })
        }
        o.get("refreshToken").then((function(e) {
            Utilities.isNotUndefinedOrNull(e.refreshToken) ? Utilities.setIcon(n.BROWSER_ICON.DEFAULT) : Utilities.setIcon(n.BROWSER_ICON.INACTIVE)
        })), o.get("webRedirect_disabled").then((function(e) {
            c = Utilities.isNotUndefinedOrNull(e.webRedirect_disabled) && e.webRedirect_disabled
        })), BrowserHandler.windows.onFocusChanged.addListener((function(e) {
            S()
        })), BrowserHandler.storage.onChanged.addListener((function(e, t) {
            if (Utilities.isNotUndefinedOrNull(e.webRedirect_disabled)) c = e.webRedirect_disabled.newValue;
            else if (Utilities.isNotUndefinedOrNull(e.refreshToken)) {
                var i = e.refreshToken.newValue;
                Utilities.isNotUndefinedOrNull(i) ? Utilities.setIcon(n.BROWSER_ICON.DEFAULT) : Utilities.setIcon(n.BROWSER_ICON.INACTIVE)
            }
        })), BrowserHandler.webRequest.onSendHeaders.addListener((function(e) {
            if ("main_frame" === e.type)
                for (var t = 0; t < e.requestHeaders.length; ++t)
                    if ("Referer" === e.requestHeaders[t].name) return void(f = e.requestHeaders[t].value.indexOf("officeapps.live.com") >= 0 ? null : e.tabId)
        }), {
            urls: ["*://*/*.doc", "*://*/*.doct", "*://*/*.docx", "*://*/*.dotx", "*://*/*.odt", "*://*/*.ppt", "*://*/*.pot", "*://*/*.pps", "*://*/*.pptx", "*://*/*.ppsx", "*://*/*.odp", "*://*/*.xls", "*://*/*.xlsx", "*://*/*.xlsm", "*://*/*.xlsb", "*://*/*.ods"]
        }, ["requestHeaders"]), BrowserHandler.webRequest.onHeadersReceived.addListener((function(e) {
            if (!c && "main_frame" === e.type && !(Utilities.isUndefinedOrNull(e.responseHeaders) || Utilities.isUndefinedOrNull(f) || Utilities.isUndefinedOrNull(e.tabId) || f !== e.tabId)) {
                for (var t = {}, i = 0; i < e.responseHeaders.length; ++i) t[e.responseHeaders[i].name] = e.responseHeaders[i].value;
                if (!N(t, "Cache-Control") && !N(t, "Pragma")) return t["Content-Type"] ? n.FILE.OFFICE_MIME_TYPES[t["Content-Type"].toLowerCase()] ? (r.trackEvent("OpenDocument_BrowserWebDocument"), o.get("displayWebDocRedirectNotification").then((function(e) {
                    (Utilities.isUndefinedOrNull(e.displayWebDocRedirectNotification) || !0 === e.displayWebDocRedirectNotification) && s.show(n.NOTIFICATION.WEBDOCREDIRECT)
                })), {
                    redirectUrl: "https://view.officeapps.live.com/op/view.aspx?src=" + e.url
                }) : void r.warn(String.format("onHeadersReceived called with Content-Type {0}", t["Content-Type"])) : void 0
            }
        }), {
            urls: ["*://*/*.doc", "*://*/*.doct", "*://*/*.docx", "*://*/*.dotx", "*://*/*.odt", "*://*/*.ppt", "*://*/*.pot", "*://*/*.pps", "*://*/*.pptx", "*://*/*.ppsx", "*://*/*.odp", "*://*/*.xls", "*://*/*.xlsx", "*://*/*.xlsm", "*://*/*.xlsb", "*://*/*.ods"]
        }, ["responseHeaders", "blocking"]), BrowserHandler.webRequest.onBeforeRequest.addListener((function(e) {
            if ("main_frame" === e.type) {
                r.trackEvent("OpenDocument_BrowserDragAndDrop");
                var t = e.tabId;
                return l.upload(e.url, n.FILE.ORIGIN.LOCAL_PATH, (function(e) {
                    Utilities.isUndefinedOrNull(e) || p(e, t)
                })), {
                    redirectUrl: n.LINKS.PROGRESSPAGE_URL
                }
            }
        }), {
            urls: ["file:///*.doc", "file:///*.doct", "file:///*.docx", "file:///*.dotx", "file:///*.odt", "file:///*.ppt", "file:///*.pot", "file:///*.pps", "file:///*.pptx", "file:///*.ppsx", "file:///*.odp", "file:///*.xlsx", "file:///*.xlsm", "file:///*.xlsb", "file:///*.ods"]
        }, ["blocking"]), BrowserHandler.webRequest.onErrorOccurred.addListener((function(e) {
            r.error(String.format("BackgroundWebRequestOnErrorOccured - {0}", e.error))
        }), {
            urls: ["file:///*.doc", "file:///*.doct", "file:///*.docx", "file:///*.dotx", "file:///*.odt", "file:///*.ppt", "file:///*.pot", "file:///*.pps", "file:///*.pptx", "file:///*.ppsx", "file:///*.odp", "file:///*.xlsx", "file:///*.xlsm", "file:///*.xlsb", "file:///*.ods"]
        }), BrowserHandler.runtime.onInstalled.addListener((function(e) {
            var t = Utilities.getManifest(),
                i = t ? t.version : -1;
            "install" === e.reason ? (r.trackEvent(String.format("AppInstalled_{0}", i)), s.show(n.NOTIFICATION.FILEACCESS), p(Utilities.shouldShowEditorMaterial() ? n.LINKS.SUPPORT_URL_EDITOR : n.LINKS.SUPPORT_URL, null), BrowserHandler.runtime.getPlatformInfo((function(e) {
                "cros" === e.os && s.show(n.NOTIFICATION.SETDEFAULT)
            }))) : "update" === e.reason && (r.trackEvent(String.format("AppUpdated_{0}", i), {
                previousVersion: e.previousVersion
            }), Utilities.isNotUndefinedOrNull(window.localStorage.getItem(n.OAUTH.SERVICE_ID)) && (o.clear(), window.localStorage.clear()), o.get("userInfo").then((function(e) {
                Utilities.isNotUndefinedOrNull(e) && Utilities.isNotUndefinedOrNull(e.userInfo) && (Utilities.isNotUndefinedOrNull(e.userInfo.id) || Utilities.isNotUndefinedOrNull(e.userInfo.profile)) && (o.clear(), window.localStorage.clear())
            })))
        })), BrowserHandler.notifications.onButtonClicked.addListener((function(e) {
            switch (e) {
                case n.NOTIFICATION.AUTOSAVE.id:
                    o.set({
                        displayAutoSaveNotification: !1
                    });
                    break;
                case n.NOTIFICATION.WEBDOCREDIRECT.id:
                    o.set({
                        displayWebDocRedirectNotification: !1
                    })
            }
        })), BrowserHandler.notifications.onClicked.addListener((function(e) {
            switch (e) {
                case n.NOTIFICATION.FILEACCESS.id:
                    BrowserHandler.tabs.create({
                        url: n.LINKS.SETTINGS_URL
                    });
                    break;
                case n.NOTIFICATION.INVALIDSUBSCRIPTION.id:
                    BrowserHandler.tabs.create({
                        url: n.LINKS.OFFICE_URL
                    })
            }
        })), BrowserHandler.runtime.onMessage.addListener((function(e, t, i) {
            switch (r.debug(String.format("BackgroundController.onMessage: Processing request activity {0}", e.activity)), e.activity) {
                case n.ACTIVITY.SSO.NAME:
                    try {
                        e.body.sender = t.url, BrowserHandler.runtime.sendNativeMessage(n.SSO.MESSAGE_CHANNEL, e.body, (function(e) {
                            Utilities.isNotUndefinedOrNull(e) ? e.status && e.status === n.SSO.RESPONSE_STATUS_FAIL && e.code ? (r.trackEvent("SSO_FAIL", {
                                status: n.SSO.RESPONSE_STATUS_FAIL,
                                code: e.code,
                                description: BrowserHandler.runtime.lastError.message
                            }), i(e)) : (r.trackEvent("SSO_SUCCESS"), i({
                                status: n.SSO.RESPONSE_STATUS_SUCCESS,
                                result: e
                            })) : (r.trackEvent("SSO_FAIL", {
                                status: n.SSO.RESPONSE_STATUS_FAIL,
                                code: n.SSO.RESPONSE_CODE_NO_SUPPORT,
                                description: BrowserHandler.runtime.lastError.message
                            }), i({
                                status: n.SSO.RESPONSE_STATUS_FAIL,
                                code: n.SSO.RESPONSE_CODE_NO_SUPPORT,
                                description: BrowserHandler.runtime.lastError.message
                            }))
                        }))
                    } catch (e) {
                        r.trackEvent("SSO_FAIL", {
                            status: n.SSO.RESPONSE_STATUS_FAIL,
                            code: n.SSO.RESPONSE_CODE_NO_SUPPORT,
                            description: e.toString()
                        }), i({
                            status: n.SSO.RESPONSE_STATUS_FAIL,
                            code: n.SSO.RESPONSE_CODE_NO_SUPPORT,
                            description: e.toString()
                        })
                    }
                    return !0;
                case n.ACTIVITY.TELEMETRY.NAME:
                    switch (e.command) {
                        case n.TELEMETRY.COMMAND.SET_DISABLED:
                            r.setEnabledSetting(e.enabled), I(e.enabled);
                            break;
                        case n.TELEMETRY.COMMAND.TRACK_EVENT:
                            r.trackEvent(e.eventName, e.properties, e.measurements);
                            break;
                        case n.TELEMETRY.COMMAND.TRACK_TRACE:
                            r.trackTrace(e.message, e.properties)
                    }
                    break;
                case n.ACTIVITY.NOTIFICATION.NAME:
                    s.show(e.notification);
                    break;
                case n.ACTIVITY.AUTHENTICATION.NAME:
                    a.login(e.type);
                    break;
                case n.ACTIVITY.AUTHORIZATION.NAME:
                    BrowserHandler.tabs.query({
                        active: !0,
                        lastFocusedWindow: !0
                    }, (function(t) {
                        if (Utilities.isUndefinedOrNull(t) || Utilities.isUndefinedOrNull(t[0])) r.error(String.format("BackgroundController.onMessage: Error processing request activity {0}; active tab undefined or null", e.activity));
                        else {
                            var i = t[0];
                            o.get("loginTabId").then((function(t) {
                                if (Utilities.isUndefinedOrNull(t.loginTabId) || t.loginTabId !== i.id) r.error(String.format("BackgroundController.onMessage: Processing request activity {0}; loginTabId undefined or null or different from storage", e.activity));
                                else {
                                    o.remove("loginTabId"), BrowserHandler.tabs.remove(i.id);
                                    var s = Utilities.deserializeQuery(e.query);
                                    s.hasOwnProperty(n.OAUTH.CODE) && a.authenticate(e.type, s.code)
                                }
                            }))
                        }
                    }))
            }
        })), Utilities.isChrome() && (BrowserHandler.runtime.onMessageExternal.addListener((function(e, t, i) {
            switch (e.command) {
                case n.COPY_PASTE.TEST:
                    return d.handleTestCommand(e, t, i);
                case n.COPY_PASTE.COPY:
                    return d.handleCopyCommand(e, t, i);
                case n.COPY_PASTE.PASTE:
                    return d.handlePasteCommand(e, t, i);
                default:
                    return !1
            }
        })), e.addEventListener("paste", d.onPasteEvent));
        BrowserHandler.tabs.onReplaced.addListener((function(e, t) {
            o.set({
                loginTabId: e
            })
        })), Utilities.isChrome() && BrowserHandler.permissions.contains({
            permissions: ["identity", "identity.email"],
            origins: []
        }, (function(e) {
            e && BrowserHandler.runtime.getPlatformInfo((function(e) {
                e && "cros" === e.os && BrowserHandler.tabs.onUpdated.addListener((function(e, i, r) {
                    var s;
                    !i.url || -1 == (s = i.url).search(/^https:\/\/login\.microsoftonline\.com\/(common|.{8}-.{4}-.{4}-.{4}-.{12})\/oauth2\/authorize/) && -1 === s.indexOf("https://login.live.com/login.srf") || -1 !== i.url.indexOf("login_hint") || -1 !== i.url.indexOf("username") || BrowserHandler.identity.getProfileUserInfo((function(r) {
                        if (r && r.email) {
                            var s = r.email,
                                o = {
                                    method: "GET",
                                    url: n.O365CONFIG.FEDERATED_URL + "?login=" + s
                                };
                            t(o).success((function(t) {
                                if (t && "Federated" === t.NameSpaceType && "live.com" !== t.DomainName) {
                                    var r = -1 === i.url.indexOf("https://login.live.com/login.srf") ? "login_hint" : "username",
                                        n = i.url; - 1 !== n.indexOf("?") ? n += "&" + r + "=" + s : n += "?" + r + "=" + s, BrowserHandler.tabs.update(e, {
                                        url: n
                                    })
                                }
                            })).error((function() {}))
                        }
                    }))
                }))
            }))
        }));

        function E(e, t) {
            Utilities.isUndefinedOrNull(e) ? t(null) : l.upload(e, n.FILE.ORIGIN.HTML5, (function(e) {
                t(e)
            }))
        }

        function p(e, t) {
            var s = i.defer();
            s.resolve(Utilities.isNotUndefinedOrNull(t) ? t : function(e) {
                Utilities.isUndefinedOrNull(e) && (e = n.LINKS.PROGRESSPAGE_URL);
                var t = i.defer();
                return BrowserHandler.windows.getAll((function(i) {
                    0 === i.length ? BrowserHandler.windows.create({
                        url: e,
                        type: "normal"
                    }, (function(e) {
                        t.resolve(e.tabs[0].id)
                    })) : BrowserHandler.tabs.create({
                        url: e
                    }, (function(e) {
                        t.resolve(e.id)
                    }))
                })), t.promise
            }(e)), s.promise.then((function(t) {
                Utilities.isUndefinedOrNull(t) ? r.warn(String.format("BackgroundController.openFileUrlInTab(): tabIdPromise null or undefined")) : BrowserHandler.tabs.update(t, {
                    url: e
                })
            }))
        }

        function N(e, t) {
            return e[t] && -1 !== e[t].toLowerCase().indexOf("private")
        }

        function I(e) {
            if (Utilities.isNotUndefinedOrNull(e) || (e = !0), Utilities.isNotUndefinedOrNull(BrowserHandler.runtime.setUninstallURL)) {
                var t = Utilities.getManifest(),
                    i = t ? t.version : -1,
                    r = Utilities.isExtensionInDevelopmentMode() ? n.LINKS.OFFICE_HOME_DEV_URL : n.LINKS.OFFICE_HOME_URL;
                e && (r = n.LINKS.UNINSTALL + "?version=" + i, r = Utilities.isExtensionInDevelopmentMode() ? r + "&isDebug=true" : r, r = Utilities.shouldShowEditorMaterial() ? r + "&shouldShowEditorMaterial=true" : r), BrowserHandler.runtime.setUninstallURL(r)
            }
        }
        BrowserHandler.runtime.getPlatformInfo((function(e) {
            "cros" === e.os && BrowserHandler.fileBrowserHandler.onExecute.addListener((function(e, t) {
                ! function(e, t) {
                    if (Utilities.isUndefinedOrNull(e)) t(null);
                    else
                        for (var i = 0; i < e.length; ++i) e[i].file((function(e) {
                            E(e, (function(e) {
                                t(e)
                            }))
                        }))
                }(t.entries, (function(e) {
                    Utilities.isUndefinedOrNull(e) || p(e, null)
                }))
            }))
        })), window.addEventListener("message", (function(e) {
            0 === BrowserHandler.runtime.getURL("").search(new RegExp(e.origin, "i")) ? "[object File]" === Object.prototype.toString.call(e.data) ? E(e.data, (function(e) {
                Utilities.isUndefinedOrNull(e) || p(e, null)
            })) : r.error(String.format("BackgroundController.receiveMessage: Error processing message with event.data type {0}", Object.prototype.toString.call(e.data))) : r.error(String.format("BackgroundController.receiveMessage: Error processing message with unrecognized origin {0}", e.origin))
        }), !1), S(), r.getEnabledSetting().then((function(e) {
            I(e)
        }))
    }])
}();