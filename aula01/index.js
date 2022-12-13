function calcularDesconto() {
    let valorProduto = document.getElementById('valor').value;

    let resultado = valorProduto - (valorProduto * 0.2);
    console.log(resultado)

    // parseFloar - o resultado vai aparecer em decimal em reais

    let resultadoFormatado = parseFloat(resultado).toFixed(2);

    // Exibe o texto com o valor formatado para reais
    let textoResultado = `O valor do produco com desconto de 20% é: R$ ${resultadoFormatado}`;

    // Exibe texto da variavel TEXTORESULTADO dentro da minha tag H2
     document.getElementsByTagName('h2')[0].innerHTML = textoResultado
}




