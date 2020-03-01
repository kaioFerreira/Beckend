var url = window.location.href;
var numGuia = url.split("?");

var spanNumGuia = document.querySelector("#spanNumGuia");
spanNumGuia.innerHTML = numGuia[1];