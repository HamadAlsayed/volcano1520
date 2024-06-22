let e = document.getElementById("hero-video");
e.style.opacity = 0;

let vid = document.getElementById("hero-video");
vid.oncanplaythrough = function() {
    setTimeout(function() {
        let e = document.getElementById('hero-video');
        fade(e);
    }, 2000);
};

function fade(element) {
    let op = 0;
    let timer = setInterval(function() {
        if (op >= 0.4) clearInterval(timer);
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1 || 0.1;
    }, 20);
}