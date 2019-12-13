! function() {
    "use strict";
    angular.module("localization", []).factory("localize", ["$filter", function(t) {
        return {
            getLocalizedString: function(t) {
                return BrowserHandler.i18n.getMessage(t)
            }
        }
    }]).filter("i18n", ["localize", function(t) {
        return function(e) {
            return t.getLocalizedString(e)
        }
    }]).directive("i18n", ["localize", function(t) {
        var e = {
            restrict: "EAC",
            updateText: function(e, n) {
                var i = n.split("|");
                if (!(i.length <= 1)) {
                    var r = t.getLocalizedString(i[0]);
                    if (r) {
                        for (var a = 1; a < i.length; a++) {
                            var c = "{" + (a - 1) + "}";
                            r = r.replace(c, i[a])
                        }
                        e.text(r)
                    }
                }
            },
            link: function(t, n, i) {
                i.$observe("i18n", (function(t) {
                    e.updateText(n, i.i18n)
                }))
            }
        };
        return e
    }]).directive("i18nAttr", ["localize", function(t) {
        var e = {
            restrict: "EAC",
            updateText: function(e, n) {
                var i = n.split("|");
                if (!(i.length < 2)) {
                    var r = t.getLocalizedString(i[0]);
                    if (r) {
                        for (var a = 2; a < i.length; a++) {
                            var c = "{" + (a - 2) + "}";
                            r = r.replace(c, i[a])
                        }
                        e.attr(i[1], r)
                    }
                }
            },
            link: function(t, n, i) {
                i.$observe("i18nAttr", (function(t) {
                    e.updateText(n, t)
                }))
            }
        };
        return e
    }])
}();