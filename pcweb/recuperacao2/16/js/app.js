function criaQuadrado(){
    let divGrande = document.getElementById("meuDiv")
    let quadrado = document.createElement("div");
    quadrado.classList.add("quadrado");
    let br = document.createElement("br");
    divGrande.appendChild(quadrado);
    divGrande.appendChild(br);
}