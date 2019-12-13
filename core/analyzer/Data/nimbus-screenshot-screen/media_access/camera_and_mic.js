$(function() {
    console.log(1)
    $('.access_error').hide();
    window.navigator.getUserMedia({
            video: true,
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
            $('.access_error').show();
        });
});