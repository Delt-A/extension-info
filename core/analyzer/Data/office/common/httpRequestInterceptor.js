! function() {
    "use strict";
    angular.module("app.common").factory("httpRequestInterceptor", ["constants", function(t) {
        return {
            request: function(e) {
                return Utilities.isUndefinedOrNull(e.timeout) && (e.timeout = t.TIMEOUT.DEFAULT_REQUEST), e
            }
        }
    }])
}();