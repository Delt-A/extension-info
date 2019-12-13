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

window.google_oauth = {
    client_id: "330587763390.apps.googleusercontent.com",
    client_secret: "Wh5_rPxGej6B7qmsVxvGolg8",
    scopes: "https://www.googleapis.com/auth/drive.readonly.metadata https://www.googleapis.com/auth/drive.file",
    is_tab: false,
    login: function() {
        let url = 'https://accounts.google.com/o/oauth2/v2/auth?' +
            '&client_id=' + google_oauth.client_id +
            '&redirect_uri=urn:ietf:wg:oauth:2.0:oob:auto' +
            '&scope=' + google_oauth.scopes +
            '&access_type=offline' +
            '&response_type=code';
        google_oauth.is_tab = true;
        chrome.tabs.create({
            url: url
        });
    },
    refreshToken: function() {
        if (localStorage.refresh_token_google === undefined) {
            this.login();
        } else {
            if (Date.now() < (+localStorage.expires_in_google || 0)) {
                chrome.tabs.query({
                    /*active: true, lastFocusedWindow: true*/ }, function(tabs) {
                    for (let i = 0; i < tabs.length; i++) {
                        chrome.tabs.sendMessage(tabs[i].id, {
                            operation: 'access_google'
                        });
                    }
                });
            } else {
                let xhr = new XMLHttpRequest();
                let body = 'refresh_token=' + localStorage.refresh_token_google +
                    '&client_id=' + google_oauth.client_id +
                    '&client_secret=' + google_oauth.client_secret +
                    '&grant_type=refresh_token';

                xhr.open("POST", 'https://www.googleapis.com/oauth2/v4/token', true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.onload = function() {
                    if (xhr.readyState !== 4 && xhr.status !== 200) return;

                    let response = JSON.parse(xhr.responseText);

                    localStorage.access_token_google = response.access_token;
                    localStorage.refresh_token_google = response.refresh_token;
                    localStorage.expires_in_google = Date.now() + +response.expires_in;

                    chrome.tabs.query({
                        /*active: true, lastFocusedWindow: true*/ }, function(tabs) {
                        for (let i = 0; i < tabs.length; i++) {
                            chrome.tabs.sendMessage(tabs[i].id, {
                                operation: 'access_google'
                            });
                        }
                    });
                };
                xhr.onerror = function(err) {
                    console.error(err);
                };
                xhr.send(body);
            }
        }
    }
};

window.youtube_oauth = {
    client_id: "330587763390.apps.googleusercontent.com",
    client_secret: "Wh5_rPxGej6B7qmsVxvGolg8",
    scopes: "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube.force-ssl",
    is_tab: false,
    login: function() {
        let url = 'https://accounts.google.com/o/oauth2/v2/auth?' +
            '&client_id=' + youtube_oauth.client_id +
            '&redirect_uri=urn:ietf:wg:oauth:2.0:oob:auto' +
            '&scope=' + youtube_oauth.scopes +
            '&access_type=offline' +
            '&response_type=code';
        youtube_oauth.is_tab = true;
        chrome.tabs.create({
            url: url
        });
    },
    refreshToken: function() {
        if (localStorage.refresh_token_youtube === undefined) {
            this.login();
        } else {
            if (Date.now() < (+localStorage.expires_in_youtube || 0)) {
                chrome.tabs.query({
                    /*active: true, lastFocusedWindow: true*/ }, function(tabs) {
                    for (let i = 0; i < tabs.length; i++) {
                        chrome.tabs.sendMessage(tabs[i].id, {
                            operation: 'access_youtube'
                        });
                    }
                });
            } else {
                let xhr = new XMLHttpRequest();
                let body = 'refresh_token=' + localStorage.refresh_token_youtube +
                    '&client_id=' + youtube_oauth.client_id +
                    '&client_secret=' + youtube_oauth.client_secret +
                    '&grant_type=refresh_token';

                xhr.open("POST", 'https://www.googleapis.com/oauth2/v4/token', true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.onload = function() {
                    if (xhr.readyState !== 4 && xhr.status !== 200) return;

                    let response = JSON.parse(xhr.responseText);
                    console.log(response);
                    localStorage.access_token_youtube = response.access_token;
                    localStorage.refresh_token_youtube = response.refresh_token;
                    localStorage.expires_in_youtube = Date.now() + +response.expires_in;

                    chrome.tabs.query({
                        /*active: true, lastFocusedWindow: true*/ }, function(tabs) {
                        for (let i = 0; i < tabs.length; i++) {
                            chrome.tabs.sendMessage(tabs[i].id, {
                                operation: 'access_youtube'
                            });
                        }
                    });

                };
                xhr.onerror = function(err) {
                    console.error(err);
                };
                xhr.send(body);
            }
        }
    }
};

window.slack_oauth = {

    oauth: null,
    login: function() {
        screenshot.openPage('https://slack.com/oauth/authorize?client_id=17258488439.50405596566&scope=files:write:user,channels:read,users:read');
    },
    requestToApi: function(action, param, cb) {
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200) {
                let res = JSON.parse(xhr.responseText);
                cb && cb(null, res)
            } else {
                cb && cb(true, null)
            }
        };
        xhr.onerror = function(err) {
            console.error(err, null);
        };
        xhr.open('GET', 'https://slack.com/api/' + action + '?' + param, true);
        xhr.send();
    },
    sendData: function() {
        if (localStorage.slackToken) {
            slack_oauth.requestToApi('channels.list', 'token=' + localStorage.slackToken, function(err, channels) {
                slack_oauth.requestToApi('users.list', 'token=' + localStorage.slackToken, function(err, users) {
                    chrome.tabs.query({
                        active: true,
                        lastFocusedWindow: true
                    }, function(tabs) {
                        let tab = tabs[0];
                        chrome.tabs.sendMessage(tab.id, {
                            action: 'slack_auth',
                            oauth: slack_oauth.oauth,
                            channels: channels.channels,
                            users: users.members,
                            settings: {
                                panel: localStorage.slackPanel === 'true',
                                channel: localStorage.slackChannel || null
                            }
                        });
                    });
                })
            })
        }
    }
};


let xs, ys, ws, hs, scroll_crop = false,
    save_scroll = false,
    send_nimbus = false,
    send_slack = false,
    send_google = false,
    send_print = false,
    send_pdf = false,
    copy_to_clipboard = false;

