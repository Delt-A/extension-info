! function() {
    "use strict";
    angular.module("app.experimentation").factory("experimentService", ["$http", "$q", "$log", "constants", "experimentConstants", "userService", function(e, r, i, n, t, o) {
        var s, f = null,
            l = null,
            u = {};
        u[n.USER_TYPE.MSA] = "MSA", u[n.USER_TYPE.O365] = "O365";
        var E = {
            getFlight: function(e) {
                var i = r.defer();
                return c(e).then((function(r) {
                    if (!r) return i.resolve(t.EXPERIMENTS[e].CONTROL), i.promise;
                    a().then((function(r) {
                        i.resolve(r[e])
                    }))
                })), i.promise
            },
            getFlights: a,
            flightingDisabled: function(e) {
                return p(e)
            },
            experimentEnabled: c
        };
        return E;

        function a() {
            var a = r.defer();
            return Utilities.isNotUndefinedOrNull(f) ? (a.resolve(f), a.promise) : Utilities.isNotUndefinedOrNull(l) ? (r.all([l]).then((function() {
                a.resolve(f)
            })), a.promise) : (function() {
                var a = r.defer();
                l = a.promise;
                var c = function(e) {
                    return i.error(String.format("experimentService.setFlights error: {0}", e)), d(), a.resolve(), a.promise
                };
                return o.getUserType().then((function(l) {
                    return s = u[l], Utilities.isUndefinedOrNull(l) || l === n.USER_TYPE.NONE ? c(t.ERROR.BAD_USER_TYPE) : E.flightingDisabled(l) ? (d(), a.resolve(), a.promise) : void o.waitForUserInfo(l).then((function(n) {
                        if (Utilities.isNotUndefinedOrNull(n) && Utilities.isNotUndefinedOrNull(n.flights)) return f = n.flights, a.resolve(), a.promise;
                        (function(n) {
                            var o = r.defer();
                            if (Utilities.isUndefinedOrNull(n) || n === t.DEFAULT_CLIENT_ID) return i.error("experimentService.getFeatures: clientId is undefined, null, or empty"), o.reject(t.ERROR.NO_CLIENT_ID), o.promise;
                            var s = function(e) {
                                    return e.length > 100 ? e.substring(0, 100) : e
                                }(function(e) {
                                    var r, i, n = "";
                                    for (i = 0; i < e.length; i++) r = e.charCodeAt(i).toString(16), n += ("000" + r).slice(-4);
                                    return n
                                }(n)),
                                f = {
                                    method: "GET",
                                    url: t.ENDPOINT,
                                    headers: {
                                        "X-MSEDGE-CLIENTID": s
                                    }
                                };
                            return e(f).success((function(e) {
                                Utilities.isNotUndefinedOrNull(e) && Utilities.isNotUndefinedOrNull(e.Features) ? o.resolve(e.Features) : o.reject(t.ERROR.NO_FEATURES)
                            })).error((function(e) {
                                o.reject(e)
                            })), o.promise
                        })(function(e, r) {
                            if (Utilities.isUndefinedOrNull(r)) return t.DEFAULT_CLIENT_ID;
                            if (Utilities.isNotUndefinedOrNull(r.cid)) return r.cid;
                            return t.DEFAULT_CLIENT_ID
                        }(0, n)).then((function(e) {
                            ! function(e) {
                                for (var r in f = {}, t.EXPERIMENTS) t.EXPERIMENTS.hasOwnProperty(r) && N(e, r);
                                ! function(e) {
                                    for (var r = [], n = 0; n < e.length; ++n) {
                                        var t = e[n];
                                        v(t) && r.push(t)
                                    }
                                    r.length > 0 && i.error(String.format("ExP service returned invalid features: {0}", JSON.stringify(r)))
                                }(e)
                            }(e), n.flights = f, n.features = e, o.saveUserInfo(l, n), a.resolve()
                        }), c)
                    }), c)
                }), c), a.promise
            }().then((function() {
                a.resolve(f)
            })), a.promise)
        }

        function c(e) {
            var n = r.defer();
            return o.getUserType().then((function(r) {
                if (E.flightingDisabled(r)) return n.resolve(!1), n.promise;
                n.resolve(!p(r, e))
            }), (function(e) {
                return i.error(String.format("experimentService.experimentEnabled error: {0}", e)), n.resolve(!1), n.promise
            })), n.promise
        }

        function N(e, r) {
            var i = t.EXPERIMENTS[r];
            if (f[r] = i.CONTROL, i.ENABLED[s])
                for (var n in i.FLIGHTS)
                    if (i.FLIGHTS.hasOwnProperty(n) && e.indexOf(n) > -1) {
                        f[r] = i.FLIGHTS[n];
                        break
                    }
        }

        function d() {
            for (var e in f = {}, t.EXPERIMENTS)
                if (t.EXPERIMENTS.hasOwnProperty(e)) {
                    var r = t.EXPERIMENTS[e];
                    f[e] = r.CONTROL
                }
        }

        function v(e) {
            for (var r in t.EXPERIMENTS) {
                if (t.EXPERIMENTS.hasOwnProperty(r))
                    if (t.EXPERIMENTS[r].FLIGHTS.hasOwnProperty(e)) return !1
            }
            return !0
        }

        function p(e, r) {
            if (e === n.USER_TYPE.NONE) return !0;
            var o = t.EXPERIMENTS.hasOwnProperty(r) ? t.EXPERIMENTS[r].ENABLED : t.ENABLED,
                s = r || "all experiments",
                f = Utilities.getBrowserName().toLowerCase(),
                l = o.BROWSERS.toString().toLowerCase();
            if (l.indexOf(f) < 0) return i.info(String.format("experimentService: experiment {0} is disabled for browser {1}. Experiment is only enabled for browsers {2}", s, f, l)), !0;
            var E = o[u[e]];
            return E || i.info(String.format("experimentService: experiment {0} is disabled for userType {1}", s, e)), !E
        }
    }])
}();