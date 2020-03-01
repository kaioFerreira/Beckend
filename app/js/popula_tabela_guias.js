function montaTd(dado, classe) {
    var guiaTd = document.createElement("td");

    guiaTd.classList.add(classe);
    guiaTd.textContent = dado;

    return guiaTd;
}

function montaTr(guia) {
    var guiaTr = document.createElement("tr");

    guiaTr.classList.add("guia");
    guiaTr.appendChild(montaTd(guia.Numero), "numGuia");
    guiaTr.appendChild(montaTd(guia.Prestador.split(":")[1]), "prestador");
    guiaTr.appendChild(montaTd(guia.Convenio.split(":")[1]), "convenio");
    guiaTr.appendChild(montaTd(guia.Beneficiario.split(":")[1]), "bbeneficiario");
    guiaTr.appendChild(montaTd(guia.Data), "data");
    guiaTr.appendChild(montaTd(guia.QuitacaoGuia), "quitacaoGuia");
    guiaTr.appendChild(montaTd(guia.ValorTotal), "valorTotal");

    return guiaTr;
}

var xhr = new XMLHttpRequest();

xhr.open("GET", "http://172.30.128.248:9000/guias");  
xhr.addEventListener("load", function(){
    var resp = xhr.responseText;
    var guias = JSON.parse(resp);
    var tabelaGuias = document.querySelector("#guias");

    guias.forEach(guia => {
        var guiaTr = montaTr(guia);

        tabelaGuias.appendChild(guiaTr);
    });
});

xhr.send();