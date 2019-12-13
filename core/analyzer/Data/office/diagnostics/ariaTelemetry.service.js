! function() {
    "use strict";
    angular.module("app.diagnostics").service("ariaTelemetry", ["$window", "constants", function(e, i) {
        var t = function(e, i) {
                if (!Utilities.isUndefinedOrNull(e) && !Utilities.isUndefinedOrNull(i)) {
                    if (!Utilities.isUndefinedOrNull(i.pii)) {
                        for (var t = 0; t <= i.pii.length - 1; ++t) e.setProperty(i.pii[t].name, i.pii[t].value, i.pii[t].type);
                        delete i.pii
                    }
                    for (var n in i) i.hasOwnProperty(n) && e.setProperty(n, i[n])
                }
            },
            n = !0;
        this.setEnabledSetting = function(e) {
            n = e
        }, this.trackEvent = function(r, a, s) {
            if (n) {
                r = r.replace(/\./g, "_");
                var o = new AWTEventProperties;
                o.setName(i.TELEMETRY.EVENT_PREFIX + r), t(o, a), t(o, s), e.ariaLogger.logEvent(o)
            }
        }, this.trackTrace = function(r, a) {
            if (n) {
                var s = new AWTEventProperties;
                s.setName(i.TELEMETRY.EVENT_PREFIX + r), s.setProperty("severity", r), t(s, a), e.ariaLogger.logEvent(s)
            }
        }
    }])
}();