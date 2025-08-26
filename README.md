
# 📋 atividades-javascript Bolsa Futuro Digital

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

## 🚀 Como Utilizar as Funções

### 1. Seleção do Código
Escolha a função desejada no repositório e copie o código JavaScript correspondente.

### 2. Execução do Código
Existem duas formas de executar:

**Opção A: Console do Navegador**
- Abra as Ferramentas do Desenvolvedor (F12)
- Acesse a aba "Console"
- Cole o código e pressione Enter

**Opção B: Arquivo JavaScript**
- Crie um arquivo `.js` em seu projeto
- Cole o código da função
- Importe em seu HTML: `<script src="seu-arquivo.js"></script>`

### 3. Execução da Função
Após incluir o código, chame a função conforme necessário em seu projeto.

### 4. Parâmetros de Entrada
Cada função possui parâmetros específicos que devem ser fornecidos conforme a documentação.

## 📂 Estrutura do Código

O arquivo de script principal contém:
1.  **Definição das Funções:** Cada função é autônoma e lida com sua própria lógica e validação.
2.  **Interação com o Usuário:** Blocos de código que utilizam `prompt()` para capturar dados do usuário e `alert()` para exibir os resultados das funções. Essa parte é demonstrativa e pode ser removida se as funções forem usadas como parte de uma biblioteca.