let screenshot = {
    path: 'filesystem:chrome-extension://' + chrome.i18n.getMessage("@@extension_id") + '/persistent/',
    // tab_action: {
    //     chrome: false,
    //     fragment: false,
    //     crop: false,
    //     scroll_crop: false,
    // },
    generated: false,
    enableNpapi: false,
    imgData: null,
    // file: {
    //     blob: null
    // },
    button_video: null,
    insertPopup: function(action) {
        console.log('insertPopup', action)
        // window.core.sendMessage({operation: 'nsc_popup_is'}, function (status) {
        //     console.log('insertPopup', action, status)
        //     if (!status) {
        window.core.executeFile(['css/flex.min.css', 'css/new-style.min.css', 'css/icons.min.css', 'css/popup.min.css', 'css/fix-style.min.css', 'js/lib/jquery-3.3.1.js', 'js/connect-nimbus.js', 'js/content-popup.js'], function() {
            window.core.sendMessage({
                operation: action
            });
        });
        // } else {
        //     window.core.sendMessage({operation: action});
        // }
        // });
    },
    capture: {
        activate: {
            image: function(type) {
                console.log('capture activate image', type)
                if (localStorage.quickCapture === 'true') {
                    screenshot.automatic.data.action = 'image';
                    screenshot.automatic.data.auth = localStorage.enableEdit;
                    screenshot.automatic.data.type = type;
                    screenshot.automatic.data.site = undefined;
                    screenshot.automatic.auth();
                } else {
                    screenshot.setPageInfo(function() {
                        switch (type) {
                            case 'capture-visible':
                                screenshot.captureVisible();
                                break;
                            case 'capture-fragment':
                                screenshot.captureFragment();
                                break;
                            case 'capture-selected':
                                screenshot.captureSelected();
                                break;
                            case 'capture-scroll':
                                screenshot.scrollSelected();
                                break;
                            case 'capture-entire':
                                screenshot.captureEntire();
                                break;
                            case 'capture-window':
                                screenshot.captureWindow();
                                break;
                            case 'capture-delayed':
                                screenshot.captureDelayed();
                                break;
                            case 'capture-blank':
                                screenshot.createBlank();
                                break;
                        }
                    });
                }
            },
            video: function(type) {
                if (localStorage.quickVideoCapture === 'true') {
                    screenshot.automatic.data.action = 'video';
                    screenshot.automatic.data.auth = localStorage.enableVideoEdit;
                    screenshot.automatic.data.type = type;
                    screenshot.automatic.data.site = undefined;
                    screenshot.automatic.auth();
                } else {
                    screenshot.videoRecorder.capture({
                        type: type
                    });
                }
            }
        },
    },
    automatic: {
        data: {
            auth: null,
            action: null,
            type: null,
            site: null,
            premium_note: null,
            max_attachment_size_note: null
        },
        auth: function() {
            console.log('auth automation', screenshot.automatic.data);
            screenshot.setPageInfo(function() {
                switch (screenshot.automatic.data.auth) {
                    case 'nimbus':
                        nimbusShare.server.user.authState(function(res) {
                            if (res.errorCode === 0 && res.body && res.body.authorized) {
                                nimbusShare.server.user.info(function(info) {
                                    if (info.errorCode !== 0) return;
                                    screenshot.automatic.data.premium_note = info.body.premium.active;
                                    screenshot.automatic.data.max_attachment_size_note = +info.body.limits.NOTES_MAX_ATTACHMENT_SIZE;
                                    if (!info.body.premium.active && +info.body.usage.notes.current + +info.body.limits.NOTES_MAX_ATTACHMENT_SIZE > +info.body.usage.notes.max) {
                                        screenshot.insertPopup('nsc_popup_limitfree_open');
                                    } else {
                                        switch (screenshot.automatic.data.action) {
                                            case 'video':
                                                screenshot.videoRecorder.capture({
                                                    type: screenshot.automatic.data.type
                                                });
                                                break;
                                            case 'image':
                                                switch (screenshot.automatic.data.type) {
                                                    case 'capture-visible':
                                                        screenshot.captureVisible();
                                                        break;
                                                    case 'capture-fragment':
                                                        screenshot.captureFragment();
                                                        break;
                                                    case 'capture-selected':
                                                        screenshot.captureSelected();
                                                        break;
                                                    case 'capture-scroll':
                                                        screenshot.scrollSelected();
                                                        break;
                                                    case 'capture-entire':
                                                        screenshot.captureEntire();
                                                        break;
                                                    case 'capture-window':
                                                        screenshot.captureWindow();
                                                        break;
                                                    case 'capture-delayed':
                                                        screenshot.captureDelayed();
                                                        break;
                                                    case 'capture-blank':
                                                        screenshot.createBlank();
                                                        break;
                                                }
                                                break;
                                        }
                                    }
                                });
                            } else {
                                screenshot.insertPopup('nsc_popup_login_open');
                            }
                        });
                        break;
                    case 'google':
                        if (!googleShare.getAccessToken()) {
                            window.google_oauth.login();
                        } else {
                            switch (screenshot.automatic.data.action) {
                                case 'video':
                                    screenshot.videoRecorder.capture({
                                        type: screenshot.automatic.data.type
                                    });
                                    break;
                                case 'image':
                                    switch (screenshot.automatic.data.type) {
                                        case 'capture-visible':
                                            screenshot.captureVisible();
                                            break;
                                        case 'capture-fragment':
                                            screenshot.captureFragment();
                                            break;
                                        case 'capture-selected':
                                            screenshot.captureSelected();
                                            break;
                                        case 'capture-scroll':
                                            screenshot.scrollSelected();
                                            break;
                                        case 'capture-entire':
                                            screenshot.captureEntire();
                                            break;
                                        case 'capture-window':
                                            screenshot.captureWindow();
                                            break;
                                        case 'capture-delayed':
                                            screenshot.captureDelayed();
                                            break;
                                        case 'capture-blank':
                                            screenshot.createBlank();
                                            break;
                                    }
                                    break;
                            }
                        }
                        break;
                    case 'youtube':
                        if (!youtubeShare.getAccessToken()) {
                            window.youtube_oauth.login();
                        } else {
                            switch (screenshot.automatic.data.action) {
                                case 'video':
                                    screenshot.videoRecorder.capture({
                                        type: screenshot.automatic.data.type
                                    });
                                    break;
                            }
                        }
                        break;
                    default:
                        switch (screenshot.automatic.data.action) {
                            case 'video':
                                screenshot.videoRecorder.capture({
                                    type: screenshot.automatic.data.type
                                });
                                break;
                            case 'image':
                                switch (screenshot.automatic.data.type) {
                                    case 'capture-visible':
                                        screenshot.captureVisible();
                                        break;
                                    case 'capture-fragment':
                                        screenshot.captureFragment();
                                        break;
                                    case 'capture-selected':
                                        screenshot.captureSelected();
                                        break;
                                    case 'capture-scroll':
                                        screenshot.scrollSelected();
                                        break;
                                    case 'capture-entire':
                                        screenshot.captureEntire();
                                        break;
                                    case 'capture-window':
                                        screenshot.captureWindow();
                                        break;
                                    case 'capture-delayed':
                                        screenshot.captureDelayed();
                                        break;
                                    case 'capture-blank':
                                        screenshot.createBlank();
                                        break;
                                }
                                break;
                        }
                        break
                }
            })
        },
        send: function(blob) {
            core.sendMessage({
                operation: 'content_automation_status_upload'
            });
            console.log('screenshot.automatic.data', screenshot.automatic.data);
            switch (screenshot.automatic.data.auth) {
                case 'nimbus':
                    switch (screenshot.automatic.data.action) {
                        case 'video':
                            if (!screenshot.automatic.data.premium_note && blob.size > 1024 * 1024 * 10) {
                                core.sendAllMessage({
                                    operation: 'content_automation_status_upload_end'
                                });
                                chrome.tabs.create({
                                    url: 'edit.html?video'
                                });
                            } else {
                                nimbusShare.server.send.screencast({
                                    data: blob,
                                    title: screenshot.getFileName2(false, 'webm')
                                }, function(err, res) {
                                    core.sendAllMessage({
                                        operation: 'content_automation_status_upload_end'
                                    });
                                    if (res) {
                                        core.sendAllMessage({
                                            operation: 'content_automation_send_url',
                                            site: screenshot.automatic.data.site,
                                            url: res.url
                                        });
                                    } else if (screenshot.automatic.data.action !== 'abort') {
                                        chrome.tabs.create({
                                            url: 'edit.html?video'
                                        });
                                    }
                                    screenshot.automatic.data = {
                                        auth: null,
                                        action: null,
                                        type: null,
                                        site: null,
                                        premium_note: null,
                                        max_attachment_size_note: null
                                    };
                                });
                            }
                            break;
                        case 'image':
                            if (!screenshot.automatic.data.premium_note && blob.size > 1024 * 1024 * 10) {
                                core.sendAllMessage({
                                    operation: 'content_automation_status_upload_end'
                                });
                                chrome.tabs.create({
                                    url: 'edit.html'
                                });
                            } else {
                                nimbusShare.server.send.screenshot({
                                    data: blob,
                                    title: screenshot.getFileName()
                                }, function(err, res) {
                                    core.sendAllMessage({
                                        operation: 'content_automation_status_upload_end'
                                    });
                                    if (!err && res) {
                                        core.sendAllMessage({
                                            operation: 'content_automation_send_url',
                                            site: screenshot.automatic.data.site,
                                            url: res.url
                                        });
                                    } else if (screenshot.automatic.data.action !== 'abort') {
                                        chrome.tabs.create({
                                            url: 'edit.html'
                                        });
                                    }
                                    screenshot.automatic.data = {
                                        auth: null,
                                        action: null,
                                        type: null,
                                        site: null,
                                        premium_note: null,
                                        max_attachment_size_note: null
                                    };
                                })
                            }
                            break;
                    }
                    break;
                case 'google':
                    switch (screenshot.automatic.data.action) {
                        case 'video':
                            googleShare.save(blob, screenshot.getFileName2(true, 'webm'), function(err, res) {
                                console.log(err, res);
                                core.sendAllMessage({
                                    operation: 'content_automation_status_upload_end'
                                });
                                if (err && err.name === 401) {
                                    window.google_oauth.login();
                                } else if (!err && res) {
                                    googleShare.setPublicGdrive(res.id);
                                    core.sendAllMessage({
                                        operation: 'content_automation_send_url',
                                        site: screenshot.automatic.data.site,
                                        url: 'https://drive.google.com/file/d/' + res.id
                                    });
                                    screenshot.automatic.data = {
                                        auth: null,
                                        action: null,
                                        type: null,
                                        site: null,
                                        premium_note: null,
                                        max_attachment_size_note: null
                                    };
                                } else if (screenshot.automatic.data.action !== 'abort') {
                                    screenshot.automatic.data = {
                                        auth: null,
                                        action: null,
                                        type: null,
                                        site: null,
                                        premium_note: null,
                                        max_attachment_size_note: null
                                    };
                                    chrome.tabs.create({
                                        url: 'edit.html?video'
                                    });
                                }
                            });
                            break;
                        case 'image':
                            googleShare.save(blob, screenshot.getFileName('format'), function(err, res) {
                                core.sendAllMessage({
                                    operation: 'content_automation_status_upload_end'
                                });
                                if (err && err.name === 401) {
                                    window.google_oauth.login();
                                } else if (!err && res) {
                                    googleShare.setPublicGdrive(res.id);
                                    core.sendAllMessage({
                                        operation: 'content_automation_send_url',
                                        site: screenshot.automatic.data.site,
                                        url: 'https://drive.google.com/file/d/' + res.id
                                    });
                                    screenshot.automatic.data = {
                                        auth: null,
                                        action: null,
                                        type: null,
                                        site: null,
                                        premium_note: null,
                                        max_attachment_size_note: null
                                    };
                                } else if (screenshot.automatic.data.action !== 'abort') {
                                    screenshot.automatic.data = {
                                        auth: null,
                                        action: null,
                                        type: null,
                                        site: null,
                                        premium_note: null,
                                        max_attachment_size_note: null
                                    };
                                    chrome.tabs.create({
                                        url: 'edit.html'
                                    });
                                }
                            });
                            break;
                    }
                    break;
                case 'youtube':
                    switch (screenshot.automatic.data.action) {
                        case 'video':
                            youtubeShare.save(blob, screenshot.getFileName2(true, 'webm'), function(err, res) {
                                core.sendAllMessage({
                                    operation: 'content_automation_status_upload_end'
                                });
                                if (err && err.name === 401) {
                                    window.youtube_oauth.login();
                                } else if (!err && res) {
                                    core.sendAllMessage({
                                        operation: 'content_automation_send_url',
                                        site: screenshot.automatic.data.site,
                                        url: 'https://youtu.be/' + res.id
                                    });
                                    screenshot.automatic.data = {
                                        auth: null,
                                        action: null,
                                        type: null,
                                        site: null,
                                        premium_note: null,
                                        max_attachment_size_note: null
                                    };
                                } else if (screenshot.automatic.data.action !== 'abort') {
                                    screenshot.automatic.data = {
                                        auth: null,
                                        action: null,
                                        type: null,
                                        site: null,
                                        premium_note: null,
                                        max_attachment_size_note: null
                                    };
                                    chrome.tabs.create({
                                        url: 'edit.html?video'
                                    });
                                }
                            });
                            break;
                    }
                    break;
            }
        },
        abort: function() {
            switch (screenshot.automatic.data.auth) {
                case 'nimbus':
                    nimbusShare.server.send.abort();
                    break;
                case 'google':
                    googleShare.abort();
                    break;
                case 'youtube':
                    youtubeShare.abort();
                    break;
            }
        }
    },
    createMenu: function() {
        if (localStorage.showContentMenu === 'false') {
            chrome.contextMenus.removeAll()
        } else {
            let button_root = chrome.contextMenus.create({
                "title": chrome.i18n.getMessage("appNameMini"),
                "contexts": ["all"]
            });

            chrome.contextMenus.create({
                title: chrome.i18n.getMessage("btnVisiblePage"),
                contexts: ["all"],
                parentId: button_root,
                onclick: screenshot.capture.activate.image.bind(screenshot, 'capture-visible')
            });

            chrome.contextMenus.create({
                title: chrome.i18n.getMessage("btnCaptureFragment"),
                contexts: ["all"],
                parentId: button_root,
                onclick: screenshot.capture.activate.image.bind(screenshot, 'capture-fragment')
            });

            chrome.contextMenus.create({
                title: chrome.i18n.getMessage("btnSelectedArea"),
                contexts: ["all"],
                parentId: button_root,
                onclick: screenshot.capture.activate.image.bind(screenshot, 'capture-selected')
            });

            chrome.contextMenus.create({
                title: chrome.i18n.getMessage("btnSelectedScroll"),
                contexts: ["all"],
                parentId: button_root,
                onclick: screenshot.capture.activate.image.bind(screenshot, 'capture-scroll')
            });

            chrome.contextMenus.create({
                title: chrome.i18n.getMessage("btnEntirePage"),
                contexts: ["all"],
                parentId: button_root,
                onclick: screenshot.capture.activate.image.bind(screenshot, 'capture-entire')
            });
            if (window.core.is_chrome) {
                chrome.contextMenus.create({
                    title: chrome.i18n.getMessage("btnBrowserWindow"),
                    contexts: ["all"],
                    parentId: button_root,
                    onclick: screenshot.capture.activate.image.bind(screenshot, 'capture-window')
                });

                screenshot.button_video = chrome.contextMenus.create({
                    title: chrome.i18n.getMessage("btnCaptureVideo"),
                    contexts: ["all"],
                    parentId: button_root,
                    onclick: screenshot.capture.activate.video.bind(screenshot, 'tab')
                });
            }

            chrome.contextMenus.create({
                title: "separator",
                type: "separator",
                contexts: ["all"],
                parentId: button_root
            });

            chrome.contextMenus.create({
                title: chrome.i18n.getMessage("btnOptions"),
                contexts: ["all"],
                parentId: button_root,
                onclick: function() {
                    chrome.tabs.create({
                        url: 'options.html'
                    });
                }
            });
        }
    },
    changeVideoButton: function() {
        if (localStorage.showContentMenu === 'true') {
            if (screenshot.videoRecorder.getStatus()) {
                chrome.contextMenus.update(screenshot.button_video, {
                    title: chrome.i18n.getMessage("optionsLabelStopVideo"),
                    onclick: videoRecorder.stopRecord
                })
            } else {
                chrome.contextMenus.update(screenshot.button_video, {
                    title: chrome.i18n.getMessage("btnCaptureVideo"),
                    onclick: function() {
                        videoRecorder.capture({
                            type: 'tab',
                            countdown: localStorage.videoCountdown
                        });
                    }
                })
            }
        }
    },
    openPage: function(url) {
        chrome.tabs.create({
            url: url
        });
    },
    captureEntire: function() {
        console.time('all captureEntire');
        let screencanvas = {};
        screenshot.newwholepage = true;
        if (!screenshot.generated) {
            screenshot.generated = true;
            chrome.runtime.onMessage.addListener(function(request, sender, callback) {
                let fn = {
                    'capture_page': capturePage,
                    'capture_page_open': openPage
                } [request.operation];
                if (fn) fn(request, sender, callback);
                return true;
            });
        }

        function capturePage(data, sender, callback) {
            console.time('capturePage');
            let canvas;
            let z = data.z;
            if (screenshot.newwholepage) {
                screenshot.newwholepage = false;
                canvas = document.createElement('canvas');
                let maxSize = 32767;
                let maxArea = 268435456;
                let width = Math.ceil(Math.min(data.totalWidth * z, maxSize));
                let height = Math.ceil(Math.min(data.totalHeight * z, maxSize));
                if (!data.scroll_crop) {
                    width -= data.hasVScroll ? data.scrollWidth * z : 0;
                    height -= data.hasHScroll ? data.scrollWidth * z : 0;
                }

                if (width * height < maxArea) {
                    canvas.width = width;
                    canvas.height = height;
                } else {
                    canvas.width = width;
                    canvas.height = Math.floor(maxArea / width);
                }
                screencanvas.canvas = canvas;
                screencanvas.ctx = canvas.getContext('2d');
            }

            console.timeEnd('capturePage');

            // return callback(true);
            console.time('captureVisibleTab');

            chrome.tabs.captureVisibleTab(JSON.parse(localStorage.pageinfo).windowId, {
                format: localStorage.format === 'jpg' ? 'jpeg' : 'png',
                quality: 100
            }, function(dataURI) {
                console.timeEnd('captureVisibleTab');
                console.time('drawImage');
                let image = new Image();
                let x = 0;
                let y = Math.ceil(data.elem ? (data.h < data.elem.h ? (data.elem.y + (data.elem.h - data.h)) : data.elem.y) : 0) * z;
                let w = Math.ceil(data.w * z) - Math.ceil((data.hasVScroll ? data.scrollWidth : 0) * z);
                let h = Math.ceil(data.h * z) - Math.ceil((data.hasHScroll ? data.scrollWidth : 0) * z);
                let x2 = Math.ceil(data.scrollLeft % data.x > 0 ? data.scrollLeft : data.x) * z;
                let y2 = Math.ceil(data.elem ? (data.y + data.elem.y) : data.y) * z;
                let w2 = w;
                let h2 = h;
                image.onload = function() {
                    if (data.scroll_crop) {
                        x = Math.ceil(data.x * z);
                        y = Math.ceil(data.y_shift * z);
                        w = Math.ceil(data.w * z);
                        x2 = 0;
                        y2 = Math.ceil(data.y_crop * z);
                        w2 = w;
                        // h2 = Math.ceil(data.h) * z;
                    }

                    // w = image.naturalWidth < w ? image.naturalWidth : w;
                    // h = image.naturalHeight < h ? image.naturalHeight : h;

                    // console.log(image.naturalWidth, w, image.naturalHeight, h);
                    // console.log(data, x, y, w, h, x2, y2, w2, h2);

                    screencanvas.ctx.drawImage(image, x, y, w, h, x2, y2, w2, h2);
                    console.timeEnd('drawImage');

                    callback();
                };
                image.src = dataURI;
            });
        }

        function openPage() {
            if (scroll_crop === true) scroll_crop = false;
            console.time('scaleCanvas');
            screencanvas.canvas = window.core.scaleCanvas(screencanvas.canvas);
            console.timeEnd('scaleCanvas');
            console.timeEnd('all captureEntire');
            console.time('createBlob');
            screenshot.createBlob(screencanvas.canvas, function(blob) {
                console.timeEnd('createBlob');
                if (save_scroll) {
                    save_scroll = false;
                    // screenshot.setPageInfo(function () {
                    screenshot.download(localStorage.filePatch);
                    // });
                } else if (send_nimbus) {
                    send_nimbus = false;
                    screenshot.createEditPage('nimbus');
                } else if (send_slack) {
                    send_slack = false;
                    screenshot.createEditPage('slack');
                } else if (send_google) {
                    send_google = false;
                    screenshot.createEditPage('google');
                } else if (send_print) {
                    send_print = false;
                    screenshot.createEditPage('print');
                } else if (send_pdf) {
                    send_pdf = false;
                    screenshot.createEditPage('pdf');
                } else if (copy_to_clipboard) {
                    copy_to_clipboard = false;
                    let dataURL = screencanvas.canvas.toDataURL('image/' + (localStorage.format === 'jpg' ? 'jpeg' : 'png'), localStorage.imageQuality / 100);
                    screenshot.copyToClipboard(dataURL);
                } else {
                    screenshot.createEditPage();
                }
            });
        }

        window.core.executeFile(['js/content-clear-capture.js', 'js/content-core.js', 'var timeScrollEntirePage = ' + (localStorage.timeScrollEntirePage || 200) + ';', 'js/page.js'], function() {
            screenshot.newwholepage = true;
            screencanvas = {};

            if (scroll_crop === true) {
                let data = JSON.parse(localStorage.cropScrollPosition);
                window.core.sendMessage({
                    operation: 'content_scroll_page',
                    'scroll_crop': true,
                    'hide_fixed_elements': (localStorage.hideFixedElements === 'true'),
                    'x': data.x,
                    'y': data.y,
                    'width': data.width,
                    'height': data.height
                });
            } else {
                window.core.sendMessage({
                    operation: 'content_scroll_page',
                    'scroll_crop': false,
                    'hide_fixed_elements': (localStorage.hideFixedElements === 'true')
                })
            }
        });
    },
    setPageInfo: function(cb) {
        chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            let info = {
                id: tabs[0].id,
                windowId: tabs[0].windowId,
                url: tabs[0].url,
                title: tabs[0].title,
                time: getTimeStamp()
            };
            localStorage.pageinfo = JSON.stringify(info);
            cb && cb(info);
        });
    },

    fragmentsData: [],

    loadFragments: function(cb) {
        let self = this;
        let load = function(i) {
            let image = new Image();
            image.onload = function() {
                self.fragmentsData[i].image = image;
                check(++i);
            };
            image.src = self.fragmentsData[i].src;
        };

        let check = function(i) {
            if (self.fragmentsData[i] === undefined) cb();
            else load(i);
        };
        check(0);
    },
    createFullFragment: function(position, z, cb) {
        let self = this;

        // let z = window.core.is_chrome ? window.devicePixelRatio : 1;

        console.log(z);
        this.loadFragments(function() {
            let canvas = document.createElement('canvas');
            let content = canvas.getContext("2d");
            canvas.width = Math.round(position.w);
            canvas.height = Math.round(position.h);

            for (let i = 0, len = self.fragmentsData.length; i < len; i++) {
                content.drawImage(
                    self.fragmentsData[i].image,
                    Math.round(position.x * z),
                    0,
                    Math.round(position.w * z),
                    Math.round(self.fragmentsData[i].window_size.h * z),
                    0,
                    Math.round(self.fragmentsData[i].window_size.y - position.y),
                    Math.round(position.w),
                    Math.round(self.fragmentsData[i].window_size.h)
                );
            }

            cb(canvas.toDataURL('image/' + (localStorage.format === 'jpg' ? 'jpeg' : 'png'), 100));
        });
    },
    cropFragment: function(position, window_size, z) {
        let self = this;
        chrome.tabs.captureVisibleTab(null, {
            format: localStorage.format === 'jpg' ? 'jpeg' : 'png',
            quality: 100
        }, function(dataUrl) {
            if (window_size.y === position.y || self.fragmentsData.length || (position.y >= window_size.y && position.y + position.h <= window_size.y + window_size.h)) {
                self.fragmentsData.push({
                    window_size: window_size,
                    src: dataUrl
                });
            }

            if (!self.fragmentsData.length && (position.y < window_size.y || position.y + position.h > window_size.y + window_size.h)) {
                window.core.sendMessage({
                    operation: 'content_fragment_scroll',
                    position: position,
                    window_size: window_size,
                    scroll: {
                        x: 0,
                        y: position.y
                    }
                })
            } else if (self.fragmentsData.length && position.y + position.h > window_size.y + window_size.h) {
                window.core.sendMessage({
                    operation: 'content_fragment_scroll',
                    position: position,
                    window_size: window_size,
                    scroll: {
                        x: 0,
                        y: window_size.y + window_size.h
                    }
                })
            } else {
                self.createFullFragment(position, z, function(img) {
                    window.core.imageToCanvas(img, function(canvas) {
                        canvas = window.core.scaleCanvas(canvas);

                        screenshot.createBlob(canvas, function() {
                            window.core.sendMessage({
                                operation: 'content_set_fragment_image',
                                image: img,
                                position: position,
                                window_size: window_size
                            })
                        });
                    });
                });
            }
        })
    },
    captureFragment: function() {
        this.fragmentsData = [];
        window.core.executeFile(['css/fragment.min.css', 'css/crop.min.css', 'js/lib/jquery-3.3.1.js', 'js/content-core.js', 'js/content-fragment.js']);
    },
    captureSelected: function() {
        chrome.tabs.captureVisibleTab(null, {
            format: localStorage.format === 'jpg' ? 'jpeg' : 'png',
            quality: 100
        }, function(dataUrl) {
            localStorage.filePatch = dataUrl;
            window.core.executeFile(['css/cropper.min.css', 'css/crop.min.css', 'js/lib/jquery-3.3.1.js', 'js/lib/cropper.js', 'js/content-core.js', 'js/content-crop.js']);
        });
    },

    captureDelayed: function() {
        timerContent.set(localStorage.delayedScreenshotTime || 3, 'capture_delayed');
    },

    scrollSelected: function() {
        window.core.executeFile(['css/cropper.min.css', 'css/crop.min.css', 'js/content-clear-capture.js', 'js/lib/jquery-3.3.1.js', 'js/lib/cropper.js', 'js/jquery-cropper.js', 'js/content-core.js', 'js/content-scroll-crop.js']);
    },
    captureVisible: function() {
        window.core.executeFile(["js/content-scrollbar.js"], function() {
            window.core.sendMessage({
                operation: 'get_scrollbar_data'
            }, function(response) {
                chrome.tabs.captureVisibleTab(null, {
                    format: localStorage.format === 'jpg' ? 'jpeg' : 'png',
                    quality: 100
                }, function(dataURL) {
                    let image = new Image();
                    image.onload = function() {
                        let canvas = document.createElement('canvas'),
                            ctx = canvas.getContext('2d');

                        canvas.width = image.naturalWidth - (response.hasVScroll ? response.scrollWidth : 0);
                        canvas.height = image.naturalHeight - (response.hasHScroll ? response.scrollWidth : 0);
                        ctx.drawImage(image, 0, 0);

                        canvas = window.core.scaleCanvas(canvas);

                        screenshot.createBlob(canvas, function() {
                            screenshot.createEditPage();
                        });
                    };
                    image.src = dataURL;
                });
            });
        });
    },
    captureWindow: function() {
        screenshot.captureDesktop(function(canvas) {
            screenshot.createBlob(canvas, function() {
                screenshot.createEditPage();
            });
        });
    },
    captureDesktop: function(cb) {
        chrome.desktopCapture.chooseDesktopMedia(["tab", 'screen', 'window'], function(streamId) {
            window.navigator.webkitGetUserMedia({
                audio: false,
                video: {
                    mandatory: {
                        chromeMediaSource: "desktop",
                        chromeMediaSourceId: streamId,
                        maxWidth: 4000,
                        maxHeight: 4000
                    }
                }
            }, function(stream) {
                let video = document.createElement('video');
                video.addEventListener('loadedmetadata', function() {
                    let canvas = document.createElement('canvas');
                    let ctx = canvas.getContext("2d");
                    canvas.width = this.videoWidth;
                    canvas.height = this.videoHeight;
                    ctx.drawImage(this, 0, 0);

                    stream.getTracks()[0].stop();
                    this.pause();
                    this.remove();
                    canvas.remove();
                    cb && cb(canvas);
                }, false);
                try {
                    video.srcObject = stream;
                } catch (error) {
                    video.src = window.URL.createObjectURL(stream);
                }
                video.play();
            }, function(err) {
                console.log(err);
            });
        });
    },
    createBlob: function(canvas, callback) {
        canvas.toBlob(function(blob) {
            localStorage.filePatch = (window.URL || window.webkitURL).createObjectURL(blob);
            if (callback) callback(blob);
        }, 'image/' + (localStorage.format === 'jpg' ? 'jpeg' : 'png'), localStorage.imageQuality / 100);
    },
    createBlank: function() {
        let canvas = document.createElement('canvas');
        canvas.width = screen.width - 100;
        canvas.height = screen.height - 200;
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = "#FFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        screenshot.createBlob(canvas, function() {
            screenshot.createEditPage('blank');
        });
    },
    createEditPage: function(params) {
        console.time('createEditPage');
        if (localStorage.quickCapture === 'true' && (localStorage.enableEdit === 'nimbus' || localStorage.enableEdit === 'google' || localStorage.enableEdit === 'youtube')) {
            return core.blobUrlToBlob(localStorage.filePatch, screenshot.automatic.send);
        }
        params = params || localStorage.enableEdit;
        switch (params) {
            case 'copy':
                screenshot.copyToClipboard(localStorage.filePatch);
                break;
            case 'save':
                // screenshot.setPageInfo(function () {
                screenshot.download(localStorage.filePatch);
                // });
                break;
            default:
                // screenshot.setPageInfo(function () {
                console.timeEnd('createEditPage');
                // chrome.tabs.create({url: 'edit.html?hasFlash=true&' + ((option === 'edit' || !option) ? '' : option)});
                chrome.tabs.create({
                    url: 'edit.html' + ((params === 'edit' || !params) ? '' : '?' + params)
                });
                // });
                break;
        }
    },
    init: function() {
        if (window.core.is_chrome) {
            screenshot.videoRecorder = videoRecorder;
        }

        screenshot.createMenu();
    },
    setWaterMark: function(canvas, cb) {
        core.checkWaterMark(function(check) {
            nimbusShare.checkPremium(function(err, premium) {
                console.log('check', check, 'premium', premium);
                if (err || !premium.capture) return cb && cb(canvas);

                if (!check) return cb && cb(canvas);

                core.getWaterMark(function(watermark) {
                    let x, y, shift = 10;
                    switch (localStorage.positionWatermark) {
                        case 'lt':
                            x = shift;
                            y = shift;
                            break;
                        case 'rt':
                            x = canvas.width - watermark.width - shift;
                            y = shift;
                            break;
                        case 'lb':
                            x = shift;
                            y = canvas.height - watermark.height - shift;
                            break;
                        case 'rb':
                            x = canvas.width - watermark.width - shift;
                            y = canvas.height - watermark.height - shift;
                            break;
                        case 'c':
                            x = Math.floor((canvas.width - watermark.width) / 2);
                            y = Math.floor((canvas.height - watermark.height) / 2);
                            break;
                    }

                    canvas.getContext('2d').drawImage(watermark, x, y, watermark.width, watermark.height);

                    return cb && cb(canvas);
                });
            })
        })
    },
    copyToClipboard: function(dataURL) {
        if (!window.core.is_firefox) return false;
        window.core.dataUrlToArrayBuffer(dataURL, function(buffer) {
            chrome.clipboard.setImageData(buffer, (localStorage.format === 'jpg' ? 'jpeg' : 'png'));

            chrome.notifications.create(null, {
                    type: 'basic',
                    iconUrl: 'images/icons/48x48.png',
                    title: chrome.i18n.getMessage("appName"),
                    message: chrome.i18n.getMessage("notificationCopy")
                },
                function(notificationId) {
                    window.setTimeout(function(id) {
                        chrome.notifications.clear(id)
                    }.bind(this, notificationId), 3000);
                });
        });
    },
    download: function(dataURL) {
        let canvas = document.createElement('canvas');
        let screen = new Image();
        screen.onload = function() {
            canvas.width = screen.width;
            canvas.height = screen.height;

            canvas.getContext('2d').drawImage(screen, 0, 0);
            screenshot.setWaterMark(canvas, function(c) {
                let data_url = c.toDataURL('image/' + (localStorage.format === 'jpg' ? 'jpeg' : 'png'), localStorage.imageQuality / 100);
                chrome.downloads.download({
                    url: window.URL.createObjectURL(core.dataURLtoBlob(data_url)),
                    // filename: screenshot.getFileName(),
                    saveAs: localStorage.enableSaveAs !== 'false'
                })
            });
        };
        screen.src = dataURL || localStorage.filePatch;
    },
    getFileName: function() {
        let s = localStorage.fileNamePatternScreenshot;
        let f = localStorage.format;
        let info = JSON.parse(localStorage.pageinfo);
        let url = document.createElement('a');
        url.href = info.url || '';
        s = s.replace(/\{url}/, info.url || '')
            .replace(/\{title}/, info.title || '')
            .replace(/\{domain}/, url.host || '')
            .replace(/\{date}/, info.time.split(' ')[0] || '')
            .replace(/\{time}/, info.time.split(' ')[1] || '')
            .replace(/\{ms}/, info.time.split(' ')[2] || '')
            .replace(/\{timestamp}/, info.time.split(' ')[3] || '');

        return s.replace(/[\*\|\\\:\"\<\>\?\/#]+/ig, '_') + ('.' + f);
    },
    getFileName2: function(is_format, format) {
        let is_video = (format === 'webm' || format === 'mp4' || format === 'gif');
        let s = is_video ? localStorage.fileNamePatternScreencast : localStorage.fileNamePatternScreenshot;
        let info = JSON.parse(localStorage.pageinfo);
        let url = document.createElement('a');
        url.href = info.url || '';
        s = s.replace(/\{url}/, info.url || '')
            .replace(/\{title}/, info.title || '')
            .replace(/\{domain}/, url.host || '')
            .replace(/\{date}/, info.time.split(' ')[0] || '')
            .replace(/\{time}/, info.time.split(' ')[1] || '')
            .replace(/\{ms}/, info.time.split(' ')[2] || '')
            .replace(/\{timestamp}/, info.time.split(' ')[3] || '');

        return s.replace(/[\*\|\\\:\"\<\>\?\/#]+/ig, '_') + (is_format ? '.' + format : '');
    },
};

chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
    console.log(item);
    if (item.byExtensionId && item.byExtensionId === "bpconcjcammlapcogcnnelfmaeghhagj") {
        let page = JSON.parse(localStorage.pageinfo);
        if (/video/.test(item.mime)) {
            suggest({
                filename: window.core.getVideoFileName(page, localStorage.videoFormat)
            });
        } else if (/image/.test(item.mime)) {
            suggest({
                filename: window.core.getImageFileName(page, localStorage.imageFormat)
            });
        }
    }
});

function getTimeStamp() {
    let y, m, d, h, M, s, mm, timestamp;
    let time = new Date();
    y = time.getFullYear();
    m = time.getMonth() + 1;
    d = time.getDate();
    h = time.getHours();
    M = time.getMinutes();
    s = time.getSeconds();
    mm = time.getMilliseconds();
    timestamp = Date.now();
    if (m < 10) m = '0' + m;
    if (d < 10) d = '0' + d;
    if (h < 10) h = '0' + h;
    if (M < 10) M = '0' + M;
    if (s < 10) s = '0' + s;
    if (mm < 10) mm = '00' + mm;
    else if (mm < 100) mm = '0' + mm;
    return y + '.' + m + '.' + d + ' ' + h + ':' + M + ':' + s + ' ' + mm + ' ' + timestamp;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('request', request);

    switch (request.operation) {
        case 'oauth_slack':
            slack_oauth.login();
            break;
        case 'oauth_google':
            google_oauth.login();
            break;
        case 'oauth_google_refresh':
            google_oauth.refreshToken();
            break;
        case 'oauth_youtube':
            youtube_oauth.login();
            break;
        case 'oauth_youtube_refresh':
            youtube_oauth.refreshToken();
            break;
        case 'update_menu':
            screenshot.createMenu();
            break;


        case 'set_screen':
            let image = new Image();
            image.onload = function() {
                let canvas = document.createElement('canvas'),
                    ctx = canvas.getContext('2d');
                canvas.width = image.naturalWidth;
                canvas.height = image.naturalHeight;
                ctx.drawImage(image, 0, 0);

                canvas = window.core.scaleCanvas(canvas);
                localStorage.filePatch = canvas.toDataURL('image/' + (localStorage.format === 'jpg' ? 'jpeg' : 'png'), localStorage.imageQuality / 100)
            };
            image.src = request.dataUrl;
            break;
        case 'set_video_panel':
            localStorage.deawingTools = request.value;
            break;
        case 'set_video_editor_tools':
            localStorage.videoEditorTools = request.tools;
            break;
        case 'set_option':
            localStorage[request.key] = request.value;
            break;
            // case 'set_core_cap':
            //     xs = request.xs;
            //     ys = request.ys;
            //     ws = request.ws;
            //     hs = request.hs;
            //     break;

        case 'get_crop_position':
            sendResponse(localStorage.saveCropPosition === 'true' ? JSON.parse(localStorage.cropPosition) : {});
            break;
        case 'get_crop_scroll_position':
            let res = {};
            if (localStorage.saveCropPosition === 'true') res = JSON.parse(localStorage.cropScrollPosition);
            res.hideFixedElements = (localStorage.hideFixedElements === 'true');
            sendResponse(res);
            break;
        case 'get_info_screen':
            sendResponse({
                format: localStorage.format,
                quality: localStorage.imageQuality,
                image: localStorage.filePatch
            });
            break;
        case 'get_hotkeys':
            sendResponse({
                hotkeys: localStorage.hotkeys
            });
            break;
        case 'get_local_storage':
            sendResponse({
                localStorage: localStorage
            });
            break;
        case 'get_info_record':
            sendResponse({
                state: screenshot.videoRecorder.getState(),
                status: screenshot.videoRecorder.getStatus(),
                time: screenshot.videoRecorder.getTimeRecord()
            });
            break;
        case 'get_quick_capture':
            sendResponse({
                enable_edit: localStorage.enableEdit,
                enable_video_edit: localStorage.enableVideoEdit,
                quick_capture: localStorage.quickCapture,
                quick_capture_type: localStorage.quickCaptureType,
                quick_video_capture: localStorage.quickVideoCapture,
                quick_video_capture_type: localStorage.quickVideoCaptureType
            });
            break;
        case 'get_automation_setting':
            sendResponse({
                quick_capture_github: localStorage.quickVideoCaptureGithub,
                quick_capture_github_welcome: localStorage.quickVideoCaptureGithubWelcome
            });
            break;
        case 'get_capture_desktop':
            screenshot.captureDesktop(function(canvas) {
                sendResponse({
                    dataUrl: canvas.toDataURL('image/' + (localStorage.format === 'jpg' ? 'jpeg' : 'png'), localStorage.imageQuality / 100)
                });
            });
            return true;
            // break;

        case 'get_slack_data':
            slack_oauth.sendData();
            break;

        case 'generate_fragment':
            screenshot.cropFragment(request.position, request.window_size, request.z);
            break;
        case 'generate_selected_scroll':
            scroll_crop = true;
            screenshot.captureEntire();
            break;
        case 'generate_selected_scroll_save':
            save_scroll = true;
            scroll_crop = true;
            screenshot.captureEntire();
            break;

        case 'save_crop_position':
            localStorage.cropPosition = JSON.stringify(request.value);
            break;
        case 'save_crop_scroll_position':
            localStorage.cropScrollPosition = JSON.stringify(request.value);
            break;
        case 'save_position_video_camera':
            localStorage.videoCameraPosition = JSON.stringify(request.position);
            break;

        case 'open_page':
            screenshot.openPage(request.url);
            break;
        case 'open_edit_page':
            screenshot.createEditPage(request.param);
            break;
        case 'copy_to_clipboard':
            screenshot.copyToClipboard(request.dataUrl);
            break;
        case 'copy_to_clipboard_scroll':
            copy_to_clipboard = true;
            scroll_crop = true;
            screenshot.captureEntire();
            break;
        case 'download_screen':
            screenshot.download(request.dataUrl || localStorage.filePatch);
            break;
        case 'download_screen_content':
            screenshot.setPageInfo(function() {
                screenshot.download(request.dataUrl || localStorage.filePatch);
            });
            break;

        case 'web_camera_toggle_panel':
            chrome.tabs.query({
                active: true,
                lastFocusedWindow: true
            }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    operation: 'web_camera_toggle'
                });
            });
            break;

        case 'content_stop_timer':
            chrome.browserAction.setPopup({
                popup: 'popup.html'
            });
            break;
        case 'content_end_timer':
            chrome.browserAction.setPopup({
                popup: 'popup.html'
            });
            if (request.type === 'capture_delayed') {
                screenshot.captureVisible();
            } else if (request.type !== undefined) {
                screenshot.videoRecorder.capture({
                    type: request.type,
                    not_timer: true,
                    media_access: true
                });
            }
            break;
        case 'update_context_menu':
            screenshot.createMenu();
            break;

        case 'activate_hotkey':
        case 'activate_capture':
            screenshot.capture.activate.image(request.value);
            break;

            // case 'activate_hotkey':
            //     switch (request.value) {
            //         case 'visible' :
            //             screenshot.captureVisible();
            //             break;
            //         case 'fragment' :
            //             screenshot.captureFragment();
            //             break;
            //         case 'selected' :
            //             screenshot.captureSelected();
            //             break;
            //         case 'scroll' :
            //             screenshot.scrollSelected();
            //             break;
            //         case 'entire' :
            //             screenshot.captureEntire();
            //             break;
            //         case 'window' :
            //             screenshot.captureWindow();
            //             break;
            //         case 'delayed' :
            //             screenshot.captureDelayed();
            //             break;
            //         case 'blank' :
            //             screenshot.createBlank();
            //             break;
            //     }
            //     break;
            //
            // case 'activate_capture':
            //     screenshot.setPageInfo(function () {
            //         switch (request.value) {
            //             case 'capture-visible' :
            //                 screenshot.captureVisible();
            //                 break;
            //             case 'capture-fragment' :
            //                 screenshot.captureFragment();
            //                 break;
            //             case 'capture-selected' :
            //                 screenshot.captureSelected();
            //                 break;
            //             case 'capture-scroll' :
            //                 screenshot.scrollSelected();
            //                 break;
            //             case 'capture-entire' :
            //                 screenshot.captureEntire();
            //                 break;
            //             case 'capture-window' :
            //                 screenshot.captureWindow();
            //                 break;
            //             case 'capture-delayed' :
            //                 screenshot.captureDelayed();
            //                 break;
            //             case 'capture-blank' :
            //                 screenshot.createBlank();
            //                 break;
            //         }
            //     });
            //     break;

        case 'activate_record':
            switch (request.key) {
                case 'start':
                    screenshot.videoRecorder.capture({
                        type: request.value
                    });
                    break;
                case 'pause':
                    screenshot.videoRecorder.pauseRecord();
                    break;
                case 'stop':
                    screenshot.videoRecorder.stopRecord();
                    break;
            }
            break;

        case 'send_to':
            switch (request.path) {
                case 'nimbus':
                case 'slack':
                case 'google':
                case 'print':
                case 'pdf':
                    if (request.dataUrl) localStorage.filePatch = request.dataUrl;
                    screenshot.createEditPage(request.path);
                    break;

                case 'nimbus_scroll':
                    send_nimbus = true;
                    scroll_crop = true;
                    screenshot.captureEntire();
                    break;
                case 'slack_scroll':
                    send_slack = true;
                    scroll_crop = true;
                    screenshot.captureEntire();
                    break;
                case 'google_scroll':
                    send_google = true;
                    scroll_crop = true;
                    screenshot.captureEntire();
                    break;
                case 'print_scroll':
                    send_print = true;
                    scroll_crop = true;
                    screenshot.captureEntire();
                    break;
                case 'pdf_scroll':
                    send_pdf = true;
                    scroll_crop = true;
                    screenshot.captureEntire();
                    break;
            }
            break;

        case 'status_video_change':
            switch (request.status) {
                case 'play':
                    if (screenshot.videoRecorder.getState() !== 'recording') screenshot.videoRecorder.pauseRecord();
                    break;
                case 'pause':
                    if (screenshot.videoRecorder.getState() === 'recording') screenshot.videoRecorder.pauseRecord();
                    break;
                case 'stop':
                    screenshot.videoRecorder.stopRecord();
                    break;
            }
            break;

        case 'check_tab_action':
            let action = {
                chrome: true,
                fragment: false,
                crop: false,
                scroll_crop: false,
                url: false
            };

            switch (request.action) {
                case 'insert_page':
                    chrome.tabs.query({
                        active: true,
                        lastFocusedWindow: true
                    }, function(tabs) {
                        if (!/^chrome/.test(tabs[0].url)) {
                            chrome.tabs.executeScript(tabs[0].id, {
                                file: "js/consentNimbus.js"
                            });
                        } else {
                            action.chrome = true;
                            chrome.runtime.sendMessage({
                                'operation': 'check_tab_action',
                                'action': 'back_is_page',
                                'value': JSON.stringify(action)
                            });
                        }
                    });
                    break;
                    // case 'back_is_page' :
                    //     screenshot.tab_action = JSON.parse(request.value);
                    //     break;
            }
            break;
        case 'content_automation':
            screenshot.automatic.data.action = request.action;
            if (request.action !== 'abort') {
                screenshot.automatic.data.auth = request.auth;
                screenshot.automatic.data.type = request.type;
                screenshot.automatic.data.site = request.site;
                screenshot.automatic.auth();
            } else {
                screenshot.automatic.abort();
            }
            break;
        case 'content_popup':
            screenshot.insertPopup(request.action);
            break;
        case 'content_popup_request':
            console.log(request.action)
            switch (request.action) {
                case 'auth':
                    nimbusShare.server.user.auth(request.email, request.password, function(res) {
                        sendResponse(res);
                    });
                    break;
                case 'register':
                    nimbusShare.server.user.register(request.email, request.password, function(res) {
                        sendResponse(res);
                    });
                    break;
                case 'info':
                    nimbusShare.server.user.info(function(res) {
                        sendResponse(res);
                    });
                    break;
            }
            return true;
    }
});

