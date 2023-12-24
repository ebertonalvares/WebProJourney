// Loop for em JavaScript

// A instrução 'for' cria um loop que consiste em três expressões opcionais
for (var i = 0; i < 5; i++) {
    console.log(i);  // Saída: 0, 1, 2, 3, 4
}

// Exemplo de loop for
console.log('Exemplo de loop for:');
for (let i = 0; i < 5; i++) {
  console.log('Iteração', i);
}

// Utilizando o loop for para percorrer um array
let frutas = ['Maçã', 'Banana', 'Morango', 'Uva'];
console.log('\nLoop for para percorrer um array:');
for (let i = 0; i < frutas.length; i++) {
  console.log('Índice', i, ':', frutas[i]);
}


// Exemplo de loop while
console.log('\nExemplo de loop while:');
let contador = 0;
while (contador < 5) {
  console.log('Iteração', contador);
  contador++;
}

// Utilizando o loop while para percorrer um array
let indice = 0;
console.log('\nLoop while para percorrer um array:');
while (indice < frutas.length) {
  console.log('Índice', indice, ':', frutas[indice]);
  indice++;
}
