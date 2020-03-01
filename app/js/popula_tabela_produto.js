function montaTd(dado) {
    var produtoTd = document.createElement("td");

    produtoTd.textContent = dado;

    return produtoTd;
}

function montaTr(produto) {
    var produtoTr = document.createElement("tr");

    produtoTr.appendChild(montaTd(produto.prdt_codigo));
    produtoTr.appendChild(montaTd(produto.prdt_nome));

    produtoTr.appendChild(montaTd(produto.itmg_valor_total));
    produtoTr.appendChild(montaTd(produto.itmg_valor_pago));
    produtoTr.appendChild(montaTd(produto.itmg_valor_glosa));
    produtoTr.appendChild(montaTd(produto.itmg_motivo_glosa_descricao));
    produtoTr.appendChild(montaTd(produto.itmg_motivo_glosa_codigo));
    produtoTr.appendChild(montaTd(produto.itmg_status));

    return produtoTr;
}

var spanNumGuia = document.querySelector("#spanNumGuia");
var xhr = new XMLHttpRequest();


xhr.open("GET", "http://172.30.128.248:9000/guias?num_guia=" + "123456");

xhr.addEventListener("load", function(){
    var resp = xhr.responseText;
    var produtos = JSON.parse(resp);
    var tabelaProduto = document.querySelector("#produtos");

    console.log(produtos);

    produtos.forEach(produto => {
        var produtoTr = montaTr(produto);

        tabelaProduto.appendChild(produtoTr);
    });
});

xhr.send();