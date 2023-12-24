// Funções declaradas em JavaScript

// Uma função é um bloco de código projetado para realizar uma tarefa específica
// Uma função é executada quando algo a invoca (chama)

// Declarando uma função
function minhaFuncao() {
    console.log("Olá, função!");
}

// Chamando a função
// Para chamar a função, basta escrever o nome da função seguido de parênteses
minhaFuncao();


//Exemplo de função declarada:

// Função declarada
function soma(a, b) {
    return a + b;
  }
  
  // Chamando a função
  let resultadoSoma = soma(3, 4);
  console.log('Resultado da soma:', resultadoSoma);

  
//Exemplo de função declarada com forEach:

let numeros = [1, 2, 3, 4, 5];

// Função declarada usada com forEach
function imprimirDobro(numero) {
  console.log(numero * 2);
}

numeros.forEach(imprimirDobro);


//Exemplo de função declarada para multiplicação:

// Função declarada para multiplicação
function multiplicacao(x, y) {
    return x * y;
  }
  
  // Chamando a função
  let resultadoMultiplicacao = multiplicacao(3, 5);
  console.log('Resultado da multiplicação:', resultadoMultiplicacao);
  