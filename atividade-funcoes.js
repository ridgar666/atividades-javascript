function veriimparoupar (number) {

    if (typeof number !== 'number' || isNaN(number)) {
        return 'Erro: Por favor, insira um número válido.'; //faz a verificação se o número é valido
    }

    
    if (!Number.isInteger(number)) {
        return 'Erro: A função suporta apenas números inteiros.'; // faz a verificação se o número é inteiro
    };
    {
    if (number % 2 === 0)  // verifica se o número é par
        return 'par';
    else 
        return 'impar'; // verifica se o número é ímpar
    };
}

let input = prompt("Qual é o número que você deseja fazer a verificação?"); 
let number = parseFloat(input); // Agora captura números com decimais

alert(veriimparoupar(number)); // Verifica se o número é par ou ímpar

function fatorial (number2) {

    if (typeof number2 !== 'number' || isNaN(number2)) {
        return 'Erro: Por favor, insira um número válido.'; //faz a verificação se o número é valido
    }

    if (!Number.isInteger(number2) || number2 < 0) {
        return 'Erro: A função suporta apenas números inteiros.'; // faz a verificação se o número é inteiro e não negativo
    }

    let resultado = 1;
    for (let i = 2; i <= number2; i++) { // calcula o fatorial
        resultado *= i;
    }
    return resultado;
}

let number2 = parseInt(prompt("Digite um número para calcular o fatorial:")); // Captura o número para o cálculo do fatorial
let resultado = fatorial (number2);
alert(`O fatorial de ${number2} é: ${resultado}`); // Exibe o resultado do fatorial

