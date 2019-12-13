var Utilities = function(t) {
    "use strict";

    function e(t) {
        return t.length > 8e3 ? t.substring(0, 8e3) : t
    }
    return t.logDecorator = function(t, r) {
        function n(t, e) {
            try {
                r.trackTrace(t, e)
            } catch (t) {}
        }
        var i = function(t, r) {
            return function() {
                var i = [].slice.call(arguments),
                    a = e(JSON.stringify(i[0]));
                "ERROR" === r && Utilities.isNotUndefinedOrNull(i[0].message) && (a = e(JSON.stringify(i[0].message)));
                var s = "";
                "ERROR" === r && Utilities.isNotUndefinedOrNull(i[0].stack) && (s = e(i[0].stack));
                var c = {
                    message: a,
                    stack: s
                };
                i[0] = String.format("[{0}] {1}: {2}", (new Date).toUTCString(), r, c.message), Utilities.isExtensionInDevelopmentMode() && t.apply(null, i), "DEBUG" !== r && n(r, c)
            }
        };
        return t.debug = i(t.debug, "DEBUG"), t.info = i(t.info, "INFO"), t.warn = i(t.warn, "WARN"), t.error = i(t.error, "ERROR"), t.getEnabledSetting = function() {
            return r.getEnabledSetting()
        }, t.setEnabledSetting = function(e) {
            try {
                r.setEnabledSetting(e)
            } catch (e) {
                t.error(String.format("setEnabledSetting error: {0}", e))
            }
        }, t.trackEvent = function(e, n, i) {
            try {
                r.trackEvent(e, n, i)
            } catch (r) {
                t.error(String.format("trackEvent error with eventName {0}: {1}", e, r))
            }
        }, t.trackTrace = n, t
    }, t
}(Utilities || {});