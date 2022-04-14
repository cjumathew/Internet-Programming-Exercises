function listenerfunction() {
var ListenerElement = document.getElementById ('pageheader');
ListenerElement.firstChild.nodeValue = 'This header has been updated by the listener';

var ListenerElement2 = document.getElementById ('pagepara');
ListenerElement2.firstChild.nodeValue = 'This paragraph has been updated by the listener';
}
document.addEventListener('DOMContentLoaded', listenerfunction)