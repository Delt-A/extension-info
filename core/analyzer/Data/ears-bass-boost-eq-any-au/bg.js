(function() {
    var e = this,
        t = function(t, n) {
            var r = t.split("."),
                a = window || e;
            r[0] in a || !a.execScript || a.execScript("var " + r[0]);
            for (var o; r.length && (o = r.shift());) r.length || void 0 === n ? a = a[o] ? a[o] : a[o] = {} : a[o] = n
        };
    var n = function(e) {
        var t = chrome.runtime.connect("nmmhkkegccagdldgiimedpiccmgmieda", {}),
            n = !1;
        t.onMessage.addListener(function(t) {
            n = !0;
            "response" in t && !("errorType" in t.response) ? e.success && e.success(t) : e.failure && e.failure(t)
        });
        t.onDisconnect.addListener(function() {
            !n && e.failure && e.failure({
                request: {},
                response: {
                    errorType: "INTERNAL_SERVER_ERROR"
                }
            })
        });
        t.postMessage(e)
    };
    t("google.payments.inapp.buy", function(e) {
        e.method = "buy";
        n(e)
    });
    t("google.payments.inapp.consumePurchase", function(e) {
        e.method = "consumePurchase";
        n(e)
    });
    t("google.payments.inapp.getPurchases", function(e) {
        e.method = "getPurchases";
        n(e)
    });
    t("google.payments.inapp.getSkuDetails", function(e) {
        e.method = "getSkuDetails";
        n(e)
    })
})();
var _gaq = _gaq || [];

