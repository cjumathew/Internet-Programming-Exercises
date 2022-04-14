
function listenerfunction() {
    var Element = document.getElementById ('circle');
    var positionLeft = Element.offsetLeft;
    Element.style.left = positionLeft - 10 + 'px';
}

function loadfunction() {
    var Element = document.getElementById ('circle');
    document.addEventListener('click', listenerfunction);
    Element.style.opacity = '1';
}
document.addEventListener('DOMContentLoaded', loadfunction)
