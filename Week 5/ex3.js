function listenerfunction() {
    var Element = document.getElementById ('circle');
    Element.style.opacity = '0.5';
}
function loadfunction() {
var Element = document.getElementById ('circle');
document.addEventListener('click', listenerfunction);

}
document.addEventListener('DOMContentLoaded', loadfunction)
