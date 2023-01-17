
// 1 - Crie uma variavel meuArray deve ser uma constante com 10 elemento, 1 booleano, 1 String, 1 number
// 2 - faça um console log e mostre todos os elementos

// const meuArray = ["Ana", "Miguel", "Elisa", true, "Maria",2, "Kelly", "Thomas", "Nicolas", "Bernardo"];
// console.log(meuArray.length[meuArray -1]);



// 3 Faça um FOR com console.log e mostre todos os elementos, 
// const meuArray = ["Ana", "Miguel", "Elisa", true, "Maria",2, "Kelly", "Thomas", "Nicolas", "Bernardo"];
//  let n = 0;

// for (let n of meuArray) {
//     console.log(n);
// }

 // Depois faça um .forEach com um console log dentro de uma função callback
// const meuArray = ["Ana", "Miguel", "Elisa", true, "Maria",2, "Kelly", "Thomas", "Nicolas", "Bernardo"];

// meuArray.forEach(function(todos) {
//     console.log(todos);
// });


// Use o metodo .map no meuArray para retornar um array modificado a= deve ser chamado de meuArrayMutante, b= meuArrayMutante deve ser uma contante c= Todos os elementos do meuArrayMutante devem ser o numero 2.

 const meuArray = ["Ana", "Miguel", "Elisa", true, "Maria",2, "Kelly", "Thomas", "Nicolas", "Bernardo"];

 const meuArrayMutante = meuArray.map((value => value=2));
 console.log(meuArrayMutante);

// criando um novo array com o map de numeros aleatorios atraves da formula math.floor 

 const numeros = meuArrayMutante.map(value => value +Math.floor(Math.random()*10));

console.log(numeros);

//  Mostrando apenas numeros impares do meu array mutante

//  for (let index =0; index < numeros.length; index++){
//     if(numeros[index]%2 !==0){
//         console.log(numeros[index]);
//     }
//  }

numeros.forEach(
    function(maiores) {
            if(maiores >4){
                console.log(maiores);

}
     
})




  