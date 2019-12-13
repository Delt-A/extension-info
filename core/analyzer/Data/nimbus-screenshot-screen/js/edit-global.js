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

// window.___gcfg = {
//     parsetags: 'explicit'
// };

let nimbus_screen = {
    canvasManager: null,
    canvasDone: document.createElement('canvas'),
    pdf: null,
    dom: {},
    path: 'filesystem:chrome-extension://' + chrome.i18n.getMessage("@@extension_id") + '/persistent/',
    info: {
        page: localStorage.pageinfo,
        zoom: window.devicePixelRatio || 1,
        file: {
            format: localStorage.format,
            patch: localStorage.filePatch,
            origin_patch: localStorage.filePatch,
            last_video_name: 'video',
            last_video_format: 'webm',
            last_convert_format: '',
            last_convert_name: '',
            data: null,
            blob: null,
            size: 0
        },
        first_canvas_width: null,
        first_canvas_height: null
    },
    getLocationParam: function() {
        const p = window.location.href.replace('#', '').match(/[&|?](\w+)$/);
        return (p && p[1]) || '';
    },
    kbToMb: function(size, n) {
        return ((size) / 1024 / 1024).toFixed(n || 0) + ' MB';
    },
    urlToBlob: function(url, cb) {
        function errorHandler(e) {
            console.error(e);
        }

        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
        window.requestFileSystem(window.PERSISTENT, 10 * 1024 * 1024 * 1024, function(fs) {
            fs.root.getFile(url.replace(nacl_module.path, ''), {}, function(fileEntry) {
                fileEntry.file(function(file) {
                    let reader = new FileReader();
                    reader.onloadend = function(e) {
                        cb(new Blob([new Uint8Array(reader.result)]));
                    };
                    reader.readAsArrayBuffer(file);
                }, errorHandler);
            });
        }, errorHandler);
    },
    dataURLToFile: function(dataURL, name, cb) {
        function errorHandler(e) {
            console.error(e);
        }

        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
        window.requestFileSystem(window.PERSISTENT, 10 * 1024 * 1024 * 1024, function(fs) {

            fs.root.getFile(name, {
                create: true
            }, function(fileEntry) {
                fileEntry.createWriter(function(fileWriter) {
                    fileWriter.onwriteend = function(e) {
                        cb && cb()
                    };

                    fileWriter.onerror = function(e) {
                        console.log('Write failed: ' + e.toString());
                    };

                    let blob = nimbus_screen.dataURLtoBlob(dataURL);
                    fileWriter.write(blob);
                }, errorHandler);
            }, errorHandler);
        }, errorHandler);
    },
    dataURLtoBlob: function(dataURL) {
        let arr = dataURL.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {
            type: mime
        });
    },
    blobTodataURL: function(blob, cb) {
        let a = new FileReader();
        a.onload = function(e) {
            cb && cb(e.target.result);
        };
        a.readAsDataURL(blob);
    },
    viewClassRoomButton: function(url) {
        if (window.core.is_chrome) {
            gapi.sharetoclassroom.render("nsc_share_classroom", {
                "size": "24",
                "url": url
            });
        }
    },
    viewFileSize: function() {
        let k = (nimbus_screen.info.file.size / 1024).toFixed(2);
        if (k < 1024) {
            k = k.toString().replace(",", ".").replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,") + " KB";
        } else {
            k = (k / 1024).toFixed(2);
            k = k.toString().replace(",", ".").replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,") + " MB";
        }
        $('#nsc_indicator_weight').text(k);
    },
    viewFileFormat: function() {
        $('#nsc_indicator_format').text(nimbus_screen.info.file.format.toLowerCase());
    },
    viewFileResolution: function() {
        if (nimbus_screen.info.file.format === 'webm' || nimbus_screen.info.file.format === 'mp4') {
            new FFMPEG_CONVERT().info(nimbus_screen.info.file.patch, function(info) {
                if (info.quality) {
                    nimbus_screen.info.file.width = info.quality.width;
                    nimbus_screen.info.file.height = info.quality.height;
                    $('#nsc_indicator_size').text(info.quality.width + ' x ' + info.quality.height);

                    let search_key = null;
                    for (let key in nacl_module.video_resolution) {
                        let video_resolution = nacl_module.video_resolution[key];

                        if (video_resolution.width > info.quality.width) {
                            search_key = key - 1 > 0 ? key - 1 : 1;
                            break;
                        }
                    }
                    if (search_key) {
                        $('#nsc_video_convert input[name=size]').val(search_key).trigger('change');
                    }
                }
            });
        } else {
            let img = new Image();
            img.onload = function() {
                $('#nsc_indicator_size').text(this.width + ' x ' + this.height);
            };
            img.src = nimbus_screen.info.file.patch;
        }
    },
    viewFilePreview: function() {
        $('#nsc_screen_name').val(nimbus_screen.getFileName());
        $('#nsc_done_youtube_name').val(nimbus_screen.getFileName('format'));

        let $nsc_stream_video = $('#nsc_stream_video');
        let $nsc_preview_img = $('#nsc_preview_img');
        let width = 400;

        if (nimbus_screen.info.file.format === 'webm' || nimbus_screen.info.file.format === 'mp4') {
            $nsc_stream_video
                .attr('src', nimbus_screen.info.file.patch + '?' + Date.now())[0].oncanplay = function() {
                    if ($nsc_stream_video.width() > width) width = $nsc_stream_video.width();
                    $nsc_stream_video.show();
                    nimbus_screen.dom.$nsc_indicator.css({
                        'max-width': width
                    }).show();
                    nimbus_screen.dom.$preview_loading.hide();
                };
        } else {
            $nsc_preview_img
                .attr('src', nimbus_screen.info.file.patch)
                .on("load", function() {
                    if ($nsc_preview_img.width() > width) width = $nsc_preview_img.width();
                    $nsc_preview_img.show();
                    nimbus_screen.dom.$nsc_indicator.css({
                        'max-width': width
                    }).show();
                    nimbus_screen.dom.$preview_loading.hide();
                }).off('click').on('click', function() {
                    chrome.runtime.sendMessage({
                        operation: 'open_page',
                        'url': nimbus_screen.info.file.patch
                    });
                });

            // if (localStorage.enableSaveAs === 'true') {
            //     $("#nsc_button_save_image").flash(
            //         {
            //             src: 'chrome-extension://' + chrome.i18n.getMessage('@@extension_id') + '/swf/CreateSaveWindow.swf',
            //             width: 100,
            //             height: 36,
            //             flashvars: {
            //                 data: nimbus_screen.info.file.data.split(",")[1].replace(/\+/g, "%2b"),
            //                 dataType: 'base64',
            //                 filename: nimbus_screen.getFileName('format'),
            //                 downloadImage: 'chrome-extension://' + chrome.i18n.getMessage('@@extension_id') + '/images/pattern.png',
            //                 width: 100,
            //                 height: 36
            //             }
            //         },
            //         {version: 10}
            //     );
            // }
        }

        nimbus_screen.viewFileResolution();
        nimbus_screen.viewFileFormat();
        nimbus_screen.viewFileSize();
    },
    viewDone: function() {
        const done_height = $(window).innerHeight() - 215 - 120 - 65;
        $('.nsc-done-content').height((done_height < 500 ? 500 : done_height));

        nimbus_screen.dom.$nsc_done_page.show();
        nimbus_screen.dom.$nsc_redactor_page.hide();

        dropboxShare.setUploadFolderTooltip();
        googleShare.setUploadFolderTooltip();

        slackShare.init();
        nimbusShare.init();
        nimbus_screen.rate_popup.init();
        nimbus_screen.account_popup.init();

        nimbusShare.checkPremium(function(err, premium) {
            if (!err && premium.capture && nimbus_screen.getLocationParam() === 'video' && window.core.is_chrome) {
                $('#nsc_manage_devices').show();
                $('#nsc_increase_limit').show();
            }
            if (err || !premium.capture) {
                $('#nsc_upgrade_nimbus_pro').show();
            }
        }, false);

        if (nimbus_screen.getLocationParam() === 'video' && window.core.is_chrome) {
            $('.nsc-trigger-panel-container.save-from-disk').hide();
            $('#nsc_button_slack').hide();
            $('#nsc_button_print').hide();
            $('#nsc_button_back').hide();

            $('#nsc_button_save_video').show();
            nimbus_screen.dom.$app_title.text(chrome.i18n.getMessage("nimbusSaveScreencast"));
            nimbus_screen.dom.$nsc_indicator.addClass('video');
            nimbus_screen.dom.$preview_loading.show().find('[data-i18n]').text(chrome.i18n.getMessage('labelPreviewLoading'));
            localStorage.filePatch = nimbus_screen.path + 'video.webm';

            nacl_module.init(function() {
                nimbus_screen.blobTodataURL(nimbus_screen.info.file.blob, function(dataURL) {
                    nimbus_screen.info.file.data = dataURL;

                    chrome.runtime.sendMessage({
                        operation: 'get_quick_capture'
                    }, function(res) {
                        if (res.quick_video_capture !== 'false') {
                            switch (res.enable_video_edit) {
                                case 'edit':
                                    $('#nsc_video_convert button[name=editor]').click();
                                    break;
                                case 'nimbus':
                                    $('#nsc_button_nimbus').click();
                                    break;
                                case 'google':
                                    $('#nsc_button_google_drive').click();
                                    break;
                                case 'dropbox':
                                    $('#nsc_button_dropbox').click();
                                    break;
                                case 'youtube':
                                    $('#nsc_button_youtube').click();
                                    break;
                                case 'save':
                                    $('#nsc_button_save_video').click();
                                    break;
                            }
                        }
                    });

                    nimbus_screen.viewFilePreview();
                });
            }, function(text) {
                nimbus_screen.dom.$preview_loading.find('[data-i18n]').text(text);
            });
        } else {
            $('#nsc_button_youtube').hide();
            $('#nsc_preview_img').hide();
            $('#nsc_button_save_video').hide();

            nimbus_screen.dom.$app_title.text(chrome.i18n.getMessage("nimbusSaveScreenshot"));
            nimbus_screen.dom.$nsc_indicator.addClass('screen');
            nimbus_screen.dom.$preview_loading.show().find('[data-i18n]').text(chrome.i18n.getMessage('labelPreviewLoading'));

            nimbus_screen.createCanvasDone()
        }

        if (localStorage.getItem('environmentInfo') === 'true') $('#nsc_environment_info').prop('checked', true).trigger('change');

        $('#nsc_screen_name').val(nimbus_screen.getFileName());
        $('#nsc_done_youtube_name').val(nimbus_screen.getFileName('format'));

        if (localStorage.slackPanel === 'true' && nimbus_screen.getLocationParam() !== 'video') {
            chrome.runtime.sendMessage({
                operation: 'get_slack_data'
            });
            //     chrome.runtime.sendMessage({operation: 'get_slack_data'}, function (data) {
            //         if (data) {
            //             slackShare.data = data;
            //             slackShare.init();
            //             nimbus_screen.togglePanel('slack');
            //         }
            //         if (nimbus_screen.getLocationParam() === 'slack') $('#nsc_button_slack').click();
            //     });
        }

        if (localStorage.youtubePanel === 'true' && nimbus_screen.getLocationParam() === 'video') youtubeShare.refreshToken('panel');

        if (window.core.language === 'ru') {
            $('#nsc_link_twitter').hide();
            $('#nsc_link_facebook').hide();
            $('.nsc-heading-actions').append('<span><a href="https://nimbusweb.co/jobs.php" target="_blank"><b>Мы ищем таланты!</b></a></span>')
        }
    },
    copyTextToClipboard: function(text) {
        let element = document.createElement("iframe");
        element.src = chrome.runtime.getURL("blank.html");
        element.style.opacity = "0";
        element.style.width = "1px";
        element.style.height = "1px";
        element.addEventListener("load", function() {
            try {
                let doc = element.contentDocument;
                let el = doc.createElement("textarea");
                doc.body.appendChild(el);
                el.value = text;
                el.select();
                let copied = doc.execCommand("copy");
                element.remove();
                if (copied) {
                    $.ambiance({
                        message: chrome.i18n.getMessage("notificationUrlCopied")
                    });
                }
            } finally {
                element.remove();
            }
        });
        document.body.appendChild(element);
    },
    getFileName: function(is_format) {
        let is_video = (nimbus_screen.info.file.format === 'webm' || nimbus_screen.info.file.format === 'mp4' || nimbus_screen.info.file.format === 'gif');
        let s = is_video ? localStorage.fileNamePatternScreencast : localStorage.fileNamePatternScreenshot;
        let info = JSON.parse(nimbus_screen.info.page);
        let url = document.createElement('a');
        url.href = info.url || '';
        s = s.replace(/\{url}/, info.url || '')
            .replace(/\{title}/, info.title || '')
            .replace(/\{domain}/, url.host || '')
            .replace(/\{date}/, info.time.split(' ')[0] || '')
            .replace(/\{time}/, info.time.split(' ')[1] || '')
            .replace(/\{ms}/, info.time.split(' ')[2] || '')
            .replace(/\{timestamp}/, info.time.split(' ')[3] || '');

        return s.replace(/[\*\|\\\:\"\<\>\?\/#]+/ig, '_') + (is_format ? '.' + nimbus_screen.info.file.format : '');
    },
    getEditCanvasSize: function() {
        let width = nimbus_screen.dom.$edit_canvas.width();
        let height = nimbus_screen.dom.$edit_canvas.height();
        if (nimbus_screen.info.first_canvas_width == null) {
            nimbus_screen.info.first_canvas_width = width;
        }
        if (nimbus_screen.info.first_canvas_height == null) {
            nimbus_screen.info.first_canvas_height = height;
        }

        return {
            w: width,
            h: height,
            fW: nimbus_screen.info.first_canvas_width,
            fH: nimbus_screen.info.first_canvas_height
        };
    },
    setImageToRedactor: function(dataURL, cb) {
        nimbus_screen.canvasManager.undoAll();
        nimbus_screen.canvasManager.loadBackgroundImage(dataURL, function() {
            $('#nsc_drop_file').hide();
            $('#nsc_canvas').show();
            // $(document).tooltip().tooltip("destroy");
            cb && cb()
        });
    },
    setWaterMark: function(enable, cb) {
        $('#nsc_enable_watermark').prop("checked", enable);

        let canvas = nimbus_screen.canvasDone;
        if (nimbus_screen.canvasManager) canvas = nimbus_screen.canvasManager.getCanvas().fon.canvas;

        core.checkWaterMark(function(check) {
            nimbusShare.checkPremium(function(err, premium) {
                if (err || !premium.capture) enable = true;

                if (!enable || !check) {
                    if (nimbus_screen.canvasManager) {
                        nimbus_screen.canvasManager.setWaterMark();
                        return cb && cb();
                    } else {
                        let screen = new Image();
                        screen.onload = function() {
                            nimbus_screen.canvasDone.getContext('2d').drawImage(screen, 0, 0);
                            return cb && cb();
                        };
                        screen.src = nimbus_screen.info.file.origin_patch;
                    }
                } else {
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
                        if (nimbus_screen.canvasManager) {
                            nimbus_screen.canvasManager.setWaterMark(watermark.toDataURL(), {
                                x: x,
                                y: y,
                                width: watermark.width,
                                height: watermark.height
                            }, function() {
                                return cb && cb();
                            });
                        } else {
                            let screen = new Image();
                            screen.onload = function() {
                                nimbus_screen.canvasDone.width = screen.width;
                                nimbus_screen.canvasDone.height = screen.height;
                                nimbus_screen.canvasDone.getContext('2d').drawImage(screen, 0, 0);
                                nimbus_screen.canvasDone.getContext('2d').drawImage(watermark, x, y, watermark.width, watermark.height);
                                return cb && cb();
                            };
                            screen.src = nimbus_screen.info.file.origin_patch;
                        }
                    });
                }
            }, false);
        });
    },
    setDataFilePreview: function() {
        if (window.core.is_chrome) {
            nimbus_screen.pdf = new jsPDF({
                orientation: nimbus_screen.canvasDone.width > nimbus_screen.canvasDone.height ? 'landscape' : 'portrait',
                unit: 'px',
                format: [Math.ceil(nimbus_screen.canvasDone.width), Math.ceil(nimbus_screen.canvasDone.height)],
                compress: true
            });
        }
        nimbus_screen.canvasDone.toBlob(function(blob) {
            nimbus_screen.info.file.patch = nimbus_screen.info.file.data;
            nimbus_screen.info.file.blob = blob;
            nimbus_screen.info.file.size = blob.size;
            nimbus_screen.viewFilePreview();
            $(document).trigger('ready_done');
        }, 'image/' + (nimbus_screen.info.file.format === 'jpg' ? 'jpeg' : 'png'))
    },
    createCanvasDone: function() {
        if (nimbus_screen.canvasManager) {
            nimbus_screen.canvasManager.done();
            let fon = nimbus_screen.canvasManager.getCanvas().fon.canvas;
            let bg = nimbus_screen.canvasManager.getCanvas().background.canvas;

            nimbus_screen.canvasDone.width = fon.width;
            nimbus_screen.canvasDone.height = fon.height;
            nimbus_screen.canvasDone.getContext('2d').drawImage(fon, 0, 0);
            nimbus_screen.canvasDone.getContext('2d').drawImage(bg, 0, 0);

            nimbus_screen.info.file.data = nimbus_screen.canvasDone.toDataURL('image/' + (nimbus_screen.info.file.format === 'jpg' ? 'jpeg' : 'png'));
            nimbus_screen.setDataFilePreview();

            $('#nsc_enable_watermark').closest('div').show();
        } else {
            let screen = new Image();
            screen.onload = function() {
                nimbus_screen.canvasDone.width = screen.width;
                nimbus_screen.canvasDone.height = screen.height;
                nimbus_screen.canvasDone.getContext('2d').drawImage(screen, 0, 0);

                nimbus_screen.setWaterMark(localStorage.enableWatermark === 'true');
                window.setTimeout(function() {
                    nimbus_screen.setWaterMark(localStorage.enableWatermark === 'true', function() {
                        nimbus_screen.info.file.data = nimbus_screen.canvasDone.toDataURL('image/' + (nimbus_screen.info.file.format === 'jpg' ? 'jpeg' : 'png'));
                        nimbus_screen.setDataFilePreview();
                    });
                }, 0);
            };
            screen.src = nimbus_screen.info.file.origin_patch;

            $('#nsc_enable_watermark').closest('div').show();
        }
    },
    sizeFont: function(data) {
        let body = document.getElementsByTagName("body")[0];
        let dummy = document.createElement("div");
        dummy.appendChild(document.createTextNode(data.text));
        dummy.setAttribute("style", "font-family: " + data.family + "; font-size: " + data.size + "px; float: left; white-space: nowrap; overflow: hidden;");
        body.appendChild(dummy);
        const result = {
            w: dummy.offsetWidth + (data.size * 0.4),
            h: dummy.offsetHeight
        };
        body.removeChild(dummy);
        return result;
    },
    initScreenPage: function(patch) {
        console.timeEnd('start');
        console.time('load');
        nimbus_screen.canvasManager = nimbus_screen.dom.$edit_canvas.canvasPaint();
        nimbus_screen.canvasManager.loadBackgroundImage(patch || nimbus_screen.info.file.patch, function() {
            console.timeEnd('load');
            console.time('load2');
            nimbus_screen.dom.$nsc_pre_load.hide();

            nimbus_screen.dropFileInit();

            nimbus_screen.canvasManager.changeStrokeSize(localStorage.strokeSize);
            nimbus_screen.canvasManager.changeStrokeColor(localStorage.strokeColor);
            nimbus_screen.canvasManager.changeFillColor(localStorage.fillColor);
            nimbus_screen.canvasManager.changeShadow({
                enable: localStorage.shadow === 'true',
                blur: localStorage.shadowBlur,
                color: localStorage.shadowColor
            });
            nimbus_screen.canvasManager.setEnableNumbers(localStorage.enableNumbers === 'true');
            nimbus_screen.canvasManager.setFontFamily(localStorage.fontFamily);
            nimbus_screen.canvasManager.setFontSize(localStorage.fontSize);
            nimbus_screen.canvasManager.undoAll();

            $(window).trigger('resize');
            $(document).trigger('ready_redactor');

            nimbus_screen.setWaterMark(localStorage.enableWatermark === 'true');

            window.setTimeout(function(canvas) {
                nimbus_screen.setWaterMark(localStorage.enableWatermark === 'true');
            }, 0);

            if (localStorage.defaultTool === undefined) {
                localStorage.defaultTool = nimbus_screen.canvasManager.getTools();
                window.core.setOption('defaultTool', localStorage.defaultTool);
            }
            $('[data-tool-id=' + localStorage.defaultTool + ']').trigger('click');

            let event;
            $(document).on('mousemove', function(e) {
                event = e;
            }).on('keydown', function(e) {
                let k = e.keyCode;
                let hotkeysSend = JSON.parse(localStorage.hotkeysSendNS);

                if (k === 37 /*left*/ || k === 38 /*up*/ || k === 39 /*right*/ || k === 40 /*down*/ ) nimbus_screen.canvasManager.move(k);
                if (k === 46 || k === 8) nimbus_screen.canvasManager.delete(e);

                if (e.ctrlKey) {
                    if (k === 86) nimbus_screen.canvasManager.paste(event);
                    if (k === 67) nimbus_screen.canvasManager.copy(event);
                    if (k === 90) nimbus_screen.canvasManager.undo();
                    if (k === 89) nimbus_screen.canvasManager.redo();
                    if (k === +hotkeysSend.key) {
                        if (!nimbus_screen.dom.$nsc_done_page.is(':visible')) nimbus_screen.dom.$button_done.click();

                        $(document).one('ready_done', function() {
                            $('#nsc_send').trigger('click');
                        });
                    }
                }

                return true;
            });
            console.timeEnd('load2');
        });
    },
    dropFileInit: function() {
        let setFile = function(file) {
            nimbus_screen.blobTodataURL(file, function(dataURL) {
                if (nimbus_screen.getLocationParam() === 'blank') {
                    nimbus_screen.setImageToRedactor(dataURL, function() {
                        nimbus_screen.setWaterMark(localStorage.enableWatermark === 'true');
                    });
                } else {
                    nimbus_screen.canvasManager.loadImageObject(dataURL, {}, function() {
                        nimbus_screen.setWaterMark(localStorage.enableWatermark === 'true');
                    });
                }
            });
        };

        $(document).on('paste', function(e) {
            if (nimbus_screen.canvasManager) {
                // e.stopPropagation();
                // e.preventDefault();
                let files = e.originalEvent.clipboardData.items;
                for (let index in files) {
                    let file = files[index];
                    if (file.kind === 'file') {
                        file = file.getAsFile();
                        setFile(file);
                    }
                }
            }

        });

        function handleFileSelect(e) {
            e.stopPropagation();
            e.preventDefault();

            let files = e.target.files || (e.dataTransfer && e.dataTransfer.files);
            if (files[0].type.match('image.*')) setFile(files[0]);
        }

        function handleDragOver(e) {
            e.stopPropagation();
            e.preventDefault();
        }

        let dropZone = document.getElementById('nsc_drop_file');
        dropZone.addEventListener('dragover', handleDragOver, false);
        dropZone.addEventListener('drop', handleFileSelect, false);

        // $('#nsc_drop_file .receiver').on('dragover', false).on('dragleave', false).on('drop', function (e) {
        //     const files = e.originalEvent.dataTransfer.files;
        //     if (files[0].type.match('image.*')) setFile(files[0]);            //
        // });

        $('#nsc_redactor_open_image').prev('input').on('change', function(e) {
            e.stopPropagation();
            e.preventDefault();

            if (this.files[0].type.match('image.*')) setFile(this.files[0]);
        });
    },
    beforeUnload: function(e) {
        let message = "Вы уверены, что хотите покинуть страницу?";
        if (typeof e === "undefined") e = window.event;
        if (e) e.returnValue = message;
        return message;
    },
    rate_popup: {
        info: function(show, date) {
            let obj = JSON.parse(localStorage.getItem('ratePopup'));

            if (show !== undefined || date !== undefined) {
                obj = {
                    show: show !== undefined ? show : obj.show,
                    date: date !== undefined ? Date.now() : obj.date
                };
                localStorage.ratePopup = JSON.stringify(obj);
                window.core.setOption('ratePopup', localStorage.ratePopup)
            }
            return obj;
        },
        not_show_more: function() {
            nimbus_screen.rate_popup.info(false);
            $('#nsc_nimbus_rate').hide()
        },
        feedback: function() {
            nimbus_screen.rate_popup.info(false);
            if (window.core.is_chrome) chrome.runtime.sendMessage({
                operation: 'open_page',
                'url': 'https://chrome.google.com/webstore/detail/bpconcjcammlapcogcnnelfmaeghhagj/reviews'
            });
            else chrome.runtime.sendMessage({
                operation: 'open_page',
                'url': 'https://addons.mozilla.org/en-US/firefox/addon/nimbus-screenshot/reviews/'
            });
            $('#nsc_nimbus_rate').hide()
        },
        init: function() {
            let info = nimbus_screen.rate_popup.info();
            if (info.show && +info.date + 3600 * 24 * 6 * 1000 < Date.now()) {
                nimbus_screen.rate_popup.info(true, true);
                $('#nsc_nimbus_rate').show()
            }
        }
    },
    account_popup: {
        init: function() {
            if (localStorage.accountPopup === 'true') {
                nimbusShare.server.user.authState(function(res) {
                    if (res.errorCode !== 0 || !res.body || !res.body.authorized) {
                        $('#nsc_account_popup').show();
                        localStorage.accountPopup = false;
                        window.core.setOption('accountPopup', localStorage.accountPopup)
                    }
                });
            }
        }
    },
    togglePanel: function(panel) {
        $('#nsc_send').data('type', panel).trigger('change-type');
        $('#nsc_done_slack').css('display', panel === 'slack' ? 'flex' : 'none');
        $('#nsc_done_nimbus').css('display', panel === 'nimbus' ? 'flex' : 'none');
        $('#nsc_done_youtube').css('display', panel === 'youtube' ? 'flex' : 'none');
        localStorage.nimbusPanel = panel === 'nimbus';
        localStorage.slackPanel = panel === 'slack';
        localStorage.youtubePanel = panel === 'youtube';
        window.core.setOption('accountPopup', localStorage.accountPopup);
        window.core.setOption('accountPopup', localStorage.accountPopup);
        window.core.setOption('accountPopup', localStorage.accountPopup);
    }
};

