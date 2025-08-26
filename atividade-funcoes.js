function veriimparoupar (number) { // Função para verificar se um número é par ou ímpar

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



function maior (array) { // Função para encontrar o maior número em um array

    if (!Array.isArray(array)) {
        return 'Erro: Por favor, insira um array válido.'; // Verifica se a entrada é um array

    }
    if (array.length === 0 ) {
        return "Erro : Array está vazio." // Verifica se o array está vazio
    }

    let maior = array[0]; // Inicializa o maior número como o primeiro elemento do array

    for (let i = 1; i < array.length; i++) {  // Itera sobre os elementos restantes do array

        if (typeof array[i] !== 'number' || isNaN(array[i])) { // Verifica se o elemento é um número válido
            return 'Erro: O array contém valores não numéricos.';
        }

        if (array[i] > maior) { // Verifica se o elemento atual é maior que o maior encontrado
            maior = array[i]; 
        }
    }

 return maior; // Retorna o maior número encontrado no array

}

let input2 = prompt("Digite números separados por vírgula (ex: 1,2,3,4):");  // Solicita ao usuário que insira números
let arrayUsuario = input2.split(',').map(num => parseFloat(num.trim())); // Converte a entrada em um array de números
let resultado2 = maior(arrayUsuario); // Encontra o maior número no array
alert(`O maior número é: ${resultado2}`); // Exibe o maior número encontrado