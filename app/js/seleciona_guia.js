var guias = document.querySelector("#guias");

guias.addEventListener("click", function(event){
    var numGuia = event.target.parentNode.children[0].innerHTML;
    window.location.href = "relatorio.html?" + numGuia; 
})
