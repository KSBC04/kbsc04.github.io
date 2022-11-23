let xhttp = new XMLHttpRequest();
let url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json"
let criaIngredientes = lista => {
    return lista.reduce(function(elementos, item){
        return elementos + `<li>${item}</li>`
    }, "")
}
let criaPrato = prato => {
   return `<div class="receita">
<img src="${prato.foto}" alt="${prato.nome}">
<h3>${prato.nome}</h3>
<p class="desricao">"${prato.descricao}"</p>
<div class="ingrediente">
    <ul>
        ${criaIngredientes(prato.ingredientes)}
    </ul>
</div>
<div class="preparo">
    <ol>
        <li>Passo 1</li>
        <li>Passo 2</li>
        <li>Passo 3</li>
    </ol>
</div>`
}

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && xhttp.status == 200){
        console.log(this.responseText)
        let receitas= JSON.parse(this.responseText)
        let secao = document.querySelector(".receitas")
        receitas.forEach(prato => {
            secao.innerHTML += criaPrato(prato)
        });
    }
}

xhttp.open("GET", url, true)
xhttp.send()

