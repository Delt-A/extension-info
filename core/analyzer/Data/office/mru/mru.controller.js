! function() {
    "use strict";
    angular.module("app.mru").controller("MruController", ["$scope", "$q", "$log", "constants", "storage", "mruService", function(e, t, n, i, s, o) {
        var r = this;
        r.onLoad = function() {
            n.debug("Loading MruController"), r.currentDisplayPanel = r.constants.RECENTS.DISPLAY_PANEL.LOADING, r.getRecentDocumentsFromStorage().then((function(e) {
                !Utilities.isUndefinedOrNull(e) && e.length > 0 && (r.recentDocuments = e, r.currentDisplayPanel = r.constants.RECENTS.DISPLAY_PANEL.LIST)
            }))
        }, r.openRecentDocument = function(e, t) {
            n.trackEvent("PopupOpenRecentDocument_" + e.application), Utilities.navigateToUrlWithNewTab(e.url, !(!Utilities.isUndefinedOrNull(t) && !Utilities.isUndefinedOrNull(t.ctrlKey)) || !t.ctrlKey), window.close()
        }, r.constants = i, r.storage = s, r.currentDisplayPanel = r.constants.RECENTS.DISPLAY_PANEL.LOADING, r.recentDocuments = [], r.LIST_LENGTH = r.constants.RECENTS.LIST_LENGTH_MSA, e.$watch("userType", (function(e) {
            e !== r.constants.USER_TYPE.NONE && (r.LIST_LENGTH = e === r.constants.USER_TYPE.O365 ? r.constants.RECENTS.LIST_LENGTH_O365 : r.constants.RECENTS.LIST_LENGTH_MSA, r.refreshRecentDocumentsList().then((function() {
                r.currentDisplayPanel = !Utilities.isUndefinedOrNull(r.recentDocuments) && r.recentDocuments.length > 0 ? r.constants.RECENTS.DISPLAY_PANEL.LIST : r.constants.RECENTS.DISPLAY_PANEL.NO_DOCS
            }), (function(e) {
                n.debug(String.format("MruController $scope.$watch error on refreshRecentDocumentsList: {0}", e)), r.currentDisplayPanel = !Utilities.isUndefinedOrNull(r.recentDocuments) && r.recentDocuments.length > 0 ? r.constants.RECENTS.DISPLAY_PANEL.LIST : r.constants.RECENTS.DISPLAY_PANEL.ERROR
            })))
        })), this.refreshRecentDocumentsList = function() {
            var e = t.defer();
            return n.debug("MruController.refreshRecentDocumentsList(): Method start"), o.getRecentDocumentList().then((function(t) {
                Utilities.isUndefinedOrNull(t) && (t = []);
                for (var i = [], s = 0, o = 0; o < t.length && s < r.LIST_LENGTH; o++) Utilities.isUndefinedOrNull(t[o].Application) ? n.warn(String.format("Undefined document application with document type {0}", Utilities.getFileExtension(t[o].FileName))) : r.isFileDataValid(t[o].FileName, t[o].Application, t[o].DocumentUrl, t[o].Timestamp) && (i.push({
                    appLabel: r.constants.FILE.APPLICATION_LABEL[t[o].Application.toLowerCase()],
                    application: t[o].Application,
                    lastAccessed: new Date(t[o].Timestamp).toLocaleDateString(),
                    imageSource: "../" + r.constants.FILE.APPLICATION_IMAGE_PATH[t[o].Application.toLowerCase()],
                    name: r.shortenFilename(t[o].FileName),
                    url: r.createOpenInWebUrl(t[o].DocumentUrl),
                    id: t[o].Id
                }), s++);
                r.mruListsEqual(r.recentDocuments, i) || (r.recentDocuments = i, r.setRecentDocumentsToStorage(i)), e.resolve()
            }), (function(t) {
                e.reject(t)
            })), e.promise
        }, this.mruListsEqual = function(e, t) {
            if (Utilities.isUndefinedOrNull(e) || Utilities.isUndefinedOrNull(t) || e.length !== t.length) return !1;
            for (var n = 0; n < t.length; n++)
                if (t[n].name !== e[n].name || t[n].url !== e[n].url || t[n].lastAccessed !== e[n].lastAccessed) return !1;
            return !0
        }, this.getRecentDocumentsFromStorage = function() {
            var e = t.defer();
            return s.get("localRecentDocuments").then((function(t) {
                e.resolve(t.localRecentDocuments)
            })), e.promise
        }, this.setRecentDocumentsToStorage = function(e) {
            s.set({
                localRecentDocuments: e
            })
        }, this.isFileDataValid = function(e, t, n, i) {
            return !(Utilities.isUndefinedOrNull(t) || !r.constants.FILE.APPLICATION_LABEL[t.toLowerCase()]) && (Utilities.isNotUndefinedOrNull(e) && Utilities.isNotUndefinedOrNull(n) && Utilities.isNotUndefinedOrNull(i))
        }, this.createOpenInWebUrl = function(e) {
            return r.constants.FILE.SUPPORTED_FILE_TYPES[Utilities.getFileExtension(e)] ? e + "?web=1" : e
        }, this.shortenFilename = function(e) {
            return e.replace(/\.[^/.]+$/, "")
        }
    }])
}();