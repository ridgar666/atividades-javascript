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

let input = prompt("Qual é o número que você deseja verificar?"); 
let number = parseFloat(input); // Agora captura números com decimais

alert(veriimparoupar(number)); // Verifica se o número é par ou ímpar
