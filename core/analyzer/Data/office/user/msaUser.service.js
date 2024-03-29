! function() {
    "use strict";
    angular.module("app.user").service("msaUserService", ["$log", "$injector", "constants", function(e, r, t) {
        this.type = t.USER_TYPE.MSA, this.getConfig = function() {
            return {
                url: t.MSACONFIG.URL,
                params: {
                    client_id: t.MSACONFIG.CLIENT_ID,
                    client_secret: t.MSACONFIG.CLIENT_SECRET,
                    redirect_uri: t.MSACONFIG.REDIRECT_URI
                },
                resource: t.ONEDRIVE.INSTANCE,
                loginUrl: t.MSACONFIG.INSTANCE + "?response_type=code&client_id=" + t.MSACONFIG.CLIENT_ID + "&redirect_uri=" + t.MSACONFIG.REDIRECT_URI + "&scope=" + t.MSACONFIG.SCOPE,
                logoutUrl: t.MSACONFIG.LOGOUT_URI
            }
        }, this.lookupUserInfo = function(e, i) {
            var I = {
                oneDriveUrl: t.LINKS.APP.ONEDRIVE
            };
            r.get("$http")({
                method: "GET",
                url: t.MSACONFIG.USERINFO_URL,
                headers: {
                    "X-UserType": t.USER_TYPE.MSA
                }
            }).success((function(e) {
                I.email = e.emails.account, I.cid = e.id, i(I)
            })).error((function() {
                i(I)
            }))
        }
    }])
}();