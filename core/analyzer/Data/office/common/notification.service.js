! function() {
    "use strict";
    angular.module("app.common").factory("notification", ["$log", "localize", "constants", function(t, i, o) {
        return {
            show: function(n) {
                if (Utilities.isBackgroundContext()) {
                    var e;
                    if (void 0 !== n.buttons && null !== n.buttons) {
                        e = [];
                        for (var r = 0; r < n.buttons.length; ++r) e[r] = {}, e[r].title = i.getLocalizedString(n.buttons[r].title), e[r].iconUrl = n.buttons[r].iconUrl
                    }
                    BrowserHandler.notifications.clear(n.id, (function(o) {
                        BrowserHandler.notifications.create(n.id, {
                            iconUrl: "../assets/icon.png",
                            imageUrl: n.imageUrl,
                            message: i.getLocalizedString(n.message),
                            priority: n.priority,
                            progress: n.progress,
                            title: "",
                            type: n.type,
                            buttons: e
                        }, (function(i) {
                            null == i && t.error("CreateNotificationError")
                        }))
                    }))
                } else BrowserHandler.runtime.sendMessage({
                    activity: o.ACTIVITY.NOTIFICATION.NAME,
                    notification: n
                })
            }
        }
    }])
}();