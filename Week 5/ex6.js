
function listenerfunction() {
    var Element = document.getElementById ('circle');
    var circleOpacity = parseFloat (Element.style.opacity);
    Element.style.opacity = circleOpacity - 0.01;
}

function timerEvent() {
    setInterval(listenerfunction, 1000);
}
function loadfunction() {
    var Element = document.getElementById ('circle');
    document.addEventListener('click', timerEvent);
    Element.style.opacity = '1';
}
document.addEventListener('DOMContentLoaded', loadfunction)

/*
function listenerfunction() {
    var Element = document.getElementById ('circle');
    setInterval(listenerfunction, 1000);
    var circleOpacity = parseFloat (Element.style.opacity);
    Element.style.opacity = circleOpacity - 0.01;
}
function loadfunction() {
    var Element = document.getElementById ('circle');
    document.addEventListener('click', listenerfunction);
    Element.style.opacity = '1';
}
document.addEventListener('DOMContentLoaded', loadfunction)
*/