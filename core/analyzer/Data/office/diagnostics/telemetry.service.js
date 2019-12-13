! function() {
    "use strict";
    angular.module("app.diagnostics", []).service("telemetry", ["$injector", "constants", "ariaTelemetry", function(e, t, n) {
        var i = [n],
            r = function(n) {
                var i = e.get("$q"),
                    r = e.get("userService"),
                    a = i.defer();
                Utilities.isUndefinedOrNull(n) && (n = {}), n.pii = [];
                var s = Utilities.getManifest();
                s && (n.appVersion = s.version);
                var l = BrowserHandler.i18n.getUILanguage();
                return Utilities.isNotUndefinedOrNull(l) && (n.language = l), n["AppInfo.Name"] = t.APPINFO_NAME, r.getUserType().then((function(e) {
                    var i = AWTLogManager.getSemanticContext();
                    if (e === t.USER_TYPE.NONE) return i.setUserId("", "", ""), void a.resolve(n);
                    r.getUserInfo(e, (function(e) {
                        if (Utilities.isUndefinedOrNull(e)) return i.setUserId("", "", ""), void a.resolve(n);
                        Utilities.isNotUndefinedOrNull(e.cid) && (n.cid = e.cid, i.setUserId(e.cid), n["UserInfo.IdType"] = t.IDTYPE.MSACID), Utilities.isNotUndefinedOrNull(e.features) && (n.experimentFeatures = e.features), Utilities.isNotUndefinedOrNull(e.puid) && (n.pii.push({
                            type: t.TELEMETRY.PII_TYPE.IDENTITY,
                            name: "puid",
                            value: e.puid
                        }), i.setUserId(e.puid), n["UserInfo.IdType"] = t.IDTYPE.ORGIDPUID), Utilities.isNotUndefinedOrNull(e.tid) && (n["UserInfo.OMSTenantId"] = e.tid), a.resolve(n)
                    }))
                })), a.promise
            },
            a = function() {
                var t = e.get("$q"),
                    n = e.get("storage"),
                    i = t.defer();
                return n.get(["telemetry_enabled", "enableTelemetry"]).then((function(e) {
                    i.resolve(!(!Utilities.isUndefinedOrNull(e) && !0 !== function(e, t) {
                        if (e[t]) {
                            var n = JSON.parse(e[t]);
                            if (void 0 !== n.value) return JSON.parse(n.value)
                        }
                    }(e, "enableTelemetry") && !Utilities.isUndefinedOrNull(e.telemetry_enabled) && !0 !== e.telemetry_enabled))
                })), i.promise
            };
        return {
            getEnabledSetting: function() {
                return a()
            },
            setEnabledSetting: function(n) {
                if (Utilities.isBackgroundContext()) {
                    ! function(t) {
                        e.get("storage").set({
                            telemetry_enabled: t,
                            enableTelemetry: JSON.stringify({
                                value: JSON.stringify(t),
                                lastUpdate: Date.now(),
                                manualOverride: !1
                            })
                        })
                    }(n);
                    for (var r = 0; r < i.length; ++r) i[r].setEnabledSetting(n)
                } else BrowserHandler.runtime.sendMessage({
                    activity: t.ACTIVITY.TELEMETRY.NAME,
                    command: t.TELEMETRY.COMMAND.SET_DISABLED,
                    enabled: n
                })
            },
            trackEvent: function(e, n, a) {
                !angular.isUndefined(e) && angular.isString(e) && (Utilities.isBackgroundContext() ? r(n).then((function(t) {
                    for (var n = 0; n < i.length; ++n) {
                        var r = angular.extend({}, t);
                        i[n].trackEvent(e, r, a)
                    }
                })) : BrowserHandler.runtime.sendMessage({
                    activity: t.ACTIVITY.TELEMETRY.NAME,
                    command: t.TELEMETRY.COMMAND.TRACK_EVENT,
                    eventName: e,
                    properties: n,
                    measurements: a
                }))
            },
            trackTrace: function(e, n) {
                !angular.isUndefined(e) && angular.isString(e) && (Utilities.isBackgroundContext() ? r(n).then((function(t) {
                    for (var n = 0; n < i.length; ++n) {
                        var r = angular.extend({}, t);
                        i[n].trackTrace(e, r)
                    }
                })) : BrowserHandler.runtime.sendMessage({
                    activity: t.ACTIVITY.TELEMETRY.NAME,
                    command: t.TELEMETRY.COMMAND.TRACK_TRACE,
                    message: e,
                    properties: n
                }))
            }
        }
    }])
}();