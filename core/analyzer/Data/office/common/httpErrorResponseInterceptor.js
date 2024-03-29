! function() {
    "use strict";
    angular.module("app.common").factory("httpErrorResponseInterceptor", ["$q", "$log", "$timeout", "$injector", "constants", function(t, r, e, o, n) {
        var i = 0;
        return {
            responseError: function(s) {
                if (s) switch (s.status) {
                    case 0:
                        r.debug(String.format("httpErrorResponseInterceptor - Request cancelled - {0}", s.config.url));
                        break;
                    case 401:
                        r.info(String.format("httpErrorResponseInterceptor - {0} - {1} - {2}", s.status, s.config.url, JSON.stringify(s.data)));
                        break;
                    case 400:
                        if (Utilities.isNotUndefinedOrNull(s.data) && Utilities.isNotUndefinedOrNull(s.data.error_codes) && 50001 === s.data.error_codes[0]) {
                            r.info(String.format("httpErrorResponseInterceptor -  Invalid AADSerivce - {0} - {1}", s.status, JSON.stringify(s.data)));
                            break
                        }
                        if (Utilities.isNotUndefinedOrNull(s.data) && Utilities.isNotUndefinedOrNull(s.data.error_codes) && 50079 === s.data.error_codes[0]) {
                            if (r.info(String.format("httpErrorResponseInterceptor -  Interaction required - {0} - {1}", s.status, JSON.stringify(s.data))), i < n.ERROR_RETRIES.HTTP_REQUEST) return i++, e((function() {
                                return o.get("$http")(s.config)
                            }), n.TIMEOUT.USER_INFO_LOOKUP);
                            i = 0
                        }
                        r.error(String.format("httpErrorResponseInterceptor - {0} - {1} - {2}", s.status, s.config.url, JSON.stringify(s.data)));
                        break;
                    default:
                        r.error(String.format("httpErrorResponseInterceptor - {0} - {1} - {2}", s.status, s.config.url, JSON.stringify(s.data)))
                }
                return t.reject(s)
            }
        }
    }])
}();