var exit = document.getElementById('exit');
var pin = document.getElementById('pin');

window.addEventListener('pywebviewready', function () {
    exit.addEventListener('click', function () {
        pywebview.api.exit();
    });

    pin.addEventListener('click', function () {
        pywebview.api.pin().then(function (res) {
            if (res) {
                pin.children[0].classList.remove('bi-pin-angle');
                pin.children[0].classList.add('bi-pin-angle-fill');
            } else {
                pin.children[0].classList.remove('bi-pin-angle-fill');
                pin.children[0].classList.add('bi-pin-angle');
            }
        });
    });
});