if (window.core.is_chrome) {
    chrome.commands.onCommand.addListener(function(command) {
        switch (command) {
            case 'start_tab_video':
                screenshot.videoRecorder.capture({
                    type: 'tab'
                });
                break;
            case 'start_desktop_video':
                screenshot.videoRecorder.capture({
                    type: 'desktop'
                });
                break;
            case 'stop_video':
                screenshot.videoRecorder.stopRecord();
                break;
            case 'pause_video':
                if (screenshot.videoRecorder.getState() === 'recording') {
                    screenshot.videoRecorder.pauseRecord();
                }
                break;
        }
    });
}


if (localStorage.hotkeys) {
    let hotkeys = JSON.parse(localStorage.hotkeys);
    localStorage.hotkeys = JSON.stringify({
        tab_video: hotkeys.tab_video || 55,
        desktop_video: hotkeys.desktop_video || 56,
        stop_video: hotkeys.stop_video || 57,
        visible: hotkeys.visible || 49,
        fragment: hotkeys.fragment || 54,
        selected: hotkeys.selected || 50,
        scroll: hotkeys.scroll || 51,
        entire: hotkeys.entire || 52,
        window: hotkeys.window || 53
    });
} else {
    localStorage.hotkeys = JSON.stringify({
        tab_video: 55,
        desktop_video: 56,
        stop_video: 57,
        visible: 49,
        fragment: 54,
        selected: 50,
        scroll: 51,
        entire: 52,
        window: 53
    });
}

