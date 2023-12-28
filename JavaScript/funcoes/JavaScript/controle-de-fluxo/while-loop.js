// Loop while em JavaScript

var i = 0;

// A instrução 'while' cria um loop que executa um bloco de código enquanto uma condição especificada é verdadeira
while (i < 5) {
    console.log(i);  // Saída: 0, 1, 2, 3, 4
    i++;
}


//Exemplo de while:

let contador = 0;

// Exemplo de loop while que itera 5 vezes
while (contador < 5) {
  console.log('Iteração', contador);
  contador++;
}


//Exemplo de while com array:

let frutas = ['Maçã', 'Banana', 'Morango', 'Uva'];
let indice = 0;

// Loop while para percorrer um array
while (indice < frutas.length) {
  console.log('Índice', indice, ':', frutas[indice]);
  indice++;
}


//Exemplo de do-while:

let numero = 5;

// Exemplo de loop do-while que executa pelo menos uma vez
do {
  console.log('Número:', numero);
  numero--;
} while (numero > 0);
