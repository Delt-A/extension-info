! function(t) {
    var e = {};

    function r(i) {
        if (e[i]) return e[i].exports;
        var n = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = t, r.c = e, r.d = function(t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) r.d(i, n, function(e) {
                return t[e]
            }.bind(null, n));
        return i
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "/", r(r.s = 352)
}({
    0: function(t, e, r) {
        "use strict";
        r.r(e), r.d(e, "BaseTextureCache", (function() {
            return N
        })), r.d(e, "CanvasRenderTarget", (function() {
            return X
        })), r.d(e, "DATA_URI", (function() {
            return Y
        })), r.d(e, "ProgramCache", (function() {
            return F
        })), r.d(e, "TextureCache", (function() {
            return L
        })), r.d(e, "clearTextureCache", (function() {
            return B
        })), r.d(e, "correctBlendMode", (function() {
            return T
        })), r.d(e, "createIndicesForQuads", (function() {
            return S
        })), r.d(e, "decomposeDataUri", (function() {
            return G
        })), r.d(e, "deprecation", (function() {
            return q
        })), r.d(e, "destroyTextureCache", (function() {
            return k
        })), r.d(e, "determineCrossOrigin", (function() {
            return H
        })), r.d(e, "getResolutionOfUrl", (function() {
            return W
        })), r.d(e, "hex2rgb", (function() {
            return v
        })), r.d(e, "hex2string", (function() {
            return y
        })), r.d(e, "isPow2", (function() {
            return R
        })), r.d(e, "isWebGLSupported", (function() {
            return g
        })), r.d(e, "log2", (function() {
            return D
        })), r.d(e, "nextPow2", (function() {
            return O
        })), r.d(e, "premultiplyBlendMode", (function() {
            return b
        })), r.d(e, "premultiplyRgba", (function() {
            return w
        })), r.d(e, "premultiplyTint", (function() {
            return E
        })), r.d(e, "premultiplyTintToRgba", (function() {
            return I
        })), r.d(e, "removeItems", (function() {
            return P
        })), r.d(e, "rgb2hex", (function() {
            return _
        })), r.d(e, "sayHello", (function() {
            return m
        })), r.d(e, "sign", (function() {
            return C
        })), r.d(e, "skipHello", (function() {
            return f
        })), r.d(e, "string2hex", (function() {
            return x
        })), r.d(e, "trimCanvas", (function() {
            return U
        })), r.d(e, "uid", (function() {
            return M
        }));
        var i = r(4);
        r.d(e, "isMobile", (function() {
            return i.a
        }));
        var n = r(94),
            o = r.n(n);
        r.d(e, "EventEmitter", (function() {
            return o.a
        }));
        var s = r(95),
            a = r.n(s);
        r.d(e, "earcut", (function() {
            return a.a
        }));
        var h = r(67),
            u = r.n(h);
        r.d(e, "url", (function() {
            return u.a
        }));
        var l = r(1);
        /*!
         * @pixi/utils - v5.2.0
         * Compiled Wed, 06 Nov 2019 02:32:43 UTC
         *
         * @pixi/utils is licensed under the MIT License.
         * http://www.opensource.org/licenses/mit-license
         */
        i.b.RETINA_PREFIX = /@([0-9\.]+)x/, i.b.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !0;
        var c, d = !1,
            p = "5.2.0";

        function f() {
            d = !0
        }

        function m(t) {
            if (!d) {
                if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                    var e = ["\n %c %c %c PixiJS " + p + " - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                    window.console.log.apply(console, e)
                } else window.console && window.console.log("PixiJS " + p + " - " + t + " - http://www.pixijs.com/");
                d = !0
            }
        }

        function g() {
            return void 0 === c && (c = function() {
                var t = {
                    stencil: !0,
                    failIfMajorPerformanceCaveat: i.b.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
                };
                try {
                    if (!window.WebGLRenderingContext) return !1;
                    var e = document.createElement("canvas"),
                        r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t),
                        n = !(!r || !r.getContextAttributes().stencil);
                    if (r) {
                        var o = r.getExtension("WEBGL_lose_context");
                        o && o.loseContext()
                    }
                    return r = null, n
                } catch (t) {
                    return !1
                }
            }()), c
        }

        function v(t, e) {
            return (e = e || [])[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
        }

        function y(t) {
            return t = t.toString(16), "#" + (t = "000000".substr(0, 6 - t.length) + t)
        }

        function x(t) {
            return "string" == typeof t && "#" === t[0] && (t = t.substr(1)), parseInt(t, 16)
        }

        function _(t) {
            return (255 * t[0] << 16) + (255 * t[1] << 8) + (255 * t[2] | 0)
        }
        var b = function() {
            for (var t = [], e = [], r = 0; r < 32; r++) t[r] = r, e[r] = r;
            t[l.b.NORMAL_NPM] = l.b.NORMAL, t[l.b.ADD_NPM] = l.b.ADD, t[l.b.SCREEN_NPM] = l.b.SCREEN, e[l.b.NORMAL] = l.b.NORMAL_NPM, e[l.b.ADD] = l.b.ADD_NPM, e[l.b.SCREEN] = l.b.SCREEN_NPM;
            var i = [];
            return i.push(e), i.push(t), i
        }();

        function T(t, e) {
            return b[e ? 1 : 0][t]
        }

        function w(t, e, r, i) {
            return r = r || new Float32Array(4), i || void 0 === i ? (r[0] = t[0] * e, r[1] = t[1] * e, r[2] = t[2] * e) : (r[0] = t[0], r[1] = t[1], r[2] = t[2]), r[3] = e, r
        }

        function E(t, e) {
            if (1 === e) return (255 * e << 24) + t;
            if (0 === e) return 0;
            var r = t >> 16 & 255,
                i = t >> 8 & 255,
                n = 255 & t;
            return (255 * e << 24) + ((r = r * e + .5 | 0) << 16) + ((i = i * e + .5 | 0) << 8) + (n = n * e + .5 | 0)
        }

        function I(t, e, r, i) {
            return (r = r || new Float32Array(4))[0] = (t >> 16 & 255) / 255, r[1] = (t >> 8 & 255) / 255, r[2] = (255 & t) / 255, (i || void 0 === i) && (r[0] *= e, r[1] *= e, r[2] *= e), r[3] = e, r
        }

        function S(t, e) {
            void 0 === e && (e = null);
            var r = 6 * t;
            if ((e = e || new Uint16Array(r)).length !== r) throw new Error("Out buffer length is incorrect, got " + e.length + " and expected " + r);
            for (var i = 0, n = 0; i < r; i += 6, n += 4) e[i + 0] = n + 0, e[i + 1] = n + 1, e[i + 2] = n + 2, e[i + 3] = n + 0, e[i + 4] = n + 2, e[i + 5] = n + 3;
            return e
        }

        function P(t, e, r) {
            var i, n = t.length;
            if (!(e >= n || 0 === r)) {
                var o = n - (r = e + r > n ? n - e : r);
                for (i = e; i < o; ++i) t[i] = t[i + r];
                t.length = o
            }
        }
        var A = 0;

        function M() {
            return ++A
        }

        function C(t) {
            return 0 === t ? 0 : t < 0 ? -1 : 1
        }

        function O(t) {
            return t += 0 === t, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) + 1
        }

        function R(t) {
            return !(t & t - 1 || !t)
        }

        function D(t) {
            var e = (t > 65535) << 4,
                r = ((t >>>= e) > 255) << 3;
            return e |= r, e |= r = ((t >>>= r) > 15) << 2, (e |= r = ((t >>>= r) > 3) << 1) | (t >>>= r) >> 1
        }
        var F = {},
            L = Object.create(null),
            N = Object.create(null);

        function k() {
            var t;
            for (t in L) L[t].destroy();
            for (t in N) N[t].destroy()
        }

        function B() {
            var t;
            for (t in L) delete L[t];
            for (t in N) delete N[t]
        }

        function U(t) {
            var e, r, i, n = t.width,
                o = t.height,
                s = t.getContext("2d"),
                a = s.getImageData(0, 0, n, o).data,
                h = a.length,
                u = {
                    top: null,
                    left: null,
                    right: null,
                    bottom: null
                },
                l = null;
            for (e = 0; e < h; e += 4) 0 !== a[e + 3] && (r = e / 4 % n, i = ~~(e / 4 / n), null === u.top && (u.top = i), null === u.left ? u.left = r : r < u.left && (u.left = r), null === u.right ? u.right = r + 1 : u.right < r && (u.right = r + 1), null === u.bottom ? u.bottom = i : u.bottom < i && (u.bottom = i));
            return null !== u.top && (n = u.right - u.left, o = u.bottom - u.top + 1, l = s.getImageData(u.left, u.top, n, o)), {
                height: o,
                width: n,
                data: l
            }
        }
        var X = function(t, e, r) {
                this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = r || i.b.RESOLUTION, this.resize(t, e)
            },
            V = {
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                }
            };
        X.prototype.clear = function() {
            this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }, X.prototype.resize = function(t, e) {
            this.canvas.width = t * this.resolution, this.canvas.height = e * this.resolution
        }, X.prototype.destroy = function() {
            this.context = null, this.canvas = null
        }, V.width.get = function() {
            return this.canvas.width
        }, V.width.set = function(t) {
            this.canvas.width = t
        }, V.height.get = function() {
            return this.canvas.height
        }, V.height.set = function(t) {
            this.canvas.height = t
        }, Object.defineProperties(X.prototype, V);
        var j, Y = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;

        function G(t) {
            var e = Y.exec(t);
            if (e) return {
                mediaType: e[1] ? e[1].toLowerCase() : void 0,
                subType: e[2] ? e[2].toLowerCase() : void 0,
                charset: e[3] ? e[3].toLowerCase() : void 0,
                encoding: e[4] ? e[4].toLowerCase() : void 0,
                data: e[5]
            }
        }

        function H(t, e) {
            if (void 0 === e && (e = window.location), 0 === t.indexOf("data:")) return "";
            e = e || window.location, j || (j = document.createElement("a")), j.href = t;
            var r = !(t = u.a.parse(j.href)).port && "" === e.port || t.port === e.port;
            return t.hostname === e.hostname && r && t.protocol === e.protocol ? "" : "anonymous"
        }

        function W(t, e) {
            var r = i.b.RETINA_PREFIX.exec(t);
            return r ? parseFloat(r[1]) : void 0 !== e ? e : 1
        }
        var z = {};

        function q(t, e, r) {
            if (void 0 === r && (r = 3), !z[e]) {
                var i = (new Error).stack;
                void 0 === i ? console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t) : (i = i.split("\n").splice(r).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", e + "\nDeprecated since v" + t), console.warn(i), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t), console.warn(i))), z[e] = !0
            }
        }
    },
    1: function(t, e, r) {
        "use strict";
        /*!
         * @pixi/constants - v5.2.0
         * Compiled Wed, 06 Nov 2019 02:32:43 UTC
         *
         * @pixi/constants is licensed under the MIT License.
         * http://www.opensource.org/licenses/mit-license
         */
        var i, n, o, s, a, h, u, l, c, d, p, f, m, g;
        r.d(e, "a", (function() {
                return p
            })), r.d(e, "b", (function() {
                return o
            })), r.d(e, "c", (function() {
                return s
            })), r.d(e, "d", (function() {
                return i
            })), r.d(e, "e", (function() {
                return a
            })), r.d(e, "f", (function() {
                return f
            })), r.d(e, "g", (function() {
                return g
            })), r.d(e, "h", (function() {
                return d
            })), r.d(e, "i", (function() {
                return m
            })), r.d(e, "j", (function() {
                return n
            })), r.d(e, "k", (function() {
                return l
            })), r.d(e, "l", (function() {
                return h
            })), r.d(e, "m", (function() {
                return u
            })), r.d(e, "n", (function() {
                return c
            })),
            function(t) {
                t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2"
            }(i || (i = {})),
            function(t) {
                t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS"
            }(n || (n = {})),
            function(t) {
                t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR"
            }(o || (o = {})),
            function(t) {
                t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
            }(s || (s = {})),
            function(t) {
                t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
            }(a || (a = {})),
            function(t) {
                t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
            }(h || (h = {})),
            function(t) {
                t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.FLOAT = 5126] = "FLOAT", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT"
            }(u || (u = {})),
            function(t) {
                t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR"
            }(l || (l = {})),
            function(t) {
                t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
            }(c || (c = {})),
            function(t) {
                t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON"
            }(d || (d = {})),
            function(t) {
                t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA"
            }(p || (p = {})),
            function(t) {
                t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL"
            }(f || (f = {})),
            function(t) {
                t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp"
            }(m || (m = {})),
            function(t) {
                t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE"
            }(g || (g = {}))
    },
    106: function(t, e, r) {
        (function(i, n) {
            var o;
            ! function(i) {
                var s = i.Promise,
                    a = s && "resolve" in s && "reject" in s && "all" in s && "race" in s && function() {
                        var t;
                        return new s((function(e) {
                            t = e
                        })), "function" == typeof t
                    }();
                e ? (e.Promise = a ? s : P, e.Polyfill = P) : void 0 === (o = function() {
                    return a ? s : P
                }.call(e, r, e, t)) || (t.exports = o);
                var h = "pending",
                    u = "sealed",
                    l = "fulfilled",
                    c = "rejected",
                    d = function() {};

                function p(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }
                var f, m = void 0 !== n ? n : setTimeout,
                    g = [];

                function v() {
                    for (var t = 0; t < g.length; t++) g[t][0](g[t][1]);
                    g = [], f = !1
                }

                function y(t, e) {
                    g.push([t, e]), f || (f = !0, m(v, 0))
                }

                function x(t) {
                    var e = t.owner,
                        r = e.state_,
                        i = e.data_,
                        n = t[r],
                        o = t.then;
                    if ("function" == typeof n) {
                        r = l;
                        try {
                            i = n(i)
                        } catch (t) {
                            w(o, t)
                        }
                    }
                    _(o, i) || (r === l && b(o, i), r === c && w(o, i))
                }

                function _(t, e) {
                    var r;
                    try {
                        if (t === e) throw new TypeError("A promises callback cannot return that same promise.");
                        if (e && ("function" == typeof e || "object" == typeof e)) {
                            var i = e.then;
                            if ("function" == typeof i) return i.call(e, (function(i) {
                                r || (r = !0, e !== i ? b(t, i) : T(t, i))
                            }), (function(e) {
                                r || (r = !0, w(t, e))
                            })), !0
                        }
                    } catch (e) {
                        return r || w(t, e), !0
                    }
                    return !1
                }

                function b(t, e) {
                    t !== e && _(t, e) || T(t, e)
                }

                function T(t, e) {
                    t.state_ === h && (t.state_ = u, t.data_ = e, y(I, t))
                }

                function w(t, e) {
                    t.state_ === h && (t.state_ = u, t.data_ = e, y(S, t))
                }

                function E(t) {
                    var e = t.then_;
                    t.then_ = void 0;
                    for (var r = 0; r < e.length; r++) x(e[r])
                }

                function I(t) {
                    t.state_ = l, E(t)
                }

                function S(t) {
                    t.state_ = c, E(t)
                }

                function P(t) {
                    if ("function" != typeof t) throw new TypeError("Promise constructor takes a function argument");
                    if (this instanceof P == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    this.then_ = [],
                        function(t, e) {
                            function r(t) {
                                w(e, t)
                            }
                            try {
                                t((function(t) {
                                    b(e, t)
                                }), r)
                            } catch (t) {
                                r(t)
                            }
                        }(t, this)
                }
                P.prototype = {
                    constructor: P,
                    state_: h,
                    then_: null,
                    data_: void 0,
                    then: function(t, e) {
                        var r = {
                            owner: this,
                            then: new this.constructor(d),
                            fulfilled: t,
                            rejected: e
                        };
                        return this.state_ === l || this.state_ === c ? y(x, r) : this.then_.push(r), r.then
                    },
                    catch: function(t) {
                        return this.then(null, t)
                    }
                }, P.all = function(t) {
                    if (!p(t)) throw new TypeError("You must pass an array to Promise.all().");
                    return new this((function(e, r) {
                        var i = [],
                            n = 0;

                        function o(t) {
                            return n++,
                                function(r) {
                                    i[t] = r, --n || e(i)
                                }
                        }
                        for (var s, a = 0; a < t.length; a++)(s = t[a]) && "function" == typeof s.then ? s.then(o(a), r) : i[a] = s;
                        n || e(i)
                    }))
                }, P.race = function(t) {
                    if (!p(t)) throw new TypeError("You must pass an array to Promise.race().");
                    return new this((function(e, r) {
                        for (var i, n = 0; n < t.length; n++)(i = t[n]) && "function" == typeof i.then ? i.then(e, r) : e(i)
                    }))
                }, P.resolve = function(t) {
                    return t && "object" == typeof t && t.constructor === this ? t : new this((function(e) {
                        e(t)
                    }))
                }, P.reject = function(t) {
                    return new this((function(e, r) {
                        r(t)
                    }))
                }
            }("undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : this)
        }).call(this, r(23), r(108).setImmediate)
    },
    107: function(t, e, r) {
        "use strict";
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */
        var i = Object.getOwnPropertySymbols,
            n = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable;

        function s(t) {
            if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }
        t.exports = function() {
            try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                        return e[t]
                    })).join("")) return !1;
                var i = {};
                return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                    i[t] = t
                })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
            } catch (t) {
                return !1
            }
        }() ? Object.assign : function(t, e) {
            for (var r, a, h = s(t), u = 1; u < arguments.length; u++) {
                for (var l in r = Object(arguments[u])) n.call(r, l) && (h[l] = r[l]);
                if (i) {
                    a = i(r);
                    for (var c = 0; c < a.length; c++) o.call(r, a[c]) && (h[a[c]] = r[a[c]])
                }
            }
            return h
        }
    },
    108: function(t, e, r) {
        (function(t) {
            var i = Function.prototype.apply;

            function n(t, e) {
                this._id = t, this._clearFn = e
            }
            e.setTimeout = function() {
                return new n(i.call(setTimeout, window, arguments), clearTimeout)
            }, e.setInterval = function() {
                return new n(i.call(setInterval, window, arguments), clearInterval)
            }, e.clearTimeout = e.clearInterval = function(t) {
                t && t.close()
            }, n.prototype.unref = n.prototype.ref = function() {}, n.prototype.close = function() {
                this._clearFn.call(window, this._id)
            }, e.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e
            }, e.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
            }, e._unrefActive = e.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout((function() {
                    t._onTimeout && t._onTimeout()
                }), e))
            }, r(130), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
        }).call(this, r(23))
    },
    12: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return i
        }));
        /*!
         * @pixi/runner - v5.2.0
         * Compiled Wed, 06 Nov 2019 02:32:43 UTC
         *
         * @pixi/runner is licensed under the MIT License.
         * http://www.opensource.org/licenses/mit-license
         */
        var i = function() {
            function t(t) {
                this.items = [], this._name = t, this._aliasCount = 0
            }
            return t.prototype.emit = function(t, e, r, i, n, o, s, a) {
                if (arguments.length > 8) throw new Error("max arguments reached");
                var h = this,
                    u = h.name,
                    l = h.items;
                this._aliasCount++;
                for (var c = 0, d = l.length; c < d; c++) l[c][u](t, e, r, i, n, o, s, a);
                return l === this.items && this._aliasCount--, this
            }, t.prototype.ensureNonAliasedItems = function() {
                this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0))
            }, t.prototype.add = function(t) {
                return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this
            }, t.prototype.remove = function(t) {
                var e = this.items.indexOf(t);
                return -1 !== e && (this.ensureNonAliasedItems(), this.items.splice(e, 1)), this
            }, t.prototype.contains = function(t) {
                return -1 !== this.items.indexOf(t)
            }, t.prototype.removeAll = function() {
                return this.ensureNonAliasedItems(), this.items.length = 0, this
            }, t.prototype.destroy = function() {
                this.removeAll(), this.items = null, this._name = null
            }, Object.defineProperty(t.prototype, "empty", {
                get: function() {
                    return 0 === this.items.length
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "name", {
                get: function() {
                    return this._name
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
        Object.defineProperties(i.prototype, {
            dispatch: {
                value: i.prototype.emit
            },
            run: {
                value: i.prototype.emit
            }
        })
    },
    129: function(t, e, r) {
        "use strict";
        (function(t) {
            var e = r(106),
                i = r(107),
                n = r.n(i);
            /*!
             * @pixi/polyfill - v5.2.0
             * Compiled Wed, 06 Nov 2019 02:32:43 UTC
             *
             * @pixi/polyfill is licensed under the MIT License.
             * http://www.opensource.org/licenses/mit-license
             */
            window.Promise || (window.Promise = e.Polyfill), Object.assign || (Object.assign = n.a);
            var o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
            if (Date.now && Date.prototype.getTime || (Date.now = function() {
                    return (new Date).getTime()
                }), !o.performance || !o.performance.now) {
                var s = Date.now();
                o.performance || (o.performance = {}), o.performance.now = function() {
                    return Date.now() - s
                }
            }
            for (var a = Date.now(), h = ["ms", "moz", "webkit", "o"], u = 0; u < h.length && !o.requestAnimationFrame; ++u) {
                var l = h[u];
                o.requestAnimationFrame = o[l + "RequestAnimationFrame"], o.cancelAnimationFrame = o[l + "CancelAnimationFrame"] || o[l + "CancelRequestAnimationFrame"]
            }
            o.requestAnimationFrame || (o.requestAnimationFrame = function(t) {
                if ("function" != typeof t) throw new TypeError(t + "is not a function");
                var e = Date.now(),
                    r = 16 + a - e;
                return r < 0 && (r = 0), a = e, setTimeout((function() {
                    a = Date.now(), t(performance.now())
                }), r)
            }), o.cancelAnimationFrame || (o.cancelAnimationFrame = function(t) {
                return clearTimeout(t)
            }), Math.sign || (Math.sign = function(t) {
                return 0 === (t = Number(t)) || isNaN(t) ? t : t > 0 ? 1 : -1
            }), Number.isInteger || (Number.isInteger = function(t) {
                return "number" == typeof t && isFinite(t) && Math.floor(t) === t
            }), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array), window.Uint8Array || (window.Uint8Array = Array), window.Int32Array || (window.Int32Array = Array)
        }).call(this, r(23))
    },
    13: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return c
        }));
        var i = r(2),
            n = r(0),
            o = r(3),
            s = r(1),
            a = r(6),
            h = r(4),
            u = new i.g,
            l = new Uint16Array([0, 1, 2, 0, 2, 3]),
            c = function(t) {
                function e(e) {
                    t.call(this), this._anchor = new i.e(this._onAnchorUpdate, this, e ? e.defaultAnchor.x : 0, e ? e.defaultAnchor.y : 0), this._texture = null, this._width = 0, this._height = 0, this._tint = null, this._tintRGB = null, this.tint = 16777215, this.blendMode = s.b.NORMAL, this.shader = null, this._cachedTint = 16777215, this.uvs = null, this.texture = e || o.E.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1, this._transformTrimmedID = -1, this._textureTrimmedID = -1, this.indices = l, this.size = 4, this.start = 0, this.pluginName = "batch", this.isSprite = !0, this._roundPixels = h.b.ROUND_PIXELS
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    roundPixels: {
                        configurable: !0
                    },
                    width: {
                        configurable: !0
                    },
                    height: {
                        configurable: !0
                    },
                    anchor: {
                        configurable: !0
                    },
                    tint: {
                        configurable: !0
                    },
                    texture: {
                        configurable: !0
                    }
                };
                return e.prototype._onTextureUpdate = function() {
                    this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = Object(n.sign)(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = Object(n.sign)(this.scale.y) * this._height / this._texture.orig.height)
                }, e.prototype._onAnchorUpdate = function() {
                    this._transformID = -1, this._transformTrimmedID = -1
                }, e.prototype.calculateVertices = function() {
                    var t = this._texture;
                    if (this._transformID !== this.transform._worldID || this._textureID !== t._updateID) {
                        this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = t._updateID;
                        var e = this.transform.worldTransform,
                            r = e.a,
                            i = e.b,
                            n = e.c,
                            o = e.d,
                            s = e.tx,
                            a = e.ty,
                            h = this.vertexData,
                            u = t.trim,
                            l = t.orig,
                            c = this._anchor,
                            d = 0,
                            p = 0,
                            f = 0,
                            m = 0;
                        if (u ? (d = (p = u.x - c._x * l.width) + u.width, f = (m = u.y - c._y * l.height) + u.height) : (d = (p = -c._x * l.width) + l.width, f = (m = -c._y * l.height) + l.height), h[0] = r * p + n * m + s, h[1] = o * m + i * p + a, h[2] = r * d + n * m + s, h[3] = o * m + i * d + a, h[4] = r * d + n * f + s, h[5] = o * f + i * d + a, h[6] = r * p + n * f + s, h[7] = o * f + i * p + a, this._roundPixels)
                            for (var g = 0; g < 8; g++) h[g] = Math.round(h[g])
                    }
                }, e.prototype.calculateTrimmedVertices = function() {
                    if (this.vertexTrimmedData) {
                        if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return
                    } else this.vertexTrimmedData = new Float32Array(8);
                    this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
                    var t = this._texture,
                        e = this.vertexTrimmedData,
                        r = t.orig,
                        i = this._anchor,
                        n = this.transform.worldTransform,
                        o = n.a,
                        s = n.b,
                        a = n.c,
                        h = n.d,
                        u = n.tx,
                        l = n.ty,
                        c = -i._x * r.width,
                        d = c + r.width,
                        p = -i._y * r.height,
                        f = p + r.height;
                    e[0] = o * c + a * p + u, e[1] = h * p + s * c + l, e[2] = o * d + a * p + u, e[3] = h * p + s * d + l, e[4] = o * d + a * f + u, e[5] = h * f + s * d + l, e[6] = o * c + a * f + u, e[7] = h * f + s * c + l
                }, e.prototype._render = function(t) {
                    this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
                }, e.prototype._calculateBounds = function() {
                    var t = this._texture.trim,
                        e = this._texture.orig;
                    !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
                }, e.prototype.getLocalBounds = function(e) {
                    return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new i.j), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
                }, e.prototype.containsPoint = function(t) {
                    this.worldTransform.applyInverse(t, u);
                    var e = this._texture.orig.width,
                        r = this._texture.orig.height,
                        i = -e * this.anchor.x,
                        n = 0;
                    return u.x >= i && u.x < i + e && (n = -r * this.anchor.y, u.y >= n && u.y < n + r)
                }, e.prototype.destroy = function(e) {
                    if (t.prototype.destroy.call(this, e), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, "boolean" == typeof e ? e : e && e.texture) {
                        var r = "boolean" == typeof e ? e : e && e.baseTexture;
                        this._texture.destroy(!!r)
                    }
                    this._texture = null, this.shader = null
                }, e.from = function(t, r) {
                    return new e(t instanceof o.E ? t : o.E.from(t, r))
                }, r.roundPixels.set = function(t) {
                    this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
                }, r.roundPixels.get = function() {
                    return this._roundPixels
                }, r.width.get = function() {
                    return Math.abs(this.scale.x) * this._texture.orig.width
                }, r.width.set = function(t) {
                    var e = Object(n.sign)(this.scale.x) || 1;
                    this.scale.x = e * t / this._texture.orig.width, this._width = t
                }, r.height.get = function() {
                    return Math.abs(this.scale.y) * this._texture.orig.height
                }, r.height.set = function(t) {
                    var e = Object(n.sign)(this.scale.y) || 1;
                    this.scale.y = e * t / this._texture.orig.height, this._height = t
                }, r.anchor.get = function() {
                    return this._anchor
                }, r.anchor.set = function(t) {
                    this._anchor.copyFrom(t)
                }, r.tint.get = function() {
                    return this._tint
                }, r.tint.set = function(t) {
                    this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)
                }, r.texture.get = function() {
                    return this._texture
                }, r.texture.set = function(t) {
                    this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = t || o.E.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                }, Object.defineProperties(e.prototype, r), e
            }(a.b)
    },
    130: function(t, e, r) {
        (function(t, e) {
            ! function(t, r) {
                "use strict";
                if (!t.setImmediate) {
                    var i, n, o, s, a, h = 1,
                        u = {},
                        l = !1,
                        c = t.document,
                        d = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? i = function(t) {
                        e.nextTick((function() {
                            f(t)
                        }))
                    } : ! function() {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0,
                                r = t.onmessage;
                            return t.onmessage = function() {
                                e = !1
                            }, t.postMessage("", "*"), t.onmessage = r, e
                        }
                    }() ? t.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(t) {
                        f(t.data)
                    }, i = function(t) {
                        o.port2.postMessage(t)
                    }) : c && "onreadystatechange" in c.createElement("script") ? (n = c.documentElement, i = function(t) {
                        var e = c.createElement("script");
                        e.onreadystatechange = function() {
                            f(t), e.onreadystatechange = null, n.removeChild(e), e = null
                        }, n.appendChild(e)
                    }) : i = function(t) {
                        setTimeout(f, 0, t)
                    } : (s = "setImmediate$" + Math.random() + "$", a = function(e) {
                        e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(s) && f(+e.data.slice(s.length))
                    }, t.addEventListener ? t.addEventListener("message", a, !1) : t.attachEvent("onmessage", a), i = function(e) {
                        t.postMessage(s + e, "*")
                    }), d.setImmediate = function(t) {
                        "function" != typeof t && (t = new Function("" + t));
                        for (var e = new Array(arguments.length - 1), r = 0; r < e.length; r++) e[r] = arguments[r + 1];
                        var n = {
                            callback: t,
                            args: e
                        };
                        return u[h] = n, i(h), h++
                    }, d.clearImmediate = p
                }

                function p(t) {
                    delete u[t]
                }

                function f(t) {
                    if (l) setTimeout(f, 0, t);
                    else {
                        var e = u[t];
                        if (e) {
                            l = !0;
                            try {
                                ! function(t) {
                                    var e = t.callback,
                                        i = t.args;
                                    switch (i.length) {
                                        case 0:
                                            e();
                                            break;
                                        case 1:
                                            e(i[0]);
                                            break;
                                        case 2:
                                            e(i[0], i[1]);
                                            break;
                                        case 3:
                                            e(i[0], i[1], i[2]);
                                            break;
                                        default:
                                            e.apply(r, i)
                                    }
                                }(e)
                            } finally {
                                p(t), l = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }).call(this, r(23), r(77))
    },
    131: function(t, e, r) {
        (function(t, i) {
            var n; /*! https://mths.be/punycode v1.4.1 by @mathias */
            ! function(o) {
                e && e.nodeType, t && t.nodeType;
                var s = "object" == typeof i && i;
                s.global !== s && s.window !== s && s.self;
                var a, h = 2147483647,
                    u = 36,
                    l = 1,
                    c = 26,
                    d = 38,
                    p = 700,
                    f = 72,
                    m = 128,
                    g = "-",
                    v = /^xn--/,
                    y = /[^\x20-\x7E]/,
                    x = /[\x2E\u3002\uFF0E\uFF61]/g,
                    _ = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    b = u - l,
                    T = Math.floor,
                    w = String.fromCharCode;

                function E(t) {
                    throw new RangeError(_[t])
                }

                function I(t, e) {
                    for (var r = t.length, i = []; r--;) i[r] = e(t[r]);
                    return i
                }

                function S(t, e) {
                    var r = t.split("@"),
                        i = "";
                    return r.length > 1 && (i = r[0] + "@", t = r[1]), i + I((t = t.replace(x, ".")).split("."), e).join(".")
                }

                function P(t) {
                    for (var e, r, i = [], n = 0, o = t.length; n < o;)(e = t.charCodeAt(n++)) >= 55296 && e <= 56319 && n < o ? 56320 == (64512 & (r = t.charCodeAt(n++))) ? i.push(((1023 & e) << 10) + (1023 & r) + 65536) : (i.push(e), n--) : i.push(e);
                    return i
                }

                function A(t) {
                    return I(t, (function(t) {
                        var e = "";
                        return t > 65535 && (e += w((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += w(t)
                    })).join("")
                }

                function M(t, e) {
                    return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                }

                function C(t, e, r) {
                    var i = 0;
                    for (t = r ? T(t / p) : t >> 1, t += T(t / e); t > b * c >> 1; i += u) t = T(t / b);
                    return T(i + (b + 1) * t / (t + d))
                }

                function O(t) {
                    var e, r, i, n, o, s, a, d, p, v, y, x = [],
                        _ = t.length,
                        b = 0,
                        w = m,
                        I = f;
                    for ((r = t.lastIndexOf(g)) < 0 && (r = 0), i = 0; i < r; ++i) t.charCodeAt(i) >= 128 && E("not-basic"), x.push(t.charCodeAt(i));
                    for (n = r > 0 ? r + 1 : 0; n < _;) {
                        for (o = b, s = 1, a = u; n >= _ && E("invalid-input"), ((d = (y = t.charCodeAt(n++)) - 48 < 10 ? y - 22 : y - 65 < 26 ? y - 65 : y - 97 < 26 ? y - 97 : u) >= u || d > T((h - b) / s)) && E("overflow"), b += d * s, !(d < (p = a <= I ? l : a >= I + c ? c : a - I)); a += u) s > T(h / (v = u - p)) && E("overflow"), s *= v;
                        I = C(b - o, e = x.length + 1, 0 == o), T(b / e) > h - w && E("overflow"), w += T(b / e), b %= e, x.splice(b++, 0, w)
                    }
                    return A(x)
                }

                function R(t) {
                    var e, r, i, n, o, s, a, d, p, v, y, x, _, b, I, S = [];
                    for (x = (t = P(t)).length, e = m, r = 0, o = f, s = 0; s < x; ++s)(y = t[s]) < 128 && S.push(w(y));
                    for (i = n = S.length, n && S.push(g); i < x;) {
                        for (a = h, s = 0; s < x; ++s)(y = t[s]) >= e && y < a && (a = y);
                        for (a - e > T((h - r) / (_ = i + 1)) && E("overflow"), r += (a - e) * _, e = a, s = 0; s < x; ++s)
                            if ((y = t[s]) < e && ++r > h && E("overflow"), y == e) {
                                for (d = r, p = u; !(d < (v = p <= o ? l : p >= o + c ? c : p - o)); p += u) I = d - v, b = u - v, S.push(w(M(v + I % b, 0))), d = T(I / b);
                                S.push(w(M(d, 0))), o = C(r, _, i == n), r = 0, ++i
                            }++ r, ++e
                    }
                    return S.join("")
                }
                a = {
                    version: "1.4.1",
                    ucs2: {
                        decode: P,
                        encode: A
                    },
                    decode: O,
                    encode: R,
                    toASCII: function(t) {
                        return S(t, (function(t) {
                            return y.test(t) ? "xn--" + R(t) : t
                        }))
                    },
                    toUnicode: function(t) {
                        return S(t, (function(t) {
                            return v.test(t) ? O(t.slice(4).toLowerCase()) : t
                        }))
                    }
                }, void 0 === (n = function() {
                    return a
                }.call(e, r, e, t)) || (t.exports = n)
            }()
        }).call(this, r(96)(t), r(23))
    },
    132: function(t, e, r) {
        "use strict";
        t.exports = {
            isString: function(t) {
                return "string" == typeof t
            },
            isObject: function(t) {
                return "object" == typeof t && null !== t
            },
            isNull: function(t) {
                return null === t
            },
            isNullOrUndefined: function(t) {
                return null == t
            }
        }
    },
    133: function(t, e, r) {
        "use strict";
        e.decode = e.parse = r(134), e.encode = e.stringify = r(135)
    },
    134: function(t, e, r) {
        "use strict";

        function i(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        t.exports = function(t, e, r, o) {
            e = e || "&", r = r || "=";
            var s = {};
            if ("string" != typeof t || 0 === t.length) return s;
            var a = /\+/g;
            t = t.split(e);
            var h = 1e3;
            o && "number" == typeof o.maxKeys && (h = o.maxKeys);
            var u = t.length;
            h > 0 && u > h && (u = h);
            for (var l = 0; l < u; ++l) {
                var c, d, p, f, m = t[l].replace(a, "%20"),
                    g = m.indexOf(r);
                g >= 0 ? (c = m.substr(0, g), d = m.substr(g + 1)) : (c = m, d = ""), p = decodeURIComponent(c), f = decodeURIComponent(d), i(s, p) ? n(s[p]) ? s[p].push(f) : s[p] = [s[p], f] : s[p] = f
            }
            return s
        };
        var n = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
    },
    135: function(t, e, r) {
        "use strict";
        var i = function(t) {
            switch (typeof t) {
                case "string":
                    return t;
                case "boolean":
                    return t ? "true" : "false";
                case "number":
                    return isFinite(t) ? t : "";
                default:
                    return ""
            }
        };
        t.exports = function(t, e, r, a) {
            return e = e || "&", r = r || "=", null === t && (t = void 0), "object" == typeof t ? o(s(t), (function(s) {
                var a = encodeURIComponent(i(s)) + r;
                return n(t[s]) ? o(t[s], (function(t) {
                    return a + encodeURIComponent(i(t))
                })).join(e) : a + encodeURIComponent(i(t[s]))
            })).join(e) : a ? encodeURIComponent(i(a)) + r + encodeURIComponent(i(t)) : ""
        };
        var n = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        };

        function o(t, e) {
            if (t.map) return t.map(e);
            for (var r = [], i = 0; i < t.length; i++) r.push(e(t[i], i));
            return r
        }
        var s = Object.keys || function(t) {
            var e = [];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
            return e
        }
    },
    136: function(t, e) {
        i || (i = {}), Object.assign(PIXI.Container.prototype, {
            render: function(t) {
                this._activeParentLayer && this._activeParentLayer != t._activeLayer || (this.visible ? (this.displayOrder = t.incDisplayOrder(), this.worldAlpha <= 0 || !this.renderable || (t._activeLayer = null, this.containerRenderWebGL(t), t._activeLayer = this._activeParentLayer)) : this.displayOrder = 0)
            },
            renderCanvas: function(t) {
                this._activeParentLayer && this._activeParentLayer != t._activeLayer || (this.visible ? (this.displayOrder = t.incDisplayOrder(), this.worldAlpha <= 0 || !this.renderable || (t._activeLayer = null, this.containerRenderCanvas(t), t._activeLayer = this._activeParentLayer)) : this.displayOrder = 0)
            },
            containerRenderWebGL: PIXI.Container.prototype.render,
            containerRenderCanvas: PIXI.Container.prototype.renderCanvas
        }), Object.assign(PIXI.DisplayObject.prototype, {
            parentLayer: null,
            _activeParentLayer: null,
            parentGroup: null,
            zOrder: 0,
            zIndex: 0,
            updateOrder: 0,
            displayOrder: 0,
            layerableChildren: !0,
            isLayer: !1
        }), PIXI.ParticleContainer ? PIXI.ParticleContainer.prototype.layerableChildren = !1 : PIXI.ParticleContainer && (PIXI.ParticleContainer.prototype.layerableChildren = !1);
        var r, i, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        ! function(t) {
            var e = function(t) {
                function e(e, r) {
                    var i = t.call(this) || this;
                    return i._activeLayer = null, i._activeStage = null, i._activeChildren = [], i._lastUpdateId = -1, i.useRenderTexture = !1, i.useDoubleBuffer = !1, i.sortPriority = 0, i.clearColor = new Float32Array([0, 0, 0, 0]), i.canDrawWithoutLayer = !1, i.canDrawInParentStage = !0, i.zIndex = 0, i.enableSort = !1, i._tempResult = [], i._tempZero = [], i.useZeroOptimization = !1, i.zIndex = e, i.enableSort = !!r, "function" == typeof r && i.on("sort", r), i
                }
                return n(e, t), e.prototype.doSort = function(t, r) {
                    if (this.listeners("sort", !0))
                        for (var i = 0; i < r.length; i++) this.emit("sort", r[i]);
                    this.useZeroOptimization ? this.doSortWithZeroOptimization(t, r) : r.sort(e.compareZIndex)
                }, e.compareZIndex = function(t, e) {
                    return t.zOrder < e.zOrder ? -1 : t.zOrder > e.zOrder ? 1 : t.updateOrder - e.updateOrder
                }, e.prototype.doSortWithZeroOptimization = function(t, e) {
                    throw new Error("not implemented yet")
                }, e.prototype.clear = function() {
                    this._activeLayer = null, this._activeStage = null, this._activeChildren.length = 0
                }, e.prototype.addDisplayObject = function(t, e) {
                    this.check(t), e._activeParentLayer = this._activeLayer, this._activeLayer ? this._activeLayer._activeChildren.push(e) : this._activeChildren.push(e)
                }, e.prototype.foundLayer = function(t, r) {
                    this.check(t), null != this._activeLayer && e.conflict(), this._activeLayer = r, this._activeStage = t
                }, e.prototype.foundStage = function(t) {
                    this._activeLayer || this.canDrawInParentStage || this.clear()
                }, e.prototype.check = function(t) {
                    if (this._lastUpdateId < e._layerUpdateId) this._lastUpdateId = e._layerUpdateId, this.clear(), this._activeStage = t;
                    else if (this.canDrawInParentStage) {
                        for (var r = this._activeStage; r && r != t;) r = r._activeParentStage;
                        if (this._activeStage = r, null == r) return void this.clear()
                    }
                }, e.conflict = function() {
                    e._lastLayerConflict + 5e3 < Date.now() && (e._lastLayerConflict = Date.now(), console.log("PIXI-display plugin found two layers with the same group in one stage - that's not healthy. Please place a breakpoint here and debug it"))
                }, e._layerUpdateId = 0, e._lastLayerConflict = 0, e
            }(PIXI.utils.EventEmitter);
            t.Group = e
        }(i || (i = {})),
        function(t) {
            function e(e, r, i, n, o) {
                this.search || (this.search = new t.LayersTreeSearch), this.search.findHit(e, r, i, n);
                var s = this.delayedEvents;
                if (s && s.length) {
                    e.stopPropagationHint = !1;
                    var a = s.length;
                    this.delayedEvents = [];
                    for (var h = 0; h < a; h++) {
                        var u = s[h],
                            l = u.displayObject,
                            c = u.eventString,
                            d = u.eventData;
                        d.stopsPropagatingAt === l && (d.stopPropagationHint = !0), this.dispatchEvent(l, c, d)
                    }
                }
            }
            t.processInteractive51 = e, t.patchInteractionManager = function(r) {
                r && (r.search ? r.search.worksWithDisplay || (r.search = new t.LayersTreeSearch) : r.processInteractive = e)
            }
        }(i || (i = {})),
        function(t) {
            var e = function() {
                function t(t) {
                    this.layer = t, this.renderTexture = null, this.doubleBuffer = null, this.currentBufferIndex = 0, this._tempRenderTarget = null, this._tempRenderTargetSource = new PIXI.Rectangle
                }
                return t.prototype.initRenderTexture = function(t) {
                    var e = t ? t.screen.width : 100,
                        r = t ? t.screen.height : 100,
                        i = t ? t.resolution : PIXI.settings.RESOLUTION;
                    this.renderTexture = PIXI.RenderTexture.create({
                        width: e,
                        height: r,
                        resolution: i
                    }), this.layer.group.useDoubleBuffer && (this.doubleBuffer = [PIXI.RenderTexture.create({
                        width: e,
                        height: r,
                        resolution: i
                    }), PIXI.RenderTexture.create({
                        width: e,
                        height: r,
                        resolution: i
                    })])
                }, t.prototype.getRenderTexture = function() {
                    return this.renderTexture || this.initRenderTexture(), this.renderTexture
                }, t.prototype.pushTexture = function(t) {
                    var e = t.screen;
                    this.renderTexture || this.initRenderTexture(t);
                    var r = this.renderTexture,
                        i = this.layer.group,
                        n = this.doubleBuffer;
                    if (r.width === e.width && r.height === e.height && r.baseTexture.resolution === t.resolution || (r.baseTexture.resolution = t.resolution, r.resize(e.width, e.height), n && (n[0].baseTexture.resolution = t.resolution, n[0].resize(e.width, e.height), n[1].baseTexture.resolution = t.resolution, n[1].resize(e.width, e.height))), this._tempRenderTarget = t.renderTexture.current, this._tempRenderTargetSource.copyFrom(t.renderTexture.sourceFrame), t.batch.flush(), i.useDoubleBuffer) {
                        var o = n[this.currentBufferIndex];
                        o.baseTexture._glTextures[t.CONTEXT_UID] || (t.renderTexture.bind(o, void 0, void 0), t.texture.bind(o), i.clearColor && t.renderTexture.clear(i.clearColor)), t.texture.unbind(r), r.baseTexture._glTextures = o.baseTexture._glTextures, r.baseTexture.framebuffer = o.baseTexture.framebuffer, o = n[1 - this.currentBufferIndex], t.renderTexture.bind(o, void 0, void 0)
                    } else t.renderTexture.bind(r, void 0, void 0);
                    i.clearColor && t.renderTexture.clear(i.clearColor);
                    var s = t.filter.defaultFilterStack;
                    s.length > 1 && (s[s.length - 1].renderTexture = t.renderTexture.current)
                }, t.prototype.popTexture = function(t) {
                    t.batch.flush();
                    var e = t.filter.defaultFilterStack;
                    e.length > 1 && (e[e.length - 1].renderTexture = this._tempRenderTarget), t.renderTexture.bind(this._tempRenderTarget, this._tempRenderTargetSource, void 0), this._tempRenderTarget = null;
                    var r = this.renderTexture,
                        i = this.layer.group,
                        n = this.doubleBuffer;
                    if (i.useDoubleBuffer) {
                        t.texture.unbind(r), this.currentBufferIndex = 1 - this.currentBufferIndex;
                        var o = n[this.currentBufferIndex];
                        r.baseTexture._glTextures = o.baseTexture._glTextures, r.baseTexture.framebuffer = o.baseTexture.framebuffer
                    }
                }, t.prototype.destroy = function() {
                    this.renderTexture && (this.renderTexture.destroy(), this.doubleBuffer && (this.doubleBuffer[0].destroy(!0), this.doubleBuffer[1].destroy(!0)))
                }, t
            }();
            t.LayerTextureCache = e;
            var r = function(r) {
                function i(e) {
                    void 0 === e && (e = null);
                    var i = r.call(this) || this;
                    return i.isLayer = !0, i.group = null, i._activeChildren = [], i._tempChildren = null, i._activeStageParent = null, i._sortedChildren = [], i._tempLayerParent = null, i.insertChildrenBeforeActive = !0, i.insertChildrenAfterActive = !0, null != e ? (i.group = e, i.zIndex = e.zIndex) : i.group = new t.Group(0, !1), i._tempChildren = i.children, i
                }
                return n(i, r), i.prototype.beginWork = function(t) {
                    var e = this._activeChildren;
                    this._activeStageParent = t, this.group.foundLayer(t, this);
                    var r = this.group._activeChildren;
                    e.length = 0;
                    for (var i = 0; i < r.length; i++) r[i]._activeParentLayer = this, e.push(r[i]);
                    r.length = 0
                }, i.prototype.endWork = function() {
                    for (var t = this.children, e = this._activeChildren, r = this._sortedChildren, i = 0; i < e.length; i++) this.emit("display", e[i]);
                    if (r.length = 0, this.insertChildrenBeforeActive)
                        for (i = 0; i < t.length; i++) r.push(t[i]);
                    for (i = 0; i < e.length; i++) r.push(e[i]);
                    if (!this.insertChildrenBeforeActive && this.insertChildrenAfterActive)
                        for (i = 0; i < t.length; i++) r.push(t[i]);
                    this.group.enableSort && this.doSort()
                }, Object.defineProperty(i.prototype, "useRenderTexture", {
                    get: function() {
                        return this.group.useRenderTexture
                    },
                    set: function(t) {
                        this.group.useRenderTexture = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(i.prototype, "useDoubleBuffer", {
                    get: function() {
                        return this.group.useDoubleBuffer
                    },
                    set: function(t) {
                        this.group.useDoubleBuffer = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(i.prototype, "clearColor", {
                    get: function() {
                        return this.group.clearColor
                    },
                    set: function(t) {
                        this.group.clearColor = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(i.prototype, "sortPriority", {
                    get: function() {
                        return this.group.sortPriority
                    },
                    set: function(t) {
                        this.group.sortPriority = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), i.prototype.getRenderTexture = function() {
                    return this.textureCache || (this.textureCache = new e(this)), this.textureCache.getRenderTexture()
                }, i.prototype.updateDisplayLayers = function() {}, i.prototype.doSort = function() {
                    this.group.doSort(this, this._sortedChildren)
                }, i.prototype._preRender = function(t) {
                    return (!this._activeParentLayer || this._activeParentLayer == t._activeLayer) && (this.visible ? (this.displayOrder = t.incDisplayOrder(), !(this.worldAlpha <= 0 || !this.renderable) && (this.children !== this._sortedChildren && this._tempChildren != this.children && (this._tempChildren = this.children), this._boundsID++, this.children = this._sortedChildren, this._tempLayerParent = t._activeLayer, t._activeLayer = this, !0)) : (this.displayOrder = 0, !1))
                }, i.prototype._postRender = function(t) {
                    this.children = this._tempChildren, t._activeLayer = this._tempLayerParent, this._tempLayerParent = null
                }, i.prototype.render = function(t) {
                    this._preRender(t) && (this.group.useRenderTexture && (this.textureCache || (this.textureCache = new e(this)), this.textureCache.pushTexture(t)), this.containerRenderWebGL(t), this._postRender(t), this.group.useRenderTexture && this.textureCache.popTexture(t))
                }, i.prototype.destroy = function(t) {
                    this.textureCache && (this.textureCache.destroy(), this.textureCache = null), r.prototype.destroy.call(this, t)
                }, i
            }(PIXI.Container);
            t.Layer = r, r.prototype.renderCanvas = function(t) {
                this._preRender(t) && (this.containerRenderCanvas(t), this._postRender(t))
            }
        }(i || (i = {})),
        function(t) {
            var e = PIXI.Point,
                r = function() {
                    function t() {
                        this._tempPoint = new e, this._queue = [
                            [],
                            []
                        ], this._eventDisplayOrder = 0, this.worksWithDisplay = !0
                    }
                    return t.prototype.recursiveFindHit = function(t, e, r, i, n) {
                        if (!e || !e.visible) return 0;
                        var o = 0,
                            s = i = e.interactive || i;
                        e.hitArea && (s = !1), e._activeParentLayer && (n = !1);
                        var a = e._mask;
                        r < 1 / 0 && a && (a.containsPoint(t) || (n = !0)), r < 1 / 0 && e.filterArea && (e.filterArea.contains(t.x, t.y) || (n = !0));
                        var h = e.children;
                        if (e.interactiveChildren && h)
                            for (var u = h.length - 1; u >= 0; u--) {
                                var l = h[u],
                                    c = this.recursiveFindHit(t, l, r, s, n);
                                if (c) {
                                    if (!l.parent) continue;
                                    o = c, r = c
                                }
                            }
                        return i && (n ? e.interactive && this._queueAdd(e, 0) : (r < e.displayOrder && (e.hitArea ? (e.worldTransform.applyInverse(t, this._tempPoint), e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) && (o = e.displayOrder)) : e.containsPoint && e.containsPoint(t) && (o = e.displayOrder)), e.interactive && this._queueAdd(e, o === 1 / 0 ? 0 : o))), o
                    }, t.prototype.findHit = function(t, e, r, i) {
                        var n = null,
                            o = null;
                        o = t.data && t.data.global ? (n = t).data.global : t, this._startInteractionProcess(), this.recursiveFindHit(o, e, i ? 0 : 1 / 0, !1, !1), this._finishInteractionProcess(n, r)
                    }, t.prototype._startInteractionProcess = function() {
                        this._eventDisplayOrder = 1, this._queue || (this._queue = [
                            [],
                            []
                        ]), this._queue[0].length = 0, this._queue[1].length = 0
                    }, t.prototype._queueAdd = function(t, e) {
                        var r = this._queue;
                        if (e < this._eventDisplayOrder) r[0].push(t);
                        else {
                            if (e > this._eventDisplayOrder) {
                                this._eventDisplayOrder = e;
                                for (var i = r[1], n = 0, o = i.length; n < o; n++) r[0].push(i[n]);
                                r[1].length = 0
                            }
                            r[1].push(t)
                        }
                    }, t.prototype._finishInteractionProcess = function(t, e) {
                        for (var r = this._queue, i = r[0], n = 0, o = i.length; n < o; n++) t ? e && e(t, i[n], !1) : e(i[n], !1);
                        for (n = 0, o = (i = r[1]).length; n < o; n++) t ? (t.target || (t.target = i[n]), e && e(t, i[n], !0)) : e(i[n], !0)
                    }, t
                }();
            t.LayersTreeSearch = r
        }(i || (i = {})),
        function(t) {
            var e = function(e) {
                function r() {
                    var t = e.call(this) || this;
                    return t.isStage = !0, t._tempGroups = [], t._activeLayers = [], t._activeParentStage = null, t
                }
                return n(r, e), r.prototype.clear = function() {
                    this._activeLayers.length = 0, this._tempGroups.length = 0
                }, r.prototype.destroy = function(t) {
                    this.clear(), e.prototype.destroy.call(this, t)
                }, r.prototype._addRecursive = function(t) {
                    if (t.visible) {
                        if (t.isLayer) {
                            var e = t;
                            this._activeLayers.push(e), e.beginWork(this)
                        }
                        if (t != this && t.isStage) {
                            t.updateAsChildStage(this)
                        } else {
                            var i = t.parentGroup;
                            null != i && i.addDisplayObject(this, t);
                            var n = t.parentLayer;
                            if (null != n && (i = n.group).addDisplayObject(this, t), t.updateOrder = ++r._updateOrderCounter, !(t.alpha <= 0 || !t.renderable || !t.layerableChildren || i && i.sortPriority)) {
                                var o = t.children;
                                if (o && o.length)
                                    for (var s = 0; s < o.length; s++) this._addRecursive(o[s])
                            }
                        }
                    }
                }, r.prototype._addRecursiveChildren = function(t) {
                    if (!(t.alpha <= 0) && t.renderable && t.layerableChildren) {
                        var e = t.children;
                        if (e && e.length)
                            for (var r = 0; r < e.length; r++) this._addRecursive(e[r])
                    }
                }, r.prototype._updateStageInner = function() {
                    this.clear(), this._addRecursive(this);
                    for (var t = this._activeLayers, e = 0; e < t.length; e++) {
                        if ((n = t[e]).group.sortPriority) {
                            n.endWork();
                            for (var r = n._sortedChildren, i = 0; i < r.length; i++) this._addRecursiveChildren(r[i])
                        }
                    }
                    for (e = 0; e < t.length; e++) {
                        var n;
                        (n = t[e]).group.sortPriority || n.endWork()
                    }
                }, r.prototype.updateAsChildStage = function(t) {
                    this._activeParentStage = t, r._updateOrderCounter = 0, this._updateStageInner()
                }, r.prototype.updateStage = function() {
                    this._activeParentStage = null, t.Group._layerUpdateId++, this._updateStageInner()
                }, r._updateOrderCounter = 0, r
            }(t.Layer);
            t.Stage = e
        }(i || (i = {})),
        function(t) {
            Object.assign(PIXI.Renderer.prototype, {
                _lastDisplayOrder: 0,
                _activeLayer: null,
                incDisplayOrder: function() {
                    return ++this._lastDisplayOrder
                },
                _oldRender: PIXI.Renderer.prototype.render,
                render: function(e, r, i, n, o) {
                    r || (this._lastDisplayOrder = 0), this._activeLayer = null, e.isStage && e.updateStage(), t.patchInteractionManager(this.plugins.interaction), this._oldRender(e, r, i, n, o)
                }
            });
            var e = PIXI.CanvasRenderer;
            e && Object.assign(e.prototype, {
                _lastDisplayOrder: 0,
                _activeLayer: null,
                incDisplayOrder: function() {
                    return ++this._lastDisplayOrder
                },
                _oldRender: e.prototype.render,
                render: function(e, r, i, n, o) {
                    r || (this._lastDisplayOrder = 0), this._activeLayer = null, e.isStage && e.updateStage(), t.patchInteractionManager(this.plugins.interaction), this._oldRender(e, r, i, n, o)
                }
            })
        }(i || (i = {})),
        function(t) {
            PIXI.display = t
        }(i || (i = {}))
    },
    137: function(t, e) {
        var r, i, n, o = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        ! function(t) {
            ! function(t) {
                var e, r, i, n = function() {
                    function t(t, e, r) {
                        if (null == t) throw new Error("name cannot be null.");
                        if (null == e) throw new Error("timelines cannot be null.");
                        this.name = t, this.timelines = e, this.duration = r
                    }
                    return t.prototype.apply = function(t, e, r, i, n, o, s, a) {
                        if (null == t) throw new Error("skeleton cannot be null.");
                        i && 0 != this.duration && (r %= this.duration, e > 0 && (e %= this.duration));
                        for (var h = this.timelines, u = 0, l = h.length; u < l; u++) h[u].apply(t, e, r, n, o, s, a)
                    }, t.binarySearch = function(t, e, r) {
                        void 0 === r && (r = 1);
                        var i = 0,
                            n = t.length / r - 2;
                        if (0 == n) return r;
                        for (var o = n >>> 1;;) {
                            if (t[(o + 1) * r] <= e ? i = o + 1 : n = o, i == n) return (i + 1) * r;
                            o = i + n >>> 1
                        }
                    }, t.linearSearch = function(t, e, r) {
                        for (var i = 0, n = t.length - r; i <= n; i += r)
                            if (t[i] > e) return i;
                        return -1
                    }, t
                }();
                t.Animation = n,
                    function(t) {
                        t[t.setup = 0] = "setup", t[t.first = 1] = "first", t[t.replace = 2] = "replace", t[t.add = 3] = "add"
                    }(e = t.MixBlend || (t.MixBlend = {})),
                    function(t) {
                        t[t.mixIn = 0] = "mixIn", t[t.mixOut = 1] = "mixOut"
                    }(r = t.MixDirection || (t.MixDirection = {})),
                    function(t) {
                        t[t.rotate = 0] = "rotate", t[t.translate = 1] = "translate", t[t.scale = 2] = "scale", t[t.shear = 3] = "shear", t[t.attachment = 4] = "attachment", t[t.color = 5] = "color", t[t.deform = 6] = "deform", t[t.event = 7] = "event", t[t.drawOrder = 8] = "drawOrder", t[t.ikConstraint = 9] = "ikConstraint", t[t.transformConstraint = 10] = "transformConstraint", t[t.pathConstraintPosition = 11] = "pathConstraintPosition", t[t.pathConstraintSpacing = 12] = "pathConstraintSpacing", t[t.pathConstraintMix = 13] = "pathConstraintMix", t[t.twoColor = 14] = "twoColor"
                    }(i = t.TimelineType || (t.TimelineType = {}));
                var s = function() {
                    function e(r) {
                        if (r <= 0) throw new Error("frameCount must be > 0: " + r);
                        this.curves = t.Utils.newFloatArray((r - 1) * e.BEZIER_SIZE)
                    }
                    return e.prototype.getFrameCount = function() {
                        return this.curves.length / e.BEZIER_SIZE + 1
                    }, e.prototype.setLinear = function(t) {
                        this.curves[t * e.BEZIER_SIZE] = e.LINEAR
                    }, e.prototype.setStepped = function(t) {
                        this.curves[t * e.BEZIER_SIZE] = e.STEPPED
                    }, e.prototype.getCurveType = function(t) {
                        var r = t * e.BEZIER_SIZE;
                        if (r == this.curves.length) return e.LINEAR;
                        var i = this.curves[r];
                        return i == e.LINEAR ? e.LINEAR : i == e.STEPPED ? e.STEPPED : e.BEZIER
                    }, e.prototype.setCurve = function(t, r, i, n, o) {
                        var s = .03 * (2 * -r + n),
                            a = .03 * (2 * -i + o),
                            h = .006 * (3 * (r - n) + 1),
                            u = .006 * (3 * (i - o) + 1),
                            l = 2 * s + h,
                            c = 2 * a + u,
                            d = .3 * r + s + .16666667 * h,
                            p = .3 * i + a + .16666667 * u,
                            f = t * e.BEZIER_SIZE,
                            m = this.curves;
                        m[f++] = e.BEZIER;
                        for (var g = d, v = p, y = f + e.BEZIER_SIZE - 1; f < y; f += 2) m[f] = g, m[f + 1] = v, d += l, p += c, l += h, c += u, g += d, v += p
                    }, e.prototype.getCurvePercent = function(r, i) {
                        i = t.MathUtils.clamp(i, 0, 1);
                        var n = this.curves,
                            o = r * e.BEZIER_SIZE,
                            s = n[o];
                        if (s == e.LINEAR) return i;
                        if (s == e.STEPPED) return 0;
                        for (var a = 0, h = ++o, u = o + e.BEZIER_SIZE - 1; o < u; o += 2)
                            if ((a = n[o]) >= i) {
                                var l = void 0,
                                    c = void 0;
                                return o == h ? (l = 0, c = 0) : (l = n[o - 2], c = n[o - 1]), c + (n[o + 1] - c) * (i - l) / (a - l)
                            } var d = n[o - 1];
                        return d + (1 - d) * (i - a) / (1 - a)
                    }, e.LINEAR = 0, e.STEPPED = 1, e.BEZIER = 2, e.BEZIER_SIZE = 19, e
                }();
                t.CurveTimeline = s;
                var a = function(r) {
                    function s(e) {
                        var i = r.call(this, e) || this;
                        return i.frames = t.Utils.newFloatArray(e << 1), i
                    }
                    return o(s, r), s.prototype.getPropertyId = function() {
                        return (i.rotate << 24) + this.boneIndex
                    }, s.prototype.setFrame = function(t, e, r) {
                        t <<= 1, this.frames[t] = e, this.frames[t + s.ROTATION] = r
                    }, s.prototype.apply = function(t, r, i, o, a, h, u) {
                        var l = this.frames,
                            c = t.bones[this.boneIndex];
                        if (c.active)
                            if (i < l[0]) switch (h) {
                                case e.setup:
                                    return void(c.rotation = c.data.rotation);
                                case e.first:
                                    var d = c.data.rotation - c.rotation;
                                    c.rotation += (d - 360 * (16384 - (16384.499999999996 - d / 360 | 0))) * a
                            } else if (i >= l[l.length - s.ENTRIES]) {
                                var p = l[l.length + s.PREV_ROTATION];
                                switch (h) {
                                    case e.setup:
                                        c.rotation = c.data.rotation + p * a;
                                        break;
                                    case e.first:
                                    case e.replace:
                                        p += c.data.rotation - c.rotation, p -= 360 * (16384 - (16384.499999999996 - p / 360 | 0));
                                    case e.add:
                                        c.rotation += p * a
                                }
                            } else {
                                var f = n.binarySearch(l, i, s.ENTRIES),
                                    m = l[f + s.PREV_ROTATION],
                                    g = l[f],
                                    v = this.getCurvePercent((f >> 1) - 1, 1 - (i - g) / (l[f + s.PREV_TIME] - g)),
                                    y = l[f + s.ROTATION] - m;
                                switch (y = m + (y - 360 * (16384 - (16384.499999999996 - y / 360 | 0))) * v, h) {
                                    case e.setup:
                                        c.rotation = c.data.rotation + (y - 360 * (16384 - (16384.499999999996 - y / 360 | 0))) * a;
                                        break;
                                    case e.first:
                                    case e.replace:
                                        y += c.data.rotation - c.rotation;
                                    case e.add:
                                        c.rotation += (y - 360 * (16384 - (16384.499999999996 - y / 360 | 0))) * a
                                }
                            }
                    }, s.ENTRIES = 2, s.PREV_TIME = -2, s.PREV_ROTATION = -1, s.ROTATION = 1, s
                }(s);
                t.RotateTimeline = a;
                var h = function(r) {
                    function s(e) {
                        var i = r.call(this, e) || this;
                        return i.frames = t.Utils.newFloatArray(e * s.ENTRIES), i
                    }
                    return o(s, r), s.prototype.getPropertyId = function() {
                        return (i.translate << 24) + this.boneIndex
                    }, s.prototype.setFrame = function(t, e, r, i) {
                        t *= s.ENTRIES, this.frames[t] = e, this.frames[t + s.X] = r, this.frames[t + s.Y] = i
                    }, s.prototype.apply = function(t, r, i, o, a, h, u) {
                        var l = this.frames,
                            c = t.bones[this.boneIndex];
                        if (c.active)
                            if (i < l[0]) switch (h) {
                                case e.setup:
                                    return c.x = c.data.x, void(c.y = c.data.y);
                                case e.first:
                                    c.x += (c.data.x - c.x) * a, c.y += (c.data.y - c.y) * a
                            } else {
                                var d = 0,
                                    p = 0;
                                if (i >= l[l.length - s.ENTRIES]) d = l[l.length + s.PREV_X], p = l[l.length + s.PREV_Y];
                                else {
                                    var f = n.binarySearch(l, i, s.ENTRIES);
                                    d = l[f + s.PREV_X], p = l[f + s.PREV_Y];
                                    var m = l[f],
                                        g = this.getCurvePercent(f / s.ENTRIES - 1, 1 - (i - m) / (l[f + s.PREV_TIME] - m));
                                    d += (l[f + s.X] - d) * g, p += (l[f + s.Y] - p) * g
                                }
                                switch (h) {
                                    case e.setup:
                                        c.x = c.data.x + d * a, c.y = c.data.y + p * a;
                                        break;
                                    case e.first:
                                    case e.replace:
                                        c.x += (c.data.x + d - c.x) * a, c.y += (c.data.y + p - c.y) * a;
                                        break;
                                    case e.add:
                                        c.x += d * a, c.y += p * a
                                }
                            }
                    }, s.ENTRIES = 3, s.PREV_TIME = -3, s.PREV_X = -2, s.PREV_Y = -1, s.X = 1, s.Y = 2, s
                }(s);
                t.TranslateTimeline = h;
                var u = function(s) {
                    function a(t) {
                        return s.call(this, t) || this
                    }
                    return o(a, s), a.prototype.getPropertyId = function() {
                        return (i.scale << 24) + this.boneIndex
                    }, a.prototype.apply = function(i, o, s, h, u, l, c) {
                        var d = this.frames,
                            p = i.bones[this.boneIndex];
                        if (p.active)
                            if (s < d[0]) switch (l) {
                                case e.setup:
                                    return p.scaleX = p.data.scaleX, void(p.scaleY = p.data.scaleY);
                                case e.first:
                                    p.scaleX += (p.data.scaleX - p.scaleX) * u, p.scaleY += (p.data.scaleY - p.scaleY) * u
                            } else {
                                var f = 0,
                                    m = 0;
                                if (s >= d[d.length - a.ENTRIES]) f = d[d.length + a.PREV_X] * p.data.scaleX, m = d[d.length + a.PREV_Y] * p.data.scaleY;
                                else {
                                    var g = n.binarySearch(d, s, a.ENTRIES);
                                    f = d[g + a.PREV_X], m = d[g + a.PREV_Y];
                                    var v = d[g],
                                        y = this.getCurvePercent(g / a.ENTRIES - 1, 1 - (s - v) / (d[g + a.PREV_TIME] - v));
                                    f = (f + (d[g + a.X] - f) * y) * p.data.scaleX, m = (m + (d[g + a.Y] - m) * y) * p.data.scaleY
                                }
                                if (1 == u) l == e.add ? (p.scaleX += f - p.data.scaleX, p.scaleY += m - p.data.scaleY) : (p.scaleX = f, p.scaleY = m);
                                else {
                                    var x = 0,
                                        _ = 0;
                                    if (c == r.mixOut) switch (l) {
                                        case e.setup:
                                            x = p.data.scaleX, _ = p.data.scaleY, p.scaleX = x + (Math.abs(f) * t.MathUtils.signum(x) - x) * u, p.scaleY = _ + (Math.abs(m) * t.MathUtils.signum(_) - _) * u;
                                            break;
                                        case e.first:
                                        case e.replace:
                                            x = p.scaleX, _ = p.scaleY, p.scaleX = x + (Math.abs(f) * t.MathUtils.signum(x) - x) * u, p.scaleY = _ + (Math.abs(m) * t.MathUtils.signum(_) - _) * u;
                                            break;
                                        case e.add:
                                            x = p.scaleX, _ = p.scaleY, p.scaleX = x + (Math.abs(f) * t.MathUtils.signum(x) - p.data.scaleX) * u, p.scaleY = _ + (Math.abs(m) * t.MathUtils.signum(_) - p.data.scaleY) * u
                                    } else switch (l) {
                                        case e.setup:
                                            x = Math.abs(p.data.scaleX) * t.MathUtils.signum(f), _ = Math.abs(p.data.scaleY) * t.MathUtils.signum(m), p.scaleX = x + (f - x) * u, p.scaleY = _ + (m - _) * u;
                                            break;
                                        case e.first:
                                        case e.replace:
                                            x = Math.abs(p.scaleX) * t.MathUtils.signum(f), _ = Math.abs(p.scaleY) * t.MathUtils.signum(m), p.scaleX = x + (f - x) * u, p.scaleY = _ + (m - _) * u;
                                            break;
                                        case e.add:
                                            x = t.MathUtils.signum(f), _ = t.MathUtils.signum(m), p.scaleX = Math.abs(p.scaleX) * x + (f - Math.abs(p.data.scaleX) * x) * u, p.scaleY = Math.abs(p.scaleY) * _ + (m - Math.abs(p.data.scaleY) * _) * u
                                    }
                                }
                            }
                    }, a
                }(h);
                t.ScaleTimeline = u;
                var l = function(t) {
                    function r(e) {
                        return t.call(this, e) || this
                    }
                    return o(r, t), r.prototype.getPropertyId = function() {
                        return (i.shear << 24) + this.boneIndex
                    }, r.prototype.apply = function(t, i, o, s, a, h, u) {
                        var l = this.frames,
                            c = t.bones[this.boneIndex];
                        if (c.active)
                            if (o < l[0]) switch (h) {
                                case e.setup:
                                    return c.shearX = c.data.shearX, void(c.shearY = c.data.shearY);
                                case e.first:
                                    c.shearX += (c.data.shearX - c.shearX) * a, c.shearY += (c.data.shearY - c.shearY) * a
                            } else {
                                var d = 0,
                                    p = 0;
                                if (o >= l[l.length - r.ENTRIES]) d = l[l.length + r.PREV_X], p = l[l.length + r.PREV_Y];
                                else {
                                    var f = n.binarySearch(l, o, r.ENTRIES);
                                    d = l[f + r.PREV_X], p = l[f + r.PREV_Y];
                                    var m = l[f],
                                        g = this.getCurvePercent(f / r.ENTRIES - 1, 1 - (o - m) / (l[f + r.PREV_TIME] - m));
                                    d += (l[f + r.X] - d) * g, p += (l[f + r.Y] - p) * g
                                }
                                switch (h) {
                                    case e.setup:
                                        c.shearX = c.data.shearX + d * a, c.shearY = c.data.shearY + p * a;
                                        break;
                                    case e.first:
                                    case e.replace:
                                        c.shearX += (c.data.shearX + d - c.shearX) * a, c.shearY += (c.data.shearY + p - c.shearY) * a;
                                        break;
                                    case e.add:
                                        c.shearX += d * a, c.shearY += p * a
                                }
                            }
                    }, r
                }(h);
                t.ShearTimeline = l;
                var c = function(r) {
                    function s(e) {
                        var i = r.call(this, e) || this;
                        return i.frames = t.Utils.newFloatArray(e * s.ENTRIES), i
                    }
                    return o(s, r), s.prototype.getPropertyId = function() {
                        return (i.color << 24) + this.slotIndex
                    }, s.prototype.setFrame = function(t, e, r, i, n, o) {
                        t *= s.ENTRIES, this.frames[t] = e, this.frames[t + s.R] = r, this.frames[t + s.G] = i, this.frames[t + s.B] = n, this.frames[t + s.A] = o
                    }, s.prototype.apply = function(t, r, i, o, a, h, u) {
                        var l = t.slots[this.slotIndex];
                        if (l.bone.active) {
                            var c = this.frames;
                            if (i < c[0]) switch (h) {
                                case e.setup:
                                    return void l.color.setFromColor(l.data.color);
                                case e.first:
                                    var d = l.color,
                                        p = l.data.color;
                                    d.add((p.r - d.r) * a, (p.g - d.g) * a, (p.b - d.b) * a, (p.a - d.a) * a)
                            } else {
                                var f = 0,
                                    m = 0,
                                    g = 0,
                                    v = 0;
                                if (i >= c[c.length - s.ENTRIES]) {
                                    var y = c.length;
                                    f = c[y + s.PREV_R], m = c[y + s.PREV_G], g = c[y + s.PREV_B], v = c[y + s.PREV_A]
                                } else {
                                    var x = n.binarySearch(c, i, s.ENTRIES);
                                    f = c[x + s.PREV_R], m = c[x + s.PREV_G], g = c[x + s.PREV_B], v = c[x + s.PREV_A];
                                    var _ = c[x],
                                        b = this.getCurvePercent(x / s.ENTRIES - 1, 1 - (i - _) / (c[x + s.PREV_TIME] - _));
                                    f += (c[x + s.R] - f) * b, m += (c[x + s.G] - m) * b, g += (c[x + s.B] - g) * b, v += (c[x + s.A] - v) * b
                                }
                                if (1 == a) l.color.set(f, m, g, v);
                                else {
                                    d = l.color;
                                    h == e.setup && d.setFromColor(l.data.color), d.add((f - d.r) * a, (m - d.g) * a, (g - d.b) * a, (v - d.a) * a)
                                }
                            }
                        }
                    }, s.ENTRIES = 5, s.PREV_TIME = -5, s.PREV_R = -4, s.PREV_G = -3, s.PREV_B = -2, s.PREV_A = -1, s.R = 1, s.G = 2, s.B = 3, s.A = 4, s
                }(s);
                t.ColorTimeline = c;
                var d = function(r) {
                    function s(e) {
                        var i = r.call(this, e) || this;
                        return i.frames = t.Utils.newFloatArray(e * s.ENTRIES), i
                    }
                    return o(s, r), s.prototype.getPropertyId = function() {
                        return (i.twoColor << 24) + this.slotIndex
                    }, s.prototype.setFrame = function(t, e, r, i, n, o, a, h, u) {
                        t *= s.ENTRIES, this.frames[t] = e, this.frames[t + s.R] = r, this.frames[t + s.G] = i, this.frames[t + s.B] = n, this.frames[t + s.A] = o, this.frames[t + s.R2] = a, this.frames[t + s.G2] = h, this.frames[t + s.B2] = u
                    }, s.prototype.apply = function(t, r, i, o, a, h, u) {
                        var l = t.slots[this.slotIndex];
                        if (l.bone.active) {
                            var c = this.frames;
                            if (i < c[0]) switch (h) {
                                case e.setup:
                                    return l.color.setFromColor(l.data.color), void l.darkColor.setFromColor(l.data.darkColor);
                                case e.first:
                                    var d = l.color,
                                        p = l.darkColor,
                                        f = l.data.color,
                                        m = l.data.darkColor;
                                    d.add((f.r - d.r) * a, (f.g - d.g) * a, (f.b - d.b) * a, (f.a - d.a) * a), p.add((m.r - p.r) * a, (m.g - p.g) * a, (m.b - p.b) * a, 0)
                            } else {
                                var g = 0,
                                    v = 0,
                                    y = 0,
                                    x = 0,
                                    _ = 0,
                                    b = 0,
                                    T = 0;
                                if (i >= c[c.length - s.ENTRIES]) {
                                    var w = c.length;
                                    g = c[w + s.PREV_R], v = c[w + s.PREV_G], y = c[w + s.PREV_B], x = c[w + s.PREV_A], _ = c[w + s.PREV_R2], b = c[w + s.PREV_G2], T = c[w + s.PREV_B2]
                                } else {
                                    var E = n.binarySearch(c, i, s.ENTRIES);
                                    g = c[E + s.PREV_R], v = c[E + s.PREV_G], y = c[E + s.PREV_B], x = c[E + s.PREV_A], _ = c[E + s.PREV_R2], b = c[E + s.PREV_G2], T = c[E + s.PREV_B2];
                                    var I = c[E],
                                        S = this.getCurvePercent(E / s.ENTRIES - 1, 1 - (i - I) / (c[E + s.PREV_TIME] - I));
                                    g += (c[E + s.R] - g) * S, v += (c[E + s.G] - v) * S, y += (c[E + s.B] - y) * S, x += (c[E + s.A] - x) * S, _ += (c[E + s.R2] - _) * S, b += (c[E + s.G2] - b) * S, T += (c[E + s.B2] - T) * S
                                }
                                if (1 == a) l.color.set(g, v, y, x), l.darkColor.set(_, b, T, 1);
                                else {
                                    d = l.color, p = l.darkColor;
                                    h == e.setup && (d.setFromColor(l.data.color), p.setFromColor(l.data.darkColor)), d.add((g - d.r) * a, (v - d.g) * a, (y - d.b) * a, (x - d.a) * a), p.add((_ - p.r) * a, (b - p.g) * a, (T - p.b) * a, 0)
                                }
                            }
                        }
                    }, s.ENTRIES = 8, s.PREV_TIME = -8, s.PREV_R = -7, s.PREV_G = -6, s.PREV_B = -5, s.PREV_A = -4, s.PREV_R2 = -3, s.PREV_G2 = -2, s.PREV_B2 = -1, s.R = 1, s.G = 2, s.B = 3, s.A = 4, s.R2 = 5, s.G2 = 6, s.B2 = 7, s
                }(s);
                t.TwoColorTimeline = d;
                var p = function() {
                    function o(e) {
                        this.frames = t.Utils.newFloatArray(e), this.attachmentNames = new Array(e)
                    }
                    return o.prototype.getPropertyId = function() {
                        return (i.attachment << 24) + this.slotIndex
                    }, o.prototype.getFrameCount = function() {
                        return this.frames.length
                    }, o.prototype.setFrame = function(t, e, r) {
                        this.frames[t] = e, this.attachmentNames[t] = r
                    }, o.prototype.apply = function(t, i, o, s, a, h, u) {
                        var l = t.slots[this.slotIndex];
                        if (l.bone.active)
                            if (u != r.mixOut || h != e.setup) {
                                var c = this.frames;
                                if (o < c[0]) {
                                    if (h == e.setup || h == e.first) {
                                        var d = l.data.attachmentName;
                                        l.setAttachment(null == d ? null : t.getAttachment(this.slotIndex, d))
                                    }
                                } else {
                                    var p = 0;
                                    p = o >= c[c.length - 1] ? c.length - 1 : n.binarySearch(c, o, 1) - 1;
                                    var f = this.attachmentNames[p];
                                    t.slots[this.slotIndex].setAttachment(null == f ? null : t.getAttachment(this.slotIndex, f))
                                }
                            } else {
                                var m = l.data.attachmentName;
                                l.setAttachment(null == m ? null : t.getAttachment(this.slotIndex, m))
                            }
                    }, o
                }();
                t.AttachmentTimeline = p;
                var f = null,
                    m = function(r) {
                        function s(e) {
                            var i = r.call(this, e) || this;
                            return i.frames = t.Utils.newFloatArray(e), i.frameVertices = new Array(e), null == f && (f = t.Utils.newFloatArray(64)), i
                        }
                        return o(s, r), s.prototype.getPropertyId = function() {
                            return (i.deform << 27) + +this.attachment.id + this.slotIndex
                        }, s.prototype.setFrame = function(t, e, r) {
                            this.frames[t] = e, this.frameVertices[t] = r
                        }, s.prototype.apply = function(r, i, o, s, a, h, u) {
                            var l = r.slots[this.slotIndex];
                            if (l.bone.active) {
                                var c = l.getAttachment();
                                if (c instanceof t.VertexAttachment && c.deformAttachment == this.attachment) {
                                    var d = l.deform;
                                    0 == d.length && (h = e.setup);
                                    var p = this.frameVertices,
                                        f = p[0].length,
                                        m = this.frames;
                                    if (o < m[0]) {
                                        var g = c;
                                        switch (h) {
                                            case e.setup:
                                                return void(d.length = 0);
                                            case e.first:
                                                if (1 == a) {
                                                    d.length = 0;
                                                    break
                                                }
                                                var v = t.Utils.setArraySize(d, f);
                                                if (null == g.bones)
                                                    for (var y = g.vertices, x = 0; x < f; x++) v[x] += (y[x] - v[x]) * a;
                                                else {
                                                    a = 1 - a;
                                                    for (x = 0; x < f; x++) v[x] *= a
                                                }
                                        }
                                    } else {
                                        var _ = t.Utils.setArraySize(d, f);
                                        if (o >= m[m.length - 1]) {
                                            var b = p[m.length - 1];
                                            if (1 == a)
                                                if (h == e.add)
                                                    if (null == (g = c).bones) {
                                                        y = g.vertices;
                                                        for (var T = 0; T < f; T++) _[T] += b[T] - y[T]
                                                    } else
                                                        for (var w = 0; w < f; w++) _[w] += b[w];
                                            else t.Utils.arrayCopy(b, 0, _, 0, f);
                                            else switch (h) {
                                                case e.setup:
                                                    var E = c;
                                                    if (null == E.bones) {
                                                        y = E.vertices;
                                                        for (var I = 0; I < f; I++) {
                                                            var S = y[I];
                                                            _[I] = S + (b[I] - S) * a
                                                        }
                                                    } else
                                                        for (var P = 0; P < f; P++) _[P] = b[P] * a;
                                                    break;
                                                case e.first:
                                                case e.replace:
                                                    for (var A = 0; A < f; A++) _[A] += (b[A] - _[A]) * a;
                                                case e.add:
                                                    if (null == (g = c).bones) {
                                                        y = g.vertices;
                                                        for (var M = 0; M < f; M++) _[M] += (b[M] - y[M]) * a
                                                    } else
                                                        for (var C = 0; C < f; C++) _[C] += b[C] * a
                                            }
                                        } else {
                                            var O = n.binarySearch(m, o),
                                                R = p[O - 1],
                                                D = p[O],
                                                F = m[O],
                                                L = this.getCurvePercent(O - 1, 1 - (o - F) / (m[O - 1] - F));
                                            if (1 == a)
                                                if (h == e.add)
                                                    if (null == (g = c).bones) {
                                                        y = g.vertices;
                                                        for (var N = 0; N < f; N++) {
                                                            var k = R[N];
                                                            _[N] += k + (D[N] - k) * L - y[N]
                                                        }
                                                    } else
                                                        for (var B = 0; B < f; B++) {
                                                            k = R[B];
                                                            _[B] += k + (D[B] - k) * L
                                                        } else
                                                            for (var U = 0; U < f; U++) {
                                                                k = R[U];
                                                                _[U] = k + (D[U] - k) * L
                                                            } else switch (h) {
                                                                case e.setup:
                                                                    var X = c;
                                                                    if (null == X.bones) {
                                                                        y = X.vertices;
                                                                        for (var V = 0; V < f; V++) {
                                                                            k = R[V], S = y[V];
                                                                            _[V] = S + (k + (D[V] - k) * L - S) * a
                                                                        }
                                                                    } else
                                                                        for (var j = 0; j < f; j++) {
                                                                            k = R[j];
                                                                            _[j] = (k + (D[j] - k) * L) * a
                                                                        }
                                                                    break;
                                                                case e.first:
                                                                case e.replace:
                                                                    for (var Y = 0; Y < f; Y++) {
                                                                        k = R[Y];
                                                                        _[Y] += (k + (D[Y] - k) * L - _[Y]) * a
                                                                    }
                                                                    break;
                                                                case e.add:
                                                                    if (null == (g = c).bones) {
                                                                        y = g.vertices;
                                                                        for (var G = 0; G < f; G++) {
                                                                            k = R[G];
                                                                            _[G] += (k + (D[G] - k) * L - y[G]) * a
                                                                        }
                                                                    } else
                                                                        for (var H = 0; H < f; H++) {
                                                                            k = R[H];
                                                                            _[H] += (k + (D[H] - k) * L) * a
                                                                        }
                                                            }
                                        }
                                    }
                                }
                            }
                        }, s
                    }(s);
                t.DeformTimeline = m;
                var g = function() {
                    function e(e) {
                        this.frames = t.Utils.newFloatArray(e), this.events = new Array(e)
                    }
                    return e.prototype.getPropertyId = function() {
                        return i.event << 24
                    }, e.prototype.getFrameCount = function() {
                        return this.frames.length
                    }, e.prototype.setFrame = function(t, e) {
                        this.frames[t] = e.time, this.events[t] = e
                    }, e.prototype.apply = function(t, e, r, i, o, s, a) {
                        if (null != i) {
                            var h = this.frames,
                                u = this.frames.length;
                            if (e > r) this.apply(t, e, Number.MAX_VALUE, i, o, s, a), e = -1;
                            else if (e >= h[u - 1]) return;
                            if (!(r < h[0])) {
                                var l = 0;
                                if (e < h[0]) l = 0;
                                else
                                    for (var c = h[l = n.binarySearch(h, e)]; l > 0 && h[l - 1] == c;) l--;
                                for (; l < u && r >= h[l]; l++) i.push(this.events[l])
                            }
                        }
                    }, e
                }();
                t.EventTimeline = g;
                var v = function() {
                    function o(e) {
                        this.frames = t.Utils.newFloatArray(e), this.drawOrders = new Array(e)
                    }
                    return o.prototype.getPropertyId = function() {
                        return i.drawOrder << 24
                    }, o.prototype.getFrameCount = function() {
                        return this.frames.length
                    }, o.prototype.setFrame = function(t, e, r) {
                        this.frames[t] = e, this.drawOrders[t] = r
                    }, o.prototype.apply = function(i, o, s, a, h, u, l) {
                        var c = i.drawOrder,
                            d = i.slots;
                        if (l != r.mixOut || u != e.setup) {
                            var p = this.frames;
                            if (s < p[0]) u != e.setup && u != e.first || t.Utils.arrayCopy(i.slots, 0, i.drawOrder, 0, i.slots.length);
                            else {
                                var f = 0;
                                f = s >= p[p.length - 1] ? p.length - 1 : n.binarySearch(p, s) - 1;
                                var m = this.drawOrders[f];
                                if (null == m) t.Utils.arrayCopy(d, 0, c, 0, d.length);
                                else
                                    for (var g = 0, v = m.length; g < v; g++) c[g] = d[m[g]]
                            }
                        } else t.Utils.arrayCopy(i.slots, 0, i.drawOrder, 0, i.slots.length)
                    }, o
                }();
                t.DrawOrderTimeline = v;
                var y = function(s) {
                    function a(e) {
                        var r = s.call(this, e) || this;
                        return r.frames = t.Utils.newFloatArray(e * a.ENTRIES), r
                    }
                    return o(a, s), a.prototype.getPropertyId = function() {
                        return (i.ikConstraint << 24) + this.ikConstraintIndex
                    }, a.prototype.setFrame = function(t, e, r, i, n, o, s) {
                        t *= a.ENTRIES, this.frames[t] = e, this.frames[t + a.MIX] = r, this.frames[t + a.SOFTNESS] = i, this.frames[t + a.BEND_DIRECTION] = n, this.frames[t + a.COMPRESS] = o ? 1 : 0, this.frames[t + a.STRETCH] = s ? 1 : 0
                    }, a.prototype.apply = function(t, i, o, s, h, u, l) {
                        var c = this.frames,
                            d = t.ikConstraints[this.ikConstraintIndex];
                        if (d.active)
                            if (o < c[0]) switch (u) {
                                    case e.setup:
                                        return d.mix = d.data.mix, d.softness = d.data.softness, d.bendDirection = d.data.bendDirection, d.compress = d.data.compress, void(d.stretch = d.data.stretch);
                                    case e.first:
                                        d.mix += (d.data.mix - d.mix) * h, d.softness += (d.data.softness - d.softness) * h, d.bendDirection = d.data.bendDirection, d.compress = d.data.compress, d.stretch = d.data.stretch
                                } else if (o >= c[c.length - a.ENTRIES]) u == e.setup ? (d.mix = d.data.mix + (c[c.length + a.PREV_MIX] - d.data.mix) * h, d.softness = d.data.softness + (c[c.length + a.PREV_SOFTNESS] - d.data.softness) * h, l == r.mixOut ? (d.bendDirection = d.data.bendDirection, d.compress = d.data.compress, d.stretch = d.data.stretch) : (d.bendDirection = c[c.length + a.PREV_BEND_DIRECTION], d.compress = 0 != c[c.length + a.PREV_COMPRESS], d.stretch = 0 != c[c.length + a.PREV_STRETCH])) : (d.mix += (c[c.length + a.PREV_MIX] - d.mix) * h, d.softness += (c[c.length + a.PREV_SOFTNESS] - d.softness) * h, l == r.mixIn && (d.bendDirection = c[c.length + a.PREV_BEND_DIRECTION], d.compress = 0 != c[c.length + a.PREV_COMPRESS], d.stretch = 0 != c[c.length + a.PREV_STRETCH]));
                                else {
                                    var p = n.binarySearch(c, o, a.ENTRIES),
                                        f = c[p + a.PREV_MIX],
                                        m = c[p + a.PREV_SOFTNESS],
                                        g = c[p],
                                        v = this.getCurvePercent(p / a.ENTRIES - 1, 1 - (o - g) / (c[p + a.PREV_TIME] - g));
                                    u == e.setup ? (d.mix = d.data.mix + (f + (c[p + a.MIX] - f) * v - d.data.mix) * h, d.softness = d.data.softness + (m + (c[p + a.SOFTNESS] - m) * v - d.data.softness) * h, l == r.mixOut ? (d.bendDirection = d.data.bendDirection, d.compress = d.data.compress, d.stretch = d.data.stretch) : (d.bendDirection = c[p + a.PREV_BEND_DIRECTION], d.compress = 0 != c[p + a.PREV_COMPRESS], d.stretch = 0 != c[p + a.PREV_STRETCH])) : (d.mix += (f + (c[p + a.MIX] - f) * v - d.mix) * h, d.softness += (m + (c[p + a.SOFTNESS] - m) * v - d.softness) * h, l == r.mixIn && (d.bendDirection = c[p + a.PREV_BEND_DIRECTION], d.compress = 0 != c[p + a.PREV_COMPRESS], d.stretch = 0 != c[p + a.PREV_STRETCH]))
                                }
                    }, a.ENTRIES = 6, a.PREV_TIME = -6, a.PREV_MIX = -5, a.PREV_SOFTNESS = -4, a.PREV_BEND_DIRECTION = -3, a.PREV_COMPRESS = -2, a.PREV_STRETCH = -1, a.MIX = 1, a.SOFTNESS = 2, a.BEND_DIRECTION = 3, a.COMPRESS = 4, a.STRETCH = 5, a
                }(s);
                t.IkConstraintTimeline = y;
                var x = function(r) {
                    function s(e) {
                        var i = r.call(this, e) || this;
                        return i.frames = t.Utils.newFloatArray(e * s.ENTRIES), i
                    }
                    return o(s, r), s.prototype.getPropertyId = function() {
                        return (i.transformConstraint << 24) + this.transformConstraintIndex
                    }, s.prototype.setFrame = function(t, e, r, i, n, o) {
                        t *= s.ENTRIES, this.frames[t] = e, this.frames[t + s.ROTATE] = r, this.frames[t + s.TRANSLATE] = i, this.frames[t + s.SCALE] = n, this.frames[t + s.SHEAR] = o
                    }, s.prototype.apply = function(t, r, i, o, a, h, u) {
                        var l = this.frames,
                            c = t.transformConstraints[this.transformConstraintIndex];
                        if (c.active)
                            if (i < l[0]) {
                                var d = c.data;
                                switch (h) {
                                    case e.setup:
                                        return c.rotateMix = d.rotateMix, c.translateMix = d.translateMix, c.scaleMix = d.scaleMix, void(c.shearMix = d.shearMix);
                                    case e.first:
                                        c.rotateMix += (d.rotateMix - c.rotateMix) * a, c.translateMix += (d.translateMix - c.translateMix) * a, c.scaleMix += (d.scaleMix - c.scaleMix) * a, c.shearMix += (d.shearMix - c.shearMix) * a
                                }
                            } else {
                                var p = 0,
                                    f = 0,
                                    m = 0,
                                    g = 0;
                                if (i >= l[l.length - s.ENTRIES]) {
                                    var v = l.length;
                                    p = l[v + s.PREV_ROTATE], f = l[v + s.PREV_TRANSLATE], m = l[v + s.PREV_SCALE], g = l[v + s.PREV_SHEAR]
                                } else {
                                    var y = n.binarySearch(l, i, s.ENTRIES);
                                    p = l[y + s.PREV_ROTATE], f = l[y + s.PREV_TRANSLATE], m = l[y + s.PREV_SCALE], g = l[y + s.PREV_SHEAR];
                                    var x = l[y],
                                        _ = this.getCurvePercent(y / s.ENTRIES - 1, 1 - (i - x) / (l[y + s.PREV_TIME] - x));
                                    p += (l[y + s.ROTATE] - p) * _, f += (l[y + s.TRANSLATE] - f) * _, m += (l[y + s.SCALE] - m) * _, g += (l[y + s.SHEAR] - g) * _
                                }
                                if (h == e.setup) {
                                    d = c.data;
                                    c.rotateMix = d.rotateMix + (p - d.rotateMix) * a, c.translateMix = d.translateMix + (f - d.translateMix) * a, c.scaleMix = d.scaleMix + (m - d.scaleMix) * a, c.shearMix = d.shearMix + (g - d.shearMix) * a
                                } else c.rotateMix += (p - c.rotateMix) * a, c.translateMix += (f - c.translateMix) * a, c.scaleMix += (m - c.scaleMix) * a, c.shearMix += (g - c.shearMix) * a
                            }
                    }, s.ENTRIES = 5, s.PREV_TIME = -5, s.PREV_ROTATE = -4, s.PREV_TRANSLATE = -3, s.PREV_SCALE = -2, s.PREV_SHEAR = -1, s.ROTATE = 1, s.TRANSLATE = 2, s.SCALE = 3, s.SHEAR = 4, s
                }(s);
                t.TransformConstraintTimeline = x;
                var _ = function(r) {
                    function s(e) {
                        var i = r.call(this, e) || this;
                        return i.frames = t.Utils.newFloatArray(e * s.ENTRIES), i
                    }
                    return o(s, r), s.prototype.getPropertyId = function() {
                        return (i.pathConstraintPosition << 24) + this.pathConstraintIndex
                    }, s.prototype.setFrame = function(t, e, r) {
                        t *= s.ENTRIES, this.frames[t] = e, this.frames[t + s.VALUE] = r
                    }, s.prototype.apply = function(t, r, i, o, a, h, u) {
                        var l = this.frames,
                            c = t.pathConstraints[this.pathConstraintIndex];
                        if (c.active)
                            if (i < l[0]) switch (h) {
                                case e.setup:
                                    return void(c.position = c.data.position);
                                case e.first:
                                    c.position += (c.data.position - c.position) * a
                            } else {
                                var d = 0;
                                if (i >= l[l.length - s.ENTRIES]) d = l[l.length + s.PREV_VALUE];
                                else {
                                    var p = n.binarySearch(l, i, s.ENTRIES);
                                    d = l[p + s.PREV_VALUE];
                                    var f = l[p],
                                        m = this.getCurvePercent(p / s.ENTRIES - 1, 1 - (i - f) / (l[p + s.PREV_TIME] - f));
                                    d += (l[p + s.VALUE] - d) * m
                                }
                                h == e.setup ? c.position = c.data.position + (d - c.data.position) * a : c.position += (d - c.position) * a
                            }
                    }, s.ENTRIES = 2, s.PREV_TIME = -2, s.PREV_VALUE = -1, s.VALUE = 1, s
                }(s);
                t.PathConstraintPositionTimeline = _;
                var b = function(t) {
                    function r(e) {
                        return t.call(this, e) || this
                    }
                    return o(r, t), r.prototype.getPropertyId = function() {
                        return (i.pathConstraintSpacing << 24) + this.pathConstraintIndex
                    }, r.prototype.apply = function(t, i, o, s, a, h, u) {
                        var l = this.frames,
                            c = t.pathConstraints[this.pathConstraintIndex];
                        if (c.active)
                            if (o < l[0]) switch (h) {
                                case e.setup:
                                    return void(c.spacing = c.data.spacing);
                                case e.first:
                                    c.spacing += (c.data.spacing - c.spacing) * a
                            } else {
                                var d = 0;
                                if (o >= l[l.length - r.ENTRIES]) d = l[l.length + r.PREV_VALUE];
                                else {
                                    var p = n.binarySearch(l, o, r.ENTRIES);
                                    d = l[p + r.PREV_VALUE];
                                    var f = l[p],
                                        m = this.getCurvePercent(p / r.ENTRIES - 1, 1 - (o - f) / (l[p + r.PREV_TIME] - f));
                                    d += (l[p + r.VALUE] - d) * m
                                }
                                h == e.setup ? c.spacing = c.data.spacing + (d - c.data.spacing) * a : c.spacing += (d - c.spacing) * a
                            }
                    }, r
                }(_);
                t.PathConstraintSpacingTimeline = b;
                var T = function(r) {
                    function s(e) {
                        var i = r.call(this, e) || this;
                        return i.frames = t.Utils.newFloatArray(e * s.ENTRIES), i
                    }
                    return o(s, r), s.prototype.getPropertyId = function() {
                        return (i.pathConstraintMix << 24) + this.pathConstraintIndex
                    }, s.prototype.setFrame = function(t, e, r, i) {
                        t *= s.ENTRIES, this.frames[t] = e, this.frames[t + s.ROTATE] = r, this.frames[t + s.TRANSLATE] = i
                    }, s.prototype.apply = function(t, r, i, o, a, h, u) {
                        var l = this.frames,
                            c = t.pathConstraints[this.pathConstraintIndex];
                        if (c.active)
                            if (i < l[0]) switch (h) {
                                case e.setup:
                                    return c.rotateMix = c.data.rotateMix, void(c.translateMix = c.data.translateMix);
                                case e.first:
                                    c.rotateMix += (c.data.rotateMix - c.rotateMix) * a, c.translateMix += (c.data.translateMix - c.translateMix) * a
                            } else {
                                var d = 0,
                                    p = 0;
                                if (i >= l[l.length - s.ENTRIES]) d = l[l.length + s.PREV_ROTATE], p = l[l.length + s.PREV_TRANSLATE];
                                else {
                                    var f = n.binarySearch(l, i, s.ENTRIES);
                                    d = l[f + s.PREV_ROTATE], p = l[f + s.PREV_TRANSLATE];
                                    var m = l[f],
                                        g = this.getCurvePercent(f / s.ENTRIES - 1, 1 - (i - m) / (l[f + s.PREV_TIME] - m));
                                    d += (l[f + s.ROTATE] - d) * g, p += (l[f + s.TRANSLATE] - p) * g
                                }
                                h == e.setup ? (c.rotateMix = c.data.rotateMix + (d - c.data.rotateMix) * a, c.translateMix = c.data.translateMix + (p - c.data.translateMix) * a) : (c.rotateMix += (d - c.rotateMix) * a, c.translateMix += (p - c.translateMix) * a)
                            }
                    }, s.ENTRIES = 3, s.PREV_TIME = -3, s.PREV_ROTATE = -2, s.PREV_TRANSLATE = -1, s.ROTATE = 1, s.TRANSLATE = 2, s
                }(s);
                t.PathConstraintMixTimeline = T
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function e(e) {
                        this.tracks = new Array, this.events = new Array, this.listeners = new Array, this.queue = new n(this), this.propertyIDs = new t.IntSet, this.animationsChanged = !1, this.timeScale = 1, this.trackEntryPool = new t.Pool((function() {
                            return new r
                        })), this.data = e
                    }
                    return e.prototype.update = function(t) {
                        t *= this.timeScale;
                        for (var e = this.tracks, r = 0, i = e.length; r < i; r++) {
                            var n = e[r];
                            if (null != n) {
                                n.animationLast = n.nextAnimationLast, n.trackLast = n.nextTrackLast;
                                var o = t * n.timeScale;
                                if (n.delay > 0) {
                                    if (n.delay -= o, n.delay > 0) continue;
                                    o = -n.delay, n.delay = 0
                                }
                                var s = n.next;
                                if (null != s) {
                                    var a = n.trackLast - s.delay;
                                    if (a >= 0) {
                                        for (s.delay = 0, s.trackTime = 0 == n.timeScale ? 0 : (a / n.timeScale + t) * s.timeScale, n.trackTime += o, this.setCurrent(r, s, !0); null != s.mixingFrom;) s.mixTime += t, s = s.mixingFrom;
                                        continue
                                    }
                                } else if (n.trackLast >= n.trackEnd && null == n.mixingFrom) {
                                    e[r] = null, this.queue.end(n), this.disposeNext(n);
                                    continue
                                }
                                if (null != n.mixingFrom && this.updateMixingFrom(n, t)) {
                                    var h = n.mixingFrom;
                                    for (n.mixingFrom = null, null != h && (h.mixingTo = null); null != h;) this.queue.end(h), h = h.mixingFrom
                                }
                                n.trackTime += o
                            }
                        }
                        this.queue.drain()
                    }, e.prototype.updateMixingFrom = function(t, e) {
                        var r = t.mixingFrom;
                        if (null == r) return !0;
                        var i = this.updateMixingFrom(r, e);
                        return r.animationLast = r.nextAnimationLast, r.trackLast = r.nextTrackLast, t.mixTime > 0 && t.mixTime >= t.mixDuration ? (0 != r.totalAlpha && 0 != t.mixDuration || (t.mixingFrom = r.mixingFrom, null != r.mixingFrom && (r.mixingFrom.mixingTo = t), t.interruptAlpha = r.interruptAlpha, this.queue.end(r)), i) : (r.trackTime += e * r.timeScale, t.mixTime += e, !1)
                    }, e.prototype.apply = function(r) {
                        if (null == r) throw new Error("skeleton cannot be null.");
                        this.animationsChanged && this._animationsChanged();
                        for (var i = this.events, n = this.tracks, o = !1, s = 0, a = n.length; s < a; s++) {
                            var h = n[s];
                            if (!(null == h || h.delay > 0)) {
                                o = !0;
                                var u = 0 == s ? t.MixBlend.first : h.mixBlend,
                                    l = h.alpha;
                                null != h.mixingFrom ? l *= this.applyMixingFrom(h, r, u) : h.trackTime >= h.trackEnd && null == h.next && (l = 0);
                                var c = h.animationLast,
                                    d = h.getAnimationTime(),
                                    p = h.animation.timelines.length,
                                    f = h.animation.timelines;
                                if (0 == s && 1 == l || u == t.MixBlend.add)
                                    for (var m = 0; m < p; m++) t.Utils.webkit602BugfixHelper(l, u), f[m].apply(r, c, d, i, l, u, t.MixDirection.mixIn);
                                else {
                                    var g = h.timelineMode,
                                        v = 0 == h.timelinesRotation.length;
                                    v && t.Utils.setArraySize(h.timelinesRotation, p << 1, null);
                                    var y = h.timelinesRotation;
                                    for (m = 0; m < p; m++) {
                                        var x = f[m],
                                            _ = (g[m] & e.NOT_LAST - 1) == e.SUBSEQUENT ? u : t.MixBlend.setup;
                                        x instanceof t.RotateTimeline ? this.applyRotateTimeline(x, r, d, l, _, y, m << 1, v) : (t.Utils.webkit602BugfixHelper(l, u), x.apply(r, c, d, i, l, _, t.MixDirection.mixIn))
                                    }
                                }
                                this.queueEvents(h, d), i.length = 0, h.nextAnimationLast = d, h.nextTrackLast = h.trackTime
                            }
                        }
                        return this.queue.drain(), o
                    }, e.prototype.applyMixingFrom = function(r, i, n) {
                        var o = r.mixingFrom;
                        null != o.mixingFrom && this.applyMixingFrom(o, i, n);
                        var s = 0;
                        0 == r.mixDuration ? (s = 1, n == t.MixBlend.first && (n = t.MixBlend.setup)) : ((s = r.mixTime / r.mixDuration) > 1 && (s = 1), n != t.MixBlend.first && (n = o.mixBlend));
                        var a = s < o.eventThreshold ? this.events : null,
                            h = s < o.attachmentThreshold,
                            u = s < o.drawOrderThreshold,
                            l = o.animationLast,
                            c = o.getAnimationTime(),
                            d = o.animation.timelines.length,
                            p = o.animation.timelines,
                            f = o.alpha * r.interruptAlpha,
                            m = f * (1 - s);
                        if (n == t.MixBlend.add)
                            for (var g = 0; g < d; g++) p[g].apply(i, l, c, a, m, n, t.MixDirection.mixOut);
                        else {
                            var v = o.timelineMode,
                                y = o.timelineHoldMix,
                                x = 0 == o.timelinesRotation.length;
                            x && t.Utils.setArraySize(o.timelinesRotation, d << 1, null);
                            var _ = o.timelinesRotation;
                            o.totalAlpha = 0;
                            for (g = 0; g < d; g++) {
                                var b = p[g],
                                    T = t.MixDirection.mixOut,
                                    w = void 0,
                                    E = 0;
                                switch (v[g] & e.NOT_LAST - 1) {
                                    case e.SUBSEQUENT:
                                        if (w = n, !h && b instanceof t.AttachmentTimeline) {
                                            if ((v[g] & e.NOT_LAST) == e.NOT_LAST) continue;
                                            w = t.MixBlend.setup
                                        }
                                        if (!u && b instanceof t.DrawOrderTimeline) continue;
                                        E = m;
                                        break;
                                    case e.FIRST:
                                        w = t.MixBlend.setup, E = m;
                                        break;
                                    case e.HOLD:
                                        w = t.MixBlend.setup, E = f;
                                        break;
                                    default:
                                        w = t.MixBlend.setup;
                                        var I = y[g];
                                        E = f * Math.max(0, 1 - I.mixTime / I.mixDuration)
                                }
                                o.totalAlpha += E, b instanceof t.RotateTimeline ? this.applyRotateTimeline(b, i, c, E, w, _, g << 1, x) : (t.Utils.webkit602BugfixHelper(E, n), w == t.MixBlend.setup && (b instanceof t.AttachmentTimeline ? (h || (v[g] & e.NOT_LAST) == e.NOT_LAST) && (T = t.MixDirection.mixIn) : b instanceof t.DrawOrderTimeline && u && (T = t.MixDirection.mixIn)), b.apply(i, l, c, a, E, w, T))
                            }
                        }
                        return r.mixDuration > 0 && this.queueEvents(o, c), this.events.length = 0, o.nextAnimationLast = c, o.nextTrackLast = o.trackTime, s
                    }, e.prototype.applyRotateTimeline = function(e, r, i, n, o, s, a, h) {
                        if (h && (s[a] = 0), 1 != n) {
                            var u = e,
                                l = u.frames,
                                c = r.bones[u.boneIndex];
                            if (c.active) {
                                var d = 0,
                                    p = 0;
                                if (i < l[0]) switch (o) {
                                        case t.MixBlend.setup:
                                            c.rotation = c.data.rotation;
                                        default:
                                            return;
                                        case t.MixBlend.first:
                                            d = c.rotation, p = c.data.rotation
                                    } else if (d = o == t.MixBlend.setup ? c.data.rotation : c.rotation, i >= l[l.length - t.RotateTimeline.ENTRIES]) p = c.data.rotation + l[l.length + t.RotateTimeline.PREV_ROTATION];
                                    else {
                                        var f = t.Animation.binarySearch(l, i, t.RotateTimeline.ENTRIES),
                                            m = l[f + t.RotateTimeline.PREV_ROTATION],
                                            g = l[f],
                                            v = u.getCurvePercent((f >> 1) - 1, 1 - (i - g) / (l[f + t.RotateTimeline.PREV_TIME] - g));
                                        p = l[f + t.RotateTimeline.ROTATION] - m, p = m + (p -= 360 * (16384 - (16384.499999999996 - p / 360 | 0))) * v + c.data.rotation, p -= 360 * (16384 - (16384.499999999996 - p / 360 | 0))
                                    } var y = 0,
                                    x = p - d;
                                if (0 == (x -= 360 * (16384 - (16384.499999999996 - x / 360 | 0)))) y = s[a];
                                else {
                                    var _ = 0,
                                        b = 0;
                                    h ? (_ = 0, b = x) : (_ = s[a], b = s[a + 1]);
                                    var T = x > 0,
                                        w = _ >= 0;
                                    t.MathUtils.signum(b) != t.MathUtils.signum(x) && Math.abs(b) <= 90 && (Math.abs(_) > 180 && (_ += 360 * t.MathUtils.signum(_)), w = T), y = x + _ - _ % 360, w != T && (y += 360 * t.MathUtils.signum(_)), s[a] = y
                                }
                                s[a + 1] = x, d += y * n, c.rotation = d - 360 * (16384 - (16384.499999999996 - d / 360 | 0))
                            }
                        } else e.apply(r, 0, i, null, 1, o, t.MixDirection.mixIn)
                    }, e.prototype.queueEvents = function(t, e) {
                        for (var r = t.animationStart, i = t.animationEnd, n = i - r, o = t.trackLast % n, s = this.events, a = 0, h = s.length; a < h; a++) {
                            var u = s[a];
                            if (u.time < o) break;
                            u.time > i || this.queue.event(t, u)
                        }
                        for ((t.loop ? 0 == n || o > t.trackTime % n : e >= i && t.animationLast < i) && this.queue.complete(t); a < h; a++) {
                            s[a].time < r || this.queue.event(t, s[a])
                        }
                    }, e.prototype.clearTracks = function() {
                        var t = this.queue.drainDisabled;
                        this.queue.drainDisabled = !0;
                        for (var e = 0, r = this.tracks.length; e < r; e++) this.clearTrack(e);
                        this.tracks.length = 0, this.queue.drainDisabled = t, this.queue.drain()
                    }, e.prototype.clearTrack = function(t) {
                        if (!(t >= this.tracks.length)) {
                            var e = this.tracks[t];
                            if (null != e) {
                                this.queue.end(e), this.disposeNext(e);
                                for (var r = e;;) {
                                    var i = r.mixingFrom;
                                    if (null == i) break;
                                    this.queue.end(i), r.mixingFrom = null, r.mixingTo = null, r = i
                                }
                                this.tracks[e.trackIndex] = null, this.queue.drain()
                            }
                        }
                    }, e.prototype.setCurrent = function(t, e, r) {
                        var i = this.expandToIndex(t);
                        this.tracks[t] = e, null != i && (r && this.queue.interrupt(i), e.mixingFrom = i, i.mixingTo = e, e.mixTime = 0, null != i.mixingFrom && i.mixDuration > 0 && (e.interruptAlpha *= Math.min(1, i.mixTime / i.mixDuration)), i.timelinesRotation.length = 0), this.queue.start(e)
                    }, e.prototype.setAnimation = function(t, e, r) {
                        var i = this.data.skeletonData.findAnimation(e);
                        if (null == i) throw new Error("Animation not found: " + e);
                        return this.setAnimationWith(t, i, r)
                    }, e.prototype.setAnimationWith = function(t, e, r) {
                        if (null == e) throw new Error("animation cannot be null.");
                        var i = !0,
                            n = this.expandToIndex(t);
                        null != n && (-1 == n.nextTrackLast ? (this.tracks[t] = n.mixingFrom, this.queue.interrupt(n), this.queue.end(n), this.disposeNext(n), n = n.mixingFrom, i = !1) : this.disposeNext(n));
                        var o = this.trackEntry(t, e, r, n);
                        return this.setCurrent(t, o, i), this.queue.drain(), o
                    }, e.prototype.addAnimation = function(t, e, r, i) {
                        var n = this.data.skeletonData.findAnimation(e);
                        if (null == n) throw new Error("Animation not found: " + e);
                        return this.addAnimationWith(t, n, r, i)
                    }, e.prototype.addAnimationWith = function(t, e, r, i) {
                        if (null == e) throw new Error("animation cannot be null.");
                        var n = this.expandToIndex(t);
                        if (null != n)
                            for (; null != n.next;) n = n.next;
                        var o = this.trackEntry(t, e, r, n);
                        if (null == n) this.setCurrent(t, o, !0), this.queue.drain();
                        else if (n.next = o, i <= 0) {
                            var s = n.animationEnd - n.animationStart;
                            0 != s ? (n.loop ? i += s * (1 + (n.trackTime / s | 0)) : i += Math.max(s, n.trackTime), i -= this.data.getMix(n.animation, e)) : i = n.trackTime
                        }
                        return o.delay = i, o
                    }, e.prototype.setEmptyAnimation = function(t, r) {
                        var i = this.setAnimationWith(t, e.emptyAnimation, !1);
                        return i.mixDuration = r, i.trackEnd = r, i
                    }, e.prototype.addEmptyAnimation = function(t, r, i) {
                        i <= 0 && (i -= r);
                        var n = this.addAnimationWith(t, e.emptyAnimation, !1, i);
                        return n.mixDuration = r, n.trackEnd = r, n
                    }, e.prototype.setEmptyAnimations = function(t) {
                        var e = this.queue.drainDisabled;
                        this.queue.drainDisabled = !0;
                        for (var r = 0, i = this.tracks.length; r < i; r++) {
                            var n = this.tracks[r];
                            null != n && this.setEmptyAnimation(n.trackIndex, t)
                        }
                        this.queue.drainDisabled = e, this.queue.drain()
                    }, e.prototype.expandToIndex = function(e) {
                        return e < this.tracks.length ? this.tracks[e] : (t.Utils.ensureArrayCapacity(this.tracks, e + 1, null), this.tracks.length = e + 1, null)
                    }, e.prototype.trackEntry = function(t, e, r, i) {
                        var n = this.trackEntryPool.obtain();
                        return n.trackIndex = t, n.animation = e, n.loop = r, n.holdPrevious = !1, n.eventThreshold = 0, n.attachmentThreshold = 0, n.drawOrderThreshold = 0, n.animationStart = 0, n.animationEnd = e.duration, n.animationLast = -1, n.nextAnimationLast = -1, n.delay = 0, n.trackTime = 0, n.trackLast = -1, n.nextTrackLast = -1, n.trackEnd = Number.MAX_VALUE, n.timeScale = 1, n.alpha = 1, n.interruptAlpha = 1, n.mixTime = 0, n.mixDuration = null == i ? 0 : this.data.getMix(i.animation, e), n
                    }, e.prototype.disposeNext = function(t) {
                        for (var e = t.next; null != e;) this.queue.dispose(e), e = e.next;
                        t.next = null
                    }, e.prototype._animationsChanged = function() {
                        this.animationsChanged = !1, this.propertyIDs.clear();
                        for (var e = 0, r = this.tracks.length; e < r; e++) {
                            if (null != (i = this.tracks[e])) {
                                for (; null != i.mixingFrom;) i = i.mixingFrom;
                                do {
                                    null != i.mixingFrom && i.mixBlend == t.MixBlend.add || this.computeHold(i), i = i.mixingTo
                                } while (null != i)
                            }
                        }
                        this.propertyIDs.clear();
                        for (e = this.tracks.length - 1; e >= 0; e--)
                            for (var i = this.tracks[e]; null != i;) this.computeNotLast(i), i = i.mixingFrom
                    }, e.prototype.computeHold = function(r) {
                        var i = r.mixingTo,
                            n = r.animation.timelines,
                            o = r.animation.timelines.length,
                            s = t.Utils.setArraySize(r.timelineMode, o);
                        r.timelineHoldMix.length = 0;
                        var a = t.Utils.setArraySize(r.timelineHoldMix, o),
                            h = this.propertyIDs;
                        if (null != i && i.holdPrevious)
                            for (var u = 0; u < o; u++) h.add(n[u].getPropertyId()), s[u] = e.HOLD;
                        else t: for (u = 0; u < o; u++) {
                            var l = n[u],
                                c = l.getPropertyId();
                            if (h.add(c))
                                if (null == i || l instanceof t.AttachmentTimeline || l instanceof t.DrawOrderTimeline || l instanceof t.EventTimeline || !this.hasTimeline(i, c)) s[u] = e.FIRST;
                                else {
                                    for (var d = i.mixingTo; null != d; d = d.mixingTo)
                                        if (!this.hasTimeline(d, c)) {
                                            if (r.mixDuration > 0) {
                                                s[u] = e.HOLD_MIX, a[u] = d;
                                                continue t
                                            }
                                            break
                                        } s[u] = e.HOLD
                                }
                            else s[u] = e.SUBSEQUENT
                        }
                    }, e.prototype.computeNotLast = function(r) {
                        for (var i = r.animation.timelines, n = r.animation.timelines.length, o = r.timelineMode, s = this.propertyIDs, a = 0; a < n; a++)
                            if (i[a] instanceof t.AttachmentTimeline) {
                                var h = i[a];
                                s.add(h.slotIndex) || (o[a] |= e.NOT_LAST)
                            }
                    }, e.prototype.hasTimeline = function(t, e) {
                        for (var r = t.animation.timelines, i = 0, n = r.length; i < n; i++)
                            if (r[i].getPropertyId() == e) return !0;
                        return !1
                    }, e.prototype.getCurrent = function(t) {
                        return t >= this.tracks.length ? null : this.tracks[t]
                    }, e.prototype.addListener = function(t) {
                        if (null == t) throw new Error("listener cannot be null.");
                        this.listeners.push(t)
                    }, e.prototype.removeListener = function(t) {
                        var e = this.listeners.indexOf(t);
                        e >= 0 && this.listeners.splice(e, 1)
                    }, e.prototype.clearListeners = function() {
                        this.listeners.length = 0
                    }, e.prototype.clearListenerNotifications = function() {
                        this.queue.clear()
                    }, e.prototype.setAnimationByName = function(t, r, i) {
                        e.deprecatedWarning1 || (e.deprecatedWarning1 = !0, console.warn("Spine Deprecation Warning: AnimationState.setAnimationByName is deprecated, please use setAnimation from now on.")), this.setAnimation(t, r, i)
                    }, e.prototype.addAnimationByName = function(t, r, i, n) {
                        e.deprecatedWarning2 || (e.deprecatedWarning2 = !0, console.warn("Spine Deprecation Warning: AnimationState.addAnimationByName is deprecated, please use addAnimation from now on.")), this.addAnimation(t, r, i, n)
                    }, e.prototype.hasAnimation = function(t) {
                        return null !== this.data.skeletonData.findAnimation(t)
                    }, e.prototype.hasAnimationByName = function(t) {
                        return e.deprecatedWarning3 || (e.deprecatedWarning3 = !0, console.warn("Spine Deprecation Warning: AnimationState.hasAnimationByName is deprecated, please use hasAnimation from now on.")), this.hasAnimation(t)
                    }, e.emptyAnimation = new t.Animation("<empty>", [], 0), e.SUBSEQUENT = 0, e.FIRST = 1, e.HOLD = 2, e.HOLD_MIX = 3, e.NOT_LAST = 4, e.deprecatedWarning1 = !1, e.deprecatedWarning2 = !1, e.deprecatedWarning3 = !1, e
                }();
                t.AnimationState = e;
                var r = function() {
                    function e() {
                        this.mixBlend = t.MixBlend.replace, this.timelineMode = new Array, this.timelineHoldMix = new Array, this.timelinesRotation = new Array
                    }
                    return e.prototype.reset = function() {
                        this.next = null, this.mixingFrom = null, this.mixingTo = null, this.animation = null, this.listener = null, this.timelineMode.length = 0, this.timelineHoldMix.length = 0, this.timelinesRotation.length = 0
                    }, e.prototype.getAnimationTime = function() {
                        if (this.loop) {
                            var t = this.animationEnd - this.animationStart;
                            return 0 == t ? this.animationStart : this.trackTime % t + this.animationStart
                        }
                        return Math.min(this.trackTime + this.animationStart, this.animationEnd)
                    }, e.prototype.setAnimationLast = function(t) {
                        this.animationLast = t, this.nextAnimationLast = t
                    }, e.prototype.isComplete = function() {
                        return this.trackTime >= this.animationEnd - this.animationStart
                    }, e.prototype.resetRotationDirections = function() {
                        this.timelinesRotation.length = 0
                    }, Object.defineProperty(e.prototype, "time", {
                        get: function() {
                            return e.deprecatedWarning1 || (e.deprecatedWarning1 = !0, console.warn("Spine Deprecation Warning: TrackEntry.time is deprecated, please use trackTime from now on.")), this.trackTime
                        },
                        set: function(t) {
                            e.deprecatedWarning1 || (e.deprecatedWarning1 = !0, console.warn("Spine Deprecation Warning: TrackEntry.time is deprecated, please use trackTime from now on.")), this.trackTime = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "endTime", {
                        get: function() {
                            return e.deprecatedWarning2 || (e.deprecatedWarning2 = !0, console.warn("Spine Deprecation Warning: TrackEntry.endTime is deprecated, please use trackEnd from now on.")), this.trackTime
                        },
                        set: function(t) {
                            e.deprecatedWarning2 || (e.deprecatedWarning2 = !0, console.warn("Spine Deprecation Warning: TrackEntry.endTime is deprecated, please use trackEnd from now on.")), this.trackTime = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.loopsCount = function() {
                        return Math.floor(this.trackTime / this.trackEnd)
                    }, e.deprecatedWarning1 = !1, e.deprecatedWarning2 = !1, e
                }();
                t.TrackEntry = r;
                var i, n = function() {
                    function e(t) {
                        this.objects = [], this.drainDisabled = !1, this.animState = t
                    }
                    return e.prototype.start = function(t) {
                        this.objects.push(i.start), this.objects.push(t), this.animState.animationsChanged = !0
                    }, e.prototype.interrupt = function(t) {
                        this.objects.push(i.interrupt), this.objects.push(t)
                    }, e.prototype.end = function(t) {
                        this.objects.push(i.end), this.objects.push(t), this.animState.animationsChanged = !0
                    }, e.prototype.dispose = function(t) {
                        this.objects.push(i.dispose), this.objects.push(t)
                    }, e.prototype.complete = function(t) {
                        this.objects.push(i.complete), this.objects.push(t)
                    }, e.prototype.event = function(t, e) {
                        this.objects.push(i.event), this.objects.push(t), this.objects.push(e)
                    }, e.prototype.deprecateStuff = function() {
                        return e.deprecatedWarning1 || (e.deprecatedWarning1 = !0, console.warn("Spine Deprecation Warning: onComplete, onStart, onEnd, onEvent art deprecated, please use listeners from now on. 'state.addListener({ complete: function(track, event) { } })'")), !0
                    }, e.prototype.drain = function() {
                        if (!this.drainDisabled) {
                            this.drainDisabled = !0;
                            for (var e = this.objects, r = this.animState.listeners, n = 0; n < e.length; n += 2) {
                                var o = e[n],
                                    s = e[n + 1];
                                switch (o) {
                                    case i.start:
                                        null != s.listener && s.listener.start && s.listener.start(s);
                                        for (var a = 0; a < r.length; a++) r[a].start && r[a].start(s);
                                        s.onStart && this.deprecateStuff() && s.onStart(s.trackIndex), this.animState.onStart && this.deprecateStuff() && this.deprecateStuff && this.animState.onStart(s.trackIndex);
                                        break;
                                    case i.interrupt:
                                        null != s.listener && s.listener.interrupt && s.listener.interrupt(s);
                                        for (a = 0; a < r.length; a++) r[a].interrupt && r[a].interrupt(s);
                                        break;
                                    case i.end:
                                        null != s.listener && s.listener.end && s.listener.end(s);
                                        for (a = 0; a < r.length; a++) r[a].end && r[a].end(s);
                                        s.onEnd && this.deprecateStuff() && s.onEnd(s.trackIndex), this.animState.onEnd && this.deprecateStuff() && this.animState.onEnd(s.trackIndex);
                                    case i.dispose:
                                        null != s.listener && s.listener.dispose && s.listener.dispose(s);
                                        for (a = 0; a < r.length; a++) r[a].dispose && r[a].dispose(s);
                                        this.animState.trackEntryPool.free(s);
                                        break;
                                    case i.complete:
                                        null != s.listener && s.listener.complete && s.listener.complete(s);
                                        for (a = 0; a < r.length; a++) r[a].complete && r[a].complete(s);
                                        var h = t.MathUtils.toInt(s.loopsCount());
                                        s.onComplete && this.deprecateStuff() && s.onComplete(s.trackIndex, h), this.animState.onComplete && this.deprecateStuff() && this.animState.onComplete(s.trackIndex, h);
                                        break;
                                    case i.event:
                                        var u = e[2 + n++];
                                        null != s.listener && s.listener.event && s.listener.event(s, u);
                                        for (a = 0; a < r.length; a++) r[a].event && r[a].event(s, u);
                                        s.onEvent && this.deprecateStuff() && s.onEvent(s.trackIndex, u), this.animState.onEvent && this.deprecateStuff() && this.animState.onEvent(s.trackIndex, u)
                                }
                            }
                            this.clear(), this.drainDisabled = !1
                        }
                    }, e.prototype.clear = function() {
                        this.objects.length = 0
                    }, e.deprecatedWarning1 = !1, e
                }();
                t.EventQueue = n,
                    function(t) {
                        t[t.start = 0] = "start", t[t.interrupt = 1] = "interrupt", t[t.end = 2] = "end", t[t.dispose = 3] = "dispose", t[t.complete = 4] = "complete", t[t.event = 5] = "event"
                    }(i = t.EventType || (t.EventType = {}));
                var o = function() {
                    function t() {}
                    return t.prototype.start = function(t) {}, t.prototype.interrupt = function(t) {}, t.prototype.end = function(t) {}, t.prototype.dispose = function(t) {}, t.prototype.complete = function(t) {}, t.prototype.event = function(t, e) {}, t
                }();
                t.AnimationStateAdapter2 = o
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function t(t) {
                        if (this.animationToMixTime = {}, this.defaultMix = 0, null == t) throw new Error("skeletonData cannot be null.");
                        this.skeletonData = t
                    }
                    return t.prototype.setMix = function(t, e, r) {
                        var i = this.skeletonData.findAnimation(t);
                        if (null == i) throw new Error("Animation not found: " + t);
                        var n = this.skeletonData.findAnimation(e);
                        if (null == n) throw new Error("Animation not found: " + e);
                        this.setMixWith(i, n, r)
                    }, t.prototype.setMixByName = function(e, r, i) {
                        t.deprecatedWarning1 || (t.deprecatedWarning1 = !0, console.warn("Deprecation Warning: AnimationStateData.setMixByName is deprecated, please use setMix from now on.")), this.setMix(e, r, i)
                    }, t.prototype.setMixWith = function(t, e, r) {
                        if (null == t) throw new Error("from cannot be null.");
                        if (null == e) throw new Error("to cannot be null.");
                        var i = t.name + "." + e.name;
                        this.animationToMixTime[i] = r
                    }, t.prototype.getMix = function(t, e) {
                        var r = t.name + "." + e.name,
                            i = this.animationToMixTime[r];
                        return void 0 === i ? this.defaultMix : i
                    }, t.deprecatedWarning1 = !1, t
                }();
                t.AnimationStateData = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function e(t) {
                        this.atlas = t
                    }
                    return e.prototype.newRegionAttachment = function(e, r, i) {
                        var n = this.atlas.findRegion(i);
                        if (null == n) throw new Error("Region not found in atlas: " + i + " (region attachment: " + r + ")");
                        var o = new t.RegionAttachment(r);
                        return o.region = n, o
                    }, e.prototype.newMeshAttachment = function(e, r, i) {
                        var n = this.atlas.findRegion(i);
                        if (null == n) throw new Error("Region not found in atlas: " + i + " (mesh attachment: " + r + ")");
                        var o = new t.MeshAttachment(r);
                        return o.region = n, o
                    }, e.prototype.newBoundingBoxAttachment = function(e, r) {
                        return new t.BoundingBoxAttachment(r)
                    }, e.prototype.newPathAttachment = function(e, r) {
                        return new t.PathAttachment(r)
                    }, e.prototype.newPointAttachment = function(e, r) {
                        return new t.PointAttachment(r)
                    }, e.prototype.newClippingAttachment = function(e, r) {
                        return new t.ClippingAttachment(r)
                    }, e
                }();
                t.AtlasAttachmentLoader = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                ! function(t) {
                    t[t.Normal = 0] = "Normal", t[t.Additive = 1] = "Additive", t[t.Multiply = 2] = "Multiply", t[t.Screen = 3] = "Screen"
                }(t.BlendMode || (t.BlendMode = {}))
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function e(t, e, r) {
                        if (this.matrix = new PIXI.Matrix, this.children = new Array, this.x = 0, this.y = 0, this.rotation = 0, this.scaleX = 0, this.scaleY = 0, this.shearX = 0, this.shearY = 0, this.ax = 0, this.ay = 0, this.arotation = 0, this.ascaleX = 0, this.ascaleY = 0, this.ashearX = 0, this.ashearY = 0, this.appliedValid = !1, this.sorted = !1, this.active = !1, null == t) throw new Error("data cannot be null.");
                        if (null == e) throw new Error("skeleton cannot be null.");
                        this.data = t, this.skeleton = e, this.parent = r, this.setToSetupPose()
                    }
                    return Object.defineProperty(e.prototype, "worldX", {
                        get: function() {
                            return this.matrix.tx
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "worldY", {
                        get: function() {
                            return this.matrix.ty
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.isActive = function() {
                        return this.active
                    }, e.prototype.update = function() {
                        this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY)
                    }, e.prototype.updateWorldTransform = function() {
                        this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY)
                    }, e.prototype.updateWorldTransformWith = function(r, i, n, o, s, a, h) {
                        this.ax = r, this.ay = i, this.arotation = n, this.ascaleX = o, this.ascaleY = s, this.ashearX = a, this.ashearY = h, this.appliedValid = !0;
                        var u = this.parent,
                            l = this.matrix,
                            c = this.skeleton.scaleX,
                            d = e.yDown ? -this.skeleton.scaleY : this.skeleton.scaleY;
                        if (null == u) {
                            var p = this.skeleton,
                                f = n + 90 + h;
                            return l.a = t.MathUtils.cosDeg(n + a) * o * c, l.c = t.MathUtils.cosDeg(f) * s * c, l.b = t.MathUtils.sinDeg(n + a) * o * d, l.d = t.MathUtils.sinDeg(f) * s * d, l.tx = r * c + p.x, void(l.ty = i * d + p.y)
                        }
                        var m = u.matrix.a,
                            g = u.matrix.c,
                            v = u.matrix.b,
                            y = u.matrix.d;
                        switch (l.tx = m * r + g * i + u.matrix.tx, l.ty = v * r + y * i + u.matrix.ty, this.data.transformMode) {
                            case t.TransformMode.Normal:
                                f = n + 90 + h;
                                var x = t.MathUtils.cosDeg(n + a) * o,
                                    _ = t.MathUtils.cosDeg(f) * s,
                                    b = t.MathUtils.sinDeg(n + a) * o,
                                    T = t.MathUtils.sinDeg(f) * s;
                                return l.a = m * x + g * b, l.c = m * _ + g * T, l.b = v * x + y * b, void(l.d = v * _ + y * T);
                            case t.TransformMode.OnlyTranslation:
                                f = n + 90 + h;
                                l.a = t.MathUtils.cosDeg(n + a) * o, l.c = t.MathUtils.cosDeg(f) * s, l.b = t.MathUtils.sinDeg(n + a) * o, l.d = t.MathUtils.sinDeg(f) * s;
                                break;
                            case t.TransformMode.NoRotationOrReflection:
                                var w = 0;
                                (S = m * m + v * v) > 1e-4 ? (g = v * (S = Math.abs(m * y - g * v) / S), y = m * S, w = Math.atan2(v, m) * t.MathUtils.radDeg) : (m = 0, v = 0, w = 90 - Math.atan2(y, g) * t.MathUtils.radDeg);
                                var E = n + a - w,
                                    I = n + h - w + 90;
                                x = t.MathUtils.cosDeg(E) * o, _ = t.MathUtils.cosDeg(I) * s, b = t.MathUtils.sinDeg(E) * o, T = t.MathUtils.sinDeg(I) * s;
                                l.a = m * x - g * b, l.c = m * _ - g * T, l.b = v * x + y * b, l.d = v * _ + y * T;
                                break;
                            case t.TransformMode.NoScale:
                            case t.TransformMode.NoScaleOrReflection:
                                var S, P = t.MathUtils.cosDeg(n),
                                    A = t.MathUtils.sinDeg(n),
                                    M = (m * P + g * A) / c,
                                    C = (v * P + y * A) / d;
                                (S = Math.sqrt(M * M + C * C)) > 1e-5 && (S = 1 / S), M *= S, C *= S, S = Math.sqrt(M * M + C * C), this.data.transformMode == t.TransformMode.NoScale && m * y - g * v < 0 != (e.yDown ? this.skeleton.scaleX < 0 != this.skeleton.scaleY > 0 : this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0) && (S = -S);
                                var O = Math.PI / 2 + Math.atan2(C, M),
                                    R = Math.cos(O) * S,
                                    D = Math.sin(O) * S;
                                x = t.MathUtils.cosDeg(a) * o, _ = t.MathUtils.cosDeg(90 + h) * s, b = t.MathUtils.sinDeg(a) * o, T = t.MathUtils.sinDeg(90 + h) * s;
                                l.a = M * x + R * b, l.c = M * _ + R * T, l.b = C * x + D * b, l.d = C * _ + D * T
                        }
                        l.a *= c, l.c *= c, l.b *= d, l.d *= d
                    }, e.prototype.setToSetupPose = function() {
                        var t = this.data;
                        this.x = t.x, this.y = t.y, this.rotation = t.rotation, this.scaleX = t.scaleX, this.scaleY = t.scaleY, this.shearX = t.shearX, this.shearY = t.shearY
                    }, e.prototype.getWorldRotationX = function() {
                        return Math.atan2(this.matrix.b, this.matrix.a) * t.MathUtils.radDeg
                    }, e.prototype.getWorldRotationY = function() {
                        return Math.atan2(this.matrix.d, this.matrix.c) * t.MathUtils.radDeg
                    }, e.prototype.getWorldScaleX = function() {
                        var t = this.matrix;
                        return Math.sqrt(t.a * t.a + t.c * t.c)
                    }, e.prototype.getWorldScaleY = function() {
                        var t = this.matrix;
                        return Math.sqrt(t.b * t.b + t.d * t.d)
                    }, e.prototype.updateAppliedTransform = function() {
                        this.appliedValid = !0;
                        var e = this.parent,
                            r = this.matrix;
                        if (null == e) return this.ax = r.tx, this.ay = r.ty, this.arotation = Math.atan2(r.b, r.a) * t.MathUtils.radDeg, this.ascaleX = Math.sqrt(r.a * r.a + r.b * r.b), this.ascaleY = Math.sqrt(r.c * r.c + r.d * r.d), this.ashearX = 0, void(this.ashearY = Math.atan2(r.a * r.c + r.b * r.d, r.a * r.d - r.b * r.c) * t.MathUtils.radDeg);
                        var i = e.matrix,
                            n = 1 / (i.a * i.d - i.b * i.c),
                            o = r.tx - i.tx,
                            s = r.ty - i.ty;
                        this.ax = o * i.d * n - s * i.c * n, this.ay = s * i.a * n - o * i.b * n;
                        var a = n * i.d,
                            h = n * i.a,
                            u = n * i.c,
                            l = n * i.b,
                            c = a * r.a - u * r.b,
                            d = a * r.c - u * r.d,
                            p = h * r.b - l * r.a,
                            f = h * r.d - l * r.c;
                        if (this.ashearX = 0, this.ascaleX = Math.sqrt(c * c + p * p), this.ascaleX > 1e-4) {
                            var m = c * f - d * p;
                            this.ascaleY = m / this.ascaleX, this.ashearY = Math.atan2(c * d + p * f, m) * t.MathUtils.radDeg, this.arotation = Math.atan2(p, c) * t.MathUtils.radDeg
                        } else this.ascaleX = 0, this.ascaleY = Math.sqrt(d * d + f * f), this.ashearY = 0, this.arotation = 90 - Math.atan2(f, d) * t.MathUtils.radDeg
                    }, e.prototype.worldToLocal = function(t) {
                        var e = this.matrix,
                            r = e.a,
                            i = e.c,
                            n = e.b,
                            o = e.d,
                            s = 1 / (r * o - i * n),
                            a = t.x - e.tx,
                            h = t.y - e.ty;
                        return t.x = a * o * s - h * i * s, t.y = h * r * s - a * n * s, t
                    }, e.prototype.localToWorld = function(t) {
                        var e = this.matrix,
                            r = t.x,
                            i = t.y;
                        return t.x = r * e.a + i * e.c + e.tx, t.y = r * e.b + i * e.d + e.ty, t
                    }, e.prototype.worldToLocalRotation = function(e) {
                        var r = t.MathUtils.sinDeg(e),
                            i = t.MathUtils.cosDeg(e),
                            n = this.matrix;
                        return Math.atan2(n.a * r - n.b * i, n.d * i - n.c * r) * t.MathUtils.radDeg
                    }, e.prototype.localToWorldRotation = function(e) {
                        var r = t.MathUtils.sinDeg(e),
                            i = t.MathUtils.cosDeg(e),
                            n = this.matrix;
                        return Math.atan2(i * n.b + r * n.d, i * n.a + r * n.c) * t.MathUtils.radDeg
                    }, e.prototype.rotateWorld = function(e) {
                        var r = this.matrix,
                            i = r.a,
                            n = r.c,
                            o = r.b,
                            s = r.d,
                            a = t.MathUtils.cosDeg(e),
                            h = t.MathUtils.sinDeg(e);
                        r.a = a * i - h * o, r.c = a * n - h * s, r.b = h * i + a * o, r.d = h * n + a * s, this.appliedValid = !1
                    }, e.yDown = !1, e
                }();
                t.Bone = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e, r = function(r, i, n) {
                    if (this.x = 0, this.y = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.shearX = 0, this.shearY = 0, this.transformMode = e.Normal, this.skinRequired = !1, this.color = new t.Color, r < 0) throw new Error("index must be >= 0.");
                    if (null == i) throw new Error("name cannot be null.");
                    this.index = r, this.name = i, this.parent = n
                };
                t.BoneData = r,
                    function(t) {
                        t[t.Normal = 0] = "Normal", t[t.OnlyTranslation = 1] = "OnlyTranslation", t[t.NoRotationOrReflection = 2] = "NoRotationOrReflection", t[t.NoScale = 3] = "NoScale", t[t.NoScaleOrReflection = 4] = "NoScaleOrReflection"
                    }(e = t.TransformMode || (t.TransformMode = {}))
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function(t, e, r) {
                    this.name = t, this.order = e, this.skinRequired = r
                };
                t.ConstraintData = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function(t, e) {
                    if (null == e) throw new Error("data cannot be null.");
                    this.time = t, this.data = e
                };
                t.Event = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function(t) {
                    this.name = t
                };
                t.EventData = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function e(t, e) {
                        if (this.bendDirection = 0, this.compress = !1, this.stretch = !1, this.mix = 1, this.softness = 0, this.active = !1, null == t) throw new Error("data cannot be null.");
                        if (null == e) throw new Error("skeleton cannot be null.");
                        this.data = t, this.mix = t.mix, this.softness = t.softness, this.bendDirection = t.bendDirection, this.compress = t.compress, this.stretch = t.stretch, this.bones = new Array;
                        for (var r = 0; r < t.bones.length; r++) this.bones.push(e.findBone(t.bones[r].name));
                        this.target = e.findBone(t.target.name)
                    }
                    return e.prototype.isActive = function() {
                        return this.active
                    }, e.prototype.apply = function() {
                        this.update()
                    }, e.prototype.update = function() {
                        var t = this.target,
                            e = this.bones;
                        switch (e.length) {
                            case 1:
                                this.apply1(e[0], t.worldX, t.worldY, this.compress, this.stretch, this.data.uniform, this.mix);
                                break;
                            case 2:
                                this.apply2(e[0], e[1], t.worldX, t.worldY, this.bendDirection, this.stretch, this.softness, this.mix)
                        }
                    }, e.prototype.apply1 = function(e, r, i, n, o, s, a) {
                        e.appliedValid || e.updateAppliedTransform();
                        var h = e.parent.matrix,
                            u = 1 / (h.a * h.d - h.b * h.c),
                            l = r - h.tx,
                            c = i - h.ty,
                            d = (l * h.d - c * h.c) * u - e.ax,
                            p = (c * h.a - l * h.b) * u - e.ay,
                            f = Math.atan2(p, d) * t.MathUtils.radDeg - e.ashearX - e.arotation;
                        e.ascaleX < 0 && (f += 180), f > 180 ? f -= 360 : f < -180 && (f += 360);
                        var m = e.ascaleX,
                            g = e.ascaleY;
                        if (n || o) {
                            var v = e.data.length * m,
                                y = Math.sqrt(d * d + p * p);
                            if (n && y < v || o && y > v && v > 1e-4) {
                                var x = (y / v - 1) * a + 1;
                                m *= x, s && (g *= x)
                            }
                        }
                        e.updateWorldTransformWith(e.ax, e.ay, e.arotation + f * a, m, g, e.ashearX, e.ashearY)
                    }, e.prototype.apply2 = function(e, r, i, n, o, s, a, h) {
                        if (0 != h) {
                            e.appliedValid || e.updateAppliedTransform(), r.appliedValid || r.updateAppliedTransform();
                            var u = e.ax,
                                l = e.ay,
                                c = e.ascaleX,
                                d = c,
                                p = e.ascaleY,
                                f = r.ascaleX,
                                m = e.matrix,
                                g = 0,
                                v = 0,
                                y = 0;
                            c < 0 ? (c = -c, g = 180, y = -1) : (g = 0, y = 1), p < 0 && (p = -p, y = -y), f < 0 ? (f = -f, v = 180) : v = 0;
                            var x = r.ax,
                                _ = 0,
                                b = 0,
                                T = 0,
                                w = m.a,
                                E = m.c,
                                I = m.b,
                                S = m.d,
                                P = Math.abs(c - p) <= 1e-4;
                            P ? (b = w * x + E * (_ = r.ay) + m.tx, T = I * x + S * _ + m.ty) : (_ = 0, b = w * x + m.tx, T = I * x + m.ty);
                            var A = e.parent.matrix;
                            w = A.a, E = A.c, I = A.b;
                            var M, C, O = 1 / (w * (S = A.d) - E * I),
                                R = b - A.tx,
                                D = T - A.ty,
                                F = (R * S - D * E) * O - u,
                                L = (D * w - R * I) * O - l,
                                N = Math.sqrt(F * F + L * L),
                                k = r.data.length * f;
                            if (N < 1e-4) return this.apply1(e, i, n, !1, s, !1, h), void r.updateWorldTransformWith(x, _, 0, r.ascaleX, r.ascaleY, r.ashearX, r.ashearY);
                            var B = ((R = i - A.tx) * S - (D = n - A.ty) * E) * O - u,
                                U = (D * w - R * I) * O - l,
                                X = B * B + U * U;
                            if (0 != a) {
                                a *= c * (f + 1) / 2;
                                var V = Math.sqrt(X),
                                    j = V - N - k * c + a;
                                if (j > 0) {
                                    var Y = Math.min(1, j / (2 * a)) - 1;
                                    X = (B -= (Y = (j - a * (1 - Y * Y)) / V) * B) * B + (U -= Y * U) * U
                                }
                            }
                            t: if (P) {
                                var G = (X - N * N - (k *= c) * k) / (2 * N * k);
                                G < -1 ? G = -1 : G > 1 && (G = 1, s && (d *= (Math.sqrt(X) / (N + k) - 1) * h + 1)), C = Math.acos(G) * o, w = N + k * G, E = k * Math.sin(C), M = Math.atan2(U * w - B * E, B * w + U * E)
                            } else {
                                var H = (w = c * k) * w,
                                    W = (E = p * k) * E,
                                    z = Math.atan2(U, B),
                                    q = -2 * W * N,
                                    Z = W - H;
                                if ((S = q * q - 4 * Z * (I = W * N * N + H * X - H * W)) >= 0) {
                                    var K = Math.sqrt(S);
                                    q < 0 && (K = -K);
                                    var J = (K = -(q + K) / 2) / Z,
                                        Q = I / K,
                                        $ = Math.abs(J) < Math.abs(Q) ? J : Q;
                                    if ($ * $ <= X) {
                                        D = Math.sqrt(X - $ * $) * o, M = z - Math.atan2(D, $), C = Math.atan2(D / p, ($ - N) / c);
                                        break t
                                    }
                                }
                                var tt = t.MathUtils.PI,
                                    et = N - w,
                                    rt = et * et,
                                    it = 0,
                                    nt = 0,
                                    ot = N + w,
                                    st = ot * ot,
                                    at = 0;
                                (I = -w * N / (H - W)) >= -1 && I <= 1 && (I = Math.acos(I), (S = (R = w * Math.cos(I) + N) * R + (D = E * Math.sin(I)) * D) < rt && (tt = I, rt = S, et = R, it = D), S > st && (nt = I, st = S, ot = R, at = D)), X <= (rt + st) / 2 ? (M = z - Math.atan2(it * o, et), C = tt * o) : (M = z - Math.atan2(at * o, ot), C = nt * o)
                            }
                            var ht = Math.atan2(_, x) * y,
                                ut = e.arotation;
                            (M = (M - ht) * t.MathUtils.radDeg + g - ut) > 180 ? M -= 360 : M < -180 && (M += 360), e.updateWorldTransformWith(u, l, ut + M * h, d, e.ascaleY, 0, 0), ut = r.arotation, (C = ((C + ht) * t.MathUtils.radDeg - r.ashearX) * y + v - ut) > 180 ? C -= 360 : C < -180 && (C += 360), r.updateWorldTransformWith(x, _, ut + C * h, r.ascaleX, r.ascaleY, r.ashearX, r.ashearY)
                        } else r.updateWorldTransform()
                    }, e
                }();
                t.IkConstraint = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function(t) {
                    function e(e) {
                        var r = t.call(this, e, 0, !1) || this;
                        return r.bones = new Array, r.bendDirection = 1, r.compress = !1, r.stretch = !1, r.uniform = !1, r.mix = 1, r.softness = 0, r
                    }
                    return o(e, t), e
                }(t.ConstraintData);
                t.IkConstraintData = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function e(t, e) {
                        if (this.position = 0, this.spacing = 0, this.rotateMix = 0, this.translateMix = 0, this.spaces = new Array, this.positions = new Array, this.world = new Array, this.curves = new Array, this.lengths = new Array, this.segments = new Array, this.active = !1, null == t) throw new Error("data cannot be null.");
                        if (null == e) throw new Error("skeleton cannot be null.");
                        this.data = t, this.bones = new Array;
                        for (var r = 0, i = t.bones.length; r < i; r++) this.bones.push(e.findBone(t.bones[r].name));
                        this.target = e.findSlot(t.target.name), this.position = t.position, this.spacing = t.spacing, this.rotateMix = t.rotateMix, this.translateMix = t.translateMix
                    }
                    return e.prototype.isActive = function() {
                        return this.active
                    }, e.prototype.apply = function() {
                        this.update()
                    }, e.prototype.update = function() {
                        var r = this.target.getAttachment();
                        if (r instanceof t.PathAttachment) {
                            var i = this.rotateMix,
                                n = this.translateMix,
                                o = i > 0;
                            if (n > 0 || o) {
                                var s = this.data,
                                    a = s.spacingMode,
                                    h = a == t.SpacingMode.Length,
                                    u = s.rotateMode,
                                    l = u == t.RotateMode.Tangent,
                                    c = u == t.RotateMode.ChainScale,
                                    d = this.bones.length,
                                    p = l ? d : d + 1,
                                    f = this.bones,
                                    m = t.Utils.setArraySize(this.spaces, p),
                                    g = null,
                                    v = this.spacing;
                                if (c || h) {
                                    c && (g = t.Utils.setArraySize(this.lengths, d));
                                    for (var y = 0, x = p - 1; y < x;) {
                                        var _ = (C = f[y]).data.length;
                                        if (_ < e.epsilon) c && (g[y] = 0), m[++y] = 0;
                                        else {
                                            var b = _ * C.matrix.a,
                                                T = _ * C.matrix.b,
                                                w = Math.sqrt(b * b + T * T);
                                            c && (g[y] = w), m[++y] = (h ? _ + v : v) * w / _
                                        }
                                    }
                                } else
                                    for (y = 1; y < p; y++) m[y] = v;
                                var E = this.computeWorldPositions(r, p, l, s.positionMode == t.PositionMode.Percent, a == t.SpacingMode.Percent),
                                    I = E[0],
                                    S = E[1],
                                    P = s.offsetRotation,
                                    A = !1;
                                if (0 == P) A = u == t.RotateMode.Chain;
                                else A = !1, P *= (M = this.target.bone.matrix).a * M.d - M.b * M.c > 0 ? t.MathUtils.degRad : -t.MathUtils.degRad;
                                y = 0;
                                for (var M = 3; y < d; y++, M += 3) {
                                    var C, O = (C = f[y]).matrix;
                                    O.tx += (I - O.tx) * n, O.ty += (S - O.ty) * n;
                                    var R = (b = E[M]) - I,
                                        D = (T = E[M + 1]) - S;
                                    if (c) {
                                        var F = g[y];
                                        if (0 != F) {
                                            var L = (Math.sqrt(R * R + D * D) / F - 1) * i + 1;
                                            O.a *= L, O.b *= L
                                        }
                                    }
                                    if (I = b, S = T, o) {
                                        var N = O.a,
                                            k = O.c,
                                            B = O.b,
                                            U = O.d,
                                            X = 0,
                                            V = 0,
                                            j = 0;
                                        if (X = l ? E[M - 1] : 0 == m[y + 1] ? E[M + 2] : Math.atan2(D, R), X -= Math.atan2(B, N), A) {
                                            V = Math.cos(X), j = Math.sin(X);
                                            var Y = C.data.length;
                                            I += (Y * (V * N - j * B) - R) * i, S += (Y * (j * N + V * B) - D) * i
                                        } else X += P;
                                        X > t.MathUtils.PI ? X -= t.MathUtils.PI2 : X < -t.MathUtils.PI && (X += t.MathUtils.PI2), X *= i, V = Math.cos(X), j = Math.sin(X), O.a = V * N - j * B, O.c = V * k - j * U, O.b = j * N + V * B, O.d = j * k + V * U
                                    }
                                    C.appliedValid = !1
                                }
                            }
                        }
                    }, e.prototype.computeWorldPositions = function(r, i, n, o, s) {
                        var a = this.target,
                            h = this.position,
                            u = this.spaces,
                            l = t.Utils.setArraySize(this.positions, 3 * i + 2),
                            c = null,
                            d = r.closed,
                            p = r.worldVerticesLength,
                            f = p / 6,
                            m = e.NONE;
                        if (!r.constantSpeed) {
                            var g = r.lengths,
                                v = g[f -= d ? 1 : 2];
                            if (o && (h *= v), s)
                                for (var y = 0; y < i; y++) u[y] *= v;
                            c = t.Utils.setArraySize(this.world, 8);
                            y = 0;
                            for (var x = 0, _ = 0; y < i; y++, x += 3) {
                                var b = h += H = u[y];
                                if (d)(b %= v) < 0 && (b += v), _ = 0;
                                else {
                                    if (b < 0) {
                                        m != e.BEFORE && (m = e.BEFORE, r.computeWorldVertices(a, 2, 4, c, 0, 2)), this.addBeforePosition(b, c, 0, l, x);
                                        continue
                                    }
                                    if (b > v) {
                                        m != e.AFTER && (m = e.AFTER, r.computeWorldVertices(a, p - 6, 4, c, 0, 2)), this.addAfterPosition(b - v, c, 0, l, x);
                                        continue
                                    }
                                }
                                for (;; _++) {
                                    var T = g[_];
                                    if (!(b > T)) {
                                        if (0 == _) b /= T;
                                        else b = (b - (Z = g[_ - 1])) / (T - Z);
                                        break
                                    }
                                }
                                _ != m && (m = _, d && _ == f ? (r.computeWorldVertices(a, p - 4, 4, c, 0, 2), r.computeWorldVertices(a, 0, 4, c, 4, 2)) : r.computeWorldVertices(a, 6 * _ + 2, 8, c, 0, 2)), this.addCurvePosition(b, c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], l, x, n || y > 0 && 0 == H)
                            }
                            return l
                        }
                        d ? (p += 2, c = t.Utils.setArraySize(this.world, p), r.computeWorldVertices(a, 2, p - 4, c, 0, 2), r.computeWorldVertices(a, 0, 2, c, p - 4, 2), c[p - 2] = c[0], c[p - 1] = c[1]) : (f--, p -= 4, c = t.Utils.setArraySize(this.world, p), r.computeWorldVertices(a, 2, p, c, 0, 2));
                        for (var w = t.Utils.setArraySize(this.curves, f), E = 0, I = c[0], S = c[1], P = 0, A = 0, M = 0, C = 0, O = 0, R = 0, D = 0, F = 0, L = 0, N = 0, k = 0, B = 0, U = 0, X = 0, V = (y = 0, 2); y < f; y++, V += 6) P = c[V], A = c[V + 1], M = c[V + 2], C = c[V + 3], k = 2 * (D = .1875 * (I - 2 * P + M)) + (L = .09375 * (3 * (P - M) - I + (O = c[V + 4]))), B = 2 * (F = .1875 * (S - 2 * A + C)) + (N = .09375 * (3 * (A - C) - S + (R = c[V + 5]))), U = .75 * (P - I) + D + .16666667 * L, X = .75 * (A - S) + F + .16666667 * N, E += Math.sqrt(U * U + X * X), U += k, X += B, k += L, B += N, E += Math.sqrt(U * U + X * X), U += k, X += B, E += Math.sqrt(U * U + X * X), U += k + L, X += B + N, E += Math.sqrt(U * U + X * X), w[y] = E, I = O, S = R;
                        if (o && (h *= E), s)
                            for (y = 0; y < i; y++) u[y] *= E;
                        for (var j = this.segments, Y = 0, G = (y = 0, x = 0, _ = 0, 0); y < i; y++, x += 3) {
                            var H;
                            b = h += H = u[y];
                            if (d)(b %= E) < 0 && (b += E), _ = 0;
                            else {
                                if (b < 0) {
                                    this.addBeforePosition(b, c, 0, l, x);
                                    continue
                                }
                                if (b > E) {
                                    this.addAfterPosition(b - E, c, p - 4, l, x);
                                    continue
                                }
                            }
                            for (;; _++) {
                                var W = w[_];
                                if (!(b > W)) {
                                    if (0 == _) b /= W;
                                    else b = (b - (Z = w[_ - 1])) / (W - Z);
                                    break
                                }
                            }
                            if (_ != m) {
                                m = _;
                                var z = 6 * _;
                                for (I = c[z], S = c[z + 1], P = c[z + 2], A = c[z + 3], M = c[z + 4], C = c[z + 5], k = 2 * (D = .03 * (I - 2 * P + M)) + (L = .006 * (3 * (P - M) - I + (O = c[z + 6]))), B = 2 * (F = .03 * (S - 2 * A + C)) + (N = .006 * (3 * (A - C) - S + (R = c[z + 7]))), U = .3 * (P - I) + D + .16666667 * L, X = .3 * (A - S) + F + .16666667 * N, Y = Math.sqrt(U * U + X * X), j[0] = Y, z = 1; z < 8; z++) U += k, X += B, k += L, B += N, Y += Math.sqrt(U * U + X * X), j[z] = Y;
                                U += k, X += B, Y += Math.sqrt(U * U + X * X), j[8] = Y, U += k + L, X += B + N, Y += Math.sqrt(U * U + X * X), j[9] = Y, G = 0
                            }
                            for (b *= Y;; G++) {
                                var q = j[G];
                                if (!(b > q)) {
                                    var Z;
                                    if (0 == G) b /= q;
                                    else b = G + (b - (Z = j[G - 1])) / (q - Z);
                                    break
                                }
                            }
                            this.addCurvePosition(.1 * b, I, S, P, A, M, C, O, R, l, x, n || y > 0 && 0 == H)
                        }
                        return l
                    }, e.prototype.addBeforePosition = function(t, e, r, i, n) {
                        var o = e[r],
                            s = e[r + 1],
                            a = e[r + 2] - o,
                            h = e[r + 3] - s,
                            u = Math.atan2(h, a);
                        i[n] = o + t * Math.cos(u), i[n + 1] = s + t * Math.sin(u), i[n + 2] = u
                    }, e.prototype.addAfterPosition = function(t, e, r, i, n) {
                        var o = e[r + 2],
                            s = e[r + 3],
                            a = o - e[r],
                            h = s - e[r + 1],
                            u = Math.atan2(h, a);
                        i[n] = o + t * Math.cos(u), i[n + 1] = s + t * Math.sin(u), i[n + 2] = u
                    }, e.prototype.addCurvePosition = function(t, e, r, i, n, o, s, a, h, u, l, c) {
                        (0 == t || isNaN(t)) && (t = 1e-4);
                        var d = t * t,
                            p = d * t,
                            f = 1 - t,
                            m = f * f,
                            g = m * f,
                            v = f * t,
                            y = 3 * v,
                            x = f * y,
                            _ = y * t,
                            b = e * g + i * x + o * _ + a * p,
                            T = r * g + n * x + s * _ + h * p;
                        u[l] = b, u[l + 1] = T, c && (u[l + 2] = Math.atan2(T - (r * m + n * v * 2 + s * d), b - (e * m + i * v * 2 + o * d)))
                    }, e.NONE = -1, e.BEFORE = -2, e.AFTER = -3, e.epsilon = 1e-5, e
                }();
                t.PathConstraint = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function(t) {
                    function e(e) {
                        var r = t.call(this, e, 0, !1) || this;
                        return r.bones = new Array, r
                    }
                    return o(e, t), e
                }(t.ConstraintData);
                t.PathConstraintData = e,
                    function(t) {
                        t[t.Fixed = 0] = "Fixed", t[t.Percent = 1] = "Percent"
                    }(t.PositionMode || (t.PositionMode = {})),
                    function(t) {
                        t[t.Length = 0] = "Length", t[t.Fixed = 1] = "Fixed", t[t.Percent = 2] = "Percent"
                    }(t.SpacingMode || (t.SpacingMode = {})),
                    function(t) {
                        t[t.Tangent = 0] = "Tangent", t[t.Chain = 1] = "Chain", t[t.ChainScale = 2] = "ChainScale"
                    }(t.RotateMode || (t.RotateMode = {}))
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function e(e) {
                        if (this._updateCache = new Array, this.updateCacheReset = new Array, this.time = 0, this.scaleX = 1, this.scaleY = 1, this.x = 0, this.y = 0, null == e) throw new Error("data cannot be null.");
                        this.data = e, this.bones = new Array;
                        for (var r = 0; r < e.bones.length; r++) {
                            var i = e.bones[r],
                                n = void 0;
                            if (null == i.parent) n = new t.Bone(i, this, null);
                            else {
                                var o = this.bones[i.parent.index];
                                n = new t.Bone(i, this, o), o.children.push(n)
                            }
                            this.bones.push(n)
                        }
                        this.slots = new Array, this.drawOrder = new Array;
                        for (r = 0; r < e.slots.length; r++) {
                            var s = e.slots[r],
                                a = (n = this.bones[s.boneData.index], new t.Slot(s, n));
                            this.slots.push(a), this.drawOrder.push(a)
                        }
                        this.ikConstraints = new Array;
                        for (r = 0; r < e.ikConstraints.length; r++) {
                            var h = e.ikConstraints[r];
                            this.ikConstraints.push(new t.IkConstraint(h, this))
                        }
                        this.transformConstraints = new Array;
                        for (r = 0; r < e.transformConstraints.length; r++) {
                            var u = e.transformConstraints[r];
                            this.transformConstraints.push(new t.TransformConstraint(u, this))
                        }
                        this.pathConstraints = new Array;
                        for (r = 0; r < e.pathConstraints.length; r++) {
                            var l = e.pathConstraints[r];
                            this.pathConstraints.push(new t.PathConstraint(l, this))
                        }
                        this.color = new t.Color(1, 1, 1, 1), this.updateCache()
                    }
                    return e.prototype.updateCache = function() {
                        this._updateCache.length = 0, this.updateCacheReset.length = 0;
                        for (var t = this.bones, e = 0, r = t.length; e < r; e++) {
                            (n = t[e]).sorted = n.data.skinRequired, n.active = !n.sorted
                        }
                        if (null != this.skin) {
                            var i = this.skin.bones;
                            for (e = 0, r = this.skin.bones.length; e < r; e++) {
                                var n = this.bones[i[e].index];
                                do {
                                    n.sorted = !1, n.active = !0, n = n.parent
                                } while (null != n)
                            }
                        }
                        var o = this.ikConstraints,
                            s = this.transformConstraints,
                            a = this.pathConstraints,
                            h = o.length,
                            u = s.length,
                            l = a.length,
                            c = h + u + l;
                        t: for (e = 0; e < c; e++) {
                            for (var d = 0; d < h; d++) {
                                if ((p = o[d]).data.order == e) {
                                    this.sortIkConstraint(p);
                                    continue t
                                }
                            }
                            for (d = 0; d < u; d++) {
                                if ((p = s[d]).data.order == e) {
                                    this.sortTransformConstraint(p);
                                    continue t
                                }
                            }
                            for (d = 0; d < l; d++) {
                                var p;
                                if ((p = a[d]).data.order == e) {
                                    this.sortPathConstraint(p);
                                    continue t
                                }
                            }
                        }
                        for (e = 0, r = t.length; e < r; e++) this.sortBone(t[e])
                    }, e.prototype.sortIkConstraint = function(e) {
                        if (e.active = e.target.isActive() && (!e.data.skinRequired || null != this.skin && t.Utils.contains(this.skin.constraints, e.data, !0)), e.active) {
                            var r = e.target;
                            this.sortBone(r);
                            var i = e.bones,
                                n = i[0];
                            if (this.sortBone(n), i.length > 1) {
                                var o = i[i.length - 1];
                                this._updateCache.indexOf(o) > -1 || this.updateCacheReset.push(o)
                            }
                            this._updateCache.push(e), this.sortReset(n.children), i[i.length - 1].sorted = !0
                        }
                    }, e.prototype.sortPathConstraint = function(e) {
                        if (e.active = e.target.bone.isActive() && (!e.data.skinRequired || null != this.skin && t.Utils.contains(this.skin.constraints, e.data, !0)), e.active) {
                            var r = e.target,
                                i = r.data.index,
                                n = r.bone;
                            null != this.skin && this.sortPathConstraintAttachment(this.skin, i, n), null != this.data.defaultSkin && this.data.defaultSkin != this.skin && this.sortPathConstraintAttachment(this.data.defaultSkin, i, n);
                            for (var o = 0, s = this.data.skins.length; o < s; o++) this.sortPathConstraintAttachment(this.data.skins[o], i, n);
                            var a = r.getAttachment();
                            a instanceof t.PathAttachment && this.sortPathConstraintAttachmentWith(a, n);
                            var h = e.bones,
                                u = h.length;
                            for (o = 0; o < u; o++) this.sortBone(h[o]);
                            this._updateCache.push(e);
                            for (o = 0; o < u; o++) this.sortReset(h[o].children);
                            for (o = 0; o < u; o++) h[o].sorted = !0
                        }
                    }, e.prototype.sortTransformConstraint = function(e) {
                        if (e.active = e.target.isActive() && (!e.data.skinRequired || null != this.skin && t.Utils.contains(this.skin.constraints, e.data, !0)), e.active) {
                            this.sortBone(e.target);
                            var r = e.bones,
                                i = r.length;
                            if (e.data.local)
                                for (var n = 0; n < i; n++) {
                                    var o = r[n];
                                    this.sortBone(o.parent), this._updateCache.indexOf(o) > -1 || this.updateCacheReset.push(o)
                                } else
                                    for (n = 0; n < i; n++) this.sortBone(r[n]);
                            this._updateCache.push(e);
                            for (var s = 0; s < i; s++) this.sortReset(r[s].children);
                            for (s = 0; s < i; s++) r[s].sorted = !0
                        }
                    }, e.prototype.sortPathConstraintAttachment = function(t, e, r) {
                        var i = t.attachments[e];
                        if (i)
                            for (var n in i) this.sortPathConstraintAttachmentWith(i[n], r)
                    }, e.prototype.sortPathConstraintAttachmentWith = function(e, r) {
                        if (e instanceof t.PathAttachment) {
                            var i = e.bones;
                            if (null == i) this.sortBone(r);
                            else
                                for (var n = this.bones, o = 0; o < i.length;)
                                    for (var s = i[o++], a = o + s; o < a; o++) {
                                        var h = i[o];
                                        this.sortBone(n[h])
                                    }
                        }
                    }, e.prototype.sortBone = function(t) {
                        if (!t.sorted) {
                            var e = t.parent;
                            null != e && this.sortBone(e), t.sorted = !0, this._updateCache.push(t)
                        }
                    }, e.prototype.sortReset = function(t) {
                        for (var e = 0, r = t.length; e < r; e++) {
                            var i = t[e];
                            i.active && (i.sorted && this.sortReset(i.children), i.sorted = !1)
                        }
                    }, e.prototype.updateWorldTransform = function() {
                        for (var t = this.updateCacheReset, e = 0, r = t.length; e < r; e++) {
                            var i = t[e];
                            i.ax = i.x, i.ay = i.y, i.arotation = i.rotation, i.ascaleX = i.scaleX, i.ascaleY = i.scaleY, i.ashearX = i.shearX, i.ashearY = i.shearY, i.appliedValid = !0
                        }
                        var n = this._updateCache;
                        for (e = 0, r = n.length; e < r; e++) n[e].update()
                    }, e.prototype.setToSetupPose = function() {
                        this.setBonesToSetupPose(), this.setSlotsToSetupPose()
                    }, e.prototype.setBonesToSetupPose = function() {
                        for (var t = this.bones, e = 0, r = t.length; e < r; e++) t[e].setToSetupPose();
                        var i = this.ikConstraints;
                        for (e = 0, r = i.length; e < r; e++) {
                            (a = i[e]).mix = a.data.mix, a.softness = a.data.softness, a.bendDirection = a.data.bendDirection, a.compress = a.data.compress, a.stretch = a.data.stretch
                        }
                        var n = this.transformConstraints;
                        for (e = 0, r = n.length; e < r; e++) {
                            var o = (a = n[e]).data;
                            a.rotateMix = o.rotateMix, a.translateMix = o.translateMix, a.scaleMix = o.scaleMix, a.shearMix = o.shearMix
                        }
                        var s = this.pathConstraints;
                        for (e = 0, r = s.length; e < r; e++) {
                            var a;
                            o = (a = s[e]).data;
                            a.position = o.position, a.spacing = o.spacing, a.rotateMix = o.rotateMix, a.translateMix = o.translateMix
                        }
                    }, e.prototype.setSlotsToSetupPose = function() {
                        var e = this.slots;
                        t.Utils.arrayCopy(e, 0, this.drawOrder, 0, e.length);
                        for (var r = 0, i = e.length; r < i; r++) e[r].setToSetupPose()
                    }, e.prototype.getRootBone = function() {
                        return 0 == this.bones.length ? null : this.bones[0]
                    }, e.prototype.findBone = function(t) {
                        if (null == t) throw new Error("boneName cannot be null.");
                        for (var e = this.bones, r = 0, i = e.length; r < i; r++) {
                            var n = e[r];
                            if (n.data.name == t) return n
                        }
                        return null
                    }, e.prototype.findBoneIndex = function(t) {
                        if (null == t) throw new Error("boneName cannot be null.");
                        for (var e = this.bones, r = 0, i = e.length; r < i; r++)
                            if (e[r].data.name == t) return r;
                        return -1
                    }, e.prototype.findSlot = function(t) {
                        if (null == t) throw new Error("slotName cannot be null.");
                        for (var e = this.slots, r = 0, i = e.length; r < i; r++) {
                            var n = e[r];
                            if (n.data.name == t) return n
                        }
                        return null
                    }, e.prototype.findSlotIndex = function(t) {
                        if (null == t) throw new Error("slotName cannot be null.");
                        for (var e = this.slots, r = 0, i = e.length; r < i; r++)
                            if (e[r].data.name == t) return r;
                        return -1
                    }, e.prototype.setSkinByName = function(t) {
                        var e = this.data.findSkin(t);
                        if (null == e) throw new Error("Skin not found: " + t);
                        this.setSkin(e)
                    }, e.prototype.setSkin = function(t) {
                        if (t != this.skin) {
                            if (null != t)
                                if (null != this.skin) t.attachAll(this, this.skin);
                                else
                                    for (var e = this.slots, r = 0, i = e.length; r < i; r++) {
                                        var n = e[r],
                                            o = n.data.attachmentName;
                                        if (null != o) {
                                            var s = t.getAttachment(r, o);
                                            null != s && n.setAttachment(s)
                                        }
                                    }
                            this.skin = t, this.updateCache()
                        }
                    }, e.prototype.getAttachmentByName = function(t, e) {
                        return this.getAttachment(this.data.findSlotIndex(t), e)
                    }, e.prototype.getAttachment = function(t, e) {
                        if (null == e) throw new Error("attachmentName cannot be null.");
                        if (null != this.skin) {
                            var r = this.skin.getAttachment(t, e);
                            if (null != r) return r
                        }
                        return null != this.data.defaultSkin ? this.data.defaultSkin.getAttachment(t, e) : null
                    }, e.prototype.setAttachment = function(t, e) {
                        if (null == t) throw new Error("slotName cannot be null.");
                        for (var r = this.slots, i = 0, n = r.length; i < n; i++) {
                            var o = r[i];
                            if (o.data.name == t) {
                                var s = null;
                                if (null != e && null == (s = this.getAttachment(i, e))) throw new Error("Attachment not found: " + e + ", for slot: " + t);
                                return void o.setAttachment(s)
                            }
                        }
                        throw new Error("Slot not found: " + t)
                    }, e.prototype.findIkConstraint = function(t) {
                        if (null == t) throw new Error("constraintName cannot be null.");
                        for (var e = this.ikConstraints, r = 0, i = e.length; r < i; r++) {
                            var n = e[r];
                            if (n.data.name == t) return n
                        }
                        return null
                    }, e.prototype.findTransformConstraint = function(t) {
                        if (null == t) throw new Error("constraintName cannot be null.");
                        for (var e = this.transformConstraints, r = 0, i = e.length; r < i; r++) {
                            var n = e[r];
                            if (n.data.name == t) return n
                        }
                        return null
                    }, e.prototype.findPathConstraint = function(t) {
                        if (null == t) throw new Error("constraintName cannot be null.");
                        for (var e = this.pathConstraints, r = 0, i = e.length; r < i; r++) {
                            var n = e[r];
                            if (n.data.name == t) return n
                        }
                        return null
                    }, e.prototype.getBounds = function(e, r, i) {
                        if (void 0 === i && (i = new Array(2)), null == e) throw new Error("offset cannot be null.");
                        if (null == r) throw new Error("size cannot be null.");
                        for (var n = this.drawOrder, o = Number.POSITIVE_INFINITY, s = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, h = Number.NEGATIVE_INFINITY, u = 0, l = n.length; u < l; u++) {
                            var c = n[u];
                            if (c.bone.active) {
                                var d = 0,
                                    p = null,
                                    f = c.getAttachment();
                                if (f instanceof t.RegionAttachment) d = 8, p = t.Utils.setArraySize(i, d, 0), f.computeWorldVertices(c.bone, p, 0, 2);
                                else if (f instanceof t.MeshAttachment) {
                                    var m = f;
                                    d = m.worldVerticesLength, p = t.Utils.setArraySize(i, d, 0), m.computeWorldVertices(c, 0, d, p, 0, 2)
                                }
                                if (null != p)
                                    for (var g = 0, v = p.length; g < v; g += 2) {
                                        var y = p[g],
                                            x = p[g + 1];
                                        o = Math.min(o, y), s = Math.min(s, x), a = Math.max(a, y), h = Math.max(h, x)
                                    }
                            }
                        }
                        e.set(o, s), r.set(a - o, h - s)
                    }, e.prototype.update = function(t) {
                        this.time += t
                    }, Object.defineProperty(e.prototype, "flipX", {
                        get: function() {
                            return -1 == this.scaleX
                        },
                        set: function(t) {
                            e.deprecatedWarning1 || (e.deprecatedWarning1 = !0, console.warn("Spine Deprecation Warning: `Skeleton.flipX/flipY` was deprecated, please use scaleX/scaleY")), this.scaleX = t ? 1 : -1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "flipY", {
                        get: function() {
                            return -1 == this.scaleY
                        },
                        set: function(t) {
                            e.deprecatedWarning1 || (e.deprecatedWarning1 = !0, console.warn("Spine Deprecation Warning: `Skeleton.flipX/flipY` was deprecated, please use scaleX/scaleY")), this.scaleY = t ? 1 : -1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.deprecatedWarning1 = !1, e
                }();
                t.Skeleton = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function e(t) {
                        this.scale = 1, this.linkedMeshes = new Array, this.attachmentLoader = t
                    }
                    return e.prototype.readSkeletonData = function(i) {
                        var n = this.scale,
                            o = new t.SkeletonData;
                        o.name = "";
                        var s = new r(i);
                        o.hash = s.readString(), o.version = s.readString(), o.x = s.readFloat(), o.y = s.readFloat(), o.width = s.readFloat(), o.height = s.readFloat();
                        var a = s.readBoolean();
                        a && (o.fps = s.readFloat(), o.imagesPath = s.readString(), o.audioPath = s.readString());
                        var h = 0;
                        h = s.readInt(!0);
                        for (var u = 0; u < h; u++) s.strings.push(s.readString());
                        h = s.readInt(!0);
                        for (u = 0; u < h; u++) {
                            var l = s.readString(),
                                c = 0 == u ? null : o.bones[s.readInt(!0)];
                            (f = new t.BoneData(u, l, c)).rotation = s.readFloat(), f.x = s.readFloat() * n, f.y = s.readFloat() * n, f.scaleX = s.readFloat(), f.scaleY = s.readFloat(), f.shearX = s.readFloat(), f.shearY = s.readFloat(), f.length = s.readFloat() * n, f.transformMode = e.TransformModeValues[s.readInt(!0)], f.skinRequired = s.readBoolean(), a && t.Color.rgba8888ToColor(f.color, s.readInt32()), o.bones.push(f)
                        }
                        h = s.readInt(!0);
                        for (u = 0; u < h; u++) {
                            var d = s.readString(),
                                p = o.bones[s.readInt(!0)],
                                f = new t.SlotData(u, d, p);
                            t.Color.rgba8888ToColor(f.color, s.readInt32());
                            var m = s.readInt32(); - 1 != m && t.Color.rgb888ToColor(f.darkColor = new t.Color, m), f.attachmentName = s.readStringRef(), f.blendMode = e.BlendModeValues[s.readInt(!0)], o.slots.push(f)
                        }
                        h = s.readInt(!0);
                        u = 0;
                        for (var g = void 0; u < h; u++) {
                            (f = new t.IkConstraintData(s.readString())).order = s.readInt(!0), f.skinRequired = s.readBoolean(), g = s.readInt(!0);
                            for (var v = 0; v < g; v++) f.bones.push(o.bones[s.readInt(!0)]);
                            f.target = o.bones[s.readInt(!0)], f.mix = s.readFloat(), f.softness = s.readFloat() * n, f.bendDirection = s.readByte(), f.compress = s.readBoolean(), f.stretch = s.readBoolean(), f.uniform = s.readBoolean(), o.ikConstraints.push(f)
                        }
                        h = s.readInt(!0);
                        for (u = 0, g = void 0; u < h; u++) {
                            (f = new t.TransformConstraintData(s.readString())).order = s.readInt(!0), f.skinRequired = s.readBoolean(), g = s.readInt(!0);
                            for (v = 0; v < g; v++) f.bones.push(o.bones[s.readInt(!0)]);
                            f.target = o.bones[s.readInt(!0)], f.local = s.readBoolean(), f.relative = s.readBoolean(), f.offsetRotation = s.readFloat(), f.offsetX = s.readFloat() * n, f.offsetY = s.readFloat() * n, f.offsetScaleX = s.readFloat(), f.offsetScaleY = s.readFloat(), f.offsetShearY = s.readFloat(), f.rotateMix = s.readFloat(), f.translateMix = s.readFloat(), f.scaleMix = s.readFloat(), f.shearMix = s.readFloat(), o.transformConstraints.push(f)
                        }
                        h = s.readInt(!0);
                        for (u = 0, g = void 0; u < h; u++) {
                            (f = new t.PathConstraintData(s.readString())).order = s.readInt(!0), f.skinRequired = s.readBoolean(), g = s.readInt(!0);
                            for (v = 0; v < g; v++) f.bones.push(o.bones[s.readInt(!0)]);
                            f.target = o.slots[s.readInt(!0)], f.positionMode = e.PositionModeValues[s.readInt(!0)], f.spacingMode = e.SpacingModeValues[s.readInt(!0)], f.rotateMode = e.RotateModeValues[s.readInt(!0)], f.offsetRotation = s.readFloat(), f.position = s.readFloat(), f.positionMode == t.PositionMode.Fixed && (f.position *= n), f.spacing = s.readFloat(), f.spacingMode != t.SpacingMode.Length && f.spacingMode != t.SpacingMode.Fixed || (f.spacing *= n), f.rotateMix = s.readFloat(), f.translateMix = s.readFloat(), o.pathConstraints.push(f)
                        }
                        var y = this.readSkin(s, o, !0, a);
                        null != y && (o.defaultSkin = y, o.skins.push(y));
                        u = o.skins.length;
                        for (t.Utils.setArraySize(o.skins, h = u + s.readInt(!0)); u < h; u++) o.skins[u] = this.readSkin(s, o, !1, a);
                        h = this.linkedMeshes.length;
                        for (u = 0; u < h; u++) {
                            var x = this.linkedMeshes[u],
                                _ = null == x.skin ? o.defaultSkin : o.findSkin(x.skin);
                            if (null == _) throw new Error("Skin not found: " + x.skin);
                            var b = _.getAttachment(x.slotIndex, x.parent);
                            if (null == b) throw new Error("Parent mesh not found: " + x.parent);
                            x.mesh.deformAttachment = x.inheritDeform ? b : x.mesh, x.mesh.setParentMesh(b)
                        }
                        this.linkedMeshes.length = 0, h = s.readInt(!0);
                        for (u = 0; u < h; u++) {
                            (f = new t.EventData(s.readStringRef())).intValue = s.readInt(!1), f.floatValue = s.readFloat(), f.stringValue = s.readString(), f.audioPath = s.readString(), null != f.audioPath && (f.volume = s.readFloat(), f.balance = s.readFloat()), o.events.push(f)
                        }
                        h = s.readInt(!0);
                        for (u = 0; u < h; u++) o.animations.push(this.readAnimation(s, s.readString(), o));
                        return o
                    }, e.prototype.readSkin = function(e, r, i, n) {
                        var o = null,
                            s = 0;
                        if (i) {
                            if (0 == (s = e.readInt(!0))) return null;
                            o = new t.Skin("default")
                        } else {
                            (o = new t.Skin(e.readStringRef())).bones.length = e.readInt(!0);
                            for (var a = 0, h = o.bones.length; a < h; a++) o.bones[a] = r.bones[e.readInt(!0)];
                            for (a = 0, h = e.readInt(!0); a < h; a++) o.constraints.push(r.ikConstraints[e.readInt(!0)]);
                            for (a = 0, h = e.readInt(!0); a < h; a++) o.constraints.push(r.transformConstraints[e.readInt(!0)]);
                            for (a = 0, h = e.readInt(!0); a < h; a++) o.constraints.push(r.pathConstraints[e.readInt(!0)]);
                            s = e.readInt(!0)
                        }
                        for (a = 0; a < s; a++)
                            for (var u = e.readInt(!0), l = 0, c = e.readInt(!0); l < c; l++) {
                                var d = e.readStringRef(),
                                    p = this.readAttachment(e, r, o, u, d, n);
                                null != p && o.setAttachment(u, d, p)
                            }
                        return o
                    }, e.prototype.readAttachment = function(r, n, o, s, a, h) {
                        var u = this.scale,
                            l = r.readStringRef();
                        null == l && (l = a);
                        var c = r.readByte();
                        switch (e.AttachmentTypeValues[c]) {
                            case t.AttachmentType.Region:
                                var d = r.readStringRef(),
                                    p = r.readFloat(),
                                    f = r.readFloat(),
                                    m = r.readFloat(),
                                    g = r.readFloat(),
                                    v = r.readFloat(),
                                    y = r.readFloat(),
                                    x = r.readFloat(),
                                    _ = r.readInt32();
                                null == d && (d = l);
                                var b = this.attachmentLoader.newRegionAttachment(o, l, d);
                                return null == b ? null : (b.path = d, b.x = f * u, b.y = m * u, b.scaleX = g, b.scaleY = v, b.rotation = p, b.width = y * u, b.height = x * u, t.Color.rgba8888ToColor(b.color, _), b);
                            case t.AttachmentType.BoundingBox:
                                var T = r.readInt(!0),
                                    w = this.readVertices(r, T),
                                    E = (_ = h ? r.readInt32() : 0, this.attachmentLoader.newBoundingBoxAttachment(o, l));
                                return null == E ? null : (E.worldVerticesLength = T << 1, E.vertices = w.vertices, E.bones = w.bones, h && t.Color.rgba8888ToColor(E.color, _), E);
                            case t.AttachmentType.Mesh:
                                d = r.readStringRef(), _ = r.readInt32(), T = r.readInt(!0);
                                var I = this.readFloatArray(r, T << 1, 1),
                                    S = this.readShortArray(r),
                                    P = (w = this.readVertices(r, T), r.readInt(!0)),
                                    A = null;
                                y = 0, x = 0;
                                return h && (A = this.readShortArray(r), y = r.readFloat(), x = r.readFloat()), null == d && (d = l), null == (M = this.attachmentLoader.newMeshAttachment(o, l, d)) ? null : (M.path = d, t.Color.rgba8888ToColor(M.color, _), M.bones = w.bones, M.vertices = w.vertices, M.worldVerticesLength = T << 1, M.triangles = S, M.regionUVs = new Float32Array(I), M.hullLength = P << 1, h && (M.edges = A, M.width = y * u, M.height = x * u), M);
                            case t.AttachmentType.LinkedMesh:
                                d = r.readStringRef(), _ = r.readInt32();
                                var M, C = r.readStringRef(),
                                    O = r.readStringRef(),
                                    R = r.readBoolean();
                                y = 0, x = 0;
                                return h && (y = r.readFloat(), x = r.readFloat()), null == d && (d = l), null == (M = this.attachmentLoader.newMeshAttachment(o, l, d)) ? null : (M.path = d, t.Color.rgba8888ToColor(M.color, _), h && (M.width = y * u, M.height = x * u), this.linkedMeshes.push(new i(M, C, s, O, R)), M);
                            case t.AttachmentType.Path:
                                for (var D = r.readBoolean(), F = r.readBoolean(), L = (T = r.readInt(!0), w = this.readVertices(r, T), t.Utils.newArray(T / 3, 0)), N = 0, k = L.length; N < k; N++) L[N] = r.readFloat() * u;
                                _ = h ? r.readInt32() : 0;
                                return null == (d = this.attachmentLoader.newPathAttachment(o, l)) ? null : (d.closed = D, d.constantSpeed = F, d.worldVerticesLength = T << 1, d.vertices = w.vertices, d.bones = w.bones, d.lengths = L, h && t.Color.rgba8888ToColor(d.color, _), d);
                            case t.AttachmentType.Point:
                                p = r.readFloat(), f = r.readFloat(), m = r.readFloat(), _ = h ? r.readInt32() : 0;
                                var B = this.attachmentLoader.newPointAttachment(o, l);
                                return null == B ? null : (B.x = f * u, B.y = m * u, B.rotation = p, h && t.Color.rgba8888ToColor(B.color, _), B);
                            case t.AttachmentType.Clipping:
                                var U = r.readInt(!0),
                                    X = (T = r.readInt(!0), w = this.readVertices(r, T), _ = h ? r.readInt32() : 0, this.attachmentLoader.newClippingAttachment(o, l));
                                return null == X ? null : (X.endSlot = n.slots[U], X.worldVerticesLength = T << 1, X.vertices = w.vertices, X.bones = w.bones, h && t.Color.rgba8888ToColor(X.color, _), X)
                        }
                        return null
                    }, e.prototype.readVertices = function(e, r) {
                        var i = r << 1,
                            o = new n,
                            s = this.scale;
                        if (!e.readBoolean()) return o.vertices = this.readFloatArray(e, i, s), o;
                        for (var a = new Array, h = new Array, u = 0; u < r; u++) {
                            var l = e.readInt(!0);
                            h.push(l);
                            for (var c = 0; c < l; c++) h.push(e.readInt(!0)), a.push(e.readFloat() * s), a.push(e.readFloat() * s), a.push(e.readFloat())
                        }
                        return o.vertices = t.Utils.toFloatArray(a), o.bones = h, o
                    }, e.prototype.readFloatArray = function(t, e, r) {
                        var i = new Array(e);
                        if (1 == r)
                            for (var n = 0; n < e; n++) i[n] = t.readFloat();
                        else
                            for (n = 0; n < e; n++) i[n] = t.readFloat() * r;
                        return i
                    }, e.prototype.readShortArray = function(t) {
                        for (var e = t.readInt(!0), r = new Array(e), i = 0; i < e; i++) r[i] = t.readShort();
                        return r
                    }, e.prototype.readAnimation = function(r, i, n) {
                        for (var o = new Array, s = this.scale, a = 0, h = new t.Color, u = new t.Color, l = 0, c = r.readInt(!0); l < c; l++)
                            for (var d = r.readInt(!0), p = 0, f = r.readInt(!0); p < f; p++) {
                                var m = r.readByte(),
                                    g = r.readInt(!0);
                                switch (m) {
                                    case e.SLOT_ATTACHMENT:
                                        (_ = new t.AttachmentTimeline(g)).slotIndex = d;
                                        for (var v = 0; v < g; v++) _.setFrame(v, r.readFloat(), r.readStringRef());
                                        o.push(_), a = Math.max(a, _.frames[g - 1]);
                                        break;
                                    case e.SLOT_COLOR:
                                        (_ = new t.ColorTimeline(g)).slotIndex = d;
                                        for (v = 0; v < g; v++) {
                                            var y = r.readFloat();
                                            t.Color.rgba8888ToColor(h, r.readInt32()), _.setFrame(v, y, h.r, h.g, h.b, h.a), v < g - 1 && this.readCurve(r, v, _)
                                        }
                                        o.push(_), a = Math.max(a, _.frames[(g - 1) * t.ColorTimeline.ENTRIES]);
                                        break;
                                    case e.SLOT_TWO_COLOR:
                                        (_ = new t.TwoColorTimeline(g)).slotIndex = d;
                                        for (v = 0; v < g; v++) {
                                            y = r.readFloat();
                                            t.Color.rgba8888ToColor(h, r.readInt32()), t.Color.rgb888ToColor(u, r.readInt32()), _.setFrame(v, y, h.r, h.g, h.b, h.a, u.r, u.g, u.b), v < g - 1 && this.readCurve(r, v, _)
                                        }
                                        o.push(_), a = Math.max(a, _.frames[(g - 1) * t.TwoColorTimeline.ENTRIES])
                                }
                            }
                        for (l = 0, c = r.readInt(!0); l < c; l++) {
                            var x = r.readInt(!0);
                            for (p = 0, f = r.readInt(!0); p < f; p++) {
                                m = r.readByte(), g = r.readInt(!0);
                                switch (m) {
                                    case e.BONE_ROTATE:
                                        (_ = new t.RotateTimeline(g)).boneIndex = x;
                                        for (v = 0; v < g; v++) _.setFrame(v, r.readFloat(), r.readFloat()), v < g - 1 && this.readCurve(r, v, _);
                                        o.push(_), a = Math.max(a, _.frames[(g - 1) * t.RotateTimeline.ENTRIES]);
                                        break;
                                    case e.BONE_TRANSLATE:
                                    case e.BONE_SCALE:
                                    case e.BONE_SHEAR:
                                        var _ = void 0,
                                            b = 1;
                                        m == e.BONE_SCALE ? _ = new t.ScaleTimeline(g) : m == e.BONE_SHEAR ? _ = new t.ShearTimeline(g) : (_ = new t.TranslateTimeline(g), b = s), _.boneIndex = x;
                                        for (v = 0; v < g; v++) _.setFrame(v, r.readFloat(), r.readFloat() * b, r.readFloat() * b), v < g - 1 && this.readCurve(r, v, _);
                                        o.push(_), a = Math.max(a, _.frames[(g - 1) * t.TranslateTimeline.ENTRIES])
                                }
                            }
                        }
                        for (l = 0, c = r.readInt(!0); l < c; l++) {
                            var T = r.readInt(!0);
                            g = r.readInt(!0);
                            (_ = new t.IkConstraintTimeline(g)).ikConstraintIndex = T;
                            for (v = 0; v < g; v++) _.setFrame(v, r.readFloat(), r.readFloat(), r.readFloat() * s, r.readByte(), r.readBoolean(), r.readBoolean()), v < g - 1 && this.readCurve(r, v, _);
                            o.push(_), a = Math.max(a, _.frames[(g - 1) * t.IkConstraintTimeline.ENTRIES])
                        }
                        for (l = 0, c = r.readInt(!0); l < c; l++) {
                            T = r.readInt(!0), g = r.readInt(!0);
                            (_ = new t.TransformConstraintTimeline(g)).transformConstraintIndex = T;
                            for (v = 0; v < g; v++) _.setFrame(v, r.readFloat(), r.readFloat(), r.readFloat(), r.readFloat(), r.readFloat()), v < g - 1 && this.readCurve(r, v, _);
                            o.push(_), a = Math.max(a, _.frames[(g - 1) * t.TransformConstraintTimeline.ENTRIES])
                        }
                        for (l = 0, c = r.readInt(!0); l < c; l++) {
                            T = r.readInt(!0);
                            var w = n.pathConstraints[T];
                            for (p = 0, f = r.readInt(!0); p < f; p++) {
                                m = r.readByte(), g = r.readInt(!0);
                                switch (m) {
                                    case e.PATH_POSITION:
                                    case e.PATH_SPACING:
                                        _ = void 0, b = 1;
                                        m == e.PATH_SPACING ? (_ = new t.PathConstraintSpacingTimeline(g), w.spacingMode != t.SpacingMode.Length && w.spacingMode != t.SpacingMode.Fixed || (b = s)) : (_ = new t.PathConstraintPositionTimeline(g), w.positionMode == t.PositionMode.Fixed && (b = s)), _.pathConstraintIndex = T;
                                        for (v = 0; v < g; v++) _.setFrame(v, r.readFloat(), r.readFloat() * b), v < g - 1 && this.readCurve(r, v, _);
                                        o.push(_), a = Math.max(a, _.frames[(g - 1) * t.PathConstraintPositionTimeline.ENTRIES]);
                                        break;
                                    case e.PATH_MIX:
                                        (_ = new t.PathConstraintMixTimeline(g)).pathConstraintIndex = T;
                                        for (v = 0; v < g; v++) _.setFrame(v, r.readFloat(), r.readFloat(), r.readFloat()), v < g - 1 && this.readCurve(r, v, _);
                                        o.push(_), a = Math.max(a, _.frames[(g - 1) * t.PathConstraintMixTimeline.ENTRIES])
                                }
                            }
                        }
                        for (l = 0, c = r.readInt(!0); l < c; l++) {
                            var E = n.skins[r.readInt(!0)];
                            for (p = 0, f = r.readInt(!0); p < f; p++) {
                                d = r.readInt(!0);
                                for (var I = 0, S = r.readInt(!0); I < S; I++) {
                                    var P = E.getAttachment(d, r.readStringRef()),
                                        A = null != P.bones,
                                        M = P.vertices,
                                        C = A ? M.length / 3 * 2 : M.length;
                                    g = r.readInt(!0);
                                    (_ = new t.DeformTimeline(g)).slotIndex = d, _.attachment = P;
                                    for (v = 0; v < g; v++) {
                                        y = r.readFloat();
                                        var O = void 0,
                                            R = r.readInt(!0);
                                        if (0 == R) O = A ? t.Utils.newFloatArray(C) : M;
                                        else {
                                            O = t.Utils.newFloatArray(C);
                                            var D = r.readInt(!0);
                                            if (R += D, 1 == s)
                                                for (var F = D; F < R; F++) O[F] = r.readFloat();
                                            else
                                                for (F = D; F < R; F++) O[F] = r.readFloat() * s;
                                            if (!A) {
                                                F = 0;
                                                for (var L = O.length; F < L; F++) O[F] += M[F]
                                            }
                                        }
                                        _.setFrame(v, y, O), v < g - 1 && this.readCurve(r, v, _)
                                    }
                                    o.push(_), a = Math.max(a, _.frames[g - 1])
                                }
                            }
                        }
                        var N = r.readInt(!0);
                        if (N > 0) {
                            _ = new t.DrawOrderTimeline(N);
                            var k = n.slots.length;
                            for (l = 0; l < N; l++) {
                                y = r.readFloat();
                                var B = r.readInt(!0),
                                    U = t.Utils.newArray(k, 0);
                                for (p = k - 1; p >= 0; p--) U[p] = -1;
                                var X = t.Utils.newArray(k - B, 0),
                                    V = 0,
                                    j = 0;
                                for (p = 0; p < B; p++) {
                                    for (d = r.readInt(!0); V != d;) X[j++] = V++;
                                    U[V + r.readInt(!0)] = V++
                                }
                                for (; V < k;) X[j++] = V++;
                                for (p = k - 1; p >= 0; p--) - 1 == U[p] && (U[p] = X[--j]);
                                _.setFrame(l, y, U)
                            }
                            o.push(_), a = Math.max(a, _.frames[N - 1])
                        }
                        var Y = r.readInt(!0);
                        if (Y > 0) {
                            for (_ = new t.EventTimeline(Y), l = 0; l < Y; l++) {
                                y = r.readFloat();
                                var G = n.events[r.readInt(!0)],
                                    H = new t.Event(y, G);
                                H.intValue = r.readInt(!1), H.floatValue = r.readFloat(), H.stringValue = r.readBoolean() ? r.readString() : G.stringValue, null != H.data.audioPath && (H.volume = r.readFloat(), H.balance = r.readFloat()), _.setFrame(l, H)
                            }
                            o.push(_), a = Math.max(a, _.frames[Y - 1])
                        }
                        return new t.Animation(i, o, a)
                    }, e.prototype.readCurve = function(t, r, i) {
                        switch (t.readByte()) {
                            case e.CURVE_STEPPED:
                                i.setStepped(r);
                                break;
                            case e.CURVE_BEZIER:
                                this.setCurve(i, r, t.readFloat(), t.readFloat(), t.readFloat(), t.readFloat())
                        }
                    }, e.prototype.setCurve = function(t, e, r, i, n, o) {
                        t.setCurve(e, r, i, n, o)
                    }, e.AttachmentTypeValues = [0, 1, 2, 3, 4, 5, 6], e.TransformModeValues = [t.TransformMode.Normal, t.TransformMode.OnlyTranslation, t.TransformMode.NoRotationOrReflection, t.TransformMode.NoScale, t.TransformMode.NoScaleOrReflection], e.PositionModeValues = [t.PositionMode.Fixed, t.PositionMode.Percent], e.SpacingModeValues = [t.SpacingMode.Length, t.SpacingMode.Fixed, t.SpacingMode.Percent], e.RotateModeValues = [t.RotateMode.Tangent, t.RotateMode.Chain, t.RotateMode.ChainScale], e.BlendModeValues = [t.BlendMode.Normal, t.BlendMode.Additive, t.BlendMode.Multiply, t.BlendMode.Screen], e.BONE_ROTATE = 0, e.BONE_TRANSLATE = 1, e.BONE_SCALE = 2, e.BONE_SHEAR = 3, e.SLOT_ATTACHMENT = 0, e.SLOT_COLOR = 1, e.SLOT_TWO_COLOR = 2, e.PATH_POSITION = 0, e.PATH_SPACING = 1, e.PATH_MIX = 2, e.CURVE_LINEAR = 0, e.CURVE_STEPPED = 1, e.CURVE_BEZIER = 2, e
                }();
                t.SkeletonBinary = e;
                var r = function() {
                        function t(t, e, r, i) {
                            void 0 === e && (e = new Array), void 0 === r && (r = 0), void 0 === i && (i = new DataView(t.buffer)), this.strings = e, this.index = r, this.buffer = i
                        }
                        return t.prototype.readByte = function() {
                            return this.buffer.getInt8(this.index++)
                        }, t.prototype.readShort = function() {
                            var t = this.buffer.getInt16(this.index);
                            return this.index += 2, t
                        }, t.prototype.readInt32 = function() {
                            var t = this.buffer.getInt32(this.index);
                            return this.index += 4, t
                        }, t.prototype.readInt = function(t) {
                            var e = this.readByte(),
                                r = 127 & e;
                            return 0 != (128 & e) && (r |= (127 & (e = this.readByte())) << 7, 0 != (128 & e) && (r |= (127 & (e = this.readByte())) << 14, 0 != (128 & e) && (r |= (127 & (e = this.readByte())) << 21, 0 != (128 & e) && (r |= (127 & (e = this.readByte())) << 28)))), t ? r : r >>> 1 ^ -(1 & r)
                        }, t.prototype.readStringRef = function() {
                            var t = this.readInt(!0);
                            return 0 == t ? null : this.strings[t - 1]
                        }, t.prototype.readString = function() {
                            var t = this.readInt(!0);
                            switch (t) {
                                case 0:
                                    return null;
                                case 1:
                                    return ""
                            }
                            t--;
                            for (var e = "", r = 0; r < t;) {
                                var i = this.readByte();
                                switch (i >> 4) {
                                    case 12:
                                    case 13:
                                        e += String.fromCharCode((31 & i) << 6 | 63 & this.readByte()), r += 2;
                                        break;
                                    case 14:
                                        e += String.fromCharCode((15 & i) << 12 | (63 & this.readByte()) << 6 | 63 & this.readByte()), r += 3;
                                        break;
                                    default:
                                        e += String.fromCharCode(i), r++
                                }
                            }
                            return e
                        }, t.prototype.readFloat = function() {
                            var t = this.buffer.getFloat32(this.index);
                            return this.index += 4, t
                        }, t.prototype.readBoolean = function() {
                            return 0 != this.readByte()
                        }, t
                    }(),
                    i = function(t, e, r, i, n) {
                        this.mesh = t, this.skin = e, this.slotIndex = r, this.parent = i, this.inheritDeform = n
                    },
                    n = function(t, e) {
                        void 0 === t && (t = null), void 0 === e && (e = null), this.bones = t, this.vertices = e
                    }
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function e() {
                        this.minX = 0, this.minY = 0, this.maxX = 0, this.maxY = 0, this.boundingBoxes = new Array, this.polygons = new Array, this.polygonPool = new t.Pool((function() {
                            return t.Utils.newFloatArray(16)
                        }))
                    }
                    return e.prototype.update = function(e, r) {
                        if (null == e) throw new Error("skeleton cannot be null.");
                        var i = this.boundingBoxes,
                            n = this.polygons,
                            o = this.polygonPool,
                            s = e.slots,
                            a = s.length;
                        i.length = 0, o.freeAll(n), n.length = 0;
                        for (var h = 0; h < a; h++) {
                            var u = s[h];
                            if (u.bone.active) {
                                var l = u.getAttachment();
                                if (l instanceof t.BoundingBoxAttachment) {
                                    var c = l;
                                    i.push(c);
                                    var d = o.obtain();
                                    d.length != c.worldVerticesLength && (d = t.Utils.newFloatArray(c.worldVerticesLength)), n.push(d), c.computeWorldVertices(u, 0, c.worldVerticesLength, d, 0, 2)
                                }
                            }
                        }
                        r ? this.aabbCompute() : (this.minX = Number.POSITIVE_INFINITY, this.minY = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, this.maxY = Number.NEGATIVE_INFINITY)
                    }, e.prototype.aabbCompute = function() {
                        for (var t = Number.POSITIVE_INFINITY, e = Number.POSITIVE_INFINITY, r = Number.NEGATIVE_INFINITY, i = Number.NEGATIVE_INFINITY, n = this.polygons, o = 0, s = n.length; o < s; o++)
                            for (var a = n[o], h = a, u = 0, l = a.length; u < l; u += 2) {
                                var c = h[u],
                                    d = h[u + 1];
                                t = Math.min(t, c), e = Math.min(e, d), r = Math.max(r, c), i = Math.max(i, d)
                            }
                        this.minX = t, this.minY = e, this.maxX = r, this.maxY = i
                    }, e.prototype.aabbContainsPoint = function(t, e) {
                        return t >= this.minX && t <= this.maxX && e >= this.minY && e <= this.maxY
                    }, e.prototype.aabbIntersectsSegment = function(t, e, r, i) {
                        var n = this.minX,
                            o = this.minY,
                            s = this.maxX,
                            a = this.maxY;
                        if (t <= n && r <= n || e <= o && i <= o || t >= s && r >= s || e >= a && i >= a) return !1;
                        var h = (i - e) / (r - t),
                            u = h * (n - t) + e;
                        if (u > o && u < a) return !0;
                        if ((u = h * (s - t) + e) > o && u < a) return !0;
                        var l = (o - e) / h + t;
                        return l > n && l < s || (l = (a - e) / h + t) > n && l < s
                    }, e.prototype.aabbIntersectsSkeleton = function(t) {
                        return this.minX < t.maxX && this.maxX > t.minX && this.minY < t.maxY && this.maxY > t.minY
                    }, e.prototype.containsPoint = function(t, e) {
                        for (var r = this.polygons, i = 0, n = r.length; i < n; i++)
                            if (this.containsPointPolygon(r[i], t, e)) return this.boundingBoxes[i];
                        return null
                    }, e.prototype.containsPointPolygon = function(t, e, r) {
                        for (var i = t, n = t.length, o = n - 2, s = !1, a = 0; a < n; a += 2) {
                            var h = i[a + 1],
                                u = i[o + 1];
                            if (h < r && u >= r || u < r && h >= r) {
                                var l = i[a];
                                l + (r - h) / (u - h) * (i[o] - l) < e && (s = !s)
                            }
                            o = a
                        }
                        return s
                    }, e.prototype.intersectsSegment = function(t, e, r, i) {
                        for (var n = this.polygons, o = 0, s = n.length; o < s; o++)
                            if (this.intersectsSegmentPolygon(n[o], t, e, r, i)) return this.boundingBoxes[o];
                        return null
                    }, e.prototype.intersectsSegmentPolygon = function(t, e, r, i, n) {
                        for (var o = t, s = t.length, a = e - i, h = r - n, u = e * n - r * i, l = o[s - 2], c = o[s - 1], d = 0; d < s; d += 2) {
                            var p = o[d],
                                f = o[d + 1],
                                m = l * f - c * p,
                                g = l - p,
                                v = c - f,
                                y = a * v - h * g,
                                x = (u * g - a * m) / y;
                            if ((x >= l && x <= p || x >= p && x <= l) && (x >= e && x <= i || x >= i && x <= e)) {
                                var _ = (u * v - h * m) / y;
                                if ((_ >= c && _ <= f || _ >= f && _ <= c) && (_ >= r && _ <= n || _ >= n && _ <= r)) return !0
                            }
                            l = p, c = f
                        }
                        return !1
                    }, e.prototype.getPolygon = function(t) {
                        if (null == t) throw new Error("boundingBox cannot be null.");
                        var e = this.boundingBoxes.indexOf(t);
                        return -1 == e ? null : this.polygons[e]
                    }, e.prototype.getWidth = function() {
                        return this.maxX - this.minX
                    }, e.prototype.getHeight = function() {
                        return this.maxY - this.minY
                    }, e
                }();
                t.SkeletonBounds = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function e() {
                        this.triangulator = new t.Triangulator, this.clippingPolygon = new Array, this.clipOutput = new Array, this.clippedVertices = new Array, this.clippedTriangles = new Array, this.scratch = new Array
                    }
                    return e.prototype.clipStart = function(r, i) {
                        if (null != this.clipAttachment) return 0;
                        this.clipAttachment = i;
                        var n = i.worldVerticesLength,
                            o = t.Utils.setArraySize(this.clippingPolygon, n);
                        i.computeWorldVertices(r, 0, n, o, 0, 2);
                        var s = this.clippingPolygon;
                        e.makeClockwise(s);
                        for (var a = this.clippingPolygons = this.triangulator.decompose(s, this.triangulator.triangulate(s)), h = 0, u = a.length; h < u; h++) {
                            var l = a[h];
                            e.makeClockwise(l), l.push(l[0]), l.push(l[1])
                        }
                        return a.length
                    }, e.prototype.clipEndWithSlot = function(t) {
                        null != this.clipAttachment && this.clipAttachment.endSlot == t.data && this.clipEnd()
                    }, e.prototype.clipEnd = function() {
                        null != this.clipAttachment && (this.clipAttachment = null, this.clippingPolygons = null, this.clippedVertices.length = 0, this.clippedTriangles.length = 0, this.clippingPolygon.length = 0)
                    }, e.prototype.isClipping = function() {
                        return null != this.clipAttachment
                    }, e.prototype.clipTriangles = function(e, r, i, n, o, s, a, h) {
                        var u = this.clipOutput,
                            l = this.clippedVertices,
                            c = this.clippedTriangles,
                            d = this.clippingPolygons,
                            p = this.clippingPolygons.length,
                            f = h ? 12 : 8,
                            m = 0;
                        l.length = 0, c.length = 0;
                        t: for (var g = 0; g < n; g += 3)
                            for (var v = i[g] << 1, y = e[v], x = e[v + 1], _ = o[v], b = o[v + 1], T = e[v = i[g + 1] << 1], w = e[v + 1], E = o[v], I = o[v + 1], S = e[v = i[g + 2] << 1], P = e[v + 1], A = o[v], M = o[v + 1], C = 0; C < p; C++) {
                                var O = l.length;
                                if (!this.clip(y, x, T, w, S, P, d[C], u)) {
                                    (X = t.Utils.setArraySize(l, O + 3 * f))[O] = y, X[O + 1] = x, X[O + 2] = s.r, X[O + 3] = s.g, X[O + 4] = s.b, X[O + 5] = s.a, h ? (X[O + 6] = _, X[O + 7] = b, X[O + 8] = a.r, X[O + 9] = a.g, X[O + 10] = a.b, X[O + 11] = a.a, X[O + 12] = T, X[O + 13] = w, X[O + 14] = s.r, X[O + 15] = s.g, X[O + 16] = s.b, X[O + 17] = s.a, X[O + 18] = E, X[O + 19] = I, X[O + 20] = a.r, X[O + 21] = a.g, X[O + 22] = a.b, X[O + 23] = a.a, X[O + 24] = S, X[O + 25] = P, X[O + 26] = s.r, X[O + 27] = s.g, X[O + 28] = s.b, X[O + 29] = s.a, X[O + 30] = A, X[O + 31] = M, X[O + 32] = a.r, X[O + 33] = a.g, X[O + 34] = a.b, X[O + 35] = a.a) : (X[O + 6] = _, X[O + 7] = b, X[O + 8] = T, X[O + 9] = w, X[O + 10] = s.r, X[O + 11] = s.g, X[O + 12] = s.b, X[O + 13] = s.a, X[O + 14] = E, X[O + 15] = I, X[O + 16] = S, X[O + 17] = P, X[O + 18] = s.r, X[O + 19] = s.g, X[O + 20] = s.b, X[O + 21] = s.a, X[O + 22] = A, X[O + 23] = M), O = c.length, (Z = t.Utils.setArraySize(c, O + 3))[O] = m, Z[O + 1] = m + 1, Z[O + 2] = m + 2, m += 3;
                                    continue t
                                }
                                var R = u.length;
                                if (0 != R) {
                                    for (var D = w - P, F = S - T, L = y - S, N = P - x, k = 1 / (D * L + F * (x - P)), B = R >> 1, U = this.clipOutput, X = t.Utils.setArraySize(l, O + B * f), V = 0; V < R; V += 2) {
                                        var j = U[V],
                                            Y = U[V + 1];
                                        X[O] = j, X[O + 1] = Y, X[O + 2] = s.r, X[O + 3] = s.g, X[O + 4] = s.b, X[O + 5] = s.a;
                                        var G = j - S,
                                            H = Y - P,
                                            W = (D * G + F * H) * k,
                                            z = (N * G + L * H) * k,
                                            q = 1 - W - z;
                                        X[O + 6] = _ * W + E * z + A * q, X[O + 7] = b * W + I * z + M * q, h && (X[O + 8] = a.r, X[O + 9] = a.g, X[O + 10] = a.b, X[O + 11] = a.a), O += f
                                    }
                                    O = c.length;
                                    var Z = t.Utils.setArraySize(c, O + 3 * (B - 2));
                                    B--;
                                    for (V = 1; V < B; V++) Z[O] = m, Z[O + 1] = m + V, Z[O + 2] = m + V + 1, O += 3;
                                    m += B + 1
                                }
                            }
                    }, e.prototype.clip = function(t, e, r, i, n, o, s, a) {
                        var h = a,
                            u = !1,
                            l = null;
                        s.length % 4 >= 2 ? (l = a, a = this.scratch) : l = this.scratch, l.length = 0, l.push(t), l.push(e), l.push(r), l.push(i), l.push(n), l.push(o), l.push(t), l.push(e), a.length = 0;
                        for (var c = s, d = s.length - 4, p = 0;; p += 2) {
                            for (var f = c[p], m = c[p + 1], g = c[p + 2], v = c[p + 3], y = f - g, x = m - v, _ = l, b = l.length - 2, T = a.length, w = 0; w < b; w += 2) {
                                var E = _[w],
                                    I = _[w + 1],
                                    S = _[w + 2],
                                    P = _[w + 3],
                                    A = y * (P - v) - x * (S - g) > 0;
                                if (y * (I - v) - x * (E - g) > 0) {
                                    if (A) {
                                        a.push(S), a.push(P);
                                        continue
                                    }
                                    var M = ((O = S - E) * (m - I) - (C = P - I) * (f - E)) / (C * (g - f) - O * (v - m));
                                    a.push(f + (g - f) * M), a.push(m + (v - m) * M)
                                } else if (A) {
                                    var C, O;
                                    M = ((O = S - E) * (m - I) - (C = P - I) * (f - E)) / (C * (g - f) - O * (v - m));
                                    a.push(f + (g - f) * M), a.push(m + (v - m) * M), a.push(S), a.push(P)
                                }
                                u = !0
                            }
                            if (T == a.length) return h.length = 0, !0;
                            if (a.push(a[0]), a.push(a[1]), p == d) break;
                            var R = a;
                            (a = l).length = 0, l = R
                        }
                        if (h != a) {
                            h.length = 0;
                            p = 0;
                            for (var D = a.length - 2; p < D; p++) h[p] = a[p]
                        } else h.length = h.length - 2;
                        return u
                    }, e.makeClockwise = function(t) {
                        for (var e = t, r = t.length, i = e[r - 2] * e[1] - e[0] * e[r - 1], n = 0, o = 0, s = 0, a = 0, h = r - 3; a < h; a += 2) n = e[a], o = e[a + 1], s = e[a + 2], i += n * e[a + 3] - s * o;
                        if (!(i < 0)) {
                            a = 0;
                            var u = r - 2;
                            for (h = r >> 1; a < h; a += 2) {
                                var l = e[a],
                                    c = e[a + 1],
                                    d = u - a;
                                e[a] = e[d], e[a + 1] = e[d + 1], e[d] = l, e[d + 1] = c
                            }
                        }
                    }, e
                }();
                t.SkeletonClipping = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function t() {
                        this.bones = new Array, this.slots = new Array, this.skins = new Array, this.events = new Array, this.animations = new Array, this.ikConstraints = new Array, this.transformConstraints = new Array, this.pathConstraints = new Array, this.fps = 0
                    }
                    return t.prototype.findBone = function(t) {
                        if (null == t) throw new Error("boneName cannot be null.");
                        for (var e = this.bones, r = 0, i = e.length; r < i; r++) {
                            var n = e[r];
                            if (n.name == t) return n
                        }
                        return null
                    }, t.prototype.findBoneIndex = function(t) {
                        if (null == t) throw new Error("boneName cannot be null.");
                        for (var e = this.bones, r = 0, i = e.length; r < i; r++)
                            if (e[r].name == t) return r;
                        return -1
                    }, t.prototype.findSlot = function(t) {
                        if (null == t) throw new Error("slotName cannot be null.");
                        for (var e = this.slots, r = 0, i = e.length; r < i; r++) {
                            var n = e[r];
                            if (n.name == t) return n
                        }
                        return null
                    }, t.prototype.findSlotIndex = function(t) {
                        if (null == t) throw new Error("slotName cannot be null.");
                        for (var e = this.slots, r = 0, i = e.length; r < i; r++)
                            if (e[r].name == t) return r;
                        return -1
                    }, t.prototype.findSkin = function(t) {
                        if (null == t) throw new Error("skinName cannot be null.");
                        for (var e = this.skins, r = 0, i = e.length; r < i; r++) {
                            var n = e[r];
                            if (n.name == t) return n
                        }
                        return null
                    }, t.prototype.findEvent = function(t) {
                        if (null == t) throw new Error("eventDataName cannot be null.");
                        for (var e = this.events, r = 0, i = e.length; r < i; r++) {
                            var n = e[r];
                            if (n.name == t) return n
                        }
                        return null
                    }, t.prototype.findAnimation = function(t) {
                        if (null == t) throw new Error("animationName cannot be null.");
                        for (var e = this.animations, r = 0, i = e.length; r < i; r++) {
                            var n = e[r];
                            if (n.name == t) return n
                        }
                        return null
                    }, t.prototype.findIkConstraint = function(t) {
                        if (null == t) throw new Error("constraintName cannot be null.");
                        for (var e = this.ikConstraints, r = 0, i = e.length; r < i; r++) {
                            var n = e[r];
                            if (n.name == t) return n
                        }
                        return null
                    }, t.prototype.findTransformConstraint = function(t) {
                        if (null == t) throw new Error("constraintName cannot be null.");
                        for (var e = this.transformConstraints, r = 0, i = e.length; r < i; r++) {
                            var n = e[r];
                            if (n.name == t) return n
                        }
                        return null
                    }, t.prototype.findPathConstraint = function(t) {
                        if (null == t) throw new Error("constraintName cannot be null.");
                        for (var e = this.pathConstraints, r = 0, i = e.length; r < i; r++) {
                            var n = e[r];
                            if (n.name == t) return n
                        }
                        return null
                    }, t.prototype.findPathConstraintIndex = function(t) {
                        if (null == t) throw new Error("pathConstraintName cannot be null.");
                        for (var e = this.pathConstraints, r = 0, i = e.length; r < i; r++)
                            if (e[r].name == t) return r;
                        return -1
                    }, t
                }();
                t.SkeletonData = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                t.FAIL_ON_NON_EXISTING_SKIN = !1;
                var e = function() {
                    function e(t) {
                        this.scale = 1, this.linkedMeshes = new Array, this.attachmentLoader = t
                    }
                    return e.prototype.readSkeletonData = function(r) {
                        var i = this.scale,
                            n = new t.SkeletonData,
                            o = "string" == typeof r ? JSON.parse(r) : r,
                            s = o.skeleton;
                        if (null != s && (n.hash = s.hash, n.version = s.spine, n.x = s.x, n.y = s.y, n.width = s.width, n.height = s.height, n.fps = s.fps, n.imagesPath = s.images), o.bones)
                            for (var a = 0; a < o.bones.length; a++) {
                                var h = o.bones[a],
                                    u = null,
                                    l = this.getValue(h, "parent", null);
                                if (null != l && null == (u = n.findBone(l))) throw new Error("Parent bone not found: " + l);
                                (f = new t.BoneData(n.bones.length, h.name, u)).length = this.getValue(h, "length", 0) * i, f.x = this.getValue(h, "x", 0) * i, f.y = this.getValue(h, "y", 0) * i, f.rotation = this.getValue(h, "rotation", 0), f.scaleX = this.getValue(h, "scaleX", 1), f.scaleY = this.getValue(h, "scaleY", 1), f.shearX = this.getValue(h, "shearX", 0), f.shearY = this.getValue(h, "shearY", 0), f.transformMode = e.transformModeFromString(this.getValue(h, "transform", "normal")), f.skinRequired = this.getValue(h, "skin", !1), n.bones.push(f)
                            }
                        if (o.slots)
                            for (a = 0; a < o.slots.length; a++) {
                                var c = (S = o.slots[a]).name,
                                    d = S.bone,
                                    p = n.findBone(d);
                                if (null == p) throw new Error("Slot bone not found: " + d);
                                var f = new t.SlotData(n.slots.length, c, p),
                                    m = this.getValue(S, "color", null);
                                null != m && f.color.setFromString(m);
                                var g = this.getValue(S, "dark", null);
                                null != g && (f.darkColor = new t.Color(1, 1, 1, 1), f.darkColor.setFromString(g)), f.attachmentName = this.getValue(S, "attachment", null), f.blendMode = e.blendModeFromString(this.getValue(S, "blend", "normal")), n.slots.push(f)
                            }
                        if (o.ik)
                            for (a = 0; a < o.ik.length; a++) {
                                var v = o.ik[a];
                                (f = new t.IkConstraintData(v.name)).order = this.getValue(v, "order", 0), f.skinRequired = this.getValue(v, "skin", !1);
                                for (var y = 0; y < v.bones.length; y++) {
                                    d = v.bones[y];
                                    if (null == (w = n.findBone(d))) throw new Error("IK bone not found: " + d);
                                    f.bones.push(w)
                                }
                                var x = v.target;
                                if (f.target = n.findBone(x), null == f.target) throw new Error("IK target bone not found: " + x);
                                f.mix = this.getValue(v, "mix", 1), f.softness = this.getValue(v, "softness", 0) * i, f.bendDirection = this.getValue(v, "bendPositive", !0) ? 1 : -1, f.compress = this.getValue(v, "compress", !1), f.stretch = this.getValue(v, "stretch", !1), f.uniform = this.getValue(v, "uniform", !1), n.ikConstraints.push(f)
                            }
                        if (o.transform)
                            for (a = 0; a < o.transform.length; a++) {
                                v = o.transform[a];
                                (f = new t.TransformConstraintData(v.name)).order = this.getValue(v, "order", 0), f.skinRequired = this.getValue(v, "skin", !1);
                                for (y = 0; y < v.bones.length; y++) {
                                    d = v.bones[y];
                                    if (null == (w = n.findBone(d))) throw new Error("Transform constraint bone not found: " + d);
                                    f.bones.push(w)
                                }
                                x = v.target;
                                if (f.target = n.findBone(x), null == f.target) throw new Error("Transform constraint target bone not found: " + x);
                                f.local = this.getValue(v, "local", !1), f.relative = this.getValue(v, "relative", !1), f.offsetRotation = this.getValue(v, "rotation", 0), f.offsetX = this.getValue(v, "x", 0) * i, f.offsetY = this.getValue(v, "y", 0) * i, f.offsetScaleX = this.getValue(v, "scaleX", 0), f.offsetScaleY = this.getValue(v, "scaleY", 0), f.offsetShearY = this.getValue(v, "shearY", 0), f.rotateMix = this.getValue(v, "rotateMix", 1), f.translateMix = this.getValue(v, "translateMix", 1), f.scaleMix = this.getValue(v, "scaleMix", 1), f.shearMix = this.getValue(v, "shearMix", 1), n.transformConstraints.push(f)
                            }
                        if (o.path)
                            for (a = 0; a < o.path.length; a++) {
                                v = o.path[a];
                                (f = new t.PathConstraintData(v.name)).order = this.getValue(v, "order", 0), f.skinRequired = this.getValue(v, "skin", !1);
                                for (y = 0; y < v.bones.length; y++) {
                                    d = v.bones[y];
                                    if (null == (w = n.findBone(d))) throw new Error("Transform constraint bone not found: " + d);
                                    f.bones.push(w)
                                }
                                x = v.target;
                                if (f.target = n.findSlot(x), null == f.target) throw new Error("Path target slot not found: " + x);
                                f.positionMode = e.positionModeFromString(this.getValue(v, "positionMode", "percent")), f.spacingMode = e.spacingModeFromString(this.getValue(v, "spacingMode", "length")), f.rotateMode = e.rotateModeFromString(this.getValue(v, "rotateMode", "tangent")), f.offsetRotation = this.getValue(v, "rotation", 0), f.position = this.getValue(v, "position", 0), f.positionMode == t.PositionMode.Fixed && (f.position *= i), f.spacing = this.getValue(v, "spacing", 0), f.spacingMode != t.SpacingMode.Length && f.spacingMode != t.SpacingMode.Fixed || (f.spacing *= i), f.rotateMix = this.getValue(v, "rotateMix", 1), f.translateMix = this.getValue(v, "translateMix", 1), n.pathConstraints.push(f)
                            }
                        if (o.skins)
                            for (a = 0; a < o.skins.length; a++) {
                                var _ = o.skins[a],
                                    b = new t.Skin(_.name);
                                if (_.bones)
                                    for (var T = 0; T < _.bones.length; T++) {
                                        var w;
                                        if (null == (w = n.findBone(_.bones[T]))) throw new Error("Skin bone not found: " + _.bones[a]);
                                        b.bones.push(w)
                                    }
                                if (_.ik)
                                    for (T = 0; T < _.ik.length; T++) {
                                        if (null == (E = n.findIkConstraint(_.ik[T]))) throw new Error("Skin IK constraint not found: " + _.ik[a]);
                                        b.constraints.push(E)
                                    }
                                if (_.transform)
                                    for (T = 0; T < _.transform.length; T++) {
                                        if (null == (E = n.findTransformConstraint(_.transform[T]))) throw new Error("Skin transform constraint not found: " + _.transform[a]);
                                        b.constraints.push(E)
                                    }
                                if (_.path)
                                    for (T = 0; T < _.path.length; T++) {
                                        var E;
                                        if (null == (E = n.findPathConstraint(_.path[T]))) throw new Error("Skin path constraint not found: " + _.path[a]);
                                        b.constraints.push(E)
                                    }
                                for (var c in _.attachments) {
                                    var I = n.findSlot(c);
                                    if (null == I) throw new Error("Slot not found: " + c);
                                    var S = _.attachments[c];
                                    for (var P in S) {
                                        var A = this.readAttachment(S[P], b, I.index, P, n);
                                        null != A && b.setAttachment(I.index, P, A)
                                    }
                                }
                                n.skins.push(b), "default" == b.name && (n.defaultSkin = b)
                            }
                        a = 0;
                        for (var M = this.linkedMeshes.length; a < M; a++) {
                            var C = this.linkedMeshes[a];
                            if (null == (b = null == C.skin ? n.defaultSkin : n.findSkin(C.skin))) throw new Error("Skin not found: " + C.skin);
                            var O = b.getAttachment(C.slotIndex, C.parent);
                            if (null == O) throw new Error("Parent mesh not found: " + C.parent);
                            C.mesh.deformAttachment = C.inheritDeform ? O : C.mesh, C.mesh.setParentMesh(O)
                        }
                        if (this.linkedMeshes.length = 0, o.events)
                            for (var R in o.events) {
                                var D = o.events[R];
                                (f = new t.EventData(R)).intValue = this.getValue(D, "int", 0), f.floatValue = this.getValue(D, "float", 0), f.stringValue = this.getValue(D, "string", ""), f.audioPath = this.getValue(D, "audio", null), null != f.audioPath && (f.volume = this.getValue(D, "volume", 1), f.balance = this.getValue(D, "balance", 0)), n.events.push(f)
                            }
                        if (o.animations)
                            for (var F in o.animations) {
                                var L = o.animations[F];
                                this.readAnimation(L, F, n)
                            }
                        return n
                    }, e.prototype.readAttachment = function(e, i, n, o, s) {
                        var a = this.scale;
                        switch (o = this.getValue(e, "name", o), this.getValue(e, "type", "region")) {
                            case "region":
                                var h = this.getValue(e, "path", o),
                                    u = this.attachmentLoader.newRegionAttachment(i, o, h);
                                return null == u ? null : (u.path = h, u.x = this.getValue(e, "x", 0) * a, u.y = this.getValue(e, "y", 0) * a, u.scaleX = this.getValue(e, "scaleX", 1), u.scaleY = this.getValue(e, "scaleY", 1), u.rotation = this.getValue(e, "rotation", 0), u.width = e.width * a, u.height = e.height * a, null != (b = this.getValue(e, "color", null)) && u.color.setFromString(b), u);
                            case "boundingbox":
                                var l = this.attachmentLoader.newBoundingBoxAttachment(i, o);
                                return null == l ? null : (this.readVertices(e, l, e.vertexCount << 1), null != (b = this.getValue(e, "color", null)) && l.color.setFromString(b), l);
                            case "mesh":
                            case "linkedmesh":
                                h = this.getValue(e, "path", o);
                                var c = this.attachmentLoader.newMeshAttachment(i, o, h);
                                if (null == c) return null;
                                c.path = h, null != (b = this.getValue(e, "color", null)) && c.color.setFromString(b), c.width = this.getValue(e, "width", 0) * a, c.height = this.getValue(e, "height", 0) * a;
                                var d = this.getValue(e, "parent", null);
                                if (null != d) return this.linkedMeshes.push(new r(c, this.getValue(e, "skin", null), n, d, this.getValue(e, "deform", !0))), c;
                                var p = e.uvs;
                                return this.readVertices(e, c, p.length), c.triangles = e.triangles, c.regionUVs = new Float32Array(p), c.edges = this.getValue(e, "edges", null), c.hullLength = 2 * this.getValue(e, "hull", 0), c;
                            case "path":
                                if (null == (h = this.attachmentLoader.newPathAttachment(i, o))) return null;
                                h.closed = this.getValue(e, "closed", !1), h.constantSpeed = this.getValue(e, "constantSpeed", !0);
                                var f = e.vertexCount;
                                this.readVertices(e, h, f << 1);
                                for (var m = t.Utils.newArray(f / 3, 0), g = 0; g < e.lengths.length; g++) m[g] = e.lengths[g] * a;
                                return h.lengths = m, null != (b = this.getValue(e, "color", null)) && h.color.setFromString(b), h;
                            case "point":
                                var v = this.attachmentLoader.newPointAttachment(i, o);
                                return null == v ? null : (v.x = this.getValue(e, "x", 0) * a, v.y = this.getValue(e, "y", 0) * a, v.rotation = this.getValue(e, "rotation", 0), null != (b = this.getValue(e, "color", null)) && v.color.setFromString(b), v);
                            case "clipping":
                                var y = this.attachmentLoader.newClippingAttachment(i, o);
                                if (null == y) return null;
                                var x = this.getValue(e, "end", null);
                                if (null != x) {
                                    var _ = s.findSlot(x);
                                    if (null == _) throw new Error("Clipping end slot not found: " + x);
                                    y.endSlot = _
                                }
                                var b;
                                f = e.vertexCount;
                                return this.readVertices(e, y, f << 1), null != (b = this.getValue(e, "color", null)) && y.color.setFromString(b), y
                        }
                        return null
                    }, e.prototype.readVertices = function(e, r, i) {
                        var n = this.scale;
                        r.worldVerticesLength = i;
                        var o = e.vertices;
                        if (i != o.length) {
                            var s = new Array,
                                a = new Array;
                            for (c = 0, d = o.length; c < d;) {
                                var h = o[c++];
                                a.push(h);
                                for (var u = c + 4 * h; c < u; c += 4) a.push(o[c]), s.push(o[c + 1] * n), s.push(o[c + 2] * n), s.push(o[c + 3])
                            }
                            r.bones = a, r.vertices = t.Utils.toFloatArray(s)
                        } else {
                            var l = t.Utils.toFloatArray(o);
                            if (1 != n)
                                for (var c = 0, d = o.length; c < d; c++) l[c] *= n;
                            r.vertices = l
                        }
                    }, e.prototype.readAnimation = function(e, r, i) {
                        var n = this.scale,
                            o = new Array,
                            s = 0;
                        if (e.slots)
                            for (var a in e.slots) {
                                var h = e.slots[a];
                                if (-1 == (K = i.findSlotIndex(a))) throw new Error("Slot not found: " + a);
                                for (var u in h) {
                                    var l = h[u];
                                    if ("attachment" == u) {
                                        (_ = new t.AttachmentTimeline(l.length)).slotIndex = K;
                                        for (var c = 0, d = 0; d < l.length; d++) {
                                            var p = l[d];
                                            _.setFrame(c++, this.getValue(p, "time", 0), p.name)
                                        }
                                        o.push(_), s = Math.max(s, _.frames[_.getFrameCount() - 1])
                                    } else if ("color" == u) {
                                        (_ = new t.ColorTimeline(l.length)).slotIndex = K;
                                        for (c = 0, d = 0; d < l.length; d++) {
                                            p = l[d];
                                            var f = new t.Color;
                                            f.setFromString(p.color || "ffffffff"), _.setFrame(c, this.getValue(p, "time", 0), f.r, f.g, f.b, f.a), this.readCurve(p, _, c), c++
                                        }
                                        o.push(_), s = Math.max(s, _.frames[(_.getFrameCount() - 1) * t.ColorTimeline.ENTRIES])
                                    } else {
                                        if ("twoColor" != u) throw new Error("Invalid timeline type for a slot: " + u + " (" + a + ")");
                                        (_ = new t.TwoColorTimeline(l.length)).slotIndex = K;
                                        for (c = 0, d = 0; d < l.length; d++) {
                                            p = l[d];
                                            var m = new t.Color,
                                                g = new t.Color;
                                            m.setFromString(p.light), g.setFromString(p.dark), _.setFrame(c, this.getValue(p, "time", 0), m.r, m.g, m.b, m.a, g.r, g.g, g.b), this.readCurve(p, _, c), c++
                                        }
                                        o.push(_), s = Math.max(s, _.frames[(_.getFrameCount() - 1) * t.TwoColorTimeline.ENTRIES])
                                    }
                                }
                            }
                        if (e.bones)
                            for (var v in e.bones) {
                                var y = e.bones[v],
                                    x = i.findBoneIndex(v);
                                if (-1 == x) throw new Error("Bone not found: " + v);
                                for (var u in y) {
                                    l = y[u];
                                    if ("rotate" === u) {
                                        (_ = new t.RotateTimeline(l.length)).boneIndex = x;
                                        for (c = 0, d = 0; d < l.length; d++) {
                                            p = l[d];
                                            _.setFrame(c, this.getValue(p, "time", 0), this.getValue(p, "angle", 0)), this.readCurve(p, _, c), c++
                                        }
                                        o.push(_), s = Math.max(s, _.frames[(_.getFrameCount() - 1) * t.RotateTimeline.ENTRIES])
                                    } else {
                                        if ("translate" !== u && "scale" !== u && "shear" !== u) throw new Error("Invalid timeline type for a bone: " + u + " (" + v + ")");
                                        var _ = null,
                                            b = 1,
                                            T = 0;
                                        "scale" === u ? (_ = new t.ScaleTimeline(l.length), T = 1) : "shear" === u ? _ = new t.ShearTimeline(l.length) : (_ = new t.TranslateTimeline(l.length), b = n), _.boneIndex = x;
                                        for (c = 0, d = 0; d < l.length; d++) {
                                            p = l[d];
                                            var w = this.getValue(p, "x", T),
                                                E = this.getValue(p, "y", T);
                                            _.setFrame(c, this.getValue(p, "time", 0), w * b, E * b), this.readCurve(p, _, c), c++
                                        }
                                        o.push(_), s = Math.max(s, _.frames[(_.getFrameCount() - 1) * t.TranslateTimeline.ENTRIES])
                                    }
                                }
                            }
                        if (e.ik)
                            for (var I in e.ik) {
                                var S = e.ik[I],
                                    P = i.findIkConstraint(I);
                                (_ = new t.IkConstraintTimeline(S.length)).ikConstraintIndex = i.ikConstraints.indexOf(P);
                                for (c = 0, d = 0; d < S.length; d++) {
                                    p = S[d];
                                    _.setFrame(c, this.getValue(p, "time", 0), this.getValue(p, "mix", 1), this.getValue(p, "softness", 0) * n, this.getValue(p, "bendPositive", !0) ? 1 : -1, this.getValue(p, "compress", !1), this.getValue(p, "stretch", !1)), this.readCurve(p, _, c), c++
                                }
                                o.push(_), s = Math.max(s, _.frames[(_.getFrameCount() - 1) * t.IkConstraintTimeline.ENTRIES])
                            }
                        if (e.transform)
                            for (var I in e.transform) {
                                S = e.transform[I], P = i.findTransformConstraint(I);
                                (_ = new t.TransformConstraintTimeline(S.length)).transformConstraintIndex = i.transformConstraints.indexOf(P);
                                for (c = 0, d = 0; d < S.length; d++) {
                                    p = S[d];
                                    _.setFrame(c, this.getValue(p, "time", 0), this.getValue(p, "rotateMix", 1), this.getValue(p, "translateMix", 1), this.getValue(p, "scaleMix", 1), this.getValue(p, "shearMix", 1)), this.readCurve(p, _, c), c++
                                }
                                o.push(_), s = Math.max(s, _.frames[(_.getFrameCount() - 1) * t.TransformConstraintTimeline.ENTRIES])
                            }
                        if (e.path)
                            for (var I in e.path) {
                                S = e.path[I];
                                var A = i.findPathConstraintIndex(I);
                                if (-1 == A) throw new Error("Path constraint not found: " + I);
                                var M = i.pathConstraints[A];
                                for (var u in S) {
                                    l = S[u];
                                    if ("position" === u || "spacing" === u) {
                                        _ = null, b = 1;
                                        "spacing" === u ? (_ = new t.PathConstraintSpacingTimeline(l.length), M.spacingMode != t.SpacingMode.Length && M.spacingMode != t.SpacingMode.Fixed || (b = n)) : (_ = new t.PathConstraintPositionTimeline(l.length), M.positionMode == t.PositionMode.Fixed && (b = n)), _.pathConstraintIndex = A;
                                        for (c = 0, d = 0; d < l.length; d++) {
                                            p = l[d];
                                            _.setFrame(c, this.getValue(p, "time", 0), this.getValue(p, u, 0) * b), this.readCurve(p, _, c), c++
                                        }
                                        o.push(_), s = Math.max(s, _.frames[(_.getFrameCount() - 1) * t.PathConstraintPositionTimeline.ENTRIES])
                                    } else if ("mix" === u) {
                                        (_ = new t.PathConstraintMixTimeline(l.length)).pathConstraintIndex = A;
                                        for (c = 0, d = 0; d < l.length; d++) {
                                            p = l[d];
                                            _.setFrame(c, this.getValue(p, "time", 0), this.getValue(p, "rotateMix", 1), this.getValue(p, "translateMix", 1)), this.readCurve(p, _, c), c++
                                        }
                                        o.push(_), s = Math.max(s, _.frames[(_.getFrameCount() - 1) * t.PathConstraintMixTimeline.ENTRIES])
                                    }
                                }
                            }
                        if (e.deform)
                            for (var C in e.deform) {
                                var O = e.deform[C],
                                    R = i.findSkin(C);
                                if (null != R)
                                    for (var a in O) {
                                        h = O[a];
                                        if (-1 == (K = i.findSlotIndex(a))) throw new Error("Slot not found: " + h.name);
                                        for (var u in h) {
                                            l = h[u];
                                            var D = R.getAttachment(K, u);
                                            if (null == D) throw new Error("Deform attachment not found: " + l.name);
                                            var F = null != D.bones,
                                                L = D.vertices,
                                                N = F ? L.length / 3 * 2 : L.length;
                                            (_ = new t.DeformTimeline(l.length)).slotIndex = K, _.attachment = D;
                                            c = 0;
                                            for (var k = 0; k < l.length; k++) {
                                                p = l[k];
                                                var B = void 0,
                                                    U = this.getValue(p, "vertices", null);
                                                if (null == U) B = F ? t.Utils.newFloatArray(N) : L;
                                                else {
                                                    B = t.Utils.newFloatArray(N);
                                                    var X = this.getValue(p, "offset", 0);
                                                    if (t.Utils.arrayCopy(U, 0, B, X, U.length), 1 != n)
                                                        for (var V = (d = X) + U.length; d < V; d++) B[d] *= n;
                                                    if (!F)
                                                        for (d = 0; d < N; d++) B[d] += L[d]
                                                }
                                                _.setFrame(c, this.getValue(p, "time", 0), B), this.readCurve(p, _, c), c++
                                            }
                                            o.push(_), s = Math.max(s, _.frames[_.getFrameCount() - 1])
                                        }
                                    } else if (t.FAIL_ON_NON_EXISTING_SKIN) throw new Error("Skin not found: " + C)
                            }
                        var j = e.drawOrder;
                        if (null == j && (j = e.draworder), null != j) {
                            _ = new t.DrawOrderTimeline(j.length);
                            var Y = i.slots.length;
                            for (c = 0, k = 0; k < j.length; k++) {
                                var G = j[k],
                                    H = null,
                                    W = this.getValue(G, "offsets", null);
                                if (null != W) {
                                    H = t.Utils.newArray(Y, -1);
                                    var z = t.Utils.newArray(Y - W.length, 0),
                                        q = 0,
                                        Z = 0;
                                    for (d = 0; d < W.length; d++) {
                                        var K, J = W[d];
                                        if (-1 == (K = i.findSlotIndex(J.slot))) throw new Error("Slot not found: " + J.slot);
                                        for (; q != K;) z[Z++] = q++;
                                        H[q + J.offset] = q++
                                    }
                                    for (; q < Y;) z[Z++] = q++;
                                    for (d = Y - 1; d >= 0; d--) - 1 == H[d] && (H[d] = z[--Z])
                                }
                                _.setFrame(c++, this.getValue(G, "time", 0), H)
                            }
                            o.push(_), s = Math.max(s, _.frames[_.getFrameCount() - 1])
                        }
                        if (e.events) {
                            for (_ = new t.EventTimeline(e.events.length), c = 0, d = 0; d < e.events.length; d++) {
                                var Q = e.events[d],
                                    $ = i.findEvent(Q.name);
                                if (null == $) throw new Error("Event not found: " + Q.name);
                                var tt = new t.Event(t.Utils.toSinglePrecision(this.getValue(Q, "time", 0)), $);
                                tt.intValue = this.getValue(Q, "int", $.intValue), tt.floatValue = this.getValue(Q, "float", $.floatValue), tt.stringValue = this.getValue(Q, "string", $.stringValue), null != tt.data.audioPath && (tt.volume = this.getValue(Q, "volume", 1), tt.balance = this.getValue(Q, "balance", 0)), _.setFrame(c++, tt)
                            }
                            o.push(_), s = Math.max(s, _.frames[_.getFrameCount() - 1])
                        }
                        if (isNaN(s)) throw new Error("Error while parsing animation, duration is NaN");
                        i.animations.push(new t.Animation(r, o, s))
                    }, e.prototype.readCurve = function(t, e, r) {
                        if (t.curve)
                            if ("stepped" === t.curve) e.setStepped(r);
                            else {
                                var i = t.curve;
                                e.setCurve(r, i, this.getValue(t, "c2", 0), this.getValue(t, "c3", 1), this.getValue(t, "c4", 1))
                            }
                    }, e.prototype.getValue = function(t, e, r) {
                        return void 0 !== t[e] ? t[e] : r
                    }, e.blendModeFromString = function(e) {
                        if ("normal" == (e = e.toLowerCase())) return t.BlendMode.Normal;
                        if ("additive" == e) return t.BlendMode.Additive;
                        if ("multiply" == e) return t.BlendMode.Multiply;
                        if ("screen" == e) return t.BlendMode.Screen;
                        throw new Error("Unknown blend mode: " + e)
                    }, e.positionModeFromString = function(e) {
                        if ("fixed" == (e = e.toLowerCase())) return t.PositionMode.Fixed;
                        if ("percent" == e) return t.PositionMode.Percent;
                        throw new Error("Unknown position mode: " + e)
                    }, e.spacingModeFromString = function(e) {
                        if ("length" == (e = e.toLowerCase())) return t.SpacingMode.Length;
                        if ("fixed" == e) return t.SpacingMode.Fixed;
                        if ("percent" == e) return t.SpacingMode.Percent;
                        throw new Error("Unknown position mode: " + e)
                    }, e.rotateModeFromString = function(e) {
                        if ("tangent" == (e = e.toLowerCase())) return t.RotateMode.Tangent;
                        if ("chain" == e) return t.RotateMode.Chain;
                        if ("chainscale" == e) return t.RotateMode.ChainScale;
                        throw new Error("Unknown rotate mode: " + e)
                    }, e.transformModeFromString = function(e) {
                        if ("normal" == (e = e.toLowerCase())) return t.TransformMode.Normal;
                        if ("onlytranslation" == e) return t.TransformMode.OnlyTranslation;
                        if ("norotationorreflection" == e) return t.TransformMode.NoRotationOrReflection;
                        if ("noscale" == e) return t.TransformMode.NoScale;
                        if ("noscaleorreflection" == e) return t.TransformMode.NoScaleOrReflection;
                        throw new Error("Unknown transform mode: " + e)
                    }, e
                }();
                t.SkeletonJson = e;
                var r = function(t, e, r, i, n) {
                    this.mesh = t, this.skin = e, this.slotIndex = r, this.parent = i, this.inheritDeform = n
                }
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function(t, e, r) {
                    this.slotIndex = t, this.name = e, this.attachment = r
                };
                t.SkinEntry = e;
                var r = function() {
                    function r(t) {
                        if (this.attachments = new Array, this.bones = Array(), this.constraints = new Array, null == t) throw new Error("name cannot be null.");
                        this.name = t
                    }
                    return r.prototype.setAttachment = function(t, e, r) {
                        if (null == r) throw new Error("attachment cannot be null.");
                        var i = this.attachments;
                        t >= i.length && (i.length = t + 1), i[t] || (i[t] = {}), i[t][e] = r
                    }, r.prototype.addSkin = function(t) {
                        for (var e = 0; e < t.bones.length; e++) {
                            for (var r = t.bones[e], i = !1, n = 0; n < this.bones.length; n++)
                                if (this.bones[n] == r) {
                                    i = !0;
                                    break
                                } i || this.bones.push(r)
                        }
                        for (e = 0; e < t.constraints.length; e++) {
                            var o = t.constraints[e];
                            for (i = !1, n = 0; n < this.constraints.length; n++)
                                if (this.constraints[n] == o) {
                                    i = !0;
                                    break
                                } i || this.constraints.push(o)
                        }
                        var s = t.getAttachments();
                        for (e = 0; e < s.length; e++) {
                            var a = s[e];
                            this.setAttachment(a.slotIndex, a.name, a.attachment)
                        }
                    }, r.prototype.copySkin = function(e) {
                        for (var r = 0; r < e.bones.length; r++) {
                            for (var i = e.bones[r], n = !1, o = 0; o < this.bones.length; o++)
                                if (this.bones[o] == i) {
                                    n = !0;
                                    break
                                } n || this.bones.push(i)
                        }
                        for (r = 0; r < e.constraints.length; r++) {
                            var s = e.constraints[r];
                            for (n = !1, o = 0; o < this.constraints.length; o++)
                                if (this.constraints[o] == s) {
                                    n = !0;
                                    break
                                } n || this.constraints.push(s)
                        }
                        var a = e.getAttachments();
                        for (r = 0; r < a.length; r++) {
                            var h = a[r];
                            null != h.attachment && (h.attachment instanceof t.MeshAttachment ? (h.attachment = h.attachment.newLinkedMesh(), this.setAttachment(h.slotIndex, h.name, h.attachment)) : (h.attachment = h.attachment.copy(), this.setAttachment(h.slotIndex, h.name, h.attachment)))
                        }
                    }, r.prototype.getAttachment = function(t, e) {
                        var r = this.attachments[t];
                        return r ? r[e] : null
                    }, r.prototype.removeAttachment = function(t, e) {
                        var r = this.attachments[t];
                        r && (r[e] = null)
                    }, r.prototype.getAttachments = function() {
                        for (var t = new Array, r = 0; r < this.attachments.length; r++) {
                            var i = this.attachments[r];
                            if (i)
                                for (var n in i) {
                                    var o = i[n];
                                    o && t.push(new e(r, n, o))
                                }
                        }
                        return t
                    }, r.prototype.getAttachmentsForSlot = function(t, r) {
                        var i = this.attachments[t];
                        if (i)
                            for (var n in i) {
                                var o = i[n];
                                o && r.push(new e(t, n, o))
                            }
                    }, r.prototype.clear = function() {
                        this.attachments.length = 0, this.bones.length = 0, this.constraints.length = 0
                    }, r.prototype.attachAll = function(t, e) {
                        for (var r = 0, i = 0; i < t.slots.length; i++) {
                            var n = t.slots[i],
                                o = n.getAttachment();
                            if (o && r < e.attachments.length) {
                                var s = e.attachments[r];
                                for (var a in s) {
                                    if (o == s[a]) {
                                        var h = this.getAttachment(r, a);
                                        null != h && n.setAttachment(h);
                                        break
                                    }
                                }
                            }
                            r++
                        }
                    }, r
                }();
                t.Skin = r
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function e(e, r) {
                        if (this.deform = new Array, null == e) throw new Error("data cannot be null.");
                        if (null == r) throw new Error("bone cannot be null.");
                        this.data = e, this.bone = r, this.color = new t.Color, this.darkColor = null == e.darkColor ? null : new t.Color, this.setToSetupPose(), this.blendMode = this.data.blendMode
                    }
                    return e.prototype.getAttachment = function() {
                        return this.attachment
                    }, e.prototype.setAttachment = function(t) {
                        this.attachment != t && (this.attachment = t, this.attachmentTime = this.bone.skeleton.time, this.deform.length = 0)
                    }, e.prototype.setAttachmentTime = function(t) {
                        this.attachmentTime = this.bone.skeleton.time - t
                    }, e.prototype.getAttachmentTime = function() {
                        return this.bone.skeleton.time - this.attachmentTime
                    }, e.prototype.setToSetupPose = function() {
                        this.color.setFromColor(this.data.color), null != this.darkColor && this.darkColor.setFromColor(this.data.darkColor), null == this.data.attachmentName ? this.attachment = null : (this.attachment = null, this.setAttachment(this.bone.skeleton.getAttachment(this.data.index, this.data.attachmentName)))
                    }, e
                }();
                t.Slot = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function(e, r, i) {
                    if (this.color = new t.Color(1, 1, 1, 1), e < 0) throw new Error("index must be >= 0.");
                    if (null == r) throw new Error("name cannot be null.");
                    if (null == i) throw new Error("boneData cannot be null.");
                    this.index = e, this.name = r, this.boneData = i
                };
                t.SlotData = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e, r, i = function() {
                    function t(t) {
                        this._image = t
                    }
                    return t.prototype.getImage = function() {
                        return this._image
                    }, t.filterFromString = function(t) {
                        switch (t.toLowerCase()) {
                            case "nearest":
                                return e.Nearest;
                            case "linear":
                                return e.Linear;
                            case "mipmap":
                                return e.MipMap;
                            case "mipmapnearestnearest":
                                return e.MipMapNearestNearest;
                            case "mipmaplinearnearest":
                                return e.MipMapLinearNearest;
                            case "mipmapnearestlinear":
                                return e.MipMapNearestLinear;
                            case "mipmaplinearlinear":
                                return e.MipMapLinearLinear;
                            default:
                                throw new Error("Unknown texture filter " + t)
                        }
                    }, t.wrapFromString = function(t) {
                        switch (t.toLowerCase()) {
                            case "mirroredtepeat":
                                return r.MirroredRepeat;
                            case "clamptoedge":
                                return r.ClampToEdge;
                            case "repeat":
                                return r.Repeat;
                            default:
                                throw new Error("Unknown texture wrap " + t)
                        }
                    }, t
                }();
                t.Texture = i,
                    function(t) {
                        t[t.Nearest = 9728] = "Nearest", t[t.Linear = 9729] = "Linear", t[t.MipMap = 9987] = "MipMap", t[t.MipMapNearestNearest = 9984] = "MipMapNearestNearest", t[t.MipMapLinearNearest = 9985] = "MipMapLinearNearest", t[t.MipMapNearestLinear = 9986] = "MipMapNearestLinear", t[t.MipMapLinearLinear = 9987] = "MipMapLinearLinear"
                    }(e = t.TextureFilter || (t.TextureFilter = {})),
                    function(t) {
                        t[t.MirroredRepeat = 33648] = "MirroredRepeat", t[t.ClampToEdge = 33071] = "ClampToEdge", t[t.Repeat = 10497] = "Repeat"
                    }(r = t.TextureWrap || (t.TextureWrap = {}));
                var n = function() {
                    function t() {
                        this.size = null
                    }
                    return Object.defineProperty(t.prototype, "width", {
                        get: function() {
                            var t = this.texture;
                            return "3" == PIXI.VERSION[0] ? t.crop.width : t.trim ? t.trim.width : t.orig.width
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "height", {
                        get: function() {
                            var t = this.texture;
                            return "3" == PIXI.VERSION[0] ? t.crop.height : t.trim ? t.trim.height : t.orig.height
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "u", {
                        get: function() {
                            return this.texture._uvs.x0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "v", {
                        get: function() {
                            return this.texture._uvs.y0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "u2", {
                        get: function() {
                            return this.texture._uvs.x2
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "v2", {
                        get: function() {
                            return this.texture._uvs.y2
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "offsetX", {
                        get: function() {
                            var t = this.texture;
                            return t.trim ? t.trim.x : 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "offsetY", {
                        get: function() {
                            return console.warn("Deprecation Warning: @Hackerham: I guess, if you are using PIXI-SPINE ATLAS region.offsetY, you want a texture, right? Use region.texture from now on."), this.spineOffsetY
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "pixiOffsetY", {
                        get: function() {
                            var t = this.texture;
                            return t.trim ? t.trim.y : 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "spineOffsetY", {
                        get: function() {
                            var t = this.texture;
                            return this.originalHeight - this.height - (t.trim ? t.trim.y : 0)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "originalWidth", {
                        get: function() {
                            var t = this.texture;
                            return "3" == PIXI.VERSION[0] ? t.trim ? t.trim.width : t.crop.width : t.orig.width
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "originalHeight", {
                        get: function() {
                            var t = this.texture;
                            return "3" == PIXI.VERSION[0] ? t.trim ? t.trim.height : t.crop.height : t.orig.height
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "x", {
                        get: function() {
                            return this.texture.frame.x
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "y", {
                        get: function() {
                            return this.texture.frame.y
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "rotate", {
                        get: function() {
                            return 0 !== this.texture.rotate
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }();
                t.TextureRegion = n
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function e(t, e, r) {
                        this.pages = new Array, this.regions = new Array, t && this.addSpineAtlas(t, e, r)
                    }
                    return e.prototype.addTexture = function(e, r) {
                        for (var o = this.pages, s = null, a = 0; a < o.length; a++)
                            if (o[a].baseTexture === r.baseTexture) {
                                s = o[a];
                                break
                            } if (null === s) {
                            (s = new i).name = "texturePage";
                            var h = r.baseTexture;
                            s.width = h.realWidth, s.height = h.realHeight, s.baseTexture = h, s.minFilter = s.magFilter = t.TextureFilter.Nearest, s.uWrap = t.TextureWrap.ClampToEdge, s.vWrap = t.TextureWrap.ClampToEdge, o.push(s)
                        }
                        var u = new n;
                        return u.name = e, u.page = s, u.texture = r, u.index = -1, this.regions.push(u), u
                    }, e.prototype.addTextureHash = function(t, e) {
                        for (var r in t) t.hasOwnProperty(r) && this.addTexture(e && -1 !== r.indexOf(".") ? r.substr(0, r.lastIndexOf(".")) : r, t[r])
                    }, e.prototype.addSpineAtlas = function(t, e, r) {
                        return this.load(t, e, r)
                    }, e.prototype.load = function(e, o, s) {
                        var a = this;
                        if (null == o) throw new Error("textureLoader cannot be null.");
                        var h = new r(e),
                            u = new Array(4),
                            l = null,
                            c = function() {
                                for (;;) {
                                    var e = h.readLine();
                                    if (null == e) return s && s(a);
                                    if (0 == (e = e.trim()).length) l = null;
                                    else {
                                        if (!l) {
                                            (l = new i).name = e, 2 == h.readTuple(u) && (l.width = parseInt(u[0]), l.height = parseInt(u[1]), h.readTuple(u)), h.readTuple(u), l.minFilter = t.Texture.filterFromString(u[0]), l.magFilter = t.Texture.filterFromString(u[1]);
                                            var r = h.readValue();
                                            l.uWrap = t.TextureWrap.ClampToEdge, l.vWrap = t.TextureWrap.ClampToEdge, "x" == r ? l.uWrap = t.TextureWrap.Repeat : "y" == r ? l.vWrap = t.TextureWrap.Repeat : "xy" == r && (l.uWrap = l.vWrap = t.TextureWrap.Repeat), o(e, (function(t) {
                                                if (null === t) return a.pages.splice(a.pages.indexOf(l), 1), s && s(null);
                                                l.baseTexture = t, t.valid || t.setSize(l.width, l.height), a.pages.push(l), l.setFilters(), l.width && l.height || (l.width = t.realWidth, l.height = t.realHeight, l.width && l.height || console.log("ERROR spine atlas page " + l.name + ": meshes wont work if you dont specify size in atlas (http://www.html5gamedevs.com/topic/18888-pixi-spines-and-meshes/?p=107121)")), c()
                                            })), a.pages.push(l);
                                            break
                                        }
                                        var d = new n;
                                        d.name = e, d.page = l;
                                        var p = h.readValue(),
                                            f = 0;
                                        f = "true" == p.toLocaleLowerCase() ? 6 : "false" == p.toLocaleLowerCase() ? 0 : (720 - parseFloat(p)) % 360 / 45, h.readTuple(u);
                                        var m = parseInt(u[0]),
                                            g = parseInt(u[1]);
                                        h.readTuple(u);
                                        var v = parseInt(u[0]),
                                            y = parseInt(u[1]),
                                            x = l.baseTexture.resolution;
                                        m /= x, g /= x, v /= x, y /= x;
                                        var _ = new PIXI.Rectangle(m, g, f ? y : v, f ? v : y);
                                        4 == h.readTuple(u) && 4 == h.readTuple(u) && h.readTuple(u);
                                        var b = parseInt(u[0]) / x,
                                            T = parseInt(u[1]) / x;
                                        h.readTuple(u);
                                        var w = parseInt(u[0]) / x,
                                            E = parseInt(u[1]) / x,
                                            I = new PIXI.Rectangle(0, 0, b, T),
                                            S = new PIXI.Rectangle(w, T - y - E, v, y);
                                        if ("3" != PIXI.VERSION[0]) d.texture = new PIXI.Texture(d.page.baseTexture, _, I, S, f);
                                        else {
                                            var P = new PIXI.Rectangle(m, g, v, y),
                                                A = P.clone();
                                            S.width = b, S.height = T, d.texture = new PIXI.Texture(d.page.baseTexture, P, A, S, f)
                                        }
                                        d.index = parseInt(h.readValue()), d.texture.updateUvs(), a.regions.push(d)
                                    }
                                }
                            };
                        c()
                    }, e.prototype.findRegion = function(t) {
                        for (var e = 0; e < this.regions.length; e++)
                            if (this.regions[e].name == t) return this.regions[e];
                        return null
                    }, e.prototype.dispose = function() {
                        for (var t = 0; t < this.pages.length; t++) this.pages[t].baseTexture.dispose()
                    }, e
                }();
                t.TextureAtlas = e;
                var r = function() {
                        function t(t) {
                            this.index = 0, this.lines = t.split(/\r\n|\r|\n/)
                        }
                        return t.prototype.readLine = function() {
                            return this.index >= this.lines.length ? null : this.lines[this.index++]
                        }, t.prototype.readValue = function() {
                            var t = this.readLine(),
                                e = t.indexOf(":");
                            if (-1 == e) throw new Error("Invalid line: " + t);
                            return t.substring(e + 1).trim()
                        }, t.prototype.readTuple = function(t) {
                            var e = this.readLine(),
                                r = e.indexOf(":");
                            if (-1 == r) throw new Error("Invalid line: " + e);
                            for (var i = 0, n = r + 1; i < 3; i++) {
                                var o = e.indexOf(",", n);
                                if (-1 == o) break;
                                t[i] = e.substr(n, o - n).trim(), n = o + 1
                            }
                            return t[i] = e.substring(n).trim(), i + 1
                        }, t
                    }(),
                    i = function() {
                        function e() {}
                        return e.prototype.setFilters = function() {
                            var e = this.baseTexture,
                                r = this.minFilter;
                            r == t.TextureFilter.Linear ? e.scaleMode = PIXI.SCALE_MODES.LINEAR : this.minFilter == t.TextureFilter.Nearest ? e.scaleMode = PIXI.SCALE_MODES.NEAREST : (e.mipmap = PIXI.MIPMAP_MODES.POW2, r == t.TextureFilter.MipMapNearestNearest ? e.scaleMode = PIXI.SCALE_MODES.NEAREST : e.scaleMode = PIXI.SCALE_MODES.LINEAR)
                        }, e
                    }();
                t.TextureAtlasPage = i;
                var n = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e
                }(t.TextureRegion);
                t.TextureAtlasRegion = n
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function e(e, r) {
                        if (this.rotateMix = 0, this.translateMix = 0, this.scaleMix = 0, this.shearMix = 0, this.temp = new t.Vector2, this.active = !1, null == e) throw new Error("data cannot be null.");
                        if (null == r) throw new Error("skeleton cannot be null.");
                        this.data = e, this.rotateMix = e.rotateMix, this.translateMix = e.translateMix, this.scaleMix = e.scaleMix, this.shearMix = e.shearMix, this.bones = new Array;
                        for (var i = 0; i < e.bones.length; i++) this.bones.push(r.findBone(e.bones[i].name));
                        this.target = r.findBone(e.target.name)
                    }
                    return e.prototype.isActive = function() {
                        return this.active
                    }, e.prototype.apply = function() {
                        this.update()
                    }, e.prototype.update = function() {
                        this.data.local ? this.data.relative ? this.applyRelativeLocal() : this.applyAbsoluteLocal() : this.data.relative ? this.applyRelativeWorld() : this.applyAbsoluteWorld()
                    }, e.prototype.applyAbsoluteWorld = function() {
                        for (var e = this.rotateMix, r = this.translateMix, i = this.scaleMix, n = this.shearMix, o = this.target, s = o.matrix, a = s.a, h = s.c, u = s.b, l = s.d, c = a * l - h * u > 0 ? t.MathUtils.degRad : -t.MathUtils.degRad, d = this.data.offsetRotation * c, p = this.data.offsetShearY * c, f = this.bones, m = 0, g = f.length; m < g; m++) {
                            var v = f[m],
                                y = !1,
                                x = v.matrix;
                            if (0 != e) {
                                var _ = x.a,
                                    b = x.c,
                                    T = x.b,
                                    w = x.d;
                                (M = Math.atan2(u, a) - Math.atan2(T, _) + d) > t.MathUtils.PI ? M -= t.MathUtils.PI2 : M < -t.MathUtils.PI && (M += t.MathUtils.PI2), M *= e;
                                var E = Math.cos(M),
                                    I = Math.sin(M);
                                x.a = E * _ - I * T, x.c = E * b - I * w, x.b = I * _ + E * T, x.d = I * b + E * w, y = !0
                            }
                            if (0 != r) {
                                var S = this.temp;
                                o.localToWorld(S.set(this.data.offsetX, this.data.offsetY)), x.tx += (S.x - x.tx) * r, x.ty += (S.y - x.ty) * r, y = !0
                            }
                            if (i > 0) {
                                var P = Math.sqrt(x.a * x.a + x.b * x.b),
                                    A = Math.sqrt(a * a + u * u);
                                P > 1e-5 && (P = (P + (A - P + this.data.offsetScaleX) * i) / P), x.a *= P, x.b *= P, P = Math.sqrt(x.c * x.c + x.d * x.d), A = Math.sqrt(h * h + l * l), P > 1e-5 && (P = (P + (A - P + this.data.offsetScaleY) * i) / P), x.c *= P, x.d *= P, y = !0
                            }
                            if (n > 0) {
                                b = x.c, w = x.d;
                                var M, C = Math.atan2(w, b);
                                (M = Math.atan2(l, h) - Math.atan2(u, a) - (C - Math.atan2(x.b, x.a))) > t.MathUtils.PI ? M -= t.MathUtils.PI2 : M < -t.MathUtils.PI && (M += t.MathUtils.PI2), M = C + (M + p) * n;
                                P = Math.sqrt(b * b + w * w);
                                x.c = Math.cos(M) * P, x.d = Math.sin(M) * P, y = !0
                            }
                            y && (v.appliedValid = !1)
                        }
                    }, e.prototype.applyRelativeWorld = function() {
                        for (var e = this.rotateMix, r = this.translateMix, i = this.scaleMix, n = this.shearMix, o = this.target, s = o.matrix, a = s.a, h = s.c, u = s.b, l = s.d, c = a * l - h * u > 0 ? t.MathUtils.degRad : -t.MathUtils.degRad, d = this.data.offsetRotation * c, p = this.data.offsetShearY * c, f = this.bones, m = 0, g = f.length; m < g; m++) {
                            var v = f[m],
                                y = !1,
                                x = v.matrix;
                            if (0 != e) {
                                var _ = x.a,
                                    b = x.c,
                                    T = x.b,
                                    w = x.d;
                                (A = Math.atan2(u, a) + d) > t.MathUtils.PI ? A -= t.MathUtils.PI2 : A < -t.MathUtils.PI && (A += t.MathUtils.PI2), A *= e;
                                var E = Math.cos(A),
                                    I = Math.sin(A);
                                x.a = E * _ - I * T, x.c = E * b - I * w, x.b = I * _ + E * T, x.d = I * b + E * w, y = !0
                            }
                            if (0 != r) {
                                var S = this.temp;
                                o.localToWorld(S.set(this.data.offsetX, this.data.offsetY)), x.tx += S.x * r, x.ty += S.y * r, y = !0
                            }
                            if (i > 0) {
                                var P = (Math.sqrt(a * a + u * u) - 1 + this.data.offsetScaleX) * i + 1;
                                x.a *= P, x.b *= P, P = (Math.sqrt(h * h + l * l) - 1 + this.data.offsetScaleY) * i + 1, x.c *= P, x.d *= P, y = !0
                            }
                            if (n > 0) {
                                var A;
                                (A = Math.atan2(l, h) - Math.atan2(u, a)) > t.MathUtils.PI ? A -= t.MathUtils.PI2 : A < -t.MathUtils.PI && (A += t.MathUtils.PI2);
                                b = x.c, w = x.d;
                                A = Math.atan2(w, b) + (A - t.MathUtils.PI / 2 + p) * n;
                                P = Math.sqrt(b * b + w * w);
                                x.c = Math.cos(A) * P, x.d = Math.sin(A) * P, y = !0
                            }
                            y && (v.appliedValid = !1)
                        }
                    }, e.prototype.applyAbsoluteLocal = function() {
                        var t = this.rotateMix,
                            e = this.translateMix,
                            r = this.scaleMix,
                            i = this.shearMix,
                            n = this.target;
                        n.appliedValid || n.updateAppliedTransform();
                        for (var o = this.bones, s = 0, a = o.length; s < a; s++) {
                            var h = o[s];
                            h.appliedValid || h.updateAppliedTransform();
                            var u = h.arotation;
                            if (0 != t) {
                                var l = n.arotation - u + this.data.offsetRotation;
                                u += (l -= 360 * (16384 - (16384.499999999996 - l / 360 | 0))) * t
                            }
                            var c = h.ax,
                                d = h.ay;
                            0 != e && (c += (n.ax - c + this.data.offsetX) * e, d += (n.ay - d + this.data.offsetY) * e);
                            var p = h.ascaleX,
                                f = h.ascaleY;
                            r > 0 && (p > 1e-5 && (p = (p + (n.ascaleX - p + this.data.offsetScaleX) * r) / p), f > 1e-5 && (f = (f + (n.ascaleY - f + this.data.offsetScaleY) * r) / f));
                            var m = h.ashearY;
                            if (i > 0) {
                                l = n.ashearY - m + this.data.offsetShearY;
                                l -= 360 * (16384 - (16384.499999999996 - l / 360 | 0)), h.shearY += l * i
                            }
                            h.updateWorldTransformWith(c, d, u, p, f, h.ashearX, m)
                        }
                    }, e.prototype.applyRelativeLocal = function() {
                        var t = this.rotateMix,
                            e = this.translateMix,
                            r = this.scaleMix,
                            i = this.shearMix,
                            n = this.target;
                        n.appliedValid || n.updateAppliedTransform();
                        for (var o = this.bones, s = 0, a = o.length; s < a; s++) {
                            var h = o[s];
                            h.appliedValid || h.updateAppliedTransform();
                            var u = h.arotation;
                            0 != t && (u += (n.arotation + this.data.offsetRotation) * t);
                            var l = h.ax,
                                c = h.ay;
                            0 != e && (l += (n.ax + this.data.offsetX) * e, c += (n.ay + this.data.offsetY) * e);
                            var d = h.ascaleX,
                                p = h.ascaleY;
                            r > 0 && (d > 1e-5 && (d *= (n.ascaleX - 1 + this.data.offsetScaleX) * r + 1), p > 1e-5 && (p *= (n.ascaleY - 1 + this.data.offsetScaleY) * r + 1));
                            var f = h.ashearY;
                            i > 0 && (f += (n.ashearY + this.data.offsetShearY) * i), h.updateWorldTransformWith(l, c, u, d, p, h.ashearX, f)
                        }
                    }, e
                }();
                t.TransformConstraint = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function(t) {
                    function e(e) {
                        var r = t.call(this, e, 0, !1) || this;
                        return r.bones = new Array, r.rotateMix = 0, r.translateMix = 0, r.scaleMix = 0, r.shearMix = 0, r.offsetRotation = 0, r.offsetX = 0, r.offsetY = 0, r.offsetScaleX = 0, r.offsetScaleY = 0, r.offsetShearY = 0, r.relative = !1, r.local = !1, r
                    }
                    return o(e, t), e
                }(t.ConstraintData);
                t.TransformConstraintData = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function e() {
                        this.convexPolygons = new Array, this.convexPolygonsIndices = new Array, this.indicesArray = new Array, this.isConcaveArray = new Array, this.triangles = new Array, this.polygonPool = new t.Pool((function() {
                            return new Array
                        })), this.polygonIndicesPool = new t.Pool((function() {
                            return new Array
                        }))
                    }
                    return e.prototype.triangulate = function(t) {
                        var r = t,
                            i = t.length >> 1,
                            n = this.indicesArray;
                        n.length = 0;
                        for (var o = 0; o < i; o++) n[o] = o;
                        var s = this.isConcaveArray;
                        s.length = 0;
                        o = 0;
                        for (var a = i; o < a; ++o) s[o] = e.isConcave(o, i, r, n);
                        var h = this.triangles;
                        for (h.length = 0; i > 3;) {
                            for (var u = i - 1, l = (o = 0, 1);;) {
                                t: if (!s[o]) {
                                    for (var c = n[u] << 1, d = n[o] << 1, p = n[l] << 1, f = r[c], m = r[c + 1], g = r[d], v = r[d + 1], y = r[p], x = r[p + 1], _ = (l + 1) % i; _ != u; _ = (_ + 1) % i)
                                        if (s[_]) {
                                            var b = n[_] << 1,
                                                T = r[b],
                                                w = r[b + 1];
                                            if (e.positiveArea(y, x, f, m, T, w) && e.positiveArea(f, m, g, v, T, w) && e.positiveArea(g, v, y, x, T, w)) break t
                                        } break
                                }if (0 == l) {
                                    do {
                                        if (!s[o]) break;
                                        o--
                                    } while (o > 0);
                                    break
                                }
                                u = o,
                                o = l,
                                l = (l + 1) % i
                            }
                            h.push(n[(i + o - 1) % i]), h.push(n[o]), h.push(n[(o + 1) % i]), n.splice(o, 1), s.splice(o, 1);
                            var E = (--i + o - 1) % i,
                                I = o == i ? 0 : o;
                            s[E] = e.isConcave(E, i, r, n), s[I] = e.isConcave(I, i, r, n)
                        }
                        return 3 == i && (h.push(n[2]), h.push(n[0]), h.push(n[1])), h
                    }, e.prototype.decompose = function(t, r) {
                        var i = t,
                            n = this.convexPolygons;
                        this.polygonPool.freeAll(n), n.length = 0;
                        var o = this.convexPolygonsIndices;
                        this.polygonIndicesPool.freeAll(o), o.length = 0;
                        var s = this.polygonIndicesPool.obtain();
                        s.length = 0;
                        var a = this.polygonPool.obtain();
                        a.length = 0;
                        for (var h = -1, u = 0, l = 0, c = r.length; l < c; l += 3) {
                            var d = r[l] << 1,
                                p = r[l + 1] << 1,
                                f = r[l + 2] << 1,
                                m = i[d],
                                g = i[d + 1],
                                v = i[p],
                                y = i[p + 1],
                                x = i[f],
                                _ = i[f + 1],
                                b = !1;
                            if (h == d) {
                                var T = a.length - 4,
                                    w = e.winding(a[T], a[T + 1], a[T + 2], a[T + 3], x, _),
                                    E = e.winding(x, _, a[0], a[1], a[2], a[3]);
                                w == u && E == u && (a.push(x), a.push(_), s.push(f), b = !0)
                            }
                            b || (a.length > 0 ? (n.push(a), o.push(s)) : (this.polygonPool.free(a), this.polygonIndicesPool.free(s)), (a = this.polygonPool.obtain()).length = 0, a.push(m), a.push(g), a.push(v), a.push(y), a.push(x), a.push(_), (s = this.polygonIndicesPool.obtain()).length = 0, s.push(d), s.push(p), s.push(f), u = e.winding(m, g, v, y, x, _), h = d)
                        }
                        a.length > 0 && (n.push(a), o.push(s));
                        for (l = 0, c = n.length; l < c; l++)
                            if (0 != (s = o[l]).length)
                                for (var I = s[0], S = s[s.length - 1], P = (a = n[l])[T = a.length - 4], A = a[T + 1], M = a[T + 2], C = a[T + 3], O = a[0], R = a[1], D = a[2], F = a[3], L = e.winding(P, A, M, C, O, R), N = 0; N < c; N++)
                                    if (N != l) {
                                        var k = o[N];
                                        if (3 == k.length) {
                                            var B = k[0],
                                                U = k[1],
                                                X = k[2],
                                                V = n[N];
                                            x = V[V.length - 2], _ = V[V.length - 1];
                                            if (B == I && U == S) {
                                                w = e.winding(P, A, M, C, x, _), E = e.winding(x, _, O, R, D, F);
                                                w == L && E == L && (V.length = 0, k.length = 0, a.push(x), a.push(_), s.push(X), P = M, A = C, M = x, C = _, N = 0)
                                            }
                                        }
                                    } for (l = n.length - 1; l >= 0; l--) 0 == (a = n[l]).length && (n.splice(l, 1), this.polygonPool.free(a), s = o[l], o.splice(l, 1), this.polygonIndicesPool.free(s));
                        return n
                    }, e.isConcave = function(t, e, r, i) {
                        var n = i[(e + t - 1) % e] << 1,
                            o = i[t] << 1,
                            s = i[(t + 1) % e] << 1;
                        return !this.positiveArea(r[n], r[n + 1], r[o], r[o + 1], r[s], r[s + 1])
                    }, e.positiveArea = function(t, e, r, i, n, o) {
                        return t * (o - i) + r * (e - o) + n * (i - e) >= 0
                    }, e.winding = function(t, e, r, i, n, o) {
                        var s = r - t,
                            a = i - e;
                        return n * a - o * s + s * e - t * a >= 0 ? 1 : -1
                    }, e
                }();
                t.Triangulator = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function t() {
                        this.array = new Array
                    }
                    return t.prototype.add = function(t) {
                        var e = this.contains(t);
                        return this.array[0 | t] = 0 | t, !e
                    }, t.prototype.contains = function(t) {
                        return null != this.array[0 | t]
                    }, t.prototype.remove = function(t) {
                        this.array[0 | t] = void 0
                    }, t.prototype.clear = function() {
                        this.array.length = 0
                    }, t
                }();
                t.IntSet = e;
                var r = function() {
                    function t(t, e, r, i) {
                        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 0), this.r = t, this.g = e, this.b = r, this.a = i
                    }
                    return t.prototype.set = function(t, e, r, i) {
                        return this.r = t, this.g = e, this.b = r, this.a = i, this.clamp(), this
                    }, t.prototype.setFromColor = function(t) {
                        return this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this
                    }, t.prototype.setFromString = function(t) {
                        return t = "#" == t.charAt(0) ? t.substr(1) : t, this.r = parseInt(t.substr(0, 2), 16) / 255, this.g = parseInt(t.substr(2, 2), 16) / 255, this.b = parseInt(t.substr(4, 2), 16) / 255, this.a = (8 != t.length ? 255 : parseInt(t.substr(6, 2), 16)) / 255, this
                    }, t.prototype.add = function(t, e, r, i) {
                        return this.r += t, this.g += e, this.b += r, this.a += i, this.clamp(), this
                    }, t.prototype.clamp = function() {
                        return this.r < 0 ? this.r = 0 : this.r > 1 && (this.r = 1), this.g < 0 ? this.g = 0 : this.g > 1 && (this.g = 1), this.b < 0 ? this.b = 0 : this.b > 1 && (this.b = 1), this.a < 0 ? this.a = 0 : this.a > 1 && (this.a = 1), this
                    }, t.rgba8888ToColor = function(t, e) {
                        t.r = ((4278190080 & e) >>> 24) / 255, t.g = ((16711680 & e) >>> 16) / 255, t.b = ((65280 & e) >>> 8) / 255, t.a = (255 & e) / 255
                    }, t.rgb888ToColor = function(t, e) {
                        t.r = ((16711680 & e) >>> 16) / 255, t.g = ((65280 & e) >>> 8) / 255, t.b = (255 & e) / 255
                    }, t.WHITE = new t(1, 1, 1, 1), t.RED = new t(1, 0, 0, 1), t.GREEN = new t(0, 1, 0, 1), t.BLUE = new t(0, 0, 1, 1), t.MAGENTA = new t(1, 0, 1, 1), t
                }();
                t.Color = r;
                var i = function() {
                    function t() {}
                    return t.clamp = function(t, e, r) {
                        return t < e ? e : t > r ? r : t
                    }, t.cosDeg = function(e) {
                        return Math.cos(e * t.degRad)
                    }, t.sinDeg = function(e) {
                        return Math.sin(e * t.degRad)
                    }, t.signum = function(t) {
                        return t > 0 ? 1 : t < 0 ? -1 : 0
                    }, t.toInt = function(t) {
                        return t > 0 ? Math.floor(t) : Math.ceil(t)
                    }, t.cbrt = function(t) {
                        var e = Math.pow(Math.abs(t), 1 / 3);
                        return t < 0 ? -e : e
                    }, t.randomTriangular = function(e, r) {
                        return t.randomTriangularWith(e, r, .5 * (e + r))
                    }, t.randomTriangularWith = function(t, e, r) {
                        var i = Math.random(),
                            n = e - t;
                        return i <= (r - t) / n ? t + Math.sqrt(i * n * (r - t)) : e - Math.sqrt((1 - i) * n * (e - r))
                    }, t.PI = 3.1415927, t.PI2 = 2 * t.PI, t.radiansToDegrees = 180 / t.PI, t.radDeg = t.radiansToDegrees, t.degreesToRadians = t.PI / 180, t.degRad = t.degreesToRadians, t
                }();
                t.MathUtils = i;
                var n = function() {
                    function t() {}
                    return t.prototype.apply = function(t, e, r) {
                        return t + (e - t) * this.applyInternal(r)
                    }, t
                }();
                t.Interpolation = n;
                var s = function(t) {
                    function e(e) {
                        var r = t.call(this) || this;
                        return r.power = 2, r.power = e, r
                    }
                    return o(e, t), e.prototype.applyInternal = function(t) {
                        return t <= .5 ? Math.pow(2 * t, this.power) / 2 : Math.pow(2 * (t - 1), this.power) / (this.power % 2 == 0 ? -2 : 2) + 1
                    }, e
                }(n);
                t.Pow = s;
                var a = function(t) {
                    function e(e) {
                        return t.call(this, e) || this
                    }
                    return o(e, t), e.prototype.applyInternal = function(t) {
                        return Math.pow(t - 1, this.power) * (this.power % 2 == 0 ? -1 : 1) + 1
                    }, e
                }(s);
                t.PowOut = a;
                var h = function() {
                    function t() {}
                    return t.arrayCopy = function(t, e, r, i, n) {
                        for (var o = e, s = i; o < e + n; o++, s++) r[s] = t[o]
                    }, t.setArraySize = function(t, e, r) {
                        void 0 === r && (r = 0);
                        var i = t.length;
                        if (i == e) return t;
                        if (t.length = e, i < e)
                            for (var n = i; n < e; n++) t[n] = r;
                        return t
                    }, t.ensureArrayCapacity = function(e, r, i) {
                        return void 0 === i && (i = 0), e.length >= r ? e : t.setArraySize(e, r, i)
                    }, t.newArray = function(t, e) {
                        for (var r = new Array(t), i = 0; i < t; i++) r[i] = e;
                        return r
                    }, t.newFloatArray = function(e) {
                        if (t.SUPPORTS_TYPED_ARRAYS) return new Float32Array(e);
                        for (var r = new Array(e), i = 0; i < r.length; i++) r[i] = 0;
                        return r
                    }, t.newShortArray = function(e) {
                        if (t.SUPPORTS_TYPED_ARRAYS) return new Int16Array(e);
                        for (var r = new Array(e), i = 0; i < r.length; i++) r[i] = 0;
                        return r
                    }, t.toFloatArray = function(e) {
                        return t.SUPPORTS_TYPED_ARRAYS ? new Float32Array(e) : e
                    }, t.toSinglePrecision = function(e) {
                        return t.SUPPORTS_TYPED_ARRAYS ? Math.fround(e) : e
                    }, t.webkit602BugfixHelper = function(t, e) {}, t.contains = function(t, e, r) {
                        void 0 === r && (r = !0);
                        for (var i = 0; i < t.length; i++)
                            if (t[i] == e) return !0;
                        return !1
                    }, t.SUPPORTS_TYPED_ARRAYS = "undefined" != typeof Float32Array, t
                }();
                t.Utils = h;
                var u = function() {
                    function t() {}
                    return t.logBones = function(t) {
                        for (var e = 0; e < t.bones.length; e++) {
                            var r = t.bones[e],
                                i = r.matrix;
                            console.log(r.data.name + ", " + i.a + ", " + i.b + ", " + i.c + ", " + i.d + ", " + i.tx + ", " + i.ty)
                        }
                    }, t
                }();
                t.DebugUtils = u;
                var l = function() {
                    function t(t) {
                        this.items = new Array, this.instantiator = t
                    }
                    return t.prototype.obtain = function() {
                        return this.items.length > 0 ? this.items.pop() : this.instantiator()
                    }, t.prototype.free = function(t) {
                        t.reset && t.reset(), this.items.push(t)
                    }, t.prototype.freeAll = function(t) {
                        for (var e = 0; e < t.length; e++) t[e].reset && t[e].reset(), this.items[e] = t[e]
                    }, t.prototype.clear = function() {
                        this.items.length = 0
                    }, t
                }();
                t.Pool = l;
                var c = function() {
                    function t(t, e) {
                        void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
                    }
                    return t.prototype.set = function(t, e) {
                        return this.x = t, this.y = e, this
                    }, t.prototype.length = function() {
                        var t = this.x,
                            e = this.y;
                        return Math.sqrt(t * t + e * e)
                    }, t.prototype.normalize = function() {
                        var t = this.length();
                        return 0 != t && (this.x /= t, this.y /= t), this
                    }, t
                }();
                t.Vector2 = c;
                var d = function() {
                    function t() {
                        this.maxDelta = .064, this.framesPerSecond = 0, this.delta = 0, this.totalTime = 0, this.lastTime = Date.now() / 1e3, this.frameCount = 0, this.frameTime = 0
                    }
                    return t.prototype.update = function() {
                        var t = Date.now() / 1e3;
                        this.delta = t - this.lastTime, this.frameTime += this.delta, this.totalTime += this.delta, this.delta > this.maxDelta && (this.delta = this.maxDelta), this.lastTime = t, this.frameCount++, this.frameTime > 1 && (this.framesPerSecond = this.frameCount / this.frameTime, this.frameTime = 0, this.frameCount = 0)
                    }, t
                }();
                t.TimeKeeper = d;
                var p = function() {
                    function t(t) {
                        void 0 === t && (t = 32), this.addedValues = 0, this.lastValue = 0, this.mean = 0, this.dirty = !0, this.values = new Array(t)
                    }
                    return t.prototype.hasEnoughData = function() {
                        return this.addedValues >= this.values.length
                    }, t.prototype.addValue = function(t) {
                        this.addedValues < this.values.length && this.addedValues++, this.values[this.lastValue++] = t, this.lastValue > this.values.length - 1 && (this.lastValue = 0), this.dirty = !0
                    }, t.prototype.getMean = function() {
                        if (this.hasEnoughData()) {
                            if (this.dirty) {
                                for (var t = 0, e = 0; e < this.values.length; e++) t += this.values[e];
                                this.mean = t / this.values.length, this.dirty = !1
                            }
                            return this.mean
                        }
                        return 0
                    }, t
                }();
                t.WindowedMean = p
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function(t) {
                    if (null == t) throw new Error("name cannot be null.");
                    this.name = t
                };
                t.Attachment = e;
                var r = function(e) {
                    function r(t) {
                        var i = e.call(this, t) || this;
                        return i.id = (65535 & r.nextID++) << 11, i.worldVerticesLength = 0, i.deformAttachment = i, i
                    }
                    return o(r, e), r.prototype.computeWorldVerticesOld = function(t, e) {
                        this.computeWorldVertices(t, 0, this.worldVerticesLength, e, 0, 2)
                    }, r.prototype.computeWorldVertices = function(t, e, r, i, n, o) {
                        r = n + (r >> 1) * o;
                        var s = t.bone.skeleton,
                            a = t.deform,
                            h = this.vertices,
                            u = this.bones;
                        if (null != u) {
                            for (var l = 0, c = 0, d = 0; d < e; d += 2) {
                                l += (g = u[l]) + 1, c += g
                            }
                            var p = s.bones;
                            if (0 == a.length)
                                for (A = n, E = 3 * c; A < r; A += o) {
                                    var f = 0,
                                        m = 0,
                                        g = u[l++];
                                    for (g += l; l < g; l++, E += 3) {
                                        _ = p[u[l]].matrix, M = h[E], C = h[E + 1];
                                        var v = h[E + 2];
                                        f += (M * _.a + C * _.c + _.tx) * v, m += (M * _.b + C * _.d + _.ty) * v
                                    }
                                    i[A] = f, i[A + 1] = m
                                } else
                                    for (var y = a, x = (A = n, E = 3 * c, c << 1); A < r; A += o) {
                                        f = 0, m = 0, g = u[l++];
                                        for (g += l; l < g; l++, E += 3, x += 2) {
                                            _ = p[u[l]].matrix, M = h[E] + y[x], C = h[E + 1] + y[x + 1], v = h[E + 2];
                                            f += (M * _.a + C * _.c + _.tx) * v, m += (M * _.b + C * _.d + _.ty) * v
                                        }
                                        i[A] = f, i[A + 1] = m
                                    }
                        } else {
                            a.length > 0 && (h = a);
                            for (var _, b = (_ = t.bone.matrix).tx, T = _.ty, w = _.a, E = _.c, I = _.b, S = _.d, P = e, A = n; A < r; P += 2, A += o) {
                                var M = h[P],
                                    C = h[P + 1];
                                i[A] = M * w + C * E + b, i[A + 1] = M * I + C * S + T
                            }
                        }
                    }, r.prototype.copyTo = function(e) {
                        null != this.bones ? (e.bones = new Array(this.bones.length), t.Utils.arrayCopy(this.bones, 0, e.bones, 0, this.bones.length)) : e.bones = null, null != this.vertices ? (e.vertices = t.Utils.newFloatArray(this.vertices.length), t.Utils.arrayCopy(this.vertices, 0, e.vertices, 0, this.vertices.length)) : e.vertices = null, e.worldVerticesLength = this.worldVerticesLength, e.deformAttachment = this.deformAttachment
                    }, r.nextID = 0, r
                }(e);
                t.VertexAttachment = r
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                ! function(t) {
                    t[t.Region = 0] = "Region", t[t.BoundingBox = 1] = "BoundingBox", t[t.Mesh = 2] = "Mesh", t[t.LinkedMesh = 3] = "LinkedMesh", t[t.Path = 4] = "Path", t[t.Point = 5] = "Point", t[t.Clipping = 6] = "Clipping"
                }(t.AttachmentType || (t.AttachmentType = {}))
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function(e) {
                    function r(r) {
                        var i = e.call(this, r) || this;
                        return i.color = new t.Color(1, 1, 1, 1), i
                    }
                    return o(r, e), r.prototype.copy = function() {
                        var t = new r(name);
                        return this.copyTo(t), t.color.setFromColor(this.color), t
                    }, r
                }(t.VertexAttachment);
                t.BoundingBoxAttachment = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function(e) {
                    function r(r) {
                        var i = e.call(this, r) || this;
                        return i.color = new t.Color(.2275, .2275, .8078, 1), i
                    }
                    return o(r, e), r.prototype.copy = function() {
                        var t = new r(name);
                        return this.copyTo(t), t.endSlot = this.endSlot, t.color.setFromColor(this.color), t
                    }, r
                }(t.VertexAttachment);
                t.ClippingAttachment = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function(e) {
                    function r(r) {
                        var i = e.call(this, r) || this;
                        return i.color = new t.Color(1, 1, 1, 1), i.tempColor = new t.Color(0, 0, 0, 0), i
                    }
                    return o(r, e), r.prototype.getParentMesh = function() {
                        return this.parentMesh
                    }, r.prototype.setParentMesh = function(t) {
                        this.parentMesh = t, null != t && (this.bones = t.bones, this.vertices = t.vertices, this.worldVerticesLength = t.worldVerticesLength, this.regionUVs = t.regionUVs, this.triangles = t.triangles, this.hullLength = t.hullLength, this.worldVerticesLength = t.worldVerticesLength)
                    }, r.prototype.copy = function() {
                        if (null != this.parentMesh) return this.newLinkedMesh();
                        var e = new r(this.name);
                        return e.region = this.region, e.path = this.path, e.color.setFromColor(this.color), this.copyTo(e), e.regionUVs = new Float32Array(this.regionUVs.length), t.Utils.arrayCopy(this.regionUVs, 0, e.regionUVs, 0, this.regionUVs.length), e.uvs = new Array(this.uvs.length), t.Utils.arrayCopy(this.uvs, 0, e.uvs, 0, this.uvs.length), e.triangles = new Array(this.triangles.length), t.Utils.arrayCopy(this.triangles, 0, e.triangles, 0, this.triangles.length), e.hullLength = this.hullLength, null != this.edges && (e.edges = new Array(this.edges.length), t.Utils.arrayCopy(this.edges, 0, e.edges, 0, this.edges.length)), e.width = this.width, e.height = this.height, e
                    }, r.prototype.newLinkedMesh = function() {
                        var t = new r(this.name);
                        return t.region = this.region, t.path = this.path, t.color.setFromColor(this.color), t.deformAttachment = this.deformAttachment, t.setParentMesh(null != this.parentMesh ? this.parentMesh : this), t
                    }, r
                }(t.VertexAttachment);
                t.MeshAttachment = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function(e) {
                    function r(r) {
                        var i = e.call(this, r) || this;
                        return i.closed = !1, i.constantSpeed = !1, i.color = new t.Color(1, 1, 1, 1), i
                    }
                    return o(r, e), r.prototype.copy = function() {
                        var e = new r(name);
                        return this.copyTo(e), e.lengths = new Array(this.lengths.length), t.Utils.arrayCopy(this.lengths, 0, e.lengths, 0, this.lengths.length), e.closed = closed, e.constantSpeed = this.constantSpeed, e.color.setFromColor(this.color), e
                    }, r
                }(t.VertexAttachment);
                t.PathAttachment = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function(e) {
                    function r(r) {
                        var i = e.call(this, r) || this;
                        return i.color = new t.Color(.38, .94, 0, 1), i
                    }
                    return o(r, e), r.prototype.computeWorldPosition = function(t, e) {
                        var r = t.matrix;
                        return e.x = this.x * r.a + this.y * r.c + t.worldX, e.y = this.x * r.b + this.y * r.d + t.worldY, e
                    }, r.prototype.computeWorldRotation = function(e) {
                        var r = e.matrix,
                            i = t.MathUtils.cosDeg(this.rotation),
                            n = t.MathUtils.sinDeg(this.rotation),
                            o = i * r.a + n * r.c,
                            s = i * r.b + n * r.d;
                        return Math.atan2(s, o) * t.MathUtils.radDeg
                    }, r.prototype.copy = function() {
                        var t = new r(name);
                        return t.x = this.x, t.y = this.y, t.rotation = this.rotation, t.color.setFromColor(this.color), t
                    }, r
                }(t.VertexAttachment);
                t.PointAttachment = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function(e) {
                    function r(r) {
                        var i = e.call(this, r) || this;
                        return i.x = 0, i.y = 0, i.scaleX = 1, i.scaleY = 1, i.rotation = 0, i.width = 0, i.height = 0, i.color = new t.Color(1, 1, 1, 1), i.offset = t.Utils.newFloatArray(8), i.uvs = t.Utils.newFloatArray(8), i.tempColor = new t.Color(1, 1, 1, 1), i
                    }
                    return o(r, e), r.prototype.updateOffset = function() {
                        var t = this.width / this.region.originalWidth * this.scaleX,
                            e = this.height / this.region.originalHeight * this.scaleY,
                            i = -this.width / 2 * this.scaleX + this.region.offsetX * t,
                            n = -this.height / 2 * this.scaleY + this.region.offsetY * e,
                            o = i + this.region.width * t,
                            s = n + this.region.height * e,
                            a = this.rotation * Math.PI / 180,
                            h = Math.cos(a),
                            u = Math.sin(a),
                            l = i * h + this.x,
                            c = i * u,
                            d = n * h + this.y,
                            p = n * u,
                            f = o * h + this.x,
                            m = o * u,
                            g = s * h + this.y,
                            v = s * u,
                            y = this.offset;
                        y[r.OX1] = l - p, y[r.OY1] = d + c, y[r.OX2] = l - v, y[r.OY2] = g + c, y[r.OX3] = f - v, y[r.OY3] = g + m, y[r.OX4] = f - p, y[r.OY4] = d + m
                    }, r.prototype.setRegion = function(t) {
                        this.region = t;
                        var e = this.uvs;
                        t.rotate ? (e[2] = t.u, e[3] = t.v2, e[4] = t.u, e[5] = t.v, e[6] = t.u2, e[7] = t.v, e[0] = t.u2, e[1] = t.v2) : (e[0] = t.u, e[1] = t.v2, e[2] = t.u, e[3] = t.v, e[4] = t.u2, e[5] = t.v, e[6] = t.u2, e[7] = t.v2)
                    }, r.prototype.computeWorldVertices = function(t, e, i, n) {
                        var o = this.offset,
                            s = t.matrix,
                            a = s.tx,
                            h = s.ty,
                            u = s.a,
                            l = s.c,
                            c = s.b,
                            d = s.d,
                            p = 0,
                            f = 0;
                        p = o[r.OX1], f = o[r.OY1], e[i] = p * u + f * l + a, e[i + 1] = p * c + f * d + h, i += n, p = o[r.OX2], f = o[r.OY2], e[i] = p * u + f * l + a, e[i + 1] = p * c + f * d + h, i += n, p = o[r.OX3], f = o[r.OY3], e[i] = p * u + f * l + a, e[i + 1] = p * c + f * d + h, i += n, p = o[r.OX4], f = o[r.OY4], e[i] = p * u + f * l + a, e[i + 1] = p * c + f * d + h
                    }, r.prototype.copy = function() {
                        var e = new r(name);
                        return e.region = this.region, e.rendererObject = this.rendererObject, e.path = this.path, e.x = this.x, e.y = this.y, e.scaleX = this.scaleX, e.scaleY = this.scaleY, e.rotation = this.rotation, e.width = this.width, e.height = this.height, t.Utils.arrayCopy(this.uvs, 0, e.uvs, 0, 8), t.Utils.arrayCopy(this.offset, 0, e.offset, 0, 8), e.color.setFromColor(this.color), e
                    }, r.OX1 = 0, r.OY1 = 1, r.OX2 = 2, r.OY2 = 3, r.OX3 = 4, r.OY3 = 5, r.OX4 = 6, r.OY4 = 7, r.X1 = 0, r.Y1 = 1, r.C1R = 2, r.C1G = 3, r.C1B = 4, r.C1A = 5, r.U1 = 6, r.V1 = 7, r.X2 = 8, r.Y2 = 9, r.C2R = 10, r.C2G = 11, r.C2B = 12, r.C2A = 13, r.U2 = 14, r.V2 = 15, r.X3 = 16, r.Y3 = 17, r.C3R = 18, r.C3G = 19, r.C3B = 20, r.C3A = 21, r.U3 = 22, r.V3 = 23, r.X4 = 24, r.Y4 = 25, r.C4R = 26, r.C4G = 27, r.C4B = 28, r.C4A = 29, r.U4 = 30, r.V4 = 31, r
                }(t.Attachment);
                t.RegionAttachment = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function e(t, e) {
                        this.jitterX = 0, this.jitterY = 0, this.jitterX = t, this.jitterY = e
                    }
                    return e.prototype.begin = function(t) {}, e.prototype.transform = function(e, r, i, n) {
                        e.x += t.MathUtils.randomTriangular(-this.jitterX, this.jitterY), e.y += t.MathUtils.randomTriangular(-this.jitterX, this.jitterY)
                    }, e.prototype.end = function() {}, e
                }();
                t.JitterEffect = e
            }(t.core || (t.core = {}))
        }(n || (n = {})),
        function(t) {
            ! function(t) {
                var e = function() {
                    function e(t) {
                        this.centerX = 0, this.centerY = 0, this.radius = 0, this.angle = 0, this.worldX = 0, this.worldY = 0, this.radius = t
                    }
                    return e.prototype.begin = function(t) {
                        this.worldX = t.x + this.centerX, this.worldY = t.y + this.centerY
                    }, e.prototype.transform = function(r, i, n, o) {
                        var s = this.angle * t.MathUtils.degreesToRadians,
                            a = r.x - this.worldX,
                            h = r.y - this.worldY,
                            u = Math.sqrt(a * a + h * h);
                        if (u < this.radius) {
                            var l = e.interpolation.apply(0, s, (this.radius - u) / this.radius),
                                c = Math.cos(l),
                                d = Math.sin(l);
                            r.x = c * a - d * h + this.worldX, r.y = d * a + c * h + this.worldY
                        }
                    }, e.prototype.end = function() {}, e.interpolation = new t.PowOut(2), e
                }();
                t.SwirlEffect = e
            }(t.core || (t.core = {}))
        }(n || (n = {})), Math.fround || (Math.fround = Math.fround = (i = new Float32Array(1), function(t) {
                return i[0] = t, i[0]
            })),
            function(t) {
                t.core.Bone.yDown = !0;
                var e = [0, 0, 0],
                    r = function(t) {
                        function e() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.region = null, e.attachment = null, e
                        }
                        return o(e, t), e
                    }(PIXI.Sprite);
                t.SpineSprite = r;
                var i = PIXI.GraphicsGeometry.prototype;
                if (!i.invalidate) {
                    var n = [];
                    i.invalidate = function() {
                        var t = this.graphicsData;
                        n.push(0), this.graphicsData = n, this.clear(), this.graphicsData = t
                    }
                }
                var s = function(t) {
                    function e(e, r, i, n, o) {
                        var s = t.call(this, e, r, i, n, o) || this;
                        return s.region = null, s.attachment = null, s
                    }
                    return o(e, t), e
                }(PIXI.SimpleMesh);
                t.SpineMesh = s;
                var a = function(i) {
                    function n(e) {
                        var r = i.call(this) || this;
                        if (!e) throw new Error("The spineData param is required.");
                        if ("string" == typeof e) throw new Error('spineData param cant be string. Please use spine.Spine.fromAtlas("YOUR_RESOURCE_NAME") from now on.');
                        r.spineData = e, r.skeleton = new t.core.Skeleton(e), r.skeleton.updateWorldTransform(), r.stateData = new t.core.AnimationStateData(e), r.state = new t.core.AnimationState(r.stateData), r.slotContainers = [], r.tempClipContainers = [];
                        for (var n = 0, o = r.skeleton.slots.length; n < o; n++) {
                            var s = r.skeleton.slots[n],
                                a = s.getAttachment(),
                                h = r.newContainer();
                            if (r.slotContainers.push(h), r.addChild(h), r.tempClipContainers.push(null), a instanceof t.core.RegionAttachment) {
                                var u = a.region.name,
                                    l = r.createSprite(s, a, u);
                                s.currentSprite = l, s.currentSpriteName = u, h.addChild(l)
                            } else if (a instanceof t.core.MeshAttachment) {
                                var c = r.createMesh(s, a);
                                s.currentMesh = c, s.currentMeshName = a.name, h.addChild(c)
                            } else {
                                if (!(a instanceof t.core.ClippingAttachment)) continue;
                                r.createGraphics(s, a), h.addChild(s.clippingContainer), h.addChild(s.currentGraphics)
                            }
                        }
                        return r.autoUpdate = !0, r.tintRgb = new Float32Array([1, 1, 1]), r
                    }
                    return o(n, i), Object.defineProperty(n.prototype, "autoUpdate", {
                        get: function() {
                            return this.updateTransform === n.prototype.autoUpdateTransform
                        },
                        set: function(t) {
                            this.updateTransform = t ? n.prototype.autoUpdateTransform : PIXI.Container.prototype.updateTransform
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "tint", {
                        get: function() {
                            return PIXI.utils.rgb2hex(this.tintRgb)
                        },
                        set: function(t) {
                            this.tintRgb = PIXI.utils.hex2rgb(t, this.tintRgb)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "delayLimit", {
                        get: function() {
                            return (void 0 !== this.localDelayLimit ? this.localDelayLimit : n.globalDelayLimit) || Number.MAX_VALUE
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.update = function(r) {
                        var i = this.delayLimit;
                        if (r > i && (r = i), this.state.update(r), this.state.apply(this.skeleton), this.skeleton) {
                            this.skeleton.updateWorldTransform();
                            var n = this.skeleton.slots,
                                o = this.color,
                                s = null,
                                a = null;
                            o ? (s = o.light, a = o.dark) : s = this.tintRgb;
                            for (var h = 0, u = n.length; h < u; h++) {
                                var l = (P = n[h]).getAttachment(),
                                    c = this.slotContainers[h];
                                if (l) {
                                    var d = null,
                                        p = l.color;
                                    if (l instanceof t.core.RegionAttachment) {
                                        var f = l.region;
                                        if (f) {
                                            P.currentMesh && (P.currentMesh.visible = !1, P.currentMesh = null, P.currentMeshName = void 0);
                                            var m = f;
                                            if (P.currentSpriteName && P.currentSpriteName === m.name) P.currentSpriteName === m.name && this.setSpriteRegion(l, P.currentSprite, f);
                                            else {
                                                var g = m.name;
                                                if (P.currentSprite && (P.currentSprite.visible = !1), P.sprites = P.sprites || {}, void 0 !== P.sprites[g]) P.sprites[g].visible = !0;
                                                else {
                                                    var v = this.createSprite(P, l, g);
                                                    c.addChild(v)
                                                }
                                                P.currentSprite = P.sprites[g], P.currentSpriteName = g
                                            }
                                        }(y = c.transform).setFromMatrix(P.bone.matrix), P.currentSprite.color ? d = P.currentSprite.color : (e[0] = s[0] * P.color.r * p.r, e[1] = s[1] * P.color.g * p.g, e[2] = s[2] * P.color.b * p.b, P.currentSprite.tint = PIXI.utils.rgb2hex(e)), P.currentSprite.blendMode = P.blendMode
                                    } else if (l instanceof t.core.MeshAttachment) {
                                        var y;
                                        if (P.currentSprite) P.currentSprite.visible = !1, P.currentSprite = null, P.currentSpriteName = void 0, (y = new PIXI.Transform)._parentID = -1, y._worldID = c.transform._worldID, c.transform = y;
                                        if (!P.currentMeshName || P.currentMeshName !== l.name) {
                                            var x = l.name;
                                            if (P.currentMesh && (P.currentMesh.visible = !1), P.meshes = P.meshes || {}, void 0 !== P.meshes[x]) P.meshes[x].visible = !0;
                                            else {
                                                var _ = this.createMesh(P, l);
                                                c.addChild(_)
                                            }
                                            P.currentMesh = P.meshes[x], P.currentMeshName = x
                                        }
                                        l.computeWorldVerticesOld(P, P.currentMesh.vertices), P.currentMesh.color ? d = P.currentMesh.color : (e[0] = s[0] * P.color.r * p.r, e[1] = s[1] * P.color.g * p.g, e[2] = s[2] * P.color.b * p.b, P.currentMesh.tint = PIXI.utils.rgb2hex(e)), P.currentMesh.blendMode = P.blendMode
                                    } else {
                                        if (!(l instanceof t.core.ClippingAttachment)) {
                                            c.visible = !1;
                                            continue
                                        }
                                        P.currentGraphics || (this.createGraphics(P, l), c.addChild(P.clippingContainer), c.addChild(P.currentGraphics)), this.updateGraphics(P, l)
                                    }
                                    if (c.visible = !0, d) {
                                        var b = P.color.r * p.r,
                                            T = P.color.g * p.g,
                                            w = P.color.b * p.b;
                                        d.setLight(s[0] * b + a[0] * (1 - b), s[1] * T + a[1] * (1 - T), s[2] * w + a[2] * (1 - w)), P.darkColor ? (b = P.darkColor.r, T = P.darkColor.g, w = P.darkColor.b) : (b = 0, T = 0, w = 0), d.setDark(s[0] * b + a[0] * (1 - b), s[1] * T + a[1] * (1 - T), s[2] * w + a[2] * (1 - w))
                                    }
                                    c.alpha = P.color.a
                                } else c.visible = !1
                            }
                            var E = this.skeleton.drawOrder,
                                I = null,
                                S = null;
                            for (h = 0, u = E.length; h < u; h++) {
                                var P = n[E[h].data.index];
                                c = this.slotContainers[E[h].data.index];
                                if (S || null !== c.parent && c.parent !== this && (c.parent.removeChild(c), c.parent = this), P.currentGraphics && P.getAttachment()) S = P.clippingContainer, I = P.getAttachment(), S.children.length = 0, this.children[h] = c, I.endSlot == P.data && (I.endSlot = null);
                                else if (S) {
                                    var A = this.tempClipContainers[h];
                                    A || ((A = this.tempClipContainers[h] = this.newContainer()).visible = !1), this.children[h] = A, c.parent = null, S.addChild(c), I.endSlot == P.data && (S.renderable = !0, S = null, I = null)
                                } else this.children[h] = c
                            }
                        }
                    }, n.prototype.setSpriteRegion = function(e, r, i) {
                        r.attachment === e && r.region === i || (r.region = i, r.attachment = e, r.texture = i.texture, r.rotation = e.rotation * t.core.MathUtils.degRad, r.position.x = e.x, r.position.y = e.y, r.alpha = e.color.a, i.size ? (r.scale.x = i.size.width / i.originalWidth, r.scale.y = -i.size.height / i.originalHeight) : (r.scale.x = e.scaleX * e.width / i.originalWidth, r.scale.y = -e.scaleY * e.height / i.originalHeight))
                    }, n.prototype.setMeshRegion = function(t, e, r) {
                        e.attachment === t && e.region === r || (e.region = r, e.attachment = t, e.texture = r.texture, r.texture.updateUvs(), e.uvBuffer.update(t.regionUVs))
                    }, n.prototype.autoUpdateTransform = function() {
                        if (n.globalAutoUpdate) {
                            this.lastTime = this.lastTime || Date.now();
                            var t = .001 * (Date.now() - this.lastTime);
                            this.lastTime = Date.now(), this.update(t)
                        } else this.lastTime = 0;
                        PIXI.Container.prototype.updateTransform.call(this)
                    }, n.prototype.createSprite = function(t, e, r) {
                        var i = e.region;
                        t.tempAttachment === e && (i = t.tempRegion, t.tempAttachment = null, t.tempRegion = null);
                        var n = i.texture,
                            o = this.newSprite(n);
                        return o.anchor.set(.5), this.setSpriteRegion(e, o, e.region), t.sprites = t.sprites || {}, t.sprites[r] = o, o
                    }, n.prototype.createMesh = function(t, e) {
                        var r = e.region;
                        t.tempAttachment === e && (r = t.tempRegion, t.tempAttachment = null, t.tempRegion = null);
                        var i = this.newMesh(r.texture, new Float32Array(e.regionUVs.length), e.regionUVs, new Uint16Array(e.triangles), PIXI.DRAW_MODES.TRIANGLES);
                        return i.canvasPadding && (i.canvasPadding = 1.5), i.alpha = e.color.a, i.region = e.region, this.setMeshRegion(e, i, r), t.meshes = t.meshes || {}, t.meshes[e.name] = i, i
                    }, n.prototype.createGraphics = function(t, e) {
                        var r = this.newGraphics(),
                            i = new PIXI.Polygon([]);
                        return r.clear(), r.beginFill(16777215, 1), r.drawPolygon(i), r.renderable = !1, t.currentGraphics = r, t.clippingContainer = this.newContainer(), t.clippingContainer.mask = t.currentGraphics, r
                    }, n.prototype.updateGraphics = function(t, e) {
                        var r = t.currentGraphics.geometry,
                            i = r.graphicsData[0].shape.points,
                            n = e.worldVerticesLength;
                        i.length = n, e.computeWorldVertices(t, 0, n, i, 0, 2), r.invalidate()
                    }, n.prototype.hackTextureBySlotIndex = function(e, r, i) {
                        void 0 === r && (r = null), void 0 === i && (i = null);
                        var n = this.skeleton.slots[e];
                        if (!n) return !1;
                        var o = n.getAttachment(),
                            s = o.region;
                        return r && ((s = new t.core.TextureRegion).texture = r, s.size = i), n.currentSprite && n.currentSprite.region != s ? (this.setSpriteRegion(o, n.currentSprite, s), n.currentSprite.region = s) : n.currentMesh && n.currentMesh.region != s ? this.setMeshRegion(o, n.currentMesh, s) : (n.tempRegion = s, n.tempAttachment = o), !0
                    }, n.prototype.hackTextureBySlotName = function(t, e, r) {
                        void 0 === e && (e = null), void 0 === r && (r = null);
                        var i = this.skeleton.findSlotIndex(t);
                        return -1 != i && this.hackTextureBySlotIndex(i, e, r)
                    }, n.prototype.newContainer = function() {
                        return new PIXI.Container
                    }, n.prototype.newSprite = function(t) {
                        return new r(t)
                    }, n.prototype.newGraphics = function() {
                        return new PIXI.Graphics
                    }, n.prototype.newMesh = function(t, e, r, i, n) {
                        return new s(t, e, r, i, n)
                    }, n.prototype.transformHack = function() {
                        return 1
                    }, n.prototype.hackAttachmentGroups = function(t, e, r) {
                        if (t) {
                            for (var i = [], n = [], o = 0, s = this.skeleton.slots.length; o < s; o++) {
                                var a = this.skeleton.slots[o],
                                    h = a.currentSpriteName || a.currentMeshName || "",
                                    u = a.currentSprite || a.currentMesh;
                                h.endsWith(t) ? (u.parentGroup = e, n.push(u)) : r && u && (u.parentGroup = r, i.push(u))
                            }
                            return [i, n]
                        }
                    }, n.prototype.destroy = function(t) {
                        for (var e = 0, r = this.skeleton.slots.length; e < r; e++) {
                            var n = this.skeleton.slots[e];
                            for (var o in n.meshes) n.meshes[o].destroy(t);
                            for (var s in n.meshes = null, n.sprites) n.sprites[s].destroy(t);
                            n.sprites = null
                        }
                        for (e = 0, r = this.slotContainers.length; e < r; e++) this.slotContainers[e].destroy(t);
                        this.spineData = null, this.skeleton = null, this.slotContainers = null, this.stateData = null, this.state = null, this.tempClipContainers = null, i.prototype.destroy.call(this, t)
                    }, n.globalAutoUpdate = !0, n.globalDelayLimit = 0, n.clippingPolygon = [], n
                }(PIXI.Container);
                t.Spine = a
            }(n || (n = {})),
            function(t) {
                PIXI.spine = t;
                var e = PIXI.Texture.prototype;
                e._updateUvs || (e._updateUvs = e.updateUvs)
            }(n || (n = {})),
            function(t) {
                PIXI.LoaderResource.setExtensionXhrType("skel", PIXI.LoaderResource.XHR_RESPONSE_TYPE.BUFFER);
                var e = function() {
                    function e() {}
                    return e.use = function(e, n) {
                        if (!e.data) return n();
                        var o = function(t) {
                                return t.type === PIXI.LoaderResource.TYPE.JSON
                            }(e) && e.data.bones,
                            s = function(t) {
                                return t.xhrType === PIXI.LoaderResource.XHR_RESPONSE_TYPE.BUFFER
                            }(e) && ("skel" === e.extension || e.metadata.spineMetadata);
                        if (!o && !s) return n();
                        var a = null,
                            h = e.data;
                        o ? a = new t.core.SkeletonJson(null) : (a = new t.core.SkeletonBinary(null), e.data instanceof ArrayBuffer && (h = new Uint8Array(e.data)));
                        var u = e.metadata || {},
                            l = u ? e.metadata.spineSkeletonScale : null;
                        l && (a.scale = l);
                        var c = u ? e.metadata.spineAtlas : null;
                        if (!1 === c) return n();
                        if (c && c.pages) return a.attachmentLoader = new t.core.AtlasAttachmentLoader(c), e.spineData = a.readSkeletonData(h), e.spineAtlas = c, n();
                        var d = u.spineAtlasSuffix || ".atlas",
                            p = e.url,
                            f = p.indexOf("?");
                        f > 0 && (p = p.substr(0, f)), p = p.substr(0, p.lastIndexOf(".")) + d, e.metadata && e.metadata.spineAtlasFile && (p = e.metadata.spineAtlasFile), p = p.replace(this.baseUrl, "");
                        var m = {
                                crossOrigin: e.crossOrigin,
                                xhrType: PIXI.LoaderResource.XHR_RESPONSE_TYPE.TEXT,
                                metadata: u.spineMetadata || null,
                                parentResource: e
                            },
                            g = {
                                crossOrigin: e.crossOrigin,
                                metadata: u.imageMetadata || null,
                                parentResource: e
                            },
                            v = e.url.substr(0, e.url.lastIndexOf("/") + 1);
                        v = v.replace(this.baseUrl, "");
                        var y = u.imageNamePrefix || e.name + "_atlas_page_",
                            x = u.images ? i(u.images) : u.image ? i({
                                default: u.image
                            }) : u.imageLoader ? u.imageLoader(this, y, v, g) : r(this, y, v, g),
                            _ = function(r) {
                                new t.core.TextureAtlas(r, x, (function(r) {
                                    r && (a.attachmentLoader = new t.core.AtlasAttachmentLoader(r), e.spineData = a.readSkeletonData(h), e.spineAtlas = r), n()
                                }))
                            };
                        e.metadata && e.metadata.atlasRawData ? _(e.metadata.atlasRawData) : this.add(e.name + "_atlas", p, m, (function(t) {
                            t.error ? n() : _(t.data)
                        }))
                    }, e
                }();

                function r(t, e, r, i) {
                    return r && r.lastIndexOf("/") !== r.length - 1 && (r += "/"),
                        function(n, o) {
                            var s = e + n,
                                a = r + n,
                                h = t.resources[s];
                            if (h) {
                                function u() {
                                    o(h.texture.baseTexture)
                                }
                                h.texture ? u() : h.onAfterMiddleware.add(u)
                            } else t.add(s, a, i, (function(t) {
                                t.error ? o(null) : o(t.texture.baseTexture)
                            }))
                        }
                }

                function i(t) {
                    return function(e, r) {
                        var i = t[e] || t.default;
                        i && i.baseTexture ? r(i.baseTexture) : r(i)
                    }
                }
                t.AtlasParser = e, t.imageLoaderAdapter = r, t.syncImageLoaderAdapter = function(t, e) {
                    return t && t.lastIndexOf("/") !== t.length - 1 && (t += "/"),
                        function(t, r) {
                            r(PIXI.BaseTexture.from(t, e))
                        }
                }, t.staticImageLoader = i, PIXI.Loader && PIXI.Loader.registerPlugin(e)
            }(n || (n = {}))
    },
    14: function(t, e, r) {
        "use strict";
        r.r(e);
        var i = {};
        r.r(i), r.d(i, "AccessibilityManager", (function() {
            return u
        })), r.d(i, "accessibleTarget", (function() {
            return h
        }));
        var n = {};
        r.r(n), r.d(n, "Extract", (function() {
            return p
        }));
        var o = {};
        r.r(o), r.d(o, "InteractionData", (function() {
            return m
        })), r.d(o, "InteractionEvent", (function() {
            return v
        })), r.d(o, "InteractionManager", (function() {
            return E
        })), r.d(o, "InteractionTrackingData", (function() {
            return y
        })), r.d(o, "interactiveTarget", (function() {
            return b
        }));
        r(129);
        var s = r(0),
            a = r(6),
            h = {
                accessible: !1,
                accessibleTitle: null,
                accessibleHint: null,
                tabIndex: 0,
                _accessibleActive: !1,
                _accessibleDiv: !1,
                accessibleType: "button",
                accessiblePointerEvents: "auto",
                accessibleChildren: !0
            };
        a.c.mixin(h);
        var u = function(t) {
            this._hookDiv = null, (s.isMobile.tablet || s.isMobile.phone) && this.createTouchHook();
            var e = document.createElement("div");
            e.style.width = "100px", e.style.height = "100px", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.zIndex = 2, this.div = e, this.pool = [], this.renderId = 0, this.debug = !1, this.renderer = t, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, this.isMobileAccessibility = !1, window.addEventListener("keydown", this._onKeyDown, !1)
        };
        u.prototype.createTouchHook = function() {
            var t = this,
                e = document.createElement("button");
            e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.left = "-1000px", e.style.zIndex = 2, e.style.backgroundColor = "#FF0000", e.title = "HOOK DIV", e.addEventListener("focus", (function() {
                t.isMobileAccessibility = !0, t.activate(), t.destroyTouchHook()
            })), document.body.appendChild(e), this._hookDiv = e
        }, u.prototype.destroyTouchHook = function() {
            this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null)
        }, u.prototype.activate = function() {
            this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div))
        }, u.prototype.deactivate = function() {
            this.isActive && !this.isMobileAccessibility && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove, !0), window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), this.div.parentNode && this.div.parentNode.removeChild(this.div))
        }, u.prototype.updateAccessibleObjects = function(t) {
            if (t.visible && t.accessibleChildren) {
                t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
                for (var e = t.children, r = 0; r < e.length; r++) this.updateAccessibleObjects(e[r])
            }
        }, u.prototype.update = function() {
            if (this.renderer.renderingToScreen) {
                this.updateAccessibleObjects(this.renderer._lastObjectRendered);
                var t = this.renderer.view.getBoundingClientRect(),
                    e = t.width / this.renderer.width,
                    r = t.height / this.renderer.height,
                    i = this.div;
                i.style.left = t.left + "px", i.style.top = t.top + "px", i.style.width = this.renderer.width + "px", i.style.height = this.renderer.height + "px";
                for (var n = 0; n < this.children.length; n++) {
                    var o = this.children[n];
                    if (o.renderId !== this.renderId) o._accessibleActive = !1, Object(s.removeItems)(this.children, n, 1), this.div.removeChild(o._accessibleDiv), this.pool.push(o._accessibleDiv), o._accessibleDiv = null, n--, 0 === this.children.length && this.deactivate();
                    else {
                        i = o._accessibleDiv;
                        var a = o.hitArea,
                            h = o.worldTransform;
                        o.hitArea ? (i.style.left = (h.tx + a.x * h.a) * e + "px", i.style.top = (h.ty + a.y * h.d) * r + "px", i.style.width = a.width * h.a * e + "px", i.style.height = a.height * h.d * r + "px") : (a = o.getBounds(), this.capHitArea(a), i.style.left = a.x * e + "px", i.style.top = a.y * r + "px", i.style.width = a.width * e + "px", i.style.height = a.height * r + "px", i.title !== o.accessibleTitle && null !== o.accessibleTitle && (i.title = o.accessibleTitle), i.getAttribute("aria-label") !== o.accessibleHint && null !== o.accessibleHint && i.setAttribute("aria-label", o.accessibleHint)), o.accessibleTitle === i.title && o.tabIndex === i.tabIndex || (i.title = o.accessibleTitle, i.tabIndex = o.tabIndex, this.debug && this.updateDebugHTML(i))
                    }
                }
                this.renderId++
            }
        }, u.prototype.updateDebugHTML = function(t) {
            t.innerHTML = "type: " + t.type + "</br> title : " + t.title + "</br> tabIndex: " + t.tabIndex
        }, u.prototype.capHitArea = function(t) {
            t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.renderer.width && (t.width = this.renderer.width - t.x), t.y + t.height > this.renderer.height && (t.height = this.renderer.height - t.y)
        }, u.prototype.addChild = function(t) {
            var e = this.pool.pop();
            e || ((e = document.createElement("button")).style.width = "100px", e.style.height = "100px", e.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = 2, e.style.borderStyle = "none", navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"), e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), e.style.pointerEvents = t.accessiblePointerEvents, e.type = t.accessibleType, t.accessibleTitle && null !== t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleHint && null !== t.accessibleHint || (e.title = "displayObject " + t.tabIndex), t.accessibleHint && null !== t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), this.debug && this.updateDebugHTML(e), t._accessibleActive = !0, t._accessibleDiv = e, e.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex
        }, u.prototype._onClick = function(t) {
            var e = this.renderer.plugins.interaction;
            e.dispatchEvent(t.target.displayObject, "click", e.eventData), e.dispatchEvent(t.target.displayObject, "pointertap", e.eventData), e.dispatchEvent(t.target.displayObject, "tap", e.eventData)
        }, u.prototype._onFocus = function(t) {
            t.target.getAttribute("aria-live", "off") || t.target.setAttribute("aria-live", "assertive");
            var e = this.renderer.plugins.interaction;
            e.dispatchEvent(t.target.displayObject, "mouseover", e.eventData)
        }, u.prototype._onFocusOut = function(t) {
            t.target.getAttribute("aria-live", "off") || t.target.setAttribute("aria-live", "polite");
            var e = this.renderer.plugins.interaction;
            e.dispatchEvent(t.target.displayObject, "mouseout", e.eventData)
        }, u.prototype._onKeyDown = function(t) {
            9 === t.keyCode && this.activate()
        }, u.prototype._onMouseMove = function(t) {
            0 === t.movementX && 0 === t.movementY || this.deactivate()
        }, u.prototype.destroy = function() {
            this.destroyTouchHook(), this.div = null;
            for (var t = 0; t < this.children.length; t++) this.children[t].div = null;
            window.document.removeEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
        };
        var l = r(3),
            c = r(2),
            d = new c.j,
            p = function(t) {
                this.renderer = t, t.extract = this
            };
        p.prototype.image = function(t, e, r) {
            var i = new Image;
            return i.src = this.base64(t, e, r), i
        }, p.prototype.base64 = function(t, e, r) {
            return this.canvas(t).toDataURL(e, r)
        }, p.prototype.canvas = function(t) {
            var e, r, i, n = this.renderer,
                o = !1,
                a = !1;
            t && (t instanceof l.x ? i = t : (i = this.renderer.generateTexture(t), a = !0)), i ? (e = i.baseTexture.resolution, r = i.frame, o = !1, n.renderTexture.bind(i)) : (e = this.renderer.resolution, o = !0, (r = d).width = this.renderer.width, r.height = this.renderer.height, n.renderTexture.bind(null));
            var h = Math.floor(r.width * e + 1e-4),
                u = Math.floor(r.height * e + 1e-4),
                c = new s.CanvasRenderTarget(h, u, 1),
                f = new Uint8Array(4 * h * u),
                m = n.gl;
            m.readPixels(r.x * e, r.y * e, h, u, m.RGBA, m.UNSIGNED_BYTE, f);
            var g = c.context.getImageData(0, 0, h, u);
            return p.arrayPostDivide(f, g.data), c.context.putImageData(g, 0, 0), o && (c.context.scale(1, -1), c.context.drawImage(c.canvas, 0, -u)), a && i.destroy(!0), c.canvas
        }, p.prototype.pixels = function(t) {
            var e, r, i, n = this.renderer,
                o = !1;
            t && (t instanceof l.x ? i = t : (i = this.renderer.generateTexture(t), o = !0)), i ? (e = i.baseTexture.resolution, r = i.frame, n.renderTexture.bind(i)) : (e = n.resolution, (r = d).width = n.width, r.height = n.height, n.renderTexture.bind(null));
            var s = r.width * e,
                a = r.height * e,
                h = new Uint8Array(4 * s * a),
                u = n.gl;
            return u.readPixels(r.x * e, r.y * e, s, a, u.RGBA, u.UNSIGNED_BYTE, h), o && i.destroy(!0), p.arrayPostDivide(h, h), h
        }, p.prototype.destroy = function() {
            this.renderer.extract = null, this.renderer = null
        }, p.arrayPostDivide = function(t, e) {
            for (var r = 0; r < t.length; r += 4) {
                var i = e[r + 3] = t[r + 3];
                0 !== i ? (e[r] = Math.round(Math.min(255 * t[r] / i, 255)), e[r + 1] = Math.round(Math.min(255 * t[r + 1] / i, 255)), e[r + 2] = Math.round(Math.min(255 * t[r + 2] / i, 255))) : (e[r] = t[r], e[r + 1] = t[r + 1], e[r + 2] = t[r + 2])
            }
        };
        var f = r(8),
            m = function() {
                this.global = new c.g, this.target = null, this.originalEvent = null, this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0
            },
            g = {
                pointerId: {
                    configurable: !0
                }
            };
        /*!
         * @pixi/interaction - v5.2.0
         * Compiled Wed, 06 Nov 2019 02:32:43 UTC
         *
         * @pixi/interaction is licensed under the MIT License.
         * http://www.opensource.org/licenses/mit-license
         */
        g.pointerId.get = function() {
            return this.identifier
        }, m.prototype.getLocalPosition = function(t, e, r) {
            return t.worldTransform.applyInverse(r || this.global, e)
        }, m.prototype.copyEvent = function(t) {
            t.isPrimary && (this.isPrimary = !0), this.button = t.button, this.buttons = Number.isInteger(t.buttons) ? t.buttons : t.which, this.width = t.width, this.height = t.height, this.tiltX = t.tiltX, this.tiltY = t.tiltY, this.pointerType = t.pointerType, this.pressure = t.pressure, this.rotationAngle = t.rotationAngle, this.twist = t.twist || 0, this.tangentialPressure = t.tangentialPressure || 0
        }, m.prototype.reset = function() {
            this.isPrimary = !1
        }, Object.defineProperties(m.prototype, g);
        var v = function() {
            this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null
        };
        v.prototype.stopPropagation = function() {
            this.stopped = !0, this.stopPropagationHint = !0, this.stopsPropagatingAt = this.currentTarget
        }, v.prototype.reset = function() {
            this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.currentTarget = null, this.target = null
        };
        var y = function t(e) {
                this._pointerId = e, this._flags = t.FLAGS.NONE
            },
            x = {
                pointerId: {
                    configurable: !0
                },
                flags: {
                    configurable: !0
                },
                none: {
                    configurable: !0
                },
                over: {
                    configurable: !0
                },
                rightDown: {
                    configurable: !0
                },
                leftDown: {
                    configurable: !0
                }
            };
        y.prototype._doSet = function(t, e) {
            this._flags = e ? this._flags | t : this._flags & ~t
        }, x.pointerId.get = function() {
            return this._pointerId
        }, x.flags.get = function() {
            return this._flags
        }, x.flags.set = function(t) {
            this._flags = t
        }, x.none.get = function() {
            return this._flags === this.constructor.FLAGS.NONE
        }, x.over.get = function() {
            return 0 != (this._flags & this.constructor.FLAGS.OVER)
        }, x.over.set = function(t) {
            this._doSet(this.constructor.FLAGS.OVER, t)
        }, x.rightDown.get = function() {
            return 0 != (this._flags & this.constructor.FLAGS.RIGHT_DOWN)
        }, x.rightDown.set = function(t) {
            this._doSet(this.constructor.FLAGS.RIGHT_DOWN, t)
        }, x.leftDown.get = function() {
            return 0 != (this._flags & this.constructor.FLAGS.LEFT_DOWN)
        }, x.leftDown.set = function(t) {
            this._doSet(this.constructor.FLAGS.LEFT_DOWN, t)
        }, Object.defineProperties(y.prototype, x), y.FLAGS = Object.freeze({
            NONE: 0,
            OVER: 1,
            LEFT_DOWN: 2,
            RIGHT_DOWN: 4
        });
        var _ = function() {
            this._tempPoint = new c.g
        };
        _.prototype.recursiveFindHit = function(t, e, r, i, n) {
            if (!e || !e.visible) return !1;
            var o = t.data.global,
                s = !1,
                a = n = e.interactive || n,
                h = !0;
            if (e.hitArea ? (i && (e.worldTransform.applyInverse(o, this._tempPoint), e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? s = !0 : (i = !1, h = !1)), a = !1) : e._mask && i && (e._mask.containsPoint && e._mask.containsPoint(o) || (i = !1)), h && e.interactiveChildren && e.children)
                for (var u = e.children, l = u.length - 1; l >= 0; l--) {
                    var c = u[l],
                        d = this.recursiveFindHit(t, c, r, i, a);
                    if (d) {
                        if (!c.parent) continue;
                        a = !1, d && (t.target && (i = !1), s = !0)
                    }
                }
            return n && (i && !t.target && !e.hitArea && e.containsPoint && e.containsPoint(o) && (s = !0), e.interactive && (s && !t.target && (t.target = e), r && r(t, e, !!s))), s
        }, _.prototype.findHit = function(t, e, r, i) {
            this.recursiveFindHit(t, e, r, i, !1)
        };
        var b = {
            interactive: !1,
            interactiveChildren: !0,
            hitArea: null,
            get buttonMode() {
                return "pointer" === this.cursor
            },
            set buttonMode(t) {
                t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null)
            },
            cursor: null,
            get trackedPointers() {
                return void 0 === this._trackedPointers && (this._trackedPointers = {}), this._trackedPointers
            },
            _trackedPointers: void 0
        };
        a.c.mixin(b);
        var T = 1,
            w = {
                target: null,
                data: {
                    global: null
                }
            },
            E = function(t) {
                function e(e, r) {
                    t.call(this), r = r || {}, this.renderer = e, this.autoPreventDefault = void 0 === r.autoPreventDefault || r.autoPreventDefault, this.interactionFrequency = r.interactionFrequency || 10, this.mouse = new m, this.mouse.identifier = T, this.mouse.global.set(-999999), this.activeInteractionData = {}, this.activeInteractionData[T] = this.mouse, this.interactionDataPool = [], this.eventData = new v, this.interactionDOMElement = null, this.moveWhenInside = !1, this.eventsAdded = !1, this.mouseOverRenderer = !1, this.supportsTouchEvents = "ontouchstart" in window, this.supportsPointerEvents = !!window.PointerEvent, this.onPointerUp = this.onPointerUp.bind(this), this.processPointerUp = this.processPointerUp.bind(this), this.onPointerCancel = this.onPointerCancel.bind(this), this.processPointerCancel = this.processPointerCancel.bind(this), this.onPointerDown = this.onPointerDown.bind(this), this.processPointerDown = this.processPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.processPointerMove = this.processPointerMove.bind(this), this.onPointerOut = this.onPointerOut.bind(this), this.processPointerOverOut = this.processPointerOverOut.bind(this), this.onPointerOver = this.onPointerOver.bind(this), this.cursorStyles = {
                        default: "inherit",
                        pointer: "pointer"
                    }, this.currentCursorMode = null, this.cursor = null, this.resolution = 1, this.delayedEvents = [], this.search = new _, this.setTargetElement(this.renderer.view, this.renderer.resolution)
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.hitTest = function(t, e) {
                    return w.target = null, w.data.global = t, e || (e = this.renderer._lastObjectRendered), this.processInteractive(w, e, null, !0), w.target
                }, e.prototype.setTargetElement = function(t, e) {
                    void 0 === e && (e = 1), this.removeEvents(), this.interactionDOMElement = t, this.resolution = e, this.addEvents()
                }, e.prototype.addEvents = function() {
                    this.interactionDOMElement && (f.a.system.add(this.update, this, f.c.INTERACTION), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = "none"), this.supportsPointerEvents ? (window.document.addEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, !0), window.addEventListener("pointercancel", this.onPointerCancel, !0), window.addEventListener("pointerup", this.onPointerUp, !0)) : (window.document.addEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, !0), window.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, !0)), this.eventsAdded = !0)
                }, e.prototype.removeEvents = function() {
                    this.interactionDOMElement && (f.a.system.remove(this.update, this), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = ""), this.supportsPointerEvents ? (window.document.removeEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, !0), window.removeEventListener("pointercancel", this.onPointerCancel, !0), window.removeEventListener("pointerup", this.onPointerUp, !0)) : (window.document.removeEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, !0), window.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, !0)), this.interactionDOMElement = null, this.eventsAdded = !1)
                }, e.prototype.update = function(t) {
                    if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement))
                        if (this.didMove) this.didMove = !1;
                        else {
                            for (var e in this.cursor = null, this.activeInteractionData)
                                if (this.activeInteractionData.hasOwnProperty(e)) {
                                    var r = this.activeInteractionData[e];
                                    if (r.originalEvent && "touch" !== r.pointerType) {
                                        var i = this.configureInteractionEventForDOMEvent(this.eventData, r.originalEvent, r);
                                        this.processInteractive(i, this.renderer._lastObjectRendered, this.processPointerOverOut, !0)
                                    }
                                } this.setCursorMode(this.cursor)
                        }
                }, e.prototype.setCursorMode = function(t) {
                    if (t = t || "default", this.currentCursorMode !== t) {
                        this.currentCursorMode = t;
                        var e = this.cursorStyles[t];
                        if (e) switch (typeof e) {
                            case "string":
                                this.interactionDOMElement.style.cursor = e;
                                break;
                            case "function":
                                e(t);
                                break;
                            case "object":
                                Object.assign(this.interactionDOMElement.style, e)
                        } else "string" != typeof t || Object.prototype.hasOwnProperty.call(this.cursorStyles, t) || (this.interactionDOMElement.style.cursor = t)
                    }
                }, e.prototype.dispatchEvent = function(t, e, r) {
                    r.stopPropagationHint && t !== r.stopsPropagatingAt || (r.currentTarget = t, r.type = e, t.emit(e, r), t[e] && t[e](r))
                }, e.prototype.delayDispatchEvent = function(t, e, r) {
                    this.delayedEvents.push({
                        displayObject: t,
                        eventString: e,
                        eventData: r
                    })
                }, e.prototype.mapPositionToPoint = function(t, e, r) {
                    var i;
                    i = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                    var n = 1 / this.resolution;
                    t.x = (e - i.left) * (this.interactionDOMElement.width / i.width) * n, t.y = (r - i.top) * (this.interactionDOMElement.height / i.height) * n
                }, e.prototype.processInteractive = function(t, e, r, i) {
                    var n = this.search.findHit(t, e, r, i),
                        o = this.delayedEvents;
                    if (!o.length) return n;
                    t.stopPropagationHint = !1;
                    var s = o.length;
                    this.delayedEvents = [];
                    for (var a = 0; a < s; a++) {
                        var h = o[a],
                            u = h.displayObject,
                            l = h.eventString,
                            c = h.eventData;
                        c.stopsPropagatingAt === u && (c.stopPropagationHint = !0), this.dispatchEvent(u, l, c)
                    }
                    return n
                }, e.prototype.onPointerDown = function(t) {
                    if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                        var e = this.normalizeToPointerData(t);
                        if (this.autoPreventDefault && e[0].isNormalized)(t.cancelable || !("cancelable" in t)) && t.preventDefault();
                        for (var r = e.length, i = 0; i < r; i++) {
                            var n = e[i],
                                o = this.getInteractionDataForPointerId(n),
                                s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                            if (s.data.originalEvent = t, this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", s), "touch" === n.pointerType) this.emit("touchstart", s);
                            else if ("mouse" === n.pointerType || "pen" === n.pointerType) {
                                var a = 2 === n.button;
                                this.emit(a ? "rightdown" : "mousedown", this.eventData)
                            }
                        }
                    }
                }, e.prototype.processPointerDown = function(t, e, r) {
                    var i = t.data,
                        n = t.data.identifier;
                    if (r)
                        if (e.trackedPointers[n] || (e.trackedPointers[n] = new y(n)), this.dispatchEvent(e, "pointerdown", t), "touch" === i.pointerType) this.dispatchEvent(e, "touchstart", t);
                        else if ("mouse" === i.pointerType || "pen" === i.pointerType) {
                        var o = 2 === i.button;
                        o ? e.trackedPointers[n].rightDown = !0 : e.trackedPointers[n].leftDown = !0, this.dispatchEvent(e, o ? "rightdown" : "mousedown", t)
                    }
                }, e.prototype.onPointerComplete = function(t, e, r) {
                    for (var i = this.normalizeToPointerData(t), n = i.length, o = t.target !== this.interactionDOMElement ? "outside" : "", s = 0; s < n; s++) {
                        var a = i[s],
                            h = this.getInteractionDataForPointerId(a),
                            u = this.configureInteractionEventForDOMEvent(this.eventData, a, h);
                        if (u.data.originalEvent = t, this.processInteractive(u, this.renderer._lastObjectRendered, r, e || !o), this.emit(e ? "pointercancel" : "pointerup" + o, u), "mouse" === a.pointerType || "pen" === a.pointerType) {
                            var l = 2 === a.button;
                            this.emit(l ? "rightup" + o : "mouseup" + o, u)
                        } else "touch" === a.pointerType && (this.emit(e ? "touchcancel" : "touchend" + o, u), this.releaseInteractionDataForPointerId(a.pointerId, h))
                    }
                }, e.prototype.onPointerCancel = function(t) {
                    this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !0, this.processPointerCancel)
                }, e.prototype.processPointerCancel = function(t, e) {
                    var r = t.data,
                        i = t.data.identifier;
                    void 0 !== e.trackedPointers[i] && (delete e.trackedPointers[i], this.dispatchEvent(e, "pointercancel", t), "touch" === r.pointerType && this.dispatchEvent(e, "touchcancel", t))
                }, e.prototype.onPointerUp = function(t) {
                    this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !1, this.processPointerUp)
                }, e.prototype.processPointerUp = function(t, e, r) {
                    var i = t.data,
                        n = t.data.identifier,
                        o = e.trackedPointers[n],
                        s = "touch" === i.pointerType,
                        a = "mouse" === i.pointerType || "pen" === i.pointerType,
                        h = !1;
                    if (a) {
                        var u = 2 === i.button,
                            l = y.FLAGS,
                            c = u ? l.RIGHT_DOWN : l.LEFT_DOWN,
                            d = void 0 !== o && o.flags & c;
                        r ? (this.dispatchEvent(e, u ? "rightup" : "mouseup", t), d && (this.dispatchEvent(e, u ? "rightclick" : "click", t), h = !0)) : d && this.dispatchEvent(e, u ? "rightupoutside" : "mouseupoutside", t), o && (u ? o.rightDown = !1 : o.leftDown = !1)
                    }
                    r ? (this.dispatchEvent(e, "pointerup", t), s && this.dispatchEvent(e, "touchend", t), o && (a && !h || this.dispatchEvent(e, "pointertap", t), s && (this.dispatchEvent(e, "tap", t), o.over = !1))) : o && (this.dispatchEvent(e, "pointerupoutside", t), s && this.dispatchEvent(e, "touchendoutside", t)), o && o.none && delete e.trackedPointers[n]
                }, e.prototype.onPointerMove = function(t) {
                    if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                        var e = this.normalizeToPointerData(t);
                        "mouse" !== e[0].pointerType && "pen" !== e[0].pointerType || (this.didMove = !0, this.cursor = null);
                        for (var r = e.length, i = 0; i < r; i++) {
                            var n = e[i],
                                o = this.getInteractionDataForPointerId(n),
                                s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                            s.data.originalEvent = t, this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerMove, !0), this.emit("pointermove", s), "touch" === n.pointerType && this.emit("touchmove", s), "mouse" !== n.pointerType && "pen" !== n.pointerType || this.emit("mousemove", s)
                        }
                        "mouse" === e[0].pointerType && this.setCursorMode(this.cursor)
                    }
                }, e.prototype.processPointerMove = function(t, e, r) {
                    var i = t.data,
                        n = "touch" === i.pointerType,
                        o = "mouse" === i.pointerType || "pen" === i.pointerType;
                    o && this.processPointerOverOut(t, e, r), this.moveWhenInside && !r || (this.dispatchEvent(e, "pointermove", t), n && this.dispatchEvent(e, "touchmove", t), o && this.dispatchEvent(e, "mousemove", t))
                }, e.prototype.onPointerOut = function(t) {
                    if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                        var e = this.normalizeToPointerData(t)[0];
                        "mouse" === e.pointerType && (this.mouseOverRenderer = !1, this.setCursorMode(null));
                        var r = this.getInteractionDataForPointerId(e),
                            i = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
                        i.data.originalEvent = e, this.processInteractive(i, this.renderer._lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", i), "mouse" === e.pointerType || "pen" === e.pointerType ? this.emit("mouseout", i) : this.releaseInteractionDataForPointerId(r.identifier)
                    }
                }, e.prototype.processPointerOverOut = function(t, e, r) {
                    var i = t.data,
                        n = t.data.identifier,
                        o = "mouse" === i.pointerType || "pen" === i.pointerType,
                        s = e.trackedPointers[n];
                    r && !s && (s = e.trackedPointers[n] = new y(n)), void 0 !== s && (r && this.mouseOverRenderer ? (s.over || (s.over = !0, this.delayDispatchEvent(e, "pointerover", t), o && this.delayDispatchEvent(e, "mouseover", t)), o && null === this.cursor && (this.cursor = e.cursor)) : s.over && (s.over = !1, this.dispatchEvent(e, "pointerout", this.eventData), o && this.dispatchEvent(e, "mouseout", t), s.none && delete e.trackedPointers[n]))
                }, e.prototype.onPointerOver = function(t) {
                    var e = this.normalizeToPointerData(t)[0],
                        r = this.getInteractionDataForPointerId(e),
                        i = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
                    i.data.originalEvent = e, "mouse" === e.pointerType && (this.mouseOverRenderer = !0), this.emit("pointerover", i), "mouse" !== e.pointerType && "pen" !== e.pointerType || this.emit("mouseover", i)
                }, e.prototype.getInteractionDataForPointerId = function(t) {
                    var e, r = t.pointerId;
                    return r === T || "mouse" === t.pointerType ? e = this.mouse : this.activeInteractionData[r] ? e = this.activeInteractionData[r] : ((e = this.interactionDataPool.pop() || new m).identifier = r, this.activeInteractionData[r] = e), e.copyEvent(t), e
                }, e.prototype.releaseInteractionDataForPointerId = function(t) {
                    var e = this.activeInteractionData[t];
                    e && (delete this.activeInteractionData[t], e.reset(), this.interactionDataPool.push(e))
                }, e.prototype.configureInteractionEventForDOMEvent = function(t, e, r) {
                    return t.data = r, this.mapPositionToPoint(r.global, e.clientX, e.clientY), "touch" === e.pointerType && (e.globalX = r.global.x, e.globalY = r.global.y), r.originalEvent = e, t.reset(), t
                }, e.prototype.normalizeToPointerData = function(t) {
                    var e = [];
                    if (this.supportsTouchEvents && t instanceof TouchEvent)
                        for (var r = 0, i = t.changedTouches.length; r < i; r++) {
                            var n = t.changedTouches[r];
                            void 0 === n.button && (n.button = t.touches.length ? 1 : 0), void 0 === n.buttons && (n.buttons = t.touches.length ? 1 : 0), void 0 === n.isPrimary && (n.isPrimary = 1 === t.touches.length && "touchstart" === t.type), void 0 === n.width && (n.width = n.radiusX || 1), void 0 === n.height && (n.height = n.radiusY || 1), void 0 === n.tiltX && (n.tiltX = 0), void 0 === n.tiltY && (n.tiltY = 0), void 0 === n.pointerType && (n.pointerType = "touch"), void 0 === n.pointerId && (n.pointerId = n.identifier || 0), void 0 === n.pressure && (n.pressure = n.force || .5), void 0 === n.twist && (n.twist = 0), void 0 === n.tangentialPressure && (n.tangentialPressure = 0), void 0 === n.layerX && (n.layerX = n.offsetX = n.clientX), void 0 === n.layerY && (n.layerY = n.offsetY = n.clientY), n.isNormalized = !0, e.push(n)
                        } else !(t instanceof MouseEvent) || this.supportsPointerEvents && t instanceof window.PointerEvent ? e.push(t) : (void 0 === t.isPrimary && (t.isPrimary = !0), void 0 === t.width && (t.width = 1), void 0 === t.height && (t.height = 1), void 0 === t.tiltX && (t.tiltX = 0), void 0 === t.tiltY && (t.tiltY = 0), void 0 === t.pointerType && (t.pointerType = "mouse"), void 0 === t.pointerId && (t.pointerId = T), void 0 === t.pressure && (t.pressure = .5), void 0 === t.twist && (t.twist = 0), void 0 === t.tangentialPressure && (t.tangentialPressure = 0), t.isNormalized = !0, e.push(t));
                    return e
                }, e.prototype.destroy = function() {
                    this.removeEvents(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this.search = null
                }, e
            }(s.EventEmitter),
            I = r(50),
            S = function t(e) {
                var r = this;
                e = Object.assign({
                    forceCanvas: !1
                }, e), this.renderer = Object(l.J)(e), this.stage = new a.b, t._plugins.forEach((function(t) {
                    t.init.call(r, e)
                }))
            },
            P = {
                view: {
                    configurable: !0
                },
                screen: {
                    configurable: !0
                }
            };
        S.registerPlugin = function(t) {
            S._plugins.push(t)
        }, S.prototype.render = function() {
            this.renderer.render(this.stage)
        }, P.view.get = function() {
            return this.renderer.view
        }, P.screen.get = function() {
            return this.renderer.screen
        }, S.prototype.destroy = function(t, e) {
            var r = this,
                i = S._plugins.slice(0);
            i.reverse(), i.forEach((function(t) {
                t.destroy.call(r)
            })), this.stage.destroy(e), this.stage = null, this.renderer.destroy(t), this.renderer = null, this._options = null
        }, Object.defineProperties(S.prototype, P), S._plugins = [];
        var A = function() {};
        A.init = function(t) {
            var e = this;
            Object.defineProperty(this, "resizeTo", {
                set: function(t) {
                    window.removeEventListener("resize", this.resize), this._resizeTo = t, t && (window.addEventListener("resize", this.resize), this.resize())
                },
                get: function() {
                    return this._resizeTo
                }
            }), this.resize = function() {
                e._resizeTo && (e._resizeTo === window ? e.renderer.resize(window.innerWidth, window.innerHeight) : e.renderer.resize(e._resizeTo.clientWidth, e._resizeTo.clientHeight))
            }, this._resizeTo = null, this.resizeTo = t.resizeTo || null
        }, A.destroy = function() {
            this.resizeTo = null, this.resize = null
        }, S.registerPlugin(A);
        var M = r(80),
            C = r.n(M),
            O = r(25),
            R = r.n(O);
        /*!
         * resource-loader - v3.0.1
         * https://github.com/pixijs/pixi-sound
         * Compiled Tue, 02 Jul 2019 14:06:18 UTC
         *
         * resource-loader is licensed under the MIT license.
         * http://www.opensource.org/licenses/mit-license
         */
        function D() {}

        function F(t, e, r, i) {
            var n = 0,
                o = t.length;
            ! function s(a) {
                a || n === o ? r && r(a) : i ? setTimeout((function() {
                    e(t[n++], s)
                }), 1) : e(t[n++], s)
            }()
        }

        function L(t) {
            return function() {
                if (null === t) throw new Error("Callback was already called.");
                var e = t;
                t = null, e.apply(this, arguments)
            }
        }

        function N(t, e) {
            if (null == e) e = 1;
            else if (0 === e) throw new Error("Concurrency must not be zero");
            var r = 0,
                i = {
                    _tasks: [],
                    concurrency: e,
                    saturated: D,
                    unsaturated: D,
                    buffer: e / 4,
                    empty: D,
                    drain: D,
                    error: D,
                    started: !1,
                    paused: !1,
                    push: function(t, e) {
                        n(t, !1, e)
                    },
                    kill: function() {
                        r = 0, i.drain = D, i.started = !1, i._tasks = []
                    },
                    unshift: function(t, e) {
                        n(t, !0, e)
                    },
                    process: function() {
                        for (; !i.paused && r < i.concurrency && i._tasks.length;) {
                            var e = i._tasks.shift();
                            0 === i._tasks.length && i.empty(), (r += 1) === i.concurrency && i.saturated(), t(e.data, L(o(e)))
                        }
                    },
                    length: function() {
                        return i._tasks.length
                    },
                    running: function() {
                        return r
                    },
                    idle: function() {
                        return i._tasks.length + r === 0
                    },
                    pause: function() {
                        !0 !== i.paused && (i.paused = !0)
                    },
                    resume: function() {
                        if (!1 !== i.paused) {
                            i.paused = !1;
                            for (var t = 1; t <= i.concurrency; t++) i.process()
                        }
                    }
                };

            function n(t, e, r) {
                if (null != r && "function" != typeof r) throw new Error("task callback must be a function");
                if (i.started = !0, null == t && i.idle()) setTimeout((function() {
                    return i.drain()
                }), 1);
                else {
                    var n = {
                        data: t,
                        callback: "function" == typeof r ? r : D
                    };
                    e ? i._tasks.unshift(n) : i._tasks.push(n), setTimeout((function() {
                        return i.process()
                    }), 1)
                }
            }

            function o(t) {
                return function() {
                    r -= 1, t.callback.apply(t, arguments), null != arguments[0] && i.error(arguments[0], t.data), r <= i.concurrency - i.buffer && i.unsaturated(), i.idle() && i.drain(), i.process()
                }
            }
            return i
        }
        var k = {};

        function B(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function U(t, e, r) {
            return e && B(t.prototype, e), r && B(t, r), t
        }
        var X = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
            V = null;

        function j() {}
        var Y = function() {
            function t(e, r, i) {
                if ("string" != typeof e || "string" != typeof r) throw new Error("Both name and url are required for constructing a resource.");
                i = i || {}, this._flags = 0, this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === r.indexOf("data:")), this.name = e, this.url = r, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === i.crossOrigin ? "anonymous" : i.crossOrigin, this.timeout = i.timeout || 0, this.loadType = i.loadType || this._determineLoadType(), this.xhrType = i.xhrType, this.metadata = i.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = t.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = j, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundOnTimeout = this._onTimeout.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this.onStart = new R.a, this.onProgress = new R.a, this.onComplete = new R.a, this.onAfterMiddleware = new R.a
            }
            t.setExtensionLoadType = function(e, r) {
                G(t._loadTypeMap, e, r)
            }, t.setExtensionXhrType = function(e, r) {
                G(t._xhrTypeMap, e, r)
            };
            var e = t.prototype;
            return e.complete = function() {
                this._clearEvents(), this._finish()
            }, e.abort = function(e) {
                if (!this.error) {
                    if (this.error = new Error(e), this._clearEvents(), this.xhr) this.xhr.abort();
                    else if (this.xdr) this.xdr.abort();
                    else if (this.data)
                        if (this.data.src) this.data.src = t.EMPTY_GIF;
                        else
                            for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
                    this._finish()
                }
            }, e.load = function(e) {
                var r = this;
                if (!this.isLoading)
                    if (this.isComplete) e && setTimeout((function() {
                        return e(r)
                    }), 1);
                    else switch (e && this.onComplete.once(e), this._setFlag(t.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                        case t.LOAD_TYPE.IMAGE:
                            this.type = t.TYPE.IMAGE, this._loadElement("image");
                            break;
                        case t.LOAD_TYPE.AUDIO:
                            this.type = t.TYPE.AUDIO, this._loadSourceElement("audio");
                            break;
                        case t.LOAD_TYPE.VIDEO:
                            this.type = t.TYPE.VIDEO, this._loadSourceElement("video");
                            break;
                        case t.LOAD_TYPE.XHR:
                        default:
                            X && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                    }
            }, e._hasFlag = function(t) {
                return 0 != (this._flags & t)
            }, e._setFlag = function(t, e) {
                this._flags = e ? this._flags | t : this._flags & ~t
            }, e._clearEvents = function() {
                clearTimeout(this._elementTimer), this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null))
            }, e._finish = function() {
                if (this.isComplete) throw new Error("Complete called again for an already completed resource.");
                this._setFlag(t.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this)
            }, e._loadElement = function(t) {
                this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== window.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
            }, e._loadSourceElement = function(t) {
                if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== window.Audio ? this.data = new Audio : this.data = document.createElement(t), null !== this.data) {
                    if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), !this.metadata.skipSource)
                        if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                        else if (Array.isArray(this.url))
                        for (var e = this.metadata.mimeType, r = 0; r < this.url.length; ++r) this.data.appendChild(this._createSource(t, this.url[r], Array.isArray(e) ? e[r] : e));
                    else {
                        var i = this.metadata.mimeType;
                        this.data.appendChild(this._createSource(t, this.url, Array.isArray(i) ? i[0] : i))
                    }
                    this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load(), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
                } else this.abort("Unsupported element: " + t)
            }, e._loadXhr = function() {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var e = this.xhr = new XMLHttpRequest;
                e.open("GET", this.url, !0), e.timeout = this.timeout, this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType, e.addEventListener("error", this._boundXhrOnError, !1), e.addEventListener("timeout", this._boundXhrOnTimeout, !1), e.addEventListener("abort", this._boundXhrOnAbort, !1), e.addEventListener("progress", this._boundOnProgress, !1), e.addEventListener("load", this._boundXhrOnLoad, !1), e.send()
            }, e._loadXdr = function() {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var t = this.xhr = new XDomainRequest;
                t.timeout = this.timeout || 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXhrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout((function() {
                    return t.send()
                }), 1)
            }, e._createSource = function(t, e, r) {
                r || (r = t + "/" + this._getExtension(e));
                var i = document.createElement("source");
                return i.src = e, i.type = r, i
            }, e._onError = function(t) {
                this.abort("Failed to load element using: " + t.target.nodeName)
            }, e._onProgress = function(t) {
                t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total)
            }, e._onTimeout = function() {
                this.abort("Load timed out.")
            }, e._xhrOnError = function() {
                var t = this.xhr;
                this.abort(H(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
            }, e._xhrOnTimeout = function() {
                var t = this.xhr;
                this.abort(H(t) + " Request timed out.")
            }, e._xhrOnAbort = function() {
                var t = this.xhr;
                this.abort(H(t) + " Request was aborted by the user.")
            }, e._xhrOnLoad = function() {
                var e = this.xhr,
                    r = "",
                    i = void 0 === e.status ? 200 : e.status;
                if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (r = e.responseText), 0 === i && (r.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER) ? i = 200 : 1223 === i && (i = 204), 2 === (i / 100 | 0)) {
                    if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT) this.data = r, this.type = t.TYPE.TEXT;
                    else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON) try {
                        this.data = JSON.parse(r), this.type = t.TYPE.JSON
                    } catch (t) {
                        return void this.abort("Error trying to parse loaded json: " + t)
                    } else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT) try {
                        if (window.DOMParser) {
                            var n = new DOMParser;
                            this.data = n.parseFromString(r, "text/xml")
                        } else {
                            var o = document.createElement("div");
                            o.innerHTML = r, this.data = o
                        }
                        this.type = t.TYPE.XML
                    } catch (t) {
                        return void this.abort("Error trying to parse loaded xml: " + t)
                    } else this.data = e.response || r;
                    this.complete()
                } else this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL)
            }, e._determineCrossOrigin = function(t, e) {
                if (0 === t.indexOf("data:")) return "";
                if (window.origin !== window.location.origin) return "anonymous";
                e = e || window.location, V || (V = document.createElement("a")), V.href = t;
                var r = !(t = C()(V.href, {
                        strictMode: !0
                    })).port && "" === e.port || t.port === e.port,
                    i = t.protocol ? t.protocol + ":" : "";
                return t.host === e.hostname && r && i === e.protocol ? "" : "anonymous"
            }, e._determineXhrType = function() {
                return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT
            }, e._determineLoadType = function() {
                return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR
            }, e._getExtension = function() {
                var t = this.url,
                    e = "";
                if (this.isDataUrl) {
                    var r = t.indexOf("/");
                    e = t.substring(r + 1, t.indexOf(";", r))
                } else {
                    var i = t.indexOf("?"),
                        n = t.indexOf("#"),
                        o = Math.min(i > -1 ? i : t.length, n > -1 ? n : t.length);
                    e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1)
                }
                return e.toLowerCase()
            }, e._getMimeFromXhrType = function(e) {
                switch (e) {
                    case t.XHR_RESPONSE_TYPE.BUFFER:
                        return "application/octet-binary";
                    case t.XHR_RESPONSE_TYPE.BLOB:
                        return "application/blob";
                    case t.XHR_RESPONSE_TYPE.DOCUMENT:
                        return "application/xml";
                    case t.XHR_RESPONSE_TYPE.JSON:
                        return "application/json";
                    case t.XHR_RESPONSE_TYPE.DEFAULT:
                    case t.XHR_RESPONSE_TYPE.TEXT:
                    default:
                        return "text/plain"
                }
            }, U(t, [{
                key: "isDataUrl",
                get: function() {
                    return this._hasFlag(t.STATUS_FLAGS.DATA_URL)
                }
            }, {
                key: "isComplete",
                get: function() {
                    return this._hasFlag(t.STATUS_FLAGS.COMPLETE)
                }
            }, {
                key: "isLoading",
                get: function() {
                    return this._hasFlag(t.STATUS_FLAGS.LOADING)
                }
            }]), t
        }();

        function G(t, e, r) {
            e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = r)
        }

        function H(t) {
            return t.toString().replace("object ", "")
        }
        Y.STATUS_FLAGS = {
            NONE: 0,
            DATA_URL: 1,
            COMPLETE: 2,
            LOADING: 4
        }, Y.TYPE = {
            UNKNOWN: 0,
            JSON: 1,
            XML: 2,
            IMAGE: 3,
            AUDIO: 4,
            VIDEO: 5,
            TEXT: 6
        }, Y.LOAD_TYPE = {
            XHR: 1,
            IMAGE: 2,
            AUDIO: 3,
            VIDEO: 4
        }, Y.XHR_RESPONSE_TYPE = {
            DEFAULT: "text",
            BUFFER: "arraybuffer",
            BLOB: "blob",
            DOCUMENT: "document",
            JSON: "json",
            TEXT: "text"
        }, Y._loadTypeMap = {
            gif: Y.LOAD_TYPE.IMAGE,
            png: Y.LOAD_TYPE.IMAGE,
            bmp: Y.LOAD_TYPE.IMAGE,
            jpg: Y.LOAD_TYPE.IMAGE,
            jpeg: Y.LOAD_TYPE.IMAGE,
            tif: Y.LOAD_TYPE.IMAGE,
            tiff: Y.LOAD_TYPE.IMAGE,
            webp: Y.LOAD_TYPE.IMAGE,
            tga: Y.LOAD_TYPE.IMAGE,
            svg: Y.LOAD_TYPE.IMAGE,
            "svg+xml": Y.LOAD_TYPE.IMAGE,
            mp3: Y.LOAD_TYPE.AUDIO,
            ogg: Y.LOAD_TYPE.AUDIO,
            wav: Y.LOAD_TYPE.AUDIO,
            mp4: Y.LOAD_TYPE.VIDEO,
            webm: Y.LOAD_TYPE.VIDEO
        }, Y._xhrTypeMap = {
            xhtml: Y.XHR_RESPONSE_TYPE.DOCUMENT,
            html: Y.XHR_RESPONSE_TYPE.DOCUMENT,
            htm: Y.XHR_RESPONSE_TYPE.DOCUMENT,
            xml: Y.XHR_RESPONSE_TYPE.DOCUMENT,
            tmx: Y.XHR_RESPONSE_TYPE.DOCUMENT,
            svg: Y.XHR_RESPONSE_TYPE.DOCUMENT,
            tsx: Y.XHR_RESPONSE_TYPE.DOCUMENT,
            gif: Y.XHR_RESPONSE_TYPE.BLOB,
            png: Y.XHR_RESPONSE_TYPE.BLOB,
            bmp: Y.XHR_RESPONSE_TYPE.BLOB,
            jpg: Y.XHR_RESPONSE_TYPE.BLOB,
            jpeg: Y.XHR_RESPONSE_TYPE.BLOB,
            tif: Y.XHR_RESPONSE_TYPE.BLOB,
            tiff: Y.XHR_RESPONSE_TYPE.BLOB,
            webp: Y.XHR_RESPONSE_TYPE.BLOB,
            tga: Y.XHR_RESPONSE_TYPE.BLOB,
            json: Y.XHR_RESPONSE_TYPE.JSON,
            text: Y.XHR_RESPONSE_TYPE.TEXT,
            txt: Y.XHR_RESPONSE_TYPE.TEXT,
            ttf: Y.XHR_RESPONSE_TYPE.BUFFER,
            otf: Y.XHR_RESPONSE_TYPE.BUFFER
        }, Y.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
        var W = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var z = window.URL || window.webkitURL;
        var q = {
                caching: function(t, e) {
                    var r = this;
                    k[t.url] ? (t.data = k[t.url], t.complete()) : t.onComplete.once((function() {
                        return k[r.url] = r.data
                    })), e()
                },
                parsing: function(t, e) {
                    if (t.data) {
                        if (t.xhr && t.xhrType === Y.XHR_RESPONSE_TYPE.BLOB)
                            if (window.Blob && "string" != typeof t.data) {
                                if (0 === t.data.type.indexOf("image")) {
                                    var r = z.createObjectURL(t.data);
                                    return t.blob = t.data, t.data = new Image, t.data.src = r, t.type = Y.TYPE.IMAGE, void(t.data.onload = function() {
                                        z.revokeObjectURL(r), t.data.onload = null, e()
                                    })
                                }
                            } else {
                                var i = t.xhr.getResponseHeader("content-type");
                                if (i && 0 === i.indexOf("image")) return t.data = new Image, t.data.src = "data:" + i + ";base64," + function(t) {
                                    for (var e = "", r = 0; r < t.length;) {
                                        for (var i = [0, 0, 0], n = [0, 0, 0, 0], o = 0; o < i.length; ++o) r < t.length ? i[o] = 255 & t.charCodeAt(r++) : i[o] = 0;
                                        switch (n[0] = i[0] >> 2, n[1] = (3 & i[0]) << 4 | i[1] >> 4, n[2] = (15 & i[1]) << 2 | i[2] >> 6, n[3] = 63 & i[2], r - (t.length - 1)) {
                                            case 2:
                                                n[3] = 64, n[2] = 64;
                                                break;
                                            case 1:
                                                n[3] = 64
                                        }
                                        for (var s = 0; s < n.length; ++s) e += W.charAt(n[s])
                                    }
                                    return e
                                }(t.xhr.responseText), t.type = Y.TYPE.IMAGE, void(t.data.onload = function() {
                                    t.data.onload = null, e()
                                })
                            } e()
                    } else e()
                }
            },
            Z = /(#[\w-]+)?$/,
            K = function() {
                function t(e, r) {
                    var i = this;
                    void 0 === e && (e = ""), void 0 === r && (r = 10), this.baseUrl = e, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function(t, e) {
                        return i._loadResource(t, e)
                    }, this._queue = N(this._boundLoadResource, r), this._queue.pause(), this.resources = {}, this.onProgress = new R.a, this.onError = new R.a, this.onLoad = new R.a, this.onStart = new R.a, this.onComplete = new R.a;
                    for (var n = 0; n < t._defaultBeforeMiddleware.length; ++n) this.pre(t._defaultBeforeMiddleware[n]);
                    for (var o = 0; o < t._defaultAfterMiddleware.length; ++o) this.use(t._defaultAfterMiddleware[o])
                }
                var e = t.prototype;
                return e.add = function(t, e, r, i) {
                    if (Array.isArray(t)) {
                        for (var n = 0; n < t.length; ++n) this.add(t[n]);
                        return this
                    }
                    if ("object" == typeof t && (i = e || t.callback || t.onComplete, r = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (i = r, r = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
                    if ("function" == typeof r && (i = r, r = null), this.loading && (!r || !r.parentResource)) throw new Error("Cannot add resources while the loader is running.");
                    if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');
                    if (e = this._prepareUrl(e), this.resources[t] = new Y(t, e, r), "function" == typeof i && this.resources[t].onAfterMiddleware.once(i), this.loading) {
                        for (var o = r.parentResource, s = [], a = 0; a < o.children.length; ++a) o.children[a].isComplete || s.push(o.children[a]);
                        var h = o.progressChunk * (s.length + 1) / (s.length + 2);
                        o.children.push(this.resources[t]), o.progressChunk = h;
                        for (var u = 0; u < s.length; ++u) s[u].progressChunk = h;
                        this.resources[t].progressChunk = h
                    }
                    return this._queue.push(this.resources[t]), this
                }, e.pre = function(t) {
                    return this._beforeMiddleware.push(t), this
                }, e.use = function(t) {
                    return this._afterMiddleware.push(t), this
                }, e.reset = function() {
                    for (var t in this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause(), this.resources) {
                        var e = this.resources[t];
                        e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading && e.abort()
                    }
                    return this.resources = {}, this
                }, e.load = function(t) {
                    if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
                    if (this._queue.idle()) this._onStart(), this._onComplete();
                    else {
                        for (var e = 100 / this._queue._tasks.length, r = 0; r < this._queue._tasks.length; ++r) this._queue._tasks[r].data.progressChunk = e;
                        this._onStart(), this._queue.resume()
                    }
                    return this
                }, e._prepareUrl = function(t) {
                    var e, r = C()(t, {
                        strictMode: !0
                    });
                    if (e = r.protocol || !r.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, this.defaultQueryString) {
                        var i = Z.exec(e)[0]; - 1 !== (e = e.substr(0, e.length - i.length)).indexOf("?") ? e += "&" + this.defaultQueryString : e += "?" + this.defaultQueryString, e += i
                    }
                    return e
                }, e._loadResource = function(t, e) {
                    var r = this;
                    t._dequeue = e, F(this._beforeMiddleware, (function(e, i) {
                        e.call(r, t, (function() {
                            i(t.isComplete ? {} : null)
                        }))
                    }), (function() {
                        t.isComplete ? r._onLoad(t) : (t._onLoadBinding = t.onComplete.once(r._onLoad, r), t.load())
                    }), !0)
                }, e._onStart = function() {
                    this.progress = 0, this.loading = !0, this.onStart.dispatch(this)
                }, e._onComplete = function() {
                    this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources)
                }, e._onLoad = function(t) {
                    var e = this;
                    t._onLoadBinding = null, this._resourcesParsing.push(t), t._dequeue(), F(this._afterMiddleware, (function(r, i) {
                        r.call(e, t, i)
                    }), (function() {
                        t.onAfterMiddleware.dispatch(t), e.progress = Math.min(100, e.progress + t.progressChunk), e.onProgress.dispatch(e, t), t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t), e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1), e._queue.idle() && 0 === e._resourcesParsing.length && e._onComplete()
                    }), !0)
                }, U(t, [{
                    key: "concurrency",
                    get: function() {
                        return this._queue.concurrency
                    },
                    set: function(t) {
                        this._queue.concurrency = t
                    }
                }]), t
            }();
        K._defaultBeforeMiddleware = [], K._defaultAfterMiddleware = [], K.pre = function(t) {
            return K._defaultBeforeMiddleware.push(t), K
        }, K.use = function(t) {
            return K._defaultAfterMiddleware.push(t), K
        };
        /*!
         * @pixi/loaders - v5.2.0
         * Compiled Wed, 06 Nov 2019 02:32:43 UTC
         *
         * @pixi/loaders is licensed under the MIT License.
         * http://www.opensource.org/licenses/mit-license
         */
        var J = function() {};
        J.use = function(t, e) {
            t.data && t.type === Y.TYPE.IMAGE && (t.texture = l.E.fromLoader(t.data, t.url, t.name)), e()
        };
        var Q = function(t) {
            function e(r, i) {
                var n = this;
                t.call(this, r, i), s.EventEmitter.call(this);
                for (var o = 0; o < e._plugins.length; ++o) {
                    var a = e._plugins[o],
                        h = a.pre,
                        u = a.use;
                    h && this.pre(h), u && this.use(u)
                }
                this.onStart.add((function(t) {
                    return n.emit("start", t)
                })), this.onProgress.add((function(t, e) {
                    return n.emit("progress", t, e)
                })), this.onError.add((function(t, e, r) {
                    return n.emit("error", t, e, r)
                })), this.onLoad.add((function(t, e) {
                    return n.emit("load", t, e)
                })), this.onComplete.add((function(t, e) {
                    return n.emit("complete", t, e)
                })), this._protected = !1
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                shared: {
                    configurable: !0
                }
            };
            return e.prototype.destroy = function() {
                this._protected || (this.removeAllListeners(), this.reset())
            }, r.shared.get = function() {
                var t = e._shared;
                return t || ((t = new e)._protected = !0, e._shared = t), t
            }, Object.defineProperties(e, r), e
        }(K);
        Object.assign(Q.prototype, s.EventEmitter.prototype), Q._plugins = [], Q.registerPlugin = function(t) {
            return Q._plugins.push(t), t.add && t.add(), Q
        }, Q.registerPlugin({
            use: q.parsing
        }), Q.registerPlugin(J);
        var $ = function() {};
        $.init = function(t) {
            t = Object.assign({
                sharedLoader: !1
            }, t), this.loader = t.sharedLoader ? Q.shared : new Q
        }, $.destroy = function() {
            this.loader && (this.loader.destroy(), this.loader = null)
        };
        var tt = Y,
            et = r(51),
            rt = function(t, e, r) {
                void 0 === r && (r = null), this.baseTexture = t, this.textures = {}, this.animations = {}, this.data = e, this.resolution = this._updateResolution(r || (this.baseTexture.resource ? this.baseTexture.resource.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null
            },
            it = {
                BATCH_SIZE: {
                    configurable: !0
                }
            };
        it.BATCH_SIZE.get = function() {
            return 1e3
        }, rt.prototype._updateResolution = function(t) {
            var e = this.data.meta.scale,
                r = Object(s.getResolutionOfUrl)(t, null);
            return null === r && (r = void 0 !== e ? parseFloat(e) : 1), 1 !== r && this.baseTexture.setResolution(r), r
        }, rt.prototype.parse = function(t) {
            this._batchIndex = 0, this._callback = t, this._frameKeys.length <= rt.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch()
        }, rt.prototype._processFrames = function(t) {
            for (var e = t, r = rt.BATCH_SIZE; e - t < r && e < this._frameKeys.length;) {
                var i = this._frameKeys[e],
                    n = this._frames[i],
                    o = n.frame;
                if (o) {
                    var s = null,
                        a = null,
                        h = !1 !== n.trimmed && n.sourceSize ? n.sourceSize : n.frame,
                        u = new c.j(0, 0, Math.floor(h.w) / this.resolution, Math.floor(h.h) / this.resolution);
                    s = n.rotated ? new c.j(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.h) / this.resolution, Math.floor(o.w) / this.resolution) : new c.j(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution), !1 !== n.trimmed && n.spriteSourceSize && (a = new c.j(Math.floor(n.spriteSourceSize.x) / this.resolution, Math.floor(n.spriteSourceSize.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution)), this.textures[i] = new l.E(this.baseTexture, s, u, a, n.rotated ? 2 : 0, n.anchor), l.E.addToCache(this.textures[i], i)
                }
                e++
            }
        }, rt.prototype._processAnimations = function() {
            var t = this.data.animations || {};
            for (var e in t) {
                this.animations[e] = [];
                for (var r = 0; r < t[e].length; r++) {
                    var i = t[e][r];
                    this.animations[e].push(this.textures[i])
                }
            }
        }, rt.prototype._parseComplete = function() {
            var t = this._callback;
            this._callback = null, this._batchIndex = 0, t.call(this, this.textures)
        }, rt.prototype._nextBatch = function() {
            var t = this;
            this._processFrames(this._batchIndex * rt.BATCH_SIZE), this._batchIndex++, setTimeout((function() {
                t._batchIndex * rt.BATCH_SIZE < t._frameKeys.length ? t._nextBatch() : (t._processAnimations(), t._parseComplete())
            }), 0)
        }, rt.prototype.destroy = function(t) {
            for (var e in void 0 === t && (t = !1), this.textures) this.textures[e].destroy();
            this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && this.baseTexture.destroy(), this.baseTexture = null
        }, Object.defineProperties(rt, it);
        var nt = function() {};
        nt.use = function(t, e) {
            var r = t.name + "_image";
            if (t.data && t.type === tt.TYPE.JSON && t.data.frames && !this.resources[r]) {
                var i = {
                        crossOrigin: t.crossOrigin,
                        metadata: t.metadata.imageMetadata,
                        parentResource: t
                    },
                    n = nt.getResourcePath(t, this.baseUrl);
                this.add(r, n, i, (function(r) {
                    if (r.error) e(r.error);
                    else {
                        var i = new rt(r.texture.baseTexture, t.data, t.url);
                        i.parse((function() {
                            t.spritesheet = i, t.textures = i.textures, e()
                        }))
                    }
                }))
            } else e()
        }, nt.getResourcePath = function(t, e) {
            return t.isDataUrl ? t.data.meta.image : s.url.resolve(t.url.replace(e, ""), t.data.meta.image)
        };
        var ot = r(52),
            st = r(4),
            at = r(13),
            ht = function(t) {
                function e(e, r) {
                    var i = this;
                    void 0 === r && (r = {}), t.call(this), this._textWidth = 0, this._textHeight = 0, this._glyphs = [], this._font = {
                        tint: void 0 !== r.tint ? r.tint : 16777215,
                        align: r.align || "left",
                        name: null,
                        size: 0
                    }, this.font = r.font, this._text = e, this._maxWidth = 0, this._maxLineHeight = 0, this._letterSpacing = 0, this._anchor = new c.e((function() {
                        i.dirty = !0
                    }), this, 0, 0), this.dirty = !1, this.roundPixels = st.b.ROUND_PIXELS, this.updateText()
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    tint: {
                        configurable: !0
                    },
                    align: {
                        configurable: !0
                    },
                    anchor: {
                        configurable: !0
                    },
                    font: {
                        configurable: !0
                    },
                    text: {
                        configurable: !0
                    },
                    maxWidth: {
                        configurable: !0
                    },
                    maxLineHeight: {
                        configurable: !0
                    },
                    textWidth: {
                        configurable: !0
                    },
                    letterSpacing: {
                        configurable: !0
                    },
                    textHeight: {
                        configurable: !0
                    }
                };
                return e.prototype.updateText = function() {
                    for (var t = e.fonts[this._font.name], r = this._font.size / t.size, i = new c.g, n = [], o = [], a = this._text.replace(/(?:\r\n|\r)/g, "\n") || " ", h = a.length, u = this._maxWidth * t.size / this._font.size, l = null, d = 0, p = 0, f = 0, m = -1, g = 0, v = 0, y = 0, x = 0; x < h; x++) {
                        var _ = a.charCodeAt(x),
                            b = a.charAt(x);
                        if (/(?:\s)/.test(b) && (m = x, g = d), "\r" !== b && "\n" !== b) {
                            var T = t.chars[_];
                            T && (l && T.kerning[l] && (i.x += T.kerning[l]), n.push({
                                texture: T.texture,
                                line: f,
                                charCode: _,
                                position: new c.g(i.x + T.xOffset + this._letterSpacing / 2, i.y + T.yOffset)
                            }), i.x += T.xAdvance + this._letterSpacing, d = i.x, y = Math.max(y, T.yOffset + T.texture.height), l = _, -1 !== m && u > 0 && i.x > u && (++v, Object(s.removeItems)(n, 1 + m - v, 1 + x - m), x = m, m = -1, o.push(g), p = Math.max(p, g), f++, i.x = 0, i.y += t.lineHeight, l = null))
                        } else o.push(d), p = Math.max(p, d), ++f, ++v, i.x = 0, i.y += t.lineHeight, l = null
                    }
                    var w = a.charAt(a.length - 1);
                    "\r" !== w && "\n" !== w && (/(?:\s)/.test(w) && (d = g), o.push(d), p = Math.max(p, d));
                    for (var E = [], I = 0; I <= f; I++) {
                        var S = 0;
                        "right" === this._font.align ? S = p - o[I] : "center" === this._font.align && (S = (p - o[I]) / 2), E.push(S)
                    }
                    for (var P = n.length, A = this.tint, M = 0; M < P; M++) {
                        var C = this._glyphs[M];
                        C ? C.texture = n[M].texture : ((C = new at.a(n[M].texture)).roundPixels = this.roundPixels, this._glyphs.push(C)), C.position.x = (n[M].position.x + E[n[M].line]) * r, C.position.y = n[M].position.y * r, C.scale.x = C.scale.y = r, C.tint = A, C.parent || this.addChild(C)
                    }
                    for (var O = P; O < this._glyphs.length; ++O) this.removeChild(this._glyphs[O]);
                    if (this._textWidth = p * r, this._textHeight = (i.y + t.lineHeight) * r, 0 !== this.anchor.x || 0 !== this.anchor.y)
                        for (var R = 0; R < P; R++) this._glyphs[R].x -= this._textWidth * this.anchor.x, this._glyphs[R].y -= this._textHeight * this.anchor.y;
                    this._maxLineHeight = y * r
                }, e.prototype.updateTransform = function() {
                    this.validate(), this.containerUpdateTransform()
                }, e.prototype.getLocalBounds = function() {
                    return this.validate(), t.prototype.getLocalBounds.call(this)
                }, e.prototype.validate = function() {
                    this.dirty && (this.updateText(), this.dirty = !1)
                }, r.tint.get = function() {
                    return this._font.tint
                }, r.tint.set = function(t) {
                    this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215, this.dirty = !0
                }, r.align.get = function() {
                    return this._font.align
                }, r.align.set = function(t) {
                    this._font.align = t || "left", this.dirty = !0
                }, r.anchor.get = function() {
                    return this._anchor
                }, r.anchor.set = function(t) {
                    "number" == typeof t ? this._anchor.set(t) : this._anchor.copyFrom(t)
                }, r.font.get = function() {
                    return this._font
                }, r.font.set = function(t) {
                    t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), this._font.size = t.length >= 2 ? parseInt(t[0], 10) : e.fonts[this._font.name].size) : (this._font.name = t.name, this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0)
                }, r.text.get = function() {
                    return this._text
                }, r.text.set = function(t) {
                    t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0)
                }, r.maxWidth.get = function() {
                    return this._maxWidth
                }, r.maxWidth.set = function(t) {
                    this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0)
                }, r.maxLineHeight.get = function() {
                    return this.validate(), this._maxLineHeight
                }, r.textWidth.get = function() {
                    return this.validate(), this._textWidth
                }, r.letterSpacing.get = function() {
                    return this._letterSpacing
                }, r.letterSpacing.set = function(t) {
                    this._letterSpacing !== t && (this._letterSpacing = t, this.dirty = !0)
                }, r.textHeight.get = function() {
                    return this.validate(), this._textHeight
                }, e.registerFont = function(t, r) {
                    var i = {},
                        n = t.getElementsByTagName("info")[0],
                        o = t.getElementsByTagName("common")[0],
                        a = t.getElementsByTagName("page"),
                        h = Object(s.getResolutionOfUrl)(a[0].getAttribute("file"), st.b.RESOLUTION),
                        u = {};
                    i.font = n.getAttribute("face"), i.size = parseInt(n.getAttribute("size"), 10), i.lineHeight = parseInt(o.getAttribute("lineHeight"), 10) / h, i.chars = {}, r instanceof l.E && (r = [r]);
                    for (var d = 0; d < a.length; d++) {
                        var p = a[d].getAttribute("id"),
                            f = a[d].getAttribute("file");
                        u[p] = r instanceof Array ? r[d] : r[f]
                    }
                    for (var m = t.getElementsByTagName("char"), g = 0; g < m.length; g++) {
                        var v = m[g],
                            y = parseInt(v.getAttribute("id"), 10),
                            x = v.getAttribute("page") || 0,
                            _ = new c.j(parseInt(v.getAttribute("x"), 10) / h + u[x].frame.x / h, parseInt(v.getAttribute("y"), 10) / h + u[x].frame.y / h, parseInt(v.getAttribute("width"), 10) / h, parseInt(v.getAttribute("height"), 10) / h);
                        i.chars[y] = {
                            xOffset: parseInt(v.getAttribute("xoffset"), 10) / h,
                            yOffset: parseInt(v.getAttribute("yoffset"), 10) / h,
                            xAdvance: parseInt(v.getAttribute("xadvance"), 10) / h,
                            kerning: {},
                            texture: new l.E(u[x].baseTexture, _),
                            page: x
                        }
                    }
                    for (var b = t.getElementsByTagName("kerning"), T = 0; T < b.length; T++) {
                        var w = b[T],
                            E = parseInt(w.getAttribute("first"), 10) / h,
                            I = parseInt(w.getAttribute("second"), 10) / h,
                            S = parseInt(w.getAttribute("amount"), 10) / h;
                        i.chars[I] && (i.chars[I].kerning[E] = S)
                    }
                    return e.fonts[i.font] = i, i
                }, Object.defineProperties(e.prototype, r), e
            }(a.b);
        ht.fonts = {};
        var ut = function() {};
        ut.parse = function(t, e) {
            t.bitmapFont = ht.registerFont(t.data, e)
        }, ut.add = function() {
            tt.setExtensionXhrType("fnt", tt.XHR_RESPONSE_TYPE.DOCUMENT)
        }, ut.dirname = function(t) {
            var e = t.replace(/\/$/, "").replace(/\/[^\/]*$/, "");
            return e === t ? "." : "" === e ? "/" : e
        }, ut.use = function(t, e) {
            if (t.data && t.type === tt.TYPE.XML)
                if (0 !== t.data.getElementsByTagName("page").length && 0 !== t.data.getElementsByTagName("info").length && null !== t.data.getElementsByTagName("info")[0].getAttribute("face")) {
                    var r = t.isDataUrl ? "" : ut.dirname(t.url);
                    t.isDataUrl && ("." === r && (r = ""), this.baseUrl && r && "/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (r += "/")), (r = r.replace(this.baseUrl, "")) && "/" !== r.charAt(r.length - 1) && (r += "/");
                    for (var i = t.data.getElementsByTagName("page"), n = {}, o = function(r) {
                            n[r.metadata.pageFile] = r.texture, Object.keys(n).length === i.length && (ut.parse(t, n), e())
                        }, s = 0; s < i.length; ++s) {
                        var a = i[s].getAttribute("file"),
                            h = r + a,
                            u = !1;
                        for (var l in this.resources) {
                            var c = this.resources[l];
                            if (c.url === h) {
                                c.metadata.pageFile = a, c.texture ? o(c) : c.onAfterMiddleware.add(o), u = !0;
                                break
                            }
                        }
                        if (!u) {
                            var d = {
                                crossOrigin: t.crossOrigin,
                                loadType: tt.LOAD_TYPE.IMAGE,
                                metadata: Object.assign({
                                    pageFile: a
                                }, t.metadata.imageMetadata),
                                parentResource: t
                            };
                            this.add(h, d, o)
                        }
                    }
                } else e();
            else e()
        };
        /*!
         * @pixi/filter-alpha - v5.2.0
         * Compiled Wed, 06 Nov 2019 02:32:43 UTC
         *
         * @pixi/filter-alpha is licensed under the MIT License.
         * http://www.opensource.org/licenses/mit-license
         */
        var lt = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n",
            ct = function(t) {
                function e(e) {
                    void 0 === e && (e = 1), t.call(this, l.M, lt, {
                        uAlpha: 1
                    }), this.alpha = e
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    alpha: {
                        configurable: !0
                    }
                };
                return r.alpha.get = function() {
                    return this.uniforms.uAlpha
                }, r.alpha.set = function(t) {
                    this.uniforms.uAlpha = t
                }, Object.defineProperties(e.prototype, r), e
            }(l.n),
            dt = "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }";
        var pt = {
                5: [.153388, .221461, .250301],
                7: [.071303, .131514, .189879, .214607],
                9: [.028532, .067234, .124009, .179044, .20236],
                11: [.0093, .028002, .065984, .121703, .175713, .198596],
                13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
                15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
            },
            ft = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n");
        var mt = function(t) {
                function e(e, r, i, n, o) {
                    var s = function(t, e) {
                            var r, i = Math.ceil(t / 2),
                                n = dt,
                                o = "";
                            r = e ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
                            for (var s = 0; s < t; s++) {
                                var a = r.replace("%index%", s);
                                o += a = a.replace("%sampleIndex%", s - (i - 1) + ".0"), o += "\n"
                            }
                            return n = (n = n.replace("%blur%", o)).replace("%size%", t)
                        }(o = o || 5, e),
                        a = function(t) {
                            for (var e, r = pt[t], i = r.length, n = ft, o = "", s = 0; s < t; s++) {
                                var a = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", s);
                                e = s, s >= i && (e = t - s - 1), o += a = a.replace("%value%", r[e]), o += "\n"
                            }
                            return n = (n = n.replace("%blur%", o)).replace("%size%", t)
                        }(o);
                    t.call(this, s, a), this.horizontal = e, this.resolution = n || st.b.RESOLUTION, this._quality = 0, this.quality = i || 4, this.blur = r || 8
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    blur: {
                        configurable: !0
                    },
                    quality: {
                        configurable: !0
                    }
                };
                return e.prototype.apply = function(t, e, r, i) {
                    if (r ? this.horizontal ? this.uniforms.strength = 1 / r.width * (r.width / e.width) : this.uniforms.strength = 1 / r.height * (r.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, r, i);
                    else {
                        var n = t.getFilterTexture(),
                            o = t.renderer,
                            s = e,
                            a = n;
                        this.state.blend = !1, t.applyFilter(this, s, a, !1);
                        for (var h = 1; h < this.passes - 1; h++) {
                            o.renderTexture.bind(s, s.filterFrame), this.uniforms.uSampler = a;
                            var u = a;
                            a = s, s = u, o.shader.bind(this), o.geometry.draw(5)
                        }
                        this.state.blend = !0, t.applyFilter(this, a, r, i), t.returnFilterTexture(n)
                    }
                }, r.blur.get = function() {
                    return this.strength
                }, r.blur.set = function(t) {
                    this.padding = 1 + 2 * Math.abs(t), this.strength = t
                }, r.quality.get = function() {
                    return this._quality
                }, r.quality.set = function(t) {
                    this._quality = t, this.passes = t
                }, Object.defineProperties(e.prototype, r), e
            }(l.n),
            gt = function(t) {
                function e(e, r, i, n) {
                    t.call(this), this.blurXFilter = new mt(!0, e, r, i, n), this.blurYFilter = new mt(!1, e, r, i, n), this.resolution = i || st.b.RESOLUTION, this.quality = r || 4, this.blur = e || 8, this.repeatEdgePixels = !1
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    blur: {
                        configurable: !0
                    },
                    quality: {
                        configurable: !0
                    },
                    blurX: {
                        configurable: !0
                    },
                    blurY: {
                        configurable: !0
                    },
                    blendMode: {
                        configurable: !0
                    },
                    repeatEdgePixels: {
                        configurable: !0
                    }
                };
                return e.prototype.apply = function(t, e, r, i) {
                    var n = Math.abs(this.blurXFilter.strength),
                        o = Math.abs(this.blurYFilter.strength);
                    if (n && o) {
                        var s = t.getFilterTexture();
                        this.blurXFilter.apply(t, e, s, !0), this.blurYFilter.apply(t, s, r, i), t.returnFilterTexture(s)
                    } else o ? this.blurYFilter.apply(t, e, r, i) : this.blurXFilter.apply(t, e, r, i)
                }, e.prototype.updatePadding = function() {
                    this._repeatEdgePixels ? this.padding = 0 : this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
                }, r.blur.get = function() {
                    return this.blurXFilter.blur
                }, r.blur.set = function(t) {
                    this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding()
                }, r.quality.get = function() {
                    return this.blurXFilter.quality
                }, r.quality.set = function(t) {
                    this.blurXFilter.quality = this.blurYFilter.quality = t
                }, r.blurX.get = function() {
                    return this.blurXFilter.blur
                }, r.blurX.set = function(t) {
                    this.blurXFilter.blur = t, this.updatePadding()
                }, r.blurY.get = function() {
                    return this.blurYFilter.blur
                }, r.blurY.set = function(t) {
                    this.blurYFilter.blur = t, this.updatePadding()
                }, r.blendMode.get = function() {
                    return this.blurYFilter.blendMode
                }, r.blendMode.set = function(t) {
                    this.blurYFilter.blendMode = t
                }, r.repeatEdgePixels.get = function() {
                    return this._repeatEdgePixels
                }, r.repeatEdgePixels.set = function(t) {
                    this._repeatEdgePixels = t, this.updatePadding()
                }, Object.defineProperties(e.prototype, r), e
            }(l.n),
            vt = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n",
            yt = function(t) {
                function e() {
                    var e = {
                        m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
                        uAlpha: 1
                    };
                    t.call(this, l.L, vt, e), this.alpha = 1
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    matrix: {
                        configurable: !0
                    },
                    alpha: {
                        configurable: !0
                    }
                };
                return e.prototype._loadMatrix = function(t, e) {
                    void 0 === e && (e = !1);
                    var r = t;
                    e && (this._multiply(r, this.uniforms.m, t), r = this._colorMatrix(r)), this.uniforms.m = r
                }, e.prototype._multiply = function(t, e, r) {
                    return t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15], t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16], t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17], t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18], t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4], t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15], t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16], t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17], t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18], t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9], t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15], t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16], t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17], t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18], t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19] + e[14], t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15], t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16], t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17], t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18], t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19] + e[19], t
                }, e.prototype._colorMatrix = function(t) {
                    var e = new Float32Array(t);
                    return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
                }, e.prototype.brightness = function(t, e) {
                    var r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(r, e)
                }, e.prototype.greyscale = function(t, e) {
                    var r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(r, e)
                }, e.prototype.blackAndWhite = function(t) {
                    this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], t)
                }, e.prototype.hue = function(t, e) {
                    t = (t || 0) / 180 * Math.PI;
                    var r = Math.cos(t),
                        i = Math.sin(t),
                        n = 1 / 3,
                        o = (0, Math.sqrt)(n),
                        s = [r + (1 - r) * n, n * (1 - r) - o * i, n * (1 - r) + o * i, 0, 0, n * (1 - r) + o * i, r + n * (1 - r), n * (1 - r) - o * i, 0, 0, n * (1 - r) - o * i, n * (1 - r) + o * i, r + n * (1 - r), 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(s, e)
                }, e.prototype.contrast = function(t, e) {
                    var r = (t || 0) + 1,
                        i = -.5 * (r - 1),
                        n = [r, 0, 0, 0, i, 0, r, 0, 0, i, 0, 0, r, 0, i, 0, 0, 0, 1, 0];
                    this._loadMatrix(n, e)
                }, e.prototype.saturate = function(t, e) {
                    void 0 === t && (t = 0);
                    var r = 2 * t / 3 + 1,
                        i = -.5 * (r - 1),
                        n = [r, i, i, 0, 0, i, r, i, 0, 0, i, i, r, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(n, e)
                }, e.prototype.desaturate = function() {
                    this.saturate(-1)
                }, e.prototype.negative = function(t) {
                    this._loadMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0], t)
                }, e.prototype.sepia = function(t) {
                    this._loadMatrix([.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0], t)
                }, e.prototype.technicolor = function(t) {
                    this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0], t)
                }, e.prototype.polaroid = function(t) {
                    this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0], t)
                }, e.prototype.toBGR = function(t) {
                    this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], t)
                }, e.prototype.kodachrome = function(t) {
                    this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0], t)
                }, e.prototype.browni = function(t) {
                    this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0], t)
                }, e.prototype.vintage = function(t) {
                    this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0], t)
                }, e.prototype.colorTone = function(t, e, r, i, n) {
                    var o = ((r = r || 16770432) >> 16 & 255) / 255,
                        s = (r >> 8 & 255) / 255,
                        a = (255 & r) / 255,
                        h = ((i = i || 3375104) >> 16 & 255) / 255,
                        u = (i >> 8 & 255) / 255,
                        l = (255 & i) / 255,
                        c = [.3, .59, .11, 0, 0, o, s, a, t = t || .2, 0, h, u, l, e = e || .15, 0, o - h, s - u, a - l, 0, 0];
                    this._loadMatrix(c, n)
                }, e.prototype.night = function(t, e) {
                    var r = [-2 * (t = t || .1), -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(r, e)
                }, e.prototype.predator = function(t, e) {
                    var r = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
                    this._loadMatrix(r, e)
                }, e.prototype.lsd = function(t) {
                    this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], t)
                }, e.prototype.reset = function() {
                    this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], !1)
                }, r.matrix.get = function() {
                    return this.uniforms.m
                }, r.matrix.set = function(t) {
                    this.uniforms.m = t
                }, r.alpha.get = function() {
                    return this.uniforms.uAlpha
                }, r.alpha.set = function(t) {
                    this.uniforms.uAlpha = t
                }, Object.defineProperties(e.prototype, r), e
            }(l.n);
        yt.prototype.grayscale = yt.prototype.greyscale;
        /*!
         * @pixi/filter-displacement - v5.2.0
         * Compiled Wed, 06 Nov 2019 02:32:43 UTC
         *
         * @pixi/filter-displacement is licensed under the MIT License.
         * http://www.opensource.org/licenses/mit-license
         */
        var xt = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n",
            _t = "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n",
            bt = function(t) {
                function e(e, r) {
                    var i = new c.d;
                    e.renderable = !1, t.call(this, xt, _t, {
                        mapSampler: e._texture,
                        filterMatrix: i,
                        scale: {
                            x: 1,
                            y: 1
                        },
                        rotation: new Float32Array([1, 0, 0, 1])
                    }), this.maskSprite = e, this.maskMatrix = i, null == r && (r = 20), this.scale = new c.g(r, r)
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    map: {
                        configurable: !0
                    }
                };
                return e.prototype.apply = function(t, e, r, i) {
                    this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
                    var n = this.maskSprite.transform.worldTransform,
                        o = Math.sqrt(n.a * n.a + n.b * n.b),
                        s = Math.sqrt(n.c * n.c + n.d * n.d);
                    0 !== o && 0 !== s && (this.uniforms.rotation[0] = n.a / o, this.uniforms.rotation[1] = n.b / o, this.uniforms.rotation[2] = n.c / s, this.uniforms.rotation[3] = n.d / s), t.applyFilter(this, e, r, i)
                }, r.map.get = function() {
                    return this.uniforms.mapSampler
                }, r.map.set = function(t) {
                    this.uniforms.mapSampler = t
                }, Object.defineProperties(e.prototype, r), e
            }(l.n),
            Tt = "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputPixel;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n",
            wt = 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputPixel;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n',
            Et = function(t) {
                function e() {
                    t.call(this, Tt, wt)
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
            }(l.n),
            It = "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n",
            St = function(t) {
                function e(e, r) {
                    void 0 === e && (e = .5), void 0 === r && (r = Math.random()), t.call(this, l.L, It, {
                        uNoise: 0,
                        uSeed: 0
                    }), this.noise = e, this.seed = r
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    noise: {
                        configurable: !0
                    },
                    seed: {
                        configurable: !0
                    }
                };
                return r.noise.get = function() {
                    return this.uniforms.uNoise
                }, r.noise.set = function(t) {
                    this.uniforms.uNoise = t
                }, r.seed.get = function() {
                    return this.uniforms.uSeed
                }, r.seed.set = function(t) {
                    this.uniforms.uSeed = t
                }, Object.defineProperties(e.prototype, r), e
            }(l.n),
            Pt = new c.d;
        a.c.prototype._cacheAsBitmap = !1, a.c.prototype._cacheData = !1;
        var At = function() {
            this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.sprite = null
        };
        Object.defineProperties(a.c.prototype, {
                cacheAsBitmap: {
                    get: function() {
                        return this._cacheAsBitmap
                    },
                    set: function(t) {
                        var e;
                        this._cacheAsBitmap !== t && (this._cacheAsBitmap = t, t ? (this._cacheData || (this._cacheData = new At), (e = this._cacheData).originalRender = this.render, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this.calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : ((e = this._cacheData).sprite && this._destroyCachedDisplayObject(), this.render = e.originalRender, this.renderCanvas = e.originalRenderCanvas, this.calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea))
                    }
                }
            }), a.c.prototype._renderCached = function(t) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(t))
            }, a.c.prototype._initCachedDisplayObject = function(t) {
                if (!this._cacheData || !this._cacheData.sprite) {
                    var e = this.alpha;
                    this.alpha = 1, t.batch.flush();
                    var r = this.getLocalBounds().clone();
                    if (this.filters) {
                        var i = this.filters[0].padding;
                        r.pad(i)
                    }
                    r.ceil(st.b.RESOLUTION);
                    var n = t.renderTexture.current,
                        o = t.renderTexture.sourceFrame,
                        a = t.projection.transform,
                        h = l.x.create(r.width, r.height),
                        u = "cacheAsBitmap_" + Object(s.uid)();
                    this._cacheData.textureCacheId = u, l.e.addToCache(h.baseTexture, u), l.E.addToCache(h, u);
                    var c = Pt;
                    c.tx = -r.x, c.ty = -r.y, this.transform.worldTransform.identity(), this.render = this._cacheData.originalRender, t.render(this, h, !0, c, !0), t.projection.transform = a, t.renderTexture.bind(n, o), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null;
                    var d = new at.a(h);
                    d.transform.worldTransform = this.transform.worldTransform, d.anchor.x = -r.x / r.width, d.anchor.y = -r.y / r.height, d.alpha = e, d._bounds = this._bounds, this._cacheData.sprite = d, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = d.containsPoint.bind(d)
                }
            }, a.c.prototype._renderCachedCanvas = function(t) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t))
            }, a.c.prototype._initCachedDisplayObjectCanvas = function(t) {
                if (!this._cacheData || !this._cacheData.sprite) {
                    var e = this.getLocalBounds(),
                        r = this.alpha;
                    this.alpha = 1;
                    var i = t.context;
                    e.ceil(st.b.RESOLUTION);
                    var n = l.x.create(e.width, e.height),
                        o = "cacheAsBitmap_" + Object(s.uid)();
                    this._cacheData.textureCacheId = o, l.e.addToCache(n.baseTexture, o), l.E.addToCache(n, o);
                    var a = Pt;
                    this.transform.localTransform.copyTo(a), a.invert(), a.tx -= e.x, a.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, n, !0, a, !1), t.context = i, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null;
                    var h = new at.a(n);
                    h.transform.worldTransform = this.transform.worldTransform, h.anchor.x = -e.x / e.width, h.anchor.y = -e.y / e.height, h.alpha = r, h._bounds = this._bounds, this._cacheData.sprite = h, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = h.containsPoint.bind(h)
                }
            }, a.c.prototype._calculateCachedBounds = function() {
                this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._lastBoundsID = this._boundsID
            }, a.c.prototype._getCachedLocalBounds = function() {
                return this._cacheData.sprite.getLocalBounds()
            }, a.c.prototype._destroyCachedDisplayObject = function() {
                this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, l.e.removeFromCache(this._cacheData.textureCacheId), l.E.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null
            }, a.c.prototype._cacheAsBitmapDestroy = function(t) {
                this.cacheAsBitmap = !1, this.destroy(t)
            },
            /*!
             * @pixi/mixin-get-child-by-name - v5.2.0
             * Compiled Wed, 06 Nov 2019 02:32:43 UTC
             *
             * @pixi/mixin-get-child-by-name is licensed under the MIT License.
             * http://www.opensource.org/licenses/mit-license
             */
            a.c.prototype.name = null, a.b.prototype.getChildByName = function(t) {
                for (var e = 0; e < this.children.length; e++)
                    if (this.children[e].name === t) return this.children[e];
                return null
            },
            /*!
             * @pixi/mixin-get-global-position - v5.2.0
             * Compiled Wed, 06 Nov 2019 02:32:43 UTC
             *
             * @pixi/mixin-get-global-position is licensed under the MIT License.
             * http://www.opensource.org/licenses/mit-license
             */
            a.c.prototype.getGlobalPosition = function(t, e) {
                return void 0 === t && (t = new c.g), void 0 === e && (e = !1), this.parent ? this.parent.toGlobal(this.position, t, e) : (t.x = this.position.x, t.y = this.position.y), t
            };
        var Mt = r(1),
            Ct = r(36),
            Ot = r(16),
            Rt = r(44),
            Dt = r(12),
            Ft = function(t) {
                function e(e, r) {
                    t.call(this, e[0] instanceof l.E ? e[0] : e[0].texture), this._textures = null, this._durations = null, this.textures = e, this._autoUpdate = !1 !== r, this.animationSpeed = 1, this.loop = !0, this.updateAnchor = !1, this.onComplete = null, this.onFrameChange = null, this.onLoop = null, this._currentTime = 0, this.playing = !1
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    totalFrames: {
                        configurable: !0
                    },
                    textures: {
                        configurable: !0
                    },
                    currentFrame: {
                        configurable: !0
                    }
                };
                return e.prototype.stop = function() {
                    this.playing && (this.playing = !1, this._autoUpdate && f.a.shared.remove(this.update, this))
                }, e.prototype.play = function() {
                    this.playing || (this.playing = !0, this._autoUpdate && f.a.shared.add(this.update, this, f.c.HIGH))
                }, e.prototype.gotoAndStop = function(t) {
                    this.stop();
                    var e = this.currentFrame;
                    this._currentTime = t, e !== this.currentFrame && this.updateTexture()
                }, e.prototype.gotoAndPlay = function(t) {
                    var e = this.currentFrame;
                    this._currentTime = t, e !== this.currentFrame && this.updateTexture(), this.play()
                }, e.prototype.update = function(t) {
                    var e = this.animationSpeed * t,
                        r = this.currentFrame;
                    if (null !== this._durations) {
                        var i = this._currentTime % 1 * this._durations[this.currentFrame];
                        for (i += e / 60 * 1e3; i < 0;) this._currentTime--, i += this._durations[this.currentFrame];
                        var n = Math.sign(this.animationSpeed * t);
                        for (this._currentTime = Math.floor(this._currentTime); i >= this._durations[this.currentFrame];) i -= this._durations[this.currentFrame] * n, this._currentTime += n;
                        this._currentTime += i / this._durations[this.currentFrame]
                    } else this._currentTime += e;
                    this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : r !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < r ? this.onLoop() : this.animationSpeed < 0 && this.currentFrame > r && this.onLoop()), this.updateTexture())
                }, e.prototype.updateTexture = function() {
                    this._texture = this._textures[this.currentFrame], this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame)
                }, e.prototype.destroy = function(e) {
                    this.stop(), t.prototype.destroy.call(this, e), this.onComplete = null, this.onFrameChange = null, this.onLoop = null
                }, e.fromFrames = function(t) {
                    for (var r = [], i = 0; i < t.length; ++i) r.push(l.E.from(t[i]));
                    return new e(r)
                }, e.fromImages = function(t) {
                    for (var r = [], i = 0; i < t.length; ++i) r.push(l.E.from(t[i]));
                    return new e(r)
                }, r.totalFrames.get = function() {
                    return this._textures.length
                }, r.textures.get = function() {
                    return this._textures
                }, r.textures.set = function(t) {
                    if (t[0] instanceof l.E) this._textures = t, this._durations = null;
                    else {
                        this._textures = [], this._durations = [];
                        for (var e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time)
                    }
                    this.gotoAndStop(0), this.updateTexture()
                }, r.currentFrame.get = function() {
                    var t = Math.floor(this._currentTime) % this._textures.length;
                    return t < 0 && (t += this._textures.length), t
                }, Object.defineProperties(e.prototype, r), e
            }(at.a),
            Lt = r(28);
        r.d(e, "VERSION", (function() {
            return Bt
        })), r.d(e, "filters", (function() {
            return Ut
        })), r.d(e, "useDeprecated", (function() {
            return kt
        })), r.d(e, "accessibility", (function() {
            return i
        })), r.d(e, "extract", (function() {
            return n
        })), r.d(e, "interaction", (function() {
            return o
        })), r.d(e, "prepare", (function() {
            return I
        })), r.d(e, "utils", (function() {
            return s
        })), r.d(e, "Application", (function() {
            return S
        })), r.d(e, "AbstractBatchRenderer", (function() {
            return l.a
        })), r.d(e, "AbstractRenderer", (function() {
            return l.b
        })), r.d(e, "Attribute", (function() {
            return l.c
        })), r.d(e, "BaseRenderTexture", (function() {
            return l.d
        })), r.d(e, "BaseTexture", (function() {
            return l.e
        })), r.d(e, "BatchDrawCall", (function() {
            return l.f
        })), r.d(e, "BatchGeometry", (function() {
            return l.g
        })), r.d(e, "BatchPluginFactory", (function() {
            return l.h
        })), r.d(e, "BatchRenderer", (function() {
            return l.i
        })), r.d(e, "BatchShaderGenerator", (function() {
            return l.j
        })), r.d(e, "BatchTextureArray", (function() {
            return l.k
        })), r.d(e, "Buffer", (function() {
            return l.l
        })), r.d(e, "CubeTexture", (function() {
            return l.m
        })), r.d(e, "Filter", (function() {
            return l.n
        })), r.d(e, "Framebuffer", (function() {
            return l.o
        })), r.d(e, "GLProgram", (function() {
            return l.p
        })), r.d(e, "GLTexture", (function() {
            return l.q
        })), r.d(e, "Geometry", (function() {
            return l.r
        })), r.d(e, "MaskData", (function() {
            return l.s
        })), r.d(e, "ObjectRenderer", (function() {
            return l.t
        })), r.d(e, "Program", (function() {
            return l.u
        })), r.d(e, "Quad", (function() {
            return l.v
        })), r.d(e, "QuadUv", (function() {
            return l.w
        })), r.d(e, "RenderTexture", (function() {
            return l.x
        })), r.d(e, "RenderTexturePool", (function() {
            return l.y
        })), r.d(e, "Renderer", (function() {
            return l.z
        })), r.d(e, "Shader", (function() {
            return l.A
        })), r.d(e, "SpriteMaskFilter", (function() {
            return l.B
        })), r.d(e, "State", (function() {
            return l.C
        })), r.d(e, "System", (function() {
            return l.D
        })), r.d(e, "Texture", (function() {
            return l.E
        })), r.d(e, "TextureMatrix", (function() {
            return l.F
        })), r.d(e, "TextureUvs", (function() {
            return l.G
        })), r.d(e, "UniformGroup", (function() {
            return l.H
        })), r.d(e, "ViewableBuffer", (function() {
            return l.I
        })), r.d(e, "autoDetectRenderer", (function() {
            return l.J
        })), r.d(e, "checkMaxIfStatementsInShader", (function() {
            return l.K
        })), r.d(e, "defaultFilterVertex", (function() {
            return l.L
        })), r.d(e, "defaultVertex", (function() {
            return l.M
        })), r.d(e, "resources", (function() {
            return l.N
        })), r.d(e, "systems", (function() {
            return l.O
        })), r.d(e, "AppLoaderPlugin", (function() {
            return $
        })), r.d(e, "Loader", (function() {
            return Q
        })), r.d(e, "LoaderResource", (function() {
            return tt
        })), r.d(e, "TextureLoader", (function() {
            return J
        })), r.d(e, "ParticleContainer", (function() {
            return et.a
        })), r.d(e, "ParticleRenderer", (function() {
            return et.b
        })), r.d(e, "Spritesheet", (function() {
            return rt
        })), r.d(e, "SpritesheetLoader", (function() {
            return nt
        })), r.d(e, "TilingSprite", (function() {
            return ot.a
        })), r.d(e, "TilingSpriteRenderer", (function() {
            return ot.b
        })), r.d(e, "BitmapFontLoader", (function() {
            return ut
        })), r.d(e, "BitmapText", (function() {
            return ht
        })), r.d(e, "Ticker", (function() {
            return f.a
        })), r.d(e, "TickerPlugin", (function() {
            return f.b
        })), r.d(e, "UPDATE_PRIORITY", (function() {
            return f.c
        })), r.d(e, "ALPHA_MODES", (function() {
            return Mt.a
        })), r.d(e, "BLEND_MODES", (function() {
            return Mt.b
        })), r.d(e, "DRAW_MODES", (function() {
            return Mt.c
        })), r.d(e, "ENV", (function() {
            return Mt.d
        })), r.d(e, "FORMATS", (function() {
            return Mt.e
        })), r.d(e, "GC_MODES", (function() {
            return Mt.f
        })), r.d(e, "MASK_TYPES", (function() {
            return Mt.g
        })), r.d(e, "MIPMAP_MODES", (function() {
            return Mt.h
        })), r.d(e, "PRECISION", (function() {
            return Mt.i
        })), r.d(e, "RENDERER_TYPE", (function() {
            return Mt.j
        })), r.d(e, "SCALE_MODES", (function() {
            return Mt.k
        })), r.d(e, "TARGETS", (function() {
            return Mt.l
        })), r.d(e, "TYPES", (function() {
            return Mt.m
        })), r.d(e, "WRAP_MODES", (function() {
            return Mt.n
        })), r.d(e, "Bounds", (function() {
            return a.a
        })), r.d(e, "Container", (function() {
            return a.b
        })), r.d(e, "DisplayObject", (function() {
            return a.c
        })), r.d(e, "FillStyle", (function() {
            return Ct.a
        })), r.d(e, "GRAPHICS_CURVES", (function() {
            return Ct.b
        })), r.d(e, "Graphics", (function() {
            return Ct.c
        })), r.d(e, "GraphicsData", (function() {
            return Ct.d
        })), r.d(e, "GraphicsGeometry", (function() {
            return Ct.e
        })), r.d(e, "LineStyle", (function() {
            return Ct.f
        })), r.d(e, "graphicsUtils", (function() {
            return Ct.g
        })), r.d(e, "Circle", (function() {
            return c.a
        })), r.d(e, "DEG_TO_RAD", (function() {
            return c.b
        })), r.d(e, "Ellipse", (function() {
            return c.c
        })), r.d(e, "Matrix", (function() {
            return c.d
        })), r.d(e, "ObservablePoint", (function() {
            return c.e
        })), r.d(e, "PI_2", (function() {
            return c.f
        })), r.d(e, "Point", (function() {
            return c.g
        })), r.d(e, "Polygon", (function() {
            return c.h
        })), r.d(e, "RAD_TO_DEG", (function() {
            return c.i
        })), r.d(e, "Rectangle", (function() {
            return c.j
        })), r.d(e, "RoundedRectangle", (function() {
            return c.k
        })), r.d(e, "SHAPES", (function() {
            return c.l
        })), r.d(e, "Transform", (function() {
            return c.m
        })), r.d(e, "groupD8", (function() {
            return c.n
        })), r.d(e, "Mesh", (function() {
            return Ot.a
        })), r.d(e, "MeshBatchUvs", (function() {
            return Ot.b
        })), r.d(e, "MeshGeometry", (function() {
            return Ot.c
        })), r.d(e, "MeshMaterial", (function() {
            return Ot.d
        })), r.d(e, "NineSlicePlane", (function() {
            return Rt.a
        })), r.d(e, "PlaneGeometry", (function() {
            return Rt.b
        })), r.d(e, "RopeGeometry", (function() {
            return Rt.c
        })), r.d(e, "SimpleMesh", (function() {
            return Rt.d
        })), r.d(e, "SimplePlane", (function() {
            return Rt.e
        })), r.d(e, "SimpleRope", (function() {
            return Rt.f
        })), r.d(e, "Runner", (function() {
            return Dt.a
        })), r.d(e, "Sprite", (function() {
            return at.a
        })), r.d(e, "AnimatedSprite", (function() {
            return Ft
        })), r.d(e, "TEXT_GRADIENT", (function() {
            return Lt.a
        })), r.d(e, "Text", (function() {
            return Lt.b
        })), r.d(e, "TextMetrics", (function() {
            return Lt.c
        })), r.d(e, "TextStyle", (function() {
            return Lt.d
        })), r.d(e, "isMobile", (function() {
            return st.a
        })), r.d(e, "settings", (function() {
            return st.b
        }));
        /*!
         * pixi.js - v5.2.0
         * Compiled Wed, 06 Nov 2019 02:32:43 UTC
         *
         * pixi.js is licensed under the MIT License.
         * http://www.opensource.org/licenses/mit-license
         */
        var Nt = "5.0.0";

        function kt() {
            var t = this;
            Object.defineProperties(t, {
                SVG_SIZE: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.utils.SVG_SIZE property has moved to PIXI.resources.SVGResource.SVG_SIZE"), t.SVGResource.SVG_SIZE
                    }
                },
                TransformStatic: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.TransformStatic class has been removed, use PIXI.Transform"), t.Transform
                    }
                },
                TransformBase: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.TransformBase class has been removed, use PIXI.Transform"), t.Transform
                    }
                },
                TRANSFORM_MODE: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.TRANSFORM_MODE property has been removed"), {
                            STATIC: 0,
                            DYNAMIC: 1
                        }
                    }
                },
                WebGLRenderer: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.WebGLRenderer class has moved to PIXI.Renderer"), t.Renderer
                    }
                },
                CanvasRenderTarget: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.CanvasRenderTarget class has moved to PIXI.utils.CanvasRenderTarget"), t.utils.CanvasRenderTarget
                    }
                },
                loader: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.loader instance has moved to PIXI.Loader.shared"), t.Loader.shared
                    }
                },
                FilterManager: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.FilterManager class has moved to PIXI.systems.FilterSystem"), t.systems.FilterSystem
                    }
                },
                CanvasTinter: {
                    get: function() {
                        return Object(s.deprecation)("5.2.0", "PIXI.CanvasTinter namespace has moved to PIXI.canvasUtils"), t.canvasUtils
                    }
                },
                GroupD8: {
                    get: function() {
                        return Object(s.deprecation)("5.2.0", "PIXI.GroupD8 namespace has moved to PIXI.groupD8"), t.groupD8
                    }
                }
            }), t.extras = {}, Object.defineProperties(t.extras, {
                TilingSprite: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.extras.TilingSprite class has moved to PIXI.TilingSprite"), t.TilingSprite
                    }
                },
                TilingSpriteRenderer: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.extras.TilingSpriteRenderer class has moved to PIXI.TilingSpriteRenderer"), t.TilingSpriteRenderer
                    }
                },
                AnimatedSprite: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.extras.AnimatedSprite class has moved to PIXI.AnimatedSprite"), t.AnimatedSprite
                    }
                },
                BitmapText: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.extras.BitmapText class has moved to PIXI.BitmapText"), t.BitmapText
                    }
                }
            }), Object.defineProperties(t.utils, {
                getSvgSize: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.utils.getSvgSize function has moved to PIXI.resources.SVGResource.getSize"), t.SVGResource.getSize
                    }
                }
            }), t.mesh = {}, Object.defineProperties(t.mesh, {
                Mesh: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.mesh.Mesh class has moved to PIXI.SimpleMesh"), t.SimpleMesh
                    }
                },
                NineSlicePlane: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.mesh.NineSlicePlane class has moved to PIXI.NineSlicePlane"), t.NineSlicePlane
                    }
                },
                Plane: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.mesh.Plane class has moved to PIXI.SimplePlane"), t.SimplePlane
                    }
                },
                Rope: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.mesh.Rope class has moved to PIXI.SimpleRope"), t.SimpleRope
                    }
                },
                RawMesh: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.mesh.RawMesh class has moved to PIXI.Mesh"), t.Mesh
                    }
                },
                CanvasMeshRenderer: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.mesh.CanvasMeshRenderer class has moved to PIXI.CanvasMeshRenderer"), t.CanvasMeshRenderer
                    }
                },
                MeshRenderer: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.mesh.MeshRenderer class has moved to PIXI.MeshRenderer"), t.MeshRenderer
                    }
                }
            }), t.particles = {}, Object.defineProperties(t.particles, {
                ParticleContainer: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.particles.ParticleContainer class has moved to PIXI.ParticleContainer"), t.ParticleContainer
                    }
                },
                ParticleRenderer: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.particles.ParticleRenderer class has moved to PIXI.ParticleRenderer"), t.ParticleRenderer
                    }
                }
            }), t.ticker = {}, Object.defineProperties(t.ticker, {
                Ticker: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.ticker.Ticker class has moved to PIXI.Ticker"), t.Ticker
                    }
                },
                shared: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.ticker.shared instance has moved to PIXI.Ticker.shared"), t.Ticker.shared
                    }
                }
            }), t.loaders = {}, Object.defineProperties(t.loaders, {
                Loader: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.loaders.Loader class has moved to PIXI.Loader"), t.Loader
                    }
                },
                Resource: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.loaders.Resource class has moved to PIXI.LoaderResource"), t.LoaderResource
                    }
                },
                bitmapFontParser: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.loaders.bitmapFontParser function has moved to PIXI.BitmapFontLoader.use"), t.BitmapFontLoader.use
                    }
                },
                parseBitmapFontData: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.loaders.parseBitmapFontData function has moved to PIXI.BitmapFontLoader.parse"), t.BitmapFontLoader.parse
                    }
                },
                spritesheetParser: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.loaders.spritesheetParser function has moved to PIXI.SpritesheetLoader.use"), t.SpritesheetLoader.use
                    }
                },
                getResourcePath: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.loaders.getResourcePath property has moved to PIXI.SpritesheetLoader.getResourcePath"), t.SpritesheetLoader.getResourcePath
                    }
                }
            }), t.Loader.addPixiMiddleware = function(e) {
                return Object(s.deprecation)(Nt, "PIXI.loaders.Loader.addPixiMiddleware function is deprecated, use PIXI.loaders.Loader.registerPlugin"), t.loaders.Loader.registerPlugin({
                    use: e()
                })
            }, Object.defineProperty(t.extract, "WebGLExtract", {
                get: function() {
                    return Object(s.deprecation)(Nt, "PIXI.extract.WebGLExtract method has moved to PIXI.extract.Extract"), t.extract.Extract
                }
            }), Object.defineProperty(t.prepare, "WebGLPrepare", {
                get: function() {
                    return Object(s.deprecation)(Nt, "PIXI.prepare.WebGLPrepare class has moved to PIXI.prepare.Prepare"), t.prepare.Prepare
                }
            }), t.Container.prototype._renderWebGL = function(t) {
                Object(s.deprecation)(Nt, "PIXI.Container._renderWebGL method has moved to PIXI.Container._render"), this._render(t)
            }, t.Container.prototype.renderWebGL = function(t) {
                Object(s.deprecation)(Nt, "PIXI.Container.renderWebGL method has moved to PIXI.Container.render"), this.render(t)
            }, t.DisplayObject.prototype.renderWebGL = function(t) {
                Object(s.deprecation)(Nt, "PIXI.DisplayObject.renderWebGL method has moved to PIXI.DisplayObject.render"), this.render(t)
            }, t.Container.prototype.renderAdvancedWebGL = function(t) {
                Object(s.deprecation)(Nt, "PIXI.Container.renderAdvancedWebGL method has moved to PIXI.Container.renderAdvanced"), this.renderAdvanced(t)
            }, Object.defineProperties(t.settings, {
                TRANSFORM_MODE: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.settings.TRANSFORM_MODE property has been removed"), 0
                    },
                    set: function() {
                        Object(s.deprecation)(Nt, "PIXI.settings.TRANSFORM_MODE property has been removed")
                    }
                }
            });
            var e = t.BaseTexture;
            e.prototype.loadSource = function(e) {
                Object(s.deprecation)(Nt, "PIXI.BaseTexture.loadSource method has been deprecated");
                var r = t.resources.autoDetectResource(e);
                r.internal = !0, this.setResource(r), this.update()
            };
            var r = !1;
            Object.defineProperties(e.prototype, {
                hasLoaded: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.BaseTexture.hasLoaded property has been removed, use PIXI.BaseTexture.valid"), this.valid
                    }
                },
                imageUrl: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url"), this.resource && this.resource.url
                    },
                    set: function(t) {
                        Object(s.deprecation)(Nt, "PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url"), this.resource && (this.resource.url = t)
                    }
                },
                source: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source`"), this.resource && this.resource.source
                    },
                    set: function(t) {
                        Object(s.deprecation)(Nt, "PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source` if you want to set HTMLCanvasElement. Otherwise, create new BaseTexture."), this.resource && (this.resource.source = t)
                    }
                },
                premultiplyAlpha: {
                    get: function() {
                        return Object(s.deprecation)("5.2.0", "PIXI.BaseTexture.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"), 0 !== this.alphaMode
                    },
                    set: function(t) {
                        Object(s.deprecation)("5.2.0", "PIXI.BaseTexture.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"), this.alphaMode = Number(t)
                    }
                },
                _id: {
                    get: function() {
                        return r || (Object(s.deprecation)("5.2.0", "PIXI.BaseTexture._id batch local field has been changed to `_batchLocation`"), r = !0), this._batchLocation
                    },
                    set: function(t) {
                        this._batchLocation = t
                    }
                }
            }), e.fromImage = function(t, r, i, n) {
                Object(s.deprecation)(Nt, "PIXI.BaseTexture.fromImage method has been replaced with PIXI.BaseTexture.from");
                var o = {
                    scale: n,
                    crossorigin: r
                };
                return e.from(t, {
                    scaleMode: i,
                    resourceOptions: o
                })
            }, e.fromCanvas = function(t, r) {
                return Object(s.deprecation)(Nt, "PIXI.BaseTexture.fromCanvas method has been replaced with PIXI.BaseTexture.from"), e.from(t, {
                    scaleMode: r
                })
            }, e.fromSVG = function(t, r, i, n) {
                Object(s.deprecation)(Nt, "PIXI.BaseTexture.fromSVG method has been replaced with PIXI.BaseTexture.from");
                var o = {
                    scale: n,
                    crossorigin: r
                };
                return e.from(t, {
                    scaleMode: i,
                    resourceOptions: o
                })
            }, Object.defineProperties(t.resources.ImageResource.prototype, {
                premultiplyAlpha: {
                    get: function() {
                        return Object(s.deprecation)("5.2.0", "PIXI.resources.ImageResource.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"), 0 !== this.alphaMode
                    },
                    set: function(t) {
                        Object(s.deprecation)("5.2.0", "PIXI.resources.ImageResource.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"), this.alphaMode = Number(t)
                    }
                }
            }), t.Point.prototype.copy = function(t) {
                return Object(s.deprecation)(Nt, "PIXI.Point.copy method has been replaced with PIXI.Point.copyFrom"), this.copyFrom(t)
            }, t.ObservablePoint.prototype.copy = function(t) {
                return Object(s.deprecation)(Nt, "PIXI.ObservablePoint.copy method has been replaced with PIXI.ObservablePoint.copyFrom"), this.copyFrom(t)
            }, t.Rectangle.prototype.copy = function(t) {
                return Object(s.deprecation)(Nt, "PIXI.Rectangle.copy method has been replaced with PIXI.Rectangle.copyFrom"), this.copyFrom(t)
            }, t.Matrix.prototype.copy = function(t) {
                return Object(s.deprecation)(Nt, "PIXI.Matrix.copy method has been replaced with PIXI.Matrix.copyTo"), this.copyTo(t)
            }, t.systems.StateSystem.prototype.setState = function(t) {
                return Object(s.deprecation)("v5.1.0", "StateSystem.setState has been renamed to StateSystem.set"), this.set(t)
            }, Object.assign(t.systems.FilterSystem.prototype, {
                getRenderTarget: function(t, e) {
                    return Object(s.deprecation)(Nt, "PIXI.FilterManager.getRenderTarget method has been replaced with PIXI.systems.FilterSystem#getFilterTexture"), this.getFilterTexture(e)
                },
                returnRenderTarget: function(t) {
                    Object(s.deprecation)(Nt, "PIXI.FilterManager.returnRenderTarget method has been replaced with PIXI.systems.FilterSystem.returnFilterTexture"), this.returnFilterTexture(t)
                },
                calculateScreenSpaceMatrix: function(t) {
                    Object(s.deprecation)(Nt, "PIXI.systems.FilterSystem.calculateScreenSpaceMatrix method is removed, use `(vTextureCoord * inputSize.xy) + outputFrame.xy` instead");
                    var e = t.identity(),
                        r = this.activeState,
                        i = r.sourceFrame,
                        n = r.destinationFrame;
                    return e.translate(i.x / n.width, i.y / n.height), e.scale(n.width, n.height), e
                },
                calculateNormalizedScreenSpaceMatrix: function(t) {
                    Object(s.deprecation)(Nt, "PIXI.systems.FilterManager.calculateNormalizedScreenSpaceMatrix method is removed, use `((vTextureCoord * inputSize.xy) + outputFrame.xy) / outputFrame.zw` instead.");
                    var e = this.activeState,
                        r = e.sourceFrame,
                        i = e.destinationFrame,
                        n = t.identity();
                    n.translate(r.x / i.width, r.y / i.height);
                    var o = i.width / r.width,
                        a = i.height / r.height;
                    return n.scale(o, a), n
                }
            }), Object.defineProperties(t.RenderTexture.prototype, {
                sourceFrame: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.RenderTexture.sourceFrame property has been removed"), this.filterFrame
                    }
                },
                size: {
                    get: function() {
                        return Object(s.deprecation)(Nt, "PIXI.RenderTexture.size property has been removed"), this._frame
                    }
                }
            });
            var i = function(t) {
                    function e(e, r, i, n) {
                        Object(s.deprecation)(Nt, "PIXI.filters.BlurXFilter class is deprecated, use PIXI.filters.BlurFilterPass"), t.call(this, !0, e, r, i, n)
                    }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
                }(t.filters.BlurFilterPass),
                n = function(t) {
                    function e(e, r, i, n) {
                        Object(s.deprecation)(Nt, "PIXI.filters.BlurYFilter class is deprecated, use PIXI.filters.BlurFilterPass"), t.call(this, !1, e, r, i, n)
                    }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
                }(t.filters.BlurFilterPass);
            Object.assign(t.filters, {
                BlurXFilter: i,
                BlurYFilter: n
            });
            var o = t.Sprite,
                a = t.Texture,
                h = t.Graphics;

            function u(t, e, r, i) {
                return Object(s.deprecation)(Nt, "PIXI.Sprite." + t + " method is deprecated, use PIXI.Sprite.from"), o.from(e, {
                    resourceOptions: {
                        scale: i,
                        crossorigin: r
                    }
                })
            }

            function l(t, e, r, i) {
                return Object(s.deprecation)(Nt, "PIXI.Texture." + t + " method is deprecated, use PIXI.Texture.from"), a.from(e, {
                    resourceOptions: {
                        scale: i,
                        crossorigin: r
                    }
                })
            }
            h.prototype.generateCanvasTexture || (h.prototype.generateCanvasTexture = function() {
                Object(s.deprecation)(Nt, 'PIXI.Graphics.generateCanvasTexture method is only available in "pixi.js-legacy"')
            }), Object.defineProperty(t.Graphics.prototype, "graphicsData", {
                get: function() {
                    return Object(s.deprecation)(Nt, "PIXI.Graphics.graphicsData property is deprecated, use PIXI.Graphics.geometry.graphicsData"), this.geometry.graphicsData
                }
            }), o.fromImage = u.bind(null, "fromImage"), o.fromSVG = u.bind(null, "fromSVG"), o.fromCanvas = u.bind(null, "fromCanvas"), o.fromVideo = u.bind(null, "fromVideo"), o.fromFrame = u.bind(null, "fromFrame"), a.fromImage = l.bind(null, "fromImage"), a.fromSVG = l.bind(null, "fromSVG"), a.fromCanvas = l.bind(null, "fromCanvas"), a.fromVideo = l.bind(null, "fromVideo"), a.fromFrame = l.bind(null, "fromFrame"), Object.defineProperty(t.AbstractRenderer.prototype, "autoResize", {
                get: function() {
                    return Object(s.deprecation)(Nt, "PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity"), this.autoDensity
                },
                set: function(t) {
                    Object(s.deprecation)(Nt, "PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity"), this.autoDensity = t
                }
            }), Object.defineProperty(t.Renderer.prototype, "textureManager", {
                get: function() {
                    return Object(s.deprecation)(Nt, "PIXI.Renderer.textureManager property is deprecated, use PIXI.Renderer.texture"), this.texture
                }
            }), t.utils.mixins = {
                mixin: function() {
                    Object(s.deprecation)(Nt, "PIXI.utils.mixins.mixin function is no longer available")
                },
                delayMixin: function() {
                    Object(s.deprecation)(Nt, "PIXI.utils.mixins.delayMixin function is no longer available")
                },
                performMixins: function() {
                    Object(s.deprecation)(Nt, "PIXI.utils.mixins.performMixins function is no longer available")
                }
            }
        }
        l.z.registerPlugin("accessibility", u), l.z.registerPlugin("extract", p), l.z.registerPlugin("interaction", E), l.z.registerPlugin("particle", et.b), l.z.registerPlugin("prepare", I.Prepare), l.z.registerPlugin("batch", l.i), l.z.registerPlugin("tilingSprite", ot.b), Q.registerPlugin(ut), Q.registerPlugin(nt), S.registerPlugin(f.b), S.registerPlugin($);
        var Bt = "5.2.0",
            Ut = {
                AlphaFilter: ct,
                BlurFilter: gt,
                BlurFilterPass: mt,
                ColorMatrixFilter: yt,
                DisplacementFilter: bt,
                FXAAFilter: Et,
                NoiseFilter: St
            }
    },
    16: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return d
        })), r.d(e, "b", (function() {
            return u
        })), r.d(e, "c", (function() {
            return g
        })), r.d(e, "d", (function() {
            return m
        }));
        var i = r(3),
            n = r(2),
            o = r(1),
            s = r(6),
            a = r(4),
            h = r(0),
            u = function(t, e) {
                this.uvBuffer = t, this.uvMatrix = e, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0
            };
        u.prototype.update = function(t) {
            if (t || this._bufferUpdateId !== this.uvBuffer._updateID || this._textureUpdateId !== this.uvMatrix._updateID) {
                this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
                var e = this.uvBuffer.data;
                this.data && this.data.length === e.length || (this.data = new Float32Array(e.length)), this.uvMatrix.multiplyUvs(e, this.data), this._updateID++
            }
        };
        var l = new n.g,
            c = new n.h,
            d = function(t) {
                function e(e, r, n, s) {
                    void 0 === s && (s = o.c.TRIANGLES), t.call(this), this.geometry = e, e.refCount++, this.shader = r, this.state = n || i.C.for2d(), this.drawMode = s, this.start = 0, this.size = 0, this.uvs = null, this.indices = null, this.vertexData = new Float32Array(1), this.vertexDirty = 0, this._transformID = -1, this.tint = 16777215, this.blendMode = o.b.NORMAL, this._roundPixels = a.b.ROUND_PIXELS, this.batchUvs = null
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    uvBuffer: {
                        configurable: !0
                    },
                    verticesBuffer: {
                        configurable: !0
                    },
                    material: {
                        configurable: !0
                    },
                    blendMode: {
                        configurable: !0
                    },
                    roundPixels: {
                        configurable: !0
                    },
                    tint: {
                        configurable: !0
                    },
                    texture: {
                        configurable: !0
                    }
                };
                return r.uvBuffer.get = function() {
                    return this.geometry.buffers[1]
                }, r.verticesBuffer.get = function() {
                    return this.geometry.buffers[0]
                }, r.material.set = function(t) {
                    this.shader = t
                }, r.material.get = function() {
                    return this.shader
                }, r.blendMode.set = function(t) {
                    this.state.blendMode = t
                }, r.blendMode.get = function() {
                    return this.state.blendMode
                }, r.roundPixels.set = function(t) {
                    this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
                }, r.roundPixels.get = function() {
                    return this._roundPixels
                }, r.tint.get = function() {
                    return this.shader.tint
                }, r.tint.set = function(t) {
                    this.shader.tint = t
                }, r.texture.get = function() {
                    return this.shader.texture
                }, r.texture.set = function(t) {
                    this.shader.texture = t
                }, e.prototype._render = function(t) {
                    var r = this.geometry.buffers[0].data;
                    this.shader.batchable && this.drawMode === o.c.TRIANGLES && r.length < 2 * e.BATCHABLE_SIZE ? this._renderToBatch(t) : this._renderDefault(t)
                }, e.prototype._renderDefault = function(t) {
                    var e = this.shader;
                    e.alpha = this.worldAlpha, e.update && e.update(), t.batch.flush(), e.program.uniformData.translationMatrix && (e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0)), t.shader.bind(e), t.state.set(this.state), t.geometry.bind(this.geometry, e), t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount)
                }, e.prototype._renderToBatch = function(t) {
                    var e = this.geometry;
                    this.shader.uvMatrix && (this.shader.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = e.indexBuffer.data, this._tintRGB = this.shader._tintRGB, this._texture = this.shader.texture;
                    var r = this.material.pluginName;
                    t.batch.setObjectRenderer(t.plugins[r]), t.plugins[r].render(this)
                }, e.prototype.calculateVertices = function() {
                    var t = this.geometry,
                        e = t.buffers[0].data;
                    if (t.vertexDirtyId !== this.vertexDirty || this._transformID !== this.transform._worldID) {
                        this._transformID = this.transform._worldID, this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));
                        for (var r = this.transform.worldTransform, i = r.a, n = r.b, o = r.c, s = r.d, a = r.tx, h = r.ty, u = this.vertexData, l = 0; l < u.length / 2; l++) {
                            var c = e[2 * l],
                                d = e[2 * l + 1];
                            u[2 * l] = i * c + o * d + a, u[2 * l + 1] = n * c + s * d + h
                        }
                        if (this._roundPixels)
                            for (var p = 0; p < u.length; p++) u[p] = Math.round(u[p]);
                        this.vertexDirty = t.vertexDirtyId
                    }
                }, e.prototype.calculateUvs = function() {
                    var t = this.geometry.buffers[1];
                    this.shader.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new u(t, this.shader.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data)
                }, e.prototype._calculateBounds = function() {
                    this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length)
                }, e.prototype.containsPoint = function(t) {
                    if (!this.getBounds().contains(t.x, t.y)) return !1;
                    this.worldTransform.applyInverse(t, l);
                    for (var e = this.geometry.getBuffer("aVertexPosition").data, r = c.points, i = this.geometry.getIndex().data, n = i.length, o = 4 === this.drawMode ? 3 : 1, s = 0; s + 2 < n; s += o) {
                        var a = 2 * i[s],
                            h = 2 * i[s + 1],
                            u = 2 * i[s + 2];
                        if (r[0] = e[a], r[1] = e[a + 1], r[2] = e[h], r[3] = e[h + 1], r[4] = e[u], r[5] = e[u + 1], c.contains(l.x, l.y)) return !0
                    }
                    return !1
                }, e.prototype.destroy = function(e) {
                    t.prototype.destroy.call(this, e), this.geometry.refCount--, 0 === this.geometry.refCount && this.geometry.dispose(), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null
                }, Object.defineProperties(e.prototype, r), e
            }(s.b);
        d.BATCHABLE_SIZE = 100;
        var p = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n",
            f = "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n",
            m = function(t) {
                function e(e, r) {
                    var o = {
                        uSampler: e,
                        alpha: 1,
                        uTextureMatrix: n.d.IDENTITY,
                        uColor: new Float32Array([1, 1, 1, 1])
                    };
                    (r = Object.assign({
                        tint: 16777215,
                        alpha: 1,
                        pluginName: "batch"
                    }, r)).uniforms && Object.assign(o, r.uniforms), t.call(this, r.program || i.u.from(p, f), o), this._colorDirty = !1, this.uvMatrix = new i.F(e), this.batchable = void 0 === r.program, this.pluginName = r.pluginName, this.tint = r.tint, this.alpha = r.alpha
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    texture: {
                        configurable: !0
                    },
                    alpha: {
                        configurable: !0
                    },
                    tint: {
                        configurable: !0
                    }
                };
                return r.texture.get = function() {
                    return this.uniforms.uSampler
                }, r.texture.set = function(t) {
                    this.uniforms.uSampler !== t && (this.uniforms.uSampler = t, this.uvMatrix.texture = t)
                }, r.alpha.set = function(t) {
                    t !== this._alpha && (this._alpha = t, this._colorDirty = !0)
                }, r.alpha.get = function() {
                    return this._alpha
                }, r.tint.set = function(t) {
                    t !== this._tint && (this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16), this._colorDirty = !0)
                }, r.tint.get = function() {
                    return this._tint
                }, e.prototype.update = function() {
                    if (this._colorDirty) {
                        this._colorDirty = !1;
                        var t = this.texture.baseTexture;
                        Object(h.premultiplyTintToRgba)(this._tint, this._alpha, this.uniforms.uColor, t.alphaMode)
                    }
                    this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord)
                }, Object.defineProperties(e.prototype, r), e
            }(i.A),
            g = function(t) {
                function e(e, r, n) {
                    t.call(this);
                    var s = new i.l(e),
                        a = new i.l(r, !0),
                        h = new i.l(n, !0, !0);
                    this.addAttribute("aVertexPosition", s, 2, !1, o.m.FLOAT).addAttribute("aTextureCoord", a, 2, !1, o.m.FLOAT).addIndex(h), this._updateId = -1
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    vertexDirtyId: {
                        configurable: !0
                    }
                };
                return r.vertexDirtyId.get = function() {
                    return this.buffers[0]._updateID
                }, Object.defineProperties(e.prototype, r), e
            }(i.r)
    },
    2: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return _
        })), r.d(e, "b", (function() {
            return h
        })), r.d(e, "c", (function() {
            return b
        })), r.d(e, "d", (function() {
            return u
        })), r.d(e, "e", (function() {
            return o
        })), r.d(e, "f", (function() {
            return s
        })), r.d(e, "g", (function() {
            return n
        })), r.d(e, "h", (function() {
            return T
        })), r.d(e, "i", (function() {
            return a
        })), r.d(e, "j", (function() {
            return x
        })), r.d(e, "k", (function() {
            return w
        })), r.d(e, "l", (function() {
            return i
        })), r.d(e, "m", (function() {
            return y
        })), r.d(e, "n", (function() {
            return v
        }));
        /*!
         * @pixi/math - v5.2.0
         * Compiled Wed, 06 Nov 2019 02:32:43 UTC
         *
         * @pixi/math is licensed under the MIT License.
         * http://www.opensource.org/licenses/mit-license
         */
        var i, n = function() {
                function t(t, e) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
                }
                return t.prototype.clone = function() {
                    return new t(this.x, this.y)
                }, t.prototype.copyFrom = function(t) {
                    return this.set(t.x, t.y), this
                }, t.prototype.copyTo = function(t) {
                    return t.set(this.x, this.y), t
                }, t.prototype.equals = function(t) {
                    return t.x === this.x && t.y === this.y
                }, t.prototype.set = function(t, e) {
                    void 0 === t && (t = 0), void 0 === e && (e = t), this.x = t, this.y = e
                }, t
            }(),
            o = function() {
                function t(t, e, r, i) {
                    void 0 === r && (r = 0), void 0 === i && (i = 0), this._x = r, this._y = i, this.cb = t, this.scope = e
                }
                return t.prototype.clone = function(e, r) {
                    return void 0 === e && (e = this.cb), void 0 === r && (r = this.scope), new t(e, r, this._x, this._y)
                }, t.prototype.set = function(t, e) {
                    void 0 === t && (t = 0), void 0 === e && (e = t), this._x === t && this._y === e || (this._x = t, this._y = e, this.cb.call(this.scope))
                }, t.prototype.copyFrom = function(t) {
                    return this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this
                }, t.prototype.copyTo = function(t) {
                    return t.set(this._x, this._y), t
                }, t.prototype.equals = function(t) {
                    return t.x === this._x && t.y === this._y
                }, Object.defineProperty(t.prototype, "x", {
                    get: function() {
                        return this._x
                    },
                    set: function(t) {
                        this._x !== t && (this._x = t, this.cb.call(this.scope))
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "y", {
                    get: function() {
                        return this._y
                    },
                    set: function(t) {
                        this._y !== t && (this._y = t, this.cb.call(this.scope))
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(),
            s = 2 * Math.PI,
            a = 180 / Math.PI,
            h = Math.PI / 180;
        ! function(t) {
            t[t.POLY = 0] = "POLY", t[t.RECT = 1] = "RECT", t[t.CIRC = 2] = "CIRC", t[t.ELIP = 3] = "ELIP", t[t.RREC = 4] = "RREC"
        }(i || (i = {}));
        var u = function() {
                function t(t, e, r, i, n, o) {
                    void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 1), void 0 === n && (n = 0), void 0 === o && (o = 0), this.array = null, this.a = t, this.b = e, this.c = r, this.d = i, this.tx = n, this.ty = o
                }
                return t.prototype.fromArray = function(t) {
                    this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
                }, t.prototype.set = function(t, e, r, i, n, o) {
                    return this.a = t, this.b = e, this.c = r, this.d = i, this.tx = n, this.ty = o, this
                }, t.prototype.toArray = function(t, e) {
                    this.array || (this.array = new Float32Array(9));
                    var r = e || this.array;
                    return t ? (r[0] = this.a, r[1] = this.b, r[2] = 0, r[3] = this.c, r[4] = this.d, r[5] = 0, r[6] = this.tx, r[7] = this.ty, r[8] = 1) : (r[0] = this.a, r[1] = this.c, r[2] = this.tx, r[3] = this.b, r[4] = this.d, r[5] = this.ty, r[6] = 0, r[7] = 0, r[8] = 1), r
                }, t.prototype.apply = function(t, e) {
                    e = e || new n;
                    var r = t.x,
                        i = t.y;
                    return e.x = this.a * r + this.c * i + this.tx, e.y = this.b * r + this.d * i + this.ty, e
                }, t.prototype.applyInverse = function(t, e) {
                    e = e || new n;
                    var r = 1 / (this.a * this.d + this.c * -this.b),
                        i = t.x,
                        o = t.y;
                    return e.x = this.d * r * i + -this.c * r * o + (this.ty * this.c - this.tx * this.d) * r, e.y = this.a * r * o + -this.b * r * i + (-this.ty * this.a + this.tx * this.b) * r, e
                }, t.prototype.translate = function(t, e) {
                    return this.tx += t, this.ty += e, this
                }, t.prototype.scale = function(t, e) {
                    return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
                }, t.prototype.rotate = function(t) {
                    var e = Math.cos(t),
                        r = Math.sin(t),
                        i = this.a,
                        n = this.c,
                        o = this.tx;
                    return this.a = i * e - this.b * r, this.b = i * r + this.b * e, this.c = n * e - this.d * r, this.d = n * r + this.d * e, this.tx = o * e - this.ty * r, this.ty = o * r + this.ty * e, this
                }, t.prototype.append = function(t) {
                    var e = this.a,
                        r = this.b,
                        i = this.c,
                        n = this.d;
                    return this.a = t.a * e + t.b * i, this.b = t.a * r + t.b * n, this.c = t.c * e + t.d * i, this.d = t.c * r + t.d * n, this.tx = t.tx * e + t.ty * i + this.tx, this.ty = t.tx * r + t.ty * n + this.ty, this
                }, t.prototype.setTransform = function(t, e, r, i, n, o, s, a, h) {
                    return this.a = Math.cos(s + h) * n, this.b = Math.sin(s + h) * n, this.c = -Math.sin(s - a) * o, this.d = Math.cos(s - a) * o, this.tx = t - (r * this.a + i * this.c), this.ty = e - (r * this.b + i * this.d), this
                }, t.prototype.prepend = function(t) {
                    var e = this.tx;
                    if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                        var r = this.a,
                            i = this.c;
                        this.a = r * t.a + this.b * t.c, this.b = r * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, this.d = i * t.b + this.d * t.d
                    }
                    return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
                }, t.prototype.decompose = function(t) {
                    var e = this.a,
                        r = this.b,
                        i = this.c,
                        n = this.d,
                        o = -Math.atan2(-i, n),
                        a = Math.atan2(r, e),
                        h = Math.abs(o + a);
                    return h < 1e-5 || Math.abs(s - h) < 1e-5 ? (t.rotation = a, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = o, t.skew.y = a), t.scale.x = Math.sqrt(e * e + r * r), t.scale.y = Math.sqrt(i * i + n * n), t.position.x = this.tx, t.position.y = this.ty, t
                }, t.prototype.invert = function() {
                    var t = this.a,
                        e = this.b,
                        r = this.c,
                        i = this.d,
                        n = this.tx,
                        o = t * i - e * r;
                    return this.a = i / o, this.b = -e / o, this.c = -r / o, this.d = t / o, this.tx = (r * this.ty - i * n) / o, this.ty = -(t * this.ty - e * n) / o, this
                }, t.prototype.identity = function() {
                    return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
                }, t.prototype.clone = function() {
                    var e = new t;
                    return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e
                }, t.prototype.copyTo = function(t) {
                    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
                }, t.prototype.copyFrom = function(t) {
                    return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this
                }, Object.defineProperty(t, "IDENTITY", {
                    get: function() {
                        return new t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "TEMP_MATRIX", {
                    get: function() {
                        return new t
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(),
            l = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
            c = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
            d = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
            p = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
            f = [],
            m = [],
            g = Math.sign;
        ! function() {
            for (var t = 0; t < 16; t++) {
                var e = [];
                f.push(e);
                for (var r = 0; r < 16; r++)
                    for (var i = g(l[t] * l[r] + d[t] * c[r]), n = g(c[t] * l[r] + p[t] * c[r]), o = g(l[t] * d[r] + d[t] * p[r]), s = g(c[t] * d[r] + p[t] * p[r]), a = 0; a < 16; a++)
                        if (l[a] === i && c[a] === n && d[a] === o && p[a] === s) {
                            e.push(a);
                            break
                        }
            }
            for (t = 0; t < 16; t++) {
                var h = new u;
                h.set(l[t], c[t], d[t], p[t], 0, 0), m.push(h)
            }
        }();
        var v = {
                E: 0,
                SE: 1,
                S: 2,
                SW: 3,
                W: 4,
                NW: 5,
                N: 6,
                NE: 7,
                MIRROR_VERTICAL: 8,
                MAIN_DIAGONAL: 10,
                MIRROR_HORIZONTAL: 12,
                REVERSE_DIAGONAL: 14,
                uX: function(t) {
                    return l[t]
                },
                uY: function(t) {
                    return c[t]
                },
                vX: function(t) {
                    return d[t]
                },
                vY: function(t) {
                    return p[t]
                },
                inv: function(t) {
                    return 8 & t ? 15 & t : 7 & -t
                },
                add: function(t, e) {
                    return f[t][e]
                },
                sub: function(t, e) {
                    return f[t][v.inv(e)]
                },
                rotate180: function(t) {
                    return 4 ^ t
                },
                isVertical: function(t) {
                    return 2 == (3 & t)
                },
                byDirection: function(t, e) {
                    return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? v.S : v.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? v.E : v.W : e > 0 ? t > 0 ? v.SE : v.SW : t > 0 ? v.NE : v.NW
                },
                matrixAppendRotationInv: function(t, e, r, i) {
                    void 0 === r && (r = 0), void 0 === i && (i = 0);
                    var n = m[v.inv(e)];
                    n.tx = r, n.ty = i, t.append(n)
                }
            },
            y = function() {
                function t() {
                    this.worldTransform = new u, this.localTransform = new u, this.position = new o(this.onChange, this, 0, 0), this.scale = new o(this.onChange, this, 1, 1), this.pivot = new o(this.onChange, this, 0, 0), this.skew = new o(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0
                }
                return t.prototype.onChange = function() {
                    this._localID++
                }, t.prototype.updateSkew = function() {
                    this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++
                }, t.prototype.updateLocalTransform = function() {
                    var t = this.localTransform;
                    this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, this._parentID = -1)
                }, t.prototype.updateTransform = function(t) {
                    var e = this.localTransform;
                    if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
                        var r = t.worldTransform,
                            i = this.worldTransform;
                        i.a = e.a * r.a + e.b * r.c, i.b = e.a * r.b + e.b * r.d, i.c = e.c * r.a + e.d * r.c, i.d = e.c * r.b + e.d * r.d, i.tx = e.tx * r.a + e.ty * r.c + r.tx, i.ty = e.tx * r.b + e.ty * r.d + r.ty, this._parentID = t._worldID, this._worldID++
                    }
                }, t.prototype.setFromMatrix = function(t) {
                    t.decompose(this), this._localID++
                }, Object.defineProperty(t.prototype, "rotation", {
                    get: function() {
                        return this._rotation
                    },
                    set: function(t) {
                        this._rotation !== t && (this._rotation = t, this.updateSkew())
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.IDENTITY = new t, t
            }(),
            x = function() {
                function t(t, e, r, n) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 0), this.x = Number(t), this.y = Number(e), this.width = Number(r), this.height = Number(n), this.type = i.RECT
                }
                return Object.defineProperty(t.prototype, "left", {
                    get: function() {
                        return this.x
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "right", {
                    get: function() {
                        return this.x + this.width
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "top", {
                    get: function() {
                        return this.y
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "bottom", {
                    get: function() {
                        return this.y + this.height
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "EMPTY", {
                    get: function() {
                        return new t(0, 0, 0, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.clone = function() {
                    return new t(this.x, this.y, this.width, this.height)
                }, t.prototype.copyFrom = function(t) {
                    return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
                }, t.prototype.copyTo = function(t) {
                    return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t
                }, t.prototype.contains = function(t, e) {
                    return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height)
                }, t.prototype.pad = function(t, e) {
                    return void 0 === t && (t = 0), void 0 === e && (e = t), this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e, this
                }, t.prototype.fit = function(t) {
                    var e = Math.max(this.x, t.x),
                        r = Math.min(this.x + this.width, t.x + t.width),
                        i = Math.max(this.y, t.y),
                        n = Math.min(this.y + this.height, t.y + t.height);
                    return this.x = e, this.width = Math.max(r - e, 0), this.y = i, this.height = Math.max(n - i, 0), this
                }, t.prototype.ceil = function(t, e) {
                    void 0 === t && (t = 1), void 0 === e && (e = .001);
                    var r = Math.ceil((this.x + this.width - e) * t) / t,
                        i = Math.ceil((this.y + this.height - e) * t) / t;
                    return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = r - this.x, this.height = i - this.y, this
                }, t.prototype.enlarge = function(t) {
                    var e = Math.min(this.x, t.x),
                        r = Math.max(this.x + this.width, t.x + t.width),
                        i = Math.min(this.y, t.y),
                        n = Math.max(this.y + this.height, t.y + t.height);
                    return this.x = e, this.width = r - e, this.y = i, this.height = n - i, this
                }, t
            }(),
            _ = function() {
                function t(t, e, r) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), this.x = t, this.y = e, this.radius = r, this.type = i.CIRC
                }
                return t.prototype.clone = function() {
                    return new t(this.x, this.y, this.radius)
                }, t.prototype.contains = function(t, e) {
                    if (this.radius <= 0) return !1;
                    var r = this.radius * this.radius,
                        i = this.x - t,
                        n = this.y - e;
                    return (i *= i) + (n *= n) <= r
                }, t.prototype.getBounds = function() {
                    return new x(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
                }, t
            }(),
            b = function() {
                function t(t, e, r, n) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 0), this.x = t, this.y = e, this.width = r, this.height = n, this.type = i.ELIP
                }
                return t.prototype.clone = function() {
                    return new t(this.x, this.y, this.width, this.height)
                }, t.prototype.contains = function(t, e) {
                    if (this.width <= 0 || this.height <= 0) return !1;
                    var r = (t - this.x) / this.width,
                        i = (e - this.y) / this.height;
                    return (r *= r) + (i *= i) <= 1
                }, t.prototype.getBounds = function() {
                    return new x(this.x - this.width, this.y - this.height, this.width, this.height)
                }, t
            }(),
            T = function() {
                function t() {
                    for (var t = arguments, e = [], r = 0; r < arguments.length; r++) e[r] = t[r];
                    if (Array.isArray(e[0]) && (e = e[0]), e[0] instanceof n) {
                        for (var o = [], s = 0, a = (e = e).length; s < a; s++) o.push(e[s].x, e[s].y);
                        e = o
                    }
                    this.points = e, this.type = i.POLY, this.closeStroke = !0
                }
                return t.prototype.clone = function() {
                    var e = new t(this.points.slice());
                    return e.closeStroke = this.closeStroke, e
                }, t.prototype.contains = function(t, e) {
                    for (var r = !1, i = this.points.length / 2, n = 0, o = i - 1; n < i; o = n++) {
                        var s = this.points[2 * n],
                            a = this.points[2 * n + 1],
                            h = this.points[2 * o],
                            u = this.points[2 * o + 1];
                        a > e != u > e && t < (e - a) / (u - a) * (h - s) + s && (r = !r)
                    }
                    return r
                }, t
            }(),
            w = function() {
                function t(t, e, r, n, o) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 0), void 0 === o && (o = 20), this.x = t, this.y = e, this.width = r, this.height = n, this.radius = o, this.type = i.RREC
                }
                return t.prototype.clone = function() {
                    return new t(this.x, this.y, this.width, this.height, this.radius)
                }, t.prototype.contains = function(t, e) {
                    if (this.width <= 0 || this.height <= 0) return !1;
                    if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
                        if (e >= this.y + this.radius && e <= this.y + this.height - this.radius || t >= this.x + this.radius && t <= this.x + this.width - this.radius) return !0;
                        var r = t - (this.x + this.radius),
                            i = e - (this.y + this.radius),
                            n = this.radius * this.radius;
                        if (r * r + i * i <= n) return !0;
                        if ((r = t - (this.x + this.width - this.radius)) * r + i * i <= n) return !0;
                        if (r * r + (i = e - (this.y + this.height - this.radius)) * i <= n) return !0;
                        if ((r = t - (this.x + this.radius)) * r + i * i <= n) return !0
                    }
                    return !1
                }, t
            }()
    },
    23: function(t, e) {
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (r = window)
        }
        t.exports = r
    },
    25: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, r, i) {
                return r && t(e.prototype, r), i && t(e, i), e
            }
        }();

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var o = function() {
            function t(e, r, i) {
                void 0 === r && (r = !1), n(this, t), this._fn = e, this._once = r, this._thisArg = i, this._next = this._prev = this._owner = null
            }
            return i(t, [{
                key: "detach",
                value: function() {
                    return null !== this._owner && (this._owner.detach(this), !0)
                }
            }]), t
        }();

        function s(t, e) {
            return t._head ? (t._tail._next = e, e._prev = t._tail, t._tail = e) : (t._head = e, t._tail = e), e._owner = t, e
        }
        var a = function() {
            function t() {
                n(this, t), this._head = this._tail = void 0
            }
            return i(t, [{
                key: "handlers",
                value: function() {
                    var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0],
                        e = this._head;
                    if (t) return !!e;
                    for (var r = []; e;) r.push(e), e = e._next;
                    return r
                }
            }, {
                key: "has",
                value: function(t) {
                    if (!(t instanceof o)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
                    return t._owner === this
                }
            }, {
                key: "dispatch",
                value: function() {
                    var t = this._head;
                    if (!t) return !1;
                    for (; t;) t._once && this.detach(t), t._fn.apply(t._thisArg, arguments), t = t._next;
                    return !0
                }
            }, {
                key: "add",
                value: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    if ("function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
                    return s(this, new o(t, !1, e))
                }
            }, {
                key: "once",
                value: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    if ("function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
                    return s(this, new o(t, !0, e))
                }
            }, {
                key: "detach",
                value: function(t) {
                    if (!(t instanceof o)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
                    return t._owner !== this ? this : (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null, this)
                }
            }, {
                key: "detachAll",
                value: function() {
                    var t = this._head;
                    if (!t) return this;
                    for (this._head = this._tail = null; t;) t._owner = null, t = t._next;
                    return this
                }
            }]), t
        }();
        a.MiniSignalBinding = o, e.default = a, t.exports = e.default
    },
    28: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return h
        })), r.d(e, "b", (function() {
            return x
        })), r.d(e, "c", (function() {
            return g
        })), r.d(e, "d", (function() {
            return c
        }));
        var i = r(13),
            n = r(3),
            o = r(4),
            s = r(2),
            a = r(0),
            h = {
                LINEAR_VERTICAL: 0,
                LINEAR_HORIZONTAL: 1
            },
            u = {
                align: "left",
                breakWords: !1,
                dropShadow: !1,
                dropShadowAlpha: 1,
                dropShadowAngle: Math.PI / 6,
                dropShadowBlur: 0,
                dropShadowColor: "black",
                dropShadowDistance: 5,
                fill: "black",
                fillGradientType: h.LINEAR_VERTICAL,
                fillGradientStops: [],
                fontFamily: "Arial",
                fontSize: 26,
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "normal",
                letterSpacing: 0,
                lineHeight: 0,
                lineJoin: "miter",
                miterLimit: 10,
                padding: 0,
                stroke: "black",
                strokeThickness: 0,
                textBaseline: "alphabetic",
                trim: !1,
                whiteSpace: "pre",
                wordWrap: !1,
                wordWrapWidth: 100,
                leading: 0
            },
            l = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"],
            c = function(t) {
                this.styleID = 0, this.reset(), m(this, t, t)
            },
            d = {
                align: {
                    configurable: !0
                },
                breakWords: {
                    configurable: !0
                },
                dropShadow: {
                    configurable: !0
                },
                dropShadowAlpha: {
                    configurable: !0
                },
                dropShadowAngle: {
                    configurable: !0
                },
                dropShadowBlur: {
                    configurable: !0
                },
                dropShadowColor: {
                    configurable: !0
                },
                dropShadowDistance: {
                    configurable: !0
                },
                fill: {
                    configurable: !0
                },
                fillGradientType: {
                    configurable: !0
                },
                fillGradientStops: {
                    configurable: !0
                },
                fontFamily: {
                    configurable: !0
                },
                fontSize: {
                    configurable: !0
                },
                fontStyle: {
                    configurable: !0
                },
                fontVariant: {
                    configurable: !0
                },
                fontWeight: {
                    configurable: !0
                },
                letterSpacing: {
                    configurable: !0
                },
                lineHeight: {
                    configurable: !0
                },
                leading: {
                    configurable: !0
                },
                lineJoin: {
                    configurable: !0
                },
                miterLimit: {
                    configurable: !0
                },
                padding: {
                    configurable: !0
                },
                stroke: {
                    configurable: !0
                },
                strokeThickness: {
                    configurable: !0
                },
                textBaseline: {
                    configurable: !0
                },
                trim: {
                    configurable: !0
                },
                whiteSpace: {
                    configurable: !0
                },
                wordWrap: {
                    configurable: !0
                },
                wordWrapWidth: {
                    configurable: !0
                }
            };

        function p(t) {
            return "number" == typeof t ? Object(a.hex2string)(t) : ("string" == typeof t && 0 === t.indexOf("0x") && (t = t.replace("0x", "#")), t)
        }

        function f(t) {
            if (Array.isArray(t)) {
                for (var e = 0; e < t.length; ++e) t[e] = p(t[e]);
                return t
            }
            return p(t)
        }

        function m(t, e, r) {
            for (var i in r) Array.isArray(e[i]) ? t[i] = e[i].slice() : t[i] = e[i]
        }
        c.prototype.clone = function() {
            var t = {};
            return m(t, this, u), new c(t)
        }, c.prototype.reset = function() {
            m(this, u, u)
        }, d.align.get = function() {
            return this._align
        }, d.align.set = function(t) {
            this._align !== t && (this._align = t, this.styleID++)
        }, d.breakWords.get = function() {
            return this._breakWords
        }, d.breakWords.set = function(t) {
            this._breakWords !== t && (this._breakWords = t, this.styleID++)
        }, d.dropShadow.get = function() {
            return this._dropShadow
        }, d.dropShadow.set = function(t) {
            this._dropShadow !== t && (this._dropShadow = t, this.styleID++)
        }, d.dropShadowAlpha.get = function() {
            return this._dropShadowAlpha
        }, d.dropShadowAlpha.set = function(t) {
            this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++)
        }, d.dropShadowAngle.get = function() {
            return this._dropShadowAngle
        }, d.dropShadowAngle.set = function(t) {
            this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++)
        }, d.dropShadowBlur.get = function() {
            return this._dropShadowBlur
        }, d.dropShadowBlur.set = function(t) {
            this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++)
        }, d.dropShadowColor.get = function() {
            return this._dropShadowColor
        }, d.dropShadowColor.set = function(t) {
            var e = f(t);
            this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++)
        }, d.dropShadowDistance.get = function() {
            return this._dropShadowDistance
        }, d.dropShadowDistance.set = function(t) {
            this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++)
        }, d.fill.get = function() {
            return this._fill
        }, d.fill.set = function(t) {
            var e = f(t);
            this._fill !== e && (this._fill = e, this.styleID++)
        }, d.fillGradientType.get = function() {
            return this._fillGradientType
        }, d.fillGradientType.set = function(t) {
            this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++)
        }, d.fillGradientStops.get = function() {
            return this._fillGradientStops
        }, d.fillGradientStops.set = function(t) {
            (function(t, e) {
                if (!Array.isArray(t) || !Array.isArray(e)) return !1;
                if (t.length !== e.length) return !1;
                for (var r = 0; r < t.length; ++r)
                    if (t[r] !== e[r]) return !1;
                return !0
            })(this._fillGradientStops, t) || (this._fillGradientStops = t, this.styleID++)
        }, d.fontFamily.get = function() {
            return this._fontFamily
        }, d.fontFamily.set = function(t) {
            this.fontFamily !== t && (this._fontFamily = t, this.styleID++)
        }, d.fontSize.get = function() {
            return this._fontSize
        }, d.fontSize.set = function(t) {
            this._fontSize !== t && (this._fontSize = t, this.styleID++)
        }, d.fontStyle.get = function() {
            return this._fontStyle
        }, d.fontStyle.set = function(t) {
            this._fontStyle !== t && (this._fontStyle = t, this.styleID++)
        }, d.fontVariant.get = function() {
            return this._fontVariant
        }, d.fontVariant.set = function(t) {
            this._fontVariant !== t && (this._fontVariant = t, this.styleID++)
        }, d.fontWeight.get = function() {
            return this._fontWeight
        }, d.fontWeight.set = function(t) {
            this._fontWeight !== t && (this._fontWeight = t, this.styleID++)
        }, d.letterSpacing.get = function() {
            return this._letterSpacing
        }, d.letterSpacing.set = function(t) {
            this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++)
        }, d.lineHeight.get = function() {
            return this._lineHeight
        }, d.lineHeight.set = function(t) {
            this._lineHeight !== t && (this._lineHeight = t, this.styleID++)
        }, d.leading.get = function() {
            return this._leading
        }, d.leading.set = function(t) {
            this._leading !== t && (this._leading = t, this.styleID++)
        }, d.lineJoin.get = function() {
            return this._lineJoin
        }, d.lineJoin.set = function(t) {
            this._lineJoin !== t && (this._lineJoin = t, this.styleID++)
        }, d.miterLimit.get = function() {
            return this._miterLimit
        }, d.miterLimit.set = function(t) {
            this._miterLimit !== t && (this._miterLimit = t, this.styleID++)
        }, d.padding.get = function() {
            return this._padding
        }, d.padding.set = function(t) {
            this._padding !== t && (this._padding = t, this.styleID++)
        }, d.stroke.get = function() {
            return this._stroke
        }, d.stroke.set = function(t) {
            var e = f(t);
            this._stroke !== e && (this._stroke = e, this.styleID++)
        }, d.strokeThickness.get = function() {
            return this._strokeThickness
        }, d.strokeThickness.set = function(t) {
            this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++)
        }, d.textBaseline.get = function() {
            return this._textBaseline
        }, d.textBaseline.set = function(t) {
            this._textBaseline !== t && (this._textBaseline = t, this.styleID++)
        }, d.trim.get = function() {
            return this._trim
        }, d.trim.set = function(t) {
            this._trim !== t && (this._trim = t, this.styleID++)
        }, d.whiteSpace.get = function() {
            return this._whiteSpace
        }, d.whiteSpace.set = function(t) {
            this._whiteSpace !== t && (this._whiteSpace = t, this.styleID++)
        }, d.wordWrap.get = function() {
            return this._wordWrap
        }, d.wordWrap.set = function(t) {
            this._wordWrap !== t && (this._wordWrap = t, this.styleID++)
        }, d.wordWrapWidth.get = function() {
            return this._wordWrapWidth
        }, d.wordWrapWidth.set = function(t) {
            this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++)
        }, c.prototype.toFontString = function() {
            var t = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize,
                e = this.fontFamily;
            Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
            for (var r = e.length - 1; r >= 0; r--) {
                var i = e[r].trim();
                !/([\"\'])[^\'\"]+\1/.test(i) && l.indexOf(i) < 0 && (i = '"' + i + '"'), e[r] = i
            }
            return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t + " " + e.join(",")
        }, Object.defineProperties(c.prototype, d);
        var g = function(t, e, r, i, n, o, s, a, h) {
            this.text = t, this.style = e, this.width = r, this.height = i, this.lines = n, this.lineWidths = o, this.lineHeight = s, this.maxLineWidth = a, this.fontProperties = h
        };
        g.measureText = function(t, e, r, i) {
            void 0 === i && (i = g._canvas), r = null == r ? e.wordWrap : r;
            var n = e.toFontString(),
                o = g.measureFont(n);
            0 === o.fontSize && (o.fontSize = e.fontSize, o.ascent = e.fontSize);
            var s = i.getContext("2d");
            s.font = n;
            for (var a = (r ? g.wordWrap(t, e, i) : t).split(/(?:\r\n|\r|\n)/), h = new Array(a.length), u = 0, l = 0; l < a.length; l++) {
                var c = s.measureText(a[l]).width + (a[l].length - 1) * e.letterSpacing;
                h[l] = c, u = Math.max(u, c)
            }
            var d = u + e.strokeThickness;
            e.dropShadow && (d += e.dropShadowDistance);
            var p = e.lineHeight || o.fontSize + e.strokeThickness,
                f = Math.max(p, o.fontSize + e.strokeThickness) + (a.length - 1) * (p + e.leading);
            return e.dropShadow && (f += e.dropShadowDistance), new g(t, e, d, f, a, h, p + e.leading, u, o)
        }, g.wordWrap = function(t, e, r) {
            void 0 === r && (r = g._canvas);
            for (var i = r.getContext("2d"), n = 0, o = "", s = "", a = {}, h = e.letterSpacing, u = e.whiteSpace, l = g.collapseSpaces(u), c = g.collapseNewlines(u), d = !l, p = e.wordWrapWidth + h, f = g.tokenize(t), m = 0; m < f.length; m++) {
                var v = f[m];
                if (g.isNewline(v)) {
                    if (!c) {
                        s += g.addLine(o), d = !l, o = "", n = 0;
                        continue
                    }
                    v = " "
                }
                if (l) {
                    var y = g.isBreakingSpace(v),
                        x = g.isBreakingSpace(o[o.length - 1]);
                    if (y && x) continue
                }
                var _ = g.getFromCache(v, h, a, i);
                if (_ > p)
                    if ("" !== o && (s += g.addLine(o), o = "", n = 0), g.canBreakWords(v, e.breakWords))
                        for (var b = v.split(""), T = 0; T < b.length; T++) {
                            for (var w = b[T], E = 1; b[T + E];) {
                                var I = b[T + E],
                                    S = w[w.length - 1];
                                if (g.canBreakChars(S, I, v, T, e.breakWords)) break;
                                w += I, E++
                            }
                            T += w.length - 1;
                            var P = g.getFromCache(w, h, a, i);
                            P + n > p && (s += g.addLine(o), d = !1, o = "", n = 0), o += w, n += P
                        } else {
                            o.length > 0 && (s += g.addLine(o), o = "", n = 0);
                            var A = m === f.length - 1;
                            s += g.addLine(v, !A), d = !1, o = "", n = 0
                        } else _ + n > p && (d = !1, s += g.addLine(o), o = "", n = 0), (o.length > 0 || !g.isBreakingSpace(v) || d) && (o += v, n += _)
            }
            return s += g.addLine(o, !1)
        }, g.addLine = function(t, e) {
            return void 0 === e && (e = !0), t = g.trimRight(t), t = e ? t + "\n" : t
        }, g.getFromCache = function(t, e, r, i) {
            var n = r[t];
            if (void 0 === n) {
                var o = t.length * e;
                n = i.measureText(t).width + o, r[t] = n
            }
            return n
        }, g.collapseSpaces = function(t) {
            return "normal" === t || "pre-line" === t
        }, g.collapseNewlines = function(t) {
            return "normal" === t
        }, g.trimRight = function(t) {
            if ("string" != typeof t) return "";
            for (var e = t.length - 1; e >= 0; e--) {
                var r = t[e];
                if (!g.isBreakingSpace(r)) break;
                t = t.slice(0, -1)
            }
            return t
        }, g.isNewline = function(t) {
            return "string" == typeof t && g._newlines.indexOf(t.charCodeAt(0)) >= 0
        }, g.isBreakingSpace = function(t) {
            return "string" == typeof t && g._breakingSpaces.indexOf(t.charCodeAt(0)) >= 0
        }, g.tokenize = function(t) {
            var e = [],
                r = "";
            if ("string" != typeof t) return e;
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                g.isBreakingSpace(n) || g.isNewline(n) ? ("" !== r && (e.push(r), r = ""), e.push(n)) : r += n
            }
            return "" !== r && e.push(r), e
        }, g.canBreakWords = function(t, e) {
            return e
        }, g.canBreakChars = function(t, e, r, i, n) {
            return !0
        }, g.measureFont = function(t) {
            if (g._fonts[t]) return g._fonts[t];
            var e = {},
                r = g._canvas,
                i = g._context;
            i.font = t;
            var n = g.METRICS_STRING + g.BASELINE_SYMBOL,
                o = Math.ceil(i.measureText(n).width),
                s = Math.ceil(i.measureText(g.BASELINE_SYMBOL).width),
                a = 2 * s;
            s = s * g.BASELINE_MULTIPLIER | 0, r.width = o, r.height = a, i.fillStyle = "#f00", i.fillRect(0, 0, o, a), i.font = t, i.textBaseline = "alphabetic", i.fillStyle = "#000", i.fillText(n, 0, s);
            var h = i.getImageData(0, 0, o, a).data,
                u = h.length,
                l = 4 * o,
                c = 0,
                d = 0,
                p = !1;
            for (c = 0; c < s; ++c) {
                for (var f = 0; f < l; f += 4)
                    if (255 !== h[d + f]) {
                        p = !0;
                        break
                    } if (p) break;
                d += l
            }
            for (e.ascent = s - c, d = u - l, p = !1, c = a; c > s; --c) {
                for (var m = 0; m < l; m += 4)
                    if (255 !== h[d + m]) {
                        p = !0;
                        break
                    } if (p) break;
                d -= l
            }
            return e.descent = c - s, e.fontSize = e.ascent + e.descent, g._fonts[t] = e, e
        }, g.clearMetrics = function(t) {
            void 0 === t && (t = ""), t ? delete g._fonts[t] : g._fonts = {}
        };
        var v = function() {
            try {
                var t = new OffscreenCanvas(0, 0);
                return t.getContext("2d") ? t : document.createElement("canvas")
            } catch (t) {
                return document.createElement("canvas")
            }
        }();
        v.width = v.height = 10, g._canvas = v, g._context = v.getContext("2d"), g._fonts = {}, g.METRICS_STRING = "|ÉqÅ", g.BASELINE_SYMBOL = "M", g.BASELINE_MULTIPLIER = 1.4, g._newlines = [10, 13], g._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
        var y = {
                texture: !0,
                children: !1,
                baseTexture: !0
            },
            x = function(t) {
                function e(e, r, i) {
                    (i = i || document.createElement("canvas")).width = 3, i.height = 3;
                    var a = n.E.from(i);
                    a.orig = new s.j, a.trim = new s.j, t.call(this, a), this.canvas = i, this.context = this.canvas.getContext("2d"), this._resolution = o.b.RESOLUTION, this._autoResolution = !0, this._text = null, this._style = null, this._styleListener = null, this._font = "", this.text = e, this.style = r, this.localStyleID = -1
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    width: {
                        configurable: !0
                    },
                    height: {
                        configurable: !0
                    },
                    style: {
                        configurable: !0
                    },
                    text: {
                        configurable: !0
                    },
                    resolution: {
                        configurable: !0
                    }
                };
                return e.prototype.updateText = function(t) {
                    var e = this._style;
                    if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), this.dirty || !t) {
                        this._font = this._style.toFontString();
                        var r, i, n = this.context,
                            o = g.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas),
                            s = o.width,
                            h = o.height,
                            u = o.lines,
                            l = o.lineHeight,
                            c = o.lineWidths,
                            d = o.maxLineWidth,
                            p = o.fontProperties;
                        this.canvas.width = Math.ceil((Math.max(1, s) + 2 * e.padding) * this._resolution), this.canvas.height = Math.ceil((Math.max(1, h) + 2 * e.padding) * this._resolution), n.scale(this._resolution, this._resolution), n.clearRect(0, 0, this.canvas.width, this.canvas.height), n.font = this._font, n.lineWidth = e.strokeThickness, n.textBaseline = e.textBaseline, n.lineJoin = e.lineJoin, n.miterLimit = e.miterLimit;
                        for (var f = e.dropShadow ? 2 : 1, m = 0; m < f; ++m) {
                            var v = e.dropShadow && 0 === m,
                                y = v ? 2 * h : 0,
                                x = y * this.resolution;
                            if (v) {
                                n.fillStyle = "black", n.strokeStyle = "black";
                                var _ = e.dropShadowColor,
                                    b = Object(a.hex2rgb)("number" == typeof _ ? _ : Object(a.string2hex)(_));
                                n.shadowColor = "rgba(" + 255 * b[0] + "," + 255 * b[1] + "," + 255 * b[2] + "," + e.dropShadowAlpha + ")", n.shadowBlur = e.dropShadowBlur, n.shadowOffsetX = Math.cos(e.dropShadowAngle) * e.dropShadowDistance, n.shadowOffsetY = Math.sin(e.dropShadowAngle) * e.dropShadowDistance + x
                            } else n.fillStyle = this._generateFillStyle(e, u), n.strokeStyle = e.stroke, n.shadowColor = 0, n.shadowBlur = 0, n.shadowOffsetX = 0, n.shadowOffsetY = 0;
                            for (var T = 0; T < u.length; T++) r = e.strokeThickness / 2, i = e.strokeThickness / 2 + T * l + p.ascent, "right" === e.align ? r += d - c[T] : "center" === e.align && (r += (d - c[T]) / 2), e.stroke && e.strokeThickness && this.drawLetterSpacing(u[T], r + e.padding, i + e.padding - y, !0), e.fill && this.drawLetterSpacing(u[T], r + e.padding, i + e.padding - y)
                        }
                        this.updateTexture()
                    }
                }, e.prototype.drawLetterSpacing = function(t, e, r, i) {
                    void 0 === i && (i = !1);
                    var n = this._style.letterSpacing;
                    if (0 !== n)
                        for (var o = e, s = Array.from ? Array.from(t) : t.split(""), a = this.context.measureText(t).width, h = 0, u = 0; u < s.length; ++u) {
                            var l = s[u];
                            i ? this.context.strokeText(l, o, r) : this.context.fillText(l, o, r), o += a - (h = this.context.measureText(t.substring(u + 1)).width) + n, a = h
                        } else i ? this.context.strokeText(t, e, r) : this.context.fillText(t, e, r)
                }, e.prototype.updateTexture = function() {
                    var t = this.canvas;
                    if (this._style.trim) {
                        var e = Object(a.trimCanvas)(t);
                        e.data && (t.width = e.width, t.height = e.height, this.context.putImageData(e.data, 0, 0))
                    }
                    var r = this._texture,
                        i = this._style,
                        n = i.trim ? 0 : i.padding,
                        o = r.baseTexture;
                    r.trim.width = r._frame.width = Math.ceil(t.width / this._resolution), r.trim.height = r._frame.height = Math.ceil(t.height / this._resolution), r.trim.x = -n, r.trim.y = -n, r.orig.width = r._frame.width - 2 * n, r.orig.height = r._frame.height - 2 * n, this._onTextureUpdate(), o.setRealSize(t.width, t.height, this._resolution), this.dirty = !1
                }, e.prototype._render = function(e) {
                    this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0), this.updateText(!0), t.prototype._render.call(this, e)
                }, e.prototype.getLocalBounds = function(e) {
                    return this.updateText(!0), t.prototype.getLocalBounds.call(this, e)
                }, e.prototype._calculateBounds = function() {
                    this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
                }, e.prototype._onStyleChange = function() {
                    this.dirty = !0
                }, e.prototype._generateFillStyle = function(t, e) {
                    if (!Array.isArray(t.fill)) return t.fill;
                    if (1 === t.fill.length) return t.fill[0];
                    var r, i, n, o, s = Math.ceil(this.canvas.width / this._resolution),
                        a = Math.ceil(this.canvas.height / this._resolution),
                        u = t.fill.slice(),
                        l = t.fillGradientStops.slice();
                    if (!l.length)
                        for (var c = u.length + 1, d = 1; d < c; ++d) l.push(d / c);
                    if (u.unshift(t.fill[0]), l.unshift(0), u.push(t.fill[t.fill.length - 1]), l.push(1), t.fillGradientType === h.LINEAR_VERTICAL) {
                        r = this.context.createLinearGradient(s / 2, 0, s / 2, a), i = (u.length + 1) * e.length, n = 0;
                        for (var p = 0; p < e.length; p++) {
                            n += 1;
                            for (var f = 0; f < u.length; f++) o = "number" == typeof l[f] ? l[f] / e.length + p / e.length : n / i, r.addColorStop(o, u[f]), n++
                        }
                    } else {
                        r = this.context.createLinearGradient(0, a / 2, s, a / 2), i = u.length + 1, n = 1;
                        for (var m = 0; m < u.length; m++) o = "number" == typeof l[m] ? l[m] : n / i, r.addColorStop(o, u[m]), n++
                    }
                    return r
                }, e.prototype.destroy = function(e) {
                    "boolean" == typeof e && (e = {
                        children: e
                    }), e = Object.assign({}, y, e), t.prototype.destroy.call(this, e), this.context = null, this.canvas = null, this._style = null
                }, r.width.get = function() {
                    return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
                }, r.width.set = function(t) {
                    this.updateText(!0);
                    var e = Object(a.sign)(this.scale.x) || 1;
                    this.scale.x = e * t / this._texture.orig.width, this._width = t
                }, r.height.get = function() {
                    return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
                }, r.height.set = function(t) {
                    this.updateText(!0);
                    var e = Object(a.sign)(this.scale.y) || 1;
                    this.scale.y = e * t / this._texture.orig.height, this._height = t
                }, r.style.get = function() {
                    return this._style
                }, r.style.set = function(t) {
                    t = t || {}, this._style = t instanceof c ? t : new c(t), this.localStyleID = -1, this.dirty = !0
                }, r.text.get = function() {
                    return this._text
                }, r.text.set = function(t) {
                    t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0)
                }, r.resolution.get = function() {
                    return this._resolution
                }, r.resolution.set = function(t) {
                    this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0)
                }, Object.defineProperties(e.prototype, r), e
            }(i.a)
    },
    29: function(t, e, r) {
        var i, n, o;
        ! function(r) {
            var s = /iPhone/i,
                a = /iPod/i,
                h = /iPad/i,
                u = /\bAndroid(?:.+)Mobile\b/i,
                l = /Android/i,
                c = /\bAndroid(?:.+)SD4930UR\b/i,
                d = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
                p = /Windows Phone/i,
                f = /\bWindows(?:.+)ARM\b/i,
                m = /BlackBerry/i,
                g = /BB10/i,
                v = /Opera Mini/i,
                y = /\b(CriOS|Chrome)(?:.+)Mobile/i,
                x = /Mobile(?:.+)Firefox\b/i;

            function _(t, e) {
                return t.test(e)
            }

            function b(t) {
                var e = t || ("undefined" != typeof navigator ? navigator.userAgent : ""),
                    r = e.split("[FBAN");
                void 0 !== r[1] && (e = r[0]), void 0 !== (r = e.split("Twitter"))[1] && (e = r[0]);
                var i = {
                    apple: {
                        phone: _(s, e) && !_(p, e),
                        ipod: _(a, e),
                        tablet: !_(s, e) && _(h, e) && !_(p, e),
                        device: (_(s, e) || _(a, e) || _(h, e)) && !_(p, e)
                    },
                    amazon: {
                        phone: _(c, e),
                        tablet: !_(c, e) && _(d, e),
                        device: _(c, e) || _(d, e)
                    },
                    android: {
                        phone: !_(p, e) && _(c, e) || !_(p, e) && _(u, e),
                        tablet: !_(p, e) && !_(c, e) && !_(u, e) && (_(d, e) || _(l, e)),
                        device: !_(p, e) && (_(c, e) || _(d, e) || _(u, e) || _(l, e)) || _(/\bokhttp\b/i, e)
                    },
                    windows: {
                        phone: _(p, e),
                        tablet: _(f, e),
                        device: _(p, e) || _(f, e)
                    },
                    other: {
                        blackberry: _(m, e),
                        blackberry10: _(g, e),
                        opera: _(v, e),
                        firefox: _(x, e),
                        chrome: _(y, e),
                        device: _(m, e) || _(g, e) || _(v, e) || _(x, e) || _(y, e)
                    }
                };
                return i.any = i.apple.device || i.android.device || i.windows.device || i.other.device, i.phone = i.apple.phone || i.android.phone || i.windows.phone, i.tablet = i.apple.tablet || i.android.tablet || i.windows.tablet, i
            }
            t.exports && "undefined" == typeof window ? t.exports = b : t.exports && "undefined" != typeof window ? (t.exports = b(), t.exports.isMobile = b) : (n = [], i = r.isMobile = b(), void 0 === (o = "function" == typeof i ? i.apply(e, n) : i) || (t.exports = o))
        }(this)
    },
    3: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return xe
        })), r.d(e, "b", (function() {
            return ue
        })), r.d(e, "c", (function() {
            return k
        })), r.d(e, "d", (function() {
            return C
        })), r.d(e, "e", (function() {
            return y
        })), r.d(e, "f", (function() {
            return me
        })), r.d(e, "g", (function() {
            return be
        })), r.d(e, "h", (function() {
            return Ee
        })), r.d(e, "i", (function() {
            return Se
        })), r.d(e, "j", (function() {
            return _e
        })), r.d(e, "k", (function() {
            return ge
        })), r.d(e, "l", (function() {
            return U
        })), r.d(e, "m", (function() {
            return fe
        })), r.d(e, "n", (function() {
            return Lt
        })), r.d(e, "o", (function() {
            return A
        })), r.d(e, "p", (function() {
            return Zt
        })), r.d(e, "q", (function() {
            return oe
        })), r.d(e, "r", (function() {
            return H
        })), r.d(e, "s", (function() {
            return st
        })), r.d(e, "t", (function() {
            return Q
        })), r.d(e, "u", (function() {
            return Mt
        })), r.d(e, "v", (function() {
            return W
        })), r.d(e, "w", (function() {
            return z
        })), r.d(e, "x", (function() {
            return L
        })), r.d(e, "y", (function() {
            return N
        })), r.d(e, "z", (function() {
            return le
        })), r.d(e, "A", (function() {
            return Ot
        })), r.d(e, "B", (function() {
            return Vt
        })), r.d(e, "C", (function() {
            return Dt
        })), r.d(e, "D", (function() {
            return S
        })), r.d(e, "E", (function() {
            return D
        })), r.d(e, "F", (function() {
            return Ut
        })), r.d(e, "G", (function() {
            return O
        })), r.d(e, "H", (function() {
            return Z
        })), r.d(e, "I", (function() {
            return ve
        })), r.d(e, "J", (function() {
            return ce
        })), r.d(e, "K", (function() {
            return It
        })), r.d(e, "L", (function() {
            return pe
        })), r.d(e, "M", (function() {
            return de
        })), r.d(e, "N", (function() {
            return I
        })), r.d(e, "O", (function() {
            return ae
        }));
        var i = r(12),
            n = r(0),
            o = r(1),
            s = r(4),
            a = r(8),
            h = r(2),
            u = r(6),
            l = function(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), this._width = t, this._height = e, this.destroyed = !1, this.internal = !1, this.onResize = new i.a("setRealSize", 2), this.onUpdate = new i.a("update"), this.onError = new i.a("onError", 1)
            },
            c = {
                valid: {
                    configurable: !0
                },
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                }
            };
        l.prototype.bind = function(t) {
            this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.run(this._width, this._height)
        }, l.prototype.unbind = function(t) {
            this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t)
        }, l.prototype.resize = function(t, e) {
            t === this._width && e === this._height || (this._width = t, this._height = e, this.onResize.run(t, e))
        }, c.valid.get = function() {
            return !!this._width && !!this._height
        }, l.prototype.update = function() {
            this.destroyed || this.onUpdate.run()
        }, l.prototype.load = function() {
            return Promise.resolve()
        }, c.width.get = function() {
            return this._width
        }, c.height.get = function() {
            return this._height
        }, l.prototype.upload = function(t, e, r) {
            return !1
        }, l.prototype.style = function(t, e, r) {
            return !1
        }, l.prototype.dispose = function() {}, l.prototype.destroy = function() {
            this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null)
        }, Object.defineProperties(l.prototype, c);
        var d = function(t) {
                function e(e) {
                    var r = e.naturalWidth || e.videoWidth || e.width,
                        i = e.naturalHeight || e.videoHeight || e.height;
                    t.call(this, r, i), this.source = e, this.noSubImage = !1
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.crossOrigin = function(t, e, r) {
                    void 0 === r && 0 !== e.indexOf("data:") ? t.crossOrigin = Object(n.determineCrossOrigin)(e) : !1 !== r && (t.crossOrigin = "string" == typeof r ? r : "anonymous")
                }, e.prototype.upload = function(t, e, r, i) {
                    var n = t.gl,
                        s = e.realWidth,
                        a = e.realHeight;
                    return i = i || this.source, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === o.a.UNPACK), this.noSubImage || e.target !== n.TEXTURE_2D || r.width !== s || r.height !== a ? (r.width = s, r.height = a, n.texImage2D(e.target, 0, e.format, e.format, e.type, i)) : n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, e.type, i), !0
                }, e.prototype.update = function() {
                    if (!this.destroyed) {
                        var e = this.source.naturalWidth || this.source.videoWidth || this.source.width,
                            r = this.source.naturalHeight || this.source.videoHeight || this.source.height;
                        this.resize(e, r), t.prototype.update.call(this)
                    }
                }, e.prototype.dispose = function() {
                    this.source = null
                }, e
            }(l),
            p = function(t) {
                function e(e, r) {
                    if (r = r || {}, !(e instanceof HTMLImageElement)) {
                        var i = new Image;
                        t.crossOrigin(i, e, r.crossorigin), i.src = e, e = i
                    }
                    t.call(this, e), !e.complete && this._width && this._height && (this._width = 0, this._height = 0), this.url = e.src, this._process = null, this.preserveBitmap = !1, this.createBitmap = (void 0 !== r.createBitmap ? r.createBitmap : s.b.CREATE_IMAGE_BITMAP) && !!window.createImageBitmap, this.alphaMode = "number" == typeof r.alphaMode ? r.alphaMode : null, void 0 !== r.premultiplyAlpha && (this.premultiplyAlpha = r.premultiplyAlpha), this.bitmap = null, this._load = null, !1 !== r.autoLoad && this.load()
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.load = function(t) {
                    var e = this;
                    return void 0 !== t && (this.createBitmap = t), this._load ? this._load : (this._load = new Promise((function(t) {
                        e.url = e.source.src;
                        var r = e.source,
                            i = function() {
                                e.destroyed || (r.onload = null, r.onerror = null, e.resize(r.width, r.height), e._load = null, e.createBitmap ? t(e.process()) : t(e))
                            };
                        r.complete && r.src ? i() : (r.onload = i, r.onerror = function(t) {
                            return e.onError.run(t)
                        })
                    })), this._load)
                }, e.prototype.process = function() {
                    var t = this;
                    return null !== this._process ? this._process : null === this.bitmap && window.createImageBitmap ? (this._process = window.createImageBitmap(this.source, 0, 0, this.source.width, this.source.height, {
                        premultiplyAlpha: this.premultiplyAlpha === o.a.UNPACK ? "premultiply" : "none"
                    }).then((function(e) {
                        return t.destroyed ? Promise.reject() : (t.bitmap = e, t.update(), t._process = null, Promise.resolve(t))
                    })), this._process) : Promise.resolve(this)
                }, e.prototype.upload = function(e, r, i) {
                    if ("number" == typeof this.alphaMode && (r.alphaMode = this.alphaMode), !this.createBitmap) return t.prototype.upload.call(this, e, r, i);
                    if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
                    if (t.prototype.upload.call(this, e, r, i, this.bitmap), !this.preserveBitmap) {
                        var n = !0;
                        for (var o in r._glTextures) {
                            var s = r._glTextures[o];
                            if (s !== i && s.dirtyId !== r.dirtyId) {
                                n = !1;
                                break
                            }
                        }
                        n && (this.bitmap.close && this.bitmap.close(), this.bitmap = null)
                    }
                    return !0
                }, e.prototype.dispose = function() {
                    this.source.onload = null, this.source.onerror = null, t.prototype.dispose.call(this), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null
                }, e
            }(d),
            f = [];

        function m(t, e) {
            if (!t) return null;
            var r = "";
            if ("string" == typeof t) {
                var i = /\.(\w{3,4})(?:$|\?|#)/i.exec(t);
                i && (r = i[1].toLowerCase())
            }
            for (var n = f.length - 1; n >= 0; --n) {
                var o = f[n];
                if (o.test && o.test(t, r)) return new o(t, e)
            }
            return new p(t, e)
        }
        var g = function(t) {
                function e(e, r) {
                    var i = r || {},
                        n = i.width,
                        o = i.height;
                    if (!n || !o) throw new Error("BufferResource width or height invalid");
                    t.call(this, n, o), this.data = e
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.upload = function(t, e, r) {
                    var i = t.gl;
                    return i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === o.a.UNPACK), r.width === e.width && r.height === e.height ? i.texSubImage2D(e.target, 0, 0, 0, e.width, e.height, e.format, e.type, this.data) : (r.width = e.width, r.height = e.height, i.texImage2D(e.target, 0, r.internalFormat, e.width, e.height, 0, e.format, r.type, this.data)), !0
                }, e.prototype.dispose = function() {
                    this.data = null
                }, e.test = function(t) {
                    return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array
                }, e
            }(l),
            v = {
                scaleMode: o.k.NEAREST,
                format: o.e.RGBA,
                alphaMode: o.a.NPM
            },
            y = function(t) {
                function e(e, r) {
                    void 0 === e && (e = null), void 0 === r && (r = null), t.call(this);
                    var i = (r = r || {}).alphaMode,
                        a = r.mipmap,
                        h = r.anisotropicLevel,
                        u = r.scaleMode,
                        c = r.width,
                        d = r.height,
                        p = r.wrapMode,
                        f = r.format,
                        g = r.type,
                        v = r.target,
                        y = r.resolution,
                        x = r.resourceOptions;
                    !e || e instanceof l || ((e = m(e, x)).internal = !0), this.width = c || 0, this.height = d || 0, this.resolution = y || s.b.RESOLUTION, this.mipmap = void 0 !== a ? a : s.b.MIPMAP_TEXTURES, this.anisotropicLevel = void 0 !== h ? h : s.b.ANISOTROPIC_LEVEL, this.wrapMode = p || s.b.WRAP_MODE, this.scaleMode = void 0 !== u ? u : s.b.SCALE_MODE, this.format = f || o.e.RGBA, this.type = g || o.m.UNSIGNED_BYTE, this.target = v || o.l.TEXTURE_2D, this.alphaMode = void 0 !== i ? i : o.a.UNPACK, void 0 !== r.premultiplyAlpha && (this.premultiplyAlpha = r.premultiplyAlpha), this.uid = Object(n.uid)(), this.touched = 0, this.isPowerOfTwo = !1, this._refreshPOT(), this._glTextures = {}, this.dirtyId = 0, this.dirtyStyleId = 0, this.cacheId = null, this.valid = c > 0 && d > 0, this.textureCacheIds = [], this.destroyed = !1, this.resource = null, this._batchEnabled = 0, this._batchLocation = 0, this.setResource(e)
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    realWidth: {
                        configurable: !0
                    },
                    realHeight: {
                        configurable: !0
                    }
                };
                return r.realWidth.get = function() {
                    return Math.ceil(this.width * this.resolution - 1e-4)
                }, r.realHeight.get = function() {
                    return Math.ceil(this.height * this.resolution - 1e-4)
                }, e.prototype.setStyle = function(t, e) {
                    var r;
                    return void 0 !== t && t !== this.scaleMode && (this.scaleMode = t, r = !0), void 0 !== e && e !== this.mipmap && (this.mipmap = e, r = !0), r && this.dirtyStyleId++, this
                }, e.prototype.setSize = function(t, e, r) {
                    return this.resolution = r || this.resolution, this.width = t, this.height = e, this._refreshPOT(), this.update(), this
                }, e.prototype.setRealSize = function(t, e, r) {
                    return this.resolution = r || this.resolution, this.width = t / this.resolution, this.height = e / this.resolution, this._refreshPOT(), this.update(), this
                }, e.prototype._refreshPOT = function() {
                    this.isPowerOfTwo = Object(n.isPow2)(this.realWidth) && Object(n.isPow2)(this.realHeight)
                }, e.prototype.setResolution = function(t) {
                    var e = this.resolution;
                    return e === t ? this : (this.resolution = t, this.valid && (this.width = this.width * e / t, this.height = this.height * e / t, this.emit("update", this)), this._refreshPOT(), this)
                }, e.prototype.setResource = function(t) {
                    if (this.resource === t) return this;
                    if (this.resource) throw new Error("Resource can be set only once");
                    return t.bind(this), this.resource = t, this
                }, e.prototype.update = function() {
                    this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this))
                }, e.prototype.onError = function(t) {
                    this.emit("error", this, t)
                }, e.prototype.destroy = function() {
                    this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete n.BaseTextureCache[this.cacheId], delete n.TextureCache[this.cacheId], this.cacheId = null), this.dispose(), e.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0
                }, e.prototype.dispose = function() {
                    this.emit("dispose", this)
                }, e.from = function(t, r, i) {
                    void 0 === i && (i = s.b.STRICT_TEXTURE_CACHE);
                    var o = "string" == typeof t,
                        a = null;
                    o ? a = t : (t._pixiId || (t._pixiId = "pixiid_" + Object(n.uid)()), a = t._pixiId);
                    var h = n.BaseTextureCache[a];
                    if (o && i && !h) throw new Error('The cacheId "' + a + '" does not exist in BaseTextureCache.');
                    return h || ((h = new e(t, r)).cacheId = a, e.addToCache(h, a)), h
                }, e.fromBuffer = function(t, r, i, n) {
                    t = t || new Float32Array(r * i * 4);
                    var s = new g(t, {
                            width: r,
                            height: i
                        }),
                        a = t instanceof Float32Array ? o.m.FLOAT : o.m.UNSIGNED_BYTE;
                    return new e(s, Object.assign(v, n || {
                        width: r,
                        height: i,
                        type: a
                    }))
                }, e.addToCache = function(t, e) {
                    e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), n.BaseTextureCache[e] && console.warn("BaseTexture added to the cache with an id [" + e + "] that already had an entry"), n.BaseTextureCache[e] = t)
                }, e.removeFromCache = function(t) {
                    if ("string" == typeof t) {
                        var e = n.BaseTextureCache[t];
                        if (e) {
                            var r = e.textureCacheIds.indexOf(t);
                            return r > -1 && e.textureCacheIds.splice(r, 1), delete n.BaseTextureCache[t], e
                        }
                    } else if (t && t.textureCacheIds) {
                        for (var i = 0; i < t.textureCacheIds.length; ++i) delete n.BaseTextureCache[t.textureCacheIds[i]];
                        return t.textureCacheIds.length = 0, t
                    }
                    return null
                }, Object.defineProperties(e.prototype, r), e
            }(n.EventEmitter);
        y._globalBatch = 0;
        var x = function(t) {
                function e(e, r) {
                    var i;
                    r = r || {};
                    var n = e;
                    Array.isArray(e) && (i = e, n = e.length), t.call(this, r.width, r.height), this.items = [], this.itemDirtyIds = [];
                    for (var o = 0; o < n; o++) {
                        var s = new y;
                        this.items.push(s), this.itemDirtyIds.push(-1)
                    }
                    if (this.length = n, this._load = null, i)
                        for (var a = 0; a < n; a++) this.addResourceAt(m(i[a], r), a)
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.dispose = function() {
                    for (var t = 0, e = this.length; t < e; t++) this.items[t].destroy();
                    this.items = null, this.itemDirtyIds = null, this._load = null
                }, e.prototype.addResourceAt = function(t, e) {
                    if (!this.items[e]) throw new Error("Index " + e + " is out of bounds");
                    return t.valid && !this.valid && this.resize(t.width, t.height), this.items[e].setResource(t), this
                }, e.prototype.bind = function(e) {
                    t.prototype.bind.call(this, e), e.target = o.l.TEXTURE_2D_ARRAY;
                    for (var r = 0; r < this.length; r++) this.items[r].on("update", e.update, e)
                }, e.prototype.unbind = function(e) {
                    t.prototype.unbind.call(this, e);
                    for (var r = 0; r < this.length; r++) this.items[r].off("update", e.update, e)
                }, e.prototype.load = function() {
                    var t = this;
                    if (this._load) return this._load;
                    var e = this.items.map((function(t) {
                            return t.resource
                        })),
                        r = e.map((function(t) {
                            return t.load()
                        }));
                    return this._load = Promise.all(r).then((function() {
                        var r = e[0],
                            i = r.width,
                            n = r.height;
                        return t.resize(i, n), Promise.resolve(t)
                    })), this._load
                }, e.prototype.upload = function(t, e, r) {
                    var i = this.length,
                        n = this.itemDirtyIds,
                        o = this.items,
                        s = t.gl;
                    r.dirtyId < 0 && s.texImage3D(s.TEXTURE_2D_ARRAY, 0, e.format, this._width, this._height, i, 0, e.format, e.type, null);
                    for (var a = 0; a < i; a++) {
                        var h = o[a];
                        n[a] < h.dirtyId && (n[a] = h.dirtyId, h.valid && s.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, a, h.resource.width, h.resource.height, 1, e.format, e.type, h.resource.source))
                    }
                    return !0
                }, e
            }(l),
            _ = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.test = function(t) {
                    var e = window.OffscreenCanvas;
                    return !!(e && t instanceof e) || t instanceof HTMLCanvasElement
                }, e
            }(d),
            b = function(t) {
                function e(r, i) {
                    if (i = i || {}, t.call(this, r, i), this.length !== e.SIDES) throw new Error("Invalid length. Got " + this.length + ", expected 6");
                    for (var n = 0; n < e.SIDES; n++) this.items[n].target = o.l.TEXTURE_CUBE_MAP_POSITIVE_X + n;
                    !1 !== i.autoLoad && this.load()
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.bind = function(e) {
                    t.prototype.bind.call(this, e), e.target = o.l.TEXTURE_CUBE_MAP
                }, e.prototype.upload = function(t, r, i) {
                    for (var n = this.itemDirtyIds, o = 0; o < e.SIDES; o++) {
                        var s = this.items[o];
                        n[o] < s.dirtyId && (n[o] = s.dirtyId, s.valid && s.resource.upload(t, s, i))
                    }
                    return !0
                }, e
            }(x);
        b.SIDES = 6;
        var T = function(t) {
            function e(e, r) {
                r = r || {}, t.call(this, document.createElement("canvas")), this._width = 0, this._height = 0, this.svg = e, this.scale = r.scale || 1, this._overrideWidth = r.width, this._overrideHeight = r.height, this._resolve = null, this._crossorigin = r.crossorigin, this._load = null, !1 !== r.autoLoad && this.load()
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.load = function() {
                var t = this;
                return this._load ? this._load : (this._load = new Promise((function(e) {
                    if (t._resolve = function() {
                            t.resize(t.source.width, t.source.height), e(t)
                        }, /^\<svg/.test(t.svg.trim())) {
                        if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
                        t.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(t.svg)))
                    }
                    t._loadSvg()
                })), this._load)
            }, e.prototype._loadSvg = function() {
                var e = this,
                    r = new Image;
                t.crossOrigin(r, this.svg, this._crossorigin), r.src = this.svg, r.onerror = function(t) {
                    r.onerror = null, e.onError.run(t)
                }, r.onload = function() {
                    var t = r.width,
                        i = r.height;
                    if (!t || !i) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                    var o = t * e.scale,
                        s = i * e.scale;
                    (e._overrideWidth || e._overrideHeight) && (o = e._overrideWidth || e._overrideHeight / i * t, s = e._overrideHeight || e._overrideWidth / t * i), o = Math.round(o), s = Math.round(s);
                    var a = e.source;
                    a.width = o, a.height = s, a._pixiId = "canvas_" + Object(n.uid)(), a.getContext("2d").drawImage(r, 0, 0, t, i, 0, 0, o, s), e._resolve(), e._resolve = null
                }
            }, e.getSize = function(t) {
                var r = e.SVG_SIZE.exec(t),
                    i = {};
                return r && (i[r[1]] = Math.round(parseFloat(r[3])), i[r[5]] = Math.round(parseFloat(r[7]))), i
            }, e.prototype.dispose = function() {
                t.prototype.dispose.call(this), this._resolve = null, this._crossorigin = null
            }, e.test = function(t, e) {
                return "svg" === e || "string" == typeof t && 0 === t.indexOf("data:image/svg+xml;base64") || "string" == typeof t && 0 === t.indexOf("<svg")
            }, e
        }(d);
        T.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
        var w = function(t) {
            function e(e, r) {
                if (r = r || {}, !(e instanceof HTMLVideoElement)) {
                    var i = document.createElement("video");
                    i.setAttribute("preload", "auto"), i.setAttribute("webkit-playsinline", ""), i.setAttribute("playsinline", ""), "string" == typeof e && (e = [e]), t.crossOrigin(i, e[0].src || e[0], r.crossorigin);
                    for (var n = 0; n < e.length; ++n) {
                        var o = document.createElement("source"),
                            s = e[n],
                            a = s.src,
                            h = s.mime,
                            u = (a = a || e[n]).split("?").shift().toLowerCase(),
                            l = u.substr(u.lastIndexOf(".") + 1);
                        h = h || "video/" + l, o.src = a, o.type = h, i.appendChild(o)
                    }
                    e = i
                }
                t.call(this, e), this.noSubImage = !0, this._autoUpdate = !0, this._isAutoUpdating = !1, this._updateFPS = r.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = !1 !== r.autoPlay, this._load = null, this._resolve = null, this._onCanPlay = this._onCanPlay.bind(this), this._onError = this._onError.bind(this), !1 !== r.autoLoad && this.load()
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                autoUpdate: {
                    configurable: !0
                },
                updateFPS: {
                    configurable: !0
                }
            };
            return e.prototype.update = function(e) {
                if (void 0 === e && (e = 0), !this.destroyed) {
                    var r = a.a.shared.elapsedMS * this.source.playbackRate;
                    this._msToNextUpdate = Math.floor(this._msToNextUpdate - r), (!this._updateFPS || this._msToNextUpdate <= 0) && (t.prototype.update.call(this, e), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0)
                }
            }, e.prototype.load = function() {
                var t = this;
                if (this._load) return this._load;
                var e = this.source;
                return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0), e.addEventListener("play", this._onPlayStart.bind(this)), e.addEventListener("pause", this._onPlayStop.bind(this)), this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay), e.addEventListener("canplaythrough", this._onCanPlay), e.addEventListener("error", this._onError, !0)), this._load = new Promise((function(r) {
                    t.valid ? r(t) : (t._resolve = r, e.load())
                })), this._load
            }, e.prototype._onError = function() {
                this.source.removeEventListener("error", this._onError, !0), this.onError.run(event)
            }, e.prototype._isSourcePlaying = function() {
                var t = this.source;
                return t.currentTime > 0 && !1 === t.paused && !1 === t.ended && t.readyState > 2
            }, e.prototype._isSourceReady = function() {
                return 3 === this.source.readyState || 4 === this.source.readyState
            }, e.prototype._onPlayStart = function() {
                this.valid || this._onCanPlay(), !this._isAutoUpdating && this.autoUpdate && (a.a.shared.add(this.update, this), this._isAutoUpdating = !0)
            }, e.prototype._onPlayStop = function() {
                this._isAutoUpdating && (a.a.shared.remove(this.update, this), this._isAutoUpdating = !1)
            }, e.prototype._onCanPlay = function() {
                var t = this.source;
                t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlay);
                var e = this.valid;
                this.resize(t.videoWidth, t.videoHeight), !e && this._resolve && (this._resolve(this), this._resolve = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play()
            }, e.prototype.dispose = function() {
                this._isAutoUpdating && a.a.shared.remove(this.update, this), this.source && (this.source.removeEventListener("error", this._onError, !0), this.source.pause(), this.source.src = "", this.source.load()), t.prototype.dispose.call(this)
            }, r.autoUpdate.get = function() {
                return this._autoUpdate
            }, r.autoUpdate.set = function(t) {
                t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isAutoUpdating ? (a.a.shared.remove(this.update, this), this._isAutoUpdating = !1) : this._autoUpdate && !this._isAutoUpdating && (a.a.shared.add(this.update, this), this._isAutoUpdating = !0))
            }, r.updateFPS.get = function() {
                return this._updateFPS
            }, r.updateFPS.set = function(t) {
                t !== this._updateFPS && (this._updateFPS = t)
            }, e.test = function(t, r) {
                return t instanceof HTMLVideoElement || e.TYPES.indexOf(r) > -1
            }, Object.defineProperties(e.prototype, r), e
        }(d);
        w.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"];
        var E = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.test = function(t) {
                return !!window.createImageBitmap && t instanceof ImageBitmap
            }, e
        }(d);
        f.push(p, E, _, w, T, g, b, x);
        var I = {
                INSTALLED: f,
                autoDetectResource: m,
                ArrayResource: x,
                BufferResource: g,
                CanvasResource: _,
                CubeResource: b,
                ImageResource: p,
                ImageBitmapResource: E,
                SVGResource: T,
                VideoResource: w,
                Resource: l,
                BaseImageResource: d
            },
            S = function(t) {
                this.renderer = t
            };
        S.prototype.destroy = function() {
            this.renderer = null
        };
        var P = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.upload = function(t, e, r) {
                    var i = t.gl;
                    return i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === o.a.UNPACK), r.width === e.width && r.height === e.height ? i.texSubImage2D(e.target, 0, 0, 0, e.width, e.height, e.format, e.type, this.data) : (r.width = e.width, r.height = e.height, i.texImage2D(e.target, 0, i.DEPTH_COMPONENT16, e.width, e.height, 0, e.format, e.type, this.data)), !0
                }, e
            }(g),
            A = function(t, e) {
                this.width = Math.ceil(t || 100), this.height = Math.ceil(e || 100), this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new i.a("disposeFramebuffer", 2)
            },
            M = {
                colorTexture: {
                    configurable: !0
                }
            };
        M.colorTexture.get = function() {
            return this.colorTextures[0]
        }, A.prototype.addColorTexture = function(t, e) {
            return void 0 === t && (t = 0), this.colorTextures[t] = e || new y(null, {
                scaleMode: 0,
                resolution: 1,
                mipmap: !1,
                width: this.width,
                height: this.height
            }), this.dirtyId++, this.dirtyFormat++, this
        }, A.prototype.addDepthTexture = function(t) {
            return this.depthTexture = t || new y(new P(null, {
                width: this.width,
                height: this.height
            }), {
                scaleMode: 0,
                resolution: 1,
                width: this.width,
                height: this.height,
                mipmap: !1,
                format: o.e.DEPTH_COMPONENT,
                type: o.m.UNSIGNED_SHORT
            }), this.dirtyId++, this.dirtyFormat++, this
        }, A.prototype.enableDepth = function() {
            return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this
        }, A.prototype.enableStencil = function() {
            return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this
        }, A.prototype.resize = function(t, e) {
            if (t = Math.ceil(t), e = Math.ceil(e), t !== this.width || e !== this.height) {
                this.width = t, this.height = e, this.dirtyId++, this.dirtySize++;
                for (var r = 0; r < this.colorTextures.length; r++) {
                    var i = this.colorTextures[r],
                        n = i.resolution;
                    i.setSize(t / n, e / n)
                }
                if (this.depthTexture) {
                    var o = this.depthTexture.resolution;
                    this.depthTexture.setSize(t / o, e / o)
                }
            }
        }, A.prototype.dispose = function() {
            this.disposeRunner.run(this, !1)
        }, Object.defineProperties(A.prototype, M);
        var C = function(t) {
                function e(e) {
                    "number" == typeof e && (e = {
                        width: arguments[0],
                        height: arguments[1],
                        scaleMode: arguments[2],
                        resolution: arguments[3]
                    });
                    t.call(this, null, e);
                    var r = e || {},
                        i = r.width,
                        n = r.height;
                    this.mipmap = !1, this.width = Math.ceil(i) || 100, this.height = Math.ceil(n) || 100, this.valid = !0, this._canvasRenderTarget = null, this.clearColor = [0, 0, 0, 0], this.framebuffer = new A(this.width * this.resolution, this.height * this.resolution).addColorTexture(0, this), this.maskStack = [], this.filterStack = [{}]
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.resize = function(t, e) {
                    t = Math.ceil(t), e = Math.ceil(e), this.framebuffer.resize(t * this.resolution, e * this.resolution)
                }, e.prototype.dispose = function() {
                    this.framebuffer.dispose(), t.prototype.dispose.call(this)
                }, e.prototype.destroy = function() {
                    t.prototype.destroy.call(this, !0), this.framebuffer = null
                }, e
            }(y),
            O = function() {
                this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8)
            };
        O.prototype.set = function(t, e, r) {
            var i = e.width,
                n = e.height;
            if (r) {
                var o = t.width / 2 / i,
                    s = t.height / 2 / n,
                    a = t.x / i + o,
                    u = t.y / n + s;
                r = h.n.add(r, h.n.NW), this.x0 = a + o * h.n.uX(r), this.y0 = u + s * h.n.uY(r), r = h.n.add(r, 2), this.x1 = a + o * h.n.uX(r), this.y1 = u + s * h.n.uY(r), r = h.n.add(r, 2), this.x2 = a + o * h.n.uX(r), this.y2 = u + s * h.n.uY(r), r = h.n.add(r, 2), this.x3 = a + o * h.n.uX(r), this.y3 = u + s * h.n.uY(r)
            } else this.x0 = t.x / i, this.y0 = t.y / n, this.x1 = (t.x + t.width) / i, this.y1 = t.y / n, this.x2 = (t.x + t.width) / i, this.y2 = (t.y + t.height) / n, this.x3 = t.x / i, this.y3 = (t.y + t.height) / n;
            this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3
        };
        var R = new O,
            D = function(t) {
                function e(r, i, n, o, s, a) {
                    if (t.call(this), this.noFrame = !1, i || (this.noFrame = !0, i = new h.j(0, 0, 1, 1)), r instanceof e && (r = r.baseTexture), this.baseTexture = r, this._frame = i, this.trim = o, this.valid = !1, this.requiresUpdate = !1, this._uvs = R, this.uvMatrix = null, this.orig = n || i, this._rotate = Number(s || 0), !0 === s) this._rotate = 2;
                    else if (this._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
                    this.defaultAnchor = a ? new h.g(a.x, a.y) : new h.g(0, 0), this._updateID = 0, this.textureCacheIds = [], r.valid ? this.noFrame ? r.valid && this.onBaseTextureUpdated(r) : this.frame = i : r.once("loaded", this.onBaseTextureUpdated, this), this.noFrame && r.on("update", this.onBaseTextureUpdated, this)
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    resolution: {
                        configurable: !0
                    },
                    frame: {
                        configurable: !0
                    },
                    rotate: {
                        configurable: !0
                    },
                    width: {
                        configurable: !0
                    },
                    height: {
                        configurable: !0
                    }
                };
                return e.prototype.update = function() {
                    this.baseTexture.resource && this.baseTexture.resource.update()
                }, e.prototype.onBaseTextureUpdated = function(t) {
                    if (this.noFrame) {
                        if (!this.baseTexture.valid) return;
                        this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs()
                    } else this.frame = this._frame;
                    this.emit("update", this)
                }, e.prototype.destroy = function(t) {
                    if (this.baseTexture) {
                        if (t) {
                            var r = this.baseTexture.resource;
                            r && n.TextureCache[r.url] && e.removeFromCache(r.url), this.baseTexture.destroy()
                        }
                        this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null
                    }
                    this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, e.removeFromCache(this), this.textureCacheIds = null
                }, e.prototype.clone = function() {
                    return new e(this.baseTexture, this.frame, this.orig, this.trim, this.rotate, this.defaultAnchor)
                }, e.prototype.updateUvs = function() {
                    this._uvs === R && (this._uvs = new O), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
                }, e.from = function(t, r, i) {
                    void 0 === r && (r = {}), void 0 === i && (i = s.b.STRICT_TEXTURE_CACHE);
                    var o = "string" == typeof t,
                        a = null;
                    o ? a = t : (t._pixiId || (t._pixiId = "pixiid_" + Object(n.uid)()), a = t._pixiId);
                    var h = n.TextureCache[a];
                    if (o && i && !h) throw new Error('The cacheId "' + a + '" does not exist in TextureCache.');
                    return h || (r.resolution || (r.resolution = Object(n.getResolutionOfUrl)(t)), (h = new e(new y(t, r))).baseTexture.cacheId = a, y.addToCache(h.baseTexture, a), e.addToCache(h, a)), h
                }, e.fromBuffer = function(t, r, i, n) {
                    return new e(y.fromBuffer(t, r, i, n))
                }, e.fromLoader = function(t, r, i) {
                    var o = new p(t);
                    o.url = r;
                    var a = new e(new y(o, {
                        scaleMode: s.b.SCALE_MODE,
                        resolution: Object(n.getResolutionOfUrl)(r)
                    }));
                    return i || (i = r), y.addToCache(a.baseTexture, i), e.addToCache(a, i), i !== r && (y.addToCache(a.baseTexture, r), e.addToCache(a, r)), a
                }, e.addToCache = function(t, e) {
                    e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), n.TextureCache[e] && console.warn("Texture added to the cache with an id [" + e + "] that already had an entry"), n.TextureCache[e] = t)
                }, e.removeFromCache = function(t) {
                    if ("string" == typeof t) {
                        var e = n.TextureCache[t];
                        if (e) {
                            var r = e.textureCacheIds.indexOf(t);
                            return r > -1 && e.textureCacheIds.splice(r, 1), delete n.TextureCache[t], e
                        }
                    } else if (t && t.textureCacheIds) {
                        for (var i = 0; i < t.textureCacheIds.length; ++i) n.TextureCache[t.textureCacheIds[i]] === t && delete n.TextureCache[t.textureCacheIds[i]];
                        return t.textureCacheIds.length = 0, t
                    }
                    return null
                }, r.resolution.get = function() {
                    return this.baseTexture.resolution
                }, r.frame.get = function() {
                    return this._frame
                }, r.frame.set = function(t) {
                    this._frame = t, this.noFrame = !1;
                    var e = t.x,
                        r = t.y,
                        i = t.width,
                        n = t.height,
                        o = e + i > this.baseTexture.width,
                        s = r + n > this.baseTexture.height;
                    if (o || s) {
                        var a = o && s ? "and" : "or",
                            h = "X: " + e + " + " + i + " = " + (e + i) + " > " + this.baseTexture.width,
                            u = "Y: " + r + " + " + n + " = " + (r + n) + " > " + this.baseTexture.height;
                        throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + h + " " + a + " " + u)
                    }
                    this.valid = i && n && this.baseTexture.valid, this.trim || this.rotate || (this.orig = t), this.valid && this.updateUvs()
                }, r.rotate.get = function() {
                    return this._rotate
                }, r.rotate.set = function(t) {
                    this._rotate = t, this.valid && this.updateUvs()
                }, r.width.get = function() {
                    return this.orig.width
                }, r.height.get = function() {
                    return this.orig.height
                }, Object.defineProperties(e.prototype, r), e
            }(n.EventEmitter);

        function F(t) {
            t.destroy = function() {}, t.on = function() {}, t.once = function() {}, t.emit = function() {}
        }
        D.EMPTY = new D(new y), F(D.EMPTY), F(D.EMPTY.baseTexture), D.WHITE = function() {
            var t = document.createElement("canvas");
            t.width = 16, t.height = 16;
            var e = t.getContext("2d");
            return e.fillStyle = "white", e.fillRect(0, 0, 16, 16), new D(new y(new _(t)))
        }(), F(D.WHITE), F(D.WHITE.baseTexture);
        var L = function(t) {
                function e(e, r) {
                    var i = null;
                    if (!(e instanceof C)) {
                        var n = arguments[1],
                            o = arguments[2],
                            s = arguments[3],
                            a = arguments[4];
                        console.warn("Please use RenderTexture.create(" + n + ", " + o + ") instead of the ctor directly."), i = arguments[0], r = null, e = new C({
                            width: n,
                            height: o,
                            scaleMode: s,
                            resolution: a
                        })
                    }
                    t.call(this, e, r), this.legacyRenderer = i, this.valid = !0, this.filterFrame = null, this.filterPoolKey = null, this.updateUvs()
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.resize = function(t, e, r) {
                    void 0 === r && (r = !0), t = Math.ceil(t), e = Math.ceil(e), this.valid = t > 0 && e > 0, this._frame.width = this.orig.width = t, this._frame.height = this.orig.height = e, r && this.baseTexture.resize(t, e), this.updateUvs()
                }, e.prototype.setResolution = function(t) {
                    var e = this.baseTexture;
                    e.resolution !== t && (e.setResolution(t), this.resize(e.width, e.height, !1))
                }, e.create = function(t) {
                    return "number" == typeof t && (t = {
                        width: t,
                        height: arguments[1],
                        scaleMode: arguments[2],
                        resolution: arguments[3]
                    }), new e(new C(t))
                }, e
            }(D),
            N = function(t) {
                this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0
            };
        N.prototype.createTexture = function(t, e) {
            var r = new C(Object.assign({
                width: t,
                height: e,
                resolution: 1
            }, this.textureOptions));
            return new L(r)
        }, N.prototype.getOptimalTexture = function(t, e, r) {
            void 0 === r && (r = 1);
            var i = N.SCREEN_KEY;
            t *= r, e *= r, this.enableFullScreen && t === this._pixelsWidth && e === this._pixelsHeight || (i = (65535 & (t = Object(n.nextPow2)(t))) << 16 | 65535 & (e = Object(n.nextPow2)(e))), this.texturePool[i] || (this.texturePool[i] = []);
            var o = this.texturePool[i].pop();
            return o || (o = this.createTexture(t, e)), o.filterPoolKey = i, o.setResolution(r), o
        }, N.prototype.getFilterTexture = function(t, e) {
            var r = this.getOptimalTexture(t.width, t.height, e || t.resolution);
            return r.filterFrame = t.filterFrame, r
        }, N.prototype.returnTexture = function(t) {
            var e = t.filterPoolKey;
            t.filterFrame = null, this.texturePool[e].push(t)
        }, N.prototype.returnFilterTexture = function(t) {
            this.returnTexture(t)
        }, N.prototype.clear = function(t) {
            if (t = !1 !== t)
                for (var e in this.texturePool) {
                    var r = this.texturePool[e];
                    if (r)
                        for (var i = 0; i < r.length; i++) r[i].destroy(!0)
                }
            this.texturePool = {}
        }, N.prototype.setScreenSize = function(t) {
            if (t.width !== this._pixelsWidth || t.height !== this._pixelsHeight) {
                var e = N.SCREEN_KEY,
                    r = this.texturePool[e];
                if (this.enableFullScreen = t.width > 0 && t.height > 0, r)
                    for (var i = 0; i < r.length; i++) r[i].destroy(!0);
                this.texturePool[e] = [], this._pixelsWidth = t.width, this._pixelsHeight = t.height
            }
        }, N.SCREEN_KEY = "screen";
        var k = function(t, e, r, i, n, o, s) {
            void 0 === r && (r = !1), void 0 === i && (i = 5126), this.buffer = t, this.size = e, this.normalized = r, this.type = i, this.stride = n, this.start = o, this.instance = s
        };
        k.prototype.destroy = function() {
            this.buffer = null
        }, k.from = function(t, e, r, i, n) {
            return new k(t, e, r, i, n)
        };
        var B = 0,
            U = function(t, e, r) {
                void 0 === e && (e = !0), void 0 === r && (r = !1), this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = r, this.static = e, this.id = B++, this.disposeRunner = new i.a("disposeBuffer", 2)
            };

        function X(t) {
            if (4 === t.BYTES_PER_ELEMENT) return t instanceof Float32Array ? "Float32Array" : t instanceof Uint32Array ? "Uint32Array" : "Int32Array";
            if (2 === t.BYTES_PER_ELEMENT) {
                if (t instanceof Uint16Array) return "Uint16Array"
            } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array) return "Uint8Array";
            return null
        }
        U.prototype.update = function(t) {
            this.data = t || this.data, this._updateID++
        }, U.prototype.dispose = function() {
            this.disposeRunner.run(this, !1)
        }, U.prototype.destroy = function() {
            this.dispose(), this.data = null
        }, U.from = function(t) {
            return t instanceof Array && (t = new Float32Array(t)), new U(t)
        };
        var V = {
            Float32Array: Float32Array,
            Uint32Array: Uint32Array,
            Int32Array: Int32Array,
            Uint8Array: Uint8Array
        };
        var j = {
                5126: 4,
                5123: 2,
                5121: 1
            },
            Y = 0,
            G = {
                Float32Array: Float32Array,
                Uint32Array: Uint32Array,
                Int32Array: Int32Array,
                Uint8Array: Uint8Array,
                Uint16Array: Uint16Array
            },
            H = function(t, e) {
                void 0 === t && (t = []), void 0 === e && (e = {}), this.buffers = t, this.indexBuffer = null, this.attributes = e, this.glVertexArrayObjects = {}, this.id = Y++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new i.a("disposeGeometry", 2), this.refCount = 0
            };
        H.prototype.addAttribute = function(t, e, r, i, n, o, s, a) {
            if (void 0 === i && (i = !1), void 0 === a && (a = !1), !e) throw new Error("You must pass a buffer when creating an attribute");
            e.data || (e instanceof Array && (e = new Float32Array(e)), e = new U(e));
            var h = t.split("|");
            if (h.length > 1) {
                for (var u = 0; u < h.length; u++) this.addAttribute(h[u], e, r, i, n);
                return this
            }
            var l = this.buffers.indexOf(e);
            return -1 === l && (this.buffers.push(e), l = this.buffers.length - 1), this.attributes[t] = new k(l, r, i, n, o, s, a), this.instanced = this.instanced || a, this
        }, H.prototype.getAttribute = function(t) {
            return this.attributes[t]
        }, H.prototype.getBuffer = function(t) {
            return this.buffers[this.getAttribute(t).buffer]
        }, H.prototype.addIndex = function(t) {
            return t.data || (t instanceof Array && (t = new Uint16Array(t)), t = new U(t)), t.index = !0, this.indexBuffer = t, -1 === this.buffers.indexOf(t) && this.buffers.push(t), this
        }, H.prototype.getIndex = function() {
            return this.indexBuffer
        }, H.prototype.interleave = function() {
            if (1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer) return this;
            var t, e = [],
                r = [],
                i = new U;
            for (t in this.attributes) {
                var n = this.attributes[t],
                    o = this.buffers[n.buffer];
                e.push(o.data), r.push(n.size * j[n.type] / 4), n.buffer = 0
            }
            for (i.data = function(t, e) {
                    for (var r = 0, i = 0, n = {}, o = 0; o < t.length; o++) i += e[o], r += t[o].length;
                    for (var s = new ArrayBuffer(4 * r), a = null, h = 0, u = 0; u < t.length; u++) {
                        var l = e[u],
                            c = t[u],
                            d = X(c);
                        n[d] || (n[d] = new V[d](s)), a = n[d];
                        for (var p = 0; p < c.length; p++) {
                            a[(p / l | 0) * i + h + p % l] = c[p]
                        }
                        h += l
                    }
                    return new Float32Array(s)
                }(e, r), t = 0; t < this.buffers.length; t++) this.buffers[t] !== this.indexBuffer && this.buffers[t].destroy();
            return this.buffers = [i], this.indexBuffer && this.buffers.push(this.indexBuffer), this
        }, H.prototype.getSize = function() {
            for (var t in this.attributes) {
                var e = this.attributes[t];
                return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size)
            }
            return 0
        }, H.prototype.dispose = function() {
            this.disposeRunner.run(this, !1)
        }, H.prototype.destroy = function() {
            this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null
        }, H.prototype.clone = function() {
            for (var t = new H, e = 0; e < this.buffers.length; e++) t.buffers[e] = new U(this.buffers[e].data.slice());
            for (var r in this.attributes) {
                var i = this.attributes[r];
                t.attributes[r] = new k(i.buffer, i.size, i.normalized, i.type, i.stride, i.start, i.instance)
            }
            return this.indexBuffer && (t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)], t.indexBuffer.index = !0), t
        }, H.merge = function(t) {
            for (var e, r = new H, i = [], n = [], o = [], s = 0; s < t.length; s++) {
                e = t[s];
                for (var a = 0; a < e.buffers.length; a++) n[a] = n[a] || 0, n[a] += e.buffers[a].data.length, o[a] = 0
            }
            for (var h = 0; h < e.buffers.length; h++) i[h] = new(G[X(e.buffers[h].data)])(n[h]), r.buffers[h] = new U(i[h]);
            for (var u = 0; u < t.length; u++) {
                e = t[u];
                for (var l = 0; l < e.buffers.length; l++) i[l].set(e.buffers[l].data, o[l]), o[l] += e.buffers[l].data.length
            }
            if (r.attributes = e.attributes, e.indexBuffer) {
                r.indexBuffer = r.buffers[e.buffers.indexOf(e.indexBuffer)], r.indexBuffer.index = !0;
                for (var c = 0, d = 0, p = 0, f = 0, m = 0; m < e.buffers.length; m++)
                    if (e.buffers[m] !== e.indexBuffer) {
                        f = m;
                        break
                    } for (var g in e.attributes) {
                    var v = e.attributes[g];
                    (0 | v.buffer) === f && (d += v.size * j[v.type] / 4)
                }
                for (var y = 0; y < t.length; y++) {
                    for (var x = t[y].indexBuffer.data, _ = 0; _ < x.length; _++) r.indexBuffer.data[_ + p] += c;
                    c += e.buffers[f].data.length / d, p += x.length
                }
            }
            return r
        };
        var W = function(t) {
                function e() {
                    t.call(this), this.addAttribute("aVertexPosition", [0, 0, 1, 0, 1, 1, 0, 1]).addIndex([0, 1, 3, 2])
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
            }(H),
            z = function(t) {
                function e() {
                    t.call(this), this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertexBuffer = new U(this.vertices), this.uvBuffer = new U(this.uvs), this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3])
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.map = function(t, e) {
                    var r = 0,
                        i = 0;
                    return this.uvs[0] = r, this.uvs[1] = i, this.uvs[2] = r + e.width / t.width, this.uvs[3] = i, this.uvs[4] = r + e.width / t.width, this.uvs[5] = i + e.height / t.height, this.uvs[6] = r, this.uvs[7] = i + e.height / t.height, r = e.x, i = e.y, this.vertices[0] = r, this.vertices[1] = i, this.vertices[2] = r + e.width, this.vertices[3] = i, this.vertices[4] = r + e.width, this.vertices[5] = i + e.height, this.vertices[6] = r, this.vertices[7] = i + e.height, this.invalidate(), this
                }, e.prototype.invalidate = function() {
                    return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this
                }, e
            }(H),
            q = 0,
            Z = function(t, e) {
                this.uniforms = t, this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = q++, this.static = !!e
            };
        Z.prototype.update = function() {
            this.dirtyId++
        }, Z.prototype.add = function(t, e, r) {
            this.uniforms[t] = new Z(e, r)
        }, Z.from = function(t, e) {
            return new Z(t, e)
        };
        var K = function() {
            this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.sourceFrame = new h.j, this.destinationFrame = new h.j, this.filters = []
        };
        K.prototype.clear = function() {
            this.target = null, this.filters = null, this.renderTexture = null
        };
        var J = function(t) {
                function e(e) {
                    t.call(this, e), this.defaultFilterStack = [{}], this.texturePool = new N, this.texturePool.setScreenSize(e.view), this.statePool = [], this.quad = new W, this.quadUv = new z, this.tempRect = new h.j, this.activeState = {}, this.globalUniforms = new Z({
                        outputFrame: this.tempRect,
                        inputSize: new Float32Array(4),
                        inputPixel: new Float32Array(4),
                        inputClamp: new Float32Array(4),
                        resolution: 1,
                        filterArea: new Float32Array(4),
                        filterClamp: new Float32Array(4)
                    }, !0), this._pixelsWidth = e.view.width, this._pixelsHeight = e.view.height
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.push = function(t, e) {
                    for (var r = this.renderer, i = this.defaultFilterStack, n = this.statePool.pop() || new K, o = e[0].resolution, s = e[0].padding, a = e[0].autoFit, h = e[0].legacy, u = 1; u < e.length; u++) {
                        var l = e[u];
                        o = Math.min(o, l.resolution), s = Math.max(s, l.padding), a = a || l.autoFit, h = h || l.legacy
                    }
                    1 === i.length && (this.defaultFilterStack[0].renderTexture = r.renderTexture.current), i.push(n), n.resolution = o, n.legacy = h, n.target = t, n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), n.sourceFrame.pad(s), a && n.sourceFrame.fit(this.renderer.renderTexture.sourceFrame), n.sourceFrame.ceil(o), n.renderTexture = this.getOptimalFilterTexture(n.sourceFrame.width, n.sourceFrame.height, o), n.filters = e, n.destinationFrame.width = n.renderTexture.width, n.destinationFrame.height = n.renderTexture.height, n.renderTexture.filterFrame = n.sourceFrame, r.renderTexture.bind(n.renderTexture, n.sourceFrame), r.renderTexture.clear()
                }, e.prototype.pop = function() {
                    var t = this.defaultFilterStack,
                        e = t.pop(),
                        r = e.filters;
                    this.activeState = e;
                    var i = this.globalUniforms.uniforms;
                    i.outputFrame = e.sourceFrame, i.resolution = e.resolution;
                    var n = i.inputSize,
                        o = i.inputPixel,
                        s = i.inputClamp;
                    if (n[0] = e.destinationFrame.width, n[1] = e.destinationFrame.height, n[2] = 1 / n[0], n[3] = 1 / n[1], o[0] = n[0] * e.resolution, o[1] = n[1] * e.resolution, o[2] = 1 / o[0], o[3] = 1 / o[1], s[0] = .5 * o[2], s[1] = .5 * o[3], s[2] = e.sourceFrame.width * n[2] - .5 * o[2], s[3] = e.sourceFrame.height * n[3] - .5 * o[3], e.legacy) {
                        var a = i.filterArea;
                        a[0] = e.destinationFrame.width, a[1] = e.destinationFrame.height, a[2] = e.sourceFrame.x, a[3] = e.sourceFrame.y, i.filterClamp = i.inputClamp
                    }
                    this.globalUniforms.update();
                    var h = t[t.length - 1];
                    if (1 === r.length) r[0].apply(this, e.renderTexture, h.renderTexture, !1, e), this.returnFilterTexture(e.renderTexture);
                    else {
                        var u = e.renderTexture,
                            l = this.getOptimalFilterTexture(u.width, u.height, e.resolution);
                        l.filterFrame = u.filterFrame;
                        var c = 0;
                        for (c = 0; c < r.length - 1; ++c) {
                            r[c].apply(this, u, l, !0, e);
                            var d = u;
                            u = l, l = d
                        }
                        r[c].apply(this, u, h.renderTexture, !1, e), this.returnFilterTexture(u), this.returnFilterTexture(l)
                    }
                    e.clear(), this.statePool.push(e)
                }, e.prototype.applyFilter = function(t, e, r, i) {
                    var n = this.renderer;
                    n.renderTexture.bind(r, r ? r.filterFrame : null), i && n.renderTexture.clear(), t.uniforms.uSampler = e, t.uniforms.filterGlobals = this.globalUniforms, n.state.set(t.state), n.shader.bind(t), t.legacy ? (this.quadUv.map(e._frame, e.filterFrame), n.geometry.bind(this.quadUv), n.geometry.draw(o.c.TRIANGLES)) : (n.geometry.bind(this.quad), n.geometry.draw(o.c.TRIANGLE_STRIP))
                }, e.prototype.calculateSpriteMatrix = function(t, e) {
                    var r = this.activeState,
                        i = r.sourceFrame,
                        n = r.destinationFrame,
                        o = e._texture.orig,
                        s = t.set(n.width, 0, 0, n.height, i.x, i.y),
                        a = e.worldTransform.copyTo(h.d.TEMP_MATRIX);
                    return a.invert(), s.prepend(a), s.scale(1 / o.width, 1 / o.height), s.translate(e.anchor.x, e.anchor.y), s
                }, e.prototype.destroy = function() {
                    this.texturePool.clear(!1)
                }, e.prototype.getOptimalFilterTexture = function(t, e, r) {
                    return void 0 === r && (r = 1), this.texturePool.getOptimalTexture(t, e, r)
                }, e.prototype.getFilterTexture = function(t, e) {
                    if ("number" == typeof t) {
                        var r = t;
                        t = e, e = r
                    }
                    t = t || this.activeState.renderTexture;
                    var i = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution);
                    return i.filterFrame = t.filterFrame, i
                }, e.prototype.returnFilterTexture = function(t) {
                    this.texturePool.returnTexture(t)
                }, e.prototype.emptyPool = function() {
                    this.texturePool.clear(!0)
                }, e.prototype.resize = function() {
                    this.texturePool.setScreenSize(this.renderer.view)
                }, e
            }(S),
            Q = function(t) {
                this.renderer = t
            };
        Q.prototype.flush = function() {}, Q.prototype.destroy = function() {
            this.renderer = null
        }, Q.prototype.start = function() {}, Q.prototype.stop = function() {
            this.flush()
        }, Q.prototype.render = function(t) {};
        var $ = function(t) {
            function e(e) {
                t.call(this, e), this.emptyRenderer = new Q(e), this.currentRenderer = this.emptyRenderer
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setObjectRenderer = function(t) {
                this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
            }, e.prototype.flush = function() {
                this.setObjectRenderer(this.emptyRenderer)
            }, e.prototype.reset = function() {
                this.setObjectRenderer(this.emptyRenderer)
            }, e.prototype.copyBoundTextures = function(t, e) {
                for (var r = this.renderer.texture.boundTextures, i = e - 1; i >= 0; --i) t[i] = r[i] || null, t[i] && (t[i]._batchLocation = i)
            }, e.prototype.boundArray = function(t, e, r, i) {
                for (var n = t.elements, o = t.ids, s = t.count, a = 0, h = 0; h < s; h++) {
                    var u = n[h],
                        l = u._batchLocation;
                    if (l >= 0 && l < i && e[l] === u) o[h] = l;
                    else
                        for (; a < i;) {
                            var c = e[a];
                            if (!c || c._batchEnabled !== r || c._batchLocation !== a) {
                                o[h] = a, u._batchLocation = a, e[a] = u;
                                break
                            }
                            a++
                        }
                }
            }, e
        }(S);
        s.b.PREFER_ENV = n.isMobile.any ? o.d.WEBGL : o.d.WEBGL2, s.b.STRICT_TEXTURE_CACHE = !1;
        var tt = 0,
            et = function(t) {
                function e(e) {
                    t.call(this, e), this.webGLVersion = 1, this.extensions = {}, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), e.view.addEventListener("webglcontextlost", this.handleContextLost, !1), e.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1)
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    isLost: {
                        configurable: !0
                    }
                };
                return r.isLost.get = function() {
                    return !this.gl || this.gl.isContextLost()
                }, e.prototype.contextChange = function(t) {
                    this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = tt++, t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext()
                }, e.prototype.initFromContext = function(t) {
                    this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = tt++, this.renderer.runners.contextChange.run(t)
                }, e.prototype.initFromOptions = function(t) {
                    var e = this.createContext(this.renderer.view, t);
                    this.initFromContext(e)
                }, e.prototype.createContext = function(t, e) {
                    var r;
                    if (s.b.PREFER_ENV >= o.d.WEBGL2 && (r = t.getContext("webgl2", e)), r) this.webGLVersion = 2;
                    else if (this.webGLVersion = 1, !(r = t.getContext("webgl", e) || t.getContext("experimental-webgl", e))) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
                    return this.gl = r, this.getExtensions(), r
                }, e.prototype.getExtensions = function() {
                    var t = this.gl;
                    1 === this.webGLVersion ? Object.assign(this.extensions, {
                        drawBuffers: t.getExtension("WEBGL_draw_buffers"),
                        depthTexture: t.getExtension("WEBKIT_WEBGL_depth_texture"),
                        loseContext: t.getExtension("WEBGL_lose_context"),
                        vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
                        anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
                        uint32ElementIndex: t.getExtension("OES_element_index_uint"),
                        floatTexture: t.getExtension("OES_texture_float"),
                        floatTextureLinear: t.getExtension("OES_texture_float_linear"),
                        textureHalfFloat: t.getExtension("OES_texture_half_float"),
                        textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
                    }) : 2 === this.webGLVersion && Object.assign(this.extensions, {
                        anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
                        colorBufferFloat: t.getExtension("EXT_color_buffer_float"),
                        floatTextureLinear: t.getExtension("OES_texture_float_linear")
                    })
                }, e.prototype.handleContextLost = function(t) {
                    t.preventDefault()
                }, e.prototype.handleContextRestored = function() {
                    this.renderer.runners.contextChange.run(this.gl)
                }, e.prototype.destroy = function() {
                    var t = this.renderer.view;
                    t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext()
                }, e.prototype.postrender = function() {
                    this.renderer.renderingToScreen && this.gl.flush()
                }, e.prototype.validateContext = function(t) {
                    t.getContextAttributes().stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")
                }, Object.defineProperties(e.prototype, r), e
            }(S),
            rt = function(t) {
                function e(e) {
                    t.call(this, e), this.managedFramebuffers = [], this.unknownFramebuffer = new A(10, 10)
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    size: {
                        configurable: !0
                    }
                };
                return e.prototype.contextChange = function() {
                    var t = this.gl = this.renderer.gl;
                    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new h.j, this.hasMRT = !0, this.writeDepthTexture = !0, this.disposeAll(!0), 1 === this.renderer.context.webGLVersion) {
                        var e = this.renderer.context.extensions.drawBuffers,
                            r = this.renderer.context.extensions.depthTexture;
                        s.b.PREFER_ENV === o.d.WEBGL_LEGACY && (e = null, r = null), e ? t.drawBuffers = function(t) {
                            return e.drawBuffersWEBGL(t)
                        } : (this.hasMRT = !1, t.drawBuffers = function() {}), r || (this.writeDepthTexture = !1)
                    }
                }, e.prototype.bind = function(t, e) {
                    var r = this.gl;
                    if (t) {
                        var i = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
                        this.current !== t && (this.current = t, r.bindFramebuffer(r.FRAMEBUFFER, i.framebuffer)), i.dirtyId !== t.dirtyId && (i.dirtyId = t.dirtyId, i.dirtyFormat !== t.dirtyFormat ? (i.dirtyFormat = t.dirtyFormat, this.updateFramebuffer(t)) : i.dirtySize !== t.dirtySize && (i.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));
                        for (var n = 0; n < t.colorTextures.length; n++) t.colorTextures[n].texturePart ? this.renderer.texture.unbind(t.colorTextures[n].texture) : this.renderer.texture.unbind(t.colorTextures[n]);
                        t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, t.width, t.height)
                    } else this.current && (this.current = null, r.bindFramebuffer(r.FRAMEBUFFER, null)), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
                }, e.prototype.setViewport = function(t, e, r, i) {
                    var n = this.viewport;
                    n.width === r && n.height === i && n.x === t && n.y === e || (n.x = t, n.y = e, n.width = r, n.height = i, this.gl.viewport(t, e, r, i))
                }, r.size.get = function() {
                    return this.current ? {
                        x: 0,
                        y: 0,
                        width: this.current.width,
                        height: this.current.height
                    } : {
                        x: 0,
                        y: 0,
                        width: this.renderer.width,
                        height: this.renderer.height
                    }
                }, e.prototype.clear = function(t, e, r, i) {
                    var n = this.gl;
                    n.clearColor(t, e, r, i), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT)
                }, e.prototype.initFramebuffer = function(t) {
                    var e = {
                        framebuffer: this.gl.createFramebuffer(),
                        stencil: null,
                        dirtyId: 0,
                        dirtyFormat: 0,
                        dirtySize: 0
                    };
                    return t.glFramebuffers[this.CONTEXT_UID] = e, this.managedFramebuffers.push(t), t.disposeRunner.add(this), e
                }, e.prototype.resizeFramebuffer = function(t) {
                    var e = this.gl,
                        r = t.glFramebuffers[this.CONTEXT_UID];
                    r.stencil && (e.bindRenderbuffer(e.RENDERBUFFER, r.stencil), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height));
                    for (var i = t.colorTextures, n = 0; n < i.length; n++) this.renderer.texture.bind(i[n], 0);
                    t.depthTexture && this.renderer.texture.bind(t.depthTexture, 0)
                }, e.prototype.updateFramebuffer = function(t) {
                    var e = this.gl,
                        r = t.glFramebuffers[this.CONTEXT_UID],
                        i = t.colorTextures.length;
                    e.drawBuffers || (i = Math.min(i, 1));
                    for (var n = [], o = 0; o < i; o++) {
                        var s = t.colorTextures[o];
                        s.texturePart ? (this.renderer.texture.bind(s.texture, 0), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + o, e.TEXTURE_CUBE_MAP_NEGATIVE_X + s.side, s.texture._glTextures[this.CONTEXT_UID].texture, 0)) : (this.renderer.texture.bind(s, 0), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + o, e.TEXTURE_2D, s._glTextures[this.CONTEXT_UID].texture, 0)), n.push(e.COLOR_ATTACHMENT0 + o)
                    }
                    if ((n.length > 1 && e.drawBuffers(n), t.depthTexture) && this.writeDepthTexture) {
                        var a = t.depthTexture;
                        this.renderer.texture.bind(a, 0), e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, a._glTextures[this.CONTEXT_UID].texture, 0)
                    }
                    r.stencil || !t.stencil && !t.depth || (r.stencil = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, r.stencil), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height), t.depthTexture || e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, r.stencil))
                }, e.prototype.disposeFramebuffer = function(t, e) {
                    var r = t.glFramebuffers[this.CONTEXT_UID],
                        i = this.gl;
                    if (r) {
                        delete t.glFramebuffers[this.CONTEXT_UID];
                        var n = this.managedFramebuffers.indexOf(t);
                        n >= 0 && this.managedFramebuffers.splice(n, 1), t.disposeRunner.remove(this), e || (i.deleteFramebuffer(r.framebuffer), r.stencil && i.deleteRenderbuffer(r.stencil))
                    }
                }, e.prototype.disposeAll = function(t) {
                    var e = this.managedFramebuffers;
                    this.managedFramebuffers = [];
                    for (var r = 0; r < e.length; r++) this.disposeFramebuffer(e[r], t)
                }, e.prototype.forceStencil = function() {
                    var t = this.current;
                    if (t) {
                        var e = t.glFramebuffers[this.CONTEXT_UID];
                        if (e && !e.stencil) {
                            t.enableStencil();
                            var r = t.width,
                                i = t.height,
                                n = this.gl,
                                o = n.createRenderbuffer();
                            n.bindRenderbuffer(n.RENDERBUFFER, o), n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, r, i), e.stencil = o, n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, o)
                        }
                    }
                }, e.prototype.reset = function() {
                    this.current = this.unknownFramebuffer, this.viewport = new h.j
                }, Object.defineProperties(e.prototype, r), e
            }(S),
            it = function(t) {
                this.buffer = t, this.updateID = -1, this.byteLength = -1, this.refCount = 0
            },
            nt = {
                5126: 4,
                5123: 2,
                5121: 1
            },
            ot = function(t) {
                function e(e) {
                    t.call(this, e), this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.boundBuffers = {}, this.managedGeometries = {}, this.managedBuffers = {}
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.contextChange = function() {
                    this.disposeAll(!0);
                    var t = this.gl = this.renderer.gl,
                        e = this.renderer.context;
                    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, !t.createVertexArray) {
                        var r = this.renderer.context.extensions.vertexArrayObject;
                        s.b.PREFER_ENV === o.d.WEBGL_LEGACY && (r = null), r ? (t.createVertexArray = function() {
                            return r.createVertexArrayOES()
                        }, t.bindVertexArray = function(t) {
                            return r.bindVertexArrayOES(t)
                        }, t.deleteVertexArray = function(t) {
                            return r.deleteVertexArrayOES(t)
                        }) : (this.hasVao = !1, t.createVertexArray = function() {}, t.bindVertexArray = function() {}, t.deleteVertexArray = function() {})
                    }
                    if (!t.vertexAttribDivisor) {
                        var i = t.getExtension("ANGLE_instanced_arrays");
                        i ? (t.vertexAttribDivisor = function(t, e) {
                            return i.vertexAttribDivisorANGLE(t, e)
                        }, t.drawElementsInstanced = function(t, e, r, n, o) {
                            return i.drawElementsInstancedANGLE(t, e, r, n, o)
                        }, t.drawArraysInstanced = function(t, e, r, n) {
                            return i.drawArraysInstancedANGLE(t, e, r, n)
                        }) : this.hasInstance = !1
                    }
                    this.canUseUInt32ElementIndex = 2 === e.webGLVersion || !!e.extensions.uint32ElementIndex
                }, e.prototype.bind = function(t, e) {
                    e = e || this.renderer.shader.shader;
                    var r = this.gl,
                        i = t.glVertexArrayObjects[this.CONTEXT_UID];
                    i || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = i = {});
                    var n = i[e.program.id] || this.initGeometryVao(t, e.program);
                    this._activeGeometry = t, this._activeVao !== n && (this._activeVao = n, this.hasVao ? r.bindVertexArray(n) : this.activateVao(t, e.program)), this.updateBuffers()
                }, e.prototype.reset = function() {
                    this.unbind()
                }, e.prototype.updateBuffers = function() {
                    for (var t = this._activeGeometry, e = this.gl, r = 0; r < t.buffers.length; r++) {
                        var i = t.buffers[r],
                            n = i._glBuffers[this.CONTEXT_UID];
                        if (i._updateID !== n.updateID) {
                            n.updateID = i._updateID;
                            var o = i.index ? e.ELEMENT_ARRAY_BUFFER : e.ARRAY_BUFFER;
                            if (e.bindBuffer(o, n.buffer), this._boundBuffer = n, n.byteLength >= i.data.byteLength) e.bufferSubData(o, 0, i.data);
                            else {
                                var s = i.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
                                n.byteLength = i.data.byteLength, e.bufferData(o, i.data, s)
                            }
                        }
                    }
                }, e.prototype.checkCompatibility = function(t, e) {
                    var r = t.attributes,
                        i = e.attributeData;
                    for (var n in i)
                        if (!r[n]) throw new Error('shader and geometry incompatible, geometry missing the "' + n + '" attribute')
                }, e.prototype.getSignature = function(t, e) {
                    var r = t.attributes,
                        i = e.attributeData,
                        n = ["g", t.id];
                    for (var o in r) i[o] && n.push(o);
                    return n.join("-")
                }, e.prototype.initGeometryVao = function(t, e) {
                    this.checkCompatibility(t, e);
                    var r = this.gl,
                        i = this.CONTEXT_UID,
                        n = this.getSignature(t, e),
                        o = t.glVertexArrayObjects[this.CONTEXT_UID],
                        s = o[n];
                    if (s) return o[e.id] = s, s;
                    var a = t.buffers,
                        h = t.attributes,
                        u = {},
                        l = {};
                    for (var c in a) u[c] = 0, l[c] = 0;
                    for (var d in h) !h[d].size && e.attributeData[d] ? h[d].size = e.attributeData[d].size : h[d].size || console.warn("PIXI Geometry attribute '" + d + "' size cannot be determined (likely the bound shader does not have the attribute)"), u[h[d].buffer] += h[d].size * nt[h[d].type];
                    for (var p in h) {
                        var f = h[p],
                            m = f.size;
                        void 0 === f.stride && (u[f.buffer] === m * nt[f.type] ? f.stride = 0 : f.stride = u[f.buffer]), void 0 === f.start && (f.start = l[f.buffer], l[f.buffer] += m * nt[f.type])
                    }
                    s = r.createVertexArray(), r.bindVertexArray(s);
                    for (var g = 0; g < a.length; g++) {
                        var v = a[g];
                        v._glBuffers[i] || (v._glBuffers[i] = new it(r.createBuffer()), this.managedBuffers[v.id] = v, v.disposeRunner.add(this)), v._glBuffers[i].refCount++
                    }
                    return this.activateVao(t, e), this._activeVao = s, o[e.id] = s, o[n] = s, s
                }, e.prototype.disposeBuffer = function(t, e) {
                    if (this.managedBuffers[t.id]) {
                        delete this.managedBuffers[t.id];
                        var r = t._glBuffers[this.CONTEXT_UID],
                            i = this.gl;
                        t.disposeRunner.remove(this), r && (e || i.deleteBuffer(r.buffer), delete t._glBuffers[this.CONTEXT_UID])
                    }
                }, e.prototype.disposeGeometry = function(t, e) {
                    if (this.managedGeometries[t.id]) {
                        delete this.managedGeometries[t.id];
                        var r = t.glVertexArrayObjects[this.CONTEXT_UID],
                            i = this.gl,
                            n = t.buffers;
                        if (t.disposeRunner.remove(this), r) {
                            for (var o = 0; o < n.length; o++) {
                                var s = n[o]._glBuffers[this.CONTEXT_UID];
                                s.refCount--, 0 !== s.refCount || e || this.disposeBuffer(n[o], e)
                            }
                            if (!e)
                                for (var a in r)
                                    if ("g" === a[0]) {
                                        var h = r[a];
                                        this._activeVao === h && this.unbind(), i.deleteVertexArray(h)
                                    } delete t.glVertexArrayObjects[this.CONTEXT_UID]
                        }
                    }
                }, e.prototype.disposeAll = function(t) {
                    for (var e = Object.keys(this.managedGeometries), r = 0; r < e.length; r++) this.disposeGeometry(this.managedGeometries[e[r]], t);
                    e = Object.keys(this.managedBuffers);
                    for (var i = 0; i < e.length; i++) this.disposeBuffer(this.managedBuffers[e[i]], t)
                }, e.prototype.activateVao = function(t, e) {
                    var r = this.gl,
                        i = this.CONTEXT_UID,
                        n = t.buffers,
                        o = t.attributes;
                    t.indexBuffer && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.indexBuffer._glBuffers[i].buffer);
                    var s = null;
                    for (var a in o) {
                        var h = o[a],
                            u = n[h.buffer]._glBuffers[i];
                        if (e.attributeData[a]) {
                            s !== u && (r.bindBuffer(r.ARRAY_BUFFER, u.buffer), s = u);
                            var l = e.attributeData[a].location;
                            if (r.enableVertexAttribArray(l), r.vertexAttribPointer(l, h.size, h.type || r.FLOAT, h.normalized, h.stride, h.start), h.instance) {
                                if (!this.hasInstance) throw new Error("geometry error, GPU Instancing is not supported on this device");
                                r.vertexAttribDivisor(l, 1)
                            }
                        }
                    }
                }, e.prototype.draw = function(t, e, r, i) {
                    var n = this.gl,
                        o = this._activeGeometry;
                    if (o.indexBuffer) {
                        var s = o.indexBuffer.data.BYTES_PER_ELEMENT,
                            a = 2 === s ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
                        2 === s || 4 === s && this.canUseUInt32ElementIndex ? o.instanced ? n.drawElementsInstanced(t, e || o.indexBuffer.data.length, a, (r || 0) * s, i || 1) : n.drawElements(t, e || o.indexBuffer.data.length, a, (r || 0) * s) : console.warn("unsupported index buffer type: uint32")
                    } else o.instanced ? n.drawArraysInstanced(t, r, e || o.getSize(), i || 1) : n.drawArrays(t, r, e || o.getSize());
                    return this
                }, e.prototype.unbind = function() {
                    this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null
                }, e
            }(S),
            st = function(t) {
                this.type = o.g.NONE, this.autoDetect = !0, this.maskObject = t || null, this.pooled = !1, this.isMaskData = !0, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._target = null
            };

        function at(t, e, r, i) {
            var n = ht(t, t.VERTEX_SHADER, e),
                o = ht(t, t.FRAGMENT_SHADER, r),
                s = t.createProgram();
            if (t.attachShader(s, n), t.attachShader(s, o), i)
                for (var a in i) t.bindAttribLocation(s, i[a], a);
            return t.linkProgram(s), t.getProgramParameter(s, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t.getProgramParameter(s, t.VALIDATE_STATUS)), console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(s) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(s)), t.deleteProgram(s), s = null), t.deleteShader(n), t.deleteShader(o), s
        }

        function ht(t, e, r) {
            var i = t.createShader(e);
            return t.shaderSource(i, r), t.compileShader(i), t.getShaderParameter(i, t.COMPILE_STATUS) ? i : (console.warn(r), console.error(t.getShaderInfoLog(i)), null)
        }

        function ut(t, e) {
            switch (t) {
                case "float":
                    return 0;
                case "vec2":
                    return new Float32Array(2 * e);
                case "vec3":
                    return new Float32Array(3 * e);
                case "vec4":
                    return new Float32Array(4 * e);
                case "int":
                case "sampler2D":
                case "sampler2DArray":
                    return 0;
                case "ivec2":
                    return new Int32Array(2 * e);
                case "ivec3":
                    return new Int32Array(3 * e);
                case "ivec4":
                    return new Int32Array(4 * e);
                case "bool":
                    return !1;
                case "bvec2":
                    return lt(2 * e);
                case "bvec3":
                    return lt(3 * e);
                case "bvec4":
                    return lt(4 * e);
                case "mat2":
                    return new Float32Array([1, 0, 0, 1]);
                case "mat3":
                    return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
                case "mat4":
                    return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
            }
            return null
        }

        function lt(t) {
            for (var e = new Array(t), r = 0; r < e.length; r++) e[r] = !1;
            return e
        }
        st.prototype.reset = function() {
            this.pooled && (this.maskObject = null, this.type = o.g.NONE, this.autoDetect = !0), this._target = null
        }, st.prototype.copyCountersOrReset = function(t) {
            t ? (this._stencilCounter = t._stencilCounter, this._scissorCounter = t._scissorCounter, this._scissorRect = t._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null)
        };
        var ct, dt = {},
            pt = dt;

        function ft() {
            if (pt === dt || pt && pt.isContextLost()) {
                var t, e = document.createElement("canvas");
                s.b.PREFER_ENV >= o.d.WEBGL2 && (t = e.getContext("webgl2", {})), t || ((t = e.getContext("webgl", {}) || e.getContext("experimental-webgl", {})) ? t.getExtension("WEBGL_draw_buffers") : t = null), pt = t
            }
            return pt
        }

        function mt(t, e, r) {
            if ("precision" !== t.substring(0, 9)) {
                var i = e;
                return e === o.i.HIGH && r !== o.i.HIGH && (i = o.i.MEDIUM), "precision " + i + " float;\n" + t
            }
            return r !== o.i.HIGH && "precision highp" === t.substring(0, 15) ? t.replace("precision highp", "precision mediump") : t
        }
        var gt = {
            float: 1,
            vec2: 2,
            vec3: 3,
            vec4: 4,
            int: 1,
            ivec2: 2,
            ivec3: 3,
            ivec4: 4,
            bool: 1,
            bvec2: 2,
            bvec3: 3,
            bvec4: 4,
            mat2: 4,
            mat3: 9,
            mat4: 16,
            sampler2D: 1
        };

        function vt(t) {
            return gt[t]
        }
        var yt = null,
            xt = {
                FLOAT: "float",
                FLOAT_VEC2: "vec2",
                FLOAT_VEC3: "vec3",
                FLOAT_VEC4: "vec4",
                INT: "int",
                INT_VEC2: "ivec2",
                INT_VEC3: "ivec3",
                INT_VEC4: "ivec4",
                BOOL: "bool",
                BOOL_VEC2: "bvec2",
                BOOL_VEC3: "bvec3",
                BOOL_VEC4: "bvec4",
                FLOAT_MAT2: "mat2",
                FLOAT_MAT3: "mat3",
                FLOAT_MAT4: "mat4",
                SAMPLER_2D: "sampler2D",
                SAMPLER_CUBE: "samplerCube",
                SAMPLER_2D_ARRAY: "sampler2DArray"
            };

        function _t(t, e) {
            if (!yt) {
                var r = Object.keys(xt);
                yt = {};
                for (var i = 0; i < r.length; ++i) {
                    var n = r[i];
                    yt[t[n]] = xt[n]
                }
            }
            return yt[e]
        }
        var bt = {
                float: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
                vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
                vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
                vec4: "gl.uniform4f(location, v[0], v[1], v[2], v[3])",
                int: "gl.uniform1i(location, v)",
                ivec2: "gl.uniform2i(location, v[0], v[1])",
                ivec3: "gl.uniform3i(location, v[0], v[1], v[2])",
                ivec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
                bool: "gl.uniform1i(location, v)",
                bvec2: "gl.uniform2i(location, v[0], v[1])",
                bvec3: "gl.uniform3i(location, v[0], v[1], v[2])",
                bvec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
                mat2: "gl.uniformMatrix2fv(location, false, v)",
                mat3: "gl.uniformMatrix3fv(location, false, v)",
                mat4: "gl.uniformMatrix4fv(location, false, v)",
                sampler2D: "gl.uniform1i(location, v)",
                samplerCube: "gl.uniform1i(location, v)",
                sampler2DArray: "gl.uniform1i(location, v)"
            },
            Tt = {
                float: "gl.uniform1fv(location, v)",
                vec2: "gl.uniform2fv(location, v)",
                vec3: "gl.uniform3fv(location, v)",
                vec4: "gl.uniform4fv(location, v)",
                mat4: "gl.uniformMatrix4fv(location, false, v)",
                mat3: "gl.uniformMatrix3fv(location, false, v)",
                mat2: "gl.uniformMatrix2fv(location, false, v)",
                int: "gl.uniform1iv(location, v)",
                ivec2: "gl.uniform2iv(location, v)",
                ivec3: "gl.uniform3iv(location, v)",
                ivec4: "gl.uniform4iv(location, v)",
                bool: "gl.uniform1iv(location, v)",
                bvec2: "gl.uniform2iv(location, v)",
                bvec3: "gl.uniform3iv(location, v)",
                bvec4: "gl.uniform4iv(location, v)",
                sampler2D: "gl.uniform1iv(location, v)",
                samplerCube: "gl.uniform1iv(location, v)",
                sampler2DArray: "gl.uniform1iv(location, v)"
            };
        var wt, Et = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");

        function It(t, e) {
            if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
            for (var r = e.createShader(e.FRAGMENT_SHADER);;) {
                var i = Et.replace(/%forloop%/gi, St(t));
                if (e.shaderSource(r, i), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS)) break;
                t = t / 2 | 0
            }
            return t
        }

        function St(t) {
            for (var e = "", r = 0; r < t; ++r) r > 0 && (e += "\nelse "), r < t - 1 && (e += "if(test == " + r + ".0){}");
            return e
        }
        var Pt = 0,
            At = {},
            Mt = function t(e, r, i) {
                void 0 === i && (i = "pixi-shader"), this.id = Pt++, this.vertexSrc = e || t.defaultVertexSrc, this.fragmentSrc = r || t.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), "#version" !== this.vertexSrc.substring(0, 8) && (i = i.replace(/\s+/g, "-"), At[i] ? (At[i]++, i += "-" + At[i]) : At[i] = 1, this.vertexSrc = "#define SHADER_NAME " + i + "\n" + this.vertexSrc, this.fragmentSrc = "#define SHADER_NAME " + i + "\n" + this.fragmentSrc, this.vertexSrc = mt(this.vertexSrc, s.b.PRECISION_VERTEX, o.i.HIGH), this.fragmentSrc = mt(this.fragmentSrc, s.b.PRECISION_FRAGMENT, function() {
                    if (!ct) {
                        ct = o.i.MEDIUM;
                        var t = ft();
                        if (t && t.getShaderPrecisionFormat) {
                            var e = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT);
                            ct = e.precision ? o.i.HIGH : o.i.MEDIUM
                        }
                    }
                    return ct
                }())), this.extractData(this.vertexSrc, this.fragmentSrc), this.glPrograms = {}, this.syncUniforms = null
            },
            Ct = {
                defaultVertexSrc: {
                    configurable: !0
                },
                defaultFragmentSrc: {
                    configurable: !0
                }
            };
        Mt.prototype.extractData = function(t, e) {
            var r = ft();
            if (r) {
                var i = at(r, t, e);
                this.attributeData = this.getAttributeData(i, r), this.uniformData = this.getUniformData(i, r), r.deleteProgram(i)
            } else this.uniformData = {}, this.attributeData = {}
        }, Mt.prototype.getAttributeData = function(t, e) {
            for (var r = {}, i = [], n = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), o = 0; o < n; o++) {
                var s = e.getActiveAttrib(t, o),
                    a = _t(e, s.type),
                    h = {
                        type: a,
                        name: s.name,
                        size: vt(a),
                        location: 0
                    };
                r[s.name] = h, i.push(h)
            }
            i.sort((function(t, e) {
                return t.name > e.name ? 1 : -1
            }));
            for (var u = 0; u < i.length; u++) i[u].location = u;
            return r
        }, Mt.prototype.getUniformData = function(t, e) {
            for (var r = {}, i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), n = 0; n < i; n++) {
                var o = e.getActiveUniform(t, n),
                    s = o.name.replace(/\[.*?\]/, ""),
                    a = o.name.match(/\[.*?\]/, ""),
                    h = _t(e, o.type);
                r[s] = {
                    type: h,
                    size: o.size,
                    isArray: a,
                    value: ut(h, o.size)
                }
            }
            return r
        }, Ct.defaultVertexSrc.get = function() {
            return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n"
        }, Ct.defaultFragmentSrc.get = function() {
            return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}"
        }, Mt.from = function(t, e, r) {
            var i = t + e,
                o = n.ProgramCache[i];
            return o || (n.ProgramCache[i] = o = new Mt(t, e, r)), o
        }, Object.defineProperties(Mt, Ct);
        var Ot = function(t, e) {
                for (var r in this.program = t, this.uniformGroup = e ? e instanceof Z ? e : new Z(e) : new Z({}), t.uniformData) this.uniformGroup.uniforms[r] instanceof Array && (this.uniformGroup.uniforms[r] = new Float32Array(this.uniformGroup.uniforms[r]))
            },
            Rt = {
                uniforms: {
                    configurable: !0
                }
            };
        Ot.prototype.checkUniformExists = function(t, e) {
            if (e.uniforms[t]) return !0;
            for (var r in e.uniforms) {
                var i = e.uniforms[r];
                if (i.group && this.checkUniformExists(t, i)) return !0
            }
            return !1
        }, Ot.prototype.destroy = function() {
            this.uniformGroup = null
        }, Rt.uniforms.get = function() {
            return this.uniformGroup.uniforms
        }, Ot.from = function(t, e, r) {
            var i = Mt.from(t, e);
            return new Ot(i, r)
        }, Object.defineProperties(Ot.prototype, Rt);
        var Dt = function() {
                this.data = 0, this.blendMode = o.b.NORMAL, this.polygonOffset = 0, this.blend = !0
            },
            Ft = {
                blend: {
                    configurable: !0
                },
                offsets: {
                    configurable: !0
                },
                culling: {
                    configurable: !0
                },
                depthTest: {
                    configurable: !0
                },
                clockwiseFrontFace: {
                    configurable: !0
                },
                blendMode: {
                    configurable: !0
                },
                polygonOffset: {
                    configurable: !0
                }
            };
        Ft.blend.get = function() {
            return !!(1 & this.data)
        }, Ft.blend.set = function(t) {
            !!(1 & this.data) !== t && (this.data ^= 1)
        }, Ft.offsets.get = function() {
            return !!(2 & this.data)
        }, Ft.offsets.set = function(t) {
            !!(2 & this.data) !== t && (this.data ^= 2)
        }, Ft.culling.get = function() {
            return !!(4 & this.data)
        }, Ft.culling.set = function(t) {
            !!(4 & this.data) !== t && (this.data ^= 4)
        }, Ft.depthTest.get = function() {
            return !!(8 & this.data)
        }, Ft.depthTest.set = function(t) {
            !!(8 & this.data) !== t && (this.data ^= 8)
        }, Ft.clockwiseFrontFace.get = function() {
            return !!(16 & this.data)
        }, Ft.clockwiseFrontFace.set = function(t) {
            !!(16 & this.data) !== t && (this.data ^= 16)
        }, Ft.blendMode.get = function() {
            return this._blendMode
        }, Ft.blendMode.set = function(t) {
            this.blend = t !== o.b.NONE, this._blendMode = t
        }, Ft.polygonOffset.get = function() {
            return this._polygonOffset
        }, Ft.polygonOffset.set = function(t) {
            this.offsets = !!t, this._polygonOffset = t
        }, Dt.for2d = function() {
            var t = new Dt;
            return t.depthTest = !1, t.blend = !0, t
        }, Object.defineProperties(Dt.prototype, Ft);
        var Lt = function(t) {
            function e(r, i, n) {
                var o = Mt.from(r || e.defaultVertexSrc, i || e.defaultFragmentSrc);
                t.call(this, o, n), this.padding = 0, this.resolution = s.b.FILTER_RESOLUTION, this.enabled = !0, this.autoFit = !0, this.legacy = !!this.program.attributeData.aTextureCoord, this.state = new Dt
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                    blendMode: {
                        configurable: !0
                    }
                },
                i = {
                    defaultVertexSrc: {
                        configurable: !0
                    },
                    defaultFragmentSrc: {
                        configurable: !0
                    }
                };
            return e.prototype.apply = function(t, e, r, i, n) {
                t.applyFilter(this, e, r, i, n)
            }, r.blendMode.get = function() {
                return this.state.blendMode
            }, r.blendMode.set = function(t) {
                this.state.blendMode = t
            }, i.defaultVertexSrc.get = function() {
                return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n"
            }, i.defaultFragmentSrc.get = function() {
                return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"
            }, Object.defineProperties(e.prototype, r), Object.defineProperties(e, i), e
        }(Ot);
        Lt.SOURCE_KEY_MAP = {};
        var Nt = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n",
            kt = "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n",
            Bt = new h.d,
            Ut = function(t, e) {
                this._texture = t, this.mapCoord = new h.d, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._updateID = -1, this.clampOffset = 0, this.clampMargin = void 0 === e ? .5 : e, this.isSimple = !1
            },
            Xt = {
                texture: {
                    configurable: !0
                }
            };
        Xt.texture.get = function() {
            return this._texture
        }, Xt.texture.set = function(t) {
            this._texture = t, this._updateID = -1
        }, Ut.prototype.multiplyUvs = function(t, e) {
            void 0 === e && (e = t);
            for (var r = this.mapCoord, i = 0; i < t.length; i += 2) {
                var n = t[i],
                    o = t[i + 1];
                e[i] = n * r.a + o * r.c + r.tx, e[i + 1] = n * r.b + o * r.d + r.ty
            }
            return e
        }, Ut.prototype.update = function(t) {
            var e = this._texture;
            if (!e || !e.valid) return !1;
            if (!t && this._updateID === e._updateID) return !1;
            this._updateID = e._updateID;
            var r = e._uvs;
            this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
            var i = e.orig,
                n = e.trim;
            n && (Bt.set(i.width / n.width, 0, 0, i.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(Bt));
            var o = e.baseTexture,
                s = this.uClampFrame,
                a = this.clampMargin / o.resolution,
                h = this.clampOffset;
            return s[0] = (e._frame.x + a + h) / o.width, s[1] = (e._frame.y + a + h) / o.height, s[2] = (e._frame.x + e._frame.width - a + h) / o.width, s[3] = (e._frame.y + e._frame.height - a + h) / o.height, this.uClampOffset[0] = h / o.realWidth, this.uClampOffset[1] = h / o.realHeight, this.isSimple = e._frame.width === o.width && e._frame.height === o.height && 0 === e.rotate, !0
        }, Object.defineProperties(Ut.prototype, Xt);
        var Vt = function(t) {
                function e(e) {
                    var r = new h.d;
                    t.call(this, Nt, kt), e.renderable = !1, this.maskSprite = e, this.maskMatrix = r
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.apply = function(t, e, r, i) {
                    var n = this.maskSprite,
                        o = this.maskSprite.texture;
                    o.valid && (o.transform || (o.transform = new Ut(o, 0)), o.transform.update(), this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.transform.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = o.transform.uClampFrame, t.applyFilter(this, e, r, i))
                }, e
            }(Lt),
            jt = function(t) {
                function e(e) {
                    t.call(this, e), this.scissorRenderTarget = null, this.enableScissor = !1, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setMaskStack = function(t) {
                    this.maskStack = t, this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t)
                }, e.prototype.push = function(t, e) {
                    if (!e.isMaskData) {
                        var r = this.maskDataPool.pop() || new st;
                        r.pooled = !0, r.maskObject = e, e = r
                    }
                    switch (e.autoDetect && this.detect(e), e.copyCountersOrReset(this.maskStack[this.maskStack.length - 1]), e._target = t, e.type) {
                        case o.g.SCISSOR:
                            this.maskStack.push(e), this.renderer.scissor.push(e);
                            break;
                        case o.g.STENCIL:
                            this.maskStack.push(e), this.renderer.stencil.push(e);
                            break;
                        case o.g.SPRITE:
                            e.copyCountersOrReset(null), this.pushSpriteMask(e), this.maskStack.push(e)
                    }
                }, e.prototype.pop = function(t) {
                    var e = this.maskStack.pop();
                    if (e && e._target === t) {
                        switch (e.type) {
                            case o.g.SCISSOR:
                                this.renderer.scissor.pop();
                                break;
                            case o.g.STENCIL:
                                this.renderer.stencil.pop(e.maskObject);
                                break;
                            case o.g.SPRITE:
                                this.popSpriteMask()
                        }
                        e.reset(), e.pooled && this.maskDataPool.push(e)
                    }
                }, e.prototype.detect = function(t) {
                    var e = t.maskObject;
                    if (e.isSprite) t.type = o.g.SPRITE;
                    else if (t.type = o.g.STENCIL, this.enableScissor && e.isFastRect && e.isFastRect()) {
                        var r = e.worldTransform,
                            i = Math.atan2(r.b, r.a),
                            n = Math.atan2(r.d, r.c);
                        i = Math.round(i * (180 / Math.PI) * 100), n = ((n = Math.round(n * (180 / Math.PI) * 100) - i) % 18e3 + 18e3) % 18e3, 0 === (i = (i % 9e3 + 9e3) % 9e3) && 9e3 === n && (t.type = o.g.SCISSOR)
                    }
                }, e.prototype.pushSpriteMask = function(t) {
                    var e = t.maskObject,
                        r = t._target,
                        i = this.alphaMaskPool[this.alphaMaskIndex];
                    i || (i = this.alphaMaskPool[this.alphaMaskIndex] = [new Vt(e)]), i[0].resolution = this.renderer.resolution, i[0].maskSprite = e;
                    var n = r.filterArea;
                    r.filterArea = e.getBounds(!0), this.renderer.filter.push(r, i), r.filterArea = n, this.alphaMaskIndex++
                }, e.prototype.popSpriteMask = function() {
                    this.renderer.filter.pop(), this.alphaMaskIndex--
                }, e
            }(S),
            Yt = function(t) {
                function e(e) {
                    t.call(this, e), this.maskStack = [], this.glConst = 0
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getStackLength = function() {
                    return this.maskStack.length
                }, e.prototype.setMaskStack = function(t) {
                    var e = this.renderer.gl,
                        r = this.getStackLength();
                    this.maskStack = t;
                    var i = this.getStackLength();
                    i !== r && (0 === i ? e.disable(this.glConst) : (e.enable(this.glConst), this._useCurrent()))
                }, e.prototype._useCurrent = function() {}, e.prototype.destroy = function() {
                    t.prototype.destroy.call(this, this), this.maskStack = null
                }, e
            }(S),
            Gt = function(t) {
                function e(e) {
                    t.call(this, e), this.glConst = WebGLRenderingContext.SCISSOR_TEST
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getStackLength = function() {
                    var t = this.maskStack[this.maskStack.length - 1];
                    return t ? t._scissorCounter : 0
                }, e.prototype.push = function(t) {
                    var e = t.maskObject;
                    e.renderable = !0;
                    var r = t._scissorRect,
                        i = e.getBounds(!0),
                        n = this.renderer.gl;
                    e.renderable = !1, r ? i.fit(r) : n.enable(n.SCISSOR_TEST), t._scissorCounter++, t._scissorRect = i, this._useCurrent()
                }, e.prototype.pop = function() {
                    var t = this.renderer.gl;
                    this.getStackLength() > 0 ? this._useCurrent() : t.disable(t.SCISSOR_TEST)
                }, e.prototype._useCurrent = function() {
                    var t = this.maskStack[this.maskStack.length - 1]._scissorRect,
                        e = this.renderer.renderTexture.current,
                        r = this.renderer.projection,
                        i = r.transform,
                        n = r.sourceFrame,
                        o = r.destinationFrame,
                        s = e ? e.resolution : this.renderer.resolution,
                        a = (t.x - n.x) * s + o.x,
                        h = (t.y - n.y) * s + o.y,
                        u = t.width * s,
                        l = t.height * s;
                    i && (a += i.tx * s, h += i.ty * s), e || (h = this.renderer.height - l - h), this.renderer.gl.scissor(a, h, u, l)
                }, e
            }(Yt),
            Ht = function(t) {
                function e(e) {
                    t.call(this, e), this.glConst = WebGLRenderingContext.STENCIL_TEST
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getStackLength = function() {
                    var t = this.maskStack[this.maskStack.length - 1];
                    return t ? t._stencilCounter : 0
                }, e.prototype.push = function(t) {
                    var e = t.maskObject,
                        r = this.renderer.gl,
                        i = t._stencilCounter;
                    0 === i && (this.renderer.framebuffer.forceStencil(), r.enable(r.STENCIL_TEST)), t._stencilCounter++, r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.EQUAL, i, this._getBitwiseMask()), r.stencilOp(r.KEEP, r.KEEP, r.INCR), e.renderable = !0, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = !1, this._useCurrent()
                }, e.prototype.pop = function(t) {
                    var e = this.renderer.gl;
                    0 === this.getStackLength() ? (e.disable(e.STENCIL_TEST), e.clear(e.STENCIL_BUFFER_BIT), e.clearStencil(0)) : (e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.DECR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, this._useCurrent())
                }, e.prototype._useCurrent = function() {
                    var t = this.renderer.gl;
                    t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.EQUAL, this.getStackLength(), this._getBitwiseMask()), t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
                }, e.prototype._getBitwiseMask = function() {
                    return (1 << this.getStackLength()) - 1
                }, e
            }(Yt),
            Wt = function(t) {
                function e(e) {
                    t.call(this, e), this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new h.d, this.transform = null
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.update = function(t, e, r, i) {
                    this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, r, i), this.transform && this.projectionMatrix.append(this.transform);
                    var n = this.renderer;
                    n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, n.globalUniforms.update(), n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals)
                }, e.prototype.calculateProjection = function(t, e, r, i) {
                    var n = this.projectionMatrix;
                    i ? (n.a = 1 / t.width * 2 * r, n.d = -1 / t.height * 2 * r, n.tx = -1 - e.x * n.a, n.ty = 1 - e.y * n.d) : (n.a = 1 / t.width * 2 * r, n.d = 1 / t.height * 2 * r, n.tx = -1 - e.x * n.a, n.ty = -1 - e.y * n.d)
                }, e.prototype.setTransform = function() {}, e
            }(S),
            zt = new h.j,
            qt = function(t) {
                function e(e) {
                    t.call(this, e), this.clearColor = e._backgroundColorRgba, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new h.j, this.destinationFrame = new h.j
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.bind = function(t, e, r) {
                    void 0 === t && (t = null), this.current = t;
                    var i, n = this.renderer;
                    if (t) {
                        var o = t.baseTexture;
                        i = o.resolution, r || (zt.width = o.realWidth, zt.height = o.realHeight, r = zt), e || (e = r), this.renderer.framebuffer.bind(o.framebuffer, r), this.renderer.projection.update(r, e, i, !1), this.renderer.mask.setMaskStack(o.maskStack)
                    } else i = this.renderer.resolution, r || (zt.width = n.width, zt.height = n.height, r = zt), e || (e = r), n.framebuffer.bind(null, r), this.renderer.projection.update(r, e, i, !0), this.renderer.mask.setMaskStack(this.defaultMaskStack);
                    this.sourceFrame.copyFrom(e), this.destinationFrame.x = r.x / i, this.destinationFrame.y = r.y / i, this.destinationFrame.width = r.width / i, this.destinationFrame.height = r.height / i, e === r && this.sourceFrame.copyFrom(this.destinationFrame)
                }, e.prototype.clear = function(t) {
                    t = this.current ? t || this.current.baseTexture.clearColor : t || this.clearColor, this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3])
                }, e.prototype.resize = function() {
                    this.bind(null)
                }, e.prototype.reset = function() {
                    this.bind(null)
                }, e
            }(S),
            Zt = function(t, e) {
                this.program = t, this.uniformData = e, this.uniformGroups = {}
            };
        Zt.prototype.destroy = function() {
            this.uniformData = null, this.uniformGroups = null, this.program = null
        };
        var Kt = 0,
            Jt = function(t) {
                function e(e) {
                    t.call(this, e), this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this.id = Kt++
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.systemCheck = function() {
                    if (! function() {
                            if ("boolean" == typeof wt) return wt;
                            try {
                                var t = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
                                wt = !0 === t({
                                    a: "b"
                                }, "a", "b")
                            } catch (t) {
                                wt = !1
                            }
                            return wt
                        }()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
                }, e.prototype.contextChange = function(t) {
                    this.gl = t, this.reset()
                }, e.prototype.bind = function(t, e) {
                    t.uniforms.globals = this.renderer.globalUniforms;
                    var r = t.program,
                        i = r.glPrograms[this.renderer.CONTEXT_UID] || this.generateShader(t);
                    return this.shader = t, this.program !== r && (this.program = r, this.gl.useProgram(i.program)), e || this.syncUniformGroup(t.uniformGroup), i
                }, e.prototype.setUniforms = function(t) {
                    var e = this.shader.program,
                        r = e.glPrograms[this.renderer.CONTEXT_UID];
                    e.syncUniforms(r.uniformData, t, this.renderer)
                }, e.prototype.syncUniformGroup = function(t) {
                    var e = this.getglProgram();
                    t.static && t.dirtyId === e.uniformGroups[t.id] || (e.uniformGroups[t.id] = t.dirtyId, this.syncUniforms(t, e))
                }, e.prototype.syncUniforms = function(t, e) {
                    (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer)
                }, e.prototype.createSyncGroups = function(t) {
                    var e = this.getSignature(t, this.shader.program.uniformData);
                    return this.cache[e] || (this.cache[e] = function(t, e) {
                        var r = 0,
                            i = "var v = null;\n    var cv = null\n    var gl = renderer.gl";
                        for (var n in t.uniforms) {
                            var o = e[n];
                            if (o)
                                if ("float" === o.type && 1 === o.size) i += "\n            if(uv." + n + " !== ud." + n + ".value)\n            {\n                ud." + n + ".value = uv." + n + "\n                gl.uniform1f(ud." + n + ".location, uv." + n + ")\n            }\n";
                                else if ("sampler2D" !== o.type && "samplerCube" !== o.type && "sampler2DArray" !== o.type || 1 !== o.size || o.isArray)
                                if ("mat3" === o.type && 1 === o.size) void 0 !== t.uniforms[n].a ? i += "\n                gl.uniformMatrix3fv(ud." + n + ".location, false, uv." + n + ".toArray(true));\n                \n" : i += "\n                gl.uniformMatrix3fv(ud." + n + ".location, false, uv." + n + ");\n                \n";
                                else if ("vec2" === o.type && 1 === o.size) void 0 !== t.uniforms[n].x ? i += "\n                cv = ud." + n + ".value;\n                v = uv." + n + ";\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud." + n + ".location, v.x, v.y);\n                }\n" : i += "\n                cv = ud." + n + ".value;\n                v = uv." + n + ";\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud." + n + ".location, v[0], v[1]);\n                }\n                \n";
                            else if ("vec4" === o.type && 1 === o.size) void 0 !== t.uniforms[n].width ? i += "\n                cv = ud." + n + ".value;\n                v = uv." + n + ";\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud." + n + ".location, v.x, v.y, v.width, v.height)\n                }\n" : i += "\n                cv = ud." + n + ".value;\n                v = uv." + n + ";\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud." + n + ".location, v[0], v[1], v[2], v[3])\n                }\n                \n";
                            else {
                                i += "\n            cv = ud." + n + ".value;\n            v = uv." + n + ";\n            " + (1 === o.size ? bt : Tt)[o.type].replace("location", "ud." + n + ".location") + ";\n"
                            } else i += "\n            renderer.texture.bind(uv." + n + ", " + r + ");\n\n            if(ud." + n + ".value !== " + r + ")\n            {\n                ud." + n + ".value = " + r + ";\n                gl.uniform1i(ud." + n + ".location, " + r + ");\n; // eslint-disable-line max-len\n            }\n", r++;
                            else t.uniforms[n].group && (i += "\n                    renderer.shader.syncUniformGroup(uv." + n + ");\n                ")
                        }
                        return new Function("ud", "uv", "renderer", i)
                    }(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[e], t.syncUniforms[this.shader.program.id]
                }, e.prototype.getSignature = function(t, e) {
                    var r = t.uniforms,
                        i = [];
                    for (var n in r) i.push(n), e[n] && i.push(e[n].type);
                    return i.join("-")
                }, e.prototype.getglProgram = function() {
                    return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
                }, e.prototype.generateShader = function(t) {
                    var e = this.gl,
                        r = t.program,
                        i = {};
                    for (var n in r.attributeData) i[n] = r.attributeData[n].location;
                    var o = at(e, r.vertexSrc, r.fragmentSrc, i),
                        s = {};
                    for (var a in r.uniformData) {
                        var h = r.uniformData[a];
                        s[a] = {
                            location: e.getUniformLocation(o, a),
                            value: ut(h.type, h.size)
                        }
                    }
                    var u = new Zt(o, s);
                    return r.glPrograms[this.renderer.CONTEXT_UID] = u, u
                }, e.prototype.reset = function() {
                    this.program = null, this.shader = null
                }, e.prototype.destroy = function() {
                    this.destroyed = !0
                }, e
            }(S);
        var Qt = 0,
            $t = 1,
            te = 2,
            ee = 3,
            re = 4,
            ie = function(t) {
                function e(e) {
                    t.call(this, e), this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = o.b.NONE, this._blendEq = !1, this.map = [], this.map[Qt] = this.setBlend, this.map[$t] = this.setOffset, this.map[te] = this.setCullFace, this.map[ee] = this.setDepthTest, this.map[re] = this.setFrontFace, this.checks = [], this.defaultState = new Dt, this.defaultState.blend = !0, this.defaultState.depth = !0
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.contextChange = function(t) {
                    this.gl = t, this.blendModes = function(t, e) {
                        return void 0 === e && (e = []), e[o.b.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.ADD] = [t.ONE, t.ONE], e[o.b.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.NONE] = [0, 0], e[o.b.NORMAL_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.ADD_NPM] = [t.SRC_ALPHA, t.ONE, t.ONE, t.ONE], e[o.b.SCREEN_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[o.b.SRC_IN] = [t.DST_ALPHA, t.ZERO], e[o.b.SRC_OUT] = [t.ONE_MINUS_DST_ALPHA, t.ZERO], e[o.b.SRC_ATOP] = [t.DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[o.b.DST_OVER] = [t.ONE_MINUS_DST_ALPHA, t.ONE], e[o.b.DST_IN] = [t.ZERO, t.SRC_ALPHA], e[o.b.DST_OUT] = [t.ZERO, t.ONE_MINUS_SRC_ALPHA], e[o.b.DST_ATOP] = [t.ONE_MINUS_DST_ALPHA, t.SRC_ALPHA], e[o.b.XOR] = [t.ONE_MINUS_DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[o.b.SUBTRACT] = [t.ONE, t.ONE, t.ONE, t.ONE, t.FUNC_REVERSE_SUBTRACT, t.FUNC_ADD], e
                    }(t), this.set(this.defaultState), this.reset()
                }, e.prototype.set = function(t) {
                    if (t = t || this.defaultState, this.stateId !== t.data) {
                        for (var e = this.stateId ^ t.data, r = 0; e;) 1 & e && this.map[r].call(this, !!(t.data & 1 << r)), e >>= 1, r++;
                        this.stateId = t.data
                    }
                    for (var i = 0; i < this.checks.length; i++) this.checks[i](this, t)
                }, e.prototype.forceState = function(t) {
                    t = t || this.defaultState;
                    for (var e = 0; e < this.map.length; e++) this.map[e].call(this, !!(t.data & 1 << e));
                    for (var r = 0; r < this.checks.length; r++) this.checks[r](this, t);
                    this.stateId = t.data
                }, e.prototype.setBlend = function(t) {
                    this.updateCheck(e.checkBlendMode, t), this.gl[t ? "enable" : "disable"](this.gl.BLEND)
                }, e.prototype.setOffset = function(t) {
                    this.updateCheck(e.checkPolygonOffset, t), this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
                }, e.prototype.setDepthTest = function(t) {
                    this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST)
                }, e.prototype.setCullFace = function(t) {
                    this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE)
                }, e.prototype.setFrontFace = function(t) {
                    this.gl.frontFace(this.gl[t ? "CW" : "CCW"])
                }, e.prototype.setBlendMode = function(t) {
                    if (t !== this.blendMode) {
                        this.blendMode = t;
                        var e = this.blendModes[t],
                            r = this.gl;
                        2 === e.length ? r.blendFunc(e[0], e[1]) : r.blendFuncSeparate(e[0], e[1], e[2], e[3]), 6 === e.length ? (this._blendEq = !0, r.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1, r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD))
                    }
                }, e.prototype.setPolygonOffset = function(t, e) {
                    this.gl.polygonOffset(t, e)
                }, e.prototype.reset = function() {
                    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(0), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0)
                }, e.prototype.updateCheck = function(t, e) {
                    var r = this.checks.indexOf(t);
                    e && -1 === r ? this.checks.push(t) : e || -1 === r || this.checks.splice(r, 1)
                }, e.checkBlendMode = function(t, e) {
                    t.setBlendMode(e.blendMode)
                }, e.checkPolygonOffset = function(t, e) {
                    t.setPolygonOffset(e.polygonOffset, 0)
                }, e
            }(S),
            ne = function(t) {
                function e(e) {
                    t.call(this, e), this.count = 0, this.checkCount = 0, this.maxIdle = s.b.GC_MAX_IDLE, this.checkCountMax = s.b.GC_MAX_CHECK_COUNT, this.mode = s.b.GC_MODE
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.postrender = function() {
                    this.renderer.renderingToScreen && (this.count++, this.mode !== o.f.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())))
                }, e.prototype.run = function() {
                    for (var t = this.renderer.texture, e = t.managedTextures, r = !1, i = 0; i < e.length; i++) {
                        var n = e[i];
                        !n.framebuffer && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0), e[i] = null, r = !0)
                    }
                    if (r) {
                        for (var o = 0, s = 0; s < e.length; s++) null !== e[s] && (e[o++] = e[s]);
                        e.length = o
                    }
                }, e.prototype.unload = function(t) {
                    var e = this.renderer.textureSystem;
                    t._texture && t._texture._glRenderTargets && e.destroyTexture(t._texture);
                    for (var r = t.children.length - 1; r >= 0; r--) this.unload(t.children[r])
                }, e
            }(S),
            oe = function(t) {
                this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = 6408, this.internalFormat = 5121
            },
            se = function(t) {
                function e(e) {
                    t.call(this, e), this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new y
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.contextChange = function() {
                    var t = this.gl = this.renderer.gl;
                    this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion;
                    var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
                    this.boundTextures.length = e;
                    for (var r = 0; r < e; r++) this.boundTextures[r] = null;
                    this.emptyTextures = {};
                    var i = new oe(t.createTexture());
                    t.bindTexture(t.TEXTURE_2D, i.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = i, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new oe(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
                    for (var n = 0; n < 6; n++) t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
                    t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
                    for (var o = 0; o < this.boundTextures.length; o++) this.bind(null, o)
                }, e.prototype.bind = function(t, e) {
                    void 0 === e && (e = 0);
                    var r = this.gl;
                    if (t) {
                        if ((t = t.baseTexture || t).valid) {
                            t.touched = this.renderer.textureGC.count;
                            var i = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
                            this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(t.target, i.texture)), i.dirtyId !== t.dirtyId && (this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), this.updateTexture(t)), this.boundTextures[e] = t
                        }
                    } else this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(r.TEXTURE_2D, this.emptyTextures[r.TEXTURE_2D].texture), this.boundTextures[e] = null
                }, e.prototype.reset = function() {
                    this._unknownBoundTextures = !0, this.currentLocation = -1;
                    for (var t = 0; t < this.boundTextures.length; t++) this.boundTextures[t] = this.unknownTexture
                }, e.prototype.unbind = function(t) {
                    var e = this.gl,
                        r = this.boundTextures;
                    if (this._unknownBoundTextures) {
                        this._unknownBoundTextures = !1;
                        for (var i = 0; i < r.length; i++) r[i] === this.unknownTexture && this.bind(null, i)
                    }
                    for (var n = 0; n < r.length; n++) r[n] === t && (this.currentLocation !== n && (e.activeTexture(e.TEXTURE0 + n), this.currentLocation = n), e.bindTexture(e.TEXTURE_2D, this.emptyTextures[t.target].texture), r[n] = null)
                }, e.prototype.initTexture = function(t) {
                    var e = new oe(this.gl.createTexture());
                    return e.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = e, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), e
                }, e.prototype.initTextureType = function(t, e) {
                    if (e.internalFormat = t.format, e.type = t.type, 2 === this.webGLVersion) {
                        var r = this.renderer.gl;
                        t.type === r.FLOAT && t.format === r.RGBA && (e.internalFormat = r.RGBA32F), t.type === o.m.HALF_FLOAT && (e.type = r.HALF_FLOAT), e.type === r.HALF_FLOAT && t.format === r.RGBA && (e.internalFormat = r.RGBA16F)
                    }
                }, e.prototype.updateTexture = function(t) {
                    var e = t._glTextures[this.CONTEXT_UID];
                    if (e) {
                        var r = this.renderer;
                        if (this.initTextureType(t, e), t.resource && t.resource.upload(r, t, e));
                        else {
                            var i = t.realWidth,
                                n = t.realHeight,
                                o = r.gl;
                            (e.width !== i || e.height !== n || e.dirtyId < 0) && (e.width = i, e.height = n, o.texImage2D(t.target, 0, e.internalFormat, i, n, 0, t.format, e.type, null))
                        }
                        t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t), e.dirtyId = t.dirtyId
                    }
                }, e.prototype.destroyTexture = function(t, e) {
                    var r = this.gl;
                    if ((t = t.baseTexture || t)._glTextures[this.CONTEXT_UID] && (this.unbind(t), r.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !e)) {
                        var i = this.managedTextures.indexOf(t); - 1 !== i && Object(n.removeItems)(this.managedTextures, i, 1)
                    }
                }, e.prototype.updateTextureStyle = function(t) {
                    var e = t._glTextures[this.CONTEXT_UID];
                    e && (t.mipmap !== o.h.POW2 && 2 === this.webGLVersion || t.isPowerOfTwo ? e.mipmap = t.mipmap >= 1 : e.mipmap = 0, 2 === this.webGLVersion || t.isPowerOfTwo ? e.wrapMode = t.wrapMode : e.wrapMode = o.n.CLAMP, t.resource && t.resource.style(this.renderer, t, e) || this.setStyle(t, e), e.dirtyStyleId = t.dirtyStyleId)
                }, e.prototype.setStyle = function(t, e) {
                    var r = this.gl;
                    if (e.mipmap && r.generateMipmap(t.target), r.texParameteri(t.target, r.TEXTURE_WRAP_S, e.wrapMode), r.texParameteri(t.target, r.TEXTURE_WRAP_T, e.wrapMode), e.mipmap) {
                        r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode ? r.LINEAR_MIPMAP_LINEAR : r.NEAREST_MIPMAP_NEAREST);
                        var i = this.renderer.context.extensions.anisotropicFiltering;
                        if (i && t.anisotropicLevel > 0 && t.scaleMode === o.k.LINEAR) {
                            var n = Math.min(t.anisotropicLevel, r.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                            r.texParameterf(t.target, i.TEXTURE_MAX_ANISOTROPY_EXT, n)
                        }
                    } else r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode ? r.LINEAR : r.NEAREST);
                    r.texParameteri(t.target, r.TEXTURE_MAG_FILTER, t.scaleMode ? r.LINEAR : r.NEAREST)
                }, e
            }(S),
            ae = {
                FilterSystem: J,
                BatchSystem: $,
                ContextSystem: et,
                FramebufferSystem: rt,
                GeometrySystem: ot,
                MaskSystem: jt,
                ScissorSystem: Gt,
                StencilSystem: Ht,
                ProjectionSystem: Wt,
                RenderTextureSystem: qt,
                ShaderSystem: Jt,
                StateSystem: ie,
                TextureGCSystem: ne,
                TextureSystem: se
            },
            he = new h.d,
            ue = function(t) {
                function e(e, r) {
                    t.call(this), (r = Object.assign({}, s.b.RENDER_OPTIONS, r)).roundPixels && (s.b.ROUND_PIXELS = r.roundPixels, Object(n.deprecation)("5.0.0", "Renderer roundPixels option is deprecated, please use PIXI.settings.ROUND_PIXELS", 2)), this.options = r, this.type = o.j.UNKNOWN, this.screen = new h.j(0, 0, r.width, r.height), this.view = r.view || document.createElement("canvas"), this.resolution = r.resolution || s.b.RESOLUTION, this.transparent = r.transparent, this.autoDensity = r.autoDensity || r.autoResize || !1, this.preserveDrawingBuffer = r.preserveDrawingBuffer, this.clearBeforeRender = r.clearBeforeRender, this._backgroundColor = 0, this._backgroundColorRgba = [0, 0, 0, 0], this._backgroundColorString = "#000000", this.backgroundColor = r.backgroundColor || this._backgroundColor, this._tempDisplayObjectParent = new u.b, this._lastObjectRendered = this._tempDisplayObjectParent, this.plugins = {}
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    width: {
                        configurable: !0
                    },
                    height: {
                        configurable: !0
                    },
                    backgroundColor: {
                        configurable: !0
                    }
                };
                return e.prototype.initPlugins = function(t) {
                    for (var e in t) this.plugins[e] = new t[e](this)
                }, r.width.get = function() {
                    return this.view.width
                }, r.height.get = function() {
                    return this.view.height
                }, e.prototype.resize = function(t, e) {
                    this.screen.width = t, this.screen.height = e, this.view.width = t * this.resolution, this.view.height = e * this.resolution, this.autoDensity && (this.view.style.width = t + "px", this.view.style.height = e + "px")
                }, e.prototype.generateTexture = function(t, e, r, i) {
                    0 === (i = i || t.getLocalBounds()).width && (i.width = 1), 0 === i.height && (i.height = 1);
                    var n = L.create(0 | i.width, 0 | i.height, e, r);
                    return he.tx = -i.x, he.ty = -i.y, this.render(t, n, !1, he, !!t.parent), n
                }, e.prototype.destroy = function(t) {
                    for (var e in this.plugins) this.plugins[e].destroy(), this.plugins[e] = null;
                    t && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.plugins = null, this.type = o.j.UNKNOWN, this.view = null, this.screen = null, this.resolution = 0, this.transparent = !1, this.autoDensity = !1, this.blendModes = null, this.options = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this._backgroundColor = 0, this._backgroundColorRgba = null, this._backgroundColorString = null, this._tempDisplayObjectParent = null, this._lastObjectRendered = null
                }, r.backgroundColor.get = function() {
                    return this._backgroundColor
                }, r.backgroundColor.set = function(t) {
                    this._backgroundColor = t, this._backgroundColorString = Object(n.hex2string)(t), Object(n.hex2rgb)(t, this._backgroundColorRgba)
                }, Object.defineProperties(e.prototype, r), e
            }(n.EventEmitter),
            le = function(t) {
                function e(r) {
                    void 0 === r && (r = {}), t.call(this, "WebGL", r), r = this.options, this.type = o.j.WEBGL, this.gl = null, this.CONTEXT_UID = 0, this.runners = {
                        destroy: new i.a("destroy"),
                        contextChange: new i.a("contextChange", 1),
                        reset: new i.a("reset"),
                        update: new i.a("update"),
                        postrender: new i.a("postrender"),
                        prerender: new i.a("prerender"),
                        resize: new i.a("resize", 2)
                    }, this.globalUniforms = new Z({
                        projectionMatrix: new h.d
                    }, !0), this.addSystem(jt, "mask").addSystem(et, "context").addSystem(ie, "state").addSystem(Jt, "shader").addSystem(se, "texture").addSystem(ot, "geometry").addSystem(rt, "framebuffer").addSystem(Gt, "scissor").addSystem(Ht, "stencil").addSystem(Wt, "projection").addSystem(ne, "textureGC").addSystem(J, "filter").addSystem(qt, "renderTexture").addSystem($, "batch"), this.initPlugins(e.__plugins), r.context ? this.context.initFromContext(r.context) : this.context.initFromOptions({
                        alpha: this.transparent,
                        antialias: r.antialias,
                        premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
                        stencil: !0,
                        preserveDrawingBuffer: r.preserveDrawingBuffer,
                        powerPreference: this.options.powerPreference
                    }), this.renderingToScreen = !0, Object(n.sayHello)(2 === this.context.webGLVersion ? "WebGL 2" : "WebGL 1"), this.resize(this.options.width, this.options.height)
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.create = function(t) {
                    if (Object(n.isWebGLSupported)()) return new e(t);
                    throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')
                }, e.prototype.addSystem = function(t, e) {
                    e || (e = t.name);
                    var r = new t(this);
                    if (this[e]) throw new Error('Whoops! The name "' + e + '" is already in use');
                    for (var i in this[e] = r, this.runners) this.runners[i].add(r);
                    return this
                }, e.prototype.render = function(t, e, r, i, n) {
                    if (this.renderingToScreen = !e, this.runners.prerender.run(), this.emit("prerender"), this.projection.transform = i, !this.context.isLost) {
                        if (e || (this._lastObjectRendered = t), !n) {
                            var o = t.parent;
                            t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = o
                        }
                        this.renderTexture.bind(e), this.batch.currentRenderer.start(), (void 0 !== r ? r : this.clearBeforeRender) && this.renderTexture.clear(), t.render(this), this.batch.currentRenderer.flush(), e && e.baseTexture.update(), this.runners.postrender.run(), this.projection.transform = null, this.emit("postrender")
                    }
                }, e.prototype.resize = function(e, r) {
                    t.prototype.resize.call(this, e, r), this.runners.resize.run(e, r)
                }, e.prototype.reset = function() {
                    return this.runners.reset.run(), this
                }, e.prototype.clear = function() {
                    this.framebuffer.bind(), this.framebuffer.clear()
                }, e.prototype.destroy = function(e) {
                    for (var r in this.runners.destroy.run(), this.runners) this.runners[r].destroy();
                    t.prototype.destroy.call(this, e), this.gl = null
                }, e.registerPlugin = function(t, r) {
                    e.__plugins = e.__plugins || {}, e.__plugins[t] = r
                }, e
            }(ue);

        function ce(t) {
            return le.create(t)
        }
        var de = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
            pe = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n",
            fe = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.from = function(t, r) {
                    return new e(new b(t, r))
                }, e
            }(y),
            me = function() {
                this.texArray = null, this.blend = 0, this.type = o.c.TRIANGLES, this.start = 0, this.size = 0, this.data = null
            },
            ge = function() {
                this.elements = [], this.ids = [], this.count = 0
            };
        ge.prototype.clear = function() {
            for (var t = 0; t < this.count; t++) this.elements[t] = null;
            this.count = 0
        };
        var ve = function(t) {
                this.rawBinaryData = new ArrayBuffer(t), this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData)
            },
            ye = {
                int8View: {
                    configurable: !0
                },
                uint8View: {
                    configurable: !0
                },
                int16View: {
                    configurable: !0
                },
                uint16View: {
                    configurable: !0
                },
                int32View: {
                    configurable: !0
                }
            };
        ye.int8View.get = function() {
            return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View
        }, ye.uint8View.get = function() {
            return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View
        }, ye.int16View.get = function() {
            return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View
        }, ye.uint16View.get = function() {
            return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View
        }, ye.int32View.get = function() {
            return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View
        }, ve.prototype.view = function(t) {
            return this[t + "View"]
        }, ve.prototype.destroy = function() {
            this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null
        }, ve.sizeOf = function(t) {
            switch (t) {
                case "int8":
                case "uint8":
                    return 1;
                case "int16":
                case "uint16":
                    return 2;
                case "int32":
                case "uint32":
                case "float32":
                    return 4;
                default:
                    throw new Error(t + " isn't a valid view type")
            }
        }, Object.defineProperties(ve.prototype, ye);
        var xe = function(t) {
            function e(e) {
                t.call(this, e), this.shaderGenerator = null, this.geometryClass = null, this.vertexSize = null, this.state = Dt.for2d(), this.size = 4 * s.b.SPRITE_BATCH_SIZE, this._vertexCount = 0, this._indexCount = 0, this._bufferedElements = [], this._bufferedTextures = [], this._bufferSize = 0, this._shader = null, this._packedGeometries = [], this._packedGeometryPoolSize = 2, this._flushId = 0, this._aBuffers = {}, this._iBuffers = {}, this.MAX_TEXTURES = 1, this.renderer.on("prerender", this.onPrerender, this), e.runners.contextChange.add(this), this._dcIndex = 0, this._aIndex = 0, this._iIndex = 0, this._attributeBuffer = null, this._indexBuffer = null, this._tempBoundTextures = []
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.contextChange = function() {
                var t = this.renderer.gl;
                s.b.PREFER_ENV === o.d.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), s.b.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = It(this.MAX_TEXTURES, t)), this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
                for (var e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] = new this.geometryClass;
                this.initFlushBuffers()
            }, e.prototype.initFlushBuffers = function() {
                for (var t = e._drawCallPool, r = e._textureArrayPool, i = this.size / 4, n = Math.floor(i / this.MAX_TEXTURES) + 1; t.length < i;) t.push(new me);
                for (; r.length < n;) r.push(new ge);
                for (var o = 0; o < this.MAX_TEXTURES; o++) this._tempBoundTextures[o] = null
            }, e.prototype.onPrerender = function() {
                this._flushId = 0
            }, e.prototype.render = function(t) {
                t._texture.valid && (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += t.vertexData.length / 2, this._indexCount += t.indices.length, this._bufferedTextures[this._bufferSize] = t._texture.baseTexture, this._bufferedElements[this._bufferSize++] = t)
            }, e.prototype.buildTexturesAndDrawCalls = function() {
                var t = this._bufferedTextures,
                    r = this.MAX_TEXTURES,
                    i = e._textureArrayPool,
                    n = this.renderer.batch,
                    o = this._tempBoundTextures,
                    s = this.renderer.textureGC.count,
                    a = ++y._globalBatch,
                    h = 0,
                    u = i[0],
                    l = 0;
                n.copyBoundTextures(o, r);
                for (var c = 0; c < this._bufferSize; ++c) {
                    var d = t[c];
                    t[c] = null, d._batchEnabled !== a && (u.count >= r && (n.boundArray(u, o, a, r), this.buildDrawCalls(u, l, c), l = c, u = i[++h], ++a), d._batchEnabled = a, d.touched = s, u.elements[u.count++] = d)
                }
                u.count > 0 && (n.boundArray(u, o, a, r), this.buildDrawCalls(u, l, this._bufferSize), ++h, ++a);
                for (var p = 0; p < o.length; p++) o[p] = null;
                y._globalBatch = a
            }, e.prototype.buildDrawCalls = function(t, r, i) {
                var o = this._bufferedElements,
                    s = this._attributeBuffer,
                    a = this._indexBuffer,
                    h = this.vertexSize,
                    u = e._drawCallPool,
                    l = this._dcIndex,
                    c = this._aIndex,
                    d = this._iIndex,
                    p = u[l];
                p.start = this._iIndex, p.texArray = t;
                for (var f = r; f < i; ++f) {
                    var m = o[f],
                        g = m._texture.baseTexture,
                        v = n.premultiplyBlendMode[g.alphaMode ? 1 : 0][m.blendMode];
                    o[f] = null, r < f && p.blend !== v && (p.size = d - p.start, r = f, (p = u[++l]).texArray = t, p.start = d), this.packInterleavedGeometry(m, s, a, c, d), c += m.vertexData.length / 2 * h, d += m.indices.length, p.blend = v
                }
                r < i && (p.size = d - p.start, ++l), this._dcIndex = l, this._aIndex = c, this._iIndex = d
            }, e.prototype.bindAndClearTexArray = function(t) {
                for (var e = this.renderer.texture, r = 0; r < t.count; r++) e.bind(t.elements[r], t.ids[r]), t.elements[r] = null;
                t.count = 0
            }, e.prototype.updateGeometry = function() {
                var t = this._packedGeometries,
                    e = this._attributeBuffer,
                    r = this._indexBuffer;
                s.b.CAN_UPLOAD_SAME_BUFFER ? (t[this._flushId]._buffer.update(e.rawBinaryData), t[this._flushId]._indexBuffer.update(r), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, t[this._flushId] = new this.geometryClass), t[this._flushId]._buffer.update(e.rawBinaryData), t[this._flushId]._indexBuffer.update(r), this.renderer.geometry.bind(t[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++)
            }, e.prototype.drawBatches = function() {
                for (var t = this._dcIndex, r = this.renderer, i = r.gl, n = r.state, o = e._drawCallPool, s = null, a = 0; a < t; a++) {
                    var h = o[a],
                        u = h.texArray,
                        l = h.type,
                        c = h.size,
                        d = h.start,
                        p = h.blend;
                    s !== u && (s = u, this.bindAndClearTexArray(u)), n.setBlendMode(p), i.drawElements(l, c, i.UNSIGNED_SHORT, 2 * d)
                }
            }, e.prototype.flush = function() {
                0 !== this._vertexCount && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0)
            }, e.prototype.start = function() {
                this.renderer.state.set(this.state), this.renderer.shader.bind(this._shader), s.b.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this._packedGeometries[this._flushId])
            }, e.prototype.stop = function() {
                this.flush()
            }, e.prototype.destroy = function() {
                for (var e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] && this._packedGeometries[e].destroy();
                this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), t.prototype.destroy.call(this)
            }, e.prototype.getAttributeBuffer = function(t) {
                var e = Object(n.nextPow2)(Math.ceil(t / 8)),
                    r = Object(n.log2)(e),
                    i = 8 * e;
                this._aBuffers.length <= r && (this._iBuffers.length = r + 1);
                var o = this._aBuffers[i];
                return o || (this._aBuffers[i] = o = new ve(i * this.vertexSize * 4)), o
            }, e.prototype.getIndexBuffer = function(t) {
                var e = Object(n.nextPow2)(Math.ceil(t / 12)),
                    r = Object(n.log2)(e),
                    i = 12 * e;
                this._iBuffers.length <= r && (this._iBuffers.length = r + 1);
                var o = this._iBuffers[r];
                return o || (this._iBuffers[r] = o = new Uint16Array(i)), o
            }, e.prototype.packInterleavedGeometry = function(t, e, r, i, o) {
                for (var s = e.uint32View, a = e.float32View, h = i / this.vertexSize, u = t.uvs, l = t.indices, c = t.vertexData, d = t._texture.baseTexture._batchLocation, p = Math.min(t.worldAlpha, 1), f = p < 1 && t._texture.baseTexture.alphaMode ? Object(n.premultiplyTint)(t._tintRGB, p) : t._tintRGB + (255 * p << 24), m = 0; m < c.length; m += 2) a[i++] = c[m], a[i++] = c[m + 1], a[i++] = u[m], a[i++] = u[m + 1], s[i++] = f, a[i++] = d;
                for (var g = 0; g < l.length; g++) r[o++] = h + l[g]
            }, e
        }(Q);
        xe._drawCallPool = [], xe._textureArrayPool = [];
        var _e = function(t, e) {
            if (this.vertexSrc = t, this.fragTemplate = e, this.programCache = {}, this.defaultGroupCache = {}, e.indexOf("%count%") < 0) throw new Error('Fragment template must contain "%count%".');
            if (e.indexOf("%forloop%") < 0) throw new Error('Fragment template must contain "%forloop%".')
        };
        _e.prototype.generateShader = function(t) {
            if (!this.programCache[t]) {
                for (var e = new Int32Array(t), r = 0; r < t; r++) e[r] = r;
                this.defaultGroupCache[t] = Z.from({
                    uSamplers: e
                }, !0);
                var i = this.fragTemplate;
                i = (i = i.replace(/%count%/gi, "" + t)).replace(/%forloop%/gi, this.generateSampleSrc(t)), this.programCache[t] = new Mt(this.vertexSrc, i)
            }
            var n = {
                tint: new Float32Array([1, 1, 1, 1]),
                translationMatrix: new h.d,
                default: this.defaultGroupCache[t]
            };
            return new Ot(this.programCache[t], n)
        }, _e.prototype.generateSampleSrc = function(t) {
            var e = "";
            e += "\n", e += "\n";
            for (var r = 0; r < t; r++) r > 0 && (e += "\nelse "), r < t - 1 && (e += "if(vTextureId < " + r + ".5)"), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + r + "], vTextureCoord);", e += "\n}";
            return e += "\n", e += "\n"
        };
        var be = function(t) {
                function e(e) {
                    void 0 === e && (e = !1), t.call(this), this._buffer = new U(null, e, !1), this._indexBuffer = new U(null, e, !0), this.addAttribute("aVertexPosition", this._buffer, 2, !1, o.m.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, !1, o.m.FLOAT).addAttribute("aColor", this._buffer, 4, !0, o.m.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, !0, o.m.FLOAT).addIndex(this._indexBuffer)
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
            }(H),
            Te = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n",
            we = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n",
            Ee = function() {},
            Ie = {
                defaultVertexSrc: {
                    configurable: !0
                },
                defaultFragmentTemplate: {
                    configurable: !0
                }
            };
        Ee.create = function(t) {
            var e = Object.assign({
                    vertex: Te,
                    fragment: we,
                    geometryClass: be,
                    vertexSize: 6
                }, t),
                r = e.vertex,
                i = e.fragment,
                n = e.vertexSize,
                o = e.geometryClass;
            return function(t) {
                function e(e) {
                    t.call(this, e), this.shaderGenerator = new _e(r, i), this.geometryClass = o, this.vertexSize = n
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
            }(xe)
        }, Ie.defaultVertexSrc.get = function() {
            return Te
        }, Ie.defaultFragmentTemplate.get = function() {
            return we
        }, Object.defineProperties(Ee, Ie);
        var Se = Ee.create()
    },
    352: function(t, e, r) {
        "use strict";
        r.r(e);
        var i = r(14);
        window.PIXI = i, r(136), r(137), window.RenderManager = new function() {
            var t = this;
            return this.resize = function() {}, this.containers = {
                pets: null
            }, this.resources = {}, this.currzIndex = 100, this.onAssetsLoaded = function(e, r) {
                t.layer = new i.display.Layer, t.layer.group.enableSort = !0, t.resources = r, t.containers.pets = new i.Container, t.containers.pets.parentLayer = t.layer, t.containers.pets.zOrder = 4, t.pgWorld.stage.addChild(t.layer), t.pgWorld.stage.addChild(t.containers.pets);
                for (var n = 0, o = 0; o < 50; o++)(n += 50) % 800 == 0 && (50, n = 0);
                chrome.runtime.sendMessage({
                    method: "initiate",
                    data: null
                }, (function(t) {}))
            }, this.init = function(e, r) {
                this.getURL = function(t) {
                    return "undefined" != typeof chrome && chrome.extension ? chrome.extension.getURL(t) : t
                }, this.width = e, this.height = r, this.pgWorld = new i.Application({
                    width: e,
                    height: r,
                    transparent: !0
                }), t.pgWorld.stage = new i.display.Stage, t.pgWorld.renderer.plugins.interaction.autoPreventDefault = !1, t.pgWorld.renderer.view.style.touchAction = "auto", this.pgWorld.loader.add("cat", this.getURL("/js/spine/cat.json")).load(this.onAssetsLoaded), this.pgWorld.ticker.add((function() {})), window.onresize = t.resize, this.resize()
            }, this.start = function(t, e) {
                this.init(t, e)
            }, this
        }, window == window.top && window.RenderManager.start(150, 125)
    },
    36: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return u
        })), r.d(e, "b", (function() {
            return h
        })), r.d(e, "c", (function() {
            return D
        })), r.d(e, "d", (function() {
            return S
        })), r.d(e, "e", (function() {
            return M
        })), r.d(e, "f", (function() {
            return C
        })), r.d(e, "g", (function() {
            return I
        }));
        var i = r(3),
            n = r(2),
            o = r(0),
            s = r(1),
            a = r(6),
            h = {
                adaptive: !0,
                maxLength: 10,
                minSegments: 8,
                maxSegments: 2048,
                _segmentsCount: function(t, e) {
                    if (void 0 === e && (e = 20), !this.adaptive) return e;
                    var r = Math.ceil(t / this.maxLength);
                    return r < this.minSegments ? r = this.minSegments : r > this.maxSegments && (r = this.maxSegments), r
                }
            },
            u = function() {
                this.reset()
            };
        u.prototype.clone = function() {
            var t = new u;
            return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t
        }, u.prototype.reset = function() {
            this.color = 16777215, this.alpha = 1, this.texture = i.E.WHITE, this.matrix = null, this.visible = !1
        }, u.prototype.destroy = function() {
            this.texture = null, this.matrix = null
        };
        var l = {
                build: function(t) {
                    t.points = t.shape.points.slice()
                },
                triangulate: function(t, e) {
                    var r = t.points,
                        i = t.holes,
                        n = e.points,
                        s = e.indices;
                    if (r.length >= 6) {
                        for (var a = [], h = 0; h < i.length; h++) {
                            var u = i[h];
                            a.push(r.length / 2), r = r.concat(u.points)
                        }
                        var l = Object(o.earcut)(r, a, 2);
                        if (!l) return;
                        for (var c = n.length / 2, d = 0; d < l.length; d += 3) s.push(l[d] + c), s.push(l[d + 1] + c), s.push(l[d + 2] + c);
                        for (var p = 0; p < r.length; p++) n.push(r[p])
                    }
                }
            },
            c = {
                build: function(t) {
                    var e, r, i = t.shape,
                        o = t.points,
                        s = i.x,
                        a = i.y;
                    if (o.length = 0, t.type === n.l.CIRC ? (e = i.radius, r = i.radius) : (e = i.width, r = i.height), 0 !== e && 0 !== r) {
                        var h = Math.floor(30 * Math.sqrt(i.radius)) || Math.floor(15 * Math.sqrt(i.width + i.height));
                        h /= 2.3;
                        for (var u = 2 * Math.PI / h, l = 0; l < h; l++) o.push(s + Math.sin(-u * l) * e, a + Math.cos(-u * l) * r);
                        o.push(o[0], o[1])
                    }
                },
                triangulate: function(t, e) {
                    var r = t.points,
                        i = e.points,
                        n = e.indices,
                        o = i.length / 2,
                        s = o;
                    i.push(t.shape.x, t.shape.y);
                    for (var a = 0; a < r.length; a += 2) i.push(r[a], r[a + 1]), n.push(o++, s, o)
                }
            },
            d = {
                build: function(t) {
                    var e = t.shape,
                        r = e.x,
                        i = e.y,
                        n = e.width,
                        o = e.height,
                        s = t.points;
                    s.length = 0, s.push(r, i, r + n, i, r + n, i + o, r, i + o)
                },
                triangulate: function(t, e) {
                    var r = t.points,
                        i = e.points,
                        n = i.length / 2;
                    i.push(r[0], r[1], r[2], r[3], r[6], r[7], r[4], r[5]), e.indices.push(n, n + 1, n + 2, n + 1, n + 2, n + 3)
                }
            },
            p = {
                build: function(t) {
                    var e = t.shape,
                        r = t.points,
                        i = e.x,
                        n = e.y,
                        o = e.width,
                        s = e.height,
                        a = e.radius;
                    r.length = 0, m(i, n + a, i, n, i + a, n, r), m(i + o - a, n, i + o, n, i + o, n + a, r), m(i + o, n + s - a, i + o, n + s, i + o - a, n + s, r), m(i + a, n + s, i, n + s, i, n + s - a, r)
                },
                triangulate: function(t, e) {
                    for (var r = t.points, i = e.points, n = e.indices, s = i.length / 2, a = Object(o.earcut)(r, null, 2), h = 0, u = a.length; h < u; h += 3) n.push(a[h] + s), n.push(a[h + 1] + s), n.push(a[h + 2] + s);
                    for (var l = 0, c = r.length; l < c; l++) i.push(r[l], r[++l])
                }
            };

        function f(t, e, r) {
            return t + (e - t) * r
        }

        function m(t, e, r, i, n, o, s) {
            void 0 === s && (s = []);
            for (var a = s, h = 0, u = 0, l = 0, c = 0, d = 0, p = 0, m = 0, g = 0; m <= 20; ++m) h = f(t, r, g = m / 20), u = f(e, i, g), l = f(r, n, g), c = f(i, o, g), d = f(h, l, g), p = f(u, c, g), a.push(d, p);
            return a
        }

        function g(t, e) {
            t.lineStyle.native ? function(t, e) {
                var r = 0,
                    i = t.shape,
                    o = t.points || i.points,
                    s = i.type !== n.l.POLY || i.closeStroke;
                if (0 === o.length) return;
                var a = e.points,
                    h = e.indices,
                    u = o.length / 2,
                    l = a.length / 2,
                    c = l;
                for (a.push(o[0], o[1]), r = 1; r < u; r++) a.push(o[2 * r], o[2 * r + 1]), h.push(c, c + 1), c++;
                s && h.push(c, l)
            }(t, e) : function(t, e) {
                var r = t.shape,
                    i = t.points || r.points.slice(),
                    o = e.closePointEps;
                if (0 === i.length) return;
                var s = t.lineStyle,
                    a = new n.g(i[0], i[1]),
                    h = new n.g(i[i.length - 2], i[i.length - 1]),
                    u = r.type !== n.l.POLY || r.closeStroke,
                    l = Math.abs(a.x - h.x) < o && Math.abs(a.y - h.y) < o;
                if (u) {
                    i = i.slice(), l && (i.pop(), i.pop(), h.set(i[i.length - 2], i[i.length - 1]));
                    var c = h.x + .5 * (a.x - h.x),
                        d = h.y + .5 * (a.y - h.y);
                    i.unshift(c, d), i.push(c, d)
                }
                var p = e.points,
                    f = i.length / 2,
                    m = i.length,
                    g = p.length / 2,
                    v = s.width / 2,
                    y = i[0],
                    x = i[1],
                    _ = i[2],
                    b = i[3],
                    T = 0,
                    w = 0,
                    E = -(x - b),
                    I = y - _,
                    S = 0,
                    P = 0,
                    A = 0,
                    M = 0,
                    C = Math.sqrt(E * E + I * I);
                E /= C, I /= C, E *= v, I *= v;
                var O = s.alignment,
                    R = 2 * (1 - O),
                    D = 2 * O;
                p.push(y - E * R, x - I * R), p.push(y + E * D, x + I * D);
                for (var F = 1; F < f - 1; ++F) {
                    y = i[2 * (F - 1)], x = i[2 * (F - 1) + 1], _ = i[2 * F], b = i[2 * F + 1], T = i[2 * (F + 1)], w = i[2 * (F + 1) + 1], E = -(x - b), I = y - _, C = Math.sqrt(E * E + I * I), E /= C, I /= C, E *= v, I *= v, S = -(b - w), P = _ - T, C = Math.sqrt(S * S + P * P), S /= C, P /= C;
                    var L = -I + x - (-I + b),
                        N = -E + _ - (-E + y),
                        k = (-E + y) * (-I + b) - (-E + _) * (-I + x),
                        B = -(P *= v) + w - (-P + b),
                        U = -(S *= v) + _ - (-S + T),
                        X = (-S + T) * (-P + b) - (-S + _) * (-P + w),
                        V = L * U - B * N;
                    if (Math.abs(V) < .1) V += 10.1, p.push(_ - E * R, b - I * R), p.push(_ + E * D, b + I * D);
                    else {
                        var j = (N * X - U * k) / V,
                            Y = (B * k - L * X) / V;
                        (j - _) * (j - _) + (Y - b) * (Y - b) > 196 * v * v ? (A = E - S, M = I - P, C = Math.sqrt(A * A + M * M), A /= C, M /= C, A *= v, M *= v, p.push(_ - A * R, b - M * R), p.push(_ + A * D, b + M * D), p.push(_ - A * D * R, b - M * R), m++) : (p.push(_ + (j - _) * R, b + (Y - b) * R), p.push(_ - (j - _) * D, b - (Y - b) * D))
                    }
                }
                y = i[2 * (f - 2)], x = i[2 * (f - 2) + 1], _ = i[2 * (f - 1)], b = i[2 * (f - 1) + 1], E = -(x - b), I = y - _, C = Math.sqrt(E * E + I * I), E /= C, I /= C, E *= v, I *= v, p.push(_ - E * R, b - I * R), p.push(_ + E * D, b + I * D);
                for (var G = e.indices, H = 0; H < m - 2; ++H) G.push(g, g + 1, g + 2), g++
            }(t, e)
        }
        var v = function(t) {
                function e(e, r, i, o, s, a) {
                    s = s || o / 2;
                    for (var h = -1 * Math.PI / 2 + a, u = 2 * i, l = n.f / u, c = [], d = 0; d < u; d++) {
                        var p = d % 2 ? s : o,
                            f = d * l + h;
                        c.push(e + p * Math.cos(f), r + p * Math.sin(f))
                    }
                    t.call(this, c)
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
            }(n.h),
            y = function() {};
        y.curveTo = function(t, e, r, i, n, o) {
            var s = o[o.length - 2],
                a = o[o.length - 1] - e,
                h = s - t,
                u = i - e,
                l = r - t,
                c = Math.abs(a * l - h * u);
            if (c < 1e-8 || 0 === n) return o[o.length - 2] === t && o[o.length - 1] === e || o.push(t, e), null;
            var d = a * a + h * h,
                p = u * u + l * l,
                f = a * u + h * l,
                m = n * Math.sqrt(d) / c,
                g = n * Math.sqrt(p) / c,
                v = m * f / d,
                y = g * f / p,
                x = m * l + g * h,
                _ = m * u + g * a,
                b = h * (g + v),
                T = a * (g + v),
                w = l * (m + y),
                E = u * (m + y);
            return {
                cx: x + t,
                cy: _ + e,
                radius: n,
                startAngle: Math.atan2(T - _, b - x),
                endAngle: Math.atan2(E - _, w - x),
                anticlockwise: h * u > l * a
            }
        }, y.arc = function(t, e, r, i, o, s, a, u, l) {
            for (var c = a - s, d = h._segmentsCount(Math.abs(c) * o, 40 * Math.ceil(Math.abs(c) / n.f)), p = c / (2 * d), f = 2 * p, m = Math.cos(p), g = Math.sin(p), v = d - 1, y = v % 1 / v, x = 0; x <= v; ++x) {
                var _ = p + s + f * (x + y * x),
                    b = Math.cos(_),
                    T = -Math.sin(_);
                l.push((m * b + g * T) * o + r, (m * -T + g * b) * o + i)
            }
        };
        var x = function() {};
        x.curveLength = function(t, e, r, i, n, o, s, a) {
            for (var h = 0, u = 0, l = 0, c = 0, d = 0, p = 0, f = 0, m = 0, g = 0, v = 0, y = 0, x = t, _ = e, b = 1; b <= 10; ++b) v = x - (m = (f = (p = (d = 1 - (u = b / 10)) * d) * d) * t + 3 * p * u * r + 3 * d * (l = u * u) * n + (c = l * u) * s), y = _ - (g = f * e + 3 * p * u * i + 3 * d * l * o + c * a), x = m, _ = g, h += Math.sqrt(v * v + y * y);
            return h
        }, x.curveTo = function(t, e, r, i, n, o, s) {
            var a = s[s.length - 2],
                u = s[s.length - 1];
            s.length -= 2;
            var l = h._segmentsCount(x.curveLength(a, u, t, e, r, i, n, o)),
                c = 0,
                d = 0,
                p = 0,
                f = 0,
                m = 0;
            s.push(a, u);
            for (var g = 1, v = 0; g <= l; ++g) p = (d = (c = 1 - (v = g / l)) * c) * c, m = (f = v * v) * v, s.push(p * a + 3 * d * v * t + 3 * c * f * r + m * n, p * u + 3 * d * v * e + 3 * c * f * i + m * o)
        };
        var _ = function() {};
        _.curveLength = function(t, e, r, i, n, o) {
            var s = t - 2 * r + n,
                a = e - 2 * i + o,
                h = 2 * r - 2 * t,
                u = 2 * i - 2 * e,
                l = 4 * (s * s + a * a),
                c = 4 * (s * h + a * u),
                d = h * h + u * u,
                p = 2 * Math.sqrt(l + c + d),
                f = Math.sqrt(l),
                m = 2 * l * f,
                g = 2 * Math.sqrt(d),
                v = c / f;
            return (m * p + f * c * (p - g) + (4 * d * l - c * c) * Math.log((2 * f + v + p) / (v + g))) / (4 * m)
        }, _.curveTo = function(t, e, r, i, n) {
            for (var o = n[n.length - 2], s = n[n.length - 1], a = h._segmentsCount(_.curveLength(o, s, t, e, r, i)), u = 0, l = 0, c = 1; c <= a; ++c) {
                var d = c / a;
                u = o + (t - o) * d, l = s + (e - s) * d, n.push(u + (t + (r - t) * d - u) * d, l + (e + (i - e) * d - l) * d)
            }
        };
        var b = function() {
            this.reset()
        };
        b.prototype.begin = function(t, e, r) {
            this.reset(), this.style = t, this.start = e, this.attribStart = r
        }, b.prototype.end = function(t, e) {
            this.attribSize = e - this.attribStart, this.size = t - this.start
        }, b.prototype.reset = function() {
            this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0
        };
        var T = {};
        T[n.l.POLY] = l, T[n.l.CIRC] = c, T[n.l.ELIP] = c, T[n.l.RECT] = d, T[n.l.RREC] = p;
        var w = [],
            E = [],
            I = {
                buildPoly: l,
                buildCircle: c,
                buildRectangle: d,
                buildRoundedRectangle: p,
                FILL_COMMANDS: T,
                BATCH_POOL: w,
                DRAW_CALL_POOL: E,
                buildLine: g,
                buildComplexPoly: function(t, e) {
                    var r = t.points.slice();
                    if (!(r.length < 6)) {
                        var i = e.indices;
                        e.points = r, e.alpha = t.fillAlpha, e.color = Object(o.hex2rgb)(t.fillColor);
                        for (var n = 1 / 0, s = -1 / 0, a = 1 / 0, h = -1 / 0, u = 0, l = 0, c = 0; c < r.length; c += 2) n = (u = r[c]) < n ? u : n, s = u > s ? u : s, a = (l = r[c + 1]) < a ? l : a, h = l > h ? l : h;
                        r.push(n, a, s, a, s, h, n, h);
                        for (var d = r.length / 2, p = 0; p < d; p++) i.push(p)
                    }
                },
                bezierCurveTo: function(t, e, r, i, n, o, s, a, h, u) {
                    void 0 === u && (u = []);
                    var l = 0,
                        c = 0,
                        d = 0,
                        p = 0,
                        f = 0;
                    u.push(t, e);
                    for (var m = 1, g = 0; m <= h; ++m) d = (c = (l = 1 - (g = m / h)) * l) * l, f = (p = g * g) * g, u.push(d * t + 3 * c * g * r + 3 * l * p * n + f * s, d * e + 3 * c * g * i + 3 * l * p * o + f * a);
                    return u
                },
                Star: v,
                ArcUtils: y,
                BezierUtils: x,
                QuadraticUtils: _,
                BatchPart: b
            },
            S = function(t, e, r, i) {
                void 0 === e && (e = null), void 0 === r && (r = null), void 0 === i && (i = null), this.shape = t, this.lineStyle = r, this.fillStyle = e, this.matrix = i, this.type = t.type, this.points = [], this.holes = []
            };
        S.prototype.clone = function() {
            return new S(this.shape, this.fillStyle, this.lineStyle, this.matrix)
        }, S.prototype.destroy = function() {
            this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null
        };
        var P = new n.g,
            A = new a.a,
            M = function(t) {
                function e() {
                    t.call(this), this.points = [], this.colors = [], this.uvs = [], this.indices = [], this.textureIds = [], this.graphicsData = [], this.dirty = 0, this.batchDirty = -1, this.cacheDirty = -1, this.clearDirty = 0, this.drawCalls = [], this.batches = [], this.shapeIndex = 0, this._bounds = new a.a, this.boundsDirty = -1, this.boundsPadding = 0, this.batchable = !1, this.indicesUint16 = null, this.uvsFloat32 = null, this.closePointEps = 1e-4
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    bounds: {
                        configurable: !0
                    }
                };
                return r.bounds.get = function() {
                    return this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds
                }, e.prototype.invalidate = function() {
                    this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;
                    for (var t = 0; t < this.drawCalls.length; t++) this.drawCalls[t].textures.length = 0, E.push(this.drawCalls[t]);
                    this.drawCalls.length = 0;
                    for (var e = 0; e < this.batches.length; e++) {
                        var r = this.batches[e];
                        r.start = 0, r.attribStart = 0, r.style = null, w.push(r)
                    }
                    this.batches.length = 0
                }, e.prototype.clear = function() {
                    return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this
                }, e.prototype.drawShape = function(t, e, r, i) {
                    var n = new S(t, e, r, i);
                    return this.graphicsData.push(n), this.dirty++, this
                }, e.prototype.drawHole = function(t, e) {
                    if (!this.graphicsData.length) return null;
                    var r = new S(t, null, null, e),
                        i = this.graphicsData[this.graphicsData.length - 1];
                    return r.lineStyle = i.lineStyle, i.holes.push(r), this.dirty++, this
                }, e.prototype.destroy = function(e) {
                    t.prototype.destroy.call(this, e);
                    for (var r = 0; r < this.graphicsData.length; ++r) this.graphicsData[r].destroy();
                    this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null
                }, e.prototype.containsPoint = function(t) {
                    for (var e = this.graphicsData, r = 0; r < e.length; ++r) {
                        var i = e[r];
                        if (i.fillStyle.visible && (i.shape && (i.matrix ? i.matrix.applyInverse(t, P) : P.copyFrom(t), i.shape.contains(P.x, P.y)))) {
                            var n = !1;
                            if (i.holes)
                                for (var o = 0; o < i.holes.length; o++) {
                                    if (i.holes[o].shape.contains(P.x, P.y)) {
                                        n = !0;
                                        break
                                    }
                                }
                            if (!n) return !0
                        }
                    }
                    return !1
                }, e.prototype.updateBatches = function() {
                    if (this.graphicsData.length) {
                        if (this.validateBatching()) {
                            this.cacheDirty = this.dirty;
                            var t = this.uvs,
                                e = this.graphicsData,
                                r = null,
                                i = null;
                            this.batches.length > 0 && (i = (r = this.batches[this.batches.length - 1]).style);
                            for (var n = this.shapeIndex; n < e.length; n++) {
                                this.shapeIndex++;
                                var o = e[n],
                                    a = o.fillStyle,
                                    h = o.lineStyle;
                                T[o.type].build(o), o.matrix && this.transformPoints(o.points, o.matrix);
                                for (var u = 0; u < 2; u++) {
                                    var l = 0 === u ? a : h;
                                    if (l.visible) {
                                        var c = l.texture.baseTexture,
                                            d = this.indices.length,
                                            p = this.points.length / 2;
                                        c.wrapMode = s.n.REPEAT, r && !this._compareStyles(i, l) && (r.end(d, p), r.size > 0 && (r = null)), r || ((r = w.pop() || new b).begin(l, d, p), this.batches.push(r), i = l);
                                        var f = this.points.length / 2;
                                        0 === u ? this.processFill(o) : this.processLine(o);
                                        var m = this.points.length / 2 - f;
                                        this.addUvs(this.points, t, l.texture, f, m, l.matrix)
                                    }
                                }
                            }
                            if (r) {
                                var g = this.indices.length,
                                    v = this.points.length / 2;
                                r.end(g, v), this.indicesUint16 = new Uint16Array(this.indices), this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls()
                            } else this.batchable = !0
                        }
                    } else this.batchable = !0
                }, e.prototype._compareStyles = function(t, e) {
                    return !(!t || !e) && (t.texture.baseTexture === e.texture.baseTexture && (t.color + t.alpha === e.color + e.alpha && !!t.native == !!e.native))
                }, e.prototype.validateBatching = function() {
                    if (this.dirty === this.cacheDirty || !this.graphicsData.length) return !1;
                    for (var t = 0, e = this.graphicsData.length; t < e; t++) {
                        var r = this.graphicsData[t],
                            i = r.fillStyle,
                            n = r.lineStyle;
                        if (i && !i.texture.baseTexture.valid) return !1;
                        if (n && !n.texture.baseTexture.valid) return !1
                    }
                    return !0
                }, e.prototype.packBatches = function() {
                    this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
                    for (var t = this.batches, e = 0, r = t.length; e < r; e++)
                        for (var i = t[e], n = 0; n < i.size; n++) {
                            var o = i.start + n;
                            this.indicesUint16[o] = this.indicesUint16[o] - i.attribStart
                        }
                }, e.prototype.isBatchable = function() {
                    for (var t = this.batches, r = 0; r < t.length; r++)
                        if (t[r].style.native) return !1;
                    return this.points.length < 2 * e.BATCHABLE_SIZE
                }, e.prototype.buildDrawCalls = function() {
                    for (var t = ++i.e._globalBatch, e = 0; e < this.drawCalls.length; e++) this.drawCalls[e].textures.length = 0, E.push(this.drawCalls[e]);
                    this.drawCalls.length = 0;
                    var r = this.colors,
                        n = this.textureIds,
                        o = E.pop();
                    o || ((o = new i.f).textures = new i.k), o.textures.count = 0, o.start = 0, o.size = 0, o.type = s.c.TRIANGLES;
                    var a = 0,
                        h = null,
                        u = 0,
                        l = !1,
                        c = s.c.TRIANGLES,
                        d = 0;
                    this.drawCalls.push(o);
                    for (var p = 0; p < this.batches.length; p++) {
                        var f = this.batches[p],
                            m = f.style,
                            g = m.texture.baseTexture;
                        l !== !!m.native && (c = (l = !!m.native) ? s.c.LINES : s.c.TRIANGLES, h = null, a = 8, t++), h !== g && (h = g, g._batchEnabled !== t && (8 === a && (t++, a = 0, o.size > 0 && ((o = E.pop()) || ((o = new i.f).textures = new i.k), this.drawCalls.push(o)), o.start = d, o.size = 0, o.textures.count = 0, o.type = c), g.touched = 1, g._batchEnabled = t, g._batchLocation = a, g.wrapMode = 10497, o.textures.elements[o.textures.count++] = g, a++)), o.size += f.size, d += f.size, u = g._batchLocation, this.addColors(r, m.color, m.alpha, f.attribSize), this.addTextureIds(n, u, f.attribSize)
                    }
                    i.e._globalBatch = t, this.packAttributes()
                }, e.prototype.packAttributes = function() {
                    for (var t = this.points, e = this.uvs, r = this.colors, i = this.textureIds, n = new ArrayBuffer(3 * t.length * 4), o = new Float32Array(n), s = new Uint32Array(n), a = 0, h = 0; h < t.length / 2; h++) o[a++] = t[2 * h], o[a++] = t[2 * h + 1], o[a++] = e[2 * h], o[a++] = e[2 * h + 1], s[a++] = r[h], o[a++] = i[h];
                    this._buffer.update(n), this._indexBuffer.update(this.indicesUint16)
                }, e.prototype.processFill = function(t) {
                    t.holes.length ? (this.processHoles(t.holes), l.triangulate(t, this)) : T[t.type].triangulate(t, this)
                }, e.prototype.processLine = function(t) {
                    g(t, this);
                    for (var e = 0; e < t.holes.length; e++) g(t.holes[e], this)
                }, e.prototype.processHoles = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        T[r.type].build(r), r.matrix && this.transformPoints(r.points, r.matrix)
                    }
                }, e.prototype.calculateBounds = function() {
                    var t = this._bounds,
                        e = A,
                        r = n.d.IDENTITY;
                    this._bounds.clear(), e.clear();
                    for (var i = 0; i < this.graphicsData.length; i++) {
                        var o = this.graphicsData[i],
                            s = o.shape,
                            a = o.type,
                            h = o.lineStyle,
                            u = o.matrix || n.d.IDENTITY,
                            l = 0;
                        if (h && h.visible) {
                            var c = h.alignment;
                            l = h.width, a === n.l.POLY ? l *= .5 + Math.abs(.5 - c) : l *= Math.max(0, c)
                        }
                        r !== u && (e.isEmpty() || (t.addBoundsMatrix(e, r), e.clear()), r = u), a === n.l.RECT || a === n.l.RREC ? e.addFramePad(s.x, s.y, s.x + s.width, s.y + s.height, l, l) : a === n.l.CIRC ? e.addFramePad(s.x, s.y, s.x, s.y, s.radius + l, s.radius + l) : a === n.l.ELIP ? e.addFramePad(s.x, s.y, s.x, s.y, s.width + l, s.height + l) : t.addVerticesMatrix(r, s.points, 0, s.points.length, l, l)
                    }
                    e.isEmpty() || t.addBoundsMatrix(e, r), t.pad(this.boundsPadding, this.boundsPadding)
                }, e.prototype.transformPoints = function(t, e) {
                    for (var r = 0; r < t.length / 2; r++) {
                        var i = t[2 * r],
                            n = t[2 * r + 1];
                        t[2 * r] = e.a * i + e.c * n + e.tx, t[2 * r + 1] = e.b * i + e.d * n + e.ty
                    }
                }, e.prototype.addColors = function(t, e, r, i) {
                    for (var n = (e >> 16) + (65280 & e) + ((255 & e) << 16), s = Object(o.premultiplyTint)(n, r); i-- > 0;) t.push(s)
                }, e.prototype.addTextureIds = function(t, e, r) {
                    for (; r-- > 0;) t.push(e)
                }, e.prototype.addUvs = function(t, e, r, i, n, o) {
                    for (var s = 0, a = e.length, h = r.frame; s < n;) {
                        var u = t[2 * (i + s)],
                            l = t[2 * (i + s) + 1];
                        if (o) {
                            var c = o.a * u + o.c * l + o.tx;
                            l = o.b * u + o.d * l + o.ty, u = c
                        }
                        s++, e.push(u / h.width, l / h.height)
                    }
                    var d = r.baseTexture;
                    (h.width < d.width || h.height < d.height) && this.adjustUvs(e, r, a, n)
                }, e.prototype.adjustUvs = function(t, e, r, i) {
                    for (var n = e.baseTexture, o = r + 2 * i, s = e.frame, a = s.width / n.width, h = s.height / n.height, u = s.x / s.width, l = s.y / s.height, c = Math.floor(t[r] + 1e-6), d = Math.floor(t[r + 1] + 1e-6), p = r + 2; p < o; p += 2) c = Math.min(c, Math.floor(t[p] + 1e-6)), d = Math.min(d, Math.floor(t[p + 1] + 1e-6));
                    u -= c, l -= d;
                    for (var f = r; f < o; f += 2) t[f] = (t[f] + u) * a, t[f + 1] = (t[f + 1] + l) * h
                }, Object.defineProperties(e.prototype, r), e
            }(i.g);
        M.BATCHABLE_SIZE = 100;
        var C = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.clone = function() {
                    var t = new e;
                    return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t.native = this.native, t
                }, e.prototype.reset = function() {
                    t.prototype.reset.call(this), this.color = 0, this.width = 0, this.alignment = .5, this.native = !1
                }, e
            }(u),
            O = new Float32Array(3),
            R = {},
            D = function(t) {
                function e(e) {
                    void 0 === e && (e = null), t.call(this), this.geometry = e || new M, this.geometry.refCount++, this.shader = null, this.state = i.C.for2d(), this._fillStyle = new u, this._lineStyle = new C, this._matrix = null, this._holeMode = !1, this.currentPath = null, this.batches = [], this.batchTint = -1, this.vertexData = null, this._transformID = -1, this.batchDirty = -1, this.pluginName = "batch", this.tint = 16777215, this.blendMode = s.b.NORMAL
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    blendMode: {
                        configurable: !0
                    },
                    tint: {
                        configurable: !0
                    },
                    fill: {
                        configurable: !0
                    },
                    line: {
                        configurable: !0
                    }
                };
                return e.prototype.clone = function() {
                    return this.finishPoly(), new e(this.geometry)
                }, r.blendMode.set = function(t) {
                    this.state.blendMode = t
                }, r.blendMode.get = function() {
                    return this.state.blendMode
                }, r.tint.get = function() {
                    return this._tint
                }, r.tint.set = function(t) {
                    this._tint = t
                }, r.fill.get = function() {
                    return this._fillStyle
                }, r.line.get = function() {
                    return this._lineStyle
                }, e.prototype.lineStyle = function(t) {
                    if ("number" == typeof t) {
                        var e = arguments;
                        t = {
                            width: e[0] || 0,
                            color: e[1] || 0,
                            alpha: void 0 !== e[2] ? e[2] : 1,
                            alignment: void 0 !== e[3] ? e[3] : .5,
                            native: !!e[4]
                        }
                    }
                    return this.lineTextureStyle(t)
                }, e.prototype.lineTextureStyle = function(t) {
                    if ("number" == typeof t) {
                        Object(o.deprecation)("v5.2.0", "Please use object-based options for Graphics#lineTextureStyle");
                        var e = arguments[0],
                            r = arguments[1],
                            n = arguments[2],
                            s = arguments[3],
                            a = arguments[4],
                            h = arguments[5],
                            u = arguments[6];
                        t = {
                            width: e,
                            texture: r,
                            color: n,
                            alpha: s,
                            matrix: a,
                            alignment: h,
                            native: u
                        }, Object.keys(t).forEach((function(e) {
                            return void 0 === t[e] && delete t[e]
                        }))
                    }
                    t = Object.assign({
                        width: 0,
                        texture: i.E.WHITE,
                        color: t && t.texture ? 16777215 : 0,
                        alpha: 1,
                        matrix: null,
                        alignment: .5,
                        native: !1
                    }, t), this.currentPath && this.startPoly();
                    var l = t.width > 0 && t.alpha > 0;
                    return l ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._lineStyle, {
                        visible: l
                    }, t)) : this._lineStyle.reset(), this
                }, e.prototype.startPoly = function() {
                    if (this.currentPath) {
                        var t = this.currentPath.points,
                            e = this.currentPath.points.length;
                        e > 2 && (this.drawShape(this.currentPath), this.currentPath = new n.h, this.currentPath.closeStroke = !1, this.currentPath.points.push(t[e - 2], t[e - 1]))
                    } else this.currentPath = new n.h, this.currentPath.closeStroke = !1
                }, e.prototype.finishPoly = function() {
                    this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0)
                }, e.prototype.moveTo = function(t, e) {
                    return this.startPoly(), this.currentPath.points[0] = t, this.currentPath.points[1] = e, this
                }, e.prototype.lineTo = function(t, e) {
                    this.currentPath || this.moveTo(0, 0);
                    var r = this.currentPath.points,
                        i = r[r.length - 2],
                        n = r[r.length - 1];
                    return i === t && n === e || r.push(t, e), this
                }, e.prototype._initCurve = function(t, e) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), this.currentPath ? 0 === this.currentPath.points.length && (this.currentPath.points = [t, e]) : this.moveTo(t, e)
                }, e.prototype.quadraticCurveTo = function(t, e, r, i) {
                    this._initCurve();
                    var n = this.currentPath.points;
                    return 0 === n.length && this.moveTo(0, 0), _.curveTo(t, e, r, i, n), this
                }, e.prototype.bezierCurveTo = function(t, e, r, i, n, o) {
                    return this._initCurve(), x.curveTo(t, e, r, i, n, o, this.currentPath.points), this
                }, e.prototype.arcTo = function(t, e, r, i, n) {
                    this._initCurve(t, e);
                    var o = this.currentPath.points,
                        s = y.curveTo(t, e, r, i, n, o);
                    if (s) {
                        var a = s.cx,
                            h = s.cy,
                            u = s.radius,
                            l = s.startAngle,
                            c = s.endAngle,
                            d = s.anticlockwise;
                        this.arc(a, h, u, l, c, d)
                    }
                    return this
                }, e.prototype.arc = function(t, e, r, i, o, s) {
                    if (void 0 === s && (s = !1), i === o) return this;
                    if (!s && o <= i ? o += n.f : s && i <= o && (i += n.f), 0 === o - i) return this;
                    var a = t + Math.cos(i) * r,
                        h = e + Math.sin(i) * r,
                        u = this.geometry.closePointEps,
                        l = this.currentPath ? this.currentPath.points : null;
                    if (l) {
                        var c = Math.abs(l[l.length - 2] - a),
                            d = Math.abs(l[l.length - 1] - h);
                        c < u && d < u || l.push(a, h)
                    } else this.moveTo(a, h), l = this.currentPath.points;
                    return y.arc(a, h, t, e, r, i, o, s, l), this
                }, e.prototype.beginFill = function(t, e) {
                    return void 0 === t && (t = 0), void 0 === e && (e = 1), this.beginTextureFill({
                        texture: i.E.WHITE,
                        color: t,
                        alpha: e
                    })
                }, e.prototype.beginTextureFill = function(t) {
                    if (t instanceof i.E) {
                        Object(o.deprecation)("v5.2.0", "Please use object-based options for Graphics#beginTextureFill");
                        var e = arguments[0],
                            r = arguments[1],
                            n = arguments[2],
                            s = arguments[3];
                        t = {
                            texture: e,
                            color: r,
                            alpha: n,
                            matrix: s
                        }, Object.keys(t).forEach((function(e) {
                            return void 0 === t[e] && delete t[e]
                        }))
                    }
                    t = Object.assign({
                        texture: i.E.WHITE,
                        color: 16777215,
                        alpha: 1,
                        matrix: null
                    }, t), this.currentPath && this.startPoly();
                    var a = t.alpha > 0;
                    return a ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._fillStyle, {
                        visible: a
                    }, t)) : this._fillStyle.reset(), this
                }, e.prototype.endFill = function() {
                    return this.finishPoly(), this._fillStyle.reset(), this
                }, e.prototype.drawRect = function(t, e, r, i) {
                    return this.drawShape(new n.j(t, e, r, i))
                }, e.prototype.drawRoundedRect = function(t, e, r, i, o) {
                    return this.drawShape(new n.k(t, e, r, i, o))
                }, e.prototype.drawCircle = function(t, e, r) {
                    return this.drawShape(new n.a(t, e, r))
                }, e.prototype.drawEllipse = function(t, e, r, i) {
                    return this.drawShape(new n.c(t, e, r, i))
                }, e.prototype.drawPolygon = function(t) {
                    var e = arguments,
                        r = t,
                        i = !0;
                    if (r.points && (i = r.closeStroke, r = r.points), !Array.isArray(r)) {
                        r = new Array(arguments.length);
                        for (var o = 0; o < r.length; ++o) r[o] = e[o]
                    }
                    var s = new n.h(r);
                    return s.closeStroke = i, this.drawShape(s), this
                }, e.prototype.drawShape = function(t) {
                    return this._holeMode ? this.geometry.drawHole(t, this._matrix) : this.geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this
                }, e.prototype.drawStar = function(t, e, r, i, n, o) {
                    return void 0 === o && (o = 0), this.drawPolygon(new v(t, e, r, i, n, o))
                }, e.prototype.clear = function() {
                    return this.geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._matrix = null, this._holeMode = !1, this.currentPath = null, this
                }, e.prototype.isFastRect = function() {
                    return 1 === this.geometry.graphicsData.length && this.geometry.graphicsData[0].shape.type === n.l.RECT && !this.geometry.graphicsData[0].lineWidth
                }, e.prototype._render = function(t) {
                    this.finishPoly();
                    var e = this.geometry;
                    e.updateBatches(), e.batchable ? (this.batchDirty !== e.batchDirty && this._populateBatches(), this._renderBatched(t)) : (t.batch.flush(), this._renderDirect(t))
                }, e.prototype._populateBatches = function() {
                    var t = this.geometry,
                        e = this.blendMode;
                    this.batches = [], this.batchTint = -1, this._transformID = -1, this.batchDirty = t.batchDirty, this.vertexData = new Float32Array(t.points);
                    for (var r = 0, i = t.batches.length; r < i; r++) {
                        var n = t.batches[r],
                            s = n.style.color,
                            a = new Float32Array(this.vertexData.buffer, 4 * n.attribStart * 2, 2 * n.attribSize),
                            h = new Float32Array(t.uvsFloat32.buffer, 4 * n.attribStart * 2, 2 * n.attribSize),
                            u = {
                                vertexData: a,
                                blendMode: e,
                                indices: new Uint16Array(t.indicesUint16.buffer, 2 * n.start, n.size),
                                uvs: h,
                                _batchRGB: Object(o.hex2rgb)(s),
                                _tintRGB: s,
                                _texture: n.style.texture,
                                alpha: n.style.alpha,
                                worldAlpha: 1
                            };
                        this.batches[r] = u
                    }
                }, e.prototype._renderBatched = function(t) {
                    if (this.batches.length) {
                        t.batch.setObjectRenderer(t.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
                        for (var e = 0, r = this.batches.length; e < r; e++) {
                            var i = this.batches[e];
                            i.worldAlpha = this.worldAlpha * i.alpha, t.plugins[this.pluginName].render(i)
                        }
                    }
                }, e.prototype._renderDirect = function(t) {
                    var e = this._resolveDirectShader(t),
                        r = this.geometry,
                        i = this.tint,
                        n = this.worldAlpha,
                        o = e.uniforms,
                        s = r.drawCalls;
                    o.translationMatrix = this.transform.worldTransform, o.tint[0] = (i >> 16 & 255) / 255 * n, o.tint[1] = (i >> 8 & 255) / 255 * n, o.tint[2] = (255 & i) / 255 * n, o.tint[3] = n, t.shader.bind(e), t.geometry.bind(r, e), t.state.set(this.state);
                    for (var a = 0, h = s.length; a < h; a++) this._renderDrawCallDirect(t, r.drawCalls[a])
                }, e.prototype._renderDrawCallDirect = function(t, e) {
                    for (var r = e.textures, i = e.type, n = e.size, o = e.start, s = r.count, a = 0; a < s; a++) t.texture.bind(r.elements[a], a);
                    t.geometry.draw(i, n, o)
                }, e.prototype._resolveDirectShader = function(t) {
                    var e = this.shader,
                        r = this.pluginName;
                    if (!e) {
                        if (!R[r]) {
                            for (var o = new Int32Array(16), s = 0; s < 16; s++) o[s] = s;
                            var a = {
                                    tint: new Float32Array([1, 1, 1, 1]),
                                    translationMatrix: new n.d,
                                    default: i.H.from({
                                        uSamplers: o
                                    }, !0)
                                },
                                h = t.plugins[r]._shader.program;
                            R[r] = new i.A(h, a)
                        }
                        e = R[r]
                    }
                    return e
                }, e.prototype._calculateBounds = function() {
                    this.finishPoly();
                    var t = this.geometry;
                    if (t.graphicsData.length) {
                        var e = t.bounds,
                            r = e.minX,
                            i = e.minY,
                            n = e.maxX,
                            o = e.maxY;
                        this._bounds.addFrame(this.transform, r, i, n, o)
                    }
                }, e.prototype.containsPoint = function(t) {
                    return this.worldTransform.applyInverse(t, e._TEMP_POINT), this.geometry.containsPoint(e._TEMP_POINT)
                }, e.prototype.calculateTints = function() {
                    if (this.batchTint !== this.tint) {
                        this.batchTint = this.tint;
                        for (var t = Object(o.hex2rgb)(this.tint, O), e = 0; e < this.batches.length; e++) {
                            var r = this.batches[e],
                                i = r._batchRGB,
                                n = (t[0] * i[0] * 255 << 16) + (t[1] * i[1] * 255 << 8) + (0 | t[2] * i[2] * 255);
                            r._tintRGB = (n >> 16) + (65280 & n) + ((255 & n) << 16)
                        }
                    }
                }, e.prototype.calculateVertices = function() {
                    if (this._transformID !== this.transform._worldID) {
                        this._transformID = this.transform._worldID;
                        for (var t = this.transform.worldTransform, e = t.a, r = t.b, i = t.c, n = t.d, o = t.tx, s = t.ty, a = this.geometry.points, h = this.vertexData, u = 0, l = 0; l < a.length; l += 2) {
                            var c = a[l],
                                d = a[l + 1];
                            h[u++] = e * c + i * d + o, h[u++] = n * d + r * c + s
                        }
                    }
                }, e.prototype.closePath = function() {
                    var t = this.currentPath;
                    return t && (t.closeStroke = !0), this
                }, e.prototype.setMatrix = function(t) {
                    return this._matrix = t, this
                }, e.prototype.beginHole = function() {
                    return this.finishPoly(), this._holeMode = !0, this
                }, e.prototype.endHole = function() {
                    return this.finishPoly(), this._holeMode = !1, this
                }, e.prototype.destroy = function(e) {
                    t.prototype.destroy.call(this, e), this.geometry.refCount--, 0 === this.geometry.refCount && this.geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this.geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, t.prototype.destroy.call(this, e)
                }, Object.defineProperties(e.prototype, r), e
            }(a.b);
        D._TEMP_POINT = new n.g
    },
    4: function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return o
        }));
        var i = r(29),
            n = r.n(i);
        r.d(e, "a", (function() {
            return n.a
        }));
        var o = {
            MIPMAP_TEXTURES: 1,
            ANISOTROPIC_LEVEL: 0,
            RESOLUTION: 1,
            FILTER_RESOLUTION: 1,
            SPRITE_MAX_TEXTURES:
                /*!
                 * @pixi/settings - v5.2.0
                 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
                 *
                 * @pixi/settings is licensed under the MIT License.
                 * http://www.opensource.org/licenses/mit-license
                 */
                function(t) {
                    var e = !0;
                    if (n.a.tablet || n.a.phone) {
                        if (e = !1, n.a.apple.device) {
                            var r = navigator.userAgent.match(/OS (\d+)_(\d+)?/);
                            if (r) parseInt(r[1], 10) >= 11 && (e = !0)
                        }
                        if (n.a.android.device) {
                            var i = navigator.userAgent.match(/Android\s([0-9.]*)/);
                            if (i) parseInt(i[1], 10) >= 7 && (e = !0)
                        }
                    }
                    return e ? t : 4
                }(32),
            SPRITE_BATCH_SIZE: 4096,
            RENDER_OPTIONS: {
                view: null,
                antialias: !1,
                forceFXAA: !1,
                autoDensity: !1,
                transparent: !1,
                backgroundColor: 0,
                clearBeforeRender: !0,
                preserveDrawingBuffer: !1,
                width: 800,
                height: 600,
                legacy: !1
            },
            GC_MODE: 0,
            GC_MAX_IDLE: 3600,
            GC_MAX_CHECK_COUNT: 600,
            WRAP_MODE: 33071,
            SCALE_MODE: 1,
            PRECISION_VERTEX: "highp",
            PRECISION_FRAGMENT: n.a.apple.device ? "highp" : "mediump",
            CAN_UPLOAD_SAME_BUFFER: !n.a.apple.device,
            CREATE_IMAGE_BITMAP: !1,
            ROUND_PIXELS: !1
        }
    },
    44: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return d
        })), r.d(e, "b", (function() {
            return s
        })), r.d(e, "c", (function() {
            return a
        })), r.d(e, "d", (function() {
            return l
        })), r.d(e, "e", (function() {
            return u
        })), r.d(e, "f", (function() {
            return h
        }));
        var i = r(16),
            n = r(1),
            o = r(3),
            s = function(t) {
                function e(e, r, i, n) {
                    void 0 === e && (e = 100), void 0 === r && (r = 100), void 0 === i && (i = 10), void 0 === n && (n = 10), t.call(this), this.segWidth = i, this.segHeight = n, this.width = e, this.height = r, this.build()
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.build = function() {
                    for (var t = this.segWidth * this.segHeight, e = [], r = [], i = [], n = this.segWidth - 1, o = this.segHeight - 1, s = this.width / n, a = this.height / o, h = 0; h < t; h++) {
                        var u = h % this.segWidth,
                            l = h / this.segWidth | 0;
                        e.push(u * s, l * a), r.push(u / n, l / o)
                    }
                    for (var c = n * o, d = 0; d < c; d++) {
                        var p = d % n,
                            f = d / n | 0,
                            m = f * this.segWidth + p,
                            g = f * this.segWidth + p + 1,
                            v = (f + 1) * this.segWidth + p,
                            y = (f + 1) * this.segWidth + p + 1;
                        i.push(m, g, v, g, y, v)
                    }
                    this.buffers[0].data = new Float32Array(e), this.buffers[1].data = new Float32Array(r), this.indexBuffer.data = new Uint16Array(i), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update()
                }, e
            }(i.c),
            a = function(t) {
                function e(e, r, i) {
                    void 0 === e && (e = 200), void 0 === i && (i = 0), t.call(this, new Float32Array(4 * r.length), new Float32Array(4 * r.length), new Uint16Array(6 * (r.length - 1))), this.points = r, this.width = e, this.textureScale = i, this.build()
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.build = function() {
                    var t = this.points;
                    if (t) {
                        var e = this.getBuffer("aVertexPosition"),
                            r = this.getBuffer("aTextureCoord"),
                            i = this.getIndex();
                        if (!(t.length < 1)) {
                            e.data.length / 4 !== t.length && (e.data = new Float32Array(4 * t.length), r.data = new Float32Array(4 * t.length), i.data = new Uint16Array(6 * (t.length - 1)));
                            var n = r.data,
                                o = i.data;
                            n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1;
                            for (var s = 0, a = t[0], h = this.width * this.textureScale, u = t.length, l = 0; l < u; l++) {
                                var c = 4 * l;
                                if (this.textureScale > 0) {
                                    var d = a.x - t[l].x,
                                        p = a.y - t[l].y,
                                        f = Math.sqrt(d * d + p * p);
                                    a = t[l], s += f / h
                                } else s = l / (u - 1);
                                n[c] = s, n[c + 1] = 0, n[c + 2] = s, n[c + 3] = 1
                            }
                            for (var m = 0, g = 0; g < u - 1; g++) {
                                var v = 2 * g;
                                o[m++] = v, o[m++] = v + 1, o[m++] = v + 2, o[m++] = v + 2, o[m++] = v + 1, o[m++] = v + 3
                            }
                            r.update(), i.update(), this.updateVertices()
                        }
                    }
                }, e.prototype.updateVertices = function() {
                    var t = this.points;
                    if (!(t.length < 1)) {
                        for (var e, r = t[0], i = 0, n = 0, o = this.buffers[0].data, s = t.length, a = 0; a < s; a++) {
                            var h = t[a],
                                u = 4 * a;
                            n = -((e = a < t.length - 1 ? t[a + 1] : h).x - r.x), i = e.y - r.y;
                            var l = Math.sqrt(i * i + n * n),
                                c = this.textureScale > 0 ? this.textureScale * this.width / 2 : this.width / 2;
                            i /= l, n /= l, i *= c, n *= c, o[u] = h.x + i, o[u + 1] = h.y + n, o[u + 2] = h.x - i, o[u + 3] = h.y - n, r = h
                        }
                        this.buffers[0].update()
                    }
                }, e.prototype.update = function() {
                    this.textureScale > 0 ? this.build() : this.updateVertices()
                }, e
            }(i.c),
            h = function(t) {
                function e(e, r, o) {
                    void 0 === o && (o = 0);
                    var s = new a(e.height, r, o),
                        h = new i.d(e);
                    o > 0 && (e.baseTexture.wrapMode = n.n.REPEAT), t.call(this, s, h), this.autoUpdate = !0
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype._render = function(e) {
                    (this.autoUpdate || this.geometry.width !== this.shader.texture.height) && (this.geometry.width = this.shader.texture.height, this.geometry.update()), t.prototype._render.call(this, e)
                }, e
            }(i.a),
            u = function(t) {
                function e(e, r, n) {
                    var a = new s(e.width, e.height, r, n),
                        h = new i.d(o.E.WHITE);
                    t.call(this, a, h), this.texture = e
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    texture: {
                        configurable: !0
                    }
                };
                return e.prototype.textureUpdated = function() {
                    this._textureID = this.shader.texture._updateID, this.geometry.width = this.shader.texture.width, this.geometry.height = this.shader.texture.height, this.geometry.build()
                }, r.texture.set = function(t) {
                    this.shader.texture !== t && (this.shader.texture = t, this._textureID = -1, t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this))
                }, r.texture.get = function() {
                    return this.shader.texture
                }, e.prototype._render = function(e) {
                    this._textureID !== this.shader.texture._updateID && this.textureUpdated(), t.prototype._render.call(this, e)
                }, Object.defineProperties(e.prototype, r), e
            }(i.a),
            l = function(t) {
                function e(e, r, n, s, a) {
                    void 0 === e && (e = o.E.EMPTY);
                    var h = new i.c(r, n, s);
                    h.getBuffer("aVertexPosition").static = !1;
                    var u = new i.d(e);
                    t.call(this, h, u, null, a), this.autoUpdate = !0
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    vertices: {
                        configurable: !0
                    }
                };
                return r.vertices.get = function() {
                    return this.geometry.getBuffer("aVertexPosition").data
                }, r.vertices.set = function(t) {
                    this.geometry.getBuffer("aVertexPosition").data = t
                }, e.prototype._render = function(e) {
                    this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(), t.prototype._render.call(this, e)
                }, Object.defineProperties(e.prototype, r), e
            }(i.a),
            c = 10,
            d = function(t) {
                function e(e, r, i, n, s) {
                    t.call(this, o.E.WHITE, 4, 4), this._origWidth = e.orig.width, this._origHeight = e.orig.height, this._width = this._origWidth, this._height = this._origHeight, this._leftWidth = void 0 !== r ? r : c, this._rightWidth = void 0 !== n ? n : c, this._topHeight = void 0 !== i ? i : c, this._bottomHeight = void 0 !== s ? s : c, this.texture = e
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    vertices: {
                        configurable: !0
                    },
                    width: {
                        configurable: !0
                    },
                    height: {
                        configurable: !0
                    },
                    leftWidth: {
                        configurable: !0
                    },
                    rightWidth: {
                        configurable: !0
                    },
                    topHeight: {
                        configurable: !0
                    },
                    bottomHeight: {
                        configurable: !0
                    }
                };
                return e.prototype.textureUpdated = function() {
                    this._textureID = this.shader.texture._updateID, this._refresh()
                }, r.vertices.get = function() {
                    return this.geometry.getBuffer("aVertexPosition").data
                }, r.vertices.set = function(t) {
                    this.geometry.getBuffer("aVertexPosition").data = t
                }, e.prototype.updateHorizontalVertices = function() {
                    var t = this.vertices,
                        e = this._topHeight + this._bottomHeight,
                        r = this._height > e ? 1 : this._height / e;
                    t[9] = t[11] = t[13] = t[15] = this._topHeight * r, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * r, t[25] = t[27] = t[29] = t[31] = this._height
                }, e.prototype.updateVerticalVertices = function() {
                    var t = this.vertices,
                        e = this._leftWidth + this._rightWidth,
                        r = this._width > e ? 1 : this._width / e;
                    t[2] = t[10] = t[18] = t[26] = this._leftWidth * r, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * r, t[6] = t[14] = t[22] = t[30] = this._width
                }, r.width.get = function() {
                    return this._width
                }, r.width.set = function(t) {
                    this._width = t, this._refresh()
                }, r.height.get = function() {
                    return this._height
                }, r.height.set = function(t) {
                    this._height = t, this._refresh()
                }, r.leftWidth.get = function() {
                    return this._leftWidth
                }, r.leftWidth.set = function(t) {
                    this._leftWidth = t, this._refresh()
                }, r.rightWidth.get = function() {
                    return this._rightWidth
                }, r.rightWidth.set = function(t) {
                    this._rightWidth = t, this._refresh()
                }, r.topHeight.get = function() {
                    return this._topHeight
                }, r.topHeight.set = function(t) {
                    this._topHeight = t, this._refresh()
                }, r.bottomHeight.get = function() {
                    return this._bottomHeight
                }, r.bottomHeight.set = function(t) {
                    this._bottomHeight = t, this._refresh()
                }, e.prototype._refresh = function() {
                    var t = this.texture,
                        e = this.geometry.buffers[1].data;
                    this._origWidth = t.orig.width, this._origHeight = t.orig.height;
                    var r = 1 / this._origWidth,
                        i = 1 / this._origHeight;
                    e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = r * this._leftWidth, e[4] = e[12] = e[20] = e[28] = 1 - r * this._rightWidth, e[9] = e[11] = e[13] = e[15] = i * this._topHeight, e[17] = e[19] = e[21] = e[23] = 1 - i * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.geometry.buffers[0].update(), this.geometry.buffers[1].update()
                }, Object.defineProperties(e.prototype, r), e
            }(u)
    },
    50: function(t, e, r) {
        "use strict";
        r.r(e), r.d(e, "BasePrepare", (function() {
            return l
        })), r.d(e, "CountLimiter", (function() {
            return u
        })), r.d(e, "Prepare", (function() {
            return y
        })), r.d(e, "TimeLimiter", (function() {
            return T
        }));
        var i = r(4),
            n = r(3),
            o = r(36),
            s = r(8),
            a = r(6),
            h = r(28);
        /*!
         * @pixi/prepare - v5.2.0
         * Compiled Wed, 06 Nov 2019 02:32:43 UTC
         *
         * @pixi/prepare is licensed under the MIT License.
         * http://www.opensource.org/licenses/mit-license
         */
        i.b.UPLOADS_PER_FRAME = 4;
        var u = function(t) {
            this.maxItemsPerFrame = t, this.itemsLeft = 0
        };
        u.prototype.beginFrame = function() {
            this.itemsLeft = this.maxItemsPerFrame
        }, u.prototype.allowedToUpload = function() {
            return this.itemsLeft-- > 0
        };
        var l = function(t) {
            var e = this;
            this.limiter = new u(i.b.UPLOADS_PER_FRAME), this.renderer = t, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = function() {
                e.queue && e.prepareItems()
            }, this.registerFindHook(g), this.registerFindHook(v), this.registerFindHook(c), this.registerFindHook(d), this.registerFindHook(p), this.registerUploadHook(f), this.registerUploadHook(m)
        };

        function c(t, e) {
            var r = !1;
            if (t && t._textures && t._textures.length)
                for (var i = 0; i < t._textures.length; i++)
                    if (t._textures[i] instanceof n.E) {
                        var o = t._textures[i].baseTexture; - 1 === e.indexOf(o) && (e.push(o), r = !0)
                    } return r
        }

        function d(t, e) {
            if (t.baseTexture instanceof n.e) {
                var r = t.baseTexture;
                return -1 === e.indexOf(r) && e.push(r), !0
            }
            return !1
        }

        function p(t, e) {
            if (t._texture && t._texture instanceof n.E) {
                var r = t._texture.baseTexture;
                return -1 === e.indexOf(r) && e.push(r), !0
            }
            return !1
        }

        function f(t, e) {
            return e instanceof h.b && (e.updateText(!0), !0)
        }

        function m(t, e) {
            if (e instanceof h.d) {
                var r = e.toFontString();
                return h.c.measureFont(r), !0
            }
            return !1
        }

        function g(t, e) {
            if (t instanceof h.b) {
                -1 === e.indexOf(t.style) && e.push(t.style), -1 === e.indexOf(t) && e.push(t);
                var r = t._texture.baseTexture;
                return -1 === e.indexOf(r) && e.push(r), !0
            }
            return !1
        }

        function v(t, e) {
            return t instanceof h.d && (-1 === e.indexOf(t) && e.push(t), !0)
        }
        l.prototype.upload = function(t, e) {
            "function" == typeof t && (e = t, t = null), t && this.add(t), this.queue.length ? (e && this.completes.push(e), this.ticking || (this.ticking = !0, s.a.system.addOnce(this.tick, this, s.c.UTILITY))) : e && e()
        }, l.prototype.tick = function() {
            setTimeout(this.delayedTick, 0)
        }, l.prototype.prepareItems = function() {
            for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
                var t = this.queue[0],
                    e = !1;
                if (t && !t._destroyed)
                    for (var r = 0, i = this.uploadHooks.length; r < i; r++)
                        if (this.uploadHooks[r](this.uploadHookHelper, t)) {
                            this.queue.shift(), e = !0;
                            break
                        } e || this.queue.shift()
            }
            if (this.queue.length) s.a.system.addOnce(this.tick, this, s.c.UTILITY);
            else {
                this.ticking = !1;
                var n = this.completes.slice(0);
                this.completes.length = 0;
                for (var o = 0, a = n.length; o < a; o++) n[o]()
            }
        }, l.prototype.registerFindHook = function(t) {
            return t && this.addHooks.push(t), this
        }, l.prototype.registerUploadHook = function(t) {
            return t && this.uploadHooks.push(t), this
        }, l.prototype.add = function(t) {
            for (var e = 0, r = this.addHooks.length; e < r && !this.addHooks[e](t, this.queue); e++);
            if (t instanceof a.b)
                for (var i = t.children.length - 1; i >= 0; i--) this.add(t.children[i]);
            return this
        }, l.prototype.destroy = function() {
            this.ticking && s.a.system.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null
        };
        var y = function(t) {
            function e(e) {
                t.call(this, e), this.uploadHookHelper = this.renderer, this.registerFindHook(b), this.registerUploadHook(x), this.registerUploadHook(_)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
        }(l);

        function x(t, e) {
            return e instanceof n.e && (e._glTextures[t.CONTEXT_UID] || t.texture.bind(e), !0)
        }

        function _(t, e) {
            if (!(e instanceof o.c)) return !1;
            var r = e.geometry;
            e.finishPoly(), r.updateBatches();
            for (var i = r.batches, n = 0; n < i.length; n++) {
                var s = i[n].style.texture;
                s && x(t, s.baseTexture)
            }
            return r.batchable || t.geometry.bind(r, e._resolveDirectShader()), !0
        }

        function b(t, e) {
            return t instanceof o.c && (e.push(t), !0)
        }
        var T = function(t) {
            this.maxMilliseconds = t, this.frameStart = 0
        };
        T.prototype.beginFrame = function() {
            this.frameStart = Date.now()
        }, T.prototype.allowedToUpload = function() {
            return Date.now() - this.frameStart < this.maxMilliseconds
        }
    },
    51: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return h
        })), r.d(e, "b", (function() {
            return d
        }));
        var i = r(1),
            n = r(0),
            o = r(6),
            s = r(3),
            a = r(2),
            h = function(t) {
                function e(e, r, n, o) {
                    void 0 === e && (e = 1500), void 0 === n && (n = 16384), void 0 === o && (o = !1), t.call(this);
                    n > 16384 && (n = 16384), this._properties = [!1, !0, !1, !1, !1], this._maxSize = e, this._batchSize = n, this._buffers = null, this._bufferUpdateIDs = [], this._updateID = 0, this.interactiveChildren = !1, this.blendMode = i.b.NORMAL, this.autoResize = o, this.roundPixels = !0, this.baseTexture = null, this.setProperties(r), this._tint = 0, this.tintRgb = new Float32Array(4), this.tint = 16777215
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    tint: {
                        configurable: !0
                    }
                };
                return e.prototype.setProperties = function(t) {
                    t && (this._properties[0] = "vertices" in t || "scale" in t ? !!t.vertices || !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "tint" in t || "alpha" in t ? !!t.tint || !!t.alpha : this._properties[4])
                }, e.prototype.updateTransform = function() {
                    this.displayObjectUpdateTransform()
                }, r.tint.get = function() {
                    return this._tint
                }, r.tint.set = function(t) {
                    this._tint = t, Object(n.hex2rgb)(t, this.tintRgb)
                }, e.prototype.render = function(t) {
                    var e = this;
                    this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.valid || this.baseTexture.once("update", (function() {
                        return e.onChildrenChange(0)
                    }))), t.batch.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
                }, e.prototype.onChildrenChange = function(t) {
                    for (var e = Math.floor(t / this._batchSize); this._bufferUpdateIDs.length < e;) this._bufferUpdateIDs.push(0);
                    this._bufferUpdateIDs[e] = ++this._updateID
                }, e.prototype.dispose = function() {
                    if (this._buffers) {
                        for (var t = 0; t < this._buffers.length; ++t) this._buffers[t].destroy();
                        this._buffers = null
                    }
                }, e.prototype.destroy = function(e) {
                    t.prototype.destroy.call(this, e), this.dispose(), this._properties = null, this._buffers = null, this._bufferUpdateIDs = null
                }, Object.defineProperties(e.prototype, r), e
            }(o.b),
            u = function(t, e, r) {
                this.geometry = new s.r, this.indexBuffer = null, this.size = r, this.dynamicProperties = [], this.staticProperties = [];
                for (var n = 0; n < t.length; ++n) {
                    var o = t[n];
                    o = {
                        attributeName: o.attributeName,
                        size: o.size,
                        uploadFunction: o.uploadFunction,
                        type: o.type || i.m.FLOAT,
                        offset: o.offset
                    }, e[n] ? this.dynamicProperties.push(o) : this.staticProperties.push(o)
                }
                this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers()
            };
        u.prototype.initBuffers = function() {
            var t = this.geometry,
                e = 0;
            this.indexBuffer = new s.l(Object(n.createIndicesForQuads)(this.size), !0, !0), t.addIndex(this.indexBuffer), this.dynamicStride = 0;
            for (var r = 0; r < this.dynamicProperties.length; ++r) {
                var o = this.dynamicProperties[r];
                o.offset = e, e += o.size, this.dynamicStride += o.size
            }
            var a = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
            this.dynamicData = new Float32Array(a), this.dynamicDataUint32 = new Uint32Array(a), this.dynamicBuffer = new s.l(this.dynamicData, !1, !1);
            var h = 0;
            this.staticStride = 0;
            for (var u = 0; u < this.staticProperties.length; ++u) {
                var l = this.staticProperties[u];
                l.offset = h, h += l.size, this.staticStride += l.size
            }
            var c = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
            this.staticData = new Float32Array(c), this.staticDataUint32 = new Uint32Array(c), this.staticBuffer = new s.l(this.staticData, !0, !1);
            for (var d = 0; d < this.dynamicProperties.length; ++d) {
                var p = this.dynamicProperties[d];
                t.addAttribute(p.attributeName, this.dynamicBuffer, 0, p.type === i.m.UNSIGNED_BYTE, p.type, 4 * this.dynamicStride, 4 * p.offset)
            }
            for (var f = 0; f < this.staticProperties.length; ++f) {
                var m = this.staticProperties[f];
                t.addAttribute(m.attributeName, this.staticBuffer, 0, m.type === i.m.UNSIGNED_BYTE, m.type, 4 * this.staticStride, 4 * m.offset)
            }
        }, u.prototype.uploadDynamic = function(t, e, r) {
            for (var n = 0; n < this.dynamicProperties.length; n++) {
                var o = this.dynamicProperties[n];
                o.uploadFunction(t, e, r, o.type === i.m.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, o.offset)
            }
            this.dynamicBuffer._updateID++
        }, u.prototype.uploadStatic = function(t, e, r) {
            for (var n = 0; n < this.staticProperties.length; n++) {
                var o = this.staticProperties[n];
                o.uploadFunction(t, e, r, o.type === i.m.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, o.offset)
            }
            this.staticBuffer._updateID++
        }, u.prototype.destroy = function() {
            this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy()
        };
        var l = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n",
            c = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}",
            d = function(t) {
                function e(e) {
                    t.call(this, e), this.shader = null, this.properties = null, this.tempMatrix = new a.d, this.properties = [{
                        attributeName: "aVertexPosition",
                        size: 2,
                        uploadFunction: this.uploadVertices,
                        offset: 0
                    }, {
                        attributeName: "aPositionCoord",
                        size: 2,
                        uploadFunction: this.uploadPosition,
                        offset: 0
                    }, {
                        attributeName: "aRotation",
                        size: 1,
                        uploadFunction: this.uploadRotation,
                        offset: 0
                    }, {
                        attributeName: "aTextureCoord",
                        size: 2,
                        uploadFunction: this.uploadUvs,
                        offset: 0
                    }, {
                        attributeName: "aColor",
                        size: 1,
                        type: i.m.UNSIGNED_BYTE,
                        uploadFunction: this.uploadTint,
                        offset: 0
                    }], this.shader = s.A.from(l, c, {})
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.render = function(t) {
                    var e = t.children,
                        r = t._maxSize,
                        i = t._batchSize,
                        o = this.renderer,
                        s = e.length;
                    if (0 !== s) {
                        s > r && !t.autoResize && (s = r);
                        var a = t._buffers;
                        a || (a = t._buffers = this.generateBuffers(t));
                        var h = e[0]._texture.baseTexture;
                        this.renderer.state.setBlendMode(Object(n.correctBlendMode)(t.blendMode, h.alphaMode));
                        var u = o.gl,
                            l = t.worldTransform.copyTo(this.tempMatrix);
                        l.prepend(o.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = l.toArray(!0), this.shader.uniforms.uColor = Object(n.premultiplyRgba)(t.tintRgb, t.worldAlpha, this.shader.uniforms.uColor, h.alphaMode), this.shader.uniforms.uSampler = h, this.renderer.shader.bind(this.shader);
                        for (var c = !1, d = 0, p = 0; d < s; d += i, p += 1) {
                            var f = s - d;
                            f > i && (f = i), p >= a.length && a.push(this._generateOneMoreBuffer(t));
                            var m = a[p];
                            m.uploadDynamic(e, d, f);
                            var g = t._bufferUpdateIDs[p] || 0;
                            (c = c || m._updateID < g) && (m._updateID = t._updateID, m.uploadStatic(e, d, f)), o.geometry.bind(m.geometry), u.drawElements(u.TRIANGLES, 6 * f, u.UNSIGNED_SHORT, 0)
                        }
                    }
                }, e.prototype.generateBuffers = function(t) {
                    for (var e = [], r = t._maxSize, i = t._batchSize, n = t._properties, o = 0; o < r; o += i) e.push(new u(this.properties, n, i));
                    return e
                }, e.prototype._generateOneMoreBuffer = function(t) {
                    var e = t._batchSize,
                        r = t._properties;
                    return new u(this.properties, r, e)
                }, e.prototype.uploadVertices = function(t, e, r, i, n, o) {
                    for (var s = 0, a = 0, h = 0, u = 0, l = 0; l < r; ++l) {
                        var c = t[e + l],
                            d = c._texture,
                            p = c.scale.x,
                            f = c.scale.y,
                            m = d.trim,
                            g = d.orig;
                        m ? (s = (a = m.x - c.anchor.x * g.width) + m.width, h = (u = m.y - c.anchor.y * g.height) + m.height) : (s = g.width * (1 - c.anchor.x), a = g.width * -c.anchor.x, h = g.height * (1 - c.anchor.y), u = g.height * -c.anchor.y), i[o] = a * p, i[o + 1] = u * f, i[o + n] = s * p, i[o + n + 1] = u * f, i[o + 2 * n] = s * p, i[o + 2 * n + 1] = h * f, i[o + 3 * n] = a * p, i[o + 3 * n + 1] = h * f, o += 4 * n
                    }
                }, e.prototype.uploadPosition = function(t, e, r, i, n, o) {
                    for (var s = 0; s < r; s++) {
                        var a = t[e + s].position;
                        i[o] = a.x, i[o + 1] = a.y, i[o + n] = a.x, i[o + n + 1] = a.y, i[o + 2 * n] = a.x, i[o + 2 * n + 1] = a.y, i[o + 3 * n] = a.x, i[o + 3 * n + 1] = a.y, o += 4 * n
                    }
                }, e.prototype.uploadRotation = function(t, e, r, i, n, o) {
                    for (var s = 0; s < r; s++) {
                        var a = t[e + s].rotation;
                        i[o] = a, i[o + n] = a, i[o + 2 * n] = a, i[o + 3 * n] = a, o += 4 * n
                    }
                }, e.prototype.uploadUvs = function(t, e, r, i, n, o) {
                    for (var s = 0; s < r; ++s) {
                        var a = t[e + s]._texture._uvs;
                        a ? (i[o] = a.x0, i[o + 1] = a.y0, i[o + n] = a.x1, i[o + n + 1] = a.y1, i[o + 2 * n] = a.x2, i[o + 2 * n + 1] = a.y2, i[o + 3 * n] = a.x3, i[o + 3 * n + 1] = a.y3, o += 4 * n) : (i[o] = 0, i[o + 1] = 0, i[o + n] = 0, i[o + n + 1] = 0, i[o + 2 * n] = 0, i[o + 2 * n + 1] = 0, i[o + 3 * n] = 0, i[o + 3 * n + 1] = 0, o += 4 * n)
                    }
                }, e.prototype.uploadTint = function(t, e, r, i, o, s) {
                    for (var a = 0; a < r; ++a) {
                        var h = t[e + a],
                            u = h._texture.baseTexture.alphaMode > 0,
                            l = h.alpha,
                            c = l < 1 && u ? Object(n.premultiplyTint)(h._tintRGB, l) : h._tintRGB + (255 * l << 24);
                        i[s] = c, i[s + o] = c, i[s + 2 * o] = c, i[s + 3 * o] = c, s += 4 * o
                    }
                }, e.prototype.destroy = function() {
                    t.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null
                }, e
            }(s.t)
    },
    52: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return u
        })), r.d(e, "b", (function() {
            return f
        }));
        var i = r(3),
            n = r(2),
            o = r(0),
            s = r(13),
            a = r(1),
            h = new n.g,
            u = function(t) {
                function e(e, r, o) {
                    void 0 === r && (r = 100), void 0 === o && (o = 100), t.call(this, e), this.tileTransform = new n.m, this._width = r, this._height = o, this._canvasPattern = null, this.uvMatrix = e.uvMatrix || new i.F(e), this.pluginName = "tilingSprite", this.uvRespectAnchor = !1
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var r = {
                    clampMargin: {
                        configurable: !0
                    },
                    tileScale: {
                        configurable: !0
                    },
                    tilePosition: {
                        configurable: !0
                    },
                    width: {
                        configurable: !0
                    },
                    height: {
                        configurable: !0
                    }
                };
                return r.clampMargin.get = function() {
                    return this.uvMatrix.clampMargin
                }, r.clampMargin.set = function(t) {
                    this.uvMatrix.clampMargin = t, this.uvMatrix.update(!0)
                }, r.tileScale.get = function() {
                    return this.tileTransform.scale
                }, r.tileScale.set = function(t) {
                    this.tileTransform.scale.copyFrom(t)
                }, r.tilePosition.get = function() {
                    return this.tileTransform.position
                }, r.tilePosition.set = function(t) {
                    this.tileTransform.position.copyFrom(t)
                }, e.prototype._onTextureUpdate = function() {
                    this.uvMatrix && (this.uvMatrix.texture = this._texture), this._cachedTint = 16777215
                }, e.prototype._render = function(t) {
                    var e = this._texture;
                    e && e.valid && (this.tileTransform.updateLocalTransform(), this.uvMatrix.update(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this))
                }, e.prototype._calculateBounds = function() {
                    var t = this._width * -this._anchor._x,
                        e = this._height * -this._anchor._y,
                        r = this._width * (1 - this._anchor._x),
                        i = this._height * (1 - this._anchor._y);
                    this._bounds.addFrame(this.transform, t, e, r, i)
                }, e.prototype.getLocalBounds = function(e) {
                    return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new n.j), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
                }, e.prototype.containsPoint = function(t) {
                    this.worldTransform.applyInverse(t, h);
                    var e = this._width,
                        r = this._height,
                        i = -e * this.anchor._x;
                    if (h.x >= i && h.x < i + e) {
                        var n = -r * this.anchor._y;
                        if (h.y >= n && h.y < n + r) return !0
                    }
                    return !1
                }, e.prototype.destroy = function(e) {
                    t.prototype.destroy.call(this, e), this.tileTransform = null, this.uvMatrix = null
                }, e.from = function(t, r, n) {
                    return new e(i.E.from(t), r, n)
                }, e.fromFrame = function(t, r, i) {
                    var n = o.TextureCache[t];
                    if (!n) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
                    return new e(n, r, i)
                }, e.fromImage = function(t, r, n, o) {
                    return o && "object" != typeof o && (o = {
                        scaleMode: arguments[4],
                        resourceOptions: {
                            crossorigin: arguments[3]
                        }
                    }), new e(i.E.from(t, o), r, n)
                }, r.width.get = function() {
                    return this._width
                }, r.width.set = function(t) {
                    this._width = t
                }, r.height.get = function() {
                    return this._height
                }, r.height.set = function(t) {
                    this._height = t
                }, Object.defineProperties(e.prototype, r), e
            }(s.a),
            l = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n",
            c = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord - floor(vTextureCoord - uClampOffset);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture2D(uSampler, coord);\n    gl_FragColor = texSample * uColor;\n}\n",
            d = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n",
            p = new n.d,
            f = function(t) {
                function e(e) {
                    t.call(this, e);
                    var r = {
                        globals: this.renderer.globalUniforms
                    };
                    this.shader = i.A.from(l, c, r), this.simpleShader = i.A.from(l, d, r), this.quad = new i.w
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.render = function(t) {
                    var e = this.renderer,
                        r = this.quad,
                        i = r.vertices;
                    i[0] = i[6] = t._width * -t.anchor.x, i[1] = i[3] = t._height * -t.anchor.y, i[2] = i[4] = t._width * (1 - t.anchor.x), i[5] = i[7] = t._height * (1 - t.anchor.y), t.uvRespectAnchor && ((i = r.uvs)[0] = i[6] = -t.anchor.x, i[1] = i[3] = -t.anchor.y, i[2] = i[4] = 1 - t.anchor.x, i[5] = i[7] = 1 - t.anchor.y), r.invalidate();
                    var n = t._texture,
                        s = n.baseTexture,
                        h = t.tileTransform.localTransform,
                        u = t.uvMatrix,
                        l = s.isPowerOfTwo && n.frame.width === s.width && n.frame.height === s.height;
                    l && (s._glTextures[e.CONTEXT_UID] ? l = s.wrapMode !== a.n.CLAMP : s.wrapMode === a.n.CLAMP && (s.wrapMode = a.n.REPEAT));
                    var c = l ? this.simpleShader : this.shader,
                        d = n.width,
                        f = n.height,
                        m = t._width,
                        g = t._height;
                    p.set(h.a * d / m, h.b * d / g, h.c * f / m, h.d * f / g, h.tx / m, h.ty / g), p.invert(), l ? p.prepend(u.mapCoord) : (c.uniforms.uMapCoord = u.mapCoord.toArray(!0), c.uniforms.uClampFrame = u.uClampFrame, c.uniforms.uClampOffset = u.uClampOffset), c.uniforms.uTransform = p.toArray(!0), c.uniforms.uColor = Object(o.premultiplyTintToRgba)(t.tint, t.worldAlpha, c.uniforms.uColor, s.alphaMode), c.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), c.uniforms.uSampler = n, e.shader.bind(c), e.geometry.bind(r), e.state.setBlendMode(Object(o.correctBlendMode)(t.blendMode, s.alphaMode)), e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0)
                }, e
            }(i.t)
    },
    6: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return s
        })), r.d(e, "b", (function() {
            return u
        })), r.d(e, "c", (function() {
            return a
        }));
        var i = r(4),
            n = r(2),
            o = r(0);
        /*!
         * @pixi/display - v5.2.0
         * Compiled Wed, 06 Nov 2019 02:32:43 UTC
         *
         * @pixi/display is licensed under the MIT License.
         * http://www.opensource.org/licenses/mit-license
         */
        i.b.SORTABLE_CHILDREN = !1;
        var s = function() {
            this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null
        };
        s.prototype.isEmpty = function() {
            return this.minX > this.maxX || this.minY > this.maxY
        }, s.prototype.clear = function() {
            this.updateID++, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0
        }, s.prototype.getRectangle = function(t) {
            return this.minX > this.maxX || this.minY > this.maxY ? n.j.EMPTY : ((t = t || new n.j(0, 0, 1, 1)).x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
        }, s.prototype.addPoint = function(t) {
            this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
        }, s.prototype.addQuad = function(t) {
            var e = this.minX,
                r = this.minY,
                i = this.maxX,
                n = this.maxY,
                o = t[0],
                s = t[1];
            e = o < e ? o : e, r = s < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, e = (o = t[2]) < e ? o : e, r = (s = t[3]) < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, e = (o = t[4]) < e ? o : e, r = (s = t[5]) < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, e = (o = t[6]) < e ? o : e, r = (s = t[7]) < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, this.minX = e, this.minY = r, this.maxX = i, this.maxY = n
        }, s.prototype.addFrame = function(t, e, r, i, n) {
            this.addFrameMatrix(t.worldTransform, e, r, i, n)
        }, s.prototype.addFrameMatrix = function(t, e, r, i, n) {
            var o = t.a,
                s = t.b,
                a = t.c,
                h = t.d,
                u = t.tx,
                l = t.ty,
                c = this.minX,
                d = this.minY,
                p = this.maxX,
                f = this.maxY,
                m = o * e + a * r + u,
                g = s * e + h * r + l;
            c = m < c ? m : c, d = g < d ? g : d, p = m > p ? m : p, f = g > f ? g : f, c = (m = o * i + a * r + u) < c ? m : c, d = (g = s * i + h * r + l) < d ? g : d, p = m > p ? m : p, f = g > f ? g : f, c = (m = o * e + a * n + u) < c ? m : c, d = (g = s * e + h * n + l) < d ? g : d, p = m > p ? m : p, f = g > f ? g : f, c = (m = o * i + a * n + u) < c ? m : c, d = (g = s * i + h * n + l) < d ? g : d, p = m > p ? m : p, f = g > f ? g : f, this.minX = c, this.minY = d, this.maxX = p, this.maxY = f
        }, s.prototype.addVertexData = function(t, e, r) {
            for (var i = this.minX, n = this.minY, o = this.maxX, s = this.maxY, a = e; a < r; a += 2) {
                var h = t[a],
                    u = t[a + 1];
                i = h < i ? h : i, n = u < n ? u : n, o = h > o ? h : o, s = u > s ? u : s
            }
            this.minX = i, this.minY = n, this.maxX = o, this.maxY = s
        }, s.prototype.addVertices = function(t, e, r, i) {
            this.addVerticesMatrix(t.worldTransform, e, r, i)
        }, s.prototype.addVerticesMatrix = function(t, e, r, i, n, o) {
            var s = t.a,
                a = t.b,
                h = t.c,
                u = t.d,
                l = t.tx,
                c = t.ty;
            n = n || 0, o = o || 0;
            for (var d = this.minX, p = this.minY, f = this.maxX, m = this.maxY, g = r; g < i; g += 2) {
                var v = e[g],
                    y = e[g + 1],
                    x = s * v + h * y + l,
                    _ = u * y + a * v + c;
                d = Math.min(d, x - n), f = Math.max(f, x + n), p = Math.min(p, _ - o), m = Math.max(m, _ + o)
            }
            this.minX = d, this.minY = p, this.maxX = f, this.maxY = m
        }, s.prototype.addBounds = function(t) {
            var e = this.minX,
                r = this.minY,
                i = this.maxX,
                n = this.maxY;
            this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < r ? t.minY : r, this.maxX = t.maxX > i ? t.maxX : i, this.maxY = t.maxY > n ? t.maxY : n
        }, s.prototype.addBoundsMask = function(t, e) {
            var r = t.minX > e.minX ? t.minX : e.minX,
                i = t.minY > e.minY ? t.minY : e.minY,
                n = t.maxX < e.maxX ? t.maxX : e.maxX,
                o = t.maxY < e.maxY ? t.maxY : e.maxY;
            if (r <= n && i <= o) {
                var s = this.minX,
                    a = this.minY,
                    h = this.maxX,
                    u = this.maxY;
                this.minX = r < s ? r : s, this.minY = i < a ? i : a, this.maxX = n > h ? n : h, this.maxY = o > u ? o : u
            }
        }, s.prototype.addBoundsMatrix = function(t, e) {
            this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY)
        }, s.prototype.addBoundsArea = function(t, e) {
            var r = t.minX > e.x ? t.minX : e.x,
                i = t.minY > e.y ? t.minY : e.y,
                n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
                o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
            if (r <= n && i <= o) {
                var s = this.minX,
                    a = this.minY,
                    h = this.maxX,
                    u = this.maxY;
                this.minX = r < s ? r : s, this.minY = i < a ? i : a, this.maxX = n > h ? n : h, this.maxY = o > u ? o : u
            }
        }, s.prototype.pad = function(t, e) {
            t = t || 0, e = e || (0 !== e ? t : 0), this.isEmpty() || (this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e)
        }, s.prototype.addFramePad = function(t, e, r, i, n, o) {
            t -= n, e -= o, r += n, i += o, this.minX = this.minX < t ? this.minX : t, this.maxX = this.maxX > r ? this.maxX : r, this.minY = this.minY < e ? this.minY : e, this.maxY = this.maxY > i ? this.maxY : i
        };
        var a = function(t) {
            function e() {
                t.call(this), this.tempDisplayObjectParent = null, this.transform = new n.m, this.alpha = 1, this.visible = !0, this.renderable = !0, this.parent = null, this.worldAlpha = 1, this._lastSortedIndex = 0, this._zIndex = 0, this.filterArea = null, this.filters = null, this._enabledFilters = null, this._bounds = new s, this._boundsID = 0, this._lastBoundsID = -1, this._boundsRect = null, this._localBoundsRect = null, this._mask = null, this._destroyed = !1, this.isSprite = !1, this.isMask = !1
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                _tempDisplayObjectParent: {
                    configurable: !0
                },
                x: {
                    configurable: !0
                },
                y: {
                    configurable: !0
                },
                worldTransform: {
                    configurable: !0
                },
                localTransform: {
                    configurable: !0
                },
                position: {
                    configurable: !0
                },
                scale: {
                    configurable: !0
                },
                pivot: {
                    configurable: !0
                },
                skew: {
                    configurable: !0
                },
                rotation: {
                    configurable: !0
                },
                angle: {
                    configurable: !0
                },
                zIndex: {
                    configurable: !0
                },
                worldVisible: {
                    configurable: !0
                },
                mask: {
                    configurable: !0
                }
            };
            return e.mixin = function(t) {
                for (var r = Object.keys(t), i = 0; i < r.length; ++i) {
                    var n = r[i];
                    Object.defineProperty(e.prototype, n, Object.getOwnPropertyDescriptor(t, n))
                }
            }, r._tempDisplayObjectParent.get = function() {
                return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new e), this.tempDisplayObjectParent
            }, e.prototype.updateTransform = function() {
                this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._bounds.updateID++
            }, e.prototype._recursivePostUpdateTransform = function() {
                this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
            }, e.prototype.getBounds = function(t, e) {
                return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && (this.calculateBounds(), this._lastBoundsID = this._boundsID), e || (this._boundsRect || (this._boundsRect = new n.j), e = this._boundsRect), this._bounds.getRectangle(e)
            }, e.prototype.getLocalBounds = function(t) {
                var e = this.transform,
                    r = this.parent;
                this.parent = null, this.transform = this._tempDisplayObjectParent.transform, t || (this._localBoundsRect || (this._localBoundsRect = new n.j), t = this._localBoundsRect);
                var i = this.getBounds(!1, t);
                return this.parent = r, this.transform = e, i
            }, e.prototype.toGlobal = function(t, e, r) {
                return void 0 === r && (r = !1), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e)
            }, e.prototype.toLocal = function(t, e, r, i) {
                return e && (t = e.toGlobal(t, r, i)), i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, r)
            }, e.prototype.render = function(t) {}, e.prototype.setParent = function(t) {
                if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
                return t.addChild(this), t
            }, e.prototype.setTransform = function(t, e, r, i, n, o, s, a, h) {
                return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 1), void 0 === i && (i = 1), void 0 === n && (n = 0), void 0 === o && (o = 0), void 0 === s && (s = 0), void 0 === a && (a = 0), void 0 === h && (h = 0), this.position.x = t, this.position.y = e, this.scale.x = r || 1, this.scale.y = i || 1, this.rotation = n, this.skew.x = o, this.skew.y = s, this.pivot.x = a, this.pivot.y = h, this
            }, e.prototype.destroy = function() {
                this.removeAllListeners(), this.parent && this.parent.removeChild(this), this.transform = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.interactive = !1, this.interactiveChildren = !1, this._destroyed = !0
            }, r.x.get = function() {
                return this.position.x
            }, r.x.set = function(t) {
                this.transform.position.x = t
            }, r.y.get = function() {
                return this.position.y
            }, r.y.set = function(t) {
                this.transform.position.y = t
            }, r.worldTransform.get = function() {
                return this.transform.worldTransform
            }, r.localTransform.get = function() {
                return this.transform.localTransform
            }, r.position.get = function() {
                return this.transform.position
            }, r.position.set = function(t) {
                this.transform.position.copyFrom(t)
            }, r.scale.get = function() {
                return this.transform.scale
            }, r.scale.set = function(t) {
                this.transform.scale.copyFrom(t)
            }, r.pivot.get = function() {
                return this.transform.pivot
            }, r.pivot.set = function(t) {
                this.transform.pivot.copyFrom(t)
            }, r.skew.get = function() {
                return this.transform.skew
            }, r.skew.set = function(t) {
                this.transform.skew.copyFrom(t)
            }, r.rotation.get = function() {
                return this.transform.rotation
            }, r.rotation.set = function(t) {
                this.transform.rotation = t
            }, r.angle.get = function() {
                return this.transform.rotation * n.i
            }, r.angle.set = function(t) {
                this.transform.rotation = t * n.b
            }, r.zIndex.get = function() {
                return this._zIndex
            }, r.zIndex.set = function(t) {
                this._zIndex = t, this.parent && (this.parent.sortDirty = !0)
            }, r.worldVisible.get = function() {
                var t = this;
                do {
                    if (!t.visible) return !1;
                    t = t.parent
                } while (t);
                return !0
            }, r.mask.get = function() {
                return this._mask
            }, r.mask.set = function(t) {
                if (this._mask) {
                    var e = this._mask.maskObject || this._mask;
                    e.renderable = !0, e.isMask = !1
                }
                if (this._mask = t, this._mask) {
                    var r = this._mask.maskObject || this._mask;
                    r.renderable = !1, r.isMask = !0
                }
            }, Object.defineProperties(e.prototype, r), e
        }(o.EventEmitter);

        function h(t, e) {
            return t.zIndex === e.zIndex ? t._lastSortedIndex - e._lastSortedIndex : t.zIndex - e.zIndex
        }
        a.prototype.displayObjectUpdateTransform = a.prototype.updateTransform;
        var u = function(t) {
            function e() {
                t.call(this), this.children = [], this.sortableChildren = i.b.SORTABLE_CHILDREN, this.sortDirty = !1
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var r = {
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                }
            };
            return e.prototype.onChildrenChange = function() {}, e.prototype.addChild = function(t) {
                var e = arguments,
                    r = arguments.length;
                if (r > 1)
                    for (var i = 0; i < r; i++) this.addChild(e[i]);
                else t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.push(t), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", t, this, this.children.length - 1), t.emit("added", this);
                return t
            }, e.prototype.addChildAt = function(t, e) {
                if (e < 0 || e > this.children.length) throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
                return t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), this.emit("childAdded", t, this, e), t
            }, e.prototype.swapChildren = function(t, e) {
                if (t !== e) {
                    var r = this.getChildIndex(t),
                        i = this.getChildIndex(e);
                    this.children[r] = e, this.children[i] = t, this.onChildrenChange(r < i ? r : i)
                }
            }, e.prototype.getChildIndex = function(t) {
                var e = this.children.indexOf(t);
                if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
                return e
            }, e.prototype.setChildIndex = function(t, e) {
                if (e < 0 || e >= this.children.length) throw new Error("The index " + e + " supplied is out of bounds " + this.children.length);
                var r = this.getChildIndex(t);
                Object(o.removeItems)(this.children, r, 1), this.children.splice(e, 0, t), this.onChildrenChange(e)
            }, e.prototype.getChildAt = function(t) {
                if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Index (" + t + ") does not exist.");
                return this.children[t]
            }, e.prototype.removeChild = function(t) {
                var e = arguments,
                    r = arguments.length;
                if (r > 1)
                    for (var i = 0; i < r; i++) this.removeChild(e[i]);
                else {
                    var n = this.children.indexOf(t);
                    if (-1 === n) return null;
                    t.parent = null, t.transform._parentID = -1, Object(o.removeItems)(this.children, n, 1), this._boundsID++, this.onChildrenChange(n), t.emit("removed", this), this.emit("childRemoved", t, this, n)
                }
                return t
            }, e.prototype.removeChildAt = function(t) {
                var e = this.getChildAt(t);
                return e.parent = null, e.transform._parentID = -1, Object(o.removeItems)(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), this.emit("childRemoved", e, this, t), e
            }, e.prototype.removeChildren = function(t, e) {
                void 0 === t && (t = 0);
                var r, i = t,
                    n = "number" == typeof e ? e : this.children.length,
                    o = n - i;
                if (o > 0 && o <= n) {
                    r = this.children.splice(i, o);
                    for (var s = 0; s < r.length; ++s) r[s].parent = null, r[s].transform && (r[s].transform._parentID = -1);
                    this._boundsID++, this.onChildrenChange(t);
                    for (var a = 0; a < r.length; ++a) r[a].emit("removed", this), this.emit("childRemoved", r[a], this, a);
                    return r
                }
                if (0 === o && 0 === this.children.length) return [];
                throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
            }, e.prototype.sortChildren = function() {
                for (var t = !1, e = 0, r = this.children.length; e < r; ++e) {
                    var i = this.children[e];
                    i._lastSortedIndex = e, t || 0 === i.zIndex || (t = !0)
                }
                t && this.children.length > 1 && this.children.sort(h), this.sortDirty = !1
            }, e.prototype.updateTransform = function() {
                this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
                for (var t = 0, e = this.children.length; t < e; ++t) {
                    var r = this.children[t];
                    r.visible && r.updateTransform()
                }
            }, e.prototype.calculateBounds = function() {
                this._bounds.clear(), this._calculateBounds();
                for (var t = 0; t < this.children.length; t++) {
                    var e = this.children[t];
                    if (e.visible && e.renderable)
                        if (e.calculateBounds(), e._mask) {
                            var r = e._mask.maskObject || e._mask;
                            r.calculateBounds(), this._bounds.addBoundsMask(e._bounds, r._bounds)
                        } else e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds)
                }
                this._lastBoundsID = this._boundsID
            }, e.prototype._calculateBounds = function() {}, e.prototype.render = function(t) {
                if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
                    if (this._mask || this.filters && this.filters.length) this.renderAdvanced(t);
                    else {
                        this._render(t);
                        for (var e = 0, r = this.children.length; e < r; ++e) this.children[e].render(t)
                    }
            }, e.prototype.renderAdvanced = function(t) {
                t.batch.flush();
                var e = this.filters,
                    r = this._mask;
                if (e) {
                    this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
                    for (var i = 0; i < e.length; i++) e[i].enabled && this._enabledFilters.push(e[i]);
                    this._enabledFilters.length && t.filter.push(this, this._enabledFilters)
                }
                r && t.mask.push(this, this._mask), this._render(t);
                for (var n = 0, o = this.children.length; n < o; n++) this.children[n].render(t);
                t.batch.flush(), r && t.mask.pop(this, this._mask), e && this._enabledFilters && this._enabledFilters.length && t.filter.pop()
            }, e.prototype._render = function(t) {}, e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this), this.sortDirty = !1;
                var r = "boolean" == typeof e ? e : e && e.children,
                    i = this.removeChildren(0, this.children.length);
                if (r)
                    for (var n = 0; n < i.length; ++n) i[n].destroy(e)
            }, r.width.get = function() {
                return this.scale.x * this.getLocalBounds().width
            }, r.width.set = function(t) {
                var e = this.getLocalBounds().width;
                this.scale.x = 0 !== e ? t / e : 1, this._width = t
            }, r.height.get = function() {
                return this.scale.y * this.getLocalBounds().height
            }, r.height.set = function(t) {
                var e = this.getLocalBounds().height;
                this.scale.y = 0 !== e ? t / e : 1, this._height = t
            }, Object.defineProperties(e.prototype, r), e
        }(a);
        u.prototype.containerUpdateTransform = u.prototype.updateTransform
    },
    67: function(t, e, r) {
        "use strict";
        var i = r(131),
            n = r(132);

        function o() {
            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
        }
        e.parse = x, e.resolve = function(t, e) {
            return x(t, !1, !0).resolve(e)
        }, e.resolveObject = function(t, e) {
            return t ? x(t, !1, !0).resolveObject(e) : e
        }, e.format = function(t) {
            n.isString(t) && (t = x(t));
            return t instanceof o ? t.format() : o.prototype.format.call(t)
        }, e.Url = o;
        var s = /^([a-z0-9.+-]+:)/i,
            a = /:[0-9]*$/,
            h = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
            u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
            l = ["'"].concat(u),
            c = ["%", "/", "?", ";", "#"].concat(l),
            d = ["/", "?", "#"],
            p = /^[+a-z0-9A-Z_-]{0,63}$/,
            f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
            m = {
                javascript: !0,
                "javascript:": !0
            },
            g = {
                javascript: !0,
                "javascript:": !0
            },
            v = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            },
            y = r(133);

        function x(t, e, r) {
            if (t && n.isObject(t) && t instanceof o) return t;
            var i = new o;
            return i.parse(t, e, r), i
        }
        o.prototype.parse = function(t, e, r) {
            if (!n.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
            var o = t.indexOf("?"),
                a = -1 !== o && o < t.indexOf("#") ? "?" : "#",
                u = t.split(a);
            u[0] = u[0].replace(/\\/g, "/");
            var x = t = u.join(a);
            if (x = x.trim(), !r && 1 === t.split("#").length) {
                var _ = h.exec(x);
                if (_) return this.path = x, this.href = x, this.pathname = _[1], _[2] ? (this.search = _[2], this.query = e ? y.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
            }
            var b = s.exec(x);
            if (b) {
                var T = (b = b[0]).toLowerCase();
                this.protocol = T, x = x.substr(b.length)
            }
            if (r || b || x.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var w = "//" === x.substr(0, 2);
                !w || b && g[b] || (x = x.substr(2), this.slashes = !0)
            }
            if (!g[b] && (w || b && !v[b])) {
                for (var E, I, S = -1, P = 0; P < d.length; P++) {
                    -1 !== (A = x.indexOf(d[P])) && (-1 === S || A < S) && (S = A)
                } - 1 !== (I = -1 === S ? x.lastIndexOf("@") : x.lastIndexOf("@", S)) && (E = x.slice(0, I), x = x.slice(I + 1), this.auth = decodeURIComponent(E)), S = -1;
                for (P = 0; P < c.length; P++) {
                    var A; - 1 !== (A = x.indexOf(c[P])) && (-1 === S || A < S) && (S = A)
                } - 1 === S && (S = x.length), this.host = x.slice(0, S), x = x.slice(S), this.parseHost(), this.hostname = this.hostname || "";
                var M = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!M)
                    for (var C = this.hostname.split(/\./), O = (P = 0, C.length); P < O; P++) {
                        var R = C[P];
                        if (R && !R.match(p)) {
                            for (var D = "", F = 0, L = R.length; F < L; F++) R.charCodeAt(F) > 127 ? D += "x" : D += R[F];
                            if (!D.match(p)) {
                                var N = C.slice(0, P),
                                    k = C.slice(P + 1),
                                    B = R.match(f);
                                B && (N.push(B[1]), k.unshift(B[2])), k.length && (x = "/" + k.join(".") + x), this.hostname = N.join(".");
                                break
                            }
                        }
                    }
                this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), M || (this.hostname = i.toASCII(this.hostname));
                var U = this.port ? ":" + this.port : "",
                    X = this.hostname || "";
                this.host = X + U, this.href += this.host, M && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== x[0] && (x = "/" + x))
            }
            if (!m[T])
                for (P = 0, O = l.length; P < O; P++) {
                    var V = l[P];
                    if (-1 !== x.indexOf(V)) {
                        var j = encodeURIComponent(V);
                        j === V && (j = escape(V)), x = x.split(V).join(j)
                    }
                }
            var Y = x.indexOf("#"); - 1 !== Y && (this.hash = x.substr(Y), x = x.slice(0, Y));
            var G = x.indexOf("?");
            if (-1 !== G ? (this.search = x.substr(G), this.query = x.substr(G + 1), e && (this.query = y.parse(this.query)), x = x.slice(0, G)) : e && (this.search = "", this.query = {}), x && (this.pathname = x), v[T] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                U = this.pathname || "";
                var H = this.search || "";
                this.path = U + H
            }
            return this.href = this.format(), this
        }, o.prototype.format = function() {
            var t = this.auth || "";
            t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
            var e = this.protocol || "",
                r = this.pathname || "",
                i = this.hash || "",
                o = !1,
                s = "";
            this.host ? o = t + this.host : this.hostname && (o = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && n.isObject(this.query) && Object.keys(this.query).length && (s = y.stringify(this.query));
            var a = this.search || s && "?" + s || "";
            return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || v[e]) && !1 !== o ? (o = "//" + (o || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : o || (o = ""), i && "#" !== i.charAt(0) && (i = "#" + i), a && "?" !== a.charAt(0) && (a = "?" + a), e + o + (r = r.replace(/[?#]/g, (function(t) {
                return encodeURIComponent(t)
            }))) + (a = a.replace("#", "%23")) + i
        }, o.prototype.resolve = function(t) {
            return this.resolveObject(x(t, !1, !0)).format()
        }, o.prototype.resolveObject = function(t) {
            if (n.isString(t)) {
                var e = new o;
                e.parse(t, !1, !0), t = e
            }
            for (var r = new o, i = Object.keys(this), s = 0; s < i.length; s++) {
                var a = i[s];
                r[a] = this[a]
            }
            if (r.hash = t.hash, "" === t.href) return r.href = r.format(), r;
            if (t.slashes && !t.protocol) {
                for (var h = Object.keys(t), u = 0; u < h.length; u++) {
                    var l = h[u];
                    "protocol" !== l && (r[l] = t[l])
                }
                return v[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
            }
            if (t.protocol && t.protocol !== r.protocol) {
                if (!v[t.protocol]) {
                    for (var c = Object.keys(t), d = 0; d < c.length; d++) {
                        var p = c[d];
                        r[p] = t[p]
                    }
                    return r.href = r.format(), r
                }
                if (r.protocol = t.protocol, t.host || g[t.protocol]) r.pathname = t.pathname;
                else {
                    for (var f = (t.pathname || "").split("/"); f.length && !(t.host = f.shift()););
                    t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), r.pathname = f.join("/")
                }
                if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
                    var m = r.pathname || "",
                        y = r.search || "";
                    r.path = m + y
                }
                return r.slashes = r.slashes || t.slashes, r.href = r.format(), r
            }
            var x = r.pathname && "/" === r.pathname.charAt(0),
                _ = t.host || t.pathname && "/" === t.pathname.charAt(0),
                b = _ || x || r.host && t.pathname,
                T = b,
                w = r.pathname && r.pathname.split("/") || [],
                E = (f = t.pathname && t.pathname.split("/") || [], r.protocol && !v[r.protocol]);
            if (E && (r.hostname = "", r.port = null, r.host && ("" === w[0] ? w[0] = r.host : w.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === f[0] ? f[0] = t.host : f.unshift(t.host)), t.host = null), b = b && ("" === f[0] || "" === w[0])), _) r.host = t.host || "" === t.host ? t.host : r.host, r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, w = f;
            else if (f.length) w || (w = []), w.pop(), w = w.concat(f), r.search = t.search, r.query = t.query;
            else if (!n.isNullOrUndefined(t.search)) {
                if (E) r.hostname = r.host = w.shift(), (M = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = M.shift(), r.host = r.hostname = M.shift());
                return r.search = t.search, r.query = t.query, n.isNull(r.pathname) && n.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
            }
            if (!w.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
            for (var I = w.slice(-1)[0], S = (r.host || t.host || w.length > 1) && ("." === I || ".." === I) || "" === I, P = 0, A = w.length; A >= 0; A--) "." === (I = w[A]) ? w.splice(A, 1) : ".." === I ? (w.splice(A, 1), P++) : P && (w.splice(A, 1), P--);
            if (!b && !T)
                for (; P--; P) w.unshift("..");
            !b || "" === w[0] || w[0] && "/" === w[0].charAt(0) || w.unshift(""), S && "/" !== w.join("/").substr(-1) && w.push("");
            var M, C = "" === w[0] || w[0] && "/" === w[0].charAt(0);
            E && (r.hostname = r.host = C ? "" : w.length ? w.shift() : "", (M = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = M.shift(), r.host = r.hostname = M.shift()));
            return (b = b || r.host && w.length) && !C && w.unshift(""), w.length ? r.pathname = w.join("/") : (r.pathname = null, r.path = null), n.isNull(r.pathname) && n.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r
        }, o.prototype.parseHost = function() {
            var t = this.host,
                e = a.exec(t);
            e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
        }
    },
    77: function(t, e) {
        var r, i, n = t.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(t) {
            if (r === setTimeout) return setTimeout(t, 0);
            if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
            try {
                return r(t, 0)
            } catch (e) {
                try {
                    return r.call(null, t, 0)
                } catch (e) {
                    return r.call(this, t, 0)
                }
            }
        }! function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : o
            } catch (t) {
                r = o
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (t) {
                i = s
            }
        }();
        var h, u = [],
            l = !1,
            c = -1;

        function d() {
            l && h && (l = !1, h.length ? u = h.concat(u) : c = -1, u.length && p())
        }

        function p() {
            if (!l) {
                var t = a(d);
                l = !0;
                for (var e = u.length; e;) {
                    for (h = u, u = []; ++c < e;) h && h[c].run();
                    c = -1, e = u.length
                }
                h = null, l = !1,
                    function(t) {
                        if (i === clearTimeout) return clearTimeout(t);
                        if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                        try {
                            i(t)
                        } catch (e) {
                            try {
                                return i.call(null, t)
                            } catch (e) {
                                return i.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function f(t, e) {
            this.fun = t, this.array = e
        }

        function m() {}
        n.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            u.push(new f(t, e)), 1 !== u.length || l || a(p)
        }, f.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = m, n.addListener = m, n.once = m, n.off = m, n.removeListener = m, n.removeAllListeners = m, n.emit = m, n.prependListener = m, n.prependOnceListener = m, n.listeners = function(t) {
            return []
        }, n.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, n.cwd = function() {
            return "/"
        }, n.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, n.umask = function() {
            return 0
        }
    },
    8: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return s
        })), r.d(e, "b", (function() {
            return a
        })), r.d(e, "c", (function() {
            return i
        }));
        var i, n = r(4);
        /*!
         * @pixi/ticker - v5.2.0
         * Compiled Wed, 06 Nov 2019 02:32:43 UTC
         *
         * @pixi/ticker is licensed under the MIT License.
         * http://www.opensource.org/licenses/mit-license
         */
        n.b.TARGET_FPMS = .06,
            function(t) {
                t[t.INTERACTION = 50] = "INTERACTION", t[t.HIGH = 25] = "HIGH", t[t.NORMAL = 0] = "NORMAL", t[t.LOW = -25] = "LOW", t[t.UTILITY = -50] = "UTILITY"
            }(i || (i = {}));
        var o = function() {
                function t(t, e, r, i) {
                    void 0 === e && (e = null), void 0 === r && (r = 0), void 0 === i && (i = !1), this.fn = t, this.context = e, this.priority = r, this.once = i, this.next = null, this.previous = null, this._destroyed = !1
                }
                return t.prototype.match = function(t, e) {
                    return void 0 === e && (e = null), this.fn === t && this.context === e
                }, t.prototype.emit = function(t) {
                    this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
                    var e = this.next;
                    return this.once && this.destroy(!0), this._destroyed && (this.next = null), e
                }, t.prototype.connect = function(t) {
                    this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this
                }, t.prototype.destroy = function(t) {
                    void 0 === t && (t = !1), this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
                    var e = this.next;
                    return this.next = t ? null : e, this.previous = null, e
                }, t
            }(),
            s = function() {
                function t() {
                    var t = this;
                    this._head = new o(null, null, 1 / 0), this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this.autoStart = !1, this.deltaTime = 1, this.deltaMS = 1 / n.b.TARGET_FPMS, this.elapsedMS = 1 / n.b.TARGET_FPMS, this.lastTime = -1, this.speed = 1, this.started = !1, this._protected = !1, this._lastFrame = -1, this._tick = function(e) {
                        t._requestId = null, t.started && (t.update(e), t.started && null === t._requestId && t._head.next && (t._requestId = requestAnimationFrame(t._tick)))
                    }
                }
                return t.prototype._requestIfNeeded = function() {
                    null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick))
                }, t.prototype._cancelIfNeeded = function() {
                    null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
                }, t.prototype._startIfPossible = function() {
                    this.started ? this._requestIfNeeded() : this.autoStart && this.start()
                }, t.prototype.add = function(t, e, r) {
                    return void 0 === r && (r = i.NORMAL), this._addListener(new o(t, e, r))
                }, t.prototype.addOnce = function(t, e, r) {
                    return void 0 === r && (r = i.NORMAL), this._addListener(new o(t, e, r, !0))
                }, t.prototype._addListener = function(t) {
                    var e = this._head.next,
                        r = this._head;
                    if (e) {
                        for (; e;) {
                            if (t.priority > e.priority) {
                                t.connect(r);
                                break
                            }
                            r = e, e = e.next
                        }
                        t.previous || t.connect(r)
                    } else t.connect(r);
                    return this._startIfPossible(), this
                }, t.prototype.remove = function(t, e) {
                    for (var r = this._head.next; r;) r = r.match(t, e) ? r.destroy() : r.next;
                    return this._head.next || this._cancelIfNeeded(), this
                }, t.prototype.start = function() {
                    this.started || (this.started = !0, this._requestIfNeeded())
                }, t.prototype.stop = function() {
                    this.started && (this.started = !1, this._cancelIfNeeded())
                }, t.prototype.destroy = function() {
                    if (!this._protected) {
                        this.stop();
                        for (var t = this._head.next; t;) t = t.destroy(!0);
                        this._head.destroy(), this._head = null
                    }
                }, t.prototype.update = function(t) {
                    var e;
                    if (void 0 === t && (t = performance.now()), t > this.lastTime) {
                        if ((e = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
                            var r = t - this._lastFrame | 0;
                            if (r < this._minElapsedMS) return;
                            this._lastFrame = t - r % this._minElapsedMS
                        }
                        this.deltaMS = e, this.deltaTime = this.deltaMS * n.b.TARGET_FPMS;
                        for (var i = this._head, o = i.next; o;) o = o.emit(this.deltaTime);
                        i.next || this._cancelIfNeeded()
                    } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
                    this.lastTime = t
                }, Object.defineProperty(t.prototype, "FPS", {
                    get: function() {
                        return 1e3 / this.elapsedMS
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "minFPS", {
                    get: function() {
                        return 1e3 / this._maxElapsedMS
                    },
                    set: function(t) {
                        var e = Math.min(this.maxFPS, t),
                            r = Math.min(Math.max(0, e) / 1e3, n.b.TARGET_FPMS);
                        this._maxElapsedMS = 1 / r
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "maxFPS", {
                    get: function() {
                        return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
                    },
                    set: function(t) {
                        if (0 === t) this._minElapsedMS = 0;
                        else {
                            var e = Math.max(this.minFPS, t);
                            this._minElapsedMS = 1 / (e / 1e3)
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "shared", {
                    get: function() {
                        if (!t._shared) {
                            var e = t._shared = new t;
                            e.autoStart = !0, e._protected = !0
                        }
                        return t._shared
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "system", {
                    get: function() {
                        if (!t._system) {
                            var e = t._system = new t;
                            e.autoStart = !0, e._protected = !0
                        }
                        return t._system
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(),
            a = function() {
                function t() {}
                return t.init = function(t) {
                    var e = this;
                    t = Object.assign({
                        autoStart: !0,
                        sharedTicker: !1
                    }, t), Object.defineProperty(this, "ticker", {
                        set: function(t) {
                            this._ticker && this._ticker.remove(this.render, this), this._ticker = t, t && t.add(this.render, this, i.LOW)
                        },
                        get: function() {
                            return this._ticker
                        }
                    }), this.stop = function() {
                        e._ticker.stop()
                    }, this.start = function() {
                        e._ticker.start()
                    }, this._ticker = null, this.ticker = t.sharedTicker ? s.shared : new s, t.autoStart && this.start()
                }, t.destroy = function() {
                    if (this._ticker) {
                        var t = this._ticker;
                        this.ticker = null, t.destroy()
                    }
                }, t
            }()
    },
    80: function(t, e, r) {
        "use strict";
        t.exports = function(t, e) {
            e = e || {};
            for (var r = {
                    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                    q: {
                        name: "queryKey",
                        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                    },
                    parser: {
                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                    }
                }, i = r.parser[e.strictMode ? "strict" : "loose"].exec(t), n = {}, o = 14; o--;) n[r.key[o]] = i[o] || "";
            return n[r.q.name] = {}, n[r.key[12]].replace(r.q.parser, (function(t, e, i) {
                e && (n[r.q.name][e] = i)
            })), n
        }
    },
    94: function(t, e, r) {
        "use strict";
        var i = Object.prototype.hasOwnProperty,
            n = "~";

        function o() {}

        function s(t, e, r) {
            this.fn = t, this.context = e, this.once = r || !1
        }

        function a(t, e, r, i, o) {
            if ("function" != typeof r) throw new TypeError("The listener must be a function");
            var a = new s(r, i || t, o),
                h = n ? n + e : e;
            return t._events[h] ? t._events[h].fn ? t._events[h] = [t._events[h], a] : t._events[h].push(a) : (t._events[h] = a, t._eventsCount++), t
        }

        function h(t, e) {
            0 == --t._eventsCount ? t._events = new o : delete t._events[e]
        }

        function u() {
            this._events = new o, this._eventsCount = 0
        }
        Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (n = !1)), u.prototype.eventNames = function() {
            var t, e, r = [];
            if (0 === this._eventsCount) return r;
            for (e in t = this._events) i.call(t, e) && r.push(n ? e.slice(1) : e);
            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
        }, u.prototype.listeners = function(t) {
            var e = n ? n + t : t,
                r = this._events[e];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var i = 0, o = r.length, s = new Array(o); i < o; i++) s[i] = r[i].fn;
            return s
        }, u.prototype.listenerCount = function(t) {
            var e = n ? n + t : t,
                r = this._events[e];
            return r ? r.fn ? 1 : r.length : 0
        }, u.prototype.emit = function(t, e, r, i, o, s) {
            var a = n ? n + t : t;
            if (!this._events[a]) return !1;
            var h, u, l = this._events[a],
                c = arguments.length;
            if (l.fn) {
                switch (l.once && this.removeListener(t, l.fn, void 0, !0), c) {
                    case 1:
                        return l.fn.call(l.context), !0;
                    case 2:
                        return l.fn.call(l.context, e), !0;
                    case 3:
                        return l.fn.call(l.context, e, r), !0;
                    case 4:
                        return l.fn.call(l.context, e, r, i), !0;
                    case 5:
                        return l.fn.call(l.context, e, r, i, o), !0;
                    case 6:
                        return l.fn.call(l.context, e, r, i, o, s), !0
                }
                for (u = 1, h = new Array(c - 1); u < c; u++) h[u - 1] = arguments[u];
                l.fn.apply(l.context, h)
            } else {
                var d, p = l.length;
                for (u = 0; u < p; u++) switch (l[u].once && this.removeListener(t, l[u].fn, void 0, !0), c) {
                    case 1:
                        l[u].fn.call(l[u].context);
                        break;
                    case 2:
                        l[u].fn.call(l[u].context, e);
                        break;
                    case 3:
                        l[u].fn.call(l[u].context, e, r);
                        break;
                    case 4:
                        l[u].fn.call(l[u].context, e, r, i);
                        break;
                    default:
                        if (!h)
                            for (d = 1, h = new Array(c - 1); d < c; d++) h[d - 1] = arguments[d];
                        l[u].fn.apply(l[u].context, h)
                }
            }
            return !0
        }, u.prototype.on = function(t, e, r) {
            return a(this, t, e, r, !1)
        }, u.prototype.once = function(t, e, r) {
            return a(this, t, e, r, !0)
        }, u.prototype.removeListener = function(t, e, r, i) {
            var o = n ? n + t : t;
            if (!this._events[o]) return this;
            if (!e) return h(this, o), this;
            var s = this._events[o];
            if (s.fn) s.fn !== e || i && !s.once || r && s.context !== r || h(this, o);
            else {
                for (var a = 0, u = [], l = s.length; a < l; a++)(s[a].fn !== e || i && !s[a].once || r && s[a].context !== r) && u.push(s[a]);
                u.length ? this._events[o] = 1 === u.length ? u[0] : u : h(this, o)
            }
            return this
        }, u.prototype.removeAllListeners = function(t) {
            var e;
            return t ? (e = n ? n + t : t, this._events[e] && h(this, e)) : (this._events = new o, this._eventsCount = 0), this
        }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = n, u.EventEmitter = u, t.exports = u
    },
    95: function(t, e, r) {
        "use strict";

        function i(t, e, r) {
            r = r || 2;
            var i, a, h, u, l, p, f, g = e && e.length,
                v = g ? e[0] * r : t.length,
                y = n(t, 0, v, r, !0),
                x = [];
            if (!y || y.next === y.prev) return x;
            if (g && (y = function(t, e, r, i) {
                    var s, a, h, u, l, p = [];
                    for (s = 0, a = e.length; s < a; s++) h = e[s] * i, u = s < a - 1 ? e[s + 1] * i : t.length, (l = n(t, h, u, i, !1)) === l.next && (l.steiner = !0), p.push(m(l));
                    for (p.sort(c), s = 0; s < p.length; s++) d(p[s], r), r = o(r, r.next);
                    return r
                }(t, e, y, r)), t.length > 80 * r) {
                i = h = t[0], a = u = t[1];
                for (var _ = r; _ < v; _ += r)(l = t[_]) < i && (i = l), (p = t[_ + 1]) < a && (a = p), l > h && (h = l), p > u && (u = p);
                f = 0 !== (f = Math.max(h - i, u - a)) ? 1 / f : 0
            }
            return s(y, x, r, i, a, f), x
        }

        function n(t, e, r, i, n) {
            var o, s;
            if (n === A(t, e, r, i) > 0)
                for (o = e; o < r; o += i) s = I(o, t[o], t[o + 1], s);
            else
                for (o = r - i; o >= e; o -= i) s = I(o, t[o], t[o + 1], s);
            return s && x(s, s.next) && (S(s), s = s.next), s
        }

        function o(t, e) {
            if (!t) return t;
            e || (e = t);
            var r, i = t;
            do {
                if (r = !1, i.steiner || !x(i, i.next) && 0 !== y(i.prev, i, i.next)) i = i.next;
                else {
                    if (S(i), (i = e = i.prev) === i.next) break;
                    r = !0
                }
            } while (r || i !== e);
            return e
        }

        function s(t, e, r, i, n, c, d) {
            if (t) {
                !d && c && function(t, e, r, i) {
                    var n = t;
                    do {
                        null === n.z && (n.z = f(n.x, n.y, e, r, i)), n.prevZ = n.prev, n.nextZ = n.next, n = n.next
                    } while (n !== t);
                    n.prevZ.nextZ = null, n.prevZ = null,
                        function(t) {
                            var e, r, i, n, o, s, a, h, u = 1;
                            do {
                                for (r = t, t = null, o = null, s = 0; r;) {
                                    for (s++, i = r, a = 0, e = 0; e < u && (a++, i = i.nextZ); e++);
                                    for (h = u; a > 0 || h > 0 && i;) 0 !== a && (0 === h || !i || r.z <= i.z) ? (n = r, r = r.nextZ, a--) : (n = i, i = i.nextZ, h--), o ? o.nextZ = n : t = n, n.prevZ = o, o = n;
                                    r = i
                                }
                                o.nextZ = null, u *= 2
                            } while (s > 1)
                        }(n)
                }(t, i, n, c);
                for (var p, m, g = t; t.prev !== t.next;)
                    if (p = t.prev, m = t.next, c ? h(t, i, n, c) : a(t)) e.push(p.i / r), e.push(t.i / r), e.push(m.i / r), S(t), t = m.next, g = m.next;
                    else if ((t = m) === g) {
                    d ? 1 === d ? s(t = u(o(t), e, r), e, r, i, n, c, 2) : 2 === d && l(t, e, r, i, n, c) : s(o(t), e, r, i, n, c, 1);
                    break
                }
            }
        }

        function a(t) {
            var e = t.prev,
                r = t,
                i = t.next;
            if (y(e, r, i) >= 0) return !1;
            for (var n = t.next.next; n !== t.prev;) {
                if (g(e.x, e.y, r.x, r.y, i.x, i.y, n.x, n.y) && y(n.prev, n, n.next) >= 0) return !1;
                n = n.next
            }
            return !0
        }

        function h(t, e, r, i) {
            var n = t.prev,
                o = t,
                s = t.next;
            if (y(n, o, s) >= 0) return !1;
            for (var a = n.x < o.x ? n.x < s.x ? n.x : s.x : o.x < s.x ? o.x : s.x, h = n.y < o.y ? n.y < s.y ? n.y : s.y : o.y < s.y ? o.y : s.y, u = n.x > o.x ? n.x > s.x ? n.x : s.x : o.x > s.x ? o.x : s.x, l = n.y > o.y ? n.y > s.y ? n.y : s.y : o.y > s.y ? o.y : s.y, c = f(a, h, e, r, i), d = f(u, l, e, r, i), p = t.prevZ, m = t.nextZ; p && p.z >= c && m && m.z <= d;) {
                if (p !== t.prev && p !== t.next && g(n.x, n.y, o.x, o.y, s.x, s.y, p.x, p.y) && y(p.prev, p, p.next) >= 0) return !1;
                if (p = p.prevZ, m !== t.prev && m !== t.next && g(n.x, n.y, o.x, o.y, s.x, s.y, m.x, m.y) && y(m.prev, m, m.next) >= 0) return !1;
                m = m.nextZ
            }
            for (; p && p.z >= c;) {
                if (p !== t.prev && p !== t.next && g(n.x, n.y, o.x, o.y, s.x, s.y, p.x, p.y) && y(p.prev, p, p.next) >= 0) return !1;
                p = p.prevZ
            }
            for (; m && m.z <= d;) {
                if (m !== t.prev && m !== t.next && g(n.x, n.y, o.x, o.y, s.x, s.y, m.x, m.y) && y(m.prev, m, m.next) >= 0) return !1;
                m = m.nextZ
            }
            return !0
        }

        function u(t, e, r) {
            var i = t;
            do {
                var n = i.prev,
                    s = i.next.next;
                !x(n, s) && _(n, i, i.next, s) && w(n, s) && w(s, n) && (e.push(n.i / r), e.push(i.i / r), e.push(s.i / r), S(i), S(i.next), i = t = s), i = i.next
            } while (i !== t);
            return o(i)
        }

        function l(t, e, r, i, n, a) {
            var h = t;
            do {
                for (var u = h.next.next; u !== h.prev;) {
                    if (h.i !== u.i && v(h, u)) {
                        var l = E(h, u);
                        return h = o(h, h.next), l = o(l, l.next), s(h, e, r, i, n, a), void s(l, e, r, i, n, a)
                    }
                    u = u.next
                }
                h = h.next
            } while (h !== t)
        }

        function c(t, e) {
            return t.x - e.x
        }

        function d(t, e) {
            if (e = function(t, e) {
                    var r, i = e,
                        n = t.x,
                        o = t.y,
                        s = -1 / 0;
                    do {
                        if (o <= i.y && o >= i.next.y && i.next.y !== i.y) {
                            var a = i.x + (o - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                            if (a <= n && a > s) {
                                if (s = a, a === n) {
                                    if (o === i.y) return i;
                                    if (o === i.next.y) return i.next
                                }
                                r = i.x < i.next.x ? i : i.next
                            }
                        }
                        i = i.next
                    } while (i !== e);
                    if (!r) return null;
                    if (n === s) return r;
                    var h, u = r,
                        l = r.x,
                        c = r.y,
                        d = 1 / 0;
                    i = r;
                    do {
                        n >= i.x && i.x >= l && n !== i.x && g(o < c ? n : s, o, l, c, o < c ? s : n, o, i.x, i.y) && (h = Math.abs(o - i.y) / (n - i.x), w(i, t) && (h < d || h === d && (i.x > r.x || i.x === r.x && p(r, i))) && (r = i, d = h)), i = i.next
                    } while (i !== u);
                    return r
                }(t, e)) {
                var r = E(e, t);
                o(r, r.next)
            }
        }

        function p(t, e) {
            return y(t.prev, t, e.prev) < 0 && y(e.next, t, t.next) < 0
        }

        function f(t, e, r, i, n) {
            return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) * n) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * n) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
        }

        function m(t) {
            var e = t,
                r = t;
            do {
                (e.x < r.x || e.x === r.x && e.y < r.y) && (r = e), e = e.next
            } while (e !== t);
            return r
        }

        function g(t, e, r, i, n, o, s, a) {
            return (n - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (i - a) - (r - s) * (e - a) >= 0 && (r - s) * (o - a) - (n - s) * (i - a) >= 0
        }

        function v(t, e) {
            return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
                var r = t;
                do {
                    if (r.i !== t.i && r.next.i !== t.i && r.i !== e.i && r.next.i !== e.i && _(r, r.next, t, e)) return !0;
                    r = r.next
                } while (r !== t);
                return !1
            }(t, e) && (w(t, e) && w(e, t) && function(t, e) {
                var r = t,
                    i = !1,
                    n = (t.x + e.x) / 2,
                    o = (t.y + e.y) / 2;
                do {
                    r.y > o != r.next.y > o && r.next.y !== r.y && n < (r.next.x - r.x) * (o - r.y) / (r.next.y - r.y) + r.x && (i = !i), r = r.next
                } while (r !== t);
                return i
            }(t, e) && (y(t.prev, t, e.prev) || y(t, e.prev, e)) || x(t, e) && y(t.prev, t, t.next) > 0 && y(e.prev, e, e.next) > 0)
        }

        function y(t, e, r) {
            return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y)
        }

        function x(t, e) {
            return t.x === e.x && t.y === e.y
        }

        function _(t, e, r, i) {
            var n = T(y(t, e, r)),
                o = T(y(t, e, i)),
                s = T(y(r, i, t)),
                a = T(y(r, i, e));
            return n !== o && s !== a || (!(0 !== n || !b(t, r, e)) || (!(0 !== o || !b(t, i, e)) || (!(0 !== s || !b(r, t, i)) || !(0 !== a || !b(r, e, i)))))
        }

        function b(t, e, r) {
            return e.x <= Math.max(t.x, r.x) && e.x >= Math.min(t.x, r.x) && e.y <= Math.max(t.y, r.y) && e.y >= Math.min(t.y, r.y)
        }

        function T(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0
        }

        function w(t, e) {
            return y(t.prev, t, t.next) < 0 ? y(t, e, t.next) >= 0 && y(t, t.prev, e) >= 0 : y(t, e, t.prev) < 0 || y(t, t.next, e) < 0
        }

        function E(t, e) {
            var r = new P(t.i, t.x, t.y),
                i = new P(e.i, e.x, e.y),
                n = t.next,
                o = e.prev;
            return t.next = e, e.prev = t, r.next = n, n.prev = r, i.next = r, r.prev = i, o.next = i, i.prev = o, i
        }

        function I(t, e, r, i) {
            var n = new P(t, e, r);
            return i ? (n.next = i.next, n.prev = i, i.next.prev = n, i.next = n) : (n.prev = n, n.next = n), n
        }

        function S(t) {
            t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
        }

        function P(t, e, r) {
            this.i = t, this.x = e, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
        }

        function A(t, e, r, i) {
            for (var n = 0, o = e, s = r - i; o < r; o += i) n += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;
            return n
        }
        t.exports = i, t.exports.default = i, i.deviation = function(t, e, r, i) {
            var n = e && e.length,
                o = n ? e[0] * r : t.length,
                s = Math.abs(A(t, 0, o, r));
            if (n)
                for (var a = 0, h = e.length; a < h; a++) {
                    var u = e[a] * r,
                        l = a < h - 1 ? e[a + 1] * r : t.length;
                    s -= Math.abs(A(t, u, l, r))
                }
            var c = 0;
            for (a = 0; a < i.length; a += 3) {
                var d = i[a] * r,
                    p = i[a + 1] * r,
                    f = i[a + 2] * r;
                c += Math.abs((t[d] - t[f]) * (t[p + 1] - t[d + 1]) - (t[d] - t[p]) * (t[f + 1] - t[d + 1]))
            }
            return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s)
        }, i.flatten = function(t) {
            for (var e = t[0][0].length, r = {
                    vertices: [],
                    holes: [],
                    dimensions: e
                }, i = 0, n = 0; n < t.length; n++) {
                for (var o = 0; o < t[n].length; o++)
                    for (var s = 0; s < e; s++) r.vertices.push(t[n][o][s]);
                n > 0 && (i += t[n - 1].length, r.holes.push(i))
            }
            return r
        }
    },
    96: function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }
});