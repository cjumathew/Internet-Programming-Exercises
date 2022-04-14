function listenerfunction() {
alert('The button is pressed');
}
function loadfunction() {
var Element = document.getElementById ('circle');
document.addEventListener('click', listenerfunction);
//Element.style.backgroundColor = 'Yellow';
}
document.addEventListener('DOMContentLoaded', loadfunction)
