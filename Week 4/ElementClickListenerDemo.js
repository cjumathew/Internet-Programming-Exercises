function listenerfunctionheader() {
    var ListenerElement = document.getElementById ('pageheader');
    ListenerElement.firstChild.nodeValue = 'This header has been updated by the listener';
}
function listnerfunctionpara() {
    var ListenerElement2 = document.getElementById ('pagepara');
    ListenerElement2.firstChild.nodeValue = 'This paragraph has been updated by the listener';
    }
function loadfunction() {
    element.addEventListener('click', listenerfunction)
    document.addEventListener('DOMContentLoaded', listenerfunction)