if (localStorage.hotkeysSendNS) {
    let hotkeysSendNS = JSON.parse(localStorage.hotkeysSendNS);
    localStorage.hotkeysSendNS = JSON.stringify({
        key: hotkeysSendNS.key || 13,
        title: hotkeysSendNS.title || 'Enter'
    });
} else {
    localStorage.hotkeysSendNS = JSON.stringify({
        key: 13,
        title: 'Enter'
    });
}

if (!localStorage.mainMenuItem) {
    localStorage.mainMenuItem = JSON.stringify({
        "entire": true,
        "window": true,
        "selected": true,
        "fragment": true,
        "visible": true,
        "blank": true,
        "delayed": true,
        "scroll": true,
        "video": true,
        "android": true
    });
} else {
    let mainMenuItem = JSON.parse(localStorage.mainMenuItem);

    mainMenuItem.selected = mainMenuItem.area;
    delete mainMenuItem.area;
    localStorage.mainMenuItem = JSON.stringify(mainMenuItem);
}

localStorage.accountPopup = localStorage.accountPopup || 'true';
localStorage.ratePopup = localStorage.ratePopup || JSON.stringify({
    show: true,
    date: Date.now()
});
localStorage.videoCamera = localStorage.videoCamera || 'false';
localStorage.micSound = localStorage.micSound || 'true';
localStorage.tabSound = localStorage.tabSound || 'false';
localStorage.videoReEncoding = localStorage.videoReEncoding || 'true';
localStorage.privateUploadVideo = localStorage.privateUploadVideo || 'false';
localStorage.micPopup = localStorage.micPopup || 'false';
localStorage.cursorAnimate = localStorage.cursorAnimate || 'false';
localStorage.deawingTools = localStorage.deawingTools || 'false';
localStorage.recordType = localStorage.recordType || 'tab';
localStorage.videoSize = localStorage.videoSize || 'auto';
localStorage.videoBitrate = localStorage.videoBitrate || '4000000';
localStorage.audioBitrate = localStorage.audioBitrate || '96000';
localStorage.videoFps = localStorage.videoFps || '24';
localStorage.deleteDrawing = localStorage.deleteDrawing || '6';
localStorage.videoCountdown = localStorage.videoCountdown || '0';
localStorage.pageinfo = localStorage.pageinfo || JSON.stringify({
    'url': '',
    'title': '',
    'time': getTimeStamp()
});
localStorage.format = localStorage.format || 'png';
localStorage.imageQuality = localStorage.imageQuality || '92';
localStorage.depthScreenshot = localStorage.depthScreenshot || '1';
localStorage.fillColor = localStorage.fillColor || 'rgba(0,0,0,0)';
localStorage.quickCapture = localStorage.quickCapture || 'false';
localStorage.quickCaptureType = localStorage.quickCaptureType || 'visible';
localStorage.quickVideoCapture = localStorage.quickVideoCapture || 'false';
localStorage.quickVideoCaptureType = localStorage.quickVideoCaptureType || 'tab';
localStorage.quickVideoCaptureGithub = localStorage.quickVideoCaptureGithub || 'false';
localStorage.enableEdit = localStorage.enableEdit || 'edit';
localStorage.enableVideoEdit = localStorage.enableVideoEdit || 'done';
localStorage.quickVideoCaptureGithubWelcome = localStorage.quickVideoCaptureGithubWelcome || 'true';
localStorage.enableSaveAs = localStorage.enableSaveAs || 'true';
localStorage.saveCropPosition = localStorage.saveCropPosition || 'false';
localStorage.showContentMenu = localStorage.showContentMenu || 'true';
localStorage.autoShortUrl = localStorage.autoShortUrl || 'true';
localStorage.keepOriginalResolution = localStorage.keepOriginalResolution || 'true';
localStorage.hideFixedElements = localStorage.hideFixedElements || 'false';
localStorage.shareOnGoogle = localStorage.shareOnGoogle || 'true';
localStorage.shareOnYoutube = localStorage.shareOnYoutube || 'public';
localStorage.cropPosition = localStorage.cropPosition || JSON.stringify({
    "x": 50,
    "y": 50,
    "width": 400,
    "height": 200
});
localStorage.cropScrollPosition = localStorage.cropScrollPosition || JSON.stringify({
    "x": 50,
    "y": 50,
    "width": 400,
    "height": 200
});
localStorage.fileNamePatternScreenshot = localStorage.fileNamePatternScreenshot || 'screenshot-{domain}-{date}-{time}';
localStorage.fileNamePatternScreencast = localStorage.fileNamePatternScreencast || 'screencast-{domain}-{date}-{time}';
localStorage.timeScrollEntirePage = localStorage.timeScrollEntirePage || 0;
localStorage.strokeSize = localStorage.strokeSize || 5;
localStorage.strokeColor = localStorage.strokeColor || '#f00';
localStorage.shadow = localStorage.shadow || 'false';
localStorage.shadowBlur = localStorage.shadowBlur || 10;
localStorage.shadowColor = localStorage.shadowColor || 'rgb(0, 0, 0)';
localStorage.fontFamily = localStorage.fontFamily || 'Arial';
localStorage.fontSize = localStorage.fontSize || 35;
localStorage.googleUploadFolder = localStorage.googleUploadFolder || '{"id": "root", "title": "Main folder"}';
localStorage.disableHelper = localStorage.disableHelper || 'true';
localStorage.nimbusShare = localStorage.nimbusShare || 'false';
localStorage.showInfoPrint = localStorage.showInfoPrint || 'true';
localStorage.enableNumbers = localStorage.enableNumbers || 'false';
localStorage.videoEditorTools = localStorage.videoEditorTools || 'arrow';
localStorage.videoCameraPosition = localStorage.videoCameraPosition || JSON.stringify({
    "x": 10,
    "y": 10
});
localStorage.enableWatermark = localStorage.enableWatermark || 'false';
localStorage.fileWatermark = localStorage.fileWatermark || '';
localStorage.typeWatermark = localStorage.typeWatermark || 'image';
localStorage.positionWatermark = localStorage.positionWatermark || 'rb';
localStorage.percentWatermark = localStorage.percentWatermark || 0.5;
localStorage.alphaWatermark = localStorage.alphaWatermark || 1;
localStorage.fontWatermark = localStorage.fontWatermark || 'Times New Roman';
localStorage.sizeWatermark = localStorage.sizeWatermark || 24;
localStorage.colorWatermark = localStorage.colorWatermark || 'rgb(0, 0, 0, 1)';
localStorage.textWatermark = localStorage.textWatermark || 'Watermark';
localStorage.showNewButton = localStorage.showNewButton || 'true';
localStorage.timeEnableWatermark = localStorage.timeEnableWatermark || 'false';
localStorage.timeWatermark = localStorage.timeWatermark || 30;

