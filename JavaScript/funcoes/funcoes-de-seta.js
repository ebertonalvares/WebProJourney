// Funções de seta em JavaScript

// Uma função de seta é uma maneira compacta de escrever uma função anônima
var minhaFuncaoDeSeta = () => {
    console.log("Olá, função de seta!");
}

// Chamando a função de seta
minhaFuncaoDeSeta();


//Exemplo de arrow function atribuída a uma variável:

// Arrow function atribuída a uma variável
let soma = (a, b) => {
    return a + b;
  };
  
  // Chamando a função
  let resultadoSoma = soma(3, 4);
  console.log('Resultado da soma:', resultadoSoma);

  
  //Exemplo de arrow function com forEach:

  let numeros = [1, 2, 3, 4, 5];

// Usando uma arrow function com forEach
numeros.forEach(numero => {
  console.log(numero * 2);
});
