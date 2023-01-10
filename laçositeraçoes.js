// const frutas = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let n = 0;

// for (let n = 0; n <= 20; n = n+2) {
//     console.log(n);
    
// }


// -----------------------''--------------------''---------------------------''--------------------------------------''---------------

// const pares = []
// let i;

// // ao inver de i = i+2 pode colocar i =+2 ou i =*2 para operações que facilita o codigoo.

// for (let i = 0; i <= 20; i = i+2){
// pares.push(i);

// }
// console.log(pares);

// ----------------''--------------------''-----------------------''-------------------------''---------------''-------------------------

// let i = 0

// while(i <=2){
//     console.log("repetindo");
//     i++;
// }

// --------------''-----------------------------''---------------''-------------------------------------''-----------------------------''--

// const frutas = ['a','b','c'];

// const frutasNovas = frutas.map(value => value.toUpperCase())
// console.log(frutasNovas);

// ---------------''-----------------------------''-----------------------------------''--------------------------------------''------------

// const numeros = [1,2,3,4,5];

// const numerosAoQuadrado = numeros.map((value => value*value));
// console.log(numerosAoQuadrado)


// MOSTRAR O MAIOR NUMERO DE UM ARRAY


// const numeros = [1,2,10,4];

// const numerosAoQuadrado = numeros.map((value) => value)
// const maior = Math.max(1,2,10,4);
// console.log(maior)

// outra forma MOSTRAR O MAIOR NUMERO DE UM ARRAY

const numeros = [1,2,10,4];

const maior = Math.max(...numeros);
console.log(maior)


estudar função sort