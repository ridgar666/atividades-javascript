
# 🚀 atividades-javascript Bolsa Futuro Digital

# 🚀 Funções Utilitárias em JavaScript

Um conjunto de funções JavaScript simples e eficientes para realizar operações matemáticas comuns. Este projeto inclui validação de entradas para garantir robustez e fornecer feedback claro ao usuário.

## 📋 Tabela de Conteúdos

1.  [**Funções Disponíveis**](#-funções-disponíveis)
    *   [veriimparoupar](#1-função-veriimparoupar)
    *   [fatorial](#2-função-fatorial)
    *   [maior](#3-função-maior)
2.  [**Como Usar**](#-como-usar)
3.  [**Estrutura do Código**](#-estrutura-do-código)

---

## ✨ Funções Disponíveis

### 1. Função `veriimparoupar`

Verifica se um número inteiro fornecido é par ou ímpar. A função garante que a entrada seja um número inteiro válido antes de realizar a verificação.

#### Parâmetros

| Parâmetro | Tipo   | Descrição                                 |
| :-------- | :----- | :---------------------------------------- |
| `number`  | Number | O número inteiro que você deseja verificar. |

#### Retorno

-   `'par'` (String): Se o número for par.
-   `'impar'` (String): Se o número for ímpar.
-   `'Erro: ...'` (String): Mensagens de erro detalhadas se a entrada for inválida (não numérica ou não inteira).

#### Exemplo de Uso

```javascript
// Exemplo de uso direto na aplicação
console.log(veriimparoupar(10));
// Saída esperada: 'par'

console.log(veriimparoupar(7));
// Saída esperada: 'impar'

console.log(veriimparoupar(3.14));
// Saída esperada: 'Erro: A função suporta apenas números inteiros.'

console.log(veriimparoupar("texto"));
// Saída esperada: 'Erro: Por favor, insira um número válido.'
```

---

### 2. Função `fatorial`

Calcula o fatorial de um número inteiro não negativo (`n!`). A função não aceita números negativos ou com casas decimais.

#### Parâmetros

| Parâmetro | Tipo   | Descrição                                                    |
| :-------- | :----- | :------------------------------------------------------------- |
| `number2` | Number | O número inteiro e não negativo para o cálculo do fatorial. |

#### Retorno

-   O valor do fatorial (Number).
-   `'Erro: ...'` (String): Mensagens de erro se a entrada for inválida.

#### Exemplo de Uso

```javascript
// Exemplo de uso direto na aplicação
console.log(fatorial(5));
// Saída esperada: 120

console.log(fatorial(0));
// Saída esperada: 1

console.log(fatorial(-3));
// Saída esperada: 'Erro: A função suporta apenas números inteiros.'
```

---

### 3. Função `maior`

Encontra e retorna o maior número dentro de um array. A função valida se a entrada é um array e se todos os seus elementos são numéricos.

#### Parâmetros

| Parâmetro | Tipo  | Descrição                                    |
| :-------- | :---- | :------------------------------------------- |
| `array`   | Array | Um array de números para encontrar o maior valor. |

#### Retorno

-   O maior número encontrado no array (Number).
-   `'Erro: ...'` (String): Mensagens de erro se o array for inválido, estiver vazio ou contiver elementos não numéricos.

#### Exemplo de Uso

```javascript
// Exemplo de uso direto na aplicação
console.log(maior([10, 5, 8, 20, 2]));
// Saída esperada: 20

console.log(maior([-2, -10, -5, -1]));
// Saída esperada: -1

console.log(maior([]));
// Saída esperada: "Erro : Array está vazio."

console.log(maior([5, 'texto', 15]));
// Saída esperada: 'Erro: O array contém valores não numéricos.'
```

---

## 🚀 Como Usar

Para utilizar estas funções em seu projeto, simplesmente copie o código da função desejada para o seu arquivo JavaScript.

**Exemplo de integração no HTML (com interação do usuário):**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Funções Utilitárias</title>
</head>
<body>
    <h1>Teste as Funções</h1>
    <script>
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

    </script>
</body>
</html>
```

## 📂 Estrutura do Código

O arquivo de script principal contém:
1.  **Definição das Funções:** Cada função é autônoma e lida com sua própria lógica e validação.
2.  **Interação com o Usuário:** Blocos de código que utilizam `prompt()` para capturar dados do usuário e `alert()` para exibir os resultados das funções. Essa parte é demonstrativa e pode ser removida se as funções forem usadas como parte de uma biblioteca.