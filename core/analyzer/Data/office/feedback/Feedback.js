var OfficeBrowserFeedback;
! function(e) {
    ! function(e) {
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Info = 2] = "Info", e[e.Verbose = 3] = "Verbose", e[e.Spam = 4] = "Spam"
        }(e.LogLevel || (e.LogLevel = {}));
        e.LogLevel;
        e.NetworkingMgr = null
    }(e.Networking || (e.Networking = {}));
    e.Networking
}(OfficeBrowserFeedback || (OfficeBrowserFeedback = {})),
function(e) {
    ! function(e) {
        var t = function() {
            function e() {
                this.UlsLevelMap = {}
            }
            return e.prototype.Init = function(e, t) {
                this.telemetryCatID = e, this.feedbackDataCatID = t, this.UlsLevelMap[2] = Diag.ULSTraceLevel.info, this.UlsLevelMap[1] = Diag.ULSTraceLevel.warning, this.UlsLevelMap[0] = Diag.ULSTraceLevel.error, this.UlsLevelMap[3] = Diag.ULSTraceLevel.verbose, this.UlsLevelMap[4] = Diag.ULSTraceLevel.spam
            }, e.prototype.Dismiss = function() {}, e.prototype.SendTrace = function(e, t) {
                Diag.ULS.sendTraceTag(4477014, this.telemetryCatID, this.UlsLevelMap[e], "{0}", t)
            }, e.prototype.LogFeedbackData = function(e) {
                Diag.ULS.sendTraceTag(4477015, this.feedbackDataCatID, Diag.ULSTraceLevel.info, "{0}", e), LogFeedbackDataToAI(e)
            }, e
        }();
        e.DefaultNetworkingMgr = t, e.NetworkingMgr = new e.DefaultNetworkingMgr
    }(e.Networking || (e.Networking = {}));
    e.Networking
}(OfficeBrowserFeedback || (OfficeBrowserFeedback = {})),
function(e) {
    ! function(e) {
        e.IsNarrow = function() {
            return !window.innerWidth || window.innerWidth < 800
        }
    }(e.WindowProperties || (e.WindowProperties = {}));
    var t = e.WindowProperties;
    ! function(e) {
        e.UseNarrowScreenLayout = !1,
            function(e) {
                e.AriaLive = "aria-live", e.AriaSelected = "aria-Selected", e.Form = "form", e.HRef = "href", e.MaxLength = "maxlength", e.Name = "name", e.Placeholder = "placeholder", e.Role = "role", e.Source = "src", e.TabIndex = "tabindex", e.Target = "target", e.Type = "type", e.Value = "value"
            }(e.AttributeName || (e.AttributeName = {}));
        e.AttributeName;
        ! function(e) {
            e.BlankWindow = "_blank", e.Button = "button", e.Checkbox = "checkbox", e.Checked = "checked", e.False = "false", e.FeedbackOverall = "feedbackOverall", e.One = "1", e.Polite = "polite", e.Submit = "submit", e.Text = "text", e.TextAreaMaxLength = "1000", e.True = "true", e.Unchecked = "unchecked"
        }(e.AttributeValue || (e.AttributeValue = {}));
        e.AttributeValue;
        ! function(e) {
            e.CLCID = "CLCID"
        }(e.UrlParameters || (e.UrlParameters = {}));
        e.UrlParameters;
        ! function(e) {
            e.Screenshot = !1
        }(e.Brs || (e.Brs = {}));
        e.Brs;
        ! function(e) {
            e.BackgroundBlue = "officeBrowserFeedbackBackgroundBLue", e.BackgroundGrey = "officeBrowserFeedbackBackgroundGrey", e.FeedbackFormContainer = "officeBrowserFeedbackFormContainer", e.FeedbackFormComment = "officeBrowserFeedbackComment", e.FeedbackFormSubmitButtonContainer = "officeBrowserFeedbackSubmitButtonContainer", e.FeedbackFormSubmitButton = "officeBrowserFeedbackSubmitButton", e.FeedbackQuestionMiddleText = "officeBrowserFeedbackQuestionMiddleText", e.FeedbackOverallAnchor = "officeBrowserFeedbackOverallAnchor", e.FeedbackOverallImage = "officeBrowserFeedbackOverallImage", e.FeedbackOverallText = "officeBrowserFeedbackOverallText", e.FontSubtitle = "officeBrowserFeedbackFontSubtitle", e.FontText = "officeBrowserFeedbackFontText", e.FontTitle = "officeBrowserFeedbackFontTitle", e.FormContainer = "officeBrowserFeedbackFormContainer", e.FullWidth20pxHeight = "officeBrowserFeedbackFullWidth20pxHeight", e.OverlayMinWidth = "officeBrowserFeedbackOverlayMinWidth", e.Hidden = "officeBrowserFeedbackHidden", e.MarginLeft36px = "officeBrowserFeedbackMarginLeft36px", e.Narrow = "officeBrowserFeedbackNarrowLayout", e.LineHeight = "officeBrowserFeedbackLineHeight", e.PadLeft36px = "officeBrowserFeedbackPadLeft36px", e.ShowRightBorder = "officeBrowserFeedbackShowRightBorder", e.SlideLeft = "slideLeft", e.TextAlignLeft = "officeBrowserFeedbackTextAlignLeft", e.Visible = "officeBrowserFeedbackVisible", e.LinkDiv = "officeBrowserFeedbackLinkDiv", e.Link = "officeBrowserFeedbackLink", e.TextAlginLeft = "officeBrowserFeedbackTextAlginLeft"
        }(e.Classes || (e.Classes = {}));
        e.Classes;
        ! function(e) {
            e.ColumnSeparatorDiv = "officeBrowserFeedbackColumnSeparatorDiv", e.FeedbackFormsWrapper = "officeBrowserFeedbackFormsWrapper", e.FeedbackOverallDontLikeAnchor = "officeBrowserFeedbackOverallDontLikeAnchor", e.FeedbackOverallDontLikeDiv = "officeBrowserFeedbackOverallDontLikeDiv", e.FeedbackOverallDontLikeImage = "officeBrowserFeedbackOverallDontLikeImage", e.FeedbackOverallDontLikeText = "officeBrowserFeedbackOverallDontLikeText", e.FeedbackOverallLikeAnchor = "officeBrowserFeedbackOverallLikeAnchor", e.FeedbackOverallLikeDiv = "officeBrowserFeedbackOverallLikeDiv", e.FeedbackOverallLikeImage = "officeBrowserFeedbackOverallLikeImage", e.FeedbackOverallLikeText = "officeBrowserFeedbackOverallLikeText", e.FeedbackOverallSuggestionAnchor = "officeBrowserFeedbackOverallSuggestAnchor", e.FeedbackOverallSuggestionDiv = "officeBrowserFeedbackOverallSuggestDiv", e.FeedbackOverallSuggestionImage = "officeBrowserFeedbackOverallSuggestImage", e.FeedbackOverallSuggestionText = "officeBrowserFeedbackOverallSuggestText", e.FeedbackQuestionLeftText = "officeBrowserFeedbackQuestionLeftText", e.FeedbackTitle = "officeBrowserFeedbackTitle", e.LeftFormContainer = "officeBrowserFeedbackLeftFormContainer", e.MainContainer = "officeBrowserFeedbackMainContainer", e.MainContentHolder = "officeBrowserFeedbackMainContentHolder", e.MiddleFormContainer = "officeBrowserFeedbackMiddleFormContainer", e.OverlayBackground = "officeBrowserFeedbackOverlayBackground", e.PlaceHolderDiv1 = "officeBrowserFeedbackPlaceHolderDiv1", e.PlaceHolderDiv2 = "officeBrowserFeedbackPlaceHolderDiv2", e.PrivacyStatementLink = "officeBrowserFeedbackPrivacyStatementLink", e.PrivacyStatementLinkDiv = "officeBrowserFeedbackPrivacyStatementLinkDiv", e.RightFormContainer = "officeBrowserFeedbackRightFormContainer", e.SimpleFeedbackFormContainer = "officeBrowserFeedbackContainer", e.SimpleFeedbackFormQuestionMiddleText = "officeBrowserFeedbackQuestionMiddleText", e.SimpleFeedbackFormComment = "officeBrowserFeedbackComment", e.SimpleFeedbackFormScreenshotContainer = "officeBrowserFeedbackScreenshotContainer", e.SimpleFeedbackFormScreenshotCheckboxText = "officeBrowserFeedbackScreenshotCheckboxText", e.SimpleFeedbackFormScreenshotCheckbox = "officeBrowserFeedbackScreenshotCheckbox", e.SimpleFeedbackFormScreenshotText = "officeBrowserFeedbackScreenshotText", e.SimpleFeedbackFormSubmitButtonContainer = "officeBrowserFeedbackSubmitButtonContainer", e.SimpleFeedbackFormSubmitButton = "officeBrowserFeedbackSubmitButton", e.ContactInfoFormContainer = "officeBrowserFeedbackContactInfoContainer", e.ContactInfoFormQuestionMiddleText = "officeBrowserFeedbackContactInfoQuestionMiddleText", e.ContactInfoFormComment = "officeBrowserFeedbackContactInfoComment", e.ContactInfoFormEmailText = "officeBrowserFeedbackContactInfoEmailText", e.ContactInfoFormEmailInput = "officeBrowserFeedbackContactInfoEmailInput", e.ContactInfoFormSubmitButtonContainer = "officeBrowserFeedbackContactInfoSubmitButtonContainer", e.ContactInfoFormSubmitButton = "officeBrowserFeedbackContactInfoSubmitButton", e.UservoiceLinkFormContainer = "officeBrowserFeedbackUservoiceLinkFormContainer", e.UservoiceLinkFormQuestionMiddleText = "officeBrowserFeedbackUservoiceLinkFormQuestionMiddleText", e.UservoiceLinkFormMiddleText = "officeBrowserFeedbackUservoiceLinkFormMiddleText", e.UservoiceLinkFormAnchorContainer = "officeBrowserFeedbackUservoiceLinkFormAnchorContainer", e.UservoiceLinkFormAnchor = "officeBrowserFeedbackUservoiceLinkFormAnchor", e.UservoiceLinkFormCloseButtonContainer = "officeBrowserFeedbackUservoiceLinkFormCloseButtonContainer", e.UservoiceLinkFormCloseButton = "officeBrowserFeedbackUservoiceLinkFormCloseButton", e.FeedbackQuestionMiddleText = "officeBrowserFeedbackQuestionMiddleText", e.FeedbackComment = "officeBrowserFeedbackComment", e.SubmitButton = "officeBrowserFeedbackSubmitButton", e.SubmitButtonContainer = "officeBrowserFeedbackSubmitButtonContainer"
        }(e.IDs || (e.IDs = {}));
        e.IDs;
        ! function(e) {
            e.Esc = 27
        }(e.Keys || (e.Keys = {}));
        e.Keys;
        ! function(e) {
            e.Pause = 100
        }(e.Numbers || (e.Numbers = {}));
        e.Numbers;
        ! function(e) {
            e.Dislike = "dislike", e.Like = "like", e.Idea = "idea"
        }(e.FeedbackType || (e.FeedbackType = {}));
        e.FeedbackType;
        ! function(e) {
            e.Anchor = "A", e.Div = "DIV", e.Form = "FORM", e.Img = "IMG", e.Input = "INPUT", e.TextArea = "TEXTAREA"
        }(e.Tags || (e.Tags = {}));
        e.Tags;
        ! function(e) {
            e.PrivacyStatementLink = "https://go.microsoft.com/fwlink/?LinkID=390004", e.CreateURL = function(e, t, n) {
                    var a = t + e;
                    return n && (a += n), a
                },
                function(e) {
                    var t = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
                    e.Extension, e.Extension = t ? ".svg" : ".png", e.FrownIcon, e.LightBulbIcon, e.SmileIcon
                }(e.Images || (e.Images = {}));
            e.Images
        }(e.Urls || (e.Urls = {}));
        e.Urls
    }(e.Constants || (e.Constants = {}));
    var n = e.Constants;
    ! function(e) {
        function t(e, t) {
            var n = document.getElementById(e);
            n && (n.className = n.className + " " + t)
        }

        function a(e, t) {
            var n = document.getElementById(e);
            n && (n.className = n.className.split(new RegExp("\\b" + t + "\\b", "i")).join(" "), n.className = n.className.split(/\s+/).join(" "))
        }

        function o(e, n, o) {
            a(e, n), t(e, o)
        }
        e.SetElementVisibility = function(e, t) {
            o(e, t ? n.Classes.Hidden : n.Classes.Visible, t ? n.Classes.Visible : n.Classes.Hidden)
        }, e.DeleteElementById = function(e) {
            var t = document.getElementById(e);
            null != t && null != t.parentNode && t.parentNode.removeChild(t)
        }, e.AddClassById = t, e.DeleteClassById = a, e.DeleteAndAddClassesById = o, e.CacheImages = function(e) {
            for (var t = e.length, n = 0; n < t; n++) {
                var a = new Image;
                a.src = e[n], void 0 === window.officeBrowserFeedbackCachedImages && (window.officeBrowserFeedbackCachedImages = []), window.officeBrowserFeedbackCachedImages.push(a)
            }
        }, e.SetAttributeOnHtmlElement = function(e, t, n) {
            var a = document.getElementById(e);
            a && a.setAttribute(t, n)
        }, e.GetInternetExplorerVersion = function() {
            var e = -1,
                t = window.navigator.userAgent;
            return t.indexOf("Trident") > -1 && null != new RegExp("Trident/([0-9]{1,}[.0-9]{0,})").exec(t) && (e = parseFloat(RegExp.$1), e += 4), e
        }, e.GetPrivacyUrl = function(e) {
            var t = n.Urls.PrivacyStatementLink;
            return e && e > 0 && (t = t + "&" + n.UrlParameters.CLCID + "=0x" + e.toString(16)), t
        }, e.GetUservoiceUrl = function(e) {
            var t = s.GetData().UservoiceUrl;
            return e && s.RemoveData("UservoiceUrl"), t
        }
    }(e.Utils || (e.Utils = {}));
    var a = e.Utils;
    ! function(o) {
        o.Strings,
            function(t) {
                ! function(e) {
                    e[e.SimpleFeedbackForm = 0] = "SimpleFeedbackForm", e[e.ContactInfoFeedbackForm = 1] = "ContactInfoFeedbackForm", e[e.UservoiceLinkFeedbackForm = 2] = "UservoiceLinkFeedbackForm"
                }(t.FeedbackFormTemplate || (t.FeedbackFormTemplate = {}));
                t.FeedbackFormTemplate;

                function i(e) {
                    switch (e) {
                        case 0:
                            return n.IDs.SimpleFeedbackFormContainer;
                        case 1:
                            return n.IDs.ContactInfoFormContainer;
                        case 2:
                            return n.IDs.UservoiceLinkFormContainer;
                        default:
                            return n.IDs.SimpleFeedbackFormContainer
                    }
                }

                function r(e) {
                    switch (e) {
                        case 0:
                            return n.IDs.SimpleFeedbackFormQuestionMiddleText;
                        case 1:
                            return n.IDs.ContactInfoFormQuestionMiddleText;
                        case 2:
                            return n.IDs.UservoiceLinkFormQuestionMiddleText;
                        default:
                            return n.IDs.SimpleFeedbackFormQuestionMiddleText
                    }
                }

                function s() {
                    var e = [];
                    e[t.ActiveFormTemplates[n.FeedbackType.Like]] = !0, e[t.ActiveFormTemplates[n.FeedbackType.Dislike]] = !0, e[t.ActiveFormTemplates[n.FeedbackType.Idea]] = !0;
                    var a = {
                        id: n.IDs.FeedbackFormsWrapper,
                        children: []
                    };
                    return e[0] && a.children.push(l()), e[1] && a.children.push(c()), e[2] && a.children.push(d()), a
                }

                function l() {
                    return {
                        id: n.IDs.SimpleFeedbackFormContainer,
                        classes: [n.Classes.Hidden, n.Classes.FeedbackFormContainer],
                        children: [{
                            id: n.IDs.SimpleFeedbackFormQuestionMiddleText,
                            classes: [n.Classes.FeedbackQuestionMiddleText, n.Classes.FontSubtitle, n.Classes.MarginLeft36px, n.Classes.LineHeight, n.Classes.TextAlignLeft],
                            attributes: [{
                                name: n.AttributeName.AriaLive,
                                value: n.AttributeValue.Polite
                            }]
                        }, {
                            id: n.IDs.SimpleFeedbackFormComment,
                            classes: [n.Classes.FeedbackFormComment, n.Classes.FontText, n.Classes.MarginLeft36px],
                            tag: n.Tags.TextArea,
                            attributes: [{
                                name: n.AttributeName.Name,
                                value: n.IDs.SimpleFeedbackFormComment
                            }, {
                                name: n.AttributeName.Placeholder,
                                value: o.Strings.l_CommentPlaceholder
                            }, {
                                name: n.AttributeName.MaxLength,
                                value: n.AttributeValue.TextAreaMaxLength
                            }, {
                                name: n.AttributeName.TabIndex,
                                value: n.AttributeValue.One
                            }]
                        }, {
                            id: n.IDs.SimpleFeedbackFormScreenshotContainer,
                            classes: [n.Classes.MarginLeft36px],
                            children: [{
                                id: n.IDs.SimpleFeedbackFormScreenshotCheckboxText,
                                brs: n.Brs.Screenshot,
                                children: [{
                                    id: n.IDs.SimpleFeedbackFormScreenshotCheckbox,
                                    tag: n.Tags.Input,
                                    attributes: [{
                                        name: n.AttributeName.Name,
                                        value: n.IDs.SimpleFeedbackFormScreenshotCheckbox
                                    }, {
                                        name: n.AttributeName.Type,
                                        value: n.AttributeValue.Checkbox
                                    }, {
                                        name: n.AttributeName.Value,
                                        value: n.AttributeValue.Unchecked
                                    }, {
                                        name: n.AttributeName.TabIndex,
                                        value: n.AttributeValue.One
                                    }]
                                }, {
                                    id: n.IDs.SimpleFeedbackFormScreenshotText,
                                    classes: [n.Classes.FontText, n.Classes.TextAlignLeft, n.Classes.LineHeight],
                                    innerText: o.Strings.l_IncludeScreenshot
                                }]
                            }]
                        }, {
                            id: n.IDs.SimpleFeedbackFormSubmitButtonContainer,
                            classes: [n.Classes.FeedbackFormSubmitButtonContainer, n.Classes.MarginLeft36px],
                            children: [{
                                id: n.IDs.SimpleFeedbackFormSubmitButton,
                                classes: [n.Classes.FeedbackFormSubmitButton, n.Classes.FontText, n.Classes.LineHeight],
                                tag: n.Tags.Input,
                                attributes: [{
                                    name: n.AttributeName.Type,
                                    value: n.AttributeValue.Submit
                                }, {
                                    name: n.AttributeName.Value,
                                    value: o.Strings.l_Submit
                                }, {
                                    name: n.AttributeName.TabIndex,
                                    value: n.AttributeValue.One
                                }]
                            }]
                        }]
                    }
                }

                function c() {
                    return {
                        id: n.IDs.ContactInfoFormContainer,
                        classes: [n.Classes.Hidden, n.Classes.FeedbackFormContainer],
                        children: [{
                            id: n.IDs.ContactInfoFormQuestionMiddleText,
                            classes: [n.Classes.FeedbackQuestionMiddleText, n.Classes.FontSubtitle, n.Classes.MarginLeft36px, n.Classes.LineHeight, n.Classes.TextAlignLeft],
                            attributes: [{
                                name: n.AttributeName.AriaLive,
                                value: n.AttributeValue.Polite
                            }]
                        }, {
                            id: n.IDs.ContactInfoFormComment,
                            classes: [n.Classes.FeedbackFormComment, n.Classes.FontText, n.Classes.MarginLeft36px],
                            tag: n.Tags.TextArea,
                            attributes: [{
                                name: n.AttributeName.Name,
                                value: n.IDs.SimpleFeedbackFormComment
                            }, {
                                name: n.AttributeName.Placeholder,
                                value: o.Strings.l_CommentPlaceholder
                            }, {
                                name: n.AttributeName.MaxLength,
                                value: n.AttributeValue.TextAreaMaxLength
                            }, {
                                name: n.AttributeName.TabIndex,
                                value: n.AttributeValue.One
                            }]
                        }, {
                            id: n.IDs.ContactInfoFormEmailText,
                            classes: [n.Classes.FontText, n.Classes.MarginLeft36px, n.Classes.LineHeight, n.Classes.TextAlignLeft],
                            innerText: o.Strings.l_EmailRequest,
                            attributes: [{
                                name: n.AttributeName.AriaLive,
                                value: n.AttributeValue.Polite
                            }]
                        }, {
                            id: n.IDs.ContactInfoFormEmailInput,
                            classes: [n.Classes.FeedbackFormComment, n.Classes.FontText, n.Classes.MarginLeft36px],
                            tag: n.Tags.Input,
                            attributes: [{
                                name: n.AttributeName.Type,
                                value: n.AttributeValue.Text
                            }, {
                                name: n.AttributeName.Name,
                                value: n.IDs.ContactInfoFormEmailInput
                            }, {
                                name: n.AttributeName.MaxLength,
                                value: n.AttributeValue.TextAreaMaxLength
                            }, {
                                name: n.AttributeName.TabIndex,
                                value: n.AttributeValue.One
                            }]
                        }, {
                            id: n.IDs.ContactInfoFormSubmitButtonContainer,
                            classes: [n.Classes.FeedbackFormSubmitButtonContainer, n.Classes.MarginLeft36px],
                            children: [{
                                id: n.IDs.ContactInfoFormSubmitButton,
                                classes: [n.Classes.FeedbackFormSubmitButton, n.Classes.FontText, n.Classes.LineHeight],
                                tag: n.Tags.Input,
                                attributes: [{
                                    name: n.AttributeName.Type,
                                    value: n.AttributeValue.Submit
                                }, {
                                    name: n.AttributeName.Value,
                                    value: o.Strings.l_Submit
                                }, {
                                    name: n.AttributeName.TabIndex,
                                    value: n.AttributeValue.One
                                }]
                            }]
                        }]
                    }
                }

                function d() {
                    return {
                        id: n.IDs.UservoiceLinkFormContainer,
                        classes: [n.Classes.Hidden, n.Classes.FeedbackFormContainer],
                        children: [{
                            id: n.IDs.UservoiceLinkFormQuestionMiddleText,
                            classes: [n.Classes.FeedbackQuestionMiddleText, n.Classes.FontSubtitle, n.Classes.MarginLeft36px, n.Classes.LineHeight, n.Classes.TextAlignLeft],
                            attributes: [{
                                name: n.AttributeName.AriaLive,
                                value: n.AttributeValue.Polite
                            }]
                        }, {
                            id: n.IDs.UservoiceLinkFormMiddleText,
                            classes: [n.Classes.FontText, n.Classes.MarginLeft36px, n.Classes.LineHeight, n.Classes.TextAlignLeft],
                            innerText: o.Strings.l_UservoiceInformation,
                            attributes: [{
                                name: n.AttributeName.AriaLive,
                                value: n.AttributeValue.Polite
                            }]
                        }, {
                            id: n.IDs.UservoiceLinkFormAnchorContainer,
                            classes: [n.Classes.LinkDiv, n.Classes.MarginLeft36px, n.Classes.FontText, n.Classes.LineHeight, n.Classes.TextAlignLeft],
                            children: [{
                                id: n.IDs.UservoiceLinkFormAnchor,
                                classes: [n.Classes.Link],
                                tag: n.Tags.Anchor,
                                innerText: a.GetUservoiceUrl(!1),
                                attributes: [{
                                    name: n.AttributeName.HRef,
                                    value: a.GetUservoiceUrl(!0)
                                }, {
                                    name: n.AttributeName.Target,
                                    value: n.AttributeValue.BlankWindow
                                }, {
                                    name: n.AttributeName.TabIndex,
                                    value: n.AttributeValue.One
                                }]
                            }]
                        }, {
                            id: n.IDs.UservoiceLinkFormCloseButtonContainer,
                            classes: [n.Classes.FeedbackFormSubmitButtonContainer, n.Classes.MarginLeft36px],
                            children: [{
                                id: n.IDs.UservoiceLinkFormCloseButton,
                                classes: [n.Classes.FeedbackFormSubmitButton, n.Classes.FontText, n.Classes.LineHeight],
                                tag: n.Tags.Input,
                                attributes: [{
                                    name: n.AttributeName.Type,
                                    value: n.AttributeValue.Submit
                                }, {
                                    name: n.AttributeName.Value,
                                    value: o.Strings.l_Close
                                }, {
                                    name: n.AttributeName.TabIndex,
                                    value: n.AttributeValue.One
                                }]
                            }]
                        }]
                    }
                }
                t.ActiveFormTemplates, t.GetFormContainerIdFromFormTemplate = i, t.GetMiddleTextIdFromFormTemplate = r, t.GetMiddleTextIdFromOptionString = function(e) {
                    switch (e) {
                        case o.Strings.l_DontLike:
                            return r(t.ActiveFormTemplates[n.FeedbackType.Dislike]);
                        case o.Strings.l_Like:
                            return r(t.ActiveFormTemplates[n.FeedbackType.Like]);
                        case o.Strings.l_Suggestion:
                            return r(t.ActiveFormTemplates[n.FeedbackType.Idea]);
                        default:
                            return r(0)
                    }
                }, t.GetFormContainerIdFromOptionString = function(e) {
                    switch (e) {
                        case o.Strings.l_DontLike:
                            return i(t.ActiveFormTemplates[n.FeedbackType.Dislike]);
                        case o.Strings.l_Like:
                            return i(t.ActiveFormTemplates[n.FeedbackType.Like]);
                        case o.Strings.l_Suggestion:
                            return i(t.ActiveFormTemplates[n.FeedbackType.Idea]);
                        default:
                            return i(0)
                    }
                }, t.GenerateSchema = function(t) {
                    return {
                        id: n.IDs.OverlayBackground,
                        classes: [e.Constants.Classes.OverlayMinWidth],
                        children: [{
                            id: n.IDs.MainContainer,
                            children: [{
                                id: n.IDs.MainContentHolder,
                                tag: n.Tags.Form,
                                classes: [n.Classes.Hidden],
                                children: [{
                                    id: n.IDs.LeftFormContainer,
                                    classes: [n.Classes.FormContainer],
                                    children: [{
                                        id: n.IDs.FeedbackTitle,
                                        classes: [n.Classes.FontTitle, n.Classes.TextAlignLeft, n.Classes.LineHeight],
                                        innerText: o.Strings.l_FeedbackTitle
                                    }, {
                                        id: n.IDs.ColumnSeparatorDiv,
                                        children: [{
                                            id: n.IDs.FeedbackQuestionLeftText,
                                            classes: [n.Classes.FontSubtitle, n.Classes.TextAlignLeft, n.Classes.LineHeight],
                                            innerText: o.Strings.l_FeedbackOverall
                                        }, {
                                            id: n.IDs.FeedbackOverallLikeAnchor,
                                            classes: [n.Classes.FeedbackOverallAnchor, n.Classes.BackgroundGrey],
                                            tag: n.Tags.Anchor,
                                            attributes: [{
                                                name: n.AttributeName.HRef,
                                                value: "#"
                                            }, {
                                                name: n.AttributeName.Value,
                                                value: o.Strings.l_Like
                                            }, {
                                                name: n.AttributeName.Role,
                                                value: n.AttributeValue.Button
                                            }, {
                                                name: n.AttributeName.TabIndex,
                                                value: n.AttributeValue.One
                                            }],
                                            children: [{
                                                id: n.IDs.FeedbackOverallLikeImage,
                                                classes: [n.Classes.FeedbackOverallImage],
                                                tag: n.Tags.Img
                                            }, {
                                                id: n.IDs.FeedbackOverallLikeText,
                                                classes: [n.Classes.FontText, n.Classes.FeedbackOverallText, n.Classes.LineHeight],
                                                innerText: o.Strings.l_Like
                                            }]
                                        }, {
                                            id: n.IDs.PlaceHolderDiv1,
                                            classes: [n.Classes.FullWidth20pxHeight]
                                        }, {
                                            id: n.IDs.FeedbackOverallDontLikeAnchor,
                                            classes: [n.Classes.FeedbackOverallAnchor, n.Classes.BackgroundGrey],
                                            tag: n.Tags.Anchor,
                                            attributes: [{
                                                name: n.AttributeName.HRef,
                                                value: "#"
                                            }, {
                                                name: n.AttributeName.Value,
                                                value: o.Strings.l_DontLike
                                            }, {
                                                name: n.AttributeName.Role,
                                                value: n.AttributeValue.Button
                                            }, {
                                                name: n.AttributeName.TabIndex,
                                                value: n.AttributeValue.One
                                            }],
                                            children: [{
                                                id: n.IDs.FeedbackOverallDontLikeImage,
                                                classes: [n.Classes.FeedbackOverallImage],
                                                tag: n.Tags.Img
                                            }, {
                                                id: n.IDs.FeedbackOverallDontLikeText,
                                                classes: [n.Classes.FontText, n.Classes.FeedbackOverallText, n.Classes.LineHeight],
                                                innerText: o.Strings.l_DontLike
                                            }]
                                        }, {
                                            id: n.IDs.PlaceHolderDiv2,
                                            classes: [n.Classes.FullWidth20pxHeight]
                                        }, {
                                            id: n.IDs.FeedbackOverallSuggestionAnchor,
                                            classes: [n.Classes.FeedbackOverallAnchor, n.Classes.BackgroundGrey],
                                            tag: n.Tags.Anchor,
                                            attributes: [{
                                                name: n.AttributeName.HRef,
                                                value: "#"
                                            }, {
                                                name: n.AttributeName.Value,
                                                value: o.Strings.l_Suggestion
                                            }, {
                                                name: n.AttributeName.Role,
                                                value: n.AttributeValue.Button
                                            }, {
                                                name: n.AttributeName.TabIndex,
                                                value: n.AttributeValue.One
                                            }],
                                            children: [{
                                                id: n.IDs.FeedbackOverallSuggestionImage,
                                                classes: [n.Classes.FeedbackOverallImage],
                                                tag: n.Tags.Img
                                            }, {
                                                id: n.IDs.FeedbackOverallSuggestionText,
                                                classes: [n.Classes.FontText, n.Classes.FeedbackOverallText, n.Classes.LineHeight],
                                                innerText: o.Strings.l_Suggestion
                                            }]
                                        }]
                                    }, {
                                        id: n.IDs.PrivacyStatementLinkDiv,
                                        classes: [n.Classes.FontText, n.Classes.LineHeight, n.Classes.TextAlignLeft],
                                        children: [{
                                            id: n.IDs.PrivacyStatementLink,
                                            tag: n.Tags.Anchor,
                                            innerText: o.Strings.l_PrivacyStatement,
                                            attributes: [{
                                                name: n.AttributeName.HRef,
                                                value: a.GetPrivacyUrl(t)
                                            }, {
                                                name: n.AttributeName.Target,
                                                value: n.AttributeValue.BlankWindow
                                            }, {
                                                name: n.AttributeName.TabIndex,
                                                value: n.AttributeValue.One
                                            }]
                                        }]
                                    }]
                                }, {
                                    id: n.IDs.MiddleFormContainer,
                                    classes: [n.Classes.FormContainer, n.Classes.Hidden],
                                    children: s().children
                                }]
                            }]
                        }]
                    }
                }, t.GenerateForms = s, t.GenerateSimpleFeedbackForm = l, t.GenerateContactInfoFeedbackForm = c, t.GenerateUservoiceLinkFeedbackForm = d
            }(o.Layout || (o.Layout = {}));
        var i = o.Layout;

        function r(e) {
            if (void 0 === e.brs && (e.brs = !0), !e.brs) return null;
            e.tag || (e.tag = n.Tags.Div);
            var t = document.createElement(e.tag);
            if (e.attributes)
                for (var a, o = 0; o < e.attributes.length; o++) a = e.attributes[o], t.setAttribute(a.name, a.value);
            if (e.id && (t.id = e.id), e.classes) {
                var i = e.classes.join(" ");
                t.className = i
            }
            if (e.innerText && (t.innerHTML = e.innerText), e.children)
                for (o = 0; o < e.children.length; o++) {
                    var s = e.children[o];
                    if (s) {
                        var l = r(s);
                        l && t.appendChild(l)
                    }
                }
            return t
        }

        function s() {
            a.SetElementVisibility(n.IDs.MainContentHolder, !0);
            var e = document.getElementsByTagName("a")[0];
            e && e.focus()
        }
        o.HtmlElementFromJson = r, o.MainContentHolderSlideLeft = function(e) {
            a.SetElementVisibility(i.GetFormContainerIdFromFormTemplate(i.ActiveFormTemplates[n.FeedbackType.Dislike]), !1), a.SetElementVisibility(i.GetFormContainerIdFromFormTemplate(i.ActiveFormTemplates[n.FeedbackType.Like]), !1), a.SetElementVisibility(i.GetFormContainerIdFromFormTemplate(i.ActiveFormTemplates[n.FeedbackType.Idea]), !1), n.UseNarrowScreenLayout ? (a.SetElementVisibility(n.IDs.LeftFormContainer, !1), a.SetElementVisibility(n.IDs.MiddleFormContainer, !0), a.SetElementVisibility(e, !0)) : (a.AddClassById(n.IDs.ColumnSeparatorDiv, n.Classes.ShowRightBorder), a.SetElementVisibility(n.IDs.MiddleFormContainer, !0), a.SetElementVisibility(e, !0), a.AddClassById(n.IDs.LeftFormContainer, n.Classes.SlideLeft), a.AddClassById(n.IDs.MiddleFormContainer, n.Classes.SlideLeft))
        }, o.Init = function(e, l, c, d) {
            o.Strings = l, d ? i.ActiveFormTemplates = d : (i.ActiveFormTemplates = {}, i.ActiveFormTemplates[n.FeedbackType.Dislike] = 0, i.ActiveFormTemplates[n.FeedbackType.Like] = 0, i.ActiveFormTemplates[n.FeedbackType.Idea] = 0), n.UseNarrowScreenLayout = t.IsNarrow();
            var u = r(i.GenerateSchema(c));
            document.body.insertBefore(u, document.body.firstChild), n.Urls.Images.FrownIcon = n.Urls.CreateURL("feedback_frown", e, n.Urls.Images.Extension), n.Urls.Images.LightBulbIcon = n.Urls.CreateURL("feedback_lightbulb", e, n.Urls.Images.Extension), n.Urls.Images.SmileIcon = n.Urls.CreateURL("feedback_smile", e, n.Urls.Images.Extension);
            var m = [n.Urls.Images.FrownIcon, n.Urls.Images.LightBulbIcon, n.Urls.Images.SmileIcon];
            a.CacheImages(m), a.SetAttributeOnHtmlElement(n.IDs.FeedbackOverallDontLikeImage, n.AttributeName.Source, n.Urls.Images.FrownIcon), a.SetAttributeOnHtmlElement(n.IDs.FeedbackOverallLikeImage, n.AttributeName.Source, n.Urls.Images.SmileIcon), a.SetAttributeOnHtmlElement(n.IDs.FeedbackOverallSuggestionImage, n.AttributeName.Source, n.Urls.Images.LightBulbIcon), a.SetElementVisibility(n.IDs.OverlayBackground, !0), a.GetInternetExplorerVersion() > 9 || -1 == a.GetInternetExplorerVersion() ? setTimeout(s, 8 * n.Numbers.Pause) : s(), n.UseNarrowScreenLayout && a.AddClassById(n.IDs.OverlayBackground, n.Classes.Narrow)
        }, o.ShowUi = s, o.Dismiss = function() {
            a.SetElementVisibility(n.IDs.OverlayBackground, !1), a.DeleteElementById(n.IDs.OverlayBackground)
        }
    }(e.UI || (e.UI = {}));
    var o = e.UI;
    ! function(t) {
        function i(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
        }

        function r(e, t, n) {
            e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
        }

        function c(e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        }

        function d(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        }

        function u(e, t, n) {
            var a = document.getElementById(e);
            a && i(a, t, n)
        }

        function m(e, t, n) {
            var a = document.getElementById(e);
            a && r(a, t, n)
        }

        function b(t) {
            t.keyCode == n.Keys.Esc && (d(t), c(t), e.Networking.NetworkingMgr.SendTrace(2, {
                Keyboard: "Escape key pressed, Office browser feedback UI dismissed"
            }), l(!1))
        }

        function f(t) {
            d(t), c(t), e.Networking.NetworkingMgr.SendTrace(2, {
                Mouse: "Mouse click on the background area, Office browser feedback UI dismissed"
            }), l(!1)
        }

        function k(e) {
            c(e)
        }

        function g(e, t) {
            d(e), c(e), F(t)
        }

        function F(e) {
            var t;
            a.DeleteAndAddClassesById(n.IDs.FeedbackOverallLikeAnchor, n.Classes.BackgroundBlue, n.Classes.BackgroundGrey), a.DeleteAndAddClassesById(n.IDs.FeedbackOverallDontLikeAnchor, n.Classes.BackgroundBlue, n.Classes.BackgroundGrey), a.DeleteAndAddClassesById(n.IDs.FeedbackOverallSuggestionAnchor, n.Classes.BackgroundBlue, n.Classes.BackgroundGrey), a.DeleteAndAddClassesById(e, n.Classes.BackgroundGrey, n.Classes.BackgroundBlue), a.SetAttributeOnHtmlElement(n.IDs.FeedbackOverallLikeAnchor, n.AttributeName.AriaSelected, n.AttributeValue.False), a.SetAttributeOnHtmlElement(n.IDs.FeedbackOverallDontLikeAnchor, n.AttributeName.AriaSelected, n.AttributeValue.False), a.SetAttributeOnHtmlElement(n.IDs.FeedbackOverallSuggestionAnchor, n.AttributeName.AriaSelected, n.AttributeValue.False), a.SetAttributeOnHtmlElement(e, n.AttributeName.AriaSelected, n.AttributeValue.True);
            var i = document.getElementById(e),
                r = o.Layout.GetMiddleTextIdFromOptionString(i.getAttribute(n.AttributeName.Value)),
                l = document.getElementById(r);
            if (i && l) {
                switch (i.getAttribute(n.AttributeName.Value)) {
                    case o.Strings.l_DontLike:
                        t = n.FeedbackType.Dislike, l.innerHTML = o.Strings.l_WhatDontLike;
                        break;
                    case o.Strings.l_Suggestion:
                        t = n.FeedbackType.Idea, l.innerHTML = o.Strings.l_WhatSuggest;
                        break;
                    default:
                        t = n.FeedbackType.Like, l.innerHTML = o.Strings.l_WhatLike
                }
                s.AddData(n.AttributeValue.FeedbackOverall, t), o.MainContentHolderSlideLeft(o.Layout.GetFormContainerIdFromOptionString(i.getAttribute(n.AttributeName.Value)));
                var c = document.getElementById(n.IDs.SimpleFeedbackFormComment);
                c && c.focus()
            }
        }

        function C(e) {
            g(e, n.IDs.FeedbackOverallLikeAnchor)
        }

        function S(e) {
            g(e, n.IDs.FeedbackOverallDontLikeAnchor)
        }

        function v(e) {
            g(e, n.IDs.FeedbackOverallSuggestionAnchor)
        }

        function h(e) {
            c(e);
            var t = document.getElementById(n.IDs.SimpleFeedbackFormScreenshotCheckbox);
            t && (t.getAttribute(n.AttributeName.Value) == n.AttributeValue.Checked ? t.setAttribute(n.AttributeName.Value, n.AttributeValue.Unchecked) : t.setAttribute(n.AttributeName.Value, n.AttributeValue.Checked))
        }

        function I(e) {
            d(e), c(e), A(n.IDs.SimpleFeedbackFormContainer)
        }

        function L(e) {
            d(e), c(e), A(n.IDs.ContactInfoFormContainer)
        }

        function D(t) {
            d(t), c(t), e.Networking.NetworkingMgr.SendTrace(2, "User clicked close button on UserVoice form."), l(!1)
        }

        function T(t) {
            c(t), e.Networking.NetworkingMgr.SendTrace(2, "User clicked link to UserVoice forum.")
        }

        function A(t) {
            var a = document.getElementById(t);
            if (a || (a = document.getElementById(n.IDs.MainContentHolder)), a) {
                for (var o = a.querySelectorAll(n.Tags.Input + ", " + n.Tags.TextArea), i = 0; i < o.length; i++) {
                    var r = o[i];
                    switch (r.getAttribute(n.AttributeName.Type)) {
                        case n.AttributeValue.Submit:
                            break;
                        default:
                            s.AddData(r.getAttribute(n.AttributeName.Name), r.value)
                    }
                }
                s.AddData("PageUrl", window.location.href), s.AddData("BrowserUserAgent", window.navigator.userAgent), e.Networking.NetworkingMgr.LogFeedbackData(s.GetData()), l(!0)
            } else e.Networking.NetworkingMgr.SendTrace(0, "Specified DOM element or MainContentHolder not found"), l(!1)
        }
        t.Init = function() {
            var e = document.getElementById(n.IDs.OverlayBackground);
            e && e.focus(), i(window, "keyup", b), u(n.IDs.FeedbackOverallLikeAnchor, "click", C), u(n.IDs.FeedbackOverallDontLikeAnchor, "click", S), u(n.IDs.FeedbackOverallSuggestionAnchor, "click", v), u(n.IDs.OverlayBackground, "click", f), u(n.IDs.MainContainer, "click", k), u(n.IDs.SimpleFeedbackFormScreenshotCheckbox, "click", h), u(n.IDs.SimpleFeedbackFormSubmitButton, "click", I), u(n.IDs.ContactInfoFormSubmitButton, "click", L), u(n.IDs.UservoiceLinkFormAnchor, "click", T), u(n.IDs.UservoiceLinkFormCloseButton, "click", D)
        }, t.Dismiss = function() {
            r(window, "keyup", b), m(n.IDs.FeedbackOverallLikeAnchor, "click", C), m(n.IDs.FeedbackOverallDontLikeAnchor, "click", S), m(n.IDs.FeedbackOverallSuggestionAnchor, "click", v), m(n.IDs.OverlayBackground, "click", f), m(n.IDs.MainContainer, "click", k), m(n.IDs.SimpleFeedbackFormScreenshotCheckbox, "click", h), m(n.IDs.SimpleFeedbackFormSubmitButton, "click", I), m(n.IDs.ContactInfoFormSubmitButton, "click", L), m(n.IDs.UservoiceLinkFormAnchor, "click", T), m(n.IDs.UservoiceLinkFormCloseButton, "click", D)
        }, t.FeedbackKeyHandler = b, t.FeedbackOverlayBackgroundHandler = f, t.FeedbackMainContainerHandler = k, t.HandleFeedbackOverall = F, t.FeedbackOverallLikeHandler = C, t.FeedbackOverallDontLikeHandler = S, t.FeedbackOverallSuggestionHandler = v, t.SimpleFeedbackFormScreenshotCheckboxHandler = h, t.SimpleFeedbackFormSubmitButtonHandler = I, t.ContactInfoFormSubmitButtonHandler = L, t.UservoiceLinkFormCloseButtonHandler = D, t.UservoiceLinkFormLinkHandler = T, t.LogFeedbackDataFromElementById = A
    }(e.Events || (e.Events = {}));
    var i = e.Events;
    ! function(e) {
        var t = {};
        e.Init = function(t) {
            if (null != t)
                for (var n in t) e.AddData(n, t[n])
        }, e.AddData = function(e, n) {
            t[e] = n
        }, e.RemoveData = function(e) {
            delete t[e]
        }, e.GetData = function() {
            return t
        }
    }(e.FeedbackData || (e.FeedbackData = {}));
    var r, s = e.FeedbackData;

    function l(t) {
        i.Dismiss(), o.Dismiss(), e.Networking.NetworkingMgr.Dismiss(), r(t)
    }
    e.InitAll = function(t, n, a, l, c, d, u, m) {
        e.Networking.NetworkingMgr.Init(l, c), s.Init(u), o.Init(t, n, d, m), i.Init(), r = a, e.Networking.NetworkingMgr.SendTrace(2, {
            OFeedback: "Office browser feedback UI opened"
        })
    }, e.DismissAll = l
}(OfficeBrowserFeedback || (OfficeBrowserFeedback = {}));
var TheUlsHost, TelemetryClickableClass = ".onclickable",
    SystemConsole = function() {
        function e() {}
        return e.prototype.isEnabled = function() {
            return window.console && window.console.log
        }, e.prototype.error = function(e) {
            window.console.error(e)
        }, e.prototype.warning = function(e) {
            window.console.warn(e)
        }, e.prototype.info = function(e) {
            window.console.info(e)
        }, e.prototype.log = function(e) {
            window.console.log(e)
        }, e
    }(),
    ConsoleUlsHost = function(e, t, n) {
        ConsoleUlsHost.initializeBase(this, [SessionId, "/" + Diag.UploadingUlsHost.defaultRemoteUlsUrl]), this._defaultCategory = e, this._console = t || new SystemConsole, this._suppressBubbling = n
    };
