function initializeAppInsights() {
    var e, t;
    try {
        if ("undefined" != typeof window && "undefined" != typeof JSON)
            if (e = "appInsights", void 0 === window[e]) Microsoft.ApplicationInsights.AppInsights.defaultConfig = Microsoft.ApplicationInsights.Initialization.getDefaultConfig();
            else {
                var i = window[e] || {},
                    n = new Microsoft.ApplicationInsights.Initialization(i),
                    a = n.loadAppInsights();
                for (t in a) i[t] = a[t];
                n.emptyQueue(), n.pollInteralLogs(a), n.addHousekeepingBeforeUnload(a)
            }
    } catch (e) {
        Microsoft.ApplicationInsights._InternalLogging.warnToConsole("Failed to initialize AppInsights JS SDK: " + e.message)
    }
}
var __extends, AI, Microsoft;
(function(e) {
    ! function(e) {
        ! function(e) {
            e[e.CRITICAL = 0] = "CRITICAL", e[e.WARNING = 1] = "WARNING"
        }(e.LoggingSeverity || (e.LoggingSeverity = {}));
        var t = e.LoggingSeverity,
            i = function() {
                function e() {}
                return e.throwInternalNonUserActionable = function(e, t) {
                    if (this.enableDebugExceptions()) throw t;
                    this.warnToConsole(t), this.logInternalMessage(e, this.AiNonUserActionablePrefix + t)
                }, e.throwInternalUserActionable = function(e, t) {
                    if (this.enableDebugExceptions()) throw t;
                    this.warnToConsole(t), this.logInternalMessage(e, this.AiUserActionablePrefix + t)
                }, e.warnToConsole = function(e) {
                    "undefined" == typeof console || !console || ("function" == typeof console.warn ? console.warn(e) : "function" == typeof console.log && console.log(e))
                }, e.resetInternalMessageCount = function() {
                    this._messageCount = 0
                }, e.setMaxInternalMessageLimit = function(e) {
                    if (!e) throw new Error("limit cannot be undefined.");
                    this.MAX_INTERNAL_MESSAGE_LIMIT = e
                }, e.logInternalMessage = function(e, i) {
                    if (!this._areInternalMessagesThrottled() && ((this.verboseLogging() || e === t.CRITICAL) && (this.queue.push(i), this._messageCount++), this._messageCount == this.MAX_INTERNAL_MESSAGE_LIMIT)) {
                        var n = this.AiNonUserActionablePrefix + "Internal events throttle limit per PageView reached for this app.";
                        this.queue.push(n), this.warnToConsole(n)
                    }
                }, e._areInternalMessagesThrottled = function() {
                    return this._messageCount >= this.MAX_INTERNAL_MESSAGE_LIMIT
                }, e.AiUserActionablePrefix = "AI: ", e.AiNonUserActionablePrefix = "AI (Internal): ", e.enableDebugExceptions = function() {
                    return !1
                }, e.verboseLogging = function() {
                    return !1
                }, e.queue = [], e.MAX_INTERNAL_MESSAGE_LIMIT = 25, e._messageCount = 0, e
            }();
        e._InternalLogging = i
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
})(Microsoft || (Microsoft = {})),
function(e) {
    ! function(e) {
        var t = function() {
            function t() {}
            return t._getStorageObject = function() {
                try {
                    return window.localStorage ? window.localStorage : null
                } catch (t) {
                    return e._InternalLogging.warnToConsole("Failed to get client localStorage: " + t.message), null
                }
            }, t.canUseLocalStorage = function() {
                return !!t._getStorageObject()
            }, t.getStorage = function(i) {
                var n = t._getStorageObject();
                if (null !== n) try {
                    return n.getItem(i)
                } catch (i) {
                    e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.WARNING, "Browser failed read of local storage." + t.dump(i))
                }
                return null
            }, t.setStorage = function(i, n) {
                var a = t._getStorageObject();
                if (null !== a) try {
                    return a.setItem(i, n), !0
                } catch (i) {
                    e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.WARNING, "Browser failed write to local storage." + t.dump(i))
                }
                return !1
            }, t.removeStorage = function(i) {
                var n = t._getStorageObject();
                if (null !== n) try {
                    return n.removeItem(i), !0
                } catch (i) {
                    e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.WARNING, "Browser failed removal of local storage item." + t.dump(i))
                }
                return !1
            }, t._getSessionStorageObject = function() {
                try {
                    return window.sessionStorage ? window.sessionStorage : null
                } catch (t) {
                    return e._InternalLogging.warnToConsole("Failed to get client session storage: " + t.message), null
                }
            }, t.canUseSessionStorage = function() {
                return !!t._getSessionStorageObject()
            }, t.getSessionStorage = function(i) {
                var n = t._getSessionStorageObject();
                if (null !== n) try {
                    return n.getItem(i)
                } catch (i) {
                    e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.CRITICAL, "Browser failed read of session storage." + t.dump(i))
                }
                return null
            }, t.setSessionStorage = function(i, n) {
                var a = t._getSessionStorageObject();
                if (null !== a) try {
                    return a.setItem(i, n), !0
                } catch (i) {
                    e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.CRITICAL, "Browser failed write to session storage." + t.dump(i))
                }
                return !1
            }, t.removeSessionStorage = function(i) {
                var n = t._getSessionStorageObject();
                if (null !== n) try {
                    return n.removeItem(i), !0
                } catch (i) {
                    e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.CRITICAL, "Browser failed removal of session storage item." + t.dump(i))
                }
                return !1
            }, t.setCookie = function(e, i) {
                t.document.cookie = e + "=" + i + ";path=/"
            }, t.stringToBoolOrDefault = function(e) {
                return !!e && "true" === e.toString().toLowerCase()
            }, t.getCookie = function(e) {
                var i, n, a, o, r = "";
                if (e && e.length)
                    for (i = e + "=", n = t.document.cookie.split(";"), a = 0; a < n.length; a++)
                        if (o = n[a], (o = t.trim(o)) && 0 === o.indexOf(i)) {
                            r = o.substring(i.length, n[a].length);
                            break
                        } return r
            }, t.deleteCookie = function(e) {
                t.document.cookie = e + "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            }, t.trim = function(e) {
                return "string" != typeof e ? e : e.replace(/^\s+|\s+$/g, "")
            }, t.newGuid = function() {
                for (var e, t, i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"], n = "", a = 0; a < 4; a++) n += i[15 & (t = 4294967296 * Math.random() | 0)] + i[t >> 4 & 15] + i[t >> 8 & 15] + i[t >> 12 & 15] + i[t >> 16 & 15] + i[t >> 20 & 15] + i[t >> 24 & 15] + i[t >> 28 & 15];
                return e = i[8 + 4 * Math.random() | 0], n.substr(0, 8) + "-" + n.substr(9, 4) + "-4" + n.substr(13, 3) + "-" + e + n.substr(16, 3) + "-" + n.substr(19, 12)
            }, t.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, t.isError = function(e) {
                return "[object Error]" === Object.prototype.toString.call(e)
            }, t.isDate = function(e) {
                return "[object Date]" === Object.prototype.toString.call(e)
            }, t.toISOStringForIE8 = function(e) {
                if (t.isDate(e)) {
                    function i(e) {
                        var t = String(e);
                        return 1 === t.length && (t = "0" + t), t
                    }
                    return Date.prototype.toISOString ? e.toISOString() : e.getUTCFullYear() + "-" + i(e.getUTCMonth() + 1) + "-" + i(e.getUTCDate()) + "T" + i(e.getUTCHours()) + ":" + i(e.getUTCMinutes()) + ":" + i(e.getUTCSeconds()) + "." + String((e.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
                }
            }, t.msToTimeSpan = function(e) {
                (isNaN(e) || e < 0) && (e = 0);
                var t = "" + e % 1e3,
                    i = "" + Math.floor(e / 1e3) % 60,
                    n = "" + Math.floor(e / 6e4) % 60,
                    a = "" + Math.floor(e / 36e5) % 24;
                return t = 1 === t.length ? "00" + t : 2 === t.length ? "0" + t : t, i = i.length < 2 ? "0" + i : i, n = n.length < 2 ? "0" + n : n, (a = a.length < 2 ? "0" + a : a) + ":" + n + ":" + i + "." + t
            }, t.isCrossOriginError = function(e, t, i, n, a) {
                return ("Script error." == e || "Script error" == e) && "" == t && 0 == i && 0 == n && null == a
            }, t.dump = function(e) {
                var t = Object.prototype.toString.call(e),
                    i = JSON.stringify(e);
                return "[object Error]" === t && (i = "{ stack: '" + e.stack + "', message: '" + e.message + "', name: '" + e.name + "'"), t + i
            }, t.addEventHandler = function(e, t) {
                if (!window || "string" != typeof e || "function" != typeof t) return !1;
                var i = "on" + e;
                if (window.addEventListener) window.addEventListener(e, t, !1);
                else {
                    if (!window.attachEvent) return !1;
                    window.attachEvent.call(i, t)
                }
                return !0
            }, t.document = "undefined" != typeof document ? document : {}, t.NotSpecified = "not_specified", t
        }();
        e.Util = t
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {})),
function(e) {
    ! function(t) {
        "use strict";
        var i = function(i) {
            function n() {
                this.async = !1, this.completed = !1, this.requestHeadersSize = null, this.ttfb = null, this.responseReceivingDuration = null, this.callbackDuration = null, this.ajaxTotalDuration = null, this.aborted = null, this.pageUrl = null, this.requestUrl = null, this.requestSize = 0, this.method = null, this.status = null, this.contentType = null, this.contentEncoding = null, this.responseSize = 0, this.requestSentTime = null, this.responseStartedTime = null, this.responseFinishedTime = null, this.callbackFinishedTime = null, this.loadingRequest = !1, this.endTime = null, this.originalOnreadystatechage = null, this.onreadystatechangeCallbackAttached = !1, this.clientFailure = 0, this.getAbsoluteUrl = function() {
                    return this.requestUrl ? a.getAbsoluteUrl(this.requestUrl) : null
                }, this.CalculateMetrics = function() {
                    var e, t, i = this;
                    for (i.ttfb = p.GetDuration(i.requestSentTime, i.responseStartedTime), i.responseReceivingDuration = p.GetDuration(i.responseStartedTime, i.responseFinishedTime), i.callbackDuration = p.GetDuration(i.responseFinishedTime, i.callbackFinishedTime), t = (e = [i.responseStartedTime, i.responseFinishedTime, i.callbackFinishedTime]).length - 1; t >= 0; t--)
                        if (null !== e[t]) {
                            i.endTime = e[t], i.ajaxTotalDuration = p.GetDuration(i.requestSentTime, i.endTime);
                            break
                        }
                }
            }
            var a, o;
            this.ajaxMonitorInternal = null, this.appInsights = i;
            var r = "attachEvent",
                s = "detachEvent",
                l = "addEventListener",
                c = "removeEventListener",
                u = "undefined",
                p = {
                    Now: function() {
                        return (new Date).getTime()
                    },
                    GetDuration: function(e, t) {
                        var i = null;
                        return 0 === e || 0 === t || h.IsNullOrUndefined(e) || h.IsNullOrUndefined(t) || (i = t - e), i
                    }
                },
                g = {
                    TryCatchTraceWrapper: function(i, n) {
                        try {
                            return n.call(this)
                        } catch (n) {
                            t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, "Failed calling callback '" + i + "': " + e.ApplicationInsights.Util.dump(n))
                        }
                    },
                    AttachEvent: function(e, t, i) {
                        var n = !1;
                        return h.IsNullOrUndefined(e) || (h.IsNullOrUndefined(e.attachEvent) ? h.IsNullOrUndefined(e.addEventListener) || g.TryCatchTraceWrapper("addEventListener", (function() {
                            e.addEventListener(t, i, !1), n = !0
                        }), [e, t, l]) : g.TryCatchTraceWrapper("attachEvent", (function() {
                            e.attachEvent("on" + t, i), n = !0
                        }), [e, t, r])), n
                    },
                    DetachEvent: function(e, t, i) {
                        h.IsNullOrUndefined(e) || (h.IsNullOrUndefined(e.detachEvent) ? h.IsNullOrUndefined(e.removeEventListener) || g.TryCatchTraceWrapper("removeEventListener", (function() {
                            e.removeEventListener(t, i, !1)
                        }), [e.toString(), t, c]) : g.TryCatchTraceWrapper("detachEvent", (function() {
                            e.detachEvent("on" + t, i)
                        }), [e.toString(), t, s]))
                    }
                },
                h = {
                    IsNullOrUndefined: function(e) {
                        return typeof e === u || null === e
                    }
                },
                d = {
                    GetLength: function(e) {
                        var t, i = 0;
                        if (!h.IsNullOrUndefined(e)) {
                            t = "";
                            try {
                                t = e.toString()
                            } catch (e) {}
                            i = t.length, i = isNaN(i) ? 0 : i
                        }
                        return i
                    }
                };
            a = {
                getAbsoluteUrl: function() {
                    var e;
                    return function(t) {
                        return e || (e = document.createElement("a")), e.href = t, e.href
                    }
                }()
            }, (o = new function(i) {
                function a(e) {
                    return I && (!0 === e || !h.IsNullOrUndefined(this.ajaxData)) && !0 !== g.TryCatchTraceWrapper.call(this, "Check_If_Monitoring_Enabled_For_XmlHttpRequest_Instance", (function() {
                        return this.Microsoft_ApplicationInsights_BypassAjaxInstrumentation
                    }))
                }

                function o(e) {
                    a.call(this) && g.TryCatchTraceWrapper.call(this, "sendPrefix", (function() {
                        if (h.IsNullOrUndefined(e) || h.IsNullOrUndefined(e.length) || "GET" !== this.ajaxData.method && "HEAD" !== this.ajaxData.method && (this.ajaxData.requestSize += e.length), this.ajaxData.requestSentTime = p.Now(), this.ajaxData.loadingRequest = "loading" === document.readyState, !this.ajaxData.onreadystatechangeCallbackAttached) {
                            var t = this;
                            setTimeout((function() {
                                4 === t.readyState ? (g.TryCatchTraceWrapper.call(t, "readyState(4)", y), m.call(t)) : r.call(t)
                            }), 5)
                        }
                    }))
                }

                function r() {
                    var e = !1;
                    return (h.IsNullOrUndefined(this.onreadystatechange) || "function" == typeof this.onreadystatechange) && ("function" == typeof this.onreadystatechange && "onreadystatechangeWrapper" !== this.onreadystatechange.name && (this.ajaxData.originalOnreadystatechage = this.onreadystatechange), this.onreadystatechange = c, e = !0), e
                }

                function s() {
                    this.ajaxData.onreadystatechangeCallbackAttached = g.AttachEvent(this, "readystatechange", l)
                }

                function l() {
                    a.call(this) && this.onreadystatechange !== c && (this.readyState < 3 ? r.call(this) : (u.call(this), f.call(this)))
                }

                function c() {
                    if (a.call(this)) {
                        u.call(this);
                        try {
                            h.IsNullOrUndefined(this.ajaxData.originalOnreadystatechage) || this.ajaxData.originalOnreadystatechage.call(this)
                        } catch (e) {
                            throw this.ajaxData.clientFailure = 1, e
                        } finally {
                            h.IsNullOrUndefined(this.ajaxData.originalOnreadystatechage) || g.TryCatchTraceWrapper.call(this, "callbackFinishedTime", (function() {
                                4 === this.readyState && (this.ajaxData.callbackFinishedTime = p.Now())
                            })), f.call(this)
                        }
                    }
                }

                function u() {
                    switch (this.readyState) {
                        case 3:
                            g.TryCatchTraceWrapper.call(this, "readyState(3)", (function() {
                                this.ajaxData.responseStartedTime = p.Now()
                            }));
                            break;
                        case 4:
                            g.TryCatchTraceWrapper.call(this, "readyState(4)", y)
                    }
                }

                function f() {
                    4 === this.readyState && m.call(this)
                }

                function m() {
                    g.TryCatchTraceWrapper.call(this, "publishData", (function() {
                        this.ajaxData.CalculateMetrics(), i.trackAjax(this.ajaxData.getAbsoluteUrl(), this.ajaxData.async, this.ajaxData.ajaxTotalDuration, -1 != [200, 201, 202, 203, 204, 301, 302, 303, 304].indexOf(+this.ajaxData.status))
                    })), g.TryCatchTraceWrapper.call(this, "deleteAjaxData", (function() {
                        g.DetachEvent(this, "readystatechange", l), delete this.ajaxData
                    }))
                }

                function y() {
                    var i = p.Now(),
                        n = this;
                    n.ajaxData.responseFinishedTime = i, null === n.ajaxData.responseStartedTime && (n.ajaxData.responseStartedTime = i);
                    try {
                        this.ajaxData.status = this.status, this.ajaxData.contentType = this.getResponseHeader("Content-Type"), this.ajaxData.responseSize = this.responseText.length, this.ajaxData.responseSize += this.getAllResponseHeaders().length, this.ajaxData.responseSize += 17
                    } catch (i) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, "Failed to collect response data: " + e.ApplicationInsights.Util.dump(i))
                    }
                }
                i = i;
                var I = !1;
                this.Init = function() {
                    (function() {
                        var e = !1;
                        return h.IsNullOrUndefined(XMLHttpRequest) || (e = !0), e
                    })() && (function() {
                        var e = XMLHttpRequest.prototype.open;
                        XMLHttpRequest.prototype.open = function(t, i, o) {
                            return a.call(this, !0) && (this.ajaxData = new n, s.call(this), g.TryCatchTraceWrapper.call(this, "openPrefix", (function() {
                                var e = this;
                                e.ajaxData.method = t, e.ajaxData.requestUrl = i, e.ajaxData.requestSize += i.length, e.ajaxData.async = !!h.IsNullOrUndefined(o) || o
                            }))), e.apply(this, arguments)
                        }
                    }(), function() {
                        var e = XMLHttpRequest.prototype.setRequestHeader;
                        XMLHttpRequest.prototype.setRequestHeader = function(t, i) {
                            return a.call(this) && g.TryCatchTraceWrapper.call(this, "Adding size of header to total request size", (function() {
                                this.ajaxData.requestSize += d.GetLength(t) + d.GetLength(i) + 2
                            })), e.apply(this, arguments)
                        }
                    }(), function() {
                        var e = XMLHttpRequest.prototype.send;
                        XMLHttpRequest.prototype.send = function(t) {
                            return o.call(this, t), e.apply(this, arguments)
                        }
                    }(), function() {
                        var e = XMLHttpRequest.prototype.abort;
                        XMLHttpRequest.prototype.abort = function() {
                            return a.call(this) && (this.ajaxData.aborted = 1), e.apply(this, arguments)
                        }
                    }(), I = !0)
                }, this.GetDisabledPropertyName = function() {
                    return "Microsoft_ApplicationInsights_BypassAjaxInstrumentation"
                }
            }(this.appInsights)).Init(), this.ajaxMonitorInternal = o
        };
        t.AjaxMonitor = i
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {})),
function(e) {
    ! function(e) {
        "use strict";
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Required = 1] = "Required", e[e.Array = 2] = "Array", e[e.Hidden = 4] = "Hidden"
        }(e.FieldType || (e.FieldType = {}));
        var t = e.FieldType,
            i = function() {
                function i() {}
                return i.serialize = function(e) {
                    var t = i._serializeObject(e, "root");
                    return JSON.stringify(t)
                }, i._serializeObject = function(n, a) {
                    var o, r, s = "__aiCircularRefCheck",
                        l = {};
                    if (!n) return e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.CRITICAL, "cannot serialize " + a + " because it is null or undefined"), l;
                    if (n[s]) return e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.WARNING, "Circular reference detected while serializing: '" + a), l;
                    if (!n.aiDataContract) {
                        if ("measurements" === a) l = i._serializeStringMap(n, "number", a);
                        else if ("properties" === a) l = i._serializeStringMap(n, "string", a);
                        else if ("tags" === a) l = i._serializeStringMap(n, "string", a);
                        else if (e.Util.isArray(n)) l = i._serializeArray(n, a);
                        else {
                            e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.WARNING, "Attempting to serialize an object which does not implement ISerializable: " + a);
                            try {
                                JSON.stringify(n), l = n
                            } catch (t) {
                                e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.CRITICAL, t && "function" == typeof t.toString ? t.toString() : "Error serializing object")
                            }
                        }
                        return l
                    }
                    for (o in n[s] = !0, n.aiDataContract) {
                        var c = n.aiDataContract[o],
                            u = "function" == typeof c ? c() & t.Required : c & t.Required,
                            p = "function" == typeof c ? c() & t.Hidden : c & t.Hidden,
                            g = c & t.Array,
                            h = void 0 !== n[o],
                            d = "object" == typeof n[o] && null !== n[o];
                        !u || h || g ? p || void 0 !== (r = d ? g ? i._serializeArray(n[o], o) : i._serializeObject(n[o], o) : n[o]) && (l[o] = r) : e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.CRITICAL, "Missing required field specification: The field '" + o + "' on '" + a + "' is required but not present on source")
                    }
                    return delete n[s], l
                }, i._serializeArray = function(t, n) {
                    var a, o, r, s = void 0;
                    if (t)
                        if (e.Util.isArray(t))
                            for (s = [], a = 0; a < t.length; a++) o = t[a], r = i._serializeObject(o, n + "[" + a + "]"), s.push(r);
                        else e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.CRITICAL, "This field was specified as an array in the contract but the item is not an array.\r\n" + n);
                    return s
                }, i._serializeStringMap = function(t, i, n) {
                    var a, o, r, s = void 0;
                    if (t)
                        for (a in s = {}, t) o = t[a], "string" === i ? s[a] = void 0 === o ? "undefined" : null === o ? "null" : o.toString ? o.toString() : "invalid field: toString() is not defined." : "number" === i ? void 0 === o ? s[a] = "undefined" : null === o ? s[a] = "null" : (r = parseFloat(o), s[a] = isNaN(r) ? "NaN" : r) : (s[a] = "invalid field: " + n + " is of unknown type.", e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.CRITICAL, s[a]));
                    return s
                }, i
            }();
        e.Serializer = i
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {})),
function(e) {
    ! function(e) {
        "use strict";
        var t = function() {};
        e.Base = t
    }(e.Telemetry || (e.Telemetry = {}))
}(Microsoft || (Microsoft = {})),
function(e) {
    ! function(e) {
        "use strict";
        var t = function() {
            this.ver = 1, this.sampleRate = 100, this.tags = {}
        };
        e.Envelope = t
    }(e.Telemetry || (e.Telemetry = {}))
}(Microsoft || (Microsoft = {})), __extends = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        i.prototype = t.prototype, e.prototype = new i
    },
    function(e) {
        ! function(t) {
            ! function(i) {
                ! function(i) {
                    "use strict";
                    var n = function(e) {
                        function i(i, n) {
                            var a = this;
                            e.call(this), this.name = n, this.data = i, this.time = t.Util.toISOStringForIE8(new Date), this.aiDataContract = {
                                time: t.FieldType.Required,
                                iKey: t.FieldType.Required,
                                name: t.FieldType.Required,
                                sampleRate: function() {
                                    return 100 == a.sampleRate ? t.FieldType.Hidden : t.FieldType.Required
                                },
                                tags: t.FieldType.Required,
                                data: t.FieldType.Required
                            }
                        }
                        return __extends(i, e), i
                    }(e.Telemetry.Envelope);
                    i.Envelope = n
                }(i.Common || (i.Common = {}))
            }(t.Telemetry || (t.Telemetry = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(t) {
            ! function(t) {
                ! function(t) {
                    "use strict";
                    var i = function(e) {
                        function t() {
                            e.apply(this, arguments), this.aiDataContract = {}
                        }
                        return __extends(t, e), t
                    }(e.Telemetry.Base);
                    t.Base = i
                }(t.Common || (t.Common = {}))
            }(t.Telemetry || (t.Telemetry = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        "use strict";
        var t = function() {
            this.applicationVersion = "ai.application.ver", this.applicationBuild = "ai.application.build", this.applicationTypeId = "ai.application.typeId", this.deviceId = "ai.device.id", this.deviceIp = "ai.device.ip", this.deviceLanguage = "ai.device.language", this.deviceLocale = "ai.device.locale", this.deviceModel = "ai.device.model", this.deviceNetwork = "ai.device.network", this.deviceNetworkName = "ai.device.networkName", this.deviceOEMName = "ai.device.oemName", this.deviceOS = "ai.device.os", this.deviceOSVersion = "ai.device.osVersion", this.deviceRoleInstance = "ai.device.roleInstance", this.deviceRoleName = "ai.device.roleName", this.deviceScreenResolution = "ai.device.screenResolution", this.deviceType = "ai.device.type", this.deviceMachineName = "ai.device.machineName", this.deviceVMName = "ai.device.vmName", this.locationIp = "ai.location.ip", this.operationId = "ai.operation.id", this.operationName = "ai.operation.name", this.operationParentId = "ai.operation.parentId", this.operationRootId = "ai.operation.rootId", this.operationSyntheticSource = "ai.operation.syntheticSource", this.operationIsSynthetic = "ai.operation.isSynthetic", this.sessionId = "ai.session.id", this.sessionIsFirst = "ai.session.isFirst", this.sessionIsNew = "ai.session.isNew", this.userAccountAcquisitionDate = "ai.user.accountAcquisitionDate", this.userAccountId = "ai.user.accountId", this.userAgent = "ai.user.userAgent", this.userId = "ai.user.id", this.userStoreRegion = "ai.user.storeRegion", this.userAuthUserId = "ai.user.authUserId", this.userAnonymousUserAcquisitionDate = "ai.user.anonUserAcquisitionDate", this.userAuthenticatedUserAcquisitionDate = "ai.user.authUserAcquisitionDate", this.sampleRate = "ai.sample.sampleRate", this.internalSdkVersion = "ai.internal.sdkVersion", this.internalAgentVersion = "ai.internal.agentVersion", this.internalDataCollectorReceivedTime = "ai.internal.dataCollectorReceivedTime", this.internalProfileId = "ai.internal.profileId", this.internalProfileClassId = "ai.internal.profileClassId", this.internalAccountId = "ai.internal.accountId", this.internalApplicationName = "ai.internal.applicationName", this.internalInstrumentationKey = "ai.internal.instrumentationKey", this.internalTelemetryItemId = "ai.internal.telemetryItemId", this.internalApplicationType = "ai.internal.applicationType", this.internalRequestSource = "ai.internal.requestSource", this.internalFlowType = "ai.internal.flowType", this.internalIsAudit = "ai.internal.isAudit", this.internalTrackingSourceId = "ai.internal.trackingSourceId", this.internalTrackingType = "ai.internal.trackingType"
        };
        (AI || (AI = {})).ContextTagKeys = t
    }(),
    function(e) {
        ! function(e) {
            ! function(e) {
                "use strict";
                var t = function() {};
                e.Application = t
            }(e.Context || (e.Context = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(e) {
            ! function(e) {
                "use strict";
                var t = function() {
                    this.id = "browser", this.type = "browser", "undefined" != typeof screen && screen.width && screen.height && (this.resolution = screen.width + "X" + screen.height), this.locale = "undefined" != typeof screen && navigator.browserLanguage ? navigator.browserLanguage : "unknown"
                };
                e.Device = t
            }(e.Context || (e.Context = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(e) {
            ! function(t) {
                "use strict";
                var i = function() {
                    this.sdkVersion = "JavaScript:" + e.Version
                };
                t.Internal = i
            }(e.Context || (e.Context = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(e) {
            ! function(e) {
                "use strict";
                var t = function() {};
                e.Location = t
            }(e.Context || (e.Context = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(e) {
            ! function(t) {
                "use strict";
                var i = function() {
                    this.id = e.Util.newGuid(), window && window.location && window.location.pathname && (this.name = window.location.pathname)
                };
                t.Operation = i
            }(e.Context || (e.Context = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(e) {
            var t = function() {
                function e() {}
                return e.getScore = function(t) {
                    var i = new AI.ContextTagKeys;
                    return 100 * (t.tags[i.userId] ? e.getSamplingHashCode(t.tags[i.userId]) / e.INT_MAX_VALUE : t.tags[i.operationId] ? e.getSamplingHashCode(t.tags[i.operationId]) / e.INT_MAX_VALUE : Math.random())
                }, e.getSamplingHashCode = function(e) {
                    var t, i;
                    if ("" == e) return 0;
                    for (t = 5381, i = 0; i < e.length; ++i) t = (t << 5) + t + e.charCodeAt(i), t &= t;
                    return Math.abs(t)
                }, e.INT_MAX_VALUE = 2147483647, e
            }();
            e.SamplingScoreGenerator = t
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(e) {
            ! function(t) {
                "use strict";
                var i = function() {
                    function t(t) {
                        this.INT_MAX_VALUE = 2147483647, (t > 100 || t < 0) && (e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.WARNING, "Sampling rate is out of range (0..100): '" + t + "'. Sampling will be disabled, you may be sending too much data which may affect your AI service level."), this.sampleRate = 100), this.sampleRate = t
                    }
                    return t.prototype.isSampledIn = function(t) {
                        return 100 == this.sampleRate || e.SamplingScoreGenerator.getScore(t) < this.sampleRate
                    }, t
                }();
                t.Sample = i
            }(e.Context || (e.Context = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        "use strict";
        ! function(e) {
            e[e.Start = 0] = "Start", e[e.End = 1] = "End"
        }(e.SessionState || (e.SessionState = {}));
        e.SessionState
    }(AI || (AI = {})),
    function(e) {
        ! function(e) {
            ! function(t) {
                "use strict";
                var i, n = function() {};
                t.Session = n, i = function() {
                    function t(e, i) {
                        e || (e = {}), "function" == typeof e.sessionExpirationMs || (e.sessionExpirationMs = function() {
                            return t.acquisitionSpan
                        }), "function" == typeof e.sessionRenewalMs || (e.sessionRenewalMs = function() {
                            return t.renewalSpan
                        }), this.config = e, this._sessionHandler = i, this.automaticSession = new n
                    }
                    return t.prototype.update = function() {
                        this.automaticSession.id || this.initializeAutomaticSession();
                        var e = +new Date,
                            t = e - this.automaticSession.acquisitionDate > this.config.sessionExpirationMs(),
                            i = e - this.automaticSession.renewalDate > this.config.sessionRenewalMs();
                        t || i ? ("function" == typeof this._sessionHandler && this._sessionHandler(AI.SessionState.End, this.automaticSession.renewalDate), this.automaticSession.isFirst = void 0, this.renew()) : (this.automaticSession.renewalDate = +new Date, this.setCookie(this.automaticSession.id, this.automaticSession.acquisitionDate, this.automaticSession.renewalDate))
                    }, t.prototype.backup = function() {
                        this.setStorage(this.automaticSession.id, this.automaticSession.acquisitionDate, this.automaticSession.renewalDate)
                    }, t.prototype.initializeAutomaticSession = function() {
                        var t, i = e.Util.getCookie("ai_session");
                        i && "function" == typeof i.split ? this.initializeAutomaticSessionWithData(i) : (t = e.Util.getStorage("ai_session")) && this.initializeAutomaticSessionWithData(t), this.automaticSession.id || (this.automaticSession.isFirst = !0, this.renew())
                    }, t.prototype.initializeAutomaticSessionWithData = function(t) {
                        var i, n, a = t.split("|");
                        a.length > 0 && (this.automaticSession.id = a[0]);
                        try {
                            a.length > 1 && (i = +a[1], this.automaticSession.acquisitionDate = +new Date(i), this.automaticSession.acquisitionDate = this.automaticSession.acquisitionDate > 0 ? this.automaticSession.acquisitionDate : 0), a.length > 2 && (n = +a[2], this.automaticSession.renewalDate = +new Date(n), this.automaticSession.renewalDate = this.automaticSession.renewalDate > 0 ? this.automaticSession.renewalDate : 0)
                        } catch (t) {
                            e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.CRITICAL, "Error parsing ai_session cookie, session will be reset: " + e.Util.dump(t))
                        }
                        0 == this.automaticSession.renewalDate && e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.WARNING, "AI session renewal date is 0, session will be reset.")
                    }, t.prototype.renew = function() {
                        var t = +new Date;
                        this.automaticSession.id = e.Util.newGuid(), this.automaticSession.acquisitionDate = t, this.automaticSession.renewalDate = t, this.setCookie(this.automaticSession.id, this.automaticSession.acquisitionDate, this.automaticSession.renewalDate), "function" == typeof this._sessionHandler && this._sessionHandler(AI.SessionState.Start, t), e.Util.canUseLocalStorage() || e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.WARNING, "Browser does not support local storage. Session durations will be inaccurate.")
                    }, t.prototype.setCookie = function(t, i, n) {
                        var a = i + this.config.sessionExpirationMs(),
                            o = n + this.config.sessionRenewalMs(),
                            r = new Date,
                            s = [t, i, n];
                        a < o ? r.setTime(a) : r.setTime(o), e.Util.setCookie("ai_session", s.join("|") + ";expires=" + r.toUTCString())
                    }, t.prototype.setStorage = function(t, i, n) {
                        e.Util.setStorage("ai_session", [t, i, n].join("|"))
                    }, t.acquisitionSpan = 864e5, t.renewalSpan = 18e5, t
                }(), t._SessionManager = i
            }(e.Context || (e.Context = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(e) {
            ! function(t) {
                "use strict";
                var i = function() {
                    function t(i) {
                        var n, a, o, r, s, l, c = e.Util.getCookie(t.userCookieName);
                        c && ((n = c.split(t.cookieSeparator)).length > 0 && (this.id = n[0])), this.id || (this.id = e.Util.newGuid(), a = new Date, o = e.Util.toISOStringForIE8(a), this.accountAcquisitionDate = o, a.setTime(a.getTime() + 31536e6), r = [this.id, o], e.Util.setCookie(t.userCookieName, r.join(t.cookieSeparator) + ";expires=" + a.toUTCString()), e.Util.removeStorage("ai_session")), this.accountId = i, (s = e.Util.getCookie(t.authUserCookieName)) && ((l = (s = decodeURI(s)).split(t.cookieSeparator))[0] && (this.authenticatedId = l[0]), l.length > 1 && l[1] && (this.accountId = l[1]))
                    }
                    return t.prototype.setAuthenticatedUserContext = function(i, n) {
                        var a;
                        !this.validateUserInput(i) || n && !this.validateUserInput(n) ? e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.WARNING, "Setting auth user context failed. User auth/account id should be of type string, and not contain commas, semi-colons, equal signs, spaces, or vertical-bars.") : (this.authenticatedId = i, a = this.authenticatedId, n && (this.accountId = n, a = [this.authenticatedId, this.accountId].join(t.cookieSeparator)), e.Util.setCookie(t.authUserCookieName, encodeURI(a)))
                    }, t.prototype.clearAuthenticatedUserContext = function() {
                        this.authenticatedId = null, this.accountId = null, e.Util.deleteCookie(t.authUserCookieName)
                    }, t.prototype.validateUserInput = function(e) {
                        return !("string" != typeof e || !e || e.match(/,|;|=| |\|/))
                    }, t.cookieSeparator = "|", t.userCookieName = "ai_user", t.authUserCookieName = "ai_authUser", t
                }();
                t.User = i
            }(e.Context || (e.Context = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(e) {
            "use strict";
            var t = function() {
                function t(e) {
                    (this._buffer = [], this._lastSend = 0, this._config = e, this._sender = null, "undefined" != typeof XMLHttpRequest) && ("withCredentials" in new XMLHttpRequest ? this._sender = this._xhrSender : "undefined" != typeof XDomainRequest && (this._sender = this._xdrSender))
                }
                return t.prototype.send = function(t) {
                    var i, n = this;
                    try {
                        if (this._config.disableTelemetry()) return;
                        if (!t) return void e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.CRITICAL, "Cannot send empty telemetry");
                        if (!this._sender) return void e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.CRITICAL, "Sender was not initialized");
                        i = e.Serializer.serialize(t), this._getSizeInBytes(this._buffer) + i.length > this._config.maxBatchSizeInBytes() && this.triggerSend(), this._buffer.push(i), this._timeoutHandle || (this._timeoutHandle = setTimeout((function() {
                            n._timeoutHandle = null, n.triggerSend()
                        }), this._config.maxBatchInterval()))
                    } catch (t) {
                        e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.CRITICAL, "Failed adding telemetry to the sender's buffer, some telemetry will be lost: " + e.Util.dump(t))
                    }
                }, t.prototype._getSizeInBytes = function(e) {
                    var t, i, n = 0;
                    if (e && e.length)
                        for (t = 0; t < e.length; t++)(i = e[t]) && i.length && (n += i.length);
                    return n
                }, t.prototype.triggerSend = function(t) {
                    var i, n = !0;
                    "boolean" == typeof t && (n = t);
                    try {
                        this._config.disableTelemetry() || (this._buffer.length && (i = this._config.emitLineDelimitedJson() ? this._buffer.join("\n") : "[" + this._buffer.join(",") + "]", this._sender(i, n)), this._lastSend = +new Date), this._buffer.length = 0, clearTimeout(this._timeoutHandle), this._timeoutHandle = null
                    } catch (t) {
                        e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.CRITICAL, "Telemetry transmission failed, some telemetry will be lost: " + e.Util.dump(t))
                    }
                }, t.prototype._xhrSender = function(e, i) {
                    var n = new XMLHttpRequest;
                    n.Microsoft_ApplicationInsights_BypassAjaxInstrumentation = !0, n.open("POST", this._config.endpointUrl(), i), n.setRequestHeader("Content-type", "application/json"), n.onreadystatechange = function() {
                        return t._xhrReadyStateChange(n, e)
                    }, n.onerror = function(i) {
                        return t._onError(e, n.responseText || n.response || "", i)
                    }, n.send(e)
                }, t.prototype._xdrSender = function(e) {
                    var i = new XDomainRequest;
                    i.onload = function() {
                        return t._xdrOnLoad(i, e)
                    }, i.onerror = function(n) {
                        return t._onError(e, i.responseText || "", n)
                    }, i.open("POST", this._config.endpointUrl()), i.send(e)
                }, t._xhrReadyStateChange = function(e, i) {
                    4 === e.readyState && ((e.status < 200 || e.status >= 300) && 0 !== e.status ? t._onError(i, e.responseText || e.response || "") : t._onSuccess(i))
                }, t._xdrOnLoad = function(e, i) {
                    !e || e.responseText + "" != "200" && "" !== e.responseText ? t._onError(i, e && e.responseText || "") : t._onSuccess(i)
                }, t._onError = function(t, i) {
                    e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.WARNING, "Failed to send telemetry:\n" + i)
                }, t._onSuccess = function() {}, t
            }();
            e.Sender = t
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(e) {
            "use strict";
            var t = function() {};
            e.Domain = t
        }(e.Telemetry || (e.Telemetry = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        "use strict";
        ! function(e) {
            e[e.Verbose = 0] = "Verbose", e[e.Information = 1] = "Information", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error", e[e.Critical = 4] = "Critical"
        }(e.SeverityLevel || (e.SeverityLevel = {}));
        e.SeverityLevel
    }(AI || (AI = {})),
    function(e) {
        "use strict";
        var t = function(e) {
            function t() {
                this.ver = 2, this.properties = {}, e.call(this)
            }
            return __extends(t, e), t
        }(Microsoft.Telemetry.Domain);
        e.MessageData = t
    }(AI || (AI = {})),
    function(e) {
        ! function(e) {
            ! function(t) {
                ! function(t) {
                    "use strict";
                    var i = function() {
                        function t() {}
                        return t.sanitizeKeyAndAddUniqueness = function(e, i) {
                            var n, a, o = e.length,
                                r = t.sanitizeKey(e);
                            if (r.length !== o) {
                                for (n = 0, a = r; void 0 !== i[a];) n++, a = r.substring(0, t.MAX_NAME_LENGTH - 3) + t.padNumber(n);
                                r = a
                            }
                            return r
                        }, t.sanitizeKey = function(i) {
                            return i && ((i = e.Util.trim(i.toString())).search(/[^0-9a-zA-Z-._()\/ ]/g) >= 0 && (i = i.replace(/[^0-9a-zA-Z-._()\/ ]/g, "_"), e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.WARNING, "name contains illegal characters. Illgeal character have been replaced with '_'. new name: " + i)), i.length > t.MAX_NAME_LENGTH && (i = i.substring(0, t.MAX_NAME_LENGTH), e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.WARNING, "name is too long.  It has been truncated to " + t.MAX_NAME_LENGTH + " characters.  name: " + i))), i
                        }, t.sanitizeString = function(i) {
                            return i && ((i = e.Util.trim(i)).toString().length > t.MAX_STRING_LENGTH && (i = i.substring(0, t.MAX_STRING_LENGTH), e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.WARNING, "string value is too long. It has been truncated to " + t.MAX_STRING_LENGTH + " characters. value: " + i))), i
                        }, t.sanitizeUrl = function(i) {
                            return i && i.length > t.MAX_URL_LENGTH && (i = i.substring(0, t.MAX_URL_LENGTH), e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.WARNING, "url is too long, it has been trucated to " + t.MAX_URL_LENGTH + " characters. url: " + i)), i
                        }, t.sanitizeMessage = function(i) {
                            return i && i.length > t.MAX_MESSAGE_LENGTH && (i = i.substring(0, t.MAX_MESSAGE_LENGTH), e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.WARNING, "message is too long, it has been trucated to " + t.MAX_MESSAGE_LENGTH + " characters.  message: " + i)), i
                        }, t.sanitizeException = function(i) {
                            return i && i.length > t.MAX_EXCEPTION_LENGTH && (i = i.substring(0, t.MAX_EXCEPTION_LENGTH), e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.WARNING, "exception is too long, iit has been trucated to " + t.MAX_EXCEPTION_LENGTH + " characters.  exception: " + i)), i
                        }, t.sanitizeProperties = function(e) {
                            var i, n, a;
                            if (e) {
                                for (n in i = {}, e) a = t.sanitizeString(e[n]), i[n = t.sanitizeKeyAndAddUniqueness(n, i)] = a;
                                e = i
                            }
                            return e
                        }, t.sanitizeMeasurements = function(e) {
                            var i, n, a;
                            if (e) {
                                for (n in i = {}, e) a = e[n], i[n = t.sanitizeKeyAndAddUniqueness(n, i)] = a;
                                e = i
                            }
                            return e
                        }, t.padNumber = function(e) {
                            var t = "00" + e;
                            return t.substr(t.length - 3)
                        }, t.MAX_NAME_LENGTH = 150, t.MAX_STRING_LENGTH = 1024, t.MAX_URL_LENGTH = 2048, t.MAX_MESSAGE_LENGTH = 32768, t.MAX_EXCEPTION_LENGTH = 32768, t
                    }();
                    t.DataSanitizer = i
                }(t.Common || (t.Common = {}))
            }(e.Telemetry || (e.Telemetry = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(e) {
            ! function(t) {
                "use strict";
                var i = function(i) {
                    function n(n, a) {
                        i.call(this), this.aiDataContract = {
                            ver: e.FieldType.Required,
                            message: e.FieldType.Required,
                            severityLevel: e.FieldType.Default,
                            measurements: e.FieldType.Default,
                            properties: e.FieldType.Default
                        }, n = n || e.Util.NotSpecified, this.message = t.Common.DataSanitizer.sanitizeMessage(n), this.properties = t.Common.DataSanitizer.sanitizeProperties(a)
                    }
                    return __extends(n, i), n.envelopeType = "Microsoft.ApplicationInsights.Message", n.dataType = "MessageData", n
                }(AI.MessageData);
                t.Trace = i
            }(e.Telemetry || (e.Telemetry = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        "use strict";
        var t = function(e) {
            function t() {
                this.ver = 2, this.properties = {}, this.measurements = {}, e.call(this)
            }
            return __extends(t, e), t
        }(Microsoft.Telemetry.Domain);
        e.EventData = t
    }(AI || (AI = {})),
    function(e) {
        ! function(e) {
            ! function(t) {
                "use strict";
                var i = function(t) {
                    function i(i, n, a) {
                        t.call(this), this.aiDataContract = {
                            ver: e.FieldType.Required,
                            name: e.FieldType.Required,
                            properties: e.FieldType.Default,
                            measurements: e.FieldType.Default
                        }, this.name = e.Telemetry.Common.DataSanitizer.sanitizeString(i), this.properties = e.Telemetry.Common.DataSanitizer.sanitizeProperties(n), this.measurements = e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(a)
                    }
                    return __extends(i, t), i.envelopeType = "Microsoft.ApplicationInsights.Event", i.dataType = "EventData", i
                }(AI.EventData);
                t.Event = i
            }(e.Telemetry || (e.Telemetry = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        "use strict";
        var t = function() {
            this.hasFullStack = !0, this.parsedStack = []
        };
        (AI || (AI = {})).ExceptionDetails = t
    }(),
    function(e) {
        "use strict";
        var t = function(e) {
            function t() {
                this.ver = 2, this.exceptions = [], this.properties = {}, this.measurements = {}, e.call(this)
            }
            return __extends(t, e), t
        }(Microsoft.Telemetry.Domain);
        e.ExceptionData = t
    }(AI || (AI = {})),
    function(e) {
        "use strict";
        var t = function() {};
        (AI || (AI = {})).StackFrame = t
    }(),
    function(e) {
        ! function(e) {
            ! function(t) {
                "use strict";
                var i, n, a = function(t) {
                    function n(n, a, o, r) {
                        t.call(this), this.aiDataContract = {
                            ver: e.FieldType.Required,
                            handledAt: e.FieldType.Required,
                            exceptions: e.FieldType.Required,
                            severityLevel: e.FieldType.Default,
                            properties: e.FieldType.Default,
                            measurements: e.FieldType.Default
                        }, this.properties = e.Telemetry.Common.DataSanitizer.sanitizeProperties(o), this.measurements = e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(r), this.handledAt = a || "unhandled", this.exceptions = [new i(n)]
                    }
                    return __extends(n, t), n.CreateSimpleException = function(e, t, i, n, a, o, r) {
                        return {
                            handledAt: r || "unhandled",
                            exceptions: [{
                                hasFullStack: !0,
                                message: e,
                                stack: a,
                                typeName: t,
                                parsedStack: [{
                                    level: 0,
                                    assembly: i,
                                    fileName: n,
                                    line: o,
                                    method: "unknown"
                                }]
                            }]
                        }
                    }, n.envelopeType = "Microsoft.ApplicationInsights.Exception", n.dataType = "ExceptionData", n
                }(AI.ExceptionData);
                t.Exception = a, i = function(i) {
                    function a(n) {
                        i.call(this), this.aiDataContract = {
                            id: e.FieldType.Default,
                            outerId: e.FieldType.Default,
                            typeName: e.FieldType.Required,
                            message: e.FieldType.Required,
                            hasFullStack: e.FieldType.Default,
                            stack: e.FieldType.Default,
                            parsedStack: e.FieldType.Array
                        }, this.typeName = t.Common.DataSanitizer.sanitizeString(n.name || e.Util.NotSpecified), this.message = t.Common.DataSanitizer.sanitizeMessage(n.message || e.Util.NotSpecified);
                        var a = n.stack;
                        this.parsedStack = this.parseStack(a), this.stack = t.Common.DataSanitizer.sanitizeException(a), this.hasFullStack = e.Util.isArray(this.parsedStack) && this.parsedStack.length > 0
                    }
                    return __extends(a, i), a.prototype.parseStack = function(e) {
                        var t, i, a, o, r, s, l, c = void 0;
                        if ("string" == typeof e) {
                            for (t = e.split("\n"), c = [], i = 0, a = 0, o = 0; o <= t.length; o++) r = t[o], n.regex.test(r) && (a += (s = new n(t[o], i++)).sizeInBytes, c.push(s));
                            if (32768, a > 32768)
                                for (var u = 0, p = c.length - 1, g = 0, h = u, d = p; u < p;) {
                                    if ((g += c[u].sizeInBytes + c[p].sizeInBytes) > 32768) {
                                        l = d - h + 1, c.splice(h, l);
                                        break
                                    }
                                    h = u, d = p, u++, p--
                                }
                        }
                        return c
                    }, a
                }(AI.ExceptionDetails), n = function(t) {
                    function i(n, a) {
                        t.call(this), this.sizeInBytes = 0, this.aiDataContract = {
                            level: e.FieldType.Required,
                            method: e.FieldType.Required,
                            assembly: e.FieldType.Default,
                            fileName: e.FieldType.Default,
                            line: e.FieldType.Default
                        }, this.level = a, this.method = "unavailable", this.assembly = e.Util.trim(n);
                        var o = n.match(i.regex);
                        o && o.length >= 5 && (this.method = e.Util.trim(o[2]), this.fileName = e.Util.trim(o[4]), this.line = parseInt(o[5]) || 0), this.sizeInBytes += this.method.length, this.sizeInBytes += this.fileName.length, this.sizeInBytes += this.assembly.length, this.sizeInBytes += i.baseSize, this.sizeInBytes += this.level.toString().length, this.sizeInBytes += this.line.toString().length
                    }
                    return __extends(i, t), i.regex = /^([\s]+at)?(.*?)(\@|\s\(|\s)([^\(\@\n]+):([0-9]+):([0-9]+)(\)?)$/, i.baseSize = 58, i
                }(AI.StackFrame)
            }(e.Telemetry || (e.Telemetry = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        "use strict";
        var t = function(e) {
            function t() {
                this.ver = 2, this.metrics = [], this.properties = {}, e.call(this)
            }
            return __extends(t, e), t
        }(Microsoft.Telemetry.Domain);
        e.MetricData = t
    }(AI || (AI = {})),
    function(e) {
        "use strict";
        ! function(e) {
            e[e.Measurement = 0] = "Measurement", e[e.Aggregation = 1] = "Aggregation"
        }(e.DataPointType || (e.DataPointType = {}));
        e.DataPointType
    }(AI || (AI = {})),
    function(e) {
        "use strict";
        var t = function() {
            this.kind = e.DataPointType.Measurement
        };
        e.DataPoint = t
    }(AI || (AI = {})),
    function(e) {
        ! function(e) {
            ! function(t) {
                ! function(t) {
                    "use strict";
                    var i = function(t) {
                        function i() {
                            t.apply(this, arguments), this.aiDataContract = {
                                name: e.FieldType.Required,
                                kind: e.FieldType.Default,
                                value: e.FieldType.Required,
                                count: e.FieldType.Default,
                                min: e.FieldType.Default,
                                max: e.FieldType.Default,
                                stdDev: e.FieldType.Default
                            }
                        }
                        return __extends(i, t), i
                    }(AI.DataPoint);
                    t.DataPoint = i
                }(t.Common || (t.Common = {}))
            }(e.Telemetry || (e.Telemetry = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(t) {
            ! function(i) {
                "use strict";
                var n = function(n) {
                    function a(a, o, r, s, l, c) {
                        n.call(this), this.aiDataContract = {
                            ver: t.FieldType.Required,
                            metrics: t.FieldType.Required,
                            properties: t.FieldType.Default
                        };
                        var u = new e.ApplicationInsights.Telemetry.Common.DataPoint;
                        u.count = r > 0 ? r : void 0, u.max = isNaN(l) || null === l ? void 0 : l, u.min = isNaN(s) || null === s ? void 0 : s, u.name = i.Common.DataSanitizer.sanitizeString(a), u.value = o, this.metrics = [u], this.properties = t.Telemetry.Common.DataSanitizer.sanitizeProperties(c)
                    }
                    return __extends(a, n), a.envelopeType = "Microsoft.ApplicationInsights.Metric", a.dataType = "MetricData", a
                }(AI.MetricData);
                i.Metric = n
            }(t.Telemetry || (t.Telemetry = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        "use strict";
        var t = function(e) {
            function t() {
                this.ver = 2, this.properties = {}, this.measurements = {}, e.call(this)
            }
            return __extends(t, e), t
        }(e.EventData);
        e.PageViewData = t
    }(AI || (AI = {})),
    function(e) {
        ! function(e) {
            ! function(t) {
                "use strict";
                var i = function(i) {
                    function n(n, a, o, r, s) {
                        i.call(this), this.aiDataContract = {
                            ver: e.FieldType.Required,
                            name: e.FieldType.Default,
                            url: e.FieldType.Default,
                            duration: e.FieldType.Default,
                            properties: e.FieldType.Default,
                            measurements: e.FieldType.Default
                        }, this.url = t.Common.DataSanitizer.sanitizeUrl(a), this.name = t.Common.DataSanitizer.sanitizeString(n || e.Util.NotSpecified), isNaN(o) || (this.duration = e.Util.msToTimeSpan(o)), this.properties = e.Telemetry.Common.DataSanitizer.sanitizeProperties(r), this.measurements = e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(s)
                    }
                    return __extends(n, i), n.envelopeType = "Microsoft.ApplicationInsights.Pageview", n.dataType = "PageviewData", n
                }(AI.PageViewData);
                t.PageView = i
            }(e.Telemetry || (e.Telemetry = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        "use strict";
        var t = function(e) {
            function t() {
                this.ver = 2, this.properties = {}, this.measurements = {}, e.call(this)
            }
            return __extends(t, e), t
        }(e.PageViewData);
        e.PageViewPerfData = t
    }(AI || (AI = {})),
    function(e) {
        ! function(e) {
            ! function(t) {
                "use strict";
                var i = function(i) {
                    function n(a, o, r, s, l) {
                        var c;
                        if (i.call(this), this.aiDataContract = {
                                ver: e.FieldType.Required,
                                name: e.FieldType.Default,
                                url: e.FieldType.Default,
                                duration: e.FieldType.Default,
                                perfTotal: e.FieldType.Default,
                                networkConnect: e.FieldType.Default,
                                sentRequest: e.FieldType.Default,
                                receivedResponse: e.FieldType.Default,
                                domProcessing: e.FieldType.Default,
                                properties: e.FieldType.Default,
                                measurements: e.FieldType.Default
                            }, this.isValid = !1, c = n.getPerformanceTiming()) {
                            var u = n.getDuration(c.navigationStart, c.loadEventEnd),
                                p = n.getDuration(c.navigationStart, c.connectEnd),
                                g = n.getDuration(c.requestStart, c.responseStart),
                                h = n.getDuration(c.responseStart, c.responseEnd),
                                d = n.getDuration(c.responseEnd, c.loadEventEnd);
                            0 == u ? e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.WARNING, "error calculating page view performance: total='" + u + "', network='" + p + "', request='" + g + "', response='" + h + "', dom='" + d + "'") : u < Math.floor(p) + Math.floor(g) + Math.floor(h) + Math.floor(d) ? e._InternalLogging.throwInternalNonUserActionable(e.LoggingSeverity.WARNING, "client performance math error:" + u + " < " + p + " + " + g + " + " + h + " + " + d) : (this.durationMs = u, this.perfTotal = this.duration = e.Util.msToTimeSpan(u), this.networkConnect = e.Util.msToTimeSpan(p), this.sentRequest = e.Util.msToTimeSpan(g), this.receivedResponse = e.Util.msToTimeSpan(h), this.domProcessing = e.Util.msToTimeSpan(d), this.isValid = !0)
                        }
                        this.url = t.Common.DataSanitizer.sanitizeUrl(o), this.name = t.Common.DataSanitizer.sanitizeString(a || e.Util.NotSpecified), this.properties = e.Telemetry.Common.DataSanitizer.sanitizeProperties(s), this.measurements = e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(l)
                    }
                    return __extends(n, i), n.prototype.getIsValid = function() {
                        return this.isValid
                    }, n.prototype.getDurationMs = function() {
                        return this.durationMs
                    }, n.getPerformanceTiming = function() {
                        return "undefined" != typeof window && window.performance && window.performance.timing ? window.performance.timing : null
                    }, n.isPerformanceTimingSupported = function() {
                        return "undefined" != typeof window && window.performance && window.performance.timing
                    }, n.isPerformanceTimingDataReady = function() {
                        var e = window.performance.timing;
                        return e.domainLookupStart > 0 && e.navigationStart > 0 && e.responseStart > 0 && e.requestStart > 0 && e.loadEventEnd > 0 && e.responseEnd > 0 && e.connectEnd > 0 && e.domLoading > 0
                    }, n.getDuration = function(e, t) {
                        var i = 0;
                        return isNaN(e) || isNaN(t) || (i = Math.max(t - e, 0)), i
                    }, n.envelopeType = "Microsoft.ApplicationInsights.PageviewPerformance", n.dataType = "PageviewPerformanceData", n
                }(AI.PageViewPerfData);
                t.PageViewPerformance = i
            }(e.Telemetry || (e.Telemetry = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        "use strict";
        var t = function(t) {
            function i() {
                this.ver = 2, this.state = e.SessionState.Start, t.call(this)
            }
            return __extends(i, t), i
        }(Microsoft.Telemetry.Domain);
        e.SessionStateData = t
    }(AI || (AI = {})),
    function(e) {
        ! function(e) {
            ! function(t) {
                "use strict";
                var i = function(t) {
                    function i(i) {
                        t.call(this), this.aiDataContract = {
                            ver: e.FieldType.Required,
                            state: e.FieldType.Required
                        }, this.state = i
                    }
                    return __extends(i, t), i.envelopeType = "Microsoft.ApplicationInsights.SessionState", i.dataType = "SessionStateData", i
                }(AI.SessionStateData);
                t.SessionTelemetry = i
            }(e.Telemetry || (e.Telemetry = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(e) {
            "use strict";
            var t = function() {
                function t(i) {
                    var n = this;
                    this._config = i, this._sender = new e.Sender(i), "undefined" != typeof window && (this._sessionManager = new e.Context._SessionManager(i, (function(e, i) {
                        return t._sessionHandler(n, e, i)
                    })), this.application = new e.Context.Application, this.device = new e.Context.Device, this.internal = new e.Context.Internal, this.location = new e.Context.Location, this.user = new e.Context.User(i.accountId()), this.operation = new e.Context.Operation, this.session = new e.Context.Session, this.sample = new e.Context.Sample(i.sampleRate()))
                }
                return t.prototype.addTelemetryInitializer = function(e) {
                    this.telemetryInitializers = this.telemetryInitializers || [], this.telemetryInitializers.push(e)
                }, t.prototype.track = function(t) {
                    return t ? (t.name === e.Telemetry.PageView.envelopeType && e._InternalLogging.resetInternalMessageCount(), this.session && "string" != typeof this.session.id && this._sessionManager.update(), this._track(t)) : e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.CRITICAL, "cannot call .track() with a null or undefined argument"), t
                }, t.prototype._track = function(t) {
                    var i, n, a, o;
                    this.session && ("string" == typeof this.session.id ? this._applySessionContext(t, this.session) : this._applySessionContext(t, this._sessionManager.automaticSession)), this._applyApplicationContext(t, this.application), this._applyDeviceContext(t, this.device), this._applyInternalContext(t, this.internal), this._applyLocationContext(t, this.location), this._applySampleContext(t, this.sample), this._applyUserContext(t, this.user), this._applyOperationContext(t, this.operation), t.iKey = this._config.instrumentationKey(), i = !1;
                    try {
                        for (this.telemetryInitializers = this.telemetryInitializers || [], n = this.telemetryInitializers.length, a = 0; a < n; ++a)(o = this.telemetryInitializers[a]) && o.apply(null, [t])
                    } catch (t) {
                        i = !0, e._InternalLogging.throwInternalUserActionable(e.LoggingSeverity.CRITICAL, "One of telemetry initializers failed, telemetry item will not be sent: " + e.Util.dump(t))
                    }
                    return i || (t.name === e.Telemetry.SessionTelemetry.envelopeType || t.name === e.Telemetry.Metric.envelopeType || this.sample.isSampledIn(t) ? this._sender.send(t) : e._InternalLogging.logInternalMessage(e.LoggingSeverity.WARNING, "Telemetry is sampled and not sent to the AI service. SampleRate is " + this.sample.sampleRate)), t
                }, t._sessionHandler = function(t, i, n) {
                    var a = new e.Telemetry.SessionTelemetry(i),
                        o = new e.Telemetry.Common.Data(e.Telemetry.SessionTelemetry.dataType, a),
                        r = new e.Telemetry.Common.Envelope(o, e.Telemetry.SessionTelemetry.envelopeType);
                    r.time = e.Util.toISOStringForIE8(new Date(n)), t._track(r)
                }, t.prototype._applyApplicationContext = function(e, t) {
                    if (t) {
                        var i = new AI.ContextTagKeys;
                        "string" == typeof t.ver && (e.tags[i.applicationVersion] = t.ver), "string" == typeof t.build && (e.tags[i.applicationBuild] = t.build)
                    }
                }, t.prototype._applyDeviceContext = function(e, t) {
                    var i = new AI.ContextTagKeys;
                    t && ("string" == typeof t.id && (e.tags[i.deviceId] = t.id), "string" == typeof t.ip && (e.tags[i.deviceIp] = t.ip), "string" == typeof t.language && (e.tags[i.deviceLanguage] = t.language), "string" == typeof t.locale && (e.tags[i.deviceLocale] = t.locale), "string" == typeof t.model && (e.tags[i.deviceModel] = t.model), void 0 !== t.network && (e.tags[i.deviceNetwork] = t.network), "string" == typeof t.oemName && (e.tags[i.deviceOEMName] = t.oemName), "string" == typeof t.os && (e.tags[i.deviceOS] = t.os), "string" == typeof t.osversion && (e.tags[i.deviceOSVersion] = t.osversion), "string" == typeof t.resolution && (e.tags[i.deviceScreenResolution] = t.resolution), "string" == typeof t.type && (e.tags[i.deviceType] = t.type))
                }, t.prototype._applyInternalContext = function(e, t) {
                    if (t) {
                        var i = new AI.ContextTagKeys;
                        "string" == typeof t.agentVersion && (e.tags[i.internalAgentVersion] = t.agentVersion), "string" == typeof t.sdkVersion && (e.tags[i.internalSdkVersion] = t.sdkVersion)
                    }
                }, t.prototype._applyLocationContext = function(e, t) {
                    if (t) {
                        var i = new AI.ContextTagKeys;
                        "string" == typeof t.ip && (e.tags[i.locationIp] = t.ip)
                    }
                }, t.prototype._applyOperationContext = function(e, t) {
                    if (t) {
                        var i = new AI.ContextTagKeys;
                        "string" == typeof t.id && (e.tags[i.operationId] = t.id), "string" == typeof t.name && (e.tags[i.operationName] = t.name), "string" == typeof t.parentId && (e.tags[i.operationParentId] = t.parentId), "string" == typeof t.rootId && (e.tags[i.operationRootId] = t.rootId), "string" == typeof t.syntheticSource && (e.tags[i.operationSyntheticSource] = t.syntheticSource)
                    }
                }, t.prototype._applySampleContext = function(e, t) {
                    t && (e.sampleRate = t.sampleRate)
                }, t.prototype._applySessionContext = function(e, t) {
                    if (t) {
                        var i = new AI.ContextTagKeys;
                        "string" == typeof t.id && (e.tags[i.sessionId] = t.id), void 0 !== t.isFirst && (e.tags[i.sessionIsFirst] = t.isFirst)
                    }
                }, t.prototype._applyUserContext = function(e, t) {
                    if (t) {
                        var i = new AI.ContextTagKeys;
                        "string" == typeof t.accountAcquisitionDate && (e.tags[i.userAccountAcquisitionDate] = t.accountAcquisitionDate), "string" == typeof t.accountId && (e.tags[i.userAccountId] = t.accountId), "string" == typeof t.agent && (e.tags[i.userAgent] = t.agent), "string" == typeof t.id && (e.tags[i.userId] = t.id), "string" == typeof t.authenticatedId && (e.tags[i.userAuthUserId] = t.authenticatedId), "string" == typeof t.storeRegion && (e.tags[i.userStoreRegion] = t.storeRegion)
                    }
                }, t
            }();
            e.TelemetryContext = t
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(t) {
            "use strict";
            var i = function(e) {
                function t() {
                    e.call(this)
                }
                return __extends(t, e), t
            }(e.Telemetry.Base);
            t.Data = i
        }(e.Telemetry || (e.Telemetry = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(t) {
            ! function(i) {
                ! function(i) {
                    "use strict";
                    var n = function(e) {
                        function i(i, n) {
                            e.call(this), this.aiDataContract = {
                                baseType: t.FieldType.Required,
                                baseData: t.FieldType.Required
                            }, this.baseType = i, this.baseData = n
                        }
                        return __extends(i, e), i
                    }(e.Telemetry.Data);
                    i.Data = n
                }(i.Common || (i.Common = {}))
            }(t.Telemetry || (t.Telemetry = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(e) {
            ! function(t) {
                "use strict";
                var i, n = function() {
                    function t(e) {
                        this.prevPageVisitDataKeyName = "prevPageVisitData", this.pageVisitTimeTrackingHandler = e
                    }
                    return t.prototype.trackPreviousPageVisit = function(t, i) {
                        try {
                            var n = this.restartPageVisitTimer(t, i);
                            n && this.pageVisitTimeTrackingHandler(n.pageName, n.pageUrl, n.pageVisitTime)
                        } catch (t) {
                            e._InternalLogging.warnToConsole("Auto track page visit time failed, metric will not be collected: " + e.Util.dump(t))
                        }
                    }, t.prototype.restartPageVisitTimer = function(t, i) {
                        try {
                            var n = this.stopPageVisitTimer();
                            return this.startPageVisitTimer(t, i), n
                        } catch (t) {
                            return e._InternalLogging.warnToConsole("Call to restart failed: " + e.Util.dump(t)), null
                        }
                    }, t.prototype.startPageVisitTimer = function(t, n) {
                        try {
                            if (e.Util.canUseSessionStorage()) {
                                if (null != e.Util.getSessionStorage(this.prevPageVisitDataKeyName)) throw new Error("Cannot call startPageVisit consecutively without first calling stopPageVisit");
                                var a = new i(t, n),
                                    o = JSON.stringify(a);
                                e.Util.setSessionStorage(this.prevPageVisitDataKeyName, o)
                            }
                        } catch (t) {
                            e._InternalLogging.warnToConsole("Call to start failed: " + e.Util.dump(t))
                        }
                    }, t.prototype.stopPageVisitTimer = function() {
                        var t, i, n;
                        try {
                            return e.Util.canUseSessionStorage() ? (t = Date.now(), (i = e.Util.getSessionStorage(this.prevPageVisitDataKeyName)) ? ((n = JSON.parse(i)).pageVisitTime = t - n.pageVisitStartTime, e.Util.removeSessionStorage(this.prevPageVisitDataKeyName), n) : null) : null
                        } catch (t) {
                            return e._InternalLogging.warnToConsole("Stop page visit timer failed: " + e.Util.dump(t)), null
                        }
                    }, t
                }();
                t.PageVisitTimeManager = n, i = function(e, t) {
                    this.pageVisitStartTime = Date.now(), this.pageName = e, this.pageUrl = t
                }, t.PageVisitData = i
            }(e.Telemetry || (e.Telemetry = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        "use strict";
        ! function(e) {
            e[e.SQL = 0] = "SQL", e[e.Http = 1] = "Http", e[e.Other = 2] = "Other"
        }(e.DependencyKind || (e.DependencyKind = {}));
        e.DependencyKind
    }(AI || (AI = {})),
    function(e) {
        "use strict";
        ! function(e) {
            e[e.Undefined = 0] = "Undefined", e[e.Aic = 1] = "Aic", e[e.Apmc = 2] = "Apmc"
        }(e.DependencySourceType || (e.DependencySourceType = {}));
        e.DependencySourceType
    }(AI || (AI = {})),
    function(e) {
        "use strict";
        var t = function(t) {
            function i() {
                this.ver = 2, this.kind = e.DataPointType.Aggregation, this.dependencyKind = e.DependencyKind.Other, this.success = !0, this.dependencySource = e.DependencySourceType.Apmc, this.properties = {}, t.call(this)
            }
            return __extends(i, t), i
        }(Microsoft.Telemetry.Domain);
        e.RemoteDependencyData = t
    }(AI || (AI = {})),
    function(e) {
        ! function(e) {
            ! function(t) {
                "use strict";
                var i = function(t) {
                    function i(i, n, a, o) {
                        t.call(this), this.aiDataContract = {
                            ver: e.FieldType.Required,
                            name: e.FieldType.Default,
                            kind: e.FieldType.Required,
                            value: e.FieldType.Default,
                            count: e.FieldType.Default,
                            min: e.FieldType.Default,
                            max: e.FieldType.Default,
                            stdDev: e.FieldType.Default,
                            dependencyKind: e.FieldType.Default,
                            success: e.FieldType.Default,
                            async: e.FieldType.Default,
                            dependencySource: e.FieldType.Default,
                            commandName: e.FieldType.Default,
                            dependencyTypeName: e.FieldType.Default,
                            properties: e.FieldType.Default
                        }, this.dependencyKind = AI.DependencyKind.Http, this.dependencyTypeName = "Ajax", this.async = n, this.value = a, this.commandName = i, this.name = i, this.success = o
                    }
                    return __extends(i, t), i.envelopeType = "Microsoft.ApplicationInsights.RemoteDependencyData", i.dataType = "RemoteDependencyData", i
                }(AI.RemoteDependencyData);
                t.RemoteDependencyData = i
            }(e.Telemetry || (e.Telemetry = {}))
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        ! function(t) {
            "use strict";
            var i, n;
            t.Version = "0.19.1", i = function() {
                function i(a) {
                    var o, r, s, l = this;
                    if (this.config = a || {}, void 0 !== (o = i.defaultConfig))
                        for (r in o) void 0 === this.config[r] && (this.config[r] = o[r]);
                    t._InternalLogging.verboseLogging = function() {
                        return l.config.verboseLogging
                    }, t._InternalLogging.enableDebugExceptions = function() {
                        return l.config.enableDebug
                    }, s = {
                        instrumentationKey: function() {
                            return l.config.instrumentationKey
                        },
                        accountId: function() {
                            return l.config.accountId
                        },
                        appUserId: function() {
                            return l.config.appUserId
                        },
                        sessionRenewalMs: function() {
                            return l.config.sessionRenewalMs
                        },
                        sessionExpirationMs: function() {
                            return l.config.sessionExpirationMs
                        },
                        endpointUrl: function() {
                            return l.config.endpointUrl
                        },
                        emitLineDelimitedJson: function() {
                            return l.config.emitLineDelimitedJson
                        },
                        maxBatchSizeInBytes: function() {
                            return l.config.maxBatchSizeInBytes
                        },
                        maxBatchInterval: function() {
                            return l.config.maxBatchInterval
                        },
                        disableTelemetry: function() {
                            return l.config.disableTelemetry
                        },
                        sampleRate: function() {
                            return l.config.samplingPercentage
                        }
                    }, this.context = new t.TelemetryContext(s), this._eventTracking = new n("trackEvent"), this._eventTracking.action = function(e, i, n, a, o) {
                        var r = new t.Telemetry.Event(e, a, o),
                            s = new t.Telemetry.Common.Data(t.Telemetry.Event.dataType, r),
                            c = new t.Telemetry.Common.Envelope(s, t.Telemetry.Event.envelopeType);
                        l.context.track(c)
                    }, this._pageTracking = new n("trackPageView"), this._pageTracking.action = function(e, t, i, n, a) {
                        l.sendPageViewInternal(e, t, i, n, a)
                    }, this._pageVisitTimeManager = new t.Telemetry.PageVisitTimeManager((function(e, t, i) {
                        return l.trackPageVisitTime(e, t, i)
                    })), this.config.autoTrackAjax && new e.ApplicationInsights.AjaxMonitor(this)
                }
                return i.prototype.sendPageViewInternal = function(e, i, n, a, o) {
                    var r = new t.Telemetry.PageView(e, i, n, a, o),
                        s = new t.Telemetry.Common.Data(t.Telemetry.PageView.dataType, r),
                        l = new t.Telemetry.Common.Envelope(s, t.Telemetry.PageView.envelopeType);
                    this.context.track(l)
                }, i.prototype.startTrackPage = function(e) {
                    try {
                        "string" != typeof e && (e = window.document && window.document.title || ""), this._pageTracking.start(e)
                    } catch (e) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, "startTrackPage failed, page view may not be collected: " + t.Util.dump(e))
                    }
                }, i.prototype.stopTrackPage = function(e, i, n, a) {
                    try {
                        "string" != typeof e && (e = window.document && window.document.title || ""), "string" != typeof i && (i = window.location && window.location.href || ""), this._pageTracking.stop(e, i, n, a), this.config.autoTrackPageVisitTime && this._pageVisitTimeManager.trackPreviousPageVisit(e, i)
                    } catch (e) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, "stopTrackPage failed, page view will not be collected: " + t.Util.dump(e))
                    }
                }, i.prototype.trackPageView = function(e, i, n, a) {
                    try {
                        "string" != typeof e && (e = window.document && window.document.title || ""), "string" != typeof i && (i = window.location && window.location.href || ""), this.trackPageViewInternal(e, i, n, a), this.config.autoTrackPageVisitTime && this._pageVisitTimeManager.trackPreviousPageVisit(e, i)
                    } catch (e) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, "trackPageView failed, page view will not be collected: " + t.Util.dump(e))
                    }
                }, i.prototype.trackPageViewInternal = function(e, i, n, a) {
                    var o, r, s, l = this;
                    t.Telemetry.PageViewPerformance.isPerformanceTimingSupported() ? (o = t.Telemetry.PageViewPerformance.getPerformanceTiming().navigationStart, this.config.overridePageViewDuration && (r = t.Telemetry.PageViewPerformance.getDuration(o, +new Date), this.sendPageViewInternal(e, i, r, n, a), this.flush()), 6e4, s = setInterval((function() {
                        var r, c, u;
                        try {
                            t.Telemetry.PageViewPerformance.isPerformanceTimingDataReady() ? (clearInterval(s), (r = new t.Telemetry.PageViewPerformance(e, i, null, n, a)).getIsValid() && (l.config.overridePageViewDuration || l.sendPageViewInternal(e, i, r.getDurationMs(), n, a), c = new t.Telemetry.Common.Data(t.Telemetry.PageViewPerformance.dataType, r), u = new t.Telemetry.Common.Envelope(c, t.Telemetry.PageViewPerformance.envelopeType), l.context.track(u)), l.flush()) : t.Telemetry.PageViewPerformance.getDuration(o, +new Date) > 6e4 && (clearInterval(s), l.config.overridePageViewDuration || (l.sendPageViewInternal(e, i, 6e4, n, a), l.flush()))
                        } catch (e) {
                            t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, "trackPageView failed on page load calculation: " + t.Util.dump(e))
                        }
                    }), 100)) : t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, "trackPageView failed: navigation timing API used for calculation of page duration is not supported in this browser.")
                }, i.prototype.startTrackEvent = function(e) {
                    try {
                        this._eventTracking.start(e)
                    } catch (e) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, "startTrackEvent failed, event will not be collected: " + t.Util.dump(e))
                    }
                }, i.prototype.stopTrackEvent = function(e, i, n) {
                    try {
                        this._eventTracking.stop(e, void 0, i, n)
                    } catch (e) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, "stopTrackEvent failed, event will not be collected: " + t.Util.dump(e))
                    }
                }, i.prototype.trackEvent = function(e, i, n) {
                    try {
                        var a = new t.Telemetry.Event(e, i, n),
                            o = new t.Telemetry.Common.Data(t.Telemetry.Event.dataType, a),
                            r = new t.Telemetry.Common.Envelope(o, t.Telemetry.Event.envelopeType);
                        this.context.track(r)
                    } catch (e) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, "trackEvent failed, event will not be collected: " + t.Util.dump(e))
                    }
                }, i.prototype.trackAjax = function(e, i, n, a) {
                    var o = new t.Telemetry.RemoteDependencyData(e, i, n, a),
                        r = new t.Telemetry.Common.Data(t.Telemetry.RemoteDependencyData.dataType, o),
                        s = new t.Telemetry.Common.Envelope(r, "Microsoft.ApplicationInsights." + this.config.instrumentationKey.replace(/-/g, "") + ".RemoteDependency");
                    this.context.track(s)
                }, i.prototype.trackException = function(e, i, n, a) {
                    try {
                        if (!t.Util.isError(e)) try {
                            throw new Error(e)
                        } catch (t) {
                            e = t
                        }
                        var o = new t.Telemetry.Exception(e, i, n, a),
                            r = new t.Telemetry.Common.Data(t.Telemetry.Exception.dataType, o),
                            s = new t.Telemetry.Common.Envelope(r, t.Telemetry.Exception.envelopeType);
                        this.context.track(s)
                    } catch (e) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, "trackException failed, exception will not be collected: " + t.Util.dump(e))
                    }
                }, i.prototype.trackMetric = function(e, i, n, a, o, r) {
                    try {
                        var s = new t.Telemetry.Metric(e, i, n, a, o, r),
                            l = new t.Telemetry.Common.Data(t.Telemetry.Metric.dataType, s),
                            c = new t.Telemetry.Common.Envelope(l, t.Telemetry.Metric.envelopeType);
                        this.context.track(c)
                    } catch (e) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, "trackMetric failed, metric will not be collected: " + t.Util.dump(e))
                    }
                }, i.prototype.trackTrace = function(e, i) {
                    try {
                        var n = new t.Telemetry.Trace(e, i),
                            a = new t.Telemetry.Common.Data(t.Telemetry.Trace.dataType, n),
                            o = new t.Telemetry.Common.Envelope(a, t.Telemetry.Trace.envelopeType);
                        this.context.track(o)
                    } catch (e) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.WARNING, "trackTrace failed, trace will not be collected: " + t.Util.dump(e))
                    }
                }, i.prototype.trackPageVisitTime = function(e, t, i) {
                    var n = {
                        PageName: e,
                        PageUrl: t
                    };
                    this.trackMetric("PageVisitTime", i, 1, i, i, n)
                }, i.prototype.flush = function() {
                    try {
                        this.context._sender.triggerSend()
                    } catch (e) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, "flush failed, telemetry will not be collected: " + t.Util.dump(e))
                    }
                }, i.prototype.setAuthenticatedUserContext = function(e, i) {
                    try {
                        this.context.user.setAuthenticatedUserContext(e, i)
                    } catch (e) {
                        t._InternalLogging.throwInternalUserActionable(t.LoggingSeverity.WARNING, "Setting auth user context failed. " + t.Util.dump(e))
                    }
                }, i.prototype.clearAuthenticatedUserContext = function() {
                    try {
                        this.context.user.clearAuthenticatedUserContext()
                    } catch (e) {
                        t._InternalLogging.throwInternalUserActionable(t.LoggingSeverity.WARNING, "Clearing auth user context failed. " + t.Util.dump(e))
                    }
                }, i.prototype.SendCORSException = function(i) {
                    var n, a, o = e.ApplicationInsights.Telemetry.Exception.CreateSimpleException("Script error.", "Error", "unknown", "unknown", "The browser\u2019s same-origin policy prevents us from getting the details of this exception.The exception occurred in a script loaded from an origin different than the web page.For cross- domain error reporting you can use crossorigin attribute together with appropriate CORS HTTP headers.For more information please see http://www.w3.org/TR/cors/.", 0, null);
                    o.properties = i, n = new t.Telemetry.Common.Data(t.Telemetry.Exception.dataType, o), a = new t.Telemetry.Common.Envelope(n, t.Telemetry.Exception.envelopeType), this.context.track(a)
                }, i.prototype._onerror = function(e, i, n, a, o) {
                    var r, s, l, c;
                    try {
                        r = {
                            url: i || document.URL
                        }, t.Util.isCrossOriginError(e, i, n, a, o) ? this.SendCORSException(r) : (t.Util.isError(o) || (s = "window.onerror@" + r.url + ":" + n + ":" + (a || 0), (o = new Error(e)).stack = s), this.trackException(o, null, r))
                    } catch (e) {
                        l = o ? o.name + ", " + o.message : "null", c = t.Util.dump(e), t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, "_onerror threw " + c + " while logging error, error will not be collected: " + l)
                    }
                }, i
            }(), t.AppInsights = i, n = function() {
                function e(e) {
                    this._name = e, this._events = {}
                }
                return e.prototype.start = function(e) {
                    void 0 !== this._events[e] && t._InternalLogging.throwInternalUserActionable(t.LoggingSeverity.WARNING, "start" + this._name + " was called more than once for this event without calling stop" + this._name + ". key is '" + e + "'"), this._events[e] = +new Date
                }, e.prototype.stop = function(e, i, n, a) {
                    var o, r, s = this._events[e];
                    isNaN(s) ? t._InternalLogging.throwInternalUserActionable(t.LoggingSeverity.WARNING, "stop" + this._name + " was called without a corresponding start" + this._name + " . Event name is '" + e + "'") : (o = +new Date, r = t.Telemetry.PageViewPerformance.getDuration(s, o), this.action(e, i, r, n, a)), delete this._events[e], this._events[e] = void 0
                }, e
            }()
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(e) {
        "use strict";
        var t = function(e) {
            function t() {
                this.ver = 2, this.properties = {}, this.measurements = {}, e.call(this)
            }
            return __extends(t, e), t
        }(e.PageViewData);
        e.AjaxCallData = t
    }(AI || (AI = {})),
    function(e) {
        "use strict";
        var t = function(e) {
            function t() {
                this.ver = 2, this.properties = {}, this.measurements = {}, e.call(this)
            }
            return __extends(t, e), t
        }(Microsoft.Telemetry.Domain);
        e.RequestData = t
    }(AI || (AI = {})),
    function(e) {
        ! function(t) {
            "use strict";
            var i = function() {
                function i(t) {
                    t.queue = t.queue || [];
                    var n = t.config || {};
                    if (n && !n.instrumentationKey)
                        if ((n = t).iKey) e.ApplicationInsights.Version = "0.10.0.0", n.instrumentationKey = n.iKey;
                        else {
                            if (!n.applicationInsightsId) throw new Error("Cannot load Application Insights SDK, no instrumentationKey was provided.");
                            e.ApplicationInsights.Version = "0.7.2.0", n.instrumentationKey = n.applicationInsightsId
                        } n = i.getDefaultConfig(n), this.snippet = t, this.config = n
                }
                return i.prototype.loadAppInsights = function() {
                    var t, i, n, a = new e.ApplicationInsights.AppInsights(this.config);
                    return this.config.iKey && (t = a.trackPageView, a.trackPageView = function(e, i, n) {
                        t.apply(a, [null, e, i, n])
                    }), i = "logPageView", "function" == typeof this.snippet[i] && (a[i] = function(e, t, i) {
                        a.trackPageView(null, e, t, i)
                    }), n = "logEvent", "function" == typeof this.snippet[n] && (a[n] = function(e, t, i) {
                        a.trackEvent(e, t, i)
                    }), a
                }, i.prototype.emptyQueue = function() {
                    var i, n, a;
                    try {
                        if (e.ApplicationInsights.Util.isArray(this.snippet.queue)) {
                            for (i = this.snippet.queue.length, n = 0; n < i; n++)(0, this.snippet.queue[n])();
                            this.snippet.queue = void 0, delete this.snippet.queue
                        }
                    } catch (i) {
                        a = "Failed to send queued telemetry", i && "function" == typeof i.toString && (a += ": " + i.toString()), e.ApplicationInsights._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.WARNING, a)
                    }
                }, i.prototype.pollInteralLogs = function(t) {
                    return setInterval((function() {
                        for (var i = e.ApplicationInsights._InternalLogging.queue, n = i.length, a = 0; a < n; a++) t.trackTrace(i[a]);
                        i.length = 0
                    }), this.config.diagnosticLogInterval)
                }, i.prototype.addHousekeepingBeforeUnload = function(t) {
                    if ("onbeforeunload" in window) {
                        e.ApplicationInsights.Util.addEventHandler("beforeunload", (function() {
                            t.context._sender.triggerSend(), t.context._sessionManager.backup()
                        })) || e.ApplicationInsights._InternalLogging.throwInternalNonUserActionable(e.ApplicationInsights.LoggingSeverity.CRITICAL, "Could not add handler for beforeunload")
                    }
                }, i.getDefaultConfig = function(e) {
                    return e || (e = {}), e.endpointUrl = e.endpointUrl || "//dc.services.visualstudio.com/v2/track", e.accountId = e.accountId, e.appUserId = e.appUserId, e.sessionRenewalMs = 18e5, e.sessionExpirationMs = 864e5, e.maxBatchSizeInBytes = e.maxBatchSizeInBytes > 0 ? e.maxBatchSizeInBytes : 1e6, e.maxBatchInterval = isNaN(e.maxBatchInterval) ? 15e3 : e.maxBatchInterval, e.enableDebug = t.Util.stringToBoolOrDefault(e.enableDebug), e.autoCollectErrors = void 0 === e.autoCollectErrors || null === e.autoCollectErrors || t.Util.stringToBoolOrDefault(e.autoCollectErrors), e.disableTelemetry = t.Util.stringToBoolOrDefault(e.disableTelemetry), e.verboseLogging = t.Util.stringToBoolOrDefault(e.verboseLogging), e.emitLineDelimitedJson = t.Util.stringToBoolOrDefault(e.emitLineDelimitedJson), e.diagnosticLogInterval = e.diagnosticLogInterval || 1e4, e.autoTrackPageVisitTime = t.Util.stringToBoolOrDefault(e.autoTrackPageVisitTime), (isNaN(e.samplingPercentage) || e.samplingPercentage <= 0 || e.samplingPercentage >= 100) && (e.samplingPercentage = 100), e.autoTrackAjax = void 0 !== e.autoTrackAjax && null !== e.autoTrackAjax && t.Util.stringToBoolOrDefault(e.autoTrackAjax), e
                }, i
            }();
            t.Initialization = i
        }(e.ApplicationInsights || (e.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})), initializeAppInsights();