! function(t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var a = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(a.exports, a, a.exports, i), a.l = !0, a.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) i.d(n, a, function(e) {
                return t[e]
            }.bind(null, a));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "/", i(i.s = 127)
}([, , , , , , , , , function(t, e, i) {
    (function(e) {
        var i = function(t) {
            return t && t.Math == Math && t
        };
        t.exports = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof e && e) || Function("return this")()
    }).call(this, i(23))
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, i) {
    var n = i(10);
    t.exports = !n((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, , , , function(t, e, i) {
    var n = i(9),
        a = i(40).f,
        o = i(20),
        r = i(33),
        s = i(38),
        c = i(81),
        d = i(70);
    t.exports = function(t, e) {
        var i, l, p, w, u, h = t.target,
            f = t.global,
            g = t.stat;
        if (i = f ? n : g ? n[h] || s(h, {}) : (n[h] || {}).prototype)
            for (l in e) {
                if (w = e[l], p = t.noTargetGet ? (u = a(i, l)) && u.value : i[l], !d(f ? l : h + (g ? "." : "#") + l, t.forced) && void 0 !== p) {
                    if (typeof w == typeof p) continue;
                    c(w, p)
                }(t.sham || p && p.sham) && o(w, "sham", !0), r(i, l, w, t)
            }
    }
}, , function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e) {
    var i = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return i.call(t, e)
    }
}, function(t, e, i) {
    var n = i(17);
    t.exports = function(t) {
        if (!n(t)) throw TypeError(String(t) + " is not an object");
        return t
    }
}, function(t, e, i) {
    var n = i(11),
        a = i(22),
        o = i(41);
    t.exports = n ? function(t, e, i) {
        return a.f(t, e, o(1, i))
    } : function(t, e, i) {
        return t[e] = i, t
    }
}, , function(t, e, i) {
    var n = i(11),
        a = i(53),
        o = i(19),
        r = i(39),
        s = Object.defineProperty;
    e.f = n ? s : function(t, e, i) {
        if (o(t), e = r(e, !0), o(i), a) try {
            return s(t, e, i)
        } catch (t) {}
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
        return "value" in i && (t[e] = i.value), t
    }
}, function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t
    }
}, , function(t, e, i) {
    var n = i(55),
        a = i(24);
    t.exports = function(t) {
        return n(a(t))
    }
}, function(t, e, i) {
    var n = i(45),
        a = i(71);
    (t.exports = function(t, e) {
        return a[t] || (a[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.4.1",
        mode: n ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, , , function(t, e) {
    var i = Math.ceil,
        n = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
    }
}, function(t, e, i) {
    var n = i(24);
    t.exports = function(t) {
        return Object(n(t))
    }
}, function(t, e) {
    var i = {}.toString;
    t.exports = function(t) {
        return i.call(t).slice(8, -1)
    }
}, function(t, e, i) {
    var n = i(9),
        a = i(27),
        o = i(20),
        r = i(18),
        s = i(38),
        c = i(46),
        d = i(47),
        l = d.get,
        p = d.enforce,
        w = String(c).split("toString");
    a("inspectSource", (function(t) {
        return c.call(t)
    })), (t.exports = function(t, e, i, a) {
        var c = !!a && !!a.unsafe,
            d = !!a && !!a.enumerable,
            l = !!a && !!a.noTargetGet;
        "function" == typeof i && ("string" != typeof e || r(i, "name") || o(i, "name", e), p(i).source = w.join("string" == typeof e ? e : "")), t !== n ? (c ? !l && t[e] && (d = !0) : delete t[e], d ? t[e] = i : o(t, e, i)) : d ? t[e] = i : s(e, i)
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && l(this).source || c.call(this)
    }))
}, function(t, e, i) {
    var n = i(30),
        a = Math.min;
    t.exports = function(t) {
        return t > 0 ? a(n(t), 9007199254740991) : 0
    }
}, function(t, e, i) {
    var n = i(15),
        a = i(31),
        o = i(48);
    n({
        target: "Object",
        stat: !0,
        forced: i(10)((function() {
            o(1)
        }))
    }, {
        keys: function(t) {
            return o(a(t))
        }
    })
}, , , function(t, e, i) {
    var n = i(9),
        a = i(20);
    t.exports = function(t, e) {
        try {
            a(n, t, e)
        } catch (i) {
            n[t] = e
        }
        return e
    }
}, function(t, e, i) {
    var n = i(17);
    t.exports = function(t, e) {
        if (!n(t)) return t;
        var i, a;
        if (e && "function" == typeof(i = t.toString) && !n(a = i.call(t))) return a;
        if ("function" == typeof(i = t.valueOf) && !n(a = i.call(t))) return a;
        if (!e && "function" == typeof(i = t.toString) && !n(a = i.call(t))) return a;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, i) {
    var n = i(11),
        a = i(54),
        o = i(41),
        r = i(26),
        s = i(39),
        c = i(18),
        d = i(53),
        l = Object.getOwnPropertyDescriptor;
    e.f = n ? l : function(t, e) {
        if (t = r(t), e = s(e, !0), d) try {
            return l(t, e)
        } catch (t) {}
        if (c(t, e)) return o(!a.f.call(t, e), t[e])
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    t.exports = {}
}, , , function(t, e) {
    t.exports = !1
}, function(t, e, i) {
    var n = i(27);
    t.exports = n("native-function-to-string", Function.toString)
}, function(t, e, i) {
    var n, a, o, r = i(72),
        s = i(9),
        c = i(17),
        d = i(20),
        l = i(18),
        p = i(56),
        w = i(42),
        u = s.WeakMap;
    if (r) {
        var h = new u,
            f = h.get,
            g = h.has,
            m = h.set;
        n = function(t, e) {
            return m.call(h, t, e), e
        }, a = function(t) {
            return f.call(h, t) || {}
        }, o = function(t) {
            return g.call(h, t)
        }
    } else {
        var v = p("state");
        w[v] = !0, n = function(t, e) {
            return d(t, v, e), e
        }, a = function(t) {
            return l(t, v) ? t[v] : {}
        }, o = function(t) {
            return l(t, v)
        }
    }
    t.exports = {
        set: n,
        get: a,
        has: o,
        enforce: function(t) {
            return o(t) ? a(t) : n(t, {})
        },
        getterFor: function(t) {
            return function(e) {
                var i;
                if (!c(e) || (i = a(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return i
            }
        }
    }
}, function(t, e, i) {
    var n = i(69),
        a = i(65);
    t.exports = Object.keys || function(t) {
        return n(t, a)
    }
}, , , , , function(t, e, i) {
    var n = i(11),
        a = i(10),
        o = i(63);
    t.exports = !n && !a((function() {
        return 7 != Object.defineProperty(o("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, i) {
    "use strict";
    var n = {}.propertyIsEnumerable,
        a = Object.getOwnPropertyDescriptor,
        o = a && !n.call({
            1: 2
        }, 1);
    e.f = o ? function(t) {
        var e = a(this, t);
        return !!e && e.enumerable
    } : n
}, function(t, e, i) {
    var n = i(10),
        a = i(32),
        o = "".split;
    t.exports = n((function() {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function(t) {
        return "String" == a(t) ? o.call(t, "") : Object(t)
    } : Object
}, function(t, e, i) {
    var n = i(27),
        a = i(57),
        o = n("keys");
    t.exports = function(t) {
        return o[t] || (o[t] = a(t))
    }
}, function(t, e) {
    var i = 0,
        n = Math.random();
    t.exports = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++i + n).toString(36)
    }
}, function(t, e, i) {
    var n = i(83),
        a = i(9),
        o = function(t) {
            return "function" == typeof t ? t : void 0
        };
    t.exports = function(t, e) {
        return arguments.length < 2 ? o(n[t]) || o(a[t]) : n[t] && n[t][e] || a[t] && a[t][e]
    }
}, , , , function(t, e, i) {
    var n = i(11),
        a = i(22).f,
        o = Function.prototype,
        r = o.toString,
        s = /^\s*function ([^ (]*)/;
    !n || "name" in o || a(o, "name", {
        configurable: !0,
        get: function() {
            try {
                return r.call(this).match(s)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function(t, e, i) {
    var n = i(9),
        a = i(17),
        o = n.document,
        r = a(o) && a(o.createElement);
    t.exports = function(t) {
        return r ? o.createElement(t) : {}
    }
}, function(t, e, i) {
    var n = i(69),
        a = i(65).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return n(t, a)
    }
}, function(t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, , , function(t, e, i) {
    var n = i(18),
        a = i(26),
        o = i(92).indexOf,
        r = i(42);
    t.exports = function(t, e) {
        var i, s = a(t),
            c = 0,
            d = [];
        for (i in s) !n(r, i) && n(s, i) && d.push(i);
        for (; e.length > c;) n(s, i = e[c++]) && (~o(d, i) || d.push(i));
        return d
    }
}, function(t, e, i) {
    var n = i(10),
        a = /#|\.prototype\./,
        o = function(t, e) {
            var i = s[r(t)];
            return i == d || i != c && ("function" == typeof e ? n(e) : !!e)
        },
        r = o.normalize = function(t) {
            return String(t).replace(a, ".").toLowerCase()
        },
        s = o.data = {},
        c = o.NATIVE = "N",
        d = o.POLYFILL = "P";
    t.exports = o
}, function(t, e, i) {
    var n = i(9),
        a = i(38),
        o = n["__core-js_shared__"] || a("__core-js_shared__", {});
    t.exports = o
}, function(t, e, i) {
    var n = i(9),
        a = i(46),
        o = n.WeakMap;
    t.exports = "function" == typeof o && /native code/.test(a.call(o))
}, function(t, e, i) {
    var n = i(30),
        a = Math.max,
        o = Math.min;
    t.exports = function(t, e) {
        var i = n(t);
        return i < 0 ? a(i + e, 0) : o(i, e)
    }
}, function(t, e, i) {
    "use strict";
    var n = i(15),
        a = i(75);
    n({
        target: "String",
        proto: !0,
        forced: i(76)("anchor")
    }, {
        anchor: function(t) {
            return a(this, "a", "name", t)
        }
    })
}, function(t, e, i) {
    var n = i(24),
        a = /"/g;
    t.exports = function(t, e, i, o) {
        var r = String(n(t)),
            s = "<" + e;
        return "" !== i && (s += " " + i + '="' + String(o).replace(a, "&quot;") + '"'), s + ">" + r + "</" + e + ">"
    }
}, function(t, e, i) {
    var n = i(10);
    t.exports = function(t) {
        return n((function() {
            var e = "" [t]('"');
            return e !== e.toLowerCase() || e.split('"').length > 3
        }))
    }
}, , , , , function(t, e, i) {
    var n = i(18),
        a = i(82),
        o = i(40),
        r = i(22);
    t.exports = function(t, e) {
        for (var i = a(e), s = r.f, c = o.f, d = 0; d < i.length; d++) {
            var l = i[d];
            n(t, l) || s(t, l, c(e, l))
        }
    }
}, function(t, e, i) {
    var n = i(58),
        a = i(64),
        o = i(66),
        r = i(19);
    t.exports = n("Reflect", "ownKeys") || function(t) {
        var e = a.f(r(t)),
            i = o.f;
        return i ? e.concat(i(t)) : e
    }
}, function(t, e, i) {
    t.exports = i(9)
}, , , , , , , , function(t, e, i) {
    var n = i(15),
        a = i(93);
    n({
        target: "Object",
        stat: !0,
        forced: Object.assign !== a
    }, {
        assign: a
    })
}, function(t, e, i) {
    var n = i(26),
        a = i(34),
        o = i(73),
        r = function(t) {
            return function(e, i, r) {
                var s, c = n(e),
                    d = a(c.length),
                    l = o(r, d);
                if (t && i != i) {
                    for (; d > l;)
                        if ((s = c[l++]) != s) return !0
                } else
                    for (; d > l; l++)
                        if ((t || l in c) && c[l] === i) return t || l || 0;
                return !t && -1
            }
        };
    t.exports = {
        includes: r(!0),
        indexOf: r(!1)
    }
}, function(t, e, i) {
    "use strict";
    var n = i(11),
        a = i(10),
        o = i(48),
        r = i(66),
        s = i(54),
        c = i(31),
        d = i(55),
        l = Object.assign;
    t.exports = !l || a((function() {
        var t = {},
            e = {},
            i = Symbol();
        return t[i] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) {
            e[t] = t
        })), 7 != l({}, t)[i] || "abcdefghijklmnopqrst" != o(l({}, e)).join("")
    })) ? function(t, e) {
        for (var i = c(t), a = arguments.length, l = 1, p = r.f, w = s.f; a > l;)
            for (var u, h = d(arguments[l++]), f = p ? o(h).concat(p(h)) : o(h), g = f.length, m = 0; g > m;) u = f[m++], n && !w.call(h, u) || (i[u] = h[u]);
        return i
    } : l
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    "use strict";
    i.r(e);
    i(62), i(91), i(35), i(74), i(128);
    var n = function() {
        window.catpet = {}, window.catpet.idleTypes = ["idle", "sad", "sleep"], window.catpet.songElement = null, window.catpet.loadedImages = {}, window.catpet.getURL = function(t) {
            return "undefined" != typeof chrome && chrome.extension ? chrome.extension.getURL(t) : t
        }, window.catpet.width = 150, window.catpet.height = 125, window.catpet.hitPoisitons = {
            idle: {
                front: 30,
                back: 30,
                top: 50,
                bottom: 50
            },
            walk: {
                front: 30,
                back: 30,
                top: 50,
                bottom: 50
            },
            run: {
                front: 30,
                back: 30,
                top: 50,
                bottom: 50
            },
            lick: {
                front: 30,
                back: 30,
                top: 50,
                bottom: 50
            },
            sleep: {
                front: 30,
                back: 30,
                top: 50,
                bottom: 50
            }
        }, window.catpet.currentBubbleIndex = 1000000010, window.catpet.preload = function(t) {
            for (var e = 0; e < t.length; e++) window.catpet.loadedImages[t[e]] || (window.catpet.loadedImages[t[e]] = new Image, window.catpet.loadedImages[t[e]].src = t[e])
        }, window.catpet.isPlayground = !(!document.getElementById("catpet-playground") && !window.isCatpetPlayground), window.catpet.container = document.getElementById("catpet-playground") ? document.getElementById("play-area-inner") : document.body, window.catpet["external-holder"] = "catpet", window.catpet["bubble-holder"] = "catpet-bubble", window.catpet["bubble-holder-text"] = "catpet-bubble-text", window.catpet["pet-holder"] = "catpet_pet", window.catpet.bubbleWidth = 230, window.catpet.bubbleHeight = 200, window.catpet.isTabActive = !0, window.catpet.defaultCatID = "cat1", window.catpet.isDebug = null, window.catpet.availableFood = {
            chicken: {
                file_name: "chicken.png",
                class_name: "chicken"
            },
            fish: {
                file_name: "fish.png",
                class_name: "fish"
            },
            cheese: {
                file_name: "cheese.png",
                class_name: "cheese"
            },
            pizza: {
                file_name: "pizza.png",
                class_name: "pizza"
            },
            chocolate: {
                file_name: "chocolate.png",
                class_name: "chocolate"
            },
            donut: {
                file_name: "donut.png",
                class_name: "donut"
            }
        }, window.catpet.draggableElement = null, window.catpet.dragPositions = {
            x_pos: 0,
            y_pos: 0,
            x_elem: 0,
            y_elem: 0
        }, window.catpet.log = function(t) {
            (null == window.catpet.isDebug || window.catpet.isDebug) && console.debug("Debug:" + t)
        }, window.catpet.isPetActive = function(t) {
            return t = t || window.catpet.defaultCatID, !!window.catpet.activePets[t]
        }, window.catpet.menuHTML = "<div><div id='catpet-menu-header'><b>Meow pet menu</b><hr></div><ul><li id='catpet-hide-30'>Hide for 30 minutes</li><li id='catpet-feed'>Feed</li><li id='catpet-sleep'>Sleep</li><li id='catpet-lick'>Lick</li><li id='catpet-dance'>Dance</li></ul></div>", window.catpet.Pet = function() {
            this.browserPetData = {
                width: 150,
                height: 125,
                holderElement: null
            }, this.devTracker = null, this.catIsMine = !0, this.isBrowserPet = !1, this.lastSnowThrown = 0, this.walkingDots = [], this.walkingInfo = {
                destinationX: 0,
                destinationY: 0,
                speed: 3
            }, this.isDragging = !1, this.pingInterval = null, this.currentMovingActionInterval = null, this.currentAnimationTimeout = null, this.changeDanceInterval = null, this.animationName = null, this.clearBubbleTimeout = null, this.currentBubble = null, this.startPettingTimeout = null, this.pettingRewardInterval = null, this.rendererContainer = null, this.rendererPet = null, this.scale = .24, this.stats = {
                posLeft: null,
                direction: "right",
                posTop: null,
                walk: !0,
                talk: !0,
                hideUntil: 0,
                name: "",
                clowderName: "",
                idleType: "idle",
                level: null,
                skin: "grey",
                eyes: "",
                hat: ""
            };
            var t = this,
                e = function(t, e, i, n) {
                    var a = t - i,
                        o = e - n;
                    return Math.sqrt(a * a + o * o)
                },
                i = function(t) {
                    if (window.catpet.draggableElement) {
                        window.catpet.dragPositions.x_pos = document.all ? window.event.clientX : t.pageX, window.catpet.dragPositions.y_pos = document.all ? window.event.clientY : t.pageY;
                        var e = window.catpet.draggableElement;
                        e.style.left = window.catpet.dragPositions.x_pos - window.catpet.dragPositions.x_elem + "px", e.style.top = window.catpet.dragPositions.y_pos - window.catpet.dragPositions.y_elem + "px"
                    }
                },
                n = function() {
                    document.getElementById(window.catpet["external-holder"] + t.id).onmousedown = function(e) {
                        return 1 == e.which && (t.idle({
                            initiator: "Set drag"
                        }), function(e, i) {
                            t.isDragging = !0, window.catpet.draggableElement = i, window.catpet.dragPositions.x_pos = document.all ? window.event.clientX : e.pageX, window.catpet.dragPositions.y_pos = document.all ? window.event.clientY : e.pageY, window.catpet.dragPositions.x_elem = window.catpet.dragPositions.x_pos - i.offsetLeft, window.catpet.dragPositions.y_elem = window.catpet.dragPositions.y_pos - i.offsetTop
                        }(e, this)), window.catpet.killMeowContextMenu(), e.preventDefault(), !1
                    }, document.onmousemove = i
                };
            this.blink = function() {
                return !!t.rendererPet && ("idle" == t.stats.idleType && "idle" == t.animationName && (t.changeAnimation(0, "blink", !0, 0), void t.addAnimation(0, "idle", !0, 0)))
            }, this.blinkRandom = function() {
                1 === Math.ceil(3 * Math.random()) && t.blink(), setTimeout(t.blinkRandom, 2500 + Math.ceil(1e3 * Math.random()))
            }, this.initiate = function(e) {
                window.catpet.isPlayground || (t.pingInterval = setInterval((function() {
                    try {
                        chrome.runtime.sendMessage({
                            method: "PING"
                        }, (function(t) {}))
                    } catch (e) {
                        t.kill()
                    }
                }), 3e3)), setTimeout((function() {
                    t.blinkRandom()
                }), 2500 + Math.ceil(1e3 * Math.random())), e || (e = {
                    catID: ""
                }), e.uid && (this.uid = e.uid), e.userID && (this.userID = e.userID), this.isBrowserPet = e.browserPet || !1, this.id = e.catID, isNaN(e.locationX) || isNaN(e.locationY) || (t.stats.posLeft = e.locationX, t.stats.posTop = e.locationY), e.direction && (t.stats.direction = e.direction.toLowerCase()), e.clowderName && (this.stats.clowderName = e.clowderName), e.name && (this.stats.name = e.name), e.skin && (this.stats.skin = e.skin, "grey" != this.stats.skin && "default" != this.stats.skin || (this.stats.skin = "meow"), "black" == this.stats.skin ? this.stats.skin = "blacky" : "dog" == this.stats.skin ? this.stats.skin = "howie" : "ginger" == this.stats.skin ? this.stats.skin = "tigri" : "white" == this.stats.skin ? this.stats.skin = "milky" : "siames" == this.stats.skin && (this.stats.skin = "choco")), e.eyes && (this.stats.eyes = e.eyes), e.hat && (this.stats.hat = e.hat), e.level && (this.stats.level = e.level), e.userType && (this.stats.userType = e.userType), e.tagColor && (this.stats.tagColor = e.tagColor, "purple" == this.stats.tagColor && (this.stats.tagColor = "#c569d0"), "red" == this.stats.tagColor && (this.stats.tagColor = "#b22222")), void 0 !== e.catIsMine && (this.catIsMine = e.catIsMine), this.draw(), this.setEvents(), e.idleType && "sleep" == e.idleType ? t.sleep() : e.idleType && "sad" == e.idleType ? t.sad() : e.idleType && "dig" == e.idleType && t.dig(), window.catpet.isPlayground || window.catpet.preload([window.catpet.getURL("/images/icons/coin.png"), window.catpet.getURL("/images/icons/chicken.png"), window.catpet.getURL("/images/icons/fish.png")])
            }, this.sendPositionsToBG = function() {
                window.catpet.sendToBackground("updatePositions", {
                    posLeft: t.stats.posLeft,
                    posTop: t.stats.posTop,
                    initiator: "draw"
                }, (function(t) {}))
            }, this.changeSkin = function(e, i) {
                if ("grey" != e && "default" != e || (e = "meow"), "black" == e ? e = "blacky" : "dog" == e ? e = "howie" : "ginger" == e ? e = "tigri" : "white" == e ? e = "milky" : "siames" == e && (e = "choco"), window.RenderManager.resources.cat.spineData.findSkin("skins/" + e) || (e = "meow"), t.stats.skin = e, this.stats.eyes && !i) {
                    var n = "v1";
                    "tigri" != e && "husky" != e && "howie" != e && "choco" != e || (n = "v2");
                    for (var a = new PIXI.spine.core.Skin(this.uid || this.id), o = window.RenderManager.resources.cat.spineData.findSkin("skins/" + e), r = window.RenderManager.resources.cat.spineData.findSlot("Eyes").index, s = (window.RenderManager.resources.cat.spineData.findSlot("Hat").index, 0); s < o.attachments.length; s++) {
                        var c = Object.assign(!0, {}, o.attachments[s]);
                        if (s == r) {
                            var d = window.RenderManager.resources.cat.spineAtlas.findRegion("eyes/" + this.stats.eyes + "/" + n + "/open");
                            if (d) {
                                var l = new PIXI.spine.core.RegionAttachment(d.name);
                                (l = Object.assign(l, c.Open)).setRegion(d), c.Open = l
                            }
                            var p = window.RenderManager.resources.cat.spineAtlas.findRegion("eyes/" + this.stats.eyes + "/" + n + "/sad");
                            if (p) {
                                l = new PIXI.spine.core.RegionAttachment(p.name);
                                (l = Object.assign(l, c.Sad)).setRegion(p), c.Sad = l
                            }
                            var w = window.RenderManager.resources.cat.spineAtlas.findRegion("eyes/" + this.stats.eyes + "/" + n + "/tired");
                            if (w) {
                                l = new PIXI.spine.core.RegionAttachment(w.name);
                                (l = Object.assign(l, c.Tired)).setRegion(w), c.Tired = l
                            }
                        } else t.stats.hat;
                        a.attachments.push(c)
                    }
                    t.rendererPet.skeleton.setSkin(a), t.rendererPet.skeleton.setToSetupPose(), t.rendererPet.update(0)
                } else t.rendererPet.skeleton.setSkinByName("skins/" + e), t.rendererPet.skeleton.setToSetupPose(), t.rendererPet.update(0);
                t.stats.hat && t.rendererPet.skeleton.getAttachmentByName("Hat", t.stats.hat) && (t.rendererPet.skeleton.setAttachment("Hat", t.stats.hat), "hat1" != t.stats.hat && "hat2" != t.stats.hat && "hat22" != t.stats.hat && "hat23" != t.stats.hat && "hat24" != t.stats.hat && t.rendererPet.skeleton.setAttachment("Ear Left", null), "hat22" != t.stats.hat && "hat23" != t.stats.hat && "hat24" != t.stats.hat && t.rendererPet.skeleton.setAttachment("Ear Right", null), t.stats.hat && t.rendererPet.skeleton.getAttachmentByName("Hat-Back", t.stats.hat) && t.rendererPet.skeleton.setAttachment("Hat-Back", t.stats.hat));
                var u = document.getElementById("pet-external-" + t.id);
                u && (u.className = "pet-external " + t.stats.skin)
            }, this.draw = function() {
                var e = null != this.stats.posTop ? this.stats.posTop : Math.floor(Math.random() * (window.catpet.viewport().height + window.catpet.height / 2) + 1),
                    i = null != this.stats.posLeft ? this.stats.posLeft : Math.floor(Math.random() * (window.catpet.viewport().width - window.catpet.width) + 1);
                this.stats.posTop && this.stats.posLeft || (this.stats.posTop = e, this.stats.posLeft = i, this.sendPositionsToBG());
                Object.assign(!0, {}, RenderManager.resources.cat.spineData);
                var n = new PIXI.spine.Spine(RenderManager.resources.cat.spineData);
                n.filters = [];
                var a = ["idle", "walk", "run", "dance", "dance-rock", "dance-tap", "throw", "bite", "chew", "blink", "wave", "hurt", "laugh", "karate"],
                    o = ["sad"],
                    r = ["sleep", "lick", "dig"];
                for (var s in a) {
                    for (var c in a) n.stateData.setMix(a[s], a[c], .2);
                    for (var d in o) n.stateData.setMix(a[s], o[d], .2);
                    for (var l in r) n.stateData.setMix(a[s], r[l], .4)
                }
                for (var s in o) {
                    for (var p in a) n.stateData.setMix(o[s], a[p], .2);
                    for (var w in o) n.stateData.setMix(o[s], o[w], .2);
                    for (var u in r) n.stateData.setMix(o[s], r[u], .2)
                }
                for (var s in r) {
                    for (var h in a) n.stateData.setMix(r[s], a[h], .4);
                    for (var f in o) n.stateData.setMix(r[s], o[f], .3);
                    for (var g in r) n.stateData.setMix(r[s], r[g], .4)
                }
                n.state.addListener({
                    event: function(t, e) {},
                    complete: function(t) {},
                    start: function(e) {
                        t.animationName = e.animation.name
                    },
                    end: function(t) {},
                    dispose: function(t) {},
                    interrupted: function(t) {}
                }), "left" == t.stats.direction ? n.scale.x = -this.scale : n.scale.x = this.scale, n.scale.y = this.scale, n.autoUpdate = !0, n.interactive = !0;
                var m = new PIXI.Container;
                m.parentLayer = window.RenderManager.layer, m.zOrder = ++window.RenderManager.currzIndex;
                var v = new PIXI.Container;
                m.addChild(n);
                var b = new PIXI.Text(this.stats.name, this.tagStyle());
                b.anchor.x = .5, b.y = 5;
                var y = new PIXI.Text(this.stats.level + " |", {
                    fontSize: 13,
                    fill: "#732a2a",
                    align: "right",
                    fontFamily: "Arial",
                    fontWeight: "bold"
                });
                y.x = -4 - b.width / 2, y.y = 5, y.anchor.x = 1;
                var P = new PIXI.Text(this.stats.clowderName, {
                    fontSize: 12,
                    fill: "#000",
                    fillGradientType: 1,
                    fontWeight: "bold",
                    align: "center"
                });
                if (P.anchor.x = .5, P.y = 20, v.addChild(b, y, P), v.x = 10, t.isBrowserPet || m.addChild(v), t.rendererContainer = m, t.rendererPet = n, t.rendererLevel = y, t.rendererName = b, t.rendererClowder = P, t.changeSkin(this.stats.skin, !1), !window.catpet.isPlayground) {
                    var T = document.createElement("div");
                    T.id = window.catpet["external-holder"] + t.id, window.catpet.isPlayground ? T.style = "position:absolute;top:" + positionTop + ";left:" + positionLeft + ";" : T.style = "z-index:99999;position:fixed;top:" + t.stats.posTop + "px;left:" + t.stats.posLeft + "px;", RenderManager.pgWorld.view.id = window.catpet["pet-holder"] + t.id;
                    var k = "<div class='catpet-bubble' id='" + window.catpet["bubble-holder"] + t.id + "'><div class='catpet-bubble-text' id='" + window.catpet["bubble-holder-text"] + t.id + "'></div></div>";
                    T.innerHTML = k, T.appendChild(RenderManager.pgWorld.view), T.className = "catpet", window.catpet.container.appendChild(T), this.browserPetData.holderElement = T
                }
                t.reposition(!0, !1, !1), RenderManager.containers.pets.addChild(m), t.idle({
                    initiator: "draw"
                })
            }, this.tagStyle = function() {
                return {
                    fontSize: 12,
                    fill: "rainbow" == t.stats.tagColor ? ["#b22222", "orange", "#f6c802", "green", "#061dbf", "#c569d0", "violet"] : t.stats.tagColor,
                    fillGradientType: 1,
                    align: "right",
                    fontWeight: "bold"
                }
            }, this.contextMenuToggle = function(e, i, n) {
                var a = 220,
                    o = 170;
                "pg-self" == n && (a = 200, o = 200);
                var r = document.getElementById("catpet-menu");
                if (r && r.remove(), "close" != i) {
                    var s = e.clientX,
                        c = e.clientY;
                    window.catpet.viewport().width - e.clientX < a && (s -= a), window.catpet.viewport().height - e.clientY < o && (c -= o), (r = document.createElement("div")).id = "catpet-menu", r.style = "position:fixed;top:" + c + "px;left:" + s + "px;z-index:1500000010", "pg-self" == n || (r.innerHTML = window.catpet.menuHTML, document.body.appendChild(r)), "pg-self" == n || (document.getElementById("catpet-hide-30").addEventListener("click", (function() {
                        window.catpet.killMeowContextMenu(), window.catpet.sendToBackground("hide-30-min", {}, (function(t) {}))
                    })), document.getElementById("catpet-feed").addEventListener("click", (function() {
                        window.catpet.killMeowContextMenu(), window.catpet.activePets[t.id].eat()
                    })), document.getElementById("catpet-sleep").addEventListener("click", (function() {
                        window.catpet.killMeowContextMenu(), window.catpet.sendToBackground("put-to-sleep")
                    })), document.getElementById("catpet-dance").addEventListener("click", (function() {
                        window.catpet.killMeowContextMenu(), window.catpet.activePets[t.id].dance(!0)
                    })), document.getElementById("catpet-lick").addEventListener("click", (function() {
                        window.catpet.killMeowContextMenu(), window.catpet.activePets[t.id].lick()
                    })))
                }
            }, this.redrawPet = function() {
                t.hide(), t.draw(), t.setEvents(!0)
            }, this.setEvents = function(e) {
                window.catpet.isPlayground || (n(), document.getElementById(window.catpet["pet-holder"] + t.id).addEventListener("mouseover", (function(e) {
                    t.startPettingTimeout = setTimeout((function() {
                        t.pet()
                    }), 1500)
                })), document.getElementById(window.catpet["pet-holder"] + t.id).addEventListener("mouseout", (function(e) {
                    t.startPettingTimeout && (clearTimeout(t.startPettingTimeout), t.startPettingTimeout = null), "petting" == t.animationName && t.idle({
                        initiator: "Petting done"
                    })
                }))), e || window.catpet.isPlayground || document.addEventListener("contextmenu", (function(e) {
                    for (var i = !1, n = 0; n < e.path.length; n++)
                        if (e.path[n].id == window.catpet["external-holder"] + t.id || e.path[n].id == window.catpet["bubble-holder"] + t.id || "catpet-menu" == e.path[n].id) {
                            i = !0;
                            break
                        } i && e.preventDefault()
                }), !0), window.catpet.isPlayground || (document.getElementById(window.catpet["pet-holder"] + t.id).addEventListener("mouseup", (function(e) {
                    if (3 == e.which) return t.contextMenuToggle(e), e.preventDefault(), e.stopPropagation(), !1;
                    window.catpet.killMeowContextMenu()
                })), document.getElementById(window.catpet["pet-holder"] + t.id).addEventListener("contextmenu", (function(t) {
                    t.preventDefault()
                })))
            }, this.loadDataFromLocalStorage = function(t) {
                try {
                    this.stats.posLeft = t.posLeft, this.stats.posTop = t.posTop, this.stats.hideUntil = t.hideUntil, this.stats.walk = t.walk, void 0 === t.walkType && void 0 !== t.walk && 1 == t.walk || "WALK" == t.walkType ? this.stats.walkType = "WALK" : "EDGES" == t.walkType || "BOTTOM" == t.walkType ? this.stats.walkType = t.walkType : this.stats.walkType = "FALSE", "BOTTOM" == this.stats.walkType && (this.stats.posTop = window.catpet.viewport().height), this.stats.talk = t.talk, t.idleType && (this.stats.idleType = t.idleType), t.skin && (this.stats.skin = t.skin), t.hat && (this.stats.hat = t.hat), t.eyes && (this.stats.eyes = t.eyes)
                } catch (t) {
                    window.catpet.log("Failed loading data", t)
                }
            }, this.drawPositions = function() {
                window.catpet.isPlayground ? (t.rendererContainer.position.x = this.stats.posLeft, t.rendererContainer.position.y = this.stats.posTop, this.catIsMine) : (t.rendererContainer.position.x = this.browserPetData.width / 2, t.rendererContainer.position.y = this.browserPetData.height, this.browserPetData.holderElement.style.left = this.stats.posLeft - this.browserPetData.width / 2 + "px", this.browserPetData.holderElement.style.top = this.stats.posTop - this.browserPetData.height + "px")
            }, this.fixPositions = function(e, i) {
                if (e || (i = {
                        x: this.stats.posLeft,
                        y: this.stats.posTop
                    }), window.catpet.viewport().width < i.x + Math.abs(t.rendererPet.width / 2) ? i.x = window.catpet.viewport().width - Math.abs(t.rendererPet.width / 2) : i.x - Math.abs(t.rendererPet.width / 2) < 0 && (i.x = Math.abs(t.rendererPet.width / 2)), i.y - t.rendererPet.height < 0 ? i.y = t.rendererPet.height : window.catpet.viewport().height < i.y ? i.y = window.catpet.viewport().height : "BOTTOM" == t.stats.walkType ? i.y = window.catpet.viewport().height : "EDGES" == t.stats.walkType && t.stats.posTop > this.browserPetData.height && t.stats.posTop < window.catpet.viewport().height && t.stats.posLeft > this.browserPetData.width / 2 && t.stats.posLeft < window.catpet.viewport().width - this.browserPetData.width / 2 && (i.y = window.catpet.viewport().height), e) return i;
                this.stats.posLeft = i.x, this.stats.posTop = i.y
            }, this.reposition = function(e, i, n) {
                void 0 === n && (n = !1), t.rendererPet && (this.currentMovingActionInterval && t.idle({
                    report: n
                }), this.fixPositions(), e && window.catpet && window.catpet.isPetActive(t.id) && t.rendererPet && t.drawPositions(), i && !window.catpet.isPlayground && t.sendPositionsToBG())
            }, this.didItemHitCat = function(e) {
                var i = {
                    id: null,
                    dist: 0
                };
                for (var n in e.x = parseInt(e.x), e.startX = parseInt(e.startX), e.startY = parseInt(e.startY), e.startDir = e.startDir, window.catpet.activePets) {
                    if (n != e.exclude)
                        if (!(e.peacefulTargets && e.peacefulTargets.indexOf(n) > -1))
                            if (!e.skipSad || "sad" != window.catpet.activePets[n].stats.idleType && "hurt" != window.catpet.activePets[n].animationName)
                                if (!(e.startX > window.catpet.activePets[n].stats.posLeft + 30 && "right" == e.startDir))
                                    if (!(e.startX < window.catpet.activePets[n].stats.posLeft - 30 && "left" == e.startDir)) window.catpet.activePets[n].rendererPet.getBounds().contains(e.x, e.y) && (i = {
                                        id: n
                                    })
                }
                return null != i.id && (t.catIsMine && window.catpetpg.socket.emit("hit", {
                    id: i.id
                }), !0)
            }, this.sayHTML = function(e, i) {
                var n = document.getElementById(window.catpet["bubble-holder"] + t.id),
                    a = document.getElementById(window.catpet["bubble-holder-text"] + t.id);
                if (n && a) {
                    n.style["z-index"] = window.catpet.currentBubbleIndex++, n.style.display = "flex";
                    n.style.left = "105px", n.style.top = "-140px", n.style.background = "url(" + window.catpet.getURL("/images/bubble.svg") + ")", n.className = "catpet-bubble", window.catpet.viewport().width - window.catpet.bubbleWidth - 105 <= this.stats.posLeft - this.browserPetData.width / 2 && window.catpet.bubbleHeight - 70 <= this.stats.posTop - this.browserPetData.height ? (n.className = "catpet-bubble l", n.style.background = "url(" + window.catpet.getURL("/images/bubble-l.svg") + ")", n.style.left = 10 - window.catpet.bubbleWidth + "px", n.style.top = "-140px") : window.catpet.viewport().width - window.catpet.bubbleWidth - 105 <= this.stats.posLeft - this.browserPetData.width / 2 && window.catpet.bubbleHeight - 70 > this.stats.posTop - this.browserPetData.height ? (n.className = "catpet-bubble bl", n.style.background = "url(" + window.catpet.getURL("/images/bubble-bl.svg") + ")", n.style.left = 10 - window.catpet.bubbleWidth + "px", n.style.top = "70px") : window.catpet.bubbleHeight - 70 > this.stats.posTop - this.browserPetData.height && (n.className = "catpet-bubble br", n.style.background = "url(" + window.catpet.getURL("/images/bubble-br.svg") + ")", n.style.left = "105px", n.style.top = "70px"), a.innerHTML = e, this.clearBubbleTimeout && clearTimeout(this.clearBubbleTimeout), this.clearBubbleTimeout = setTimeout((function() {
                        n.style.display = "none"
                    }), 5e3)
                }
            }, this.say = function(e, i) {
                if (window.catpet.isPlayground) {
                    this.dismissBubble(), t.currentBubble = new PIXI.Container, t.currentBubble.parentLayer = window.RenderManager.layer, t.currentBubble.zOrder = ++window.RenderManager.currzIndex + 1e4;
                    var n = new PIXI.Text(e, {
                        fontSize: 16,
                        fill: "#000",
                        align: "center",
                        fontFamily: "arial",
                        wordWrap: !0,
                        wordWrapWidth: window.catpet.bubbleWidth - 30,
                        breakWords: !0
                    });
                    if (n.x = window.catpet.bubbleWidth / 2, n.y = window.catpet.bubbleHeight / 2 - 20, n.anchor.set(.5), (window.catpet.viewport().width - window.catpet.bubbleWidth - 60 <= this.stats.posLeft || "left" == t.stats.direction && this.stats.posLeft - window.catpet.bubbleWidth - 60 > 0) && window.catpet.bubbleHeight <= this.stats.posTop - t.rendererContainer.height + 60)(a = PIXI.Sprite.from("/images/bubble-l.png")).width = window.catpet.bubbleWidth, a.height = window.catpet.bubbleHeight, t.currentBubble.y = -1 * window.catpet.bubbleHeight - t.rendererContainer.height + 60, t.currentBubble.x = -window.catpet.bubbleWidth - 60;
                    else if ((window.catpet.viewport().width - window.catpet.bubbleWidth - 60 <= this.stats.posLeft || "left" == t.stats.direction && this.stats.posLeft - window.catpet.bubbleWidth - 60 > 0) && window.catpet.bubbleHeight > this.stats.posTop - t.rendererContainer.height + 60) {
                        (a = PIXI.Sprite.from("/images/bubble-bl.png")).width = window.catpet.bubbleWidth, a.height = window.catpet.bubbleHeight, t.currentBubble.y = -1 * t.rendererContainer.height + 70, t.currentBubble.x = -window.catpet.bubbleWidth - 60, n.y = window.catpet.bubbleHeight / 2 + 20
                    } else if (window.catpet.bubbleHeight > this.stats.posTop - t.rendererContainer.height + 60) {
                        (a = PIXI.Sprite.from("/images/bubble-br.png")).width = window.catpet.bubbleWidth, a.height = window.catpet.bubbleHeight, t.currentBubble.y = -1 * t.rendererContainer.height + 70, t.currentBubble.x = t.rendererContainer.width - 60, n.y = window.catpet.bubbleHeight / 2 + 20
                    } else {
                        var a;
                        (a = PIXI.Sprite.from("/images/bubble.png")).width = window.catpet.bubbleWidth, a.height = window.catpet.bubbleHeight, t.currentBubble.y = -1 * window.catpet.bubbleHeight - t.rendererContainer.height + 60, t.currentBubble.x = t.rendererContainer.width - 60
                    }
                    t.currentBubble.addChild(a, n), t.currentBubble.alpha = .9, t.rendererContainer.addChild(t.currentBubble), this.clearBubbleTimeout = setTimeout((function() {
                        t.currentBubble.parent.removeChild(t.currentBubble), t.clearBubbleTimeout = null, t.currentBubble = null
                    }), 5e3)
                } else this.sayHTML(e, i)
            }, this.dismissBubble = function() {
                t.clearBubbleTimeout && (clearTimeout(this.clearBubbleTimeout), t.clearBubbleTimeout = null), t.currentBubble && (t.currentBubble.parent.removeChild(t.currentBubble), t.currentBubble = null)
            }, this.isHurt = function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                t.clearAllActions(), t.catIsMine && window.catpetpg.socket.emit("hit_confirm"), window.catpet.isPetActive(t.id) && ("left" == t.stats.direction ? t.rendererPet.scale.x = -1 * t.scale : t.rendererPet.scale.x = t.scale), t.changeAnimation(0, "hurt", !1, 0), "idle" == t.stats.idleType && (t.stats.idleType = "sad"), t.currentAnimationTimeout = setTimeout((function() {
                    t.idle({
                        type: t.stats.idleType,
                        report: window.catpet.isPlayground && t.catIsMine
                    })
                }), 1500)
            }, this.pet = function() {
                "sleep" != t.stats.idleType && (this.clearAllActions(), t.animationName = "pet", window.catpet.isPetActive(t.id) && t.changeAnimation(0, "petting", !0, 0), t.pettingRewardInterval = setInterval((function() {
                    window.catpet.sendToBackground("petting")
                }), 1e3))
            }, this.diggingFound = function(e) {
                var i = PIXI.Sprite.from("/images/icons/32/" + e.img);
                i.width = 24, i.height = 24, i.x = t.stats.posLeft, i.y = t.stats.posTop - 15, RenderManager.pgWorld.stage.addChild(i);
                var n = setInterval((function() {
                    i.y--, i.alpha -= .01
                }), 40);
                setTimeout((function() {
                    n && clearInterval(n), i && i.parent && i.parent.removeChild(i)
                }), 2e3)
            }, this.disableAura = function() {
                t.rendererPet.filters = []
            }, this.activateAura = function(e) {
                t.rendererPet.filters = [new GlowFilter(10, 2, 1, e, .2)]
            }, this.eat = function(e) {
                if ("hurt" == t.animationName || "throw" == t.animationName) return !1;
                this.stats.idleType, this.clearAllActions(), window.catpet.isPlayground && (t.stats.idleType = "idle");
                var i = !1;
                for (var n in window.catpet.availableFood) n === e && (i = !0);
                if (!e || !i) {
                    var a = Object.keys(window.catpet.availableFood);
                    e = window.catpet.availableFood[a[a.length * Math.random() << 0]].class_name
                }
                var o = PIXI.Sprite.from(window.catpet.getURL("/images/food/32/" + e + ".png"));
                o.texture.baseTexture.valid ? t.eatFinal(o) : o.texture.baseTexture.on("loaded", (function() {
                    t.eatFinal(o)
                }))
            }, this.eatFinal = function(e) {
                "left" == t.stats.direction ? e.x = -24 : e.x = 0, e.y = -42, e.width < e.height ? (e.width, e.width, e.height, e.height = 24) : (e.height, e.height, e.width, e.width = 24), t.rendererContainer.addChild(e);
                var i = function(i) {
                    "left" == t.stats.direction ? (e.x = e.x + .1 * i, e.y = e.y - .2 * i) : (e.x = e.x - .1 * i, e.y = e.y - .2 * i)
                };
                window.RenderManager.pgWorld.ticker.add(i), setTimeout((function() {
                    e.parent.removeChild(e), window.RenderManager.pgWorld.ticker.remove(i), t.catIsMine && window.catpet.sendToBackground("eat-request")
                }), 500), window.catpet.isPetActive(t.id) && t.changeAnimation(0, "bite", !1, 0), t.currentAnimationTimeout = setTimeout((function() {
                    t.chew()
                }), 1e3)
            }, this.chew = function() {
                this.clearAllActions(), window.catpet.isPetActive(t.id) && t.changeAnimation(0, "chew", !0, 0), t.currentAnimationTimeout = setTimeout((function() {
                    t.idle({
                        initiator: "Chew"
                    })
                }), 3e3)
            }, this.dig = function() {
                if ("hurt" == t.animationName || "throw" == t.animationName) return !1;
                this.clearAllActions(), window.catpet.isPlayground && (t.stats.idleType = "dig"), window.catpet.isPetActive(t.id) && t.changeAnimation(0, "dig", !0, 0)
            }, this.changeAnimation = function(e, i, n, a) {
                t.rendererPet && t.rendererPet.state.setAnimation(e, i, n, a)
            }, this.addAnimation = function(e, i, n, a) {
                t.rendererPet && t.rendererPet.state.addAnimation(e, i, n, a)
            }, this.wave = function() {
                if ("hurt" == t.animationName || "throw" == t.animationName) return !1;
                this.clearAllActions(), window.catpet.isPlayground && (t.stats.idleType = "idle"), window.catpet.isPetActive(t.id) && (t.changeAnimation(0, "wave", !0, 0), t.addAnimation(0, "idle", !0, 0))
            }, this.karate = function() {
                if ("hurt" == t.animationName || "throw" == t.animationName) return !1;
                this.clearAllActions(), window.catpet.isPlayground && (t.stats.idleType = "idle"), window.catpet.isPetActive(t.id) && (t.changeAnimation(0, "karate", !0, 0), t.addAnimation(0, "idle", !0, 0))
            }, this.laugh = function() {
                if ("hurt" == t.animationName || "throw" == t.animationName) return !1;
                this.clearAllActions(), window.catpet.isPlayground && (t.stats.idleType = "idle"), window.catpet.isPetActive(t.id) && (t.changeAnimation(0, "laugh", !0, 0), t.addAnimation(0, "idle", !0, 0))
            }, this.lick = function() {
                if ("hurt" == t.animationName || "throw" == t.animationName) return !1;
                this.clearAllActions(), window.catpet.isPlayground && (t.stats.idleType = "idle"), t.animationName = "lick", window.catpet.isPetActive(t.id) && t.changeAnimation(0, "lick", !0, 0), t.currentAnimationTimeout = setTimeout((function() {
                    t.idle({
                        initiator: "Lick"
                    })
                }), 1e4)
            }, this.petOther = function(e) {
                return "hurt" != t.animationName && "throw" != t.animationName && (e && window.catpet.activePets[e] ? "left" == t.stats.direction && t.stats.posLeft < window.catpet.activePets[e].stats.posLeft || "right" == t.stats.direction && t.stats.posLeft > window.catpet.activePets[e].stats.posLeft ? "You're not facing the target direction" : window.catpet.activePets[e].stats.posLeft >= t.stats.posLeft && window.catpet.activePets[e].stats.posLeft - t.stats.posLeft > 50 || window.catpet.activePets[e].stats.posLeft < t.stats.posLeft && t.stats.posLeft - window.catpet.activePets[e].stats.posLeft > 50 ? "You're too far away" : t.stats.posTop >= window.catpet.activePets[e].stats.posTop && t.stats.posTop - window.catpet.activePets[e].stats.posTop > 30 ? "You're too far away" : !(t.stats.posTop < window.catpet.activePets[e].stats.posTop && window.catpet.activePets[e].stats.posTop - t.stats.posTop > 30) || "You're too far away" : !e && (this.clearAllActions(), this.rendererContainer.zOrder = ++window.RenderManager.currzIndex, window.catpet.isPlayground && (t.stats.idleType = "idle"), t.animationName = "petother", window.catpet.isPetActive(t.id) && t.changeAnimation(0, "pet other", !0, 0), void(t.currentAnimationTimeout = setTimeout((function() {
                    t.idle({
                        initiator: "pet-other"
                    })
                }), 3e3))))
            }, this.dance = function(e, i) {
                if (void 0 === i && (i = "dance"), "hurt" == t.animationName || "throw" == t.animationName) return !1;
                if (this.clearAllActions({
                        keepAudio: !0
                    }), window.catpet.isPlayground && (t.stats.idleType = "idle"), t.animationName = "dance", "left" == t.stats.direction ? t.rendererPet.scale.x = -1 * t.scale : t.rendererPet.scale.x = t.scale, t.changeAnimation(0, i, !0, 0), e && (window.catpet.isPlayground || (window.catpet.songElement || (window.catpet.songElement = new Audio(window.catpet.getURL("/sound/cotton_eyed_joe.mp3")), window.catpet.songElement.addEventListener("ended", (function() {
                        this.currentTime = 0, this.play()
                    }), !1)), window.catpet.songElement.play()), window.catpet.isPlayground)) {
                    var n = document.getElementById("dance-audio");
                    n.play()
                }
                t.changeDanceInterval = setInterval((function() {
                    "dance" == i && "dance" == t.animationName && t.changeDanceDir(), t.catIsMine && window.catpet.sendToBackground("dancing")
                }), 2e3), t.currentAnimationTimeout = setTimeout((function() {
                    t.idle({
                        initiator: "Dance"
                    }), window.catpet.songElement && (window.catpet.songElement.currentTime = 0, window.catpet.songElement.pause()), n && (n.pause(), n.currentTime = 0)
                }), 21e3)
            }, this.changeDanceDir = function() {
                "right" == t.stats.direction ? (t.rendererPet.scale.x = -1 * t.scale, t.stats.direction = "left") : (t.rendererPet.scale.x = t.scale, t.stats.direction = "right")
            }, this.sad = function() {
                if ("hurt" == t.animationName) return !1;
                this.clearAllActions(), t.stats.idleType = "sad", window.catpet.isPetActive(t.id) && t.changeAnimation(0, "sad", !0, 0)
            }, this.sleep = function() {
                if ("hurt" == t.animationName || "throw" == t.animationName) return !1;
                this.clearAllActions(), t.stats.idleType = "sleep", window.catpet.isPetActive(t.id) && t.changeAnimation(0, "sleep", !0, 0)
            }, this.throwItem = function(e, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 ? arguments[3] : void 0;
                t.catIsMine && window.catpetpg.socket.emit("throw_confirm");
                var o = "knitball";
                return e && (o = e.className), t.clearAllActions(), t.lastSnowThrown = Date.now(), window.catpet.isPetActive(t.id) && t.changeAnimation(0, "throw", !1, 0), setTimeout((function() {
                    if ("hurt" != t.animationName) {
                        var e = PIXI.Sprite.from("/images/throw/32/" + o + ".png");
                        e.width = 24, e.height = 24;
                        var r = t.stats.posLeft,
                            s = t.stats.posTop;
                        e.x = r, e.y = s - 50, e.dir = t.stats.direction, "left" == t.stats.direction ? e.x += 25 : e.x += -25, e.pivot.x = e.width / 2, e.pivot.y = e.height / 2, e.rotation = 0, RenderManager.pgWorld.stage.addChild(e);
                        var c = t.stats.direction,
                            d = {
                                position: {
                                    x: e.x,
                                    y: e.y
                                },
                                velocity: {
                                    x: 9,
                                    y: -2
                                },
                                mass: 2.7,
                                radius: 8,
                                restitution: .7,
                                rotation: 0,
                                rotationIncrease: .1
                            };
                        "left" == e.dir && (d.velocity = {
                            x: -9,
                            y: -2
                        }, d.rotationIncrease = -.1);
                        var l = Math.PI * d.radius * d.radius / 1e4,
                            p = function o(p) {
                                var w = -.235 * l * 1.22 * d.velocity.x * d.velocity.x * d.velocity.x / Math.abs(d.velocity.x),
                                    u = -.235 * l * 1.22 * d.velocity.y * d.velocity.y * d.velocity.y / Math.abs(d.velocity.y);
                                w = isNaN(w) ? 0 : w, u = isNaN(u) ? 0 : u;
                                var h = w / d.mass,
                                    f = 14.81 + u / d.mass;
                                if (d.velocity.x += h * (1 / 150), d.velocity.y += f * (1 / 150), d.position.x += d.velocity.x * (1 / 150) * 100 * p, d.position.y += d.velocity.y * (1 / 150) * 100 * p, d.rotation = d.rotation + d.rotationIncrease, e.rotation = d.rotation, e.x = d.position.x, e.y = d.position.y, window.catpet.viewport().width < e.x || e.x < 0 || e.y < 0 || window.catpet.viewport().height < e.y || !i && t.didItemHitCat({
                                        x: e.x,
                                        y: e.y,
                                        exclude: t.id,
                                        startDir: c,
                                        startX: r,
                                        startY: s,
                                        skipSad: n,
                                        peacefulTargets: a
                                    })) {
                                    if (e && e.parent) {
                                        var g = new PIXI.AnimatedSprite(RenderManager.explosionTextures);
                                        g.animationSpeed = .25, g.x = e.x - g.width / 2, g.y = e.y - g.height / 2, g.loop = !1, g.scale.x = .5, g.scale.y = .5, g.play(), g.onComplete = function() {
                                            g.parent.removeChild(g)
                                        }, e.parent.addChild(g), e.parent.removeChild(e)
                                    }
                                    window.RenderManager.pgWorld.ticker.remove(o)
                                }
                            };
                        window.RenderManager.pgWorld.ticker.add(p), setTimeout((function() {
                            e && e.parent && e.parent.removeChild(e), window.RenderManager.pgWorld.ticker.remove(p)
                        }), 1e3)
                    }
                }), 350), t.currentAnimationTimeout = setTimeout((function() {
                    t.idle({
                        initiator: "Throw item",
                        type: "idle"
                    })
                }), 1100), !0
            }, this.updatePositions = function(t, e, i) {
                this.stats.posLeft = t, this.stats.posTop = e, this.reposition(!0, !1, i)
            }, this.walkAllowed = function() {
                return "hurt" != t.animationName && "throw" != t.animationName
            }, this.walk = function(e, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "walk";
                if ("hurt" == t.animationName || "throw" == t.animationName) return !1;
                if (!window.catpet.isPetActive(t.id)) return !1;
                t.clearAllActions(), t.stats.idleType = "idle";
                var a = this.fixPositions(!0, {
                    x: e,
                    y: i
                });
                e = a.x, i = a.y, t.walkingInfo = {
                    destinationX: e,
                    destinationY: i,
                    speed: "run" == n ? 6 : 3
                };
                this.stats.posLeft > e ? ("left" != t.stats.direction && !0, t.stats.direction = "left") : (this.stats.posLeft, "right" != t.stats.direction && !0, t.stats.direction = "right"), "left" == t.stats.direction ? t.rendererPet.scale.x = -1 * t.scale : t.rendererPet.scale.x = t.scale, t.changeAnimation(0, n, !0, 0);
                var o = 0;
                return this.currentMovingActionInterval = function(e) {
                    var i = Math.sqrt((t.stats.posLeft - t.walkingInfo.destinationX) * (t.stats.posLeft - t.walkingInfo.destinationX) + (t.stats.posTop - t.walkingInfo.destinationY) * (t.stats.posTop - t.walkingInfo.destinationY));
                    if (i <= 3) return window.RenderManager.pgWorld.ticker.remove(this.currentMovingActionInterval), this.currentMovingActionInterval = null, void t.idle({
                        initiator: "destination_reached",
                        report: !1
                    });
                    var n = (t.walkingInfo.destinationX - t.stats.posLeft) / i,
                        a = (t.walkingInfo.destinationY - t.stats.posTop) / i;
                    t.stats.posLeft += n * e * (t.walkingInfo.speed / 3), t.stats.posTop += a * e * (t.walkingInfo.speed / 3), t.drawPositions(), o++, !0 === t.catIsMine && window.catpet.isPlayground && o >= 60 && (o = 0, window.catpetpg.socket.emit("r_pos", [Math.round(t.stats.posLeft), Math.round(t.stats.posTop)]))
                }, window.RenderManager.pgWorld.ticker.add(this.currentMovingActionInterval), !0
            }, this.clearAllActions = function(e) {
                if (window.catpet.isPlayground || !t.catIsMine || !window.catpet.songElement || e && e.keepAudio || (window.catpet.songElement.currentTime = 0, window.catpet.songElement.pause()), window.catpet.isPlayground && t.catIsMine && (!e || !e.keepAudio)) {
                    var i = document.getElementById("dance-audio");
                    i && (i.pause(), i.currentTime = 0)
                }
                t.animationName = null, t.walkingDots = [], clearInterval(t.changeDanceInterval), window.RenderManager.pgWorld.ticker.remove(t.currentMovingActionInterval), clearInterval(t.pettingRewardInterval), clearTimeout(t.currentAnimationTimeout), clearTimeout(t.startPettingTimeout), t.startPettingTimeout = null, t.currentAnimationTimeout = null, t.currentMovingActionInterval = null
            }, this.idle = function(e) {
                e || (e = {}), void 0 === e.report && (e.report = !0), e.direction && (t.stats.direction = e.direction), e.type && (this.stats.idleType = e.type), t.clearAllActions(), window.catpet.isPetActive(t.id) && (t.changeAnimation(0, t.stats.idleType, !0, 0), window.catpet.isTabActive && !window.catpet.isPlayground && "destination_reached" == e.initiator ? window.catpet.sendToBackground("updatePositions", {
                    posLeft: t.stats.posLeft,
                    posTop: t.stats.posTop,
                    initiator: "idle"
                }, (function(t) {})) : window.catpet.isPlayground && t.catIsMine && e.report && window.catpetpg.socket.emit("action", {
                    name: t.stats.idleType,
                    x: t.stats.posLeft,
                    y: t.stats.posTop,
                    initiator: e.initiator
                }))
            }, this.randomEvent = function() {
                if (window.catpet.isPetActive(t.id) && !t.isDragging) {
                    var e = Math.floor(1200 * Math.random()) + 1;
                    e <= 50 && !window.catpet.isPlayground ? "FALSE" != t.stats.walkType && t.randomWalk() : e <= 60 && !window.catpet.isPlayground ? (t.stats.talk || void 0 === t.stats.talk) && t.randomTalk() : e <= 70 && e >= 61 && t.lick()
                }
            }, this.randomWalk = function(i) {
                if (!this.currentMovingActionInterval) {
                    var n = Math.floor(Math.random() * (window.catpet.viewport().width + 1)),
                        a = Math.floor(Math.random() * (window.catpet.viewport().height + 1));
                    if ("EDGES" == t.stats.walkType) {
                        var o = e(n, a, 0, a),
                            r = e(n, a, n, 0),
                            s = e(n, a, window.catpet.viewport().width, a),
                            c = e(n, a, n, window.catpet.viewport().height),
                            d = Math.min(o, r, s, c);
                        d == o && (n = 0), d == r && (a = 0), d == s && (n = window.catpet.viewport().width), d == c && (a = window.catpet.viewport().height)
                    } else "BOTTOM" == t.stats.walkType && (a = window.catpet.viewport().height);
                    i ? t.walk(n, a, "run") : t.walk(n, a, "walk")
                }
            }, this.hide = function() {
                if (window.catpet.isPetActive(t.id)) {
                    window.catpet.log("Hiding"), window.catpet.activePets[t.id].clearAllActions();
                    var e = document.getElementById("pet-external-" + t.id);
                    e && e.remove()
                } else window.catpet.log("Can't Hide inactive pet")
            }, this.changeTagColor = function(e) {
                t.stats.tagColor = e, t.rendererName.style = this.tagStyle()
            }, this.rename = function(e) {
                t.rendererName.text = e, this.setLevel(this.stats.level)
            }, this.renameClowder = function(e) {
                t.rendererClowder.text = e
            }, this.setLevel = function(e) {
                t.rendererLevel.text = e + " |", t.rendererLevel.x = -4 - t.rendererName.width / 2
            }, this.kill = function() {
                if (window.catpet.isPetActive(t.id)) {
                    window.catpet.log("Killing"), window.catpet.activePets[t.id].pingInterval && clearInterval(window.catpet.activePets[t.id].pingInterval), window.catpet.activePets[t.id].clearAllActions(), t.rendererContainer && t.rendererContainer.parent.removeChild(t.rendererContainer), delete window.catpet.activePets[t.id], t.devTracker && t.devTracker.parent.removeChild(t.devTracker);
                    var e = document.getElementById(window.catpet["external-holder"] + t.id);
                    e && e.remove()
                } else window.catpet.log("Can't kill inactive pet")
            }
        }, window.catpet.sendToBackground = function(t, e, i) {
            try {
                window.catpet.isPlayground ? window.postMessage({
                    method: t,
                    data: e
                }, "*") : chrome.runtime.sendMessage({
                    method: t,
                    data: e
                }, (function(t) {
                    i && i.call(this, t)
                }))
            } catch (t) {
                window.catpet.log("CatPet: Failed background request", t)
            }
        }, window.catpet.viewport = function() {
            var t = window.catpet.container;
            window.catpet.isPlayground || (t = window);
            var e = "inner";
            return "innerWidth" in window || (e = "client"), window.catpet.isPlayground ? {
                actualWidth: t[e + "Width"],
                actualHeight: t[e + "Height"],
                width: window.RenderManager.width,
                height: window.RenderManager.height
            } : {
                width: window[e + "Width"],
                height: window[e + "Height"]
            }
        }, window.catpet.killMeowContextMenu = function() {
            if (!window.catpet.isPlayground) {
                var t = document.getElementById("catpet-menu");
                t && t.remove()
            }
        }, window.catpet.activePets = {}
    };
    window.catpet || (n(), document.addEventListener("mouseup", (function(t) {
        if (window.catpet.draggableElement)
            for (var e in window.catpet.activePets) 1 == window.catpet.activePets[e].isDragging && (window.catpet.activePets[e].stats.posLeft = window.catpet.dragPositions.x_pos - window.catpet.dragPositions.x_elem, window.catpet.activePets[e].stats.posTop = window.catpet.dragPositions.y_pos - window.catpet.dragPositions.y_elem, window.catpet.isPlayground ? window.catpet.activePets[e].reposition(!0, !1) : (window.catpet.activePets[e].stats.posLeft += window.catpet.activePets[e].browserPetData.width / 2, window.catpet.activePets[e].stats.posTop += window.catpet.activePets[e].browserPetData.height, window.catpet.activePets[e].reposition(!0, !0)), window.catpet.draggableElement = null, window.catpet.activePets[e].isDragging = !1)
    })), window.catpet.isPlayground || (document.getElementsByTagName("body")[0].addEventListener("mousedown", (function(t) {
        for (var e = !1, i = 0; i < t.path.length; i++)
            if ("catpet-menu" == t.path[i].id) {
                e = !0;
                break
            } e || window.catpet.killMeowContextMenu()
    })), window.onfocus = function() {
        window.catpet.isTabActive = !0
    }, window.onblur = function() {
        window.catpet.isTabActive = !1
    }, window.onresize = function() {
        for (var t in window.catpet.activePets) window.catpet.activePets.hasOwnProperty(t) && window.catpet.activePets[t] && window.catpet.activePets[t].reposition(!0, !0)
    }), window.catpet.isPlayground || window.catpet.isPetActive() || chrome.runtime.onMessage.addListener((function(t, e, i) {
        if ("newActiveTab" == t.method) {
            if (!window.catpet.isPetActive(window.catpet.defaultCatID)) return;
            window.catpet.activePets[window.catpet.defaultCatID].loadDataFromLocalStorage(t.data), window.catpet.activePets[window.catpet.defaultCatID].reposition(!0, !1)
        } else if ("browser-assets-ready" == t.method) {
            if (null == t.data.pet) return;
            if (window.catpet.isPetActive()) return;
            window.catpet.isDebug = t.data.isDebug, window.catpet.log("Listen: Initiate request", t), t.data.pet.show && (new Date).getTime() > t.data.pet.hideUntil && (window.catpet.activePets[window.catpet.defaultCatID] = new window.catpet.Pet, window.catpet.activePets[window.catpet.defaultCatID].loadDataFromLocalStorage(t.data.pet), window.catpet.activePets[window.catpet.defaultCatID].initiate({
                catID: window.catpet.defaultCatID,
                browserPet: !0
            }))
        } else if ("hide" == t.method) window.catpet.log("Listen: Hide Pet Request"), window.catpet.activePets[window.catpet.defaultCatID] ? window.catpet.activePets[window.catpet.defaultCatID].kill() : window.catpet.log("Cat is not active");
        else if ("revive" == t.method) window.catpet.log("Listen: Revive Pet Request"), window.catpet.activePets[window.catpet.defaultCatID] && window.catpet.activePets[window.catpet.defaultCatID].kill(), window.catpet.activePets[window.catpet.defaultCatID] = new window.catpet.Pet, window.catpet.activePets[window.catpet.defaultCatID].loadDataFromLocalStorage(t.data), window.catpet.activePets[window.catpet.defaultCatID].initiate({
            catID: window.catpet.defaultCatID,
            browserPet: !0
        });
        else if ("update-options" == t.method) window.catpet.log("Listen: Update options"), window.catpet.activePets[window.catpet.defaultCatID].loadDataFromLocalStorage(t.data), window.catpet.activePets[window.catpet.defaultCatID].reposition(!0, !1);
        else if ("update-idle" == t.method) window.catpet.log("Listen: Update idle"), window.catpet.activePets[window.catpet.defaultCatID].loadDataFromLocalStorage(t.data), window.catpet.activePets[window.catpet.defaultCatID].idle({
            initiator: "Update idle request"
        });
        else if ("action" == t.method) {
            if (!window.catpet.isPetActive()) return;
            if ("talk" != t.data.name && "sleep" != t.data.name && (window.catpet.activePets[window.catpet.defaultCatID].startPettingTimeout || "petting" == window.catpet.activePets[window.catpet.defaultCatID].animationName || "dance" == window.catpet.activePets[window.catpet.defaultCatID].animationName || "lick" == window.catpet.activePets[window.catpet.defaultCatID].animationName)) return;
            var n = window.catpet.activePets[window.catpet.defaultCatID];
            switch (t.data.name) {
                case "walk":
                    "FALSE" != n.stats.walkType && n.randomWalk();
                    break;
                case "run":
                    "FALSE" != n.stats.walkType && n.randomWalk(1);
                    break;
                case "talk":
                    n && n.stats.talk && n.say(t.data.parameters.text);
                    break;
                case "lick":
                    n.lick();
                    break;
                case "sleep":
                    n.sleep();
                    break;
                case "sad":
                    n.sad()
            }
        }
        i({})
    })), window.catpet.isPlayground && window.catpet.preload([window.catpet.getURL("/images/icons/coin.png"), window.catpet.getURL("/images/icons/chicken.png"), window.catpet.getURL("/images/icons/fish.png"), window.catpet.getURL("/images/bubble.png"), window.catpet.getURL("/images/bubble-bl.png"), window.catpet.getURL("/images/bubble-br.png"), window.catpet.getURL("/images/bubble-l.png")]))
}, function(t, e, i) {
    "use strict";
    var n = i(15),
        a = i(75);
    n({
        target: "String",
        proto: !0,
        forced: i(76)("blink")
    }, {
        blink: function() {
            return a(this, "blink", "", "")
        }
    })
}]);