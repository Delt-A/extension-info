"use strict";
var SessionId = "",
    lcid = "";

function LogFeedbackDataToAI(e) {
    var a = !appInsights.config.disableTelemetry;
    BrowserHandler.runtime.sendMessage({
        activity: "telemetry",
        command: "setDisabledTelemetry",
        enabled: "false"
    }), BrowserHandler.runtime.sendMessage({
        activity: "telemetry",
        command: "trackEvent",
        eventName: String.format("Feedback_{0}", e.feedbackOverall),
        properties: {
            Comment: e.officeBrowserFeedbackComment
        }
    }), BrowserHandler.runtime.sendMessage({
        activity: "telemetry",
        command: "setDisabledTelemetry",
        enabled: a
    })
}
Diag.ULSCat.msoulscat_Toronto = -1, ulsCategoryStringSetInCshtml = "msoulscat_Toronto",
    function(e) {
        ! function(e) {
            ! function(e) {
                e.ImageRoot = "../assets/feedback/"
            }(e.Urls || (e.Urls = {}));
            e.Urls;
            ! function(e) {
                e.CommentPlaceholder = BrowserHandler.i18n.getMessage("FeedbackCommentPlaceholder"), e.DontLike = BrowserHandler.i18n.getMessage("FeedbackDontLike"), e.FeedbackOverall = BrowserHandler.i18n.getMessage("FeedbackOverall"), e.FeedbackTitle = BrowserHandler.i18n.getMessage("FeedbackTitle"), e.Like = BrowserHandler.i18n.getMessage("FeedbackLike"), e.PrivacyStatement = BrowserHandler.i18n.getMessage("FeedbackPrivacyStatement"), e.Submit = BrowserHandler.i18n.getMessage("FeedbackSubmit"), e.Suggestion = BrowserHandler.i18n.getMessage("FeedbackSuggestion"), e.WhatLike = BrowserHandler.i18n.getMessage("FeedbackWhatLike"), e.WhatDontLike = BrowserHandler.i18n.getMessage("FeedbackWhatDontLike"), e.WhatSuggest = BrowserHandler.i18n.getMessage("FeedbackWhatSuggest")
            }(e.Strings || (e.Strings = {}));
            e.Urls
        }(e.Constants || (e.Constants = {}));
        e.Constants
    }(Feedback || (Feedback = {}));