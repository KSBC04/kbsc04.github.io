const btnClicado = document.querySelector(".calc");
const display = document.querySelector(".calc-display")

btnClicado.addEventListener("click", function(event) {
    const elementoClicado = event.target
    if(elementoClicado.tagName.toLowerCase() == "button")
    console.log(`Botão clicado: ${elementoClicado.textContent}`)

    display.textContent += elementoClicado.textContent
})