! function() {
    "use strict";
    angular.module("app.common", []).constant("constants", {
        IDTYPE: {
            MSACID: "MSACID",
            ORGIDPUID: "OrgIdPUID"
        },
        ACTIVITY: {
            AUTHENTICATION: {
                NAME: "authentication"
            },
            AUTHORIZATION: {
                NAME: "authorization"
            },
            NOTIFICATION: {
                NAME: "notification"
            },
            TELEMETRY: {
                NAME: "telemetry"
            },
            USERINFO_AVAILABLE: {
                NAME: "userInfoAvailable"
            },
            SSO: {
                NAME: "sso"
            }
        },
        APPINFO_NAME: "OfficeOnlineExtension",
        FILE: {
            APPLICATION_IMAGE_PATH: {
                excel: "assets/excel_doc.png",
                onenote: "assets/onenote_doc.png",
                powerpoint: "assets/powerpoint_doc.png",
                unknown: "assets/generic_doc.png",
                word: "assets/word_doc.png"
            },
            APPLICATION_LABEL: {
                excel: "ExcelOnlineAppName",
                onenote: "OneNoteOnlineAppName",
                powerpoint: "PowerPointOnlineAppName",
                unknown: "OfficeOnlineAppName",
                word: "WordOnlineAppName"
            },
            ERROR: {
                FILE_SIZE_MAX_EXCEEDED: "fileSizeMaxExceeded",
                LOAD_FROM_PATH: "loadFromPath",
                UNSUPPORTED_FILE_TYPE: "unsupportedFileType"
            },
            MAX_SIZE_BYTE_LIMIT: 4194304,
            OFFICE_APP_FILE_ASSOCIATIONS: {
                EXCEL: "excel",
                ONENOTE: "onenote",
                POWERPOINT: "powerpoint",
                WORD: "word"
            },
            OFFICE_MIME_TYPES: {
                "application/msword": "word",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "word",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.template": "word",
                "application/vnd.oasis.opendocument.text": "word",
                "application/vnd.ms-powerpoint": "powerpoint",
                "application/vnd.openxmlformats-officedocument.presentationml.presentation": "powerpoint",
                "application/vnd.openxmlformats-officedocument.presentationml.slideshow": "powerpoint",
                "application/vnd.oasis.opendocument.presentation": "powerpoint",
                "application/vnd.ms-excel": "excel",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "excel",
                "application/vnd.ms-excel.sheet.binary.macroEnabled.12": "excel",
                "application/vnd.ms-excel.sheet.macroEnabled.12": "excel",
                "application/vnd.oasis.opendocument.spreadsheet": "excel"
            },
            ORIGIN: {
                HTML5: "html5",
                LOCAL_PATH: "local_path"
            },
            SUPPORTED_APPLICATIONS: ["Word", "Excel", "PowerPoint", "OneNote"],
            SUPPORTED_FILE_TYPES: {
                doc: "word",
                dot: "word",
                docx: "word",
                dotx: "word",
                odt: "word",
                ppt: "powerpoint",
                pot: "powerpoint",
                pps: "powerpoint",
                pptx: "powerpoint",
                ppsx: "powerpoint",
                odp: "powerpoint",
                xlsx: "excel",
                xlsm: "excel",
                xlsb: "excel",
                ods: "excel",
                notebook: "onenote"
            }
        },
        JQUERY: {
            EVENT_ID: {
                KEYPRESS: {
                    ENTER: 13
                },
                MOUSEDOWN: {
                    LEFT_BUTTON_CLICK: 1
                }
            }
        },
        LINKS: {
            FEEDBACK_URL: "feedback/feedback.html",
            OFFICE_URL: "https://portal.office.com/home",
            PROGRESSPAGE_URL: "https://onedrive.live.com",
            SETTINGS_URL: "chrome://extensions",
            SIGNUP: "https://onedrive.live.com/about",
            UNINSTALL: "https://contentstorage.osi.office.net/officeonlineextensionuninstall/uninstall.html",
            OFFICE_HOME_URL: "https://go.microsoft.com/fwlink/?linkid=859986",
            OFFICE_HOME_DEV_URL: "https://go.microsoft.com/fwlink/?linkid=860665",
            SUPPORT_URL: "https://aka.ms/officeextsignin",
            SUPPORT_URL_EDITOR: "https://aka.ms/OfficeEditorExtension",
            MYACCOUNT_MSA_URL: "https://go.microsoft.com/fwlink/?LinkId=823747",
            MYACCOUNT_O365_URL: "https://go.microsoft.com/fwlink/?LinkId=824642",
            APP: {
                WORD: "https://office.live.com/start/word.aspx?auth={0}&WT.mc_id=Chrome_OfficeApp",
                EXCEL: "https://office.live.com/start/excel.aspx?auth={0}&WT.mc_id=Chrome_OfficeApp",
                POWERPOINT: "https://office.live.com/start/powerpoint.aspx?auth={0}&WT.mc_id=Chrome_OfficeApp",
                ONENOTE: "https://www.onenote.com/notebooks?auth={0}&WT.mc_id=Chrome_OfficeApp",
                SWAY: "https://www.sway.com/?auth_pvr={0}&auth_upn={1}&WT.mc_id=Chrome_OfficeApp",
                SWAY_DEFAULT: "https://www.sway.com/?WT.mc_id=Chrome_OfficeApp",
                ONEDRIVE: "https://onedrive.live.com",
                TEAMS: "https://teams.microsoft.com",
                SHAREPOINT_DEFAULT: "https://products.office.com/sharepoint",
                OUTLOOK_DEFAULT: "https://outlook.com",
                OUTLOOK_O365: "https://outlook.office365.com"
            },
            EDITOR_GO_PREMIUM_URL: "https://products.office.com/compare-all-microsoft-office-products"
        },
        MENU_VIEWMODE: {
            NONE: 0,
            NEW: 1,
            OPEN: 2,
            ACCOUNT: 3,
            SETTINGS: 4
        },
        OAUTH: {
            ACCESS_TOKEN: "access_token",
            AUTH_CODE: "authorization_code",
            CODE: "code",
            EXPIRES_ON: "expires_on",
            REFRESH_TOKEN: "refresh_token",
            SERVICE_ENDPOINT: "service_endpoint",
            SERVICE_ID: "service_id"
        },
        O365CONFIG: {
            CLIENT_ID: "d08f258a-c5dd-4a8f-8afc-9321d67c767a",
            CLIENT_SECRET: "4C3JSV:94f_WBYDF+RkH@TX9QhIrzijR",
            GRAPH_RESOURCE: "https://graph.microsoft.com",
            ENDPOINTS: {
                "officeapps.live.com": "https://officeapps.live.com",
                "graph.microsoft.com": "https://graph.microsoft.com"
            },
            INSTANCE: "https://login.windows.net/common/oauth2/",
            LOGOUT_URI: "https://login.microsoftonline.com/logout.srf",
            MRU_URL: "https://ocws.officeapps.live.com/ocs/docs/recent/",
            PHOTO_URL: "https://graph.microsoft.com/v1.0/me/photo/$value",
            ONEDRIVE_URL: "https://graph.microsoft.com/v1.0/me/drive/root",
            SHAREPOINT_URL: "https://graph.microsoft.com/v1.0/sites/root",
            REDIRECT_URI: "https://login.microsoftonline.com/login.srf",
            UPLOAD_URL: "https://graph.microsoft.com/v1.0/me/drive/root:/",
            FEDERATED_URL: "https://login.microsoftonline.com/getuserrealm.srf"
        },
        MSACONFIG: {
            CLIENT_ID: "000000004016DA34",
            CLIENT_SECRET: "qXom9iuDN8qMUKe5oU6DHrRxS8bikLrI",
            INSTANCE: "https://login.live.com/oauth20_authorize.srf",
            LOGOUT_URI: "https://login.live.com/oauth20_logout.srf",
            ONEDRIVE_ITEMS_URL: "https://api.onedrive.com/v1.0/drive/items/",
            PHOTO_URL: "https://apis.live.net/v5.0/me/picture",
            REDIRECT_URI: "https://login.live.com/oauth20_desktop.srf",
            SCOPE: "wl.basic+wl.emails+wl.signin+wl.offline_access+onedrive.readwrite+wl.skydrive",
            URL: "https://login.live.com/oauth20_token.srf",
            USERINFO_URL: "https://apis.live.net/v5.0/me"
        },
        NOTIFICATION: {
            FILEACCESS: {
                id: "fileAccess",
                priority: 0,
                type: "basic",
                message: "NotificationFileAccess"
            },
            FILE_MAX_SIZE_BYTE_LIMIT_REACHED: {
                id: "fileMaxSizeByteLimitReached",
                priority: 2,
                type: "basic",
                message: "NotificationFileMaxSizeByteLimitReached"
            },
            FILE_UPLOAD_FAILURE_GENERIC: {
                id: "fileUploadFailureGeneric",
                priority: 2,
                type: "basic",
                message: "NotificationFileUploadFailureGeneric"
            },
            FILE_UPLOAD_FAILURE_SERVER: {
                id: "fileUploadFailureServer",
                priority: 2,
                type: "basic",
                message: "NotificationFileUploadFailureServer"
            },
            FILE_UPLOAD_FAILURE_UNSUPPORTED_MEDIA: {
                id: "fileUploadFailureUnsupportedMedia",
                priority: 2,
                type: "basic",
                message: "NotificationFileUploadFailureUnsupportedMedia"
            },
            FILE_UPLOAD_IN_PROGRESS: {
                id: "fileUploadInProgress",
                priority: 0,
                type: "basic",
                message: "NotificationFileUploadInProgress"
            },
            SETDEFAULT: {
                id: "setDefault",
                priority: 0,
                type: "basic",
                message: "NotificationSetDefault"
            },
            AUTOSAVE: {
                id: "autoSave",
                priority: 0,
                type: "basic",
                buttons: [{
                    title: "NotificationAutoSaveButton"
                }]
            },
            AUTOSAVETOONEDRIVE: "NotificationAutoSaveToOneDrive",
            AUTOSAVETOSHAREPOINT: "NotificationAutoSaveToSharePoint",
            NOTSIGNEDIN: {
                id: "notSignedIn",
                priority: 2,
                type: "basic",
                message: "NotificationNotSignedIn"
            },
            UNSUPPORTEDFILETYPE: {
                id: "unsupportedFileType",
                priority: 2,
                type: "basic",
                message: "NotificationUnsupportedFileType"
            },
            INVALIDSUBSCRIPTION: {
                id: "invalidSubscription",
                priority: 2,
                type: "basic",
                message: "NotificationInvalidSubscription"
            },
            WEBDOCREDIRECT: {
                id: "webDocRedirect",
                priority: 0,
                type: "basic",
                message: "NotificationWebDocRedirect",
                buttons: [{
                    title: "NotificationWebDocRedirectButton"
                }]
            }
        },
        ONEDRIVE: {
            DISPLAY_URL: "https://onedrive.live.com/view.aspx?cid=",
            INSTANCE: "https://api.onedrive.com/v1.0",
            QUERY_OPTION: "?@name.conflictBehavior=rename"
        },
        RECENTS: {
            LIST_LENGTH_MSA: 3,
            LIST_LENGTH_O365: 3,
            FILTER: "?apps=powerpoint,word,excel,onenote&sort=date",
            ONEDRIVE_ENDPOINT: "https://api.onedrive.com/v2.1/drive/recent",
            DISPLAY_PANEL: {
                ERROR: 0,
                LIST: 1,
                LOADING: 2,
                NO_DOCS: 3,
                NONE: 4
            },
            ERROR: {
                CANCELLED: 0,
                GENERIC: 1,
                NO_DOCS_FOUND: 2,
                UNSUPPORTED_USER_TYPE: 3
            }
        },
        SIGNINSTATUS: {
            UNKNOWN: -1,
            NONE: 0,
            HASREFRESHTOKEN: 1,
            SIGNEDIN: 2
        },
        TELEMETRY: {
            COMMAND: {
                SET_DISABLED: "setDisabledTelemetry",
                TRACK_TRACE: "trackTrace",
                TRACK_EVENT: "trackEvent"
            },
            ENABLED_SETTING_STORAGE_KEY: "telemetry_enabled",
            EVENT_PREFIX: "OO_CHROME_",
            PII_TYPE: {
                IDENTITY: 10
            }
        },
        USER_TYPE: {
            MSA: "msaUserService",
            O365: "o365UserService",
            NONE: "noneUserService"
        },
        TIMEOUT: {
            DEFAULT_REQUEST: 1e4,
            USER_INFO_LOOKUP: 5e3,
            USER_INFO_LOOKUP_TEST: 50
        },
        COPY_PASTE: {
            TEST: "test",
            COPY: "copy",
            PASTE: "paste"
        },
        ERROR_RETRIES: {
            HTTP_REQUEST: 3
        },
        BROWSER_ICON: {
            DEFAULT: "../assets/icon_20.png",
            INACTIVE: "../assets/icon_inactive_20.png"
        },
        SSO: {
            MESSAGE_CHANNEL: "com.microsoft.browsercore",
            RESPONSE_STATUS_SUCCESS: "Success",
            RESPONSE_STATUS_FAIL: "Fail",
            RESPONSE_CODE_NO_SUPPORT: "NoSupport"
        }
    })
}();