! function() {
    "use strict";
    angular.module("app.file", []).factory("fileService", ["$http", "$q", "$log", "constants", "localize", "notification", "storage", "fileLoader", "userService", "sharePointFileService", "oneDriveFileService", function(i, e, n, t, I, l, r, o, E, O, N) {
        var s = t.USER_TYPE.NONE;

        function a(i, e) {
            var I;
            E.getUserType().then((function(r) {
                s = r, I = function(i) {
                    var e = null;
                    switch (i) {
                        case t.USER_TYPE.O365:
                            e = O;
                            break;
                        case t.USER_TYPE.MSA:
                            e = N;
                            break;
                        default:
                            l.show(t.NOTIFICATION.NOTSIGNEDIN), n.trackEvent("FileUserTypeError_UserNotSignedIn")
                    }
                    return e
                }(r), Utilities.isUndefinedOrNull(I) ? e(null) : (n.trackEvent("FileServiceProviderUploadDocType_" + Utilities.getFileExtension(i.name)), l.show(t.NOTIFICATION.FILE_UPLOAD_IN_PROGRESS), I.doUpload(i, (function(i, I, r) {
                    Utilities.isUndefinedOrNull(i) && function(i, e) {
                        Utilities.isUndefinedOrNull(e) || Utilities.isUndefinedOrNull(i) || (415 === e ? l.show(t.NOTIFICATION.FILE_UPLOAD_FAILURE_UNSUPPORTED_MEDIA) : 502 === e || 503 === e || 509 === e ? l.show(t.NOTIFICATION.FILE_UPLOAD_FAILURE_SERVER) : (n.error(String.format("fileService.doUpload - {0} - {1}", e, JSON.stringify(i))), l.show(t.NOTIFICATION.FILE_UPLOAD_FAILURE_GENERIC)))
                    }(I, r), e(i)
                })))
            }))
        }
        return {
            upload: function(i, e, I) {
                if (Utilities.isUndefinedOrNull(i) || e !== t.FILE.ORIGIN.HTML5 && e !== t.FILE.ORIGIN.LOCAL_PATH) return n.error(String.format("fileService.upload(): Invalid argument: fileInfo: {0}, fileOrigin: {1}", JSON.stringify(i), e)), void I(null);
                o.loadFile(i, e).then((function(i) {
                    a(i, (function(i) {
                        Utilities.isUndefinedOrNull(i) ? I(null) : r.get("displayAutoSaveNotification").then((function(e) {
                            if (Utilities.isUndefinedOrNull(e.displayAutoSaveNotification) || !0 === e.displayAutoSaveNotification) {
                                var n = t.NOTIFICATION.AUTOSAVE;
                                n.message = s === t.USER_TYPE.MSA ? t.NOTIFICATION.AUTOSAVETOONEDRIVE : t.NOTIFICATION.AUTOSAVETOSHAREPOINT, l.show(n)
                            }
                            I(i)
                        }))
                    }))
                }), (function(i) {
                    ! function(i) {
                        if (!Utilities.isUndefinedOrNull(i)) switch (i) {
                            case t.FILE.ERROR.FILE_SIZE_MAX_EXCEEDED:
                                l.show(t.NOTIFICATION.FILE_MAX_SIZE_BYTE_LIMIT_REACHED);
                                break;
                            case t.FILE.ERROR.UNSUPPORTED_FILE_TYPE:
                                l.show(t.NOTIFICATION.UNSUPPORTEDFILETYPE);
                                break;
                            default:
                                n.error(String.format("fileService.loadFile - {0}", i)), l.show(t.NOTIFICATION.FILE_UPLOAD_FAILURE_GENERIC)
                        }
                    }(i), I(null)
                }))
            }
        }
    }])
}();