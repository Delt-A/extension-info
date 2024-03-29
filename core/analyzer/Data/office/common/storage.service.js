! function() {
    "use strict";
    angular.module("app.common").factory("storage", ["$q", "$log", function(r, e) {
        return {
            get: function(t) {
                var o = r.defer();
                return BrowserHandler.storage.local.get(t, (function(r) {
                    e.debug(String.format("storage: get '{0}', result '{1}'", JSON.stringify(t), JSON.stringify(r))), o.resolve(r)
                })), o.promise
            },
            set: function(r) {
                e.debug(String.format("storage: set items '{0}'", JSON.stringify(r))), BrowserHandler.storage.local.set(r)
            },
            remove: function(t) {
                var o = r.defer();
                return BrowserHandler.storage.local.remove(t, (function(r) {
                    e.debug(String.format("storage: remove '{0}', result '{1}'", JSON.stringify(t), JSON.stringify(r))), o.resolve(r)
                })), o.promise
            },
            clear: function() {
                var t = r.defer();
                return BrowserHandler.storage.local.clear((function(r) {
                    e.debug(String.format("storage: clear result '{0}'", JSON.stringify(r))), t.resolve(r)
                })), t.promise
            }
        }
    }])
}();