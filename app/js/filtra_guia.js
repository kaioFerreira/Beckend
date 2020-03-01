var inputID = document.querySelector("#inputID");

inputID.addEventListener("input", function() {
    var guias = document.querySelectorAll(".guia");

    if(this.value.length > 0) {
        guias.forEach(guia => {
            var g = guia;
            var tdNumGuia = g.querySelector(".numGuia");
            var numGuia = tdNumGuia.textContent;
    
            if(numGuia != this.value) {
                guia.classList.add("inv");
            }else {
                guia.classList.remove("inv");
            }
        });
    }else {
        guias.forEach(guia => {
            guia.classList.remove("inv");
        });
    }
});
