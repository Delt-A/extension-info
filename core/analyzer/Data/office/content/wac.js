! function(e) {
    "use strict";
    jQuery(document).ready((function() {
        try {
            window.localStorage.setItem("ChromeExtensionBarDismiss", "true"), window.localStorage.setItem("IsOfficeOnlineExtensionInstalled", "true"), window.localStorage.setItem("IsCopyPasteSupported", "true")
        } catch (e) {}
    }))
}();