const video = document.getElementById('video');
const screen = document.getElementById('screen');
const overlay = document.getElementById('overlay');

var isShare = false;

var displayMediaOptions = {
    video: {
        cursor: 'always'
    },
    audio: false
};

window.addEventListener('pywebviewready', function () {
    screen.addEventListener('click', function () {
        if (!isShare) {
            pywebview.api.resize_to(1000, 700).then(function () {
                startCapture();
            });
        } else {
            stopCapture();
        }
    }, false);

    async function startCapture() {
        try {
            video.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);

            screen.children[0].classList.remove('bi-display');
            screen.children[0].classList.add('bi-display-fill');
            overlay.classList.add('hide');

            isShare = true;
        } catch (err) { }

        pywebview.api.resize_to_default();
    }

    function stopCapture() {
        let tracks = video.srcObject.getTracks();

        tracks.forEach(function (track) {
            track.stop()
        });
        video.srcObject = null;

        screen.children[0].classList.remove('bi-display-fill');
        screen.children[0].classList.add('bi-display');
        overlay.classList.remove('hide');

        isShare = false;
    }
});
