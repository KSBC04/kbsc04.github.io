let numeros = [1, 2, 3];
let tamanho = numeros.length;

function sum() {
    s = 0; 
    for(let n = 0; n < numeros.length; n++){
        s = s + numeros[n];
    }
    return s;
}

sum();
console.log(s)

numeros = [2, 2, 2];
numeros.length = numeros.length;

sum();
console.log(s)

numeros = [1, 2, 3, 4, 5, 6];
tamanho = numeros.length;

sum();
console.log(s)

numeros = [1, 2, 3];
tamanho = numeros.length;

function sumOdds() {
    sO = 0;
    for(let n = 0; n < tamanho; n++){
        if (numeros[n] % 2 != 0) {
            sO = sO + numeros[n];
        }
    }
    return sO;
}

sumOdds();
console.log(sO)

numeros = [2, 2, 2];
tamanho = numeros.length;

sumOdds();
console.log(sO)

numeros = [1, 2, 3, 4, 5, 6];
tamanho = numeros.length;

sumOdds();
console.log(sO)

numeros = [1, 2, 3];
tamanho = numeros.length;

function product() {
    p = 1;
    for(let n = 0; n < tamanho; n++){
        p = p * numeros[n];
    }
    return p;
}

product();
console.log(p)

numeros = [2, 2, 2];
tamanho = numeros.length;

product();
console.log(p)

numeros = [1, 2, 3, 4, 5, 6];
tamanho = numeros.length;

product();
console.log(p)

let decToRom = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];

function converte(num) {
  if (num === 0) {
    return '';
  }
  for (let n = 0; n < decToRom.length; n++) {
    if (num >= decToRom[n][0]) {
      return decToRom[n][1] + converte(num - decToRom[n][0]);
    }
  }
}

console.log('1543 = ' + converte(1543));

let valor = "";
let i = "";
function saqMin(valor){
    while(valor > 0){
        if(valor >= 100){
            valor -=100
            i += "100 /"
        }
        else if(valor <= 99 && valor >= 50){
            valor -=50
            i += "50 /"
        }
        else if(valor <= 49 && valor >= 20){
            valor -=20
            i += "20 /"
        }
        else if(valor <= 19 && valor >= 10){
            valor -= 10
            i += "10 /"
        }
        else if(valor <= 9 && valor >= 5){
            valor -= 5
            i += "5 /"
        }
        else if(valor <= 4 && valor >= 2){
            valor -= 2
            i += "2 /"
        }
        else if(valor == 1){
            valor -= 1
            i += "1"
        }
    }
    return i;
}
console.log(saqMin(1280))