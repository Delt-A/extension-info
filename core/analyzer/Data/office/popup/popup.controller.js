! function() {
    "use strict";
    angular.module("app.popup", []).controller("PopupController", ["$timeout", "$scope", "$q", "$log", "$document", "constants", "storage", "userService", "localize", "notification", function(e, n, t, i, o, s, r, l, a, c) {
        var u = this;
        u.accountPanelOpened = !1, u.filesSelected = null, u.webRedirectInputChecked = !1, u.telemetryInputChecked = !1, u.onLine = !0, u.username = "", u.profilePicture = "", u.rtl = Utilities.isRTL(), u.isChrome = Utilities.isChrome(), u.editorFeatureEnabled = Utilities.isEditorEnabled(), u.userInEditorPreview = !1;
        var d = Utilities.getAppDescription();

        function I() {
            i.trackEvent("PopupSignOutLinkClick"), u.userService.logout(n.userType), u.hasSignedIn = u.constants.SIGNINSTATUS.NONE, n.userType = u.constants.USER_TYPE.NONE, r.remove("localRecentDocuments")
        }

        function p() {
            i.trackEvent("PopupOpenDocument_" + n.userType), u.userService.getUserInfo(n.userType, (function(e) {
                Utilities.isUndefinedOrNull(e) ? i.warn("PopupController.openDocument(): invalid userInfo") : Utilities.isUndefinedOrNull(e.oneDriveUrl) ? i.warn("PopupController.openDocument(): invalid OneDriveUrl") : Utilities.navigateToUrlWithNewTab(e.oneDriveUrl, !0)
            }))
        }

        function S() {
            return n.userType === u.constants.USER_TYPE.O365
        }
        u.appDescriptionMessage = d || a.getLocalizedString("AppDescription"), u.onMenuItemClick = function(e) {
            u.currentViewMode = u.currentViewMode === e ? u.constants.MENU_VIEWMODE.NONE : u.currentViewMode = e
        }, u.onSignOutClick = function() {
            u.currentViewMode = u.constants.MENU_VIEWMODE.NONE, u.hasSignedIn === u.constants.SIGNINSTATUS.SIGNEDIN && I()
        }, u.onWelcomeSignInClick = function(e) {
            i.trackEvent("PopupSignInLinkClick"), BrowserHandler.runtime.sendMessage({
                activity: u.constants.ACTIVITY.AUTHENTICATION.NAME,
                type: e
            }), window.close()
        }, u.onProfileClick = function() {
            u.accountPanelOpened = !u.accountPanelOpened
        }, u.onSignOutLinkClick = I, u.onSignupLinkClick = function() {
            i.trackEvent("PopupSignupLinkClick"), Utilities.navigateToUrlWithNewTab(u.constants.LINKS.SIGNUP, !0)
        }, u.onWebRedirectInputChange = function() {
            u.webRedirectInputChecked = !u.webRedirectInputChecked, u.storage.set({
                webRedirect_disabled: !u.webRedirectInputChecked
            }), i.trackEvent("PopupWebRedirectChecked", {
                enabled: u.webRedirectInputChecked
            })
        }, u.onTelemetryInputChange = function() {
            u.telemetryInputChecked = !u.telemetryInputChecked, i.setEnabledSetting(u.telemetryInputChecked), i.trackEvent("PopupTelemetryInputChecked", {
                enabled: u.telemetryInputChecked
            })
        }, u.onFileInputChange = function() {
            u.loadFile(), i.trackEvent("PopupFileInputChange")
        }, u.onFeedbackClick = function() {
            Utilities.navigateToUrlWithNewTab(BrowserHandler.extension.getURL(u.constants.LINKS.FEEDBACK_URL), !0)
        }, u.openDocument = p, u.openOfficeHome = function() {
            Utilities.navigateToUrlWithNewTab(u.constants.LINKS.OFFICE_HOME_URL, !0)
        }, u.openSupportPage = function() {
            var e = Utilities.shouldShowEditorMaterial() ? u.constants.LINKS.SUPPORT_URL_EDITOR : u.constants.LINKS.SUPPORT_URL;
            Utilities.navigateToUrlWithNewTab(e, !0)
        }, u.openMyAccountPage = function() {
            var e = S() ? u.constants.LINKS.MYACCOUNT_O365_URL : u.constants.LINKS.MYACCOUNT_MSA_URL;
            Utilities.navigateToUrlWithNewTab(e, !0)
        }, u.browseToRecents = function() {
            i.trackEvent("PopupBrowseToRecents_" + n.userType), u.userService.getUserInfo(n.userType, (function(e) {
                Utilities.isUndefinedOrNull(e) ? i.warn("PopupController.browseToRecents(): invalid userInfo") : Utilities.isUndefinedOrNull(e.oneDriveUrl) ? i.warn("PopupController.browseToRecents(): invalid OneDriveUrl") : Utilities.navigateToUrlWithNewTab(String.format("{0}{1}", e.oneDriveUrl, S() ? "" : "/?qt=mru"), !0)
            }))
        }, u.createDocument = function(e, t) {
            var o;
            if (i.trackEvent("PopupCreateDocument_" + e.id), "OneDrive" !== e.id) {
                if ("Outlook" === e.id) o = S() ? u.constants.LINKS.APP.OUTLOOK_O365 : u.constants.LINKS.APP.OUTLOOK_DEFAULT;
                else {
                    if ("SharePoint" === e.id) return void u.userService.getUserInfo(n.userType, (function(e) {
                        Utilities.isNotUndefinedOrNull(e) && Utilities.isNotUndefinedOrNull(e.sharePointUrl) ? Utilities.navigateToUrlWithNewTab(e.sharePointUrl, !0) : (i.warn("PopupController.openDocument(): invalid sharePointUrl"), Utilities.navigateToUrlWithNewTab(u.constants.LINKS.APP.SHAREPOINT_DEFAULT, !0))
                    }));
                    o = String.format(e.url, u.hasSignedIn !== u.constants.SIGNINSTATUS.SIGNEDIN ? "0" : S() ? "2" : "1")
                }
                Utilities.navigateToUrlWithNewTab(o, !(!Utilities.isUndefinedOrNull(t) && !Utilities.isUndefinedOrNull(t.ctrlKey)) || !t.ctrlKey)
            } else p()
        }, u.loadFile = function() {
            if (i.trackEvent("PopupLoadFile", {
                    filesSelectedCount: u.filesSelected.length
                }), u.filesSelected.length > 1 && i.warn(String.format("loadFile called with {0} files selected", u.filesSelected.length)), !u.constants.FILE.SUPPORTED_FILE_TYPES[Utilities.getFileExtension(u.filesSelected[0].name)]) return i.info(String.format("PopupController.loadFile(): User attempted to open an unsupported file type of {0} extension", Utilities.getFileExtension(u.filesSelected[0].name))), void c.show(u.constants.NOTIFICATION.UNSUPPORTEDFILETYPE);
            var e;
            e = u.filesSelected[0], BrowserHandler.extension.getBackgroundPage().postMessage(e, window.location)
        }, u.constants = s, u.storage = r, u.userService = l, u.localize = a, u.hasSignedIn = u.constants.SIGNINSTATUS.UNKNOWN, u.currentViewMode = u.constants.MENU_VIEWMODE.NONE, n.userType = u.constants.USER_TYPE.NONE, u.menuItems = [{
            id: "NewDocument",
            label: "CreateNewLabel",
            iconClass: "o365-Icon--circlePlus",
            viewMode: u.constants.MENU_VIEWMODE.NEW
        }, {
            id: "OpenDocument",
            label: "OpenDocumentLabel",
            iconClass: "o365-Icon--folderOpen",
            viewMode: u.constants.MENU_VIEWMODE.OPEN
        }, {
            id: "AccountInfo",
            label: "AccountLabel",
            iconClass: "o365-Icon--person2",
            viewMode: u.constants.MENU_VIEWMODE.ACCOUNT
        }, {
            id: "Settings",
            label: "SettingsLabel",
            iconClass: "o365-Icon--gear",
            viewMode: u.constants.MENU_VIEWMODE.SETTINGS
        }], u.appLaunchers = [
            [{
                id: "Outlook",
                label: "OutlookAppName",
                iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--outlook",
                url: u.constants.LINKS.APP.OUTLOOK_DEFAULT,
                isBusinessOnly: !1
            }, {
                id: "OneDrive",
                label: "OneDriveAppName",
                iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--onedrive",
                url: u.constants.LINKS.APP.ONEDRIVE,
                isBusinessOnly: !1
            }],
            [{
                id: "WordOnline",
                label: "WordAppName",
                iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--word",
                url: u.constants.LINKS.APP.WORD,
                isBusinessOnly: !1
            }, {
                id: "ExcelOnline",
                label: "ExcelAppName",
                iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--excel",
                url: u.constants.LINKS.APP.EXCEL,
                isBusinessOnly: !1
            }],
            [{
                id: "PowerPointOnline",
                label: "PowerPointAppName",
                iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--powerpoint",
                url: u.constants.LINKS.APP.POWERPOINT,
                isBusinessOnly: !1
            }, {
                id: "OneNoteOnline",
                label: "OneNoteAppName",
                iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--onenote",
                url: u.constants.LINKS.APP.ONENOTE,
                isBusinessOnly: !1
            }],
            [{
                id: "SharePoint",
                label: "SharePointSiteAppName",
                iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--sharepoint",
                url: u.constants.LINKS.APP.SHAREPOINT_DEFAULT,
                isBusinessOnly: !0
            }, {
                id: "Teams",
                label: "TeamsAppName",
                iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--teams",
                url: u.constants.LINKS.APP.TEAMS,
                isBusinessOnly: !0
            }]
        ], u.filePickers = [{
            id: u.constants.USER_TYPE.O365,
            label: "O365FilesLabel",
            fontClass: "o365-Icon--onedrive",
            isLocal: !1
        }, {
            id: u.constants.USER_TYPE.MSA,
            label: "OneDriveFilesLabel",
            fontClass: "o365-Icon--onedrive",
            isLocal: !1
        }, {
            id: "Local",
            label: "BrowseToOpenLabel",
            fontClass: "o365-Icon--desktop",
            isLocal: !0,
            isChrome: u.isChrome,
            isEdge: !1
        }, {
            id: u.constants.USER_TYPE.O365,
            label: "UploadToOneDriveBusinessLabel",
            fontClass: "o365-Icon--desktop",
            isLocal: !0,
            isChrome: !1,
            isEdge: !u.isChrome
        }, {
            id: u.constants.USER_TYPE.MSA,
            label: "UploadToOneDriveLabel",
            fontClass: "o365-Icon--desktop",
            isLocal: !0,
            isChrome: !1,
            isEdge: !u.isChrome
        }], o.ready((function() {
            e((function() {
                i.trackEvent("PopupPageLoad")
            }));
            for (var n = document.querySelectorAll(".ms-Spinner"), t = 0; t < n.length; t++) new fabric.Spinner(n[t]);
            var o = document.querySelectorAll(".ms-CheckBox");
            for (t = 0; t < o.length; t++) new fabric.CheckBox(o[t])
        })), this.getSignInInfo = function(e) {
            i.debug("PopupController.getSignInInfo(): Method start"), u.storage.get("refreshToken").then((function(n) {
                e(Utilities.isNotUndefinedOrNull(n.refreshToken) ? u.constants.SIGNINSTATUS.HASSIGNININFO : u.constants.SIGNINSTATUS.NONE)
            }))
        }, u.getSignInInfo((function(e) {
            u.hasSignedIn = e, u.hasSignedIn === u.constants.SIGNINSTATUS.HASSIGNININFO && (i.debug("PopupController.refreshSignInStatus(): Method start"), u.userService.getUserType().then((function(e) {
                i.debug(String.format("PopupController.getSignInStatus(): hasSignedIn: {0}", e)), i.trackEvent("PopupSignedIn_" + e), n.userType = e, u.hasSignedIn = e === u.constants.USER_TYPE.NONE ? u.constants.SIGNINSTATUS.NONE : u.constants.SIGNINSTATUS.SIGNEDIN, u.hasSignedIn === u.constants.SIGNINSTATUS.SIGNEDIN && (u.userService.waitForUserInfo(e).then((function(e) {
                    Utilities.isUndefinedOrNull(e) ? i.warn("self.UserService.getUserInfo(): userInfo is undefined or null when hasSignedIn is SIGNINSTATUS.SIGNEDIN") : Utilities.isUndefinedOrNull(e.email) ? i.warn("self.UserService.getUserInfo(): userInfo.email is undefined or null when hasSignedIn is SIGNINSTATUS.SIGNEDIN") : (u.username = e.email, u.userInEditorPreview = e.userInEditorPreview)
                })), l.getUserPhoto().then((function(e) {
                    u.profilePicture = e
                }), (function(e) {
                    u.profilePicture = "", i.info(String.format("PopupController.getUserPhoto: Profile Picture Error - {0}", e))
                })))
            })))
        })), u.storage.get("webRedirect_disabled").then((function(e) {
            u.webRedirectInputChecked = !(Utilities.isNotUndefinedOrNull(e.webRedirect_disabled) && e.webRedirect_disabled)
        })), i.getEnabledSetting().then((function(e) {
            i.setEnabledSetting(e), u.telemetryInputChecked = e
        }))
    }]).directive("bindFileChange", (function() {
        return {
            require: "ngModel",
            restrict: "A",
            link: function(e, n, t, i) {
                n.bind("change", (function(e) {
                    i.$setViewValue(e.target.files)
                }))
            }
        }
    })).directive("bindDragAndDrop", ["$log", function(e) {
        return {
            require: "ngModel",
            restrict: "A",
            link: function(n, t, i, o) {
                t.bind("dragover", (function(e) {
                    e.stopPropagation(), e.preventDefault(), e.originalEvent.dataTransfer.dropEffect = "copy"
                })), t.bind("drop", (function(n) {
                    n.stopPropagation(), n.preventDefault(), e.trackEvent("OpenDocument_Local_AppDragAndDrop"), o.$setViewValue(n.originalEvent.dataTransfer.files)
                }))
            }
        }
    }]).directive("bindFileInputContainerClick", ["constants", "$log", function(e, n) {
        return {
            restrict: "A",
            link: function(t, i) {
                i.bind("mousedown keydown keypress", (function(t) {
                    t.which !== e.JQUERY.EVENT_ID.MOUSEDOWN.LEFT_BUTTON_CLICK && t.which !== e.JQUERY.EVENT_ID.KEYPRESS.ENTER || (n.trackEvent("OpenDocument_Local"), angular.element(t.currentTarget.parentElement).children("#file_picker").trigger("click"), t.preventDefault())
                }))
            }
        }
    }])
}();