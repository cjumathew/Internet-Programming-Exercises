function listenerfunction() {
    var Element = document.getElementById ('circle');
    Element.style.backgroundColor = 'Blue';
}
function loadfunction() {
var Element = document.getElementById ('circle');
document.addEventListener('click', listenerfunction);
}
document.addEventListener('DOMContentLoaded', loadfunction)
