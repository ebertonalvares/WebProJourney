// Funções anônimas em JavaScript

// Uma função anônima é uma função sem nome
// Aqui, atribuímos uma função anônima a uma variável
var minhaFuncaoAnonima = function() {
    console.log("Olá, função anônima!");
}

// Chamando a função anônima
minhaFuncaoAnonima();


//Exemplo de função anônima atribuída a uma variável:

// Função anônima atribuída a uma variável
let soma = function(a, b) {
    return a + b;
  };
  
  // Chamando a função
  let resultado = soma(3, 4);
  console.log('Resultado da soma:', resultado);

  
  //Exemplo de função anônima com forEach:
  

  let numeros = [1, 2, 3, 4, 5];

// Usando uma função anônima com forEach
numeros.forEach(function(numero) {
  console.log(numero * 2);
});


//Exemplo de arrow function (função de seta) como função anônima:

// Arrow function como função anônima
let multiplicacao = (x, y) => x * y;

// Chamando a função
let resultadoMultiplicacao = multiplicacao(3, 5);
console.log('Resultado da multiplicação:', resultadoMultiplicacao);