ConsoleUlsHost.prototype = {
    get_defaultCategory: function() {
        return this._defaultCategory
    },
    handleTrace: function(e) {
        if (this._console.isEnabled()) {
            var t = "(" + e.timestamp + "):\t" + e.message;
            switch (e.level) {
                case Diag.ULSTraceLevel.error:
                    this._console.error(t);
                    break;
                case Diag.ULSTraceLevel.warning:
                    this._console.warning(t);
                    break;
                case Diag.ULSTraceLevel.info:
                    this._console.info(t);
                    break;
                default:
                    this._console.log(t)
            }
        }
        this._suppressBubbling || ConsoleUlsHost.callBaseMethod(this, "handleTrace", [e])
    },
    showAssertDialog: function(e) {}
}, ConsoleUlsHost.registerClass("ConsoleUlsHost", Diag.UploadingUlsHost);
var PageStartLoadTime, ulsCategoryStringSetInCshtml, _onBeforePageUnloadCalled, InitializeUls = function(e) {
        var t = !1;
        return e || (e = Diag.ULSCat.msoulscat_Toronto, t = !0), TheUlsHost = new ConsoleUlsHost(e), Diag.ULS.setUlsHost(TheUlsHost), t && Diag.ULS.sendTraceTag(6160855, TheUlsHost.get_defaultCategory(), Diag.ULSTraceLevel.error, "Unknown uls category passed to InitializeUls: {0}", ulsCategoryStringSetInCshtml), "undefined" != typeof PageLoadTime && RecordPageLoadTime(), !t
    },
    InstrumentLinks = function(e) {
        for (var t = 0, n = 0; n < e.length; n++) {
            var a = e[n];
            a.id || (a.id = "un_" + t, t++), a.onclick = GenerateInstrumentationLink(a.id, a.onclick), a.ondragstart = GenerateDragInstrumentationLink(a.id, a.ondrag), a.oncontextmenu = GenerateContextMenuInstrumentationLink(a.id, a.oncontextmenu)
        }
    },
    LogUserViewPortInfo = function() {
        var e = $(window).width(),
            t = $(window).height(),
            n = screen.width,
            a = screen.height,
            o = t / $(document).height() * 100;
        Diag.ULS.sendTraceTag(6436628, TheUlsHost.get_defaultCategory(), Diag.ULSTraceLevel.info, "User ViewPort Info;windowWidth={0};windowHeight={1};screenWidth={2};screenHeight={3};percentageOfPageVisible={4};", e, t, n, a, o.toFixed(3))
    },
    furthestScrollDepthPercentage = 0,
    UpdateFurthestScrollDepth = function() {
        var e = ($(window).scrollTop() + $(window).height()) / $(document).height() * 100;
        e > furthestScrollDepthPercentage && (furthestScrollDepthPercentage = e)
    },
    RecordPageLoadTime = function() {
        Diag.ULS.sendTraceTag(8206356, Diag.ULSCat.msoulscat_Toronto, Diag.ULSTraceLevel.info, "PageLoadTime: {0}", PageLoadTime)
    },
    LogElapsedTimeOnPage = function() {
        var e = ((new Date).getTime() - PageStartLoadTime) / 1e3;
        Diag.ULS.sendTraceTag(6436629, TheUlsHost.get_defaultCategory(), Diag.ULSTraceLevel.info, "User time on page ;secondsSpentOnPage={0};", e.toFixed(3))
    },
    additionalBeforeUnloadFunctions = new Array,
    InsertAdditionalBeforeUnloadFunction = function(e) {
        additionalBeforeUnloadFunctions.push(e)
    },
    OnUnloadingPage = function() {
        for (var e = 0; e < additionalBeforeUnloadFunctions.length; e++) "function" == typeof additionalBeforeUnloadFunctions[e] && additionalBeforeUnloadFunctions[e]();
        additionalBeforeUnloadFunctions = new Array, TheUlsHost && FlushBrowserUls()
    };

