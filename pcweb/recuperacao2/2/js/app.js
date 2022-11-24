let N = [8,3,22]

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

function crescente3(N){
    let menor;
    let array = [];
    let aux = []
    if(N[0] < N[1] && N[0] < N[2])
    {
        menor = N[0];
        aux = [N[1], N[2]]
    }
    else if (N[1] < N[0] && N[1] < N[2])
    {
        menor = N[1];
        aux = [N[0], N[2]]
    }
    else{
        menor = N[2];
        aux = [N[0], N[1]]
    }

    array.push(menor);
    aux = crescente(aux);
    return array.concat(aux);

}

console.log(crescente3(N))