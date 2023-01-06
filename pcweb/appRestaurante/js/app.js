let produtos;

(function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        produtos = JSON.parse(this.responseText);
        exibir(produtos); }
        xhttp.open("GET", "https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json");
        xhttp.send(); })();

let valor
function soma(valor){
    let total
    total = valor + ((10*valor)/100)
    return total
}

function exibir(produtos)
{
    console.log(produtos)
    for(let i = 0; i< produtos.length; i++){
        let divGrande = document.getElementById("main");
            let opcao = document.createElement("div");
            opcao.classList.add("opcao");
                let img = document.createElement("img");
                img.classList.add("img");
                img.src = "https://rafaelescalfoni.github.io/desenv_web/restaurante/"+ produtos[i].photo;
                        let h3 = document.createElement("h3");
                        h3.textContent = produtos[i].name;
                        h3.classList.add("nome")
                                let p2 = document.createElement("p");
                                p2.textContent = produtos[i].details;
                                p2.classList.add("desc")
                                    let btn = `<button onclick = "compra(${i})" class="btn"> Adicionar  ${produtos[i].price}</button>`;
                                        let br = document.createElement("br");
                                        
        divGrande.appendChild(opcao);
            opcao.appendChild(img);
            opcao.appendChild(h3)   
            opcao.appendChild(p2)
            opcao.innerHTML+=btn;
        divGrande.appendChild(br);
    }          
}


let comprados = [];
if(localStorage.getItem("comprados") !=null)
    comprados = JSON.parse(localStorage.getItem("comprados"))
function compra(id){
    comprados.push(id)
    localStorage.setItem("comprados", "["+comprados+"]");
}


let btnConta = document.getElementById("conta")
let container = document.getElementById("container")

let clique = 0
btnConta.addEventListener("click",function(){ clique++; 
    if(clique % 2 == 0)
    {
        container.innerHTML = ""
        container.style.display = "none"
    }
    else{
        let comprados = JSON.parse(localStorage.getItem("comprados"))
        
        container.innerHTML = "<p class='tituloConta'>Conta</p><br>"

        for(let j = 0; j<comprados.length; j++){
            let k = comprados[j]
            container.innerHTML += `<div class="comprados">${produtos[k].name}..............${produtos[k].price}</div>`
            // soma($produtos[k].price)
        }
        container.style.display = "block"    }});


