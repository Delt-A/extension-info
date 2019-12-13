! function() {
    "use strict";
    angular.module("app.copypaste").factory("copyPasteService", ["$log", "imageReader", function(e, t) {
        var n;
        return {
            handleTestCommand: function(t, n, a) {
                try {
                    a(t.object)
                } catch (t) {
                    e.error(String.format("handleTestCommand() - Exception: {0}", t.toString()))
                } finally {
                    return e.trackEvent("CopyPaste_Test"), !1
                }
            },
            handleCopyCommand: function(t, n, a) {
                var o;
                try {
                    (o = document.getElementById("copyPasteSandbox")).innerHTML = t.object, o.focus(), document.execCommand("selectAll"), document.execCommand("copy"), a()
                } catch (t) {
                    e.error(String.format("handleCopyCommand() - Exception: {0}", t.toString()))
                } finally {
                    return o.innerHTML = "", e.trackEvent("CopyPaste_Copy"), !1
                }
            },
            handlePasteCommand: function(a, o, r) {
                var i, c = !1;
                try {
                    (i = document.getElementById("copyPasteSandbox")).innerHTML = "", i.focus(), document.execCommand("selectAll"), document.execCommand("paste") && (Utilities.isNotUndefinedOrNull(n) && n.length > 0 ? (t.readImages(n, (function(e) {
                        r(e)
                    })), c = !0) : r(i.innerHTML))
                } catch (t) {
                    e.error(String.format("handlePasteCommand() - Exception: {0}", t.toString()))
                } finally {
                    return i.innerHTML = "", e.trackEvent("CopyPaste_Paste", {
                        IsPrefetchedImage: c
                    }), c
                }
            },
            onPasteEvent: function(e) {
                if (n = [], Utilities.isUndefinedOrNull(e.clipboardData) || Utilities.isUndefinedOrNull(e.clipboardData.items)) return;
                for (var a = e.clipboardData.items, o = 0; o < a.length; ++o) t.isImageFile(a[o]) && n.push(t.getAsFile(a[o]))
            }
        }
    }])
}();