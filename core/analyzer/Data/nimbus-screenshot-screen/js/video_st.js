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
'use strict';

var isLog = true;
// var MediaStream = window.MediaStream;
// var Storage = {};
// var isChrome = true;

// if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
//     MediaStream = webkitMediaStream;
// }
//
if (typeof MediaStream !== 'undefined' && !('stop' in MediaStream.prototype)) {
    MediaStream.prototype.stop = function() {
        this.getAudioTracks().forEach(function(track) {
            track.stop();
        });

        this.getVideoTracks().forEach(function(track) {
            track.stop();
        });
    };
}
//
// if (typeof AudioContext !== 'undefined') {
//     Storage.AudioContext = AudioContext;
// } else if (typeof webkitAudioContext !== 'undefined') {
//     Storage.AudioContext = webkitAudioContext;
// }

iconService.setDefault();

var videoRecorder = (function() {
    let stream = null;
    let recorder = null;
    let socket = null;
    let file = {
        size: 0,
        chunks: [],
        blob: null,
        type: 'video',
        mimeType: 'video/webm',
        audioBitsPerSecond: +localStorage.audioBitrate,
        videoBitsPerSecond: +localStorage.videoBitrate
    };
    let user = {
        premium: null,
        notes: {
            current: 0,
            max: 0,
            max_size: 0
        }
    };

    let typeCaptureStream, typeCapture, tabSound, micSound, videoCamera, deawingTools, videoSize, audioBitrate, videoBitrate, videoFps, audioPlayer, vS, mS;
    let countdown = 0;

    let timer = null;
    let activeTab = null;

    let isRecording = false;
    let timeStart = null;
    let timePause = null;

    function mediaAccess(data) {
        capture({
            type: data.typeCapture,
            media_access: true
        });
    }

    function getFileName() {
        let s = localStorage.fileNamePatternScreencast;
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

        return s.replace(/[\*\|\\\:\"\<\>\?\/#]+/ig, '-') + '.webm';
    }

    function notesCreate(data) {
        console.log('start create notes');
        if (localStorage.workspaceSelect === 'false') {
            nimbusShare.server.workspaces.getAll(function(res) {
                for (let i = 0, len = res.body.workspaces.length; len > i; i++) {
                    let workspace = res.body.workspaces[i];
                    if (workspace.isDefault) {
                        localStorage.workspaceSelect = workspace.globalId;
                        notesCreate(data);
                        break;
                    }
                }
            });
            return;
        }

        const notesId = nimbusShare.notesGenerateId();
        nimbusShare.send({
            "action": "notes:update",
            "body": {
                "workspaceId": localStorage.workspaceSelect,
                "store": {
                    "notes": [{
                        "global_id": notesId,
                        "parent_id": 'default',
                        "type": "note",
                        "role": "video",
                        "title": data.filename,
                        "tags": ["screens", "chrome"],
                        "attachements": [{
                            "global_id": nimbusShare.notesGenerateId(),
                            "type": "video",
                            "role": "video",
                            "tempname": data.name
                        }]
                    }]
                }
            }
        }, function() {
            console.log('create notes', arguments);

            if (localStorage.privateUploadVideo === 'true') {
                console.log('open private page', 'https://nimbusweb.me/ws/' + localStorage.workspaceSelect + '/recent/note/' + notesId);
                screenshot.openPage('https://nimbusweb.me/ws/' + localStorage.workspaceSelect + '/recent/note/' + notesId);
            } else {
                nimbusShare.send({
                    "action": "notes:share",
                    "body": {
                        "workspaceId": localStorage.workspaceSelect,
                        "global_id": notesId
                    }
                }, function(msg) {
                    console.log('open share page', msg.body[notesId]);
                    screenshot.openPage(msg.body[notesId]);
                }, function(error) {
                    console.log(error);
                });
            }
        });
    }

    function createSocket(cb) {
        socket = new WebSocket('wss://stream-uploading.everhelper.me');

        socket.onopen = function() {
            console.info("Connected to server ...");
        };

        socket.onmessage = function(event) {
            let msg = JSON.parse(event.data);

            switch (msg.event) {
                case "reject":
                    console.error('socket reject', msg);
                    break;
                case "ready":
                    console.info('socket ready');
                    cb && cb();
                    break;
                case "progress":
                    console.info('socket progress', msg);
                    break;
                case "response":
                    console.info('Response', msg.data);
                    notesCreate(msg.data);
                    break;
            }
        };

        socket.onclose = function(event) {
            console.info('socket onclose', event);
            if (getState() !== 'inactive') stopRecord();
        };

        socket.onerror = function(error) {
            console.error("socket error", error);
            if (getState() !== 'inactive') stopRecord();
        };
    }

    function createMediaRecorder() {
        recorder = new MediaRecorder(stream, {
            type: file.type,
            mimeType: file.mimeType,
            audioBitsPerSecond: file.audioBitrate,
            videoBitsPerSecond: file.videoBitrate
        });

        recorder.ondataavailable = function(e) {
            console.info('Uploading / Save chunks', e.data)

            file.chunks.push(e.data);

            if (typeCaptureStream) {
                let blob = new Blob(file.chunks, {
                    'type': file.mimeType
                });

                console.log('current', blob.size, 'max', user.notes.max_size);

                if (blob.size > user.notes.max_size || user.notes.current + blob.size > user.notes.max) {
                    stopRecord();
                } else {
                    socket.send(e.data);
                }
            }
        };

        recorder.onstop = function(e) {
            console.info("recorder stop", e);

            if (typeCaptureStream) {
                socket.send(JSON.stringify({
                    event: 'finish'
                }));
            } else {
                sendPage(new Blob(file.chunks, {
                    'type': file.mimeType
                }))
            }
            file.chunks = [];
        };

        if (typeCaptureStream) {
            socket.send(JSON.stringify({
                event: 'meta',
                name: getFileName(),
                type: file.mimeType
            }));
        }
    }

    function startRecord(videoStream, micStream) {
        if (isLog) console.log('startRecord', arguments);

        vS = videoStream;
        mS = micStream;

        if (typeCapture !== 'camera') {
            injectionCursor();
            injectionVideoPanel();
            injectionWatermarkVideo();
        }

        if (typeCapture === 'tab' || typeCapture === 'camera') {
            injectionWebCamera();
        }

        stream = new MediaStream(videoStream);

        stream.onended = function() {
            console.info("screen stream stopped externally")
        };
        // stream.getVideoTracks()[0].onended = function () {
        //     stream && stream.onended && stream.onended()
        // };

        if (micStream) {
            let mixedAudioStream = getMixedAudioStream([micStream, videoStream]);
            mixedAudioStream.getAudioTracks().forEach(function(audioTrack) {
                stream.addTrack(audioTrack);
            });
        }

        console.info('stream', stream);
        screenshot.setScreenName(function() {
            if (typeCaptureStream) {
                // injectionStream();

                createSocket(function() {
                    createMediaRecorder();

                    recorder.start(1000);
                    // timeStart = Date.now();
                    // timerRun()
                });
            } else {
                createMediaRecorder();

                recorder.start();

                // timerRun()
            }
        });
        timeStart = Date.now();
        iconService.setRec();
    }

    function preRecord(streamVideo) {
        if (isLog) console.log('preRecord', arguments, 'micSound', micSound);
        if (chrome.runtime.lastError) {
            if (/activeTab/.test(chrome.runtime.lastError.message)) {
                isRecording = false;
                alert(chrome.i18n.getMessage('notificationErrorActiveTab'));
            }
            console.error(chrome.runtime.lastError.message);
        } else {
            streamVideo.onended = function() {
                streamVideo.onended = function() {};

                console.log('stream.onended');
                stopRecord()
            };

            streamVideo.getVideoTracks()[0].onended = function() {
                if (streamVideo && streamVideo.onended) {
                    streamVideo.onended();
                }
            };

            if (micSound) {
                const constraints = {
                    audio: {
                        deviceId: localStorage.selectedMicrophone ? {
                            exact: localStorage.selectedMicrophone
                        } : undefined
                    }
                };
                window.navigator.getUserMedia(constraints, function(streamAudio) {
                    startRecord(streamVideo, streamAudio);
                }, function(err) {
                    console.error('not access mic', err);
                    startRecord(streamVideo);
                })
            } else {
                startRecord(streamVideo);
            }

            if (tabSound) {
                audioPlayer = new Audio();
                audioPlayer.srcObject = stream;
                audioPlayer.volume = 1;
                audioPlayer.play();
            }
        }
    }

    function countdownRun(cb) {
        (function() {
            function time() {
                if (countdown > 0) {
                    iconService.showBadge(countdown);
                    countdown--;
                    timer = setTimeout(time, 1000);
                } else {
                    iconService.setDefault();
                    timer = null;
                    cb && cb();
                }
            }

            time();
        })()
    }

    function captureTab() {
        if (isLog) console.log('captureTab', arguments);

        chrome.tabCapture.capture({
            audio: tabSound,
            video: true,
            videoConstraints: {
                mandatory: {
                    chromeMediaSource: 'tab',
                    maxFrameRate: videoFps,
                    maxWidth: typeof videoSize !== 'object' ? activeTab.width : videoSize.width,
                    maxHeight: typeof videoSize !== 'object' ? activeTab.height : videoSize.height
                }
            }
        }, preRecord);
    }

    function captureCamera() {
        if (isLog) console.log('captureCamera', arguments);
        window.navigator.getUserMedia({
            video: {
                width: 1280,
                height: 720,
                deviceId: localStorage.selectedVideoCamera ? {
                    exact: localStorage.selectedVideoCamera
                } : undefined
            }
        }, preRecord, console.log);
    }

    function captureDesktop() {
        if (isLog) console.log('captureDesktop', arguments);
        chrome.desktopCapture.chooseDesktopMedia(["screen", "window", "audio"], function(streamId, option) {
            if (!streamId) {
                isRecording = false;
            } else {
                let constraints = {
                    video: {
                        mandatory: {
                            chromeMediaSource: 'desktop',
                            chromeMediaSourceId: streamId,
                            maxFrameRate: videoFps,
                            maxWidth: typeof videoSize !== 'object' ? window.screen.width : videoSize.width,
                            maxHeight: typeof videoSize !== 'object' ? window.screen.height : videoSize.height
                        }
                    }
                };

                if (option.canRequestAudioTrack) {
                    constraints.audio = {
                        mandatory: {
                            chromeMediaSource: 'desktop',
                            chromeMediaSourceId: streamId
                        }
                    }
                }
                countdownRun(function() {
                    window.navigator.getUserMedia(constraints, preRecord, console.error);
                })
            }
        });
    }

    function capture(param) {
        if (isLog) console.log('capture', arguments, 'typeCaptureStream', localStorage.typeCaptureStream);
        if (isRecording) return;
        isRecording = true;

        localStorage.typeVideoCapture = typeCapture = param.type || 'tab';
        typeCaptureStream = localStorage.typeCaptureStream === 'true';
        countdown = +localStorage.videoCountdown;
        videoCamera = localStorage.videoCamera === 'true';
        micSound = localStorage.micSound === 'true';
        tabSound = localStorage.tabSound === 'true';
        deawingTools = localStorage.deawingTools === 'true';
        videoSize = localStorage.videoSize === 'auto';
        audioBitrate = +localStorage.audioBitrate;
        videoBitrate = +localStorage.videoBitrate;
        videoFps = +localStorage.videoFps;

        if (typeCaptureStream && !param.auth && !param.media_access) {
            isRecording = false;
            nimbusShare.server.user.authState(function(res) {
                console.log('authState', res);

                if (res.errorCode === 0 && res.body && res.body.authorized) {
                    nimbusShare.server.user.info(function(info) {
                        console.log('user info', info);
                        if (info.errorCode !== 0) return;

                        user.premium = !!info.body.premium.active;
                        user.notes.current = +info.body.usage.notes.current;
                        user.notes.max = +info.body.usage.notes.max;
                        user.notes.max_size = +info.body.limits.NOTES_MAX_ATTACHMENT_SIZE;

                        if (user.notes.current + user.notes.max_size > user.notes.max) {
                            screenshot.insertPopup('nsc_popup_limitfree_open');
                        } else {
                            capture({
                                type: typeCapture,
                                auth: true
                            });
                        }
                    });
                } else {
                    screenshot.insertPopup('nsc_popup_login_open');
                }
            });
            return;
        }

        if (!user.premium && typeCaptureStream) {
            localStorage.videoSize = 'hd';
            audioBitrate = 32000;
            videoBitrate = 1000000;
            videoFps = 24;
        }

        switch (localStorage.videoSize) {
            case '4k':
                videoSize = {
                    width: 3840,
                    height: 2160
                };
                break;
            case 'full-hd':
                videoSize = {
                    width: 1920,
                    height: 1080
                };
                break;
            case 'hd':
                videoSize = {
                    width: 1280,
                    height: 720
                };
                break;
        }

        if (typeCapture === 'desktop' && typeCapture === 'camera') {
            tabSound = false;
            deawingTools = false;
            videoCamera = false;
        }

        if (isLog) console.log('typeCapture', typeCapture, 'tabSound', tabSound, 'micSound', micSound, 'videoCamera', videoCamera, 'deawingTools', deawingTools);

        if (typeCapture === 'tab' || typeCapture === 'camera') {
            chrome.tabs.query({
                active: true,
                lastFocusedWindow: true
            }, function(tabs) {
                if (!activeTab && (!tabs.length || /^chrome/.test(tabs[0].url))) {
                    isRecording = false;
                    alert(chrome.i18n.getMessage('notificationErrorChromeTab'));
                } else {
                    if (!activeTab) activeTab = tabs[0];
                    if ((micSound || videoCamera || typeCapture === 'camera') && !param.media_access) {
                        isRecording = false;
                        let constraints = {};
                        if (micSound) constraints.audio = {
                            deviceId: localStorage.selectedMicrophone ? {
                                exact: localStorage.selectedMicrophone
                            } : undefined
                        };
                        if (videoCamera || typeCapture === 'camera') constraints.video = {
                            deviceId: localStorage.selectedVideoCamera ? {
                                exact: localStorage.selectedVideoCamera
                            } : undefined
                        };

                        if (isLog) console.log('getUserMedia constraints', constraints);

                        window.navigator.getUserMedia(constraints, function() {
                            capture({
                                type: typeCapture,
                                media_access: true
                            });
                        }, function() {
                            if (micSound && (videoCamera || typeCapture === 'camera')) {
                                chrome.tabs.create({
                                    url: 'media_access/camera_and_mic.html?' + typeCapture
                                });
                            } else if (videoCamera || typeCapture === 'camera') {
                                chrome.tabs.create({
                                    url: 'media_access/camera.html?' + typeCapture
                                });
                            } else {
                                chrome.tabs.create({
                                    url: 'media_access/mic.html?' + typeCapture
                                });
                            }
                        });
                    } else if (countdown > 0 && !param.not_timer) {
                        isRecording = false;
                        chrome.tabs.update(activeTab.id, {
                            active: true
                        }, function() {
                            timerContent.set(countdown, typeCapture)
                        });
                    } else {
                        if (typeCapture === 'tab') {
                            chrome.tabs.update(activeTab.id, {
                                active: true
                            }, captureTab)
                        } else {
                            chrome.tabs.update(activeTab.id, {
                                active: true
                            }, captureCamera)
                        }
                    }
                }
            });
        } else {
            if (micSound && !param.media_access) {
                isRecording = false;
                let constraints = {};
                if (micSound) constraints.audio = {
                    deviceId: localStorage.selectedMicrophone ? {
                        exact: localStorage.selectedMicrophone
                    } : undefined
                };
                if (isLog) console.log('getUserMedia constraints', constraints);
                window.navigator.getUserMedia(constraints, function() {
                    capture({
                        type: typeCapture,
                        media_access: true
                    });
                }, function() {
                    chrome.tabs.create({
                        url: 'media_access/mic.html?' + typeCapture
                    });
                });
            } else {
                captureDesktop();
            }
        }
    }

    function sendPage(blob) {
        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
        window.requestFileSystem(window.PERSISTENT, 10 * 1024 * 1024 * 1024, function(fs) {
                let truncated = false;
                fs.root.getFile('video.webm', {
                    create: true
                }, function(fileEntry) {
                    fileEntry.createWriter(function(writer) {
                        writer.onwriteend = function(progress) {
                            if (!truncated) {
                                truncated = true;
                                this.truncate(this.position);
                                return;
                            }
                            console.log("Write completed", progress);
                            screenshot.createEditPage('video');
                        };

                        writer.onerror = function(err) {
                            console.error("Write failed", err);
                        };
                        writer.write(blob);
                    }, function(err) {
                        console.error("Create Writer failed", err);
                    });
                }, function(err) {
                    console.error("Get File failed", err);
                });
            },
            function(err) {
                console.error("File System failed", err);
            }
        );
    }

    function stopRecord() {
        // if (getState() !== 'inactive') return;

        if (isLog) console.log('stopRecord', stream, recorder);

        try {
            vS.stop();
            mS.stop();
        } catch (e) {}
        // stream.getTracks().forEach(track => track.stop());
        stream.stop();
        recorder.stop();

        if (timer) {
            clearInterval(timer);
            countdown = 0;
            timer = null;
        }

        audioPlayer = undefined;
        timeStart = null;
        activeTab = null;
        isRecording = false;
        iconService.setDefault();
        screenshot.changeVideoButton();

        chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                operation: 'status_video',
                status: getStatus(),
                state: getState()
            });
        });
    }

    function pauseRecord() {
        if (isLog) console.log('pauseRecord', arguments);

        if (recorder.state === 'recording') {
            timePause = Date.now();
            recorder.pauseRecording();
            iconService.setPause();
        } else {
            timePause = null;
            recorder.resumeRecording();
            iconService.setRec();
        }
        chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                operation: 'status_video',
                status: getStatus(),
                state: getState()
            });
        });
    }

    function getState() {
        return (recorder && recorder.state);
    }

    function getStatus() {
        return timer || (stream && !!stream.active);
    }

    function getMixedAudioStream(arrayOfAudioStreams) {
        let audioContext = new AudioContext();

        let audioSources = [];

        let gainNode = audioContext.createGain();
        gainNode.connect(audioContext.destination);
        gainNode.gain.value = 0;

        let audioTracksLength = 0;
        arrayOfAudioStreams.forEach(function(stream) {
            if (!stream.getAudioTracks().length) {
                return;
            }

            audioTracksLength++;

            let audioSource = audioContext.createMediaStreamSource(stream);
            audioSource.connect(gainNode);
            audioSources.push(audioSource);
        });

        if (!audioTracksLength) {
            return;
        }

        let audioDestination = audioContext.createMediaStreamDestination();
        audioSources.forEach(function(audioSource) {
            audioSource.connect(audioDestination);
        });
        return audioDestination.stream;
    }

    function getTimeRecord() {
        const date = Date.now();
        timeStart = timeStart + (timePause ? date - timePause : 0);
        timePause = timePause ? date : null;
        return timeStart ? (date - timeStart) : 0;
    }

    function injectionCursor() {
        // if (localStorage.cursorAnimate !== 'true') return;
        // if (!activeTab) return;
        // chrome.tabs.insertCSS(activeTab.id, {file: "css/new-style.min.css"});
        // chrome.tabs.executeScript(activeTab.id, {file: "js/content-cursor.js"}, function () {
        //     chrome.tabs.sendMessage(activeTab.id, {cursor: true, cursorAnimate: localStorage.cursorAnimate === 'true'}, function () {
        //         activeTab.injectionCursor = true;
        //     });
        // });
    }

    // function injectionStream() {
    //     if (!activeTab) return;
    //     chrome.tabs.sendMessage(activeTab.id, {operation: 'nsc_stream_panel_is'}, function (status) {
    //         if (!status) {
    //             chrome.tabs.insertCSS(activeTab.id, {file: "css/content-stream.min.css"});
    //             chrome.tabs.executeScript(activeTab.id, {file: "js/lib/jquery-3.3.1.js"}, function () {
    //                 chrome.tabs.executeScript(activeTab.id, {file: "js/content-stream.js"});
    //             });
    //         }
    //     });
    // }

    function injectionVideoPanel() {
        if (!activeTab) return;
        chrome.tabs.sendMessage(activeTab.id, {
            operation: 'nsc_video_panel_is'
        }, function(status) {
            if (!status) {
                chrome.tabs.insertCSS(activeTab.id, {
                    file: "css/flex.min.css"
                });
                chrome.tabs.insertCSS(activeTab.id, {
                    file: "css/icons.min.css"
                });
                chrome.tabs.insertCSS(activeTab.id, {
                    file: "css/video-panel.min.css"
                });
                chrome.tabs.executeScript(activeTab.id, {
                    file: "js/lib/jquery-3.3.1.js"
                }, function() {
                    chrome.tabs.executeScript(activeTab.id, {
                        file: "js/video-editor.js"
                    }, function() {
                        chrome.tabs.executeScript(activeTab.id, {
                            code: "var deawingTools = " + deawingTools + ", deleteDrawing = " + +localStorage.deleteDrawing + ", videoEditorTools='" + localStorage.videoEditorTools + "';"
                        }, function() {
                            chrome.tabs.executeScript(activeTab.id, {
                                file: "js/video-panel.js"
                            });
                        });
                    });
                });
            }
        });
    }

    function injectionWebCamera() {
        if (!activeTab) return;

        chrome.tabs.sendMessage(activeTab.id, {
            operation: 'nsc_web_camera_is'
        }, function(status) {
            if (!status) {
                chrome.tabs.insertCSS(activeTab.id, {
                    file: "css/flex.min.css"
                });
                chrome.tabs.insertCSS(activeTab.id, {
                    file: "css/icons.min.css"
                });
                chrome.tabs.insertCSS(activeTab.id, {
                    file: "css/video-panel.min.css"
                });
                chrome.tabs.executeScript(activeTab.id, {
                    file: "js/lib/jquery-3.3.1.js"
                }, function() {
                    chrome.tabs.executeScript(activeTab.id, {
                        code: "var videoCameraPosition = " + localStorage.videoCameraPosition + ", selectedVideoCamera = " + localStorage.selectedVideoCamera + ", typeCapture='" + typeCapture + "', videoCamera=" + videoCamera + ";"
                    }, function() {
                        chrome.tabs.executeScript(activeTab.id, {
                            file: "js/content-camera.js"
                        });
                    });
                });
            }
        });
    }

    function injectionWatermarkVideo() {
        console.log('injectionWatermarkVideo', activeTab)
        if (!activeTab) return;

        let checkAndSend = function() {
            core.checkWaterMark(function(check) {
                console.log('checkWaterMark', check);
                if (check) {
                    core.getWaterMark();

                    window.setTimeout(function() {
                        core.getWaterMark(function(watermark) {
                            console.log('getWaterMark', watermark);
                            core.sendMessage({
                                operation: 'set_watermark_video',
                                dataUrl: watermark.toDataURL(),
                                position: localStorage.positionWatermark,
                                timeEnableWatermark: localStorage.timeEnableWatermark === 'true',
                                timeWatermark: localStorage.timeWatermark
                            })
                        })
                    }, 0);
                }
            })
        };
        chrome.tabs.executeScript(activeTab.id, {
            file: "js/lib/jquery-3.3.1.js"
        }, function() {
            chrome.tabs.executeScript(activeTab.id, {
                file: "js/content-watermark.js"
            }, checkAndSend);
        });
    }

    chrome.tabs.onUpdated.addListener(function(tabId, info) {
        chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            if (info.status === "loading" && tabs[0].id && tabs[0].url && activeTab &&
                tabs[0].id === tabId && activeTab.id === tabId && !/^chrome/.test(tabs[0].url)) {
                injectionCursor();
                // injectionStream();
                injectionVideoPanel();
                injectionWebCamera();
                injectionWatermarkVideo();
            }
        });
    });

    chrome.tabs.onRemoved.addListener(function(tabId, info) {
        if (activeTab && activeTab.id === tabId) {
            stopRecord();
        }
    });

    return {
        capture: capture,
        captureTab: captureTab,
        captureDesktop: captureDesktop,
        stopRecord: stopRecord,
        pauseRecord: pauseRecord,
        getStatus: getStatus,
        getState: getState,
        getTimeRecord: getTimeRecord,
        mediaAccess: mediaAccess
    }
})();