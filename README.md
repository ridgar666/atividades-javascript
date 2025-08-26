Documentação de Funções Utilitárias em JavaScript

Este repositório contém um conjunto de funções JavaScript simples e úteis para realizar operações matemáticas básicas, como verificar se um número é par ou ímpar, calcular o fatorial de um número e encontrar o maior valor em um array.

Funções Disponíveis
Verificar se é Ímpar ou Par
Cálculo de Fatorial
Encontrar o Maior Número

1. Função veriimparoupar
Finalidade:

A função veriimparoupar foi projetada para determinar se um número inteiro fornecido é par ou ímpar. Ela também inclui validações para garantir que a entrada seja um número inteiro válido.

Como Utilizar:
Para usar esta função, basta chamá-la e passar um número inteiro como argumento. A função retornará a string 'par' ou 'impar'.

Parâmetros:
number (Number): O número inteiro que você deseja verificar.
Retorno:
'par' (String): Se o número for par.
'impar' (String): Se o número for ímpar.
'Erro: Por favor, insira um número válido.' (String): Se a entrada não for um número.
'Erro: A função suporta apenas números inteiros.' (String): Se a entrada for um número com casas decimais.

Exemplo de Uso:
code
JavaScript
// Exemplo com interação do usuário
let input = prompt("Qual é o número que você deseja fazer a verificação?");
let number = parseFloat(input);

alert(veriimparoupar(number));

// Exemplo de uso direto
console.log(veriimparoupar(10)); // Saída: 'par'
console.log(veriimparoupar(7));  // Saída: 'impar'
console.log(veriimparoupar(3.5)); // Saída: 'Erro: A função suporta apenas números inteiros.'
console.log(veriimparoupar("texto")); // Saída: 'Erro: Por favor, insira um número válido.'

2. Função fatorial

Finalidade:
A função fatorial calcula o fatorial de um número inteiro não negativo. O fatorial de um número n (representado como n!) é o produto de todos os inteiros positivos de 1 a n.
Como Utilizar:
Chame a função fatorial e passe um número inteiro não negativo como argumento. Ela retornará o resultado do cálculo.

Parâmetros:
number2 (Number): O número inteiro e não negativo para o qual o fatorial será calculado.
Retorno:
resultado (Number): O valor do fatorial do número fornecido.
'Erro: Por favor, insira um número válido.' (String): Se a entrada não for um número.
'Erro: A função suporta apenas números inteiros.' (String): Se a entrada for um número com casas decimais ou um número negativo.
Exemplo de Uso:

code
JavaScript

// Exemplo com interação do usuário
let number2 = parseInt(prompt("Digite um número para calcular o fatorial:"));
let resultado = fatorial(number2);
alert(`O fatorial de ${number2} é: ${resultado}`);

// Exemplo de uso direto
console.log(fatorial(5));  // Saída: 120
console.log(fatorial(0));  // Saída: 1
console.log(fatorial(-3)); // Saída: 'Erro: A função suporta apenas números inteiros.'
3. Função maior

Finalidade:
A função maior tem o objetivo de encontrar e retornar o maior número presente em um array de números. A função valida se a entrada é de fato um array e se todos os seus elementos são numéricos.

Como Utilizar:
Para utilizá-la, passe um array de números como argumento. A função irá iterar sobre os elementos e retornar o maior valor encontrado.

Parâmetros:
array (Array): Um array contendo os números que você deseja comparar.

Retorno:
maior (Number): O maior número encontrado dentro do array.
'Erro: Por favor, insira um array válido.' (String): Se a entrada não for um array.
"Erro : Array está vazio." (String): Se o array fornecido não contiver elementos.
'Erro: O array contém valores não numéricos.' (String): Se algum dos elementos do array não for um número.
Exemplo de Uso:

code
JavaScript
// Exemplo com interação do usuário
let input2 = prompt("Digite números separados por vírgula (ex: 10,5,8,20):");
let arrayUsuario = input2.split(',').map(num => parseFloat(num.trim()));
let resultado2 = maior(arrayUsuario);
alert(`O maior número é: ${resultado2}`);

// Exemplo de uso direto
console.log(maior([10, 5, 8, 20])); // Saída: 20
console.log(maior([-2, -10, -5]));  // Saída: -2
console.log(maior([]));             // Saída: "Erro : Array está vazio."
console.log(maior([5, 'texto', 15])); // Saída: 'Erro: O array contém valores não numéricos.'