// localStorage.selectedVideoCamera
// localStorage.selectedMicrophone

// if (localStorage.globalId === undefined) {
//     localStorage.globalId = (function () {
//         function S4() {
//             return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
//         }
//
//         return S4() + S4() + S4() + S4();
//     })();
// }
if (window.core.is_chrome && localStorage.fingerprint === undefined) {
    Fingerprint2.getV18({}, function(result, components) {

        localStorage.fingerprint = result;
    });
} else {
    localStorage.fingerprint = (function() {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }

        return S4() + S4() + S4() + S4();
    })();
};

if (window.core.is_linux) {
    localStorage.enableSaveAs = 'false';
}

chrome.runtime.setUninstallURL('https://nimbus.everhelper.me/screenshot-uninstall/');

chrome.storage.sync.get('nimbus_screenshot_first_install', function(data) {
    localStorage.appFirstInstall = data.nimbus_screenshot_first_install;
    if (!data.nimbus_screenshot_first_install) {
        chrome.storage.sync.set({
            'nimbus_screenshot_first_install': true
        }, function() {
            screenshot.openPage('https://nimbusweb.me/capture-install/install.php');
        });
    }
});

// if (localStorage.appFirstInstall === undefined) {
//     localStorage.appFirstInstall = 'true';
//     screenshot.openPage('http://nimbus-screenshot.everhelper.me/install.php');
// }

