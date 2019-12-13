$(function() {
    $('.access_error').hide();
    window.navigator.getUserMedia({
            audio: true
        },
        function(s) {
            let typeCapture = window.core.getLocationParam();
            chrome.extension.getBackgroundPage().videoRecorder.mediaAccess({
                typeCapture: typeCapture
            });
            window.close();
        },
        function(s) {
            console.log('error')
            // let typeCapture = window.core.getLocationParam();
            // chrome.extension.getBackgroundPage().videoRecorder.mediaAccess({typeCapture: typeCapture});
            // window.close();
            // $('.access_error').show();
        });
});