function FlushBrowserUls() {
    var e = TheUlsHost.get_defaultCategory();
    TheUlsHost.dispose(), InitializeUls(e)
}

function FlushUlsAsynchronous() {
    TheUlsHost && TheUlsHost.flushAsynchronous()
}

function GenerateInstrumentationLink(e, t) {
    return function(e) {
        if (null != e) switch (e.which) {
            case 1:
                "Left";
                break;
            case 2:
                "Middle";
                break;
            case 3:
                "Right";
                break;
            default:
                "Unknown"
        }
        return FlushUlsAsynchronous(), !t || t(e)
    }
}

function GenerateContextMenuInstrumentationLink(e, t) {
    return function(e) {
        return !t || t(e)
    }
}

function GenerateDragInstrumentationLink(e, t) {
    return function(e) {
        return !t || t(e)
    }
}
$(window).on("beforeunload", (function() {
    OnUnloadingPage(), _onBeforePageUnloadCalled = !0
})), $(window).on("unload", (function() {
    _onBeforePageUnloadCalled || OnUnloadingPage(), _onBeforePageUnloadCalled = !1
})), $(window).on("pagehide", (function() {
    TheUlsHost && (_onBeforePageUnloadCalled || FlushBrowserUls())
})), $(window).on("scroll", (function() {
    UpdateFurthestScrollDepth()
}));
var ClipperIndexURL, NotebooksIndexURL, OrigRefCookieName, OrigRefCookieValue, ShowSignInControl, onSignInDialogKeyUp, Common, Utils, Feedback, OSPlatform = {
        IPHONE: "iPhone",
        IPOD: "iPod",
        IPAD: "iPad",
        ANDROID: "Android",
        WINDOWSPHONE8: "WP8",
        WINDOWSPHONE7: "WP7",
        WINDOWS8ANDUP: "Win8AndUp",
        WINDOWS7: "Win7",
        WINDOWSVISTAANDBELOW: "WinVistaAndBelow",
        MAC: "Mac",
        CHROMEBOOK: "Chromebook",
        UNSUPPORTED: "unsupported"
    },
    _osPlatform = void 0;