let background = new Image();
background.onload = function() {
    nimbus_screen.image = background;
};
background.src = nimbus_screen.info.file.patch;

if (window.core.is_chrome) {
    let service = analytics.getService('screens_chrome');
    nimbus_screen.tracker = service.getTracker('UA-67774717-13');
    nimbus_screen.tracker.sendAppView('MainView');

    nimbus_screen.SCREEN_DAY_10 = analytics.EventBuilder.builder().category('screenshot').action('screenDay10');
    nimbus_screen.SCREEN_DAY_10_FOR_MONTH = analytics.EventBuilder.builder().category('screenshot').action('screenDay10ForMonth');

    let timeMouthAgo = new Date().setMonth(new Date().getMonth() + 1);
    let timeDayAgo = new Date().setDate(new Date().getDate() + 1);

    nimbus_screen.SLACK_UPLOAD = analytics.EventBuilder.builder().category('screenshot').action('uploadSlack');
    nimbus_screen.VIDEO_USING = analytics.EventBuilder.builder().category('screenshot').action('videoUsing');
    nimbus_screen.VIDEO_CONVERT = analytics.EventBuilder.builder().category('screenshot').action('videoConvert');
    nimbus_screen.VIDEO_UPLOAD = analytics.EventBuilder.builder().category('screenshot').action('videoUpload');

    if (localStorage.timeDayAgo === undefined) localStorage.timeDayAgo = timeDayAgo;
    if (localStorage.timeMouthAgo === undefined) localStorage.timeMouthAgo = timeMouthAgo;
    if (localStorage.dayScreens === undefined) localStorage.dayScreens = 0;
    if (localStorage.mouthScreens === undefined) localStorage.mouthScreens = 0;

    if (+localStorage.timeDayAgo < new Date().setHours(0, 0, 0, 0)) {
        if (+localStorage.dayScreens >= 10) {
            nimbus_screen.tracker.send(nimbus_screen.SCREEN_DAY_10);
            localStorage.mouthScreens = +localStorage.mouthScreens + 1;
        }
        localStorage.timeDayAgo = timeDayAgo;
        localStorage.dayScreens = 0;
    }

    if (+localStorage.timeDayAgo < new Date().setMonth(new Date().getMonth())) {
        if (+localStorage.mouthScreens >= 10) {
            nimbus_screen.tracker.send(nimbus_screen.SCREEN_DAY_10_FOR_MONTH);
        }
        localStorage.timeMouthAgo = timeMouthAgo;
        localStorage.mouthScreens = 0;
    }
}