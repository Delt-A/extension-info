! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 353)
}({
    10: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    109: function(e, t, n) {
        "use strict";
        var r = n(84),
            o = n(19),
            a = n(31),
            s = n(34),
            i = n(30),
            c = n(24),
            p = n(98),
            l = n(86),
            u = Math.max,
            d = Math.min,
            h = Math.floor,
            f = /\$([$&'`]|\d\d?|<[^>]*>)/g,
            m = /\$([$&'`]|\d\d?)/g;
        r("replace", 2, (function(e, t, n) {
            return [function(n, r) {
                var o = c(this),
                    a = null == n ? void 0 : n[e];
                return void 0 !== a ? a.call(n, o, r) : t.call(String(o), n, r)
            }, function(e, a) {
                var c = n(t, e, this, a);
                if (c.done) return c.value;
                var h = o(e),
                    f = String(this),
                    m = "function" == typeof a;
                m || (a = String(a));
                var g = h.global;
                if (g) {
                    var y = h.unicode;
                    h.lastIndex = 0
                }
                for (var v = [];;) {
                    var w = l(h, f);
                    if (null === w) break;
                    if (v.push(w), !g) break;
                    "" === String(w[0]) && (h.lastIndex = p(f, s(h.lastIndex), y))
                }
                for (var x, b = "", S = 0, M = 0; M < v.length; M++) {
                    w = v[M];
                    for (var I = String(w[0]), T = u(d(i(w.index), f.length), 0), k = [], O = 1; O < w.length; O++) k.push(void 0 === (x = w[O]) ? x : String(x));
                    var N = w.groups;
                    if (m) {
                        var R = [I].concat(k, T, f);
                        void 0 !== N && R.push(N);
                        var P = String(a.apply(void 0, R))
                    } else P = r(I, f, T, k, N, a);
                    T >= S && (b += f.slice(S, T) + P, S = T + I.length)
                }
                return b + f.slice(S)
            }];

            function r(e, n, r, o, s, i) {
                var c = r + e.length,
                    p = o.length,
                    l = m;
                return void 0 !== s && (s = a(s), l = f), t.call(i, l, (function(t, a) {
                    var i;
                    switch (a.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return e;
                        case "`":
                            return n.slice(0, r);
                        case "'":
                            return n.slice(c);
                        case "<":
                            i = s[a.slice(1, -1)];
                            break;
                        default:
                            var l = +a;
                            if (0 === l) return t;
                            if (l > p) {
                                var u = h(l / 10);
                                return 0 === u ? t : u <= p ? void 0 === o[u - 1] ? a.charAt(1) : o[u - 1] + a.charAt(1) : t
                            }
                            i = o[l - 1]
                    }
                    return void 0 === i ? "" : i
                }))
            }
        }))
    },
    11: function(e, t, n) {
        var r = n(10);
        e.exports = !r((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    110: function(e, t, n) {
        var r = n(10);
        e.exports = !!Object.getOwnPropertySymbols && !r((function() {
            return !String(Symbol())
        }))
    },
    111: function(e, t, n) {
        var r = n(30),
            o = n(24),
            a = function(e) {
                return function(t, n) {
                    var a, s, i = String(o(t)),
                        c = r(n),
                        p = i.length;
                    return c < 0 || c >= p ? e ? "" : void 0 : (a = i.charCodeAt(c)) < 55296 || a > 56319 || c + 1 === p || (s = i.charCodeAt(c + 1)) < 56320 || s > 57343 ? e ? i.charAt(c) : a : e ? i.slice(c, c + 2) : s - 56320 + (a - 55296 << 10) + 65536
                }
            };
        e.exports = {
            codeAt: a(!1),
            charAt: a(!0)
        }
    },
    17: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    18: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    19: function(e, t, n) {
        var r = n(17);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(String(e) + " is not an object");
            return e
        }
    },
    20: function(e, t, n) {
        var r = n(11),
            o = n(22),
            a = n(41);
        e.exports = r ? function(e, t, n) {
            return o.f(e, t, a(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    21: function(e, t, n) {
        var r = n(9),
            o = n(27),
            a = n(57),
            s = n(110),
            i = r.Symbol,
            c = o("wks");
        e.exports = function(e) {
            return c[e] || (c[e] = s && i[e] || (s ? i : a)("Symbol." + e))
        }
    },
    22: function(e, t, n) {
        var r = n(11),
            o = n(53),
            a = n(19),
            s = n(39),
            i = Object.defineProperty;
        t.f = r ? i : function(e, t, n) {
            if (a(e), t = s(t, !0), a(n), o) try {
                return i(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e
        }
    },
    23: function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    24: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        }
    },
    27: function(e, t, n) {
        var r = n(45),
            o = n(71);
        (e.exports = function(e, t) {
            return o[e] || (o[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: "3.4.1",
            mode: r ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    30: function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    },
    31: function(e, t, n) {
        var r = n(24);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    32: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    33: function(e, t, n) {
        var r = n(9),
            o = n(27),
            a = n(20),
            s = n(18),
            i = n(38),
            c = n(46),
            p = n(47),
            l = p.get,
            u = p.enforce,
            d = String(c).split("toString");
        o("inspectSource", (function(e) {
            return c.call(e)
        })), (e.exports = function(e, t, n, o) {
            var c = !!o && !!o.unsafe,
                p = !!o && !!o.enumerable,
                l = !!o && !!o.noTargetGet;
            "function" == typeof n && ("string" != typeof t || s(n, "name") || a(n, "name", t), u(n).source = d.join("string" == typeof t ? t : "")), e !== r ? (c ? !l && e[t] && (p = !0) : delete e[t], p ? e[t] = n : a(e, t, n)) : p ? e[t] = n : i(t, n)
        })(Function.prototype, "toString", (function() {
            return "function" == typeof this && l(this).source || c.call(this)
        }))
    },
    34: function(e, t, n) {
        var r = n(30),
            o = Math.min;
        e.exports = function(e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0
        }
    },
    353: function(e, t, n) {
        "use strict";
        n.r(t);
        n(62), n(109);
        var r = {
            pets: {
                cat1: new l,
                cat2: new l
            },
            ownerName: "Human",
            reminders: a(),
            chromePopupReminders: !1
        };

        function o() {
            this.hours = 0, this.minutes = 0, this.text = "", this.enabled = !0, this.lastReminded = (new Date).getTime()
        }

        function a() {
            var e = new o;
            e.enabled = !1, e.hours = 0, e.minutes = 20, e.text = "Look away from your screen for 10 seconds and blink multiple times";
            var t = new o;
            t.enabled = !1, t.hours = 0, t.minutes = 45, t.text = "Don't forget to drink";
            var n = new o;
            return n.enabled = !1, n.hours = 2, n.minutes = 0, n.text = "Take a rest from the screen, stand up and walk for a few minutes", {
                1: e,
                2: t,
                3: n
            }
        }
        var s = localStorage.getItem("pets");
        s ? (s = JSON.parse(s), r.pets = s) : localStorage.setItem("pets", JSON.stringify(r.pets));
        var i = localStorage.getItem("reminders");
        i ? (i = JSON.parse(i), r.reminders = i) : (r.reminders = a(), localStorage.setItem("reminders", JSON.stringify(r.reminders)));
        var c = localStorage.getItem("chromePopupReminders");
        c && "true" == c && (r.chromePopupReminders = !0);
        var p = localStorage.getItem("ownerName");

        function l() {
            this.name = "Meow", this.sleep = 100, this.happiness = 100, this.hunger = 100, this.posLeft = null, this.posTop = null, this.hideUntil = 0, this.show = !0, this.walk = !0, this.talk = !0, this.idleType = "idle", this.walkType = "WALK", this.skin = "grey"
        }
        p && (r.ownerName = p);

        function u() {
            chrome.tabs.query({}, (function(e) {
                for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                    method: "revive",
                    data: r.pets.cat1
                })
            }))
        }
        chrome.runtime.onMessage.addListener((function(e, t, n) {
            var a = {
                pet: r.pets.cat1
            };
            if ("initiate" == e.method) a.isDebug = !("update_url" in chrome.runtime.getManifest()), chrome.tabs.query({}, (function(e) {
                for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                    method: "browser-assets-ready",
                    data: {
                        pet: r.pets.cat1
                    }
                })
            }));
            else if ("request-login" == e.method) {
                var s = "",
                    i = localStorage.getItem("login");
                i && (s = (i = JSON.parse(i)).login_token), a.token = s
            } else if ("PING" == e.method);
            else if ("updatePositions" == e.method) e.data.posLeft || (e.data.posLeft = 0), e.data.posTop || (e.data.posTop = 0), r.pets.cat1.posLeft = e.data.posLeft, r.pets.cat1.posTop = e.data.posTop, localStorage.setItem("pets", JSON.stringify(r.pets));
            else if ("hide-30-min" == e.method) {
                var c = (new Date).getTime() + 18e5;
                r.pets.cat1.hideUntil = c, localStorage.setItem("pets", JSON.stringify(r.pets)), chrome.tabs.query({}, (function(e) {
                    for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                        method: "hide",
                        data: r.pets.cat1
                    })
                }))
            } else if ("show-toggle" == e.method) r.pets.cat1.hideUntil = 0, e.data.status ? (r.pets.cat1.show = !0, localStorage.setItem("pets", JSON.stringify(r.pets)), chrome.tabs.query({}, (function(e) {
                for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                    method: "revive",
                    data: r.pets.cat1
                })
            }))) : (r.pets.cat1.show = !1, localStorage.setItem("pets", JSON.stringify(r.pets)), chrome.tabs.query({}, (function(e) {
                for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                    method: "hide",
                    data: r.pets.cat1
                })
            })));
            else if ("walk-toggle" == e.method) r.pets.cat1.walk = e.data.status, localStorage.setItem("pets", JSON.stringify(r.pets)), chrome.tabs.query({}, (function(e) {
                for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                    method: "update-options",
                    data: r.pets.cat1
                })
            }));
            else if ("change-chrome-notify" == e.method) r.chromePopupReminders = e.data.status, localStorage.setItem("chromePopupReminders", r.chromePopupReminders);
            else if ("walk-type" == e.method) r.pets.cat1.walkType = e.data.status, localStorage.setItem("pets", JSON.stringify(r.pets)), chrome.tabs.query({}, (function(e) {
                for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                    method: "update-options",
                    data: r.pets.cat1
                })
            }));
            else if ("talk-toggle" == e.method) r.pets.cat1.talk = e.data.status, localStorage.setItem("pets", JSON.stringify(r.pets)), chrome.tabs.query({}, (function(e) {
                for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                    method: "update-options",
                    data: r.pets.cat1
                })
            }));
            else if ("eat-request" == e.method) r.pets.cat1.hunger = r.pets.cat1.hunger + 20, r.pets.cat1.happiness = r.pets.cat1.happiness + 3, w(), x({
                method: "action",
                data: {
                    name: "talk",
                    parameters: {
                        text: v("happy")
                    }
                }
            }), localStorage.setItem("pets", JSON.stringify(r.pets));
            else if ("petting" == e.method) {
                r.pets.cat1.happiness = r.pets.cat1.happiness + 10, w(), localStorage.setItem("pets", JSON.stringify(r.pets)), Math.floor(100 * Math.random()) + 1 < 20 && x({
                    method: "action",
                    data: {
                        name: "talk",
                        parameters: {
                            text: v("happy")
                        }
                    }
                })
            } else if ("dancing" == e.method) r.pets.cat1.happiness = r.pets.cat1.happiness + 4, w(), localStorage.setItem("pets", JSON.stringify(r.pets));
            else if ("put-to-sleep" == e.method) r.pets.cat1.idleType = "sleep", x({
                method: "action",
                data: {
                    name: "sleep",
                    parameters: null
                }
            });
            else if ("sleep-request" == e.method) r.pets.cat1.sleep = r.pets.cat1.sleep + 5, r.pets.cat1.happiness = r.pets.cat1.happiness + 3, w(), localStorage.setItem("pets", JSON.stringify(r.pets));
            else if ("change-pet-name" == e.method) r.pets.cat1.name = e.data.name, localStorage.setItem("pets", JSON.stringify(r.pets));
            else if ("change-owner-name" == e.method) r.ownerName = e.data.name, localStorage.setItem("ownerName", r.ownerName);
            else if ("reminder-add" == e.method) {
                (p = new o).text = e.data.text, p.enabled = e.data.enabled, p.hours = e.data.hours, p.minutes = e.data.minutes, r.reminders[e.data.id] = p, localStorage.setItem("reminders", JSON.stringify(r.reminders))
            } else if ("reminder-update" == e.method) {
                var p;
                (p = r.reminders[e.data.id]).text = e.data.text, p.enabled = e.data.enabled, p.hours = e.data.hours, p.minutes = e.data.minutes, localStorage.setItem("reminders", JSON.stringify(r.reminders))
            } else "reminder-remove" == e.method ? (delete r.reminders[e.data.id], localStorage.setItem("reminders", JSON.stringify(r.reminders))) : "choose-browser-skin" == e.method ? (r.pets.cat1.skin = e.data.skin, localStorage.setItem("pets", JSON.stringify(r.pets)), u()) : "choose-browser-hat" == e.method ? (r.pets.cat1.hat = e.data.hat, localStorage.setItem("pets", JSON.stringify(r.pets)), u()) : "choose-browser-eyes" == e.method && (r.pets.cat1.eyes = e.data.eyes, localStorage.setItem("pets", JSON.stringify(r.pets)), u());
            n({
                data: a
            })
        })), chrome.tabs.onActivated.addListener((function(e) {
            (new Date).getTime() > r.pets.cat1.hideUntil && chrome.tabs.sendMessage(e.tabId, {
                method: "newActiveTab",
                data: r.pets.cat1
            }, (function() {}))
        }));
        var d = ["I knew that you loved me", "Thank youuuu", "Thankssss", "Meow Meow ^^", "^^", "I LOVE YOU {owner}", "{owner}, You're the best", "It feels so good", "My life is purrfect"],
            h = ["{pet} is so bored", "{pet} life is meaningless", "Take me to the playground please", "All {pet} needs is looooove", "I am here", "{pet} is here", "Why Don't you love {pet}?", "No petting no fun", "Why don't you play with {pet}", "{owner} doesn't love me", "You don't love {pet}", "Please pet me"],
            f = ["<img style='width:32px;height:32px;' src='" + chrome.extension.getURL("/images/icons/fish.png") + "' />", "<img style='width:32px;height:32px;' src='" + chrome.extension.getURL("/images/icons/cheese.png") + "' />", "<img style='width:32px;height:32px;' src='" + chrome.extension.getURL("/images/icons/chicken.png") + "' />"],
            m = ["<img style='width:32px;height:32px;' src='" + chrome.extension.getURL("/images/icons/fish.png") + "' />", "<img style='width:32px;height:32px;' src='" + chrome.extension.getURL("/images/icons/cheese.png") + "' />", "<img style='width:32px;height:32px;' src='" + chrome.extension.getURL("/images/icons/chicken.png") + "' />", "{pet} is so hungry", "{owner} doesn't love {pet}", "Please feed {pet}", "Why no food Why", "Is it fish? Do I see fish?", "Meow needs food", "Do I smell fish?", "{owner} doesn't feed me"],
            g = ["Please Pet Me", "Meow Meow Meow ^^", "I love my {owner}...", "Whats'uppppp human", "Please hug me", "You look great today :)", "Please hug me", "I need a petting from {owner} ^^", "This is an awesome website", "Are you there {owner}?", "My name is {pet}", "Who let the dogs out... Meow Meow", "It smells like fish", "I hate water", "Can you put the Meow Meow song?", "Trust me, {pet} engineer... :D", "Boo !", "Ku-Ku", "Time spent with cats is never wasted.", "What would you do without me?", "HEY {owner}", "KEEP CALM AND PET ME", "Rawrrrr", "I Love my human pillow", "Me happy, you happy, we happy...", "I will sing for Tuna", "I like your mouse...", "This is my favorite spot", "Adopting you was my best decision ever", "What are you doing there?", "check meow out", "I need a hug right about meow", "You are the purrfect {owner} :3", "Take me to the Playground", "Let's play", "{owner} {owner} {owner}"],
            y = {
                lastEvent: 0,
                isUnhappy: function(e) {
                    return e || (e = 20), r.pets.cat1.happiness < e
                },
                isHungry: function(e) {
                    return e || (e = 20), r.pets.cat1.hunger < e
                },
                isSleepy: function(e) {
                    return e || (e = 20), r.pets.cat1.sleep < e
                },
                sendIdleMode: function() {
                    chrome.tabs.query({}, (function(e) {
                        for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                            method: "update-idle",
                            data: r.pets.cat1
                        })
                    }))
                }
            },
            v = function(e) {
                var t = "";
                switch (e) {
                    case "hungry":
                        t = m[Math.floor(Math.random() * m.length)];
                        break;
                    case "unhappy":
                        t = h[Math.floor(Math.random() * h.length)];
                        break;
                    case "happy":
                        t = d[Math.floor(Math.random() * d.length)];
                        break;
                    case "dreaming":
                        t = f[Math.floor(Math.random() * f.length)];
                        break;
                    default:
                        t = g[Math.floor(Math.random() * g.length)]
                }
                var n = r.pets.cat1.name,
                    o = r.ownerName;
                return o || (o = "Human"), n || (n = "Meow"), t = t.replace(/{owner}/g, o).replace(/{pet}/g, n)
            },
            w = function() {
                "sleep" == r.pets.cat1.idleType && r.pets.cat1.sleep >= 90 ? (r.pets.cat1.idleType = "idle", y.sendIdleMode()) : "sad" == r.pets.cat1.idleType && r.pets.cat1.happiness >= 40 && r.pets.cat1.hunger >= 40 && (r.pets.cat1.idleType = "idle", y.sendIdleMode()), r.pets.cat1.happiness > 100 ? r.pets.cat1.happiness = 100 : r.pets.cat1.happiness < 0 && (r.pets.cat1.happiness = 0), r.pets.cat1.hunger > 100 ? r.pets.cat1.hunger = 100 : r.pets.cat1.hunger < 0 && (r.pets.cat1.hunger = 0), r.pets.cat1.sleep > 100 ? r.pets.cat1.sleep = 100 : r.pets.cat1.sleep < 0 && (r.pets.cat1.sleep = 0)
            },
            x = function(e) {
                chrome.tabs.query({}, (function(t) {
                    for (var n = 0; n < t.length; ++n) chrome.tabs.sendMessage(t[n].id, e)
                }))
            };
        window.setInterval((function() {
                "sleep" != r.pets.cat1.idleType && (r.pets.cat1.sleep -= 3, r.pets.cat1.hunger -= 3, r.pets.cat1.happiness -= 2), w(), localStorage.setItem("pets", JSON.stringify(r.pets))
            }), 6e5), window.setInterval((function() {
                "sleep" == r.pets.cat1.idleType && (r.pets.cat1.sleep += 5), w(), localStorage.setItem("pets", JSON.stringify(r.pets))
            }), 6e4), window.setInterval((function() {
                if (r.pets.cat1.show) {
                    var e = (new Date).getTime();
                    if (!(e - y.lastEvent < 4e3)) {
                        var t = Math.floor(450 * Math.random()) + 1,
                            n = null,
                            o = {
                                text: ""
                            };
                        "sleep" == r.pets.cat1.idleType ? t <= 20 && (n = "talk", o.text = v("dreaming")) : y.isSleepy() ? (r.pets.cat1.idleType = "sleep", n = "sleep") : "sad" != r.pets.cat1.idleType && y.isUnhappy(40) ? (r.pets.cat1.idleType = "sad", n = "sad") : "sad" != r.pets.cat1.idleType && y.isHungry(40) ? (r.pets.cat1.idleType = "sad", n = "sad") : y.isHungry() ? t <= 20 && (n = "talk", o.text = v("hungry")) : y.isUnhappy() ? t <= 20 && (n = "talk", o.text = v("unhappy")) : t >= 21 && t <= 30 && "sleep" != r.pets.cat1.idleType ? n = "run" : t >= 31 && t <= 40 && "sleep" != r.pets.cat1.idleType ? n = "walk" : t >= 41 && t <= 50 && "sleep" != r.pets.cat1.idleType ? (n = "talk", o.text = v("default")) : t >= 51 && t <= 60 && "sleep" != r.pets.cat1.idleType && (n = "lick"), n && (y.lastEvent = e, x({
                            method: "action",
                            data: {
                                name: n,
                                parameters: o
                            }
                        }))
                    }
                }
            }), 2e3), window.setInterval((function() {
                if (r.reminders)
                    for (var e in r.reminders)
                        if (r.reminders.hasOwnProperty(e)) {
                            var t = (new Date).getTime(),
                                n = parseInt(r.reminders[e].lastReminded),
                                o = 60 * r.reminders[e].hours * 60 + 60 * r.reminders[e].minutes;
                            if (r.reminders[e].enabled && r.reminders[e].text && n / 1e3 + o < t / 1e3) return chrome.notifications && r.chromePopupReminders && chrome.notifications.create("Meow reminder", {
                                type: "basic",
                                title: "Reminder",
                                iconUrl: "/16.png",
                                message: r.reminders[e].text
                            }, (function(e) {})), r.reminders[e].lastReminded = t, localStorage.setItem("reminders", JSON.stringify(r.reminders)), x({
                                method: "action",
                                data: {
                                    name: "talk",
                                    parameters: {
                                        text: "<span class='reminder'>Reminder: " + r.reminders[e].text + "</span>"
                                    }
                                }
                            }), void(y.lastEvent = t)
                        }
            }), 1e4),
            function() {
                if (chrome.runtime.onInstalled) try {
                    chrome.runtime.onInstalled.addListener((function(e) {
                        "install" == e.reason ? (window.open("https://www.meowplayground.com/welcome"), function(e) {
                            var t = new XMLHttpRequest,
                                n = "";
                            for (var r in e.data) n.length > 0 && (n += "&"), n += encodeURI(r + "=" + e.data[r]);
                            t.onreadystatechange = function() {
                                t.readyState == XMLHttpRequest.DONE && (200 == t.status ? e.success && e.success.call(this, t.responseText) : e.error && e.error.call(t.responseText))
                            }, t.open(e.type, e.url, !0), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.send(n)
                        }({
                            url: "https://www.meowplayground.com/install",
                            type: "POST",
                            data: {
                                version: chrome.runtime.getManifest().version
                            }
                        })) : e.reason
                    }))
                } catch (e) {}
                chrome.runtime.setUninstallURL && chrome.runtime.setUninstallURL("https://www.meowplayground.com/uninstall")
            }()
    },
    38: function(e, t, n) {
        var r = n(9),
            o = n(20);
        e.exports = function(e, t) {
            try {
                o(r, e, t)
            } catch (n) {
                r[e] = t
            }
            return t
        }
    },
    39: function(e, t, n) {
        var r = n(17);
        e.exports = function(e, t) {
            if (!r(e)) return e;
            var n, o;
            if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
            if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
            if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    41: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    42: function(e, t) {
        e.exports = {}
    },
    45: function(e, t) {
        e.exports = !1
    },
    46: function(e, t, n) {
        var r = n(27);
        e.exports = r("native-function-to-string", Function.toString)
    },
    47: function(e, t, n) {
        var r, o, a, s = n(72),
            i = n(9),
            c = n(17),
            p = n(20),
            l = n(18),
            u = n(56),
            d = n(42),
            h = i.WeakMap;
        if (s) {
            var f = new h,
                m = f.get,
                g = f.has,
                y = f.set;
            r = function(e, t) {
                return y.call(f, e, t), t
            }, o = function(e) {
                return m.call(f, e) || {}
            }, a = function(e) {
                return g.call(f, e)
            }
        } else {
            var v = u("state");
            d[v] = !0, r = function(e, t) {
                return p(e, v, t), t
            }, o = function(e) {
                return l(e, v) ? e[v] : {}
            }, a = function(e) {
                return l(e, v)
            }
        }
        e.exports = {
            set: r,
            get: o,
            has: a,
            enforce: function(e) {
                return a(e) ? o(e) : r(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!c(t) || (n = o(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        }
    },
    53: function(e, t, n) {
        var r = n(11),
            o = n(10),
            a = n(63);
        e.exports = !r && !o((function() {
            return 7 != Object.defineProperty(a("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    56: function(e, t, n) {
        var r = n(27),
            o = n(57),
            a = r("keys");
        e.exports = function(e) {
            return a[e] || (a[e] = o(e))
        }
    },
    57: function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
        }
    },
    62: function(e, t, n) {
        var r = n(11),
            o = n(22).f,
            a = Function.prototype,
            s = a.toString,
            i = /^\s*function ([^ (]*)/;
        !r || "name" in a || o(a, "name", {
            configurable: !0,
            get: function() {
                try {
                    return s.call(this).match(i)[1]
                } catch (e) {
                    return ""
                }
            }
        })
    },
    63: function(e, t, n) {
        var r = n(9),
            o = n(17),
            a = r.document,
            s = o(a) && o(a.createElement);
        e.exports = function(e) {
            return s ? a.createElement(e) : {}
        }
    },
    71: function(e, t, n) {
        var r = n(9),
            o = n(38),
            a = r["__core-js_shared__"] || o("__core-js_shared__", {});
        e.exports = a
    },
    72: function(e, t, n) {
        var r = n(9),
            o = n(46),
            a = r.WeakMap;
        e.exports = "function" == typeof a && /native code/.test(o.call(a))
    },
    84: function(e, t, n) {
        "use strict";
        var r = n(20),
            o = n(33),
            a = n(10),
            s = n(21),
            i = n(85),
            c = s("species"),
            p = !a((function() {
                var e = /./;
                return e.exec = function() {
                    var e = [];
                    return e.groups = {
                        a: "7"
                    }, e
                }, "7" !== "".replace(e, "$<a>")
            })),
            l = !a((function() {
                var e = /(?:)/,
                    t = e.exec;
                e.exec = function() {
                    return t.apply(this, arguments)
                };
                var n = "ab".split(e);
                return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
            }));
        e.exports = function(e, t, n, u) {
            var d = s(e),
                h = !a((function() {
                    var t = {};
                    return t[d] = function() {
                        return 7
                    }, 7 != "" [e](t)
                })),
                f = h && !a((function() {
                    var t = !1,
                        n = /a/;
                    return "split" === e && ((n = {}).constructor = {}, n.constructor[c] = function() {
                        return n
                    }, n.flags = "", n[d] = /./ [d]), n.exec = function() {
                        return t = !0, null
                    }, n[d](""), !t
                }));
            if (!h || !f || "replace" === e && !p || "split" === e && !l) {
                var m = /./ [d],
                    g = n(d, "" [e], (function(e, t, n, r, o) {
                        return t.exec === i ? h && !o ? {
                            done: !0,
                            value: m.call(t, n, r)
                        } : {
                            done: !0,
                            value: e.call(n, t, r)
                        } : {
                            done: !1
                        }
                    })),
                    y = g[0],
                    v = g[1];
                o(String.prototype, e, y), o(RegExp.prototype, d, 2 == t ? function(e, t) {
                    return v.call(e, this, t)
                } : function(e) {
                    return v.call(e, this)
                }), u && r(RegExp.prototype[d], "sham", !0)
            }
        }
    },
    85: function(e, t, n) {
        "use strict";
        var r, o, a = n(97),
            s = RegExp.prototype.exec,
            i = String.prototype.replace,
            c = s,
            p = (r = /a/, o = /b*/g, s.call(r, "a"), s.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
            l = void 0 !== /()??/.exec("")[1];
        (p || l) && (c = function(e) {
            var t, n, r, o, c = this;
            return l && (n = new RegExp("^" + c.source + "$(?!\\s)", a.call(c))), p && (t = c.lastIndex), r = s.call(c, e), p && r && (c.lastIndex = c.global ? r.index + r[0].length : t), l && r && r.length > 1 && i.call(r[0], n, (function() {
                for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
            })), r
        }), e.exports = c
    },
    86: function(e, t, n) {
        var r = n(32),
            o = n(85);
        e.exports = function(e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var a = n.call(e, t);
                if ("object" != typeof a) throw TypeError("RegExp exec method returned something other than an Object or null");
                return a
            }
            if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return o.call(e, t)
        }
    },
    9: function(e, t, n) {
        (function(t) {
            var n = function(e) {
                return e && e.Math == Math && e
            };
            e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")()
        }).call(this, n(23))
    },
    97: function(e, t, n) {
        "use strict";
        var r = n(19);
        e.exports = function() {
            var e = r(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
        }
    },
    98: function(e, t, n) {
        "use strict";
        var r = n(111).charAt;
        e.exports = function(e, t, n) {
            return t + (n ? r(e, t).length : 1)
        }
    }
});