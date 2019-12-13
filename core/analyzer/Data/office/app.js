! function() {
    "use strict";
    angular.module("app", ["ngAria", "ngRoute", "ngAnimate", "localization", "app.common", "app.diagnostics", "app.experimentation", "app.user", "app.mru", "app.editor", "app.popup"]).config(["$ariaProvider", "$compileProvider", "$routeProvider", "$httpProvider", "$provide", function(e, t, r, o, p) {
        r.when("/", {
            templateUrl: "./popup/popup.html",
            controller: "PopupController",
            controllerAs: "ctrl"
        }).otherwise({
            redirectTo: "/"
        }), e.config({
            tabindex: !1
        }), t.imgSrcSanitizationWhitelist(/^\s*(https?|data|chrome-extension|ms-browser-extension):/), p.decorator("$log", ["$delegate", "telemetry", Utilities.logDecorator]), o.interceptors.push("httpRequestInterceptor"), o.interceptors.push("protectedResourceInterceptor"), o.interceptors.push("httpErrorResponseInterceptor")
    }])
}();