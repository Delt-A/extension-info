! function() {
    "use strict";
    angular.module("app.experimentation").controller("SharingController", ["experimentService", function(n) {
        var t = this,
            i = "/experimentation/sharing/",
            e = "SHARING";
        t.flightView = i + "sharingControl/sharingControl.html", n.getFlight(e).then((function(n) {
            t.flightView = i + n
        }))
    }])
}();