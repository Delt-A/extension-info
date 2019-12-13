! function() {
    "use strict";
    angular.module("app.copypaste").factory("imageReader", ["$log", "fileReader", function(e, r) {
        var t, i, n;
        return {
            readImages: function(e, d) {
                t = e, i = d, n = "", r.onloadend = o, r.onabort = s, r.onerror = l, a()
            },
            isImageFile: function(e) {
                return "file" === e.kind && -1 !== e.type.indexOf("image/")
            },
            getAsFile: function(e) {
                return e.getAsFile()
            }
        };

        function a() {
            if (Utilities.isUndefinedOrNull(t) || 0 === t.length) i(n);
            else {
                var e = t.shift();
                if (!r.isBlob(e)) return void a();
                r.readAsDataURL(e)
            }
        }

        function o(e) {
            Utilities.isNotUndefinedOrNull(e.target) && Utilities.isNotUndefinedOrNull(e.target.result) && (n += '<img src="' + e.target.result + '">'), a()
        }

        function s(r) {
            e.error(String.format("imageReader::onAbort() - readAsDataURL was aborted.")), a()
        }

        function l(r) {
            e.error(String.format("imageReader::onError() - error happens in readAsDataURL()")), a()
        }
    }])
}();