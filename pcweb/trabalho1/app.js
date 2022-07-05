const btn=document.getElementById("button");
const btnZ=document.getElementById("buttonZ");
const btnZZ=document.getElementById("buttonZZ");
const btnZZZ=document.getElementById("buttonZZZ");
const firstNote=document.getElementById("nota1");
const secondNote=document.getElementById("nota2");
const thirdNote=document.getElementById("nota3");
const salary=document.getElementById("salary");
const percent=document.getElementById("percent");
const fahrenheit=document.getElementById("fahrenheit");
const first=document.getElementById("number1");
const second=document.getElementById("number2");


const checNum = number =>{
    number = parseFloat(number)
    return (!number || isNaN(number))? 0: number
}

const sum = (number1=0, number2=0)=>{
    number1 = checNum(number1)
    number2 = checNum(number2)
    return number1 + number2;
}
const bigger = (number1=0, number2=0)=>{
    number1 = checNum(number1)
    number2 = checNum(number2)
    if (number1 > number2)
    {
        return number1;
    }
    if (number1 < number2)
    {
        return number2;
    }
    if (number1 == number2)
    {
        return "iguais";
    }
}
function Prime(number1, number2){
    if(number1 < 1) return "Nenhum dos números é primo menor que 10";
    if(number2 < 1) return "Nenhum dos números é primo menor que 10";
    if (number1 == 2 || number1 == 3 || number1 == 5 || number1 == 7) return "Algum ou todos os números são primos menores que 10";
    if (number2 == 2 || number2 == 3 || number2 == 5 || number2 == 7) return "Algum ou todos os números são primos menores que 10";
    if (number1 % 2 == 0 || number1 % 3 == 0) return "Nenhum dos números é primo menor que 10"; 
    if (number2 % 2 == 0 || number2 % 3 == 0) return "Nenhum dos números é primo menor que 10"; 

    for(let i = 5; i * i <= number1; i += 6){
        if (number1 % i == 0 || number1 % (i + 2) == 0) return "Nenhum dos números é primo menor que 10";
    }
    for(let k = 5; k * k <= number2; k += 6){
        if (number2 % k == 0 || number2 % (k + 2) == 0) return "Nenhum dos números é primo menor que 10";
    }
}
const trigonometry = (number1=0, number2=0)=>{
    let a= Math.sqrt(number1 * number1+number2*number2);
    return a;
}

const newSalary = (salary=0, percent=0)=>{
    let perc= salary*(percent/100)
    let sal = sum(salary, perc);
    return sal;
}

const converter = (fahrenheit=0) =>{
    let cel = (fahrenheit - 32)* 5/9;
    return cel;
}

const finalMedia = (firstNote=0, secondNote=0, thirdNote=0 )=>{
    let media = (firstNote * 2 + secondNote * 3 + thirdNote * 5) / 10;
   return media;
}


btn.addEventListener("click", ()=>{
    const result=document.getElementById("result");
    const result2=document.getElementById("result2");
    const result3=document.getElementById("result3");
    const result4=document.getElementById("result4");

    result.innerHTML = "Resultado: " + sum(number1.value, number2.value);
    result2.innerHTML = "Número maior: " + bigger(number1.value, number2.value);
    result3.innerHTML = "Resposta: " + Prime(number1.value, number2.value);
    result4.innerHTML = "Valor da hipotenusa: " + trigonometry(number1.value, number2.value);
})

btnZ.addEventListener("click", ()=>{
    const result5=document.getElementById("result5");
    result5.innerHTML = "O novo salário será de R$" + newSalary(salary.value, percent.value) + ",00";   
})

btnZZ.addEventListener("click", ()=>{
    const result6=document.getElementById("result6");
    result6.innerHTML = "A temperatura em graus Celsius é: " + converter(fahrenheit.value) + "ºC";   
})

btnZZZ.addEventListener("click", ()=>{
    const mediaFinal=document.getElementById("mediaFinal");
    mediaFinal.innerHTML = "A média final é: " + finalMedia(firstNote.value, secondNote.value, thirdNote.value);
})