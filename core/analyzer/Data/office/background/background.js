! function() {
    "use strict";
    angular.module("app", ["localization", "app.common", "app.diagnostics", "app.user", "app.file", "app.background", "app.copypaste"]).config(["$httpProvider", "$provide", function(e, t) {
        t.decorator("$log", ["$delegate", "telemetry", Utilities.logDecorator]), e.interceptors.push("httpRequestInterceptor"), e.interceptors.push("protectedResourceInterceptor"), e.interceptors.push("httpErrorResponseInterceptor")
    }])
}();