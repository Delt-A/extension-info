_xamzrequire = function() {
    function e(t, r, n) {
        function i(o, a) {
            if (!r[o]) {
                if (!t[o]) {
                    var u = "function" == typeof require && require;
                    if (!a && u) return u(o, !0);
                    if (s) return s(o, !0);
                    var c = new Error("Cannot find module '" + o + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var h = r[o] = {
                    exports: {}
                };
                t[o][0].call(h.exports, function(e) {
                    return i(t[o][1][e] || e)
                }, h, h.exports, e, t, r, n)
            }
            return r[o].exports
        }
        for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) i(n[o]);
        return i
    }
    return e
}()({
    38: [function(e, t, r) {
        var n = {
            util: e("./util")
        };
        ({}).toString(), t.exports = n, n.util.update(n, {
            VERSION: "2.331.0",
            Signers: {},
            Protocol: {
                Json: e("./protocol/json"),
                Query: e("./protocol/query"),
                Rest: e("./protocol/rest"),
                RestJson: e("./protocol/rest_json"),
                RestXml: e("./protocol/rest_xml")
            },
            XML: {
                Builder: e("./xml/builder"),
                Parser: null
            },
            JSON: {
                Builder: e("./json/builder"),
                Parser: e("./json/parser")
            },
            Model: {
                Api: e("./model/api"),
                Operation: e("./model/operation"),
                Shape: e("./model/shape"),
                Paginator: e("./model/paginator"),
                ResourceWaiter: e("./model/resource_waiter")
            },
            apiLoader: e("./api_loader")
        }), e("./sequential_executor"), e("./service"), e("./config"), e("./http"), e("./event_listeners"), e("./request"), e("./response"), e("./resource_waiter"), e("./signers/request_signer"), e("./param_validator"), n.events = new n.SequentialExecutor
    }, {
        "./api_loader": 27,
        "./config": 37,
        "./event_listeners": 58,
        "./http": 59,
        "./json/builder": 61,
        "./json/parser": 62,
        "./model/api": 63,
        "./model/operation": 65,
        "./model/paginator": 66,
        "./model/resource_waiter": 67,
        "./model/shape": 68,
        "./param_validator": 69,
        "./protocol/json": 71,
        "./protocol/query": 72,
        "./protocol/rest": 73,
        "./protocol/rest_json": 74,
        "./protocol/rest_xml": 75,
        "./request": 81,
        "./resource_waiter": 82,
        "./response": 83,
        "./sequential_executor": 85,
        "./service": 86,
        "./signers/request_signer": 105,
        "./util": 113,
        "./xml/builder": 115
    }],
    115: [function(e, t, r) {
        function n() {}

        function i(e, t, r) {
            switch (r.type) {
                case "structure":
                    return s(e, t, r);
                case "map":
                    return o(e, t, r);
                case "list":
                    return a(e, t, r);
                default:
                    return u(e, t, r)
            }
        }

        function s(e, t, r) {
            h.arrayEach(r.memberNames, function(n) {
                var s = r.members[n];
                if ("body" === s.location) {
                    var o = t[n],
                        a = s.name;
                    if (void 0 !== o && null !== o)
                        if (s.isXmlAttribute) e.addAttribute(a, o);
                        else if (s.flattened) i(e, o, s);
                    else {
                        var u = new l(a);
                        e.addChildNode(u), c(u, s), i(u, o, s)
                    }
                }
            })
        }

        function o(e, t, r) {
            var n = r.key.name || "key",
                s = r.value.name || "value";
            h.each(t, function(t, o) {
                var a = new l(r.flattened ? r.name : "entry");
                e.addChildNode(a);
                var u = new l(n),
                    c = new l(s);
                a.addChildNode(u), a.addChildNode(c), i(u, t, r.key), i(c, o, r.value)
            })
        }

        function a(e, t, r) {
            r.flattened ? h.arrayEach(t, function(t) {
                var n = r.member.name || r.name,
                    s = new l(n);
                e.addChildNode(s), i(s, t, r.member)
            }) : h.arrayEach(t, function(t) {
                var n = r.member.name || "member",
                    s = new l(n);
                e.addChildNode(s), i(s, t, r.member)
            })
        }

        function u(e, t, r) {
            e.addChildNode(new f(r.toWireFormat(t)))
        }

        function c(e, t, r) {
            var n, i = "xmlns";
            t.xmlNamespaceUri ? (n = t.xmlNamespaceUri, t.xmlNamespacePrefix && (i += ":" + t.xmlNamespacePrefix)) : r && t.api.xmlNamespaceUri && (n = t.api.xmlNamespaceUri), n && e.addAttribute(i, n)
        }
        var h = e("../util"),
            l = e("./xml-node").XmlNode,
            f = e("./xml-text").XmlText;
        n.prototype.toXML = function(e, t, r, n) {
            var s = new l(r);
            return c(s, t, !0), i(s, e, t), s.children.length > 0 || n ? s.toString() : ""
        }, t.exports = n
    }, {
        "../util": 113,
        "./xml-node": 118,
        "./xml-text": 119
    }],
    119: [function(e, t, r) {
        function n(e) {
            this.value = e
        }
        var i = e("./escape-element").escapeElement;
        n.prototype.toString = function() {
            return i("" + this.value)
        }, t.exports = {
            XmlText: n
        }
    }, {
        "./escape-element": 117
    }],
    117: [function(e, t, r) {
        function n(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
        t.exports = {
            escapeElement: n
        }
    }, {}],
    118: [function(e, t, r) {
        function n(e, t) {
            void 0 === t && (t = []), this.name = e, this.children = t, this.attributes = {}
        }
        var i = e("./escape-attribute").escapeAttribute;
        n.prototype.addAttribute = function(e, t) {
            return this.attributes[e] = t, this
        }, n.prototype.addChildNode = function(e) {
            return this.children.push(e), this
        }, n.prototype.removeAttribute = function(e) {
            return delete this.attributes[e], this
        }, n.prototype.toString = function() {
            for (var e = Boolean(this.children.length), t = "<" + this.name, r = this.attributes, n = 0, s = Object.keys(r); n < s.length; n++) {
                var o = s[n],
                    a = r[o];
                void 0 !== a && null !== a && (t += " " + o + '="' + i("" + a) + '"')
            }
            return t += e ? ">" + this.children.map(function(e) {
                return e.toString()
            }).join("") + "</" + this.name + ">" : "/>"
        }, t.exports = {
            XmlNode: n
        }
    }, {
        "./escape-attribute": 116
    }],
    116: [function(e, t, r) {
        function n(e) {
            return e.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }
        t.exports = {
            escapeAttribute: n
        }
    }, {}],
    105: [function(e, t, r) {
        var n = e("../core"),
            i = n.util.inherit;
        n.Signers.RequestSigner = i({
            constructor: function(e) {
                this.request = e
            },
            setServiceClientId: function(e) {
                this.serviceClientId = e
            },
            getServiceClientId: function() {
                return this.serviceClientId
            }
        }), n.Signers.RequestSigner.getVersion = function(e) {
            switch (e) {
                case "v2":
                    return n.Signers.V2;
                case "v3":
                    return n.Signers.V3;
                case "v4":
                    return n.Signers.V4;
                case "s3":
                    return n.Signers.S3;
                case "v3https":
                    return n.Signers.V3Https
            }
            throw new Error("Unknown signing version " + e)
        }, e("./v2"), e("./v3"), e("./v3https"), e("./v4"), e("./s3"), e("./presign")
    }, {
        "../core": 38,
        "./presign": 104,
        "./s3": 106,
        "./v2": 107,
        "./v3": 108,
        "./v3https": 109,
        "./v4": 110
    }],
    110: [function(e, t, r) {
        var n = e("../core"),
            i = e("./v4_credentials"),
            s = n.util.inherit;
        n.Signers.V4 = s(n.Signers.RequestSigner, {
            constructor: function(e, t, r) {
                n.Signers.RequestSigner.call(this, e), this.serviceName = t, r = r || {}, this.signatureCache = "boolean" != typeof r.signatureCache || r.signatureCache, this.operation = r.operation
            },
            algorithm: "AWS4-HMAC-SHA256",
            addAuthorization: function(e, t) {
                var r = n.util.date.iso8601(t).replace(/[:\-]|\.\d{3}/g, "");
                this.isPresigned() ? this.updateForPresigned(e, r) : this.addHeaders(e, r), this.request.headers.Authorization = this.authorization(e, r)
            },
            addHeaders: function(e, t) {
                this.request.headers["X-Amz-Date"] = t, e.sessionToken && (this.request.headers["x-amz-security-token"] = e.sessionToken)
            },
            updateForPresigned: function(e, t) {
                var r = this.credentialString(t),
                    i = {
                        "X-Amz-Date": t,
                        "X-Amz-Algorithm": this.algorithm,
                        "X-Amz-Credential": e.accessKeyId + "/" + r,
                        "X-Amz-Expires": this.request.headers["presigned-expires"],
                        "X-Amz-SignedHeaders": this.signedHeaders()
                    };
                e.sessionToken && (i["X-Amz-Security-Token"] = e.sessionToken), this.request.headers["Content-Type"] && (i["Content-Type"] = this.request.headers["Content-Type"]), this.request.headers["Content-MD5"] && (i["Content-MD5"] = this.request.headers["Content-MD5"]), this.request.headers["Cache-Control"] && (i["Cache-Control"] = this.request.headers["Cache-Control"]), n.util.each.call(this, this.request.headers, function(e, t) {
                    if ("presigned-expires" !== e && this.isSignableHeader(e)) {
                        var r = e.toLowerCase();
                        0 === r.indexOf("x-amz-meta-") ? i[r] = t : 0 === r.indexOf("x-amz-") && (i[e] = t)
                    }
                });
                var s = this.request.path.indexOf("?") >= 0 ? "&" : "?";
                this.request.path += s + n.util.queryParamsToString(i)
            },
            authorization: function(e, t) {
                var r = [],
                    n = this.credentialString(t);
                return r.push(this.algorithm + " Credential=" + e.accessKeyId + "/" + n), r.push("SignedHeaders=" + this.signedHeaders()), r.push("Signature=" + this.signature(e, t)), r.join(", ")
            },
            signature: function(e, t) {
                var r = i.getSigningKey(e, t.substr(0, 8), this.request.region, this.serviceName, this.signatureCache);
                return n.util.crypto.hmac(r, this.stringToSign(t), "hex")
            },
            stringToSign: function(e) {
                var t = [];
                return t.push("AWS4-HMAC-SHA256"), t.push(e), t.push(this.credentialString(e)), t.push(this.hexEncodedHash(this.canonicalString())), t.join("\n")
            },
            canonicalString: function() {
                var e = [],
                    t = this.request.pathname();
                return "s3" !== this.serviceName && (t = n.util.uriEscapePath(t)), e.push(this.request.method), e.push(t), e.push(this.request.search()), e.push(this.canonicalHeaders() + "\n"), e.push(this.signedHeaders()), e.push(this.hexEncodedBodyHash()), e.join("\n")
            },
            canonicalHeaders: function() {
                var e = [];
                n.util.each.call(this, this.request.headers, function(t, r) {
                    e.push([t, r])
                }), e.sort(function(e, t) {
                    return e[0].toLowerCase() < t[0].toLowerCase() ? -1 : 1
                });
                var t = [];
                return n.util.arrayEach.call(this, e, function(e) {
                    var r = e[0].toLowerCase();
                    if (this.isSignableHeader(r)) {
                        var i = e[1];
                        if (void 0 === i || null === i || "function" != typeof i.toString) throw n.util.error(new Error("Header " + r + " contains invalid value"), {
                            code: "InvalidHeader"
                        });
                        t.push(r + ":" + this.canonicalHeaderValues(i.toString()))
                    }
                }), t.join("\n")
            },
            canonicalHeaderValues: function(e) {
                return e.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "")
            },
            signedHeaders: function() {
                var e = [];
                return n.util.each.call(this, this.request.headers, function(t) {
                    t = t.toLowerCase(), this.isSignableHeader(t) && e.push(t)
                }), e.sort().join(";")
            },
            credentialString: function(e) {
                return i.createScope(e.substr(0, 8), this.request.region, this.serviceName)
            },
            hexEncodedHash: function(e) {
                return n.util.crypto.sha256(e, "hex")
            },
            hexEncodedBodyHash: function() {
                var e = this.request;
                return this.isPresigned() && "s3" === this.serviceName && !e.body ? "UNSIGNED-PAYLOAD" : e.headers["X-Amz-Content-Sha256"] ? e.headers["X-Amz-Content-Sha256"] : this.hexEncodedHash(this.request.body || "")
            },
            unsignableHeaders: ["authorization", "content-type", "content-length", "user-agent", "presigned-expires", "expect", "x-amzn-trace-id"],
            isSignableHeader: function(e) {
                return 0 === e.toLowerCase().indexOf("x-amz-") || this.unsignableHeaders.indexOf(e) < 0
            },
            isPresigned: function() {
                return !!this.request.headers["presigned-expires"]
            }
        }), t.exports = n.Signers.V4
    }, {
        "../core": 38,
        "./v4_credentials": 111
    }],
    111: [function(e, t, r) {
        var n = e("../core"),
            i = {},
            s = [];
        t.exports = {
            createScope: function(e, t, r) {
                return [e.substr(0, 8), t, r, "aws4_request"].join("/")
            },
            getSigningKey: function(e, t, r, o, a) {
                var u = n.util.crypto.hmac(e.secretAccessKey, e.accessKeyId, "base64"),
                    c = [u, t, r, o].join("_");
                if ((a = !1 !== a) && c in i) return i[c];
                var h = n.util.crypto.hmac("AWS4" + e.secretAccessKey, t, "buffer"),
                    l = n.util.crypto.hmac(h, r, "buffer"),
                    f = n.util.crypto.hmac(l, o, "buffer"),
                    p = n.util.crypto.hmac(f, "aws4_request", "buffer");
                return a && (i[c] = p, s.push(c), s.length > 50 && delete i[s.shift()]), p
            },
            emptyCache: function() {
                i = {}, s = []
            }
        }
    }, {
        "../core": 38
    }],
    109: [function(e, t, r) {
        var n = e("../core"),
            i = n.util.inherit;
        e("./v3"), n.Signers.V3Https = i(n.Signers.V3, {
            authorization: function(e) {
                return "AWS3-HTTPS AWSAccessKeyId=" + e.accessKeyId + ",Algorithm=HmacSHA256,Signature=" + this.signature(e)
            },
            stringToSign: function() {
                return this.request.headers["X-Amz-Date"]
            }
        }), t.exports = n.Signers.V3Https
    }, {
        "../core": 38,
        "./v3": 108
    }],
    108: [function(e, t, r) {
        var n = e("../core"),
            i = n.util.inherit;
        n.Signers.V3 = i(n.Signers.RequestSigner, {
            addAuthorization: function(e, t) {
                var r = n.util.date.rfc822(t);
                this.request.headers["X-Amz-Date"] = r, e.sessionToken && (this.request.headers["x-amz-security-token"] = e.sessionToken), this.request.headers["X-Amzn-Authorization"] = this.authorization(e, r)
            },
            authorization: function(e) {
                return "AWS3 AWSAccessKeyId=" + e.accessKeyId + ",Algorithm=HmacSHA256,SignedHeaders=" + this.signedHeaders() + ",Signature=" + this.signature(e)
            },
            signedHeaders: function() {
                var e = [];
                return n.util.arrayEach(this.headersToSign(), function(t) {
                    e.push(t.toLowerCase())
                }), e.sort().join(";")
            },
            canonicalHeaders: function() {
                var e = this.request.headers,
                    t = [];
                return n.util.arrayEach(this.headersToSign(), function(r) {
                    t.push(r.toLowerCase().trim() + ":" + String(e[r]).trim())
                }), t.sort().join("\n") + "\n"
            },
            headersToSign: function() {
                var e = [];
                return n.util.each(this.request.headers, function(t) {
                    ("Host" === t || "Content-Encoding" === t || t.match(/^X-Amz/i)) && e.push(t)
                }), e
            },
            signature: function(e) {
                return n.util.crypto.hmac(e.secretAccessKey, this.stringToSign(), "base64")
            },
            stringToSign: function() {
                var e = [];
                return e.push(this.request.method), e.push("/"), e.push(""), e.push(this.canonicalHeaders()), e.push(this.request.body), n.util.crypto.sha256(e.join("\n"))
            }
        }), t.exports = n.Signers.V3
    }, {
        "../core": 38
    }],
    107: [function(e, t, r) {
        var n = e("../core"),
            i = n.util.inherit;
        n.Signers.V2 = i(n.Signers.RequestSigner, {
            addAuthorization: function(e, t) {
                t || (t = n.util.date.getDate());
                var r = this.request;
                r.params.Timestamp = n.util.date.iso8601(t), r.params.SignatureVersion = "2", r.params.SignatureMethod = "HmacSHA256", r.params.AWSAccessKeyId = e.accessKeyId, e.sessionToken && (r.params.SecurityToken = e.sessionToken), delete r.params.Signature, r.params.Signature = this.signature(e), r.body = n.util.queryParamsToString(r.params), r.headers["Content-Length"] = r.body.length
            },
            signature: function(e) {
                return n.util.crypto.hmac(e.secretAccessKey, this.stringToSign(), "base64")
            },
            stringToSign: function() {
                var e = [];
                return e.push(this.request.method), e.push(this.request.endpoint.host.toLowerCase()), e.push(this.request.pathname()), e.push(n.util.queryParamsToString(this.request.params)), e.join("\n")
            }
        }), t.exports = n.Signers.V2
    }, {
        "../core": 38
    }],
    106: [function(e, t, r) {
        var n = e("../core"),
            i = n.util.inherit;
        n.Signers.S3 = i(n.Signers.RequestSigner, {
            subResources: {
                acl: 1,
                accelerate: 1,
                analytics: 1,
                cors: 1,
                lifecycle: 1,
                delete: 1,
                inventory: 1,
                location: 1,
                logging: 1,
                metrics: 1,
                notification: 1,
                partNumber: 1,
                policy: 1,
                requestPayment: 1,
                replication: 1,
                restore: 1,
                tagging: 1,
                torrent: 1,
                uploadId: 1,
                uploads: 1,
                versionId: 1,
                versioning: 1,
                versions: 1,
                website: 1
            },
            responseHeaders: {
                "response-content-type": 1,
                "response-content-language": 1,
                "response-expires": 1,
                "response-cache-control": 1,
                "response-content-disposition": 1,
                "response-content-encoding": 1
            },
            addAuthorization: function(e, t) {
                this.request.headers["presigned-expires"] || (this.request.headers["X-Amz-Date"] = n.util.date.rfc822(t)), e.sessionToken && (this.request.headers["x-amz-security-token"] = e.sessionToken);
                var r = this.sign(e.secretAccessKey, this.stringToSign()),
                    i = "AWS " + e.accessKeyId + ":" + r;
                this.request.headers.Authorization = i
            },
            stringToSign: function() {
                var e = this.request,
                    t = [];
                t.push(e.method), t.push(e.headers["Content-MD5"] || ""), t.push(e.headers["Content-Type"] || ""), t.push(e.headers["presigned-expires"] || "");
                var r = this.canonicalizedAmzHeaders();
                return r && t.push(r), t.push(this.canonicalizedResource()), t.join("\n")
            },
            canonicalizedAmzHeaders: function() {
                var e = [];
                n.util.each(this.request.headers, function(t) {
                    t.match(/^x-amz-/i) && e.push(t)
                }), e.sort(function(e, t) {
                    return e.toLowerCase() < t.toLowerCase() ? -1 : 1
                });
                var t = [];
                return n.util.arrayEach.call(this, e, function(e) {
                    t.push(e.toLowerCase() + ":" + String(this.request.headers[e]))
                }), t.join("\n")
            },
            canonicalizedResource: function() {
                var e = this.request,
                    t = e.path.split("?"),
                    r = t[0],
                    i = t[1],
                    s = "";
                if (e.virtualHostedBucket && (s += "/" + e.virtualHostedBucket), s += r, i) {
                    var o = [];
                    n.util.arrayEach.call(this, i.split("&"), function(e) {
                        var t = e.split("=")[0],
                            r = e.split("=")[1];
                        if (this.subResources[t] || this.responseHeaders[t]) {
                            var n = {
                                name: t
                            };
                            void 0 !== r && (this.subResources[t] ? n.value = r : n.value = decodeURIComponent(r)), o.push(n)
                        }
                    }), o.sort(function(e, t) {
                        return e.name < t.name ? -1 : 1
                    }), o.length && (i = [], n.util.arrayEach(o, function(e) {
                        void 0 === e.value ? i.push(e.name) : i.push(e.name + "=" + e.value)
                    }), s += "?" + i.join("&"))
                }
                return s
            },
            sign: function(e, t) {
                return n.util.crypto.hmac(e, t, "base64", "sha1")
            }
        }), t.exports = n.Signers.S3
    }, {
        "../core": 38
    }],
    104: [function(e, t, r) {
        function n(e) {
            var t = e.httpRequest.headers[a],
                r = e.service.getSignerClass(e);
            if (delete e.httpRequest.headers["User-Agent"], delete e.httpRequest.headers["X-Amz-User-Agent"], r === s.Signers.V4) {
                if (t > 604800) {
                    throw s.util.error(new Error, {
                        code: "InvalidExpiryTime",
                        message: "Presigning does not support expiry time greater than a week with SigV4 signing.",
                        retryable: !1
                    })
                }
                e.httpRequest.headers[a] = t
            } else {
                if (r !== s.Signers.S3) throw s.util.error(new Error, {
                    message: "Presigning only supports S3 or SigV4 signing.",
                    code: "UnsupportedSigner",
                    retryable: !1
                });
                var n = e.service ? e.service.getSkewCorrectedDate() : s.util.date.getDate();
                e.httpRequest.headers[a] = parseInt(s.util.date.unixTimestamp(n) + t, 10).toString()
            }
        }

        function i(e) {
            var t = e.httpRequest.endpoint,
                r = s.util.urlParse(e.httpRequest.path),
                n = {};
            r.search && (n = s.util.queryStringParse(r.search.substr(1)));
            var i = e.httpRequest.headers.Authorization.split(" ");
            if ("AWS" === i[0]) i = i[1].split(":"), n.AWSAccessKeyId = i[0], n.Signature = i[1], s.util.each(e.httpRequest.headers, function(e, t) {
                e === a && (e = "Expires"), 0 === e.indexOf("x-amz-meta-") && (delete n[e], e = e.toLowerCase()), n[e] = t
            }), delete e.httpRequest.headers[a], delete n.Authorization, delete n.Host;
            else if ("AWS4-HMAC-SHA256" === i[0]) {
                i.shift();
                var o = i.join(" "),
                    u = o.match(/Signature=(.*?)(?:,|\s|\r?\n|$)/)[1];
                n["X-Amz-Signature"] = u, delete n.Expires
            }
            t.pathname = r.pathname, t.search = s.util.queryParamsToString(n)
        }
        var s = e("../core"),
            o = s.util.inherit,
            a = "presigned-expires";
        s.Signers.Presign = o({
            sign: function(e, t, r) {
                if (e.httpRequest.headers[a] = t || 3600, e.on("build", n), e.on("sign", i), e.removeListener("afterBuild", s.EventListeners.Core.SET_CONTENT_LENGTH), e.removeListener("afterBuild", s.EventListeners.Core.COMPUTE_SHA256), e.emit("beforePresign", [e]), !r) {
                    if (e.build(), e.response.error) throw e.response.error;
                    return s.util.urlFormat(e.httpRequest.endpoint)
                }
                e.build(function() {
                    this.response.error ? r(this.response.error) : r(null, s.util.urlFormat(e.httpRequest.endpoint))
                })
            }
        }), t.exports = s.Signers.Presign
    }, {
        "../core": 38
    }],
    86: [function(e, t, r) {
        (function(r) {
            var n = e("./core"),
                i = e("./model/api"),
                s = e("./region_config"),
                o = n.util.inherit,
                a = 0;
            n.Service = o({
                constructor: function(e) {
                    if (!this.loadServiceClass) throw n.util.error(new Error, "Service must be constructed with `new' operator");
                    var t = this.loadServiceClass(e || {});
                    if (t) {
                        var r = n.util.copy(e),
                            i = new t(e);
                        return Object.defineProperty(i, "_originalConfig", {
                            get: function() {
                                return r
                            },
                            enumerable: !1,
                            configurable: !0
                        }), i._clientId = ++a, i
                    }
                    this.initialize(e)
                },
                initialize: function(e) {
                    var t = n.config[this.serviceIdentifier];
                    if (this.config = new n.Config(n.config), t && this.config.update(t, !0), e && this.config.update(e, !0), this.validateService(), this.config.endpoint || s(this), this.config.endpoint = this.endpointFromTemplate(this.config.endpoint), this.setEndpoint(this.config.endpoint), n.SequentialExecutor.call(this), n.Service.addDefaultMonitoringListeners(this), this.config.clientSideMonitoring && this.publisher) {
                        var i = this.publisher;
                        this.addNamedListener("PUBLISH_API_CALL", "apiCall", function(e) {
                            r.nextTick(function() {
                                i.eventHandler(e)
                            })
                        }), this.addNamedListener("PUBLISH_API_ATTEMPT", "apiCallAttempt", function(e) {
                            r.nextTick(function() {
                                i.eventHandler(e)
                            })
                        })
                    }
                },
                validateService: function() {},
                loadServiceClass: function(e) {
                    var t = e;
                    if (n.util.isEmpty(this.api)) {
                        if (t.apiConfig) return n.Service.defineServiceApi(this.constructor, t.apiConfig);
                        if (this.constructor.services) {
                            t = new n.Config(n.config), t.update(e, !0);
                            var r = t.apiVersions[this.constructor.serviceIdentifier];
                            return r = r || t.apiVersion, this.getLatestServiceClass(r)
                        }
                        return null
                    }
                    return null
                },
                getLatestServiceClass: function(e) {
                    return e = this.getLatestServiceVersion(e), null === this.constructor.services[e] && n.Service.defineServiceApi(this.constructor, e), this.constructor.services[e]
                },
                getLatestServiceVersion: function(e) {
                    if (!this.constructor.services || 0 === this.constructor.services.length) throw new Error("No services defined on " + this.constructor.serviceIdentifier);
                    if (e ? n.util.isType(e, Date) && (e = n.util.date.iso8601(e).split("T")[0]) : e = "latest", Object.hasOwnProperty(this.constructor.services, e)) return e;
                    for (var t = Object.keys(this.constructor.services).sort(), r = null, i = t.length - 1; i >= 0; i--)
                        if ("*" !== t[i][t[i].length - 1] && (r = t[i]), t[i].substr(0, 10) <= e) return r;
                    throw new Error("Could not find " + this.constructor.serviceIdentifier + " API to satisfy version constraint `" + e + "'")
                },
                api: {},
                defaultRetryCount: 3,
                customizeRequests: function(e) {
                    if (e) {
                        if ("function" != typeof e) throw new Error("Invalid callback type '" + typeof e + "' provided in customizeRequests");
                        this.customRequestHandler = e
                    } else this.customRequestHandler = null
                },
                makeRequest: function(e, t, r) {
                    if ("function" == typeof t && (r = t, t = null), t = t || {}, this.config.params) {
                        var i = this.api.operations[e];
                        i && (t = n.util.copy(t), n.util.each(this.config.params, function(e, r) {
                            i.input.members[e] && (void 0 !== t[e] && null !== t[e] || (t[e] = r))
                        }))
                    }
                    var s = new n.Request(this, e, t);
                    return this.addAllRequestListeners(s), this.attachMonitoringEmitter(s), r && s.send(r), s
                },
                makeUnauthenticatedRequest: function(e, t, r) {
                    "function" == typeof t && (r = t, t = {});
                    var n = this.makeRequest(e, t).toUnauthenticated();
                    return r ? n.send(r) : n
                },
                waitFor: function(e, t, r) {
                    return new n.ResourceWaiter(this, e).wait(t, r)
                },
                addAllRequestListeners: function(e) {
                    for (var t = [n.events, n.EventListeners.Core, this.serviceInterface(), n.EventListeners.CorePost], r = 0; r < t.length; r++) t[r] && e.addListeners(t[r]);
                    this.config.paramValidation || e.removeListener("validate", n.EventListeners.Core.VALIDATE_PARAMETERS), this.config.logger && e.addListeners(n.EventListeners.Logger), this.setupRequestListeners(e), "function" == typeof this.constructor.prototype.customRequestHandler && this.constructor.prototype.customRequestHandler(e), Object.prototype.hasOwnProperty.call(this, "customRequestHandler") && "function" == typeof this.customRequestHandler && this.customRequestHandler(e)
                },
                apiCallEvent: function(e) {
                    var t = e.service.api.operations[e.operation];
                    return {
                        Type: "ApiCall",
                        Api: t ? t.name : e.operation,
                        Version: 1,
                        Service: e.service.api.serviceId || e.service.api.endpointPrefix
                    }
                },
                apiAttemptEvent: function(e) {
                    var t = e.service.api.operations[e.operation],
                        r = {
                            Type: "ApiCallAttempt",
                            Api: t ? t.name : e.operation,
                            Version: 1,
                            Service: e.service.api.serviceId || e.service.api.endpointPrefix,
                            Fqdn: e.httpRequest.endpoint.hostname,
                            UserAgent: e.httpRequest.getUserAgent()
                        },
                        n = e.response;
                    return n.httpResponse.headers ? (e.httpRequest.headers["x-amz-security-token"] && (r.SessionToken = e.httpRequest.headers["x-amz-security-token"]), n.httpResponse.headers["x-amzn-requestid"] && (r.XAmznRequestId = n.httpResponse.headers["x-amzn-requestid"]), n.httpResponse.headers["x-amz-request-id"] && (r.XAmzRequestId = n.httpResponse.headers["x-amz-request-id"]), n.httpResponse.headers["x-amz-id-2"] && (r.XAmzId2 = n.httpResponse.headers["x-amz-id-2"]), n.httpResponse.statusCode && (r.HttpStatusCode = n.httpResponse.statusCode), !e._unAuthenticated && e.service.config.credentials.accessKeyId && (r.AccessKey = e.service.config.credentials.accessKeyId), r) : r
                },
                attemptFailEvent: function(e) {
                    var t = this.apiAttemptEvent(e),
                        r = e.response;
                    return r.httpResponse.statusCode > 299 ? (t.AwsException = r.error.code, t.AwsExceptionMessage = r.error.message) : (t.SdkException = r.error.code || r.error.name, t.SdkExceptionMessage = r.error.message), t
                },
                attachMonitoringEmitter: function(e) {
                    var t, r, i, s, o, a, u = 0,
                        c = this;
                    e.on("validate", function() {
                        s = n.util.realClock.now(), a = Date.now()
                    }, !0), e.on("sign", function() {
                        r = n.util.realClock.now(), t = Date.now(), o = e.httpRequest.region, u++
                    }, !0), e.on("validateResponse", function() {
                        i = Math.round(n.util.realClock.now() - r)
                    }), e.addNamedListener("API_CALL_ATTEMPT", "success", function() {
                        var r = c.apiAttemptEvent(e);
                        r.Timestamp = t, r.AttemptLatency = i >= 0 ? i : 0, r.Region = o, c.emit("apiCallAttempt", [r])
                    }), e.addNamedListener("API_CALL_ATTEMPT_RETRY", "retry", function() {
                        var s = c.attemptFailEvent(e);
                        s.Timestamp = t, i = i || Math.round(n.util.realClock.now() - r), s.AttemptLatency = i >= 0 ? i : 0, s.Region = o, c.emit("apiCallAttempt", [s])
                    }), e.addNamedListener("API_CALL", "complete", function() {
                        var t = c.apiCallEvent(e);
                        if (t.AttemptCount = u, !(t.AttemptCount <= 0)) {
                            t.Timestamp = a;
                            var r = Math.round(n.util.realClock.now() - s);
                            t.Latency = r >= 0 ? r : 0, c.emit("apiCall", [t])
                        }
                    })
                },
                setupRequestListeners: function(e) {},
                getSignerClass: function(e) {
                    var t, r = null,
                        i = "";
                    if (e) {
                        r = (e.service.api.operations || {})[e.operation] || null, i = r ? r.authtype : ""
                    }
                    return t = this.config.signatureVersion ? this.config.signatureVersion : "v4" === i || "v4-unsigned-body" === i ? "v4" : this.api.signatureVersion, n.Signers.RequestSigner.getVersion(t)
                },
                serviceInterface: function() {
                    switch (this.api.protocol) {
                        case "ec2":
                        case "query":
                            return n.EventListeners.Query;
                        case "json":
                            return n.EventListeners.Json;
                        case "rest-json":
                            return n.EventListeners.RestJson;
                        case "rest-xml":
                            return n.EventListeners.RestXml
                    }
                    if (this.api.protocol) throw new Error("Invalid service `protocol' " + this.api.protocol + " in API config")
                },
                successfulResponse: function(e) {
                    return e.httpResponse.statusCode < 300
                },
                numRetries: function() {
                    return void 0 !== this.config.maxRetries ? this.config.maxRetries : this.defaultRetryCount
                },
                retryDelays: function(e) {
                    return n.util.calculateRetryDelay(e, this.config.retryDelayOptions)
                },
                retryableError: function(e) {
                    return !!this.timeoutError(e) || (!!this.networkingError(e) || (!!this.expiredCredentialsError(e) || (!!this.throttledError(e) || e.statusCode >= 500)))
                },
                networkingError: function(e) {
                    return "NetworkingError" === e.code
                },
                timeoutError: function(e) {
                    return "TimeoutError" === e.code
                },
                expiredCredentialsError: function(e) {
                    return "ExpiredTokenException" === e.code
                },
                clockSkewError: function(e) {
                    switch (e.code) {
                        case "RequestTimeTooSkewed":
                        case "RequestExpired":
                        case "InvalidSignatureException":
                        case "SignatureDoesNotMatch":
                        case "AuthFailure":
                        case "RequestInTheFuture":
                            return !0;
                        default:
                            return !1
                    }
                },
                getSkewCorrectedDate: function() {
                    return new Date(Date.now() + this.config.systemClockOffset)
                },
                applyClockOffset: function(e) {
                    e && (this.config.systemClockOffset = e - Date.now())
                },
                isClockSkewed: function(e) {
                    if (e) return Math.abs(this.getSkewCorrectedDate().getTime() - e) >= 3e4
                },
                throttledError: function(e) {
                    switch (e.code) {
                        case "ProvisionedThroughputExceededException":
                        case "Throttling":
                        case "ThrottlingException":
                        case "RequestLimitExceeded":
                        case "RequestThrottled":
                        case "TooManyRequestsException":
                            return !0;
                        default:
                            return !1
                    }
                },
                endpointFromTemplate: function(e) {
                    if ("string" != typeof e) return e;
                    var t = e;
                    return t = t.replace(/\{service\}/g, this.api.endpointPrefix), t = t.replace(/\{region\}/g, this.config.region), t = t.replace(/\{scheme\}/g, this.config.sslEnabled ? "https" : "http")
                },
                setEndpoint: function(e) {
                    this.endpoint = new n.Endpoint(e, this.config)
                },
                paginationConfig: function(e, t) {
                    var r = this.api.operations[e].paginator;
                    if (!r) {
                        if (t) {
                            var i = new Error;
                            throw n.util.error(i, "No pagination configuration for " + e)
                        }
                        return null
                    }
                    return r
                }
            }), n.util.update(n.Service, {
                defineMethods: function(e) {
                    n.util.each(e.prototype.api.operations, function(t) {
                        if (!e.prototype[t]) {
                            "none" === e.prototype.api.operations[t].authtype ? e.prototype[t] = function(e, r) {
                                return this.makeUnauthenticatedRequest(t, e, r)
                            } : e.prototype[t] = function(e, r) {
                                return this.makeRequest(t, e, r)
                            }
                        }
                    })
                },
                defineService: function(e, t, r) {
                    n.Service._serviceMap[e] = !0, Array.isArray(t) || (r = t, t = []);
                    var i = o(n.Service, r || {});
                    if ("string" == typeof e) {
                        n.Service.addVersions(i, t);
                        var s = i.serviceIdentifier || e;
                        i.serviceIdentifier = s
                    } else i.prototype.api = e, n.Service.defineMethods(i);
                    if (n.SequentialExecutor.call(this.prototype), !this.prototype.publisher && n.util.clientSideMonitoring) {
                        var a = n.util.clientSideMonitoring.Publisher,
                            u = n.util.clientSideMonitoring.configProvider;
                        this.prototype.publisher = new a(u())
                    }
                    return n.SequentialExecutor.call(i.prototype), n.Service.addDefaultMonitoringListeners(i.prototype), i
                },
                addVersions: function(e, t) {
                    Array.isArray(t) || (t = [t]), e.services = e.services || {};
                    for (var r = 0; r < t.length; r++) void 0 === e.services[t[r]] && (e.services[t[r]] = null);
                    e.apiVersions = Object.keys(e.services).sort()
                },
                defineServiceApi: function(e, t, r) {
                    function s(e) {
                        e.isApi ? a.prototype.api = e : a.prototype.api = new i(e)
                    }
                    var a = o(e, {
                        serviceIdentifier: e.serviceIdentifier
                    });
                    if ("string" == typeof t) {
                        if (r) s(r);
                        else try {
                            s(n.apiLoader(e.serviceIdentifier, t))
                        } catch (r) {
                            throw n.util.error(r, {
                                message: "Could not find API configuration " + e.serviceIdentifier + "-" + t
                            })
                        }
                        Object.prototype.hasOwnProperty.call(e.services, t) || (e.apiVersions = e.apiVersions.concat(t).sort()), e.services[t] = a
                    } else s(t);
                    return n.Service.defineMethods(a), a
                },
                hasService: function(e) {
                    return Object.prototype.hasOwnProperty.call(n.Service._serviceMap, e)
                },
                addDefaultMonitoringListeners: function(e) {
                    e.addNamedListener("MONITOR_EVENTS_BUBBLE", "apiCallAttempt", function(t) {
                        var r = Object.getPrototypeOf(e);
                        r._events && r.emit("apiCallAttempt", [t])
                    }), e.addNamedListener("CALL_EVENTS_BUBBLE", "apiCall", function(t) {
                        var r = Object.getPrototypeOf(e);
                        r._events && r.emit("apiCall", [t])
                    })
                },
                _serviceMap: {}
            }), n.util.mixin(n.Service, n.SequentialExecutor), t.exports = n.Service
        }).call(this, e("_process"))
    }, {
        "./core": 38,
        "./model/api": 63,
        "./region_config": 79,
        _process: 9
    }],
    79: [function(e, t, r) {
        function n(e) {
            if (!e) return null;
            var t = e.split("-");
            return t.length < 3 ? null : t.slice(0, t.length - 2).join("-") + "-*"
        }

        function i(e) {
            var t = e.config.region,
                r = n(t),
                i = e.api.endpointPrefix;
            return [
                [t, i],
                [r, i],
                [t, "*"],
                [r, "*"],
                ["*", i],
                ["*", "*"]
            ].map(function(e) {
                return e[0] && e[1] ? e.join("/") : null
            })
        }

        function s(e, t) {
            a.each(t, function(t, r) {
                "globalEndpoint" !== t && (void 0 !== e.config[t] && null !== e.config[t] || (e.config[t] = r))
            })
        }

        function o(e) {
            for (var t = i(e), r = 0; r < t.length; r++) {
                var n = t[r];
                if (n && Object.prototype.hasOwnProperty.call(u.rules, n)) {
                    var o = u.rules[n];
                    return "string" == typeof o && (o = u.patterns[o]), e.config.useDualstack && a.isDualstackAvailable(e) && (o = a.copy(o), o.endpoint = "{service}.dualstack.{region}.amazonaws.com"), e.isGlobalEndpoint = !!o.globalEndpoint, o.signatureVersion || (o.signatureVersion = "v4"), void s(e, o)
                }
            }
        }
        var a = e("./util"),
            u = e("./region_config_data.json");
        t.exports = o
    }, {
        "./region_config_data.json": 80,
        "./util": 113
    }],
    80: [function(e, t, r) {
        t.exports = {
            rules: {
                "*/*": {
                    endpoint: "{service}.{region}.amazonaws.com"
                },
                "cn-*/*": {
                    endpoint: "{service}.{region}.amazonaws.com.cn"
                },
                "*/budgets": "globalSSL",
                "*/cloudfront": "globalSSL",
                "*/iam": "globalSSL",
                "*/sts": "globalSSL",
                "*/importexport": {
                    endpoint: "{service}.amazonaws.com",
                    signatureVersion: "v2",
                    globalEndpoint: !0
                },
                "*/route53": {
                    endpoint: "https://{service}.amazonaws.com",
                    signatureVersion: "v3https",
                    globalEndpoint: !0
                },
                "*/waf": "globalSSL",
                "us-gov-*/iam": "globalGovCloud",
                "us-gov-*/sts": {
                    endpoint: "{service}.{region}.amazonaws.com"
                },
                "us-gov-west-1/s3": "s3signature",
                "us-west-1/s3": "s3signature",
                "us-west-2/s3": "s3signature",
                "eu-west-1/s3": "s3signature",
                "ap-southeast-1/s3": "s3signature",
                "ap-southeast-2/s3": "s3signature",
                "ap-northeast-1/s3": "s3signature",
                "sa-east-1/s3": "s3signature",
                "us-east-1/s3": {
                    endpoint: "{service}.amazonaws.com",
                    signatureVersion: "s3"
                },
                "us-east-1/sdb": {
                    endpoint: "{service}.amazonaws.com",
                    signatureVersion: "v2"
                },
                "*/sdb": {
                    endpoint: "{service}.{region}.amazonaws.com",
                    signatureVersion: "v2"
                }
            },
            patterns: {
                globalSSL: {
                    endpoint: "https://{service}.amazonaws.com",
                    globalEndpoint: !0
                },
                globalGovCloud: {
                    endpoint: "{service}.us-gov.amazonaws.com"
                },
                s3signature: {
                    endpoint: "{service}.{region}.amazonaws.com",
                    signatureVersion: "s3"
                }
            }
        }
    }, {}],
    83: [function(e, t, r) {
        var n = e("./core"),
            i = n.util.inherit,
            s = e("jmespath");
        n.Response = i({
            constructor: function(e) {
                this.request = e, this.data = null, this.error = null, this.retryCount = 0, this.redirectCount = 0, this.httpResponse = new n.HttpResponse, e && (this.maxRetries = e.service.numRetries(), this.maxRedirects = e.service.config.maxRedirects)
            },
            nextPage: function(e) {
                var t, r = this.request.service,
                    i = this.request.operation;
                try {
                    t = r.paginationConfig(i, !0)
                } catch (e) {
                    this.error = e
                }
                if (!this.hasNextPage()) {
                    if (e) e(this.error, null);
                    else if (this.error) throw this.error;
                    return null
                }
                var s = n.util.copy(this.request.params);
                if (this.nextPageTokens) {
                    var o = t.inputToken;
                    "string" == typeof o && (o = [o]);
                    for (var a = 0; a < o.length; a++) s[o[a]] = this.nextPageTokens[a];
                    return r.makeRequest(this.request.operation, s, e)
                }
                return e ? e(null, null) : null
            },
            hasNextPage: function() {
                return this.cacheNextPageTokens(), !!this.nextPageTokens || void 0 === this.nextPageTokens && void 0
            },
            cacheNextPageTokens: function() {
                if (Object.prototype.hasOwnProperty.call(this, "nextPageTokens")) return this.nextPageTokens;
                this.nextPageTokens = void 0;
                var e = this.request.service.paginationConfig(this.request.operation);
                if (!e) return this.nextPageTokens;
                if (this.nextPageTokens = null, e.moreResults && !s.search(this.data, e.moreResults)) return this.nextPageTokens;
                var t = e.outputToken;
                return "string" == typeof t && (t = [t]), n.util.arrayEach.call(this, t, function(e) {
                    var t = s.search(this.data, e);
                    t && (this.nextPageTokens = this.nextPageTokens || [], this.nextPageTokens.push(t))
                }), this.nextPageTokens
            }
        })
    }, {
        "./core": 38,
        jmespath: 8
    }],
    82: [function(e, t, r) {
        function n(e) {
            var t = e.request._waiter,
                r = t.config.acceptors,
                n = !1,
                i = "retry";
            r.forEach(function(r) {
                if (!n) {
                    var s = t.matchers[r.matcher];
                    s && s(e, r.expected, r.argument) && (n = !0, i = r.state)
                }
            }), !n && e.error && (i = "failure"), "success" === i ? t.setSuccess(e) : t.setError(e, "retry" === i)
        }
        var i = e("./core"),
            s = i.util.inherit,
            o = e("jmespath");
        i.ResourceWaiter = s({
            constructor: function(e, t) {
                this.service = e, this.state = t, this.loadWaiterConfig(this.state)
            },
            service: null,
            state: null,
            config: null,
            matchers: {
                path: function(e, t, r) {
                    try {
                        var n = o.search(e.data, r)
                    } catch (e) {
                        return !1
                    }
                    return o.strictDeepEqual(n, t)
                },
                pathAll: function(e, t, r) {
                    try {
                        var n = o.search(e.data, r)
                    } catch (e) {
                        return !1
                    }
                    Array.isArray(n) || (n = [n]);
                    var i = n.length;
                    if (!i) return !1;
                    for (var s = 0; s < i; s++)
                        if (!o.strictDeepEqual(n[s], t)) return !1;
                    return !0
                },
                pathAny: function(e, t, r) {
                    try {
                        var n = o.search(e.data, r)
                    } catch (e) {
                        return !1
                    }
                    Array.isArray(n) || (n = [n]);
                    for (var i = n.length, s = 0; s < i; s++)
                        if (o.strictDeepEqual(n[s], t)) return !0;
                    return !1
                },
                status: function(e, t) {
                    var r = e.httpResponse.statusCode;
                    return "number" == typeof r && r === t
                },
                error: function(e, t) {
                    return "string" == typeof t && e.error ? t === e.error.code : t === !!e.error
                }
            },
            listeners: (new i.SequentialExecutor).addNamedListeners(function(e) {
                e("RETRY_CHECK", "retry", function(e) {
                    var t = e.request._waiter;
                    e.error && "ResourceNotReady" === e.error.code && (e.error.retryDelay = 1e3 * (t.config.delay || 0))
                }), e("CHECK_OUTPUT", "extractData", n), e("CHECK_ERROR", "extractError", n)
            }),
            wait: function(e, t) {
                "function" == typeof e && (t = e, e = void 0), e && e.$waiter && (e = i.util.copy(e), "number" == typeof e.$waiter.delay && (this.config.delay = e.$waiter.delay), "number" == typeof e.$waiter.maxAttempts && (this.config.maxAttempts = e.$waiter.maxAttempts), delete e.$waiter);
                var r = this.service.makeRequest(this.config.operation, e);
                return r._waiter = this, r.response.maxRetries = this.config.maxAttempts, r.addListeners(this.listeners), t && r.send(t), r
            },
            setSuccess: function(e) {
                e.error = null, e.data = e.data || {}, e.request.removeAllListeners("extractData")
            },
            setError: function(e, t) {
                e.data = null, e.error = i.util.error(e.error || new Error, {
                    code: "ResourceNotReady",
                    message: "Resource is not in the state " + this.state,
                    retryable: t
                })
            },
            loadWaiterConfig: function(e) {
                if (!this.service.api.waiters[e]) throw new i.util.error(new Error, {
                    code: "StateNotFoundError",
                    message: "State " + e + " not found."
                });
                this.config = i.util.copy(this.service.api.waiters[e])
            }
        })
    }, {
        "./core": 38,
        jmespath: 8
    }],
    81: [function(e, t, r) {
        (function(t) {
            function r(e) {
                return Object.prototype.hasOwnProperty.call(u, e._asm.currentState)
            }
            var n = e("./core"),
                i = e("./state_machine"),
                s = n.util.inherit,
                o = n.util.domain,
                a = e("jmespath"),
                u = {
                    success: 1,
                    error: 1,
                    complete: 1
                },
                c = new i;
            c.setupStates = function() {
                var e = function(e, t) {
                    var n = this;
                    n._haltHandlersOnError = !1, n.emit(n._asm.currentState, function(e) {
                        if (e)
                            if (r(n)) {
                                if (!(o && n.domain instanceof o.Domain)) throw e;
                                e.domainEmitter = n, e.domain = n.domain, e.domainThrown = !1, n.domain.emit("error", e)
                            } else n.response.error = e, t(e);
                        else t(n.response.error)
                    })
                };
                this.addState("validate", "build", "error", e), this.addState("build", "afterBuild", "restart", e), this.addState("afterBuild", "sign", "restart", e), this.addState("sign", "send", "retry", e), this.addState("retry", "afterRetry", "afterRetry", e), this.addState("afterRetry", "sign", "error", e), this.addState("send", "validateResponse", "retry", e), this.addState("validateResponse", "extractData", "extractError", e), this.addState("extractError", "extractData", "retry", e), this.addState("extractData", "success", "retry", e), this.addState("restart", "build", "error", e), this.addState("success", "complete", "complete", e), this.addState("error", "complete", "complete", e), this.addState("complete", null, null, e)
            }, c.setupStates(), n.Request = s({
                constructor: function(e, t, r) {
                    var s = e.endpoint,
                        a = e.config.region,
                        u = e.config.customUserAgent;
                    e.isGlobalEndpoint && (a = "us-east-1"), this.domain = o && o.active, this.service = e, this.operation = t, this.params = r || {}, this.httpRequest = new n.HttpRequest(s, a), this.httpRequest.appendToUserAgent(u), this.startTime = e.getSkewCorrectedDate(), this.response = new n.Response(this), this._asm = new i(c.states, "validate"), this._haltHandlersOnError = !1, n.SequentialExecutor.call(this), this.emit = this.emitEvent
                },
                send: function(e) {
                    return e && (this.httpRequest.appendToUserAgent("callback"), this.on("complete", function(t) {
                        e.call(t, t.error, t.data)
                    })), this.runTo(), this.response
                },
                build: function(e) {
                    return this.runTo("send", e)
                },
                runTo: function(e, t) {
                    return this._asm.runTo(e, t, this), this
                },
                abort: function() {
                    return this.removeAllListeners("validateResponse"), this.removeAllListeners("extractError"), this.on("validateResponse", function(e) {
                        e.error = n.util.error(new Error("Request aborted by user"), {
                            code: "RequestAbortedError",
                            retryable: !1
                        })
                    }), this.httpRequest.stream && !this.httpRequest.stream.didCallback && (this.httpRequest.stream.abort(), this.httpRequest._abortCallback ? this.httpRequest._abortCallback() : this.removeAllListeners("send")), this
                },
                eachPage: function(e) {
                    function t(r) {
                        e.call(r, r.error, r.data, function(i) {
                            !1 !== i && (r.hasNextPage() ? r.nextPage().on("complete", t).send() : e.call(r, null, null, n.util.fn.noop))
                        })
                    }
                    e = n.util.fn.makeAsync(e, 3), this.on("complete", t).send()
                },
                eachItem: function(e) {
                    function t(t, i) {
                        if (t) return e(t, null);
                        if (null === i) return e(null, null);
                        var s = r.service.paginationConfig(r.operation),
                            o = s.resultKey;
                        Array.isArray(o) && (o = o[0]);
                        var u = a.search(i, o),
                            c = !0;
                        return n.util.arrayEach(u, function(t) {
                            if (!1 === (c = e(null, t))) return n.util.abort
                        }), c
                    }
                    var r = this;
                    this.eachPage(t)
                },
                isPageable: function() {
                    return !!this.service.paginationConfig(this.operation)
                },
                createReadStream: function() {
                    var e = n.util.stream,
                        r = this,
                        i = null;
                    return 2 === n.HttpClient.streamsApiVersion ? (i = new e.PassThrough, t.nextTick(function() {
                        r.send()
                    })) : (i = new e.Stream, i.readable = !0, i.sent = !1, i.on("newListener", function(e) {
                        i.sent || "data" !== e || (i.sent = !0, t.nextTick(function() {
                            r.send()
                        }))
                    })), this.on("error", function(e) {
                        i.emit("error", e)
                    }), this.on("httpHeaders", function(t, s, o) {
                        if (t < 300) {
                            r.removeListener("httpData", n.EventListeners.Core.HTTP_DATA), r.removeListener("httpError", n.EventListeners.Core.HTTP_ERROR), r.on("httpError", function(e) {
                                o.error = e, o.error.retryable = !1
                            });
                            var a, u = !1;
                            if ("HEAD" !== r.httpRequest.method && (a = parseInt(s["content-length"], 10)), void 0 !== a && !isNaN(a) && a >= 0) {
                                u = !0;
                                var c = 0
                            }
                            var h = function() {
                                    u && c !== a ? i.emit("error", n.util.error(new Error("Stream content length mismatch. Received " + c + " of " + a + " bytes."), {
                                        code: "StreamContentLengthMismatch"
                                    })) : 2 === n.HttpClient.streamsApiVersion ? i.end() : i.emit("end")
                                },
                                l = o.httpResponse.createUnbufferedStream();
                            if (2 === n.HttpClient.streamsApiVersion)
                                if (u) {
                                    var f = new e.PassThrough;
                                    f._write = function(t) {
                                        return t && t.length && (c += t.length), e.PassThrough.prototype._write.apply(this, arguments)
                                    }, f.on("end", h), i.on("error", function(e) {
                                        u = !1, l.unpipe(f), f.emit("end"), f.end()
                                    }), l.pipe(f).pipe(i, {
                                        end: !1
                                    })
                                } else l.pipe(i);
                            else u && l.on("data", function(e) {
                                e && e.length && (c += e.length)
                            }), l.on("data", function(e) {
                                i.emit("data", e)
                            }), l.on("end", h);
                            l.on("error", function(e) {
                                u = !1, i.emit("error", e)
                            })
                        }
                    }), i
                },
                emitEvent: function(e, t, r) {
                    "function" == typeof t && (r = t, t = null), r || (r = function() {}), t || (t = this.eventParameters(e, this.response)), n.SequentialExecutor.prototype.emit.call(this, e, t, function(e) {
                        e && (this.response.error = e), r.call(this, e)
                    })
                },
                eventParameters: function(e) {
                    switch (e) {
                        case "restart":
                        case "validate":
                        case "sign":
                        case "build":
                        case "afterValidate":
                        case "afterBuild":
                            return [this];
                        case "error":
                            return [this.response.error, this.response];
                        default:
                            return [this.response]
                    }
                },
                presign: function(e, t) {
                    return t || "function" != typeof e || (t = e, e = null), (new n.Signers.Presign).sign(this.toGet(), e, t)
                },
                isPresigned: function() {
                    return Object.prototype.hasOwnProperty.call(this.httpRequest.headers, "presigned-expires")
                },
                toUnauthenticated: function() {
                    return this._unAuthenticated = !0, this.removeListener("validate", n.EventListeners.Core.VALIDATE_CREDENTIALS), this.removeListener("sign", n.EventListeners.Core.SIGN), this
                },
                toGet: function() {
                    return "query" !== this.service.api.protocol && "ec2" !== this.service.api.protocol || (this.removeListener("build", this.buildAsGet), this.addListener("build", this.buildAsGet)), this
                },
                buildAsGet: function(e) {
                    e.httpRequest.method = "GET", e.httpRequest.path = e.service.endpoint.path + "?" + e.httpRequest.body, e.httpRequest.body = "", delete e.httpRequest.headers["Content-Length"], delete e.httpRequest.headers["Content-Type"]
                },
                haltHandlersOnError: function() {
                    this._haltHandlersOnError = !0
                }
            }), n.Request.addPromisesToClass = function(e) {
                this.prototype.promise = function() {
                    var t = this;
                    return this.httpRequest.appendToUserAgent("promise"), new e(function(e, r) {
                        t.on("complete", function(t) {
                            t.error ? r(t.error) : e(Object.defineProperty(t.data || {}, "$response", {
                                value: t
                            }))
                        }), t.runTo()
                    })
                }
            }, n.Request.deletePromisesFromClass = function() {
                delete this.prototype.promise
            }, n.util.addPromises(n.Request), n.util.mixin(n.Request, n.SequentialExecutor)
        }).call(this, e("_process"))
    }, {
        "./core": 38,
        "./state_machine": 112,
        _process: 9,
        jmespath: 8
    }],
    112: [function(e, t, r) {
        function n(e, t) {
            this.currentState = t || null, this.states = e || {}
        }
        n.prototype.runTo = function(e, t, r, n) {
            "function" == typeof e && (n = r, r = t, t = e, e = null);
            var i = this,
                s = i.states[i.currentState];
            s.fn.call(r || i, n, function(n) {
                if (n) {
                    if (!s.fail) return t ? t.call(r, n) : null;
                    i.currentState = s.fail
                } else {
                    if (!s.accept) return t ? t.call(r) : null;
                    i.currentState = s.accept
                }
                if (i.currentState === e) return t ? t.call(r, n) : null;
                i.runTo(e, t, r, n)
            })
        }, n.prototype.addState = function(e, t, r, n) {
            return "function" == typeof t ? (n = t, t = null, r = null) : "function" == typeof r && (n = r, r = null), this.currentState || (this.currentState = e), this.states[e] = {
                accept: t,
                fail: r,
                fn: n
            }, this
        }, t.exports = n
    }, {}],
    69: [function(e, t, r) {
        var n = e("./core");
        n.ParamValidator = n.util.inherit({
            constructor: function(e) {
                !0 !== e && void 0 !== e || (e = {
                    min: !0
                }), this.validation = e
            },
            validate: function(e, t, r) {
                if (this.errors = [], this.validateMember(e, t || {}, r || "params"), this.errors.length > 1) {
                    var i = this.errors.join("\n* ");
                    throw i = "There were " + this.errors.length + " validation errors:\n* " + i, n.util.error(new Error(i), {
                        code: "MultipleValidationErrors",
                        errors: this.errors
                    })
                }
                if (1 === this.errors.length) throw this.errors[0];
                return !0
            },
            fail: function(e, t) {
                this.errors.push(n.util.error(new Error(t), {
                    code: e
                }))
            },
            validateStructure: function(e, t, r) {
                this.validateType(t, r, ["object"], "structure");
                for (var n, i = 0; e.required && i < e.required.length; i++) {
                    n = e.required[i];
                    var s = t[n];
                    void 0 !== s && null !== s || this.fail("MissingRequiredParameter", "Missing required key '" + n + "' in " + r)
                }
                for (n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var o = t[n],
                            a = e.members[n];
                        if (void 0 !== a) {
                            var u = [r, n].join(".");
                            this.validateMember(a, o, u)
                        } else this.fail("UnexpectedParameter", "Unexpected key '" + n + "' found in " + r)
                    } return !0
            },
            validateMember: function(e, t, r) {
                switch (e.type) {
                    case "structure":
                        return this.validateStructure(e, t, r);
                    case "list":
                        return this.validateList(e, t, r);
                    case "map":
                        return this.validateMap(e, t, r);
                    default:
                        return this.validateScalar(e, t, r)
                }
            },
            validateList: function(e, t, r) {
                if (this.validateType(t, r, [Array])) {
                    this.validateRange(e, t.length, r, "list member count");
                    for (var n = 0; n < t.length; n++) this.validateMember(e.member, t[n], r + "[" + n + "]")
                }
            },
            validateMap: function(e, t, r) {
                if (this.validateType(t, r, ["object"], "map")) {
                    var n = 0;
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (this.validateMember(e.key, i, r + "[key='" + i + "']"), this.validateMember(e.value, t[i], r + "['" + i + "']"), n++);
                    this.validateRange(e, n, r, "map member count")
                }
            },
            validateScalar: function(e, t, r) {
                switch (e.type) {
                    case null:
                    case void 0:
                    case "string":
                        return this.validateString(e, t, r);
                    case "base64":
                    case "binary":
                        return this.validatePayload(t, r);
                    case "integer":
                    case "float":
                        return this.validateNumber(e, t, r);
                    case "boolean":
                        return this.validateType(t, r, ["boolean"]);
                    case "timestamp":
                        return this.validateType(t, r, [Date, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/, "number"], "Date object, ISO-8601 string, or a UNIX timestamp");
                    default:
                        return this.fail("UnkownType", "Unhandled type " + e.type + " for " + r)
                }
            },
            validateString: function(e, t, r) {
                var n = ["string"];
                e.isJsonValue && (n = n.concat(["number", "object", "boolean"])), null !== t && this.validateType(t, r, n) && (this.validateEnum(e, t, r), this.validateRange(e, t.length, r, "string length"), this.validatePattern(e, t, r), this.validateUri(e, t, r))
            },
            validateUri: function(e, t, r) {
                "uri" === e.location && 0 === t.length && this.fail("UriParameterError", 'Expected uri parameter to have length >= 1, but found "' + t + '" for ' + r)
            },
            validatePattern: function(e, t, r) {
                this.validation.pattern && void 0 !== e.pattern && (new RegExp(e.pattern).test(t) || this.fail("PatternMatchError", 'Provided value "' + t + '" does not match regex pattern /' + e.pattern + "/ for " + r))
            },
            validateRange: function(e, t, r, n) {
                this.validation.min && void 0 !== e.min && t < e.min && this.fail("MinRangeError", "Expected " + n + " >= " + e.min + ", but found " + t + " for " + r), this.validation.max && void 0 !== e.max && t > e.max && this.fail("MaxRangeError", "Expected " + n + " <= " + e.max + ", but found " + t + " for " + r)
            },
            validateEnum: function(e, t, r) {
                this.validation.enum && void 0 !== e.enum && -1 === e.enum.indexOf(t) && this.fail("EnumError", "Found string value of " + t + ", but expected " + e.enum.join("|") + " for " + r)
            },
            validateType: function(e, t, r, i) {
                if (null === e || void 0 === e) return !1;
                for (var s = !1, o = 0; o < r.length; o++) {
                    if ("string" == typeof r[o]) {
                        if (typeof e === r[o]) return !0
                    } else if (r[o] instanceof RegExp) {
                        if ((e || "").toString().match(r[o])) return !0
                    } else {
                        if (e instanceof r[o]) return !0;
                        if (n.util.isType(e, r[o])) return !0;
                        i || s || (r = r.slice()), r[o] = n.util.typeName(r[o])
                    }
                    s = !0
                }
                var a = i;
                a || (a = r.join(", ").replace(/,([^,]+)$/, ", or$1"));
                var u = a.match(/^[aeiou]/i) ? "n" : "";
                return this.fail("InvalidParameterType", "Expected " + t + " to be a" + u + " " + a), !1
            },
            validateNumber: function(e, t, r) {
                if (null !== t && void 0 !== t) {
                    if ("string" == typeof t) {
                        var n = parseFloat(t);
                        n.toString() === t && (t = n)
                    }
                    this.validateType(t, r, ["number"]) && this.validateRange(e, t, r, "numeric value")
                }
            },
            validatePayload: function(e, t) {
                if (null !== e && void 0 !== e && "string" != typeof e && (!e || "number" != typeof e.byteLength)) {
                    if (n.util.isNode()) {
                        var r = n.util.stream.Stream;
                        if (n.util.Buffer.isBuffer(e) || e instanceof r) return
                    } else if (void 0 !== typeof Blob && e instanceof Blob) return;
                    var i = ["Buffer", "Stream", "File", "Blob", "ArrayBuffer", "DataView"];
                    if (e)
                        for (var s = 0; s < i.length; s++) {
                            if (n.util.isType(e, i[s])) return;
                            if (n.util.typeName(e.constructor) === i[s]) return
                        }
                    this.fail("InvalidParameterType", "Expected " + t + " to be a string, Buffer, Stream, Blob, or typed array object")
                }
            }
        })
    }, {
        "./core": 38
    }],
    63: [function(e, t, r) {
        function n(e, t) {
            e = e || {}, t = t || {}, t.api = this, e.metadata = e.metadata || {}, h(this, "isApi", !0, !1), h(this, "apiVersion", e.metadata.apiVersion), h(this, "endpointPrefix", e.metadata.endpointPrefix), h(this, "signingName", e.metadata.signingName), h(this, "globalEndpoint", e.metadata.globalEndpoint), h(this, "signatureVersion", e.metadata.signatureVersion), h(this, "jsonVersion", e.metadata.jsonVersion), h(this, "targetPrefix", e.metadata.targetPrefix), h(this, "protocol", e.metadata.protocol), h(this, "timestampFormat", e.metadata.timestampFormat), h(this, "xmlNamespaceUri", e.metadata.xmlNamespace), h(this, "abbreviation", e.metadata.serviceAbbreviation), h(this, "fullName", e.metadata.serviceFullName), h(this, "serviceId", e.metadata.serviceId), l(this, "className", function() {
                var t = e.metadata.serviceAbbreviation || e.metadata.serviceFullName;
                return t ? (t = t.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g, ""), "ElasticLoadBalancing" === t && (t = "ELB"), t) : null
            }), h(this, "operations", new i(e.operations, t, function(e, r) {
                return new s(e, r, t)
            }, c.string.lowerFirst)), h(this, "shapes", new i(e.shapes, t, function(e, r) {
                return o.create(r, t)
            })), h(this, "paginators", new i(e.paginators, t, function(e, r) {
                return new a(e, r, t)
            })), h(this, "waiters", new i(e.waiters, t, function(e, r) {
                return new u(e, r, t)
            }, c.string.lowerFirst)), t.documentation && (h(this, "documentation", e.documentation), h(this, "documentationUrl", e.documentationUrl))
        }
        var i = e("./collection"),
            s = e("./operation"),
            o = e("./shape"),
            a = e("./paginator"),
            u = e("./resource_waiter"),
            c = e("../util"),
            h = c.property,
            l = c.memoizedProperty;
        t.exports = n
    }, {
        "../util": 113,
        "./collection": 64,
        "./operation": 65,
        "./paginator": 66,
        "./resource_waiter": 67,
        "./shape": 68
    }],
    67: [function(e, t, r) {
        function n(e, t, r) {
            r = r || {}, s(this, "name", e), s(this, "api", r.api, !1), t.operation && s(this, "operation", i.string.lowerFirst(t.operation));
            var n = this;
            ["type", "description", "delay", "maxAttempts", "acceptors"].forEach(function(e) {
                var r = t[e];
                r && s(n, e, r)
            })
        }
        var i = e("../util"),
            s = i.property;
        t.exports = n
    }, {
        "../util": 113
    }],
    66: [function(e, t, r) {
        function n(e, t) {
            i(this, "inputToken", t.input_token), i(this, "limitKey", t.limit_key), i(this, "moreResults", t.more_results), i(this, "outputToken", t.output_token), i(this, "resultKey", t.result_key)
        }
        var i = e("../util").property;
        t.exports = n
    }, {
        "../util": 113
    }],
    65: [function(e, t, r) {
        function n(e, t, r) {
            var n = this;
            r = r || {}, a(this, "name", t.name || e), a(this, "api", r.api, !1), t.http = t.http || {}, a(this, "httpMethod", t.http.method || "POST"), a(this, "httpPath", t.http.requestUri || "/"), a(this, "authtype", t.authtype || ""), u(this, "input", function() {
                return t.input ? s.create(t.input, r) : new s.create({
                    type: "structure"
                }, r)
            }), u(this, "output", function() {
                return t.output ? s.create(t.output, r) : new s.create({
                    type: "structure"
                }, r)
            }), u(this, "errors", function() {
                var e = [];
                if (!t.errors) return null;
                for (var n = 0; n < t.errors.length; n++) e.push(s.create(t.errors[n], r));
                return e
            }), u(this, "paginator", function() {
                return r.api.paginators[e]
            }), r.documentation && (a(this, "documentation", t.documentation), a(this, "documentationUrl", t.documentationUrl)), u(this, "idempotentMembers", function() {
                var e = [],
                    t = n.input,
                    r = t.members;
                if (!t.members) return e;
                for (var i in r) r.hasOwnProperty(i) && !0 === r[i].isIdempotent && e.push(i);
                return e
            }), u(this, "hasEventOutput", function() {
                return i(n.output)
            })
        }

        function i(e) {
            var t = e.members,
                r = e.payload;
            if (!e.members) return !1;
            if (r) {
                return t[r].isEventStream
            }
            for (var n in t)
                if (!t.hasOwnProperty(n) && !0 === t[n].isEventStream) return !0;
            return !1
        }
        var s = e("./shape"),
            o = e("../util"),
            a = o.property,
            u = o.memoizedProperty;
        t.exports = n
    }, {
        "../util": 113,
        "./shape": 68
    }],
    59: [function(e, t, r) {
        var n = e("./core"),
            i = n.util.inherit;
        n.Endpoint = i({
            constructor: function(e, t) {
                if (n.util.hideProperties(this, ["slashes", "auth", "hash", "search", "query"]), void 0 === e || null === e) throw new Error("Invalid endpoint: " + e);
                if ("string" != typeof e) return n.util.copy(e);
                if (!e.match(/^http/)) {
                    e = ((t && void 0 !== t.sslEnabled ? t.sslEnabled : n.config.sslEnabled) ? "https" : "http") + "://" + e
                }
                n.util.update(this, n.util.urlParse(e)), this.port ? this.port = parseInt(this.port, 10) : this.port = "https:" === this.protocol ? 443 : 80
            }
        }), n.HttpRequest = i({
            constructor: function(e, t) {
                e = new n.Endpoint(e), this.method = "POST", this.path = e.path || "/", this.headers = {}, this.body = "", this.endpoint = e, this.region = t, this._userAgent = "", this.setUserAgent()
            },
            setUserAgent: function() {
                this._userAgent = this.headers[this.getUserAgentHeaderName()] = n.util.userAgent()
            },
            getUserAgentHeaderName: function() {
                return (n.util.isBrowser() ? "X-Amz-" : "") + "User-Agent"
            },
            appendToUserAgent: function(e) {
                "string" == typeof e && e && (this._userAgent += " " + e), this.headers[this.getUserAgentHeaderName()] = this._userAgent
            },
            getUserAgent: function() {
                return this._userAgent
            },
            pathname: function() {
                return this.path.split("?", 1)[0]
            },
            search: function() {
                var e = this.path.split("?", 2)[1];
                return e ? (e = n.util.queryStringParse(e), n.util.queryParamsToString(e)) : ""
            }
        }), n.HttpResponse = i({
            constructor: function() {
                this.statusCode = void 0, this.headers = {}, this.body = void 0, this.streaming = !1, this.stream = null
            },
            createUnbufferedStream: function() {
                return this.streaming = !0, this.stream
            }
        }), n.HttpClient = i({}), n.HttpClient.getInstance = function() {
            return void 0 === this.singleton && (this.singleton = new this), this.singleton
        }
    }, {
        "./core": 38
    }],
    58: [function(e, t, r) {
        function n(e) {
            if (!e.service.api.operations) return "";
            var t = e.service.api.operations[e.operation];
            return t ? t.authtype : ""
        }
        var i = e("./core"),
            s = e("./sequential_executor");
        i.EventListeners = {
            Core: {}
        }, i.EventListeners = {
            Core: (new s).addNamedListeners(function(e, t) {
                t("VALIDATE_CREDENTIALS", "validate", function(e, t) {
                    if (!e.service.api.signatureVersion) return t();
                    e.service.config.getCredentials(function(r) {
                        r && (e.response.error = i.util.error(r, {
                            code: "CredentialsError",
                            message: "Missing credentials in config"
                        })), t()
                    })
                }), e("VALIDATE_REGION", "validate", function(e) {
                    e.service.config.region || e.service.isGlobalEndpoint || (e.response.error = i.util.error(new Error, {
                        code: "ConfigError",
                        message: "Missing region in config"
                    }))
                }), e("BUILD_IDEMPOTENCY_TOKENS", "validate", function(e) {
                    if (e.service.api.operations) {
                        var t = e.service.api.operations[e.operation];
                        if (t) {
                            var r = t.idempotentMembers;
                            if (r.length) {
                                for (var n = i.util.copy(e.params), s = 0, o = r.length; s < o; s++) n[r[s]] || (n[r[s]] = i.util.uuid.v4());
                                e.params = n
                            }
                        }
                    }
                }), e("VALIDATE_PARAMETERS", "validate", function(e) {
                    if (e.service.api.operations) {
                        var t = e.service.api.operations[e.operation].input,
                            r = e.service.config.paramValidation;
                        new i.ParamValidator(r).validate(t, e.params)
                    }
                }), t("COMPUTE_SHA256", "afterBuild", function(e, t) {
                    if (e.haltHandlersOnError(), e.service.api.operations) {
                        var r = e.service.api.operations[e.operation],
                            n = r ? r.authtype : "";
                        if (!e.service.api.signatureVersion && !n) return t();
                        if (e.service.getSignerClass(e) === i.Signers.V4) {
                            var s = e.httpRequest.body || "";
                            if (n.indexOf("unsigned-body") >= 0) return e.httpRequest.headers["X-Amz-Content-Sha256"] = "UNSIGNED-PAYLOAD", t();
                            i.util.computeSha256(s, function(r, n) {
                                r ? t(r) : (e.httpRequest.headers["X-Amz-Content-Sha256"] = n, t())
                            })
                        } else t()
                    }
                }), e("SET_CONTENT_LENGTH", "afterBuild", function(e) {
                    var t = n(e);
                    if (void 0 === e.httpRequest.headers["Content-Length"]) try {
                        var r = i.util.string.byteLength(e.httpRequest.body);
                        e.httpRequest.headers["Content-Length"] = r
                    } catch (e) {
                        if (-1 === t.indexOf("unsigned-body")) throw e;
                        return
                    }
                }), e("SET_HTTP_HOST", "afterBuild", function(e) {
                    e.httpRequest.headers.Host = e.httpRequest.endpoint.host
                }), e("RESTART", "restart", function() {
                    var e = this.response.error;
                    e && e.retryable && (this.httpRequest = new i.HttpRequest(this.service.endpoint, this.service.region), this.response.retryCount < this.service.config.maxRetries ? this.response.retryCount++ : this.response.error = null)
                }), t("SIGN", "sign", function(e, t) {
                    var r = e.service,
                        n = e.service.api.operations || {},
                        i = n[e.operation],
                        s = i ? i.authtype : "";
                    if (!r.api.signatureVersion && !s) return t();
                    r.config.getCredentials(function(n, s) {
                        if (n) return e.response.error = n, t();
                        try {
                            var o = r.getSkewCorrectedDate(),
                                a = r.getSignerClass(e),
                                u = new a(e.httpRequest, r.api.signingName || r.api.endpointPrefix, {
                                    signatureCache: r.config.signatureCache,
                                    operation: i
                                });
                            u.setServiceClientId(r._clientId), delete e.httpRequest.headers.Authorization, delete e.httpRequest.headers.Date, delete e.httpRequest.headers["X-Amz-Date"], u.addAuthorization(s, o), e.signedAt = o
                        } catch (t) {
                            e.response.error = t
                        }
                        t()
                    })
                }), e("VALIDATE_RESPONSE", "validateResponse", function(e) {
                    this.service.successfulResponse(e, this) ? (e.data = {}, e.error = null) : (e.data = null, e.error = i.util.error(new Error, {
                        code: "UnknownError",
                        message: "An unknown error occurred."
                    }))
                }), t("SEND", "send", function(e, t) {
                    function r(r) {
                        e.httpResponse.stream = r;
                        var n = e.request.httpRequest.stream,
                            s = e.request.service,
                            o = s.api,
                            a = e.request.operation,
                            u = o.operations[a] || {};
                        r.on("headers", function(n, o, a) {
                            if (e.request.emit("httpHeaders", [n, o, e, a]), !e.httpResponse.streaming)
                                if (2 === i.HttpClient.streamsApiVersion) {
                                    if (u.hasEventOutput && s.successfulResponse(e)) return e.request.emit("httpDone"), void t();
                                    r.on("readable", function() {
                                        var t = r.read();
                                        null !== t && e.request.emit("httpData", [t, e])
                                    })
                                } else r.on("data", function(t) {
                                    e.request.emit("httpData", [t, e])
                                })
                        }), r.on("end", function() {
                            if (!n || !n.didCallback) {
                                if (2 === i.HttpClient.streamsApiVersion && u.hasEventOutput && s.successfulResponse(e)) return;
                                e.request.emit("httpDone"), t()
                            }
                        })
                    }

                    function n(t) {
                        t.on("sendProgress", function(t) {
                            e.request.emit("httpUploadProgress", [t, e])
                        }), t.on("receiveProgress", function(t) {
                            e.request.emit("httpDownloadProgress", [t, e])
                        })
                    }

                    function s(r) {
                        if ("RequestAbortedError" !== r.code) {
                            var n = "TimeoutError" === r.code ? r.code : "NetworkingError";
                            r = i.util.error(r, {
                                code: n,
                                region: e.request.httpRequest.region,
                                hostname: e.request.httpRequest.endpoint.hostname,
                                retryable: !0
                            })
                        }
                        e.error = r, e.request.emit("httpError", [e.error, e], function() {
                            t()
                        })
                    }

                    function o() {
                        var t = i.HttpClient.getInstance(),
                            o = e.request.service.config.httpOptions || {};
                        try {
                            n(t.handleRequest(e.request.httpRequest, o, r, s))
                        } catch (e) {
                            s(e)
                        }
                    }
                    e.httpResponse._abortCallback = t, e.error = null, e.data = null, (e.request.service.getSkewCorrectedDate() - this.signedAt) / 1e3 >= 600 ? this.emit("sign", [this], function(e) {
                        e ? t(e) : o()
                    }) : o()
                }), e("HTTP_HEADERS", "httpHeaders", function(e, t, r, n) {
                    r.httpResponse.statusCode = e, r.httpResponse.statusMessage = n, r.httpResponse.headers = t, r.httpResponse.body = new i.util.Buffer(""), r.httpResponse.buffers = [], r.httpResponse.numBytes = 0;
                    var s = t.date || t.Date,
                        o = r.request.service;
                    if (s) {
                        var a = Date.parse(s);
                        o.config.correctClockSkew && o.isClockSkewed(a) && o.applyClockOffset(a)
                    }
                }), e("HTTP_DATA", "httpData", function(e, t) {
                    if (e) {
                        if (i.util.isNode()) {
                            t.httpResponse.numBytes += e.length;
                            var r = t.httpResponse.headers["content-length"],
                                n = {
                                    loaded: t.httpResponse.numBytes,
                                    total: r
                                };
                            t.request.emit("httpDownloadProgress", [n, t])
                        }
                        t.httpResponse.buffers.push(new i.util.Buffer(e))
                    }
                }), e("HTTP_DONE", "httpDone", function(e) {
                    if (e.httpResponse.buffers && e.httpResponse.buffers.length > 0) {
                        var t = i.util.buffer.concat(e.httpResponse.buffers);
                        e.httpResponse.body = t
                    }
                    delete e.httpResponse.numBytes, delete e.httpResponse.buffers
                }), e("FINALIZE_ERROR", "retry", function(e) {
                    e.httpResponse.statusCode && (e.error.statusCode = e.httpResponse.statusCode, void 0 === e.error.retryable && (e.error.retryable = this.service.retryableError(e.error, this)))
                }), e("INVALIDATE_CREDENTIALS", "retry", function(e) {
                    if (e.error) switch (e.error.code) {
                        case "RequestExpired":
                        case "ExpiredTokenException":
                        case "ExpiredToken":
                            e.error.retryable = !0, e.request.service.config.credentials.expired = !0
                    }
                }), e("EXPIRED_SIGNATURE", "retry", function(e) {
                    var t = e.error;
                    t && "string" == typeof t.code && "string" == typeof t.message && t.code.match(/Signature/) && t.message.match(/expired/) && (e.error.retryable = !0)
                }), e("CLOCK_SKEWED", "retry", function(e) {
                    e.error && this.service.clockSkewError(e.error) && this.service.config.correctClockSkew && (e.error.retryable = !0)
                }), e("REDIRECT", "retry", function(e) {
                    e.error && e.error.statusCode >= 300 && e.error.statusCode < 400 && e.httpResponse.headers.location && (this.httpRequest.endpoint = new i.Endpoint(e.httpResponse.headers.location), this.httpRequest.headers.Host = this.httpRequest.endpoint.host, e.error.redirect = !0, e.error.retryable = !0)
                }), e("RETRY_CHECK", "retry", function(e) {
                    e.error && (e.error.redirect && e.redirectCount < e.maxRedirects ? e.error.retryDelay = 0 : e.retryCount < e.maxRetries && (e.error.retryDelay = this.service.retryDelays(e.retryCount) || 0))
                }), t("RESET_RETRY_STATE", "afterRetry", function(e, t) {
                    var r, n = !1;
                    e.error && (r = e.error.retryDelay || 0, e.error.retryable && e.retryCount < e.maxRetries ? (e.retryCount++, n = !0) : e.error.redirect && e.redirectCount < e.maxRedirects && (e.redirectCount++, n = !0)), n ? (e.error = null, setTimeout(t, r)) : t()
                })
            }),
            CorePost: (new s).addNamedListeners(function(e) {
                e("EXTRACT_REQUEST_ID", "extractData", i.util.extractRequestId), e("EXTRACT_REQUEST_ID", "extractError", i.util.extractRequestId), e("ENOTFOUND_ERROR", "httpError", function(e) {
                    if ("NetworkingError" === e.code && "ENOTFOUND" === e.errno) {
                        var t = "Inaccessible host: `" + e.hostname + "'. This service may not be available in the `" + e.region + "' region.";
                        this.response.error = i.util.error(new Error(t), {
                            code: "UnknownEndpoint",
                            region: e.region,
                            hostname: e.hostname,
                            retryable: !0,
                            originalError: e
                        })
                    }
                })
            }),
            Logger: (new s).addNamedListeners(function(t) {
                t("LOG_REQUEST", "complete", function(t) {
                    function r(e, t) {
                        if (!t) return t;
                        switch (e.type) {
                            case "structure":
                                var n = {};
                                return i.util.each(t, function(t, i) {
                                    Object.prototype.hasOwnProperty.call(e.members, t) ? n[t] = r(e.members[t], i) : n[t] = i
                                }), n;
                            case "list":
                                var s = [];
                                return i.util.arrayEach(t, function(t, n) {
                                    s.push(r(e.member, t))
                                }), s;
                            case "map":
                                var o = {};
                                return i.util.each(t, function(t, n) {
                                    o[t] = r(e.value, n)
                                }), o;
                            default:
                                return e.isSensitive ? "***SensitiveInformation***" : t
                        }
                    }
                    var n = t.request,
                        s = n.service.config.logger;
                    if (s) {
                        var o = function() {
                            var o = t.request.service.getSkewCorrectedDate().getTime(),
                                a = (o - n.startTime.getTime()) / 1e3,
                                u = !!s.isTTY,
                                c = t.httpResponse.statusCode,
                                h = n.params;
                            if (n.service.api.operations && n.service.api.operations[n.operation] && n.service.api.operations[n.operation].input) {
                                h = r(n.service.api.operations[n.operation].input, n.params)
                            }
                            var l = e("util").inspect(h, !0, null),
                                f = "";
                            return u && (f += "[33m"), f += "[AWS " + n.service.serviceIdentifier + " " + c, f += " " + a.toString() + "s " + t.retryCount + " retries]", u && (f += "[0;1m"), f += " " + i.util.string.lowerFirst(n.operation), f += "(" + l + ")", u && (f += "[0m"), f
                        }();
                        "function" == typeof s.log ? s.log(o) : "function" == typeof s.write && s.write(o + "\n")
                    }
                })
            }),
            Json: (new s).addNamedListeners(function(t) {
                var r = e("./protocol/json");
                t("BUILD", "build", r.buildRequest), t("EXTRACT_DATA", "extractData", r.extractData), t("EXTRACT_ERROR", "extractError", r.extractError)
            }),
            Rest: (new s).addNamedListeners(function(t) {
                var r = e("./protocol/rest");
                t("BUILD", "build", r.buildRequest), t("EXTRACT_DATA", "extractData", r.extractData), t("EXTRACT_ERROR", "extractError", r.extractError)
            }),
            RestJson: (new s).addNamedListeners(function(t) {
                var r = e("./protocol/rest_json");
                t("BUILD", "build", r.buildRequest), t("EXTRACT_DATA", "extractData", r.extractData), t("EXTRACT_ERROR", "extractError", r.extractError)
            }),
            RestXml: (new s).addNamedListeners(function(t) {
                var r = e("./protocol/rest_xml");
                t("BUILD", "build", r.buildRequest), t("EXTRACT_DATA", "extractData", r.extractData), t("EXTRACT_ERROR", "extractError", r.extractError)
            }),
            Query: (new s).addNamedListeners(function(t) {
                var r = e("./protocol/query");
                t("BUILD", "build", r.buildRequest), t("EXTRACT_DATA", "extractData", r.extractData), t("EXTRACT_ERROR", "extractError", r.extractError)
            })
        }
    }, {
        "./core": 38,
        "./protocol/json": 71,
        "./protocol/query": 72,
        "./protocol/rest": 73,
        "./protocol/rest_json": 74,
        "./protocol/rest_xml": 75,
        "./sequential_executor": 85,
        util: 20
    }],
    85: [function(e, t, r) {
        var n = e("./core");
        n.SequentialExecutor = n.util.inherit({
            constructor: function() {
                this._events = {}
            },
            listeners: function(e) {
                return this._events[e] ? this._events[e].slice(0) : []
            },
            on: function(e, t, r) {
                return this._events[e] ? r ? this._events[e].unshift(t) : this._events[e].push(t) : this._events[e] = [t], this
            },
            onAsync: function(e, t, r) {
                return t._isAsync = !0, this.on(e, t, r)
            },
            removeListener: function(e, t) {
                var r = this._events[e];
                if (r) {
                    for (var n = r.length, i = -1, s = 0; s < n; ++s) r[s] === t && (i = s);
                    i > -1 && r.splice(i, 1)
                }
                return this
            },
            removeAllListeners: function(e) {
                return e ? delete this._events[e] : this._events = {}, this
            },
            emit: function(e, t, r) {
                r || (r = function() {});
                var n = this.listeners(e),
                    i = n.length;
                return this.callListeners(n, t, r), i > 0
            },
            callListeners: function(e, t, r, i) {
                function s(i) {
                    if (i && (a = n.util.error(a || new Error, i), o._haltHandlersOnError)) return r.call(o, a);
                    o.callListeners(e, t, r, a)
                }
                for (var o = this, a = i || null; e.length > 0;) {
                    var u = e.shift();
                    if (u._isAsync) return void u.apply(o, t.concat([s]));
                    try {
                        u.apply(o, t)
                    } catch (e) {
                        a = n.util.error(a || new Error, e)
                    }
                    if (a && o._haltHandlersOnError) return void r.call(o, a)
                }
                r.call(o, a)
            },
            addListeners: function(e) {
                var t = this;
                return e._events && (e = e._events), n.util.each(e, function(e, r) {
                    "function" == typeof r && (r = [r]), n.util.arrayEach(r, function(r) {
                        t.on(e, r)
                    })
                }), t
            },
            addNamedListener: function(e, t, r, n) {
                return this[e] = r, this.addListener(t, r, n), this
            },
            addNamedAsyncListener: function(e, t, r) {
                return r._isAsync = !0, this.addNamedListener(e, t, r)
            },
            addNamedListeners: function(e) {
                var t = this;
                return e(function() {
                    t.addNamedListener.apply(t, arguments)
                }, function() {
                    t.addNamedAsyncListener.apply(t, arguments)
                }), this
            }
        }), n.SequentialExecutor.prototype.addListener = n.SequentialExecutor.prototype.on, t.exports = n.SequentialExecutor
    }, {
        "./core": 38
    }],
    75: [function(e, t, r) {
        function n(e) {
            var t = e.service.api.operations[e.operation].input,
                r = new a.XML.Builder,
                n = e.params,
                i = t.payload;
            if (i) {
                var s = t.members[i];
                if (void 0 === (n = n[i])) return;
                if ("structure" === s.type) {
                    var o = s.name;
                    e.httpRequest.body = r.toXML(n, s, o, !0)
                } else e.httpRequest.body = n
            } else e.httpRequest.body = r.toXML(n, t, t.name || t.shape || u.string.upperFirst(e.operation) + "Request")
        }

        function i(e) {
            c.buildRequest(e), ["GET", "HEAD"].indexOf(e.httpRequest.method) < 0 && n(e)
        }

        function s(e) {
            c.extractError(e);
            var t;
            try {
                t = (new a.XML.Parser).parse(e.httpResponse.body.toString())
            } catch (r) {
                t = {
                    Code: e.httpResponse.statusCode,
                    Message: e.httpResponse.statusMessage
                }
            }
            t.Errors && (t = t.Errors), t.Error && (t = t.Error), t.Code ? e.error = u.error(new Error, {
                code: t.Code,
                message: t.Message
            }) : e.error = u.error(new Error, {
                code: e.httpResponse.statusCode,
                message: null
            })
        }

        function o(e) {
            c.extractData(e);
            var t, r = e.request,
                n = e.httpResponse.body,
                i = r.service.api.operations[r.operation],
                s = i.output,
                o = (i.hasEventOutput, s.payload);
            if (o) {
                var h = s.members[o];
                h.isEventStream ? (t = new a.XML.Parser, e.data[o] = u.createEventStream(2 === a.HttpClient.streamsApiVersion ? e.httpResponse.stream : e.httpResponse.body, t, h)) : "structure" === h.type ? (t = new a.XML.Parser, e.data[o] = t.parse(n.toString(), h)) : "binary" === h.type || h.isStreaming ? e.data[o] = n : e.data[o] = h.toType(n)
            } else if (n.length > 0) {
                t = new a.XML.Parser;
                var l = t.parse(n.toString(), s);
                u.update(e.data, l)
            }
        }
        var a = e("../core"),
            u = e("../util"),
            c = e("./rest");
        t.exports = {
            buildRequest: i,
            extractError: s,
            extractData: o
        }
    }, {
        "../core": 38,
        "../util": 113,
        "./rest": 73
    }],
    74: [function(e, t, r) {
        function n(e) {
            var t = new l,
                r = e.service.api.operations[e.operation].input;
            if (r.payload) {
                var n = {},
                    s = r.members[r.payload];
                if (void 0 === (n = e.params[r.payload])) return;
                "structure" === s.type ? (e.httpRequest.body = t.build(n, s), i(e)) : (e.httpRequest.body = n,
                    ("binary" === s.type || s.isStreaming) && i(e, !0))
            } else e.httpRequest.body = t.build(e.params, r), i(e)
        }

        function i(e, t) {
            var r = e.service.api.operations[e.operation];
            r.input;
            if (!e.httpRequest.headers["Content-Type"]) {
                var n = t ? "binary/octet-stream" : "application/json";
                e.httpRequest.headers["Content-Type"] = n
            }
        }

        function s(e) {
            c.buildRequest(e), ["GET", "HEAD", "DELETE"].indexOf(e.httpRequest.method) < 0 && n(e)
        }

        function o(e) {
            h.extractError(e)
        }

        function a(e) {
            c.extractData(e);
            var t, r = e.request,
                n = r.service.api.operations[r.operation],
                i = r.service.api.operations[r.operation].output || {};
            n.hasEventOutput;
            if (i.payload) {
                var s = i.members[i.payload],
                    o = e.httpResponse.body;
                if (s.isEventStream) t = new f, e.data[payload] = u.createEventStream(2 === AWS.HttpClient.streamsApiVersion ? e.httpResponse.stream : o, t, s);
                else if ("structure" === s.type || "list" === s.type) {
                    var t = new f;
                    e.data[i.payload] = t.parse(o, s)
                } else "binary" === s.type || s.isStreaming ? e.data[i.payload] = o : e.data[i.payload] = s.toType(o)
            } else {
                var a = e.data;
                h.extractData(e), e.data = u.merge(a, e.data)
            }
        }
        var u = e("../util"),
            c = e("./rest"),
            h = e("./json"),
            l = e("../json/builder"),
            f = e("../json/parser");
        t.exports = {
            buildRequest: s,
            extractError: o,
            extractData: a
        }
    }, {
        "../json/builder": 61,
        "../json/parser": 62,
        "../util": 113,
        "./json": 71,
        "./rest": 73
    }],
    73: [function(e, t, r) {
        function n(e) {
            e.httpRequest.method = e.service.api.operations[e.operation].httpMethod
        }

        function i(e, t, r, n) {
            var i = [e, t].join("/");
            i = i.replace(/\/+/g, "/");
            var s = {},
                o = !1;
            if (h.each(r.members, function(e, t) {
                    var r = n[e];
                    if (null !== r && void 0 !== r)
                        if ("uri" === t.location) {
                            var a = new RegExp("\\{" + t.name + "(\\+)?\\}");
                            i = i.replace(a, function(e, t) {
                                return (t ? h.uriEscapePath : h.uriEscape)(String(r))
                            })
                        } else "querystring" === t.location && (o = !0, "list" === t.type ? s[t.name] = r.map(function(e) {
                            return h.uriEscape(t.member.toWireFormat(e).toString())
                        }) : "map" === t.type ? h.each(r, function(e, t) {
                            Array.isArray(t) ? s[e] = t.map(function(e) {
                                return h.uriEscape(String(e))
                            }) : s[e] = h.uriEscape(String(t))
                        }) : s[t.name] = h.uriEscape(t.toWireFormat(r).toString()))
                }), o) {
                i += i.indexOf("?") >= 0 ? "&" : "?";
                var a = [];
                h.arrayEach(Object.keys(s).sort(), function(e) {
                    Array.isArray(s[e]) || (s[e] = [s[e]]);
                    for (var t = 0; t < s[e].length; t++) a.push(h.uriEscape(String(e)) + "=" + s[e][t])
                }), i += a.join("&")
            }
            return i
        }

        function s(e) {
            var t = e.service.api.operations[e.operation],
                r = t.input,
                n = i(e.httpRequest.endpoint.path, t.httpPath, r, e.params);
            e.httpRequest.path = n
        }

        function o(e) {
            var t = e.service.api.operations[e.operation];
            h.each(t.input.members, function(t, r) {
                var n = e.params[t];
                null !== n && void 0 !== n && ("headers" === r.location && "map" === r.type ? h.each(n, function(t, n) {
                    e.httpRequest.headers[r.name + t] = n
                }) : "header" === r.location && (n = r.toWireFormat(n).toString(), r.isJsonValue && (n = h.base64.encode(n)), e.httpRequest.headers[r.name] = n))
            })
        }

        function a(e) {
            n(e), s(e), o(e)
        }

        function u() {}

        function c(e) {
            var t = e.request,
                r = {},
                n = e.httpResponse,
                i = t.service.api.operations[t.operation],
                s = i.output,
                o = {};
            h.each(n.headers, function(e, t) {
                o[e.toLowerCase()] = t
            }), h.each(s.members, function(e, t) {
                var i = (t.name || e).toLowerCase();
                if ("headers" === t.location && "map" === t.type) {
                    r[e] = {};
                    var s = t.isLocationName ? t.name : "",
                        a = new RegExp("^" + s + "(.+)", "i");
                    h.each(n.headers, function(t, n) {
                        var i = t.match(a);
                        null !== i && (r[e][i[1]] = n)
                    })
                } else if ("header" === t.location) {
                    if (void 0 !== o[i]) {
                        var u = t.isJsonValue ? h.base64.decode(o[i]) : o[i];
                        r[e] = t.toType(u)
                    }
                } else "statusCode" === t.location && (r[e] = parseInt(n.statusCode, 10))
            }), e.data = r
        }
        var h = e("../util");
        t.exports = {
            buildRequest: a,
            extractError: u,
            extractData: c,
            generateURI: i
        }
    }, {
        "../util": 113
    }],
    72: [function(e, t, r) {
        function n(e) {
            var t = e.service.api.operations[e.operation],
                r = e.httpRequest;
            r.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8", r.params = {
                Version: e.service.api.apiVersion,
                Action: t.name
            }, (new u).serialize(e.params, t.input, function(e, t) {
                r.params[e] = t
            }), r.body = a.queryParamsToString(r.params)
        }

        function i(e) {
            var t, r = e.httpResponse.body.toString();
            if (r.match("<UnknownOperationException")) t = {
                Code: "UnknownOperation",
                Message: "Unknown operation " + e.request.operation
            };
            else try {
                t = (new o.XML.Parser).parse(r)
            } catch (r) {
                t = {
                    Code: e.httpResponse.statusCode,
                    Message: e.httpResponse.statusMessage
                }
            }
            t.requestId && !e.requestId && (e.requestId = t.requestId), t.Errors && (t = t.Errors), t.Error && (t = t.Error), t.Code ? e.error = a.error(new Error, {
                code: t.Code,
                message: t.Message
            }) : e.error = a.error(new Error, {
                code: e.httpResponse.statusCode,
                message: null
            })
        }

        function s(e) {
            var t = e.request,
                r = t.service.api.operations[t.operation],
                n = r.output || {},
                i = n;
            if (i.resultWrapper) {
                var s = c.create({
                    type: "structure"
                });
                s.members[i.resultWrapper] = n, s.memberNames = [i.resultWrapper], a.property(n, "name", n.resultWrapper), n = s
            }
            var u = new o.XML.Parser;
            if (n && n.members && !n.members._XAMZRequestId) {
                var h = c.create({
                    type: "string"
                }, {
                    api: {
                        protocol: "query"
                    }
                }, "requestId");
                n.members._XAMZRequestId = h
            }
            var l = u.parse(e.httpResponse.body.toString(), n);
            e.requestId = l._XAMZRequestId || l.requestId, l._XAMZRequestId && delete l._XAMZRequestId, i.resultWrapper && l[i.resultWrapper] && (a.update(l, l[i.resultWrapper]), delete l[i.resultWrapper]), e.data = l
        }
        var o = e("../core"),
            a = e("../util"),
            u = e("../query/query_param_serializer"),
            c = e("../model/shape");
        t.exports = {
            buildRequest: n,
            extractError: i,
            extractData: s
        }
    }, {
        "../core": 38,
        "../model/shape": 68,
        "../query/query_param_serializer": 76,
        "../util": 113
    }],
    76: [function(e, t, r) {
        function n() {}

        function i(e) {
            return e.isQueryName || "ec2" !== e.api.protocol ? e.name : e.name[0].toUpperCase() + e.name.substr(1)
        }

        function s(e, t, r, n) {
            c.each(r.members, function(r, s) {
                var o = t[r];
                if (null !== o && void 0 !== o) {
                    var a = i(s);
                    a = e ? e + "." + a : a, u(a, o, s, n)
                }
            })
        }

        function o(e, t, r, n) {
            var i = 1;
            c.each(t, function(t, s) {
                var o = r.flattened ? "." : ".entry.",
                    a = o + i++ + ".",
                    c = a + (r.key.name || "key"),
                    h = a + (r.value.name || "value");
                u(e + c, t, r.key, n), u(e + h, s, r.value, n)
            })
        }

        function a(e, t, r, n) {
            var s = r.member || {};
            if (0 === t.length) return void n.call(this, e, null);
            c.arrayEach(t, function(t, o) {
                var a = "." + (o + 1);
                if ("ec2" === r.api.protocol) a += "";
                else if (r.flattened) {
                    if (s.name) {
                        var c = e.split(".");
                        c.pop(), c.push(i(s)), e = c.join(".")
                    }
                } else a = "." + (s.name ? s.name : "member") + a;
                u(e + a, t, s, n)
            })
        }

        function u(e, t, r, n) {
            null !== t && void 0 !== t && ("structure" === r.type ? s(e, t, r, n) : "list" === r.type ? a(e, t, r, n) : "map" === r.type ? o(e, t, r, n) : n(e, r.toWireFormat(t).toString()))
        }
        var c = e("../util");
        n.prototype.serialize = function(e, t, r) {
            s("", e, t, r)
        }, t.exports = n
    }, {
        "../util": 113
    }],
    68: [function(e, t, r) {
        function n(e, t, r) {
            null !== r && void 0 !== r && y.property.apply(this, arguments)
        }

        function i(e, t) {
            e.constructor.prototype[t] || y.memoizedProperty.apply(this, arguments)
        }

        function s(e, t, r) {
            t = t || {}, n(this, "shape", e.shape), n(this, "api", t.api, !1), n(this, "type", e.type), n(this, "enum", e.enum), n(this, "min", e.min), n(this, "max", e.max), n(this, "pattern", e.pattern), n(this, "location", e.location || this.location || "body"), n(this, "name", this.name || e.xmlName || e.queryName || e.locationName || r), n(this, "isStreaming", e.streaming || this.isStreaming || !1), n(this, "isComposite", e.isComposite || !1), n(this, "isShape", !0, !1), n(this, "isQueryName", Boolean(e.queryName), !1), n(this, "isLocationName", Boolean(e.locationName), !1), n(this, "isIdempotent", !0 === e.idempotencyToken), n(this, "isJsonValue", !0 === e.jsonvalue), n(this, "isSensitive", !0 === e.sensitive || e.prototype && !0 === e.prototype.sensitive), n(this, "isEventStream", Boolean(e.eventstream), !1), n(this, "isEvent", Boolean(e.event), !1), n(this, "isEventPayload", Boolean(e.eventpayload), !1), n(this, "isEventHeader", Boolean(e.eventheader), !1), n(this, "isTimestampFormatSet", Boolean(e.timestampFormat) || e.prototype && !0 === e.prototype.isTimestampFormatSet, !1), t.documentation && (n(this, "documentation", e.documentation), n(this, "documentationUrl", e.documentationUrl)), e.xmlAttribute && n(this, "isXmlAttribute", e.xmlAttribute || !1), n(this, "defaultValue", null), this.toWireFormat = function(e) {
                return null === e || void 0 === e ? "" : e
            }, this.toType = function(e) {
                return e
            }
        }

        function o(e) {
            s.apply(this, arguments), n(this, "isComposite", !0), e.flattened && n(this, "flattened", e.flattened || !1)
        }

        function a(e, t) {
            var r = this,
                a = null,
                u = !this.isShape;
            o.apply(this, arguments), u && (n(this, "defaultValue", function() {
                return {}
            }), n(this, "members", {}), n(this, "memberNames", []), n(this, "required", []), n(this, "isRequired", function() {
                return !1
            })), e.members && (n(this, "members", new g(e.members, t, function(e, r) {
                return s.create(r, t, e)
            })), i(this, "memberNames", function() {
                return e.xmlOrder || Object.keys(e.members)
            }), e.event && (i(this, "eventPayloadMemberName", function() {
                for (var e = r.members, t = r.memberNames, n = 0, i = t.length; n < i; n++)
                    if (e[t[n]].isEventPayload) return t[n]
            }), i(this, "eventHeaderMemberNames", function() {
                for (var e = r.members, t = r.memberNames, n = [], i = 0, s = t.length; i < s; i++) e[t[i]].isEventHeader && n.push(t[i]);
                return n
            }))), e.required && (n(this, "required", e.required), n(this, "isRequired", function(t) {
                if (!a) {
                    a = {};
                    for (var r = 0; r < e.required.length; r++) a[e.required[r]] = !0
                }
                return a[t]
            }, !1, !0)), n(this, "resultWrapper", e.resultWrapper || null), e.payload && n(this, "payload", e.payload), "string" == typeof e.xmlNamespace ? n(this, "xmlNamespaceUri", e.xmlNamespace) : "object" == typeof e.xmlNamespace && (n(this, "xmlNamespacePrefix", e.xmlNamespace.prefix), n(this, "xmlNamespaceUri", e.xmlNamespace.uri))
        }

        function u(e, t) {
            var r = this,
                a = !this.isShape;
            if (o.apply(this, arguments), a && n(this, "defaultValue", function() {
                    return []
                }), e.member && i(this, "member", function() {
                    return s.create(e.member, t)
                }), this.flattened) {
                var u = this.name;
                i(this, "name", function() {
                    return r.member.name || u
                })
            }
        }

        function c(e, t) {
            var r = !this.isShape;
            o.apply(this, arguments), r && (n(this, "defaultValue", function() {
                return {}
            }), n(this, "key", s.create({
                type: "string"
            }, t)), n(this, "value", s.create({
                type: "string"
            }, t))), e.key && i(this, "key", function() {
                return s.create(e.key, t)
            }), e.value && i(this, "value", function() {
                return s.create(e.value, t)
            })
        }

        function h(e) {
            var t = this;
            if (s.apply(this, arguments), e.timestampFormat) n(this, "timestampFormat", e.timestampFormat);
            else if (t.isTimestampFormatSet && this.timestampFormat) n(this, "timestampFormat", this.timestampFormat);
            else if ("header" === this.location) n(this, "timestampFormat", "rfc822");
            else if ("querystring" === this.location) n(this, "timestampFormat", "iso8601");
            else if (this.api) switch (this.api.protocol) {
                case "json":
                case "rest-json":
                    n(this, "timestampFormat", "unixTimestamp");
                    break;
                case "rest-xml":
                case "query":
                case "ec2":
                    n(this, "timestampFormat", "iso8601")
            }
            this.toType = function(e) {
                return null === e || void 0 === e ? null : "function" == typeof e.toUTCString ? e : "string" == typeof e || "number" == typeof e ? y.date.parseTimestamp(e) : null
            }, this.toWireFormat = function(e) {
                return y.date.format(e, t.timestampFormat)
            }
        }

        function l() {
            s.apply(this, arguments);
            var e = ["rest-xml", "query", "ec2"];
            this.toType = function(t) {
                return t = this.api && e.indexOf(this.api.protocol) > -1 ? t || "" : t, this.isJsonValue ? JSON.parse(t) : t && "function" == typeof t.toString ? t.toString() : t
            }, this.toWireFormat = function(e) {
                return this.isJsonValue ? JSON.stringify(e) : e
            }
        }

        function f() {
            s.apply(this, arguments), this.toType = function(e) {
                return null === e || void 0 === e ? null : parseFloat(e)
            }, this.toWireFormat = this.toType
        }

        function p() {
            s.apply(this, arguments), this.toType = function(e) {
                return null === e || void 0 === e ? null : parseInt(e, 10)
            }, this.toWireFormat = this.toType
        }

        function d() {
            s.apply(this, arguments), this.toType = y.base64.decode, this.toWireFormat = y.base64.encode
        }

        function m() {
            d.apply(this, arguments)
        }

        function v() {
            s.apply(this, arguments), this.toType = function(e) {
                return "boolean" == typeof e ? e : null === e || void 0 === e ? null : "true" === e
            }
        }
        var g = e("./collection"),
            y = e("../util");
        s.normalizedTypes = {
            character: "string",
            double: "float",
            long: "integer",
            short: "integer",
            biginteger: "integer",
            bigdecimal: "float",
            blob: "binary"
        }, s.types = {
            structure: a,
            list: u,
            map: c,
            boolean: v,
            timestamp: h,
            float: f,
            integer: p,
            string: l,
            base64: m,
            binary: d
        }, s.resolve = function(e, t) {
            if (e.shape) {
                var r = t.api.shapes[e.shape];
                if (!r) throw new Error("Cannot find shape reference: " + e.shape);
                return r
            }
            return null
        }, s.create = function(e, t, r) {
            if (e.isShape) return e;
            var n = s.resolve(e, t);
            if (n) {
                var i = Object.keys(e);
                t.documentation || (i = i.filter(function(e) {
                    return !e.match(/documentation/)
                }));
                var o = function() {
                    n.constructor.call(this, e, t, r)
                };
                return o.prototype = n, new o
            }
            e.type || (e.members ? e.type = "structure" : e.member ? e.type = "list" : e.key ? e.type = "map" : e.type = "string");
            var a = e.type;
            if (s.normalizedTypes[e.type] && (e.type = s.normalizedTypes[e.type]), s.types[e.type]) return new s.types[e.type](e, t, r);
            throw new Error("Unrecognized shape type: " + a)
        }, s.shapes = {
            StructureShape: a,
            ListShape: u,
            MapShape: c,
            StringShape: l,
            BooleanShape: v,
            Base64Shape: m
        }, t.exports = s
    }, {
        "../util": 113,
        "./collection": 64
    }],
    64: [function(e, t, r) {
        function n(e, t, r, n) {
            s(this, n(e), function() {
                return r(e, t)
            })
        }

        function i(e, t, r, i) {
            i = i || String;
            var s = this;
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && n.call(s, o, e[o], r, i)
        }
        var s = e("../util").memoizedProperty;
        t.exports = i
    }, {
        "../util": 113
    }],
    71: [function(e, t, r) {
        function n(e) {
            var t = e.httpRequest,
                r = e.service.api,
                n = r.targetPrefix + "." + r.operations[e.operation].name,
                i = r.jsonVersion || "1.0",
                s = r.operations[e.operation].input,
                o = new a;
            1 === i && (i = "1.0"), t.body = o.build(e.params || {}, s), t.headers["Content-Type"] = "application/x-amz-json-" + i, t.headers["X-Amz-Target"] = n
        }

        function i(e) {
            var t = {},
                r = e.httpResponse;
            if (t.code = r.headers["x-amzn-errortype"] || "UnknownError", "string" == typeof t.code && (t.code = t.code.split(":")[0]), r.body.length > 0) try {
                var n = JSON.parse(r.body.toString());
                (n.__type || n.code) && (t.code = (n.__type || n.code).split("#").pop()), "RequestEntityTooLarge" === t.code ? t.message = "Request body must be less than 1 MB" : t.message = n.message || n.Message || null
            } catch (n) {
                t.statusCode = r.statusCode, t.message = r.statusMessage
            } else t.statusCode = r.statusCode, t.message = r.statusCode.toString();
            e.error = o.error(new Error, t)
        }

        function s(e) {
            var t = e.httpResponse.body.toString() || "{}";
            if (!1 === e.request.service.config.convertResponseTypes) e.data = JSON.parse(t);
            else {
                var r = e.request.service.api.operations[e.request.operation],
                    n = r.output || {},
                    i = new u;
                e.data = i.parse(t, n)
            }
        }
        var o = e("../util"),
            a = e("../json/builder"),
            u = e("../json/parser");
        t.exports = {
            buildRequest: n,
            extractError: i,
            extractData: s
        }
    }, {
        "../json/builder": 61,
        "../json/parser": 62,
        "../util": 113
    }],
    62: [function(e, t, r) {
        function n() {}

        function i(e, t) {
            if (t && void 0 !== e) switch (t.type) {
                case "structure":
                    return s(e, t);
                case "map":
                    return a(e, t);
                case "list":
                    return o(e, t);
                default:
                    return u(e, t)
            }
        }

        function s(e, t) {
            if (null != e) {
                var r = {},
                    n = t.members;
                return c.each(n, function(t, n) {
                    var s = n.isLocationName ? n.name : t;
                    if (Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = e[s],
                            a = i(o, n);
                        void 0 !== a && (r[t] = a)
                    }
                }), r
            }
        }

        function o(e, t) {
            if (null != e) {
                var r = [];
                return c.arrayEach(e, function(e) {
                    var n = i(e, t.member);
                    void 0 === n ? r.push(null) : r.push(n)
                }), r
            }
        }

        function a(e, t) {
            if (null != e) {
                var r = {};
                return c.each(e, function(e, n) {
                    var s = i(n, t.value);
                    r[e] = void 0 === s ? null : s
                }), r
            }
        }

        function u(e, t) {
            return t.toType(e)
        }
        var c = e("../util");
        n.prototype.parse = function(e, t) {
            return i(JSON.parse(e), t)
        }, t.exports = n
    }, {
        "../util": 113
    }],
    61: [function(e, t, r) {
        function n() {}

        function i(e, t) {
            if (t && void 0 !== e && null !== e) switch (t.type) {
                case "structure":
                    return s(e, t);
                case "map":
                    return a(e, t);
                case "list":
                    return o(e, t);
                default:
                    return u(e, t)
            }
        }

        function s(e, t) {
            var r = {};
            return c.each(e, function(e, n) {
                var s = t.members[e];
                if (s) {
                    if ("body" !== s.location) return;
                    var o = s.isLocationName ? s.name : e,
                        a = i(n, s);
                    void 0 !== a && (r[o] = a)
                }
            }), r
        }

        function o(e, t) {
            var r = [];
            return c.arrayEach(e, function(e) {
                var n = i(e, t.member);
                void 0 !== n && r.push(n)
            }), r
        }

        function a(e, t) {
            var r = {};
            return c.each(e, function(e, n) {
                var s = i(n, t.value);
                void 0 !== s && (r[e] = s)
            }), r
        }

        function u(e, t) {
            return t.toWireFormat(e)
        }
        var c = e("../util");
        n.prototype.build = function(e, t) {
            return JSON.stringify(i(e, t))
        }, t.exports = n
    }, {
        "../util": 113
    }],
    113: [function(e, t, r) {
        (function(r, n) {
            var i, s = {
                environment: "nodejs",
                engine: function() {
                    if (s.isBrowser() && "undefined" != typeof navigator) return navigator.userAgent;
                    var e = r.platform + "/" + r.version;
                    return r.env.AWS_EXECUTION_ENV && (e += " exec-env/" + r.env.AWS_EXECUTION_ENV), e
                },
                userAgent: function() {
                    var t = s.environment,
                        r = "aws-sdk-" + t + "/" + e("./core").VERSION;
                    return "nodejs" === t && (r += " " + s.engine()), r
                },
                isBrowser: function() {
                    return r && r.browser
                },
                isNode: function() {
                    return !s.isBrowser()
                },
                uriEscape: function(e) {
                    var t = encodeURIComponent(e);
                    return t = t.replace(/[^A-Za-z0-9_.~\-%]+/g, escape), t = t.replace(/[*]/g, function(e) {
                        return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                    })
                },
                uriEscapePath: function(e) {
                    var t = [];
                    return s.arrayEach(e.split("/"), function(e) {
                        t.push(s.uriEscape(e))
                    }), t.join("/")
                },
                urlParse: function(e) {
                    return s.url.parse(e)
                },
                urlFormat: function(e) {
                    return s.url.format(e)
                },
                queryStringParse: function(e) {
                    return s.querystring.parse(e)
                },
                queryParamsToString: function(e) {
                    var t = [],
                        r = s.uriEscape,
                        n = Object.keys(e).sort();
                    return s.arrayEach(n, function(n) {
                        var i = e[n],
                            o = r(n),
                            a = o + "=";
                        if (Array.isArray(i)) {
                            var u = [];
                            s.arrayEach(i, function(e) {
                                u.push(r(e))
                            }), a = o + "=" + u.sort().join("&" + o + "=")
                        } else void 0 !== i && null !== i && (a = o + "=" + r(i));
                        t.push(a)
                    }), t.join("&")
                },
                readFileSync: function(t) {
                    return s.isBrowser() ? null : e("fs").readFileSync(t, "utf-8")
                },
                base64: {
                    encode: function(e) {
                        if ("number" == typeof e) throw s.error(new Error("Cannot base64 encode number " + e));
                        return null === e || void 0 === e ? e : ("function" == typeof s.Buffer.from && s.Buffer.from !== Uint8Array.from ? s.Buffer.from(e) : new s.Buffer(e)).toString("base64")
                    },
                    decode: function(e) {
                        if ("number" == typeof e) throw s.error(new Error("Cannot base64 decode number " + e));
                        return null === e || void 0 === e ? e : "function" == typeof s.Buffer.from && s.Buffer.from !== Uint8Array.from ? s.Buffer.from(e, "base64") : new s.Buffer(e, "base64")
                    }
                },
                buffer: {
                    toStream: function(e) {
                        s.Buffer.isBuffer(e) || (e = new s.Buffer(e));
                        var t = new s.stream.Readable,
                            r = 0;
                        return t._read = function(n) {
                            if (r >= e.length) return t.push(null);
                            var i = r + n;
                            i > e.length && (i = e.length), t.push(e.slice(r, i)), r = i
                        }, t
                    },
                    concat: function(e) {
                        var t, r = 0,
                            n = 0,
                            i = null;
                        for (t = 0; t < e.length; t++) r += e[t].length;
                        for (i = new s.Buffer(r), t = 0; t < e.length; t++) e[t].copy(i, n), n += e[t].length;
                        return i
                    }
                },
                string: {
                    byteLength: function(t) {
                        if (null === t || void 0 === t) return 0;
                        if ("string" == typeof t && (t = new s.Buffer(t)), "number" == typeof t.byteLength) return t.byteLength;
                        if ("number" == typeof t.length) return t.length;
                        if ("number" == typeof t.size) return t.size;
                        if ("string" == typeof t.path) return e("fs").lstatSync(t.path).size;
                        throw s.error(new Error("Cannot determine length of " + t), {
                            object: t
                        })
                    },
                    upperFirst: function(e) {
                        return e[0].toUpperCase() + e.substr(1)
                    },
                    lowerFirst: function(e) {
                        return e[0].toLowerCase() + e.substr(1)
                    }
                },
                ini: {
                    parse: function(e) {
                        var t, r = {};
                        return s.arrayEach(e.split(/\r?\n/), function(e) {
                            e = e.split(/(^|\s)[;#]/)[0];
                            var n = e.match(/^\s*\[([^\[\]]+)\]\s*$/);
                            if (n) t = n[1];
                            else if (t) {
                                var i = e.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);
                                i && (r[t] = r[t] || {}, r[t][i[1]] = i[2])
                            }
                        }), r
                    }
                },
                fn: {
                    noop: function() {},
                    makeAsync: function(e, t) {
                        return t && t <= e.length ? e : function() {
                            var t = Array.prototype.slice.call(arguments, 0);
                            t.pop()(e.apply(null, t))
                        }
                    }
                },
                date: {
                    getDate: function() {
                        return i || (i = e("./core")), i.config.systemClockOffset ? new Date((new Date).getTime() + i.config.systemClockOffset) : new Date
                    },
                    iso8601: function(e) {
                        return void 0 === e && (e = s.date.getDate()), e.toISOString().replace(/\.\d{3}Z$/, "Z")
                    },
                    rfc822: function(e) {
                        return void 0 === e && (e = s.date.getDate()), e.toUTCString()
                    },
                    unixTimestamp: function(e) {
                        return void 0 === e && (e = s.date.getDate()), e.getTime() / 1e3
                    },
                    from: function(e) {
                        return "number" == typeof e ? new Date(1e3 * e) : new Date(e)
                    },
                    format: function(e, t) {
                        return t || (t = "iso8601"), s.date[t](s.date.from(e))
                    },
                    parseTimestamp: function(e) {
                        if ("number" == typeof e) return new Date(1e3 * e);
                        if (e.match(/^\d+$/)) return new Date(1e3 * e);
                        if (e.match(/^\d{4}/)) return new Date(e);
                        if (e.match(/^\w{3},/)) return new Date(e);
                        throw s.error(new Error("unhandled timestamp format: " + e), {
                            code: "TimestampParserError"
                        })
                    }
                },
                crypto: {
                    crc32Table: [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
                    crc32: function(e) {
                        var t = s.crypto.crc32Table,
                            r = -1;
                        "string" == typeof e && (e = new s.Buffer(e));
                        for (var n = 0; n < e.length; n++) {
                            r = r >>> 8 ^ t[255 & (r ^ e.readUInt8(n))]
                        }
                        return (-1 ^ r) >>> 0
                    },
                    hmac: function(e, t, r, n) {
                        return r || (r = "binary"), "buffer" === r && (r = void 0), n || (n = "sha256"), "string" == typeof t && (t = new s.Buffer(t)), s.crypto.lib.createHmac(n, e).update(t).digest(r)
                    },
                    md5: function(e, t, r) {
                        return s.crypto.hash("md5", e, t, r)
                    },
                    sha256: function(e, t, r) {
                        return s.crypto.hash("sha256", e, t, r)
                    },
                    hash: function(e, t, r, n) {
                        var i = s.crypto.createHash(e);
                        r || (r = "binary"), "buffer" === r && (r = void 0), "string" == typeof t && (t = new s.Buffer(t));
                        var o = s.arraySliceFn(t),
                            a = s.Buffer.isBuffer(t);
                        if (s.isBrowser() && "undefined" != typeof ArrayBuffer && t && t.buffer instanceof ArrayBuffer && (a = !0), n && "object" == typeof t && "function" == typeof t.on && !a) t.on("data", function(e) {
                            i.update(e)
                        }), t.on("error", function(e) {
                            n(e)
                        }), t.on("end", function() {
                            n(null, i.digest(r))
                        });
                        else {
                            if (!n || !o || a || "undefined" == typeof FileReader) {
                                s.isBrowser() && "object" == typeof t && !a && (t = new s.Buffer(new Uint8Array(t)));
                                var u = i.update(t).digest(r);
                                return n && n(null, u), u
                            }
                            var c = 0,
                                h = new FileReader;
                            h.onerror = function() {
                                n(new Error("Failed to read data."))
                            }, h.onload = function() {
                                var e = new s.Buffer(new Uint8Array(h.result));
                                i.update(e), c += e.length, h._continueReading()
                            }, h._continueReading = function() {
                                if (c >= t.size) return void n(null, i.digest(r));
                                var e = c + 524288;
                                e > t.size && (e = t.size), h.readAsArrayBuffer(o.call(t, c, e))
                            }, h._continueReading()
                        }
                    },
                    toHex: function(e) {
                        for (var t = [], r = 0; r < e.length; r++) t.push(("0" + e.charCodeAt(r).toString(16)).substr(-2, 2));
                        return t.join("")
                    },
                    createHash: function(e) {
                        return s.crypto.lib.createHash(e)
                    }
                },
                abort: {},
                each: function(e, t) {
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r)) {
                            var n = t.call(this, r, e[r]);
                            if (n === s.abort) break
                        }
                },
                arrayEach: function(e, t) {
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r)) {
                            var n = t.call(this, e[r], parseInt(r, 10));
                            if (n === s.abort) break
                        }
                },
                update: function(e, t) {
                    return s.each(t, function(t, r) {
                        e[t] = r
                    }), e
                },
                merge: function(e, t) {
                    return s.update(s.copy(e), t)
                },
                copy: function(e) {
                    if (null === e || void 0 === e) return e;
                    var t = {};
                    for (var r in e) t[r] = e[r];
                    return t
                },
                isEmpty: function(e) {
                    for (var t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                    return !0
                },
                arraySliceFn: function(e) {
                    var t = e.slice || e.webkitSlice || e.mozSlice;
                    return "function" == typeof t ? t : null
                },
                isType: function(e, t) {
                    return "function" == typeof t && (t = s.typeName(t)), Object.prototype.toString.call(e) === "[object " + t + "]"
                },
                typeName: function(e) {
                    if (Object.prototype.hasOwnProperty.call(e, "name")) return e.name;
                    var t = e.toString(),
                        r = t.match(/^\s*function (.+)\(/);
                    return r ? r[1] : t
                },
                error: function(e, t) {
                    var r = null;
                    return "string" == typeof e.message && "" !== e.message && ("string" == typeof t || t && t.message) && (r = s.copy(e), r.message = e.message), e.message = e.message || null, "string" == typeof t ? e.message = t : "object" == typeof t && null !== t && (s.update(e, t), t.message && (e.message = t.message), (t.code || t.name) && (e.code = t.code || t.name), t.stack && (e.stack = t.stack)), "function" == typeof Object.defineProperty && (Object.defineProperty(e, "name", {
                        writable: !0,
                        enumerable: !1
                    }), Object.defineProperty(e, "message", {
                        enumerable: !0
                    })), e.name = t && t.name || e.name || e.code || "Error", e.time = new Date, r && (e.originalError = r), e
                },
                inherit: function(e, t) {
                    var r = null;
                    if (void 0 === t) t = e, e = Object, r = {};
                    else {
                        var n = function() {};
                        n.prototype = e.prototype, r = new n
                    }
                    return t.constructor === Object && (t.constructor = function() {
                        if (e !== Object) return e.apply(this, arguments)
                    }), t.constructor.prototype = r, s.update(t.constructor.prototype, t), t.constructor.__super__ = e, t.constructor
                },
                mixin: function() {
                    for (var e = arguments[0], t = 1; t < arguments.length; t++)
                        for (var r in arguments[t].prototype) {
                            var n = arguments[t].prototype[r];
                            "constructor" !== r && (e.prototype[r] = n)
                        }
                    return e
                },
                hideProperties: function(e, t) {
                    "function" == typeof Object.defineProperty && s.arrayEach(t, function(t) {
                        Object.defineProperty(e, t, {
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        })
                    })
                },
                property: function(e, t, r, n, i) {
                    var s = {
                        configurable: !0,
                        enumerable: void 0 === n || n
                    };
                    "function" != typeof r || i ? (s.value = r, s.writable = !0) : s.get = r, Object.defineProperty(e, t, s)
                },
                memoizedProperty: function(e, t, r, n) {
                    var i = null;
                    s.property(e, t, function() {
                        return null === i && (i = r()), i
                    }, n)
                },
                hoistPayloadMember: function(e) {
                    var t = e.request,
                        r = t.operation,
                        n = t.service.api.operations[r],
                        i = n.output;
                    if (i.payload && !n.hasEventOutput) {
                        var o = i.members[i.payload],
                            a = e.data[i.payload];
                        "structure" === o.type && s.each(a, function(t, r) {
                            s.property(e.data, t, r, !1)
                        })
                    }
                },
                computeSha256: function(t, r) {
                    if (s.isNode()) {
                        var n = s.stream.Stream,
                            i = e("fs");
                        if (t instanceof n) {
                            if ("string" != typeof t.path) return r(new Error("Non-file stream objects are not supported with SigV4"));
                            var o = {};
                            "number" == typeof t.start && (o.start = t.start), "number" == typeof t.end && (o.end = t.end), t = i.createReadStream(t.path, o)
                        }
                    }
                    s.crypto.sha256(t, "hex", function(e, t) {
                        e ? r(e) : r(null, t)
                    })
                },
                isClockSkewed: function(e) {
                    if (e) return s.property(i.config, "isClockSkewed", Math.abs((new Date).getTime() - e) >= 3e5, !1), i.config.isClockSkewed
                },
                applyClockOffset: function(e) {
                    e && (i.config.systemClockOffset = e - (new Date).getTime())
                },
                extractRequestId: function(e) {
                    var t = e.httpResponse.headers["x-amz-request-id"] || e.httpResponse.headers["x-amzn-requestid"];
                    !t && e.data && e.data.ResponseMetadata && (t = e.data.ResponseMetadata.RequestId), t && (e.requestId = t), e.error && (e.error.requestId = t)
                },
                addPromises: function(e, t) {
                    var r = !1;
                    void 0 === t && i && i.config && (t = i.config.getPromisesDependency()), void 0 === t && "undefined" != typeof Promise && (t = Promise), "function" != typeof t && (r = !0), Array.isArray(e) || (e = [e]);
                    for (var n = 0; n < e.length; n++) {
                        var s = e[n];
                        r ? s.deletePromisesFromClass && s.deletePromisesFromClass() : s.addPromisesToClass && s.addPromisesToClass(t)
                    }
                },
                promisifyMethod: function(e, t) {
                    return function() {
                        var r = this;
                        return new t(function(t, n) {
                            r[e](function(e, r) {
                                e ? n(e) : t(r)
                            })
                        })
                    }
                },
                isDualstackAvailable: function(t) {
                    if (!t) return !1;
                    var r = e("../apis/metadata.json");
                    return "string" != typeof t && (t = t.serviceIdentifier), !("string" != typeof t || !r.hasOwnProperty(t)) && !!r[t].dualstackAvailable
                },
                calculateRetryDelay: function(e, t) {
                    t || (t = {});
                    var r = t.customBackoff || null;
                    if ("function" == typeof r) return r(e);
                    var n = "number" == typeof t.base ? t.base : 100;
                    return Math.random() * (Math.pow(2, e) * n)
                },
                handleRequestWithRetries: function(e, t, r) {
                    t || (t = {});
                    var n = i.HttpClient.getInstance(),
                        o = t.httpOptions || {},
                        a = 0,
                        u = function(e) {
                            var n = t.maxRetries || 0;
                            if (e && "TimeoutError" === e.code && (e.retryable = !0), e && e.retryable && a < n) {
                                a++;
                                var i = s.calculateRetryDelay(a, t.retryDelayOptions);
                                setTimeout(c, i + (e.retryAfter || 0))
                            } else r(e)
                        },
                        c = function() {
                            var t = "";
                            n.handleRequest(e, o, function(e) {
                                e.on("data", function(e) {
                                    t += e.toString()
                                }), e.on("end", function() {
                                    var n = e.statusCode;
                                    if (n < 300) r(null, t);
                                    else {
                                        var i = 1e3 * parseInt(e.headers["retry-after"], 10) || 0,
                                            o = s.error(new Error, {
                                                retryable: n >= 500 || 429 === n
                                            });
                                        i && o.retryable && (o.retryAfter = i), u(o)
                                    }
                                })
                            }, u)
                        };
                    i.util.defer(c)
                },
                uuid: {
                    v4: function() {
                        return e("uuid").v4()
                    }
                },
                convertPayloadToString: function(e) {
                    var t = e.request,
                        r = t.operation,
                        n = t.service.api.operations[r].output || {};
                    n.payload && e.data[n.payload] && (e.data[n.payload] = e.data[n.payload].toString())
                },
                defer: function(e) {
                    "object" == typeof r && "function" == typeof r.nextTick ? r.nextTick(e) : "function" == typeof n ? n(e) : setTimeout(e, 0)
                },
                defaultProfile: "default",
                configOptInEnv: "AWS_SDK_LOAD_CONFIG",
                sharedCredentialsFileEnv: "AWS_SHARED_CREDENTIALS_FILE",
                sharedConfigFileEnv: "AWS_CONFIG_FILE",
                imdsDisabledEnv: "AWS_EC2_METADATA_DISABLED"
            };
            t.exports = s
        }).call(this, e("_process"), e("timers").setImmediate)
    }, {
        "../apis/metadata.json": 26,
        "./core": 38,
        _process: 9,
        fs: 2,
        timers: 17,
        uuid: 21
    }],
    37: [function(e, t, r) {
        var n = e("./core");
        e("./credentials"), e("./credentials/credential_provider_chain");
        var i;
        n.Config = n.util.inherit({
            constructor: function(e) {
                void 0 === e && (e = {}), e = this.extractCredentials(e), n.util.each.call(this, this.keys, function(t, r) {
                    this.set(t, e[t], r)
                })
            },
            getCredentials: function(e) {
                function t(t) {
                    e(t, t ? null : i.credentials)
                }

                function r(e, t) {
                    return new n.util.error(t || new Error, {
                        code: "CredentialsError",
                        message: e,
                        name: "CredentialsError"
                    })
                }
                var i = this;
                i.credentials ? "function" == typeof i.credentials.get ? function() {
                    i.credentials.get(function(e) {
                        e && (e = r("Could not load credentials from " + i.credentials.constructor.name, e)), t(e)
                    })
                }() : function() {
                    var e = null;
                    i.credentials.accessKeyId && i.credentials.secretAccessKey || (e = r("Missing credentials")), t(e)
                }() : i.credentialProvider ? i.credentialProvider.resolve(function(e, n) {
                    e && (e = r("Could not load credentials from any providers", e)), i.credentials = n, t(e)
                }) : t(r("No credentials to load"))
            },
            update: function(e, t) {
                t = t || !1, e = this.extractCredentials(e), n.util.each.call(this, e, function(e, r) {
                    (t || Object.prototype.hasOwnProperty.call(this.keys, e) || n.Service.hasService(e)) && this.set(e, r)
                })
            },
            loadFromPath: function(e) {
                this.clear();
                var t = JSON.parse(n.util.readFileSync(e)),
                    r = new n.FileSystemCredentials(e),
                    i = new n.CredentialProviderChain;
                return i.providers.unshift(r), i.resolve(function(e, r) {
                    if (e) throw e;
                    t.credentials = r
                }), this.constructor(t), this
            },
            clear: function() {
                n.util.each.call(this, this.keys, function(e) {
                    delete this[e]
                }), this.set("credentials", void 0), this.set("credentialProvider", void 0)
            },
            set: function(e, t, r) {
                void 0 === t ? (void 0 === r && (r = this.keys[e]), this[e] = "function" == typeof r ? r.call(this) : r) : "httpOptions" === e && this[e] ? this[e] = n.util.merge(this[e], t) : this[e] = t
            },
            keys: {
                credentials: null,
                credentialProvider: null,
                region: null,
                logger: null,
                apiVersions: {},
                apiVersion: null,
                endpoint: void 0,
                httpOptions: {
                    timeout: 12e4
                },
                maxRetries: void 0,
                maxRedirects: 10,
                paramValidation: !0,
                sslEnabled: !0,
                s3ForcePathStyle: !1,
                s3BucketEndpoint: !1,
                s3DisableBodySigning: !0,
                computeChecksums: !0,
                convertResponseTypes: !0,
                correctClockSkew: !1,
                customUserAgent: null,
                dynamoDbCrc32: !0,
                systemClockOffset: 0,
                signatureVersion: null,
                signatureCache: !0,
                retryDelayOptions: {},
                useAccelerateEndpoint: !1,
                clientSideMonitoring: !1
            },
            extractCredentials: function(e) {
                return e.accessKeyId && e.secretAccessKey && (e = n.util.copy(e), e.credentials = new n.Credentials(e)), e
            },
            setPromisesDependency: function(e) {
                i = e, null === e && "function" == typeof Promise && (i = Promise);
                var t = [n.Request, n.Credentials, n.CredentialProviderChain];
                n.S3 && n.S3.ManagedUpload && t.push(n.S3.ManagedUpload), n.util.addPromises(t, i)
            },
            getPromisesDependency: function() {
                return i
            }
        }), n.config = new n.Config
    }, {
        "./core": 38,
        "./credentials": 39,
        "./credentials/credential_provider_chain": 41
    }],
    41: [function(e, t, r) {
        var n = e("../core");
        n.CredentialProviderChain = n.util.inherit(n.Credentials, {
            constructor: function(e) {
                this.providers = e || n.CredentialProviderChain.defaultProviders.slice(0)
            },
            resolve: function(e) {
                function t(i, s) {
                    if (!i && s || r === n.length) return void e(i, s);
                    var o = n[r++];
                    s = "function" == typeof o ? o.call() : o, s.get ? s.get(function(e) {
                        t(e, e ? null : s)
                    }) : t(null, s)
                }
                if (0 === this.providers.length) return e(new Error("No providers")), this;
                var r = 0,
                    n = this.providers.slice(0);
                return t(), this
            }
        }), n.CredentialProviderChain.defaultProviders = [], n.CredentialProviderChain.addPromisesToClass = function(e) {
            this.prototype.resolvePromise = n.util.promisifyMethod("resolve", e)
        }, n.CredentialProviderChain.deletePromisesFromClass = function() {
            delete this.prototype.resolvePromise
        }, n.util.addPromises(n.CredentialProviderChain)
    }, {
        "../core": 38
    }],
    39: [function(e, t, r) {
        var n = e("./core");
        n.Credentials = n.util.inherit({
            constructor: function() {
                if (n.util.hideProperties(this, ["secretAccessKey"]), this.expired = !1, this.expireTime = null, 1 === arguments.length && "object" == typeof arguments[0]) {
                    var e = arguments[0].credentials || arguments[0];
                    this.accessKeyId = e.accessKeyId, this.secretAccessKey = e.secretAccessKey, this.sessionToken = e.sessionToken
                } else this.accessKeyId = arguments[0], this.secretAccessKey = arguments[1], this.sessionToken = arguments[2]
            },
            expiryWindow: 15,
            needsRefresh: function() {
                var e = n.util.date.getDate().getTime(),
                    t = new Date(e + 1e3 * this.expiryWindow);
                return !!(this.expireTime && t > this.expireTime) || (this.expired || !this.accessKeyId || !this.secretAccessKey)
            },
            get: function(e) {
                var t = this;
                this.needsRefresh() ? this.refresh(function(r) {
                    r || (t.expired = !1), e && e(r)
                }) : e && e()
            },
            refresh: function(e) {
                this.expired = !1, e()
            }
        }), n.Credentials.addPromisesToClass = function(e) {
            this.prototype.getPromise = n.util.promisifyMethod("get", e), this.prototype.refreshPromise = n.util.promisifyMethod("refresh", e)
        }, n.Credentials.deletePromisesFromClass = function() {
            delete this.prototype.getPromise, delete this.prototype.refreshPromise
        }, n.util.addPromises(n.Credentials)
    }, {
        "./core": 38
    }],
    27: [function(e, t, r) {
        function n(e, t) {
            if (!n.services.hasOwnProperty(e)) throw new Error("InvalidService: Failed to load api for " + e);
            return n.services[e][t]
        }
        n.services = {}, t.exports = n
    }, {}],
    26: [function(e, t, r) {
        t.exports = {
            acm: {
                name: "ACM",
                cors: !0
            },
            apigateway: {
                name: "APIGateway",
                cors: !0
            },
            applicationautoscaling: {
                prefix: "application-autoscaling",
                name: "ApplicationAutoScaling",
                cors: !0
            },
            appstream: {
                name: "AppStream"
            },
            autoscaling: {
                name: "AutoScaling",
                cors: !0
            },
            batch: {
                name: "Batch"
            },
            budgets: {
                name: "Budgets"
            },
            clouddirectory: {
                name: "CloudDirectory",
                versions: ["2016-05-10*"]
            },
            cloudformation: {
                name: "CloudFormation",
                cors: !0
            },
            cloudfront: {
                name: "CloudFront",
                versions: ["2013-05-12*", "2013-11-11*", "2014-05-31*", "2014-10-21*", "2014-11-06*", "2015-04-17*", "2015-07-27*", "2015-09-17*", "2016-01-13*", "2016-01-28*", "2016-08-01*", "2016-08-20*", "2016-09-07*", "2016-09-29*", "2016-11-25*", "2017-03-25*", "2017-10-30*"],
                cors: !0
            },
            cloudhsm: {
                name: "CloudHSM",
                cors: !0
            },
            cloudsearch: {
                name: "CloudSearch"
            },
            cloudsearchdomain: {
                name: "CloudSearchDomain"
            },
            cloudtrail: {
                name: "CloudTrail",
                cors: !0
            },
            cloudwatch: {
                prefix: "monitoring",
                name: "CloudWatch",
                cors: !0
            },
            cloudwatchevents: {
                prefix: "events",
                name: "CloudWatchEvents",
                versions: ["2014-02-03*"],
                cors: !0
            },
            cloudwatchlogs: {
                prefix: "logs",
                name: "CloudWatchLogs",
                cors: !0
            },
            codebuild: {
                name: "CodeBuild",
                cors: !0
            },
            codecommit: {
                name: "CodeCommit",
                cors: !0
            },
            codedeploy: {
                name: "CodeDeploy",
                cors: !0
            },
            codepipeline: {
                name: "CodePipeline",
                cors: !0
            },
            cognitoidentity: {
                prefix: "cognito-identity",
                name: "CognitoIdentity",
                cors: !0
            },
            cognitoidentityserviceprovider: {
                prefix: "cognito-idp",
                name: "CognitoIdentityServiceProvider",
                cors: !0
            },
            cognitosync: {
                prefix: "cognito-sync",
                name: "CognitoSync",
                cors: !0
            },
            configservice: {
                prefix: "config",
                name: "ConfigService",
                cors: !0
            },
            cur: {
                name: "CUR",
                cors: !0
            },
            datapipeline: {
                name: "DataPipeline"
            },
            devicefarm: {
                name: "DeviceFarm",
                cors: !0
            },
            directconnect: {
                name: "DirectConnect",
                cors: !0
            },
            directoryservice: {
                prefix: "ds",
                name: "DirectoryService"
            },
            discovery: {
                name: "Discovery"
            },
            dms: {
                name: "DMS"
            },
            dynamodb: {
                name: "DynamoDB",
                cors: !0
            },
            dynamodbstreams: {
                prefix: "streams.dynamodb",
                name: "DynamoDBStreams",
                cors: !0
            },
            ec2: {
                name: "EC2",
                versions: ["2013-06-15*", "2013-10-15*", "2014-02-01*", "2014-05-01*", "2014-06-15*", "2014-09-01*", "2014-10-01*", "2015-03-01*", "2015-04-15*", "2015-10-01*", "2016-04-01*", "2016-09-15*"],
                cors: !0
            },
            ecr: {
                name: "ECR",
                cors: !0
            },
            ecs: {
                name: "ECS",
                cors: !0
            },
            efs: {
                prefix: "elasticfilesystem",
                name: "EFS",
                cors: !0
            },
            elasticache: {
                name: "ElastiCache",
                versions: ["2012-11-15*", "2014-03-24*", "2014-07-15*", "2014-09-30*"],
                cors: !0
            },
            elasticbeanstalk: {
                name: "ElasticBeanstalk",
                cors: !0
            },
            elb: {
                prefix: "elasticloadbalancing",
                name: "ELB",
                cors: !0
            },
            elbv2: {
                prefix: "elasticloadbalancingv2",
                name: "ELBv2",
                cors: !0
            },
            emr: {
                prefix: "elasticmapreduce",
                name: "EMR",
                cors: !0
            },
            es: {
                name: "ES"
            },
            elastictranscoder: {
                name: "ElasticTranscoder",
                cors: !0
            },
            firehose: {
                name: "Firehose",
                cors: !0
            },
            gamelift: {
                name: "GameLift",
                cors: !0
            },
            glacier: {
                name: "Glacier"
            },
            health: {
                name: "Health"
            },
            iam: {
                name: "IAM"
            },
            importexport: {
                name: "ImportExport"
            },
            inspector: {
                name: "Inspector",
                versions: ["2015-08-18*"],
                cors: !0
            },
            iot: {
                name: "Iot",
                cors: !0
            },
            iotdata: {
                prefix: "iot-data",
                name: "IotData",
                cors: !0
            },
            kinesis: {
                name: "Kinesis",
                cors: !0
            },
            kinesisanalytics: {
                name: "KinesisAnalytics"
            },
            kms: {
                name: "KMS",
                cors: !0
            },
            lambda: {
                name: "Lambda",
                cors: !0
            },
            lexruntime: {
                prefix: "runtime.lex",
                name: "LexRuntime",
                cors: !0
            },
            lightsail: {
                name: "Lightsail"
            },
            machinelearning: {
                name: "MachineLearning",
                cors: !0
            },
            marketplacecommerceanalytics: {
                name: "MarketplaceCommerceAnalytics",
                cors: !0
            },
            marketplacemetering: {
                prefix: "meteringmarketplace",
                name: "MarketplaceMetering"
            },
            mturk: {
                prefix: "mturk-requester",
                name: "MTurk",
                cors: !0
            },
            mobileanalytics: {
                name: "MobileAnalytics",
                cors: !0
            },
            opsworks: {
                name: "OpsWorks",
                cors: !0
            },
            opsworkscm: {
                name: "OpsWorksCM"
            },
            organizations: {
                name: "Organizations"
            },
            pinpoint: {
                name: "Pinpoint"
            },
            polly: {
                name: "Polly",
                cors: !0
            },
            rds: {
                name: "RDS",
                versions: ["2014-09-01*"],
                cors: !0
            },
            redshift: {
                name: "Redshift",
                cors: !0
            },
            rekognition: {
                name: "Rekognition",
                cors: !0
            },
            resourcegroupstaggingapi: {
                name: "ResourceGroupsTaggingAPI"
            },
            route53: {
                name: "Route53",
                cors: !0
            },
            route53domains: {
                name: "Route53Domains",
                cors: !0
            },
            s3: {
                name: "S3",
                dualstackAvailable: !0,
                cors: !0
            },
            servicecatalog: {
                name: "ServiceCatalog",
                cors: !0
            },
            ses: {
                prefix: "email",
                name: "SES",
                cors: !0
            },
            shield: {
                name: "Shield"
            },
            simpledb: {
                prefix: "sdb",
                name: "SimpleDB"
            },
            sms: {
                name: "SMS"
            },
            snowball: {
                name: "Snowball"
            },
            sns: {
                name: "SNS",
                cors: !0
            },
            sqs: {
                name: "SQS",
                cors: !0
            },
            ssm: {
                name: "SSM",
                cors: !0
            },
            storagegateway: {
                name: "StorageGateway",
                cors: !0
            },
            stepfunctions: {
                prefix: "states",
                name: "StepFunctions"
            },
            sts: {
                name: "STS",
                cors: !0
            },
            support: {
                name: "Support"
            },
            swf: {
                name: "SWF"
            },
            xray: {
                name: "XRay"
            },
            waf: {
                name: "WAF",
                cors: !0
            },
            wafregional: {
                prefix: "waf-regional",
                name: "WAFRegional"
            },
            workdocs: {
                name: "WorkDocs",
                cors: !0
            },
            workspaces: {
                name: "WorkSpaces"
            },
            codestar: {
                name: "CodeStar"
            },
            lexmodelbuildingservice: {
                prefix: "lex-models",
                name: "LexModelBuildingService",
                cors: !0
            },
            marketplaceentitlementservice: {
                prefix: "entitlement.marketplace",
                name: "MarketplaceEntitlementService"
            },
            athena: {
                name: "Athena"
            },
            greengrass: {
                name: "Greengrass"
            },
            dax: {
                name: "DAX"
            },
            migrationhub: {
                prefix: "AWSMigrationHub",
                name: "MigrationHub"
            },
            cloudhsmv2: {
                name: "CloudHSMV2"
            },
            glue: {
                name: "Glue"
            },
            mobile: {
                name: "Mobile"
            },
            pricing: {
                name: "Pricing",
                cors: !0
            },
            costexplorer: {
                prefix: "ce",
                name: "CostExplorer"
            },
            mediaconvert: {
                name: "MediaConvert"
            },
            medialive: {
                name: "MediaLive"
            },
            mediapackage: {
                name: "MediaPackage"
            },
            mediastore: {
                name: "MediaStore"
            },
            mediastoredata: {
                prefix: "mediastore-data",
                name: "MediaStoreData"
            },
            appsync: {
                name: "AppSync"
            },
            guardduty: {
                name: "GuardDuty"
            },
            mq: {
                name: "MQ"
            },
            comprehend: {
                name: "Comprehend"
            },
            iotjobsdataplane: {
                prefix: "iot-jobs-data",
                name: "IoTJobsDataPlane"
            },
            kinesisvideoarchivedmedia: {
                prefix: "kinesis-video-archived-media",
                name: "KinesisVideoArchivedMedia",
                cors: !0
            },
            kinesisvideomedia: {
                prefix: "kinesis-video-media",
                name: "KinesisVideoMedia"
            },
            kinesisvideo: {
                name: "KinesisVideo",
                cors: !0
            },
            sagemakerruntime: {
                prefix: "runtime.sagemaker",
                name: "SageMakerRuntime"
            },
            sagemaker: {
                name: "SageMaker"
            },
            translate: {
                name: "Translate",
                cors: !0
            },
            resourcegroups: {
                prefix: "resource-groups",
                name: "ResourceGroups"
            },
            alexaforbusiness: {
                name: "AlexaForBusiness"
            },
            cloud9: {
                name: "Cloud9"
            },
            serverlessapplicationrepository: {
                prefix: "serverlessrepo",
                name: "ServerlessApplicationRepository"
            },
            servicediscovery: {
                name: "ServiceDiscovery"
            },
            workmail: {
                name: "WorkMail"
            },
            autoscalingplans: {
                prefix: "autoscaling-plans",
                name: "AutoScalingPlans"
            },
            transcribeservice: {
                prefix: "transcribe",
                name: "TranscribeService"
            },
            connect: {
                name: "Connect"
            },
            acmpca: {
                prefix: "acm-pca",
                name: "ACMPCA"
            },
            fms: {
                name: "FMS"
            },
            secretsmanager: {
                name: "SecretsManager",
                cors: !0
            },
            iotanalytics: {
                name: "IoTAnalytics"
            },
            iot1clickdevicesservice: {
                prefix: "iot1click-devices",
                name: "IoT1ClickDevicesService"
            },
            iot1clickprojects: {
                prefix: "iot1click-projects",
                name: "IoT1ClickProjects"
            },
            pi: {
                name: "PI"
            },
            neptune: {
                name: "Neptune"
            },
            mediatailor: {
                name: "MediaTailor"
            },
            eks: {
                name: "EKS"
            },
            macie: {
                name: "Macie"
            },
            dlm: {
                name: "DLM"
            },
            signer: {
                name: "Signer"
            }
        }
    }, {}],
    21: [function(e, t, r) {
        var n = e("./v1"),
            i = e("./v4"),
            s = i;
        s.v1 = n, s.v4 = i, t.exports = s
    }, {
        "./v1": 24,
        "./v4": 25
    }],
    25: [function(e, t, r) {
        function n(e, t, r) {
            var n = t && r || 0;
            "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null), e = e || {};
            var o = e.random || (e.rng || i)();
            if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t)
                for (var a = 0; a < 16; ++a) t[n + a] = o[a];
            return t || s(o)
        }
        var i = e("./lib/rng"),
            s = e("./lib/bytesToUuid");
        t.exports = n
    }, {
        "./lib/bytesToUuid": 22,
        "./lib/rng": 23
    }],
    24: [function(e, t, r) {
        function n(e, t, r) {
            var n = t && r || 0,
                i = t || [];
            e = e || {};
            var o = void 0 !== e.clockseq ? e.clockseq : u,
                l = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                f = void 0 !== e.nsecs ? e.nsecs : h + 1,
                p = l - c + (f - h) / 1e4;
            if (p < 0 && void 0 === e.clockseq && (o = o + 1 & 16383), (p < 0 || l > c) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            c = l, h = f, u = o, l += 122192928e5;
            var d = (1e4 * (268435455 & l) + f) % 4294967296;
            i[n++] = d >>> 24 & 255, i[n++] = d >>> 16 & 255, i[n++] = d >>> 8 & 255, i[n++] = 255 & d;
            var m = l / 4294967296 * 1e4 & 268435455;
            i[n++] = m >>> 8 & 255, i[n++] = 255 & m, i[n++] = m >>> 24 & 15 | 16, i[n++] = m >>> 16 & 255, i[n++] = o >>> 8 | 128, i[n++] = 255 & o;
            for (var v = e.node || a, g = 0; g < 6; ++g) i[n + g] = v[g];
            return t || s(i)
        }
        var i = e("./lib/rng"),
            s = e("./lib/bytesToUuid"),
            o = i(),
            a = [1 | o[0], o[1], o[2], o[3], o[4], o[5]],
            u = 16383 & (o[6] << 8 | o[7]),
            c = 0,
            h = 0;
        t.exports = n
    }, {
        "./lib/bytesToUuid": 22,
        "./lib/rng": 23
    }],
    23: [function(e, t, r) {
        (function(e) {
            var r, n = e.crypto || e.msCrypto;
            if (n && n.getRandomValues) {
                var i = new Uint8Array(16);
                r = function() {
                    return n.getRandomValues(i), i
                }
            }
            if (!r) {
                var s = new Array(16);
                r = function() {
                    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), s[t] = e >>> ((3 & t) << 3) & 255;
                    return s
                }
            }
            t.exports = r
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    22: [function(e, t, r) {
        function n(e, t) {
            var r = t || 0,
                n = i;
            return n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]]
        }
        for (var i = [], s = 0; s < 256; ++s) i[s] = (s + 256).toString(16).substr(1);
        t.exports = n
    }, {}],
    20: [function(e, t, r) {
        (function(t, n) {
            function i(e, t) {
                var n = {
                    seen: [],
                    stylize: o
                };
                return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), m(t) ? n.showHidden = t : t && r._extend(n, t), _(n.showHidden) && (n.showHidden = !1), _(n.depth) && (n.depth = 2), _(n.colors) && (n.colors = !1), _(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = s), u(n, e, n.depth)
            }

            function s(e, t) {
                var r = i.styles[t];
                return r ? "[" + i.colors[r][0] + "m" + e + "[" + i.colors[r][1] + "m" : e
            }

            function o(e, t) {
                return e
            }

            function a(e) {
                var t = {};
                return e.forEach(function(e, r) {
                    t[e] = !0
                }), t
            }

            function u(e, t, n) {
                if (e.customInspect && t && R(t.inspect) && t.inspect !== r.inspect && (!t.constructor || t.constructor.prototype !== t)) {
                    var i = t.inspect(n, e);
                    return b(i) || (i = u(e, i, n)), i
                }
                var s = c(e, t);
                if (s) return s;
                var o = Object.keys(t),
                    m = a(o);
                if (e.showHidden && (o = Object.getOwnPropertyNames(t)), C(t) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return h(t);
                if (0 === o.length) {
                    if (R(t)) {
                        var v = t.name ? ": " + t.name : "";
                        return e.stylize("[Function" + v + "]", "special")
                    }
                    if (E(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
                    if (x(t)) return e.stylize(Date.prototype.toString.call(t), "date");
                    if (C(t)) return h(t)
                }
                var g = "",
                    y = !1,
                    w = ["{", "}"];
                if (d(t) && (y = !0, w = ["[", "]"]), R(t)) {
                    g = " [Function" + (t.name ? ": " + t.name : "") + "]"
                }
                if (E(t) && (g = " " + RegExp.prototype.toString.call(t)), x(t) && (g = " " + Date.prototype.toUTCString.call(t)), C(t) && (g = " " + h(t)), 0 === o.length && (!y || 0 == t.length)) return w[0] + g + w[1];
                if (n < 0) return E(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special");
                e.seen.push(t);
                var _;
                return _ = y ? l(e, t, n, m, o) : o.map(function(r) {
                    return f(e, t, n, m, r, y)
                }), e.seen.pop(), p(_, g, w)
            }

            function c(e, t) {
                if (_(t)) return e.stylize("undefined", "undefined");
                if (b(t)) {
                    var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return e.stylize(r, "string")
                }
                return y(t) ? e.stylize("" + t, "number") : m(t) ? e.stylize("" + t, "boolean") : v(t) ? e.stylize("null", "null") : void 0
            }

            function h(e) {
                return "[" + Error.prototype.toString.call(e) + "]"
            }

            function l(e, t, r, n, i) {
                for (var s = [], o = 0, a = t.length; o < a; ++o) P(t, String(o)) ? s.push(f(e, t, r, n, String(o), !0)) : s.push("");
                return i.forEach(function(i) {
                    i.match(/^\d+$/) || s.push(f(e, t, r, n, i, !0))
                }), s
            }

            function f(e, t, r, n, i, s) {
                var o, a, c;
                if (c = Object.getOwnPropertyDescriptor(t, i) || {
                        value: t[i]
                    }, c.get ? a = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (a = e.stylize("[Setter]", "special")), P(n, i) || (o = "[" + i + "]"), a || (e.seen.indexOf(c.value) < 0 ? (a = v(r) ? u(e, c.value, null) : u(e, c.value, r - 1), a.indexOf("\n") > -1 && (a = s ? a.split("\n").map(function(e) {
                        return "  " + e
                    }).join("\n").substr(2) : "\n" + a.split("\n").map(function(e) {
                        return "   " + e
                    }).join("\n"))) : a = e.stylize("[Circular]", "special")), _(o)) {
                    if (s && i.match(/^\d+$/)) return a;
                    o = JSON.stringify("" + i), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), o = e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = e.stylize(o, "string"))
                }
                return o + ": " + a
            }

            function p(e, t, r) {
                var n = 0;
                return e.reduce(function(e, t) {
                    return n++, t.indexOf("\n") >= 0 && n++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0) > 60 ? r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1] : r[0] + t + " " + e.join(", ") + " " + r[1]
            }

            function d(e) {
                return Array.isArray(e)
            }

            function m(e) {
                return "boolean" == typeof e
            }

            function v(e) {
                return null === e
            }

            function g(e) {
                return null == e
            }

            function y(e) {
                return "number" == typeof e
            }

            function b(e) {
                return "string" == typeof e
            }

            function w(e) {
                return "symbol" == typeof e
            }

            function _(e) {
                return void 0 === e
            }

            function E(e) {
                return S(e) && "[object RegExp]" === T(e)
            }

            function S(e) {
                return "object" == typeof e && null !== e
            }

            function x(e) {
                return S(e) && "[object Date]" === T(e)
            }

            function C(e) {
                return S(e) && ("[object Error]" === T(e) || e instanceof Error)
            }

            function R(e) {
                return "function" == typeof e
            }

            function A(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
            }

            function T(e) {
                return Object.prototype.toString.call(e)
            }

            function k(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10)
            }

            function I() {
                var e = new Date,
                    t = [k(e.getHours()), k(e.getMinutes()), k(e.getSeconds())].join(":");
                return [e.getDate(), U[e.getMonth()], t].join(" ")
            }

            function P(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            var L = /%[sdj%]/g;
            r.format = function(e) {
                if (!b(e)) {
                    for (var t = [], r = 0; r < arguments.length; r++) t.push(i(arguments[r]));
                    return t.join(" ")
                }
                for (var r = 1, n = arguments, s = n.length, o = String(e).replace(L, function(e) {
                        if ("%%" === e) return "%";
                        if (r >= s) return e;
                        switch (e) {
                            case "%s":
                                return String(n[r++]);
                            case "%d":
                                return Number(n[r++]);
                            case "%j":
                                try {
                                    return JSON.stringify(n[r++])
                                } catch (e) {
                                    return "[Circular]"
                                }
                                default:
                                    return e
                        }
                    }), a = n[r]; r < s; a = n[++r]) v(a) || !S(a) ? o += " " + a : o += " " + i(a);
                return o
            }, r.deprecate = function(e, i) {
                function s() {
                    if (!o) {
                        if (t.throwDeprecation) throw new Error(i);
                        t.traceDeprecation ? console.trace(i) : console.error(i), o = !0
                    }
                    return e.apply(this, arguments)
                }
                if (_(n.process)) return function() {
                    return r.deprecate(e, i).apply(this, arguments)
                };
                if (!0 === t.noDeprecation) return e;
                var o = !1;
                return s
            };
            var q, O = {};
            r.debuglog = function(e) {
                if (_(q) && (q = t.env.NODE_DEBUG || ""), e = e.toUpperCase(), !O[e])
                    if (new RegExp("\\b" + e + "\\b", "i").test(q)) {
                        var n = t.pid;
                        O[e] = function() {
                            var t = r.format.apply(r, arguments);
                            console.error("%s %d: %s", e, n, t)
                        }
                    } else O[e] = function() {};
                return O[e]
            }, r.inspect = i, i.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, i.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, r.isArray = d, r.isBoolean = m, r.isNull = v, r.isNullOrUndefined = g, r.isNumber = y, r.isString = b, r.isSymbol = w, r.isUndefined = _, r.isRegExp = E, r.isObject = S, r.isDate = x, r.isError = C, r.isFunction = R, r.isPrimitive = A, r.isBuffer = e("./support/isBuffer");
            var U = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            r.log = function() {
                console.log("%s - %s", I(), r.format.apply(r, arguments))
            }, r.inherits = e("inherits"), r._extend = function(e, t) {
                if (!t || !S(t)) return e;
                for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
                return e
            }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./support/isBuffer": 19,
        _process: 9,
        inherits: 6
    }],
    19: [function(e, t, r) {
        t.exports = function(e) {
            return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
        }
    }, {}],
    17: [function(e, t, r) {
        (function(t, n) {
            function i(e, t) {
                this._id = e, this._clearFn = t
            }
            var s = e("process/browser.js").nextTick,
                o = Function.prototype.apply,
                a = Array.prototype.slice,
                u = {},
                c = 0;
            r.setTimeout = function() {
                return new i(o.call(setTimeout, window, arguments), clearTimeout)
            }, r.setInterval = function() {
                return new i(o.call(setInterval, window, arguments), clearInterval)
            }, r.clearTimeout = r.clearInterval = function(e) {
                e.close()
            }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
                this._clearFn.call(window, this._id)
            }, r.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, r.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, r._unrefActive = r.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout()
                }, t))
            }, r.setImmediate = "function" == typeof t ? t : function(e) {
                var t = c++,
                    n = !(arguments.length < 2) && a.call(arguments, 1);
                return u[t] = !0, s(function() {
                    u[t] && (n ? e.apply(null, n) : e.call(null), r.clearImmediate(t))
                }), t
            }, r.clearImmediate = "function" == typeof n ? n : function(e) {
                delete u[e]
            }
        }).call(this, e("timers").setImmediate, e("timers").clearImmediate)
    }, {
        "process/browser.js": 9,
        timers: 17
    }],
    9: [function(e, t, r) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function i() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(e) {
            if (l === setTimeout) return setTimeout(e, 0);
            if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
            try {
                return l(e, 0)
            } catch (t) {
                try {
                    return l.call(null, e, 0)
                } catch (t) {
                    return l.call(this, e, 0)
                }
            }
        }

        function o(e) {
            if (f === clearTimeout) return clearTimeout(e);
            if ((f === i || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
            try {
                return f(e)
            } catch (t) {
                try {
                    return f.call(null, e)
                } catch (t) {
                    return f.call(this, e)
                }
            }
        }

        function a() {
            v && d && (v = !1, d.length ? m = d.concat(m) : g = -1, m.length && u())
        }

        function u() {
            if (!v) {
                var e = s(a);
                v = !0;
                for (var t = m.length; t;) {
                    for (d = m, m = []; ++g < t;) d && d[g].run();
                    g = -1, t = m.length
                }
                d = null, v = !1, o(e)
            }
        }

        function c(e, t) {
            this.fun = e, this.array = t
        }

        function h() {}
        var l, f, p = t.exports = {};
        ! function() {
            try {
                l = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                l = n
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : i
            } catch (e) {
                f = i
            }
        }();
        var d, m = [],
            v = !1,
            g = -1;
        p.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            m.push(new c(e, t)), 1 !== m.length || v || s(u)
        }, c.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = h, p.addListener = h, p.once = h, p.off = h, p.removeListener = h, p.removeAllListeners = h, p.emit = h, p.prependListener = h, p.prependOnceListener = h, p.listeners = function(e) {
            return []
        }, p.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, p.cwd = function() {
            return "/"
        }, p.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, p.umask = function() {
            return 0
        }
    }, {}],
    8: [function(e, t, r) {
        ! function(e) {
            "use strict";

            function t(e) {
                return null !== e && "[object Array]" === Object.prototype.toString.call(e)
            }

            function r(e) {
                return null !== e && "[object Object]" === Object.prototype.toString.call(e)
            }

            function n(e, i) {
                if (e === i) return !0;
                if (Object.prototype.toString.call(e) !== Object.prototype.toString.call(i)) return !1;
                if (!0 === t(e)) {
                    if (e.length !== i.length) return !1;
                    for (var s = 0; s < e.length; s++)
                        if (!1 === n(e[s], i[s])) return !1;
                    return !0
                }
                if (!0 === r(e)) {
                    var o = {};
                    for (var a in e)
                        if (hasOwnProperty.call(e, a)) {
                            if (!1 === n(e[a], i[a])) return !1;
                            o[a] = !0
                        } for (var u in i)
                        if (hasOwnProperty.call(i, u) && !0 !== o[u]) return !1;
                    return !0
                }
                return !1
            }

            function i(e) {
                if ("" === e || !1 === e || null === e) return !0;
                if (t(e) && 0 === e.length) return !0;
                if (r(e)) {
                    for (var n in e)
                        if (e.hasOwnProperty(n)) return !1;
                    return !0
                }
                return !1
            }

            function s(e) {
                for (var t = Object.keys(e), r = [], n = 0; n < t.length; n++) r.push(e[t[n]]);
                return r
            }

            function o(e) {
                return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || "_" === e
            }

            function a(e) {
                return e >= "0" && e <= "9" || "-" === e
            }

            function u(e) {
                return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || "_" === e
            }

            function c() {}

            function h() {}

            function l(e) {
                this.runtime = e
            }

            function f(e) {
                this._interpreter = e, this.functionTable = {
                    abs: {
                        _func: this._functionAbs,
                        _signature: [{
                            types: [g]
                        }]
                    },
                    avg: {
                        _func: this._functionAvg,
                        _signature: [{
                            types: [S]
                        }]
                    },
                    ceil: {
                        _func: this._functionCeil,
                        _signature: [{
                            types: [g]
                        }]
                    },
                    contains: {
                        _func: this._functionContains,
                        _signature: [{
                            types: [b, w]
                        }, {
                            types: [y]
                        }]
                    },
                    ends_with: {
                        _func: this._functionEndsWith,
                        _signature: [{
                            types: [b]
                        }, {
                            types: [b]
                        }]
                    },
                    floor: {
                        _func: this._functionFloor,
                        _signature: [{
                            types: [g]
                        }]
                    },
                    length: {
                        _func: this._functionLength,
                        _signature: [{
                            types: [b, w, _]
                        }]
                    },
                    map: {
                        _func: this._functionMap,
                        _signature: [{
                            types: [E]
                        }, {
                            types: [w]
                        }]
                    },
                    max: {
                        _func: this._functionMax,
                        _signature: [{
                            types: [S, x]
                        }]
                    },
                    merge: {
                        _func: this._functionMerge,
                        _signature: [{
                            types: [_],
                            variadic: !0
                        }]
                    },
                    max_by: {
                        _func: this._functionMaxBy,
                        _signature: [{
                            types: [w]
                        }, {
                            types: [E]
                        }]
                    },
                    sum: {
                        _func: this._functionSum,
                        _signature: [{
                            types: [S]
                        }]
                    },
                    starts_with: {
                        _func: this._functionStartsWith,
                        _signature: [{
                            types: [b]
                        }, {
                            types: [b]
                        }]
                    },
                    min: {
                        _func: this._functionMin,
                        _signature: [{
                            types: [S, x]
                        }]
                    },
                    min_by: {
                        _func: this._functionMinBy,
                        _signature: [{
                            types: [w]
                        }, {
                            types: [E]
                        }]
                    },
                    type: {
                        _func: this._functionType,
                        _signature: [{
                            types: [y]
                        }]
                    },
                    keys: {
                        _func: this._functionKeys,
                        _signature: [{
                            types: [_]
                        }]
                    },
                    values: {
                        _func: this._functionValues,
                        _signature: [{
                            types: [_]
                        }]
                    },
                    sort: {
                        _func: this._functionSort,
                        _signature: [{
                            types: [x, S]
                        }]
                    },
                    sort_by: {
                        _func: this._functionSortBy,
                        _signature: [{
                            types: [w]
                        }, {
                            types: [E]
                        }]
                    },
                    join: {
                        _func: this._functionJoin,
                        _signature: [{
                            types: [b]
                        }, {
                            types: [x]
                        }]
                    },
                    reverse: {
                        _func: this._functionReverse,
                        _signature: [{
                            types: [b, w]
                        }]
                    },
                    to_array: {
                        _func: this._functionToArray,
                        _signature: [{
                            types: [y]
                        }]
                    },
                    to_string: {
                        _func: this._functionToString,
                        _signature: [{
                            types: [y]
                        }]
                    },
                    to_number: {
                        _func: this._functionToNumber,
                        _signature: [{
                            types: [y]
                        }]
                    },
                    not_null: {
                        _func: this._functionNotNull,
                        _signature: [{
                            types: [y],
                            variadic: !0
                        }]
                    }
                }
            }

            function p(e) {
                return (new h).parse(e)
            }

            function d(e) {
                return (new c).tokenize(e)
            }

            function m(e, t) {
                var r = new h,
                    n = new f,
                    i = new l(n);
                n._interpreter = i;
                var s = r.parse(t);
                return i.search(s, e)
            }
            var v;
            v = "function" == typeof String.prototype.trimLeft ? function(e) {
                return e.trimLeft()
            } : function(e) {
                return e.match(/^\s*(.*)/)[1]
            };
            var g = 0,
                y = 1,
                b = 2,
                w = 3,
                _ = 4,
                E = 6,
                S = 8,
                x = 9,
                C = {
                    ".": "Dot",
                    "*": "Star",
                    ",": "Comma",
                    ":": "Colon",
                    "{": "Lbrace",
                    "}": "Rbrace",
                    "]": "Rbracket",
                    "(": "Lparen",
                    ")": "Rparen",
                    "@": "Current"
                },
                R = {
                    "<": !0,
                    ">": !0,
                    "=": !0,
                    "!": !0
                },
                A = {
                    " ": !0,
                    "\t": !0,
                    "\n": !0
                };
            c.prototype = {
                tokenize: function(e) {
                    var t = [];
                    this._current = 0;
                    for (var r, n, i; this._current < e.length;)
                        if (o(e[this._current])) r = this._current, n = this._consumeUnquotedIdentifier(e), t.push({
                            type: "UnquotedIdentifier",
                            value: n,
                            start: r
                        });
                        else if (void 0 !== C[e[this._current]]) t.push({
                        type: C[e[this._current]],
                        value: e[this._current],
                        start: this._current
                    }), this._current++;
                    else if (a(e[this._current])) i = this._consumeNumber(e), t.push(i);
                    else if ("[" === e[this._current]) i = this._consumeLBracket(e), t.push(i);
                    else if ('"' === e[this._current]) r = this._current, n = this._consumeQuotedIdentifier(e), t.push({
                        type: "QuotedIdentifier",
                        value: n,
                        start: r
                    });
                    else if ("'" === e[this._current]) r = this._current, n = this._consumeRawStringLiteral(e), t.push({
                        type: "Literal",
                        value: n,
                        start: r
                    });
                    else if ("`" === e[this._current]) {
                        r = this._current;
                        var s = this._consumeLiteral(e);
                        t.push({
                            type: "Literal",
                            value: s,
                            start: r
                        })
                    } else if (void 0 !== R[e[this._current]]) t.push(this._consumeOperator(e));
                    else if (void 0 !== A[e[this._current]]) this._current++;
                    else if ("&" === e[this._current]) r = this._current, this._current++, "&" === e[this._current] ? (this._current++, t.push({
                        type: "And",
                        value: "&&",
                        start: r
                    })) : t.push({
                        type: "Expref",
                        value: "&",
                        start: r
                    });
                    else {
                        if ("|" !== e[this._current]) {
                            var u = new Error("Unknown character:" + e[this._current]);
                            throw u.name = "LexerError", u
                        }
                        r = this._current, this._current++, "|" === e[this._current] ? (this._current++, t.push({
                            type: "Or",
                            value: "||",
                            start: r
                        })) : t.push({
                            type: "Pipe",
                            value: "|",
                            start: r
                        })
                    }
                    return t
                },
                _consumeUnquotedIdentifier: function(e) {
                    var t = this._current;
                    for (this._current++; this._current < e.length && u(e[this._current]);) this._current++;
                    return e.slice(t, this._current)
                },
                _consumeQuotedIdentifier: function(e) {
                    var t = this._current;
                    this._current++;
                    for (var r = e.length;
                        '"' !== e[this._current] && this._current < r;) {
                        var n = this._current;
                        "\\" !== e[n] || "\\" !== e[n + 1] && '"' !== e[n + 1] ? n++ : n += 2, this._current = n
                    }
                    return this._current++, JSON.parse(e.slice(t, this._current))
                },
                _consumeRawStringLiteral: function(e) {
                    var t = this._current;
                    this._current++;
                    for (var r = e.length;
                        "'" !== e[this._current] && this._current < r;) {
                        var n = this._current;
                        "\\" !== e[n] || "\\" !== e[n + 1] && "'" !== e[n + 1] ? n++ : n += 2, this._current = n
                    }
                    return this._current++, e.slice(t + 1, this._current - 1).replace("\\'", "'")
                },
                _consumeNumber: function(e) {
                    var t = this._current;
                    this._current++;
                    for (var r = e.length; a(e[this._current]) && this._current < r;) this._current++;
                    return {
                        type: "Number",
                        value: parseInt(e.slice(t, this._current)),
                        start: t
                    }
                },
                _consumeLBracket: function(e) {
                    var t = this._current;
                    return this._current++, "?" === e[this._current] ? (this._current++, {
                        type: "Filter",
                        value: "[?",
                        start: t
                    }) : "]" === e[this._current] ? (this._current++, {
                        type: "Flatten",
                        value: "[]",
                        start: t
                    }) : {
                        type: "Lbracket",
                        value: "[",
                        start: t
                    }
                },
                _consumeOperator: function(e) {
                    var t = this._current,
                        r = e[t];
                    return this._current++, "!" === r ? "=" === e[this._current] ? (this._current++, {
                        type: "NE",
                        value: "!=",
                        start: t
                    }) : {
                        type: "Not",
                        value: "!",
                        start: t
                    } : "<" === r ? "=" === e[this._current] ? (this._current++, {
                        type: "LTE",
                        value: "<=",
                        start: t
                    }) : {
                        type: "LT",
                        value: "<",
                        start: t
                    } : ">" === r ? "=" === e[this._current] ? (this._current++, {
                        type: "GTE",
                        value: ">=",
                        start: t
                    }) : {
                        type: "GT",
                        value: ">",
                        start: t
                    } : "=" === r && "=" === e[this._current] ? (this._current++, {
                        type: "EQ",
                        value: "==",
                        start: t
                    }) : void 0
                },
                _consumeLiteral: function(e) {
                    this._current++;
                    for (var t, r = this._current, n = e.length;
                        "`" !== e[this._current] && this._current < n;) {
                        var i = this._current;
                        "\\" !== e[i] || "\\" !== e[i + 1] && "`" !== e[i + 1] ? i++ : i += 2, this._current = i
                    }
                    var s = v(e.slice(r, this._current));
                    return s = s.replace("\\`", "`"), t = this._looksLikeJSON(s) ? JSON.parse(s) : JSON.parse('"' + s + '"'), this._current++, t
                },
                _looksLikeJSON: function(e) {
                    var t = '[{"',
                        r = ["true", "false", "null"],
                        n = "-0123456789";
                    if ("" === e) return !1;
                    if (t.indexOf(e[0]) >= 0) return !0;
                    if (r.indexOf(e) >= 0) return !0;
                    if (!(n.indexOf(e[0]) >= 0)) return !1;
                    try {
                        return JSON.parse(e), !0
                    } catch (e) {
                        return !1
                    }
                }
            };
            var T = {};
            T.EOF = 0, T.UnquotedIdentifier = 0, T.QuotedIdentifier = 0, T.Rbracket = 0, T.Rparen = 0, T.Comma = 0, T.Rbrace = 0, T.Number = 0, T.Current = 0, T.Expref = 0, T.Pipe = 1, T.Or = 2, T.And = 3, T.EQ = 5, T.GT = 5, T.LT = 5, T.GTE = 5, T.LTE = 5, T.NE = 5, T.Flatten = 9, T.Star = 20, T.Filter = 21, T.Dot = 40, T.Not = 45, T.Lbrace = 50, T.Lbracket = 55, T.Lparen = 60, h.prototype = {
                parse: function(e) {
                    this._loadTokens(e), this.index = 0;
                    var t = this.expression(0);
                    if ("EOF" !== this._lookahead(0)) {
                        var r = this._lookaheadToken(0),
                            n = new Error("Unexpected token type: " + r.type + ", value: " + r.value);
                        throw n.name = "ParserError", n
                    }
                    return t
                },
                _loadTokens: function(e) {
                    var t = new c,
                        r = t.tokenize(e);
                    r.push({
                        type: "EOF",
                        value: "",
                        start: e.length
                    }), this.tokens = r
                },
                expression: function(e) {
                    var t = this._lookaheadToken(0);
                    this._advance();
                    for (var r = this.nud(t), n = this._lookahead(0); e < T[n];) this._advance(), r = this.led(n, r), n = this._lookahead(0);
                    return r
                },
                _lookahead: function(e) {
                    return this.tokens[this.index + e].type
                },
                _lookaheadToken: function(e) {
                    return this.tokens[this.index + e]
                },
                _advance: function() {
                    this.index++
                },
                nud: function(e) {
                    var t, r, n;
                    switch (e.type) {
                        case "Literal":
                            return {
                                type: "Literal", value: e.value
                            };
                        case "UnquotedIdentifier":
                            return {
                                type: "Field", name: e.value
                            };
                        case "QuotedIdentifier":
                            var i = {
                                type: "Field",
                                name: e.value
                            };
                            if ("Lparen" === this._lookahead(0)) throw new Error("Quoted identifier not allowed for function names.");
                            return i;
                        case "Not":
                            return r = this.expression(T.Not), {
                                type: "NotExpression",
                                children: [r]
                            };
                        case "Star":
                            return t = {
                                type: "Identity"
                            }, r = null, r = "Rbracket" === this._lookahead(0) ? {
                                type: "Identity"
                            } : this._parseProjectionRHS(T.Star), {
                                type: "ValueProjection",
                                children: [t, r]
                            };
                        case "Filter":
                            return this.led(e.type, {
                                type: "Identity"
                            });
                        case "Lbrace":
                            return this._parseMultiselectHash();
                        case "Flatten":
                            return t = {
                                type: "Flatten",
                                children: [{
                                    type: "Identity"
                                }]
                            }, r = this._parseProjectionRHS(T.Flatten), {
                                type: "Projection",
                                children: [t, r]
                            };
                        case "Lbracket":
                            return "Number" === this._lookahead(0) || "Colon" === this._lookahead(0) ? (r = this._parseIndexExpression(), this._projectIfSlice({
                                type: "Identity"
                            }, r)) : "Star" === this._lookahead(0) && "Rbracket" === this._lookahead(1) ? (this._advance(), this._advance(), r = this._parseProjectionRHS(T.Star), {
                                type: "Projection",
                                children: [{
                                    type: "Identity"
                                }, r]
                            }) : this._parseMultiselectList();
                        case "Current":
                            return {
                                type: "Current"
                            };
                        case "Expref":
                            return n = this.expression(T.Expref), {
                                type: "ExpressionReference",
                                children: [n]
                            };
                        case "Lparen":
                            for (var s = [];
                                "Rparen" !== this._lookahead(0);) "Current" === this._lookahead(0) ? (n = {
                                type: "Current"
                            }, this._advance()) : n = this.expression(0), s.push(n);
                            return this._match("Rparen"), s[0];
                        default:
                            this._errorToken(e)
                    }
                },
                led: function(e, t) {
                    var r;
                    switch (e) {
                        case "Dot":
                            var n = T.Dot;
                            return "Star" !== this._lookahead(0) ? (r = this._parseDotRHS(n), {
                                type: "Subexpression",
                                children: [t, r]
                            }) : (this._advance(), r = this._parseProjectionRHS(n), {
                                type: "ValueProjection",
                                children: [t, r]
                            });
                        case "Pipe":
                            return r = this.expression(T.Pipe), {
                                type: "Pipe",
                                children: [t, r]
                            };
                        case "Or":
                            return r = this.expression(T.Or), {
                                type: "OrExpression",
                                children: [t, r]
                            };
                        case "And":
                            return r = this.expression(T.And), {
                                type: "AndExpression",
                                children: [t, r]
                            };
                        case "Lparen":
                            for (var i, s = t.name, o = [];
                                "Rparen" !== this._lookahead(0);) "Current" === this._lookahead(0) ? (i = {
                                type: "Current"
                            }, this._advance()) : i = this.expression(0), "Comma" === this._lookahead(0) && this._match("Comma"), o.push(i);
                            return this._match("Rparen"), {
                                type: "Function",
                                name: s,
                                children: o
                            };
                        case "Filter":
                            var a = this.expression(0);
                            return this._match("Rbracket"), r = "Flatten" === this._lookahead(0) ? {
                                type: "Identity"
                            } : this._parseProjectionRHS(T.Filter), {
                                type: "FilterProjection",
                                children: [t, r, a]
                            };
                        case "Flatten":
                            return {
                                type: "Projection", children: [{
                                    type: "Flatten",
                                    children: [t]
                                }, this._parseProjectionRHS(T.Flatten)]
                            };
                        case "EQ":
                        case "NE":
                        case "GT":
                        case "GTE":
                        case "LT":
                        case "LTE":
                            return this._parseComparator(t, e);
                        case "Lbracket":
                            var u = this._lookaheadToken(0);
                            return "Number" === u.type || "Colon" === u.type ? (r = this._parseIndexExpression(), this._projectIfSlice(t, r)) : (this._match("Star"), this._match("Rbracket"), r = this._parseProjectionRHS(T.Star), {
                                type: "Projection",
                                children: [t, r]
                            });
                        default:
                            this._errorToken(this._lookaheadToken(0))
                    }
                },
                _match: function(e) {
                    if (this._lookahead(0) !== e) {
                        var t = this._lookaheadToken(0),
                            r = new Error("Expected " + e + ", got: " + t.type);
                        throw r.name = "ParserError", r
                    }
                    this._advance()
                },
                _errorToken: function(e) {
                    var t = new Error("Invalid token (" + e.type + '): "' + e.value + '"');
                    throw t.name = "ParserError", t
                },
                _parseIndexExpression: function() {
                    if ("Colon" === this._lookahead(0) || "Colon" === this._lookahead(1)) return this._parseSliceExpression();
                    var e = {
                        type: "Index",
                        value: this._lookaheadToken(0).value
                    };
                    return this._advance(), this._match("Rbracket"), e
                },
                _projectIfSlice: function(e, t) {
                    var r = {
                        type: "IndexExpression",
                        children: [e, t]
                    };
                    return "Slice" === t.type ? {
                        type: "Projection",
                        children: [r, this._parseProjectionRHS(T.Star)]
                    } : r
                },
                _parseSliceExpression: function() {
                    for (var e = [null, null, null], t = 0, r = this._lookahead(0);
                        "Rbracket" !== r && t < 3;) {
                        if ("Colon" === r) t++, this._advance();
                        else {
                            if ("Number" !== r) {
                                var n = this._lookahead(0),
                                    i = new Error("Syntax error, unexpected token: " + n.value + "(" + n.type + ")");
                                throw i.name = "Parsererror", i
                            }
                            e[t] = this._lookaheadToken(0).value, this._advance()
                        }
                        r = this._lookahead(0)
                    }
                    return this._match("Rbracket"), {
                        type: "Slice",
                        children: e
                    }
                },
                _parseComparator: function(e, t) {
                    return {
                        type: "Comparator",
                        name: t,
                        children: [e, this.expression(T[t])]
                    }
                },
                _parseDotRHS: function(e) {
                    var t = this._lookahead(0);
                    return ["UnquotedIdentifier", "QuotedIdentifier", "Star"].indexOf(t) >= 0 ? this.expression(e) : "Lbracket" === t ? (this._match("Lbracket"), this._parseMultiselectList()) : "Lbrace" === t ? (this._match("Lbrace"), this._parseMultiselectHash()) : void 0
                },
                _parseProjectionRHS: function(e) {
                    var t;
                    if (T[this._lookahead(0)] < 10) t = {
                        type: "Identity"
                    };
                    else if ("Lbracket" === this._lookahead(0)) t = this.expression(e);
                    else if ("Filter" === this._lookahead(0)) t = this.expression(e);
                    else {
                        if ("Dot" !== this._lookahead(0)) {
                            var r = this._lookaheadToken(0),
                                n = new Error("Sytanx error, unexpected token: " + r.value + "(" + r.type + ")");
                            throw n.name = "ParserError", n
                        }
                        this._match("Dot"), t = this._parseDotRHS(e)
                    }
                    return t
                },
                _parseMultiselectList: function() {
                    for (var e = [];
                        "Rbracket" !== this._lookahead(0);) {
                        var t = this.expression(0);
                        if (e.push(t), "Comma" === this._lookahead(0) && (this._match("Comma"), "Rbracket" === this._lookahead(0))) throw new Error("Unexpected token Rbracket")
                    }
                    return this._match("Rbracket"), {
                        type: "MultiSelectList",
                        children: e
                    }
                },
                _parseMultiselectHash: function() {
                    for (var e, t, r, n, i = [], s = ["UnquotedIdentifier", "QuotedIdentifier"];;) {
                        if (e = this._lookaheadToken(0), s.indexOf(e.type) < 0) throw new Error("Expecting an identifier token, got: " + e.type);
                        if (t = e.value, this._advance(), this._match("Colon"), r = this.expression(0), n = {
                                type: "KeyValuePair",
                                name: t,
                                value: r
                            }, i.push(n), "Comma" === this._lookahead(0)) this._match("Comma");
                        else if ("Rbrace" === this._lookahead(0)) {
                            this._match("Rbrace");
                            break
                        }
                    }
                    return {
                        type: "MultiSelectHash",
                        children: i
                    }
                }
            }, l.prototype = {
                search: function(e, t) {
                    return this.visit(e, t)
                },
                visit: function(e, o) {
                    var a, u, c, h, l, f, p, d, m;
                    switch (e.type) {
                        case "Field":
                            return null === o ? null : r(o) ? (f = o[e.name], void 0 === f ? null : f) : null;
                        case "Subexpression":
                            for (c = this.visit(e.children[0], o), m = 1; m < e.children.length; m++)
                                if (null === (c = this.visit(e.children[1], c))) return null;
                            return c;
                        case "IndexExpression":
                            return p = this.visit(e.children[0], o), this.visit(e.children[1], p);
                        case "Index":
                            if (!t(o)) return null;
                            var v = e.value;
                            return v < 0 && (v = o.length + v), c = o[v], void 0 === c && (c = null), c;
                        case "Slice":
                            if (!t(o)) return null;
                            var g = e.children.slice(0),
                                y = this.computeSliceParams(o.length, g),
                                b = y[0],
                                w = y[1],
                                _ = y[2];
                            if (c = [], _ > 0)
                                for (m = b; m < w; m += _) c.push(o[m]);
                            else
                                for (m = b; m > w; m += _) c.push(o[m]);
                            return c;
                        case "Projection":
                            var E = this.visit(e.children[0], o);
                            if (!t(E)) return null;
                            for (d = [], m = 0; m < E.length; m++) null !== (u = this.visit(e.children[1], E[m])) && d.push(u);
                            return d;
                        case "ValueProjection":
                            if (E = this.visit(e.children[0], o), !r(E)) return null;
                            d = [];
                            var S = s(E);
                            for (m = 0; m < S.length; m++) null !== (u = this.visit(e.children[1], S[m])) && d.push(u);
                            return d;
                        case "FilterProjection":
                            if (E = this.visit(e.children[0], o), !t(E)) return null;
                            var x = [],
                                C = [];
                            for (m = 0; m < E.length; m++) a = this.visit(e.children[2], E[m]), i(a) || x.push(E[m]);
                            for (var R = 0; R < x.length; R++) null !== (u = this.visit(e.children[1], x[R])) && C.push(u);
                            return C;
                        case "Comparator":
                            switch (h = this.visit(e.children[0], o), l = this.visit(e.children[1], o), e.name) {
                                case "EQ":
                                    c = n(h, l);
                                    break;
                                case "NE":
                                    c = !n(h, l);
                                    break;
                                case "GT":
                                    c = h > l;
                                    break;
                                case "GTE":
                                    c = h >= l;
                                    break;
                                case "LT":
                                    c = h < l;
                                    break;
                                case "LTE":
                                    c = h <= l;
                                    break;
                                default:
                                    throw new Error("Unknown comparator: " + e.name)
                            }
                            return c;
                        case "Flatten":
                            var A = this.visit(e.children[0], o);
                            if (!t(A)) return null;
                            var T = [];
                            for (m = 0; m < A.length; m++) u = A[m], t(u) ? T.push.apply(T, u) : T.push(u);
                            return T;
                        case "Identity":
                            return o;
                        case "MultiSelectList":
                            if (null === o) return null;
                            for (d = [], m = 0; m < e.children.length; m++) d.push(this.visit(e.children[m], o));
                            return d;
                        case "MultiSelectHash":
                            if (null === o) return null;
                            d = {};
                            var k;
                            for (m = 0; m < e.children.length; m++) k = e.children[m], d[k.name] = this.visit(k.value, o);
                            return d;
                        case "OrExpression":
                            return a = this.visit(e.children[0], o), i(a) && (a = this.visit(e.children[1], o)), a;
                        case "AndExpression":
                            return h = this.visit(e.children[0], o), !0 === i(h) ? h : this.visit(e.children[1], o);
                        case "NotExpression":
                            return h = this.visit(e.children[0], o), i(h);
                        case "Literal":
                            return e.value;
                        case "Pipe":
                            return p = this.visit(e.children[0], o), this.visit(e.children[1], p);
                        case "Current":
                            return o;
                        case "Function":
                            var I = [];
                            for (m = 0; m < e.children.length; m++) I.push(this.visit(e.children[m], o));
                            return this.runtime.callFunction(e.name, I);
                        case "ExpressionReference":
                            var P = e.children[0];
                            return P.jmespathType = "Expref", P;
                        default:
                            throw new Error("Unknown node type: " + e.type)
                    }
                },
                computeSliceParams: function(e, t) {
                    var r = t[0],
                        n = t[1],
                        i = t[2],
                        s = [null, null, null];
                    if (null === i) i = 1;
                    else if (0 === i) {
                        var o = new Error("Invalid slice, step cannot be 0");
                        throw o.name = "RuntimeError", o
                    }
                    var a = i < 0;
                    return r = null === r ? a ? e - 1 : 0 : this.capSliceRange(e, r, i), n = null === n ? a ? -1 : e : this.capSliceRange(e, n, i), s[0] = r, s[1] = n, s[2] = i, s
                },
                capSliceRange: function(e, t, r) {
                    return t < 0 ? (t += e) < 0 && (t = r < 0 ? -1 : 0) : t >= e && (t = r < 0 ? e - 1 : e), t
                }
            }, f.prototype = {
                callFunction: function(e, t) {
                    var r = this.functionTable[e];
                    if (void 0 === r) throw new Error("Unknown function: " + e + "()");
                    return this._validateArgs(e, t, r._signature), r._func.call(this, t)
                },
                _validateArgs: function(e, t, r) {
                    var n;
                    if (r[r.length - 1].variadic) {
                        if (t.length < r.length) throw n = 1 === r.length ? " argument" : " arguments", new Error("ArgumentError: " + e + "() takes at least" + r.length + n + " but received " + t.length)
                    } else if (t.length !== r.length) throw n = 1 === r.length ? " argument" : " arguments", new Error("ArgumentError: " + e + "() takes " + r.length + n + " but received " + t.length);
                    for (var i, s, o, a = 0; a < r.length; a++) {
                        o = !1, i = r[a].types, s = this._getTypeName(t[a]);
                        for (var u = 0; u < i.length; u++)
                            if (this._typeMatches(s, i[u], t[a])) {
                                o = !0;
                                break
                            } if (!o) throw new Error("TypeError: " + e + "() expected argument " + (a + 1) + " to be type " + i + " but received type " + s + " instead.")
                    }
                },
                _typeMatches: function(e, t, r) {
                    if (t === y) return !0;
                    if (t !== x && t !== S && t !== w) return e === t;
                    if (t === w) return e === w;
                    if (e === w) {
                        var n;
                        t === S ? n = g : t === x && (n = b);
                        for (var i = 0; i < r.length; i++)
                            if (!this._typeMatches(this._getTypeName(r[i]), n, r[i])) return !1;
                        return !0
                    }
                },
                _getTypeName: function(e) {
                    switch (Object.prototype.toString.call(e)) {
                        case "[object String]":
                            return b;
                        case "[object Number]":
                            return g;
                        case "[object Array]":
                            return w;
                        case "[object Boolean]":
                            return 5;
                        case "[object Null]":
                            return 7;
                        case "[object Object]":
                            return "Expref" === e.jmespathType ? E : _
                    }
                },
                _functionStartsWith: function(e) {
                    return 0 === e[0].lastIndexOf(e[1])
                },
                _functionEndsWith: function(e) {
                    var t = e[0],
                        r = e[1];
                    return -1 !== t.indexOf(r, t.length - r.length)
                },
                _functionReverse: function(e) {
                    if (this._getTypeName(e[0]) === b) {
                        for (var t = e[0], r = "", n = t.length - 1; n >= 0; n--) r += t[n];
                        return r
                    }
                    var i = e[0].slice(0);
                    return i.reverse(), i
                },
                _functionAbs: function(e) {
                    return Math.abs(e[0])
                },
                _functionCeil: function(e) {
                    return Math.ceil(e[0])
                },
                _functionAvg: function(e) {
                    for (var t = 0, r = e[0], n = 0; n < r.length; n++) t += r[n];
                    return t / r.length
                },
                _functionContains: function(e) {
                    return e[0].indexOf(e[1]) >= 0
                },
                _functionFloor: function(e) {
                    return Math.floor(e[0])
                },
                _functionLength: function(e) {
                    return r(e[0]) ? Object.keys(e[0]).length : e[0].length
                },
                _functionMap: function(e) {
                    for (var t = [], r = this._interpreter, n = e[0], i = e[1], s = 0; s < i.length; s++) t.push(r.visit(n, i[s]));
                    return t
                },
                _functionMerge: function(e) {
                    for (var t = {}, r = 0; r < e.length; r++) {
                        var n = e[r];
                        for (var i in n) t[i] = n[i]
                    }
                    return t
                },
                _functionMax: function(e) {
                    if (e[0].length > 0) {
                        if (this._getTypeName(e[0][0]) === g) return Math.max.apply(Math, e[0]);
                        for (var t = e[0], r = t[0], n = 1; n < t.length; n++) r.localeCompare(t[n]) < 0 && (r = t[n]);
                        return r
                    }
                    return null
                },
                _functionMin: function(e) {
                    if (e[0].length > 0) {
                        if (this._getTypeName(e[0][0]) === g) return Math.min.apply(Math, e[0]);
                        for (var t = e[0], r = t[0], n = 1; n < t.length; n++) t[n].localeCompare(r) < 0 && (r = t[n]);
                        return r
                    }
                    return null
                },
                _functionSum: function(e) {
                    for (var t = 0, r = e[0], n = 0; n < r.length; n++) t += r[n];
                    return t
                },
                _functionType: function(e) {
                    switch (this._getTypeName(e[0])) {
                        case g:
                            return "number";
                        case b:
                            return "string";
                        case w:
                            return "array";
                        case _:
                            return "object";
                        case 5:
                            return "boolean";
                        case E:
                            return "expref";
                        case 7:
                            return "null"
                    }
                },
                _functionKeys: function(e) {
                    return Object.keys(e[0])
                },
                _functionValues: function(e) {
                    for (var t = e[0], r = Object.keys(t), n = [], i = 0; i < r.length; i++) n.push(t[r[i]]);
                    return n
                },
                _functionJoin: function(e) {
                    var t = e[0];
                    return e[1].join(t)
                },
                _functionToArray: function(e) {
                    return this._getTypeName(e[0]) === w ? e[0] : [e[0]]
                },
                _functionToString: function(e) {
                    return this._getTypeName(e[0]) === b ? e[0] : JSON.stringify(e[0])
                },
                _functionToNumber: function(e) {
                    var t, r = this._getTypeName(e[0]);
                    return r === g ? e[0] : r !== b || (t = +e[0], isNaN(t)) ? null : t
                },
                _functionNotNull: function(e) {
                    for (var t = 0; t < e.length; t++)
                        if (7 !== this._getTypeName(e[t])) return e[t];
                    return null
                },
                _functionSort: function(e) {
                    var t = e[0].slice(0);
                    return t.sort(), t
                },
                _functionSortBy: function(e) {
                    var t = e[0].slice(0);
                    if (0 === t.length) return t;
                    var r = this._interpreter,
                        n = e[1],
                        i = this._getTypeName(r.visit(n, t[0]));
                    if ([g, b].indexOf(i) < 0) throw new Error("TypeError");
                    for (var s = this, o = [], a = 0; a < t.length; a++) o.push([a, t[a]]);
                    o.sort(function(e, t) {
                        var o = r.visit(n, e[1]),
                            a = r.visit(n, t[1]);
                        if (s._getTypeName(o) !== i) throw new Error("TypeError: expected " + i + ", received " + s._getTypeName(o));
                        if (s._getTypeName(a) !== i) throw new Error("TypeError: expected " + i + ", received " + s._getTypeName(a));
                        return o > a ? 1 : o < a ? -1 : e[0] - t[0]
                    });
                    for (var u = 0; u < o.length; u++) t[u] = o[u][1];
                    return t
                },
                _functionMaxBy: function(e) {
                    for (var t, r, n = e[1], i = e[0], s = this.createKeyFunction(n, [g, b]), o = -1 / 0, a = 0; a < i.length; a++)(r = s(i[a])) > o && (o = r, t = i[a]);
                    return t
                },
                _functionMinBy: function(e) {
                    for (var t, r, n = e[1], i = e[0], s = this.createKeyFunction(n, [g, b]), o = 1 / 0, a = 0; a < i.length; a++)(r = s(i[a])) < o && (o = r, t = i[a]);
                    return t
                },
                createKeyFunction: function(e, t) {
                    var r = this,
                        n = this._interpreter;
                    return function(i) {
                        var s = n.visit(e, i);
                        if (t.indexOf(r._getTypeName(s)) < 0) {
                            var o = "TypeError: expected one of " + t + ", received " + r._getTypeName(s);
                            throw new Error(o)
                        }
                        return s
                    }
                }
            }, e.tokenize = d, e.compile = p, e.search = m, e.strictDeepEqual = n
        }(void 0 === r ? this.jmespath = {} : r)
    }, {}],
    6: [function(e, t, r) {
        "function" == typeof Object.create ? t.exports = function(e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : t.exports = function(e, t) {
            e.super_ = t;
            var r = function() {};
            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
        }
    }, {}],
    2: [function(e, t, r) {}, {}]
}, {}, []), _xamzrequire = function e(t, r, n) {
    function i(o, a) {
        if (!r[o]) {
            if (!t[o]) {
                var u = "function" == typeof _xamzrequire && _xamzrequire;
                if (!a && u) return u(o, !0);
                if (s) return s(o, !0);
                var c = new Error("Cannot find module '" + o + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var h = r[o] = {
                exports: {}
            };
            t[o][0].call(h.exports, function(e) {
                var r = t[o][1][e];
                return i(r || e)
            }, h, h.exports, e, t, r, n)
        }
        return r[o].exports
    }
    for (var s = "function" == typeof _xamzrequire && _xamzrequire, o = 0; o < n.length; o++) i(n[o]);
    return i
}({
    28: [function(e, t, r) {
        e("./browser_loader");
        var n = e("./core");
        "undefined" != typeof window && (window.AWS = n), void 0 !== t && (t.exports = n), "undefined" != typeof self && (self.AWS = n)
    }, {
        "./browser_loader": 35,
        "./core": 38
    }],
    35: [function(e, t, r) {
        (function(r) {
            var n = e("./util");
            n.crypto.lib = e("./browserCryptoLib"), n.Buffer = e("buffer/").Buffer, n.url = e("url/"), n.querystring = e("querystring/"), n.realClock = e("./realclock/browserClock"), n.environment = "js", n.createEventStream = e("./event-stream/buffered-create-event-stream").createEventStream;
            var i = e("./core");
            t.exports = i, e("./credentials"), e("./credentials/credential_provider_chain"), e("./credentials/temporary_credentials"), e("./credentials/web_identity_credentials"), e("./credentials/cognito_identity_credentials"), e("./credentials/saml_credentials"), i.XML.Parser = e("./xml/browser_parser"), e("./http/xhr"), void 0 === r && (r = {
                browser: !0
            })
        }).call(this, e("_process"))
    }, {
        "./browserCryptoLib": 29,
        "./core": 38,
        "./credentials": 39,
        "./credentials/cognito_identity_credentials": 40,
        "./credentials/credential_provider_chain": 41,
        "./credentials/saml_credentials": 42,
        "./credentials/temporary_credentials": 43,
        "./credentials/web_identity_credentials": 44,
        "./event-stream/buffered-create-event-stream": 51,
        "./http/xhr": 60,
        "./realclock/browserClock": 78,
        "./util": 113,
        "./xml/browser_parser": 114,
        _process: 9,
        "buffer/": 3,
        "querystring/": 16,
        "url/": 18
    }],
    114: [function(e, t, r) {
        function n() {}

        function i(e, t) {
            for (var r = e.getElementsByTagName(t), n = 0, i = r.length; n < i; n++)
                if (r[n].parentNode === e) return r[n]
        }

        function s(e, t) {
            switch (t || (t = {}), t.type) {
                case "structure":
                    return o(e, t);
                case "map":
                    return a(e, t);
                case "list":
                    return u(e, t);
                case void 0:
                case null:
                    return h(e);
                default:
                    return c(e, t)
            }
        }

        function o(e, t) {
            var r = {};
            return null === e ? r : (l.each(t.members, function(t, n) {
                if (n.isXmlAttribute) {
                    if (Object.prototype.hasOwnProperty.call(e.attributes, n.name)) {
                        var o = e.attributes[n.name].value;
                        r[t] = s({
                            textContent: o
                        }, n)
                    }
                } else {
                    var a = n.flattened ? e : i(e, n.name);
                    a ? r[t] = s(a, n) : n.flattened || "list" !== n.type || (r[t] = n.defaultValue)
                }
            }), r)
        }

        function a(e, t) {
            for (var r = {}, n = t.key.name || "key", o = t.value.name || "value", a = t.flattened ? t.name : "entry", u = e.firstElementChild; u;) {
                if (u.nodeName === a) {
                    var c = i(u, n).textContent,
                        h = i(u, o);
                    r[c] = s(h, t.value)
                }
                u = u.nextElementSibling
            }
            return r
        }

        function u(e, t) {
            for (var r = [], n = t.flattened ? t.name : t.member.name || "member", i = e.firstElementChild; i;) i.nodeName === n && r.push(s(i, t.member)), i = i.nextElementSibling;
            return r
        }

        function c(e, t) {
            if (e.getAttribute) {
                var r = e.getAttribute("encoding");
                "base64" === r && (t = new f.create({
                    type: r
                }))
            }
            var n = e.textContent;
            return "" === n && (n = null), "function" == typeof t.toType ? t.toType(n) : n
        }

        function h(e) {
            if (void 0 === e || null === e) return "";
            if (!e.firstElementChild) return null === e.parentNode.parentNode ? {} : 0 === e.childNodes.length ? "" : e.textContent;
            for (var t = {
                    type: "structure",
                    members: {}
                }, r = e.firstElementChild; r;) {
                var n = r.nodeName;
                Object.prototype.hasOwnProperty.call(t.members, n) ? t.members[n].type = "list" : t.members[n] = {
                    name: n
                }, r = r.nextElementSibling
            }
            return o(e, t)
        }
        var l = e("../util"),
            f = e("../model/shape");
        n.prototype.parse = function(e, t) {
            if ("" === e.replace(/^\s+/, "")) return {};
            var r, n;
            try {
                if (window.DOMParser) {
                    try {
                        r = (new DOMParser).parseFromString(e, "text/xml")
                    } catch (e) {
                        throw l.error(new Error("Parse error in document"), {
                            originalError: e,
                            code: "XMLParserError",
                            retryable: !0
                        })
                    }
                    if (null === r.documentElement) throw l.error(new Error("Cannot parse empty document."), {
                        code: "XMLParserError",
                        retryable: !0
                    });
                    var o = r.getElementsByTagName("parsererror")[0];
                    if (o && (o.parentNode === r || "body" === o.parentNode.nodeName || o.parentNode.parentNode === r || "body" === o.parentNode.parentNode.nodeName)) {
                        var a = o.getElementsByTagName("div")[0] || o;
                        throw l.error(new Error(a.textContent || "Parser error in document"), {
                            code: "XMLParserError",
                            retryable: !0
                        })
                    }
                } else {
                    if (!window.ActiveXObject) throw new Error("Cannot load XML parser");
                    if (r = new window.ActiveXObject("Microsoft.XMLDOM"), r.async = !1, !r.loadXML(e)) throw l.error(new Error("Parse error in document"), {
                        code: "XMLParserError",
                        retryable: !0
                    })
                }
            } catch (e) {
                n = e
            }
            if (r && r.documentElement && !n) {
                var u = s(r.documentElement, t),
                    c = i(r.documentElement, "ResponseMetadata");
                return c && (u.ResponseMetadata = s(c, {})), u
            }
            if (n) throw l.error(n || new Error, {
                code: "XMLParserError",
                retryable: !0
            });
            return {}
        }, t.exports = n
    }, {
        "../model/shape": 68,
        "../util": 113
    }],
    78: [function(e, t, r) {
        t.exports = {
            now: function() {
                return "undefined" != typeof performance && "function" == typeof performance.now ? performance.now() : Date.now()
            }
        }
    }, {}],
    60: [function(e, t, r) {
        var n = e("../core"),
            i = e("events").EventEmitter;
        e("../http"), n.XHRClient = n.util.inherit({
            handleRequest: function(e, t, r, s) {
                var o = this,
                    a = e.endpoint,
                    u = new i,
                    c = a.protocol + "//" + a.hostname;
                80 !== a.port && 443 !== a.port && (c += ":" + a.port), c += e.path;
                var h = new XMLHttpRequest,
                    l = !1;
                e.stream = h, h.addEventListener("readystatechange", function() {
                    try {
                        if (0 === h.status) return
                    } catch (e) {
                        return
                    }
                    this.readyState >= this.HEADERS_RECEIVED && !l && (u.statusCode = h.status, u.headers = o.parseHeaders(h.getAllResponseHeaders()), u.emit("headers", u.statusCode, u.headers, h.statusText), l = !0), this.readyState === this.DONE && o.finishRequest(h, u)
                }, !1), h.upload.addEventListener("progress", function(e) {
                    u.emit("sendProgress", e)
                }), h.addEventListener("progress", function(e) {
                    u.emit("receiveProgress", e)
                }, !1), h.addEventListener("timeout", function() {
                    s(n.util.error(new Error("Timeout"), {
                        code: "TimeoutError"
                    }))
                }, !1), h.addEventListener("error", function() {
                    s(n.util.error(new Error("Network Failure"), {
                        code: "NetworkingError"
                    }))
                }, !1), h.addEventListener("abort", function() {
                    s(n.util.error(new Error("Request aborted"), {
                        code: "RequestAbortedError"
                    }))
                }, !1), r(u), h.open(e.method, c, !1 !== t.xhrAsync), n.util.each(e.headers, function(e, t) {
                    "Content-Length" !== e && "User-Agent" !== e && "Host" !== e && h.setRequestHeader(e, t)
                }), t.timeout && !1 !== t.xhrAsync && (h.timeout = t.timeout), t.xhrWithCredentials && (h.withCredentials = !0);
                try {
                    h.responseType = "arraybuffer"
                } catch (e) {}
                try {
                    e.body ? h.send(e.body) : h.send()
                } catch (t) {
                    if (!e.body || "object" != typeof e.body.buffer) throw t;
                    h.send(e.body.buffer)
                }
                return u
            },
            parseHeaders: function(e) {
                var t = {};
                return n.util.arrayEach(e.split(/\r?\n/), function(e) {
                    var r = e.split(":", 1)[0],
                        n = e.substring(r.length + 2);
                    r.length > 0 && (t[r.toLowerCase()] = n)
                }), t
            },
            finishRequest: function(e, t) {
                var r;
                if ("arraybuffer" === e.responseType && e.response) {
                    var i = e.response;
                    r = new n.util.Buffer(i.byteLength);
                    for (var s = new Uint8Array(i), o = 0; o < r.length; ++o) r[o] = s[o]
                }
                try {
                    r || "string" != typeof e.responseText || (r = new n.util.Buffer(e.responseText))
                } catch (e) {}
                r && t.emit("data", r), t.emit("end")
            }
        }), n.HttpClient.prototype = n.XHRClient.prototype, n.HttpClient.streamsApiVersion = 1
    }, {
        "../core": 38,
        "../http": 59,
        events: 4
    }],
    51: [function(e, t, r) {
        function n(e, t, r) {
            for (var n = i(e), o = [], a = 0; a < n.length; a++) o.push(s(t, n[a], r));
            return o
        }
        var i = e("../event-stream/event-message-chunker").eventMessageChunker,
            s = e("./parse-event").parseEvent;
        t.exports = {
            createEventStream: n
        }
    }, {
        "../event-stream/event-message-chunker": 52,
        "./parse-event": 54
    }],
    54: [function(e, t, r) {
        function n(e, t, r) {
            var n = s(t),
                o = n.headers[":message-type"];
            if (o) {
                if ("error" === o.value) throw i(n);
                if ("event" !== o.value) return
            }
            var a = n.headers[":event-type"],
                u = r.members[a.value];
            if (u) {
                var c = {},
                    h = u.eventPayloadMemberName;
                if (h) {
                    var l = u.members[h];
                    "binary" === l.type ? c[h] = n.body : c[h] = e.parse(n.body.toString(), l)
                }
                for (var f = u.eventHeaderMemberNames, p = 0; p < f.length; p++) {
                    var d = f[p];
                    n.headers[d] && (c[d] = u.members[d].toType(n.headers[d].value))
                }
                var m = {};
                return m[a.value] = c, m
            }
        }

        function i(e) {
            var t = e.headers[":error-code"],
                r = e.headers[":error-message"],
                n = new Error(r.value || r);
            return n.code = n.name = t.value || t, n
        }
        var s = e("./parse-message").parseMessage;
        t.exports = {
            parseEvent: n
        }
    }, {
        "./parse-message": 55
    }],
    55: [function(e, t, r) {
        function n(e) {
            for (var t = {}, r = 0; r < e.length;) {
                var n = e.readUInt8(r++),
                    i = e.slice(r, r + n).toString();
                switch (r += n, e.readUInt8(r++)) {
                    case 0:
                        t[i] = {
                            type: a,
                            value: !0
                        };
                        break;
                    case 1:
                        t[i] = {
                            type: a,
                            value: !1
                        };
                        break;
                    case 2:
                        t[i] = {
                            type: u,
                            value: e.readInt8(r++)
                        };
                        break;
                    case 3:
                        t[i] = {
                            type: c,
                            value: e.readInt16BE(r)
                        }, r += 2;
                        break;
                    case 4:
                        t[i] = {
                            type: h,
                            value: e.readInt32BE(r)
                        }, r += 4;
                        break;
                    case 5:
                        t[i] = {
                            type: l,
                            value: new s(e.slice(r, r + 8))
                        }, r += 8;
                        break;
                    case 6:
                        var o = e.readUInt16BE(r);
                        r += 2, t[i] = {
                            type: f,
                            value: e.slice(r, r + o)
                        }, r += o;
                        break;
                    case 7:
                        var v = e.readUInt16BE(r);
                        r += 2, t[i] = {
                            type: p,
                            value: e.slice(r, r + v).toString()
                        }, r += v;
                        break;
                    case 8:
                        t[i] = {
                            type: d,
                            value: new Date(new s(e.slice(r, r + 8)).valueOf())
                        }, r += 8;
                        break;
                    case 9:
                        var g = e.slice(r, r + 16).toString("hex");
                        r += 16, t[i] = {
                            type: m,
                            value: g.substr(0, 8) + "-" + g.substr(8, 4) + "-" + g.substr(12, 4) + "-" + g.substr(16, 4) + "-" + g.substr(20)
                        };
                        break;
                    default:
                        throw new Error("Unrecognized header type tag")
                }
            }
            return t
        }

        function i(e) {
            var t = o(e);
            return {
                headers: n(t.headers),
                body: t.body
            }
        }
        var s = e("./int64").Int64,
            o = e("./split-message").splitMessage,
            a = "boolean",
            u = "byte",
            c = "short",
            h = "integer",
            l = "long",
            f = "binary",
            p = "string",
            d = "timestamp",
            m = "uuid";
        t.exports = {
            parseMessage: i
        }
    }, {
        "./int64": 53,
        "./split-message": 56
    }],
    56: [function(e, t, r) {
        function n(e) {
            if (i.Buffer.isBuffer(e) || (e = s(e)), e.length < c) throw new Error("Provided message too short to accommodate event stream message overhead");
            if (e.length !== e.readUInt32BE(0)) throw new Error("Reported message length does not match received message length");
            var t = e.readUInt32BE(a);
            if (t !== i.crypto.crc32(e.slice(0, a))) throw new Error("The prelude checksum specified in the message (" + t + ") does not match the calculated CRC32 checksum.");
            var r = e.readUInt32BE(e.length - u);
            if (r !== i.crypto.crc32(e.slice(0, e.length - u))) throw new Error("The message checksum did not match the expected value of " + r);
            var n = a + u,
                h = n + e.readUInt32BE(o);
            return {
                headers: e.slice(n, h),
                body: e.slice(h, e.length - u)
            }
        }
        var i = e("../core").util,
            s = e("./to-buffer").toBuffer,
            o = 4,
            a = 2 * o,
            u = 4,
            c = a + 2 * u;
        t.exports = {
            splitMessage: n
        }
    }, {
        "../core": 38,
        "./to-buffer": 57
    }],
    53: [function(e, t, r) {
        function n(e) {
            if (8 !== e.length) throw new Error("Int64 buffers must be exactly 8 bytes");
            s.Buffer.isBuffer(e) || (e = o(e)), this.bytes = e
        }

        function i(e) {
            for (var t = 0; t < 8; t++) e[t] ^= 255;
            for (var t = 7; t > -1 && 0 === ++e[t]; t--);
        }
        var s = e("../core").util,
            o = e("./to-buffer").toBuffer;
        n.fromNumber = function(e) {
            if (e > 0x8000000000000000 || e < -0x8000000000000000) throw new Error(e + " is too large (or, if negative, too small) to represent as an Int64");
            for (var t = new Uint8Array(8), r = 7, s = Math.abs(Math.round(e)); r > -1 && s > 0; r--, s /= 256) t[r] = s;
            return e < 0 && i(t), new n(t)
        }, n.prototype.valueOf = function() {
            var e = this.bytes.slice(0),
                t = 128 & e[0];
            return t && i(e), parseInt(e.toString("hex"), 16) * (t ? -1 : 1)
        }, n.prototype.toString = function() {
            return String(this.valueOf())
        }, t.exports = {
            Int64: n
        }
    }, {
        "../core": 38,
        "./to-buffer": 57
    }],
    57: [function(e, t, r) {
        function n(e, t) {
            return "function" == typeof i.from && i.from !== Uint8Array.from ? i.from(e, t) : new i(e, t)
        }
        var i = e("../core").util.Buffer;
        t.exports = {
            toBuffer: n
        }
    }, {
        "../core": 38
    }],
    52: [function(e, t, r) {
        function n(e) {
            for (var t = [], r = 0; r < e.length;) {
                var n = e.readInt32BE(r),
                    i = e.slice(r, n + r);
                r += n, t.push(i)
            }
            return t
        }
        t.exports = {
            eventMessageChunker: n
        }
    }, {}],
    44: [function(e, t, r) {
        var n = e("../core");
        n.WebIdentityCredentials = n.util.inherit(n.Credentials, {
            constructor: function(e, t) {
                n.Credentials.call(this), this.expired = !0, this.params = e, this.params.RoleSessionName = this.params.RoleSessionName || "web-identity", this.data = null, this._clientConfig = n.util.copy(t || {})
            },
            refresh: function(e) {
                var t = this;
                t.createClients(), e || (e = function(e) {
                    if (e) throw e
                }), t.service.assumeRoleWithWebIdentity(function(r, n) {
                    t.data = null, r || (t.data = n, t.service.credentialsFrom(n, t)), e(r)
                })
            },
            createClients: function() {
                if (!this.service) {
                    var e = n.util.merge({}, this._clientConfig);
                    e.params = this.params, this.service = new n.STS(e)
                }
            }
        })
    }, {
        "../core": 38
    }],
    43: [function(e, t, r) {
        var n = e("../core");
        n.TemporaryCredentials = n.util.inherit(n.Credentials, {
            constructor: function(e, t) {
                n.Credentials.call(this), this.loadMasterCredentials(t), this.expired = !0, this.params = e || {}, this.params.RoleArn && (this.params.RoleSessionName = this.params.RoleSessionName || "temporary-credentials")
            },
            refresh: function(e) {
                var t = this;
                t.createClients(), e || (e = function(e) {
                    if (e) throw e
                }), t.masterCredentials.get(function() {
                    t.service.config.credentials = t.masterCredentials, (t.params.RoleArn ? t.service.assumeRole : t.service.getSessionToken).call(t.service, function(r, n) {
                        r || t.service.credentialsFrom(n, t), e(r)
                    })
                })
            },
            loadMasterCredentials: function(e) {
                for (this.masterCredentials = e || n.config.credentials; this.masterCredentials.masterCredentials;) this.masterCredentials = this.masterCredentials.masterCredentials;
                "function" != typeof this.masterCredentials.get && (this.masterCredentials = new n.Credentials(this.masterCredentials))
            },
            createClients: function() {
                this.service = this.service || new n.STS({
                    params: this.params
                })
            }
        })
    }, {
        "../core": 38
    }],
    42: [function(e, t, r) {
        var n = e("../core");
        n.SAMLCredentials = n.util.inherit(n.Credentials, {
            constructor: function(e) {
                n.Credentials.call(this), this.expired = !0, this.params = e
            },
            refresh: function(e) {
                var t = this;
                t.createClients(), e || (e = function(e) {
                    if (e) throw e
                }), t.service.assumeRoleWithSAML(function(r, n) {
                    r || t.service.credentialsFrom(n, t), e(r)
                })
            },
            createClients: function() {
                this.service = this.service || new n.STS({
                    params: this.params
                })
            }
        })
    }, {
        "../core": 38
    }],
    40: [function(e, t, r) {
        var n = e("../core");
        n.CognitoIdentityCredentials = n.util.inherit(n.Credentials, {
            localStorageKey: {
                id: "aws.cognito.identity-id.",
                providers: "aws.cognito.identity-providers."
            },
            constructor: function(e, t) {
                n.Credentials.call(this), this.expired = !0, this.params = e, this.data = null, this._identityId = null, this._clientConfig = n.util.copy(t || {}), this.loadCachedId();
                var r = this;
                Object.defineProperty(this, "identityId", {
                    get: function() {
                        return r.loadCachedId(), r._identityId || r.params.IdentityId
                    },
                    set: function(e) {
                        r._identityId = e
                    }
                })
            },
            refresh: function(e) {
                var t = this;
                t.createClients(), t.data = null, t._identityId = null, t.getId(function(r) {
                    r ? (t.clearIdOnNotAuthorized(r), e(r)) : t.params.RoleArn ? t.getCredentialsFromSTS(e) : t.getCredentialsForIdentity(e)
                })
            },
            clearCachedId: function() {
                this._identityId = null, delete this.params.IdentityId;
                var e = this.params.IdentityPoolId,
                    t = this.params.LoginId || "";
                delete this.storage[this.localStorageKey.id + e + t], delete this.storage[this.localStorageKey.providers + e + t]
            },
            clearIdOnNotAuthorized: function(e) {
                var t = this;
                "NotAuthorizedException" == e.code && t.clearCachedId()
            },
            getId: function(e) {
                var t = this;
                if ("string" == typeof t.params.IdentityId) return e(null, t.params.IdentityId);
                t.cognito.getId(function(r, n) {
                    !r && n.IdentityId ? (t.params.IdentityId = n.IdentityId, e(null, n.IdentityId)) : e(r)
                })
            },
            loadCredentials: function(e, t) {
                e && t && (t.expired = !1, t.accessKeyId = e.Credentials.AccessKeyId, t.secretAccessKey = e.Credentials.SecretKey, t.sessionToken = e.Credentials.SessionToken, t.expireTime = e.Credentials.Expiration)
            },
            getCredentialsForIdentity: function(e) {
                var t = this;
                t.cognito.getCredentialsForIdentity(function(r, n) {
                    r ? t.clearIdOnNotAuthorized(r) : (t.cacheId(n), t.data = n, t.loadCredentials(t.data, t)), e(r)
                })
            },
            getCredentialsFromSTS: function(e) {
                var t = this;
                t.cognito.getOpenIdToken(function(r, n) {
                    r ? (t.clearIdOnNotAuthorized(r), e(r)) : (t.cacheId(n), t.params.WebIdentityToken = n.Token, t.webIdentityCredentials.refresh(function(r) {
                        r || (t.data = t.webIdentityCredentials.data, t.sts.credentialsFrom(t.data, t)), e(r)
                    }))
                })
            },
            loadCachedId: function() {
                var e = this;
                if (n.util.isBrowser() && !e.params.IdentityId) {
                    var t = e.getStorage("id");
                    if (t && e.params.Logins) {
                        var r = Object.keys(e.params.Logins);
                        0 !== (e.getStorage("providers") || "").split(",").filter(function(e) {
                            return -1 !== r.indexOf(e)
                        }).length && (e.params.IdentityId = t)
                    } else t && (e.params.IdentityId = t)
                }
            },
            createClients: function() {
                var e = this._clientConfig;
                if (this.webIdentityCredentials = this.webIdentityCredentials || new n.WebIdentityCredentials(this.params, e), !this.cognito) {
                    var t = n.util.merge({}, e);
                    t.params = this.params, this.cognito = new n.CognitoIdentity(t)
                }
                this.sts = this.sts || new n.STS(e)
            },
            cacheId: function(e) {
                this._identityId = e.IdentityId, this.params.IdentityId = this._identityId, n.util.isBrowser() && (this.setStorage("id", e.IdentityId), this.params.Logins && this.setStorage("providers", Object.keys(this.params.Logins).join(",")))
            },
            getStorage: function(e) {
                return this.storage[this.localStorageKey[e] + this.params.IdentityPoolId + (this.params.LoginId || "")]
            },
            setStorage: function(e, t) {
                try {
                    this.storage[this.localStorageKey[e] + this.params.IdentityPoolId + (this.params.LoginId || "")] = t
                } catch (e) {}
            },
            storage: function() {
                try {
                    var e = n.util.isBrowser() && null !== window.localStorage && "object" == typeof window.localStorage ? window.localStorage : {};
                    return e["aws.test-storage"] = "foobar", delete e["aws.test-storage"], e
                } catch (e) {
                    return {}
                }
            }()
        })
    }, {
        "../core": 38
    }],
    29: [function(e, t, r) {
        var n = e("./browserHmac"),
            i = e("./browserMd5"),
            s = e("./browserSha1"),
            o = e("./browserSha256");
        t.exports = {
            createHash: function(e) {
                if ("md5" === (e = e.toLowerCase())) return new i;
                if ("sha256" === e) return new o;
                if ("sha1" === e) return new s;
                throw new Error("Hash algorithm " + e + " is not supported in the browser SDK")
            },
            createHmac: function(e, t) {
                if ("md5" === (e = e.toLowerCase())) return new n(i, t);
                if ("sha256" === e) return new n(o, t);
                if ("sha1" === e) return new n(s, t);
                throw new Error("HMAC algorithm " + e + " is not supported in the browser SDK")
            },
            createSign: function() {
                throw new Error("createSign is not implemented in the browser")
            }
        }
    }, {
        "./browserHmac": 31,
        "./browserMd5": 32,
        "./browserSha1": 33,
        "./browserSha256": 34
    }],
    34: [function(e, t, r) {
        function n() {
            this.state = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1
        }
        var i = e("buffer/").Buffer,
            s = e("./browserHashUtils"),
            o = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
            a = Math.pow(2, 53) - 1;
        t.exports = n, n.BLOCK_SIZE = 64, n.prototype.update = function(e) {
            if (this.finished) throw new Error("Attempted to update an already finished hash.");
            if (s.isEmptyData(e)) return this;
            e = s.convertToBuffer(e);
            var t = 0,
                r = e.byteLength;
            if (this.bytesHashed += r, 8 * this.bytesHashed > a) throw new Error("Cannot hash more than 2^53 - 1 bits");
            for (; r > 0;) this.buffer[this.bufferLength++] = e[t++], r--, 64 === this.bufferLength && (this.hashBuffer(), this.bufferLength = 0);
            return this
        }, n.prototype.digest = function(e) {
            if (!this.finished) {
                var t = 8 * this.bytesHashed,
                    r = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
                    n = this.bufferLength;
                if (r.setUint8(this.bufferLength++, 128), n % 64 >= 56) {
                    for (var s = this.bufferLength; s < 64; s++) r.setUint8(s, 0);
                    this.hashBuffer(), this.bufferLength = 0
                }
                for (var s = this.bufferLength; s < 56; s++) r.setUint8(s, 0);
                r.setUint32(56, Math.floor(t / 4294967296), !0), r.setUint32(60, t), this.hashBuffer(), this.finished = !0
            }
            for (var o = new i(32), s = 0; s < 8; s++) o[4 * s] = this.state[s] >>> 24 & 255, o[4 * s + 1] = this.state[s] >>> 16 & 255, o[4 * s + 2] = this.state[s] >>> 8 & 255, o[4 * s + 3] = this.state[s] >>> 0 & 255;
            return e ? o.toString(e) : o
        }, n.prototype.hashBuffer = function() {
            for (var e = this, t = e.buffer, r = e.state, n = r[0], i = r[1], s = r[2], a = r[3], u = r[4], c = r[5], h = r[6], l = r[7], f = 0; f < 64; f++) {
                if (f < 16) this.temp[f] = (255 & t[4 * f]) << 24 | (255 & t[4 * f + 1]) << 16 | (255 & t[4 * f + 2]) << 8 | 255 & t[4 * f + 3];
                else {
                    var p = this.temp[f - 2],
                        d = (p >>> 17 | p << 15) ^ (p >>> 19 | p << 13) ^ p >>> 10;
                    p = this.temp[f - 15];
                    var m = (p >>> 7 | p << 25) ^ (p >>> 18 | p << 14) ^ p >>> 3;
                    this.temp[f] = (d + this.temp[f - 7] | 0) + (m + this.temp[f - 16] | 0)
                }
                var v = (((u >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7)) + (u & c ^ ~u & h) | 0) + (l + (o[f] + this.temp[f] | 0) | 0) | 0,
                    g = ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + (n & i ^ n & s ^ i & s) | 0;
                l = h, h = c, c = u, u = a + v | 0, a = s, s = i, i = n, n = v + g | 0
            }
            r[0] += n, r[1] += i, r[2] += s, r[3] += a, r[4] += u, r[5] += c, r[6] += h, r[7] += l
        }
    }, {
        "./browserHashUtils": 30,
        "buffer/": 3
    }],
    33: [function(e, t, r) {
        function n() {
            this.h0 = 1732584193, this.h1 = 4023233417, this.h2 = 2562383102, this.h3 = 271733878, this.h4 = 3285377520, this.block = new Uint32Array(80), this.offset = 0, this.shift = 24, this.totalLength = 0
        }
        var i = e("buffer/").Buffer,
            s = e("./browserHashUtils");
        new Uint32Array([1518500249, 1859775393, -1894007588, -899497514]), Math.pow(2, 53);
        t.exports = n, n.BLOCK_SIZE = 64, n.prototype.update = function(e) {
            if (this.finished) throw new Error("Attempted to update an already finished hash.");
            if (s.isEmptyData(e)) return this;
            e = s.convertToBuffer(e);
            var t = e.length;
            this.totalLength += 8 * t;
            for (var r = 0; r < t; r++) this.write(e[r]);
            return this
        }, n.prototype.write = function(e) {
            this.block[this.offset] |= (255 & e) << this.shift, this.shift ? this.shift -= 8 : (this.offset++, this.shift = 24), 16 === this.offset && this.processBlock()
        }, n.prototype.digest = function(e) {
            this.write(128), (this.offset > 14 || 14 === this.offset && this.shift < 24) && this.processBlock(), this.offset = 14, this.shift = 24, this.write(0), this.write(0), this.write(this.totalLength > 0xffffffffff ? this.totalLength / 1099511627776 : 0),
                this.write(this.totalLength > 4294967295 ? this.totalLength / 4294967296 : 0);
            for (var t = 24; t >= 0; t -= 8) this.write(this.totalLength >> t);
            var r = new i(20),
                n = new DataView(r.buffer);
            return n.setUint32(0, this.h0, !1), n.setUint32(4, this.h1, !1), n.setUint32(8, this.h2, !1), n.setUint32(12, this.h3, !1), n.setUint32(16, this.h4, !1), e ? r.toString(e) : r
        }, n.prototype.processBlock = function() {
            for (var e = 16; e < 80; e++) {
                var t = this.block[e - 3] ^ this.block[e - 8] ^ this.block[e - 14] ^ this.block[e - 16];
                this.block[e] = t << 1 | t >>> 31
            }
            var r, n, i = this.h0,
                s = this.h1,
                o = this.h2,
                a = this.h3,
                u = this.h4;
            for (e = 0; e < 80; e++) {
                e < 20 ? (r = a ^ s & (o ^ a), n = 1518500249) : e < 40 ? (r = s ^ o ^ a, n = 1859775393) : e < 60 ? (r = s & o | a & (s | o), n = 2400959708) : (r = s ^ o ^ a, n = 3395469782);
                var c = (i << 5 | i >>> 27) + r + u + n + (0 | this.block[e]);
                u = a, a = o, o = s << 30 | s >>> 2, s = i, i = c
            }
            for (this.h0 = this.h0 + i | 0, this.h1 = this.h1 + s | 0, this.h2 = this.h2 + o | 0, this.h3 = this.h3 + a | 0, this.h4 = this.h4 + u | 0, this.offset = 0, e = 0; e < 16; e++) this.block[e] = 0
        }
    }, {
        "./browserHashUtils": 30,
        "buffer/": 3
    }],
    32: [function(e, t, r) {
        function n() {
            this.state = [1732584193, 4023233417, 2562383102, 271733878], this.buffer = new DataView(new ArrayBuffer(l)), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1
        }

        function i(e, t, r, n, i, s) {
            return ((t = (t + e & 4294967295) + (n + s & 4294967295) & 4294967295) << i | t >>> 32 - i) + r & 4294967295
        }

        function s(e, t, r, n, s, o, a) {
            return i(t & r | ~t & n, e, t, s, o, a)
        }

        function o(e, t, r, n, s, o, a) {
            return i(t & n | r & ~n, e, t, s, o, a)
        }

        function a(e, t, r, n, s, o, a) {
            return i(t ^ r ^ n, e, t, s, o, a)
        }

        function u(e, t, r, n, s, o, a) {
            return i(r ^ (t | ~n), e, t, s, o, a)
        }
        var c = e("./browserHashUtils"),
            h = e("buffer/").Buffer,
            l = 64;
        t.exports = n, n.BLOCK_SIZE = l, n.prototype.update = function(e) {
            if (c.isEmptyData(e)) return this;
            if (this.finished) throw new Error("Attempted to update an already finished hash.");
            var t = c.convertToBuffer(e),
                r = 0,
                n = t.byteLength;
            for (this.bytesHashed += n; n > 0;) this.buffer.setUint8(this.bufferLength++, t[r++]), n--, this.bufferLength === l && (this.hashBuffer(), this.bufferLength = 0);
            return this
        }, n.prototype.digest = function(e) {
            if (!this.finished) {
                var t = this,
                    r = t.buffer,
                    n = t.bufferLength,
                    i = t.bytesHashed,
                    s = 8 * i;
                if (r.setUint8(this.bufferLength++, 128), n % l >= l - 8) {
                    for (var o = this.bufferLength; o < l; o++) r.setUint8(o, 0);
                    this.hashBuffer(), this.bufferLength = 0
                }
                for (var o = this.bufferLength; o < l - 8; o++) r.setUint8(o, 0);
                r.setUint32(l - 8, s >>> 0, !0), r.setUint32(l - 4, Math.floor(s / 4294967296), !0), this.hashBuffer(), this.finished = !0
            }
            for (var a = new DataView(new ArrayBuffer(16)), o = 0; o < 4; o++) a.setUint32(4 * o, this.state[o], !0);
            var u = new h(a.buffer, a.byteOffset, a.byteLength);
            return e ? u.toString(e) : u
        }, n.prototype.hashBuffer = function() {
            var e = this,
                t = e.buffer,
                r = e.state,
                n = r[0],
                i = r[1],
                c = r[2],
                h = r[3];
            n = s(n, i, c, h, t.getUint32(0, !0), 7, 3614090360), h = s(h, n, i, c, t.getUint32(4, !0), 12, 3905402710), c = s(c, h, n, i, t.getUint32(8, !0), 17, 606105819), i = s(i, c, h, n, t.getUint32(12, !0), 22, 3250441966), n = s(n, i, c, h, t.getUint32(16, !0), 7, 4118548399), h = s(h, n, i, c, t.getUint32(20, !0), 12, 1200080426), c = s(c, h, n, i, t.getUint32(24, !0), 17, 2821735955), i = s(i, c, h, n, t.getUint32(28, !0), 22, 4249261313), n = s(n, i, c, h, t.getUint32(32, !0), 7, 1770035416), h = s(h, n, i, c, t.getUint32(36, !0), 12, 2336552879), c = s(c, h, n, i, t.getUint32(40, !0), 17, 4294925233), i = s(i, c, h, n, t.getUint32(44, !0), 22, 2304563134), n = s(n, i, c, h, t.getUint32(48, !0), 7, 1804603682), h = s(h, n, i, c, t.getUint32(52, !0), 12, 4254626195), c = s(c, h, n, i, t.getUint32(56, !0), 17, 2792965006), i = s(i, c, h, n, t.getUint32(60, !0), 22, 1236535329), n = o(n, i, c, h, t.getUint32(4, !0), 5, 4129170786), h = o(h, n, i, c, t.getUint32(24, !0), 9, 3225465664), c = o(c, h, n, i, t.getUint32(44, !0), 14, 643717713), i = o(i, c, h, n, t.getUint32(0, !0), 20, 3921069994), n = o(n, i, c, h, t.getUint32(20, !0), 5, 3593408605), h = o(h, n, i, c, t.getUint32(40, !0), 9, 38016083), c = o(c, h, n, i, t.getUint32(60, !0), 14, 3634488961), i = o(i, c, h, n, t.getUint32(16, !0), 20, 3889429448), n = o(n, i, c, h, t.getUint32(36, !0), 5, 568446438), h = o(h, n, i, c, t.getUint32(56, !0), 9, 3275163606), c = o(c, h, n, i, t.getUint32(12, !0), 14, 4107603335), i = o(i, c, h, n, t.getUint32(32, !0), 20, 1163531501), n = o(n, i, c, h, t.getUint32(52, !0), 5, 2850285829), h = o(h, n, i, c, t.getUint32(8, !0), 9, 4243563512), c = o(c, h, n, i, t.getUint32(28, !0), 14, 1735328473), i = o(i, c, h, n, t.getUint32(48, !0), 20, 2368359562), n = a(n, i, c, h, t.getUint32(20, !0), 4, 4294588738), h = a(h, n, i, c, t.getUint32(32, !0), 11, 2272392833), c = a(c, h, n, i, t.getUint32(44, !0), 16, 1839030562), i = a(i, c, h, n, t.getUint32(56, !0), 23, 4259657740), n = a(n, i, c, h, t.getUint32(4, !0), 4, 2763975236), h = a(h, n, i, c, t.getUint32(16, !0), 11, 1272893353), c = a(c, h, n, i, t.getUint32(28, !0), 16, 4139469664), i = a(i, c, h, n, t.getUint32(40, !0), 23, 3200236656), n = a(n, i, c, h, t.getUint32(52, !0), 4, 681279174), h = a(h, n, i, c, t.getUint32(0, !0), 11, 3936430074), c = a(c, h, n, i, t.getUint32(12, !0), 16, 3572445317), i = a(i, c, h, n, t.getUint32(24, !0), 23, 76029189), n = a(n, i, c, h, t.getUint32(36, !0), 4, 3654602809), h = a(h, n, i, c, t.getUint32(48, !0), 11, 3873151461), c = a(c, h, n, i, t.getUint32(60, !0), 16, 530742520), i = a(i, c, h, n, t.getUint32(8, !0), 23, 3299628645), n = u(n, i, c, h, t.getUint32(0, !0), 6, 4096336452), h = u(h, n, i, c, t.getUint32(28, !0), 10, 1126891415), c = u(c, h, n, i, t.getUint32(56, !0), 15, 2878612391), i = u(i, c, h, n, t.getUint32(20, !0), 21, 4237533241), n = u(n, i, c, h, t.getUint32(48, !0), 6, 1700485571), h = u(h, n, i, c, t.getUint32(12, !0), 10, 2399980690), c = u(c, h, n, i, t.getUint32(40, !0), 15, 4293915773), i = u(i, c, h, n, t.getUint32(4, !0), 21, 2240044497), n = u(n, i, c, h, t.getUint32(32, !0), 6, 1873313359), h = u(h, n, i, c, t.getUint32(60, !0), 10, 4264355552), c = u(c, h, n, i, t.getUint32(24, !0), 15, 2734768916), i = u(i, c, h, n, t.getUint32(52, !0), 21, 1309151649), n = u(n, i, c, h, t.getUint32(16, !0), 6, 4149444226), h = u(h, n, i, c, t.getUint32(44, !0), 10, 3174756917), c = u(c, h, n, i, t.getUint32(8, !0), 15, 718787259), i = u(i, c, h, n, t.getUint32(36, !0), 21, 3951481745), r[0] = n + r[0] & 4294967295, r[1] = i + r[1] & 4294967295, r[2] = c + r[2] & 4294967295, r[3] = h + r[3] & 4294967295
        }
    }, {
        "./browserHashUtils": 30,
        "buffer/": 3
    }],
    31: [function(e, t, r) {
        function n(e, t) {
            this.hash = new e, this.outer = new e;
            var r = i(e, t),
                n = new Uint8Array(e.BLOCK_SIZE);
            n.set(r);
            for (var s = 0; s < e.BLOCK_SIZE; s++) r[s] ^= 54, n[s] ^= 92;
            this.hash.update(r), this.outer.update(n);
            for (var s = 0; s < r.byteLength; s++) r[s] = 0
        }

        function i(e, t) {
            var r = s.convertToBuffer(t);
            if (r.byteLength > e.BLOCK_SIZE) {
                var n = new e;
                n.update(r), r = n.digest()
            }
            var i = new Uint8Array(e.BLOCK_SIZE);
            return i.set(r), i
        }
        var s = e("./browserHashUtils");
        t.exports = n, n.prototype.update = function(e) {
            if (s.isEmptyData(e) || this.error) return this;
            try {
                this.hash.update(s.convertToBuffer(e))
            } catch (e) {
                this.error = e
            }
            return this
        }, n.prototype.digest = function(e) {
            return this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest(e)
        }
    }, {
        "./browserHashUtils": 30
    }],
    30: [function(e, t, r) {
        function n(e) {
            return "string" == typeof e ? 0 === e.length : 0 === e.byteLength
        }

        function i(e) {
            return "string" == typeof e && (e = new s(e, "utf8")), ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e)
        }
        var s = e("buffer/").Buffer;
        "undefined" != typeof ArrayBuffer && void 0 === ArrayBuffer.isView && (ArrayBuffer.isView = function(e) {
            return o.indexOf(Object.prototype.toString.call(e)) > -1
        });
        var o = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]", "[object DataView]"];
        t.exports = {
            isEmptyData: n,
            convertToBuffer: i
        }
    }, {
        "buffer/": 3
    }],
    18: [function(e, t, r) {
        function n() {
            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
        }

        function i(e, t, r) {
            if (e && c(e) && e instanceof n) return e;
            var i = new n;
            return i.parse(e, t, r), i
        }

        function s(e) {
            return u(e) && (e = i(e)), e instanceof n ? e.format() : n.prototype.format.call(e)
        }

        function o(e, t) {
            return i(e, !1, !0).resolve(t)
        }

        function a(e, t) {
            return e ? i(e, !1, !0).resolveObject(t) : t
        }

        function u(e) {
            return "string" == typeof e
        }

        function c(e) {
            return "object" == typeof e && null !== e
        }

        function h(e) {
            return null === e
        }

        function l(e) {
            return null == e
        }
        var f = e("punycode");
        r.parse = i, r.resolve = o, r.resolveObject = a, r.format = s, r.Url = n;
        var p = /^([a-z0-9.+-]+:)/i,
            d = /:[0-9]*$/,
            m = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
            v = ["{", "}", "|", "\\", "^", "`"].concat(m),
            g = ["'"].concat(v),
            y = ["%", "/", "?", ";", "#"].concat(g),
            b = ["/", "?", "#"],
            w = /^[a-z0-9A-Z_-]{0,63}$/,
            _ = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
            E = {
                javascript: !0,
                "javascript:": !0
            },
            S = {
                javascript: !0,
                "javascript:": !0
            },
            x = {
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
            C = e("querystring");
        n.prototype.parse = function(e, t, r) {
            if (!u(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
            var n = e;
            n = n.trim();
            var i = p.exec(n);
            if (i) {
                i = i[0];
                var s = i.toLowerCase();
                this.protocol = s, n = n.substr(i.length)
            }
            if (r || i || n.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var o = "//" === n.substr(0, 2);
                !o || i && S[i] || (n = n.substr(2), this.slashes = !0)
            }
            if (!S[i] && (o || i && !x[i])) {
                for (var a = -1, c = 0; c < b.length; c++) {
                    var h = n.indexOf(b[c]); - 1 !== h && (-1 === a || h < a) && (a = h)
                }
                var l, d;
                d = -1 === a ? n.lastIndexOf("@") : n.lastIndexOf("@", a), -1 !== d && (l = n.slice(0, d), n = n.slice(d + 1), this.auth = decodeURIComponent(l)), a = -1;
                for (var c = 0; c < y.length; c++) {
                    var h = n.indexOf(y[c]); - 1 !== h && (-1 === a || h < a) && (a = h)
                } - 1 === a && (a = n.length), this.host = n.slice(0, a), n = n.slice(a), this.parseHost(), this.hostname = this.hostname || "";
                var m = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!m)
                    for (var v = this.hostname.split(/\./), c = 0, R = v.length; c < R; c++) {
                        var A = v[c];
                        if (A && !A.match(w)) {
                            for (var T = "", k = 0, I = A.length; k < I; k++) A.charCodeAt(k) > 127 ? T += "x" : T += A[k];
                            if (!T.match(w)) {
                                var P = v.slice(0, c),
                                    L = v.slice(c + 1),
                                    q = A.match(_);
                                q && (P.push(q[1]), L.unshift(q[2])), L.length && (n = "/" + L.join(".") + n), this.hostname = P.join(".");
                                break
                            }
                        }
                    }
                if (this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !m) {
                    for (var O = this.hostname.split("."), U = [], c = 0; c < O.length; ++c) {
                        var N = O[c];
                        U.push(N.match(/[^A-Za-z0-9_-]/) ? "xn--" + f.encode(N) : N)
                    }
                    this.hostname = U.join(".")
                }
                var j = this.port ? ":" + this.port : "",
                    D = this.hostname || "";
                this.host = D + j, this.href += this.host, m && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== n[0] && (n = "/" + n))
            }
            if (!E[s])
                for (var c = 0, R = g.length; c < R; c++) {
                    var M = g[c],
                        B = encodeURIComponent(M);
                    B === M && (B = escape(M)), n = n.split(M).join(B)
                }
            var H = n.indexOf("#"); - 1 !== H && (this.hash = n.substr(H), n = n.slice(0, H));
            var F = n.indexOf("?");
            if (-1 !== F ? (this.search = n.substr(F), this.query = n.substr(F + 1), t && (this.query = C.parse(this.query)), n = n.slice(0, F)) : t && (this.search = "", this.query = {}), n && (this.pathname = n), x[s] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                var j = this.pathname || "",
                    N = this.search || "";
                this.path = j + N
            }
            return this.href = this.format(), this
        }, n.prototype.format = function() {
            var e = this.auth || "";
            e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
            var t = this.protocol || "",
                r = this.pathname || "",
                n = this.hash || "",
                i = !1,
                s = "";
            this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && c(this.query) && Object.keys(this.query).length && (s = C.stringify(this.query));
            var o = this.search || s && "?" + s || "";
            return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || x[t]) && !1 !== i ? (i = "//" + (i || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""), n && "#" !== n.charAt(0) && (n = "#" + n), o && "?" !== o.charAt(0) && (o = "?" + o), r = r.replace(/[?#]/g, function(e) {
                return encodeURIComponent(e)
            }), o = o.replace("#", "%23"), t + i + r + o + n
        }, n.prototype.resolve = function(e) {
            return this.resolveObject(i(e, !1, !0)).format()
        }, n.prototype.resolveObject = function(e) {
            if (u(e)) {
                var t = new n;
                t.parse(e, !1, !0), e = t
            }
            var r = new n;
            if (Object.keys(this).forEach(function(e) {
                    r[e] = this[e]
                }, this), r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
            if (e.slashes && !e.protocol) return Object.keys(e).forEach(function(t) {
                "protocol" !== t && (r[t] = e[t])
            }), x[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
            if (e.protocol && e.protocol !== r.protocol) {
                if (!x[e.protocol]) return Object.keys(e).forEach(function(t) {
                    r[t] = e[t]
                }), r.href = r.format(), r;
                if (r.protocol = e.protocol, e.host || S[e.protocol]) r.pathname = e.pathname;
                else {
                    for (var i = (e.pathname || "").split("/"); i.length && !(e.host = i.shift()););
                    e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== i[0] && i.unshift(""), i.length < 2 && i.unshift(""), r.pathname = i.join("/")
                }
                if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                    var s = r.pathname || "",
                        o = r.search || "";
                    r.path = s + o
                }
                return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
            }
            var a = r.pathname && "/" === r.pathname.charAt(0),
                c = e.host || e.pathname && "/" === e.pathname.charAt(0),
                f = c || a || r.host && e.pathname,
                p = f,
                d = r.pathname && r.pathname.split("/") || [],
                i = e.pathname && e.pathname.split("/") || [],
                m = r.protocol && !x[r.protocol];
            if (m && (r.hostname = "", r.port = null, r.host && ("" === d[0] ? d[0] = r.host : d.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === i[0] ? i[0] = e.host : i.unshift(e.host)), e.host = null), f = f && ("" === i[0] || "" === d[0])), c) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, d = i;
            else if (i.length) d || (d = []), d.pop(), d = d.concat(i), r.search = e.search, r.query = e.query;
            else if (!l(e.search)) {
                if (m) {
                    r.hostname = r.host = d.shift();
                    var v = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
                    v && (r.auth = v.shift(), r.host = r.hostname = v.shift())
                }
                return r.search = e.search, r.query = e.query, h(r.pathname) && h(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
            }
            if (!d.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
            for (var g = d.slice(-1)[0], y = (r.host || e.host) && ("." === g || ".." === g) || "" === g, b = 0, w = d.length; w >= 0; w--) g = d[w], "." == g ? d.splice(w, 1) : ".." === g ? (d.splice(w, 1), b++) : b && (d.splice(w, 1), b--);
            if (!f && !p)
                for (; b--; b) d.unshift("..");
            !f || "" === d[0] || d[0] && "/" === d[0].charAt(0) || d.unshift(""), y && "/" !== d.join("/").substr(-1) && d.push("");
            var _ = "" === d[0] || d[0] && "/" === d[0].charAt(0);
            if (m) {
                r.hostname = r.host = _ ? "" : d.length ? d.shift() : "";
                var v = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
                v && (r.auth = v.shift(), r.host = r.hostname = v.shift())
            }
            return f = f || r.host && d.length, f && !_ && d.unshift(""), d.length ? r.pathname = d.join("/") : (r.pathname = null, r.path = null), h(r.pathname) && h(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
        }, n.prototype.parseHost = function() {
            var e = this.host,
                t = d.exec(e);
            t && (t = t[0], ":" !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
        }
    }, {
        punycode: 10,
        querystring: 13
    }],
    16: [function(e, t, r) {
        arguments[4][13][0].apply(r, arguments)
    }, {
        "./decode": 14,
        "./encode": 15,
        dup: 13
    }],
    15: [function(e, t, r) {
        "use strict";
        var n = function(e) {
            switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        t.exports = function(e, t, r, i) {
            return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map(function(i) {
                var s = encodeURIComponent(n(i)) + r;
                return Array.isArray(e[i]) ? e[i].map(function(e) {
                    return s + encodeURIComponent(n(e))
                }).join(t) : s + encodeURIComponent(n(e[i]))
            }).join(t) : i ? encodeURIComponent(n(i)) + r + encodeURIComponent(n(e)) : ""
        }
    }, {}],
    14: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.exports = function(e, t, r, i) {
            t = t || "&", r = r || "=";
            var s = {};
            if ("string" != typeof e || 0 === e.length) return s;
            var o = /\+/g;
            e = e.split(t);
            var a = 1e3;
            i && "number" == typeof i.maxKeys && (a = i.maxKeys);
            var u = e.length;
            a > 0 && u > a && (u = a);
            for (var c = 0; c < u; ++c) {
                var h, l, f, p, d = e[c].replace(o, "%20"),
                    m = d.indexOf(r);
                m >= 0 ? (h = d.substr(0, m), l = d.substr(m + 1)) : (h = d, l = ""), f = decodeURIComponent(h), p = decodeURIComponent(l), n(s, f) ? Array.isArray(s[f]) ? s[f].push(p) : s[f] = [s[f], p] : s[f] = p
            }
            return s
        }
    }, {}],
    13: [function(e, t, r) {
        "use strict";
        r.decode = r.parse = e("./decode"), r.encode = r.stringify = e("./encode")
    }, {
        "./decode": 11,
        "./encode": 12
    }],
    12: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            if (e.map) return e.map(t);
            for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
            return r
        }
        var i = function(e) {
            switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        t.exports = function(e, t, r, a) {
            return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? n(o(e), function(o) {
                var a = encodeURIComponent(i(o)) + r;
                return s(e[o]) ? n(e[o], function(e) {
                    return a + encodeURIComponent(i(e))
                }).join(t) : a + encodeURIComponent(i(e[o]))
            }).join(t) : a ? encodeURIComponent(i(a)) + r + encodeURIComponent(i(e)) : ""
        };
        var s = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            o = Object.keys || function(e) {
                var t = [];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                return t
            }
    }, {}],
    11: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.exports = function(e, t, r, s) {
            t = t || "&", r = r || "=";
            var o = {};
            if ("string" != typeof e || 0 === e.length) return o;
            var a = /\+/g;
            e = e.split(t);
            var u = 1e3;
            s && "number" == typeof s.maxKeys && (u = s.maxKeys);
            var c = e.length;
            u > 0 && c > u && (c = u);
            for (var h = 0; h < c; ++h) {
                var l, f, p, d, m = e[h].replace(a, "%20"),
                    v = m.indexOf(r);
                v >= 0 ? (l = m.substr(0, v), f = m.substr(v + 1)) : (l = m, f = ""), p = decodeURIComponent(l), d = decodeURIComponent(f), n(o, p) ? i(o[p]) ? o[p].push(d) : o[p] = [o[p], d] : o[p] = d
            }
            return o
        };
        var i = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    }, {}],
    10: [function(e, t, r) {
        (function(e) {
            ! function(n) {
                function i(e) {
                    throw RangeError(q[e])
                }

                function s(e, t) {
                    for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
                    return n
                }

                function o(e, t) {
                    var r = e.split("@"),
                        n = "";
                    return r.length > 1 && (n = r[0] + "@", e = r[1]), e = e.replace(L, "."), n + s(e.split("."), t).join(".")
                }

                function a(e) {
                    for (var t, r, n = [], i = 0, s = e.length; i < s;) t = e.charCodeAt(i++), t >= 55296 && t <= 56319 && i < s ? (r = e.charCodeAt(i++), 56320 == (64512 & r) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), i--)) : n.push(t);
                    return n
                }

                function u(e) {
                    return s(e, function(e) {
                        var t = "";
                        return e > 65535 && (e -= 65536, t += N(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += N(e)
                    }).join("")
                }

                function c(e) {
                    return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : E
                }

                function h(e, t) {
                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                }

                function l(e, t, r) {
                    var n = 0;
                    for (e = r ? U(e / R) : e >> 1, e += U(e / t); e > O * x >> 1; n += E) e = U(e / O);
                    return U(n + (O + 1) * e / (e + C))
                }

                function f(e) {
                    var t, r, n, s, o, a, h, f, p, d, m = [],
                        v = e.length,
                        g = 0,
                        y = T,
                        b = A;
                    for (r = e.lastIndexOf(k), r < 0 && (r = 0), n = 0; n < r; ++n) e.charCodeAt(n) >= 128 && i("not-basic"), m.push(e.charCodeAt(n));
                    for (s = r > 0 ? r + 1 : 0; s < v;) {
                        for (o = g, a = 1, h = E; s >= v && i("invalid-input"), f = c(e.charCodeAt(s++)), (f >= E || f > U((_ - g) / a)) && i("overflow"), g += f * a, p = h <= b ? S : h >= b + x ? x : h - b, !(f < p); h += E) d = E - p, a > U(_ / d) && i("overflow"), a *= d;
                        t = m.length + 1, b = l(g - o, t, 0 == o), U(g / t) > _ - y && i("overflow"), y += U(g / t), g %= t, m.splice(g++, 0, y)
                    }
                    return u(m)
                }

                function p(e) {
                    var t, r, n, s, o, u, c, f, p, d, m, v, g, y, b, w = [];
                    for (e = a(e), v = e.length, t = T, r = 0, o = A, u = 0; u < v; ++u)(m = e[u]) < 128 && w.push(N(m));
                    for (n = s = w.length, s && w.push(k); n < v;) {
                        for (c = _, u = 0; u < v; ++u)(m = e[u]) >= t && m < c && (c = m);
                        for (g = n + 1, c - t > U((_ - r) / g) && i("overflow"), r += (c - t) * g, t = c, u = 0; u < v; ++u)
                            if (m = e[u], m < t && ++r > _ && i("overflow"), m == t) {
                                for (f = r, p = E; d = p <= o ? S : p >= o + x ? x : p - o, !(f < d); p += E) b = f - d, y = E - d, w.push(N(h(d + b % y, 0))), f = U(b / y);
                                w.push(N(h(f, 0))), o = l(r, g, n == s), r = 0, ++n
                            }++ r, ++t
                    }
                    return w.join("")
                }

                function d(e) {
                    return o(e, function(e) {
                        return I.test(e) ? f(e.slice(4).toLowerCase()) : e
                    })
                }

                function m(e) {
                    return o(e, function(e) {
                        return P.test(e) ? "xn--" + p(e) : e
                    })
                }
                var v = "object" == typeof r && r && !r.nodeType && r,
                    g = "object" == typeof t && t && !t.nodeType && t,
                    y = "object" == typeof e && e;
                y.global !== y && y.window !== y && y.self !== y || (n = y);
                var b, w, _ = 2147483647,
                    E = 36,
                    S = 1,
                    x = 26,
                    C = 38,
                    R = 700,
                    A = 72,
                    T = 128,
                    k = "-",
                    I = /^xn--/,
                    P = /[^\x20-\x7E]/,
                    L = /[\x2E\u3002\uFF0E\uFF61]/g,
                    q = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    O = E - S,
                    U = Math.floor,
                    N = String.fromCharCode;
                if (b = {
                        version: "1.3.2",
                        ucs2: {
                            decode: a,
                            encode: u
                        },
                        decode: f,
                        encode: p,
                        toASCII: m,
                        toUnicode: d
                    }, "function" == typeof define && "object" == typeof define.amd && define.amd) define("punycode", function() {
                    return b
                });
                else if (v && g)
                    if (t.exports == v) g.exports = b;
                    else
                        for (w in b) b.hasOwnProperty(w) && (v[w] = b[w]);
                else n.punycode = b
            }(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    4: [function(e, t, r) {
        function n() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function i(e) {
            return "function" == typeof e
        }

        function s(e) {
            return "number" == typeof e
        }

        function o(e) {
            return "object" == typeof e && null !== e
        }

        function a(e) {
            return void 0 === e
        }
        t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e) {
            if (!s(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
            return this._maxListeners = e, this
        }, n.prototype.emit = function(e) {
            var t, r, n, s, u, c;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                if ((t = arguments[1]) instanceof Error) throw t;
                var h = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw h.context = t, h
            }
            if (r = this._events[e], a(r)) return !1;
            if (i(r)) switch (arguments.length) {
                case 1:
                    r.call(this);
                    break;
                case 2:
                    r.call(this, arguments[1]);
                    break;
                case 3:
                    r.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    s = Array.prototype.slice.call(arguments, 1), r.apply(this, s)
            } else if (o(r))
                for (s = Array.prototype.slice.call(arguments, 1), c = r.slice(), n = c.length, u = 0; u < n; u++) c[u].apply(this, s);
            return !0
        }, n.prototype.addListener = function(e, t) {
            var r;
            if (!i(t)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, o(this._events[e]) && !this._events[e].warned && (r = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
        }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t) {
            function r() {
                this.removeListener(e, r), n || (n = !0, t.apply(this, arguments))
            }
            if (!i(t)) throw TypeError("listener must be a function");
            var n = !1;
            return r.listener = t, this.on(e, r), this
        }, n.prototype.removeListener = function(e, t) {
            var r, n, s, a;
            if (!i(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (r = this._events[e], s = r.length, n = -1, r === t || i(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (o(r)) {
                for (a = s; a-- > 0;)
                    if (r[a] === t || r[a].listener && r[a].listener === t) {
                        n = a;
                        break
                    } if (n < 0) return this;
                1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(n, 1), this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }, n.prototype.removeAllListeners = function(e) {
            var t, r;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
            if (0 === arguments.length) {
                for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (r = this._events[e], i(r)) this.removeListener(e, r);
            else if (r)
                for (; r.length;) this.removeListener(e, r[r.length - 1]);
            return delete this._events[e], this
        }, n.prototype.listeners = function(e) {
            return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }, n.prototype.listenerCount = function(e) {
            if (this._events) {
                var t = this._events[e];
                if (i(t)) return 1;
                if (t) return t.length
            }
            return 0
        }, n.listenerCount = function(e, t) {
            return e.listenerCount(t)
        }
    }, {}],
    3: [function(e, t, r) {
        (function(t) {
            "use strict";

            function n() {
                return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function i(e, t) {
                if (n() < t) throw new RangeError("Invalid typed array length");
                return s.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = s.prototype) : (null === e && (e = new s(t)), e.length = t), e
            }

            function s(e, t, r) {
                if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s)) return new s(e, t, r);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return c(this, e)
                }
                return o(this, e, t, r)
            }

            function o(e, t, r, n) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? f(e, t, r, n) : "string" == typeof t ? h(e, t, r) : p(e, t)
            }

            function a(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function u(e, t, r, n) {
                return a(t), t <= 0 ? i(e, t) : void 0 !== r ? "string" == typeof n ? i(e, t).fill(r, n) : i(e, t).fill(r) : i(e, t)
            }

            function c(e, t) {
                if (a(t), e = i(e, t < 0 ? 0 : 0 | d(t)), !s.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < t; ++r) e[r] = 0;
                return e
            }

            function h(e, t, r) {
                if ("string" == typeof r && "" !== r || (r = "utf8"), !s.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                var n = 0 | v(t, r);
                e = i(e, n);
                var o = e.write(t, r);
                return o !== n && (e = e.slice(0, o)), e
            }

            function l(e, t) {
                var r = t.length < 0 ? 0 : 0 | d(t.length);
                e = i(e, r);
                for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
                return e
            }

            function f(e, t, r, n) {
                if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                return t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n), s.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = s.prototype) : e = l(e, t), e
            }

            function p(e, t) {
                if (s.isBuffer(t)) {
                    var r = 0 | d(t.length);
                    return e = i(e, r), 0 === e.length ? e : (t.copy(e, 0, 0, r), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || G(t.length) ? i(e, 0) : l(e, t);
                    if ("Buffer" === t.type && $(t.data)) return l(e, t.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }

            function d(e) {
                if (e >= n()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
                return 0 | e
            }

            function m(e) {
                return +e != e && (e = 0), s.alloc(+e)
            }

            function v(e, t) {
                if (s.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var r = e.length;
                if (0 === r) return 0;
                for (var n = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return V(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return W(e).length;
                    default:
                        if (n) return V(e).length;
                        t = ("" + t).toLowerCase(), n = !0
                }
            }

            function g(e, t, r) {
                var n = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if (r >>>= 0, t >>>= 0, r <= t) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return L(this, t, r);
                    case "utf8":
                    case "utf-8":
                        return T(this, t, r);
                    case "ascii":
                        return I(this, t, r);
                    case "latin1":
                    case "binary":
                        return P(this, t, r);
                    case "base64":
                        return A(this, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return q(this, t, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), n = !0
                }
            }

            function y(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n
            }

            function b(e, t, r, n, i) {
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (i) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof t && (t = s.from(t, n)), s.isBuffer(t)) return 0 === t.length ? -1 : w(e, t, r, n, i);
                if ("number" == typeof t) return t &= 255, s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : w(e, [t], r, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function w(e, t, r, n, i) {
                function s(e, t) {
                    return 1 === o ? e[t] : e.readUInt16BE(t * o)
                }
                var o = 1,
                    a = e.length,
                    u = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    o = 2, a /= 2, u /= 2, r /= 2
                }
                var c;
                if (i) {
                    var h = -1;
                    for (c = r; c < a; c++)
                        if (s(e, c) === s(t, -1 === h ? 0 : c - h)) {
                            if (-1 === h && (h = c), c - h + 1 === u) return h * o
                        } else -1 !== h && (c -= c - h), h = -1
                } else
                    for (r + u > a && (r = a - u), c = r; c >= 0; c--) {
                        for (var l = !0, f = 0; f < u; f++)
                            if (s(e, c + f) !== s(t, f)) {
                                l = !1;
                                break
                            } if (l) return c
                    }
                return -1
            }

            function _(e, t, r, n) {
                r = Number(r) || 0;
                var i = e.length - r;
                n ? (n = Number(n)) > i && (n = i) : n = i;
                var s = t.length;
                if (s % 2 != 0) throw new TypeError("Invalid hex string");
                n > s / 2 && (n = s / 2);
                for (var o = 0; o < n; ++o) {
                    var a = parseInt(t.substr(2 * o, 2), 16);
                    if (isNaN(a)) return o;
                    e[r + o] = a
                }
                return o
            }

            function E(e, t, r, n) {
                return Y(V(t, e.length - r), e, r, n)
            }

            function S(e, t, r, n) {
                return Y(X(t), e, r, n)
            }

            function x(e, t, r, n) {
                return S(e, t, r, n)
            }

            function C(e, t, r, n) {
                return Y(W(t), e, r, n)
            }

            function R(e, t, r, n) {
                return Y(K(t, e.length - r), e, r, n)
            }

            function A(e, t, r) {
                return 0 === t && r === e.length ? J.fromByteArray(e) : J.fromByteArray(e.slice(t, r))
            }

            function T(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], i = t; i < r;) {
                    var s = e[i],
                        o = null,
                        a = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
                    if (i + a <= r) {
                        var u, c, h, l;
                        switch (a) {
                            case 1:
                                s < 128 && (o = s);
                                break;
                            case 2:
                                u = e[i + 1], 128 == (192 & u) && (l = (31 & s) << 6 | 63 & u) > 127 && (o = l);
                                break;
                            case 3:
                                u = e[i + 1], c = e[i + 2], 128 == (192 & u) && 128 == (192 & c) && (l = (15 & s) << 12 | (63 & u) << 6 | 63 & c) > 2047 && (l < 55296 || l > 57343) && (o = l);
                                break;
                            case 4:
                                u = e[i + 1], c = e[i + 2], h = e[i + 3], 128 == (192 & u) && 128 == (192 & c) && 128 == (192 & h) && (l = (15 & s) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & h) > 65535 && l < 1114112 && (o = l)
                        }
                    }
                    null === o ? (o = 65533, a = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), n.push(o), i += a
                }
                return k(n)
            }

            function k(e) {
                var t = e.length;
                if (t <= Q) return String.fromCharCode.apply(String, e);
                for (var r = "", n = 0; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += Q));
                return r
            }

            function I(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                return n
            }

            function P(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                return n
            }

            function L(e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                for (var i = "", s = t; s < r; ++s) i += z(e[s]);
                return i
            }

            function q(e, t, r) {
                for (var n = e.slice(t, r), i = "", s = 0; s < n.length; s += 2) i += String.fromCharCode(n[s] + 256 * n[s + 1]);
                return i
            }

            function O(e, t, r) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function U(e, t, r, n, i, o) {
                if (!s.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw new RangeError("Index out of range")
            }

            function N(e, t, r, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, s = Math.min(e.length - r, 2); i < s; ++i) e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
            }

            function j(e, t, r, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, s = Math.min(e.length - r, 4); i < s; ++i) e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255
            }

            function D(e, t, r, n, i, s) {
                if (r + n > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function M(e, t, r, n, i) {
                return i || D(e, t, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), Z.write(e, t, r, n, 23, 4), r + 4
            }

            function B(e, t, r, n, i) {
                return i || D(e, t, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), Z.write(e, t, r, n, 52, 8), r + 8
            }

            function H(e) {
                if (e = F(e).replace(ee, ""), e.length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }

            function F(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }

            function z(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function V(e, t) {
                t = t || 1 / 0;
                for (var r, n = e.length, i = null, s = [], o = 0; o < n; ++o) {
                    if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319) {
                                (t -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            if (o + 1 === n) {
                                (t -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && s.push(239, 191, 189), i = r;
                            continue
                        }
                        r = 65536 + (i - 55296 << 10 | r - 56320)
                    } else i && (t -= 3) > -1 && s.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        s.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        s.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return s
            }

            function X(e) {
                for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                return t
            }

            function K(e, t) {
                for (var r, n, i, s = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) r = e.charCodeAt(o), n = r >> 8, i = r % 256, s.push(i), s.push(n);
                return s
            }

            function W(e) {
                return J.toByteArray(H(e))
            }

            function Y(e, t, r, n) {
                for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
                return i
            }

            function G(e) {
                return e !== e
            }
            var J = e("base64-js"),
                Z = e("ieee754"),
                $ = e("isarray");
            r.Buffer = s, r.SlowBuffer = m, r.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), r.kMaxLength = n(), s.poolSize = 8192, s._augment = function(e) {
                return e.__proto__ = s.prototype, e
            }, s.from = function(e, t, r) {
                return o(null, e, t, r)
            }, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
                value: null,
                configurable: !0
            })), s.alloc = function(e, t, r) {
                return u(null, e, t, r)
            }, s.allocUnsafe = function(e) {
                return c(null, e)
            }, s.allocUnsafeSlow = function(e) {
                return c(null, e)
            }, s.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }, s.compare = function(e, t) {
                if (!s.isBuffer(e) || !s.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                    if (e[i] !== t[i]) {
                        r = e[i], n = t[i];
                        break
                    } return r < n ? -1 : n < r ? 1 : 0
            }, s.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, s.concat = function(e, t) {
                if (!$(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return s.alloc(0);
                var r;
                if (void 0 === t)
                    for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                var n = s.allocUnsafe(t),
                    i = 0;
                for (r = 0; r < e.length; ++r) {
                    var o = e[r];
                    if (!s.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(n, i), i += o.length
                }
                return n
            }, s.byteLength = v, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) y(this, t, t + 1);
                return this
            }, s.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
                return this
            }, s.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
                return this
            }, s.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : g.apply(this, arguments)
            }, s.prototype.equals = function(e) {
                if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === s.compare(this, e)
            }, s.prototype.inspect = function() {
                var e = "",
                    t = r.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
            }, s.prototype.compare = function(e, t, r, n, i) {
                if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                if (n >= i && t >= r) return 0;
                if (n >= i) return -1;
                if (t >= r) return 1;
                if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e) return 0;
                for (var o = i - n, a = r - t, u = Math.min(o, a), c = this.slice(n, i), h = e.slice(t, r), l = 0; l < u; ++l)
                    if (c[l] !== h[l]) {
                        o = c[l], a = h[l];
                        break
                    } return o < a ? -1 : a < o ? 1 : 0
            }, s.prototype.includes = function(e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, s.prototype.indexOf = function(e, t, r) {
                return b(this, e, t, r, !0)
            }, s.prototype.lastIndexOf = function(e, t, r) {
                return b(this, e, t, r, !1)
            }, s.prototype.write = function(e, t, r, n) {
                if (void 0 === t) n = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                var i = this.length - t;
                if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var s = !1;;) switch (n) {
                    case "hex":
                        return _(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return E(this, e, t, r);
                    case "ascii":
                        return S(this, e, t, r);
                    case "latin1":
                    case "binary":
                        return x(this, e, t, r);
                    case "base64":
                        return C(this, e, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return R(this, e, t, r);
                    default:
                        if (s) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), s = !0
                }
            }, s.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var Q = 4096;
            s.prototype.slice = function(e, t) {
                var r = this.length;
                e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                var n;
                if (s.TYPED_ARRAY_SUPPORT) n = this.subarray(e, t), n.__proto__ = s.prototype;
                else {
                    var i = t - e;
                    n = new s(i, void 0);
                    for (var o = 0; o < i; ++o) n[o] = this[o + e]
                }
                return n
            }, s.prototype.readUIntLE = function(e, t, r) {
                e |= 0, t |= 0, r || O(e, t, this.length);
                for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256);) n += this[e + s] * i;
                return n
            }, s.prototype.readUIntBE = function(e, t, r) {
                e |= 0, t |= 0, r || O(e, t, this.length);
                for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
                return n
            }, s.prototype.readUInt8 = function(e, t) {
                return t || O(e, 1, this.length), this[e]
            }, s.prototype.readUInt16LE = function(e, t) {
                return t || O(e, 2, this.length), this[e] | this[e + 1] << 8
            }, s.prototype.readUInt16BE = function(e, t) {
                return t || O(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, s.prototype.readUInt32LE = function(e, t) {
                return t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, s.prototype.readUInt32BE = function(e, t) {
                return t || O(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, s.prototype.readIntLE = function(e, t, r) {
                e |= 0, t |= 0, r || O(e, t, this.length);
                for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256);) n += this[e + s] * i;
                return i *= 128, n >= i && (n -= Math.pow(2, 8 * t)), n
            }, s.prototype.readIntBE = function(e, t, r) {
                e |= 0, t |= 0, r || O(e, t, this.length);
                for (var n = t, i = 1, s = this[e + --n]; n > 0 && (i *= 256);) s += this[e + --n] * i;
                return i *= 128, s >= i && (s -= Math.pow(2, 8 * t)), s
            }, s.prototype.readInt8 = function(e, t) {
                return t || O(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, s.prototype.readInt16LE = function(e, t) {
                t || O(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, s.prototype.readInt16BE = function(e, t) {
                t || O(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, s.prototype.readInt32LE = function(e, t) {
                return t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, s.prototype.readInt32BE = function(e, t) {
                return t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, s.prototype.readFloatLE = function(e, t) {
                return t || O(e, 4, this.length), Z.read(this, e, !0, 23, 4)
            }, s.prototype.readFloatBE = function(e, t) {
                return t || O(e, 4, this.length), Z.read(this, e, !1, 23, 4)
            }, s.prototype.readDoubleLE = function(e, t) {
                return t || O(e, 8, this.length), Z.read(this, e, !0, 52, 8)
            }, s.prototype.readDoubleBE = function(e, t) {
                return t || O(e, 8, this.length), Z.read(this, e, !1, 52, 8)
            }, s.prototype.writeUIntLE = function(e, t, r, n) {
                if (e = +e, t |= 0, r |= 0, !n) {
                    U(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
                }
                var i = 1,
                    s = 0;
                for (this[t] = 255 & e; ++s < r && (i *= 256);) this[t + s] = e / i & 255;
                return t + r
            }, s.prototype.writeUIntBE = function(e, t, r, n) {
                if (e = +e, t |= 0, r |= 0, !n) {
                    U(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
                }
                var i = r - 1,
                    s = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) this[t + i] = e / s & 255;
                return t + r
            }, s.prototype.writeUInt8 = function(e, t, r) {
                return e = +e, t |= 0, r || U(this, e, t, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, s.prototype.writeUInt16LE = function(e, t, r) {
                return e = +e, t |= 0, r || U(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : N(this, e, t, !0), t + 2
            }, s.prototype.writeUInt16BE = function(e, t, r) {
                return e = +e, t |= 0, r || U(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : N(this, e, t, !1), t + 2
            }, s.prototype.writeUInt32LE = function(e, t, r) {
                return e = +e, t |= 0, r || U(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : j(this, e, t, !0), t + 4
            }, s.prototype.writeUInt32BE = function(e, t, r) {
                return e = +e, t |= 0, r || U(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : j(this, e, t, !1), t + 4
            }, s.prototype.writeIntLE = function(e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    U(this, e, t, r, i - 1, -i)
                }
                var s = 0,
                    o = 1,
                    a = 0;
                for (this[t] = 255 & e; ++s < r && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1), this[t + s] = (e / o >> 0) - a & 255;
                return t + r
            }, s.prototype.writeIntBE = function(e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    U(this, e, t, r, i - 1, -i)
                }
                var s = r - 1,
                    o = 1,
                    a = 0;
                for (this[t + s] = 255 & e; --s >= 0 && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1), this[t + s] = (e / o >> 0) - a & 255;
                return t + r
            }, s.prototype.writeInt8 = function(e, t, r) {
                return e = +e, t |= 0, r || U(this, e, t, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, s.prototype.writeInt16LE = function(e, t, r) {
                return e = +e, t |= 0, r || U(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : N(this, e, t, !0), t + 2
            }, s.prototype.writeInt16BE = function(e, t, r) {
                return e = +e, t |= 0, r || U(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : N(this, e, t, !1), t + 2
            }, s.prototype.writeInt32LE = function(e, t, r) {
                return e = +e, t |= 0, r || U(this, e, t, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : j(this, e, t, !0), t + 4
            }, s.prototype.writeInt32BE = function(e, t, r) {
                return e = +e, t |= 0, r || U(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : j(this, e, t, !1), t + 4
            }, s.prototype.writeFloatLE = function(e, t, r) {
                return M(this, e, t, !0, r)
            }, s.prototype.writeFloatBE = function(e, t, r) {
                return M(this, e, t, !1, r)
            }, s.prototype.writeDoubleLE = function(e, t, r) {
                return B(this, e, t, !0, r)
            }, s.prototype.writeDoubleBE = function(e, t, r) {
                return B(this, e, t, !1, r)
            }, s.prototype.copy = function(e, t, r, n) {
                if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                var i, o = n - r;
                if (this === e && r < t && t < n)
                    for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
                else if (o < 1e3 || !s.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < o; ++i) e[i + t] = this[i + r];
                else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
                return o
            }, s.prototype.fill = function(e, t, r, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
                        var i = e.charCodeAt(0);
                        i < 256 && (e = i)
                    }
                    if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !s.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                if (r <= t) return this;
                t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0);
                var o;
                if ("number" == typeof e)
                    for (o = t; o < r; ++o) this[o] = e;
                else {
                    var a = s.isBuffer(e) ? e : V(new s(e, n).toString()),
                        u = a.length;
                    for (o = 0; o < r - t; ++o) this[o + t] = a[o % u]
                }
                return this
            };
            var ee = /[^+\/0-9A-Za-z-_]/g
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "base64-js": 1,
        ieee754: 5,
        isarray: 7
    }],
    7: [function(e, t, r) {
        var n = {}.toString;
        t.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    }, {}],
    5: [function(e, t, r) {
        r.read = function(e, t, r, n, i) {
            var s, o, a = 8 * i - n - 1,
                u = (1 << a) - 1,
                c = u >> 1,
                h = -7,
                l = r ? i - 1 : 0,
                f = r ? -1 : 1,
                p = e[t + l];
            for (l += f, s = p & (1 << -h) - 1, p >>= -h, h += a; h > 0; s = 256 * s + e[t + l], l += f, h -= 8);
            for (o = s & (1 << -h) - 1, s >>= -h, h += n; h > 0; o = 256 * o + e[t + l], l += f, h -= 8);
            if (0 === s) s = 1 - c;
            else {
                if (s === u) return o ? NaN : 1 / 0 * (p ? -1 : 1);
                o += Math.pow(2, n), s -= c
            }
            return (p ? -1 : 1) * o * Math.pow(2, s - n)
        }, r.write = function(e, t, r, n, i, s) {
            var o, a, u, c = 8 * s - i - 1,
                h = (1 << c) - 1,
                l = h >> 1,
                f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = n ? 0 : s - 1,
                d = n ? 1 : -1,
                m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = h) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), t += o + l >= 1 ? f / u : f * Math.pow(2, 1 - l), t * u >= 2 && (o++, u /= 2), o + l >= h ? (a = 0, o = h) : o + l >= 1 ? (a = (t * u - 1) * Math.pow(2, i), o += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, i), o = 0)); i >= 8; e[r + p] = 255 & a, p += d, a /= 256, i -= 8);
            for (o = o << i | a, c += i; c > 0; e[r + p] = 255 & o, p += d, o /= 256, c -= 8);
            e[r + p - d] |= 128 * m
        }
    }, {}],
    1: [function(e, t, r) {
        "use strict";

        function n(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("=");
            return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
        }

        function i(e) {
            var t = n(e),
                r = t[0],
                i = t[1];
            return 3 * (r + i) / 4 - i
        }

        function s(e, t, r) {
            return 3 * (t + r) / 4 - r
        }

        function o(e) {
            for (var t, r = n(e), i = r[0], o = r[1], a = new f(s(e, i, o)), u = 0, c = o > 0 ? i - 4 : i, h = 0; h < c; h += 4) t = l[e.charCodeAt(h)] << 18 | l[e.charCodeAt(h + 1)] << 12 | l[e.charCodeAt(h + 2)] << 6 | l[e.charCodeAt(h + 3)], a[u++] = t >> 16 & 255, a[u++] = t >> 8 & 255, a[u++] = 255 & t;
            return 2 === o && (t = l[e.charCodeAt(h)] << 2 | l[e.charCodeAt(h + 1)] >> 4, a[u++] = 255 & t), 1 === o && (t = l[e.charCodeAt(h)] << 10 | l[e.charCodeAt(h + 1)] << 4 | l[e.charCodeAt(h + 2)] >> 2, a[u++] = t >> 8 & 255, a[u++] = 255 & t), a
        }

        function a(e) {
            return h[e >> 18 & 63] + h[e >> 12 & 63] + h[e >> 6 & 63] + h[63 & e]
        }

        function u(e, t, r) {
            for (var n, i = [], s = t; s < r; s += 3) n = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), i.push(a(n));
            return i.join("")
        }

        function c(e) {
            for (var t, r = e.length, n = r % 3, i = [], s = 0, o = r - n; s < o; s += 16383) i.push(u(e, s, s + 16383 > o ? o : s + 16383));
            return 1 === n ? (t = e[r - 1], i.push(h[t >> 2] + h[t << 4 & 63] + "==")) : 2 === n && (t = (e[r - 2] << 8) + e[r - 1], i.push(h[t >> 10] + h[t >> 4 & 63] + h[t << 2 & 63] + "=")), i.join("")
        }
        r.byteLength = i, r.toByteArray = o, r.fromByteArray = c;
        for (var h = [], l = [], f = "undefined" != typeof Uint8Array ? Uint8Array : Array, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, m = p.length; d < m; ++d) h[d] = p[d], l[p.charCodeAt(d)] = d;
        l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63
    }, {}]
}, {}, [28]);
AWS.apiLoader.services.polly = {}, AWS.Polly = AWS.Service.defineService("polly", ["2016-06-10"]), _xamzrequire = function e(t, r, i) {
    function o(s, c) {
        if (!r[s]) {
            if (!t[s]) {
                var u = "function" == typeof _xamzrequire && _xamzrequire;
                if (!c && u) return u(s, !0);
                if (n) return n(s, !0);
                var a = new Error("Cannot find module '" + s + "'");
                throw a.code = "MODULE_NOT_FOUND", a
            }
            var p = r[s] = {
                exports: {}
            };
            t[s][0].call(p.exports, function(e) {
                var r = t[s][1][e];
                return o(r || e)
            }, p, p.exports, e, t, r, i)
        }
        return r[s].exports
    }
    for (var n = "function" == typeof _xamzrequire && _xamzrequire, s = 0; s < i.length; s++) o(i[s]);
    return o
}({
    97: [function(e, t, r) {
        e("../polly/presigner")
    }, {
        "../polly/presigner": 70
    }],
    70: [function(e, t, r) {
        var i = e("../core"),
            o = i.Protocol.Rest;
        i.Polly.Presigner = i.util.inherit({
            constructor: function(e) {
                e = e || {}, this.options = e, this.service = e.service, this.bindServiceObject(e), this._operations = {}
            },
            bindServiceObject: function(e) {
                if (e = e || {}, this.service) {
                    var t = i.util.copy(this.service.config);
                    this.service = new this.service.constructor.__super__(t), this.service.config.params = i.util.merge(this.service.config.params || {}, e.params)
                } else this.service = new i.Polly(e)
            },
            modifyInputMembers: function(e) {
                var t = i.util.copy(e);
                return t.members = i.util.copy(e.members), i.util.each(e.members, function(e, r) {
                    t.members[e] = i.util.copy(r), r.location && "body" !== r.location || (t.members[e].location = "querystring", t.members[e].locationName = e)
                }), t
            },
            convertPostToGet: function(e) {
                e.httpRequest.method = "GET";
                var t = e.service.api.operations[e.operation],
                    r = this._operations[e.operation];
                r || (this._operations[e.operation] = r = this.modifyInputMembers(t.input));
                var i = o.generateURI(e.httpRequest.endpoint.path, t.httpPath, r, e.params);
                e.httpRequest.path = i, e.httpRequest.body = "", delete e.httpRequest.headers["Content-Length"], delete e.httpRequest.headers["Content-Type"]
            },
            getSynthesizeSpeechUrl: function(e, t, r) {
                var i = this,
                    o = this.service.makeRequest("synthesizeSpeech", e);
                return o.removeAllListeners("build"), o.on("build", function(e) {
                    i.convertPostToGet(e)
                }), o.presign(t, r)
            }
        })
    }, {
        "../core": 38
    }]
}, {}, [97]);
AWS.apiLoader.services.polly["2016-06-10"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2016-06-10",
        endpointPrefix: "polly",
        protocol: "rest-json",
        serviceFullName: "Amazon Polly",
        serviceId: "Polly",
        signatureVersion: "v4",
        uid: "polly-2016-06-10"
    },
    operations: {
        DeleteLexicon: {
            http: {
                method: "DELETE",
                requestUri: "/v1/lexicons/{LexiconName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: ["Name"],
                members: {
                    Name: {
                        shape: "S2",
                        location: "uri",
                        locationName: "LexiconName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DescribeVoices: {
            http: {
                method: "GET",
                requestUri: "/v1/voices",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    LanguageCode: {
                        location: "querystring",
                        locationName: "LanguageCode"
                    },
                    IncludeAdditionalLanguageCodes: {
                        location: "querystring",
                        locationName: "IncludeAdditionalLanguageCodes",
                        type: "boolean"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Voices: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Gender: {},
                                Id: {},
                                LanguageCode: {},
                                LanguageName: {},
                                Name: {},
                                AdditionalLanguageCodes: {
                                    type: "list",
                                    member: {}
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        GetLexicon: {
            http: {
                method: "GET",
                requestUri: "/v1/lexicons/{LexiconName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: ["Name"],
                members: {
                    Name: {
                        shape: "S2",
                        location: "uri",
                        locationName: "LexiconName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Lexicon: {
                        type: "structure",
                        members: {
                            Content: {},
                            Name: {
                                shape: "S2"
                            }
                        }
                    },
                    LexiconAttributes: {
                        shape: "Sk"
                    }
                }
            }
        },
        GetSpeechSynthesisTask: {
            http: {
                method: "GET",
                requestUri: "/v1/synthesisTasks/{TaskId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: ["TaskId"],
                members: {
                    TaskId: {
                        location: "uri",
                        locationName: "TaskId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    SynthesisTask: {
                        shape: "St"
                    }
                }
            }
        },
        ListLexicons: {
            http: {
                method: "GET",
                requestUri: "/v1/lexicons",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Lexicons: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Name: {
                                    shape: "S2"
                                },
                                Attributes: {
                                    shape: "Sk"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListSpeechSynthesisTasks: {
            http: {
                method: "GET",
                requestUri: "/v1/synthesisTasks",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    },
                    Status: {
                        location: "querystring",
                        locationName: "Status"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    SynthesisTasks: {
                        type: "list",
                        member: {
                            shape: "St"
                        }
                    }
                }
            }
        },
        PutLexicon: {
            http: {
                method: "PUT",
                requestUri: "/v1/lexicons/{LexiconName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: ["Name", "Content"],
                members: {
                    Name: {
                        shape: "S2",
                        location: "uri",
                        locationName: "LexiconName"
                    },
                    Content: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        StartSpeechSynthesisTask: {
            http: {
                requestUri: "/v1/synthesisTasks",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: ["OutputFormat", "OutputS3BucketName", "Text", "VoiceId"],
                members: {
                    LexiconNames: {
                        shape: "S10"
                    },
                    OutputFormat: {},
                    OutputS3BucketName: {},
                    OutputS3KeyPrefix: {},
                    SampleRate: {},
                    SnsTopicArn: {},
                    SpeechMarkTypes: {
                        shape: "S13"
                    },
                    Text: {},
                    TextType: {},
                    VoiceId: {},
                    LanguageCode: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    SynthesisTask: {
                        shape: "St"
                    }
                }
            }
        },
        SynthesizeSpeech: {
            http: {
                requestUri: "/v1/speech",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: ["OutputFormat", "Text", "VoiceId"],
                members: {
                    LexiconNames: {
                        shape: "S10"
                    },
                    OutputFormat: {},
                    SampleRate: {},
                    SpeechMarkTypes: {
                        shape: "S13"
                    },
                    Text: {},
                    TextType: {},
                    VoiceId: {},
                    LanguageCode: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    AudioStream: {
                        type: "blob",
                        streaming: !0
                    },
                    ContentType: {
                        location: "header",
                        locationName: "Content-Type"
                    },
                    RequestCharacters: {
                        location: "header",
                        locationName: "x-amzn-RequestCharacters",
                        type: "integer"
                    }
                },
                payload: "AudioStream"
            }
        }
    },
    shapes: {
        S2: {
            type: "string",
            sensitive: !0
        },
        Sk: {
            type: "structure",
            members: {
                Alphabet: {},
                LanguageCode: {},
                LastModified: {
                    type: "timestamp"
                },
                LexiconArn: {},
                LexemesCount: {
                    type: "integer"
                },
                Size: {
                    type: "integer"
                }
            }
        },
        St: {
            type: "structure",
            members: {
                TaskId: {},
                TaskStatus: {},
                TaskStatusReason: {},
                OutputUri: {},
                CreationTime: {
                    type: "timestamp"
                },
                RequestCharacters: {
                    type: "integer"
                },
                SnsTopicArn: {},
                LexiconNames: {
                    shape: "S10"
                },
                OutputFormat: {},
                SampleRate: {},
                SpeechMarkTypes: {
                    shape: "S13"
                },
                TextType: {},
                VoiceId: {},
                LanguageCode: {}
            }
        },
        S10: {
            type: "list",
            member: {
                shape: "S2"
            }
        },
        S13: {
            type: "list",
            member: {}
        }
    },
    paginators: {
        ListSpeechSynthesisTasks: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        }
    }
};
AWS.apiLoader.services.sts = {}, AWS.STS = AWS.Service.defineService("sts", ["2011-06-15"]), _xamzrequire = function e(r, t, n) {
    function i(o, a) {
        if (!t[o]) {
            if (!r[o]) {
                var u = "function" == typeof _xamzrequire && _xamzrequire;
                if (!a && u) return u(o, !0);
                if (s) return s(o, !0);
                var c = new Error("Cannot find module '" + o + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var d = t[o] = {
                exports: {}
            };
            r[o][0].call(d.exports, function(e) {
                var t = r[o][1][e];
                return i(t || e)
            }, d, d.exports, e, r, t, n)
        }
        return t[o].exports
    }
    for (var s = "function" == typeof _xamzrequire && _xamzrequire, o = 0; o < n.length; o++) i(n[o]);
    return i
}({
    102: [function(e, r, t) {
        var n = e("../core");
        n.util.update(n.STS.prototype, {
            credentialsFrom: function(e, r) {
                return e ? (r || (r = new n.TemporaryCredentials), r.expired = !1, r.accessKeyId = e.Credentials.AccessKeyId, r.secretAccessKey = e.Credentials.SecretAccessKey, r.sessionToken = e.Credentials.SessionToken, r.expireTime = e.Credentials.Expiration, r) : null
            },
            assumeRoleWithWebIdentity: function(e, r) {
                return this.makeUnauthenticatedRequest("assumeRoleWithWebIdentity", e, r)
            },
            assumeRoleWithSAML: function(e, r) {
                return this.makeUnauthenticatedRequest("assumeRoleWithSAML", e, r)
            }
        })
    }, {
        "../core": 38
    }]
}, {}, [102]);
AWS.apiLoader.services.sts["2011-06-15"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2011-06-15",
        endpointPrefix: "sts",
        globalEndpoint: "sts.amazonaws.com",
        protocol: "query",
        serviceAbbreviation: "AWS STS",
        serviceFullName: "AWS Security Token Service",
        serviceId: "STS",
        signatureVersion: "v4",
        uid: "sts-2011-06-15",
        xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/"
    },
    operations: {
        AssumeRole: {
            input: {
                type: "structure",
                required: ["RoleArn", "RoleSessionName"],
                members: {
                    RoleArn: {},
                    RoleSessionName: {},
                    Policy: {},
                    DurationSeconds: {
                        type: "integer"
                    },
                    ExternalId: {},
                    SerialNumber: {},
                    TokenCode: {}
                }
            },
            output: {
                resultWrapper: "AssumeRoleResult",
                type: "structure",
                members: {
                    Credentials: {
                        shape: "Sa"
                    },
                    AssumedRoleUser: {
                        shape: "Sf"
                    },
                    PackedPolicySize: {
                        type: "integer"
                    }
                }
            }
        },
        AssumeRoleWithSAML: {
            input: {
                type: "structure",
                required: ["RoleArn", "PrincipalArn", "SAMLAssertion"],
                members: {
                    RoleArn: {},
                    PrincipalArn: {},
                    SAMLAssertion: {},
                    Policy: {},
                    DurationSeconds: {
                        type: "integer"
                    }
                }
            },
            output: {
                resultWrapper: "AssumeRoleWithSAMLResult",
                type: "structure",
                members: {
                    Credentials: {
                        shape: "Sa"
                    },
                    AssumedRoleUser: {
                        shape: "Sf"
                    },
                    PackedPolicySize: {
                        type: "integer"
                    },
                    Subject: {},
                    SubjectType: {},
                    Issuer: {},
                    Audience: {},
                    NameQualifier: {}
                }
            }
        },
        AssumeRoleWithWebIdentity: {
            input: {
                type: "structure",
                required: ["RoleArn", "RoleSessionName", "WebIdentityToken"],
                members: {
                    RoleArn: {},
                    RoleSessionName: {},
                    WebIdentityToken: {},
                    ProviderId: {},
                    Policy: {},
                    DurationSeconds: {
                        type: "integer"
                    }
                }
            },
            output: {
                resultWrapper: "AssumeRoleWithWebIdentityResult",
                type: "structure",
                members: {
                    Credentials: {
                        shape: "Sa"
                    },
                    SubjectFromWebIdentityToken: {},
                    AssumedRoleUser: {
                        shape: "Sf"
                    },
                    PackedPolicySize: {
                        type: "integer"
                    },
                    Provider: {},
                    Audience: {}
                }
            }
        },
        DecodeAuthorizationMessage: {
            input: {
                type: "structure",
                required: ["EncodedMessage"],
                members: {
                    EncodedMessage: {}
                }
            },
            output: {
                resultWrapper: "DecodeAuthorizationMessageResult",
                type: "structure",
                members: {
                    DecodedMessage: {}
                }
            }
        },
        GetCallerIdentity: {
            input: {
                type: "structure",
                members: {}
            },
            output: {
                resultWrapper: "GetCallerIdentityResult",
                type: "structure",
                members: {
                    UserId: {},
                    Account: {},
                    Arn: {}
                }
            }
        },
        GetFederationToken: {
            input: {
                type: "structure",
                required: ["Name"],
                members: {
                    Name: {},
                    Policy: {},
                    DurationSeconds: {
                        type: "integer"
                    }
                }
            },
            output: {
                resultWrapper: "GetFederationTokenResult",
                type: "structure",
                members: {
                    Credentials: {
                        shape: "Sa"
                    },
                    FederatedUser: {
                        type: "structure",
                        required: ["FederatedUserId", "Arn"],
                        members: {
                            FederatedUserId: {},
                            Arn: {}
                        }
                    },
                    PackedPolicySize: {
                        type: "integer"
                    }
                }
            }
        },
        GetSessionToken: {
            input: {
                type: "structure",
                members: {
                    DurationSeconds: {
                        type: "integer"
                    },
                    SerialNumber: {},
                    TokenCode: {}
                }
            },
            output: {
                resultWrapper: "GetSessionTokenResult",
                type: "structure",
                members: {
                    Credentials: {
                        shape: "Sa"
                    }
                }
            }
        }
    },
    shapes: {
        Sa: {
            type: "structure",
            required: ["AccessKeyId", "SecretAccessKey", "SessionToken", "Expiration"],
            members: {
                AccessKeyId: {},
                SecretAccessKey: {},
                SessionToken: {},
                Expiration: {
                    type: "timestamp"
                }
            }
        },
        Sf: {
            type: "structure",
            required: ["AssumedRoleId", "Arn"],
            members: {
                AssumedRoleId: {},
                Arn: {}
            }
        }
    },
    paginators: {}
};