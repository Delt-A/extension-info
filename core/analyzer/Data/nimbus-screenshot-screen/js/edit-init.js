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

console.time('start');


$(function() {
    nimbus_screen.dom.$nsc_redactor_page = $('#nsc_redactor_page');
    nimbus_screen.dom.$nsc_video_page = $('#nsc_video_page');
    nimbus_screen.dom.$nsc_done_page = $('#nsc_done_page');
    nimbus_screen.dom.$nsc_linked = $('#nsc_linked');
    nimbus_screen.dom.$edit_canvas = $("#nsc_canvas");
    nimbus_screen.dom.$origin_image = $('#nsc_origin_image');
    nimbus_screen.dom.$button_done = $("#nsc_done");
    nimbus_screen.dom.$app_title = $('#nsc_main_title span span');
    nimbus_screen.dom.$preview_loading = $('#nsc_preview_loading');
    nimbus_screen.dom.$nsc_indicator = $('#nsc_indicator');
    nimbus_screen.dom.$nsc_drop_file = $('#nsc_drop_file');
    nimbus_screen.dom.$nsc_pre_load = $('#nsc_pre_load');
    nimbus_screen.dom.$nsc_capture_desktop = $('#nsc_redactor_capture_desktop, #nsc_capture_desktop');
    nimbus_screen.dom.$nsc_capture_helper = $('#nsc_capture_helper');

    nimbus_screen.dom.$nsc_linked.find('input').on('focus', function() {
        $(this).select();
    });

    nimbus_screen.dom.$button_done.on('click', function() {
        nimbus_screen.viewDone();
    });

    if (nimbus_screen.getLocationParam() === 'done' ||
        nimbus_screen.getLocationParam() === 'nimbus' ||
        nimbus_screen.getLocationParam() === 'slack' ||
        nimbus_screen.getLocationParam() === 'google' ||
        nimbus_screen.getLocationParam() === 'pdf' ||
        nimbus_screen.getLocationParam() === 'print') {

        nimbus_screen.dom.$button_done.click();

        $(document).one('ready_done', function() {
            switch (nimbus_screen.getLocationParam()) {
                // case 'nimbus':
                //     $('#nsc_button_nimbus').click();
                //     break;
                // case 'slack':
                //     break;
                // case 'google':
                //     $('#nsc_button_google_drive').click();
                //     break;
                case 'print':
                    $('#nsc_button_print').click();
                    break;
                case 'pdf':
                    $('#nsc_button_save_pdf').click();
                    break;
            }
        });

    } else if (nimbus_screen.getLocationParam() === 'video') {
        nimbus_screen.dom.$button_done.click();
    } else if (nimbus_screen.getLocationParam() === 'blank') {
        nimbus_screen.dom.$edit_canvas.hide();
        nimbus_screen.dom.$nsc_drop_file.show();
        nimbus_screen.dom.$nsc_redactor_page.show();
        nimbus_screen.dom.$nsc_capture_desktop.show();
        if (localStorage.disableHelper !== 'true') nimbus_screen.dom.$nsc_capture_helper.fadeIn(100);
        nimbus_screen.initScreenPage();
    } else {
        chrome.runtime.sendMessage({
            operation: 'get_quick_capture'
        }, function(res) {
            if (res.quick_capture !== 'false' && res.enable_edit !== 'edit') {
                nimbus_screen.dom.$button_done.click();
                $(document).one('ready_done', function() {
                    switch (res.enable_edit) {
                        case 'nimbus':
                            $('#nsc_button_nimbus').click();
                            break;
                        case 'google':
                            $('#nsc_button_google_drive').click();
                            break;
                    }
                });

            } else {
                nimbus_screen.dom.$nsc_pre_load.show();
                nimbus_screen.dom.$nsc_redactor_page.show();
                nimbus_screen.initScreenPage(nimbus_screen.image);
            }
        });
    }

    let hotkeysSendNS = JSON.parse(localStorage.hotkeysSendNS);

    $('#hotkeys_send_ns').text('(Ctrl+' + hotkeysSendNS.title + ')');

    $('#nsc_capture_helper button').on('click', function() {
        nimbus_screen.dom.$nsc_capture_helper.fadeOut(100);
        localStorage.setItem('disableHelper', true);
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

    $('[data-i18n-attr="title"]').tooltip({
        position: {
            my: "center top+10",
            at: "center bottom"
        }
    });

    $('#nimbus_help_link').attr('href', 'https://everhelper.desk.com/customer/en/portal/articles/' + (window.navigator.language === 'ru' ? '2155978' : '1180411'));

    $(window).on('resize', function() {
        if (nimbus_screen.canvasManager) nimbus_screen.canvasManager.zoom(true);

        const height = $('#nsc_redactor_panel').height() + 10;
        $('#nsc_canvas_wrap').css({
            'marginTop': height
        });

        let indicator_width = 400;
        if (nimbus_screen.getLocationParam() === 'video') {
            let $nsc_stream_video = $('#nsc_stream_video');
            if ($nsc_stream_video.width() > 200) indicator_width = $nsc_stream_video.width();
        } else {
            let $nsc_preview_img = $('#nsc_preview_img');
            if ($nsc_preview_img.width() > 200) indicator_width = $nsc_preview_img.width();
        }
        $('#nsc_indicator').css({
            'max-width': indicator_width
        });
    });

    $(window).on('beforeunload', nimbus_screen.beforeUnload).click();

    chrome.runtime.onMessage.addListener(function(request) {
        if (request.operation === 'shortcut_load_to_ns_change') {
            hotkeysSendNS = JSON.parse(localStorage.hotkeysSendNS);
            $('#hotkeys_send_ns').text('(Ctrl+' + hotkeysSendNS.title + ')');
        }

        if (request.operation === 'event' && nimbus_screen.getLocationParam() !== 'video') {
            switch (request.type) {
                case 'enable-watermark':
                case 'type-watermark':
                case 'percent-watermark':
                case 'alpha-watermark':
                case 'font-watermark':
                case 'size-watermark':
                case 'text-watermark':
                case 'file-watermark':
                case 'color-watermark':
                case 'position-watermark':
                    window.setTimeout(function() {

                        $('#nsc_preview_img').hide();
                        nimbus_screen.dom.$nsc_indicator.hide();
                        nimbus_screen.dom.$preview_loading.show();

                        if (nimbus_screen.canvasManager) {
                            nimbus_screen.setWaterMark(localStorage.enableWatermark === 'true');
                            window.setTimeout(function() {
                                nimbus_screen.setWaterMark(localStorage.enableWatermark === 'true', function() {
                                    nimbus_screen.createCanvasDone();
                                })
                            }, 0);
                        } else {
                            nimbus_screen.createCanvasDone();
                        }
                    }, 100);
                    break;
            }
        }
    });
});