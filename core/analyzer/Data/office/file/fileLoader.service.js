! function() {
    "use strict";
    angular.module("app.file").factory("fileLoader", ["$http", "$q", "$log", "constants", function(e, t, r, i) {
        return {
            loadFile: function(e, n) {
                var o = t.defer();
                if (Utilities.isUndefinedOrNull(e) || Utilities.isUndefinedOrNull(n) && n !== i.FILE.ORIGIN.HTML5 && n !== i.FILE.ORIGIN.LOCAL_PATH) return o.reject(String.format("fileLoader.loadFile(): Invalid argument: fileInfo: {0}, fileOrigin: {1}", JSON.stringify(e), n)), o.promise;
                if (n === i.FILE.ORIGIN.HTML5) {
                    if (e.size > i.FILE.MAX_SIZE_BYTE_LIMIT) return r.info(String.format("fileLoader.loadFile(): Attempt to upload file with size exceeding limit - {0} bytes", e.size)), o.reject(i.FILE.ERROR.FILE_SIZE_MAX_EXCEEDED), o.promise;
                    (function(e) {
                        var r = t.defer();
                        if (Utilities.isUndefinedOrNull(i.FILE.SUPPORTED_FILE_TYPES[Utilities.getFileExtension(e.name)])) return r.reject(i.FILE.ERROR.UNSUPPORTED_FILE_TYPE), r.promise;
                        var n = new FileReader,
                            o = {};
                        return o.name = encodeURI(e.name), n.onload = function() {
                            o.content = new Int8Array(n.result), r.resolve(o)
                        }, n.readAsArrayBuffer(e), r.promise
                    })(e).then((function(e) {
                        o.resolve(e)
                    }), (function(e) {
                        o.reject(e)
                    }))
                } else(function(e) {
                    var n = t.defer(),
                        o = new XMLHttpRequest;
                    return o.open("GET", e, !0), o.responseType = "arraybuffer", o.onreadystatechange = function() {
                        if (4 === o.readyState) {
                            if (200 !== o.status && 0 !== o.status) return r.error(String.format("fileLoader.loadFileFromPath(): XMLHttpRequestError at method loadFileFromPath - {0}", o.status)), n.reject(i.FILE.ERROR.LOAD_FROM_PATH), n.promise;
                            var t = {};
                            t.content = o.response, t.name = e.replace(/^.*[\\\/]/, ""), n.resolve(t)
                        }
                    }, o.send(null), n.promise
                })(e).then((function(e) {
                    e.content.byteLength > i.FILE.MAX_SIZE_BYTE_LIMIT && (r.info(String.format("fileLoader.loadFile(): Attempt to upload file with size exceeding limit - {0} bytes", e.content.byteLength)), o.reject(i.FILE.ERROR.FILE_SIZE_MAX_EXCEEDED)), o.resolve(e)
                }), (function(e) {
                    o.reject(e)
                }));
                return o.promise
            }
        }
    }])
}();