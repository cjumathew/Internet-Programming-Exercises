
function myKeyDown() {
    var Element = document.getElementById ('circle');
    var positionLeft = Element.offsetLeft;
    Element.style.left = positionLeft - 10 + 'px';
}

function loadfunction() {
    document.addEventListener ('keydown', myKeyDown);
}
document.addEventListener('DOMContentLoaded', loadfunction)
