function listenerfunction() {
    var Element = document.getElementById ('circle');
    var circleOpacity = parseFloat (Element.style.opacity);
    Element.style.opacity = circleOpacity + 0.1;
}
function loadfunction() {
    var Element = document.getElementById ('circle');
    document.addEventListener('click', listenerfunction);
    Element.style.opacity = '0.5';
}
document.addEventListener('DOMContentLoaded', loadfunction)
