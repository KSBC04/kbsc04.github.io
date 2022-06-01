const checarNum = number => {
    numberInto = parseFloat(number)
    return (isNaN(number))? 0 : number;
}
      
const somar = ( number1, number2 ) => {
    number1 = checarNum(number1)
    number2 = checarNum(number2)
    return number1 +  number2;
}
const handleClick = () => {
    const number1 = document.querySelector( '[data-js="number1"]').value;
    const number2 = document.querySelector( '[data-js="number2"]').value;
    
    document.querySelector( '[data-js="result"]' ).innerHTML = "resultado = " + somar( number1, number2 );
}

document.querySelector( 'button' )
        .addEventListener( 'click', handleClick, false );