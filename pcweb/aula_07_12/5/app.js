const botao = document.getElementById('botao')
function gerar(){
    let N = document.getElementById('n').value;
    for (let j = 0; j<N;j++){
        for(let i = 1;i<= 9;i++){
            let v = i*N;
            let t = document.getElementById('t')
            t.innerHTML += v + " "
        }
    }
}

botao.addEventListener('click', gerar)