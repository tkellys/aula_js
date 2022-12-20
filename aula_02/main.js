
function liberarAcesso() {

    let idade = document.getElementById('idade').value;
    let nome = document.getElementById('nome').value;

    // "&&"" é para usar duas condições para determinar uma regra uma o "e" comercial.
    // "||" é para "ou" idade ou nome. 
    
    if (idade =='' || nome =='') {
        alert('por favor, informar Idade/Nome!');
    
    } else if (idade >= 18 && idade < 60) {
        console.log(` Pode entrar! ${nome} `);

    } else if (idade >= 60) {
        console.log(` Idoso, vá dormir! ${nome} `);

    } else if (idade = '') {
    console.log(` valor está vazio!`);

    } else
        console.log(` Não pode entrar! ${nome} `);

}





// function liberarAcesso(idade, nome) {


//     // "&&"" é para usar duas condições para determinar uma regra uma o "e" comercial.
//     if (idade >= 18 && idade < 60) {
//         console.log(` Pode entrar! ${nome} `);


//     } else if (idade >= 60) {
//         console.log(` Idoso, vá dormir! ${nome} `);
//     }
//     else {
//         console.log(` Não pode entrar! ${nome} `);
//     }

// }
// liberarAcesso(18, 'Jose');
// liberarAcesso(64, 'Savio');
// liberarAcesso(16, 'mariana');