function scope() {
    var e = chrome.runtime.getManifest().version;
    var t = "11/22/2017";
    _gaq.push(["_setAccount", "UA-64913318-2"]);
    _gaq.push(["_trackPageview"]);
    _gaq.push(["_trackEvent", "backgroundOpen", e]);
    var n = "VERSION";
    var r = "PRESETS";
    var a = "PRESETS.";
    var o = {
        get: function(e, t) {
            t({})
        },
        set: function(e, t) {
            t()
        },
        remove: function(e, t) {
            t()
        }
    };
    var s = null;
    var i = "ears_pro";
    var c = "ACTIVE";
    var l = {
        parameters: {
            env: "prod"
        },
        sku: i,
        success: g,
        failure: p
    };
    var u = {
        parameters: {
            env: "prod"
        },
        success: v,
        failure: d
    };

    function g(e) {
        google.payments.inapp.getPurchases(u);
        _gaq.push(["_trackEvent", "p", "s"])
    }

    function p(e) {
        console.log("purchase failed: " + e);
        _gaq.push(["_trackEvent", "p", "f"])
    }

    function v(e) {
        if (e.hasOwnProperty("response") && e.response.hasOwnProperty("details")) {
            for (var t = 0; t < e.response.details.length; t++) {
                var n = e.response.details[t];
                if (n.sku == i) {
                    if (n.state == c) {
                        _gaq.push(["_trackEvent", "l", "s"]);
                        o = chrome.storage.sync;
                        localStorage[" "] = " ";
                        s = null
                    } else {
                        _gaq.push(["_trackEvent", "l", "f"]);
                        localStorage[" "] = "active";
                        s = null;
                        o = {
                            get: function(e, t) {
                                t({})
                            },
                            set: function(e, t) {
                                t()
                            },
                            remove: function(e, t) {
                                t()
                            }
                        }
                    }
                    if (x) {
                        x({
                            type: "sendFullRefresh"
                        })
                    }
                }
            }
        }
    }

    function d(e) {
        if (localStorage[" "] == " ") {
            o = chrome.storage.sync;
            s = null
        }
    }

    function h(e) {
        console.log(e)
    }

    function m(e) {
        console.log("error: " + JSON.stringify(e))
    }
    google.payments.inapp.getPurchases(u);
    var y = false;

    function S(e) {
        if (y) {
            console.log(e)
        }
    }(function() {
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.async = true;
        e.src = "https://ssl.google-analytics.com/ga.js";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
    })();
    var q = null;
    var _ = null;
    var k = null;
    var E = null;
    var b = null;
    var O = [];
    var w = [20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10240, 20480];
    var N = [.7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071];
    var T = 11;
    var R = function() {};
    var P = {};
    var I = false;
    var x;

    function A(e) {
        return a + e
    }

    function C(e) {
        if (!localStorage[r]) {
            localStorage[r] = JSON.stringify({})
        }
        var t = JSON.parse(localStorage[r]);
        if (t == null || typeof t != "object") {
            t = {}
        }
        o.get(null, function(n) {
            if (chrome.runtime.lastError) {
                console.log(chrome.runtime.lastError)
            }
            for (var r in n) {
                if (r.startsWith(a)) {
                    t[r.slice(a.length)] = n[r]
                }
            }
            e(t)
        })
    }

    function F(e, t, n) {
        var a = JSON.parse(localStorage[r]);
        if (a == null || typeof a != "object") {
            a = {}
        }
        var i = Object.keys(a).length;
        a[e] = t;
        var c = Object.keys(a).length;
        if (s && Object.keys(a) > s && c >= i) {
            n();
            return
        }
        localStorage[r] = JSON.stringify(a);
        syncPresets = {};
        syncPresets[A(e)] = t;
        o.set(syncPresets, function() {
            if (chrome.runtime.lastError) {
                console.log(chrome.runtime.lastError)
            }
            n()
        })
    }

    function j(e, t) {
        _gaq.push(["_trackEvent", "deletePreset", e.preset]);
        var n = JSON.parse(localStorage[r]);
        if (n == null || typeof n != "object") {
            n = {}
        }
        delete n[e.preset];
        localStorage[r] = JSON.stringify(n);
        o.remove(A(e.preset), t)
    }
    chrome.storage.onChanged.addListener(function(e, t) {});

    function D() {
        if (I) {
            q.close();
            q = null;
            I = false;
            chrome.runtime.onMessage.removeListener(x);
            var e = Object.keys(P);
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                P[n].stream.getTracks()[0].stop();
                delete P[n]
            }
        }
    }

    function J() {
        return new AudioContext({
            latencyHint: "playback"
        })
    }

    function M() {
        if (I) {
            q.close();
            q = null;
            I = false;
            E = null;
            b = null;
            var e = Object.values(P);
            P = {};
            for (var t = 0; t < e.length; t++) {
                var n = e[t].audioSource;
                n.disconnect(_)
            }
            L(e)
        }
    }

    function L(t) {
        var r = null;
        if (I) {
            return
        }
        I = true;
        q = J();
        q.suspend();
        console.log("starting sampleRate: " + q.sampleRate);
        var a = false;
        R = function() {
            if (a) {
                return
            }
            var e = J();
            var t = q.sampleRate && e.sampleRate && q.sampleRate != e.sampleRate;
            if (t) {
                console.log(e);
                console.log(q);
                a = true
            }
            e.close();
            if (t) {
                console.log("sampleRate changed... reloading AudioContext");
                M()
            }
        };
        _ = q.createGain();
        _.gain.value = 1;
        k = q.createGain();
        k.gain.value = L();
        if (r) {
            var o = q.createScriptProcessor(r);
            o.onaudioprocess = function(e) {
                var t = e.inputBuffer;
                var n = e.outputBuffer;
                for (var r = 0; r < n.numberOfChannels; r++) {
                    n.copyToChannel(t.getChannelData(r), r)
                }
            };
            k.connect(o);
            o.connect(q.destination)
        } else {
            k.connect(q.destination)
        }
        if (!localStorage[n]) {
            localStorage[n] = "0.0.0"
        }
        if (localStorage[" "] == " ") {
            if (localStorage["sync"] != " ") {
                C(function(e) {
                    var t = Object.keys(e);
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        F(r, e[r], function() {})
                    }
                });
                localStorage["sync"] = " "
            }
        }
        localStorage[n] = e;
        O = [];
        var i = {};

        function c() {
            var e = k;
            var t = false;
            for (var n = O.length - 1; n >= 0; n--) {
                if (O[n].gain.value != 0) {
                    if (!i[n]) {
                        t = true
                    }
                    if (t) {
                        S(n + " -> " + e.idx);
                        O[n].disconnect();
                        O[n].connect(e)
                    }
                    if (i[n]) {
                        t = false
                    }
                    i[n] = true;
                    e = O[n];
                    e.idx = n
                } else {
                    if (i[n]) {
                        i[n] = false;
                        t = true
                    }
                }
            }
            if (t) {
                S("preGain -> " + e.idx);
                _.disconnect();
                _.connect(e)
            }
        }
        for (var u = 0; u < T; u++) {
            var g = q.createBiquadFilter();
            if (u == 0) {
                g.type = "lowshelf"
            } else if (u == T - 1) {
                g.type = "highshelf"
            } else {
                g.type = "peaking"
            }
            var p = "filter" + u;
            var v = localStorage[p];
            if (v) {
                v = JSON.parse(v);
                g.frequency.value = v.f;
                g.gain.value = v.g;
                g.Q.value = v.q
            } else {
                g.frequency.value = w[u];
                g.gain.value = 0;
                g.Q.value = N[u]
            }
            O.push(g);
            localStorage[p] = JSON.stringify({
                f: g.frequency.value,
                g: g.gain.value,
                q: g.Q.value
            })
        }
        _.connect(k);

        function d(e) {
            f = O[e.index];
            f.gain.value = m(e.gain);
            f.frequency.value = y(e.frequency);
            f.Q.value = A(e.q);
            var t = "filter" + e.index;
            localStorage[t] = JSON.stringify({
                f: f.frequency.value,
                g: f.gain.value,
                q: f.Q.value
            });
            c()
        }

        function h(e) {
            if (e > 10) {
                return 10
            }
            if (e < .00316) {
                return .00316
            }
            return e
        }

        function m(e) {
            if (e < -30) {
                return -30
            }
            if (e > 30) {
                return 30
            }
            return e
        }

        function y(e) {
            if (e < 5) {
                return 5
            }
            if (e > 2e4) {
                return 2e4
            }
            return e
        }

        function A(e) {
            if (e < .2) {
                e = .2
            }
            if (e > 11) {
                e = 11
            }
            return e
        }

        function D(e) {
            var t = h(e.gain);
            k.gain.value = h(t);
            U(t)
        }

        function L() {
            if (!localStorage["GAIN"]) {
                localStorage["GAIN"] = JSON.stringify(1)
            }
            return JSON.parse(localStorage["GAIN"])
        }

        function U(e) {
            localStorage["GAIN"] = JSON.stringify(e)
        }

        function W(e) {
            _gaq.push(["_trackEvent", "preset", "save"]);
            var t = [];
            var n = [];
            var r = [];
            for (var a = 0; a < O.length; a++) {
                var o = O[a];
                t.push(o.frequency.value);
                n.push(o.gain.value);
                r.push(o.Q.value)
            }
            var s = {
                frequencies: t,
                gains: n,
                qs: r
            };
            F(e.preset, s, z)
        }

        function G(e) {
            C(function(t) {
                var n = [];
                var r = [];
                var a = [];
                if (e.preset == "bassBoost") {
                    for (var o = 0; o < w.length; o++) {
                        n.push(w[o]);
                        r.push(0);
                        a.push(N[o])
                    }
                    n[0] = 340;
                    r[0] = 5
                } else {
                    var s = t[e.preset];
                    if (s) {
                        n = s.frequencies;
                        r = s.gains;
                        a = s.qs
                    } else {
                        return
                    }
                }
                _gaq.push(["_trackEvent", "preset", "set"]);
                for (var o = 0; o < n.length; o++) {
                    d({
                        index: o,
                        frequency: n[o],
                        gain: r[o],
                        q: a[o]
                    })
                }
                z()
            })
        }

        function B(e) {
            X(function(t) {
                Y(e, t, true);
                c();
                z()
            })
        }

        function Q() {
            var e = {
                type: "sendWorkspaceStatus",
                eqFilters: [],
                streams: [],
                gain: k.gain.value
            };
            for (var t = 0; t < O.length; t++) {
                var n = O[t];
                e.eqFilters.push({
                    frequency: n.frequency.value,
                    gain: n.gain.value,
                    type: n.type,
                    q: n.Q.value
                })
            }
            for (var r in P) {
                var a = P[r].tab;
                e.streams.push(P[r].tab)
            }
            chrome.runtime.sendMessage(e)
        }

        function H() {
            chrome.runtime.sendMessage({
                type: "sendSampleRate",
                Fs: q.sampleRate
            })
        }

        function V() {
            C(function(e) {
                chrome.runtime.sendMessage({
                    type: "sendPresets",
                    presets: e
                })
            })
        }

        function z() {
            K();
            Q();
            H();
            V()
        }

        function X(e) {
            chrome.tabs.query({
                currentWindow: true,
                active: true
            }, function(t) {
                if (t.length != 1) {
                    console.error("num active tabs != 1")
                } else {
                    e(t[0])
                }
            })
        }

        function K() {
            X(function(e) {
                chrome.runtime.sendMessage({
                    type: "sendCurrentTabStatus",
                    streaming: e.id in P
                })
            })
        }

        function Y(e, t, n) {
            if (!e) {
                console.log("null stream, aborting");
                return
            }
            if (n) {
                _gaq.push(["_trackEvent", "tabStream", "added"])
            }
            if (Object.keys(P).length == 0) {
                q.resume()
            }
            if (t.id in P) {
                console.log("had stream, stopping");
                _gaq.push(["_trackEvent", "tabStream", "hadDuplicate"]);
                P[t.id].stream.getTracks()[0].stop();
                delete P[t.id]
            }
            var r = q.createMediaStreamSource(e);
            r.connect(_);
            P[t.id] = {
                stream: e,
                tab: t,
                audioSource: r
            }
        }
        var Z = {};
        var $ = {};

        function ee(e) {
            console.log(e);
            chrome.windows.get(chrome.windows.WINDOW_ID_CURRENT, null, function(t) {
                console.log(t);
                if (t.state != "fullscreen") {
                    $[t.id] = t.state
                }
                if (e.fullscreen) {
                    console.log("switch to fullscreen");
                    chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, {
                        state: "fullscreen"
                    }, null)
                } else {
                    console.log("switch to " + $[t.id] || "fullscreen");
                    chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, {
                        state: $[t.id] || "fullscreen"
                    }, null)
                }
            });
            if (e.status == "active") {
                Z[e.tabId] = e
            } else if (e.status == "stopped" || e.status == "error") {
                delete Z[e.tabId]
            }
        }

        function te() {
            _gaq.push(["_trackEvent", "currentTab", "removed"]);
            X(ne)
        }

        function ne(e) {
            console.log("disconnectedTab id " + e.id);
            if (e.id in P) {
                _gaq.push(["_trackEvent", "tabStream", "removed"]);
                var t = P[e.id].stream;
                t.getTracks()[0].stop();
                delete P[e.id]
            }
            if (Object.keys(P).length == 0) {
                q.suspend()
            }
            z()
        }

        function re() {
            for (var e = 0; e < T; e++) {
                d({
                    index: e,
                    gain: 0,
                    frequency: w[e],
                    q: N[e]
                })
            }
            D({
                gain: 1
            });
            _gaq.push(["_trackEvent", "filterUpdated", "resetAll"]);
            z()
        }

        function ae(e) {
            d({
                index: e.index,
                gain: 0,
                frequency: w[e.index],
                q: N[e.index]
            });
            _gaq.push(["_trackEvent", "filterUpdated", "reset"])
        }
        x = function(e, t, n) {
            if (e.type == "eqTab") {
                if (e.on) {
                    chrome.tabs.getSelected(null, function(e) {
                        if (e.url.startsWith("chrome-extension://" + chrome.runtime.id)) {
                            return
                        }
                        chrome.tabCapture.capture({
                            audio: true,
                            video: false
                        }, B)
                    })
                } else {
                    te()
                }
            }
            if (e.type == "getCurrentTabStatus") {
                K()
            }
            if (e.type == "getWorkspaceStatus") {
                Q()
            }
            if (e.type == "getFullRefresh") {
                z()
            }
            if (e.type == "onPopupOpen") {
                R()
            }
            if (e.type == "modifyFilter") {
                d(e)
            }
            if (e.type == "modifyGain") {
                D(e)
            }
            if (e.type == "gainUpdated") {
                _gaq.push(["_trackEvent", "gainUpdated", "gain"])
            }
            if (e.type == "filterUpdated") {
                _gaq.push(["_trackEvent", "filterUpdated", e.filterType])
            }
            if (e.type == "disconnectTab") {
                ne(e.tab)
            }
            if (e.type == "resetFilters") {
                re()
            }
            if (e.type == "resetFilter") {
                ae(e)
            }
            if (e.type == "preset") {
                G(e)
            }
            if (e.type == "savePreset") {
                W(e)
            }
            if (e.type == "buy") {
                google.payments.inapp.buy(l)
            }
            if (e.type == "importPreset") {
                var r = e.presets;
                var a = Object.keys(r);
                for (var o = 0; o < a.length; o++) {
                    F(a[o], r[a[o]], z)
                }
            }
            if (e.type == "deletePreset") {
                j(e, z)
            }
            if (e.type == "getFFT") {
                if (s) {
                    chrome.runtime.sendMessage({
                        type: "fft",
                        fft: []
                    });
                    return
                }
                if (E) {
                    b = performance.now();
                    var i = new Float32Array(E.frequencyBinCount);
                    E.getFloatFrequencyData(i);
                    n({
                        type: "fft",
                        fft: Array.from(i)
                    })
                } else {
                    E = q.createAnalyser();
                    E.fftSize = 4096 * 2;
                    E.smoothingTimeConstant = .5;
                    console.log("created analyser");
                    console.log(E);
                    k.connect(E);
                    n({
                        type: "fft",
                        fft: []
                    })
                }
            }
        };
        if (t) {
            for (var u = 0; u < t.length; u++) {
                Y(t[u].stream, t[u].tab, false)
            }
            c();
            z()
        } else {
            chrome.runtime.onMessage.addListener(x);
            chrome.tabCapture.onStatusChanged.addListener(ee)
        }
    }

    function U(e, t, n) {
        var r = true;

        function a() {
            chrome.identity.getAuthToken({
                interactive: true
            }, function(o) {
                if (chrome.runtime.lastError) {
                    n(chrome.runtime.lastError);
                    return
                }
                var s = new XMLHttpRequest;
                s.open(e, t);
                s.setRequestHeader("Authorization", "Bearer " + o);
                s.onload = function() {
                    if (this.status === 401 && r) {
                        r = false;
                        chrome.identity.removeCachedAuthToken({
                            token: o
                        }, a);
                        return
                    }
                    n(null, this.status, this.responseText)
                };
                s.send()
            })
        }
        a()
    }
    var W = "https://www.googleapis.com/chromewebstore/v1.1/userlicenses/";
    var G = 1;

    function B() {
        U("GET", W + chrome.runtime.id, function(e, t, n) {
            if (e) {
                console.log(e)
            } else {
                V(JSON.parse(n))
            }
        })
    }

    function Q() {
        B()
    }
    var H = function() {
        D();
        chrome.runtime.sendMessage({
            type: "F"
        })
    };

    function V(e) {
        var t;
        var n;
        if (e.result && e.accessLevel == "FULL") {
            _gaq.push(["_trackEvent", "l", "f"]);
            L()
        } else if (e.result && e.accessLevel == "FREE_TRIAL") {
            var r = parseInt(e.createdTime, 10);
            var a = G * 24 * 60 * 60 * 1e3 + r - Date.now();
            var o = Date.now() - r;
            o = o / 1e3 / 60 / 60 / 24;
            if (o <= G) {
                setTimeout(Q, a + 1e3);
                chrome.runtime.sendMessage({
                    type: "H",
                    H: a
                });
                _gaq.push(["_trackEvent", "l", "t"]);
                L()
            } else {
                D();
                setInterval(H, 1e3);
                _gaq.push(["_trackEvent", "l", "e"])
            }
        } else {
            _gaq.push(["_trackEvent", "l", "n"]);
            n = "NONE";
            t = "alert-danger";
            L();
            setTimeout(B, 1e3 * 60 * 60)
        }
    }
    L();
    setInterval(function() {
        if (b) {
            if (performance.now() - b > 1e3) {
                if (k && E) {
                    k.disconnect(E);
                    E = null;
                    console.log("disconnected analyser")
                }
            }
        }
    }, 1e3)
}
scope();