function GetOSPlatform() {
    return _osPlatform || (_osPlatform = $("body").hasClass(OSPlatform.IPHONE) ? OSPlatform.IPHONE : $("body").hasClass(OSPlatform.IPOD) ? OSPlatform.IPOD : $("body").hasClass(OSPlatform.IPAD) ? OSPlatform.IPAD : $("body").hasClass(OSPlatform.ANDROID) ? OSPlatform.ANDROID : $("body").hasClass(OSPlatform.WINDOWSPHONE8) ? OSPlatform.WINDOWSPHONE8 : $("body").hasClass(OSPlatform.WINDOWSPHONE7) ? OSPlatform.WINDOWSPHONE7 : $("body").hasClass(OSPlatform.WINDOWS8ANDUP) ? OSPlatform.WINDOWS8ANDUP : $("body").hasClass(OSPlatform.WINDOWS7) ? OSPlatform.WINDOWS7 : $("body").hasClass(OSPlatform.WINDOWSVISTAANDBELOW) ? OSPlatform.WINDOWSVISTAANDBELOW : $("body").hasClass(OSPlatform.MAC) ? OSPlatform.MAC : $("body").hasClass(OSPlatform.CHROMEBOOK) ? OSPlatform.CHROMEBOOK : OSPlatform.UNSUPPORTED)
}
$(window).on("load", (function() {
        $("a.ChromeDownload").on("click", (function(e) {
            var t = $(e.currentTarget).attr("href");
            Common.InstallChromeApp(t, NotebooksIndexURL, t, !1)
        })), document.getElementById("h_sign") && Common.EnableOrigRefCookieSetOnAuth()
    })),
    function(e) {
        function t(e) {
            27 === e.which && (Utils.SetCookie(OrigRefCookieName, OrigRefCookieValue, new Date("1970-01-01")), onSignInDialogKeyUp(e), $(document).off("keyup", t))
        }
        e.InstallChromeApp = function(e, t, n, a) {
            void 0 === a && (a = !1), chrome.webstore && (Utils.DisableClick(event), chrome.webstore.install(e, (function() {
                t && (window.location.href = t)
            }), (function(e, t) {
                n && (a || "launchInProgress" !== t && "userCancelled" !== t && "aborted" !== t) && (window.location.href = n)
            })))
        }, e.EnableOrigRefCookieSetOnAuth = function() {
            $("#h_sign")[0].onclick = null, $("#h_sign").click((function(e) {
                var n;
                $("#h_overlay").is(":visible") ? (Utils.SetCookie(OrigRefCookieName, OrigRefCookieValue, new Date("1970-01-01")), ShowSignInControl()) : (Utils.SetCookie(OrigRefCookieName, OrigRefCookieValue), ShowSignInControl(), n = $("#h_overlay")[0].onclick, $("#h_overlay")[0].onclick = function() {
                    Utils.SetCookie(OrigRefCookieName, OrigRefCookieValue, new Date("1970-01-01")), n(null), $(document).off("keyup", t)
                }, $(document).off("keyup", onSignInDialogKeyUp), $(document).off("keyup", t).keyup(t)), GenerateInstrumentationLink("h_sign", null)(e)
            }))
        }, e.AddParameterToURL = function(e, t, n) {
            return e + (e.split("?")[1] ? "&" : "?") + t + "=" + n
        }
    }(Common || (Common = {})),
    function(e) {
        function t(e, t, n) {
            void 0 === n && (n = null);
            var a = e + "=" + t;
            n && (a += ";expires=" + n.toUTCString()), a += ";secure", document.cookie = a
        }

        function n(e, t, n) {
            var a = new XMLHttpRequest;
            a.open("GET", "https://" + e + "/count/" + t + "?" + n), a.send()
        }

        function a(e, t) {
            try {
                var a = new XMLHttpRequest;
                return a.open("GET", "https://" + e + "/Strings?ids=" + t.join(), !1), a.send(), JSON.parse(a.responseText)
            } catch (t) {
                return n(e, "StringsUtil", "error=" + t), {}
            }
        }
        e.GetLocale = function(e) {
            void 0 === e && (e = document);
            var t = e.getElementsByTagName("html")[0].getAttribute("lang");
            return t || (window.navigator.userLanguage || window.navigator.language)
        }, e.SetCookie = t, e.ExpireCookie = function(e) {
            t(e, "", new Date("2000-01-01"))
        }, e.GetCookie = function(e) {
            var t = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
            return t ? t[2] : null
        }, e.DisableClick = function(e) {
            return e.preventDefault(), e.stopPropagation(), !1
        }, e.GenerateGuid = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            }))
        }, e.LoadCSS = function(e, t, n) {
            var a = document.createElement("link");
            if (a.rel = "stylesheet", a.type = "text/css", a.href = e, a.className = t, document.head.appendChild(a), n) {
                var o = new Image;
                o.onerror = n, o.src = e
            }
        }, e.GetCssAttribute = function(e, t) {
            return window.getComputedStyle ? getComputedStyle(e).getPropertyValue(t) : e.currentStyle[t]
        }, e.SetCssAttribute = function(e, t, n) {
            var a = [t];
            "-" === t[0] && (a = ["-ms" + t, "-moz" + t, "-webkit" + t, "-o" + t, t.substr(1)]);
            for (var o = 0; o < a.length; o++) e.style.setProperty ? e.style.setProperty(a[o], n) : e.style.setAttribute(a[o], n)
        }, e.AddUrlQueryValue = function(e, t, n) {
            var a = e;
            return -1 === a.indexOf("?") ? a += "?" : a += "&", a += t + "=" + n
        }, e.SendDataToCountEndpoint = n, e.GetLocalizedStringFromServer = function(e, t, n) {
            void 0 === n && (n = "");
            var o = a(e, [t]);
            return null == o[t] || "" === o[t] ? n : o[t]
        }, e.GetLocalizedStringsFromServer = a
    }(Utils || (Utils = {})),
    function(e) {
        var t;
        ! function(e) {
            e.Urls || (e.Urls = {}), e.Strings || (e.Strings = {})
        }(t = e.Constants || (e.Constants = {}));
        var n = function() {
            this.l_Close = e.Constants.Strings.Close, this.l_CommentPlaceholder = e.Constants.Strings.CommentPlaceholder, this.l_DontLike = e.Constants.Strings.DontLike, this.l_DocumentPermission = e.Constants.Strings.DocumentPermission, this.l_EmailRequest = e.Constants.Strings.EmailRequest, this.l_FeedbackOverall = e.Constants.Strings.FeedbackOverall, this.l_FeedbackTitle = e.Constants.Strings.FeedbackTitle, this.l_IncludeScreenshot = e.Constants.Strings.IncludeScreenshot, this.l_Like = e.Constants.Strings.Like, this.l_Optional = e.Constants.Strings.Optional, this.l_PrivacyStatement = e.Constants.Strings.PrivacyStatement, this.l_Submit = e.Constants.Strings.Submit, this.l_Suggestion = e.Constants.Strings.Suggestion, this.l_UservoiceInformation = e.Constants.Strings.UservoiceInformation, this.l_WhatLike = e.Constants.Strings.WhatLike, this.l_WhatDontLike = e.Constants.Strings.WhatDontLike, this.l_WhatSuggest = e.Constants.Strings.WhatSuggest
        };
        e.LocalizedStrings = n, e.ShowTool = function(n, a) {
            var o = Diag.ULSCat.msoulscat_Toronto;
            n && (o = Diag.ULSCat[n]);
            var i = new e.LocalizedStrings;
            OfficeBrowserFeedback.InitAll(t.Urls.ImageRoot, i, e.OnDismiss, o, o, a)
        }, e.OnDismiss = function(e) {
            e && BrowserHandler.tabs.query({
                active: !0
            }, (function(e) {
                BrowserHandler.tabs.remove(e[0].id)
            }))
        }
    }(Feedback || (Feedback = {})), $(window).on("load", (function() {
        Feedback.ShowTool(ulsCategoryStringSetInCshtml, lcid)
    }));