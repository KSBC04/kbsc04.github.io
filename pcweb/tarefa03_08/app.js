const btn01 = document.querySelector("#pesq_palavra")
const btn02 = document.querySelector("#nova_palavra")
const btn03 = document.querySelector("#carregar")

const text = () => {document.getElementById("texto")}
const carregar = () => {document.getElementById("carregar")}

const splitText = (text) => {
    let showSplit = text.value.split(" ")
    console.log(showSplit)
}

btn03.addEventListener("click", () => {
    splitText(text);
    console.log("chuchu beleza")
})