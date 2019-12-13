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
    _gaq.push(["_setAccount", "UA-64913318-2"]);
    _gaq.push(["_trackPageview"]);
    _gaq.push(["_trackEvent", "popupOpen", e]);
    var t = null;
    (function() {
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.async = true;
        e.src = "https://ssl.google-analytics.com/ga.js";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
    })();
    var n = function() {};
    document.addEventListener("DOMContentLoaded", function(e) {
        a();
        r();
        M()
    });
    document.addEventListener("DOMContentLoaded", function() {
        var e = document.getElementById("presetNameInput");
        var r = document.getElementById("resetFiltersButton");
        r.onclick = function() {
            e.value = "";
            chrome.runtime.sendMessage({
                type: "resetFilters"
            })
        };
        var a = document.getElementById("bassBoostButton");
        a.onclick = function() {
            e.value = "";
            chrome.runtime.sendMessage({
                type: "preset",
                preset: "bassBoost"
            })
        };
        var o = document.getElementById("requiresProDiv");

        function i(e) {
            o.textContent = e;
            o.classList.add("show");
            setTimeout(function() {
                o.classList.remove("show")
            }, 5e3)
        }
        var s = document.getElementById("savePresetButton");
        s.onclick = function() {
            if (t && userPresetSpan.children.length >= t + 1) {
                i("Saving more than 3 presets requires Ears Pro. Click the Pro tab above to start your free trial!");
                return
            }
            var n = e.value.trim();
            if (n != "") {
                chrome.runtime.sendMessage({
                    type: "savePreset",
                    preset: n
                })
            } else {
                i("Type a name in the Preset Name box, then click Save Preset or press Enter.");
                e.focus()
            }
        };
        var l = document.getElementById("deletePresetButton");
        l.onclick = function() {
            var t = e.value.trim();
            if (t != "") {
                chrome.runtime.sendMessage({
                    type: "deletePreset",
                    preset: t
                })
            }
        };
        e.onkeypress = function(t) {
            if (!t) t = window.event;
            var n = t.keyCode || t.which;
            if (n == "13" && document.activeElement == e) {
                s.click();
                return false
            }
        };
        var u = document.getElementById("vizButton");

        function f() {
            if (T()) {
                u.classList.add("on")
            } else {
                u.classList.remove("on")
            }
        }
        f();
        u.onclick = function() {
            if (t) {
                i("The frequency spectrum visualizer requires Ears Pro. Click the Pro tab above to start your free trial!")
            }
            S();
            f()
        };
        document.getElementById("buyButton").onclick = c;
        n = function() {
            if (localStorage[" "] == " ") {
                document.getElementById("proPurchasedDiv").style.display = "block";
                document.getElementById("proNotPurchasedDiv").style.display = "none";
                document.getElementById("buyButton").style.display = "none";
                document.getElementById("proPromo").style.display = "none"
            } else {
                document.getElementById("proPurchasedDiv").style.display = "none";
                document.getElementById("proNotPurchasedDiv").style.display = "block";
                document.getElementById("buyButton").style.display = "block";
                document.getElementById("proPromo").onclick = function() {
                    document.getElementById("tab-4").click()
                }
            }
        };
        n();
        var d = ["tab-1", "tab-2", "tab-3", "tab-4"];
        for (var v = 0; v < d.length; v++) {
            var m = d[v];
            document.getElementById(m).addEventListener("change", function(e) {
                return function() {
                    if (this.checked) {
                        localStorage["last-tab"] = e
                    }
                }
            }(m))
        }
        var h = localStorage["last-tab"];
        if (h) {
            var p = document.getElementById(h);
            if (p) {
                p.click()
            }
        }
        if (window.innerWidth && window.innerWidth > 1e3) {
            document.getElementById("fullscreen-link").style.display = "none"
        }
    });

    function r() {
        chrome.runtime.sendMessage({
            type: "getFullRefresh"
        })
    }

    function a() {
        chrome.runtime.sendMessage({
            type: "onPopupOpen"
        })
    }
    var o = "ears_pro";
    var i = "ACTIVE";
    var s = {
        parameters: {
            env: "prod"
        },
        success: l,
        failure: u
    };

    function c() {
        chrome.runtime.sendMessage({
            type: "buy"
        })
    }

    function l(e) {
        if (e.hasOwnProperty("response") && e.response.hasOwnProperty("details")) {
            for (var n = 0; n < e.response.details.length; n++) {
                var r = e.response.details[n];
                if (r.sku == o) {
                    if (r.state == i) {
                        B[" "] = " ";
                        t = null
                    } else {
                        B[" "] = "active";
                        t = null
                    }
                }
            }
            var a = document.getElementById("vizButton");
            if (T()) {
                a.classList.add("on");
                k()
            } else {
                a.classList.remove("on")
            }
        } else {
            console.log("no details")
        }
    }

    function u(e) {
        console.log("f");
        if (B[" "] == " ") {
            syncStorage = chrome.storage.sync;
            t = null
        }
    }
    google.payments.inapp.getPurchases(s);
    var f = 44100;
    var d = "eqSvg";
    var v = "eqTabButton";
    var m = "How was your day of beautiful audio? Let us know what you think at the link below! If you would like to continue using Ears, please support us by making a purchase. If you have already purchased Ears, please restart Chrome. Enjoy!";
    var h = "https://chrome.google.com/webstore/detail/ears-audio-toolkit/nfdfiepdkbnoanddpianalelglmfooik";
    var p = true;
    var g = function() {
        if (p) {
            r();
            setTimeout(g, 1e3)
        }
    };
    setTimeout(g, 1e3);
    chrome.runtime.onMessage.addListener(function(e, t, n) {
        if (e.type == "sendCurrentTabStatus") {
            if (e.streaming) {
                w()
            } else {
                q()
            }
        }
        if (e.type == "sendWorkspaceStatus") {
            p = false;
            P(e)
        }
        if (e.type == "sendSampleRate") {
            f = e.Fs;
            console.log("set sample rate to " + f)
        }
        if (e.type == "sendPresets") {
            E(e)
        }
        if (e.type == "F") {
            var r = document.getElementById(d);
            if (r) {
                r.remove()
            }
            var a = document.getElementById(v);
            if (a) {
                a.remove()
            }
            document.getElementById("lt").textContent = m;
            document.getElementById("pl").style.display = "block"
        }
    });

    function y(e) {
        if (K) {
            var t = 1e3 / 30 - (performance.now() - K);
            if (t > 0) {
                setTimeout(k, t);
                return
            }
        }
        K = performance.now();
        if (J) {
            J.remove()
        }
        if (!T()) {
            return
        }
        var n = e.fft;
        if (V && n.length > 0) {
            strokeGradient = V.gradient("l(.5, 0, .5, 1)" + F + "-" + N);
            var r = [];

            function a(e) {
                return O - 1 - e
            }
            for (var o in n) {
                var i = o * f / (n.length * 2);
                if (i < 10) {
                    continue
                }
                var s = ee(i);
                if (s > _) {
                    break
                }
                var c = (n[o] + 100) / 100 * O;
                r.push([s, c])
            }
            var l = [];
            for (var o in r) {
                var u = r[o];
                if (l.length == 0) {
                    l.push(u);
                    continue
                }
                var d = l[l.length - 1];
                var v = 2;
                if (u[0] - d[0] < v) {
                    if (u[1] > d[1]) {
                        d[1] = u[1]
                    }
                } else {
                    l.push(u)
                }
            }
            var m = [];
            for (var o in l) {
                var d = l[o];
                m = m.concat([d[0], a(d[1])])
            }
            J = V.polyline(m).attr({
                "fill-opacity": "0",
                stroke: strokeGradient,
                "pointer-events": "none"
            })
        }
        k()
    }

    function k() {
        chrome.runtime.sendMessage({
            type: "getFFT"
        }, y)
    }

    function E(e) {
        var t = e.presets;
        var n = document.getElementById("userPresetSpan");
        while (n.firstChild) {
            n.removeChild(n.firstChild)
        }
        var r = Object.keys(t);
        for (var a = 0; a < r.length; a++) {
            (function(e) {
                var t = document.createElement("button");
                t.textContent = e;
                n.appendChild(t);
                t.onclick = function() {
                    chrome.runtime.sendMessage({
                        type: "preset",
                        preset: e
                    });
                    document.getElementById("presetNameInput").value = e
                }
            })(r[a])
        }
    }

    function b() {
        function e(e, t) {
            var n = document.createElement("a");
            var r = new Blob([t], {
                type: "text/plain;charset=UTF-8"
            });
            n.href = window.URL.createObjectURL(r);
            n.download = e;
            n.style.display = "none";
            document.body.appendChild(n);
            n.click();
            delete n
        }
        var t = document.getElementById("presetNameInput").value.trim();
        if (t != "") {
            var n = [];
            var r = [];
            var a = [];
            for (var o = 0; o < C.length; o++) {
                var i = C[o];
                n.push(i.frequency);
                r.push(i.gain);
                a.push(i.q)
            }
            var s = {
                frequencies: n,
                gains: r,
                qs: a
            };
            var c = {};
            c[t] = s;
            e("EarsPreset-" + t + ".txt", JSON.stringify(c))
        } else {}
    }

    function M() {
        chrome.runtime.sendMessage({
            type: "eqTab",
            on: true
        })
    }

    function q() {
        var e = document.getElementById("eqTabButton");
        e.onclick = function() {
            M()
        };
        e.textContent = "EQ This Tab"
    }

    function w() {
        var e = document.getElementById("eqTabButton");
        e.onclick = function() {
            chrome.runtime.sendMessage({
                type: "eqTab",
                on: false
            })
        };
        e.textContent = "Stop EQing This Tab"
    }
    var B = localStorage;
    var I = "SHOW_VISUALIZER";

    function T() {
        return localStorage[I] == true
    }

    function S() {
        if (t) {
            return
        }
        B[I] ^= true;
        if (T()) {
            k()
        }
    }
    var C = [];

    function P(e) {
        C = [];
        for (var t = 0; t < e.eqFilters.length; t++) {
            var n = e.eqFilters[t];
            var r = {};
            r.x = ee(n.frequency);
            r.y = re(n.gain);
            var a = n.frequency / n.q;
            r.w = n.frequency / n.q;
            r.t = n.type;
            r.gain = n.gain;
            r.q = n.q;
            r.frequency = n.frequency;
            C.push(r)
        }
        var o = {};
        o.gain = e.gain;
        o.y = re(ge(o.gain));
        Z(C, o);
        x(e.streams)
    }

    function x(e) {
        var t = document.getElementById("eqTabList");
        t.innerHTML = "";
        if (e.length == 0) {
            t.textContent = "No tabs active. Click 'EQ This Tab' below to activate this tab.";
            return
        }
        var n = document.createElement("table");
        for (var r = 0; r < e.length; r++) {
            n.appendChild(L(e[r]))
        }
        t.appendChild(n)
    }

    function L(e) {
        var t = document.createElement("tr");
        var n = document.createElement("button");
        n.textContent = "Stop EQing";
        n.onclick = function() {
            chrome.runtime.sendMessage({
                type: "disconnectTab",
                tab: e
            })
        };
        var r = document.createElement("img");
        r.className = "tabFavIcon";
        r.src = e.favIconUrl;
        r.alt = "";
        n.appendChild(r);
        var a = document.createElement("td");
        a.appendChild(n);
        t.appendChild(a);
        var o = document.createElement("td");
        var i = e.title;
        if (i.length > 45) {
            i = i.substring(0, 45)
        }
        o.textContent = i;
        t.appendChild(o);
        return t
    }

    function R(e) {
        return Math.log(e) / Math.log(2)
    }
    var F = "wheat";
    var N = "#2C3E50";
    var D = "#9573A8";
    var Q = "#CDF7E1";
    var _ = 600;
    var O = 300;
    var U = 30;
    var z = 22050;
    var A = 30;
    var j = 10;
    var W = -30;
    var G = 0;
    var H = 0;
    var V = null;
    var J = null;
    var K = null;
    var Y = null;

    function Z(e, t) {
        if (V) {
            V.clear()
        }
        if (Y) {
            Y.clear()
        }
        V = Snap("#eqSvg");
        V.attr({
            fill: N,
            height: O,
            width: _
        });
        Y = Snap("#gainSvg");
        Y.attr({
            fill: N,
            height: O,
            width: U
        });
        var n = {
            fill: F,
            stroke: F
        };
        var r = V.rect(0, 0, _, O).attr({
            stroke: F
        });
        le(V, e);
        ue(V);
        var a = Y.line(U / 2, re(W), U / 2, re(j)).attr({
            stroke: "wheat",
            opacity: .5
        });
        var o = Y.text(U / 2, re(j) - 10, "volume").attr({
            fill: "wheat",
            "text-anchor": "middle",
            "font-size": 8
        });
        var i = Y.line(U / 2 - 5, re(0), U / 2 + 5, re(0)).attr({
            stroke: "wheat"
        });
        var s = Y.line(0, t.y, U, t.y).attr({
            stroke: "wheat"
        }).addClass("gainLine");
        s.drag(de(s), Ee, ve(s));
        for (var c = 0; c < e.length; c++) {
            var l = e[c];
            var u = l.x;
            var f = l.y;
            var d = n;
            if (l.t == "peaking") {
                d = {
                    fill: Q,
                    stroke: Q
                }
            }
            if (l.t == "highshelf" || l.t == "lowshelf") {
                d = {
                    fill: D,
                    stroke: D
                }
            }
            var v = V.circle(u, f, 4).attr(d).addClass("filterDot");
            v.drag(me(l, c, V), Ee, be(l, c));
            v.dblclick(X(l, c))
        }
    }

    function X(e, t) {
        return function() {
            e.gain = 0;
            e.y = re(0);
            ke(t);
            r()
        }
    }

    function $(e) {
        return ne(e / _) * z
    }

    function ee(e) {
        return te(e / z) * _
    }

    function te(e) {
        return Math.pow(e, 1 / 4)
    }

    function ne(e) {
        return Math.pow(e, 4)
    }

    function re(e) {
        var t = A - W;
        return O * (1 - (e - W) / t)
    }

    function ae(e) {
        var t = A - W;
        return (1 - e / O) * t + W
    }

    function oe(e, t, n) {
        if (e < t) {
            return t
        }
        if (e > n) {
            return n
        }
        return e
    }

    function ie(e) {
        var t = e.node.getClientRects()[0];
        return [t.left, t.top]
    }
    var se = {};

    function ce(e, t, n) {
        var r = t.frequency;
        var a = t.q;
        var o = t.gain;
        var i = Math.tan(Math.PI * r / f);
        var s = 1 / (1 + 1 / a * i + i * i);
        var c = Math.pow(10, Math.abs(o) / 20);
        var l = 0;
        var u = 0;
        var d = 0;
        var v = 0;
        var m = 0;
        var h = "wheat";
        if (t.t == "peaking") {
            h = Q;
            if (o >= 0) {
                s = 1 / (1 + 1 / a * i + i * i);
                l = (1 + c / a * i + i * i) * s;
                u = 2 * (i * i - 1) * s;
                d = (1 - c / a * i + i * i) * s;
                v = u;
                m = (1 - 1 / a * i + i * i) * s
            } else {
                s = 1 / (1 + c / a * i + i * i);
                l = (1 + 1 / a * i + i * i) * s;
                u = 2 * (i * i - 1) * s;
                d = (1 - 1 / a * i + i * i) * s;
                v = u;
                m = (1 - c / a * i + i * i) * s
            }
        } else if (t.t == "highshelf") {
            h = D;
            if (o >= 0) {
                s = 1 / (1 + Math.SQRT2 * i + i * i);
                l = (c + Math.sqrt(2 * c) * i + i * i) * s;
                u = 2 * (i * i - c) * s;
                d = (c - Math.sqrt(2 * c) * i + i * i) * s;
                v = 2 * (i * i - 1) * s;
                m = (1 - Math.SQRT2 * i + i * i) * s
            } else {
                s = 1 / (c + Math.sqrt(2 * c) * i + i * i);
                l = (1 + Math.SQRT2 * i + i * i) * s;
                u = 2 * (i * i - 1) * s;
                d = (1 - Math.SQRT2 * i + i * i) * s;
                v = 2 * (i * i - c) * s;
                m = (c - Math.sqrt(2 * c) * i + i * i) * s
            }
        } else if (t.t == "lowshelf") {
            h = D;
            if (o >= 0) {
                s = 1 / (1 + Math.SQRT2 * i + i * i);
                l = (1 + Math.sqrt(2 * c) * i + c * i * i) * s;
                u = 2 * (c * i * i - 1) * s;
                d = (1 - Math.sqrt(2 * c) * i + c * i * i) * s;
                v = 2 * (i * i - 1) * s;
                m = (1 - Math.SQRT2 * i + i * i) * s
            } else {
                s = 1 / (1 + Math.sqrt(2 * c) * i + c * i * i);
                l = (1 + Math.SQRT2 * i + i * i) * s;
                u = 2 * (i * i - 1) * s;
                d = (1 - Math.SQRT2 * i + i * i) * s;
                v = 2 * (c * i * i - 1) * s;
                m = (1 - Math.sqrt(2 * c) * i + c * i * i) * s
            }
        }
        var p = [];
        for (var g = 0; g < _; g += 2) {
            var y = ne(g / _) * Math.PI;
            var k = Math.pow(Math.sin(y / 2), 2);
            var E = Math.log((Math.pow(l + u + d, 2) - 4 * (l * u + 4 * l * d + u * d) * k + 16 * l * d * k * k) / (Math.pow(1 + v + m, 2) - 4 * (v + 4 * m + v * m) * k + 16 * m * k * k));
            E = E * 10 / Math.LN10;
            E = re(E);
            if (E == -Infinity) {
                E = O - 1
            }
            if (Math.abs(E - O / 2) > 1) {
                p = p.concat([g, E])
            }
        }
        var b = null;
        if (o >= 0) {
            b = e.gradient("l(.5, 0, .5, 1)" + h + "-" + N)
        } else {
            b = e.gradient("l(.5, 1, .5, 0)" + h + "-" + N)
        }
        if (se[n]) {
            se[n].remove()
        }
        se[n] = e.polyline(p).attr({
            stroke: b,
            "fill-opacity": "0",
            "pointer-events": "none"
        })
    }

    function le(e, t) {
        var n = [];
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            ce(e, a, r)
        }
    }

    function ue(e) {
        for (var t = 5; t < z; t *= 2) {
            var n = ee(t);
            e.line(n, O / 2 + 10, n, O / 2 - 10).attr({
                stroke: "wheat",
                "stroke-opacity": .25
            });
            e.line(n, O, n, O - 15).attr({
                stroke: "wheat"
            });
            e.text(n, O - 18, "" + Math.round($(n))).attr({
                fill: "wheat",
                "text-anchor": "middle",
                "font-size": 10
            });
            e.line(n, 0, n, 15).attr({
                stroke: "wheat"
            })
        }
        var r = 5;
        for (var a = W; a < A; a += r) {
            var o = re(a);
            if (Math.abs(A) - Math.abs(a) > r / 2) {
                e.line(0, o, 5, o).attr({
                    stroke: "wheat"
                });
                e.text(7, o, "" + a).attr({
                    fill: "wheat",
                    "font-size": 10,
                    "dominant-baseline": "middle"
                })
            }
        }
    }

    function fe(e) {
        if (e < .2) {
            e = .2
        }
        if (e > 11) {
            e = 11
        }
        return e
    }

    function de(e) {
        return function(t, n, r, a, o) {
            var i = ie(Y);
            a = a - i[1];
            if (a < 0 || a >= O) {
                return
            }
            if (ae(a) > j) {
                n -= a - re(j);
                a = re(j)
            }
            e.y = a;
            e.gain = pe(ae(a));
            this.attr({
                transform: this.data("origTransform") + (this.data("origTransform") ? "T" : "t") + [0, n]
            });
            ye(e)
        }
    }

    function ve(e) {
        return function() {
            this.attr({
                fill: N
            });
            chrome.runtime.sendMessage({
                type: "gainUpdated",
                gain: e.gain
            });
            r()
        }
    }

    function me(e, t, n) {
        return function(r, a, o, i, s) {
            if (s.shiftKey) {
                e.q = fe(e.q + s.movementY / 10)
            } else {
                var c = ie(V);
                o = o - c[0];
                i = i - c[1];
                if (o < 0 || o >= _ || i < 0 || i >= O) {
                    return
                }
                e.x = o;
                e.y = i;
                e.gain = ae(i);
                e.frequency = $(o);
                this.attr({
                    transform: this.data("origTransform") + (this.data("origTransform") ? "T" : "t") + [r, a]
                })
            }
            ce(n, e, t);
            he(e, t)
        }
    }

    function he(e, t) {
        chrome.runtime.sendMessage({
            type: "modifyFilter",
            index: t,
            frequency: $(e.x),
            gain: ae(e.y),
            q: e.q
        })
    }

    function pe(e) {
        return Math.pow(10, e / 10)
    }

    function ge(e) {
        return 10 * Math.log10(e)
    }

    function ye(e) {
        chrome.runtime.sendMessage({
            type: "modifyGain",
            gain: e.gain
        })
    }

    function ke(e) {
        chrome.runtime.sendMessage({
            type: "resetFilter",
            index: e
        })
    }
    var Ee = function() {
        this.data("origTransform", this.transform().local);
        this.attr({
            fill: "black"
        })
    };

    function be(e, t) {
        return function() {
            this.attr({
                fill: N
            });
            chrome.runtime.sendMessage({
                type: "filterUpdated",
                filterType: e.t,
                frequency: e.frequency,
                gain: e.gain,
                q: e.q
            });
            r()
        }
    }
    if (T()) {
        k()
    }
}(function() {
    scope()
})();