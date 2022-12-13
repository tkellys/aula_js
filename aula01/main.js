let pais = 'Brasil';
console.log(pais);

// transformando Brasil para tudo em maiuscula atraves de metodos de manipulação
console.log(pais.toUpperCase());
console.log(pais.toLowerCase());

// juntando duas variaveis (concatenando)
let frase = ' Um país continental';
// console.log(pais + frase);

// juntando duas variaveis (concatenando) ATUALMENTE com template string 
// console.log(`${pais}${frase}`);
let fraseCompleta = `O ${pais} é um país continental`;


console.log(fraseCompleta.replace('continental','tropical'));

// contar a qtd de caracteres (variavel + propriedade length)//

console.log(fraseCompleta.length);