function listenerfunction() {
    var Element = document.getElementById ('circle');
    Element.style.opacity = '1';
}
function loadfunction() {
    var Element = document.getElementById ('circle');
    document.addEventListener('click', listenerfunction);
    Element.style.opacity = '0.5';
}
document.addEventListener('DOMContentLoaded', loadfunction)
