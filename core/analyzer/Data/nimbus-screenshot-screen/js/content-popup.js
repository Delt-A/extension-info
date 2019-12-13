/*
 * "This work is created by NimbusWeb and is copyrighted by NimbusWeb. (c) 2017 NimbusWeb.
 * You may not replicate, copy, distribute, or otherwise create derivative works of the copyrighted
 * material without prior written permission from NimbusWeb.
 *
 * Certain parts of this work contain code licensed under the MIT License.
 * https://www.webrtc-experiment.com/licence/ THE SOFTWARE IS PROVIDED "AS IS",
 * WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * */

"use strict";

// (function ($) {
if (!window.nimbusPopupInjected) {
    window.nimbusPopupInjected = true;
    window.streamWelcome = false;
    window.nscPopup = {
        clearEvent: function() {
            $('.nsc-popup').remove();
            $('#nsc_form_login_nimbus').off("submit", window.nscPopup.login.submit);
            $('#nsc_form_register_nimbus').off("submit", window.nscPopup.register.submit);
            $('.nsc-popup-close button').off('click', window.nscPopup.clearEvent);
        },
        get: function(template, cb) {
            $.get(chrome.runtime.getURL('template/' + template + '.html'), function(data) {
                chrome.runtime.sendMessage({
                    operation: 'content_popup_request',
                    action: 'info'
                }, function(res) {
                    window.nscPopup.clearEvent();
                    $('body').append(data).find('.nsc-popup').css('position', 'fixed').show();

                    if (res.errorCode === 0) {
                        $('#nsc_stream_welcome .button').removeClass('nsc-open-popup-login-nimbus');
                        $('.nsc-stream-hide-login').hide();

                        if (res.body.premium.active) {
                            $('.nsc-stream-hide-premium').hide();
                            $('.nsc-stream-show-premium').show();
                        } else {
                            $('#nsc_stream_welcome .button').addClass('nsc-open-popup-premium-nimbus');
                        }
                    }

                    $('.nsc-popup-close button, .nsc-popup-close a').on('click', window.nscPopup.clearEvent);

                    $('.nsc-open-popup-register-nimbus').on("click", function() {
                        window.nscPopup.clearEvent();
                        window.nscPopup.register.open();
                        return false;
                    });

                    $('.nsc-open-popup-login-nimbus').on("click", function() {
                        window.nscPopup.clearEvent();
                        window.nscPopup.login.open();
                        return false;
                    });

                    $('.nsc-open-popup-premium-nimbus').on("click", function() {
                        window.nscPopup.clearEvent();
                        window.nscPopup.premium.open();
                        return false;
                    });

                    $('*[data-i18n]').each(function() {
                        $(this).on('restart-i18n', function() {
                            let text = chrome.i18n.getMessage($(this).data('i18n'));
                            let attr = $(this).data('i18nAttr');
                            if (attr && text) {
                                $(this).attr(attr, text);
                            } else if (text) {
                                $(this).html(text);
                            }
                        }).trigger('restart-i18n');
                    });
                    cb && cb()
                });
            })
        },
        login: {
            open: function(cb) {
                window.nscPopup.get('popup-login', function() {
                    $('#nsc_form_login_nimbus').on("submit", window.nscPopup.login.submit);

                    $('#nsc_connect_to_google').on('click', function(e) {
                        window.nscPopup.clearEvent();
                        window.open('https://nimbus.everhelper.me/auth/openidconnect.php?env=app&provider=google', '_blank');
                        return false;
                    });

                    $('#nsc_connect_to_facebook').on('click', function(e) {
                        window.nscPopup.clearEvent();
                        window.open('https://nimbus.everhelper.me/auth/openidconnect.php?env=app&provider=facebook', '_blank');
                        return false;
                    });

                    cb && cb()
                })
            },
            submit: function() {
                let wrong = false;
                let email = this.elements['email'];
                let password = this.elements['password'];

                if (password.value.length < 8) {
                    $(password).addClass('wrong').focus();
                    wrong = true;
                }
                if (!/\S+@\S+\.\S+/.test(email.value)) {
                    $(email).addClass('wrong').focus();
                    wrong = true;
                }

                if (!wrong) {
                    chrome.runtime.sendMessage({
                        operation: 'content_popup_request',
                        action: 'auth',
                        email: email.value,
                        password: password.value
                    }, function(res) {
                        if (res.errorCode === 0) {
                            window.nscPopup.clearEvent();

                            if (window.streamWelcome) {
                                window.nscPopup.streamStart.open();
                            }
                        }
                    });
                }
                return false;
            }
        },
        register: {
            open: function(cb) {
                window.nscPopup.get('popup-register', function() {
                    $('#nsc_form_register_nimbus').on("submit", window.nscPopup.register.submit);
                    cb && cb()
                })
            },
            submit: function() {
                let wrong = false;
                let email = this.elements['email'];
                let password = this.elements['password'];
                let password_repeat = this.elements['pass-repeat'];

                if (password.value.length < 8) {
                    $(password).addClass('wrong').focus();
                    wrong = true;
                }

                if (password.value !== password_repeat.value) {
                    $(password).addClass('wrong');
                    $(password_repeat).addClass('wrong').focus();
                    wrong = true;
                }

                if (!/\S+@\S+\.\S+/.test(email.value)) {
                    $(email).addClass('wrong').focus();
                    wrong = true;
                }

                if (!wrong) {
                    chrome.runtime.sendMessage({
                        operation: 'content_popup_request',
                        action: 'register',
                        email: email.value,
                        password: password.value
                    }, function(res) {
                        if (res.errorCode === 0) {
                            chrome.runtime.sendMessage({
                                operation: 'content_popup_request',
                                action: 'auth',
                                email: email.value,
                                password: password.value
                            }, function() {
                                window.nscPopup.clearEvent();

                                if (window.streamWelcome) {
                                    window.nscPopup.streamStart.open();
                                }
                            });
                        }
                    });
                }
                return false;
            }
        },
        premium: {
            open: function(cb) {
                window.nscPopup.get('popup-premium', cb)
            }
        },
        limitFree: {
            open: function(cb) {
                window.nscPopup.get('popup-limit-free', cb)
            }
        },
        streamWelcome: {
            open: function(cb) {
                window.nscPopup.get('popup-stream-welcome', cb)

            }
        },
        streamStart: {
            open: function(cb) {
                window.nscPopup.get('popup-stream-start', cb)
            }
        }
    };

    chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
        // console.log('nsc_popup', req);
        if (req.operation === 'nsc_popup_is') return sendResponse(true);

        window.streamWelcome = false;

        if (req.operation === 'nsc_popup_login_open') {
            window.nscPopup.login.open();
        }

        if (req.operation === 'nsc_popup_limitfree_open') {
            window.nscPopup.limitFree.open();
        }

        if (req.operation === 'nsc_popup_streamwelcome_open') {
            window.streamWelcome = true;
            window.nscPopup.streamWelcome.open();
        }

        return true;
    });


}
// })(jQuery);