let manifest = chrome.runtime.getManifest();

if (localStorage.version && !localStorage.appVersion) {
    localStorage.appVersion = localStorage.version;
}

if (localStorage.format === 'jpeg') localStorage.format = 'jpg';

if (localStorage.appVersion === undefined) {
    localStorage.appVersion = manifest.version;
} else if (localStorage.appVersion !== manifest.version && localStorage.showNewButton === 'true') {
    iconService.setUpdate();

    chrome.browserAction.onClicked.addListener(function() {
        localStorage.appVersion = manifest.version;
        iconService.setDefault();
        chrome.tabs.create({
            url: 'https://nimbusweb.me/capture-install/releasecapture' + (navigator.language === 'ru' ? 'ru' : '') + (window.core.is_firefox ? '-ff' : '') + '.php',
            active: true
        });
    });
}

window.onload = function() {
    screenshot.init();
};

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === "loading" && /nimbusweb\.me\/slack\/\?code/.test(tab.url)) {
        let code = tab.url.match(/code=(.+)&/)[1];
        let client_id = '17258488439.50405596566';
        let client_secret = '55775ecb78fe5cfc10250bd0119e0fc5';
        chrome.tabs.remove(tabId);

        slack_oauth.requestToApi('oauth.access', 'client_id=' + client_id + '&client_secret=' + client_secret + '&code=' + code, function(err, oauth) {
            slack_oauth.oauth = oauth;
            localStorage.slackToken = oauth.access_token;
            slack_oauth.sendData();
        })
    }


    if ( /*changeInfo.status === "loading" && */ /everhelper\.me\/nimbus-download-image\.html\#access_token/.test(tab.url)) {
        // https://everhelper.me/#access_token=duM7xgibBQ8AAAAAAAAuxY-iIWLrqYvpmUaJa_9lSWGf_IfqBoB0hSE_YwcHIr5a&token_type=bearer&uid=388836341&account_id=dbid%3AAAB1hyx_Sq8YFtoC4c_sl52H8jeu2jNQaLg

        localStorage.access_token_dropbox = tab.url.match(/access_token=([^&]+)/)[1];
        chrome.tabs.remove(tabId);
        chrome.tabs.query({
            /*active: true, lastFocusedWindow: true*/ }, function(tabs) {
            for (let i = 0; i < tabs.length; i++) {
                chrome.tabs.sendMessage(tabs[i].id, {
                    action: 'access_dropbox'
                });
            }
        });
    }

    if ( /*changeInfo.status === "complete" && */ (/everhelper\.me\/auth-frame\/openidconnect/.test(tab.url) || /everhelper\.me\/auth\/openidconnect/.test(tab.url)) && /###EVERFAUTH:/.test(tab.title)) {
        chrome.tabs.remove(tabId);
        chrome.tabs.query({
            /*active: true, lastFocusedWindow: true*/ }, function(tabs) {
            for (let i = 0; i < tabs.length; i++) {
                chrome.tabs.sendMessage(tabs[i].id, {
                    action: 'access_nimbus'
                });
            }
        });
    }

    if ( /*changeInfo.status === "complete" && */ /accounts\.google\.com\/o\/oauth2\/approval/.test(tab.url) && /code=/.test(tab.title) && google_oauth.is_tab) {
        let code = tab.title.match(/.+?code=([\w\/\-]+)/)[1];
        let xhr = new XMLHttpRequest();
        let body = 'code=' + code +
            '&client_id=' + google_oauth.client_id +
            '&client_secret=' + google_oauth.client_secret +
            '&grant_type=authorization_code' +
            '&redirect_uri=urn:ietf:wg:oauth:2.0:oob:auto';
        xhr.open("POST", 'https://www.googleapis.com/oauth2/v4/token', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.readyState !== 4 && xhr.status !== 200) return;
            google_oauth.is_tab = false;
            let response = JSON.parse(xhr.responseText);
            console.log(response);
            if (response.access_token !== undefined && response.refresh_token !== undefined) {
                localStorage.access_token_google = response.access_token;
                localStorage.refresh_token_google = response.refresh_token;
                localStorage.expires_in_google = Date.now() + +response.expires_in * 1000;

                chrome.tabs.remove(tabId);

                if ((localStorage.quickCapture === 'true' && localStorage.enableEdit === 'google') || (localStorage.quickVideoCapture === 'true' && localStorage.enableVideoEdit === 'google')) {
                    core.setActiveTab(JSON.parse(localStorage.pageinfo));
                    // core.blobUrlToBlob(localStorage.filePatch, screenshot.automatic.send);
                } else {
                    chrome.tabs.query({
                        /*active: true, lastFocusedWindow: true*/ }, function(tabs) {
                        for (let i = 0; i < tabs.length; i++) {
                            chrome.tabs.sendMessage(tabs[i].id, {
                                operation: 'access_google'
                            });
                        }
                    });
                }
            }
        };
        xhr.onerror = function(err) {
            console.error(err);
        };
        xhr.send(body);
    }
    if ( /*changeInfo.status === "complete" && */ /accounts\.google\.com\/o\/oauth2\/approval/.test(tab.url) && /code=/.test(tab.title) && youtube_oauth.is_tab) {
        let code = tab.title.match(/.+?code=([\w\/\-]+)/)[1];
        let xhr = new XMLHttpRequest();
        let body = 'code=' + code +
            '&client_id=' + youtube_oauth.client_id +
            '&client_secret=' + youtube_oauth.client_secret +
            '&grant_type=authorization_code' +
            '&redirect_uri=urn:ietf:wg:oauth:2.0:oob:auto';
        xhr.open("POST", 'https://www.googleapis.com/oauth2/v4/token', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.readyState !== 4 && xhr.status !== 200) return;
            youtube_oauth.is_tab = false;
            let response = JSON.parse(xhr.responseText);
            console.log(response);
            if (response.access_token !== undefined && response.refresh_token !== undefined) {
                localStorage.access_token_youtube = response.access_token;
                localStorage.refresh_token_youtube = response.refresh_token;
                localStorage.expires_in_youtube = Date.now() + +response.expires_in * 1000;

                chrome.tabs.remove(tabId);

                if ((localStorage.quickVideoCapture === 'true' && localStorage.enableVideoEdit === 'youtube')) {
                    core.setActiveTab(JSON.parse(localStorage.pageinfo));
                    // core.blobUrlToBlob(localStorage.filePatch, screenshot.automatic.send);
                } else {
                    chrome.tabs.query({
                        /*active: true, lastFocusedWindow: true*/ }, function(tabs) {
                        for (let i = 0; i < tabs.length; i++) {
                            chrome.tabs.sendMessage(tabs[i].id, {
                                operation: 'access_youtube'
                            });
                        }
                    });
                }
            }
        };
        xhr.onerror = function(err) {
            console.error(err);
        };
        xhr.send(body);
    }
});