function montaTd(dado) {
    var guiaTd = document.createElement("td");

    guiaTd.textContent = dado;

    return guiaTd;
}

function montaTr(guia) {
    var guiaTr = document.createElement("tr");

    guiaTr.appendChild(montaTd(guia.Numero));
    guiaTr.appendChild(montaTd(guia.Prestador.split(":")[1]));
    guiaTr.appendChild(montaTd(guia.Convenio.split(":")[1]));
    guiaTr.appendChild(montaTd(guia.Beneficiario.split(":")[1]));
    guiaTr.appendChild(montaTd(guia.Data));
    guiaTr.appendChild(montaTd(guia.QuitacaoGuia));
    guiaTr.appendChild(montaTd(guia.ValorTotal));


    return guiaTr;
}

var xhr = new XMLHttpRequest();

xhr.open("GET", "http://192.168.1.18:9000/guias");  
xhr.addEventListener("load", function(){
    var resp = xhr.responseText;
    var guias = JSON.parse(resp);

    console.log(guias)

    var tabelaGuias = document.querySelector("#guias");

    guias.forEach(guia => {
        var guiaTr = montaTr(guia);

        tabelaGuias.appendChild(guiaTr);
    });
});

xhr.send();