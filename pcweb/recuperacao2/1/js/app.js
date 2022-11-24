const numbers = ["7", "2"];
console.log(numbers);

 function crescente(numbers)
 {
   let array = [];
   if(numbers[0] > numbers[1])
   {
    array.push(numbers[1]);
    array.push(numbers[0]);
   }
   else{
     array = numbers;
   }

   return array;
 }


 console.log(crescente(numbers));