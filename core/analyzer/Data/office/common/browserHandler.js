var BrowserHandler = function() {
    "use strict";
    var e = null;
    return "object" == typeof browser ? ((e = Object.create(browser)).notifications = {
        clear: function(e, t) {
            t(!1)
        },
        create: function(e, t, r) {
            null != t && void 0 !== t.priority && null !== t.priority && t.priority > 0 && window.alert(t.message), r(e)
        },
        onButtonClicked: {
            addListener: function(e) {}
        },
        onClicked: {
            addListener: function(e) {}
        }
    }, e.runtime.getPlatformInfo = function(e) {}) : "object" == typeof chrome && (e = Object.create(chrome)), e
}();