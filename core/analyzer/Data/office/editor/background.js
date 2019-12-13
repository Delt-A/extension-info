! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
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
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
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
    }, n.p = "", n(n.s = 342)
}([function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "__extends", (function() {
        return i
    })), n.d(t, "__assign", (function() {
        return o
    })), n.d(t, "__rest", (function() {
        return a
    })), n.d(t, "__decorate", (function() {
        return s
    })), n.d(t, "__param", (function() {
        return u
    })), n.d(t, "__metadata", (function() {
        return c
    })), n.d(t, "__awaiter", (function() {
        return l
    })), n.d(t, "__generator", (function() {
        return d
    })), n.d(t, "__exportStar", (function() {
        return p
    })), n.d(t, "__values", (function() {
        return f
    })), n.d(t, "__read", (function() {
        return h
    })), n.d(t, "__spread", (function() {
        return m
    })), n.d(t, "__spreadArrays", (function() {
        return g
    })), n.d(t, "__await", (function() {
        return y
    })), n.d(t, "__asyncGenerator", (function() {
        return v
    })), n.d(t, "__asyncDelegator", (function() {
        return _
    })), n.d(t, "__asyncValues", (function() {
        return b
    })), n.d(t, "__makeTemplateObject", (function() {
        return S
    })), n.d(t, "__importStar", (function() {
        return I
    })), n.d(t, "__importDefault", (function() {
        return T
    }));
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    };

    function i(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var o = function() {
        return (o = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };

    function a(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
        }
        return n
    }

    function s(e, t, n, r) {
        var i, o = arguments.length,
            a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a
    }

    function u(e, t) {
        return function(n, r) {
            t(n, r, e)
        }
    }

    function c(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    }

    function l(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
            function a(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                e.done ? i(e.value) : new n((function(t) {
                    t(e.value)
                })).then(a, s)
            }
            u((r = r.apply(e, t || [])).next())
        }))
    }

    function d(e, t) {
        var n, r, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = t.call(e, a)
                    } catch (e) {
                        o = [6, e], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }

    function p(e, t) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }

    function f(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator],
            n = 0;
        return t ? t.call(e) : {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        }
    }

    function h(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, i, o = n.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    }

    function m() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(h(arguments[t]));
        return e
    }

    function g() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
            i = 0;
        for (t = 0; t < n; t++)
            for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
        return r
    }

    function y(e) {
        return this instanceof y ? (this.v = e, this) : new y(e)
    }

    function v(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, i = n.apply(e, t || []),
            o = [];
        return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
            return this
        }, r;

        function a(e) {
            i[e] && (r[e] = function(t) {
                return new Promise((function(n, r) {
                    o.push([e, t, n, r]) > 1 || s(e, t)
                }))
            })
        }

        function s(e, t) {
            try {
                (n = i[e](t)).value instanceof y ? Promise.resolve(n.value.v).then(u, c) : l(o[0][2], n)
            } catch (e) {
                l(o[0][3], e)
            }
            var n
        }

        function u(e) {
            s("next", e)
        }

        function c(e) {
            s("throw", e)
        }

        function l(e, t) {
            e(t), o.shift(), o.length && s(o[0][0], o[0][1])
        }
    }

    function _(e) {
        var t, n;
        return t = {}, r("next"), r("throw", (function(e) {
            throw e
        })), r("return"), t[Symbol.iterator] = function() {
            return this
        }, t;

        function r(r, i) {
            t[r] = e[r] ? function(t) {
                return (n = !n) ? {
                    value: y(e[r](t)),
                    done: "return" === r
                } : i ? i(t) : t
            } : i
        }
    }

    function b(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = f(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
            return this
        }, t);

        function r(n) {
            t[n] = e[n] && function(t) {
                return new Promise((function(r, i) {
                    ! function(e, t, n, r) {
                        Promise.resolve(r).then((function(t) {
                            e({
                                value: t,
                                done: n
                            })
                        }), t)
                    }(r, i, (t = e[n](t)).done, t.value)
                }))
            }
        }
    }

    function S(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
        }) : e.raw = t, e
    }

    function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function T(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(15);
    t.METADATA_KEY = r;
    var i = n(144);
    t.Container = i.Container;
    var o = n(31);
    t.BindingScopeEnum = o.BindingScopeEnum, t.BindingTypeEnum = o.BindingTypeEnum, t.TargetTypeEnum = o.TargetTypeEnum;
    var a = n(160);
    t.AsyncContainerModule = a.AsyncContainerModule, t.ContainerModule = a.ContainerModule;
    var s = n(161);
    t.injectable = s.injectable;
    var u = n(162);
    t.tagged = u.tagged;
    var c = n(163);
    t.named = c.named;
    var l = n(106);
    t.inject = l.inject, t.LazyServiceIdentifer = l.LazyServiceIdentifer;
    var d = n(164);
    t.optional = d.optional;
    var p = n(165);
    t.unmanaged = p.unmanaged;
    var f = n(166);
    t.multiInject = f.multiInject;
    var h = n(167);
    t.targetName = h.targetName;
    var m = n(168);
    t.postConstruct = m.postConstruct;
    var g = n(104);
    t.MetadataReader = g.MetadataReader;
    var y = n(40);
    t.id = y.id;
    var v = n(35);
    t.decorate = v.decorate;
    var _ = n(109);
    t.traverseAncerstors = _.traverseAncerstors, t.taggedConstraint = _.taggedConstraint, t.namedConstraint = _.namedConstraint, t.typeConstraint = _.typeConstraint;
    var b = n(50);
    t.getServiceIdentifierAsString = b.getServiceIdentifierAsString;
    var S = n(169);
    t.multiBindToService = S.multiBindToService
}, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SharedInjectionTypes = {
        IStorage: Symbol.for("IStorage"),
        IExtensionSettings: Symbol.for("IExtensionSettings"),
        ISystemSettings: Symbol.for("ISystemSettings"),
        IBrowserStorageApi: Symbol.for("IBrowserStorageApi"),
        IUserInfoListener: Symbol.for("IUserInfoListener"),
        IExtensionStorage: Symbol.for("IExtensionStorage"),
        ISettingsDefinitions: Symbol.for("ISettingsDefinitions"),
        ISettingReader: Symbol.for("ISettingReader"),
        ISettingWriter: Symbol.for("ISettingWriter"),
        ILoggerSettings: Symbol.for("ILoggerSettings"),
        ISettingsObserver: Symbol.for("ISettingsObserver"),
        IHostSettings: Symbol.for("IHostSettings"),
        ITransportLogger: Symbol.for("ITransportLogger"),
        ITransportActivity: Symbol.for("ITransportActivity"),
        ILogger: Symbol.for("ILogger"),
        IComponentInitializer: Symbol.for("IComponentInitializer"),
        IWordCount: Symbol.for("IWordCount"),
        IGuidGenerator: Symbol.for("IGuidGenerator"),
        IXhrWrapper: Symbol.for("IXhrWrapper"),
        ILocalizer: Symbol.for("ILocalizer"),
        ILocalizationStringsImporter: Symbol.for("ILocalizationStringsImporter"),
        ITextNodeRangeBuilder: Symbol.for("ITextNodeRangeBuilder"),
        ITextUnitChunker: Symbol.for("ITextUnitChunker"),
        ICritiqueInterpreter: Symbol.for("ICritiqueInterpreter"),
        ICritiquesMessageEmitter: Symbol.for("ICritiquesMessageEmitter"),
        ITileCheckRequestBuilder: Symbol.for("ITileCheckRequestBuilder"),
        IProofingSettings: Symbol.for("IProofingSettings"),
        ITextTilesMessageProcessor: Symbol.for("ITextTilesMessageProcessor"),
        IInstrumentationMessageProcessor: Symbol.for("IInstrumentationMessageProcessor"),
        ITileCheckResponseTransformer: Symbol.for("ITileCheckResponseTransformer"),
        IWordDictionary: Symbol.for("IWordDictionary"),
        ILanguageSelector: Symbol.for("ILanguageSelector"),
        ILanguageMapper: Symbol.for("ILanguageMapper"),
        IContentScriptEmitter: Symbol.for("IContentScriptEmitter"),
        ISendMessageStrategy: Symbol.for("ISendMessageStrategy"),
        ISettingsEmitter: Symbol.for("ISettingsEmitter"),
        TokenResourceString: Symbol.for("TokenResourceString"),
        AuthenticationContext: Symbol.for("AuthenticationContext"),
        ITokenFetcher: Symbol.for("ITokenFetcher"),
        IAuthenticationStrategy: Symbol.for("IAuthenticationStrategy"),
        IAuthenticationHandler: Symbol.for("IAuthenticationHandler"),
        IUserInfoStrategy: Symbol.for("IUserInfoStrategy"),
        IRetryPolicy: Symbol.for("IRetryPolicy"),
        IRegistrar: Symbol.for("IRegistrar"),
        RegistrarEventName: Symbol.for("RegistrarEventName")
    }, t.SharedMultiInjectionTypes = {
        IRegistrable: Symbol.for("IRegistrable")
    }
}, , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            e[e.Error = 0] = "Error", e[e.Warn = 1] = "Warn", e[e.Info = 2] = "Info", e[e.Debug = 3] = "Debug"
        }(t.LoggingLevel || (t.LoggingLevel = {})),
        function(e) {
            e[e.EssentialServiceMetadata = 1] = "EssentialServiceMetadata", e[e.AccountData = 2] = "AccountData", e[e.SystemMetadata = 4] = "SystemMetadata", e[e.OrganizationIdentifiableInformation = 8] = "OrganizationIdentifiableInformation", e[e.EndUserIdentifiableInformation = 16] = "EndUserIdentifiableInformation", e[e.CustomerContent = 32] = "CustomerContent", e[e.AccessControl = 64] = "AccessControl"
        }(t.ActivityDataClassification || (t.ActivityDataClassification = {})),
        function(e) {
            e[e.NotSet = 0] = "NotSet", e[e.Measure = 1] = "Measure", e[e.Diagnostics = 2] = "Diagnostics", e[e.CriticalBusinessImpact = 191] = "CriticalBusinessImpact", e[e.CriticalCensus = 192] = "CriticalCensus", e[e.CriticalExperimentation = 193] = "CriticalExperimentation", e[e.CriticalUsage = 194] = "CriticalUsage"
        }(t.SamplingPolicy || (t.SamplingPolicy = {})),
        function(e) {
            e[e.Seen = 0] = "Seen", e[e.Tried = 1] = "Tried", e[e.Kept = 2] = "Kept"
        }(t.Experimentation || (t.Experimentation = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "h", (function() {
            return o
        })), n.d(t, "g", (function() {
            return a
        })), n.d(t, "d", (function() {
            return s
        })), n.d(t, "b", (function() {
            return u
        })), n.d(t, "a", (function() {
            return c
        })), n.d(t, "e", (function() {
            return l
        })), n.d(t, "c", (function() {
            return p
        })), n.d(t, "f", (function() {
            return f
        }));
        var r = n(117),
            i = n.n(r);

        function o(e) {
            var t = {};
            return t.body = e.bodyAsText, t.headers = e.headers, t.status = e.status, t
        }

        function a(e) {
            var t = e.clone();
            return t.headers && t.headers.remove("authorization"), t
        }

        function s(e) {
            return new RegExp("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$", "ig").test(e)
        }

        function u() {
            return i()()
        }

        function c(e, t) {
            return new Promise((function(n) {
                return setTimeout((function() {
                    return n(t)
                }), e)
            }))
        }

        function l(e, t) {
            var n;
            return Array.isArray(e) || (e = [e]), (n = {})[t] = e, n
        }
        n(25), void 0 !== e && e.version && e.versions && e.versions.node;
        var d = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

        function p(e) {
            return d.test(e)
        }

        function f(e, t, n) {
            return e && t ? e.split(t).join(n || "") : e
        }
    }).call(this, n(49))
}, , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            e.ExtensionInstalled = "ExtensionInstalled", e.BackgroundScriptInitialization = "BackgroundScriptInitialization", e.ContentScriptInitialization = "ContentScriptInitialization", e.ContentScriptUserInfoListener = "ContentScriptUserInfoListener", e.PageContextChanged = "PageContextChanged", e.ContentScriptCleanup = "ContentScriptCleanup", e.ContentScriptLifetime = "ContentScriptLifetime", e.OptionsInitialization = "OptionsInitialization", e.Diagnostics = "Diagnostics", e.EditorCall = "EditorCall", e.InstrumentationCall = "InstrumentationCall", e.LanguageInfoCall = "LanguageInfoCall", e.ReconcileTileNode = "ReconcileTileNode", e.ContentScriptRegistrar = "ContentScriptRegistrar", e.BackgroundScriptRegistrar = "BackgroundScriptRegistrar", e.OptionsRegistrar = "OptionsRegistrar", e.ActionShowSynonymsFromCallout = "ActionShowSynonymsFromCallout", e.ActionHideSynonymsFromCallout = "ActionHideSynonymsFromCallout", e.ActionShowSynonymsChangedFromOptions = "ActionShowSynonymsChangedFromOptions", e.ActionCheckSpellingChangedFromOptions = "ActionCheckSpellingChangedFromOptions", e.ActionCheckGrammarChangedFromOptions = "ActionCheckGrammarChangedFromOptions", e.ActionCheckRefinementsChangedFromOptions = "ActionCheckRefinementsChangedFromOptions", e.ActionAddedBlockedWebsiteFromOptions = "ActionAddedBlockedWebsiteFromOptions"
        }(t.EventCategoryName || (t.EventCategoryName = {})),
        function(e) {
            e.AriaError = "RunTimeErrors.AriaError", e.AuthenticationDetailedError = "RunTimeErrors.AuthenticationDetailedError", e.AuthenticationFailed = "RunTimeErrors.AuthenticationFailed", e.AuthenticationTimeout = "RunTimeErrors.AuthenticationTimeout", e.BackgroundScriptInitializationError = "RunTimeErrors.BackgroundScriptInitializationError", e.ContentScriptInjectionError = "RunTimeErrors.ContentScriptInjectionError", e.EnvelopeFormatError = "RunTimeErrors.EnvelopeFormatError", e.GetMinimalDifferenceBoundsError = "RunTimeErrors.GetMinimalDifferenceBoundsError", e.GetNewActivityError = "RunTimeErrors.GetNewActivityError", e.GrammarParsingException = "RunTimeErrors.GrammarParsingException", e.InvalidTileFormat = "RunTimeErrors.InvalidTileFormat", e.MutationError = "MutationError", e.RegexException = "RunTimeErrors.RegexException", e.SelectionApiException = "RunTimeErrors.SelectionApiException", e.SettingInvalidDescriptorJson = "RunTimeErrors.SettingInvalidDescriptorJson", e.SettingsSyncEditorServiceError = "RunTimeErrors.SettingSyncEditorServiceError", e.SettingsSyncReadOverrideError = "RunTimeErrors.SettingSyncReadOverrideError", e.SettingsSyncWriteError = "RunTimeErrors.SettingSyncWriteError", e.SettingReadError = "RunTimeErrors.SettingReadError", e.SettingReadOverrideError = "RunTimeErrors.SettingReadOverrideError", e.SettingManualOverrideWarning = "RunTimeErrors.SettingManualOverrideWarning", e.SettingWriteError = "RunTimeErrors.SettingWriteError", e.ShadowGraphBuilderException = "RunTimeErrors.ShadowGraphBuilderException", e.TileIdParseException = "RunTimeErrors.TileIdParseException", e.UpdateCritiqueException = "RunTimeErrors.UpdateCritiqueException", e.SettingReadingException = "RunTimeErrors.SettingReadingException"
        }(t.ErrorEventName || (t.ErrorEventName = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NAMED_TAG = "named", t.NAME_TAG = "name", t.UNMANAGED_TAG = "unmanaged", t.OPTIONAL_TAG = "optional", t.INJECT_TAG = "inject", t.MULTI_INJECT_TAG = "multi_inject", t.TAGGED = "inversify:tagged", t.TAGGED_PROP = "inversify:tagged_props", t.PARAM_TYPES = "inversify:paramtypes", t.DESIGN_PARAM_TYPES = "design:paramtypes", t.POST_CONSTRUCT = "post_construct"
}, , , function(e, t, n) {
    "use strict";
    n.r(t),
        function(e, r) {
            n.d(t, "$mobx", (function() {
                return Ln
            })), n.d(t, "Reaction", (function() {
                return ln
            })), n.d(t, "untracked", (function() {
                return on
            })), n.d(t, "IDerivationState", (function() {
                return Rt
            })), n.d(t, "createAtom", (function() {
                return Xe
            })), n.d(t, "spy", (function() {
                return b
            })), n.d(t, "comparer", (function() {
                return z
            })), n.d(t, "isObservableObject", (function() {
                return ue
            })), n.d(t, "isBoxedObservable", (function() {
                return ee
            })), n.d(t, "isObservableArray", (function() {
                return dt
            })), n.d(t, "ObservableMap", (function() {
                return qe
            })), n.d(t, "isObservableMap", (function() {
                return We
            })), n.d(t, "transaction", (function() {
                return ke
            })), n.d(t, "observable", (function() {
                return Ae
            })), n.d(t, "computed", (function() {
                return ve
            })), n.d(t, "isObservable", (function() {
                return de
            })), n.d(t, "isObservableProp", (function() {
                return pe
            })), n.d(t, "isComputed", (function() {
                return he
            })), n.d(t, "isComputedProp", (function() {
                return me
            })), n.d(t, "extendObservable", (function() {
                return be
            })), n.d(t, "extendShallowObservable", (function() {
                return _e
            })), n.d(t, "observe", (function() {
                return yn
            })), n.d(t, "intercept", (function() {
                return vn
            })), n.d(t, "autorun", (function() {
                return q
            })), n.d(t, "reaction", (function() {
                return W
            })), n.d(t, "when", (function() {
                return _n
            })), n.d(t, "action", (function() {
                return A
            })), n.d(t, "isAction", (function() {
                return x
            })), n.d(t, "runInAction", (function() {
                return R
            })), n.d(t, "keys", (function() {
                return Sn
            })), n.d(t, "values", (function() {
                return In
            })), n.d(t, "entries", (function() {
                return Tn
            })), n.d(t, "set", (function() {
                return wn
            })), n.d(t, "remove", (function() {
                return Cn
            })), n.d(t, "has", (function() {
                return En
            })), n.d(t, "get", (function() {
                return Nn
            })), n.d(t, "decorate", (function() {
                return On
            })), n.d(t, "configure", (function() {
                return Pn
            })), n.d(t, "onBecomeObserved", (function() {
                return $e
            })), n.d(t, "onBecomeUnobserved", (function() {
                return Je
            })), n.d(t, "flow", (function() {
                return Rn
            })), n.d(t, "toJS", (function() {
                return Mn
            })), n.d(t, "trace", (function() {
                return cn
            })), n.d(t, "getDependencyTree", (function() {
                return qt
            })), n.d(t, "getObserverTree", (function() {
                return Vt
            })), n.d(t, "_resetGlobalState", (function() {
                return zt
            })), n.d(t, "_getGlobalState", (function() {
                return kt
            })), n.d(t, "getDebugName", (function() {
                return He
            })), n.d(t, "getAtom", (function() {
                return Fe
            })), n.d(t, "_getAdministration", (function() {
                return Ge
            })), n.d(t, "_allowStateChanges", (function() {
                return T
            })), n.d(t, "_allowStateChangesInsideComputed", (function() {
                return E
            })), n.d(t, "isArrayLike", (function() {
                return Et
            })), n.d(t, "_isComputingDerivation", (function() {
                return en
            })), n.d(t, "onReactionError", (function() {
                return dn
            })), n.d(t, "_interceptReads", (function() {
                return Bn
            }));
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0

            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.

            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            var i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };

            function o(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var a = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            };

            function s(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return a
            }

            function u() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(s(arguments[t]));
                return e
            }
            var c = {},
                l = {};

            function d(e, t) {
                var n = t ? c : l;
                return n[e] || (n[e] = {
                    configurable: !0,
                    enumerable: t,
                    get: function() {
                        return p(this), this[e]
                    },
                    set: function(t) {
                        p(this), this[e] = t
                    }
                })
            }

            function p(e) {
                if (!0 !== e.__mobxDidRunLazyInitializers) {
                    var t = e.__mobxDecorators;
                    if (t)
                        for (var n in Tt(e, "__mobxDidRunLazyInitializers", !0), t) {
                            var r = t[n];
                            r.propertyCreator(e, r.prop, r.descriptor, r.decoratorTarget, r.decoratorArguments)
                        }
                }
            }

            function f(e, t) {
                return function() {
                    var n, r = function(r, i, o, s) {
                        if (!0 === s) return t(r, i, o, r, n), null;
                        if (!Object.prototype.hasOwnProperty.call(r, "__mobxDecorators")) {
                            var u = r.__mobxDecorators;
                            Tt(r, "__mobxDecorators", a({}, u))
                        }
                        return r.__mobxDecorators[i] = {
                            prop: i,
                            propertyCreator: t,
                            descriptor: o,
                            decoratorTarget: r,
                            decoratorArguments: n
                        }, d(i, e)
                    };
                    return h(arguments) ? (n = ft, r.apply(null, arguments)) : (n = Array.prototype.slice.call(arguments), r)
                }
            }

            function h(e) {
                return (2 === e.length || 3 === e.length) && "string" == typeof e[1] || 4 === e.length && !0 === e[3]
            }

            function m() {
                return !!Lt.spyListeners.length
            }

            function g(e) {
                if (Lt.spyListeners.length)
                    for (var t = Lt.spyListeners, n = 0, r = t.length; n < r; n++) t[n](e)
            }

            function y(e) {
                g(a({}, e, {
                    spyReportStart: !0
                }))
            }
            var v = {
                spyReportEnd: !0
            };

            function _(e) {
                g(e ? a({}, e, {
                    spyReportEnd: !0
                }) : v)
            }

            function b(e) {
                return Lt.spyListeners.push(e), _t((function() {
                    Lt.spyListeners = Lt.spyListeners.filter((function(t) {
                        return t !== e
                    }))
                }))
            }

            function S(e, t) {
                var n = function() {
                    return I(e, t, this, arguments)
                };
                return n.isMobxAction = !0, n
            }

            function I(e, t, n, r) {
                var i = function(e, t, n, r) {
                    var i = m() && !!e,
                        o = 0;
                    if (i) {
                        o = Date.now();
                        var a = r && r.length || 0,
                            s = new Array(a);
                        if (a > 0)
                            for (var u = 0; u < a; u++) s[u] = r[u];
                        y({
                            type: "action",
                            name: e,
                            object: n,
                            arguments: s
                        })
                    }
                    var c = an();
                    return $t(), {
                        prevDerivation: c,
                        prevAllowStateChanges: w(!0),
                        notifySpy: i,
                        startTime: o
                    }
                }(e, 0, n, r);
                try {
                    return t.apply(n, r)
                } finally {
                    ! function(e) {
                        C(e.prevAllowStateChanges), Jt(), sn(e.prevDerivation), e.notifySpy && _({
                            time: Date.now() - e.startTime
                        })
                    }(i)
                }
            }

            function T(e, t) {
                var n, r = w(e);
                try {
                    n = t()
                } finally {
                    C(r)
                }
                return n
            }

            function w(e) {
                var t = Lt.allowStateChanges;
                return Lt.allowStateChanges = e, t
            }

            function C(e) {
                Lt.allowStateChanges = e
            }

            function E(e) {
                var t, n = Lt.computationDepth;
                Lt.computationDepth = 0;
                try {
                    t = e()
                } finally {
                    Lt.computationDepth = n
                }
                return t
            }

            function N() {
                yt(!1)
            }

            function O(e) {
                return function(t, n, r) {
                    if (r) {
                        if (r.value) return {
                            value: S(e, r.value),
                            enumerable: !1,
                            configurable: !0,
                            writable: !0
                        };
                        var i = r.initializer;
                        return {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            initializer: function() {
                                return S(e, i.call(this))
                            }
                        }
                    }
                    return P(e).apply(this, arguments)
                }
            }

            function P(e) {
                return function(t, n, r) {
                    Object.defineProperty(t, n, {
                        configurable: !0,
                        enumerable: !1,
                        get: function() {},
                        set: function(t) {
                            Tt(this, n, A(e, t))
                        }
                    })
                }
            }
            var A = function(e, t, n, r) {
                return 1 === arguments.length && "function" == typeof e ? S(e.name || "<unnamed action>", e) : 2 === arguments.length && "function" == typeof t ? S(e, t) : 1 === arguments.length && "string" == typeof e ? O(e) : !0 !== r ? O(t).apply(null, arguments) : void(e[t] = S(e.name || t, n.value))
            };

            function R(e, t) {
                return I("string" == typeof e ? e : e.name || "<unnamed action>", "function" == typeof e ? e : t, this, void 0)
            }

            function x(e) {
                return "function" == typeof e && !0 === e.isMobxAction
            }

            function D(e, t, n) {
                Tt(e, t, S(t, n.bind(e)))
            }
            A.bound = function(e, t, n, r) {
                return !0 === r ? (D(e, t, n.value), null) : n ? {
                    configurable: !0,
                    enumerable: !1,
                    get: function() {
                        return D(this, t, n.value || n.initializer.call(this)), this[t]
                    },
                    set: N
                } : {
                    enumerable: !1,
                    configurable: !0,
                    set: function(e) {
                        D(this, t, e)
                    },
                    get: function() {}
                }
            };
            var j = Object.prototype.toString;

            function M(e, t) {
                return function e(t, n, r, i) {
                    if (t === n) return 0 !== t || 1 / t == 1 / n;
                    if (null == t || null == n) return !1;
                    if (t != t) return n != n;
                    var o = typeof t;
                    return ("function" === o || "object" === o || "object" == typeof n) && function(t, n, r, i) {
                        t = B(t), n = B(n);
                        var o = j.call(t);
                        if (o !== j.call(n)) return !1;
                        switch (o) {
                            case "[object RegExp]":
                            case "[object String]":
                                return "" + t == "" + n;
                            case "[object Number]":
                                return +t != +t ? +n != +n : 0 == +t ? 1 / +t == 1 / n : +t == +n;
                            case "[object Date]":
                            case "[object Boolean]":
                                return +t == +n;
                            case "[object Symbol]":
                                return "undefined" != typeof Symbol && Symbol.valueOf.call(t) === Symbol.valueOf.call(n)
                        }
                        var a = "[object Array]" === o;
                        if (!a) {
                            if ("object" != typeof t || "object" != typeof n) return !1;
                            var s = t.constructor,
                                u = n.constructor;
                            if (s !== u && !("function" == typeof s && s instanceof s && "function" == typeof u && u instanceof u) && "constructor" in t && "constructor" in n) return !1
                        }
                        i = i || [];
                        for (var c = (r = r || []).length; c--;)
                            if (r[c] === t) return i[c] === n;
                        if (r.push(t), i.push(n), a) {
                            if ((c = t.length) !== n.length) return !1;
                            for (; c--;)
                                if (!e(t[c], n[c], r, i)) return !1
                        } else {
                            var l, d = Object.keys(t);
                            if (c = d.length, Object.keys(n).length !== c) return !1;
                            for (; c--;)
                                if (!L(n, l = d[c]) || !e(t[l], n[l], r, i)) return !1
                        }
                        return r.pop(), i.pop(), !0
                    }(t, n, r, i)
                }(e, t)
            }

            function B(e) {
                return dt(e) ? e.peek() : Nt(e) || We(e) ? Ot(e.entries()) : e
            }

            function L(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function k(e, t) {
                return e === t
            }
            var z = {
                identity: k,
                structural: function(e, t) {
                    return M(e, t)
                },
                default: function(e, t) {
                    return function(e, t) {
                        return "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
                    }(e, t) || k(e, t)
                }
            };

            function q(e, t) {
                void 0 === t && (t = ht);
                var n, r = t && t.name || e.name || "Autorun@" + gt();
                if (t.scheduler || t.delay) {
                    var i = V(t),
                        o = !1;
                    n = new ln(r, (function() {
                        o || (o = !0, i((function() {
                            o = !1, n.isDisposed || n.track(a)
                        })))
                    }), t.onError)
                } else n = new ln(r, (function() {
                    this.track(a)
                }), t.onError);

                function a() {
                    e(n)
                }
                return n.schedule(), n.getDisposer()
            }
            var U = function(e) {
                return e()
            };

            function V(e) {
                return e.scheduler ? e.scheduler : e.delay ? function(t) {
                    return setTimeout(t, e.delay)
                } : U
            }

            function W(e, t, n) {
                void 0 === n && (n = ht), "boolean" == typeof n && (n = {
                    fireImmediately: n
                });
                var r, i, o, a = n.name || "Reaction@" + gt(),
                    s = A(a, n.onError ? (r = n.onError, i = t, function() {
                        try {
                            return i.apply(this, arguments)
                        } catch (e) {
                            r.call(this, e)
                        }
                    }) : t),
                    u = !n.scheduler && !n.delay,
                    c = V(n),
                    l = !0,
                    d = !1,
                    p = n.compareStructural ? z.structural : n.equals || z.default,
                    f = new ln(a, (function() {
                        l || u ? h() : d || (d = !0, c(h))
                    }), n.onError);

                function h() {
                    if (d = !1, !f.isDisposed) {
                        var t = !1;
                        f.track((function() {
                            var n = e(f);
                            t = l || !p(o, n), o = n
                        })), l && n.fireImmediately && s(o, f), l || !0 !== t || s(o, f), l && (l = !1)
                    }
                }
                return f.schedule(), f.getDisposer()
            }
            var F = function() {
                function e(e) {
                    this.dependenciesState = Rt.NOT_TRACKING, this.observing = [], this.newObserving = null, this.isBeingObserved = !1, this.isPendingUnobservation = !1, this.observers = [], this.observersIndexes = {}, this.diffValue = 0, this.runId = 0, this.lastAccessedBy = 0, this.lowestObserverState = Rt.UP_TO_DATE, this.unboundDepsCount = 0, this.__mapid = "#" + gt(), this.value = new Qt(null), this.isComputing = !1, this.isRunningSetter = !1, this.isTracing = xt.NONE, this.firstGet = !0, this.derivation = e.get, this.name = e.name || "ComputedValue@" + gt(), e.set && (this.setter = S(this.name + "-setter", e.set)), this.equals = e.equals || (e.compareStructural || e.struct ? z.structural : z.default), this.scope = e.context, this.requiresReaction = !!e.requiresReaction, this.keepAlive = !!e.keepAlive
                }
                return e.prototype.onBecomeStale = function() {
                    ! function(e) {
                        if (e.lowestObserverState === Rt.UP_TO_DATE) {
                            e.lowestObserverState = Rt.POSSIBLY_STALE;
                            for (var t = e.observers, n = t.length; n--;) {
                                var r = t[n];
                                r.dependenciesState === Rt.UP_TO_DATE && (r.dependenciesState = Rt.POSSIBLY_STALE, r.isTracing !== xt.NONE && Xt(r, e), r.onBecomeStale())
                            }
                        }
                    }(this)
                }, e.prototype.onBecomeUnobserved = function() {}, e.prototype.onBecomeObserved = function() {}, e.prototype.get = function() {
                    var e = this;
                    this.keepAlive && this.firstGet && (this.firstGet = !1, q((function() {
                        return e.get()
                    }))), this.isComputing && yt("Cycle detected in computation " + this.name + ": " + this.derivation), 0 === Lt.inBatch && 0 === this.observers.length ? Zt(this) && (this.warnAboutUntrackedRead(), $t(), this.value = this.computeValue(!1), Jt()) : (Kt(this), Zt(this) && this.trackAndCompute() && function(e) {
                        if (e.lowestObserverState !== Rt.STALE) {
                            e.lowestObserverState = Rt.STALE;
                            for (var t = e.observers, n = t.length; n--;) {
                                var r = t[n];
                                r.dependenciesState === Rt.POSSIBLY_STALE ? r.dependenciesState = Rt.STALE : r.dependenciesState === Rt.UP_TO_DATE && (e.lowestObserverState = Rt.UP_TO_DATE)
                            }
                        }
                    }(this));
                    var t = this.value;
                    if (Yt(t)) throw t.cause;
                    return t
                }, e.prototype.peek = function() {
                    var e = this.computeValue(!1);
                    if (Yt(e)) throw e.cause;
                    return e
                }, e.prototype.set = function(e) {
                    if (this.setter) {
                        vt(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"), this.isRunningSetter = !0;
                        try {
                            this.setter.call(this.scope, e)
                        } finally {
                            this.isRunningSetter = !1
                        }
                    } else vt(!1, !1)
                }, e.prototype.trackAndCompute = function() {
                    m() && g({
                        object: this.scope,
                        type: "compute",
                        name: this.name
                    });
                    var e = this.value,
                        t = this.dependenciesState === Rt.NOT_TRACKING,
                        n = this.computeValue(!0),
                        r = t || Yt(e) || Yt(n) || !this.equals(e, n);
                    return r && (this.value = n), r
                }, e.prototype.computeValue = function(e) {
                    var t;
                    if (this.isComputing = !0, Lt.computationDepth++, e) t = nn(this, this.derivation, this.scope);
                    else if (!0 === Lt.disableErrorBoundaries) t = this.derivation.call(this.scope);
                    else try {
                        t = this.derivation.call(this.scope)
                    } catch (e) {
                        t = new Qt(e)
                    }
                    return Lt.computationDepth--, this.isComputing = !1, t
                }, e.prototype.suspend = function() {
                    rn(this), this.value = void 0
                }, e.prototype.observe = function(e, t) {
                    var n = this,
                        r = !0,
                        i = void 0;
                    return q((function() {
                        var o = n.get();
                        if (!r || t) {
                            var a = an();
                            e({
                                type: "update",
                                object: n,
                                newValue: o,
                                oldValue: i
                            }), sn(a)
                        }
                        r = !1, i = o
                    }))
                }, e.prototype.warnAboutUntrackedRead = function() {}, e.prototype.toJSON = function() {
                    return this.get()
                }, e.prototype.toString = function() {
                    return this.name + "[" + this.derivation.toString() + "]"
                }, e.prototype.valueOf = function() {
                    return At(this.get())
                }, e
            }();
            F.prototype[Pt()] = F.prototype.valueOf;
            var G = Ct("ComputedValue", F);

            function H(e) {
                return void 0 !== e.interceptors && e.interceptors.length > 0
            }

            function $(e, t) {
                var n = e.interceptors || (e.interceptors = []);
                return n.push(t), _t((function() {
                    var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
                }))
            }

            function J(e, t) {
                var n = an();
                try {
                    var r = e.interceptors;
                    if (r)
                        for (var i = 0, o = r.length; i < o && (vt(!(t = r[i](t)) || t.type, "Intercept handlers should return nothing or a change object"), t); i++);
                    return t
                } finally {
                    sn(n)
                }
            }

            function K(e) {
                return void 0 !== e.changeListeners && e.changeListeners.length > 0
            }

            function X(e, t) {
                var n = e.changeListeners || (e.changeListeners = []);
                return n.push(t), _t((function() {
                    var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
                }))
            }

            function Q(e, t) {
                var n = an(),
                    r = e.changeListeners;
                if (r) {
                    for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
                    sn(n)
                }
            }
            var Y = {};
            Ue || (Ue = function() {
                function e(e) {
                    void 0 === e && (e = "Atom@" + gt()), this.name = e, this.isPendingUnobservation = !1, this.isBeingObserved = !1, this.observers = [], this.observersIndexes = {}, this.diffValue = 0, this.lastAccessedBy = 0, this.lowestObserverState = Rt.NOT_TRACKING
                }
                return e.prototype.onBecomeUnobserved = function() {}, e.prototype.onBecomeObserved = function() {}, e.prototype.reportObserved = function() {
                    return Kt(this)
                }, e.prototype.reportChanged = function() {
                    $t(),
                        function(e) {
                            if (e.lowestObserverState !== Rt.STALE) {
                                e.lowestObserverState = Rt.STALE;
                                for (var t = e.observers, n = t.length; n--;) {
                                    var r = t[n];
                                    r.dependenciesState === Rt.UP_TO_DATE && (r.isTracing !== xt.NONE && Xt(r, e), r.onBecomeStale()), r.dependenciesState = Rt.STALE
                                }
                            }
                        }(this), Jt()
                }, e.prototype.toString = function() {
                    return this.name
                }, e
            }(), Ve = Ct("Atom", Ue));
            var Z = function(e) {
                function t(t, n, r, i) {
                    void 0 === r && (r = "ObservableValue@" + gt()), void 0 === i && (i = !0);
                    var o = e.call(this, r) || this;
                    return o.enhancer = n, o.hasUnreportedChange = !1, o.value = n(t, void 0, r), i && m() && g({
                        type: "create",
                        name: o.name,
                        newValue: "" + o.value
                    }), o
                }
                return o(t, e), t.prototype.dehanceValue = function(e) {
                    return void 0 !== this.dehancer ? this.dehancer(e) : e
                }, t.prototype.set = function(e) {
                    var t = this.value;
                    if ((e = this.prepareNewValue(e)) !== Y) {
                        var n = m();
                        n && y({
                            type: "update",
                            name: this.name,
                            newValue: e,
                            oldValue: t
                        }), this.setNewValue(e), n && _()
                    }
                }, t.prototype.prepareNewValue = function(e) {
                    if (tn(this), H(this)) {
                        var t = J(this, {
                            object: this,
                            type: "update",
                            newValue: e
                        });
                        if (!t) return Y;
                        e = t.newValue
                    }
                    return e = this.enhancer(e, this.value, this.name), this.value !== e ? e : Y
                }, t.prototype.setNewValue = function(e) {
                    var t = this.value;
                    this.value = e, this.reportChanged(), K(this) && Q(this, {
                        type: "update",
                        object: this,
                        newValue: e,
                        oldValue: t
                    })
                }, t.prototype.get = function() {
                    return this.reportObserved(), this.dehanceValue(this.value)
                }, t.prototype.intercept = function(e) {
                    return $(this, e)
                }, t.prototype.observe = function(e, t) {
                    return t && e({
                        object: this,
                        type: "update",
                        newValue: this.value,
                        oldValue: void 0
                    }), X(this, e)
                }, t.prototype.toJSON = function() {
                    return this.get()
                }, t.prototype.toString = function() {
                    return this.name + "[" + this.value + "]"
                }, t.prototype.valueOf = function() {
                    return At(this.get())
                }, t
            }(Ue);
            Z.prototype[Pt()] = Z.prototype.valueOf;
            var ee = Ct("ObservableValue", Z),
                te = function() {
                    function e(e, t, n) {
                        this.target = e, this.name = t, this.defaultEnhancer = n, this.values = {}
                    }
                    return e.prototype.read = function(e, t) {
                        if (this.target === e || (this.illegalAccess(e, t), this.values[t])) return this.values[t].get()
                    }, e.prototype.write = function(e, t, n) {
                        var r = this.target;
                        r !== e && this.illegalAccess(e, t);
                        var i = this.values[t];
                        if (i instanceof F) i.set(n);
                        else {
                            if (H(this)) {
                                if (!(u = J(this, {
                                        type: "update",
                                        object: r,
                                        name: t,
                                        newValue: n
                                    }))) return;
                                n = u.newValue
                            }
                            if ((n = i.prepareNewValue(n)) !== Y) {
                                var o = K(this),
                                    s = m(),
                                    u = o || s ? {
                                        type: "update",
                                        object: r,
                                        oldValue: i.value,
                                        name: t,
                                        newValue: n
                                    } : null;
                                s && y(a({}, u, {
                                    name: this.name,
                                    key: t
                                })), i.setNewValue(n), o && Q(this, u), s && _()
                            }
                        }
                    }, e.prototype.remove = function(e) {
                        if (this.values[e]) {
                            var t = this.target;
                            if (H(this) && !(o = J(this, {
                                    object: t,
                                    name: e,
                                    type: "remove"
                                }))) return;
                            try {
                                $t();
                                var n = K(this),
                                    r = m(),
                                    i = this.values[e].get();
                                this.keys && this.keys.remove(e), delete this.values[e], delete this.target[e];
                                var o = n || r ? {
                                    type: "remove",
                                    object: t,
                                    oldValue: i,
                                    name: e
                                } : null;
                                r && y(a({}, o, {
                                    name: this.name,
                                    key: e
                                })), n && Q(this, o), r && _()
                            } finally {
                                Jt()
                            }
                        }
                    }, e.prototype.illegalAccess = function(e, t) {
                        console.warn("Property '" + t + "' of '" + e + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner")
                    }, e.prototype.observe = function(e, t) {
                        return X(this, e)
                    }, e.prototype.intercept = function(e) {
                        return $(this, e)
                    }, e.prototype.getKeys = function() {
                        var e = this;
                        return void 0 === this.keys && (this.keys = new ot(Object.keys(this.values).filter((function(t) {
                            return e.values[t] instanceof Z
                        })), De, "keys(" + this.name + ")", !0)), this.keys.slice()
                    }, e
                }();

            function ne(e, t, n) {
                void 0 === t && (t = ""), void 0 === n && (n = xe);
                var r = e.$mobx;
                return r || (It(e) || (t = (e.constructor.name || "ObservableObject") + "@" + gt()), t || (t = "ObservableObject@" + gt()), wt(e, "$mobx", r = new te(e, t, n)), r)
            }

            function re(e, t, n, r) {
                var i = ne(e);
                if (H(i)) {
                    var o = J(i, {
                        object: e,
                        name: t,
                        type: "add",
                        newValue: n
                    });
                    if (!o) return;
                    n = o.newValue
                }
                n = (i.values[t] = new Z(n, r, i.name + "." + t, !1)).value, Object.defineProperty(e, t, function(e) {
                        return ie[e] || (ie[e] = {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                return this.$mobx.read(this, e)
                            },
                            set: function(t) {
                                this.$mobx.write(this, e, t)
                            }
                        })
                    }(t)), i.keys && i.keys.push(t),
                    function(e, t, n, r) {
                        var i = K(e),
                            o = m(),
                            s = i || o ? {
                                type: "add",
                                object: t,
                                name: n,
                                newValue: r
                            } : null;
                        o && y(a({}, s, {
                            name: e.name,
                            key: n
                        })), i && Q(e, s), o && _()
                    }(i, e, t, n)
            }
            var ie = Object.create(null),
                oe = Object.create(null);

            function ae(e) {
                return e.$mobx || (p(e), e.$mobx)
            }
            var se = Ct("ObservableObjectAdministration", te);

            function ue(e) {
                return !!St(e) && (p(e), se(e.$mobx))
            }

            function ce(t) {
                var n = f(!0, (function(e, n, r, i, o) {
                        re(e, n, r ? r.initializer ? r.initializer.call(e) : r.value : void 0, t)
                    })),
                    r = (void 0 !== e && e.env, n);
                return r.enhancer = t, r
            }

            function le(e, t) {
                if (null == e) return !1;
                if (void 0 !== t) {
                    if (ue(e)) {
                        var n = e.$mobx;
                        return n.values && !!n.values[t]
                    }
                    return !1
                }
                return ue(e) || !!e.$mobx || Ve(e) || gn(e) || G(e)
            }

            function de(e) {
                return 1 !== arguments.length && yt(!1), le(e)
            }

            function pe(e, t) {
                return "string" != typeof t ? yt(!1) : le(e, t)
            }

            function fe(e, t) {
                if (null == e) return !1;
                if (void 0 !== t) {
                    if (!1 === ue(e)) return !1;
                    if (!e.$mobx.values[t]) return !1;
                    var n = Fe(e, t);
                    return G(n)
                }
                return G(e)
            }

            function he(e) {
                return arguments.length > 1 ? yt(!1) : fe(e)
            }

            function me(e, t) {
                return "string" != typeof t ? yt(!1) : fe(e, t)
            }
            var ge = f(!1, (function(e, t, n, r, i) {
                    var o = n.get,
                        s = n.set,
                        u = i[0] || {};
                    ! function(e, t, n) {
                        var r = ne(e);
                        n.name = r.name + "." + t, n.context = e, r.values[t] = new F(n), Object.defineProperty(e, t, function(e) {
                            return oe[e] || (oe[e] = {
                                configurable: !0,
                                enumerable: !1,
                                get: function() {
                                    return ae(this).read(this, e)
                                },
                                set: function(t) {
                                    ae(this).write(this, e, t)
                                }
                            })
                        }(t))
                    }(e, t, a({
                        get: o,
                        set: s
                    }, u))
                })),
                ye = ge({
                    equals: z.structural
                }),
                ve = function(e, t, n) {
                    if ("string" == typeof t) return ge.apply(null, arguments);
                    if (null !== e && "object" == typeof e && 1 === arguments.length) return ge.apply(null, arguments);
                    var r = "object" == typeof t ? t : {};
                    return r.get = e, r.set = "function" == typeof t ? t : r.set, r.name = r.name || e.name || "", new F(r)
                };

            function _e(e, t, n) {
                return be(e, t, n, Ie)
            }

            function be(e, t, n, r) {
                var i = (r = Te(r)).defaultDecorator || (!1 === r.deep ? Ne : Ce);
                p(e), ne(e, r.name, i.enhancer), $t();
                try {
                    for (var o in t) {
                        var a = Object.getOwnPropertyDescriptor(t, o),
                            s = (n && o in n ? n[o] : a.get ? ge : i)(e, o, a, !0);
                        s && Object.defineProperty(e, o, s)
                    }
                } finally {
                    Jt()
                }
                return e
            }
            ve.struct = ye;
            var Se = {
                    deep: !0,
                    name: void 0,
                    defaultDecorator: void 0
                },
                Ie = {
                    deep: !1,
                    name: void 0,
                    defaultDecorator: void 0
                };

            function Te(e) {
                return null == e ? Se : "string" == typeof e ? {
                    name: e,
                    deep: !0
                } : e
            }

            function we(e) {
                return e.defaultDecorator ? e.defaultDecorator.enhancer : !1 === e.deep ? De : xe
            }
            Object.freeze(Se), Object.freeze(Ie);
            var Ce = ce(xe),
                Ee = ce((function(e, t, n) {
                    return null == e ? e : ue(e) || dt(e) || We(e) ? e : Array.isArray(e) ? Ae.array(e, {
                        name: n,
                        deep: !1
                    }) : It(e) ? Ae.object(e, void 0, {
                        name: n,
                        deep: !1
                    }) : Nt(e) ? Ae.map(e, {
                        name: n,
                        deep: !1
                    }) : yt(!1)
                })),
                Ne = ce(De),
                Oe = ce((function(e, t, n) {
                    return M(e, t) ? t : e
                })),
                Pe = {
                    box: function(e, t) {
                        arguments.length > 2 && Re("box");
                        var n = Te(t);
                        return new Z(e, we(n), n.name)
                    },
                    shallowBox: function(e, t) {
                        return arguments.length > 2 && Re("shallowBox"), Ae.box(e, {
                            name: t,
                            deep: !1
                        })
                    },
                    array: function(e, t) {
                        arguments.length > 2 && Re("array");
                        var n = Te(t);
                        return new ot(e, we(n), n.name)
                    },
                    shallowArray: function(e, t) {
                        return arguments.length > 2 && Re("shallowArray"), Ae.array(e, {
                            name: t,
                            deep: !1
                        })
                    },
                    map: function(e, t) {
                        arguments.length > 2 && Re("map");
                        var n = Te(t);
                        return new qe(e, we(n), n.name)
                    },
                    shallowMap: function(e, t) {
                        return arguments.length > 2 && Re("shallowMap"), Ae.map(e, {
                            name: t,
                            deep: !1
                        })
                    },
                    object: function(e, t, n) {
                        "string" == typeof arguments[1] && Re("object");
                        var r = Te(n);
                        return be({}, e, t, r)
                    },
                    shallowObject: function(e, t) {
                        return "string" == typeof arguments[1] && Re("shallowObject"), Ae.object(e, {}, {
                            name: t,
                            deep: !1
                        })
                    },
                    ref: Ne,
                    shallow: Ee,
                    deep: Ce,
                    struct: Oe
                },
                Ae = function(e, t, n) {
                    if ("string" == typeof arguments[1]) return Ce.apply(null, arguments);
                    if (de(e)) return e;
                    var r = It(e) ? Ae.object(e, t, n) : Array.isArray(e) ? Ae.array(e, t) : Nt(e) ? Ae.map(e, t) : e;
                    if (r !== e) return r;
                    yt(!1)
                };

            function Re(e) {
                yt("Expected one or two arguments to observable." + e + ". Did you accidentally try to use observable." + e + " as decorator?")
            }

            function xe(e, t, n) {
                return de(e) ? e : Array.isArray(e) ? Ae.array(e, {
                    name: n
                }) : It(e) ? Ae.object(e, void 0, {
                    name: n
                }) : Nt(e) ? Ae.map(e, {
                    name: n
                }) : e
            }

            function De(e) {
                return e
            }

            function je() {
                return "function" == typeof Symbol && Symbol.iterator || "@@iterator"
            }

            function Me(e, t) {
                wt(e, je(), t)
            }

            function Be(e) {
                return e[je()] = Le, e
            }

            function Le() {
                return this
            }

            function ke(e, t) {
                void 0 === t && (t = void 0), $t();
                try {
                    return e.apply(t)
                } finally {
                    Jt()
                }
            }
            Object.keys(Pe).forEach((function(e) {
                return Ae[e] = Pe[e]
            }));
            var ze = {},
                qe = function() {
                    function e(e, t, n) {
                        if (void 0 === t && (t = xe), void 0 === n && (n = "ObservableMap@" + gt()), this.enhancer = t, this.name = n, this.$mobx = ze, this._keys = new ot(void 0, De, this.name + ".keys()", !0), "function" != typeof Map) throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
                        this._data = new Map, this._hasMap = new Map, this.merge(e)
                    }
                    return e.prototype._has = function(e) {
                        return this._data.has(e)
                    }, e.prototype.has = function(e) {
                        return this._hasMap.has(e) ? this._hasMap.get(e).get() : this._updateHasMapEntry(e, !1).get()
                    }, e.prototype.set = function(e, t) {
                        var n = this._has(e);
                        if (H(this)) {
                            var r = J(this, {
                                type: n ? "update" : "add",
                                object: this,
                                newValue: t,
                                name: e
                            });
                            if (!r) return this;
                            t = r.newValue
                        }
                        return n ? this._updateValue(e, t) : this._addValue(e, t), this
                    }, e.prototype.delete = function(e) {
                        var t = this;
                        if (H(this) && !(i = J(this, {
                                type: "delete",
                                object: this,
                                name: e
                            }))) return !1;
                        if (this._has(e)) {
                            var n = m(),
                                r = K(this),
                                i = r || n ? {
                                    type: "delete",
                                    object: this,
                                    oldValue: this._data.get(e).value,
                                    name: e
                                } : null;
                            return n && y(a({}, i, {
                                name: this.name,
                                key: e
                            })), ke((function() {
                                t._keys.remove(e), t._updateHasMapEntry(e, !1), t._data.get(e).setNewValue(void 0), t._data.delete(e)
                            })), r && Q(this, i), n && _(), !0
                        }
                        return !1
                    }, e.prototype._updateHasMapEntry = function(e, t) {
                        var n = this._hasMap.get(e);
                        return n ? n.setNewValue(t) : (n = new Z(t, De, this.name + "." + e + "?", !1), this._hasMap.set(e, n)), n
                    }, e.prototype._updateValue = function(e, t) {
                        var n = this._data.get(e);
                        if ((t = n.prepareNewValue(t)) !== Y) {
                            var r = m(),
                                i = K(this),
                                o = i || r ? {
                                    type: "update",
                                    object: this,
                                    oldValue: n.value,
                                    name: e,
                                    newValue: t
                                } : null;
                            r && y(a({}, o, {
                                name: this.name,
                                key: e
                            })), n.setNewValue(t), i && Q(this, o), r && _()
                        }
                    }, e.prototype._addValue = function(e, t) {
                        var n = this;
                        ke((function() {
                            var r = new Z(t, n.enhancer, n.name + "." + e, !1);
                            n._data.set(e, r), t = r.value, n._updateHasMapEntry(e, !0), n._keys.push(e)
                        }));
                        var r = m(),
                            i = K(this),
                            o = i || r ? {
                                type: "add",
                                object: this,
                                name: e,
                                newValue: t
                            } : null;
                        r && y(a({}, o, {
                            name: this.name,
                            key: e
                        })), i && Q(this, o), r && _()
                    }, e.prototype.get = function(e) {
                        return this.has(e) ? this.dehanceValue(this._data.get(e).get()) : this.dehanceValue(void 0)
                    }, e.prototype.dehanceValue = function(e) {
                        return void 0 !== this.dehancer ? this.dehancer(e) : e
                    }, e.prototype.keys = function() {
                        return this._keys[je()]()
                    }, e.prototype.values = function() {
                        var e = this,
                            t = 0;
                        return Be({
                            next: function() {
                                return t < e._keys.length ? {
                                    value: e.get(e._keys[t++]),
                                    done: !1
                                } : {
                                    value: void 0,
                                    done: !0
                                }
                            }
                        })
                    }, e.prototype.entries = function() {
                        var e = this,
                            t = 0;
                        return Be({
                            next: function() {
                                if (t < e._keys.length) {
                                    var n = e._keys[t++];
                                    return {
                                        value: [n, e.get(n)],
                                        done: !1
                                    }
                                }
                                return {
                                    done: !0
                                }
                            }
                        })
                    }, e.prototype.forEach = function(e, t) {
                        var n = this;
                        this._keys.forEach((function(r) {
                            return e.call(t, n.get(r), r, n)
                        }))
                    }, e.prototype.merge = function(e) {
                        var t = this;
                        return We(e) && (e = e.toJS()), ke((function() {
                            It(e) ? Object.keys(e).forEach((function(n) {
                                return t.set(n, e[n])
                            })) : Array.isArray(e) ? e.forEach((function(e) {
                                var n = s(e, 2),
                                    r = n[0],
                                    i = n[1];
                                return t.set(r, i)
                            })) : Nt(e) ? e.forEach((function(e, n) {
                                return t.set(n, e)
                            })) : null != e && yt("Cannot initialize map from " + e)
                        })), this
                    }, e.prototype.clear = function() {
                        var e = this;
                        ke((function() {
                            on((function() {
                                e._keys.slice().forEach((function(t) {
                                    return e.delete(t)
                                }))
                            }))
                        }))
                    }, e.prototype.replace = function(e) {
                        var t = this;
                        return ke((function() {
                            var n, r = It(n = e) ? Object.keys(n) : Array.isArray(n) ? n.map((function(e) {
                                return s(e, 1)[0]
                            })) : Nt(n) || We(n) ? Ot(n.keys()) : yt("Cannot get keys from '" + n + "'");
                            t._keys.filter((function(e) {
                                return -1 === r.indexOf(e)
                            })).forEach((function(e) {
                                return t.delete(e)
                            })), t.merge(e)
                        })), this
                    }, Object.defineProperty(e.prototype, "size", {
                        get: function() {
                            return this._keys.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.toPOJO = function() {
                        var e = this,
                            t = {};
                        return this._keys.forEach((function(n) {
                            return t["" + n] = e.get(n)
                        })), t
                    }, e.prototype.toJS = function() {
                        var e = this,
                            t = new Map;
                        return this._keys.forEach((function(n) {
                            return t.set(n, e.get(n))
                        })), t
                    }, e.prototype.toJSON = function() {
                        return this.toPOJO()
                    }, e.prototype.toString = function() {
                        var e = this;
                        return this.name + "[{ " + this._keys.map((function(t) {
                            return t + ": " + e.get(t)
                        })).join(", ") + " }]"
                    }, e.prototype.observe = function(e, t) {
                        return X(this, e)
                    }, e.prototype.intercept = function(e) {
                        return $(this, e)
                    }, e
                }();
            Me(qe.prototype, (function() {
                return this.entries()
            })), wt(qe.prototype, "undefined" != typeof Symbol ? Symbol.toStringTag : "@@toStringTag", "Map");
            var Ue, Ve, We = Ct("ObservableMap", qe);

            function Fe(e, t) {
                if ("object" == typeof e && null !== e) {
                    if (dt(e)) return void 0 !== t && yt(!1), e.$mobx.atom;
                    if (We(e)) {
                        var n = e;
                        return void 0 === t ? Fe(n._keys) : ((r = n._data.get(t) || n._hasMap.get(t)) || yt(!1), r)
                    }
                    var r;
                    if (p(e), t && !e.$mobx && e[t], ue(e)) return t ? ((r = e.$mobx.values[t]) || yt(!1), r) : yt(!1);
                    if (Ve(e) || G(e) || gn(e)) return e
                } else if ("function" == typeof e && gn(e.$mobx)) return e.$mobx;
                return yt(!1)
            }

            function Ge(e, t) {
                return e || yt("Expecting some object"), void 0 !== t ? Ge(Fe(e, t)) : Ve(e) || G(e) || gn(e) ? e : We(e) ? e : (p(e), e.$mobx ? e.$mobx : void yt(!1))
            }

            function He(e, t) {
                return (void 0 !== t ? Fe(e, t) : ue(e) || We(e) ? Ge(e) : Fe(e)).name
            }

            function $e(e, t, n) {
                return Ke("onBecomeObserved", e, t, n)
            }

            function Je(e, t, n) {
                return Ke("onBecomeUnobserved", e, t, n)
            }

            function Ke(e, t, n, r) {
                var i = "string" == typeof n ? Fe(t, n) : Fe(t),
                    o = "string" == typeof n ? r : n,
                    a = i[e];
                return "function" != typeof a ? yt(!1) : (i[e] = function() {
                    a.call(this), o.call(this)
                }, function() {
                    i[e] = a
                })
            }

            function Xe(e, t, n) {
                void 0 === t && (t = bt), void 0 === n && (n = bt);
                var r = new Ue(e);
                return $e(r, t), Je(r, n), r
            }
            var Qe, Ye, Ze, et, tt = (Qe = !1, Ye = {}, Object.defineProperty(Ye, "0", {
                    set: function() {
                        Qe = !0
                    }
                }), Object.create(Ye)[0] = 1, !1 === Qe),
                nt = 0,
                rt = function() {};
            Ze = rt, et = Array.prototype, void 0 !== Object.setPrototypeOf ? Object.setPrototypeOf(Ze.prototype, et) : void 0 !== Ze.prototype.__proto__ ? Ze.prototype.__proto__ = et : Ze.prototype = et, Object.isFrozen(Array) && ["constructor", "push", "shift", "concat", "pop", "unshift", "replace", "find", "findIndex", "splice", "reverse", "sort"].forEach((function(e) {
                Object.defineProperty(rt.prototype, e, {
                    configurable: !0,
                    writable: !0,
                    value: Array.prototype[e]
                })
            }));
            var it = function() {
                    function e(e, t, n, r) {
                        this.array = n, this.owned = r, this.values = [], this.lastKnownLength = 0, this.atom = new Ue(e || "ObservableArray@" + gt()), this.enhancer = function(n, r) {
                            return t(n, r, e + "[..]")
                        }
                    }
                    return e.prototype.dehanceValue = function(e) {
                        return void 0 !== this.dehancer ? this.dehancer(e) : e
                    }, e.prototype.dehanceValues = function(e) {
                        return void 0 !== this.dehancer && this.values.length > 0 ? e.map(this.dehancer) : e
                    }, e.prototype.intercept = function(e) {
                        return $(this, e)
                    }, e.prototype.observe = function(e, t) {
                        return void 0 === t && (t = !1), t && e({
                            object: this.array,
                            type: "splice",
                            index: 0,
                            added: this.values.slice(),
                            addedCount: this.values.length,
                            removed: [],
                            removedCount: 0
                        }), X(this, e)
                    }, e.prototype.getArrayLength = function() {
                        return this.atom.reportObserved(), this.values.length
                    }, e.prototype.setArrayLength = function(e) {
                        if ("number" != typeof e || e < 0) throw new Error("[mobx.array] Out of range: " + e);
                        var t = this.values.length;
                        if (e !== t)
                            if (e > t) {
                                for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                                this.spliceWithArray(t, 0, n)
                            } else this.spliceWithArray(e, t - e)
                    }, e.prototype.updateArrayLength = function(e, t) {
                        if (e !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
                        this.lastKnownLength += t, t > 0 && e + t + 1 > nt && ct(e + t + 1)
                    }, e.prototype.spliceWithArray = function(e, t, n) {
                        var r = this;
                        tn(this.atom);
                        var i = this.values.length;
                        if (void 0 === e ? e = 0 : e > i ? e = i : e < 0 && (e = Math.max(0, i + e)), t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e)), void 0 === n && (n = ft), H(this)) {
                            var o = J(this, {
                                object: this.array,
                                type: "splice",
                                index: e,
                                removedCount: t,
                                added: n
                            });
                            if (!o) return ft;
                            t = o.removedCount, n = o.added
                        }
                        var a = (n = 0 === n.length ? n : n.map((function(e) {
                            return r.enhancer(e, void 0)
                        }))).length - t;
                        this.updateArrayLength(i, a);
                        var s = this.spliceItemsIntoValues(e, t, n);
                        return 0 === t && 0 === n.length || this.notifyArraySplice(e, n, s), this.dehanceValues(s)
                    }, e.prototype.spliceItemsIntoValues = function(e, t, n) {
                        if (n.length < 1e4) return (r = this.values).splice.apply(r, u([e, t], n));
                        var r, i = this.values.slice(e, e + t);
                        return this.values = this.values.slice(0, e).concat(n, this.values.slice(e + t)), i
                    }, e.prototype.notifyArrayChildUpdate = function(e, t, n) {
                        var r = !this.owned && m(),
                            i = K(this),
                            o = i || r ? {
                                object: this.array,
                                type: "update",
                                index: e,
                                newValue: t,
                                oldValue: n
                            } : null;
                        r && y(a({}, o, {
                            name: this.atom.name
                        })), this.atom.reportChanged(), i && Q(this, o), r && _()
                    }, e.prototype.notifyArraySplice = function(e, t, n) {
                        var r = !this.owned && m(),
                            i = K(this),
                            o = i || r ? {
                                object: this.array,
                                type: "splice",
                                index: e,
                                removed: n,
                                added: t,
                                removedCount: n.length,
                                addedCount: t.length
                            } : null;
                        r && y(a({}, o, {
                            name: this.atom.name
                        })), this.atom.reportChanged(), i && Q(this, o), r && _()
                    }, e
                }(),
                ot = function(e) {
                    function t(t, n, r, i) {
                        void 0 === r && (r = "ObservableArray@" + gt()), void 0 === i && (i = !1);
                        var o = e.call(this) || this,
                            a = new it(r, n, o, i);
                        if (wt(o, "$mobx", a), t && t.length) {
                            var s = w(!0);
                            o.spliceWithArray(0, 0, t), C(s)
                        }
                        return tt && Object.defineProperty(a.array, "0", at), o
                    }
                    return o(t, e), t.prototype.intercept = function(e) {
                        return this.$mobx.intercept(e)
                    }, t.prototype.observe = function(e, t) {
                        return void 0 === t && (t = !1), this.$mobx.observe(e, t)
                    }, t.prototype.clear = function() {
                        return this.splice(0)
                    }, t.prototype.concat = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return this.$mobx.atom.reportObserved(), Array.prototype.concat.apply(this.peek(), e.map((function(e) {
                            return dt(e) ? e.peek() : e
                        })))
                    }, t.prototype.replace = function(e) {
                        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, e)
                    }, t.prototype.toJS = function() {
                        return this.slice()
                    }, t.prototype.toJSON = function() {
                        return this.toJS()
                    }, t.prototype.peek = function() {
                        return this.$mobx.atom.reportObserved(), this.$mobx.dehanceValues(this.$mobx.values)
                    }, t.prototype.find = function(e, t, n) {
                        void 0 === n && (n = 0), arguments.length;
                        var r = this.findIndex.apply(this, arguments);
                        return -1 === r ? void 0 : this.get(r)
                    }, t.prototype.findIndex = function(e, t, n) {
                        void 0 === n && (n = 0), arguments.length;
                        for (var r = this.peek(), i = r.length, o = n; o < i; o++)
                            if (e.call(t, r[o], o, this)) return o;
                        return -1
                    }, t.prototype.splice = function(e, t) {
                        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                        switch (arguments.length) {
                            case 0:
                                return [];
                            case 1:
                                return this.$mobx.spliceWithArray(e);
                            case 2:
                                return this.$mobx.spliceWithArray(e, t)
                        }
                        return this.$mobx.spliceWithArray(e, t, n)
                    }, t.prototype.spliceWithArray = function(e, t, n) {
                        return this.$mobx.spliceWithArray(e, t, n)
                    }, t.prototype.push = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var n = this.$mobx;
                        return n.spliceWithArray(n.values.length, 0, e), n.values.length
                    }, t.prototype.pop = function() {
                        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0]
                    }, t.prototype.shift = function() {
                        return this.splice(0, 1)[0]
                    }, t.prototype.unshift = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var n = this.$mobx;
                        return n.spliceWithArray(0, 0, e), n.values.length
                    }, t.prototype.reverse = function() {
                        var e = this.slice();
                        return e.reverse.apply(e, arguments)
                    }, t.prototype.sort = function(e) {
                        var t = this.slice();
                        return t.sort.apply(t, arguments)
                    }, t.prototype.remove = function(e) {
                        var t = this.$mobx.dehanceValues(this.$mobx.values).indexOf(e);
                        return t > -1 && (this.splice(t, 1), !0)
                    }, t.prototype.move = function(e, t) {
                        function n(e) {
                            if (e < 0) throw new Error("[mobx.array] Index out of bounds: " + e + " is negative");
                            var t = this.$mobx.values.length;
                            if (e >= t) throw new Error("[mobx.array] Index out of bounds: " + e + " is not smaller than " + t)
                        }
                        if (n.call(this, e), n.call(this, t), e !== t) {
                            var r, i = this.$mobx.values;
                            r = e < t ? u(i.slice(0, e), i.slice(e + 1, t + 1), [i[e]], i.slice(t + 1)) : u(i.slice(0, t), [i[e]], i.slice(t, e), i.slice(e + 1)), this.replace(r)
                        }
                    }, t.prototype.get = function(e) {
                        var t = this.$mobx;
                        if (t) {
                            if (e < t.values.length) return t.atom.reportObserved(), t.dehanceValue(t.values[e]);
                            console.warn("[mobx.array] Attempt to read an array index (" + e + ") that is out of bounds (" + t.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX")
                        }
                    }, t.prototype.set = function(e, t) {
                        var n = this.$mobx,
                            r = n.values;
                        if (e < r.length) {
                            tn(n.atom);
                            var i = r[e];
                            if (H(n)) {
                                var o = J(n, {
                                    type: "update",
                                    object: this,
                                    index: e,
                                    newValue: t
                                });
                                if (!o) return;
                                t = o.newValue
                            }(t = n.enhancer(t, i)) !== i && (r[e] = t, n.notifyArrayChildUpdate(e, t, i))
                        } else {
                            if (e !== r.length) throw new Error("[mobx.array] Index out of bounds, " + e + " is larger than " + r.length);
                            n.spliceWithArray(e, 0, [t])
                        }
                    }, t
                }(rt);
            Me(ot.prototype, (function() {
                    this.$mobx.atom.reportObserved();
                    var e = this,
                        t = 0;
                    return Be({
                        next: function() {
                            return t < e.length ? {
                                value: e[t++],
                                done: !1
                            } : {
                                done: !0,
                                value: void 0
                            }
                        }
                    })
                })), Object.defineProperty(ot.prototype, "length", {
                    enumerable: !1,
                    configurable: !0,
                    get: function() {
                        return this.$mobx.getArrayLength()
                    },
                    set: function(e) {
                        this.$mobx.setArrayLength(e)
                    }
                }), "undefined" != typeof Symbol && Symbol.toStringTag && Tt(ot.prototype, "undefined" != typeof Symbol ? Symbol.toStringTag : "@@toStringTag", "Array"), ["every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach((function(e) {
                    var t = Array.prototype[e];
                    vt("function" == typeof t, "Base function not defined on Array prototype: '" + e + "'"), Tt(ot.prototype, e, (function() {
                        return t.apply(this.peek(), arguments)
                    }))
                })),
                function(e, t) {
                    for (var n = 0; n < t.length; n++) Tt(e, t[n], e[t[n]])
                }(ot.prototype, ["constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]);
            var at = st(0);

            function st(e) {
                return {
                    enumerable: !1,
                    configurable: !1,
                    get: function() {
                        return this.get(e)
                    },
                    set: function(t) {
                        this.set(e, t)
                    }
                }
            }

            function ut(e) {
                Object.defineProperty(ot.prototype, "" + e, st(e))
            }

            function ct(e) {
                for (var t = nt; t < e; t++) ut(t);
                nt = e
            }
            ct(1e3);
            var lt = Ct("ObservableArrayAdministration", it);

            function dt(e) {
                return St(e) && lt(e.$mobx)
            }
            var pt = "An invariant failed, however the error is obfuscated because this is an production build.",
                ft = [];
            Object.freeze(ft);
            var ht = {};

            function mt() {
                return "undefined" != typeof window ? window : r
            }

            function gt() {
                return ++Lt.mobxGuid
            }

            function yt(e) {
                throw vt(!1, e), "X"
            }

            function vt(e, t) {
                if (!e) throw new Error("[mobx] " + (t || pt))
            }

            function _t(e) {
                var t = !1;
                return function() {
                    if (!t) return t = !0, e.apply(this, arguments)
                }
            }
            Object.freeze(ht);
            var bt = function() {};

            function St(e) {
                return null !== e && "object" == typeof e
            }

            function It(e) {
                if (null === e || "object" != typeof e) return !1;
                var t = Object.getPrototypeOf(e);
                return t === Object.prototype || null === t
            }

            function Tt(e, t, n) {
                Object.defineProperty(e, t, {
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                    value: n
                })
            }

            function wt(e, t, n) {
                Object.defineProperty(e, t, {
                    enumerable: !1,
                    writable: !1,
                    configurable: !0,
                    value: n
                })
            }

            function Ct(e, t) {
                var n = "isMobX" + e;
                return t.prototype[n] = !0,
                    function(e) {
                        return St(e) && !0 === e[n]
                    }
            }

            function Et(e) {
                return Array.isArray(e) || dt(e)
            }

            function Nt(e) {
                return void 0 !== mt().Map && e instanceof mt().Map
            }

            function Ot(e) {
                for (var t = [];;) {
                    var n = e.next();
                    if (n.done) break;
                    t.push(n.value)
                }
                return t
            }

            function Pt() {
                return "function" == typeof Symbol && Symbol.toPrimitive || "@@toPrimitive"
            }

            function At(e) {
                return null === e ? null : "object" == typeof e ? "" + e : e
            }
            var Rt, xt, Dt = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "disableErrorBoundaries", "runId"],
                jt = function() {
                    this.version = 5, this.trackingDerivation = null, this.computationDepth = 0, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !0, this.enforceActions = !1, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.disableErrorBoundaries = !1
                },
                Mt = !0,
                Bt = !1,
                Lt = function() {
                    var e = mt();
                    return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Mt = !1), e.__mobxGlobals && e.__mobxGlobals.version !== (new jt).version && (Mt = !1), Mt ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = new jt) : (setTimeout((function() {
                        Bt || yt("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`")
                    }), 1), new jt)
                }();

            function kt() {
                return Lt
            }

            function zt() {
                var e = new jt;
                for (var t in e) - 1 === Dt.indexOf(t) && (Lt[t] = e[t]);
                Lt.allowStateChanges = !Lt.enforceActions
            }

            function qt(e, t) {
                return Ut(Fe(e, t))
            }

            function Ut(e) {
                var t, n, r = {
                    name: e.name
                };
                return e.observing && e.observing.length > 0 && (r.dependencies = (t = e.observing, n = [], t.forEach((function(e) {
                    -1 === n.indexOf(e) && n.push(e)
                })), n).map(Ut)), r
            }

            function Vt(e, t) {
                return Wt(Fe(e, t))
            }

            function Wt(e) {
                var t = {
                    name: e.name
                };
                return function(e) {
                    return e.observers && e.observers.length > 0
                }(e) && (t.observers = function(e) {
                    return e.observers
                }(e).map(Wt)), t
            }

            function Ft(e, t) {
                var n = e.observers.length;
                n && (e.observersIndexes[t.__mapid] = n), e.observers[n] = t, e.lowestObserverState > t.dependenciesState && (e.lowestObserverState = t.dependenciesState)
            }

            function Gt(e, t) {
                if (1 === e.observers.length) e.observers.length = 0, Ht(e);
                else {
                    var n = e.observers,
                        r = e.observersIndexes,
                        i = n.pop();
                    if (i !== t) {
                        var o = r[t.__mapid] || 0;
                        o ? r[i.__mapid] = o : delete r[i.__mapid], n[o] = i
                    }
                    delete r[t.__mapid]
                }
            }

            function Ht(e) {
                !1 === e.isPendingUnobservation && (e.isPendingUnobservation = !0, Lt.pendingUnobservations.push(e))
            }

            function $t() {
                Lt.inBatch++
            }

            function Jt() {
                if (0 == --Lt.inBatch) {
                    hn();
                    for (var e = Lt.pendingUnobservations, t = 0; t < e.length; t++) {
                        var n = e[t];
                        n.isPendingUnobservation = !1, 0 === n.observers.length && (n.isBeingObserved && (n.isBeingObserved = !1, n.onBecomeUnobserved()), n instanceof F && n.suspend())
                    }
                    Lt.pendingUnobservations = []
                }
            }

            function Kt(e) {
                var t = Lt.trackingDerivation;
                return null !== t ? (t.runId !== e.lastAccessedBy && (e.lastAccessedBy = t.runId, t.newObserving[t.unboundDepsCount++] = e, e.isBeingObserved || (e.isBeingObserved = !0, e.onBecomeObserved())), !0) : (0 === e.observers.length && Lt.inBatch > 0 && Ht(e), !1)
            }

            function Xt(e, t) {
                if (console.log("[mobx.trace] '" + e.name + "' is invalidated due to a change in: '" + t.name + "'"), e.isTracing === xt.BREAK) {
                    var n = [];
                    ! function e(t, n, r) {
                        n.length >= 1e3 ? n.push("(and many more)") : (n.push("" + new Array(r).join("\t") + t.name), t.dependencies && t.dependencies.forEach((function(t) {
                            return e(t, n, r + 1)
                        })))
                    }(qt(e), n, 1), new Function("debugger;\n/*\nTracing '" + e.name + "'\n\nYou are entering this break point because derivation '" + e.name + "' is being traced and '" + t.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (e instanceof F ? e.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + n.join("\n") + "\n*/\n    ")()
                }
            }! function(e) {
                e[e.NOT_TRACKING = -1] = "NOT_TRACKING", e[e.UP_TO_DATE = 0] = "UP_TO_DATE", e[e.POSSIBLY_STALE = 1] = "POSSIBLY_STALE", e[e.STALE = 2] = "STALE"
            }(Rt || (Rt = {})),
            function(e) {
                e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK"
            }(xt || (xt = {}));
            var Qt = function(e) {
                this.cause = e
            };

            function Yt(e) {
                return e instanceof Qt
            }

            function Zt(e) {
                switch (e.dependenciesState) {
                    case Rt.UP_TO_DATE:
                        return !1;
                    case Rt.NOT_TRACKING:
                    case Rt.STALE:
                        return !0;
                    case Rt.POSSIBLY_STALE:
                        for (var t = an(), n = e.observing, r = n.length, i = 0; i < r; i++) {
                            var o = n[i];
                            if (G(o)) {
                                if (Lt.disableErrorBoundaries) o.get();
                                else try {
                                    o.get()
                                } catch (e) {
                                    return sn(t), !0
                                }
                                if (e.dependenciesState === Rt.STALE) return sn(t), !0
                            }
                        }
                        return un(e), sn(t), !1
                }
            }

            function en() {
                return null !== Lt.trackingDerivation
            }

            function tn(e) {
                var t = e.observers.length > 0;
                Lt.computationDepth > 0 && t && yt(!1), Lt.allowStateChanges || !t && "strict" !== Lt.enforceActions || yt(!1)
            }

            function nn(e, t, n) {
                un(e), e.newObserving = new Array(e.observing.length + 100), e.unboundDepsCount = 0, e.runId = ++Lt.runId;
                var r, i = Lt.trackingDerivation;
                if (Lt.trackingDerivation = e, !0 === Lt.disableErrorBoundaries) r = t.call(n);
                else try {
                    r = t.call(n)
                } catch (e) {
                    r = new Qt(e)
                }
                return Lt.trackingDerivation = i,
                    function(e) {
                        for (var t = e.observing, n = e.observing = e.newObserving, r = Rt.UP_TO_DATE, i = 0, o = e.unboundDepsCount, a = 0; a < o; a++) 0 === (s = n[a]).diffValue && (s.diffValue = 1, i !== a && (n[i] = s), i++), s.dependenciesState > r && (r = s.dependenciesState);
                        for (n.length = i, e.newObserving = null, o = t.length; o--;) 0 === (s = t[o]).diffValue && Gt(s, e), s.diffValue = 0;
                        for (; i--;) {
                            var s;
                            1 === (s = n[i]).diffValue && (s.diffValue = 0, Ft(s, e))
                        }
                        r !== Rt.UP_TO_DATE && (e.dependenciesState = r, e.onBecomeStale())
                    }(e), r
            }

            function rn(e) {
                var t = e.observing;
                e.observing = [];
                for (var n = t.length; n--;) Gt(t[n], e);
                e.dependenciesState = Rt.NOT_TRACKING
            }

            function on(e) {
                var t = an(),
                    n = e();
                return sn(t), n
            }

            function an() {
                var e = Lt.trackingDerivation;
                return Lt.trackingDerivation = null, e
            }

            function sn(e) {
                Lt.trackingDerivation = e
            }

            function un(e) {
                if (e.dependenciesState !== Rt.UP_TO_DATE) {
                    e.dependenciesState = Rt.UP_TO_DATE;
                    for (var t = e.observing, n = t.length; n--;) t[n].lowestObserverState = Rt.UP_TO_DATE
                }
            }

            function cn() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = !1;
                "boolean" == typeof e[e.length - 1] && (n = e.pop());
                var r = function(e) {
                    switch (e.length) {
                        case 0:
                            return Lt.trackingDerivation;
                        case 1:
                            return Fe(e[0]);
                        case 2:
                            return Fe(e[0], e[1])
                    }
                }(e);
                if (!r) return yt(!1);
                r.isTracing === xt.NONE && console.log("[mobx.trace] '" + r.name + "' tracing enabled"), r.isTracing = n ? xt.BREAK : xt.LOG
            }
            var ln = function() {
                function e(e, t, n) {
                    void 0 === e && (e = "Reaction@" + gt()), this.name = e, this.onInvalidate = t, this.errorHandler = n, this.observing = [], this.newObserving = [], this.dependenciesState = Rt.NOT_TRACKING, this.diffValue = 0, this.runId = 0, this.unboundDepsCount = 0, this.__mapid = "#" + gt(), this.isDisposed = !1, this._isScheduled = !1, this._isTrackPending = !1, this._isRunning = !1, this.isTracing = xt.NONE
                }
                return e.prototype.onBecomeStale = function() {
                    this.schedule()
                }, e.prototype.schedule = function() {
                    this._isScheduled || (this._isScheduled = !0, Lt.pendingReactions.push(this), hn())
                }, e.prototype.isScheduled = function() {
                    return this._isScheduled
                }, e.prototype.runReaction = function() {
                    if (!this.isDisposed) {
                        if ($t(), this._isScheduled = !1, Zt(this)) {
                            this._isTrackPending = !0;
                            try {
                                this.onInvalidate(), this._isTrackPending && m() && g({
                                    name: this.name,
                                    type: "scheduled-reaction"
                                })
                            } catch (e) {
                                this.reportExceptionInDerivation(e)
                            }
                        }
                        Jt()
                    }
                }, e.prototype.track = function(e) {
                    $t();
                    var t, n = m();
                    n && (t = Date.now(), y({
                        name: this.name,
                        type: "reaction"
                    })), this._isRunning = !0;
                    var r = nn(this, e, void 0);
                    this._isRunning = !1, this._isTrackPending = !1, this.isDisposed && rn(this), Yt(r) && this.reportExceptionInDerivation(r.cause), n && _({
                        time: Date.now() - t
                    }), Jt()
                }, e.prototype.reportExceptionInDerivation = function(e) {
                    var t = this;
                    if (this.errorHandler) this.errorHandler(e, this);
                    else {
                        if (Lt.disableErrorBoundaries) throw e;
                        var n = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
                        console.error(n, e), m() && g({
                            type: "error",
                            name: this.name,
                            message: n,
                            error: "" + e
                        }), Lt.globalReactionErrorHandlers.forEach((function(n) {
                            return n(e, t)
                        }))
                    }
                }, e.prototype.dispose = function() {
                    this.isDisposed || (this.isDisposed = !0, this._isRunning || ($t(), rn(this), Jt()))
                }, e.prototype.getDisposer = function() {
                    var e = this.dispose.bind(this);
                    return e.$mobx = this, e
                }, e.prototype.toString = function() {
                    return "Reaction[" + this.name + "]"
                }, e.prototype.trace = function(e) {
                    void 0 === e && (e = !1), cn(this, e)
                }, e
            }();

            function dn(e) {
                return Lt.globalReactionErrorHandlers.push(e),
                    function() {
                        var t = Lt.globalReactionErrorHandlers.indexOf(e);
                        t >= 0 && Lt.globalReactionErrorHandlers.splice(t, 1)
                    }
            }
            var pn = 100,
                fn = function(e) {
                    return e()
                };

            function hn() {
                Lt.inBatch > 0 || Lt.isRunningReactions || fn(mn)
            }

            function mn() {
                Lt.isRunningReactions = !0;
                for (var e = Lt.pendingReactions, t = 0; e.length > 0;) {
                    ++t === pn && (console.error("Reaction doesn't converge to a stable state after " + pn + " iterations. Probably there is a cycle in the reactive function: " + e[0]), e.splice(0));
                    for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction()
                }
                Lt.isRunningReactions = !1
            }
            var gn = Ct("Reaction", ln);

            function yn(e, t, n, r) {
                return "function" == typeof n ? function(e, t, n, r) {
                    return Ge(e, t).observe(n, r)
                }(e, t, n, r) : function(e, t, n) {
                    return Ge(e).observe(t, n)
                }(e, t, n)
            }

            function vn(e, t, n) {
                return "function" == typeof n ? function(e, t, n) {
                    return Ge(e, t).intercept(n)
                }(e, t, n) : function(e, t) {
                    return Ge(e).intercept(t)
                }(e, t)
            }

            function _n(e, t, n) {
                return 1 === arguments.length || t && "object" == typeof t ? function(e, t) {
                    var n, r = new Promise((function(r, i) {
                        var o = bn(e, r, a({}, t, {
                            onError: i
                        }));
                        n = function() {
                            o(), i("WHEN_CANCELLED")
                        }
                    }));
                    return r.cancel = n, r
                }(e, t) : bn(e, t, n || {})
            }

            function bn(e, t, n) {
                var r;
                "number" == typeof n.timeout && (r = setTimeout((function() {
                    if (!o.$mobx.isDisposed) {
                        o();
                        var e = new Error("WHEN_TIMEOUT");
                        if (!n.onError) throw e;
                        n.onError(e)
                    }
                }), n.timeout)), n.name = n.name || "When@" + gt();
                var i = S(n.name + "-effect", t),
                    o = q((function(t) {
                        e() && (t.dispose(), r && clearTimeout(r), i())
                    }), n);
                return o
            }

            function Sn(e) {
                return ue(e) ? e.$mobx.getKeys() : We(e) ? e._keys.slice() : dt(e) ? e.map((function(e, t) {
                    return t
                })) : yt(!1)
            }

            function In(e) {
                return ue(e) ? Sn(e).map((function(t) {
                    return e[t]
                })) : We(e) ? Sn(e).map((function(t) {
                    return e.get(t)
                })) : dt(e) ? e.slice() : yt(!1)
            }

            function Tn(e) {
                return ue(e) ? Sn(e).map((function(t) {
                    return [t, e[t]]
                })) : We(e) ? Sn(e).map((function(t) {
                    return [t, e.get(t)]
                })) : dt(e) ? e.map((function(e, t) {
                    return [t, e]
                })) : yt(!1)
            }

            function wn(e, t, n) {
                if (2 !== arguments.length)
                    if (ue(e)) {
                        var r = e.$mobx;
                        r.values[t] ? r.write(e, t, n) : re(e, t, n, r.defaultEnhancer)
                    } else if (We(e)) e.set(t, n);
                else {
                    if (!dt(e)) return yt(!1);
                    "number" != typeof t && (t = parseInt(t, 10)), vt(t >= 0, "Not a valid index: '" + t + "'"), $t(), t >= e.length && (e.length = t + 1), e[t] = n, Jt()
                } else {
                    $t();
                    var i = t;
                    try {
                        for (var o in i) wn(e, o, i[o])
                    } finally {
                        Jt()
                    }
                }
            }

            function Cn(e, t) {
                if (ue(e)) e.$mobx.remove(t);
                else if (We(e)) e.delete(t);
                else {
                    if (!dt(e)) return yt(!1);
                    "number" != typeof t && (t = parseInt(t, 10)), vt(t >= 0, "Not a valid index: '" + t + "'"), e.splice(t, 1)
                }
            }

            function En(e, t) {
                if (ue(e)) {
                    var n = Ge(e);
                    return n.getKeys(), !!n.values[t]
                }
                return We(e) ? e.has(t) : dt(e) ? t >= 0 && t < e.length : yt(!1)
            }

            function Nn(e, t) {
                if (En(e, t)) return ue(e) ? e[t] : We(e) ? e.get(t) : dt(e) ? e[t] : yt(!1)
            }

            function On(e, t) {
                var n = "function" == typeof e ? e.prototype : e,
                    r = function(e) {
                        var r = t[e];
                        Array.isArray(r) || (r = [r]);
                        var i = Object.getOwnPropertyDescriptor(n, e),
                            o = r.reduce((function(t, r) {
                                return r(n, e, t)
                            }), i);
                        o && Object.defineProperty(n, e, o)
                    };
                for (var i in t) r(i);
                return e
            }

            function Pn(e) {
                var t = e.enforceActions,
                    n = e.computedRequiresReaction,
                    r = e.disableErrorBoundaries,
                    i = e.arrayBuffer,
                    o = e.reactionScheduler;
                if (void 0 !== t) {
                    var a = void 0;
                    switch (t) {
                        case !0:
                        case "observed":
                            a = !0;
                            break;
                        case !1:
                        case "never":
                            a = !1;
                            break;
                        case "strict":
                        case "always":
                            a = "strict";
                            break;
                        default:
                            fail("Invalid value for 'enforceActions': '" + t + "', expected 'never', 'always' or 'observed'")
                    }
                    Lt.enforceActions = a, Lt.allowStateChanges = !0 !== a && "strict" !== a
                }
                void 0 !== n && (Lt.computedRequiresReaction = !!n), !0 === e.isolateGlobalState && ((Lt.pendingReactions.length || Lt.inBatch || Lt.isRunningReactions) && yt("isolateGlobalState should be called before MobX is running any reactions"), Bt = !0, Mt && (0 == --mt().__mobxInstanceCount && (mt().__mobxGlobals = void 0), Lt = new jt)), void 0 !== r && (!0 === r && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors if this is on."), Lt.disableErrorBoundaries = !!r), "number" == typeof i && ct(i), o && function(e) {
                    var t = fn;
                    fn = function(n) {
                        return e((function() {
                            return t(n)
                        }))
                    }
                }(o)
            }
            var An = 0;

            function Rn(e) {
                1 !== arguments.length && yt("Flow expects one 1 argument and cannot be used as decorator");
                var t = e.name || "<unnamed flow>";
                return function() {
                    var n, r = this,
                        i = arguments,
                        o = ++An,
                        a = A(t + " - runid: " + o + " - init", e).apply(r, i),
                        s = void 0,
                        u = new Promise((function(e, r) {
                            var i = 0;

                            function u(e) {
                                var n;
                                s = void 0;
                                try {
                                    n = A(t + " - runid: " + o + " - yield " + i++, a.next).call(a, e)
                                } catch (e) {
                                    return r(e)
                                }
                                l(n)
                            }

                            function c(e) {
                                var n;
                                s = void 0;
                                try {
                                    n = A(t + " - runid: " + o + " - yield " + i++, a.throw).call(a, e)
                                } catch (e) {
                                    return r(e)
                                }
                                l(n)
                            }

                            function l(t) {
                                if (!t || "function" != typeof t.then) return t.done ? e(t.value) : (s = Promise.resolve(t.value)).then(u, c);
                                t.then(l, r)
                            }
                            n = r, u(void 0)
                        }));
                    return u.cancel = A(t + " - runid: " + o + " - cancel", (function() {
                        try {
                            s && xn(s);
                            var e = a.return(),
                                t = Promise.resolve(e.value);
                            t.then(bt, bt), xn(t), n(new Error("FLOW_CANCELLED"))
                        } catch (e) {
                            n(e)
                        }
                    })), u
                }
            }

            function xn(e) {
                "function" == typeof e.cancel && e.cancel()
            }
            var Dn = {
                detectCycles: !0,
                exportMapsAsObjects: !0,
                recurseEverything: !1
            };

            function jn(e, t, n, r) {
                return r.detectCycles && e.set(t, n), n
            }

            function Mn(e, t) {
                var n;
                return "boolean" == typeof t && (t = {
                        detectCycles: t
                    }), t || (t = Dn), t.detectCycles = void 0 === t.detectCycles ? !0 === t.recurseEverything : !0 === t.detectCycles, t.detectCycles && (n = new Map),
                    function e(t, n, r) {
                        if (!n.recurseEverything && !de(t)) return t;
                        if ("object" != typeof t) return t;
                        if (null === t) return null;
                        if (t instanceof Date) return t;
                        if (ee(t)) return e(t.get(), n, r);
                        if (de(t) && Sn(t), !0 === n.detectCycles && null !== t && r.has(t)) return r.get(t);
                        if (dt(t) || Array.isArray(t)) {
                            var i = jn(r, t, [], n),
                                o = t.map((function(t) {
                                    return e(t, n, r)
                                }));
                            i.length = o.length;
                            for (var a = 0, s = o.length; a < s; a++) i[a] = o[a];
                            return i
                        }
                        if (We(t) || Object.getPrototypeOf(t) === Map.prototype) {
                            if (!1 === n.exportMapsAsObjects) {
                                var u = jn(r, t, new Map, n);
                                return t.forEach((function(t, i) {
                                    u.set(i, e(t, n, r))
                                })), u
                            }
                            var c = jn(r, t, {}, n);
                            return t.forEach((function(t, i) {
                                c[i] = e(t, n, r)
                            })), c
                        }
                        var l = jn(r, t, {}, n);
                        for (var d in t) l[d] = e(t[d], n, r);
                        return l
                    }(e, t, n)
            }

            function Bn(e, t, n) {
                var r;
                if (We(e) || dt(e) || ee(e)) r = Ge(e);
                else {
                    if (!ue(e)) return yt(!1);
                    if ("string" != typeof t) return yt(!1);
                    r = Ge(e, t)
                }
                return void 0 !== r.dehancer ? yt(!1) : (r.dehancer = "function" == typeof t ? t : n, function() {
                    r.dehancer = void 0
                })
            }
            "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
                spy: b,
                extras: {
                    getDebugName: He
                }
            });
            var Ln = "$mobx"
        }.call(this, n(49), n(48))
}, function(e, t, n) {
    "use strict";
    var r;
    ! function(e) {
        e[e.OFF = 0] = "OFF", e[e.ERROR = 1] = "ERROR", e[e.WARNING = 2] = "WARNING", e[e.INFO = 3] = "INFO"
    }(r || (r = {})), n.d(t, "a", (function() {
        return i
    })), n.d(t, "b", (function() {
        return o
    }));
    var i = function() {
            function e(e, t) {
                this._nextPolicy = e, this._options = t
            }
            return e.prototype.shouldLog = function(e) {
                return this._options.shouldLog(e)
            }, e.prototype.log = function(e, t) {
                this._options.log(e, t)
            }, e
        }(),
        o = function() {
            function e(e) {
                this._logger = e
            }
            return e.prototype.shouldLog = function(e) {
                return !!this._logger && e !== r.OFF && e <= this._logger.minimumLogLevel
            }, e.prototype.log = function(e, t) {
                this._logger && this.shouldLog(e) && this._logger.log(e, t)
            }, e
        }()
}, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.", t.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:", t.NULL_ARGUMENT = "NULL argument", t.KEY_NOT_FOUND = "Key Not Found", t.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:", t.CANNOT_UNBIND = "Could not unbind serviceIdentifier:", t.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:", t.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:", t.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:", t.UNDEFINED_INJECT_ANNOTATION = function(e) {
        return "@inject called with undefined this could mean that the class " + e + " has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation."
    }, t.CIRCULAR_DEPENDENCY = "Circular dependency found:", t.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.", t.INVALID_BINDING_TYPE = "Invalid binding type:", t.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.", t.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!", t.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!", t.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier", t.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.", t.ARGUMENTS_LENGTH_MISMATCH = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return "The number of constructor arguments in the derived class " + e[0] + " must be >= than the number of constructor arguments of its base class."
    }, t.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object.", t.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must be a string ('singleton' or 'transient').", t.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean", t.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean", t.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class", t.POST_CONSTRUCT_ERROR = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return "@postConstruct error in class " + e[0] + ": " + e[1]
    }, t.CIRCULAR_DEPENDENCY_IN_FACTORY = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return "It looks like there is a circular dependency in one of the '" + e[0] + "' bindings. Please investigate bindings withservice identifier '" + e[1] + "'."
    }, t.STACK_OVERFLOW = "Maximum call stack size exceeded"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(15),
        i = function() {
            function e(e, t) {
                this.key = e, this.value = t
            }
            return e.prototype.toString = function() {
                return this.key === r.NAMED_TAG ? "named: " + this.value.toString() + " " : "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }"
            }, e
        }();
    t.Metadata = i
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    var r = {
        msRestVersion: "1.8.13",
        HTTP: "http:",
        HTTPS: "https:",
        HTTP_PROXY: "HTTP_PROXY",
        HTTPS_PROXY: "HTTPS_PROXY",
        HttpConstants: {
            HttpVerbs: {
                PUT: "PUT",
                GET: "GET",
                DELETE: "DELETE",
                POST: "POST",
                MERGE: "MERGE",
                HEAD: "HEAD",
                PATCH: "PATCH"
            },
            StatusCodes: {
                TooManyRequests: 429
            }
        },
        HeaderConstants: {
            AUTHORIZATION: "authorization",
            AUTHORIZATION_SCHEME: "Bearer",
            RETRY_AFTER: "Retry-After",
            USER_AGENT: "User-Agent"
        }
    }
}, , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.BindingScopeEnum = {
        Request: "Request",
        Singleton: "Singleton",
        Transient: "Transient"
    }, t.BindingTypeEnum = {
        ConstantValue: "ConstantValue",
        Constructor: "Constructor",
        DynamicValue: "DynamicValue",
        Factory: "Factory",
        Function: "Function",
        Instance: "Instance",
        Invalid: "Invalid",
        Provider: "Provider"
    }, t.TargetTypeEnum = {
        ClassProperty: "ClassProperty",
        ConstructorArgument: "ConstructorArgument",
        Variable: "Variable"
    }
}, , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(21),
        i = n(15);

    function o(e, t, n, i, o) {
        var a = {},
            s = "number" == typeof o,
            u = void 0 !== o && s ? o.toString() : n;
        if (s && void 0 !== n) throw new Error(r.INVALID_DECORATOR_OPERATION);
        Reflect.hasOwnMetadata(e, t) && (a = Reflect.getMetadata(e, t));
        var c = a[u];
        if (Array.isArray(c))
            for (var l = 0, d = c; l < d.length; l++) {
                var p = d[l];
                if (p.key === i.key) throw new Error(r.DUPLICATED_METADATA + " " + p.key.toString())
            } else c = [];
        c.push(i), a[u] = c, Reflect.defineMetadata(e, a, t)
    }

    function a(e, t) {
        Reflect.decorate(e, t)
    }

    function s(e, t) {
        return function(n, r) {
            t(n, r, e)
        }
    }
    t.tagParameter = function(e, t, n, r) {
        o(i.TAGGED, e, t, r, n)
    }, t.tagProperty = function(e, t, n) {
        o(i.TAGGED_PROP, e.constructor, t, n)
    }, t.decorate = function(e, t, n) {
        "number" == typeof n ? a([s(n, e)], t) : "string" == typeof n ? Reflect.decorate([e], t, n) : a([e], t)
    }
}, , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = 0;
    t.id = function() {
        return r++
    }
}, , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, , , , function(e, t) {
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
}, function(e, t) {
    var n, r, i = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var u, c = [],
        l = !1,
        d = -1;

    function p() {
        l && u && (l = !1, u.length ? c = u.concat(c) : d = -1, c.length && f())
    }

    function f() {
        if (!l) {
            var e = s(p);
            l = !0;
            for (var t = c.length; t;) {
                for (u = c, c = []; ++d < t;) u && u[d].run();
                d = -1, t = c.length
            }
            u = null, l = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || l || s(f)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
        return []
    }, i.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function() {
        return "/"
    }, i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(21);

    function i(e) {
        return "function" == typeof e ? e.name : "symbol" == typeof e ? e.toString() : e
    }

    function o(e) {
        if (e.name) return e.name;
        var t = e.toString(),
            n = t.match(/^function\s*([^\s(]+)/);
        return n ? n[1] : "Anonymous function: " + t
    }
    t.getServiceIdentifierAsString = i, t.listRegisteredBindingsForServiceIdentifier = function(e, t, n) {
        var r = "",
            i = n(e, t);
        return 0 !== i.length && (r = "\nRegistered bindings:", i.forEach((function(e) {
            var t = "Object";
            null !== e.implementationType && (t = o(e.implementationType)), r = r + "\n " + t, e.constraint.metaData && (r = r + " - " + e.constraint.metaData)
        }))), r
    }, t.circularDependencyToException = function e(t) {
        t.childRequests.forEach((function(t) {
            if (function e(t, n) {
                    return null !== t.parentRequest && (t.parentRequest.serviceIdentifier === n || e(t.parentRequest, n))
                }(t, t.serviceIdentifier)) {
                var n = function(e) {
                    return function e(t, n) {
                        void 0 === n && (n = []);
                        var r = i(t.serviceIdentifier);
                        return n.push(r), null !== t.parentRequest ? e(t.parentRequest, n) : n
                    }(e).reverse().join(" --\x3e ")
                }(t);
                throw new Error(r.CIRCULAR_DEPENDENCY + " " + n)
            }
            e(t)
        }))
    }, t.listMetadataForTarget = function(e, t) {
        if (t.isTagged() || t.isNamed()) {
            var n = "",
                r = t.getNamedTag(),
                i = t.getCustomTags();
            return null !== r && (n += r.toString() + "\n"), null !== i && i.forEach((function(e) {
                n += e.toString() + "\n"
            })), " " + e + "\n " + e + " - " + n
        }
        return " " + e
    }, t.getFunctionName = o
}, , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            e[e.Extension = 0] = "Extension", e[e.OWA_New_Email = 1] = "OWA_New_Email", e[e.OWA_Draft_Email = 2] = "OWA_Draft_Email"
        }(t.SessionType || (t.SessionType = {}))
}, , , , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = {};
    n.r(r), n.d(r, "ResponseStatus", (function() {
        return g
    })), n.d(r, "ConfidenceLevel", (function() {
        return y
    })), n.d(r, "Source", (function() {
        return v
    })), n.d(r, "TilingType", (function() {
        return _
    })), n.d(r, "TextUnit", (function() {
        return b
    })), n.d(r, "MetadataType", (function() {
        return S
    })), n.d(r, "EventId", (function() {
        return I
    })), n.d(r, "Type", (function() {
        return T
    })), n.d(r, "Status", (function() {
        return w
    })), n.d(r, "Tag", (function() {
        return C
    }));
    var i = {};
    n.r(i), n.d(i, "Email", (function() {
        return N
    })), n.d(i, "File", (function() {
        return O
    })), n.d(i, "Acronym", (function() {
        return P
    })), n.d(i, "AcronymsResponse", (function() {
        return A
    })), n.d(i, "CommonAppIdProperty", (function() {
        return R
    })), n.d(i, "BrowserExtensionRequestV1", (function() {
        return x
    })), n.d(i, "BrowserExtensionResponseV1", (function() {
        return D
    })), n.d(i, "Descriptor", (function() {
        return j
    })), n.d(i, "CommonLanguageIdProperty", (function() {
        return M
    })), n.d(i, "CritiqueTypeOption", (function() {
        return B
    })), n.d(i, "Suggestion", (function() {
        return L
    })), n.d(i, "CommonAppVersionProperty", (function() {
        return k
    })), n.d(i, "ClientSuggestion", (function() {
        return z
    })), n.d(i, "Tiling", (function() {
        return q
    })), n.d(i, "DocumentStructureMetadata", (function() {
        return U
    })), n.d(i, "CheckRequestV1", (function() {
        return V
    })), n.d(i, "CheckedSpan", (function() {
        return W
    })), n.d(i, "Critique", (function() {
        return F
    })), n.d(i, "MetadataContent", (function() {
        return G
    })), n.d(i, "CommonTextUnitProperty", (function() {
        return H
    })), n.d(i, "Metadata", (function() {
        return $
    })), n.d(i, "ReadingConcept", (function() {
        return J
    })), n.d(i, "ReadingCritique", (function() {
        return K
    })), n.d(i, "ReadingResponse", (function() {
        return X
    })), n.d(i, "CommonResponseStatusProperty", (function() {
        return Q
    })), n.d(i, "CheckResponseV1", (function() {
        return Y
    })), n.d(i, "CommonCritique", (function() {
        return Z
    })), n.d(i, "CommonDescriptorsProperty", (function() {
        return ee
    })), n.d(i, "CommonLanguageUXIdProperty", (function() {
        return te
    })), n.d(i, "CommonOverriddenCritiqueTypeOptions", (function() {
        return ne
    })), n.d(i, "CommonParagraphIdProperty", (function() {
        return re
    })), n.d(i, "CommonParagraphRevisionIdProperty", (function() {
        return ie
    })), n.d(i, "CommonRequestIdProperty", (function() {
        return oe
    })), n.d(i, "CommonTileIdProperty", (function() {
        return ae
    })), n.d(i, "CommonRevisionIdProperty", (function() {
        return se
    })), n.d(i, "CommonRunOnProfileIdProperty", (function() {
        return ue
    })), n.d(i, "ConfigRequestV1", (function() {
        return ce
    })), n.d(i, "CritiqueTypeInfo", (function() {
        return le
    })), n.d(i, "CritiqueCategoryInfo", (function() {
        return de
    })), n.d(i, "Profile", (function() {
        return pe
    })), n.d(i, "ConfigResponseV1", (function() {
        return fe
    })), n.d(i, "ConfigRequestV2", (function() {
        return he
    })), n.d(i, "ConfigResponseV2", (function() {
        return me
    })), n.d(i, "InsightsRequestV1", (function() {
        return ge
    })), n.d(i, "InsightsResponseV1AnalyzerData", (function() {
        return ye
    })), n.d(i, "InsightsResponseV1", (function() {
        return ve
    })), n.d(i, "InstrumentationRequestV1", (function() {
        return _e
    })), n.d(i, "LanguageInfoRequestV1", (function() {
        return be
    })), n.d(i, "SupportedLanguage", (function() {
        return Se
    })), n.d(i, "LanguageInfoResponseV1", (function() {
        return Ie
    })), n.d(i, "SupportedActions", (function() {
        return Te
    })), n.d(i, "TopologyNode", (function() {
        return we
    })), n.d(i, "TileCheckSpan", (function() {
        return Ce
    })), n.d(i, "TileElement", (function() {
        return Ee
    })), n.d(i, "TileContent", (function() {
        return Ne
    })), n.d(i, "NeuralRewriteRequestV1", (function() {
        return Oe
    })), n.d(i, "NeuralRewriteResponseV1", (function() {
        return Pe
    })), n.d(i, "TileCheckRequestV1", (function() {
        return Ae
    })), n.d(i, "TileCheckCritique", (function() {
        return Re
    })), n.d(i, "TileCheckResponseV1", (function() {
        return xe
    })), n.d(i, "UserIdentity", (function() {
        return De
    })), n.d(i, "PostCheckHeaders", (function() {
        return je
    })), n.d(i, "GetCheckHeaders", (function() {
        return Me
    })), n.d(i, "PostTileCheckHeaders", (function() {
        return Be
    })), n.d(i, "ConfigV1Headers", (function() {
        return Le
    })), n.d(i, "ConfigV2Headers", (function() {
        return ke
    })), n.d(i, "LanguageinfoHeaders", (function() {
        return ze
    })), n.d(i, "InstrumentationHeaders", (function() {
        return qe
    }));
    var o = n(0);

    function a(e) {
        for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
        return btoa(t)
    }

    function s(e) {
        for (var t = atob(e), n = new Uint8Array(t.length), r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
        return n
    }
    var u = n(10),
        c = function() {
            function e(e, t) {
                void 0 === e && (e = {}), this.modelMappers = e, this.isXML = t
            }
            return e.prototype.validateConstraints = function(e, t, n) {
                var r = function(e, r) {
                    throw new Error('"' + n + '" with value "' + t + '" should satisfy the constraint "' + e + '": ' + r + ".")
                };
                if (e.constraints && null != t) {
                    var i = e.constraints,
                        o = i.ExclusiveMaximum,
                        a = i.ExclusiveMinimum,
                        s = i.InclusiveMaximum,
                        u = i.InclusiveMinimum,
                        c = i.MaxItems,
                        l = i.MaxLength,
                        d = i.MinItems,
                        p = i.MinLength,
                        f = i.MultipleOf,
                        h = i.Pattern,
                        m = i.UniqueItems;
                    null != o && t >= o && r("ExclusiveMaximum", o), null != a && t <= a && r("ExclusiveMinimum", a), null != s && t > s && r("InclusiveMaximum", s), null != u && t < u && r("InclusiveMinimum", u), null != c && t.length > c && r("MaxItems", c), null != l && t.length > l && r("MaxLength", l), null != d && t.length < d && r("MinItems", d), null != p && t.length < p && r("MinLength", p), null != f && t % f != 0 && r("MultipleOf", f), h && null === t.match(h) && r("Pattern", h), m && t.some((function(e, t, n) {
                        return n.indexOf(e) !== t
                    })) && r("UniqueItems", m)
                }
            }, e.prototype.serialize = function(e, t, n) {
                var r = {},
                    i = e.type.name;
                n || (n = e.serializedName), null !== i.match(/^Sequence$/gi) && (r = []), null != t || null == e.defaultValue && !e.isConstant || (t = e.defaultValue);
                var o = e.required,
                    s = e.nullable;
                if (o && s && void 0 === t) throw new Error(n + " cannot be undefined.");
                if (o && !s && null == t) throw new Error(n + " cannot be null or undefined.");
                if (!o && !1 === s && null === t) throw new Error(n + " cannot be null.");
                return null == t ? r = t : (this.validateConstraints(e, t, n), null !== i.match(/^any$/gi) ? r = t : null !== i.match(/^(Number|String|Boolean|Object|Stream|Uuid)$/gi) ? r = function(e, t, n) {
                    if (null != n)
                        if (null !== e.match(/^Number$/gi)) {
                            if ("number" != typeof n) throw new Error(t + " with value " + n + " must be of type number.")
                        } else if (null !== e.match(/^String$/gi)) {
                        if ("string" != typeof n.valueOf()) throw new Error(t + ' with value "' + n + '" must be of type string.')
                    } else if (null !== e.match(/^Uuid$/gi)) {
                        if ("string" != typeof n.valueOf() || !u.d(n)) throw new Error(t + ' with value "' + n + '" must be of type string and a valid uuid.')
                    } else if (null !== e.match(/^Boolean$/gi)) {
                        if ("boolean" != typeof n) throw new Error(t + " with value " + n + " must be of type boolean.")
                    } else if (null !== e.match(/^Stream$/gi)) {
                        var r = typeof n;
                        if (!("string" === r || "function" === r || n instanceof ArrayBuffer || ArrayBuffer.isView(n) || "function" == typeof Blob && n instanceof Blob)) throw new Error(t + " must be a string, Blob, ArrayBuffer, ArrayBufferView, or a function returning NodeJS.ReadableStream.")
                    }
                    return n
                }(i, n, t) : null !== i.match(/^Enum$/gi) ? r = function(e, t, n) {
                    if (!t) throw new Error("Please provide a set of allowedValues to validate " + e + " as an Enum Type.");
                    if (!t.some((function(e) {
                            return "string" == typeof e.valueOf() ? e.toLowerCase() === n.toLowerCase() : e === n
                        }))) throw new Error(n + " is not a valid value for " + e + ". The valid values are: " + JSON.stringify(t) + ".");
                    return n
                }(n, e.type.allowedValues, t) : null !== i.match(/^(Date|DateTime|TimeSpan|DateTimeRfc1123|UnixTime)$/gi) ? r = function(e, t, n) {
                    if (null != t)
                        if (null !== e.match(/^Date$/gi)) {
                            if (!(t instanceof Date || "string" == typeof t.valueOf() && !isNaN(Date.parse(t)))) throw new Error(n + " must be an instanceof Date or a string in ISO8601 format.");
                            t = t instanceof Date ? t.toISOString().substring(0, 10) : new Date(t).toISOString().substring(0, 10)
                        } else if (null !== e.match(/^DateTime$/gi)) {
                        if (!(t instanceof Date || "string" == typeof t.valueOf() && !isNaN(Date.parse(t)))) throw new Error(n + " must be an instanceof Date or a string in ISO8601 format.");
                        t = t instanceof Date ? t.toISOString() : new Date(t).toISOString()
                    } else if (null !== e.match(/^DateTimeRfc1123$/gi)) {
                        if (!(t instanceof Date || "string" == typeof t.valueOf() && !isNaN(Date.parse(t)))) throw new Error(n + " must be an instanceof Date or a string in RFC-1123 format.");
                        t = t instanceof Date ? t.toUTCString() : new Date(t).toUTCString()
                    } else if (null !== e.match(/^UnixTime$/gi)) {
                        if (!(t instanceof Date || "string" == typeof t.valueOf() && !isNaN(Date.parse(t)))) throw new Error(n + " must be an instanceof Date or a string in RFC-1123/ISO8601 format for it to be serialized in UnixTime/Epoch format.");
                        t = function(e) {
                            if (e) return "string" == typeof e.valueOf() && (e = new Date(e)), Math.floor(e.getTime() / 1e3)
                        }(t)
                    } else if (null !== e.match(/^TimeSpan$/gi)) {
                        if (!u.c(t)) throw new Error(n + ' must be a string in ISO 8601 format. Instead was "' + t + '".');
                        t = t
                    }
                    return t
                }(i, t, n) : null !== i.match(/^ByteArray$/gi) ? r = function(e, t) {
                    if (null != t) {
                        if (!(t instanceof Uint8Array)) throw new Error(e + " must be of type Uint8Array.");
                        t = a(t)
                    }
                    return t
                }(n, t) : null !== i.match(/^Base64Url$/gi) ? r = function(e, t) {
                    if (null != t) {
                        if (!(t instanceof Uint8Array)) throw new Error(e + " must be of type Uint8Array.");
                        t = function(e) {
                            if (e) {
                                if (!(e instanceof Uint8Array)) throw new Error("Please provide an input of type Uint8Array for converting to Base64Url.");
                                return function(e, t) {
                                    for (var n = e.length; n - 1 >= 0 && "=" === e[n - 1];) --n;
                                    return e.substr(0, n)
                                }(a(e)).replace(/\+/g, "-").replace(/\//g, "_")
                            }
                        }(t)
                    }
                    return t
                }(n, t) : null !== i.match(/^Sequence$/gi) ? r = function(e, t, n, r) {
                    if (!Array.isArray(n)) throw new Error(r + " must be of type Array.");
                    var i = t.type.element;
                    if (!i || "object" != typeof i) throw new Error('element" metadata for an Array must be defined in the mapper and it must of type "object" in ' + r + ".");
                    for (var o = [], a = 0; a < n.length; a++) o[a] = e.serialize(i, n[a], r);
                    return o
                }(this, e, t, n) : null !== i.match(/^Dictionary$/gi) ? r = function(e, t, n, r) {
                    if ("object" != typeof n) throw new Error(r + " must be of type object.");
                    var i = t.type.value;
                    if (!i || "object" != typeof i) throw new Error('"value" metadata for a Dictionary must be defined in the mapper and it must of type "object" in ' + r + ".");
                    for (var o = {}, a = 0, s = Object.keys(n); a < s.length; a++) {
                        var u = s[a];
                        o[u] = e.serialize(i, n[u], r + "." + u)
                    }
                    return o
                }(this, e, t, n) : null !== i.match(/^Composite$/gi) && (r = function(e, t, n, r) {
                    var i;
                    if (h(e, t) && (t = f(e, t, n, "clientName")), null != n) {
                        for (var o = {}, a = d(e, t, r), s = 0, u = Object.keys(a); s < u.length; s++) {
                            var c = u[s],
                                p = a[c];
                            if (!p.readOnly) {
                                var m = void 0,
                                    g = o;
                                if (e.isXML) m = p.xmlIsWrapped ? p.xmlName : p.xmlElementName || p.xmlName;
                                else {
                                    var y = l(p.serializedName);
                                    m = y.pop();
                                    for (var v = 0, _ = y; v < _.length; v++) {
                                        var b = _[v];
                                        null == g[b] && null != n[c] && (g[b] = {}), g = g[b]
                                    }
                                }
                                if (null != g) {
                                    var S = "" !== p.serializedName ? r + "." + p.serializedName : r,
                                        I = n[c],
                                        T = h(e, t);
                                    T && T.clientName === c && null == I && (I = t.serializedName);
                                    var w = e.serialize(p, I, S);
                                    void 0 !== w && null != m && (p.xmlIsAttribute ? (g.$ = g.$ || {}, g.$[m] = w) : p.xmlIsWrapped ? g[m] = ((i = {})[p.xmlElementName] = w, i) : g[m] = w)
                                }
                            }
                        }
                        var C = t.type.additionalProperties;
                        if (C) {
                            var E = Object.keys(a),
                                N = function(t) {
                                    E.every((function(e) {
                                        return e !== t
                                    })) && (o[t] = e.serialize(C, n[t], r + '["' + t + '"]'))
                                };
                            for (var O in n) N(O)
                        }
                        return o
                    }
                    return n
                }(this, e, t, n))), r
            }, e.prototype.deserialize = function(e, t, n) {
                if (null == t) return this.isXML && "Sequence" === e.type.name && !e.xmlIsWrapped && (t = []), t;
                var r, i = e.type.name;
                return n || (n = e.serializedName), null !== i.match(/^Composite$/gi) ? r = function(e, t, n, r) {
                    h(e, t) && (t = f(e, t, n, "serializedName"));
                    for (var i = d(e, t, r), o = {}, a = [], s = 0, u = Object.keys(i); s < u.length; s++) {
                        var c = u[s],
                            m = i[c],
                            g = l(i[c].serializedName);
                        a.push(g[0]);
                        var y = m.serializedName,
                            v = m.xmlName,
                            _ = m.xmlElementName,
                            b = r;
                        "" !== y && void 0 !== y && (b = r + "." + y);
                        var S = m.headerCollectionPrefix;
                        if (S) {
                            for (var I = {}, T = 0, w = Object.keys(n); T < w.length; T++) {
                                var C = w[T];
                                C.startsWith(S) && (I[C.substring(S.length)] = e.deserialize(m.type.value, n[C], b)), a.push(C)
                            }
                            o[c] = I
                        } else if (e.isXML)
                            if (m.xmlIsAttribute && n.$) o[c] = e.deserialize(m, n.$[v], b);
                            else {
                                var E = n[_ || v || y];
                                m.xmlIsWrapped && void 0 === (E = (E = n[v]) && E[_]) && (E = []), o[c] = e.deserialize(m, E, b)
                            }
                        else {
                            for (var N = void 0, O = n, P = 0, A = g; P < A.length; P++) {
                                var R = A[P];
                                if (!O) break;
                                O = O[R]
                            }
                            N = O;
                            var x = t.type.polymorphicDiscriminator;
                            x && m.serializedName === x.serializedName && null == N && (N = t.serializedName);
                            var D = void 0;
                            Array.isArray(n[c]) && "" === i[c].serializedName ? (N = n[c], o = e.deserialize(m, N, b)) : void 0 !== N && (D = e.deserialize(m, N, b), o[c] = D)
                        }
                    }
                    var j = t.type.additionalProperties;
                    if (j) {
                        var M = function(e) {
                            for (var t in i)
                                if (l(i[t].serializedName)[0] === e) return !1;
                            return !0
                        };
                        for (var B in n) M(B) && (o[B] = e.deserialize(j, n[B], r + '["' + B + '"]'))
                    } else if (n)
                        for (var L = 0, k = Object.keys(n); L < k.length; L++) void 0 !== o[c = k[L]] || a.includes(c) || p(c) || (o[c] = n[c]);
                    return o
                }(this, e, t, n) : (this.isXML && null != t.$ && null != t._ && (t = t._), null !== i.match(/^Number$/gi) ? (r = parseFloat(t), isNaN(r) && (r = t)) : null !== i.match(/^Boolean$/gi) ? r = "true" === t || "false" !== t && t : null !== i.match(/^(String|Enum|Object|Stream|Uuid|TimeSpan|any)$/gi) ? r = t : null !== i.match(/^(Date|DateTime|DateTimeRfc1123)$/gi) ? r = new Date(t) : null !== i.match(/^UnixTime$/gi) ? r = function(e) {
                    if (e) return new Date(1e3 * e)
                }(t) : null !== i.match(/^ByteArray$/gi) ? r = s(t) : null !== i.match(/^Base64Url$/gi) ? r = function(e) {
                    if (e) {
                        if (e && "string" != typeof e.valueOf()) throw new Error("Please provide an input of type string for converting to Uint8Array");
                        return s(e = e.replace(/\-/g, "+").replace(/\_/g, "/"))
                    }
                }(t) : null !== i.match(/^Sequence$/gi) ? r = function(e, t, n, r) {
                    var i = t.type.element;
                    if (!i || "object" != typeof i) throw new Error('element" metadata for an Array must be defined in the mapper and it must of type "object" in ' + r);
                    if (n) {
                        Array.isArray(n) || (n = [n]);
                        for (var o = [], a = 0; a < n.length; a++) o[a] = e.deserialize(i, n[a], r + "[" + a + "]");
                        return o
                    }
                    return n
                }(this, e, t, n) : null !== i.match(/^Dictionary$/gi) && (r = function(e, t, n, r) {
                    var i = t.type.value;
                    if (!i || "object" != typeof i) throw new Error('"value" metadata for a Dictionary must be defined in the mapper and it must of type "object" in ' + r);
                    if (n) {
                        for (var o = {}, a = 0, s = Object.keys(n); a < s.length; a++) {
                            var u = s[a];
                            o[u] = e.deserialize(i, n[u], r)
                        }
                        return o
                    }
                    return n
                }(this, e, t, n))), e.isConstant && (r = e.defaultValue), r
            }, e
        }();

    function l(e) {
        var t = [],
            n = "";
        if (e)
            for (var r = 0, i = e.split("."); r < i.length; r++) {
                var o = i[r];
                "\\" === o.charAt(o.length - 1) ? n += o.substr(0, o.length - 1) + "." : (n += o, t.push(n), n = "")
            }
        return t
    }

    function d(e, t, n) {
        var r = t.type.modelProperties;
        if (!r) {
            var i = t.type.className;
            if (!i) throw new Error('Class name for model "' + n + '" is not provided in the mapper "' + JSON.stringify(t, void 0, 2) + '".');
            var o = e.modelMappers[i];
            if (!o) throw new Error('mapper() cannot be null or undefined for model "' + i + '".');
            if (!(r = o.type.modelProperties)) throw new Error('modelProperties cannot be null or undefined in the mapper "' + JSON.stringify(o) + '" of type "' + i + '" for object "' + n + '".')
        }
        return r
    }

    function p(e) {
        return ["$", "_"].includes(e)
    }

    function f(e, t, n, r) {
        var i = h(e, t);
        if (i) {
            var o = i[r];
            if (null != o) {
                var a = n[o];
                if (null != a) {
                    var s = t.type.uberParent || t.type.className,
                        u = a === s ? a : s + "." + a,
                        c = e.modelMappers.discriminators[u];
                    c && (t = c)
                }
            }
        }
        return t
    }

    function h(e, t) {
        return t.type.polymorphicDiscriminator || m(e, t.type.uberParent) || m(e, t.type.className)
    }

    function m(e, t) {
        return t && e.modelMappers[t] && e.modelMappers[t].type.polymorphicDiscriminator
    }
    var g, y, v, _, b, S, I, T, w, C, E = function(e) {
        for (var t = {}, n = 0, r = ["Base64Url", "Boolean", "ByteArray", "Composite", "Date", "DateTime", "DateTimeRfc1123", "Dictionary", "Enum", "Number", "Object", "Sequence", "String", "Stream", "TimeSpan", "UnixTime"]; n < r.length; n++) {
            var i = r[n];
            t[i] = i
        }
        return t
    }();
    ! function(e) {
        e[e.Success = 0] = "Success", e[e.PartialSuccess = 1] = "PartialSuccess", e[e.Error = 2] = "Error", e[e.Disabled = 3] = "Disabled"
    }(g || (g = {})),
    function(e) {
        e[e.High = 0] = "High", e[e.Medium = 1] = "Medium", e[e.Low = 2] = "Low"
    }(y || (y = {})),
    function(e) {
        e[e.None = 0] = "None", e[e.OfficeOrthospeller = 1] = "OfficeOrthospeller", e[e.BingOneSpeller = 2] = "BingOneSpeller", e[e.ContextSpeller = 3] = "ContextSpeller", e[e.Grammar = 4] = "Grammar"
    }(v || (v = {})),
    function(e) {
        e[e.Unknown = 0] = "Unknown", e[e.DocumentText = 1] = "DocumentText"
    }(_ || (_ = {})),
    function(e) {
        e[e.Default = 0] = "Default", e[e.Word = 1] = "Word", e[e.Phrase = 2] = "Phrase", e[e.Sentence = 4] = "Sentence", e[e.Paragraph = 8] = "Paragraph", e[e.Page = 16] = "Page", e[e.Section = 32] = "Section", e[e.Chapter = 64] = "Chapter", e[e.Document = 256] = "Document", e[e.RawChars = 16384] = "RawChars"
    }(b || (b = {})),
    function(e) {
        e[e.IsResume = 0] = "IsResume"
    }(S || (S = {})),
    function(e) {
        e[e.Ignore = 0] = "Ignore", e[e.IgnoreAll = 1] = "IgnoreAll", e[e.AddToDictionary = 2] = "AddToDictionary", e[e.Delete = 3] = "Delete", e[e.ChangeSugg0 = 4] = "ChangeSugg0", e[e.ChangeSugg1 = 5] = "ChangeSugg1", e[e.ChangeSugg2 = 6] = "ChangeSugg2", e[e.ChangeSuggOther = 7] = "ChangeSuggOther", e[e.ChangeAllSugg0 = 8] = "ChangeAllSugg0", e[e.ChangeAllSugg1 = 9] = "ChangeAllSugg1", e[e.ChangeAllSugg2 = 10] = "ChangeAllSugg2", e[e.ChangeAllSuggOther = 11] = "ChangeAllSuggOther", e[e.ClickNoAction = 12] = "ClickNoAction", e[e.DoNotCheckThisIssue = 13] = "DoNotCheckThisIssue", e[e.ManualEdit = 14] = "ManualEdit"
    }(I || (I = {})),
    function(e) {
        e[e.Unknown = 0] = "Unknown", e[e.Paragraph = 1] = "Paragraph", e[e.Group = 2] = "Group", e[e.Page = 3] = "Page", e[e.Document = 4] = "Document"
    }(T || (T = {})),
    function(e) {
        e[e.None = 0] = "None", e[e.Active = 1] = "Active", e[e.Provisional = 2] = "Provisional"
    }(w || (w = {})),
    function(e) {
        e[e.None = 0] = "None", e[e.Consistency = 1] = "Consistency"
    }(C || (C = {}));
    var N = {
            serializedName: "Email",
            type: {
                name: "Composite",
                className: "Email",
                modelProperties: {
                    id: {
                        serializedName: "Id",
                        type: {
                            name: "String"
                        }
                    },
                    subject: {
                        serializedName: "Subject",
                        type: {
                            name: "String"
                        }
                    },
                    body: {
                        serializedName: "Body",
                        type: {
                            name: "String"
                        }
                    },
                    sender: {
                        serializedName: "Sender",
                        type: {
                            name: "String"
                        }
                    },
                    instrumentationId: {
                        serializedName: "InstrumentationId",
                        type: {
                            name: "String"
                        }
                    },
                    snippet: {
                        serializedName: "Snippet",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        O = {
            serializedName: "File",
            type: {
                name: "Composite",
                className: "File",
                modelProperties: {
                    id: {
                        serializedName: "Id",
                        type: {
                            name: "String"
                        }
                    },
                    name: {
                        serializedName: "Name",
                        type: {
                            name: "String"
                        }
                    },
                    extension: {
                        serializedName: "Extension",
                        type: {
                            name: "String"
                        }
                    },
                    uri: {
                        serializedName: "Uri",
                        type: {
                            name: "String"
                        }
                    },
                    instrumentationId: {
                        serializedName: "InstrumentationId",
                        type: {
                            name: "String"
                        }
                    },
                    snippet: {
                        serializedName: "Snippet",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        P = {
            serializedName: "Acronym",
            type: {
                name: "Composite",
                className: "Acronym",
                modelProperties: {
                    description: {
                        serializedName: "Description",
                        type: {
                            name: "String"
                        }
                    },
                    id: {
                        serializedName: "Id",
                        type: {
                            name: "String"
                        }
                    },
                    instrumentationId: {
                        serializedName: "InstrumentationId",
                        type: {
                            name: "String"
                        }
                    },
                    name: {
                        serializedName: "Name",
                        type: {
                            name: "String"
                        }
                    },
                    source: {
                        serializedName: "Source",
                        type: {
                            name: "String"
                        }
                    },
                    sourceEmail: {
                        serializedName: "SourceEmail",
                        type: {
                            name: "Composite",
                            className: "Email"
                        }
                    },
                    sourceFile: {
                        serializedName: "SourceFile",
                        type: {
                            name: "Composite",
                            className: "File"
                        }
                    },
                    sourceType: {
                        serializedName: "SourceType",
                        type: {
                            name: "String"
                        }
                    },
                    type: {
                        serializedName: "Type",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        A = {
            serializedName: "AcronymsResponse",
            type: {
                name: "Composite",
                className: "AcronymsResponse",
                modelProperties: {
                    transactionId: {
                        serializedName: "TransactionId",
                        type: {
                            name: "String"
                        }
                    },
                    acronyms: {
                        serializedName: "Acronyms",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Acronym"
                                }
                            }
                        }
                    }
                }
            }
        },
        R = {
            serializedName: "CommonAppIdProperty",
            type: {
                name: "Composite",
                className: "CommonAppIdProperty",
                modelProperties: {
                    appId: {
                        serializedName: "AppId",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        x = {
            serializedName: "BrowserExtensionRequestV1",
            type: {
                name: "Composite",
                className: "BrowserExtensionRequestV1",
                modelProperties: o.__assign({}, R.type.modelProperties, {
                    tenantId: {
                        serializedName: "TenantId",
                        type: {
                            name: "String"
                        }
                    },
                    clientId: {
                        serializedName: "ClientId",
                        type: {
                            name: "String"
                        }
                    }
                })
            }
        },
        D = {
            serializedName: "BrowserExtensionResponseV1",
            type: {
                name: "Composite",
                className: "BrowserExtensionResponseV1",
                modelProperties: {
                    responseStatus: {
                        serializedName: "ResponseStatus",
                        defaultValue: 0,
                        type: {
                            name: "Enum",
                            allowedValues: [0, 1, 2, 3]
                        }
                    },
                    requestId: {
                        serializedName: "RequestId",
                        type: {
                            name: "String"
                        }
                    },
                    useTileCheck: {
                        serializedName: "UseTileCheck",
                        defaultValue: !1,
                        type: {
                            name: "Boolean"
                        }
                    },
                    disabledWebSites: {
                        serializedName: "DisabledWebSites",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    },
                    allowedUrls: {
                        serializedName: "AllowedUrls",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    },
                    disabledGrammars: {
                        serializedName: "DisabledGrammars",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    },
                    versionEmergencyOverrides: {
                        serializedName: "VersionEmergencyOverrides",
                        type: {
                            name: "Dictionary",
                            value: {
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    },
                    featureFlags: {
                        serializedName: "FeatureFlags",
                        type: {
                            name: "Dictionary",
                            value: {
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    },
                    descriptors: {
                        serializedName: "Descriptors",
                        type: {
                            name: "String"
                        }
                    },
                    spellCheckAttributes: {
                        serializedName: "SpellCheckAttributes",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    },
                    styleObserverIntervalTime: {
                        serializedName: "StyleObserverIntervalTime",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    styleSampleTime: {
                        serializedName: "StyleSampleTime",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    rootContentMaxLengthInChars: {
                        serializedName: "RootContentMaxLengthInChars",
                        defaultValue: 2e3,
                        type: {
                            name: "Number"
                        }
                    },
                    schedulerDefaultWaitingTime: {
                        serializedName: "SchedulerDefaultWaitingTime",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    schedulerDefaultWaitingTimeIncrement: {
                        serializedName: "SchedulerDefaultWaitingTimeIncrement",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    schedulerDefaultMaxTime: {
                        serializedName: "SchedulerDefaultMaxTime",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    refreshCritiqueWaitingTime: {
                        serializedName: "RefreshCritiqueWaitingTime",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    requestCritiqueDelay: {
                        serializedName: "RequestCritiqueDelay",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    enableDirtyRangeAutoRehydration: {
                        serializedName: "EnableDirtyRangeAutoRehydration",
                        defaultValue: !1,
                        type: {
                            name: "Boolean"
                        }
                    },
                    telemetryTenant: {
                        serializedName: "TelemetryTenant",
                        type: {
                            name: "String"
                        }
                    },
                    logGroupName: {
                        serializedName: "LogGroupName",
                        type: {
                            name: "String"
                        }
                    },
                    sendToAria: {
                        serializedName: "SendToAria",
                        defaultValue: !1,
                        type: {
                            name: "Boolean"
                        }
                    },
                    intervalForActivityCleanup: {
                        serializedName: "IntervalForActivityCleanup",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    maxAllowedTimeForActivities: {
                        serializedName: "MaxAllowedTimeForActivities",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    calloutHoverTimeout: {
                        serializedName: "CalloutHoverTimeout",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    maxSuggestionItemsDisplayNumber: {
                        serializedName: "MaxSuggestionItemsDisplayNumber",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    }
                }
            }
        },
        j = {
            serializedName: "Descriptor",
            type: {
                name: "Composite",
                className: "Descriptor",
                modelProperties: {
                    name: {
                        required: !0,
                        serializedName: "Name",
                        type: {
                            name: "String"
                        }
                    },
                    value: {
                        required: !0,
                        serializedName: "Value",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        M = {
            serializedName: "CommonLanguageIdProperty",
            type: {
                name: "Composite",
                className: "CommonLanguageIdProperty",
                modelProperties: {
                    languageId: {
                        serializedName: "LanguageId",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        B = {
            serializedName: "CritiqueTypeOption",
            type: {
                name: "Composite",
                className: "CritiqueTypeOption",
                modelProperties: o.__assign({}, M.type.modelProperties, {
                    id: {
                        required: !0,
                        serializedName: "Id",
                        type: {
                            name: "Uuid"
                        }
                    },
                    name: {
                        serializedName: "Name",
                        type: {
                            name: "String"
                        }
                    },
                    typeName: {
                        serializedName: "TypeName",
                        type: {
                            name: "String"
                        }
                    },
                    value: {
                        required: !0,
                        serializedName: "Value",
                        type: {
                            name: "String"
                        }
                    }
                })
            }
        },
        L = {
            serializedName: "Suggestion",
            type: {
                name: "Composite",
                className: "Suggestion",
                modelProperties: {
                    text: {
                        required: !0,
                        serializedName: "Text",
                        type: {
                            name: "String"
                        }
                    },
                    description: {
                        serializedName: "Description",
                        type: {
                            name: "String"
                        }
                    },
                    confidenceLevel: {
                        serializedName: "ConfidenceLevel",
                        type: {
                            name: "Enum",
                            allowedValues: [0, 1, 2]
                        }
                    },
                    source: {
                        serializedName: "Source",
                        type: {
                            name: "Enum",
                            allowedValues: [0, 1, 2, 3, 4]
                        }
                    },
                    action: {
                        required: !0,
                        serializedName: "Action",
                        type: {
                            name: "Number"
                        }
                    },
                    bucketId: {
                        serializedName: "BucketId",
                        type: {
                            name: "Number"
                        }
                    },
                    numberOfInstances: {
                        serializedName: "NumberOfInstances",
                        type: {
                            name: "Number"
                        }
                    }
                }
            }
        },
        k = {
            serializedName: "CommonAppVersionProperty",
            type: {
                name: "Composite",
                className: "CommonAppVersionProperty",
                modelProperties: {
                    appVersion: {
                        serializedName: "AppVersion",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        z = {
            serializedName: "ClientSuggestion",
            type: {
                name: "Composite",
                className: "ClientSuggestion",
                modelProperties: o.__assign({}, k.type.modelProperties, {
                    start: {
                        serializedName: "Start",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    length: {
                        serializedName: "Length",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    suggestions: {
                        serializedName: "Suggestions",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Suggestion"
                                }
                            }
                        }
                    }
                })
            }
        },
        q = {
            serializedName: "Tiling",
            type: {
                name: "Composite",
                className: "Tiling",
                modelProperties: {
                    tilingType: {
                        serializedName: "TilingType",
                        type: {
                            name: "Enum",
                            allowedValues: [0, 1]
                        }
                    },
                    paragraphIds: {
                        serializedName: "ParagraphIds",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    },
                    paragraphRevisionIds: {
                        serializedName: "ParagraphRevisionIds",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    },
                    numberOfParagraphsInTiling: {
                        nullable: !0,
                        serializedName: "NumberOfParagraphsInTiling",
                        type: {
                            name: "Number"
                        }
                    }
                }
            }
        },
        U = {
            serializedName: "DocumentStructureMetadata",
            type: {
                name: "Composite",
                className: "DocumentStructureMetadata",
                modelProperties: {
                    paragraphId: {
                        serializedName: "ParagraphId",
                        type: {
                            name: "String"
                        }
                    },
                    paragraphRevisionId: {
                        serializedName: "ParagraphRevisionId",
                        type: {
                            name: "String"
                        }
                    },
                    tileId: {
                        serializedName: "TileId",
                        type: {
                            name: "String"
                        }
                    },
                    revisionId: {
                        serializedName: "RevisionId",
                        type: {
                            name: "String"
                        }
                    },
                    requestOrderInSession: {
                        serializedName: "RequestOrderInSession",
                        type: {
                            name: "Number"
                        }
                    },
                    areTilingsComplete: {
                        serializedName: "AreTilingsComplete",
                        defaultValue: !1,
                        type: {
                            name: "Boolean"
                        }
                    },
                    tilings: {
                        serializedName: "Tilings",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Tiling"
                                }
                            }
                        }
                    }
                }
            }
        },
        V = {
            serializedName: "CheckRequestV1",
            type: {
                name: "Composite",
                className: "CheckRequestV1",
                modelProperties: {
                    appId: {
                        required: !0,
                        serializedName: "AppId",
                        type: {
                            name: "String"
                        }
                    },
                    appVersion: {
                        serializedName: "AppVersion",
                        type: {
                            name: "String"
                        }
                    },
                    descriptors: {
                        serializedName: "Descriptors",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Descriptor"
                                }
                            }
                        }
                    },
                    languageId: {
                        required: !0,
                        serializedName: "LanguageId",
                        type: {
                            name: "String"
                        }
                    },
                    languageUXId: {
                        serializedName: "LanguageUXId",
                        type: {
                            name: "String"
                        }
                    },
                    runOnProfileId: {
                        serializedName: "RunOnProfileId",
                        type: {
                            name: "Uuid"
                        }
                    },
                    textUnit: {
                        serializedName: "TextUnit",
                        type: {
                            name: "Enum",
                            allowedValues: [0, 1, 2, 4, 8, 16, 32, 64, 256, 16384]
                        }
                    },
                    overriddenCritiqueTypeOptions: {
                        serializedName: "OverriddenCritiqueTypeOptions",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "CritiqueTypeOption"
                                }
                            }
                        }
                    },
                    clientSuggestions: {
                        serializedName: "ClientSuggestions",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "ClientSuggestion"
                                }
                            }
                        }
                    },
                    length: {
                        serializedName: "Length",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    requestId: {
                        serializedName: "RequestId",
                        type: {
                            name: "Uuid"
                        }
                    },
                    start: {
                        serializedName: "Start",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    text: {
                        required: !0,
                        serializedName: "Text",
                        type: {
                            name: "String"
                        }
                    },
                    documentStructureMetadata: {
                        serializedName: "DocumentStructureMetadata",
                        type: {
                            name: "Composite",
                            className: "DocumentStructureMetadata"
                        }
                    }
                }
            }
        },
        W = {
            serializedName: "CheckedSpan",
            type: {
                name: "Composite",
                className: "CheckedSpan",
                modelProperties: {
                    start: {
                        required: !0,
                        serializedName: "Start",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    length: {
                        required: !0,
                        serializedName: "Length",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    }
                }
            }
        },
        F = {
            serializedName: "Critique",
            type: {
                name: "Composite",
                className: "Critique",
                modelProperties: {
                    traceId: {
                        required: !0,
                        serializedName: "TraceId",
                        type: {
                            name: "Uuid"
                        }
                    },
                    typeId: {
                        required: !0,
                        serializedName: "TypeId",
                        type: {
                            name: "Uuid"
                        }
                    },
                    categoryTitle: {
                        required: !0,
                        serializedName: "CategoryTitle",
                        type: {
                            name: "String"
                        }
                    },
                    context: {
                        serializedName: "Context",
                        type: {
                            name: "String"
                        }
                    },
                    start: {
                        required: !0,
                        serializedName: "Start",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    startInContext: {
                        serializedName: "StartInContext",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    length: {
                        required: !0,
                        serializedName: "Length",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    priority: {
                        required: !0,
                        serializedName: "Priority",
                        type: {
                            name: "Number"
                        }
                    },
                    paragraphId: {
                        serializedName: "ParagraphId",
                        type: {
                            name: "String"
                        }
                    },
                    paragraphRevisionId: {
                        serializedName: "ParagraphRevisionId",
                        type: {
                            name: "String"
                        }
                    },
                    tileId: {
                        serializedName: "TileId",
                        type: {
                            name: "String"
                        }
                    },
                    revisionId: {
                        serializedName: "RevisionId",
                        type: {
                            name: "String"
                        }
                    },
                    supportedActions: {
                        serializedName: "SupportedActions",
                        type: {
                            name: "Number"
                        }
                    },
                    explanationTitle: {
                        serializedName: "ExplanationTitle",
                        type: {
                            name: "String"
                        }
                    },
                    explanationLabel: {
                        serializedName: "ExplanationLabel",
                        type: {
                            name: "String"
                        }
                    },
                    explanation: {
                        serializedName: "Explanation",
                        type: {
                            name: "String"
                        }
                    },
                    isDocumentLevelCritique: {
                        serializedName: "IsDocumentLevelCritique",
                        defaultValue: !1,
                        type: {
                            name: "Boolean"
                        }
                    },
                    suggestions: {
                        required: !0,
                        serializedName: "Suggestions",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Suggestion"
                                }
                            }
                        }
                    }
                }
            }
        },
        G = {
            serializedName: "MetadataContent",
            type: {
                name: "Composite",
                className: "MetadataContent",
                modelProperties: {
                    metadataType: {
                        serializedName: "MetadataType",
                        type: {
                            name: "Enum",
                            allowedValues: [0]
                        }
                    },
                    value: {
                        serializedName: "Value",
                        type: {
                            name: "String"
                        }
                    },
                    typeId: {
                        serializedName: "TypeId",
                        type: {
                            name: "Uuid"
                        }
                    }
                }
            }
        },
        H = {
            serializedName: "CommonTextUnitProperty",
            type: {
                name: "Composite",
                className: "CommonTextUnitProperty",
                modelProperties: {
                    textUnit: {
                        serializedName: "TextUnit",
                        type: {
                            name: "Enum",
                            allowedValues: [0, 1, 2, 4, 8, 16, 32, 64, 256, 16384]
                        }
                    }
                }
            }
        },
        $ = {
            serializedName: "Metadata",
            type: {
                name: "Composite",
                className: "Metadata",
                modelProperties: o.__assign({}, H.type.modelProperties, {
                    textUnitId: {
                        serializedName: "TextUnitId",
                        type: {
                            name: "Number"
                        }
                    },
                    textUnitRevisionId: {
                        serializedName: "TextUnitRevisionId",
                        type: {
                            name: "Number"
                        }
                    },
                    contents: {
                        serializedName: "Contents",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "MetadataContent"
                                }
                            }
                        }
                    }
                })
            }
        },
        J = {
            serializedName: "ReadingConcept",
            type: {
                name: "Composite",
                className: "ReadingConcept",
                modelProperties: {
                    id: {
                        serializedName: "Id",
                        type: {
                            name: "String"
                        }
                    },
                    score: {
                        serializedName: "Score",
                        type: {
                            name: "Number"
                        }
                    }
                }
            }
        },
        K = {
            serializedName: "ReadingCritique",
            type: {
                name: "Composite",
                className: "ReadingCritique",
                modelProperties: {
                    traceId: {
                        serializedName: "TraceId",
                        type: {
                            name: "Uuid"
                        }
                    },
                    typeId: {
                        serializedName: "TypeId",
                        type: {
                            name: "Uuid"
                        }
                    },
                    categoryTitle: {
                        serializedName: "CategoryTitle",
                        type: {
                            name: "String"
                        }
                    },
                    context: {
                        serializedName: "Context",
                        type: {
                            name: "String"
                        }
                    },
                    start: {
                        serializedName: "Start",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    startInContext: {
                        serializedName: "StartInContext",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    length: {
                        serializedName: "Length",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    priority: {
                        serializedName: "Priority",
                        type: {
                            name: "Number"
                        }
                    },
                    paragraphId: {
                        serializedName: "ParagraphId",
                        type: {
                            name: "String"
                        }
                    },
                    paragraphRevisionId: {
                        serializedName: "ParagraphRevisionId",
                        type: {
                            name: "String"
                        }
                    },
                    isDocumentLevelCritique: {
                        serializedName: "IsDocumentLevelCritique",
                        defaultValue: !1,
                        type: {
                            name: "Boolean"
                        }
                    },
                    readingConcepts: {
                        serializedName: "ReadingConcepts",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "ReadingConcept"
                                }
                            }
                        }
                    }
                }
            }
        },
        X = {
            serializedName: "ReadingResponse",
            type: {
                name: "Composite",
                className: "ReadingResponse",
                modelProperties: {
                    acronymsResponse: {
                        serializedName: "AcronymsResponse",
                        type: {
                            name: "Composite",
                            className: "AcronymsResponse"
                        }
                    }
                }
            }
        },
        Q = {
            serializedName: "CommonResponseStatusProperty",
            type: {
                name: "Composite",
                className: "CommonResponseStatusProperty",
                modelProperties: {
                    responseStatus: {
                        serializedName: "ResponseStatus",
                        defaultValue: 0,
                        type: {
                            name: "Enum",
                            allowedValues: [0, 1, 2, 3]
                        }
                    }
                }
            }
        },
        Y = {
            serializedName: "CheckResponseV1",
            type: {
                name: "Composite",
                className: "CheckResponseV1",
                modelProperties: o.__assign({}, Q.type.modelProperties, {
                    requestId: {
                        serializedName: "RequestId",
                        type: {
                            name: "Uuid"
                        }
                    },
                    checkedSpans: {
                        serializedName: "CheckedSpans",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "CheckedSpan"
                                }
                            }
                        }
                    },
                    critiques: {
                        required: !0,
                        serializedName: "Critiques",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Critique"
                                }
                            }
                        }
                    },
                    metadata: {
                        serializedName: "Metadata",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Metadata"
                                }
                            }
                        }
                    },
                    readingCritiques: {
                        serializedName: "ReadingCritiques",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "ReadingCritique"
                                }
                            }
                        }
                    },
                    readingResponse: {
                        serializedName: "ReadingResponse",
                        type: {
                            name: "Composite",
                            className: "ReadingResponse"
                        }
                    }
                })
            }
        },
        Z = {
            serializedName: "CommonCritique",
            type: {
                name: "Composite",
                className: "CommonCritique",
                modelProperties: {
                    traceId: {
                        serializedName: "TraceId",
                        type: {
                            name: "Uuid"
                        }
                    },
                    typeId: {
                        serializedName: "TypeId",
                        type: {
                            name: "Uuid"
                        }
                    },
                    categoryTitle: {
                        serializedName: "CategoryTitle",
                        type: {
                            name: "String"
                        }
                    },
                    context: {
                        serializedName: "Context",
                        type: {
                            name: "String"
                        }
                    },
                    start: {
                        serializedName: "Start",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    startInContext: {
                        serializedName: "StartInContext",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    length: {
                        serializedName: "Length",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    priority: {
                        serializedName: "Priority",
                        type: {
                            name: "Number"
                        }
                    }
                }
            }
        },
        ee = {
            serializedName: "CommonDescriptorsProperty",
            type: {
                name: "Composite",
                className: "CommonDescriptorsProperty",
                modelProperties: {
                    descriptors: {
                        serializedName: "Descriptors",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Descriptor"
                                }
                            }
                        }
                    }
                }
            }
        },
        te = {
            serializedName: "CommonLanguageUXIdProperty",
            type: {
                name: "Composite",
                className: "CommonLanguageUXIdProperty",
                modelProperties: {
                    languageUXId: {
                        serializedName: "LanguageUXId",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        ne = {
            serializedName: "CommonOverriddenCritiqueTypeOptions",
            type: {
                name: "Composite",
                className: "CommonOverriddenCritiqueTypeOptions",
                modelProperties: {
                    overriddenCritiqueTypeOptions: {
                        serializedName: "OverriddenCritiqueTypeOptions",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "CritiqueTypeOption"
                                }
                            }
                        }
                    }
                }
            }
        },
        re = {
            serializedName: "CommonParagraphIdProperty",
            type: {
                name: "Composite",
                className: "CommonParagraphIdProperty",
                modelProperties: {
                    paragraphId: {
                        serializedName: "ParagraphId",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        ie = {
            serializedName: "CommonParagraphRevisionIdProperty",
            type: {
                name: "Composite",
                className: "CommonParagraphRevisionIdProperty",
                modelProperties: {
                    paragraphRevisionId: {
                        serializedName: "ParagraphRevisionId",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        oe = {
            serializedName: "CommonRequestIdProperty",
            type: {
                name: "Composite",
                className: "CommonRequestIdProperty",
                modelProperties: {
                    requestId: {
                        serializedName: "RequestId",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        ae = {
            serializedName: "CommonTileIdProperty",
            type: {
                name: "Composite",
                className: "CommonTileIdProperty",
                modelProperties: {
                    tileId: {
                        serializedName: "TileId",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        se = {
            serializedName: "CommonRevisionIdProperty",
            type: {
                name: "Composite",
                className: "CommonRevisionIdProperty",
                modelProperties: {
                    revisionId: {
                        serializedName: "RevisionId",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        ue = {
            serializedName: "CommonRunOnProfileIdProperty",
            type: {
                name: "Composite",
                className: "CommonRunOnProfileIdProperty",
                modelProperties: {
                    runOnProfileId: {
                        serializedName: "RunOnProfileId",
                        type: {
                            name: "Uuid"
                        }
                    }
                }
            }
        },
        ce = {
            serializedName: "ConfigRequestV1",
            type: {
                name: "Composite",
                className: "ConfigRequestV1",
                modelProperties: {
                    appId: {
                        required: !0,
                        serializedName: "AppId",
                        type: {
                            name: "String"
                        }
                    },
                    appVersion: {
                        serializedName: "AppVersion",
                        type: {
                            name: "String"
                        }
                    },
                    descriptors: {
                        serializedName: "Descriptors",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Descriptor"
                                }
                            }
                        }
                    },
                    languageId: {
                        required: !0,
                        serializedName: "LanguageId",
                        type: {
                            name: "String"
                        }
                    },
                    languageUXId: {
                        serializedName: "LanguageUXId",
                        type: {
                            name: "String"
                        }
                    },
                    requestId: {
                        serializedName: "RequestId",
                        type: {
                            name: "String"
                        }
                    },
                    runOnProfileId: {
                        serializedName: "RunOnProfileId",
                        type: {
                            name: "Uuid"
                        }
                    }
                }
            }
        },
        le = {
            serializedName: "CritiqueTypeInfo",
            type: {
                name: "Composite",
                className: "CritiqueTypeInfo",
                modelProperties: {
                    id: {
                        required: !0,
                        serializedName: "Id",
                        type: {
                            name: "Uuid"
                        }
                    },
                    name: {
                        required: !0,
                        serializedName: "Name",
                        type: {
                            name: "String"
                        }
                    },
                    isBinaryCritiqueType: {
                        serializedName: "IsBinaryCritiqueType",
                        type: {
                            name: "Boolean"
                        }
                    },
                    critiqueTypeValues: {
                        serializedName: "CritiqueTypeValues",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    },
                    defaultCritiqueValue: {
                        required: !0,
                        serializedName: "DefaultCritiqueValue",
                        type: {
                            name: "Number"
                        }
                    },
                    critiquePriority: {
                        serializedName: "CritiquePriority",
                        type: {
                            name: "Number"
                        }
                    },
                    critiqueTag: {
                        serializedName: "CritiqueTag",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        de = {
            serializedName: "CritiqueCategoryInfo",
            type: {
                name: "Composite",
                className: "CritiqueCategoryInfo",
                modelProperties: {
                    id: {
                        required: !0,
                        serializedName: "Id",
                        type: {
                            name: "Uuid"
                        }
                    },
                    name: {
                        required: !0,
                        serializedName: "Name",
                        type: {
                            name: "String"
                        }
                    },
                    critiqueTypeInfoList: {
                        serializedName: "CritiqueTypeInfoList",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "CritiqueTypeInfo"
                                }
                            }
                        }
                    }
                }
            }
        },
        pe = {
            serializedName: "Profile",
            type: {
                name: "Composite",
                className: "Profile",
                modelProperties: o.__assign({}, M.type.modelProperties, {
                    id: {
                        required: !0,
                        serializedName: "Id",
                        type: {
                            name: "Uuid"
                        }
                    },
                    title: {
                        serializedName: "Title",
                        type: {
                            name: "String"
                        }
                    },
                    default: {
                        serializedName: "Default",
                        type: {
                            name: "Boolean"
                        }
                    },
                    critiqueCategoryInfoList: {
                        required: !0,
                        serializedName: "CritiqueCategoryInfoList",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "CritiqueCategoryInfo"
                                }
                            }
                        }
                    }
                })
            }
        },
        fe = {
            serializedName: "ConfigResponseV1",
            type: {
                name: "Composite",
                className: "ConfigResponseV1",
                modelProperties: {
                    responseStatus: {
                        required: !0,
                        serializedName: "ResponseStatus",
                        defaultValue: 0,
                        type: {
                            name: "Enum",
                            allowedValues: [0, 1, 2, 3]
                        }
                    },
                    requestId: {
                        required: !0,
                        serializedName: "RequestId",
                        type: {
                            name: "String"
                        }
                    },
                    profiles: {
                        required: !0,
                        serializedName: "Profiles",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Profile"
                                }
                            }
                        }
                    }
                }
            }
        },
        he = {
            serializedName: "ConfigRequestV2",
            type: {
                name: "Composite",
                className: "ConfigRequestV2",
                modelProperties: {
                    appId: {
                        required: !0,
                        serializedName: "AppId",
                        type: {
                            name: "String"
                        }
                    },
                    appVersion: {
                        serializedName: "AppVersion",
                        type: {
                            name: "String"
                        }
                    },
                    descriptors: {
                        serializedName: "Descriptors",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Descriptor"
                                }
                            }
                        }
                    },
                    languageId: {
                        required: !0,
                        serializedName: "LanguageId",
                        type: {
                            name: "String"
                        }
                    },
                    languageUXId: {
                        serializedName: "LanguageUXId",
                        type: {
                            name: "String"
                        }
                    },
                    runOnProfileId: {
                        serializedName: "RunOnProfileId",
                        type: {
                            name: "Uuid"
                        }
                    }
                }
            }
        },
        me = {
            serializedName: "ConfigResponseV2",
            type: {
                name: "Composite",
                className: "ConfigResponseV2",
                modelProperties: o.__assign({}, Q.type.modelProperties, {
                    critiqueCategoryInfoList: {
                        required: !0,
                        serializedName: "CritiqueCategoryInfoList",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "CritiqueCategoryInfo"
                                }
                            }
                        }
                    }
                })
            }
        },
        ge = {
            serializedName: "InsightsRequestV1",
            type: {
                name: "Composite",
                className: "InsightsRequestV1",
                modelProperties: {
                    appId: {
                        required: !0,
                        serializedName: "AppId",
                        type: {
                            name: "String"
                        }
                    },
                    languageId: {
                        required: !0,
                        serializedName: "LanguageId",
                        type: {
                            name: "String"
                        }
                    },
                    text: {
                        required: !0,
                        serializedName: "Text",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        ye = {
            serializedName: "InsightsResponseV1_AnalyzerData",
            type: {
                name: "Composite",
                className: "InsightsResponseV1AnalyzerData",
                modelProperties: {
                    contentWordsCount: {
                        serializedName: "ContentWordsCount",
                        type: {
                            name: "Number"
                        }
                    },
                    functionalWordsCount: {
                        serializedName: "FunctionalWordsCount",
                        type: {
                            name: "Number"
                        }
                    },
                    pronounsCount: {
                        serializedName: "PronounsCount",
                        type: {
                            name: "Number"
                        }
                    },
                    sentencesCount: {
                        serializedName: "SentencesCount",
                        type: {
                            name: "Number"
                        }
                    },
                    syllablesCount: {
                        serializedName: "SyllablesCount",
                        type: {
                            name: "Number"
                        }
                    },
                    wordsCount: {
                        serializedName: "WordsCount",
                        type: {
                            name: "Number"
                        }
                    },
                    wordFrequency: {
                        serializedName: "WordFrequency",
                        type: {
                            name: "Number"
                        }
                    },
                    wordCharactersCount: {
                        serializedName: "WordCharactersCount",
                        type: {
                            name: "Number"
                        }
                    },
                    semicolonsCount: {
                        serializedName: "SemicolonsCount",
                        type: {
                            name: "Number"
                        }
                    },
                    wordsLongerThan8Count: {
                        serializedName: "WordsLongerThan8Count",
                        type: {
                            name: "Number"
                        }
                    }
                }
            }
        },
        ve = {
            serializedName: "InsightsResponseV1",
            type: {
                name: "Composite",
                className: "InsightsResponseV1",
                modelProperties: {
                    responseStatus: {
                        serializedName: "ResponseStatus",
                        defaultValue: 0,
                        type: {
                            name: "Enum",
                            allowedValues: [0, 1, 2, 3]
                        }
                    },
                    requestId: {
                        serializedName: "RequestId",
                        type: {
                            name: "String"
                        }
                    },
                    analyzerData: {
                        serializedName: "AnalyzerData",
                        type: {
                            name: "Composite",
                            className: "InsightsResponseV1AnalyzerData"
                        }
                    }
                }
            }
        },
        _e = {
            serializedName: "InstrumentationRequestV1",
            type: {
                name: "Composite",
                className: "InstrumentationRequestV1",
                modelProperties: {
                    appId: {
                        required: !0,
                        serializedName: "AppId",
                        type: {
                            name: "String"
                        }
                    },
                    languageId: {
                        required: !0,
                        serializedName: "LanguageId",
                        type: {
                            name: "String"
                        }
                    },
                    descriptors: {
                        serializedName: "Descriptors",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Descriptor"
                                }
                            }
                        }
                    },
                    traceId: {
                        required: !0,
                        serializedName: "TraceId",
                        type: {
                            name: "Uuid"
                        }
                    },
                    critiqueGenerationTime: {
                        serializedName: "CritiqueGenerationTime",
                        type: {
                            name: "Number"
                        }
                    },
                    critiquePriority: {
                        required: !0,
                        serializedName: "CritiquePriority",
                        type: {
                            name: "Number"
                        }
                    },
                    critiqueTypeId: {
                        required: !0,
                        serializedName: "CritiqueTypeId",
                        type: {
                            name: "Uuid"
                        }
                    },
                    eventId: {
                        required: !0,
                        serializedName: "EventId",
                        type: {
                            name: "Enum",
                            allowedValues: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
                        }
                    },
                    flaggedText: {
                        required: !0,
                        serializedName: "FlaggedText",
                        constraints: {
                            MaxLength: 2e4,
                            MinLength: 1
                        },
                        type: {
                            name: "String"
                        }
                    },
                    metadata: {
                        serializedName: "Metadata",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    },
                    originalText: {
                        serializedName: "OriginalText",
                        type: {
                            name: "String"
                        }
                    },
                    preContextBegin: {
                        serializedName: "PreContextBegin",
                        type: {
                            name: "Number"
                        }
                    },
                    postContextEnd: {
                        serializedName: "PostContextEnd",
                        type: {
                            name: "Number"
                        }
                    },
                    suggestions: {
                        serializedName: "Suggestions",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    },
                    suggestionText: {
                        serializedName: "SuggestionText",
                        constraints: {
                            MaxLength: 2e4
                        },
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        be = {
            serializedName: "LanguageInfoRequestV1",
            type: {
                name: "Composite",
                className: "LanguageInfoRequestV1",
                modelProperties: {
                    appId: {
                        required: !0,
                        serializedName: "AppId",
                        type: {
                            name: "String"
                        }
                    },
                    descriptors: {
                        serializedName: "Descriptors",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Descriptor"
                                }
                            }
                        }
                    },
                    languageId: {
                        serializedName: "LanguageId",
                        type: {
                            name: "String"
                        }
                    },
                    languageUXId: {
                        serializedName: "LanguageUXId",
                        type: {
                            name: "String"
                        }
                    },
                    runOnProfileId: {
                        serializedName: "RunOnProfileId",
                        type: {
                            name: "Uuid"
                        }
                    }
                }
            }
        },
        Se = {
            serializedName: "SupportedLanguage",
            type: {
                name: "Composite",
                className: "SupportedLanguage",
                modelProperties: {
                    languageId: {
                        required: !0,
                        serializedName: "LanguageId",
                        type: {
                            name: "String"
                        }
                    },
                    textUnit: {
                        required: !0,
                        serializedName: "TextUnit",
                        type: {
                            name: "Enum",
                            allowedValues: [0, 1, 2, 4, 8, 16, 32, 64, 256, 16384]
                        }
                    },
                    supportedCritiqueTag: {
                        serializedName: "SupportedCritiqueTag",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        Ie = {
            serializedName: "LanguageInfoResponseV1",
            type: {
                name: "Composite",
                className: "LanguageInfoResponseV1",
                modelProperties: o.__assign({}, Q.type.modelProperties, {
                    supportedLanguages: {
                        required: !0,
                        serializedName: "SupportedLanguages",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "SupportedLanguage"
                                }
                            }
                        }
                    }
                })
            }
        },
        Te = {
            serializedName: "SupportedActions",
            type: {
                name: "Composite",
                className: "SupportedActions",
                modelProperties: {
                    supportedActions: {
                        serializedName: "SupportedActions",
                        type: {
                            name: "Number"
                        }
                    }
                }
            }
        },
        we = {
            serializedName: "TopologyNode",
            type: {
                name: "Composite",
                className: "TopologyNode",
                modelProperties: {
                    id: {
                        required: !0,
                        serializedName: "Id",
                        type: {
                            name: "String"
                        }
                    },
                    revisionId: {
                        required: !0,
                        serializedName: "RevisionId",
                        type: {
                            name: "String"
                        }
                    },
                    analyzerData: {
                        serializedName: "AnalyzerData",
                        type: {
                            name: "Object"
                        }
                    },
                    type: {
                        serializedName: "Type",
                        type: {
                            name: "Enum",
                            allowedValues: [0, 1, 2, 3, 4]
                        }
                    },
                    children: {
                        serializedName: "Children",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "TopologyNode"
                                }
                            }
                        }
                    },
                    numberOfChildren: {
                        serializedName: "NumberOfChildren",
                        type: {
                            name: "Number"
                        }
                    },
                    areChildsOrdered: {
                        serializedName: "AreChildsOrdered",
                        defaultValue: !1,
                        type: {
                            name: "Boolean"
                        }
                    }
                }
            }
        },
        Ce = {
            serializedName: "TileCheckSpan",
            type: {
                name: "Composite",
                className: "TileCheckSpan",
                modelProperties: o.__assign({}, M.type.modelProperties, {
                    start: {
                        serializedName: "Start",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    length: {
                        serializedName: "Length",
                        defaultValue: "tileElement.Text.Length - span.Start",
                        type: {
                            name: "Number"
                        }
                    },
                    doNotCheck: {
                        serializedName: "DoNotCheck",
                        type: {
                            name: "Boolean"
                        }
                    },
                    analyzerData: {
                        serializedName: "AnalyzerData",
                        type: {
                            name: "Object"
                        }
                    }
                })
            }
        },
        Ee = {
            serializedName: "TileElement",
            type: {
                name: "Composite",
                className: "TileElement",
                modelProperties: {
                    languageId: {
                        required: !0,
                        serializedName: "LanguageId",
                        type: {
                            name: "String"
                        }
                    },
                    textUnit: {
                        serializedName: "TextUnit",
                        type: {
                            name: "Enum",
                            allowedValues: [0, 1, 2, 4, 8, 16, 32, 64, 256, 16384]
                        }
                    },
                    text: {
                        required: !0,
                        serializedName: "Text",
                        type: {
                            name: "String"
                        }
                    },
                    isClean: {
                        serializedName: "IsClean",
                        type: {
                            name: "Boolean"
                        }
                    },
                    analyzerData: {
                        serializedName: "AnalyzerData",
                        type: {
                            name: "Object"
                        }
                    },
                    spans: {
                        serializedName: "Spans",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "TileCheckSpan"
                                }
                            }
                        }
                    }
                }
            }
        },
        Ne = {
            serializedName: "TileContent",
            type: {
                name: "Composite",
                className: "TileContent",
                modelProperties: {
                    tileId: {
                        required: !0,
                        serializedName: "TileId",
                        type: {
                            name: "String"
                        }
                    },
                    revisionId: {
                        required: !0,
                        serializedName: "RevisionId",
                        type: {
                            name: "String"
                        }
                    },
                    analyzerData: {
                        serializedName: "AnalyzerData",
                        type: {
                            name: "Object"
                        }
                    },
                    tileElements: {
                        serializedName: "TileElements",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "TileElement"
                                }
                            }
                        }
                    }
                }
            }
        },
        Oe = {
            serializedName: "NeuralRewriteRequestV1",
            type: {
                name: "Composite",
                className: "NeuralRewriteRequestV1",
                modelProperties: {
                    appId: {
                        serializedName: "AppId",
                        type: {
                            name: "String"
                        }
                    },
                    languageId: {
                        serializedName: "LanguageId",
                        type: {
                            name: "String"
                        }
                    },
                    mode: {
                        serializedName: "Mode",
                        type: {
                            name: "Number"
                        }
                    },
                    selectionLength: {
                        serializedName: "SelectionLength",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    selectionStart: {
                        serializedName: "SelectionStart",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    }
                }
            }
        },
        Pe = {
            serializedName: "NeuralRewriteResponseV1",
            type: {
                name: "Composite",
                className: "NeuralRewriteResponseV1",
                modelProperties: o.__assign({}, Q.type.modelProperties, {
                    requestId: {
                        serializedName: "RequestId",
                        type: {
                            name: "Uuid"
                        }
                    },
                    critiques: {
                        required: !0,
                        serializedName: "Critiques",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Critique"
                                }
                            }
                        }
                    }
                })
            }
        },
        Ae = {
            serializedName: "TileCheckRequestV1",
            type: {
                name: "Composite",
                className: "TileCheckRequestV1",
                modelProperties: {
                    appId: {
                        required: !0,
                        serializedName: "AppId",
                        type: {
                            name: "String"
                        }
                    },
                    descriptors: {
                        serializedName: "Descriptors",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Descriptor"
                                }
                            }
                        }
                    },
                    languageUXId: {
                        required: !0,
                        serializedName: "LanguageUXId",
                        type: {
                            name: "String"
                        }
                    },
                    runOnProfileId: {
                        serializedName: "RunOnProfileId",
                        type: {
                            name: "Uuid"
                        }
                    },
                    overriddenCritiqueTypeOptions: {
                        serializedName: "OverriddenCritiqueTypeOptions",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "CritiqueTypeOption"
                                }
                            }
                        }
                    },
                    sessionId: {
                        required: !0,
                        serializedName: "SessionId",
                        type: {
                            name: "String"
                        }
                    },
                    requestOrderInSession: {
                        serializedName: "RequestOrderInSession",
                        type: {
                            name: "Number"
                        }
                    },
                    content: {
                        serializedName: "Content",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "TileContent"
                                }
                            }
                        }
                    },
                    topology: {
                        serializedName: "Topology",
                        type: {
                            name: "Composite",
                            className: "TopologyNode"
                        }
                    }
                }
            }
        },
        Re = {
            serializedName: "TileCheckCritique",
            type: {
                name: "Composite",
                className: "TileCheckCritique",
                modelProperties: {
                    traceId: {
                        serializedName: "TraceId",
                        type: {
                            name: "Uuid"
                        }
                    },
                    typeId: {
                        serializedName: "TypeId",
                        type: {
                            name: "Uuid"
                        }
                    },
                    categoryTitle: {
                        serializedName: "CategoryTitle",
                        type: {
                            name: "String"
                        }
                    },
                    context: {
                        serializedName: "Context",
                        type: {
                            name: "String"
                        }
                    },
                    start: {
                        serializedName: "Start",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    startInContext: {
                        serializedName: "StartInContext",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    length: {
                        serializedName: "Length",
                        defaultValue: 0,
                        type: {
                            name: "Number"
                        }
                    },
                    priority: {
                        serializedName: "Priority",
                        type: {
                            name: "Number"
                        }
                    },
                    tileId: {
                        serializedName: "TileId",
                        type: {
                            name: "String"
                        }
                    },
                    revisionId: {
                        serializedName: "RevisionId",
                        type: {
                            name: "String"
                        }
                    },
                    supportedActions: {
                        serializedName: "SupportedActions",
                        type: {
                            name: "Number"
                        }
                    },
                    bucketId: {
                        serializedName: "BucketId",
                        type: {
                            name: "Number"
                        }
                    },
                    explanationTitle: {
                        serializedName: "ExplanationTitle",
                        type: {
                            name: "String"
                        }
                    },
                    explanationLabel: {
                        serializedName: "ExplanationLabel",
                        type: {
                            name: "String"
                        }
                    },
                    explanation: {
                        serializedName: "Explanation",
                        type: {
                            name: "String"
                        }
                    },
                    suggestions: {
                        serializedName: "Suggestions",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "Suggestion"
                                }
                            }
                        }
                    },
                    status: {
                        serializedName: "Status",
                        type: {
                            name: "Enum",
                            allowedValues: [0, 1, 2]
                        }
                    },
                    tag: {
                        serializedName: "Tag",
                        type: {
                            name: "Enum",
                            allowedValues: [0, 1]
                        }
                    }
                }
            }
        },
        xe = {
            serializedName: "TileCheckResponseV1",
            type: {
                name: "Composite",
                className: "TileCheckResponseV1",
                modelProperties: o.__assign({}, Q.type.modelProperties, {
                    critiques: {
                        serializedName: "Critiques",
                        type: {
                            name: "Sequence",
                            element: {
                                type: {
                                    name: "Composite",
                                    className: "TileCheckCritique"
                                }
                            }
                        }
                    }
                })
            }
        },
        De = {
            serializedName: "UserIdentity",
            type: {
                name: "Composite",
                className: "UserIdentity",
                modelProperties: {
                    identityProvider: {
                        required: !0,
                        serializedName: "IdentityProvider",
                        type: {
                            name: "Number"
                        }
                    },
                    puid: {
                        required: !0,
                        serializedName: "Puid",
                        type: {
                            name: "String"
                        }
                    },
                    tenantId: {
                        serializedName: "TenantId",
                        type: {
                            name: "String"
                        }
                    },
                    cid: {
                        serializedName: "Cid",
                        type: {
                            name: "String"
                        }
                    }
                }
            }
        },
        je = {
            serializedName: "postcheck-headers",
            type: {
                name: "Composite",
                className: "PostCheckHeaders",
                modelProperties: {
                    xCorrelationId: {
                        serializedName: "x-correlationid",
                        type: {
                            name: "Uuid"
                        }
                    }
                }
            }
        },
        Me = {
            serializedName: "getcheck-headers",
            type: {
                name: "Composite",
                className: "GetCheckHeaders",
                modelProperties: {
                    xCorrelationId: {
                        serializedName: "x-correlationid",
                        type: {
                            name: "Uuid"
                        }
                    }
                }
            }
        },
        Be = {
            serializedName: "posttilecheck-headers",
            type: {
                name: "Composite",
                className: "PostTileCheckHeaders",
                modelProperties: {
                    xCorrelationId: {
                        serializedName: "x-correlationid",
                        type: {
                            name: "Uuid"
                        }
                    }
                }
            }
        },
        Le = {
            serializedName: "configv1-headers",
            type: {
                name: "Composite",
                className: "ConfigV1Headers",
                modelProperties: {
                    xCorrelationId: {
                        serializedName: "x-correlationid",
                        type: {
                            name: "Uuid"
                        }
                    }
                }
            }
        },
        ke = {
            serializedName: "configv2-headers",
            type: {
                name: "Composite",
                className: "ConfigV2Headers",
                modelProperties: {
                    xCorrelationId: {
                        serializedName: "x-correlationid",
                        type: {
                            name: "Uuid"
                        }
                    }
                }
            }
        },
        ze = {
            serializedName: "languageinfo-headers",
            type: {
                name: "Composite",
                className: "LanguageinfoHeaders",
                modelProperties: {
                    xCorrelationId: {
                        serializedName: "x-correlationid",
                        type: {
                            name: "Uuid"
                        }
                    }
                }
            }
        },
        qe = {
            serializedName: "instrumentation-headers",
            type: {
                name: "Composite",
                className: "InstrumentationHeaders",
                modelProperties: {
                    xCorrelationId: {
                        serializedName: "x-correlationid",
                        type: {
                            name: "Uuid"
                        }
                    }
                }
            }
        },
        Ue = {
            parameterPath: "xCorrelationId",
            mapper: {
                serializedName: "X-CorrelationId",
                type: {
                    name: "Uuid"
                }
            }
        },
        Ve = {
            parameterPath: "xUserId",
            mapper: {
                serializedName: "X-UserId",
                type: {
                    name: "String"
                }
            }
        },
        We = {
            parameterPath: "xUserSessionId",
            mapper: {
                serializedName: "X-UserSessionId",
                type: {
                    name: "Uuid"
                }
            }
        };

    function Fe(e) {
        return e.toLowerCase()
    }
    var Ge = function() {
            function e(e) {
                if (this._headersMap = {}, e)
                    for (var t in e) this.set(t, e[t])
            }
            return e.prototype.set = function(e, t) {
                this._headersMap[Fe(e)] = {
                    name: e,
                    value: t.toString()
                }
            }, e.prototype.get = function(e) {
                var t = this._headersMap[Fe(e)];
                return t ? t.value : void 0
            }, e.prototype.contains = function(e) {
                return !!this._headersMap[Fe(e)]
            }, e.prototype.remove = function(e) {
                var t = this.contains(e);
                return delete this._headersMap[Fe(e)], t
            }, e.prototype.rawHeaders = function() {
                var e = {};
                for (var t in this._headersMap) {
                    var n = this._headersMap[t];
                    e[n.name.toLowerCase()] = n.value
                }
                return e
            }, e.prototype.headersArray = function() {
                var e = [];
                for (var t in this._headersMap) e.push(this._headersMap[t]);
                return e
            }, e.prototype.headerNames = function() {
                for (var e = [], t = this.headersArray(), n = 0; n < t.length; ++n) e.push(t[n].name);
                return e
            }, e.prototype.headerValues = function() {
                for (var e = [], t = this.headersArray(), n = 0; n < t.length; ++n) e.push(t[n].value);
                return e
            }, e.prototype.toJson = function() {
                return this.rawHeaders()
            }, e.prototype.toString = function() {
                return JSON.stringify(this.toJson())
            }, e.prototype.clone = function() {
                return new e(this.rawHeaders())
            }, e
        }(),
        He = n(25);
    var $e = n(19),
        Je = function() {
            return "x-ms-command-name"
        };

    function Ke() {
        var e, t, n, r = [{
                key: "ms-rest-js",
                value: He.a.msRestVersion
            }],
            i = function() {
                var e = window.navigator;
                return [{
                    key: "OS",
                    value: (e.oscpu || e.platform).replace(" ", "")
                }]
            }();
        return e = r.concat(i), void 0 === t && (t = " "), void 0 === n && (n = "/"), e.map((function(e) {
            var t = e.value ? "" + n + e.value : "";
            return "" + e.key + t
        })).join(t)
    }
    var Xe = function(e) {
            function t(t, n, r, i) {
                var o = e.call(this, t, n) || this;
                return o._nextPolicy = t, o._options = n, o.headerKey = r, o.headerValue = i, o
            }
            return o.__extends(t, e), t.prototype.sendRequest = function(e) {
                return this.addUserAgentHeader(e), this._nextPolicy.sendRequest(e)
            }, t.prototype.addUserAgentHeader = function(e) {
                e.headers || (e.headers = new Ge), !e.headers.get(this.headerKey) && this.headerValue && e.headers.set(this.headerKey, this.headerValue)
            }, t
        }($e.a),
        Qe = function(e) {
            function t(n, r, i, o, a, s) {
                var u = e.call(this, n) || this;
                return u.code = r, u.statusCode = i, u.request = o, u.response = a, u.body = s, Object.setPrototypeOf(u, t.prototype), u
            }
            return o.__extends(t, e), t.REQUEST_SEND_ERROR = "REQUEST_SEND_ERROR", t.REQUEST_ABORTED_ERROR = "REQUEST_ABORTED_ERROR", t.PARSE_ERROR = "PARSE_ERROR", t
        }(Error),
        Ye = function() {
            function e() {}
            return e.prototype.sendRequest = function(e) {
                var t = new XMLHttpRequest;
                if (e.proxySettings) throw new Error("HTTP proxy is not supported in browser environment");
                var n = e.abortSignal;
                if (n) {
                    var r = function() {
                        t.abort()
                    };
                    n.addEventListener("abort", r), t.addEventListener("readystatechange", (function() {
                        t.readyState === XMLHttpRequest.DONE && n.removeEventListener("abort", r)
                    }))
                }
                if (Ze(t.upload, e.onUploadProgress), Ze(t, e.onDownloadProgress), e.formData) {
                    for (var i = e.formData, o = new FormData, a = function(e, t) {
                            t && t.hasOwnProperty("value") && t.hasOwnProperty("options") ? o.append(e, t.value, t.options) : o.append(e, t)
                        }, s = 0, u = Object.keys(i); s < u.length; s++) {
                        var c = u[s],
                            l = i[c];
                        if (Array.isArray(l))
                            for (var d = 0; d < l.length; d++) a(c, l[d]);
                        else a(c, l)
                    }
                    e.body = o, e.formData = void 0;
                    var p = e.headers.get("Content-Type");
                    p && -1 !== p.indexOf("multipart/form-data") && e.headers.remove("Content-Type")
                }
                t.open(e.method, e.url), t.timeout = e.timeout, t.withCredentials = e.withCredentials;
                for (var f = 0, h = e.headers.headersArray(); f < h.length; f++) {
                    var m = h[f];
                    t.setRequestHeader(m.name, m.value)
                }
                return t.responseType = e.streamResponseBody ? "blob" : "text", t.send(void 0 === e.body ? null : e.body), e.streamResponseBody ? new Promise((function(n, r) {
                    t.addEventListener("readystatechange", (function() {
                        if (t.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
                            var r = new Promise((function(n, r) {
                                t.addEventListener("load", (function() {
                                    n(t.response)
                                })), tt(e, t, r)
                            }));
                            n({
                                request: e,
                                status: t.status,
                                headers: et(t),
                                blobBody: r
                            })
                        }
                    })), tt(e, t, r)
                })) : new Promise((function(n, r) {
                    t.addEventListener("load", (function() {
                        return n({
                            request: e,
                            status: t.status,
                            headers: et(t),
                            bodyAsText: t.responseText
                        })
                    })), tt(e, t, r)
                }))
            }, e
        }();

    function Ze(e, t) {
        t && e.addEventListener("progress", (function(e) {
            return t({
                loadedBytes: e.loaded
            })
        }))
    }

    function et(e) {
        for (var t = new Ge, n = 0, r = e.getAllResponseHeaders().trim().split(/[\r\n]+/); n < r.length; n++) {
            var i = r[n],
                o = i.indexOf(":"),
                a = i.slice(0, o),
                s = i.slice(o + 2);
            t.set(a, s)
        }
        return t
    }

    function tt(e, t, n) {
        t.addEventListener("error", (function() {
            return n(new Qe("Failed to send request to " + e.url, Qe.REQUEST_SEND_ERROR, void 0, e))
        })), t.addEventListener("abort", (function() {
            return n(new Qe("The request was aborted", Qe.REQUEST_ABORTED_ERROR, void 0, e))
        })), t.addEventListener("timeout", (function() {
            return n(new Qe("timeout of " + t.timeout + "ms exceeded", Qe.REQUEST_SEND_ERROR, void 0, e))
        }))
    }

    function nt(e) {
        return rt(e.parameterPath, e.mapper)
    }

    function rt(e, t) {
        return "string" == typeof e ? e : Array.isArray(e) ? e.join(".") : t.serializedName
    }

    function it(e) {
        var t = !1;
        for (var n in e.responses) {
            var r = e.responses[n];
            if (r.bodyMapper && r.bodyMapper.type.name === E.Stream) {
                t = !0;
                break
            }
        }
        return t
    }
    var ot = new DOMParser;
    var at = "";
    try {
        at = ot.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI
    } catch (e) {}
    var st = document.implementation.createDocument(null, null, null),
        ut = new XMLSerializer;

    function ct(e, t) {
        var n = function e(t, n) {
            if ("string" == typeof t || "number" == typeof t || "boolean" == typeof t) return (c = st.createElement(n)).textContent = t.toString(), [c];
            if (Array.isArray(t)) {
                for (var r = [], i = 0, o = t; i < o.length; i++)
                    for (var a = 0, s = e(o[i], n); a < s.length; a++) {
                        var u = s[a];
                        r.push(u)
                    }
                return r
            }
            if ("object" == typeof t) {
                for (var c = st.createElement(n), l = 0, d = Object.keys(t); l < d.length; l++) {
                    var p = d[l];
                    if ("$" === p)
                        for (var f = 0, h = lt(t[p]); f < h.length; f++) {
                            var m = h[f];
                            c.attributes.setNamedItem(m)
                        } else
                            for (var g = 0, y = e(t[p], p); g < y.length; g++) u = y[g], c.appendChild(u)
                }
                return [c]
            }
            throw new Error("Illegal value passed to buildObject: " + t)
        }(e, t && t.rootName || "root")[0];
        return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + ut.serializeToString(n)
    }

    function lt(e) {
        for (var t = [], n = 0, r = Object.keys(e); n < r.length; n++) {
            var i = r[n],
                o = st.createAttribute(i);
            o.value = e[i].toString(), t.push(o)
        }
        return t
    }
    var dt = ["application/json", "text/json"],
        pt = ["application/xml", "application/atom+xml"],
        ft = function(e) {
            function t(t, n, r) {
                var i = e.call(this, t, r) || this;
                return i.jsonContentTypes = n && n.json || dt, i.xmlContentTypes = n && n.xml || pt, i
            }
            return o.__extends(t, e), t.prototype.sendRequest = function(e) {
                return o.__awaiter(this, void 0, void 0, (function() {
                    var t = this;
                    return o.__generator(this, (function(n) {
                        return [2, this._nextPolicy.sendRequest(e).then((function(e) {
                            return function(e, t, n) {
                                return function(e, t, n) {
                                    var r = function(e) {
                                        var t = 'Error "' + e + '" occurred while parsing the response body - ' + n.bodyAsText + ".",
                                            r = e.code || Qe.PARSE_ERROR,
                                            i = new Qe(t, r, n.status, n.request, n, n.bodyAsText);
                                        return Promise.reject(i)
                                    };
                                    if (!n.request.streamResponseBody && n.bodyAsText) {
                                        var i = n.bodyAsText,
                                            o = n.headers.get("Content-Type") || "",
                                            a = o ? o.split(";").map((function(e) {
                                                return e.toLowerCase()
                                            })) : [];
                                        if (0 === a.length || a.some((function(t) {
                                                return -1 !== e.indexOf(t)
                                            }))) return new Promise((function(e) {
                                            n.parsedBody = JSON.parse(i), e(n)
                                        })).catch(r);
                                        if (a.some((function(e) {
                                                return -1 !== t.indexOf(e)
                                            }))) return function(e) {
                                            try {
                                                var t = ot.parseFromString(e, "application/xml");
                                                ! function(e) {
                                                    if (at) {
                                                        var t = e.getElementsByTagNameNS(at, "parsererror");
                                                        if (t.length) throw new Error(t.item(0).innerHTML)
                                                    }
                                                }(t);
                                                var n = function e(t) {
                                                    var n = {},
                                                        r = t.childNodes.length,
                                                        i = t.childNodes[0],
                                                        o = i && 1 === r && i.nodeType === Node.TEXT_NODE && i.nodeValue || void 0,
                                                        a = function(e) {
                                                            return function(e) {
                                                                return !!e.attributes
                                                            }(e) && e.hasAttributes() ? e : void 0
                                                        }(t);
                                                    if (a) {
                                                        n.$ = {};
                                                        for (var s = 0; s < a.attributes.length; s++) {
                                                            var u = a.attributes[s];
                                                            n.$[u.nodeName] = u.nodeValue
                                                        }
                                                        o && (n._ = o)
                                                    } else 0 === r ? n = "" : o && (n = o);
                                                    if (!o)
                                                        for (s = 0; s < r; s++) {
                                                            var c = t.childNodes[s];
                                                            if (c.nodeType !== Node.TEXT_NODE) {
                                                                var l = e(c);
                                                                n[c.nodeName] ? Array.isArray(n[c.nodeName]) ? n[c.nodeName].push(l) : n[c.nodeName] = [n[c.nodeName], l] : n[c.nodeName] = l
                                                            }
                                                        }
                                                    return n
                                                }(t.childNodes[0]);
                                                return Promise.resolve(n)
                                            } catch (e) {
                                                return Promise.reject(e)
                                            }
                                        }(i).then((function(e) {
                                            return n.parsedBody = e, n
                                        })).catch(r)
                                    }
                                    return Promise.resolve(n)
                                }(e, t, n).then((function(e) {
                                    if (function(e) {
                                            var t = e.request.shouldDeserialize;
                                            return void 0 === t || ("boolean" == typeof t ? t : t(e))
                                        }(e)) {
                                        var t = e.request.operationSpec;
                                        if (t && t.responses) {
                                            var r = e.status,
                                                i = Object.keys(t.responses),
                                                o = 0 === i.length || 1 === i.length && "default" === i[0],
                                                a = function(e) {
                                                    var t, n = e.request,
                                                        r = n.operationSpec;
                                                    if (r) {
                                                        var i = n.operationResponseGetter;
                                                        t = i ? i(r, e) : r.responses[e.status]
                                                    }
                                                    return t
                                                }(e);
                                            if (o ? 200 <= r && r < 300 : a) {
                                                if (a) {
                                                    if (a.bodyMapper) {
                                                        m = e.parsedBody, t.isXML && a.bodyMapper.type.name === E.Sequence && (m = "object" == typeof m ? m[a.bodyMapper.xmlElementName] : []);
                                                        try {
                                                            e.parsedBody = t.serializer.deserialize(a.bodyMapper, m, "operationRes.parsedBody")
                                                        } catch (d) {
                                                            var s = new Qe("Error " + d + " occurred in deserializing the responseBody - " + e.bodyAsText);
                                                            return s.request = u.g(e.request), s.response = u.h(e), Promise.reject(s)
                                                        }
                                                    } else "HEAD" === t.httpMethod && (e.parsedBody = n.status >= 200 && n.status < 300);
                                                    a.headersMapper && (e.parsedHeaders = t.serializer.deserialize(a.headersMapper, e.headers.rawHeaders(), "operationRes.parsedHeaders"))
                                                }
                                            } else {
                                                var c = t.responses.default;
                                                if (c) {
                                                    var l = it(t) ? "Unexpected status code: " + r : e.bodyAsText,
                                                        d = new Qe(l);
                                                    d.statusCode = r, d.request = u.g(e.request), d.response = u.h(e);
                                                    var p = e.parsedBody;
                                                    try {
                                                        if (p) {
                                                            var f = c.bodyMapper;
                                                            if (f && "CloudError" === f.serializedName) p.error && (p = p.error), p.code && (d.code = p.code), p.message && (d.message = p.message);
                                                            else {
                                                                var h = p;
                                                                p.error && (h = p.error), d.code = h.code, h.message && (d.message = h.message)
                                                            }
                                                            if (f) {
                                                                var m = p;
                                                                t.isXML && f.type.name === E.Sequence && (m = "object" == typeof p ? p[f.xmlElementName] : []), d.body = t.serializer.deserialize(f, m, "error.body")
                                                            }
                                                        }
                                                    } catch (t) {
                                                        d.message = 'Error "' + t.message + '" occurred in deserializing the responseBody - "' + e.bodyAsText + '" for the default response.'
                                                    }
                                                    return Promise.reject(d)
                                                }
                                            }
                                        }
                                    }
                                    return Promise.resolve(e)
                                }))
                            }(t.jsonContentTypes, t.xmlContentTypes, e)
                        }))]
                    }))
                }))
            }, t
        }($e.a),
        ht = 3e4,
        mt = 3,
        gt = 9e4,
        yt = 3e3,
        vt = function(e) {
            function t(t, n, r, i, o, a) {
                var s = e.call(this, t, n) || this;

                function u(e) {
                    return "number" == typeof e
                }
                return s.retryCount = u(r) ? r : mt, s.retryInterval = u(i) ? i : ht, s.minRetryInterval = u(o) ? o : yt, s.maxRetryInterval = u(a) ? a : gt, s
            }
            return o.__extends(t, e), t.prototype.sendRequest = function(e) {
                var t = this;
                return this._nextPolicy.sendRequest(e.clone()).then((function(n) {
                    return _t(t, e, n)
                })).catch((function(n) {
                    return _t(t, e, n.response, void 0, n)
                }))
            }, t
        }($e.a);

    function _t(e, t, n, r, i) {
        r = function(e, t, n) {
            t || (t = {
                retryCount: 0,
                retryInterval: 0
            }), n && (t.error && (n.innerError = t.error), t.error = n), t.retryCount++;
            var r = Math.pow(2, t.retryCount) - 1;
            return r *= .8 * e.retryInterval + Math.floor(Math.random() * (1.2 * e.retryInterval - .8 * e.retryInterval)), t.retryInterval = Math.min(e.minRetryInterval + r, e.maxRetryInterval), t
        }(e, r, i);
        var o = t.abortSignal && t.abortSignal.aborted;
        if (!o && function(e, t, n) {
                if (null == t || t < 500 && 408 !== t || 501 === t || 505 === t) return !1;
                if (!n) throw new Error("retryData for the ExponentialRetryPolicyFilter cannot be null.");
                return (n && n.retryCount) < e.retryCount
            }(e, n && n.status, r)) return u.a(r.retryInterval).then((function() {
            return e._nextPolicy.sendRequest(t.clone())
        })).then((function(n) {
            return _t(e, t, n, r, void 0)
        })).catch((function(i) {
            return _t(e, t, n, r, i)
        }));
        if (o || i || !n) {
            var a = r.error || new Qe("Failed to send the request.", Qe.REQUEST_SEND_ERROR, n && n.status, n && n.request, n);
            return Promise.reject(a)
        }
        return Promise.resolve(n)
    }
    var bt = function(e) {
            function t(t, n, r) {
                var i = e.call(this, t, n) || this;
                return i._requestIdHeaderName = r, i
            }
            return o.__extends(t, e), t.prototype.sendRequest = function(e) {
                return e.headers.contains(this._requestIdHeaderName) || e.headers.set(this._requestIdHeaderName, u.b()), this._nextPolicy.sendRequest(e)
            }, t
        }($e.a),
        St = n(66),
        It = function(e) {
            function t(t, n, r) {
                void 0 === r && (r = 20);
                var i = e.call(this, t, n) || this;
                return i.maxRetries = r, i
            }
            return o.__extends(t, e), t.prototype.sendRequest = function(e) {
                var t = this;
                return this._nextPolicy.sendRequest(e).then((function(e) {
                    return function e(t, n, r) {
                        var i = n.request,
                            o = n.status,
                            a = n.headers.get("location");
                        if (a && (300 === o || 307 === o || 303 === o && "POST" === i.method) && (!t.maxRetries || r < t.maxRetries)) {
                            var s = St.a.parse(i.url);
                            return s.setPath(a), i.url = s.toString(), 303 === o && (i.method = "GET"), t._nextPolicy.sendRequest(i).then((function(n) {
                                return e(t, n, r + 1)
                            }))
                        }
                        return Promise.resolve(n)
                    }(t, e, 0)
                }))
            }, t
        }($e.a),
        Tt = function(e) {
            function t(t, n, r) {
                void 0 === r && (r = 30);
                var i = e.call(this, t, n) || this;
                return i._retryTimeout = r, i
            }
            return o.__extends(t, e), t.prototype.sendRequest = function(e) {
                var t = this;
                return this._nextPolicy.sendRequest(e.clone()).then((function(n) {
                    return function(e, t, n) {
                        if (409 === n.status) {
                            var r = function(e) {
                                var t, n;
                                if (e) {
                                    try {
                                        n = JSON.parse(e)
                                    } catch (e) {}
                                    if (n && n.error && n.error.message && n.error.code && "MissingSubscriptionRegistration" === n.error.code) {
                                        var r = n.error.message.match(/.*'(.*)'/i);
                                        r && (t = r.pop())
                                    }
                                }
                                return t
                            }(n.bodyAsText);
                            if (r) {
                                var i = function(e) {
                                    var t = e.match(/.*\/subscriptions\/[a-f0-9-]+\//gi);
                                    if (!t || !t[0]) throw new Error("Unable to extract subscriptionId from the given url - " + e + ".");
                                    return t[0]
                                }(t.url);
                                return function(e, t, n, r) {
                                    var i = t + "providers/" + n + "/register?api-version=2016-02-01",
                                        o = t + "providers/" + n + "?api-version=2016-02-01",
                                        a = wt(r);
                                    return a.method = "POST", a.url = i, e._nextPolicy.sendRequest(a).then((function(t) {
                                        if (200 !== t.status) throw new Error("Autoregistration of " + n + " failed. Please try registering manually.");
                                        return function e(t, n, r) {
                                            var i = wt(r);
                                            return i.url = n, i.method = "GET", t._nextPolicy.sendRequest(i).then((function(i) {
                                                var o = i.parsedBody;
                                                return !(!i.parsedBody || !o.registrationState || "Registered" !== o.registrationState) || u.a(1e3 * t._retryTimeout).then((function() {
                                                    return e(t, n, r)
                                                }))
                                            }))
                                        }(e, o, r)
                                    }))
                                }(e, i, r, t).catch((function() {
                                    return !1
                                })).then((function(r) {
                                    return r ? (t.headers.set("x-ms-client-request-id", u.b()), e._nextPolicy.sendRequest(t.clone())) : n
                                }))
                            }
                        }
                        return Promise.resolve(n)
                    }(t, e, n)
                }))
            }, t
        }($e.a);

    function wt(e, t) {
        void 0 === t && (t = !1);
        var n = e.clone();
        return t && (n.url = e.url), n.headers.set("x-ms-client-request-id", u.b()), n.headers.set("Content-Type", "application/json; charset=utf-8"), n
    }
    var Ct, Et = function(e) {
            function t(t, n, r) {
                var i = e.call(this, t, n) || this;
                return i.authenticationProvider = r, i
            }
            return o.__extends(t, e), t.prototype.signRequest = function(e) {
                return this.authenticationProvider.signRequest(e)
            }, t.prototype.sendRequest = function(e) {
                var t = this;
                return this.signRequest(e).then((function(e) {
                    return t._nextPolicy.sendRequest(e)
                }))
            }, t
        }($e.a),
        Nt = function(e) {
            function t(t, n, r, i, o, a) {
                var s = e.call(this, t, n) || this;
                return s.DEFAULT_CLIENT_RETRY_INTERVAL = 3e4, s.DEFAULT_CLIENT_RETRY_COUNT = 3, s.DEFAULT_CLIENT_MAX_RETRY_INTERVAL = 9e4, s.DEFAULT_CLIENT_MIN_RETRY_INTERVAL = 3e3, s.retryCount = "number" == typeof r ? r : s.DEFAULT_CLIENT_RETRY_COUNT, s.retryInterval = "number" == typeof i ? i : s.DEFAULT_CLIENT_RETRY_INTERVAL, s.minRetryInterval = "number" == typeof o ? o : s.DEFAULT_CLIENT_MIN_RETRY_INTERVAL, s.maxRetryInterval = "number" == typeof a ? a : s.DEFAULT_CLIENT_MAX_RETRY_INTERVAL, s
            }
            return o.__extends(t, e), t.prototype.sendRequest = function(e) {
                var t = this;
                return this._nextPolicy.sendRequest(e.clone()).then((function(n) {
                    return function e(t, n, r, i, o) {
                        return i = function(e, t, n) {
                            t || (t = {
                                retryCount: 0,
                                retryInterval: 0
                            }), n && (t.error && (n.innerError = t.error), t.error = n), t.retryCount++;
                            var r = Math.pow(2, t.retryCount) - 1;
                            return r *= .8 * e.retryInterval + Math.floor(Math.random() * (1.2 * e.retryInterval - .8 * e.retryInterval)), t.retryInterval = Math.min(e.minRetryInterval + r, e.maxRetryInterval), t
                        }(t, i, o), o && o.code && function(e, t) {
                            if (!t) throw new Error("retryData for the SystemErrorRetryPolicyFilter cannot be null.");
                            return (t && t.retryCount) < e.retryCount
                        }(t, i) && ("ETIMEDOUT" === o.code || "ESOCKETTIMEDOUT" === o.code || "ECONNREFUSED" === o.code || "ECONNRESET" === o.code || "ENOENT" === o.code) ? u.a(i.retryInterval).then((function() {
                            return t._nextPolicy.sendRequest(n.clone())
                        })).then((function(r) {
                            return e(t, n, r, i, o)
                        })).catch((function(o) {
                            return e(t, n, r, i, o)
                        })) : null != o ? (o = i.error, Promise.reject(o)) : Promise.resolve(r)
                    }(t, e, n)
                }))
            }, t
        }($e.a);
    ! function(e) {
        e.Csv = ",", e.Ssv = " ", e.Tsv = "\t", e.Pipes = "|", e.Multi = "Multi"
    }(Ct || (Ct = {}));
    var Ot = function() {
            function e(e, t, n, r, i, o, a, s, u, c, l, d) {
                this.streamResponseBody = o, this.url = e || "", this.method = t || "GET", this.headers = i instanceof Ge ? i : new Ge(i), this.body = n, this.query = r, this.formData = void 0, this.withCredentials = a || !1, this.abortSignal = s, this.timeout = u || 0, this.onUploadProgress = c, this.onDownloadProgress = l, this.proxySettings = d
            }
            return e.prototype.validateRequestProperties = function() {
                if (!this.method) throw new Error("WebResource.method is required.");
                if (!this.url) throw new Error("WebResource.url is required.")
            }, e.prototype.prepare = function(e) {
                if (!e) throw new Error("options object is required");
                if (null == e.method || "string" != typeof e.method.valueOf()) throw new Error("options.method must be a string.");
                if (e.url && e.pathTemplate) throw new Error("options.url and options.pathTemplate are mutually exclusive. Please provide exactly one of them.");
                if (!(null != e.pathTemplate && "string" == typeof e.pathTemplate.valueOf() || null != e.url && "string" == typeof e.url.valueOf())) throw new Error("Please provide exactly one of options.pathTemplate or options.url.");
                if (e.url) {
                    if ("string" != typeof e.url) throw new Error('options.url must be of type "string".');
                    this.url = e.url
                }
                if (e.method) {
                    var t = ["GET", "PUT", "HEAD", "DELETE", "OPTIONS", "POST", "PATCH", "TRACE"];
                    if (-1 === t.indexOf(e.method.toUpperCase())) throw new Error('The provided method "' + e.method + '" is invalid. Supported HTTP methods are: ' + JSON.stringify(t))
                }
                if (this.method = e.method.toUpperCase(), e.pathTemplate) {
                    var n = e.pathTemplate,
                        r = e.pathParameters;
                    if ("string" != typeof n) throw new Error('options.pathTemplate must be of type "string".');
                    e.baseUrl || (e.baseUrl = "https://management.azure.com");
                    var i = e.baseUrl,
                        o = i + (i.endsWith("/") ? "" : "/") + (n.startsWith("/") ? n.slice(1) : n),
                        a = o.match(/({\w*\s*\w*})/gi);
                    if (a && a.length) {
                        if (!r) throw new Error("pathTemplate: " + n + " has been provided. Hence, options.pathParameters must also be provided.");
                        a.forEach((function(e) {
                            var t = e.slice(1, -1),
                                i = r[t];
                            if (null == i || "string" != typeof i && "object" != typeof i) throw new Error("pathTemplate: " + n + " contains the path parameter " + t + " however, it is not present in " + r + " - " + JSON.stringify(r, void 0, 2) + '.The value of the path parameter can either be a "string" of the form { ' + t + ': "some sample value" } or it can be an "object" of the form { "' + t + '": { value: "some sample value", skipUrlEncoding: true } }.');
                            if ("string" == typeof i.valueOf() && (o = o.replace(e, encodeURIComponent(i))), "object" == typeof i.valueOf()) {
                                if (!i.value) throw new Error("options.pathParameters[" + t + '] is of type "object" but it does not contain a "value" property.');
                                o = i.skipUrlEncoding ? o.replace(e, i.value) : o.replace(e, encodeURIComponent(i.value))
                            }
                        }))
                    }
                    this.url = o
                }
                if (e.queryParameters) {
                    var s = e.queryParameters;
                    if ("object" != typeof s) throw new Error('options.queryParameters must be of type object. It should be a JSON object of "query-parameter-name" as the key and the "query-parameter-value" as the value. The "query-parameter-value" may be fo type "string" or an "object" of the form { value: "query-parameter-value", skipUrlEncoding: true }.');
                    this.url && -1 === this.url.indexOf("?") && (this.url += "?");
                    var l = [];
                    for (var d in this.query = {}, s) {
                        var p = s[d];
                        if (p)
                            if ("string" == typeof p) l.push(d + "=" + encodeURIComponent(p)), this.query[d] = encodeURIComponent(p);
                            else if ("object" == typeof p) {
                            if (!p.value) throw new Error("options.queryParameters[" + d + '] is of type "object" but it does not contain a "value" property.');
                            p.skipUrlEncoding ? (l.push(d + "=" + p.value), this.query[d] = p.value) : (l.push(d + "=" + encodeURIComponent(p.value)), this.query[d] = encodeURIComponent(p.value))
                        }
                    }
                    this.url += l.join("&")
                }
                if (e.headers)
                    for (var f = e.headers, h = 0, m = Object.keys(e.headers); h < m.length; h++) {
                        var g = m[h];
                        this.headers.set(g, f[g])
                    }
                return this.headers.get("accept-language") || this.headers.set("accept-language", "en-US"), this.headers.get("x-ms-client-request-id") || e.disableClientRequestId || this.headers.set("x-ms-client-request-id", Object(u.b)()), this.headers.get("Content-Type") || this.headers.set("Content-Type", "application/json; charset=utf-8"), this.body = e.body, null != e.body && (e.bodyIsStream ? (this.headers.get("Transfer-Encoding") || this.headers.set("Transfer-Encoding", "chunked"), "application/octet-stream" !== this.headers.get("Content-Type") && this.headers.set("Content-Type", "application/octet-stream")) : (e.serializationMapper && (this.body = new c(e.mappers).serialize(e.serializationMapper, e.body, "requestBody")), e.disableJsonStringifyOnBody || (this.body = JSON.stringify(e.body)))), this.abortSignal = e.abortSignal, this.onDownloadProgress = e.onDownloadProgress, this.onUploadProgress = e.onUploadProgress, this
            }, e.prototype.clone = function() {
                var t = new e(this.url, this.method, this.body, this.query, this.headers && this.headers.clone(), this.streamResponseBody, this.withCredentials, this.abortSignal, this.timeout, this.onUploadProgress, this.onDownloadProgress);
                return this.formData && (t.formData = this.formData), this.operationSpec && (t.operationSpec = this.operationSpec), this.shouldDeserialize && (t.shouldDeserialize = this.shouldDeserialize), this.operationResponseGetter && (t.operationResponseGetter = this.operationResponseGetter), t
            }, e
        }(),
        Pt = n(132),
        At = He.a.HttpConstants.StatusCodes,
        Rt = function(e) {
            function t(t, n, r) {
                var i = e.call(this, t, n) || this;
                return i._handleResponse = r || i._defaultResponseHandler, i
            }
            return o.__extends(t, e), t.prototype.sendRequest = function(e) {
                return o.__awaiter(this, void 0, void 0, (function() {
                    var t = this;
                    return o.__generator(this, (function(n) {
                        return [2, this._nextPolicy.sendRequest(e.clone()).then((function(n) {
                            return n.status !== At.TooManyRequests ? n : t._handleResponse(e, n)
                        }))]
                    }))
                }))
            }, t.prototype._defaultResponseHandler = function(e, n) {
                return o.__awaiter(this, void 0, void 0, (function() {
                    var r, i, a = this;
                    return o.__generator(this, (function(o) {
                        return (r = n.headers.get(He.a.HeaderConstants.RETRY_AFTER)) && (i = t.parseRetryAfterHeader(r)) ? [2, Object(u.a)(i).then((function(t) {
                            return a._nextPolicy.sendRequest(e)
                        }))] : [2, n]
                    }))
                }))
            }, t.parseRetryAfterHeader = function(e) {
                var n = Number(e);
                return Number.isNaN(n) ? t.parseDateRetryAfterHeader(e) : 1e3 * n
            }, t.parseDateRetryAfterHeader = function(e) {
                try {
                    var t = Date.now(),
                        n = Date.parse(e) - t;
                    return Number.isNaN(n) ? void 0 : n
                } catch (e) {
                    return
                }
            }, t
        }($e.a),
        xt = function() {
            function e(e, t) {
                if (t || (t = {}), e && !e.signRequest) throw new Error("credentials argument needs to implement signRequest method");
                var n;
                if (this._withCredentials = t.withCredentials || !1, this._httpClient = t.httpClient || new Ye, this._requestPolicyOptions = new $e.b(t.httpPipelineLogger), Array.isArray(t.requestPolicyFactories)) n = t.requestPolicyFactories;
                else if (n = function(e, t) {
                        var n, r, i = [];
                        t.generateClientRequestIdHeader && i.push((void 0 === (n = t.clientRequestIdHeaderName) && (n = "x-ms-client-request-id"), {
                            create: function(e, t) {
                                return new bt(e, t, n)
                            }
                        })), e && ("function" == typeof e.create ? i.push(e) : i.push((r = e, {
                            create: function(e, t) {
                                return new Et(e, t, r)
                            }
                        })));
                        var o, a, s, u, c = Dt(t.userAgentHeaderName, Je),
                            l = Dt(t.userAgent, Ke);
                        c && l && i.push((a = (o = {
                            key: c,
                            value: l
                        }) && null != o.key ? o.key : "x-ms-command-name", s = o && null != o.value ? o.value : Ke(), {
                            create: function(e, t) {
                                return new Xe(e, t, a, s)
                            }
                        })), i.push(function(e) {
                            return void 0 === e && (e = 20), {
                                create: function(t, n) {
                                    return new It(t, n, e)
                                }
                            }
                        }()), i.push(function(e) {
                            return void 0 === e && (e = 30), {
                                create: function(t, n) {
                                    return new Tt(t, n, e)
                                }
                            }
                        }(t.rpRegistrationRetryTimeout)), t.noRetryPolicy || (i.push({
                            create: function(e, t) {
                                return new vt(e, t, void 0, void 0, void 0, void 0)
                            }
                        }), i.push({
                            create: function(e, t) {
                                return new Nt(e, t, void 0, void 0, void 0, void 0)
                            }
                        }), i.push({
                            create: function(e, t) {
                                return new Rt(e, t)
                            }
                        })), i.push((u = t.deserializationContentTypes, {
                            create: function(e, t) {
                                return new ft(e, u, t)
                            }
                        }));
                        var d = t.proxySettings || Object(Pt.a)();
                        return d && i.push(Object(Pt.b)(d)), i
                    }(e, t), t.requestPolicyFactories) {
                    var r = t.requestPolicyFactories(n);
                    r && (n = r)
                }
                this._requestPolicyFactories = n
            }
            return e.prototype.sendRequest = function(e) {
                if (null == e || "object" != typeof e) throw new Error("options cannot be null or undefined and it must be of type object.");
                var t;
                try {
                    e instanceof Ot ? (e.validateRequestProperties(), t = e) : t = (t = new Ot).prepare(e)
                } catch (e) {
                    return Promise.reject(e)
                }
                var n = this._httpClient;
                if (this._requestPolicyFactories && this._requestPolicyFactories.length > 0)
                    for (var r = this._requestPolicyFactories.length - 1; r >= 0; --r) n = this._requestPolicyFactories[r].create(n, this._requestPolicyOptions);
                return n.sendRequest(t)
            }, e.prototype.sendOperationRequest = function(e, t, n) {
                "function" == typeof e.options && (n = e.options, e.options = void 0);
                var r, i = new Ot;
                try {
                    var a = t.baseUrl || this.baseUri;
                    if (!a) throw new Error("If operationSpec.baseUrl is not specified, then the ServiceClient must have a baseUri string property that contains the base URL to use.");
                    i.method = t.httpMethod, i.operationSpec = t;
                    var s = St.a.parse(a);
                    if (t.path && s.appendPath(t.path), t.urlParameters && t.urlParameters.length > 0)
                        for (var c = 0, l = t.urlParameters; c < l.length; c++) {
                            var d = l[c],
                                p = jt(this, e, d, t.serializer);
                            p = t.serializer.serialize(d.mapper, p, nt(d)), d.skipEncoding || (p = encodeURIComponent(p)), s.replaceAll("{" + (d.mapper.serializedName || nt(d)) + "}", p)
                        }
                    if (t.queryParameters && t.queryParameters.length > 0)
                        for (var f = 0, h = t.queryParameters; f < h.length; f++) {
                            var m = h[f],
                                g = jt(this, e, m, t.serializer);
                            if (null != g) {
                                if (g = t.serializer.serialize(m.mapper, g, nt(m)), null != m.collectionFormat)
                                    if (m.collectionFormat === Ct.Multi)
                                        if (0 === g.length) g = "";
                                        else
                                            for (var y in g) {
                                                var v = g[y];
                                                g[y] = null == v ? "" : v.toString()
                                            } else g = g.join(m.collectionFormat);
                                if (!m.skipEncoding)
                                    if (Array.isArray(g))
                                        for (var y in g) g[y] = encodeURIComponent(g[y]);
                                    else g = encodeURIComponent(g);
                                s.setQueryParameter(m.mapper.serializedName || nt(m), g)
                            }
                        }
                    i.url = s.toString();
                    var _ = t.contentType || this.requestContentType;
                    if (_ && i.headers.set("Content-Type", _), t.headerParameters)
                        for (var b = 0, S = t.headerParameters; b < S.length; b++) {
                            var I = S[b],
                                T = jt(this, e, I, t.serializer);
                            if (null != T) {
                                T = t.serializer.serialize(I.mapper, T, nt(I));
                                var w = I.mapper.headerCollectionPrefix;
                                if (w)
                                    for (var C = 0, N = Object.keys(T); C < N.length; C++) {
                                        var O = N[C];
                                        i.headers.set(w + O, T[O])
                                    } else i.headers.set(I.mapper.serializedName || nt(I), T)
                            }
                        }
                    var P = e.options;
                    if (P) {
                        if (P.customHeaders)
                            for (var A in P.customHeaders) i.headers.set(A, P.customHeaders[A]);
                        P.abortSignal && (i.abortSignal = P.abortSignal), P.timeout && (i.timeout = P.timeout), P.onUploadProgress && (i.onUploadProgress = P.onUploadProgress), P.onDownloadProgress && (i.onDownloadProgress = P.onDownloadProgress)
                    }
                    i.withCredentials = this._withCredentials,
                        function(e, t, n, r) {
                            if (r.requestBody && r.requestBody.mapper) {
                                t.body = jt(e, n, r.requestBody, r.serializer);
                                var i = r.requestBody.mapper,
                                    o = i.required,
                                    a = i.xmlName,
                                    s = i.xmlElementName,
                                    c = i.serializedName,
                                    l = i.type.name;
                                try {
                                    if (null != t.body || o) {
                                        var d = nt(r.requestBody);
                                        t.body = r.serializer.serialize(i, t.body, d);
                                        var p = l === E.Stream;
                                        r.isXML ? l === E.Sequence ? t.body = ct(u.e(t.body, s || a || c), {
                                            rootName: a || c
                                        }) : p || (t.body = ct(t.body, {
                                            rootName: a || c
                                        })) : p || (t.body = JSON.stringify(t.body))
                                    }
                                } catch (e) {
                                    throw new Error('Error "' + e.message + '" occurred in serializing the payload - ' + JSON.stringify(c, void 0, "  ") + ".")
                                }
                            } else if (r.formDataParameters && r.formDataParameters.length > 0) {
                                t.formData = {};
                                for (var f = 0, h = r.formDataParameters; f < h.length; f++) {
                                    var m = h[f],
                                        g = jt(e, n, m, r.serializer);
                                    if (null != g) {
                                        var y = m.mapper.serializedName || nt(m);
                                        t.formData[y] = r.serializer.serialize(m.mapper, g, nt(m))
                                    }
                                }
                            }
                        }(this, i, e, t), null == i.streamResponseBody && (i.streamResponseBody = it(t)), r = this.sendRequest(i).then((function(e) {
                            return function(e, t) {
                                var n = e.parsedHeaders,
                                    r = t && t.bodyMapper,
                                    i = function(t) {
                                        return Object.defineProperty(t, "_response", {
                                            value: e
                                        })
                                    };
                                if (r) {
                                    var a = r.type.name;
                                    if ("Stream" === a) return i(o.__assign({}, n, {
                                        blobBody: e.blobBody,
                                        readableStreamBody: e.readableStreamBody
                                    }));
                                    var s = "Composite" === a && r.type.modelProperties || {},
                                        u = Object.keys(s).some((function(e) {
                                            return "" === s[e].serializedName
                                        }));
                                    if ("Sequence" === a || u) {
                                        for (var c = (e.parsedBody || []).slice(), l = 0, d = Object.keys(s); l < d.length; l++) {
                                            var p = d[l];
                                            s[p].serializedName && (c[p] = e.parsedBody[p])
                                        }
                                        if (n)
                                            for (var f = 0, h = Object.keys(n); f < h.length; f++) c[p = h[f]] = n[p];
                                        return i(c), c
                                    }
                                    if ("Composite" === a || "Dictionary" === a) return i(o.__assign({}, n, e.parsedBody))
                                }
                                return r || "HEAD" === e.request.method ? i(o.__assign({}, n, {
                                    body: e.parsedBody
                                })) : i(o.__assign({}, n, e.parsedBody))
                            }(e, t.responses[e.status])
                        }))
                } catch (e) {
                    r = Promise.reject(e)
                }
                var R = n;
                return R && r.then((function(e) {
                    return R(null, e._response.parsedBody, e._response.request, e._response)
                })).catch((function(e) {
                    return R(e)
                })), r
            }, e
        }();

    function Dt(e, t) {
        var n;
        return "string" == typeof e ? n = e : (n = t(), "function" == typeof e && (n = e(n))), n
    }

    function jt(e, t, n, r) {
        return function e(t, n, r, i, o) {
            var a;
            if ("string" == typeof r && (r = [r]), Array.isArray(r)) {
                if (r.length > 0) {
                    if (i.isConstant) a = i.defaultValue;
                    else {
                        var s = Mt(n, r);
                        s.propertyFound || (s = Mt(t, r));
                        var u = !1;
                        s.propertyFound || (u = i.required || "options" === r[0] && 2 === r.length), a = u ? i.defaultValue : s.propertyValue
                    }
                    var c = rt(r, i);
                    o.serialize(i, a, c)
                }
            } else
                for (var l in i.required && (a = {}), r) {
                    var d = i.type.modelProperties[l],
                        p = r[l],
                        f = e(t, n, p, d, o),
                        h = rt(p, d);
                    o.serialize(d, f, h), void 0 !== f && (a || (a = {}), a[l] = f)
                }
            return a
        }(e, t, n.parameterPath, n.mapper, r)
    }

    function Mt(e, t) {
        for (var n = {
                propertyFound: !1
            }, r = 0; r < t.length; ++r) {
            var i = t[r];
            if (!(null != e && i in e)) break;
            e = e[i]
        }
        return r === t.length && (n.propertyValue = e, n.propertyFound = !0), n
    }
    var Bt = "@nlapps/editor-client-rest-api",
        Lt = "0.3.51",
        kt = function(e) {
            function t(t) {
                var n = this;
                if (t || (t = {}), !t.userAgent) {
                    var r = Ke();
                    t.userAgent = Bt + "/" + Lt + " " + r
                }
                return (n = e.call(this, void 0, t) || this).baseUri = t.baseUri || n.baseUri || "https://nleditor.osi.officeppe.net", n.requestContentType = "application/json; charset=utf-8", null !== t.xCorrelationId && void 0 !== t.xCorrelationId && (n.xCorrelationId = t.xCorrelationId), null !== t.xUserSessionId && void 0 !== t.xUserSessionId && (n.xUserSessionId = t.xUserSessionId), null !== t.xUserId && void 0 !== t.xUserId && (n.xUserId = t.xUserId), null !== t.authorization && void 0 !== t.authorization && (n.authorization = t.authorization), null !== t.serverToServerId && void 0 !== t.serverToServerId && (n.serverToServerId = t.serverToServerId), n
            }
            return o.__extends(t, e), t
        }(xt);
    n.d(t, "EditorService", (function() {
        return zt
    })), n.d(t, "EditorServiceContext", (function() {
        return kt
    })), n.d(t, "EditorServiceModels", (function() {
        return r
    })), n.d(t, "EditorServiceMappers", (function() {
        return i
    }));
    var zt = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return o.__extends(t, e), t.prototype.postCheck = function(e, t, n) {
                return this.sendOperationRequest({
                    body: e,
                    options: t
                }, Ut, n)
            }, t.prototype.getCheck = function(e, t, n, r, i) {
                return this.sendOperationRequest({
                    appId: e,
                    text: t,
                    languageId: n,
                    options: r
                }, Vt, i)
            }, t.prototype.insights = function(e, t, n) {
                return this.sendOperationRequest({
                    body: e,
                    options: t
                }, Wt, n)
            }, t.prototype.browserextension = function(e, t, n) {
                return this.sendOperationRequest({
                    body: e,
                    options: t
                }, Ft, n)
            }, t.prototype.postTileCheck = function(e, t, n) {
                return this.sendOperationRequest({
                    body: e,
                    options: t
                }, Gt, n)
            }, t.prototype.configV1 = function(e, t, n) {
                return this.sendOperationRequest({
                    body: e,
                    options: t
                }, Ht, n)
            }, t.prototype.configV2 = function(e, t, n) {
                return this.sendOperationRequest({
                    body: e,
                    options: t
                }, $t, n)
            }, t.prototype.languageinfo = function(e, t, n) {
                return this.sendOperationRequest({
                    body: e,
                    options: t
                }, Jt, n)
            }, t.prototype.neuralrewrite = function(e, t, n) {
                return this.sendOperationRequest({
                    body: e,
                    options: t
                }, Kt, n)
            }, t.prototype.instrumentation = function(e, t, n) {
                return this.sendOperationRequest({
                    body: e,
                    options: t
                }, Xt, n)
            }, t
        }(kt),
        qt = new c(i),
        Ut = {
            httpMethod: "POST",
            path: "NLEditor/api/V1/Check",
            headerParameters: [Ue, We, Ve],
            requestBody: {
                parameterPath: "body",
                mapper: o.__assign({}, V, {
                    required: !0
                })
            },
            responses: {
                200: {
                    bodyMapper: Y,
                    headersMapper: je
                },
                400: {
                    headersMapper: je
                },
                500: {
                    headersMapper: je
                },
                default: {}
            },
            serializer: qt
        },
        Vt = {
            httpMethod: "GET",
            path: "NLEditor/api/V1/Check",
            queryParameters: [{
                parameterPath: "appId",
                mapper: {
                    required: !0,
                    serializedName: "AppId",
                    type: {
                        name: "String"
                    }
                }
            }, {
                parameterPath: "text",
                mapper: {
                    required: !0,
                    serializedName: "Text",
                    type: {
                        name: "String"
                    }
                }
            }, {
                parameterPath: "languageId",
                mapper: {
                    required: !0,
                    serializedName: "LanguageId",
                    type: {
                        name: "String"
                    }
                }
            }, {
                parameterPath: ["options", "appVersion"],
                mapper: {
                    serializedName: "AppVersion",
                    type: {
                        name: "String"
                    }
                }
            }, {
                parameterPath: ["options", "descriptors0Name"],
                mapper: {
                    serializedName: "Descriptors[0].Name",
                    type: {
                        name: "String"
                    }
                }
            }, {
                parameterPath: ["options", "descriptors0Value"],
                mapper: {
                    serializedName: "Descriptors[0].Value",
                    type: {
                        name: "String"
                    }
                }
            }, {
                parameterPath: ["options", "descriptors1Name"],
                mapper: {
                    serializedName: "Descriptors[1].Name",
                    type: {
                        name: "String"
                    }
                }
            }, {
                parameterPath: ["options", "descriptors1Value"],
                mapper: {
                    serializedName: "Descriptors[1].Value",
                    type: {
                        name: "String"
                    }
                }
            }, {
                parameterPath: ["options", "languageUXId"],
                mapper: {
                    serializedName: "LanguageUXId",
                    type: {
                        name: "String"
                    }
                }
            }, {
                parameterPath: ["options", "runOnProfileId"],
                mapper: {
                    serializedName: "RunOnProfileId",
                    type: {
                        name: "String"
                    }
                }
            }, {
                parameterPath: ["options", "length"],
                mapper: {
                    serializedName: "Length",
                    type: {
                        name: "Number"
                    }
                }
            }, {
                parameterPath: ["options", "start"],
                mapper: {
                    serializedName: "Start",
                    type: {
                        name: "Number"
                    }
                }
            }, {
                parameterPath: ["options", "requestId"],
                mapper: {
                    serializedName: "RequestId",
                    type: {
                        name: "Uuid"
                    }
                }
            }, {
                parameterPath: ["options", "textUnit"],
                mapper: {
                    serializedName: "TextUnit",
                    type: {
                        name: "String"
                    }
                }
            }],
            headerParameters: [Ue, We, Ve],
            responses: {
                200: {
                    bodyMapper: Y,
                    headersMapper: Me
                },
                400: {
                    headersMapper: Me
                },
                500: {
                    headersMapper: Me
                },
                default: {}
            },
            serializer: qt
        },
        Wt = {
            httpMethod: "POST",
            path: "NLEditor/api/V1/Insights",
            headerParameters: [Ue, We, Ve],
            requestBody: {
                parameterPath: "body",
                mapper: o.__assign({}, ge, {
                    required: !0
                })
            },
            responses: {
                200: {
                    bodyMapper: ve
                },
                400: {},
                500: {},
                default: {}
            },
            serializer: qt
        },
        Ft = {
            httpMethod: "POST",
            path: "NLEditor/api/V1/BrowserExtension",
            headerParameters: [Ue, We, Ve],
            requestBody: {
                parameterPath: "body",
                mapper: o.__assign({}, x, {
                    required: !0
                })
            },
            responses: {
                200: {
                    bodyMapper: D
                },
                400: {},
                500: {},
                default: {}
            },
            serializer: qt
        },
        Gt = {
            httpMethod: "POST",
            path: "NLEditor/api/V1/TileCheck",
            headerParameters: [Ue, We, Ve],
            requestBody: {
                parameterPath: "body",
                mapper: o.__assign({}, Ae, {
                    required: !0
                })
            },
            responses: {
                200: {
                    bodyMapper: xe,
                    headersMapper: Be
                },
                400: {
                    headersMapper: Be
                },
                500: {
                    headersMapper: Be
                },
                default: {}
            },
            serializer: qt
        },
        Ht = {
            httpMethod: "POST",
            path: "NLEditor/api/V1/Config",
            headerParameters: [Ue, We, Ve],
            requestBody: {
                parameterPath: "body",
                mapper: o.__assign({}, ce, {
                    required: !0
                })
            },
            responses: {
                200: {
                    bodyMapper: fe,
                    headersMapper: Le
                },
                400: {
                    headersMapper: Le
                },
                500: {
                    headersMapper: Le
                },
                default: {}
            },
            serializer: qt
        },
        $t = {
            httpMethod: "POST",
            path: "NLEditor/Config/V2",
            headerParameters: [Ue, We, Ve],
            requestBody: {
                parameterPath: "body",
                mapper: o.__assign({}, he, {
                    required: !0
                })
            },
            responses: {
                200: {
                    bodyMapper: me,
                    headersMapper: ke
                },
                400: {
                    headersMapper: ke
                },
                500: {
                    headersMapper: ke
                },
                default: {}
            },
            serializer: qt
        },
        Jt = {
            httpMethod: "POST",
            path: "NLEditor/api/V1/LanguageInfo",
            headerParameters: [Ue, We, Ve],
            requestBody: {
                parameterPath: "body",
                mapper: o.__assign({}, be, {
                    required: !0
                })
            },
            responses: {
                200: {
                    bodyMapper: Ie,
                    headersMapper: ze
                },
                400: {
                    headersMapper: ze
                },
                500: {
                    headersMapper: ze
                },
                default: {}
            },
            serializer: qt
        },
        Kt = {
            httpMethod: "POST",
            path: "NLEditor/api/V1/NeuralRewrite",
            headerParameters: [Ue, We, Ve],
            requestBody: {
                parameterPath: "body",
                mapper: o.__assign({}, Oe, {
                    required: !0
                })
            },
            responses: {
                200: {
                    bodyMapper: Pe
                },
                400: {},
                500: {},
                default: {}
            },
            serializer: qt
        },
        Xt = {
            httpMethod: "POST",
            path: "NLEditor/api/V1/Instrumentation",
            headerParameters: [Ue, We, {
                parameterPath: "serverToServerId",
                mapper: {
                    serializedName: "ServerToServerId",
                    type: {
                        name: "String"
                    }
                }
            }],
            requestBody: {
                parameterPath: "body",
                mapper: o.__assign({}, _e, {
                    required: !0
                })
            },
            responses: {
                200: {
                    headersMapper: qe
                },
                400: {
                    headersMapper: qe
                },
                500: {
                    headersMapper: qe
                },
                default: {}
            },
            serializer: qt
        }
}, , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    var r = n(10),
        i = function() {
            function e() {
                this._rawQuery = {}
            }
            return e.prototype.any = function() {
                return Object.keys(this._rawQuery).length > 0
            }, e.prototype.set = function(e, t) {
                if (e)
                    if (null != t) {
                        var n = Array.isArray(t) ? t : t.toString();
                        this._rawQuery[e] = n
                    } else delete this._rawQuery[e]
            }, e.prototype.get = function(e) {
                return e ? this._rawQuery[e] : void 0
            }, e.prototype.toString = function() {
                var e = "";
                for (var t in this._rawQuery) {
                    e && (e += "&");
                    var n = this._rawQuery[t];
                    if (Array.isArray(n)) {
                        for (var r = [], i = 0, o = n; i < o.length; i++) {
                            var a = o[i];
                            r.push(t + "=" + a)
                        }
                        e += r.join("&")
                    } else e += t + "=" + n
                }
                return e
            }, e.parse = function(t) {
                var n = new e;
                if (t) {
                    t.startsWith("?") && (t = t.substring(1));
                    for (var r = "ParameterName", i = "", o = "", a = 0; a < t.length; ++a) {
                        var s = t[a];
                        switch (r) {
                            case "ParameterName":
                                switch (s) {
                                    case "=":
                                        r = "ParameterValue";
                                        break;
                                    case "&":
                                        i = "", o = "";
                                        break;
                                    default:
                                        i += s
                                }
                                break;
                            case "ParameterValue":
                                switch (s) {
                                    case "=":
                                        i = "", o = "", r = "Invalid";
                                        break;
                                    case "&":
                                        n.set(i, o), i = "", o = "", r = "ParameterName";
                                        break;
                                    default:
                                        o += s
                                }
                                break;
                            case "Invalid":
                                "&" === s && (r = "ParameterName");
                                break;
                            default:
                                throw new Error("Unrecognized URLQuery parse state: " + r)
                        }
                    }
                    "ParameterValue" === r && n.set(i, o)
                }
                return n
            }, e
        }(),
        o = function() {
            function e() {}
            return e.prototype.setScheme = function(e) {
                e ? this.set(e, "SCHEME") : this._scheme = void 0
            }, e.prototype.getScheme = function() {
                return this._scheme
            }, e.prototype.setHost = function(e) {
                e ? this.set(e, "SCHEME_OR_HOST") : this._host = void 0
            }, e.prototype.getHost = function() {
                return this._host
            }, e.prototype.setPort = function(e) {
                null == e || "" === e ? this._port = void 0 : this.set(e.toString(), "PORT")
            }, e.prototype.getPort = function() {
                return this._port
            }, e.prototype.setPath = function(e) {
                e ? -1 !== e.indexOf("://") ? this.set(e, "SCHEME") : this.set(e, "PATH") : this._path = void 0
            }, e.prototype.appendPath = function(e) {
                if (e) {
                    var t = this.getPath();
                    t && (t.endsWith("/") || (t += "/"), e.startsWith("/") && (e = e.substring(1)), e = t + e), this.set(e, "PATH")
                }
            }, e.prototype.getPath = function() {
                return this._path
            }, e.prototype.setQuery = function(e) {
                this._query = e ? i.parse(e) : void 0
            }, e.prototype.setQueryParameter = function(e, t) {
                e && (this._query || (this._query = new i), this._query.set(e, t))
            }, e.prototype.getQueryParameterValue = function(e) {
                return this._query ? this._query.get(e) : void 0
            }, e.prototype.getQuery = function() {
                return this._query ? this._query.toString() : void 0
            }, e.prototype.set = function(e, t) {
                for (var n = new s(e, t); n.next();) {
                    var r = n.current();
                    if (r) switch (r.type) {
                        case "SCHEME":
                            this._scheme = r.text || void 0;
                            break;
                        case "HOST":
                            this._host = r.text || void 0;
                            break;
                        case "PORT":
                            this._port = r.text || void 0;
                            break;
                        case "PATH":
                            var o = r.text || void 0;
                            this._path && "/" !== this._path && "/" === o || (this._path = o);
                            break;
                        case "QUERY":
                            this._query = i.parse(r.text);
                            break;
                        default:
                            throw new Error("Unrecognized URLTokenType: " + r.type)
                    }
                }
            }, e.prototype.toString = function() {
                var e = "";
                return this._scheme && (e += this._scheme + "://"), this._host && (e += this._host), this._port && (e += ":" + this._port), this._path && (this._path.startsWith("/") || (e += "/"), e += this._path), this._query && this._query.any() && (e += "?" + this._query.toString()), e
            }, e.prototype.replaceAll = function(e, t) {
                e && (this.setScheme(Object(r.f)(this.getScheme(), e, t)), this.setHost(Object(r.f)(this.getHost(), e, t)), this.setPort(Object(r.f)(this.getPort(), e, t)), this.setPath(Object(r.f)(this.getPath(), e, t)), this.setQuery(Object(r.f)(this.getQuery(), e, t)))
            }, e.parse = function(t) {
                var n = new e;
                return n.set(t, "SCHEME_OR_HOST"), n
            }, e
        }(),
        a = function() {
            function e(e, t) {
                this.text = e, this.type = t
            }
            return e.scheme = function(t) {
                return new e(t, "SCHEME")
            }, e.host = function(t) {
                return new e(t, "HOST")
            }, e.port = function(t) {
                return new e(t, "PORT")
            }, e.path = function(t) {
                return new e(t, "PATH")
            }, e.query = function(t) {
                return new e(t, "QUERY")
            }, e
        }(),
        s = function() {
            function e(e, t) {
                this._text = e, this._textLength = e ? e.length : 0, this._currentState = null != t ? t : "SCHEME_OR_HOST", this._currentIndex = 0
            }
            return e.prototype.current = function() {
                return this._currentToken
            }, e.prototype.next = function() {
                if (u(this)) switch (this._currentState) {
                    case "SCHEME":
                        t = function(e) {
                            return p(e, (function(e) {
                                return function(e) {
                                    var t = e.charCodeAt(0);
                                    return 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122
                                }(e)
                            }))
                        }(e = this), e._currentToken = a.scheme(t), u(e) ? e._currentState = "HOST" : e._currentState = "DONE";
                        break;
                    case "SCHEME_OR_HOST":
                        ! function(e) {
                            var t = f(e, ":", "/", "?");
                            u(e) ? ":" === c(e) ? "://" === d(e, 3) ? (e._currentToken = a.scheme(t), e._currentState = "HOST") : (e._currentToken = a.host(t), e._currentState = "PORT") : (e._currentToken = a.host(t), "/" === c(e) ? e._currentState = "PATH" : e._currentState = "QUERY") : (e._currentToken = a.host(t), e._currentState = "DONE")
                        }(this);
                        break;
                    case "HOST":
                        ! function(e) {
                            "://" === d(e, 3) && l(e, 3);
                            var t = f(e, ":", "/", "?");
                            e._currentToken = a.host(t), u(e) ? ":" === c(e) ? e._currentState = "PORT" : "/" === c(e) ? e._currentState = "PATH" : e._currentState = "QUERY" : e._currentState = "DONE"
                        }(this);
                        break;
                    case "PORT":
                        ! function(e) {
                            ":" === c(e) && l(e);
                            var t = f(e, "/", "?");
                            e._currentToken = a.port(t), u(e) ? "/" === c(e) ? e._currentState = "PATH" : e._currentState = "QUERY" : e._currentState = "DONE"
                        }(this);
                        break;
                    case "PATH":
                        ! function(e) {
                            var t = f(e, "?");
                            e._currentToken = a.path(t), u(e) ? e._currentState = "QUERY" : e._currentState = "DONE"
                        }(this);
                        break;
                    case "QUERY":
                        ! function(e) {
                            "?" === c(e) && l(e);
                            var t = function(e) {
                                var t = "";
                                return e._currentIndex < e._textLength && (t = e._text.substring(e._currentIndex), e._currentIndex = e._textLength), t
                            }(e);
                            e._currentToken = a.query(t), e._currentState = "DONE"
                        }(this);
                        break;
                    default:
                        throw new Error("Unrecognized URLTokenizerState: " + this._currentState)
                } else this._currentToken = void 0;
                var e, t;
                return !!this._currentToken
            }, e
        }();

    function u(e) {
        return e._currentIndex < e._textLength
    }

    function c(e) {
        return e._text[e._currentIndex]
    }

    function l(e, t) {
        u(e) && (t || (t = 1), e._currentIndex += t)
    }

    function d(e, t) {
        var n = e._currentIndex + t;
        return e._textLength < n && (n = e._textLength), e._text.substring(e._currentIndex, n)
    }

    function p(e, t) {
        for (var n = ""; u(e);) {
            var r = c(e);
            if (!t(r)) break;
            n += r, l(e)
        }
        return n
    }

    function f(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return p(e, (function(e) {
            return -1 === t.indexOf(e)
        }))
    }
}, , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.InjectionTypes = {
        IContentScriptInjector: Symbol.for("IContentScriptInjector"),
        ITabsSelector: Symbol.for("ITabsSelector"),
        INativeContextMenu: Symbol.for("INativeContextMenu"),
        IContextMenuEventListener: Symbol.for("IContextMenuEventListener"),
        ILanguageInfoLoader: Symbol.for("ILanguageInfoLoader"),
        EditorService: Symbol.for("EditorService"),
        IRemoteSettingsSyncer: Symbol.for("IRemoteSettingsSyncer"),
        ISessionContextProvider: Symbol.for("ISessionContextProvider")
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(74),
        i = function() {
            function e(e) {
                this._binding = e
            }
            return e.prototype.onActivation = function(e) {
                return this._binding.onActivation = e, new r.BindingWhenSyntax(this._binding)
            }, e
        }();
    t.BindingOnSyntax = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(73),
        i = n(109),
        o = function() {
            function e(e) {
                this._binding = e
            }
            return e.prototype.when = function(e) {
                return this._binding.constraint = e, new r.BindingOnSyntax(this._binding)
            }, e.prototype.whenTargetNamed = function(e) {
                return this._binding.constraint = i.namedConstraint(e), new r.BindingOnSyntax(this._binding)
            }, e.prototype.whenTargetIsDefault = function() {
                return this._binding.constraint = function(e) {
                    return null !== e.target && !e.target.isNamed() && !e.target.isTagged()
                }, new r.BindingOnSyntax(this._binding)
            }, e.prototype.whenTargetTagged = function(e, t) {
                return this._binding.constraint = i.taggedConstraint(e)(t), new r.BindingOnSyntax(this._binding)
            }, e.prototype.whenInjectedInto = function(e) {
                return this._binding.constraint = function(t) {
                    return i.typeConstraint(e)(t.parentRequest)
                }, new r.BindingOnSyntax(this._binding)
            }, e.prototype.whenParentNamed = function(e) {
                return this._binding.constraint = function(t) {
                    return i.namedConstraint(e)(t.parentRequest)
                }, new r.BindingOnSyntax(this._binding)
            }, e.prototype.whenParentTagged = function(e, t) {
                return this._binding.constraint = function(n) {
                    return i.taggedConstraint(e)(t)(n.parentRequest)
                }, new r.BindingOnSyntax(this._binding)
            }, e.prototype.whenAnyAncestorIs = function(e) {
                return this._binding.constraint = function(t) {
                    return i.traverseAncerstors(t, i.typeConstraint(e))
                }, new r.BindingOnSyntax(this._binding)
            }, e.prototype.whenNoAncestorIs = function(e) {
                return this._binding.constraint = function(t) {
                    return !i.traverseAncerstors(t, i.typeConstraint(e))
                }, new r.BindingOnSyntax(this._binding)
            }, e.prototype.whenAnyAncestorNamed = function(e) {
                return this._binding.constraint = function(t) {
                    return i.traverseAncerstors(t, i.namedConstraint(e))
                }, new r.BindingOnSyntax(this._binding)
            }, e.prototype.whenNoAncestorNamed = function(e) {
                return this._binding.constraint = function(t) {
                    return !i.traverseAncerstors(t, i.namedConstraint(e))
                }, new r.BindingOnSyntax(this._binding)
            }, e.prototype.whenAnyAncestorTagged = function(e, t) {
                return this._binding.constraint = function(n) {
                    return i.traverseAncerstors(n, i.taggedConstraint(e)(t))
                }, new r.BindingOnSyntax(this._binding)
            }, e.prototype.whenNoAncestorTagged = function(e, t) {
                return this._binding.constraint = function(n) {
                    return !i.traverseAncerstors(n, i.taggedConstraint(e)(t))
                }, new r.BindingOnSyntax(this._binding)
            }, e.prototype.whenAnyAncestorMatches = function(e) {
                return this._binding.constraint = function(t) {
                    return i.traverseAncerstors(t, e)
                }, new r.BindingOnSyntax(this._binding)
            }, e.prototype.whenNoAncestorMatches = function(e) {
                return this._binding.constraint = function(t) {
                    return !i.traverseAncerstors(t, e)
                }, new r.BindingOnSyntax(this._binding)
            }, e
        }();
    t.BindingWhenSyntax = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(63),
        s = function() {
            function e(e) {
                this._localStorage = e
            }
            var t;
            return e.prototype.getLastError = function() {
                return this._lastError
            }, e.prototype.setLastError = function(e) {
                this._lastError = e
            }, e.prototype.writeSetting = function(e, t) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var n;
                    return r.__generator(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return n = {
                                    value: JSON.stringify(t),
                                    lastUpdated: Date.now(),
                                    manualOverride: !1
                                }, [4, this._localStorage.setItem(e, JSON.stringify(n))];
                            case 1:
                                return r.sent(), [2]
                        }
                    }))
                }))
            }, r.__decorate([i.injectable(), r.__param(0, i.inject(o.SharedInjectionTypes.IExtensionStorage)), r.__metadata("design:paramtypes", ["function" == typeof(t = void 0 !== a.IExtensionStorage && a.IExtensionStorage) ? t : Object])], e)
        }();
    t.SettingsStorageBase = s
}, , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(15),
        i = function() {
            function e() {}
            return e.prototype.getConstructorMetadata = function(e) {
                return {
                    compilerGeneratedMetadata: Reflect.getMetadata(r.PARAM_TYPES, e),
                    userGeneratedMetadata: Reflect.getMetadata(r.TAGGED, e) || {}
                }
            }, e.prototype.getPropertiesMetadata = function(e) {
                return Reflect.getMetadata(r.TAGGED_PROP, e) || []
            }, e
        }();
    t.MetadataReader = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(21);
    t.isStackOverflowExeption = function(e) {
        return e instanceof RangeError || e.message === r.STACK_OVERFLOW
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(21),
        i = n(15),
        o = n(22),
        a = n(35),
        s = function() {
            function e(e) {
                this._cb = e
            }
            return e.prototype.unwrap = function() {
                return this._cb()
            }, e
        }();
    t.LazyServiceIdentifer = s, t.inject = function(e) {
        return function(t, n, s) {
            if (void 0 === e) throw new Error(r.UNDEFINED_INJECT_ANNOTATION(t.name));
            var u = new o.Metadata(i.INJECT_TAG, e);
            "number" == typeof s ? a.tagParameter(t, n, s, u) : a.tagProperty(t, n, u)
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(15),
        i = n(40),
        o = n(22),
        a = n(151),
        s = function() {
            function e(e, t, n, s) {
                this.id = i.id(), this.type = e, this.serviceIdentifier = n, this.name = new a.QueryableString(t || ""), this.metadata = new Array;
                var u = null;
                "string" == typeof s ? u = new o.Metadata(r.NAMED_TAG, s) : s instanceof o.Metadata && (u = s), null !== u && this.metadata.push(u)
            }
            return e.prototype.hasTag = function(e) {
                for (var t = 0, n = this.metadata; t < n.length; t++)
                    if (n[t].key === e) return !0;
                return !1
            }, e.prototype.isArray = function() {
                return this.hasTag(r.MULTI_INJECT_TAG)
            }, e.prototype.matchesArray = function(e) {
                return this.matchesTag(r.MULTI_INJECT_TAG)(e)
            }, e.prototype.isNamed = function() {
                return this.hasTag(r.NAMED_TAG)
            }, e.prototype.isTagged = function() {
                return this.metadata.some((function(e) {
                    return e.key !== r.INJECT_TAG && e.key !== r.MULTI_INJECT_TAG && e.key !== r.NAME_TAG && e.key !== r.UNMANAGED_TAG && e.key !== r.NAMED_TAG
                }))
            }, e.prototype.isOptional = function() {
                return this.matchesTag(r.OPTIONAL_TAG)(!0)
            }, e.prototype.getNamedTag = function() {
                return this.isNamed() ? this.metadata.filter((function(e) {
                    return e.key === r.NAMED_TAG
                }))[0] : null
            }, e.prototype.getCustomTags = function() {
                return this.isTagged() ? this.metadata.filter((function(e) {
                    return e.key !== r.INJECT_TAG && e.key !== r.MULTI_INJECT_TAG && e.key !== r.NAME_TAG && e.key !== r.UNMANAGED_TAG && e.key !== r.NAMED_TAG
                })) : null
            }, e.prototype.matchesNamedTag = function(e) {
                return this.matchesTag(r.NAMED_TAG)(e)
            }, e.prototype.matchesTag = function(e) {
                var t = this;
                return function(n) {
                    for (var r = 0, i = t.metadata; r < i.length; r++) {
                        var o = i[r];
                        if (o.key === e && o.value === n) return !0
                    }
                    return !1
                }
            }, e
        }();
    t.Target = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(73),
        i = n(74),
        o = function() {
            function e(e) {
                this._binding = e, this._bindingWhenSyntax = new i.BindingWhenSyntax(this._binding), this._bindingOnSyntax = new r.BindingOnSyntax(this._binding)
            }
            return e.prototype.when = function(e) {
                return this._bindingWhenSyntax.when(e)
            }, e.prototype.whenTargetNamed = function(e) {
                return this._bindingWhenSyntax.whenTargetNamed(e)
            }, e.prototype.whenTargetIsDefault = function() {
                return this._bindingWhenSyntax.whenTargetIsDefault()
            }, e.prototype.whenTargetTagged = function(e, t) {
                return this._bindingWhenSyntax.whenTargetTagged(e, t)
            }, e.prototype.whenInjectedInto = function(e) {
                return this._bindingWhenSyntax.whenInjectedInto(e)
            }, e.prototype.whenParentNamed = function(e) {
                return this._bindingWhenSyntax.whenParentNamed(e)
            }, e.prototype.whenParentTagged = function(e, t) {
                return this._bindingWhenSyntax.whenParentTagged(e, t)
            }, e.prototype.whenAnyAncestorIs = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorIs(e)
            }, e.prototype.whenNoAncestorIs = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorIs(e)
            }, e.prototype.whenAnyAncestorNamed = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorNamed(e)
            }, e.prototype.whenAnyAncestorTagged = function(e, t) {
                return this._bindingWhenSyntax.whenAnyAncestorTagged(e, t)
            }, e.prototype.whenNoAncestorNamed = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorNamed(e)
            }, e.prototype.whenNoAncestorTagged = function(e, t) {
                return this._bindingWhenSyntax.whenNoAncestorTagged(e, t)
            }, e.prototype.whenAnyAncestorMatches = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorMatches(e)
            }, e.prototype.whenNoAncestorMatches = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorMatches(e)
            }, e.prototype.onActivation = function(e) {
                return this._bindingOnSyntax.onActivation(e)
            }, e
        }();
    t.BindingWhenOnSyntax = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(15),
        i = n(22),
        o = function(e, t) {
            var n = e.parentRequest;
            return null !== n && (!!t(n) || o(n, t))
        };
    t.traverseAncerstors = o;
    var a = function(e) {
        return function(t) {
            var n = function(n) {
                return null !== n && null !== n.target && n.target.matchesTag(e)(t)
            };
            return n.metaData = new i.Metadata(e, t), n
        }
    };
    t.taggedConstraint = a;
    var s = a(r.NAMED_TAG);
    t.namedConstraint = s, t.typeConstraint = function(e) {
        return function(t) {
            var n = null;
            if (null !== t) {
                if (n = t.bindings[0], "string" == typeof e) return n.serviceIdentifier === e;
                var r = t.bindings[0].implementationType;
                return e === r
            }
            return !1
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.removeFromArray = function(e, t) {
        for (var n = !1, r = 0; r < e.length; r += 1) e[r] === t && (n = !0, e.splice(r, 1), r -= 1);
        return n
    }, t.createNewRegistration = function() {
        return {
            listeners: []
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            ! function(e) {
                e.Default = "Default", e.Word = "Word", e.Phrase = "Phrase", e.Sentence = "Sentence", e.Paragraph = "Paragraph", e.Page = "Page", e.Section = "Section", e.Chapter = "Chapter", e.Document = "Document", e.RawChars = "RawChars"
            }(e.TextUnit || (e.TextUnit = {}))
        }(t.Utils || (t.Utils = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            e[e.Remote = 0] = "Remote", e[e.System = 1] = "System", e[e.User = 2] = "User"
        }(t.SettingType || (t.SettingType = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, , , , function(e, t, n) {
    var r = n(120),
        i = n(121);
    e.exports = function(e, t, n) {
        var o = t && n || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
        var a = (e = e || {}).random || (e.rng || r)();
        if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
            for (var s = 0; s < 16; ++s) t[o + s] = a[s];
        return t || i(a)
    }
}, , function(e, t, n) {
    (function(e, t) {
        /*! *****************************************************************************
        Copyright (C) Microsoft. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0

        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.

        See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */
        var n;
        ! function(n) {
            ! function(r) {
                var i = "object" == typeof t ? t : "object" == typeof self ? self : "object" == typeof this ? this : Function("return this;")(),
                    o = a(n);

                function a(e, t) {
                    return function(n, r) {
                        "function" != typeof e[n] && Object.defineProperty(e, n, {
                            configurable: !0,
                            writable: !0,
                            value: r
                        }), t && t(n, r)
                    }
                }
                void 0 === i.Reflect ? i.Reflect = n : o = a(i.Reflect, o),
                    function(t) {
                        var n = Object.prototype.hasOwnProperty,
                            r = "function" == typeof Symbol,
                            i = r && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive",
                            o = r && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
                            a = "function" == typeof Object.create,
                            s = {
                                __proto__: []
                            }
                        instanceof Array, u = !a && !s, c = {
                            create: a ? function() {
                                return x(Object.create(null))
                            } : s ? function() {
                                return x({
                                    __proto__: null
                                })
                            } : function() {
                                return x({})
                            },
                            has: u ? function(e, t) {
                                return n.call(e, t)
                            } : function(e, t) {
                                return t in e
                            },
                            get: u ? function(e, t) {
                                return n.call(e, t) ? e[t] : void 0
                            } : function(e, t) {
                                return e[t]
                            }
                        }, l = Object.getPrototypeOf(Function), d = "object" == typeof e && e.env && "true" === e.env.REFLECT_METADATA_USE_MAP_POLYFILL, p = d || "function" != typeof Map || "function" != typeof Map.prototype.entries ? function() {
                            var e = {},
                                t = [],
                                n = function() {
                                    function e(e, t, n) {
                                        this._index = 0, this._keys = e, this._values = t, this._selector = n
                                    }
                                    return e.prototype["@@iterator"] = function() {
                                        return this
                                    }, e.prototype[o] = function() {
                                        return this
                                    }, e.prototype.next = function() {
                                        var e = this._index;
                                        if (e >= 0 && e < this._keys.length) {
                                            var n = this._selector(this._keys[e], this._values[e]);
                                            return e + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, {
                                                value: n,
                                                done: !1
                                            }
                                        }
                                        return {
                                            value: void 0,
                                            done: !0
                                        }
                                    }, e.prototype.throw = function(e) {
                                        throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), e
                                    }, e.prototype.return = function(e) {
                                        return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), {
                                            value: e,
                                            done: !0
                                        }
                                    }, e
                                }();
                            return function() {
                                function t() {
                                    this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2
                                }
                                return Object.defineProperty(t.prototype, "size", {
                                    get: function() {
                                        return this._keys.length
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                }), t.prototype.has = function(e) {
                                    return this._find(e, !1) >= 0
                                }, t.prototype.get = function(e) {
                                    var t = this._find(e, !1);
                                    return t >= 0 ? this._values[t] : void 0
                                }, t.prototype.set = function(e, t) {
                                    var n = this._find(e, !0);
                                    return this._values[n] = t, this
                                }, t.prototype.delete = function(t) {
                                    var n = this._find(t, !1);
                                    if (n >= 0) {
                                        for (var r = this._keys.length, i = n + 1; i < r; i++) this._keys[i - 1] = this._keys[i], this._values[i - 1] = this._values[i];
                                        return this._keys.length--, this._values.length--, t === this._cacheKey && (this._cacheKey = e, this._cacheIndex = -2), !0
                                    }
                                    return !1
                                }, t.prototype.clear = function() {
                                    this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2
                                }, t.prototype.keys = function() {
                                    return new n(this._keys, this._values, r)
                                }, t.prototype.values = function() {
                                    return new n(this._keys, this._values, i)
                                }, t.prototype.entries = function() {
                                    return new n(this._keys, this._values, a)
                                }, t.prototype["@@iterator"] = function() {
                                    return this.entries()
                                }, t.prototype[o] = function() {
                                    return this.entries()
                                }, t.prototype._find = function(e, t) {
                                    return this._cacheKey !== e && (this._cacheIndex = this._keys.indexOf(this._cacheKey = e)), this._cacheIndex < 0 && t && (this._cacheIndex = this._keys.length, this._keys.push(e), this._values.push(void 0)), this._cacheIndex
                                }, t
                            }();

                            function r(e, t) {
                                return e
                            }

                            function i(e, t) {
                                return t
                            }

                            function a(e, t) {
                                return [e, t]
                            }
                        }() : Map, f = d || "function" != typeof Set || "function" != typeof Set.prototype.entries ? function() {
                            function e() {
                                this._map = new p
                            }
                            return Object.defineProperty(e.prototype, "size", {
                                get: function() {
                                    return this._map.size
                                },
                                enumerable: !0,
                                configurable: !0
                            }), e.prototype.has = function(e) {
                                return this._map.has(e)
                            }, e.prototype.add = function(e) {
                                return this._map.set(e, e), this
                            }, e.prototype.delete = function(e) {
                                return this._map.delete(e)
                            }, e.prototype.clear = function() {
                                this._map.clear()
                            }, e.prototype.keys = function() {
                                return this._map.keys()
                            }, e.prototype.values = function() {
                                return this._map.values()
                            }, e.prototype.entries = function() {
                                return this._map.entries()
                            }, e.prototype["@@iterator"] = function() {
                                return this.keys()
                            }, e.prototype[o] = function() {
                                return this.keys()
                            }, e
                        }() : Set, h = new(d || "function" != typeof WeakMap ? function() {
                            var e = 16,
                                t = c.create(),
                                r = i();
                            return function() {
                                function e() {
                                    this._key = i()
                                }
                                return e.prototype.has = function(e) {
                                    var t = o(e, !1);
                                    return void 0 !== t && c.has(t, this._key)
                                }, e.prototype.get = function(e) {
                                    var t = o(e, !1);
                                    return void 0 !== t ? c.get(t, this._key) : void 0
                                }, e.prototype.set = function(e, t) {
                                    return o(e, !0)[this._key] = t, this
                                }, e.prototype.delete = function(e) {
                                    var t = o(e, !1);
                                    return void 0 !== t && delete t[this._key]
                                }, e.prototype.clear = function() {
                                    this._key = i()
                                }, e
                            }();

                            function i() {
                                var e;
                                do {
                                    e = "@@WeakMap@@" + s()
                                } while (c.has(t, e));
                                return t[e] = !0, e
                            }

                            function o(e, t) {
                                if (!n.call(e, r)) {
                                    if (!t) return;
                                    Object.defineProperty(e, r, {
                                        value: c.create()
                                    })
                                }
                                return e[r]
                            }

                            function a(e, t) {
                                for (var n = 0; n < t; ++n) e[n] = 255 * Math.random() | 0;
                                return e
                            }

                            function s() {
                                var t, n = (t = e, "function" == typeof Uint8Array ? "undefined" != typeof crypto ? crypto.getRandomValues(new Uint8Array(t)) : "undefined" != typeof msCrypto ? msCrypto.getRandomValues(new Uint8Array(t)) : a(new Uint8Array(t), t) : a(new Array(t), t));
                                n[6] = 79 & n[6] | 64, n[8] = 191 & n[8] | 128;
                                for (var r = "", i = 0; i < e; ++i) {
                                    var o = n[i];
                                    4 !== i && 6 !== i && 8 !== i || (r += "-"), o < 16 && (r += "0"), r += o.toString(16).toLowerCase()
                                }
                                return r
                            }
                        }() : WeakMap);

                        function m(e, t, n) {
                            var r = h.get(e);
                            if (S(r)) {
                                if (!n) return;
                                r = new p, h.set(e, r)
                            }
                            var i = r.get(t);
                            if (S(i)) {
                                if (!n) return;
                                i = new p, r.set(t, i)
                            }
                            return i
                        }

                        function g(e, t, n) {
                            var r = m(t, n, !1);
                            return !S(r) && !!r.has(e)
                        }

                        function y(e, t, n) {
                            var r = m(t, n, !1);
                            if (!S(r)) return r.get(e)
                        }

                        function v(e, t, n, r) {
                            m(n, r, !0).set(e, t)
                        }

                        function _(e, t) {
                            var n = [],
                                r = m(e, t, !1);
                            if (S(r)) return n;
                            for (var i = function(e) {
                                    var t = O(e, o);
                                    if (!E(t)) throw new TypeError;
                                    var n = t.call(e);
                                    if (!T(n)) throw new TypeError;
                                    return n
                                }(r.keys()), a = 0;;) {
                                var s = P(i);
                                if (!s) return n.length = a, n;
                                var u = s.value;
                                try {
                                    n[a] = u
                                } catch (e) {
                                    try {
                                        A(i)
                                    } finally {
                                        throw e
                                    }
                                }
                                a++
                            }
                        }

                        function b(e) {
                            if (null === e) return 1;
                            switch (typeof e) {
                                case "undefined":
                                    return 0;
                                case "boolean":
                                    return 2;
                                case "string":
                                    return 3;
                                case "symbol":
                                    return 4;
                                case "number":
                                    return 5;
                                case "object":
                                    return null === e ? 1 : 6;
                                default:
                                    return 6
                            }
                        }

                        function S(e) {
                            return void 0 === e
                        }

                        function I(e) {
                            return null === e
                        }

                        function T(e) {
                            return "object" == typeof e ? null !== e : "function" == typeof e
                        }

                        function w(e) {
                            var t = function(e, t) {
                                switch (b(e)) {
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                    case 4:
                                    case 5:
                                        return e
                                }
                                var n = 3 === t ? "string" : 5 === t ? "number" : "default",
                                    r = O(e, i);
                                if (void 0 !== r) {
                                    var o = r.call(e, n);
                                    if (T(o)) throw new TypeError;
                                    return o
                                }
                                return function(e, t) {
                                    if ("string" === t) {
                                        var n = e.toString;
                                        if (E(n) && !T(i = n.call(e))) return i;
                                        if (E(r = e.valueOf) && !T(i = r.call(e))) return i
                                    } else {
                                        var r;
                                        if (E(r = e.valueOf) && !T(i = r.call(e))) return i;
                                        var i, o = e.toString;
                                        if (E(o) && !T(i = o.call(e))) return i
                                    }
                                    throw new TypeError
                                }(e, "default" === n ? "number" : n)
                            }(e, 3);
                            return "symbol" == typeof t ? t : function(e) {
                                return "" + e
                            }(t)
                        }

                        function C(e) {
                            return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : "[object Array]" === Object.prototype.toString.call(e)
                        }

                        function E(e) {
                            return "function" == typeof e
                        }

                        function N(e) {
                            return "function" == typeof e
                        }

                        function O(e, t) {
                            var n = e[t];
                            if (null != n) {
                                if (!E(n)) throw new TypeError;
                                return n
                            }
                        }

                        function P(e) {
                            var t = e.next();
                            return !t.done && t
                        }

                        function A(e) {
                            var t = e.return;
                            t && t.call(e)
                        }

                        function R(e) {
                            var t = Object.getPrototypeOf(e);
                            if ("function" != typeof e || e === l) return t;
                            if (t !== l) return t;
                            var n = e.prototype,
                                r = n && Object.getPrototypeOf(n);
                            if (null == r || r === Object.prototype) return t;
                            var i = r.constructor;
                            return "function" != typeof i ? t : i === e ? t : i
                        }

                        function x(e) {
                            return e.__ = void 0, delete e.__, e
                        }
                        t("decorate", (function(e, t, n, r) {
                            if (S(n)) {
                                if (!C(e)) throw new TypeError;
                                if (!N(t)) throw new TypeError;
                                return function(e, t) {
                                    for (var n = e.length - 1; n >= 0; --n) {
                                        var r = (0, e[n])(t);
                                        if (!S(r) && !I(r)) {
                                            if (!N(r)) throw new TypeError;
                                            t = r
                                        }
                                    }
                                    return t
                                }(e, t)
                            }
                            if (!C(e)) throw new TypeError;
                            if (!T(t)) throw new TypeError;
                            if (!T(r) && !S(r) && !I(r)) throw new TypeError;
                            return I(r) && (r = void 0),
                                function(e, t, n, r) {
                                    for (var i = e.length - 1; i >= 0; --i) {
                                        var o = (0, e[i])(t, n, r);
                                        if (!S(o) && !I(o)) {
                                            if (!T(o)) throw new TypeError;
                                            r = o
                                        }
                                    }
                                    return r
                                }(e, t, n = w(n), r)
                        })), t("metadata", (function(e, t) {
                            return function(n, r) {
                                if (!T(n)) throw new TypeError;
                                if (!S(r) && ! function(e) {
                                        switch (b(e)) {
                                            case 3:
                                            case 4:
                                                return !0;
                                            default:
                                                return !1
                                        }
                                    }(r)) throw new TypeError;
                                v(e, t, n, r)
                            }
                        })), t("defineMetadata", (function(e, t, n, r) {
                            if (!T(n)) throw new TypeError;
                            return S(r) || (r = w(r)), v(e, t, n, r)
                        })), t("hasMetadata", (function(e, t, n) {
                            if (!T(t)) throw new TypeError;
                            return S(n) || (n = w(n)),
                                function e(t, n, r) {
                                    if (g(t, n, r)) return !0;
                                    var i = R(n);
                                    return !I(i) && e(t, i, r)
                                }(e, t, n)
                        })), t("hasOwnMetadata", (function(e, t, n) {
                            if (!T(t)) throw new TypeError;
                            return S(n) || (n = w(n)), g(e, t, n)
                        })), t("getMetadata", (function(e, t, n) {
                            if (!T(t)) throw new TypeError;
                            return S(n) || (n = w(n)),
                                function e(t, n, r) {
                                    if (g(t, n, r)) return y(t, n, r);
                                    var i = R(n);
                                    return I(i) ? void 0 : e(t, i, r)
                                }(e, t, n)
                        })), t("getOwnMetadata", (function(e, t, n) {
                            if (!T(t)) throw new TypeError;
                            return S(n) || (n = w(n)), y(e, t, n)
                        })), t("getMetadataKeys", (function(e, t) {
                            if (!T(e)) throw new TypeError;
                            return S(t) || (t = w(t)),
                                function e(t, n) {
                                    var r = _(t, n),
                                        i = R(t);
                                    if (null === i) return r;
                                    var o = e(i, n);
                                    if (o.length <= 0) return r;
                                    if (r.length <= 0) return o;
                                    for (var a = new f, s = [], u = 0, c = r; u < c.length; u++) {
                                        var l = c[u];
                                        a.has(l) || (a.add(l), s.push(l))
                                    }
                                    for (var d = 0, p = o; d < p.length; d++) l = p[d], a.has(l) || (a.add(l), s.push(l));
                                    return s
                                }(e, t)
                        })), t("getOwnMetadataKeys", (function(e, t) {
                            if (!T(e)) throw new TypeError;
                            return S(t) || (t = w(t)), _(e, t)
                        })), t("deleteMetadata", (function(e, t, n) {
                            if (!T(t)) throw new TypeError;
                            S(n) || (n = w(n));
                            var r = m(t, n, !1);
                            if (S(r)) return !1;
                            if (!r.delete(e)) return !1;
                            if (r.size > 0) return !0;
                            var i = h.get(t);
                            return i.delete(n), i.size > 0 || (h.delete(t), !0)
                        }))
                    }(o)
            }()
        }(n || (n = {}))
    }).call(this, n(49), n(48))
}, function(e, t) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (n) {
        var r = new Uint8Array(16);
        e.exports = function() {
            return n(r), r
        }
    } else {
        var i = new Array(16);
        e.exports = function() {
            for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
            return i
        }
    }
}, function(e, t) {
    for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
    e.exports = function(e, t) {
        var r = t || 0,
            i = n;
        return [i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]]].join("")
    }
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", (function() {
            return s
        })), n.d(t, "b", (function() {
            return u
        }));
        var r = n(0),
            i = n(19),
            o = n(25),
            a = n(66);

        function s(t) {
            if (t || (t = function() {
                    if (e) return e.env[o.a.HTTPS_PROXY] ? e.env[o.a.HTTPS_PROXY] : e.env[o.a.HTTPS_PROXY.toLowerCase()] ? e.env[o.a.HTTPS_PROXY.toLowerCase()] : e.env[o.a.HTTP_PROXY] ? e.env[o.a.HTTP_PROXY] : e.env[o.a.HTTP_PROXY.toLowerCase()] ? e.env[o.a.HTTP_PROXY.toLowerCase()] : void 0
                }())) {
                var n = a.a.parse(t);
                return {
                    host: n.getScheme() + "://" + n.getHost(),
                    port: Number.parseInt(n.getPort() || "80")
                }
            }
        }

        function u(e) {
            return {
                create: function(t, n) {
                    return new c(t, n, e)
                }
            }
        }
        var c = function(e) {
            function t(t, n, r) {
                var i = e.call(this, t, n) || this;
                return i.proxySettings = r, i
            }
            return r.__extends(t, e), t.prototype.sendRequest = function(e) {
                return e.proxySettings || (e.proxySettings = this.proxySettings), this._nextPolicy.sendRequest(e)
            }, t
        }(i.a)
    }).call(this, n(49))
}, , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            e.getCurrentMicroseconds = function() {
                return 1e3 * (new Date).getTime()
            }
        }(t.DateTime || (t.DateTime = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, , , , function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
            return new(n || (n = Promise))((function(i, o) {
                function a(e) {
                    try {
                        u(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        u(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? i(e.value) : new n((function(t) {
                        t(e.value)
                    })).then(a, s)
                }
                u((r = r.apply(e, t || [])).next())
            }))
        },
        i = this && this.__generator || function(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function s(o) {
                return function(s) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(145),
        a = n(21),
        s = n(31),
        u = n(15),
        c = n(104),
        l = n(146),
        d = n(153),
        p = n(155),
        f = n(40),
        h = n(50),
        m = n(158),
        g = n(159),
        y = function() {
            function e(e) {
                var t = e || {};
                if ("object" != typeof t) throw new Error("" + a.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
                if (void 0 === t.defaultScope) t.defaultScope = s.BindingScopeEnum.Transient;
                else if (t.defaultScope !== s.BindingScopeEnum.Singleton && t.defaultScope !== s.BindingScopeEnum.Transient && t.defaultScope !== s.BindingScopeEnum.Request) throw new Error("" + a.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
                if (void 0 === t.autoBindInjectable) t.autoBindInjectable = !1;
                else if ("boolean" != typeof t.autoBindInjectable) throw new Error("" + a.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
                if (void 0 === t.skipBaseClassChecks) t.skipBaseClassChecks = !1;
                else if ("boolean" != typeof t.skipBaseClassChecks) throw new Error("" + a.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
                this.options = {
                    autoBindInjectable: t.autoBindInjectable,
                    defaultScope: t.defaultScope,
                    skipBaseClassChecks: t.skipBaseClassChecks
                }, this.id = f.id(), this._bindingDictionary = new g.Lookup, this._snapshots = [], this._middleware = null, this.parent = null, this._metadataReader = new c.MetadataReader
            }
            return e.merge = function(t, n) {
                var r = new e,
                    i = l.getBindingDictionary(r),
                    o = l.getBindingDictionary(t),
                    a = l.getBindingDictionary(n);

                function s(e, t) {
                    e.traverse((function(e, n) {
                        n.forEach((function(e) {
                            t.add(e.serviceIdentifier, e.clone())
                        }))
                    }))
                }
                return s(o, i), s(a, i), r
            }, e.prototype.load = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var n = this._getContainerModuleHelpersFactory(), r = 0, i = e; r < i.length; r++) {
                    var o = i[r],
                        a = n(o.id);
                    o.registry(a.bindFunction, a.unbindFunction, a.isboundFunction, a.rebindFunction)
                }
            }, e.prototype.loadAsync = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return r(this, void 0, void 0, (function() {
                    var t, n, r, o, a;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = this._getContainerModuleHelpersFactory(), n = 0, r = e, i.label = 1;
                            case 1:
                                return n < r.length ? (o = r[n], a = t(o.id), [4, o.registry(a.bindFunction, a.unbindFunction, a.isboundFunction, a.rebindFunction)]) : [3, 4];
                            case 2:
                                i.sent(), i.label = 3;
                            case 3:
                                return n++, [3, 1];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.unload = function() {
                for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = function(e) {
                    return function(t) {
                        return t.moduleId === e
                    }
                };
                t.forEach((function(t) {
                    var n = r(t.id);
                    e._bindingDictionary.removeByCondition(n)
                }))
            }, e.prototype.bind = function(e) {
                var t = this.options.defaultScope || s.BindingScopeEnum.Transient,
                    n = new o.Binding(e, t);
                return this._bindingDictionary.add(e, n), new p.BindingToSyntax(n)
            }, e.prototype.rebind = function(e) {
                return this.unbind(e), this.bind(e)
            }, e.prototype.unbind = function(e) {
                try {
                    this._bindingDictionary.remove(e)
                } catch (t) {
                    throw new Error(a.CANNOT_UNBIND + " " + h.getServiceIdentifierAsString(e))
                }
            }, e.prototype.unbindAll = function() {
                this._bindingDictionary = new g.Lookup
            }, e.prototype.isBound = function(e) {
                var t = this._bindingDictionary.hasKey(e);
                return !t && this.parent && (t = this.parent.isBound(e)), t
            }, e.prototype.isBoundNamed = function(e, t) {
                return this.isBoundTagged(e, u.NAMED_TAG, t)
            }, e.prototype.isBoundTagged = function(e, t, n) {
                var r = !1;
                if (this._bindingDictionary.hasKey(e)) {
                    var i = this._bindingDictionary.get(e),
                        o = l.createMockRequest(this, e, t, n);
                    r = i.some((function(e) {
                        return e.constraint(o)
                    }))
                }
                return !r && this.parent && (r = this.parent.isBoundTagged(e, t, n)), r
            }, e.prototype.snapshot = function() {
                this._snapshots.push(m.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware))
            }, e.prototype.restore = function() {
                var e = this._snapshots.pop();
                if (void 0 === e) throw new Error(a.NO_MORE_SNAPSHOTS_AVAILABLE);
                this._bindingDictionary = e.bindings, this._middleware = e.middleware
            }, e.prototype.createChild = function(t) {
                var n = new e(t || this.options);
                return n.parent = this, n
            }, e.prototype.applyMiddleware = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = this._middleware ? this._middleware : this._planAndResolve();
                this._middleware = e.reduce((function(e, t) {
                    return t(e)
                }), n)
            }, e.prototype.applyCustomMetadataReader = function(e) {
                this._metadataReader = e
            }, e.prototype.get = function(e) {
                return this._get(!1, !1, s.TargetTypeEnum.Variable, e)
            }, e.prototype.getTagged = function(e, t, n) {
                return this._get(!1, !1, s.TargetTypeEnum.Variable, e, t, n)
            }, e.prototype.getNamed = function(e, t) {
                return this.getTagged(e, u.NAMED_TAG, t)
            }, e.prototype.getAll = function(e) {
                return this._get(!0, !0, s.TargetTypeEnum.Variable, e)
            }, e.prototype.getAllTagged = function(e, t, n) {
                return this._get(!1, !0, s.TargetTypeEnum.Variable, e, t, n)
            }, e.prototype.getAllNamed = function(e, t) {
                return this.getAllTagged(e, u.NAMED_TAG, t)
            }, e.prototype.resolve = function(e) {
                var t = this.createChild();
                return t.bind(e).toSelf(), t.get(e)
            }, e.prototype._getContainerModuleHelpersFactory = function() {
                var e = this,
                    t = function(e, t) {
                        e._binding.moduleId = t
                    },
                    n = function(n) {
                        return function(r) {
                            var i = e.rebind.bind(e)(r);
                            return t(i, n), i
                        }
                    };
                return function(r) {
                    return {
                        bindFunction: (i = r, function(n) {
                            var r = e.bind.bind(e)(n);
                            return t(r, i), r
                        }),
                        isboundFunction: function(t) {
                            return e.isBound.bind(e)(t)
                        },
                        rebindFunction: n(r),
                        unbindFunction: function(t) {
                            e.unbind.bind(e)(t)
                        }
                    };
                    var i
                }
            }, e.prototype._get = function(e, t, n, r, i, o) {
                var s = null,
                    u = {
                        avoidConstraints: e,
                        contextInterceptor: function(e) {
                            return e
                        },
                        isMultiInject: t,
                        key: i,
                        serviceIdentifier: r,
                        targetType: n,
                        value: o
                    };
                if (this._middleware) {
                    if (null == (s = this._middleware(u))) throw new Error(a.INVALID_MIDDLEWARE_RETURN)
                } else s = this._planAndResolve()(u);
                return s
            }, e.prototype._planAndResolve = function() {
                var e = this;
                return function(t) {
                    var n = l.plan(e._metadataReader, e, t.isMultiInject, t.targetType, t.serviceIdentifier, t.key, t.value, t.avoidConstraints);
                    return n = t.contextInterceptor(n), d.resolve(n)
                }
            }, e
        }();
    t.Container = y
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(31),
        i = n(40),
        o = function() {
            function e(e, t) {
                this.id = i.id(), this.activated = !1, this.serviceIdentifier = e, this.scope = t, this.type = r.BindingTypeEnum.Invalid, this.constraint = function(e) {
                    return !0
                }, this.implementationType = null, this.cache = null, this.factory = null, this.provider = null, this.onActivation = null, this.dynamicValue = null
            }
            return e.prototype.clone = function() {
                var t = new e(this.serviceIdentifier, this.scope);
                return t.activated = !1, t.implementationType = this.implementationType, t.dynamicValue = this.dynamicValue, t.scope = this.scope, t.type = this.type, t.factory = this.factory, t.provider = this.provider, t.constraint = this.constraint, t.onActivation = this.onActivation, t.cache = this.cache, t
            }, e
        }();
    t.Binding = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(147),
        i = n(21),
        o = n(31),
        a = n(15),
        s = n(105),
        u = n(50),
        c = n(148),
        l = n(22),
        d = n(149),
        p = n(150),
        f = n(152),
        h = n(107);

    function m(e) {
        return e._bindingDictionary
    }

    function g(e, t, n, o, a) {
        var s, c = y(n.container, a.serviceIdentifier);
        return c.length === r.BindingCount.NoBindingsAvailable && n.container.options.autoBindInjectable && "function" == typeof a.serviceIdentifier && e.getConstructorMetadata(a.serviceIdentifier).compilerGeneratedMetadata && (n.container.bind(a.serviceIdentifier).toSelf(), c = y(n.container, a.serviceIdentifier)), s = t ? c : c.filter((function(e) {
                var t = new f.Request(e.serviceIdentifier, n, o, e, a);
                return e.constraint(t)
            })),
            function(e, t, n, o) {
                switch (t.length) {
                    case r.BindingCount.NoBindingsAvailable:
                        if (n.isOptional()) return t;
                        var a = u.getServiceIdentifierAsString(e),
                            s = i.NOT_REGISTERED;
                        throw s += u.listMetadataForTarget(a, n), s += u.listRegisteredBindingsForServiceIdentifier(o, a, y), new Error(s);
                    case r.BindingCount.OnlyOneBindingAvailable:
                        if (!n.isArray()) return t;
                    case r.BindingCount.MultipleBindingsAvailable:
                    default:
                        if (n.isArray()) return t;
                        throw a = u.getServiceIdentifierAsString(e), s = i.AMBIGUOUS_MATCH + " " + a, s += u.listRegisteredBindingsForServiceIdentifier(o, a, y), new Error(s)
                }
            }(a.serviceIdentifier, s, a, n.container), s
    }

    function y(e, t) {
        var n = [],
            r = m(e);
        return r.hasKey(t) ? n = r.get(t) : null !== e.parent && (n = y(e.parent, t)), n
    }
    t.getBindingDictionary = m, t.plan = function(e, t, n, r, m, y, v, _) {
        void 0 === _ && (_ = !1);
        var b = new c.Context(t),
            S = function(e, t, n, r, i, o) {
                var s = e ? a.MULTI_INJECT_TAG : a.INJECT_TAG,
                    u = new l.Metadata(s, n),
                    c = new h.Target(t, "", n, u);
                if (void 0 !== i) {
                    var d = new l.Metadata(i, o);
                    c.metadata.push(d)
                }
                return c
            }(n, r, m, 0, y, v);
        try {
            return function e(t, n, r, a, s, u) {
                var c, l;
                if (null === s) {
                    c = g(t, n, a, null, u), l = new f.Request(r, a, null, c, u);
                    var h = new d.Plan(a, l);
                    a.addPlan(h)
                } else c = g(t, n, a, s, u), l = s.addChildRequest(u.serviceIdentifier, c, u);
                c.forEach((function(n) {
                    var r = null;
                    if (u.isArray()) r = l.addChildRequest(n.serviceIdentifier, n, u);
                    else {
                        if (n.cache) return;
                        r = l
                    }
                    if (n.type === o.BindingTypeEnum.Instance && null !== n.implementationType) {
                        var s = p.getDependencies(t, n.implementationType);
                        if (!a.container.options.skipBaseClassChecks) {
                            var c = p.getBaseClassDependencyCount(t, n.implementationType);
                            if (s.length < c) {
                                var d = i.ARGUMENTS_LENGTH_MISMATCH(p.getFunctionName(n.implementationType));
                                throw new Error(d)
                            }
                        }
                        s.forEach((function(n) {
                            e(t, !1, n.serviceIdentifier, a, r, n)
                        }))
                    }
                }))
            }(e, _, m, b, null, S), b
        } catch (e) {
            throw s.isStackOverflowExeption(e) && b.plan && u.circularDependencyToException(b.plan.rootRequest), e
        }
    }, t.createMockRequest = function(e, t, n, r) {
        var i = new h.Target(o.TargetTypeEnum.Variable, "", t, new l.Metadata(n, r)),
            a = new c.Context(e);
        return new f.Request(t, a, null, [], i)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.BindingCount = {
        MultipleBindingsAvailable: 2,
        NoBindingsAvailable: 0,
        OnlyOneBindingAvailable: 1
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(40),
        i = function() {
            function e(e) {
                this.id = r.id(), this.container = e
            }
            return e.prototype.addPlan = function(e) {
                this.plan = e
            }, e.prototype.setCurrentRequest = function(e) {
                this.currentRequest = e
            }, e
        }();
    t.Context = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.Plan = function(e, t) {
        this.parentContext = e, this.rootRequest = t
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(106),
        i = n(21),
        o = n(31),
        a = n(15),
        s = n(50);
    t.getFunctionName = s.getFunctionName;
    var u = n(107);

    function c(e, t, n, r) {
        var a = e.getConstructorMetadata(n),
            s = a.compilerGeneratedMetadata;
        if (void 0 === s) {
            var c = i.MISSING_INJECTABLE_ANNOTATION + " " + t + ".";
            throw new Error(c)
        }
        var p = a.userGeneratedMetadata,
            f = Object.keys(p),
            h = function(e, t, n, r, i) {
                for (var o = [], a = 0; a < i; a++) {
                    var s = l(a, e, t, n, r);
                    null !== s && o.push(s)
                }
                return o
            }(r, t, s, p, 0 === n.length && f.length > 0 ? f.length : n.length),
            m = function e(t, n) {
                for (var r = t.getPropertiesMetadata(n), i = [], a = 0, s = Object.keys(r); a < s.length; a++) {
                    var c = s[a],
                        l = r[c],
                        p = d(r[c]),
                        f = p.targetName || c,
                        h = p.inject || p.multiInject,
                        m = new u.Target(o.TargetTypeEnum.ClassProperty, f, h);
                    m.metadata = l, i.push(m)
                }
                var g = Object.getPrototypeOf(n.prototype).constructor;
                if (g !== Object) {
                    var y = e(t, g);
                    i = i.concat(y)
                }
                return i
            }(e, n);
        return h.concat(m)
    }

    function l(e, t, n, a, s) {
        var c = s[e.toString()] || [],
            l = d(c),
            p = !0 !== l.unmanaged,
            f = a[e];
        if ((f = l.inject || l.multiInject || f) instanceof r.LazyServiceIdentifer && (f = f.unwrap()), p) {
            if (!t && (f === Object || f === Function || void 0 === f)) {
                var h = i.MISSING_INJECT_ANNOTATION + " argument " + e + " in class " + n + ".";
                throw new Error(h)
            }
            var m = new u.Target(o.TargetTypeEnum.ConstructorArgument, l.targetName, f);
            return m.metadata = c, m
        }
        return null
    }

    function d(e) {
        var t = {};
        return e.forEach((function(e) {
            t[e.key.toString()] = e.value
        })), {
            inject: t[a.INJECT_TAG],
            multiInject: t[a.MULTI_INJECT_TAG],
            targetName: t[a.NAME_TAG],
            unmanaged: t[a.UNMANAGED_TAG]
        }
    }
    t.getDependencies = function(e, t) {
        return c(e, s.getFunctionName(t), t, !1)
    }, t.getBaseClassDependencyCount = function e(t, n) {
        var r = Object.getPrototypeOf(n.prototype).constructor;
        if (r !== Object) {
            var i = c(t, s.getFunctionName(r), r, !0),
                o = i.map((function(e) {
                    return e.metadata.filter((function(e) {
                        return e.key === a.UNMANAGED_TAG
                    }))
                })),
                u = [].concat.apply([], o).length,
                l = i.length - u;
            return l > 0 ? l : e(t, r)
        }
        return 0
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e) {
            this.str = e
        }
        return e.prototype.startsWith = function(e) {
            return 0 === this.str.indexOf(e)
        }, e.prototype.endsWith = function(e) {
            var t, n = e.split("").reverse().join("");
            return t = this.str.split("").reverse().join(""), this.startsWith.call({
                str: t
            }, n)
        }, e.prototype.contains = function(e) {
            return -1 !== this.str.indexOf(e)
        }, e.prototype.equals = function(e) {
            return this.str === e
        }, e.prototype.value = function() {
            return this.str
        }, e
    }();
    t.QueryableString = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(40),
        i = function() {
            function e(e, t, n, i, o) {
                this.id = r.id(), this.serviceIdentifier = e, this.parentContext = t, this.parentRequest = n, this.target = o, this.childRequests = [], this.bindings = Array.isArray(i) ? i : [i], this.requestScope = null === n ? new Map : null
            }
            return e.prototype.addChildRequest = function(t, n, r) {
                var i = new e(t, this.parentContext, this, n, r);
                return this.childRequests.push(i), i
            }, e
        }();
    t.Request = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(21),
        i = n(31),
        o = n(105),
        a = n(50),
        s = n(154),
        u = function(e, t, n) {
            try {
                return n()
            } catch (n) {
                throw o.isStackOverflowExeption(n) ? new Error(r.CIRCULAR_DEPENDENCY_IN_FACTORY(e, t.toString())) : n
            }
        },
        c = function(e) {
            return function(t) {
                t.parentContext.setCurrentRequest(t);
                var n = t.bindings,
                    o = t.childRequests,
                    l = t.target && t.target.isArray(),
                    d = !(t.parentRequest && t.parentRequest.target && t.target && t.parentRequest.target.matchesArray(t.target.serviceIdentifier));
                if (l && d) return o.map((function(t) {
                    return c(e)(t)
                }));
                var p = null;
                if (!t.target.isOptional() || 0 !== n.length) {
                    var f = n[0],
                        h = f.scope === i.BindingScopeEnum.Singleton,
                        m = f.scope === i.BindingScopeEnum.Request;
                    if (h && f.activated) return f.cache;
                    if (m && null !== e && e.has(f.id)) return e.get(f.id);
                    if (f.type === i.BindingTypeEnum.ConstantValue) p = f.cache;
                    else if (f.type === i.BindingTypeEnum.Function) p = f.cache;
                    else if (f.type === i.BindingTypeEnum.Constructor) p = f.implementationType;
                    else if (f.type === i.BindingTypeEnum.DynamicValue && null !== f.dynamicValue) p = u("toDynamicValue", f.serviceIdentifier, (function() {
                        return f.dynamicValue(t.parentContext)
                    }));
                    else if (f.type === i.BindingTypeEnum.Factory && null !== f.factory) p = u("toFactory", f.serviceIdentifier, (function() {
                        return f.factory(t.parentContext)
                    }));
                    else if (f.type === i.BindingTypeEnum.Provider && null !== f.provider) p = u("toProvider", f.serviceIdentifier, (function() {
                        return f.provider(t.parentContext)
                    }));
                    else {
                        if (f.type !== i.BindingTypeEnum.Instance || null === f.implementationType) {
                            var g = a.getServiceIdentifierAsString(t.serviceIdentifier);
                            throw new Error(r.INVALID_BINDING_TYPE + " " + g)
                        }
                        p = s.resolveInstance(f.implementationType, o, c(e))
                    }
                    return "function" == typeof f.onActivation && (p = f.onActivation(t.parentContext, p)), h && (f.cache = p, f.activated = !0), m && null !== e && !e.has(f.id) && e.set(f.id, p), p
                }
            }
        };
    t.resolve = function(e) {
        return c(e.plan.rootRequest.requestScope)(e.plan.rootRequest)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(21),
        i = n(31),
        o = n(15);
    t.resolveInstance = function(e, t, n) {
        var a, s, u = null;
        t.length > 0 ? (s = t.filter((function(e) {
            return null !== e.target && e.target.type === i.TargetTypeEnum.ConstructorArgument
        })).map(n), u = function(e, t, n) {
            var r = t.filter((function(e) {
                    return null !== e.target && e.target.type === i.TargetTypeEnum.ClassProperty
                })),
                o = r.map(n);
            return r.forEach((function(t, n) {
                var r;
                r = t.target.name.value();
                var i = o[n];
                e[r] = i
            })), e
        }(u = new((a = e).bind.apply(a, [void 0].concat(s))), t, n)) : u = new e;
        return function(e, t) {
            if (Reflect.hasMetadata(o.POST_CONSTRUCT, e)) {
                var n = Reflect.getMetadata(o.POST_CONSTRUCT, e);
                try {
                    t[n.value]()
                } catch (t) {
                    throw new Error(r.POST_CONSTRUCT_ERROR(e.name, t.message))
                }
            }
        }(e, u), u
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(21),
        i = n(31),
        o = n(156),
        a = n(108),
        s = function() {
            function e(e) {
                this._binding = e
            }
            return e.prototype.to = function(e) {
                return this._binding.type = i.BindingTypeEnum.Instance, this._binding.implementationType = e, new o.BindingInWhenOnSyntax(this._binding)
            }, e.prototype.toSelf = function() {
                if ("function" != typeof this._binding.serviceIdentifier) throw new Error("" + r.INVALID_TO_SELF_VALUE);
                var e = this._binding.serviceIdentifier;
                return this.to(e)
            }, e.prototype.toConstantValue = function(e) {
                return this._binding.type = i.BindingTypeEnum.ConstantValue, this._binding.cache = e, this._binding.dynamicValue = null, this._binding.implementationType = null, new a.BindingWhenOnSyntax(this._binding)
            }, e.prototype.toDynamicValue = function(e) {
                return this._binding.type = i.BindingTypeEnum.DynamicValue, this._binding.cache = null, this._binding.dynamicValue = e, this._binding.implementationType = null, new o.BindingInWhenOnSyntax(this._binding)
            }, e.prototype.toConstructor = function(e) {
                return this._binding.type = i.BindingTypeEnum.Constructor, this._binding.implementationType = e, new a.BindingWhenOnSyntax(this._binding)
            }, e.prototype.toFactory = function(e) {
                return this._binding.type = i.BindingTypeEnum.Factory, this._binding.factory = e, new a.BindingWhenOnSyntax(this._binding)
            }, e.prototype.toFunction = function(e) {
                if ("function" != typeof e) throw new Error(r.INVALID_FUNCTION_BINDING);
                var t = this.toConstantValue(e);
                return this._binding.type = i.BindingTypeEnum.Function, t
            }, e.prototype.toAutoFactory = function(e) {
                return this._binding.type = i.BindingTypeEnum.Factory, this._binding.factory = function(t) {
                    return function() {
                        return t.container.get(e)
                    }
                }, new a.BindingWhenOnSyntax(this._binding)
            }, e.prototype.toProvider = function(e) {
                return this._binding.type = i.BindingTypeEnum.Provider, this._binding.provider = e, new a.BindingWhenOnSyntax(this._binding)
            }, e.prototype.toService = function(e) {
                this.toDynamicValue((function(t) {
                    return t.container.get(e)
                }))
            }, e
        }();
    t.BindingToSyntax = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(157),
        i = n(73),
        o = n(74),
        a = function() {
            function e(e) {
                this._binding = e, this._bindingWhenSyntax = new o.BindingWhenSyntax(this._binding), this._bindingOnSyntax = new i.BindingOnSyntax(this._binding), this._bindingInSyntax = new r.BindingInSyntax(e)
            }
            return e.prototype.inRequestScope = function() {
                return this._bindingInSyntax.inRequestScope()
            }, e.prototype.inSingletonScope = function() {
                return this._bindingInSyntax.inSingletonScope()
            }, e.prototype.inTransientScope = function() {
                return this._bindingInSyntax.inTransientScope()
            }, e.prototype.when = function(e) {
                return this._bindingWhenSyntax.when(e)
            }, e.prototype.whenTargetNamed = function(e) {
                return this._bindingWhenSyntax.whenTargetNamed(e)
            }, e.prototype.whenTargetIsDefault = function() {
                return this._bindingWhenSyntax.whenTargetIsDefault()
            }, e.prototype.whenTargetTagged = function(e, t) {
                return this._bindingWhenSyntax.whenTargetTagged(e, t)
            }, e.prototype.whenInjectedInto = function(e) {
                return this._bindingWhenSyntax.whenInjectedInto(e)
            }, e.prototype.whenParentNamed = function(e) {
                return this._bindingWhenSyntax.whenParentNamed(e)
            }, e.prototype.whenParentTagged = function(e, t) {
                return this._bindingWhenSyntax.whenParentTagged(e, t)
            }, e.prototype.whenAnyAncestorIs = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorIs(e)
            }, e.prototype.whenNoAncestorIs = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorIs(e)
            }, e.prototype.whenAnyAncestorNamed = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorNamed(e)
            }, e.prototype.whenAnyAncestorTagged = function(e, t) {
                return this._bindingWhenSyntax.whenAnyAncestorTagged(e, t)
            }, e.prototype.whenNoAncestorNamed = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorNamed(e)
            }, e.prototype.whenNoAncestorTagged = function(e, t) {
                return this._bindingWhenSyntax.whenNoAncestorTagged(e, t)
            }, e.prototype.whenAnyAncestorMatches = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorMatches(e)
            }, e.prototype.whenNoAncestorMatches = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorMatches(e)
            }, e.prototype.onActivation = function(e) {
                return this._bindingOnSyntax.onActivation(e)
            }, e
        }();
    t.BindingInWhenOnSyntax = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(31),
        i = n(108),
        o = function() {
            function e(e) {
                this._binding = e
            }
            return e.prototype.inRequestScope = function() {
                return this._binding.scope = r.BindingScopeEnum.Request, new i.BindingWhenOnSyntax(this._binding)
            }, e.prototype.inSingletonScope = function() {
                return this._binding.scope = r.BindingScopeEnum.Singleton, new i.BindingWhenOnSyntax(this._binding)
            }, e.prototype.inTransientScope = function() {
                return this._binding.scope = r.BindingScopeEnum.Transient, new i.BindingWhenOnSyntax(this._binding)
            }, e
        }();
    t.BindingInSyntax = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e.of = function(t, n) {
            var r = new e;
            return r.bindings = t, r.middleware = n, r
        }, e
    }();
    t.ContainerSnapshot = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(21),
        i = function() {
            function e() {
                this._map = new Map
            }
            return e.prototype.getMap = function() {
                return this._map
            }, e.prototype.add = function(e, t) {
                if (null == e) throw new Error(r.NULL_ARGUMENT);
                if (null == t) throw new Error(r.NULL_ARGUMENT);
                var n = this._map.get(e);
                void 0 !== n ? (n.push(t), this._map.set(e, n)) : this._map.set(e, [t])
            }, e.prototype.get = function(e) {
                if (null == e) throw new Error(r.NULL_ARGUMENT);
                var t = this._map.get(e);
                if (void 0 !== t) return t;
                throw new Error(r.KEY_NOT_FOUND)
            }, e.prototype.remove = function(e) {
                if (null == e) throw new Error(r.NULL_ARGUMENT);
                if (!this._map.delete(e)) throw new Error(r.KEY_NOT_FOUND)
            }, e.prototype.removeByCondition = function(e) {
                var t = this;
                this._map.forEach((function(n, r) {
                    var i = n.filter((function(t) {
                        return !e(t)
                    }));
                    i.length > 0 ? t._map.set(r, i) : t._map.delete(r)
                }))
            }, e.prototype.hasKey = function(e) {
                if (null == e) throw new Error(r.NULL_ARGUMENT);
                return this._map.has(e)
            }, e.prototype.clone = function() {
                var t = new e;
                return this._map.forEach((function(e, n) {
                    e.forEach((function(e) {
                        return t.add(n, e.clone())
                    }))
                })), t
            }, e.prototype.traverse = function(e) {
                this._map.forEach((function(t, n) {
                    e(n, t)
                }))
            }, e
        }();
    t.Lookup = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(40);
    t.ContainerModule = function(e) {
        this.id = r.id(), this.registry = e
    };
    t.AsyncContainerModule = function(e) {
        this.id = r.id(), this.registry = e
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(21),
        i = n(15);
    t.injectable = function() {
        return function(e) {
            if (Reflect.hasOwnMetadata(i.PARAM_TYPES, e)) throw new Error(r.DUPLICATED_INJECTABLE_DECORATOR);
            var t = Reflect.getMetadata(i.DESIGN_PARAM_TYPES, e) || [];
            return Reflect.defineMetadata(i.PARAM_TYPES, t, e), e
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(22),
        i = n(35);
    t.tagged = function(e, t) {
        return function(n, o, a) {
            var s = new r.Metadata(e, t);
            "number" == typeof a ? i.tagParameter(n, o, a, s) : i.tagProperty(n, o, s)
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(15),
        i = n(22),
        o = n(35);
    t.named = function(e) {
        return function(t, n, a) {
            var s = new i.Metadata(r.NAMED_TAG, e);
            "number" == typeof a ? o.tagParameter(t, n, a, s) : o.tagProperty(t, n, s)
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(15),
        i = n(22),
        o = n(35);
    t.optional = function() {
        return function(e, t, n) {
            var a = new i.Metadata(r.OPTIONAL_TAG, !0);
            "number" == typeof n ? o.tagParameter(e, t, n, a) : o.tagProperty(e, t, a)
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(15),
        i = n(22),
        o = n(35);
    t.unmanaged = function() {
        return function(e, t, n) {
            var a = new i.Metadata(r.UNMANAGED_TAG, !0);
            o.tagParameter(e, t, n, a)
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(15),
        i = n(22),
        o = n(35);
    t.multiInject = function(e) {
        return function(t, n, a) {
            var s = new i.Metadata(r.MULTI_INJECT_TAG, e);
            "number" == typeof a ? o.tagParameter(t, n, a, s) : o.tagProperty(t, n, s)
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(15),
        i = n(22),
        o = n(35);
    t.targetName = function(e) {
        return function(t, n, a) {
            var s = new i.Metadata(r.NAME_TAG, e);
            o.tagParameter(t, n, a, s)
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(21),
        i = n(15),
        o = n(22);
    t.postConstruct = function() {
        return function(e, t, n) {
            var a = new o.Metadata(i.POST_CONSTRUCT, t);
            if (Reflect.hasOwnMetadata(i.POST_CONSTRUCT, e.constructor)) throw new Error(r.MULTIPLE_POST_CONSTRUCT_METHODS);
            Reflect.defineMetadata(i.POST_CONSTRUCT, a, e.constructor)
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.multiBindToService = function(e) {
        return function(t) {
            return function() {
                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                return n.forEach((function(n) {
                    return e.bind(n).toService(t)
                }))
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(8),
        s = n(14),
        u = n(9),
        c = function() {
            function e(e, t, n) {
                this.registrables = e, this.logger = t, this.eventName = n, this.initializeCalled = !1, this.shutDownCalled = !1
            }
            var t, n;
            return e.prototype.initialize = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var e, t, n;
                    return r.__generator(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (this.initializeCalled) return [3, 5];
                                this.initializeCalled = !0, e = this.logger.getNewActivity(this.eventName, a.SamplingPolicy.CriticalExperimentation), t = 0, n = this.registrables, r.label = 1;
                            case 1:
                                return t < n.length ? [4, n[t].initialize()] : [3, 4];
                            case 2:
                                r.sent(), r.label = 3;
                            case 3:
                                return t++, [3, 1];
                            case 4:
                                e && (e.setSuccess(!0), e.endNow()), this.shutDownCalled = !1, r.label = 5;
                            case 5:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.shutDown = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var e, t = this;
                    return r.__generator(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return this.shutDownCalled ? [3, 2] : (this.shutDownCalled = !0, e = this.logger.getNewActivity(this.eventName, a.SamplingPolicy.CriticalExperimentation), [4, Promise.all(this.registrables.map((function(e) {
                                    return r.__awaiter(t, void 0, void 0, (function() {
                                        return r.__generator(this, (function(t) {
                                            return [2, e.shutDown()]
                                        }))
                                    }))
                                })))]);
                            case 1:
                                n.sent(), e && (e.setSuccess(!0), e.endNow()), this.initializeCalled = !1, n.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))
            }, r.__decorate([i.injectable(), r.__param(0, i.multiInject(o.SharedMultiInjectionTypes.IRegistrable)), r.__param(1, i.inject(o.SharedInjectionTypes.ILogger)), r.__param(2, i.inject(o.SharedInjectionTypes.RegistrarEventName)), r.__metadata("design:paramtypes", [Array, "function" == typeof(t = void 0 !== u.ILogger && u.ILogger) ? t : Object, "function" == typeof(n = void 0 !== s.EventCategoryName && s.EventCategoryName) ? n : Object])], e)
        }();
    t.Registrar = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(172),
        s = n(8),
        u = n(173),
        c = function() {
            function e(e, t) {
                this._transports = e, this._activityTransport = t, this._debugMode = !1, this._initialized = !1, this._initializing = !1
            }
            var t;
            return e.prototype.initialize = function(e, t, n) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var i, o, s;
                    return r.__generator(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (this._initialized) return [2];
                                if (this._initializing) return [3, 10];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, , 9, 10]), i = this, [4, e.debugMode()];
                            case 2:
                                i._debugMode = r.sent(), this._debugMode && this._transports.push(new a.ConsoleLogger), o = 0, s = this._transports, r.label = 3;
                            case 3:
                                return o < s.length ? [4, s[o].initialize(e, t, n)] : [3, 6];
                            case 4:
                                r.sent(), r.label = 5;
                            case 5:
                                return o++, [3, 3];
                            case 6:
                                return this._activityTransport ? [4, this._activityTransport.initialize(e, t, n)] : [3, 8];
                            case 7:
                                r.sent(), r.label = 8;
                            case 8:
                                return [3, 10];
                            case 9:
                                return this._initializing = !1, [7];
                            case 10:
                                return this._initialized = !0, [2]
                        }
                    }))
                }))
            }, e.prototype.addCorrelationID = function(e) {
                for (var t = 0, n = this._transports; t < n.length; t++) n[t].addCorrelationID(e);
                this._activityTransport && this._activityTransport.addCorrelationID(e)
            }, e.prototype.log = function(e, t, n, r) {
                this.logEvent(e, null, t, n, s.SamplingPolicy.Measure, r)
            }, e.prototype.info = function(e, t, n) {
                this.logEvent(e, null, s.LoggingLevel.Info, t, s.SamplingPolicy.Measure, n)
            }, e.prototype.warn = function(e, t, n) {
                this.logEvent(e, null, s.LoggingLevel.Warn, t, s.SamplingPolicy.Measure, n)
            }, e.prototype.error = function(e, t, n) {
                this.logEvent(e, null, s.LoggingLevel.Error, t, s.SamplingPolicy.CriticalBusinessImpact, n)
            }, e.prototype.debug = function(e, t, n) {
                this.logEvent(e, null, s.LoggingLevel.Debug, t, s.SamplingPolicy.Diagnostics, n)
            }, e.prototype.logServiceRequest = function(e, t, n, r, i) {
                for (var o = 0, a = this._transports; o < a.length; o++) {
                    var u = a[o];
                    t && (u.serviceRequestID = t), this.logEvent(e, null, n, r, s.SamplingPolicy.Measure, i)
                }
            }, e.prototype.logEvent = function(e, t, n, r, i, o, a) {
                if (this._initialized && (this._debugMode || n !== s.LoggingLevel.Debug))
                    for (var u = 0, c = this._transports; u < c.length; u++) c[u].logEvent(e, t, n, r, i, o, a)
            }, e.prototype.getNewActivity = function(e, t, n) {
                return this._initialized && this._activityTransport ? this._activityTransport.getNewActivity(e, t, n) : void 0
            }, r.__decorate([i.injectable(), r.__param(0, i.multiInject(o.SharedInjectionTypes.ITransportLogger)), r.__param(1, i.inject(o.SharedInjectionTypes.ITransportActivity)), r.__metadata("design:paramtypes", [Array, "function" == typeof(t = void 0 !== u.ITransportActivity && u.ITransportActivity) ? t : Object])], e)
        }();
    t.Logger = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(8),
        a = function(e, t, n, r) {
            var i = {
                eventName: e,
                tagID: "0x" + ("00000000" + t.toString(16)).substr(-8),
                message: n,
                data: r
            };
            return JSON.stringify(i)
        },
        s = function() {
            function e() {}
            return e.prototype.initialize = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2]
                    }))
                }))
            }, e.prototype.addCorrelationID = function(e) {
                console.log("CorrelationID is: " + e)
            }, e.prototype.log = function(e, t, n, r) {
                this.dispatchLog(null, e, t, n, r)
            }, e.prototype.debug = function(e, t, n) {
                this.dispatchLog(null, e, o.LoggingLevel.Debug, t, n)
            }, e.prototype.error = function(e, t, n) {
                this.dispatchLog(null, e, o.LoggingLevel.Error, t, n)
            }, e.prototype.warn = function(e, t, n) {
                this.dispatchLog(null, e, o.LoggingLevel.Warn, t, n)
            }, e.prototype.info = function(e, t, n) {
                this.dispatchLog(null, e, o.LoggingLevel.Info, t, n)
            }, e.prototype.logEvent = function(e, t, n, r, i, o) {
                this.dispatchLog(t, e, n, r, o)
            }, e.prototype.dispatchLog = function(e, t, n, r, i) {
                switch (n) {
                    case o.LoggingLevel.Debug:
                        console.log(a(e, t, r, i));
                        break;
                    case o.LoggingLevel.Error:
                        console.error(a(e, t, r, i));
                        break;
                    case o.LoggingLevel.Info:
                        console.info(a(e, t, r, i));
                        break;
                    case o.LoggingLevel.Warn:
                        console.warn(a(e, t, r, i));
                        break;
                    default:
                        throw new Error("Invalid logging level")
                }
            }, r.__decorate([i.injectable()], e)
        }();
    t.ConsoleLogger = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, function(e, t, n) {
    "use strict";
    var r = n(174),
        i = new(function() {
            function e() {
                var e = this;
                OfficeRuntimeWebInternal.HostBridge.getInstance().onMessageFromHost = function(t) {
                    e.onMessageFromHost && e.onMessageFromHost(t)
                }
            }
            return e.prototype.sendMessageToHost = function(e) {
                r.Utility.log("RichApiBridgeWacImpl.sendMessageToHost:"), r.Utility.log(e), OfficeRuntimeWebInternal.HostBridge.getInstance().sendMessageToHost(e)
            }, e
        }());
    r.HostBridge.init(i)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(8),
        s = n(14),
        u = n(110),
        c = n(176),
        l = function() {
            function e(e) {
                var t = this;
                this._sendMessageStrategy = e, this.registrations = {}, this._messageDispatcher = function(e, n, r) {
                    var i = e,
                        o = t.safelyGetRegistration(i.eventId);
                    if (n && n.tab && void 0 !== n.tab.id) {
                        var a = n.tab.id;
                        i.data.forEach((function(e) {
                            void 0 === e.address ? e.address = a : e.address = a + "/" + e.address
                        }))
                    }
                    for (var s = 0, u = o.listeners; s < u.length; s++) u[s].apply(void 0, i.data);
                    return !0
                }, browser.runtime.onMessage.addListener(this._messageDispatcher)
            }
            var t;
            return e.prototype.connectToBackground = function() {
                var e = this,
                    t = browser.runtime.connect();
                t.onMessage.addListener((function(t) {
                    e._messageDispatcher(t)
                })), this._sendMessageStrategy.registerPort(t), t.onDisconnect.addListener((function() {
                    return e._messageDispatcher({
                        eventId: "counterpartyDisconnected"
                    })
                }))
            }, e.prototype.listenForContentScriptConnections = function(e) {
                var t = this;
                browser.runtime.onConnect.addListener((function(n) {
                    var r = e ? e.getNewActivity(s.EventCategoryName.ContentScriptLifetime, a.SamplingPolicy.CriticalBusinessImpact) : void 0;
                    if (n.sender) {
                        var i = n.sender;
                        n.onMessage.addListener((function(e) {
                            t._messageDispatcher(e, i)
                        })), t._sendMessageStrategy.registerPort(n)
                    }
                    n.onDisconnect.addListener((function() {
                        return t._messageDispatcher({
                            eventId: "counterpartyDisconnected"
                        })
                    })), n.onDisconnect.addListener((function(e) {
                        r && (r.setSuccess(!0), r.endNow())
                    }))
                }))
            }, e.prototype.on = function(e, t) {
                this.safelyGetRegistration(e).listeners.push(t)
            }, e.prototype.onFirst = function(e, t) {
                throw Error("onFirst is not implemented for EditorEmitter")
            }, e.prototype.onAny = function(e) {
                throw Error("onAny is not implemented for EditorEmitter")
            }, e.prototype.waitFor = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(t) {
                        return [2, browser.runtime.sendMessage(e)]
                    }))
                }))
            }, e.prototype.waitForFirst = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        throw Error("waitForFirst is not implemented for EditorEmitter")
                    }))
                }))
            }, e.prototype.off = function(e, t) {
                if (void 0 !== e)
                    if (void 0 !== t) {
                        var n = this.safelyGetRegistration(e);
                        if (!u.removeFromArray(n.listeners, t)) throw new Error("Tried to remove a non-existent listener for event name '" + e + "'.")
                    } else this.registrations[e] = u.createNewRegistration();
                else this.registrations = {}
            }, e.prototype.emit = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                this._sendMessageStrategy.sendMessage({
                    eventId: e,
                    data: t
                })
            }, e.prototype.safelyGetRegistration = function(e) {
                return this.registrations[e] || (this.registrations[e] = u.createNewRegistration()), this.registrations[e]
            }, r.__decorate([i.injectable(), r.__param(0, i.inject(o.SharedInjectionTypes.ISendMessageStrategy)), r.__metadata("design:paramtypes", ["function" == typeof(t = void 0 !== c.ISendMessageStrategy && c.ISendMessageStrategy) ? t : Object])], e)
        }();
    t.ContentScriptEmitter = l
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(55),
        s = n(86),
        u = n(110),
        c = function() {
            function e(e, t) {
                var n = this;
                this._browserStorage = e, this._settings = t, this.registrations = {}, this._storageChangeDispatcherCallback = function(e, t) {
                    return r.__awaiter(n, void 0, void 0, (function() {
                        return r.__generator(this, (function(n) {
                            return [2, this._storageChangeDispatcher(e, t)]
                        }))
                    }))
                }
            }
            var t, n;
            return e.prototype.safelyGetRegistration = function(e) {
                return this.registrations[e] || (this.registrations[e] = u.createNewRegistration()), this.registrations[e]
            }, e.prototype.on = function(e, t) {
                this.safelyGetRegistration(e).listeners.push(t)
            }, e.prototype.initialize = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return this._browserStorage.addChangeListener(this._storageChangeDispatcherCallback), [2]
                    }))
                }))
            }, e.prototype.shutDown = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return this._browserStorage.removeEventListener(this._storageChangeDispatcherCallback), [2]
                    }))
                }))
            }, e.prototype._storageChangeDispatcher = function(e, t) {
                var n = this;
                Object.keys(e).forEach((function(e) {
                    n.callListeners(e)
                }))
            }, e.prototype.callListeners = function(e) {
                for (var t = e, n = 0, r = this.safelyGetRegistration(t).listeners; n < r.length; n++)(0, r[n])(this._settings[e])
            }, e.prototype.onFirst = function(e, t) {
                throw Error("onFirst is not implemented for SettingsEmitter")
            }, e.prototype.onAny = function(e) {
                throw Error("onAny is not implemented for SettingsEmitter")
            }, e.prototype.waitFor = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        throw Error("waitForFirst is not implemented for SettingsEmitter")
                    }))
                }))
            }, e.prototype.waitForFirst = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        throw Error("waitForFirst is not implemented for SettingsEmitter")
                    }))
                }))
            }, e.prototype.off = function(e, t) {
                if (void 0 !== e)
                    if (void 0 !== t) {
                        var n = this.safelyGetRegistration(e);
                        if (!u.removeFromArray(n.listeners, t)) throw new Error("Tried to remove a non-existent listener for event name '" + e + "'.")
                    } else this.registrations[e] = u.createNewRegistration();
                else this.registrations = {}
            }, e.prototype.emit = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = this.safelyGetRegistration(e), i = 0, o = r.listeners; i < o.length; i++) {
                    var a = o[i];
                    a.apply(void 0, t)
                }
            }, r.__decorate([i.injectable(), r.__param(0, i.inject(o.SharedInjectionTypes.IBrowserStorageApi)), r.__param(1, i.inject(o.SharedInjectionTypes.ISettingsDefinitions)), r.__metadata("design:paramtypes", ["function" == typeof(t = void 0 !== s.IBrowserStorageApi && s.IBrowserStorageApi) ? t : Object, "function" == typeof(n = void 0 !== a.ISettingsDefinitions && a.ISettingsDefinitions) ? n : Object])], e)
        }();
    t.SettingsEmitter = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(111),
        s = n(55),
        u = function() {
            function e(e) {
                this._settingsDefinitions = e, this.defaultUxLanguage = "en-US", this.allowedUrls = this._settingsDefinitions.allowedUrls.defaultValue, this.runtimeOnOffState = {
                    excludedUrls: this._settingsDefinitions.excludedUrls.defaultValue,
                    userExcludedUrls: this._settingsDefinitions.userExcludedUrls.defaultValue,
                    showSpellingAndGrammar: this._settingsDefinitions.showSpellingAndGrammar.defaultValue,
                    disabledGrammars: this._settingsDefinitions.disabledGrammars.defaultValue
                }, this.showSynonyms = this._settingsDefinitions.showSynonyms.defaultValue, this.enableTeachingUiOnPageBoot = this._settingsDefinitions.enableTeachingUiOnPageBoot.defaultValue, this.isSpellingEnabled = this._settingsDefinitions.enableSpelling.defaultValue, this.isGrammarEnabled = this._settingsDefinitions.enableGrammar.defaultValue, this.areRefinementsEnabled = this._settingsDefinitions.enableRefinements.defaultValue, this.proofingLanguage = this._settingsDefinitions.proofingLanguage.defaultValue, this.spellcheckAttributes = this._settingsDefinitions.spellcheckAttributes.defaultValue, this.runConfig = this._settingsDefinitions.runConfig.defaultValue, this.debugMode = this._settingsDefinitions.debugMode.defaultValue, this.rootContentMaxLengthInChars = this._settingsDefinitions.rootContentMaxLengthInChars.defaultValue, this.chunkingTextUnit = a.Utils.TextUnit.Sentence, this.emitRemoval = !0, this.styleObserverIntervalTime = this._settingsDefinitions.styleObserverIntervalTime.defaultValue, this.styleSampleTime = this._settingsDefinitions.styleSampleTime.defaultValue, this.reconcileTileNodeTime = 3e3, this.requestCritiqueDelay = this._settingsDefinitions.requestCritiqueDelay.defaultValue, this.enableTileNodeAutoReconciliation = this._settingsDefinitions.enableTileNodeAutoReconciliation.defaultValue, this.authenticationRequestMaxNumberConsecutiveFailures = this._settingsDefinitions.authenticationRequestMaxNumberConsecutiveFailures.defaultValue, this.authenticationRequestTimeout = this._settingsDefinitions.authenticationRequestTimeout.defaultValue, this.enableAuthentication = this._settingsDefinitions.enableAuthentication.defaultValue, this.authority = this._settingsDefinitions.authority.defaultValue, this.aadClientId = this._settingsDefinitions.aadClientId.defaultValue, this.intervalForActivityCleanup = this._settingsDefinitions.intervalForActivityCleanup.defaultValue, this.maxAllowedTimeForActivities = this._settingsDefinitions.maxAllowedTimeForActivities.defaultValue, this.maxSuggestionItemsDisplayNumber = this._settingsDefinitions.maxSuggestionItemsDisplayNumber.defaultValue, this.fabricFontsDefinitionPath = this._settingsDefinitions.fabricFontsDefinitionPath.defaultValue, this.enableSplitSuggestionButton = this._settingsDefinitions.enableSplitSuggestionButton.defaultValue, this.injectContentScriptsOnExtensionLoad = this._settingsDefinitions.injectContentScriptsOnExtensionLoad.defaultValue, this.narrowOnChangeReconciliation = this._settingsDefinitions.narrowOnChangeReconciliation.defaultValue, this.schedulerDefaultWaitingTime = this._settingsDefinitions.schedulerDefaultWaitingTime.defaultValue, this.schedulerDefaultMaxTime = this._settingsDefinitions.schedulerDefaultMaxTime.defaultValue, this.schedulerDefaultWaitingTimeIncrement = this._settingsDefinitions.schedulerDefaultWaitingTimeIncrement.defaultValue, this.maxTilesPerRequest = this._settingsDefinitions.maxTilesPerRequest.defaultValue
            }
            var t;
            return r.__decorate([i.injectable(), r.__param(0, i.inject(o.SharedInjectionTypes.ISettingsDefinitions)), r.__metadata("design:paramtypes", ["function" == typeof(t = void 0 !== s.ISettingsDefinitions && s.ISettingsDefinitions) ? t : Object])], e)
        }();
    t.ExtensionSettings = u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(180),
        a = n(56),
        s = function() {
            function e() {
                this.useShadowDom = !0, this.showOptionsButton = !0, this.showCalloutBranding = !0, this.appId = "EditorBX_Online", this.defaultLocale = "en-US", this.controlIconSetName = "FabricMDL2Icons", this.editorEndPoint = o.EditorEndPoint.Prod, this.ignoreEnabled = !1, this.sessionType = a.SessionType.Extension, this.showTeachingUi = !1, this.enableUrlClassifier = !1
            }
            return r.__decorate([i.injectable()], e)
        }();
    t.HostSettings = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            e.Prod = "office", e.Staging = "officeppe"
        }(t.EditorEndPoint || (t.EditorEndPoint = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(8),
        a = n(14),
        s = n(112),
        u = n(182),
        c = n(183),
        l = function() {
            function e() {
                var e = this;
                this.createSetting = function(e, t, n) {
                    return new c.Setting(e, t, n)
                }, this.descriptors = this.remote("descriptors", JSON.stringify([{
                    name: "LicenseType",
                    value: "Subscription"
                }, {
                    name: "FlightIds",
                    value: "Wac-WordEditorServiceSuggestionDescriptionsNoReferenceInformation-Treatment"
                }])), this.appId = this.user("appId", "EditorBx_Online"), this.disabledWebSites = this.remote("disabledWebSites", []), this.disabledGrammars = this.remote("disabledGrammars", []), this.enableTileNodeAutoReconciliation = this.remote("enableDirtyRangeAutoRehydration", !0), this.featureFlags = this.sys("featureFlags", {
                    enableRemoteLanguageInfo: !1,
                    enableSplitSuggestionButton: !1
                }), this.intervalForActivityCleanup = this.remote("intervalForActivityCleanup", 6e5), this.logGroupName = this.remote("logGroupName", "EditorBx"), this.maxAllowedTimeForActivities = this.remote("maxAllowedTimeForActivities", 36e8), this.maxSuggestionItemsDisplayNumber = this.remote("maxSuggestionItemsDisplayNumber", 3), this.refreshCritiqueWaitingTime = this.remote("refreshCritiqueWaitingTime", 1e3), this.reconcileTileNodeTime = this.remote("reconcileTileNodeTime", 3e3), this.requestCritiqueDelay = this.remote("requestCritiqueDelay", 400), this.schedulerDefaultWaitingTime = this.remote("schedulerDefaultWaitingTime", 50), this.schedulerDefaultMaxTime = this.remote("schedulerDefaultMaxTime", 2e3), this.schedulerDefaultWaitingTimeIncrement = this.remote("schedulerDefaultWaitingTimeIncrement", 400), this.sendToAria = this.remote("sendToAria", !0), this.enableTelemetry = this.user("enableTelemetry", !0), this.spellcheckAttributes = this.remote("spellcheckAttributes", ["data-ms-editor"]), this.styleObserverIntervalTime = this.sys("styleObserverIntervalTime", 1), this.styleSampleTime = this.remote("styleSampleTime", 10), this.telemetryTenant = this.remote("telemetryTenant", JSON.stringify({
                    tenantName: "EditorServiceClient",
                    ariaTenantToken: "71cc1046851042108843d90e5d3ef6c1-61e5de5c-238c-4de5-95de-3b40d20ea6e5-6899",
                    nexusTenantToken: 1733
                })), this.useTileCheck = this.remote("useTileCheck", !0), this.versionEmergencyOverrides = this.remote("versionEmergencyOverrides", {}), this.showSpellingAndGrammar = this.user("showSpellingAndGrammar", !0), this.proofingLanguage = this.user("proofingLanguage", "en-US"), this.userAllowedUrls = this.user("userAllowedUrls", [".*"]), this.userExcludedUrls = this.user("userExcludedUrls", ["https://www.example.com", "https://docs.google.com"]), this.showSynonyms = this.user("showSynonyms", !1), this.rootContentMaxLengthInChars = this.remote("rootContentMaxLengthInChars", 2e3), this.enableTeachingUiOnPageBoot = this.user("enableTeachingUiOnPageBoot", !0), this.enableSpelling = this.user("enableSpelling", !0), this.enableGrammar = this.user("enableGrammar", !0), this.enableRefinements = this.user("enableRefinements", !0), this.allowedUrls = this.remote("allowedUrls", [".*"]), this.authenticationRequestMaxNumberConsecutiveFailures = this.sys("authenticationRequestMaxNumberConsecutiveFailures", 3), this.authenticationRequestTimeout = this.sys("authenticationRequestTimeout", 1e3), this.aadClientId = this.sys("aadClientId", "c3b2d684-9077-48c4-a5f5-09d5a7797847"), this.authority = this.sys("authority", "M365x356091.onmicrosoft.com"), this.cleanupContentScriptOnExtensionDisable = this.sys("cleanupContentScriptOnExtensionDisable", !0), this.defaultEventName = this.sys("defaultEventName", a.EventCategoryName.Diagnostics), this.defaultLoggingLevel = this.sys("defaultLoggingLevel", o.LoggingLevel.Info), this.excludedUrls = this.remote("disabledWebSites", [".*onedrive.live.com"]), this.enableAuthentication = this.sys("enableAuthentication", !1), this.enableSplitSuggestionButton = this.sys("enableSplitSuggestionButton", !1), this.fabricFontsDefinitionPath = this.sys("fabricFontsDefinitionPath", "fonts/fabric-icons.css"), this.injectContentScriptsOnExtensionLoad = this.sys("injectContentScriptsOnExtensionLoad", !0), this.maxTilesPerRequest = this.sys("maxTilesPerRequest", 20), this.narrowOnChangeReconciliation = this.sys("narrowOnChangeReconciliation", !1), this.runConfig = this.sys("runConfig", u.RunConfig.Production), this.debugMode = this.sys("debugMode", [u.RunConfig.Development, u.RunConfig.Localhost].some((function(t) {
                    return t === e.runConfig.defaultValue
                })))
            }
            return e.prototype.remote = function(e, t) {
                return this.createSetting(e, s.SettingType.Remote, t)
            }, e.prototype.user = function(e, t) {
                return this.createSetting(e, s.SettingType.User, t)
            }, e.prototype.sys = function(e, t) {
                return this.createSetting(e, s.SettingType.System, t)
            }, r.__decorate([i.injectable()], e)
        }();
    t.SettingsDefinitions = l
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            e[e.Production = 0] = "Production", e[e.Localhost = 1] = "Localhost", e[e.DemoData = 2] = "DemoData", e[e.Development = 3] = "Development"
        }(t.RunConfig || (t.RunConfig = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.Setting = function(e, t, n) {
        this.name = e, this.settingType = t, this.defaultValue = n, this.name = e, this.settingType = t, this.defaultValue = n
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(8),
        s = n(14),
        u = n(9),
        c = n(93),
        l = n(113),
        d = n(55),
        p = function() {
            function e(e, t, n, r) {
                this._settingsDefinitions = e, this._settingReader = t, this._settingWriter = n, this._logger = r
            }
            var t, n, p, f;
            return e.prototype.cleanupContentScriptOnExtensionDisable = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.cleanupContentScriptOnExtensionDisable)]
                    }))
                }))
            }, e.prototype.debugMode = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.debugMode)]
                    }))
                }))
            }, e.prototype.defaultEventName = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.defaultEventName)]
                    }))
                }))
            }, e.prototype.defaultLoggingLevel = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.defaultLoggingLevel)]
                    }))
                }))
            }, e.prototype.injectContentScriptsOnExtensionLoad = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.injectContentScriptsOnExtensionLoad)]
                    }))
                }))
            }, e.prototype.logGroupName = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.logGroupName)]
                    }))
                }))
            }, e.prototype.runConfig = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.runConfig)]
                    }))
                }))
            }, e.prototype.sendToAria = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.sendToAria)]
                    }))
                }))
            }, e.prototype.appId = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.appId)]
                    }))
                }))
            }, e.prototype.telemetryTenant = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var e;
                    return r.__generator(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]), [4, this._settingReader.readOrInitialize(this._settingsDefinitions.telemetryTenant)];
                            case 1:
                                return e = t.sent(), [2, JSON.parse(e)];
                            case 2:
                                return t.sent(), this._logger.logEvent(595686469, s.ErrorEventName.SettingInvalidDescriptorJson, a.LoggingLevel.Error, void 0, a.SamplingPolicy.CriticalBusinessImpact), [3, 3];
                            case 3:
                                return [2, JSON.parse(this._settingsDefinitions.telemetryTenant.defaultValue)]
                        }
                    }))
                }))
            }, e.prototype.maxTilesPerRequest = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.maxTilesPerRequest)]
                    }))
                }))
            }, e.prototype.schedulerDefaultWaitingTimeIncrement = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.schedulerDefaultWaitingTimeIncrement)]
                    }))
                }))
            }, e.prototype.schedulerDefaultMaxTime = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.schedulerDefaultMaxTime)]
                    }))
                }))
            }, e.prototype.schedulerDefaultWaitingTime = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.schedulerDefaultWaitingTime)]
                    }))
                }))
            }, e.prototype.enableTeachingUiOnPageBoot = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.enableTeachingUiOnPageBoot)]
                    }))
                }))
            }, e.prototype.saveEnableTeachingUiOnPageBoot = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this._settingWriter.write(this._settingsDefinitions.enableTeachingUiOnPageBoot, e)];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, e.prototype.enableTelemetry = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.enableTelemetry)]
                    }))
                }))
            }, e.prototype.saveEnableTelemetry = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this._settingWriter.write(this._settingsDefinitions.enableTelemetry, e)];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, r.__decorate([i.injectable(), r.__param(0, i.inject(o.SharedInjectionTypes.ISettingsDefinitions)), r.__param(1, i.inject(o.SharedInjectionTypes.ISettingReader)), r.__param(2, i.inject(o.SharedInjectionTypes.ISettingWriter)), r.__param(3, i.inject(o.SharedInjectionTypes.ILogger)), r.__metadata("design:paramtypes", ["function" == typeof(t = void 0 !== d.ISettingsDefinitions && d.ISettingsDefinitions) ? t : Object, "function" == typeof(n = void 0 !== c.ISettingReader && c.ISettingReader) ? n : Object, "function" == typeof(p = void 0 !== l.ISettingWriter && l.ISettingWriter) ? p : Object, "function" == typeof(f = void 0 !== u.ILogger && u.ILogger) ? f : Object])], e)
        }();
    t.SettingsImplementation = p
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(8),
        s = n(14),
        u = n(9),
        c = n(63),
        l = n(112),
        d = function(e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r._logger = n, r
            }
            var n, d;
            return r.__extends(t, e), t.prototype.readOrInitialize = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var t, n, i;
                    return r.__generator(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 5, , 6]), [4, this._localStorage.getItems(e.name)];
                            case 1:
                                if (!(t = r.sent())[e.name]) return [3, 2];
                                switch (n = JSON.parse(t[e.name]), e.settingType) {
                                    case l.SettingType.User:
                                    case l.SettingType.Remote:
                                        if (n.value) return e.lastValueFromStorage = JSON.parse(n.value), [2, e.lastValueFromStorage];
                                        break;
                                    case l.SettingType.System:
                                        if (n.manualOverride && n.value) return [2, JSON.parse(n.value)]
                                }
                                return [3, 4];
                            case 2:
                                return [4, this.writeSetting(e.name, e.defaultValue)];
                            case 3:
                                r.sent(), r.label = 4;
                            case 4:
                                return [3, 6];
                            case 5:
                                return i = r.sent(), this._logger.logEvent(595686433, s.ErrorEventName.SettingReadError, a.LoggingLevel.Error, void 0, a.SamplingPolicy.CriticalBusinessImpact), this.setLastError(i), [3, 6];
                            case 6:
                                return e.settingType === l.SettingType.System ? [2, e.defaultValue] : [2, e.lastValueFromStorage ? e.lastValueFromStorage : e.defaultValue]
                        }
                    }))
                }))
            }, r.__decorate([i.injectable(), r.__param(0, i.inject(o.SharedInjectionTypes.IExtensionStorage)), r.__param(1, i.inject(o.SharedInjectionTypes.ILogger)), r.__metadata("design:paramtypes", ["function" == typeof(n = void 0 !== c.IExtensionStorage && c.IExtensionStorage) ? n : Object, "function" == typeof(d = void 0 !== u.ILogger && u.ILogger) ? d : Object])], t)
        }(n(87).SettingsStorageBase);
    t.SettingReader = d
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(8),
        s = n(14),
        u = n(9),
        c = n(63),
        l = function(e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r._logger = n, r
            }
            var n, l;
            return r.__extends(t, e), t.prototype.write = function(e, t) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var n, i, o, u;
                    return r.__generator(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 5, , 6]), n = !1, [4, this._localStorage.getItems(e.name)];
                            case 1:
                                return (i = r.sent())[e.name] && (o = JSON.parse(i[e.name]), n = o.manualOverride), n ? (this._logger.logEvent(595686431, s.ErrorEventName.SettingManualOverrideWarning, a.LoggingLevel.Warn, "manual override for setting " + e.name + " - writing skipped", a.SamplingPolicy.Measure), [3, 4]) : [3, 2];
                            case 2:
                                return [4, this.writeSetting(e.name, t)];
                            case 3:
                                r.sent(), r.label = 4;
                            case 4:
                                return [3, 6];
                            case 5:
                                return u = r.sent(), this._logger.logEvent(595686432, s.ErrorEventName.SettingWriteError, a.LoggingLevel.Error, void 0, a.SamplingPolicy.CriticalBusinessImpact), this.setLastError(u), [3, 6];
                            case 6:
                                return [2]
                        }
                    }))
                }))
            }, r.__decorate([i.injectable(), r.__param(0, i.inject(o.SharedInjectionTypes.IExtensionStorage)), r.__param(1, i.inject(o.SharedInjectionTypes.ILogger)), r.__metadata("design:paramtypes", ["function" == typeof(n = void 0 !== c.IExtensionStorage && c.IExtensionStorage) ? n : Object, "function" == typeof(l = void 0 !== u.ILogger && u.ILogger) ? l : Object])], t)
        }(n(87).SettingsStorageBase);
    t.SettingWriter = l
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(8),
        s = n(14),
        u = n(9),
        c = n(56),
        l = n(55),
        d = n(93),
        p = n(113),
        f = function() {
            function e(e, t, n, r, i) {
                this._settingsDefinitions = e, this._settingReader = t, this._settingWriter = n, this._logger = r, this._hostSettings = i, this.baseUri = "https://nleditor.osi." + this._hostSettings.editorEndPoint + ".net", this.defaultProofingLanguage = "en-US", this.saveAppId(this._hostSettings.appId)
            }
            var t, n, f, h, m;
            return e.prototype.appId = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.appId)]
                    }))
                }))
            }, e.prototype.descriptors = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var e;
                    return r.__generator(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]), [4, this._settingReader.readOrInitialize(this._settingsDefinitions.descriptors)];
                            case 1:
                                return e = t.sent(), [2, JSON.parse(e)];
                            case 2:
                                return t.sent(), this._logger.logEvent(595649940, s.ErrorEventName.SettingInvalidDescriptorJson, a.LoggingLevel.Error, void 0, a.SamplingPolicy.CriticalBusinessImpact), [3, 3];
                            case 3:
                                return [2, JSON.parse(this._settingsDefinitions.descriptors.defaultValue)]
                        }
                    }))
                }))
            }, e.prototype.userExcludedUrls = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.userExcludedUrls)]
                    }))
                }))
            }, e.prototype.saveUserExcludedUrls = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this._settingWriter.write(this._settingsDefinitions.userExcludedUrls, e)];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, e.prototype.proofingLanguage = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.proofingLanguage)]
                    }))
                }))
            }, e.prototype.saveProofingLanguage = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this._settingWriter.write(this._settingsDefinitions.proofingLanguage, e)];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, e.prototype.saveAppId = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(t) {
                        return this._settingWriter.write(this._settingsDefinitions.appId, e), [2]
                    }))
                }))
            }, e.prototype.enableRemoteLanguageInfo = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this._settingReader.readOrInitialize(this._settingsDefinitions.featureFlags)];
                            case 1:
                                return [2, e.sent().enableRemoteLanguageInfo]
                        }
                    }))
                }))
            }, e.prototype.showSpellingAndGrammar = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.showSpellingAndGrammar)]
                    }))
                }))
            }, e.prototype.saveShowSpellingAndGrammar = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this._settingWriter.write(this._settingsDefinitions.showSpellingAndGrammar, e)];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, e.prototype.isSpellingEnabled = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.enableSpelling)]
                    }))
                }))
            }, e.prototype.saveEnableSpelling = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this._settingWriter.write(this._settingsDefinitions.enableSpelling, e)];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, e.prototype.isGrammarEnabled = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.enableGrammar)]
                    }))
                }))
            }, e.prototype.areRefinementsEnabled = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.enableRefinements)]
                    }))
                }))
            }, e.prototype.saveEnableGrammar = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this._settingWriter.write(this._settingsDefinitions.enableGrammar, e)];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, e.prototype.saveEnableRefinements = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this._settingWriter.write(this._settingsDefinitions.enableRefinements, e)];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, e.prototype.showSynonyms = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._settingReader.readOrInitialize(this._settingsDefinitions.showSynonyms)]
                    }))
                }))
            }, e.prototype.saveShowSynonyms = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this._settingWriter.write(this._settingsDefinitions.showSynonyms, e)];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, r.__decorate([i.injectable(), r.__param(0, i.inject(o.SharedInjectionTypes.ISettingsDefinitions)), r.__param(1, i.inject(o.SharedInjectionTypes.ISettingReader)), r.__param(2, i.inject(o.SharedInjectionTypes.ISettingWriter)), r.__param(3, i.inject(o.SharedInjectionTypes.ILogger)), r.__param(4, i.inject(o.SharedInjectionTypes.IHostSettings)), r.__metadata("design:paramtypes", ["function" == typeof(t = void 0 !== l.ISettingsDefinitions && l.ISettingsDefinitions) ? t : Object, "function" == typeof(n = void 0 !== d.ISettingReader && d.ISettingReader) ? n : Object, "function" == typeof(f = void 0 !== p.ISettingWriter && p.ISettingWriter) ? f : Object, "function" == typeof(h = void 0 !== u.ILogger && u.ILogger) ? h : Object, "function" == typeof(m = void 0 !== c.IHostSettings && c.IHostSettings) ? m : Object])], e)
        }();
    t.ProofingSettings = f
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = function() {
            function e() {}
            return e.prototype.set = function(e, t) {
                chrome.storage.local.set(e, t)
            }, e.prototype.remove = function(e, t) {
                chrome.storage.local.remove(e, t)
            }, e.prototype.get = function(e, t) {
                chrome.storage.local.get(e, t)
            }, e.prototype.getLastError = function() {
                if (chrome.runtime.lastError) return chrome.runtime.lastError.message
            }, e.prototype.addChangeListener = function(e) {
                browser.storage.onChanged.addListener(e)
            }, e.prototype.removeEventListener = function(e) {
                browser.storage.onChanged.removeListener(e)
            }, r.__decorate([i.injectable()], e)
        }();
    t.ChromeBrowserStorageApi = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(86),
        s = function() {
            function e(e) {
                this._local = e
            }
            var t;
            return e.prototype.getItems = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var t = this;
                    return r.__generator(this, (function(n) {
                        return [2, new Promise((function(n, r) {
                            t._local.get(e, (function(e) {
                                var i = t._local.getLastError();
                                i ? r(i) : n(e)
                            }))
                        }))]
                    }))
                }))
            }, e.prototype.setItems = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var t = this;
                    return r.__generator(this, (function(n) {
                        return [2, new Promise((function(n, r) {
                            t._local.set(e, (function() {
                                var e = t._local.getLastError();
                                e ? r(e) : n()
                            }))
                        }))]
                    }))
                }))
            }, e.prototype.setItem = function(e, t) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var n;
                    return r.__generator(this, (function(r) {
                        return (n = {})[e] = t, [2, this.setItems(n)]
                    }))
                }))
            }, e.prototype.removeItems = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var t = this;
                    return r.__generator(this, (function(n) {
                        return [2, new Promise((function(n, r) {
                            t._local.remove(e, (function() {
                                var e = t._local.getLastError();
                                e ? r(e) : n()
                            }))
                        }))]
                    }))
                }))
            }, r.__decorate([i.injectable(), r.__param(0, i.inject(o.SharedInjectionTypes.IBrowserStorageApi)), r.__metadata("design:paramtypes", ["function" == typeof(t = void 0 !== a.IBrowserStorageApi && a.IBrowserStorageApi) ? t : Object])], e)
        }();
    t.ExtensionStorage = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            e[e.Unknown = -1] = "Unknown", e[e.WhiteSpace = 0] = "WhiteSpace", e[e.Punctuation = 1] = "Punctuation", e[e.Undetermined = 2] = "Undetermined", e[e.AlphaNumeric = 3] = "AlphaNumeric", e[e.Invalid = 4] = "Invalid", e[e.PuncuationWithoutBreak = 5] = "PuncuationWithoutBreak", e[e.FootnoteEndnotePunctuation = 6] = "FootnoteEndnotePunctuation"
        }(t.WordBreakType || (t.WordBreakType = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(8),
        i = n(14);
    ! function(e) {
        function t(e, t, n, r) {
            if (e.firstDiffLeft > 0) {
                var i = e.firstDiffLeft < t.length && a(t, e.firstDiffLeft),
                    o = e.firstDiffLeft < n.length && a(n, e.firstDiffLeft);
                (i || o) && (e.firstDiffLeft -= 1)
            }
            r.debug(595719315, "GetMinimalDifferenceBounds: Correcting for surrogated pairs found [firstDiffLeft=" + e.firstDiffLeft + "]"), e.firstDiffRight > 1 && (i = e.firstDiffRight < t.length && a(t, t.length - e.firstDiffRight), o = e.firstDiffRight < n.length && a(n, n.length - e.firstDiffRight), (i || o) && (e.firstDiffRight -= 1))
        }

        function n(e, t, n) {
            var r, i = {
                firstDiffLeft: 0,
                firstDiffRight: t.length
            };
            for (n.debug(595719316, "GetMinimalDifferenceBounds: Long neither starts or ends with short."), r = 0; r < e.length && r < t.length && ((a = e.charCodeAt(r)) === (s = t.charCodeAt(r)) || o(a) && o(s)); r += 1);
            for (i.firstDiffLeft = r, n.debug(595719317, "GetMinimalDifferenceBounds: Blind diffing found [firstDiffLeft=" + i.firstDiffLeft + "]"), r = 0; r < e.length && r < t.length; r += 1) {
                var a, s;
                if (!((a = e.charCodeAt(e.length - r - 1)) === (s = t.charCodeAt(t.length - r - 1)) || o(a) && o(s))) break
            }
            return i.firstDiffRight = r, n.debug(595719318, "GetMinimalDifferenceBounds: Blind diffing found [firstDiffRight=" + i.firstDiffRight + "]"), i
        }

        function o(e) {
            switch (e) {
                case 12288:
                case 8197:
                case 32:
                case 13:
                case 10:
                case 65532:
                case 11:
                case 9:
                case 160:
                    return !0
            }
            return !1
        }

        function a(e, t) {
            return e.charCodeAt(t) >= 56320 && e.charCodeAt(t) <= 57343
        }

        function s(e) {
            var t = e.toString();
            return t.toLowerCase() !== t.toUpperCase()
        }

        function u(t) {
            return e.numbers.indexOf(t) >= 0
        }
        e.getMinimalDifferenceBounds = function(e, o, s) {
            var u, c, l = {
                firstDiffLeft: 0,
                firstDiffRight: o.length
            };
            e.length < o.length ? (s.debug(595719309, "GetMinimalDifferenceBounds: NewText longer than OldText."), u = e, c = o) : (s.debug(595719310, "GetMinimalDifferenceBounds: OldText longer than NewText."), u = o, c = e), c.startsWith(u) ? (l.firstDiffLeft = u.length, l.firstDiffRight = 0, s.debug(595719311, "GetMinimalDifferenceBounds: Long starts with short. [left:" + l.firstDiffLeft + " right:" + l.firstDiffRight + "]")) : c.endsWith(u) ? (l.firstDiffLeft = 0, l.firstDiffRight = u.length, s.debug(595719312, "GetMinimalDifferenceBounds: Long ends with short. [left:" + l.firstDiffLeft + " right:" + l.firstDiffRight + "]")) : (l = n(e, o, s)).firstDiffLeft + l.firstDiffRight > u.length && (l.firstDiffRight = u.length - l.firstDiffLeft, s.debug(595719313, "GetMinimalDifferenceBounds: Correcting firstDiffRight: [firstDiffRight=" + l.firstDiffRight + "]")), t(l, e, o, s);
            var d = l.firstDiffLeft < e.length && a(e, l.firstDiffLeft) || l.firstDiffLeft < o.length && a(o, l.firstDiffLeft),
                p = l.firstDiffRight > 0 && (l.firstDiffRight < e.length && a(e, e.length - l.firstDiffRight) || l.firstDiffRight < o.length && a(o, o.length - l.firstDiffRight));
            return (d || p) && s.logEvent(595719314, i.ErrorEventName.GetMinimalDifferenceBoundsError, r.LoggingLevel.Error, "Consecutive low surrogate chars!", r.SamplingPolicy.CriticalBusinessImpact), l
        }, e.trimDifferenceBounds = t, e.getDifferenceBounds = n, e.isWhitespace = o, e.isLowSurrogateCharAt = a, e.isHighSurrogateCharAt = function(e, t) {
            return e.charCodeAt(t) >= 55296 && e.charCodeAt(t) <= 56319
        }, e.isAlpha = s, e.numbers = "0123456789", e.isNumeric = u, e.isAlphaNum = function(e) {
            return s(e) || u(e)
        }
    }(t.StringUtils || (t.StringUtils = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(60),
        o = n(3),
        a = n(69),
        s = n(75),
        u = n(5),
        c = n(8),
        l = n(14),
        d = n(9),
        p = n(38),
        f = function() {
            function e(e, t, n, r) {
                this._userInfoStrategy = e, this._contentScriptEmitter = t, this._editorService = n, this._logger = r
            }
            var t, n, f, h;
            return e.prototype.initialize = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var e = this;
                    return r.__generator(this, (function(t) {
                        return this._contentScriptEmitter.on("instrumentationRequestV1", (function(t) {
                            return r.__awaiter(e, void 0, Promise, (function() {
                                return r.__generator(this, (function(e) {
                                    return [2, this.handleRequest(t)]
                                }))
                            }))
                        })), [2]
                    }))
                }))
            }, e.prototype.shutDown = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return this._contentScriptEmitter.off("instrumentationRequestV1"), [2]
                    }))
                }))
            }, e.prototype.handleRequest = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var t, n, i, o;
                    return r.__generator(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                t = this._logger.getNewActivity(l.EventCategoryName.InstrumentationCall, c.SamplingPolicy.CriticalExperimentation), r.label = 1;
                            case 1:
                                return r.trys.push([1, 4, , 5]), [4, this._userInfoStrategy.executeAsync(!1)];
                            case 2:
                                return (n = r.sent()) && (this._editorService.xUserId = n.userId), [4, this._editorService.instrumentation(e.message)];
                            case 3:
                                return i = r.sent(), t && (i && 200 === i._response.status ? t.setSuccess(!0) : t.setSuccess(!1), t.endNow()), [2, !0];
                            case 4:
                                return o = r.sent(), t && (t.addDataField("Instrumentation_Error_Response", o, c.ActivityDataClassification.EssentialServiceMetadata), t.setSuccess(!1), t.endNow()), [3, 5];
                            case 5:
                                return [2, !1]
                        }
                    }))
                }))
            }, r.__decorate([o.injectable(), r.__param(0, o.inject(u.SharedInjectionTypes.IUserInfoStrategy)), r.__param(1, o.inject(u.SharedInjectionTypes.IContentScriptEmitter)), r.__param(2, o.inject(a.InjectionTypes.EditorService)), r.__param(3, o.inject(u.SharedInjectionTypes.ILogger)), r.__metadata("design:paramtypes", ["function" == typeof(t = void 0 !== s.IUserInfoStrategy && s.IUserInfoStrategy) ? t : Object, "function" == typeof(n = void 0 !== p.IContentScriptEmitter && p.IContentScriptEmitter) ? n : Object, "function" == typeof(f = void 0 !== i.EditorService && i.EditorService) ? f : Object, "function" == typeof(h = void 0 !== d.ILogger && d.ILogger) ? h : Object])], e)
        }();
    t.InstrumentationRequestProcessor = f
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(60),
        o = n(3),
        a = n(69),
        s = n(75),
        u = n(5),
        c = n(8),
        l = n(14),
        d = n(9),
        p = n(38),
        f = n(44),
        h = n(208),
        m = function() {
            function e(e, t, n, r, i, o) {
                this._userInfoStrategy = e, this._contentScriptEmitter = t, this._editorService = n, this._wordCount = r, this._settings = i, this._logger = o
            }
            var t, n, m, g, y, v;
            return e.prototype.initialize = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var e = this;
                    return r.__generator(this, (function(t) {
                        return this._contentScriptEmitter.on("tileCheckRequestV1", (function(t) {
                            return r.__awaiter(e, void 0, Promise, (function() {
                                return r.__generator(this, (function(e) {
                                    return [2, this.handleRequest(t)]
                                }))
                            }))
                        })), [2]
                    }))
                }))
            }, e.prototype.shutDown = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return this._contentScriptEmitter.off("tileCheckRequestV1"), [2]
                    }))
                }))
            }, e.prototype.handleRequest = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var t, n, i, o;
                    return r.__generator(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                t = this._logger.getNewActivity(l.EventCategoryName.EditorCall, c.SamplingPolicy.CriticalExperimentation), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this._userInfoStrategy.executeAsync(!1)];
                            case 2:
                                return (n = r.sent()) && (this._editorService.xUserId = n.userId), [3, 4];
                            case 3:
                                return r.sent(), [3, 4];
                            case 4:
                                return r.trys.push([4, 6, , 7]), i = e.address, [4, this._editorService.postTileCheck(e.message)];
                            case 5:
                                return o = r.sent(), t && (this._logNGrams(e.message, t), t.addDataField("Critique_Size", o.critiques ? o.critiques.length : 0, c.ActivityDataClassification.EssentialServiceMetadata), t.setSuccess(!0), t.endNow()), this._settings.emitRemoval && this._tryEmitClearTileCritiques(e, o), this._contentScriptEmitter.emit("tileCheckResponseV1", {
                                    address: i,
                                    message: o
                                }), [3, 7];
                            case 6:
                                return r.sent(), t && (t.setSuccess(!1), t.endNow()), [3, 7];
                            case 7:
                                return [2, !1]
                        }
                    }))
                }))
            }, e.prototype._logNGrams = function(e, t) {
                if (e.content) {
                    var n = e.content.map((function(e) {
                            return e.tileElements ? e.tileElements.map((function(e) {
                                return e.text
                            })).join(" ") : ""
                        })).join(" "),
                        r = this._wordCount.getWordCountInRange(n, 0, n.length);
                    t.addDataField("N_Grams", r, c.ActivityDataClassification.EssentialServiceMetadata)
                }
            }, e.prototype._tryEmitClearTileCritiques = function(e, t) {
                if (t.responseStatus === i.EditorServiceModels.ResponseStatus.Success || t.responseStatus === i.EditorServiceModels.ResponseStatus.PartialSuccess) {
                    var n = e.address,
                        r = e.message,
                        o = new Set((r.content || []).map((function(e) {
                            return e.tileId
                        })));
                    if ((t.critiques || []).forEach((function(e) {
                            return e.tileId ? o.delete(e.tileId) : void 0
                        })), o.size > 0) {
                        var a = [];
                        Array.from(o).forEach((function(e) {
                            try {
                                var t = {
                                    header: JSON.parse(e),
                                    data: ""
                                };
                                a.push(t)
                            } catch (e) {}
                        })), this._contentScriptEmitter.emit("clearTileCritiques", {
                            address: n,
                            message: a
                        })
                    }
                }
            }, r.__decorate([o.injectable(), r.__param(0, o.inject(u.SharedInjectionTypes.IUserInfoStrategy)), r.__param(1, o.inject(u.SharedInjectionTypes.IContentScriptEmitter)), r.__param(2, o.inject(a.InjectionTypes.EditorService)), r.__param(3, o.inject(u.SharedInjectionTypes.IWordCount)), r.__param(4, o.inject(u.SharedInjectionTypes.IExtensionSettings)), r.__param(5, o.inject(u.SharedInjectionTypes.ILogger)), r.__metadata("design:paramtypes", ["function" == typeof(t = void 0 !== s.IUserInfoStrategy && s.IUserInfoStrategy) ? t : Object, "function" == typeof(n = void 0 !== p.IContentScriptEmitter && p.IContentScriptEmitter) ? n : Object, "function" == typeof(m = void 0 !== i.EditorService && i.EditorService) ? m : Object, "function" == typeof(g = void 0 !== h.IWordCount && h.IWordCount) ? g : Object, "function" == typeof(y = void 0 !== f.IExtensionSettings && f.IExtensionSettings) ? y : Object, "function" == typeof(v = void 0 !== d.ILogger && d.ILogger) ? v : Object])], e)
        }();
    t.TileCheckRequestProcessor = m
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(229),
        o = n(3),
        a = n(75),
        s = n(5),
        u = n(8),
        c = n(231),
        l = function() {
            function e(e) {
                this._userInfoStrategy = e, this._appId = "", this._initialized = !1, this._initializing = !1
            }
            var t, n;
            return t = e, e.prototype.initialize = function(e, t, n) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var o, a, s, u, c, l, d, p, f, h, m = this;
                    return r.__generator(this, (function(g) {
                        switch (g.label) {
                            case 0:
                                if (this._initialized) return [2];
                                if (this._initializing) return [3, 11];
                                this._initializing = !0, g.label = 1;
                            case 1:
                                return g.trys.push([1, , 10, 11]), [4, e.telemetryTenant()];
                            case 2:
                                return s = g.sent(), [4, e.logGroupName()];
                            case 3:
                                return u = g.sent(), [4, e.sendToAria()];
                            case 4:
                                return c = g.sent(), [4, e.defaultEventName()];
                            case 5:
                                return l = g.sent(), [4, e.defaultLoggingLevel()];
                            case 6:
                                return d = g.sent(), [4, e.appId()];
                            case 7:
                                return p = g.sent(), n && n.on("enableTelemetry", (function() {
                                    return r.__awaiter(m, void 0, void 0, (function() {
                                        var t, n, o;
                                        return r.__generator(this, (function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return n = (t = i.STE).setAriaSendEventEnabled, [4, e.enableTelemetry()];
                                                case 1:
                                                    return (o = r.sent()) ? [4, e.sendToAria()] : [3, 3];
                                                case 2:
                                                    o = r.sent(), r.label = 3;
                                                case 3:
                                                    return n.apply(t, [o]), [2]
                                            }
                                        }))
                                    }))
                                })), this._namespace = ["Office", s.tenantName, u].join("."), this._defaultEventName = [this._namespace, l].join("."), this._loggingLevel = d, this._appId = p, this._sessionContext = t, i.STE.isContextSet() || (f = {}, t && (f["Device.OsVersion"] = t.os), i.STE.setContext(f)), i.STE.setTml({
                                    Office: (o = {}, o[s.tenantName] = (a = {
                                        ariaTenantToken: s.ariaTenantToken,
                                        nexusTenantToken: s.nexusTenantToken
                                    }, a[u] = {}, a), o)
                                }), (h = c) ? [4, e.enableTelemetry()] : [3, 9];
                            case 8:
                                h = g.sent(), g.label = 9;
                            case 9:
                                return h && i.STE.setAriaSendEventEnabled(!0), [3, 11];
                            case 10:
                                return this._initializing = !1, [7];
                            case 11:
                                return this._initialized = !0, [2]
                        }
                    }))
                }))
            }, e.prototype.logEvent = function(e, t, n, r, i, o, a) {
                if (this._initialized && this._defaultEventName) {
                    var s = this._defaultEventName;
                    t && (s = [this._namespace, t].join(".")), this.sendLog(s, e, n, r, i, o, a)
                }
            }, e.prototype.getNewActivity = function(e, n, r) {
                if (this._initialized) {
                    var o = [this._namespace, e].join("."),
                        a = new i.Activity.ActivityScope(o);
                    if (this._userInfoStrategy.execute(!1, (function(e) {
                            return e && e.userId && a.addDataField("User_Id", e.userId, i.DataClassification.SystemMetadata), e
                        })), this._sessionContext && (a.addDataField("Browser_Type", this._sessionContext.browserType, i.DataClassification.SystemMetadata), a.addDataField("Browser_Version", this._sessionContext.browserVersion ? this._sessionContext.browserVersion : "", i.DataClassification.SystemMetadata), a.addDataField("Store_Runtime_Id", this._sessionContext.extensionStoreId ? this._sessionContext.extensionStoreId : "", i.DataClassification.SystemMetadata)), a.addDataField("App_Id", this._appId, i.DataClassification.SystemMetadata), a.addDataField("CorrelationID", this._sessionCorrelationId ? this._sessionCorrelationId : "", i.DataClassification.SystemMetadata), r) {
                        var s = t.createFunnelContract(e, r);
                        a.addDataContract(s)
                    }
                    return new c.OTelActivity(a)
                }
            }, e.prototype.addCorrelationID = function(e) {
                this._sessionCorrelationId = e
            }, e.createFunnelContract = function(e, t) {
                var n = u.Experimentation[t];
                return new i.Contracts.Office.System.Funnel(e, n)
            }, e.prototype.sendLog = function(e, n, r, o, a, s, c) {
                if (this._initialized && void 0 !== this._loggingLevel && !(r > this._loggingLevel)) {
                    var l = [];
                    this.serviceRequestId && l.push({
                        name: "Service_Request_Id",
                        value: this.serviceRequestId,
                        classification: i.DataClassification.SystemMetadata
                    }), this._sessionContext && (l.push({
                        name: "Browser_Type",
                        value: this._sessionContext.browserType,
                        classification: i.DataClassification.SystemMetadata
                    }), l.push({
                        name: "Browser_Version",
                        value: this._sessionContext.browserVersion ? this._sessionContext.browserVersion : "",
                        classification: i.DataClassification.SystemMetadata
                    }));
                    var d = "";
                    this._userInfoStrategy.execute(!1, (function(e) {
                        return e && e.userId && (d = e.userId), e
                    })), l = l.concat([{
                        name: "Tag",
                        value: n.toString(),
                        classification: i.DataClassification.SystemMetadata
                    }, {
                        name: "Tag_Hex",
                        value: n.toString(16),
                        classification: i.DataClassification.SystemMetadata
                    }, {
                        name: "Level",
                        value: u.LoggingLevel[r],
                        classification: i.DataClassification.SystemMetadata
                    }, {
                        name: "App_Id",
                        value: this._appId,
                        classification: i.DataClassification.SystemMetadata
                    }, {
                        name: "User_Id",
                        value: d,
                        classification: i.DataClassification.EndUserIdentifiableInformation
                    }]), o && l.push({
                        name: "Message",
                        value: o,
                        classification: i.DataClassification.SystemMetadata
                    }), this._sessionCorrelationId && l.push({
                        name: "Correlation_Id",
                        value: this._sessionCorrelationId,
                        classification: i.DataClassification.SystemMetadata
                    }), s && l.push({
                        name: "Data",
                        value: JSON.stringify(s),
                        classification: i.DataClassification.SystemMetadata
                    });
                    var p = [];
                    if (c) {
                        var f = t.createFunnelContract(e, c);
                        p.push(f)
                    }
                    i.STE.sendTelemetryEvent({
                        eventName: e,
                        dataFields: l,
                        dataContracts: p,
                        eventFlags: {
                            persistence: i.STE.PersistencePriority.Normal,
                            cost: i.STE.CostPriority.Normal,
                            sampling: a
                        }
                    })
                }
            }, t = r.__decorate([o.injectable(), r.__param(0, o.inject(s.SharedInjectionTypes.IUserInfoStrategy)), r.__metadata("design:paramtypes", ["function" == typeof(n = void 0 !== a.IUserInfoStrategy && a.IUserInfoStrategy) ? n : Object])], e)
        }();
    t.OTelLogger = l
}, function(e, t, n) {
    var r;
    r = function(e) {
        return function(e) {
            var t = {};

            function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
            }
            return n.m = e, n.c = t, n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }, n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 10)
        }([function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e[e.EssentialServiceMetadata = 1] = "EssentialServiceMetadata", e[e.AccountData = 2] = "AccountData", e[e.SystemMetadata = 4] = "SystemMetadata", e[e.OrganizationIdentifiableInformation = 8] = "OrganizationIdentifiableInformation", e[e.EndUserIdentifiableInformation = 16] = "EndUserIdentifiableInformation", e[e.CustomerContent = 32] = "CustomerContent", e[e.AccessControl = 64] = "AccessControl"
                }(t.DataClassification || (t.DataClassification = {}))
        }, function(e, t, n) {
            "use strict";
            var r = function() {
                function e(e) {
                    this.low = 0, this.high = 0, this.low = parseInt(e, 10), this.low < 0 && (this.high = -1)
                }
                return e.prototype.Equals = function(t) {
                    var n = new e(t);
                    return this.low === n.low && this.high === n.high
                }, e
            }();
            t.Int64 = r;
            var i = function() {
                function e(e) {
                    this.low = 0, this.high = 0, this.low = parseInt(e, 10)
                }
                return e.prototype.Equals = function(t) {
                    var n = new e(t);
                    return this.low === n.low && this.high === n.high
                }, e
            }();
            t.UInt64 = i;
            var o = function() {
                function e() {}
                return e.ToByte = function(e) {
                    return this.ToUInt8(e)
                }, e.ToInt16 = function(e) {
                    return 32767 & e | (32768 & e) << 16 >> 16
                }, e.ToInt32 = function(e) {
                    return 2147483647 & e | 2147483648 & e
                }, e.ToUInt8 = function(e) {
                    return 255 & e
                }, e.ToUInt32 = function(e) {
                    return 4294967295 & e
                }, e
            }();
            t.Number = o
        }, function(e, t, n) {
            "use strict";
            var r = this && this.__assign || Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                },
                i = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(e) {
                            e.done ? i(e.value) : new n((function(t) {
                                t(e.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                o = this && this.__generator || function(e, t) {
                    var n, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1], i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2], a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(3);
            ! function(e) {
                var t, n, s, u = !1,
                    c = !1,
                    l = !1;

                function d() {
                    return u
                }! function(e) {
                    e[e.NotSet = 0] = "NotSet", e[e.Measure = 1] = "Measure", e[e.Diagnostics = 2] = "Diagnostics", e[e.CriticalBusinessImpact = 191] = "CriticalBusinessImpact", e[e.CriticalCensus = 192] = "CriticalCensus", e[e.CriticalExperimentation = 193] = "CriticalExperimentation", e[e.CriticalUsage = 194] = "CriticalUsage"
                }(t = e.SamplingPolicy || (e.SamplingPolicy = {})),
                function(e) {
                    e[e.NotSet = 0] = "NotSet", e[e.Normal = 1] = "Normal", e[e.High = 2] = "High"
                }(n = e.PersistencePriority || (e.PersistencePriority = {})),
                function(e) {
                    e[e.NotSet = 0] = "NotSet", e[e.Normal = 1] = "Normal", e[e.High = 2] = "High"
                }(s = e.CostPriority || (e.CostPriority = {})), e.sendTelemetryEvent = function(e) {
                    return i(this, void 0, void 0, (function() {
                        var r = this;
                        return o(this, (function(u) {
                            return [2, new Promise((function(u, c) {
                                return i(r, void 0, void 0, (function() {
                                    var r;
                                    return o(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return function(e) {
                                                    e.eventFlags || (e.eventFlags = {}), e.eventFlags.cost || (e.eventFlags.cost = s.Normal), e.eventFlags.sampling || (e.eventFlags.sampling = t.Measure), e.eventFlags.persistence || (e.eventFlags.persistence = n.Normal), e.dataFields || (e.dataFields = []), e.dataContracts || (e.dataContracts = [])
                                                }(e), (r = this.checkReady()) ? [2, u(r)] : [4, a.EventProcessor.processEvent(e).catch((function(e) {
                                                    return u({
                                                        eventAccepted: !1,
                                                        message: e
                                                    })
                                                }))];
                                            case 1:
                                                return i.sent(), [2, u({
                                                    eventAccepted: !0
                                                })]
                                        }
                                    }))
                                }))
                            }))]
                        }))
                    }))
                }, e.checkReady = function() {
                    return u ? c ? void 0 : {
                        eventAccepted: !1,
                        message: "Must call .setTml before .sendTelemetryEvent."
                    } : {
                        eventAccepted: !1,
                        message: "Must call .setContext before .sendTelemetryEvent."
                    }
                }, e.isContextSet = d, e.setContext = function(e) {
                    if (!0 === d() && !0 !== l) throw ".setContext already called.";
                    a.EventProcessor.setContext(r({}, {
                        "Data.SDX.Id": "",
                        "Data.SDX.Version": "",
                        "Data.SDX.InstanceId": "",
                        "App.Name": "TBD",
                        "App.Platform": "TBD",
                        "App.Version": "TBD",
                        "Device.OsBuild": "TBD",
                        "Device.OsVersion": "TBD",
                        "Host.Id": "",
                        "Host.Version": "",
                        "Release.Audience": "TBD",
                        "Release.AudienceGroup": "TBD",
                        "Release.Channel": "TBD",
                        "Release.Fork": "TBD"
                    }, e)), u = !0
                }, e.setTml = function(e) {
                    a.EventProcessor.setTml(e), c = !0
                }, e.setAriaSendEventEnabled = function(e) {
                    a.EventProcessor.setAriaSendEventEnabled(e)
                }, e.enableTestMode = function(e) {
                    l = !0, a.EventProcessor.enableTestMode(e)
                }
            }(t.STE || (t.STE = {}))
        }, function(e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(e) {
                            e.done ? i(e.value) : new n((function(t) {
                                t(e.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                i = this && this.__generator || function(e, t) {
                    var n, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1], i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2], a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(15),
                a = n(0),
                s = n(27);
            ! function(e) {
                var t;
                ! function(e) {
                    e[e.Aria = 0] = "Aria", e[e.Nexus = 1] = "Nexus"
                }(t || (t = {}));
                var n = {},
                    u = {},
                    c = {},
                    l = !1;

                function d(e, n) {
                    var r = e.split("."),
                        i = c,
                        o = void 0;
                    if (i) {
                        for (var a = 0; a < r.length - 1; a++) {
                            if (!i[r[a]]) return;
                            i = i[r[a]], n === t.Aria && "string" == typeof i.ariaTenantToken ? o = i.ariaTenantToken : n === t.Nexus && "number" == typeof i.nexusTenantToken && (o = i.nexusTenantToken)
                        }
                        return o
                    }
                }

                function p(e, t, n, r) {
                    if (0 === e.length) return !1;
                    if (t && !(e[0] >= "A" && e[0] <= "Z")) return !1;
                    for (var i = 0; i < e.length; i++) {
                        var o = e[i];
                        if (!(r && "." === o || n && "_" === o || o >= "a" && o <= "z" || o >= "A" && o <= "Z" || o >= "0" && o <= "9")) return !1
                    }
                    return !0
                }
                e.processEvent = function(e) {
                    return r(this, void 0, void 0, (function() {
                        var t = this;
                        return i(this, (function(n) {
                            return e.dataFields.push({
                                name: "Event.Time.String",
                                value: (new Date).toISOString(),
                                classification: a.DataClassification.SystemMetadata
                            }), [2, new Promise((function(n, a) {
                                return r(t, void 0, void 0, (function() {
                                    var t;
                                    return i(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return !0 !== (t = function(e) {
                                                    var t, n = e.eventName.split("."),
                                                        r = n[n.length - 1];
                                                    if (! function(e) {
                                                            return e.length >= 3 && "Office" === e[0]
                                                        }(n)) return "Invalid namespace.";
                                                    if (!p(r, !0, !1, !1)) return "Invalid eventNode";
                                                    if (e.eventContract && !p(e.eventContract.getContractName(), !1, !0, !0)) return "Invalid eventContract.";
                                                    if (!(e.eventName.length <= 98)) return "Invalid eventName";
                                                    for (var i = 0; i < e.dataFields.length; i++) {
                                                        if (!(p(t = e.dataFields[i].name, !1, !0, !0) && t.length + 5 < 100)) return "Invalid dataField name.";
                                                        e.dataFields[i].classification
                                                    }
                                                    return !0
                                                }(e)) ? [2, a(t)] : [4, s.RichApiSendEvent.isSupported()];
                                            case 1:
                                                return !0 === r.sent() ? [2, n(s.RichApiSendEvent.sendEvent(e))] : l ? [2, n(o.AriaSendEvent.sendEvent(e))] : [2, a("RichApi is not supported. You can enable sending events directly to Aria by calling setAriaSendEventEnabled.")]
                                        }
                                    }))
                                }))
                            }))]
                        }))
                    }))
                }, e.setContext = function(e) {
                    o.AriaSendEvent.setContext(e)
                }, e.setTml = function(e) {
                    c = function e(t, n) {
                        if ("object" != typeof n) return n;
                        for (var r = 0, i = Object.keys(n); r < i.length; r++) {
                            var o = i[r];
                            o in t && (t[o], 1) ? t[o] = e(t[o], n[o]) : t[o] = n[o]
                        }
                        return t
                    }(c, e)
                }, e.setAriaSendEventEnabled = function(e) {
                    l = e
                }, e.getAriaTenantToken = function(e) {
                    if (n[e]) return n[e];
                    var r = d(e, t.Aria);
                    return "string" == typeof r ? (n[e] = r, r) : void 0
                }, e.getNexusTenantToken = function(e) {
                    if (u[e]) return u[e];
                    var n = d(e, t.Nexus);
                    return "number" == typeof n ? (u[e] = n, n) : void 0
                }, e.enableTestMode = function(e) {
                    s.RichApiSendEvent.enableTestMode(e)
                }
            }(t.EventProcessor || (t.EventProcessor = {}))
        }, function(e, t, n) {
            "use strict";
            ! function(e) {
                e[e.NotSet = 0] = "NotSet", e[e.DistinguishedName = 1] = "DistinguishedName", e[e.GenericData = 2] = "GenericData", e[e.IPV4Address = 3] = "IPV4Address", e[e.IPv6Address = 4] = "IPv6Address", e[e.MailSubject = 5] = "MailSubject", e[e.PhoneNumber = 6] = "PhoneNumber", e[e.QueryString = 7] = "QueryString", e[e.SipAddress = 8] = "SipAddress", e[e.SmtpAddress = 9] = "SmtpAddress", e[e.Identity = 10] = "Identity", e[e.Uri = 11] = "Uri", e[e.Fqdn = 12] = "Fqdn", e[e.IPV4AddressLegacy = 13] = "IPV4AddressLegacy"
            }(t.AWTPiiKind || (t.AWTPiiKind = {}))
        }, function(e, t, n) {
            "use strict";
            var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                },
                function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(30),
                a = n(0);
            ! function(e) {
                ! function(e) {
                    ! function(e) {
                        var t = function(e) {
                            function t(t, n, r, i, o) {
                                var s = e.call(this, "Office.System.SDX") || this;
                                return s.id = t, s.version = n, s.instanceId = r, s.name = i, s.marketplaceType = o, null !== t && (s.Id = t), null !== n && (s.Version = n), null !== r && (s.InstanceId = r), null !== i && (s.Name = i), null !== o && (s.MarketplaceType = o), s.fields = [{
                                    name: "Id",
                                    required: !1,
                                    classification: a.DataClassification.EssentialServiceMetadata
                                }, {
                                    name: "Version",
                                    required: !1,
                                    classification: a.DataClassification.EssentialServiceMetadata
                                }, {
                                    name: "InstanceId",
                                    required: !1,
                                    classification: a.DataClassification.EssentialServiceMetadata
                                }, {
                                    name: "Name",
                                    required: !1,
                                    classification: a.DataClassification.EssentialServiceMetadata
                                }, {
                                    name: "MarketplaceType",
                                    required: !1,
                                    classification: a.DataClassification.EssentialServiceMetadata
                                }], s
                            }
                            return i(t, e), t
                        }(o.BaseContract);
                        e.SDX = t;
                        var n = function(e) {
                            function t(t, n, r) {
                                var i = e.call(this, "Office.System.Host") || this;
                                return i.id = t, i.version = n, i.sessionId = r, null != t && (i.Id = t), null != n && (i.Version = n), null != r && (i.SessionId = r), i.fields = [{
                                    name: "Id",
                                    required: !1,
                                    classification: a.DataClassification.SystemMetadata
                                }, {
                                    name: "Version",
                                    required: !1,
                                    classification: a.DataClassification.SystemMetadata
                                }, {
                                    name: "SessionId",
                                    required: !1,
                                    classification: a.DataClassification.SystemMetadata
                                }], i
                            }
                            return i(t, e), t
                        }(o.BaseContract);
                        e.Host = n;
                        var r = function(e) {
                            function t(t, n, r) {
                                var i = e.call(this, "Office.System.Result") || this;
                                return i.code = t, i.type = n, i.tag = r, i.Code = t, null !== n && (i.Type = n), null !== r && (i.Tag = r), i.fields = [{
                                    name: "Code",
                                    required: !0,
                                    classification: a.DataClassification.SystemMetadata
                                }, {
                                    name: "Type",
                                    required: !1,
                                    classification: a.DataClassification.SystemMetadata
                                }, {
                                    name: "Tag",
                                    required: !1,
                                    classification: a.DataClassification.SystemMetadata
                                }], i
                            }
                            return i(t, e), t
                        }(o.BaseContract);
                        e.Result = r;
                        var s = function(e) {
                            function t(t, n, r, i, o, s) {
                                var u = e.call(this, "Office.System.Activity") || this;
                                return u.duration = t, u.count = n, u.aggMode = r, u.cV = i, u.success = o, u.result = s, null != i && (u.CV = i), u.Duration = t, u.Count = n, u.AggMode = r, null != o && (u.Success = o), null != s && (u.Result = s), u.fields = [{
                                    name: "CV",
                                    required: !1,
                                    classification: a.DataClassification.SystemMetadata
                                }, {
                                    name: "Duration",
                                    required: !0,
                                    classification: a.DataClassification.SystemMetadata
                                }, {
                                    name: "Count",
                                    required: !0,
                                    classification: a.DataClassification.SystemMetadata
                                }, {
                                    name: "AggMode",
                                    required: !1,
                                    classification: a.DataClassification.SystemMetadata
                                }, {
                                    name: "Success",
                                    required: !1,
                                    classification: a.DataClassification.SystemMetadata
                                }, {
                                    name: "Result",
                                    required: !1,
                                    classification: a.DataClassification.SystemMetadata
                                }], u
                            }
                            return i(t, e), t
                        }(o.BaseContract);
                        e.Activity = s;
                        var u = function(e) {
                            function t(t, n, r, i, o) {
                                var s = e.call(this, "Office.System.Error") || this;
                                return s.ErrorGroup = t, s.Tag = n, null != r && (s.Code = r), null != i && (s.Id = i), null != o && (s.Count = o), s.fields = [{
                                    name: "ErrorGroup",
                                    required: !0,
                                    classification: a.DataClassification.SystemMetadata
                                }, {
                                    name: "Tag",
                                    required: !0,
                                    classification: a.DataClassification.SystemMetadata
                                }, {
                                    name: "Code",
                                    required: !1,
                                    classification: a.DataClassification.SystemMetadata
                                }, {
                                    name: "Id",
                                    required: !1,
                                    classification: a.DataClassification.SystemMetadata
                                }, {
                                    name: "Count",
                                    required: !1,
                                    classification: a.DataClassification.SystemMetadata
                                }], s
                            }
                            return i(t, e), t
                        }(o.BaseContract);
                        e.Error = u;
                        var c = function(e) {
                            function t(t, n) {
                                var r = e.call(this, "Office.System.Funnel") || this;
                                return null != t && (r.Name = t), null != n && (r.State = n), r.fields = [{
                                    name: "Name",
                                    required: !1,
                                    classification: a.DataClassification.SystemMetadata
                                }, {
                                    name: "State",
                                    required: !1,
                                    classification: a.DataClassification.SystemMetadata
                                }], r
                            }
                            return i(t, e), t
                        }(o.BaseContract);
                        e.Funnel = c
                    }(e.System || (e.System = {}))
                }(e.Office || (e.Office = {}))
            }(t.Contracts || (t.Contracts = {}))
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(11).polyfill(), r(n(2)), r(n(29)), r(n(5)), r(n(0)), r(n(32))
        }, function(e, t, n) {
            "use strict";
            var r = n(20),
                i = n(4),
                o = n(8),
                a = function() {
                    function e() {}
                    return e.getPayloadBlob = function(e, t) {
                        var n = new r.IO.MemoryStream,
                            i = new r.CompactBinaryProtocolWriter(n);
                        return i.WriteFieldBegin(r.BondDataType.BT_MAP, 3), i.WriteMapContainerBegin(t, r.BondDataType.BT_STRING, r.BondDataType.BT_LIST), Object.keys(e).forEach((function(t) {
                            i.WriteString(t);
                            var n = e[t];
                            i.WriteContainerBegin(1, r.BondDataType.BT_STRUCT), i.WriteFieldBegin(r.BondDataType.BT_STRING, 2), i.WriteString("act_default_source"), i.WriteFieldBegin(r.BondDataType.BT_STRING, 5), i.WriteString(o.newGuid()), i.WriteFieldBegin(r.BondDataType.BT_INT64, 6), i.WriteInt64(o.numberToBondInt64(Date.now())), i.WriteFieldBegin(r.BondDataType.BT_LIST, 8), i.WriteContainerBegin(n.length, r.BondDataType.BT_STRUCT);
                            for (var a = 0; a < n.length; ++a) i.WriteBlob(n[a]);
                            i.WriteStructEnd(!1)
                        })), i.WriteStructEnd(!1), n.GetBuffer()
                    }, e.getEventBlob = function(e) {
                        var t = new r.IO.MemoryStream,
                            n = new r.CompactBinaryProtocolWriter(t);
                        n.WriteFieldBegin(r.BondDataType.BT_STRING, 1), n.WriteString(e.id), n.WriteFieldBegin(r.BondDataType.BT_INT64, 3), n.WriteInt64(o.numberToBondInt64(e.timestamp)), n.WriteFieldBegin(r.BondDataType.BT_STRING, 5), n.WriteString(e.type), n.WriteFieldBegin(r.BondDataType.BT_STRING, 6), n.WriteString(e.name);
                        var a = [],
                            s = [];
                        return Object.keys(e.properties).forEach((function(t) {
                            e.properties[t].pii === i.AWTPiiKind.NotSet ? a.push(t) : s.push(t)
                        })), a.length && (n.WriteFieldBegin(r.BondDataType.BT_MAP, 13), n.WriteMapContainerBegin(a.length, r.BondDataType.BT_STRING, r.BondDataType.BT_STRING), a.forEach((function(t) {
                            n.WriteString(t), n.WriteString(e.properties[t].value)
                        }))), s.length && (n.WriteFieldBegin(r.BondDataType.BT_MAP, 30), n.WriteMapContainerBegin(s.length, r.BondDataType.BT_STRING, r.BondDataType.BT_STRUCT), s.forEach((function(t) {
                            n.WriteString(t), n.WriteFieldBegin(r.BondDataType.BT_INT32, 1), n.WriteInt32(1), n.WriteFieldBegin(r.BondDataType.BT_INT32, 2), n.WriteInt32(e.properties[t].pii), n.WriteFieldBegin(r.BondDataType.BT_STRING, 3), n.WriteString(e.properties[t].value), n.WriteStructEnd(!1)
                        }))), n.WriteStructEnd(!1), t.GetBuffer()
                    }, e.base64Encode = function(e) {
                        return r.Encoding.Base64.GetString(e)
                    }, e
                }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = a
        }, function(e, t, n) {
            "use strict";
            var r = n(1),
                i = /[xy]/g;
            t.numberToBondInt64 = function(e) {
                var t = new r.Int64("0");
                return t.low = 4294967295 & e, t.high = Math.floor(e / 4294967296), t
            }, t.newGuid = function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(i, (function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                }))
            }, t.isPii = function(e) {
                return !isNaN(e) && null !== e && e >= 0 && e <= 13
            }
        }, function(e, t, n) {
            "use strict";
            t.Version = "1.2.0", t.FullVersionString = "AWT-Web-CJS-" + t.Version
        }, function(e, t, n) {
            e.exports = n(6)
        }, function(e, t, n) {
            (function(t, r) {
                var i;
                /*!
                 * @overview es6-promise - a tiny implementation of Promises/A+.
                 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
                 * @license   Licensed under MIT license
                 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
                 * @version   4.1.1
                 */
                i = function() {
                    "use strict";

                    function e(e) {
                        return "function" == typeof e
                    }
                    var i = Array.isArray ? Array.isArray : function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        },
                        o = 0,
                        a = void 0,
                        s = void 0,
                        u = function(e, t) {
                            m[o] = e, m[o + 1] = t, 2 === (o += 2) && (s ? s(g) : S())
                        },
                        c = "undefined" != typeof window ? window : void 0,
                        l = c || {},
                        d = l.MutationObserver || l.WebKitMutationObserver,
                        p = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                        f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                    function h() {
                        var e = setTimeout;
                        return function() {
                            return e(g, 1)
                        }
                    }
                    var m = new Array(1e3);

                    function g() {
                        for (var e = 0; e < o; e += 2)(0, m[e])(m[e + 1]), m[e] = void 0, m[e + 1] = void 0;
                        o = 0
                    }
                    var y, v, _, b, S = void 0;

                    function I(e, t) {
                        var n = arguments,
                            r = this,
                            i = new this.constructor(C);
                        void 0 === i[w] && V(i);
                        var o, a = r._state;
                        return a ? (o = n[a - 1], u((function() {
                            return q(a, i, o, r._result)
                        }))) : B(r, i, e, t), i
                    }

                    function T(e) {
                        if (e && "object" == typeof e && e.constructor === this) return e;
                        var t = new this(C);
                        return x(t, e), t
                    }
                    p ? S = function() {
                        return t.nextTick(g)
                    } : d ? (v = 0, _ = new d(g), b = document.createTextNode(""), _.observe(b, {
                        characterData: !0
                    }), S = function() {
                        b.data = v = ++v % 2
                    }) : f ? ((y = new MessageChannel).port1.onmessage = g, S = function() {
                        return y.port2.postMessage(0)
                    }) : S = void 0 === c ? function() {
                        try {
                            var e = n(14);
                            return void 0 !== (a = e.runOnLoop || e.runOnContext) ? function() {
                                a(g)
                            } : h()
                        } catch (e) {
                            return h()
                        }
                    }() : h();
                    var w = Math.random().toString(36).substring(16);

                    function C() {}
                    var E = void 0,
                        N = 1,
                        O = 2,
                        P = new k;

                    function A(e) {
                        try {
                            return e.then
                        } catch (e) {
                            return P.error = e, P
                        }
                    }

                    function R(t, n, r) {
                        n.constructor === t.constructor && r === I && n.constructor.resolve === T ? function(e, t) {
                            t._state === N ? j(e, t._result) : t._state === O ? M(e, t._result) : B(t, void 0, (function(t) {
                                return x(e, t)
                            }), (function(t) {
                                return M(e, t)
                            }))
                        }(t, n) : r === P ? (M(t, P.error), P.error = null) : void 0 === r ? j(t, n) : e(r) ? function(e, t, n) {
                            u((function(e) {
                                var r = !1,
                                    i = function(e, t, n, r) {
                                        try {
                                            e.call(t, n, r)
                                        } catch (e) {
                                            return e
                                        }
                                    }(n, t, (function(n) {
                                        r || (r = !0, t !== n ? x(e, n) : j(e, n))
                                    }), (function(t) {
                                        r || (r = !0, M(e, t))
                                    }), e._label);
                                !r && i && (r = !0, M(e, i))
                            }), e)
                        }(t, n, r) : j(t, n)
                    }

                    function x(e, t) {
                        var n, r;
                        e === t ? M(e, new TypeError("You cannot resolve a promise with itself")) : (r = typeof(n = t), null === n || "object" !== r && "function" !== r ? j(e, t) : R(e, t, A(t)))
                    }

                    function D(e) {
                        e._onerror && e._onerror(e._result), L(e)
                    }

                    function j(e, t) {
                        e._state === E && (e._result = t, e._state = N, 0 !== e._subscribers.length && u(L, e))
                    }

                    function M(e, t) {
                        e._state === E && (e._state = O, e._result = t, u(D, e))
                    }

                    function B(e, t, n, r) {
                        var i = e._subscribers,
                            o = i.length;
                        e._onerror = null, i[o] = t, i[o + N] = n, i[o + O] = r, 0 === o && e._state && u(L, e)
                    }

                    function L(e) {
                        var t = e._subscribers,
                            n = e._state;
                        if (0 !== t.length) {
                            for (var r = void 0, i = void 0, o = e._result, a = 0; a < t.length; a += 3) r = t[a], i = t[a + n], r ? q(n, r, i, o) : i(o);
                            e._subscribers.length = 0
                        }
                    }

                    function k() {
                        this.error = null
                    }
                    var z = new k;

                    function q(t, n, r, i) {
                        var o = e(r),
                            a = void 0,
                            s = void 0,
                            u = void 0,
                            c = void 0;
                        if (o) {
                            if ((a = function(e, t) {
                                    try {
                                        return e(t)
                                    } catch (e) {
                                        return z.error = e, z
                                    }
                                }(r, i)) === z ? (c = !0, s = a.error, a.error = null) : u = !0, n === a) return void M(n, new TypeError("A promises callback cannot return that same promise."))
                        } else a = i, u = !0;
                        n._state !== E || (o && u ? x(n, a) : c ? M(n, s) : t === N ? j(n, a) : t === O && M(n, a))
                    }
                    var U = 0;

                    function V(e) {
                        e[w] = U++, e._state = void 0, e._result = void 0, e._subscribers = []
                    }

                    function W(e, t) {
                        this._instanceConstructor = e, this.promise = new e(C), this.promise[w] || V(this.promise), i(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? j(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && j(this.promise, this._result))) : M(this.promise, new Error("Array Methods must be provided an Array"))
                    }

                    function F(e) {
                        this[w] = U++, this._result = this._state = void 0, this._subscribers = [], C !== e && ("function" != typeof e && function() {
                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                        }(), this instanceof F ? function(e, t) {
                            try {
                                t((function(t) {
                                    x(e, t)
                                }), (function(t) {
                                    M(e, t)
                                }))
                            } catch (t) {
                                M(e, t)
                            }
                        }(this, e) : function() {
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                        }())
                    }
                    return W.prototype._enumerate = function(e) {
                        for (var t = 0; this._state === E && t < e.length; t++) this._eachEntry(e[t], t)
                    }, W.prototype._eachEntry = function(e, t) {
                        var n = this._instanceConstructor,
                            r = n.resolve;
                        if (r === T) {
                            var i = A(e);
                            if (i === I && e._state !== E) this._settledAt(e._state, t, e._result);
                            else if ("function" != typeof i) this._remaining--, this._result[t] = e;
                            else if (n === F) {
                                var o = new n(C);
                                R(o, e, i), this._willSettleAt(o, t)
                            } else this._willSettleAt(new n((function(t) {
                                return t(e)
                            })), t)
                        } else this._willSettleAt(r(e), t)
                    }, W.prototype._settledAt = function(e, t, n) {
                        var r = this.promise;
                        r._state === E && (this._remaining--, e === O ? M(r, n) : this._result[t] = n), 0 === this._remaining && j(r, this._result)
                    }, W.prototype._willSettleAt = function(e, t) {
                        var n = this;
                        B(e, void 0, (function(e) {
                            return n._settledAt(N, t, e)
                        }), (function(e) {
                            return n._settledAt(O, t, e)
                        }))
                    }, F.all = function(e) {
                        return new W(this, e).promise
                    }, F.race = function(e) {
                        var t = this;
                        return i(e) ? new t((function(n, r) {
                            for (var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r)
                        })) : new t((function(e, t) {
                            return t(new TypeError("You must pass an array to race."))
                        }))
                    }, F.resolve = T, F.reject = function(e) {
                        var t = new this(C);
                        return M(t, e), t
                    }, F._setScheduler = function(e) {
                        s = e
                    }, F._setAsap = function(e) {
                        u = e
                    }, F._asap = u, F.prototype = {
                        constructor: F,
                        then: I,
                        catch: function(e) {
                            return this.then(null, e)
                        }
                    }, F.polyfill = function() {
                        var e = void 0;
                        if (void 0 !== r) e = r;
                        else if ("undefined" != typeof self) e = self;
                        else try {
                            e = Function("return this")()
                        } catch (e) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                        var t = e.Promise;
                        if (t) {
                            var n = null;
                            try {
                                n = Object.prototype.toString.call(t.resolve())
                            } catch (e) {}
                            if ("[object Promise]" === n && !t.cast) return
                        }
                        e.Promise = F
                    }, F.Promise = F, F
                }, e.exports = i()
            }).call(t, n(12), n(13))
        }, function(e, t) {
            var n, r, i = e.exports = {};

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function a() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(e) {
                if (n === setTimeout) return setTimeout(e, 0);
                if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
                try {
                    return n(e, 0)
                } catch (t) {
                    try {
                        return n.call(null, e, 0)
                    } catch (t) {
                        return n.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : o
                } catch (e) {
                    n = o
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                    r = a
                }
            }();
            var u, c = [],
                l = !1,
                d = -1;

            function p() {
                l && u && (l = !1, u.length ? c = u.concat(c) : d = -1, c.length && f())
            }

            function f() {
                if (!l) {
                    var e = s(p);
                    l = !0;
                    for (var t = c.length; t;) {
                        for (u = c, c = []; ++d < t;) u && u[d].run();
                        d = -1, t = c.length
                    }
                    u = null, l = !1,
                        function(e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                            try {
                                r(e)
                            } catch (t) {
                                try {
                                    return r.call(null, e)
                                } catch (t) {
                                    return r.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function h(e, t) {
                this.fun = e, this.array = t
            }

            function m() {}
            i.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                c.push(new h(e, t)), 1 !== c.length || l || s(f)
            }, h.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
                return []
            }, i.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        }, function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        }, function(e, t) {}, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(16),
                i = n(3),
                o = n(26),
                a = n(6),
                s = /\./g,
                u = "OTelJS.ClientId",
                c = "Data.",
                l = "zDC.",
                d = "zC.",
                p = "zT.",
                f = ["Office.System.Host"];
            ! function(e) {
                var t = !1,
                    n = null,
                    h = 0,
                    m = null,
                    g = void 0;

                function y(e, t) {
                    t.forEach((function(t) {
                        if ((n = t.name).substr(0, 3) === d || n.substr(0, 3) === p || n.substr(0, 4) === l) e.properties[t.name] = t.value;
                        else {
                            switch (t.classification) {
                                case a.DataClassification.EssentialServiceMetadata:
                                    e.properties[l + t.name] = "ESM";
                                    break;
                                case a.DataClassification.SystemMetadata:
                                    e.properties[l + t.name] = "SM";
                                    break;
                                default:
                                    return
                            }
                            e.properties[t.name] = t.value
                        }
                        var n
                    }))
                }
                e.sendEvent = function(e) {
                    var a;
                    t || (r.AWT.initialize("2d0c842b097d46049a4c52d8fec89843-88e5473b-a960-4484-a08b-64796c688ef1-7865"), r.AWT.setContext("Client.Id", null != n ? n : ("undefined" != typeof localStorage && (n = localStorage.getItem(u)), null == n && (n = o.Utils.newGuid(), "undefined" != typeof localStorage && localStorage.setItem(u, n)), n)), r.AWT.setContext("Session.Id", (null == m && (m = o.Utils.newGuid()), m)), g && Object.keys(g).forEach((function(e) {
                        r.AWT.setContext(e, g[e])
                    })), t = !0);
                    try {
                        a = function(e) {
                            var t, n = {
                                name: (t = e.eventName, t.toLowerCase().replace(s, "_") + "_sdxa"),
                                properties: {},
                                tenantToken: i.EventProcessor.getAriaTenantToken(e.eventName)
                            };
                            if (n.properties["Event.Sequence"] = ++h, n.properties["Event.Name"] = e.eventName, n.properties["Event.Source"] = "OTelJS", e.eventContract) {
                                n.properties["Event.Contract"] = e.eventContract.getContractName();
                                var r = e.eventContract.getUnqualifiedName();
                                y(n, e.eventContract.getFields(r))
                            }
                            return e.dataContracts.forEach((function(e) {
                                var t = c;
                                f.indexOf(e.getContractName()) >= 0 && (t = ""), y(n, e.getFields(t + e.getUnqualifiedName()))
                            })), e.dataFields.forEach((function(e) {
                                "object" == typeof e.value ? y(n, e.value.getFields(c + e.name)) : y(n, [{
                                    name: c + e.name,
                                    value: e.value,
                                    classification: e.classification
                                }])
                            })), n
                        }(e)
                    } catch (e) {
                        return e.meesage
                    }
                    return a.tenantToken ? (function(e) {
                        for (var t in e.properties) "string" != typeof e.properties[t] && (e.properties[t + ".String"] = e.properties[t], delete e.properties[t])
                    }(a), r.AWT.logEvent(a), !0) : "Unable to find ariaTenantToken for namespace."
                }, e.setContext = function(e) {
                    g = e
                }
            }(t.AriaSendEvent || (t.AriaSendEvent = {}))
        }, function(e, t, n) {
            "use strict";
            var r = n(4);
            t.AWTPiiKind = r.AWTPiiKind;
            var i = n(17);
            t.AWT = i.default, t.AWT_COLLECTOR_URL_UNITED_STATES = "https://us.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_GERMANY = "https://de.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_JAPAN = "https://jp.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_AUSTRALIA = "https://au.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_EUROPE = "https://eu.pipe.aria.microsoft.com/Collector/3.0/"
        }, function(e, t, n) {
            "use strict";
            var r = n(4),
                i = n(18),
                o = n(8),
                a = n(9),
                s = /^[a-zA-Z0-9]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/,
                u = /\./g,
                c = /^[a-zA-Z0-9](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/,
                l = function() {
                    function e() {}
                    return e.initialize = function(e, t) {
                        if (void 0 === t && (t = {}), this._isInitialized) throw "Already Initialized";
                        this._defaultTenantToken = e, this._overrideValuesFromConfig(t), i.default.initialize(this._config), this._isInitialized = !0
                    }, e.flush = function(e) {
                        this._isInitialized && !this._isDestroyed && i.default.flush(e)
                    }, e.flushAndTeardown = function() {
                        this._isInitialized && !this._isDestroyed && (this._isDestroyed = !0, i.default.flushAndTeardown())
                    }, e.setContext = function(e, t, n) {
                        void 0 === n && (n = "allTkns"), null !== (t = this._sanitizeProperty(e, t)) && (this._contextProperties[n] || (this._contextProperties[n] = {}), this._contextProperties[n][e] = t)
                    }, e.logEvent = function(e) {
                        var t = this;
                        if (this._isInitialized) {
                            if (!e.name || !e.properties) return;
                            e.name = e.name.toLowerCase(), e.name.replace(u, "_");
                            var n = "";
                            if (e.type ? (e.type.toLowerCase(), n = "custom.") : e.type = "custom", !s.test(e.name) || !s.test(e.type)) return;
                            if (e.type = n + e.type, isNaN(e.timestamp) && (e.timestamp = (new Date).getTime()), e.tenantToken || (e.tenantToken = this._defaultTenantToken), e.id = o.newGuid(), Object.keys(e.properties).forEach((function(n) {
                                    e.properties[n] = t._sanitizeProperty(n, e.properties[n]), null === e.properties[n] && delete e.properties[n]
                                })), this._addContextIfAbsent(e, e.tenantToken), this._addContextIfAbsent(e, "allTkns"), 0 === Object.keys(e.properties).length) return;
                            this._setDefaultProperty(e, "EventInfo.InitId", this._getInitId(e.tenantToken)), this._setDefaultProperty(e, "EventInfo.Sequence", this._getSequenceId(e.tenantToken)), this._setDefaultProperty(e, "EventInfo.SdkVersion", a.FullVersionString), this._setDefaultProperty(e, "EventInfo.Name", e.name), this._setDefaultProperty(e, "EventInfo.Time", new Date(e.timestamp).toISOString()), i.default.sendEvent(e)
                        }
                    }, e._overrideValuesFromConfig = function(e) {
                        e.collectorUrl && (this._config.collectorUrl = e.collectorUrl), e.sendingTimer > 1e3 && (this._config.sendingTimer = e.sendingTimer)
                    }, e._getInitId = function(e) {
                        return void 0 === this._initIdMap[e] && (this._initIdMap[e] = o.newGuid()), this._initIdMap[e]
                    }, e._getSequenceId = function(e) {
                        return void 0 === this._sequenceIdMap[e] && (this._sequenceIdMap[e] = 0), (++this._sequenceIdMap[e]).toString()
                    }, e._setDefaultProperty = function(e, t, n) {
                        e.properties[t] = {
                            value: n,
                            pii: r.AWTPiiKind.NotSet
                        }
                    }, e._addContextIfAbsent = function(e, t) {
                        if (this._contextProperties[t]) {
                            var n = this._contextProperties[t];
                            Object.keys(n).forEach((function(t) {
                                e.properties[t] || (e.properties[t] = n[t])
                            }))
                        }
                    }, e._sanitizeProperty = function(e, t) {
                        return "string" != typeof t && "number" != typeof t && "boolean" != typeof t || (t = {
                            value: t
                        }), c.test(e) && null != t && null !== t.value && void 0 !== t.value && "" !== t.value ? (void 0 === t.pii && (t.pii = r.AWTPiiKind.NotSet), t.value = t.value.toString(), o.isPii(t.pii) ? t : null) : null
                    }, e
                }();
            l._isInitialized = !1, l._isDestroyed = !1, l._contextProperties = {}, l._sequenceIdMap = {}, l._initIdMap = {}, l._config = {
                collectorUrl: "https://browser.pipe.aria.microsoft.com/Collector/3.0/",
                sendingTimer: 1e3
            }, Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = l
        }, function(e, t, n) {
            "use strict";
            var r = n(19),
                i = n(7),
                o = n(24),
                a = n(25),
                s = n(9),
                u = function() {
                    function e() {}
                    return e.initialize = function(e) {
                        this._inboundQueues.push([]), this._recordBatcher = new r.default(2936012, this._outboundQueue), this._newEventsAllowed = !0, "undefined" == typeof Uint8Array && (this._urlString += "&content-encoding=base64"), this._sendingTimer = e.sendingTimer, this._urlString = e.collectorUrl + this._urlString + "&x-apikey="
                    }, e.sendEvent = function(e) {
                        var t = this;
                        this._newEventsAllowed && (this._inboundQueues[this._inboundQueues.length - 1].push(e), !this._running && this._timeout < 0 && !this._isCurrentlyFlushing && (this._timeout = setTimeout((function() {
                            return t._batchAndSendEvents(!1)
                        }), this._sendingTimer)))
                    }, e.flushAndTeardown = function() {
                        this._newEventsAllowed = !1, this._batchAndSendEvents(!0)
                    }, e.flush = function(e) {
                        this._inboundQueues.push([]), this._isCurrentlyFlushing ? this._flushQueue.push(e) : (this._isCurrentlyFlushing = !0, this._flush(e))
                    }, e._batchAndSendEvents = function(e) {
                        for (this._running = !0; this._inboundQueues[0].length > 0 && this._outboundQueue.length < 1;) this._recordBatcher.addEventToBatch(this._inboundQueues[0].pop());
                        0 === this._outboundQueue.length && this._recordBatcher.flushBatch(), this._sendRequest(this._outboundQueue.pop(), 0, e)
                    }, e._retryRequestIfNeeded = function(e, t, n, r, i) {
                        var a = this,
                            s = !0;
                        e && void 0 !== e.status && (this._killSwitch.setKillSwitchTenants(e.getResponseHeader("kill-tokens"), e.getResponseHeader("kill-duration-seconds")).forEach((function(e) {
                            delete t[e], n--
                        })), (!o.default.shouldRetryForStatus(e.status) || n <= 0) && (s = !1)), s && i < 4 ? setTimeout((function() {
                            return a._sendRequest(t, i + 1, !1)
                        }), o.default.getMillisToBackoffForRetry(i)) : this._handleRequestFinished(null)
                    }, e._sendRequest = function(e, t, n) {
                        var r = this,
                            o = new XMLHttpRequest,
                            a = 0,
                            s = "";
                        if (Object.keys(e).forEach((function(t) {
                                r._killSwitch.isTenantKilled(t) ? delete e[t] : (s.length > 0 && (s += ","), s += t, a++)
                            })), o.open("POST", this._urlString + s, !n), n || (o.ontimeout = function() {
                                r._retryRequestIfNeeded(o, e, a, s, t)
                            }, o.onerror = function() {
                                r._retryRequestIfNeeded(o, e, a, s, t)
                            }, o.onload = function() {
                                r._handleRequestFinished(o)
                            }), a > 0) {
                            var u = i.default.getPayloadBlob(e, a);
                            "undefined" == typeof Uint8Array ? o.send(i.default.base64Encode(u)) : o.send(new Uint8Array(u))
                        } else n && this._handleRequestFinished(null)
                    }, e._handleRequestFinished = function(e) {
                        var t = this;
                        e && this._killSwitch.setKillSwitchTenants(e.getResponseHeader("kill-tokens"), e.getResponseHeader("kill-duration-seconds")), this._inboundQueues[0].length > 0 ? this._timeout = setTimeout((function() {
                            return t._batchAndSendEvents(!1)
                        }), this._sendingTimer) : (this._timeout = -1, this._running = !1)
                    }, e._flush = function(e) {
                        var t = this;
                        this._running || (this._timeout > -1 && (clearTimeout(this._timeout), this._timeout = -1), this._inboundQueues[0].length > 0 && this._batchAndSendEvents(!1)), this._checkPrimaryInboundQueueEmpty((function() {
                            t._inboundQueues.shift(), null != e && e(), t._flushQueue.length > 0 ? setTimeout((function() {
                                return t._flush(t._flushQueue.shift())
                            }), t._sendingTimer) : (t._isCurrentlyFlushing = !1, t._inboundQueues[0].length > 0 && (t._timeout = setTimeout((function() {
                                return t._batchAndSendEvents(!1)
                            }), t._sendingTimer)))
                        }))
                    }, e._checkPrimaryInboundQueueEmpty = function(e) {
                        var t = this;
                        0 === this._inboundQueues[0].length ? this._checkOutboundQueueEmptyAndSent(e) : setTimeout((function() {
                            return t._checkPrimaryInboundQueueEmpty(e)
                        }), 250)
                    }, e._checkOutboundQueueEmptyAndSent = function(e) {
                        var t = this;
                        this._running ? setTimeout((function() {
                            return t._checkOutboundQueueEmptyAndSent(e)
                        }), 250) : e()
                    }, e
                }();
            u._outboundQueue = [], u._inboundQueues = [], u._newEventsAllowed = !1, u._killSwitch = new a.default, u._isCurrentlyFlushing = !1, u._flushQueue = [], u._running = !1, u._timeout = -1, u._urlString = "?qsp=true&content-type=application%2Fbond-compact-binary&client-id=NO_AUTH&sdk-version=" + s.FullVersionString, Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = u
        }, function(e, t, n) {
            "use strict";
            var r = n(7),
                i = function() {
                    function e(e, t) {
                        this._maxRequestSize = e, this._outboundQueue = t, this._currentBatch = {}, this._currentBatchSize = 0
                    }
                    return e.prototype.addEventToBatch = function(e) {
                        var t = r.default.getEventBlob(e);
                        t.length > this._maxRequestSize || (this._currentBatchSize + t.length > this._maxRequestSize ? this.flushBatch() : (void 0 === this._currentBatch[e.tenantToken] && (this._currentBatch[e.tenantToken] = []), this._currentBatch[e.tenantToken].push(t), this._currentBatchSize += t.length))
                    }, e.prototype.flushBatch = function() {
                        this._currentBatchSize > 0 && (this._outboundQueue.push(this._currentBatch), this._currentBatch = {}, this._currentBatchSize = 0)
                    }, e
                }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i
        }, function(e, t, n) {
            "use strict";
            var r = n(21);
            t.BondDataType = r.BondDataType;
            var i = n(22);
            t.Encoding = i;
            var o = n(23);
            t.IO = o;
            var a = n(1);
            t.Int64 = a.Int64, t.UInt64 = a.UInt64, t.Number = a.Number;
            var s = function() {
                function e(e) {
                    this._stream = e
                }
                return e.prototype.WriteBlob = function(e) {
                    this._stream.Write(e, 0, e.length)
                }, e.prototype.WriteContainerBegin = function(e, t) {
                    this.WriteUInt8(t), this.WriteUInt32(e)
                }, e.prototype.WriteMapContainerBegin = function(e, t, n) {
                    this.WriteUInt8(t), this.WriteUInt8(n), this.WriteUInt32(e)
                }, e.prototype.WriteFieldBegin = function(e, t) {
                    t <= 5 ? this._stream.WriteByte(e | t << 5) : t <= 255 ? (this._stream.WriteByte(192 | e), this._stream.WriteByte(t)) : (this._stream.WriteByte(224 | e), this._stream.WriteByte(t), this._stream.WriteByte(t >> 8))
                }, e.prototype.WriteInt32 = function(e) {
                    e = i.Zigzag.EncodeZigzag32(e), this.WriteUInt32(e)
                }, e.prototype.WriteInt64 = function(e) {
                    this.WriteUInt64(i.Zigzag.EncodeZigzag64(e))
                }, e.prototype.WriteString = function(e) {
                    if ("" === e) this.WriteUInt32(0);
                    else {
                        var t = i.Utf8.GetBytes(e);
                        this.WriteUInt32(t.length), this._stream.Write(t, 0, t.length)
                    }
                }, e.prototype.WriteStructEnd = function(e) {
                    this.WriteUInt8(e ? r.BondDataType.BT_STOP_BASE : r.BondDataType.BT_STOP)
                }, e.prototype.WriteUInt32 = function(e) {
                    var t = i.Varint.GetBytes(a.Number.ToUInt32(e));
                    this._stream.Write(t, 0, t.length)
                }, e.prototype.WriteUInt64 = function(e) {
                    var t = i.Varint64.GetBytes(e);
                    this._stream.Write(t, 0, t.length)
                }, e.prototype.WriteUInt8 = function(e) {
                    this._stream.WriteByte(a.Number.ToUInt8(e))
                }, e
            }();
            t.CompactBinaryProtocolWriter = s
        }, function(e, t, n) {
            "use strict";
            ! function(e) {
                e[e.BT_STOP = 0] = "BT_STOP", e[e.BT_STOP_BASE = 1] = "BT_STOP_BASE", e[e.BT_UINT8 = 3] = "BT_UINT8", e[e.BT_UINT32 = 5] = "BT_UINT32", e[e.BT_UINT64 = 6] = "BT_UINT64", e[e.BT_STRING = 9] = "BT_STRING", e[e.BT_STRUCT = 10] = "BT_STRUCT", e[e.BT_LIST = 11] = "BT_LIST", e[e.BT_MAP = 13] = "BT_MAP", e[e.BT_INT32 = 16] = "BT_INT32", e[e.BT_INT64 = 17] = "BT_INT64", e[e.BT_UNAVAILABLE = 127] = "BT_UNAVAILABLE"
            }(t.BondDataType || (t.BondDataType = {}))
        }, function(e, t, n) {
            "use strict";
            var r = n(1),
                i = function() {
                    function e() {}
                    return e.GetBytes = function(e) {
                        for (var t = [], n = 0; n < e.length; ++n) {
                            var r = e.charCodeAt(n);
                            r < 128 ? t.push(r) : r < 2048 ? t.push(192 | r >> 6, 128 | 63 & r) : r < 55296 || r >= 57344 ? t.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++n)), t.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r))
                        }
                        return t
                    }, e
                }();
            t.Utf8 = i;
            var o = function() {
                function e() {}
                return e.GetString = function(e) {
                    for (var t, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = [], i = e.length % 3, o = 0, a = e.length - i; o < a; o += 3) {
                        var s = (e[o] << 16) + (e[o + 1] << 8) + e[o + 2];
                        r.push([n.charAt((t = s) >> 18 & 63), n.charAt(t >> 12 & 63), n.charAt(t >> 6 & 63), n.charAt(63 & t)].join(""))
                    }
                    switch (i) {
                        case 1:
                            s = e[e.length - 1], r.push(n.charAt(s >> 2)), r.push(n.charAt(s << 4 & 63)), r.push("==");
                            break;
                        case 2:
                            var u = (e[e.length - 2] << 8) + e[e.length - 1];
                            r.push(n.charAt(u >> 10)), r.push(n.charAt(u >> 4 & 63)), r.push(n.charAt(u << 2 & 63)), r.push("=")
                    }
                    return r.join("")
                }, e
            }();
            t.Base64 = o;
            var a = function() {
                function e() {}
                return e.GetBytes = function(e) {
                    for (var t = []; 4294967168 & e;) t.push(127 & e | 128), e >>>= 7;
                    return t.push(127 & e), t
                }, e
            }();
            t.Varint = a;
            var s = function() {
                function e() {}
                return e.GetBytes = function(e) {
                    for (var t = e.low, n = e.high, r = []; n || 4294967168 & t;) r.push(127 & t | 128), t = (127 & n) << 25 | t >>> 7, n >>>= 7;
                    return r.push(127 & t), r
                }, e
            }();
            t.Varint64 = s;
            var u = function() {
                function e() {}
                return e.EncodeZigzag32 = function(e) {
                    return (e = r.Number.ToInt32(e)) << 1 ^ e >> 31
                }, e.EncodeZigzag64 = function(e) {
                    var t = e.low,
                        n = e.high,
                        i = n << 1 | t >>> 31,
                        o = t << 1;
                    2147483648 & n && (i = ~i, o = ~o);
                    var a = new r.UInt64("0");
                    return a.low = o, a.high = i, a
                }, e
            }();
            t.Zigzag = u
        }, function(e, t, n) {
            "use strict";
            var r = n(1),
                i = function() {
                    function e() {
                        this._buffer = []
                    }
                    return e.prototype.WriteByte = function(e) {
                        this._buffer.push(r.Number.ToByte(e))
                    }, e.prototype.Write = function(e, t, n) {
                        for (; n--;) this.WriteByte(e[t++])
                    }, e.prototype.GetBuffer = function() {
                        return this._buffer
                    }, e
                }();
            t.MemoryStream = i
        }, function(e, t, n) {
            "use strict";
            var r = function() {
                function e() {}
                return e.shouldRetryForStatus = function(e) {
                    return !(e >= 300 && e < 500 && 408 !== e || 501 === e || 505 === e)
                }, e.getMillisToBackoffForRetry = function(e) {
                    var t, n = Math.floor(1200 * Math.random()) + 2400;
                    return t = Math.pow(4, e) * n, Math.min(t, 12e4)
                }, e
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = r
        }, function(e, t, n) {
            "use strict";
            var r = function() {
                function e() {
                    this._killedTokenDictionary = {}
                }
                return e.prototype.setKillSwitchTenants = function(e, t) {
                    var n = this;
                    if (e && t) try {
                        var r = e.split(",");
                        if ("this-request-only" === t) return r;
                        var i = 1e3 * parseInt(t, 10);
                        r.forEach((function(e) {
                            n._killedTokenDictionary[e] = Date.now() + i
                        }))
                    } catch (e) {
                        return []
                    }
                    return []
                }, e.prototype.isTenantKilled = function(e) {
                    return void 0 !== this._killedTokenDictionary[e] && this._killedTokenDictionary[e] > Date.now() || (delete this._killedTokenDictionary[e], !1)
                }, e
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = r
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = /[xy]/g;
            ! function(e) {
                e.newGuid = function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(r, (function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" === e ? t : 3 & t | 8).toString(16)
                    }))
                }
            }(t.Utils || (t.Utils = {}))
        }, function(e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(e) {
                            e.done ? i(e.value) : new n((function(t) {
                                t(e.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                i = this && this.__generator || function(e, t) {
                    var n, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1], i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2], a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(0),
                a = n(3);
            ! function(e) {
                var t, s = null,
                    u = 1e3,
                    c = -1;

                function l() {
                    return r(this, void 0, void 0, (function() {
                        var e = this;
                        return i(this, (function(t) {
                            return [2, new Promise((function(t, o) {
                                return r(e, void 0, void 0, (function() {
                                    var e, r, o;
                                    return i(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                if (-1 !== c) return [2, t(1 === c)];
                                                if (! function() {
                                                        if (null === s)
                                                            if ("undefined" == typeof OfficeCore) try {
                                                                var e = n(28);
                                                                s = e.RequestContext
                                                            } catch (e) {
                                                                return c = 0, !1
                                                            } else s = OfficeCore.RequestContext;
                                                        return !0
                                                    }() || null === s) return [2, t("Can't get OfficeCore RequestContext")];
                                                if (void 0 === (e = new s)) return [2, t("Can't get OfficeCore")];
                                                i.label = 1;
                                            case 1:
                                                return i.trys.push([1, 3, , 4]), r = {
                                                    nexusTenantToken: 1723,
                                                    ariaTenantToken: "f998cc5ba4d448d6a1e8e913ff18be94-dd122e0a-fcf8-4dc5-9dbb-6afac5325183-7405"
                                                }, e.telemetry.sendTelemetryEvent(r, "Office.Telemetry.RichApi.TestForSupport", null, null, []), [4, e.sync().then((function() {
                                                    return c = 1, t(!0)
                                                }))];
                                            case 2:
                                                return i.sent(), [3, 4];
                                            case 3:
                                                return "InvalidArgument" === (o = i.sent()).code ? (c = 0, [2, t("Not supported on the host")]) : [2, t(JSON.stringify(o))];
                                            case 4:
                                                return [2, t("Shouldn't get here")]
                                        }
                                    }))
                                }))
                            }))]
                        }))
                    }))
                }

                function d(e, t) {
                    t.forEach((function(t) {
                        "number" == typeof t.value && Math.abs(t.value) > 2147483647 && Math.abs(t.value) <= 9007199254740992 && Math.floor(t.value) === t.value ? (e.push({
                            name: "zT." + t.name,
                            value: "int64",
                            classification: o.DataClassification.SystemMetadata
                        }), e.push({
                            name: t.name,
                            value: t.value.toString(),
                            classification: t.classification
                        })) : "object" == typeof t.value ? d(e, t.value.getFields(t.name)) : e.push(t)
                    }))
                }
                e.isSupported = l, e.enableTestMode = function(e) {
                    s = e, u = 0
                }, e.sendEvent = function(e) {
                    return r(this, void 0, void 0, (function() {
                        var n = this;
                        return i(this, (function(s) {
                            return [2, new Promise((function(s, u) {
                                return r(n, void 0, void 0, (function() {
                                    var n;
                                    return i(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return [4, l()];
                                            case 1:
                                                if (!0 !== r.sent()) return [2, u("RichApi is not supported.")];
                                                try {
                                                    n = function(e) {
                                                        var t = new f;
                                                        return t.nexusTenantToken = a.EventProcessor.getNexusTenantToken(e.eventName), t.ariaTenantToken = a.EventProcessor.getAriaTenantToken(e.eventName), t.eventName = e.eventName, t.eventContract = e.eventContract ? e.eventContract.getContractName() : null, t.samplingPolicy = e.eventFlags.sampling, t.costPriority = e.eventFlags.cost, t.persistencePriority = e.eventFlags.persistence, t.dataFields = [], d(t.dataFields, e.dataFields), e.eventContract && (d(t.dataFields, [{
                                                            name: "Event.Contract",
                                                            value: e.eventContract.getContractName(),
                                                            classification: o.DataClassification.SystemMetadata
                                                        }]), d(t.dataFields, e.eventContract.getFields(null))), e.dataContracts.forEach((function(e) {
                                                            d(t.dataFields, e.getFields(null))
                                                        })), t
                                                    }(e)
                                                } catch (e) {
                                                    return [2, u(e.message)]
                                                }
                                                return t || (t = new p(h)), t.add(n), [2, s(!0)]
                                        }
                                    }))
                                }))
                            }))]
                        }))
                    }))
                };
                var p = function() {
                        function e(e) {
                            this._processor = e, this._requestIsPending = !1, this._items = []
                        }
                        return e.prototype.add = function(e) {
                            this._items.push(e), this._requestIsPending || this.processWorkBacklog()
                        }, e.prototype.getQueue = function() {
                            return this._items
                        }, e.prototype.processWorkBacklog = function() {
                            return r(this, void 0, void 0, (function() {
                                var e, t = this;
                                return i(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this._requestIsPending = !0, e = this._items, this._items = [], [4, this._processor(e)];
                                        case 1:
                                            return n.sent(), this._requestIsPending = !1, this._items.length > 0 && setTimeout((function() {
                                                return t.processWorkBacklog()
                                            }), 0), [2]
                                    }
                                }))
                            }))
                        }, e
                    }(),
                    f = function() {};

                function h(e) {
                    return r(this, void 0, void 0, (function() {
                        var t;
                        return i(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return t = new s, e.forEach((function(e) {
                                        var n = {
                                                nexusTenantToken: e.nexusTenantToken,
                                                ariaTenantToken: e.ariaTenantToken
                                            },
                                            r = {
                                                samplingPolicy: e.samplingPolicy,
                                                costPriority: e.costPriority,
                                                persistencePriority: e.persistencePriority
                                            };
                                        t.telemetry.sendTelemetryEvent(n, e.eventName, e.eventContract, r, e.dataFields)
                                    })), t.sync(), [4, (r = u, new Promise((function(e) {
                                        return setTimeout(e, r)
                                    })))];
                                case 1:
                                    return n.sent(), [2]
                            }
                            var r
                        }))
                    }))
                }
            }(t.RichApiSendEvent || (t.RichApiSendEvent = {}))
        }, function(t, n) {
            if (void 0 === e) {
                var r = new Error('Cannot find module "@microsoft/office-api/office.core"');
                throw r.code = "MODULE_NOT_FOUND", r
            }
            t.exports = e
        }, function(e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(e) {
                            e.done ? i(e.value) : new n((function(t) {
                                t(e.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                i = this && this.__generator || function(e, t) {
                    var n, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1], i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2], a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(2),
                a = n(5),
                s = n(31);
            ! function(e) {
                function t(e, t, r) {
                    r(n(e, t))
                }

                function n(e, t) {
                    return new u(e, t)
                }
                e.startPromise = function(e, n) {
                    t(e, void 0, n)
                }, e.startPromiseWithParent = t, e.getNew = n;
                var u = function() {
                    function e(t, n) {
                        this.eventName = t;
                        var r = o.STE.checkReady();
                        if (r && !1 === r.eventAccepted) throw r.message;
                        this.cv = n ? s.CorrelationVector.getNextChild(n.cv) : s.CorrelationVector.getNext(), this.dataContracts = [], this.dataFields = [], this.result = void 0, this.success = void 0, this.startTime = e.getCurrentMicroseconds()
                    }
                    return e.getCurrentMicroseconds = function() {
                        return 1e3 * (new Date).getTime()
                    }, e.prototype.addDataContract = function(e) {
                        this.dataContracts.push(e)
                    }, e.prototype.addDataField = function(e, t, n) {
                        this.dataFields.push({
                            name: e,
                            value: t,
                            classification: n
                        })
                    }, e.prototype.setSuccess = function(e) {
                        this.success = e
                    }, e.prototype.setResult = function(e, t, n) {
                        this.result = new a.Contracts.Office.System.Result(e, t, n)
                    }, e.prototype.endNow = function() {
                        return r(this, void 0, void 0, (function() {
                            var t, n, r;
                            return i(this, (function(i) {
                                return t = e.getCurrentMicroseconds(), n = t - this.startTime, r = new a.Contracts.Office.System.Activity(n, 1, 0, this.cv.getString(), this.success, this.result), [2, o.STE.sendTelemetryEvent({
                                    eventName: this.eventName,
                                    eventContract: r,
                                    dataFields: this.dataFields,
                                    dataContracts: this.dataContracts
                                })]
                            }))
                        }))
                    }, e
                }();
                e.ActivityScope = u
            }(t.Activity || (t.Activity = {}))
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(0);
            t.FieldSpecification = function() {};
            var i = function() {
                function e(e) {
                    this._contractName = e
                }
                return e.prototype.getUnqualifiedName = function() {
                    return this._contractName.split(".").pop()
                }, e.prototype.getContractName = function() {
                    return this._contractName
                }, e.prototype.getFields = function(e) {
                    var t = this,
                        n = [];
                    return null != e && "" !== e || (e = this.getUnqualifiedName()), this.fields.forEach((function(r) {
                        if (r.required && null == t[r.name]) throw new Error("Data contract " + t._contractName + " is missing required field: " + r.name);
                        if (null != t[r.name]) {
                            var i = e + "." + r.name;
                            "object" == typeof t[r.name] && "function" == typeof t[r.name].getFields ? n.push.apply(n, t[r.name].getFields(i)) : n.push({
                                name: i,
                                value: t[r.name],
                                classification: r.classification
                            })
                        }
                    })), n.push({
                        name: "zC." + e,
                        value: this._contractName,
                        classification: r.DataClassification.SystemMetadata
                    }), n
                }, e
            }();
            t.BaseContract = i
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    var t, n = 0;
                    e.getNext = function() {
                        return void 0 === t && (t = function() {
                            for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = [], n = 0; n < 19; n++) t.push(e.charAt(Math.floor(Math.random() * e.length)));
                            return t.join("")
                        }()), new r(t, ++n)
                    }, e.getNextChild = function(e) {
                        return new r(e.getString(), ++e.nextChild)
                    };
                    var r = function() {
                        function e(e, t) {
                            this.base = e, this.id = t, this.nextChild = 0
                        }
                        return e.prototype.getString = function() {
                            return this.base + "." + this.id
                        }, e
                    }();
                    e.CV = r
                }(t.CorrelationVector || (t.CorrelationVector = {}))
        }, function(e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(e) {
                            e.done ? i(e.value) : new n((function(t) {
                                t(e.value)
                            })).then(a, s)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                i = this && this.__generator || function(e, t) {
                    var n, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1], i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2], a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(5),
                a = n(2);
            ! function(e) {
                function t(e, t, n, s, u, c, l) {
                    return r(this, void 0, void 0, (function() {
                        var r, d;
                        return i(this, (function(i) {
                            return r = new o.Contracts.Office.System.Error(t, n, s, u, c), d = [], void 0 !== l && d.push(l), [2, a.STE.sendTelemetryEvent({
                                eventName: e,
                                eventContract: r,
                                dataContracts: d
                            })]
                        }))
                    }))
                }
                e.sendError = function(e, n, o, a, s, u) {
                    return r(this, void 0, void 0, (function() {
                        return i(this, (function(r) {
                            return [2, t(e, n, o, a, s, u)]
                        }))
                    }))
                }, e.sendErrorWithSdx = t
            }(t.Error || (t.Error = {}))
        }])
    }, e.exports = r(function() {
        try {
            return n(230)
        } catch (e) {}
    }())
}, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);

            function r() {
                this.constructor = e
            }
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        },
        i = n(174),
        o = (i.ObjectPathFactory.createPropertyObjectPath, i.ObjectPathFactory.createMethodObjectPath),
        a = (i.ObjectPathFactory.createIndexerObjectPath, i.ObjectPathFactory.createNewObjectObjectPath),
        s = (i.ObjectPathFactory.createChildItemObjectPathUsingIndexer, i.ObjectPathFactory.createChildItemObjectPathUsingGetItemAt, i.ObjectPathFactory.createChildItemObjectPathUsingIndexerOrGetItemAt, i.ActionFactory.createMethodAction),
        u = (i.ActionFactory.createSetPropertyAction, i.Utility.isNullOrUndefined),
        c = i.Utility.isUndefined,
        l = i.Utility.throwIfNotLoaded,
        d = (i.Utility.throwIfApiNotSupported, i.Utility.load),
        p = i.Utility.fixObjectPathIfNecessary,
        f = i.Utility._addActionResultHandler,
        h = (i.Utility._handleNavigationPropertyResults, i.Utility.adjustToDateTime, function(e) {
            function t() {
                e.apply(this, arguments)
            }
            return r(t, e), Object.defineProperty(t.prototype, "_className", {
                get: function() {
                    return "FlightingService"
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getClientSessionId = function() {
                var e = s(this.context, this, "GetClientSessionId", 1, []),
                    t = new i.ClientResult;
                return f(this, e, t), t
            }, t.prototype.getDeferredFlights = function() {
                var e = s(this.context, this, "GetDeferredFlights", 1, []),
                    t = new i.ClientResult;
                return f(this, e, t), t
            }, t.prototype.getFeature = function(e, t, n, r) {
                return new m(this.context, o(this.context, this, "GetFeature", 1, [e, t, n, r], !1, !1, null))
            }, t.prototype.getFeatureGate = function(e, t) {
                return new m(this.context, o(this.context, this, "GetFeatureGate", 1, [e, t], !1, !1, null))
            }, t.prototype.resetOverride = function(e) {
                s(this.context, this, "ResetOverride", 0, [e])
            }, t.prototype.setOverride = function(e, t, n) {
                s(this.context, this, "SetOverride", 0, [e, t, n])
            }, t.prototype._handleResult = function(t) {
                e.prototype._handleResult.call(this, t), u(t) || p(this, t)
            }, t.newObject = function(e) {
                return new t(e, a(e, "Microsoft.Experiment.FlightingService", !1))
            }, t.prototype.toJSON = function() {
                return {}
            }, t
        }(i.ClientObject));
    t.FlightingService = h;
    var m = function(e) {
        function t() {
            e.apply(this, arguments)
        }
        return r(t, e), Object.defineProperty(t.prototype, "_className", {
            get: function() {
                return "ABType"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "value", {
            get: function() {
                return l("value", this.m_value, "ABType", this._isNull), this.m_value
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype._handleResult = function(t) {
            if (e.prototype._handleResult.call(this, t), !u(t)) {
                var n = t;
                p(this, n), c(n.Value) || (this.m_value = n.Value)
            }
        }, t.prototype.load = function(e) {
            return d(this, e), this
        }, t.prototype.toJSON = function() {
            return {
                value: this.m_value
            }
        }, t
    }(i.ClientObject);
    t.ABType = m,
        function(e) {
            e.boolean = "Boolean", e.integer = "Integer", e.string = "String"
        }(t.FeatureType || (t.FeatureType = {})),
        function(e) {
            e.generalException = "GeneralException"
        }(t.ExperimentErrorCodes || (t.ExperimentErrorCodes = {}));
    var g = function(e) {
        function t(t) {
            e.call(this, t)
        }
        return r(t, e), Object.defineProperty(t.prototype, "flighting", {
            get: function() {
                return this.flightingService
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "telemetry", {
            get: function() {
                return this.m_telemetry || (this.m_telemetry = y.newObject(this)), this.m_telemetry
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "flightingService", {
            get: function() {
                return this.m_flightingService || (this.m_flightingService = h.newObject(this)), this.m_flightingService
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(i.ClientRequestContext);
    t.RequestContext = g, i.ObjectPathFactory.createPropertyObjectPath, o = i.ObjectPathFactory.createMethodObjectPath, i.ObjectPathFactory.createIndexerObjectPath, a = i.ObjectPathFactory.createNewObjectObjectPath, i.ObjectPathFactory.createChildItemObjectPathUsingIndexer, i.ObjectPathFactory.createChildItemObjectPathUsingGetItemAt, i.ObjectPathFactory.createChildItemObjectPathUsingIndexerOrGetItemAt, s = i.ActionFactory.createMethodAction, i.ActionFactory.createSetPropertyAction, u = i.Utility.isNullOrUndefined, c = i.Utility.isUndefined, l = i.Utility.throwIfNotLoaded, i.Utility.throwIfApiNotSupported, d = i.Utility.load, p = i.Utility.fixObjectPathIfNecessary, f = i.Utility._addActionResultHandler, i.Utility._handleNavigationPropertyResults, i.Utility.adjustToDateTime;
    var y = function(e) {
        function t() {
            e.apply(this, arguments)
        }
        return r(t, e), Object.defineProperty(t.prototype, "_className", {
            get: function() {
                return "TelemetryService"
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.sendTelemetryEvent = function(e, t, n, r, i) {
            s(this.context, this, "SendTelemetryEvent", 0, [e, t, n, r, i], !1)
        }, t.prototype._handleResult = function(t) {
            e.prototype._handleResult.call(this, t), u(t) || p(this, t)
        }, t.newObject = function(e) {
            return new t(e, a(e, "Microsoft.Telemetry.TelemetryService", !1, !1))
        }, t.prototype.toJSON = function() {
            return {}
        }, t
    }(i.ClientObject);
    t.TelemetryService = y,
        function(e) {
            e.generalException = "GeneralException"
        }(t.ErrorCodes || (t.ErrorCodes = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = function() {
            function e(e) {
                this._activityScope = e
            }
            return e.prototype.setSuccess = function(e) {
                this._activityScope.setSuccess(e)
            }, e.prototype.setResult = function(e, t, n) {
                this._activityScope.setResult(e, t, n)
            }, Object.defineProperty(e.prototype, "startTime", {
                get: function() {
                    return this._activityScope.startTime
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.addDataField = function(e, t, n) {
                var r = n;
                this._activityScope.addDataField(e, t, r)
            }, e.prototype.endNow = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return [2, this._activityScope.endNow().then((function(e) {
                            return {
                                eventAccepted: e.eventAccepted,
                                message: e.message
                            }
                        }))]
                    }))
                }))
            }, e
        }();
    t.OTelActivity = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(38),
        s = n(44),
        u = n(139),
        c = n(8),
        l = n(14),
        d = n(9),
        p = function() {
            function e(e, t, n) {
                var i = this;
                this._extensionSettings = e, this._contentScriptEmitter = t, this._logger = n, this._remoteObjects = {}, this.onOtelClientIdRequest = function(e) {
                    return r.__awaiter(i, void 0, Promise, (function() {
                        var t, n = this;
                        return r.__generator(this, (function(i) {
                            return (t = function() {
                                return r.__awaiter(n, void 0, void 0, (function() {
                                    var n;
                                    return r.__generator(this, (function(r) {
                                        return (n = localStorage.getItem("OTelJS.ClientId")) ? this._contentScriptEmitter.emit("otelClientIdResponse", {
                                            address: e.address,
                                            message: n
                                        }) : setTimeout(t, 5e3), [2]
                                    }))
                                }))
                            })(), [2]
                        }))
                    }))
                }, this.onTelemetryEvent = function(e) {
                    return r.__awaiter(i, void 0, Promise, (function() {
                        var t;
                        return r.__generator(this, (function(n) {
                            try {
                                e && e.message && (t = e.message).tagID && t.level && t.message && this._logger.logEvent(t.tagID, t.eventName, t.level, t.message, t.sampling, t.data, t.experimentation)
                            } catch (e) {
                                this._logger.logEvent(595736529, l.ErrorEventName.AriaError, c.LoggingLevel.Error, "The call to Aria failed", c.SamplingPolicy.CriticalBusinessImpact)
                            }
                            return [2, !1]
                        }))
                    }))
                }, this.onNewActivityTelemetryEvent = function(e) {
                    return r.__awaiter(i, void 0, Promise, (function() {
                        var t;
                        return r.__generator(this, (function(n) {
                            try {
                                e && e.address && e.message && (t = e.message, this._remoteObjects[e.address] = this._logger.getNewActivity(t.eventName, t.sampling, t.experimentation))
                            } catch (e) {
                                this._logger.logEvent(595736530, l.ErrorEventName.GetNewActivityError, c.LoggingLevel.Error, "The call to getNewActivity failed", c.SamplingPolicy.CriticalBusinessImpact)
                            }
                            return [2, !1]
                        }))
                    }))
                }, this.onAddDataFieldTelemetryEvent = function(e) {
                    return r.__awaiter(i, void 0, Promise, (function() {
                        return r.__generator(this, (function(t) {
                            return [2, this.processEnvelope(e, (function(e, t) {
                                e.addDataField(t.name, t.value, t.classification)
                            }))]
                        }))
                    }))
                }, this.onSetResultTelemetryEvent = function(e) {
                    return r.__awaiter(i, void 0, Promise, (function() {
                        return r.__generator(this, (function(t) {
                            return [2, this.processEnvelope(e, (function(e, t) {
                                e.setResult(t.resultCode, t.resultType, t.resultTag)
                            }))]
                        }))
                    }))
                }, this.onSetSuccessTelemetryEvent = function(e) {
                    return r.__awaiter(i, void 0, Promise, (function() {
                        return r.__generator(this, (function(t) {
                            return [2, this.processEnvelope(e, (function(e, t) {
                                e.setSuccess(t)
                            }))]
                        }))
                    }))
                }, this.onEndNowTelemetryEvent = function(e) {
                    return r.__awaiter(i, void 0, Promise, (function() {
                        var t = this;
                        return r.__generator(this, (function(n) {
                            return [2, this.processEnvelope(e, (function(n, r) {
                                n.endNow().then((function() {
                                    delete t._remoteObjects[e.address]
                                })).catch((function() {
                                    delete t._remoteObjects[e.address]
                                }))
                            }))]
                        }))
                    }))
                }, this.processEnvelope = function(e, t) {
                    return r.__awaiter(i, void 0, Promise, (function() {
                        var n, i;
                        return r.__generator(this, (function(r) {
                            try {
                                e && e.address && (n = e.message, (i = this._remoteObjects[e.address]) && t(i, n))
                            } catch (e) {
                                this._logger.logEvent(595736531, l.ErrorEventName.EnvelopeFormatError, c.LoggingLevel.Error, "The call to processEnvelope failed", c.SamplingPolicy.CriticalBusinessImpact)
                            }
                            return [2, !1]
                        }))
                    }))
                }, setInterval((function() {
                    i.cleanupActivities()
                }), this._extensionSettings.intervalForActivityCleanup)
            }
            var t, n, p;
            return e.prototype.initialize = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return this._contentScriptEmitter.on("telemetryEvent", this.onTelemetryEvent), this._contentScriptEmitter.on("newActivityTelemetryEvent", this.onNewActivityTelemetryEvent), this._contentScriptEmitter.on("activityAddDataFieldTelemetryEvent", this.onAddDataFieldTelemetryEvent), this._contentScriptEmitter.on("activitySetResultTelemetryEvent", this.onSetResultTelemetryEvent), this._contentScriptEmitter.on("activitySetSuccessTelemetryEvent", this.onSetSuccessTelemetryEvent), this._contentScriptEmitter.on("activityEndNowTelemetryEvent", this.onEndNowTelemetryEvent), this._contentScriptEmitter.on("otelClientIdRequest", this.onOtelClientIdRequest), [2]
                    }))
                }))
            }, e.prototype.shutDown = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return this._contentScriptEmitter.off("telemetryEvent"), this._contentScriptEmitter.off("newActivityTelemetryEvent"), this._contentScriptEmitter.off("activityAddDataFieldTelemetryEvent"), this._contentScriptEmitter.off("activitySetResultTelemetryEvent"), this._contentScriptEmitter.off("activitySetSuccessTelemetryEvent"), this._contentScriptEmitter.off("activityEndNowTelemetryEvent"), this._contentScriptEmitter.off("otelClientIdRequest"), [2]
                    }))
                }))
            }, e.prototype.cleanupActivities = function() {
                var e = this;
                Object.keys(this._remoteObjects).forEach((function(t) {
                    var n = e._remoteObjects[t];
                    n && u.DateTime.getCurrentMicroseconds() - n.startTime > e._extensionSettings.maxAllowedTimeForActivities && delete e._remoteObjects[t]
                }))
            }, r.__decorate([i.injectable(), r.__param(0, i.inject(o.SharedInjectionTypes.IExtensionSettings)), r.__param(1, i.inject(o.SharedInjectionTypes.IContentScriptEmitter)), r.__param(2, i.inject(o.SharedInjectionTypes.ILogger)), r.__metadata("design:paramtypes", ["function" == typeof(t = void 0 !== s.IExtensionSettings && s.IExtensionSettings) ? t : Object, "function" == typeof(n = void 0 !== a.IContentScriptEmitter && a.IContentScriptEmitter) ? n : Object, "function" == typeof(p = void 0 !== d.ILogger && d.ILogger) ? p : Object])], e)
        }();
    t.TelemetryBackgroundRegistrar = p
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(60),
        o = n(3),
        a = n(69),
        s = n(75),
        u = n(5),
        c = n(8),
        l = n(14),
        d = n(9),
        p = n(63),
        f = n(70);

    function h(e) {
        var t = {
            value: JSON.stringify(e),
            lastUpdated: Date.now(),
            manualOverride: !1
        };
        return JSON.stringify(t)
    }
    var m = function(e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t) || this;
            return a._editorService = n, a._settings = r, a._logger = i, a._userInfoStrategy = o, a
        }
        var n, m, g, y, v;
        return r.__extends(t, e), t.prototype.schedule = function(e, t) {
            var n = this;
            this._timer && clearTimeout(this._timer), this._timer = setTimeout((function() {
                return r.__awaiter(n, void 0, void 0, (function() {
                    return r.__generator(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.sync()];
                            case 1:
                                return e.sent(), this.schedule(t, t), [2]
                        }
                    }))
                }))
            }), e)
        }, t.prototype.sync = function() {
            return r.__awaiter(this, void 0, Promise, (function() {
                var e, t, n;
                return r.__generator(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return this._logger.debug(595686434, "Starting remote settings sync"), [4, this.fetchRemoteSettings()];
                        case 1:
                            return (e = r.sent()) && e.responseStatus === i.EditorServiceModels.ResponseStatus.Success ? (t = function(e) {
                                return {
                                    descriptors: h(e.descriptors),
                                    disabledWebSites: h(e.disabledWebSites),
                                    allowedUrls: h(e.allowedUrls),
                                    disabledGrammars: h(e.disabledGrammars),
                                    enableTileNodeAutoReconciliation: h(e.enableDirtyRangeAutoRehydration),
                                    featureFlags: h(e.featureFlags),
                                    intervalForActivityCleanup: h(e.intervalForActivityCleanup),
                                    logGroupName: h(e.logGroupName),
                                    maxAllowedTimeForActivities: h(e.maxAllowedTimeForActivities),
                                    maxSuggestionItemsDisplayNumber: h(e.maxSuggestionItemsDisplayNumber),
                                    refreshCritiqueWaitingTime: h(e.refreshCritiqueWaitingTime),
                                    requestCritiqueDelay: h(e.requestCritiqueDelay),
                                    schedulerDefaultMaxTime: h(e.schedulerDefaultMaxTime),
                                    schedulerDefaultWaitingTime: h(e.schedulerDefaultWaitingTime),
                                    schedulerDefaultWaitingTimeIncrement: h(e.schedulerDefaultWaitingTimeIncrement),
                                    sendToAria: h(e.sendToAria),
                                    spellCheckAttributes: h(e.spellCheckAttributes),
                                    styleObserverIntervalTime: h(e.styleObserverIntervalTime),
                                    styleSampleTime: h(e.styleSampleTime),
                                    telemetryTenant: h(e.telemetryTenant),
                                    useTileCheck: h(e.useTileCheck),
                                    versionEmergencyOverrides: h(e.versionEmergencyOverrides)
                                }
                            }(e), [4, this.removeManualOverrides(t)]) : [3, 3];
                        case 2:
                            if (n = r.sent()) return this._logger.debug(595686435, "Writing remote settings to local storage"), [2, this.writeSettings(n)];
                            r.label = 3;
                        case 3:
                            return this._logger.debug(595686464, "No remote settings were synced"), [2, !1]
                    }
                }))
            }))
        }, t.prototype.writeSettings = function(e) {
            return r.__awaiter(this, void 0, Promise, (function() {
                var t;
                return r.__generator(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return n.trys.push([0, 2, , 3]), [4, this._localStorage.setItems(e)];
                        case 1:
                            return n.sent(), [2, !0];
                        case 2:
                            return t = n.sent(), this._logger.logEvent(595686465, l.ErrorEventName.SettingsSyncWriteError, c.LoggingLevel.Error, void 0, c.SamplingPolicy.CriticalBusinessImpact), this.setLastError(t), [3, 3];
                        case 3:
                            return [2, !1]
                    }
                }))
            }))
        }, t.prototype.fetchRemoteSettings = function() {
            return r.__awaiter(this, void 0, Promise, (function() {
                var e, t, n, i, o = this;
                return r.__generator(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return r.trys.push([0, 3, , 4]), this._userInfoStrategy.execute(!1, (function(t) {
                                return t && t.userId && (o._editorService.xUserId = t.userId, e = t.tenantId), t
                            })), n = {}, [4, this._settings.appId()];
                        case 1:
                            return n.appId = r.sent(), n.tenantId = e, t = n, [4, this._editorService.browserextension(t)];
                        case 2:
                            return [2, r.sent()];
                        case 3:
                            return i = r.sent(), this._logger.logEvent(595686466, l.ErrorEventName.SettingsSyncEditorServiceError, c.LoggingLevel.Error, void 0, c.SamplingPolicy.CriticalBusinessImpact), this.setLastError(i), [3, 4];
                        case 4:
                            return [2, void 0]
                    }
                }))
            }))
        }, t.prototype.removeManualOverrides = function(e) {
            return r.__awaiter(this, void 0, Promise, (function() {
                var t, n, i, o, a, s, u;
                return r.__generator(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            t = {}, r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, this._localStorage.getItems(e)];
                        case 2:
                            for (n = r.sent(), i = 0, o = Object.keys(n); i < o.length; i++) a = o[i], (s = JSON.parse(n[a])) && s.manualOverride ? this._logger.debug(595686467, "Manual override for remote setting", a) : t[a] = e[a];
                            return [3, 4];
                        case 3:
                            return u = r.sent(), this._logger.logEvent(595686468, l.ErrorEventName.SettingsSyncReadOverrideError, c.LoggingLevel.Error, void 0, c.SamplingPolicy.CriticalBusinessImpact), this.setLastError(u), [2, void 0];
                        case 4:
                            return [2, t]
                    }
                }))
            }))
        }, r.__decorate([o.injectable(), r.__param(0, o.inject(u.SharedInjectionTypes.IExtensionStorage)), r.__param(1, o.inject(a.InjectionTypes.EditorService)), r.__param(2, o.inject(u.SharedInjectionTypes.IProofingSettings)), r.__param(3, o.inject(u.SharedInjectionTypes.ILogger)), r.__param(4, o.inject(u.SharedInjectionTypes.IUserInfoStrategy)), r.__metadata("design:paramtypes", ["function" == typeof(n = void 0 !== p.IExtensionStorage && p.IExtensionStorage) ? n : Object, "function" == typeof(m = void 0 !== i.EditorService && i.EditorService) ? m : Object, "function" == typeof(g = void 0 !== f.IProofingSettings && f.IProofingSettings) ? g : Object, "function" == typeof(y = void 0 !== d.ILogger && d.ILogger) ? y : Object, "function" == typeof(v = void 0 !== s.IUserInfoStrategy && s.IUserInfoStrategy) ? v : Object])], t)
    }(n(87).SettingsStorageBase);
    t.RemoteSettingsSyncer = m
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(209),
        a = n(210),
        s = function() {
            function e() {
                this.supportsBrowserWordBreaking = !1
            }
            var t;
            return t = e, e.prototype.getForwardBreakByWord = function(e, t) {
                var n = this.getForwardBreak(e, t);
                return n && (n.wordBreakType !== o.WordBreakType.WhiteSpace || (n = this.getForwardBreak(e, n.cp))) ? n.cp : e.length
            }, e.prototype.getBackwardBreakByWord = function(e, t) {
                var n = this.getBackwardBreak(e, t);
                return n && (n.wordBreakType !== o.WordBreakType.WhiteSpace || (n = this.getBackwardBreak(e, n.cp))) ? n.cp : 0
            }, e.prototype.getForwardBreak = function(e, t) {
                return this.getForwardBreakInternal(e, t, e.length)
            }, e.prototype.getBackwardBreak = function(e, t) {
                return this.getBackwardBreakInternal(e, t)
            }, e.prototype.getTextStartWordBreak = function(e) {
                return this.getTextWordBreak(e, 0)
            }, e.prototype.getTextWordBreak = function(e, n) {
                return {
                    cp: n,
                    wordBreakType: t.getWordBreakType(e, n)
                }
            }, e.prototype.getBreaks = function(e) {
                var t = this.getBreaksForRange(e, 0, e.length);
                return e.length && t.splice(0, 0, this.getTextStartWordBreak(e)), t
            }, e.prototype.getBreaksForRange = function(e, n, r) {
                var i = [];
                if (!e) return i;
                for (var a = n, s = !1; !s;) {
                    var u = this.getForwardBreakInternal(e, a, r);
                    if (u)
                        if (u.wordBreakType === o.WordBreakType.Invalid)
                            if ((a = u.cp + 1) >= r) s = !0;
                            else {
                                var c = t.getWordBreakType(e, u.cp),
                                    l = t.getWordBreakType(e, a);
                                c !== l && i.push({
                                    cp: a,
                                    wordBreakType: l
                                })
                            }
                    else i.push(u), a = u.cp;
                    else s = !0
                }
                return i
            }, e.prototype.getWordCount = function(e, t) {
                return this.getWordCountFromWordBreaks(e, t).wordCount
            }, e.prototype.getWordCountInRange = function(e, t, n) {
                var r = this.getBreaksForRange(e, t, n);
                return r.splice(0, 0, this.getTextWordBreak(e, t)), this.getWordCount(r, e)
            }, e.prototype.getWordCountFromWordBreaks = function(e, n) {
                for (var r = {
                        browserWordBreakCount: 0,
                        wordCount: 0
                    }, i = 0; i < e.length; i += 1) {
                    var a = e[i];
                    a.wordBreakType === o.WordBreakType.AlphaNumeric || a.wordBreakType === o.WordBreakType.Undetermined ? (a.wordBreakType === o.WordBreakType.Undetermined && (r.browserWordBreakCount += 1), t.shouldCountAlphaBreak(i, e, n) && (r.wordCount += 1)) : a.wordBreakType !== o.WordBreakType.Punctuation && a.wordBreakType !== o.WordBreakType.PuncuationWithoutBreak || t.shouldCountPuncuationBreak(i, e, n) && (r.wordCount += 1)
                }
                return r
            }, e.shouldCountAlphaBreak = function(e, n, r) {
                if (!e) return !0;
                var i = n[e];
                if (!i.cp) return !0;
                var a = n[e - 1],
                    s = !0;
                if (a.wordBreakType === o.WordBreakType.Punctuation)
                    for (var u = !1, c = a.cp; c < i.cp; c += 1) {
                        var l = r.charAt(c);
                        if ("-" === l) {
                            if (u) return !0;
                            u = !0
                        } else u = !1;
                        if (s = t.doesPunctuationIndiciateNewWord(l)) return !0
                    } else if (a.wordBreakType === o.WordBreakType.Undetermined) return !1;
                return (i.wordBreakType !== o.WordBreakType.Undetermined || a.wordBreakType === o.WordBreakType.WhiteSpace) && s
            }, e.shouldCountPuncuationBreak = function(e, n, r) {
                var i = n[e];
                if (t.doesPunctuationIndiciateNewWord(r.charAt(i.cp))) return !1;
                if (!e) return !0;
                if (!i.cp) return !1;
                var a = n[e - 1];
                return a.wordBreakType === o.WordBreakType.WhiteSpace || a.wordBreakType === o.WordBreakType.FootnoteEndnotePunctuation
            }, e.doesPunctuationIndiciateNewWord = function(e) {
                return "\u2013" === e || "\u2014" === e
            }, e.prototype.getBackwardBreakInternal = function(e, n) {
                if (!(n <= 1))
                    for (var r = n; r > 0;) {
                        var i = t.getWordBreakType(e, r - 1);
                        switch (i) {
                            case o.WordBreakType.Undetermined:
                                break;
                            case o.WordBreakType.AlphaNumeric:
                            case o.WordBreakType.Punctuation:
                            case o.WordBreakType.WhiteSpace:
                            case o.WordBreakType.PuncuationWithoutBreak:
                            case o.WordBreakType.FootnoteEndnotePunctuation:
                                if (r <= 1) return;
                                var a = r - 1,
                                    s = t.getWordBreakType(e, a - 1);
                                if (i !== s && t.shouldCreateBreakOnNextWordBreak(i, s) && (s !== o.WordBreakType.Undetermined || !this.supportsBrowserWordBreaking)) return {
                                    cp: a,
                                    wordBreakType: i
                                }
                        }
                        r -= 1
                    }
            }, e.prototype.getForwardBreakInternal = function(e, n, r) {
                if (!(n >= r - 1))
                    for (var i = n; i < r;) {
                        var a = t.getWordBreakType(e, i);
                        switch (a) {
                            case o.WordBreakType.Undetermined:
                                break;
                            case o.WordBreakType.AlphaNumeric:
                            case o.WordBreakType.Punctuation:
                            case o.WordBreakType.WhiteSpace:
                            case o.WordBreakType.PuncuationWithoutBreak:
                            case o.WordBreakType.FootnoteEndnotePunctuation:
                                if (i >= r - 1) return;
                                var s = i + 1,
                                    u = t.getWordBreakType(e, s);
                                if (a !== u && t.shouldCreateBreakOnNextWordBreak(a, u) && (u !== o.WordBreakType.Undetermined || !this.supportsBrowserWordBreaking)) return {
                                    cp: s,
                                    wordBreakType: u
                                }
                        }
                        i += 1
                    }
            }, e.shouldCreateBreakOnNextWordBreak = function(e, t) {
                var n = e === o.WordBreakType.AlphaNumeric && t !== o.WordBreakType.PuncuationWithoutBreak,
                    r = e === o.WordBreakType.PuncuationWithoutBreak && t !== o.WordBreakType.AlphaNumeric,
                    i = e === o.WordBreakType.Punctuation || e === o.WordBreakType.FootnoteEndnotePunctuation,
                    a = e === o.WordBreakType.WhiteSpace;
                return r || n || i || a
            }, e.getWordBreakType = function(e, n) {
                var r = e.charAt(n).toString();
                return a.StringUtils.isAlphaNum(r) ? o.WordBreakType.AlphaNumeric : t.isWhiteSpace(r) ? o.WordBreakType.WhiteSpace : t.isPunctuation(r) ? o.WordBreakType.Punctuation : t.isPunctuationWithoutBreak(r) ? o.WordBreakType.PuncuationWithoutBreak : t.isFootnoteEndnotePunctuation(r) ? o.WordBreakType.FootnoteEndnotePunctuation : o.WordBreakType.Undetermined
            }, e.isWhiteSpace = function(e) {
                return new RegExp("[\\u0000-\\u001F]|\\u0020|[\\u007F-\\u009F]|\\u00A0|[\\u2000-\\u200C]|\\u202F|\\u205F|\\u2420|[\\u2422-\\u2424]|\\u3000|\\uFF02").test(e)
            }, e.isPunctuation = function(e) {
                return new RegExp("[!-&]|[\\(-\\.]|/|[:-@]|[\\[-`]|[{-~]|\xa1|\xa6|\xa7|\xa9|\xab|\xac|\xae|\xb0|\xb1|[\xb4-\xb7]|\xbb|\xbf|\xd7|\xf7|\u01c3|\u037e|[\u2012-\u2015]|[\u201a-\u2022]|[\u2024-\u2026]|\\u202F|\u2030|\u2039|\u203a|\u203c|\u203d|\u2048|\u2049|\\u2060|\u2103|\u2105|\u2106|\u2109|\u2116|\u2122|\u2211|\u2212|\u221a|\u221e|\u222b|\u2248|\u2260|\u2264|\u2265|\\u25A1|\\u25AA|\\u25AB|\u25ca|\u25cf|\u25e6|[\u2639-\u263b]|\u2762|\u3002|[\u301d-\u301f]|\\uFEFF|\uff01|\uff0e|\uff1b|\uff1f|\uff61").test(e)
            }, e.isPunctuationWithoutBreak = function(e) {
                return "'" === e || "\u2018" === e || "\u2019" === e
            }, e.isFootnoteEndnotePunctuation = function(e) {
                return "\ue000" === e
            }, t = r.__decorate([i.injectable()], e)
        }();
    t.WordCount = s
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = n(343)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i, o = n(0),
        a = n(18),
        s = n(5),
        u = n(8),
        c = n(14),
        l = n(344);

    function d(e, t) {
        var n = e.getNewActivity(c.EventCategoryName.ExtensionInstalled, u.SamplingPolicy.CriticalExperimentation);
        n && (n.addDataField("Reason", t.reason, u.ActivityDataClassification.SystemMetadata), n.addDataField("Previous_Version", t.previousVersion ? t.previousVersion : "none", u.ActivityDataClassification.SystemMetadata), n.setSuccess(!0), n.endNow())
    }! function(e) {
        e.Install = "Install", e.Update = "Update"
    }(t.InstallReason || (t.InstallReason = {})), browser.runtime.onInstalled.addListener((function(e) {
        i ? d(i, e) : r = e
    })), i || function() {
        return o.__awaiter(this, void 0, Promise, (function() {
            var e, t, n;
            return o.__generator(this, (function(r) {
                switch (r.label) {
                    case 0:
                        a.configure({
                            enforceActions: "observed"
                        }), e = l.createDIContainer(), t = e.get(s.SharedInjectionTypes.ILogger), n = e.get(s.SharedInjectionTypes.IComponentInitializer), r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), [4, n.initializeComponent()];
                    case 2:
                        return r.sent(), [3, 4];
                    case 3:
                        return r.sent(), t.logEvent(595686477, c.ErrorEventName.BackgroundScriptInitializationError, u.LoggingLevel.Error, "Background script initialization failed.", u.SamplingPolicy.CriticalBusinessImpact), [3, 4];
                    case 4:
                        return [2, t]
                }
            }))
        }))
    }().then((function(e) {
        i = e, r && d(i, r)
    }))
}, function(e, t, n) {
    "use strict";
    var r = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        o = n(60),
        a = n(3);
    n(119);
    var s = n(226),
        u = n(227),
        c = n(345),
        l = n(347),
        d = n(170),
        p = n(5),
        f = n(348),
        h = n(14),
        m = n(171),
        g = n(228),
        y = n(232),
        v = n(349),
        _ = n(175),
        b = n(177),
        S = n(178),
        I = n(179),
        T = n(181),
        w = n(184),
        C = n(233),
        E = n(185),
        N = n(186),
        O = n(187),
        P = n(188),
        A = n(189),
        R = n(351),
        x = n(352),
        D = n(234),
        j = n(353),
        M = n(358),
        B = n(359),
        L = n(361),
        k = n(362),
        z = n(364),
        q = n(365),
        U = n(69);
    a.decorate(a.injectable(), o.EditorService), t.createDIContainer = function() {
        var e = new a.Container({
            defaultScope: "Singleton"
        });
        return e.bind(p.SharedInjectionTypes.IComponentInitializer).to(j.BackgroundScriptInitializer), e.bind(U.InjectionTypes.IContentScriptInjector).to(M.ContentScriptInjector), e.bind(p.SharedInjectionTypes.IRegistrar).to(d.Registrar), e.bind(p.SharedInjectionTypes.RegistrarEventName).toConstantValue(h.EventCategoryName.BackgroundScriptRegistrar), e.bind(U.InjectionTypes.ITabsSelector).to(z.TabsSelector), e.bind(p.SharedInjectionTypes.IExtensionSettings).to(S.ExtensionSettings), e.bind(p.SharedInjectionTypes.IHostSettings).to(I.HostSettings), e.bind(p.SharedInjectionTypes.IStorage).to(R.Storage), e.bind(p.SharedInjectionTypes.IContentScriptEmitter).to(_.ContentScriptEmitter), e.bind(p.SharedInjectionTypes.ISendMessageStrategy).to(v.BackgroundScriptSendMessageStrategy), e.bind(p.SharedInjectionTypes.ISettingsEmitter).to(b.SettingsEmitter), e.bind(U.InjectionTypes.IContextMenuEventListener).to(L.ContextMenuEventListener), e.bind(U.InjectionTypes.INativeContextMenu).to(k.NativeContextMenu), e.bind(U.InjectionTypes.ILanguageInfoLoader).to(B.LanguageInfoLoader), e.bind(p.SharedInjectionTypes.ILanguageMapper).to(f.LanguageMapper), e.bind(U.InjectionTypes.EditorService).toDynamicValue((function(e) {
            return new o.EditorService({
                baseUri: e.container.get(p.SharedInjectionTypes.IProofingSettings).baseUri
            })
        })), e.bind(p.SharedInjectionTypes.IWordCount).to(D.WordCount), e.bind(p.SharedInjectionTypes.ITransportLogger).to(g.OTelLogger), e.bind(p.SharedInjectionTypes.ITransportActivity).to(g.OTelLogger), e.bind(p.SharedInjectionTypes.ILogger).to(m.Logger), e.bind(U.InjectionTypes.ISessionContextProvider).toProvider((function(e) {
            return function() {
                return i.__awaiter(r, void 0, void 0, (function() {
                    return i.__generator(this, (function(e) {
                        return [2, new Promise((function(e, t) {
                            browser.runtime.getPlatformInfo().then((function(t) {
                                var n = t,
                                    r = x.BrowserUtils.detectBrowser();
                                e({
                                    os: n.os,
                                    arch: n.arch,
                                    browserType: r ? r.name : "",
                                    browserVersion: r ? r.version : null,
                                    extensionStoreId: browser.runtime.id
                                })
                            })).catch((function(e) {
                                t(e)
                            }))
                        }))]
                    }))
                }))
            }
        })), e.bind(p.SharedInjectionTypes.IBrowserStorageApi).to(P.ChromeBrowserStorageApi), e.bind(p.SharedInjectionTypes.IExtensionStorage).to(A.ExtensionStorage), e.bind(p.SharedInjectionTypes.ISettingsDefinitions).to(T.SettingsDefinitions), e.bind(p.SharedInjectionTypes.ISettingReader).to(E.SettingReader), e.bind(p.SharedInjectionTypes.ISettingWriter).to(N.SettingWriter), e.bind(U.InjectionTypes.IRemoteSettingsSyncer).to(C.RemoteSettingsSyncer), e.bind(p.SharedInjectionTypes.IProofingSettings).to(O.ProofingSettings), e.bind(p.SharedInjectionTypes.ILoggerSettings).to(w.SettingsImplementation), a.multiBindToService(e)(p.SharedInjectionTypes.ILoggerSettings)(p.SharedInjectionTypes.ISystemSettings), e.bind(p.SharedInjectionTypes.IUserInfoListener).to(l.UserInfoListener), e.bind(p.SharedInjectionTypes.IUserInfoStrategy).to(c.StorageUserInfoStrategy), e.bind(p.SharedMultiInjectionTypes.IRegistrable).to(q.KixTrafficInspector), e.bind(p.SharedMultiInjectionTypes.IRegistrable).to(y.TelemetryBackgroundRegistrar), e.bind(p.SharedMultiInjectionTypes.IRegistrable).to(u.TileCheckRequestProcessor), e.bind(p.SharedMultiInjectionTypes.IRegistrable).to(s.InstrumentationRequestProcessor), e.bind(p.SharedMultiInjectionTypes.IRegistrable).toService(U.InjectionTypes.ILanguageInfoLoader), e.bind(p.SharedMultiInjectionTypes.IRegistrable).toService(p.SharedInjectionTypes.IUserInfoListener), e.bind(p.SharedMultiInjectionTypes.IRegistrable).toService(p.SharedInjectionTypes.ISettingsEmitter), e
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(86),
        s = n(346),
        u = function() {
            function e(e) {
                this._browserStorage = e
            }
            var t, n;
            return t = e, Object.defineProperty(e.prototype, "lastError", {
                get: function() {
                    return this._lastError
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.execute = function(e, n) {
                var r = this;
                void 0 === e && (e = !0), e ? this._browserStorage.get("userType", (function(e) {
                    var i = e.userType;
                    i ? r._browserStorage.get("userInfo", (function(e) {
                        var o, a = e.userInfo;
                        if (a) {
                            switch (i) {
                                case s.UserType.MSA:
                                    o = a[s.UserType.MSA], r._userInfo = {
                                        userId: o.cid,
                                        tenantId: void 0
                                    };
                                    break;
                                case s.UserType.O365:
                                    o = a[s.UserType.O365], r._userInfo = {
                                        userId: o.puid,
                                        tenantId: o.tid
                                    }
                            }
                            if (o && r._userInfo) {
                                var u = o.email;
                                u && u.match("" + t.Host + t.Domain) ? r.triggerCallback(n) : r.triggerCallback(n, "Account not authorized.")
                            } else r.triggerCallback(n, "Not a valid account detected.")
                        } else r.triggerCallback(n, "No userInfo field found.")
                    })) : r.triggerCallback(n, "No userType field found.")
                })) : n(this._userInfo)
            }, e.prototype.triggerCallback = function(e, t) {
                t && (this._userInfo = void 0, this._lastError = t), this._userInfo = e(this._userInfo)
            }, e.prototype.executeAsync = function(e) {
                return void 0 === e && (e = !0), r.__awaiter(this, void 0, Promise, (function() {
                    var t = this;
                    return r.__generator(this, (function(n) {
                        return [2, new Promise((function(n, r) {
                            t.execute(e, (function(e) {
                                return e ? n(e) : r(t.lastError), e
                            }))
                        }))]
                    }))
                }))
            }, e.Host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+\\.)*", e.Domain = "(?:(?:microsoft|lionbridge).com)", t = r.__decorate([i.injectable(), r.__param(0, i.inject(o.SharedInjectionTypes.IBrowserStorageApi)), r.__metadata("design:paramtypes", ["function" == typeof(n = void 0 !== a.IBrowserStorageApi && a.IBrowserStorageApi) ? n : Object])], e)
        }();
    t.StorageUserInfoStrategy = u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            e.O365 = "o365UserService", e.MSA = "msaUserService", e.NONE = "noneUserService"
        }(t.UserType || (t.UserType = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(9),
        s = n(38),
        u = n(86),
        c = n(75),
        l = function() {
            function e(e, t, n, i) {
                var o = this;
                this._userInfoStrategy = e, this._contentScriptEmitter = t, this._browserStorage = n, this._logger = i, this._onUserInfoChangedCallback = function(e, t) {
                    return r.__awaiter(o, void 0, void 0, (function() {
                        return r.__generator(this, (function(n) {
                            return [2, this._onUserInfoChanged(e, t)]
                        }))
                    }))
                }
            }
            var t, n, l, d;
            return e.prototype.emitUserInfo = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var t, n;
                    return r.__generator(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, this._userInfoStrategy.executeAsync(!0)];
                            case 1:
                                return t = r.sent(), [3, 3];
                            case 2:
                                return n = r.sent(), this._logger.debug(595654409, "error while sending user email message: " + JSON.stringify(n)), [3, 3];
                            case 3:
                                return this._sendUserDataMessage(t, e), [2, t]
                        }
                    }))
                }))
            }, e.prototype.initialize = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var e = this;
                    return r.__generator(this, (function(t) {
                        return this._browserStorage.addChangeListener(this._onUserInfoChangedCallback), this._contentScriptEmitter.on("getUserInfo", (function(t) {
                            return r.__awaiter(e, void 0, void 0, (function() {
                                return r.__generator(this, (function(e) {
                                    return [2, this.emitUserInfo(t.address)]
                                }))
                            }))
                        })), [2]
                    }))
                }))
            }, e.prototype.shutDown = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return this._browserStorage.removeEventListener(this._onUserInfoChangedCallback), this._contentScriptEmitter.off("getUserInfo"), [2]
                    }))
                }))
            }, e.prototype._onUserInfoChanged = function(e, t) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var t = this;
                    return r.__generator(this, (function(n) {
                        return Object.keys(e).forEach((function(e) {
                            return r.__awaiter(t, void 0, void 0, (function() {
                                return r.__generator(this, (function(t) {
                                    return "userInfo" === e && this.emitUserInfo(), [2]
                                }))
                            }))
                        })), [2]
                    }))
                }))
            }, e.prototype._sendUserDataMessage = function(e, t) {
                this._contentScriptEmitter.emit("userInfo", {
                    address: t,
                    message: e
                })
            }, r.__decorate([i.injectable(), r.__param(0, i.inject(o.SharedInjectionTypes.IUserInfoStrategy)), r.__param(1, i.inject(o.SharedInjectionTypes.IContentScriptEmitter)), r.__param(2, i.inject(o.SharedInjectionTypes.IBrowserStorageApi)), r.__param(3, i.inject(o.SharedInjectionTypes.ILogger)), r.__metadata("design:paramtypes", ["function" == typeof(t = void 0 !== c.IUserInfoStrategy && c.IUserInfoStrategy) ? t : Object, "function" == typeof(n = void 0 !== s.IContentScriptEmitter && s.IContentScriptEmitter) ? n : Object, "function" == typeof(l = void 0 !== u.IBrowserStorageApi && u.IBrowserStorageApi) ? l : Object, "function" == typeof(d = void 0 !== a.ILogger && a.ILogger) ? d : Object])], e)
        }();
    t.UserInfoListener = l
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = function() {
            function e() {
                this.hardcodedLanguages = [{
                    languageId: "en-US",
                    languageName: "English (US)"
                }, {
                    languageId: "fr-FR",
                    languageName: "French (France)"
                }, {
                    languageId: "de-DE",
                    languageName: "German (Germany)"
                }, {
                    languageId: "it-IT",
                    languageName: "Italian (Italy)"
                }, {
                    languageId: "ru-RU",
                    languageName: "Russian"
                }, {
                    languageId: "es-ES",
                    languageName: "Spanish (Spain)"
                }]
            }
            return e.prototype.map = function(e) {
                return e.map((function(e) {
                    return {
                        languageId: e.languageId,
                        languageName: e.languageId
                    }
                }))
            }, r.__decorate([i.injectable()], e)
        }();
    t.LanguageMapper = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(69),
        a = n(350),
        s = n(5),
        u = n(9),
        c = function() {
            function e(e, t) {
                this._tabsSelector = e, this._logger = t, this.ports = {}
            }
            var t, n;
            return e.prototype.registerPort = function(e) {
                var t = this;
                if (e.sender && e.sender.tab && void 0 !== e.sender.tab.id) {
                    var n = e.sender.tab.id;
                    this.ports[n.toString()] = e, e.onDisconnect.addListener((function() {
                        return delete t.ports[n.toString()]
                    }))
                }
            }, e.prototype.sendMessage = function(e) {
                var t = this,
                    n = [];
                e.data.forEach((function(r) {
                    if (void 0 !== r.address && "number" == typeof r.address && -1 === n.indexOf(r.address)) {
                        n.push(r.address);
                        var i = t.ports[r.address.toString()];
                        i ? i.postMessage(e) : browser.tabs.sendMessage(r.address, e)
                    } else void 0 === r.address && t._tabsSelector.getSupportedTabs().then((function(n) {
                        n.forEach((function(n) {
                            browser.tabs.sendMessage(n, e).catch((function(e) {
                                var n = browser.runtime.lastError;
                                n && t._logger.debug(595654408, "Tab wasn't reachable: " + JSON.stringify(n))
                            }))
                        }))
                    }))
                }))
            }, r.__decorate([i.injectable(), r.__param(0, i.inject(o.InjectionTypes.ITabsSelector)), r.__param(1, i.inject(s.SharedInjectionTypes.ILogger)), r.__metadata("design:paramtypes", ["function" == typeof(t = void 0 !== a.ITabsSelector && a.ITabsSelector) ? t : Object, "function" == typeof(n = void 0 !== u.ILogger && u.ILogger) ? n : Object])], e)
        }();
    t.BackgroundScriptSendMessageStrategy = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = function() {
            function e() {}
            return e.prototype.getItem = function(e) {
                var t = localStorage.getItem(e);
                if (t) return t
            }, e.prototype.setItem = function(e, t) {
                localStorage.setItem(e, t)
            }, e.prototype.clearItem = function(e) {
                localStorage.removeItem(e)
            }, r.__decorate([i.injectable()], e)
        }();
    t.Storage = o
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(t) {
                var n = function(e, t) {
                    this.name = e, this.version = t
                };
                t.BrowserInfo = n;
                var r = function(e) {
                    this.version = e, this.name = "node"
                };
                t.NodeInfo = r;
                var i = function() {
                    this.bot = !0, this.name = "bot", this.version = null
                };
                t.BotInfo = i;
                var o = 3,
                    a = [
                        ["aol", /AOLShield\/([0-9\._]+)/],
                        ["edge", /Edge\/([0-9\._]+)/],
                        ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                        ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                        ["vivaldi", /Vivaldi\/([0-9\.]+)/],
                        ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                        ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                        ["silk", /\bSilk\/([0-9._-]+)\b/],
                        ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                        ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                        ["edge-chromium", /Edg\/([0-9\.]+)/],
                        ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                        ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                        ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                        ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                        ["fxios", /FxiOS\/([0-9\.]+)/],
                        ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                        ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                        ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                        ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                        ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                        ["ie", /MSIE\s(7\.0)/],
                        ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                        ["android", /Android\s([0-9\.]+)/],
                        ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                        ["safari", /Version\/([0-9\._]+).*Safari/],
                        ["facebook", /FBAV\/([0-9\.]+)/],
                        ["instagram", /Instagram\s([0-9\.]+)/],
                        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                        ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                    ];

                function s(e) {
                    var t = "" !== e && a.reduce((function(t, n) {
                        var r = n[0],
                            i = n[1];
                        if (t) return t;
                        var o = i.exec(e);
                        return !!o && [r, o]
                    }), !1);
                    if (!t) return null;
                    var r = t[0],
                        s = t[1];
                    if ("searchbot" === r) return new i;
                    var u = s[1] && s[1].split(/[._]/).slice(0, 3);
                    return u ? u.length < o && (u = u.concat(function(e) {
                        for (var t = [], n = 0; n < e; n += 1) t.push("0");
                        return t
                    }(o - u.length))) : u = [], new n(r, u.join("."))
                }

                function u() {
                    return e && e.version ? new r(e.version.slice(1)) : null
                }
                t.detectBrowser = function(e) {
                    return e ? s(e) : navigator ? s(navigator.userAgent) : u()
                }, t.parseUserAgent = s, t.getNodeVersion = u
            }(t.BrowserUtils || (t.BrowserUtils = {}))
    }).call(this, n(49))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(354),
        a = n(190),
        s = n(5),
        u = n(8),
        c = n(14),
        l = n(9),
        d = n(38),
        p = n(140),
        f = n(355),
        h = n(191),
        m = n(211),
        g = n(356),
        y = n(69),
        v = n(357),
        _ = function() {
            function e(e, t, n, r, i, o, a, s, u, c) {
                this._registrar = e, this._systemSettings = t, this._contentScriptInjector = n, this._contentScriptEmitter = r, this._settingsEmitter = i, this._remoteSettingsSyncer = o, this._userInfoListener = a, this._loggerSettings = s, this._sessionContextProvider = u, this._logger = c
            }
            var t, n, _, b, S, I, T, w, C, E;
            return e.prototype.initializeComponent = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var e, t, n, i;
                    return r.__generator(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, this._sessionContextProvider()];
                            case 1:
                                return e = r.sent(), [3, 3];
                            case 2:
                                return r.sent(), [3, 3];
                            case 3:
                                return [4, this._logger.initialize(this._loggerSettings, e, this._settingsEmitter)];
                            case 4:
                                return r.sent(), e || this._logger.debug(595363291, "Session context not created."), this._logger.debug(595621522, "[Background] Logger initialized"), t = this._logger.getNewActivity(c.EventCategoryName.BackgroundScriptInitialization, u.SamplingPolicy.CriticalExperimentation), this._logger.debug(595621523, "[Background] Parsing manifest version"), n = browser.runtime.getManifest(), t && (t.addDataField("Extension_Name", n.name, u.ActivityDataClassification.EssentialServiceMetadata), t.addDataField("Extension_Version", n.version_name || n.version, u.ActivityDataClassification.EssentialServiceMetadata)), this._logger.debug(595621524, "[Background] Initialization"), this._contentScriptEmitter.listenForContentScriptConnections && this._contentScriptEmitter.listenForContentScriptConnections(this._logger), this._contentScriptEmitter.on("openOptionsPage", (function() {
                                    window.open(browser.extension.getURL("options.html"), "_blank")
                                })), [4, this._registrar.initialize()];
                            case 5:
                                return r.sent(), [4, this._systemSettings.injectContentScriptsOnExtensionLoad()];
                            case 6:
                                return r.sent() ? (this._logger.debug(595621525, "[Background] Injecting content scripts into all tabs"), [4, this._contentScriptInjector.injectContentScriptsIntoAllTabs()]) : [3, 8];
                            case 7:
                                r.sent(), r.label = 8;
                            case 8:
                                return this._logger.debug(595621526, "[Background] Scheduling remote settings syncer"), this._remoteSettingsSyncer.schedule(1e3, 3e5), [4, this._userInfoListener.emitUserInfo()];
                            case 9:
                                return i = r.sent(), t && (i && t.addDataField("User_Id", i.userId, u.ActivityDataClassification.SystemMetadata), t.setSuccess(!0), t.endNow(), this._logger.debug(595621527, "[Background] Init successful")), [2]
                        }
                    }))
                }))
            }, r.__decorate([i.injectable(), r.__param(0, i.inject(s.SharedInjectionTypes.IRegistrar)), r.__param(1, i.inject(s.SharedInjectionTypes.ISystemSettings)), r.__param(2, i.inject(y.InjectionTypes.IContentScriptInjector)), r.__param(3, i.inject(s.SharedInjectionTypes.IContentScriptEmitter)), r.__param(4, i.inject(s.SharedInjectionTypes.ISettingsEmitter)), r.__param(5, i.inject(y.InjectionTypes.IRemoteSettingsSyncer)), r.__param(6, i.inject(s.SharedInjectionTypes.IUserInfoListener)), r.__param(7, i.inject(s.SharedInjectionTypes.ILoggerSettings)), r.__param(8, i.inject(y.InjectionTypes.ISessionContextProvider)), r.__param(9, i.inject(s.SharedInjectionTypes.ILogger)), r.__metadata("design:paramtypes", ["function" == typeof(t = void 0 !== a.IRegistrar && a.IRegistrar) ? t : Object, "function" == typeof(n = void 0 !== m.ISystemSettings && m.ISystemSettings) ? n : Object, "function" == typeof(_ = void 0 !== g.IContentScriptInjector && g.IContentScriptInjector) ? _ : Object, "function" == typeof(b = void 0 !== d.IContentScriptEmitter && d.IContentScriptEmitter) ? b : Object, "function" == typeof(S = void 0 !== p.ISettingsEmitter && p.ISettingsEmitter) ? S : Object, "function" == typeof(I = void 0 !== f.IRemoteSettingsSyncer && f.IRemoteSettingsSyncer) ? I : Object, "function" == typeof(T = void 0 !== o.IUserInfoListener && o.IUserInfoListener) ? T : Object, "function" == typeof(w = void 0 !== h.ILoggerSettings && h.ILoggerSettings) ? w : Object, "function" == typeof(C = void 0 !== v.ISessionContextProvider && v.ISessionContextProvider) ? C : Object, "function" == typeof(E = void 0 !== l.ILogger && l.ILogger) ? E : Object])], e)
        }();
    t.BackgroundScriptInitializer = _
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(8),
        s = n(14),
        u = n(9),
        c = function() {
            function e(e) {
                this._logger = e
            }
            var t, n;
            return t = e, e.prototype.injectContentScriptsIntoAllTabs = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var e, n, i, o, u, c = this;
                    return r.__generator(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                l.trys.push([0, 5, , 6]), e = browser.runtime.getManifest(), n = function(e) {
                                    var n, i, o, a, s, u;
                                    return r.__generator(this, (function(l) {
                                        switch (l.label) {
                                            case 0:
                                                return n = e.js || [], [4, Promise.all([t.getBrowserTabIdsMatching(e.matches), t.getBrowserTabIdsMatching(e.exclude_matches || [])])];
                                            case 1:
                                                return i = l.sent(), o = i[0], a = i[1], s = new Set(o), a.forEach((function(e) {
                                                    return s.delete(e)
                                                })), u = function() {
                                                    var e = browser.runtime.lastError;
                                                    e && c._logger.debug(595703120, "Init Injection Error: " + JSON.stringify(e))
                                                }, s.forEach((function(e) {
                                                    return n.forEach((function(t) {
                                                        return r.__awaiter(c, void 0, void 0, (function() {
                                                            return r.__generator(this, (function(n) {
                                                                return [2, browser.tabs.executeScript(e, {
                                                                    file: t
                                                                }).catch(u)]
                                                            }))
                                                        }))
                                                    }))
                                                })), [2]
                                        }
                                    }))
                                }, i = 0, o = e.content_scripts || [], l.label = 1;
                            case 1:
                                return i < o.length ? (u = o[i], [5, n(u)]) : [3, 4];
                            case 2:
                                l.sent(), l.label = 3;
                            case 3:
                                return i++, [3, 1];
                            case 4:
                                return [3, 6];
                            case 5:
                                return l.sent(), this._logger.logEvent(595686478, s.ErrorEventName.ContentScriptInjectionError, a.LoggingLevel.Error, "Error in the content script injection process on extension install.", a.SamplingPolicy.CriticalBusinessImpact), [3, 6];
                            case 6:
                                return [2]
                        }
                    }))
                }))
            }, e.getBrowserTabIdsMatching = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return 0 === e.length ? [3, 2] : [4, browser.tabs.query({
                                    url: e
                                })];
                            case 1:
                                return [2, t.sent().map((function(e) {
                                    return e.id
                                })).filter((function(e) {
                                    return void 0 !== e
                                }))];
                            case 2:
                                return [2, []]
                        }
                    }))
                }))
            }, t = r.__decorate([i.injectable(), r.__param(0, i.inject(o.SharedInjectionTypes.ILogger)), r.__metadata("design:paramtypes", ["function" == typeof(n = void 0 !== u.ILogger && u.ILogger) ? n : Object])], e)
        }();
    t.ContentScriptInjector = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(60),
        o = n(3),
        a = n(5),
        s = n(360),
        u = n(8),
        c = n(14),
        l = n(9),
        d = n(38),
        p = n(70),
        f = n(69),
        h = function() {
            function e(e, t, n, r, i) {
                this._editorService = e, this._contentScriptEmitter = t, this._settings = n, this._languageMapper = r, this._logger = i
            }
            var t, n, h, m, g;
            return e.prototype.initialize = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var e = this;
                    return r.__generator(this, (function(t) {
                        return this._contentScriptEmitter.on("loadLanguages", (function(t) {
                            return r.__awaiter(e, void 0, void 0, (function() {
                                return r.__generator(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this._loadSupportedLanguages(t.address)];
                                        case 1:
                                            return e.sent(), [2]
                                    }
                                }))
                            }))
                        })), [2]
                    }))
                }))
            }, e.prototype.shutDown = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return this._contentScriptEmitter.off("loadLanguages"), [2]
                    }))
                }))
            }, Object.defineProperty(e.prototype, "languages", {
                get: function() {
                    return this._languages
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._loadSupportedLanguages = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var t, n, o, a, s;
                    return r.__generator(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return this._languages && this._languages.supportedLanguages.length > 0 ? (this._emitLoadedLanguages(e), [2]) : [4, this._settings.enableRemoteLanguageInfo()];
                            case 1:
                                return r.sent() ? [3, 2] : (this._languages = {
                                    supportedLanguages: this._languageMapper.hardcodedLanguages
                                }, this._emitLoadedLanguages(e), [3, 7]);
                            case 2:
                                t = this._logger.getNewActivity(c.EventCategoryName.LanguageInfoCall, u.SamplingPolicy.CriticalExperimentation), r.label = 3;
                            case 3:
                                return r.trys.push([3, 6, , 7]), o = {}, [4, this._settings.appId()];
                            case 4:
                                return o.appId = r.sent(), n = o, [4, this._editorService.languageinfo(n)];
                            case 5:
                                return (a = r.sent()).responseStatus === i.EditorServiceModels.ResponseStatus.Success && a.supportedLanguages && a.supportedLanguages.length > 0 ? (this._languages = {
                                    supportedLanguages: this._languageMapper.map(a.supportedLanguages)
                                }, this._emitLoadedLanguages(e), t && (t.setSuccess(!0), t.endNow())) : (t && (t.setSuccess(!1), t.endNow()), this._languages = {
                                    supportedLanguages: []
                                }), [3, 7];
                            case 6:
                                return s = r.sent(), t && (t.addDataField("Editor_Error_Response", s, u.ActivityDataClassification.EssentialServiceMetadata), t.setSuccess(!1), t.endNow()), [3, 7];
                            case 7:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype._emitLoadedLanguages = function(e) {
                this.languages && this._contentScriptEmitter.emit("languagesLoaded", {
                    address: e,
                    message: this.languages
                })
            }, r.__decorate([o.injectable(), r.__param(0, o.inject(f.InjectionTypes.EditorService)), r.__param(1, o.inject(a.SharedInjectionTypes.IContentScriptEmitter)), r.__param(2, o.inject(a.SharedInjectionTypes.IProofingSettings)), r.__param(3, o.inject(a.SharedInjectionTypes.ILanguageMapper)), r.__param(4, o.inject(a.SharedInjectionTypes.ILogger)), r.__metadata("design:paramtypes", ["function" == typeof(t = void 0 !== i.EditorService && i.EditorService) ? t : Object, "function" == typeof(n = void 0 !== d.IContentScriptEmitter && d.IContentScriptEmitter) ? n : Object, "function" == typeof(h = void 0 !== p.IProofingSettings && p.IProofingSettings) ? h : Object, "function" == typeof(m = void 0 !== s.ILanguageMapper && s.ILanguageMapper) ? m : Object, "function" == typeof(g = void 0 !== l.ILogger && l.ILogger) ? g : Object])], e)
        }();
    t.LanguageInfoLoader = h
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = function() {
            function e() {}
            return e.prototype.registerListener = function(e, t) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(n) {
                        return [2, new Promise((function(n, r) {
                            browser.contextMenus.onClicked.addListener((function(i, o) {
                                i.menuItemId === e && (void 0 !== o.id ? n(t(o.id)) : r())
                            }))
                        }))]
                    }))
                }))
            }, r.__decorate([i.injectable()], e)
        }();
    t.ContextMenuEventListener = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(363),
        a = function() {
            function e() {}
            return e.prototype.createContextMenuButtons = function() {
                browser.contextMenus.create({
                    contexts: ["browser_action"],
                    id: o.ContextMenuButton.IgnoreButton,
                    title: "Ignore proofing on this webpage"
                })
            }, r.__decorate([i.injectable()], e)
        }();
    t.NativeContextMenu = a
}, function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            e.IgnoreButton = "ignoreButton"
        }(r || (r = {})), t.ContextMenuButton = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(8),
        s = n(14),
        u = n(9),
        c = function() {
            function e(e) {
                this._logger = e
            }
            var t, n;
            return t = e, e.prototype.getSupportedTabs = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var e, n, i, o, u, c, l, d;
                    return r.__generator(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 5, , 6]), e = browser.runtime.getManifest(), n = new Set, i = 0, o = e.content_scripts || [], r.label = 1;
                            case 1:
                                return i < o.length ? (u = o[i], [4, Promise.all([t.getBrowserTabIdsMatching(u.matches), t.getBrowserTabIdsMatching(u.exclude_matches || [])])]) : [3, 4];
                            case 2:
                                c = r.sent(), l = c[0], d = c[1], l.forEach((function(e) {
                                    return n.add(e)
                                })), d.forEach((function(e) {
                                    return n.delete(e)
                                })), r.label = 3;
                            case 3:
                                return i++, [3, 1];
                            case 4:
                                return [2, n];
                            case 5:
                                return r.sent(), this._logger.logEvent(595686478, s.ErrorEventName.ContentScriptInjectionError, a.LoggingLevel.Error, "Error in the content script injection process on extension install.", a.SamplingPolicy.CriticalBusinessImpact), [3, 6];
                            case 6:
                                return [2, new Set]
                        }
                    }))
                }))
            }, e.getBrowserTabIdsMatching = function(e) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return 0 === e.length ? [3, 2] : [4, browser.tabs.query({
                                    url: e
                                })];
                            case 1:
                                return [2, t.sent().map((function(e) {
                                    return e.id
                                })).filter((function(e) {
                                    return void 0 !== e
                                }))];
                            case 2:
                                return [2, []]
                        }
                    }))
                }))
            }, t = r.__decorate([i.injectable(), r.__param(0, i.inject(o.SharedInjectionTypes.ILogger)), r.__metadata("design:paramtypes", ["function" == typeof(n = void 0 !== u.ILogger && u.ILogger) ? n : Object])], e)
        }();
    t.TabsSelector = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(3),
        o = n(5),
        a = n(38),
        s = function() {
            function e(e) {
                var t = this;
                this._contentScriptEmitter = e, this.kixData = {}, this.onBeforeRequest = function(e) {
                    var n = e.url.indexOf("docs.google.com/document/d/");
                    if (-1 !== n) {
                        var r, i = new URL(e.url),
                            o = e.requestBody ? e.requestBody.formData : void 0;
                        if (-1 !== e.url.indexOf("/bind?", n) ? r = t.parseBindData : -1 !== e.url.indexOf("/save?", n) && (r = t.parseSaveData), r) {
                            var a = t.parseData(i.searchParams, r, o);
                            a && (t.kixData[a.id] = a)
                        }
                    }
                }, this.parseData = function(e, n, r) {
                    var i = t.getParamValue("id", e);
                    if (i) {
                        var o, a = t.kixData[i];
                        if (a) o = {
                            id: i,
                            sid: a.sid,
                            token: a.token
                        };
                        else {
                            var s = t.getParamValue("sid", e),
                                u = t.getParamValue("token", e);
                            if (!s || !u) return;
                            o = {
                                id: i,
                                sid: s,
                                token: u
                            }
                        }
                        return n(o, e, r)
                    }
                }, this.parseBindData = function(e, n, r) {
                    var i = t.getParamValue("ar", n);
                    if (i) {
                        var o = parseInt(i, 10);
                        if (!isNaN(o)) return {
                            id: e.id,
                            token: e.token,
                            sid: e.sid,
                            revision: o,
                            req: 0
                        }
                    }
                }, this.parseSaveData = function(e, t, n) {
                    if (n && n.rev && n.rev[0] && n.bundles) {
                        var r = parseInt(n.rev[0], 10) + 1;
                        if (!isNaN(r)) {
                            var i = JSON.parse(n.bundles[n.bundles.length - 1]),
                                o = i ? parseInt(i[i.length - 1].reqId, 10) + 1 : 0;
                            return isNaN(o) && (o = 0), {
                                id: e.id,
                                token: e.token,
                                sid: e.sid,
                                revision: r,
                                req: o
                            }
                        }
                    }
                }, this.getParamValue = function(e, t) {
                    var n = t.getAll(e);
                    return n ? n[0] : void 0
                }, this.handleRequest = function(e) {
                    if (t.kixData && t.kixData[e.message.id]) {
                        var n = t.kixData[e.message.id];
                        n.start = e.message.start, n.end = e.message.end, n.text = e.message.text, t._contentScriptEmitter.emit("kixData", {
                            address: e.address,
                            message: n
                        })
                    }
                }
            }
            var t;
            return e.prototype.initialize = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return this._contentScriptEmitter.on("kixDataRequest", this.handleRequest), browser.webRequest.onBeforeRequest.addListener(this.onBeforeRequest, {
                            urls: ["*://docs.google.com/*"]
                        }, ["requestBody"]), [2]
                    }))
                }))
            }, e.prototype.shutDown = function() {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(e) {
                        return this._contentScriptEmitter.off("kixDataRequest"), browser.webRequest.onBeforeRequest.removeListener(this.onBeforeRequest), [2]
                    }))
                }))
            }, r.__decorate([i.injectable(), r.__param(0, i.inject(o.SharedInjectionTypes.IContentScriptEmitter)), r.__metadata("design:paramtypes", ["function" == typeof(t = void 0 !== a.IContentScriptEmitter && a.IContentScriptEmitter) ? t : Object])], e)
        }();
    t.KixTrafficInspector = s
}]);