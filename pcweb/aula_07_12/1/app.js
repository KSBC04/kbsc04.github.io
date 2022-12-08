function calcula(){
    let R= document.getElementById('r').value;
    console.log(R)
    let H= document.getElementById('h').value;
    console.log(H)
    let A = document.getElementById('a')
    let VA = (2*3.14*R*H)
    console.log(VA)
    A.innerHTML = VA.toFixed(2)+" cm²"
    let V = document.getElementById('v')
    let VV = (3.14*R*R*H)/1000
    console.log(VV)
    V.innerHTML = VV.toFixed(2)+" litros"
}

const elemRaio = document.querySelector('#r')
elemRaio.addEventListener('click',function(){
    const vRaio = document.querySelector('#vRaio')
    vRaio.innerHTML = elemRaio.value
})
const elemAlt = document.querySelector('#h')
elemAlt.addEventListener('click',function(){
    const vAlt = document.querySelector('#vAlt')
    vAlt.innerHTML = elemAlt.value
})