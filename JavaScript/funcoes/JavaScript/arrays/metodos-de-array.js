// Métodos de array em JavaScript

var meuArray = ["elemento1", "elemento2", "elemento3"];

// Usando o método 'forEach' para iterar sobre cada elemento do array
meuArray.forEach(function(elemento) {
    console.log(elemento);
});

// Usando o método 'map' para criar um novo array com os resultados da chamada de uma função para cada elemento do array
var meuNovoArray = meuArray.map(function(elemento) {
    return elemento.toUpperCase();
});
console.log(meuNovoArray);  // Saída: ["ELEMENTO1", "ELEMENTO2", "ELEMENTO3"]


// Criando um array
let frutas = ['Maçã', 'Banana', 'Morango', 'Uva'];

// Método: join()
let frutasString = frutas.join(', ');
console.log('Método join():', frutasString);

// Método: push() - Adicionando elementos ao final do array
frutas.push('Abacaxi');
console.log('Método push():', frutas);

// Método: pop() - Removendo o último elemento do array
let ultimaFruta = frutas.pop();
console.log('Método pop():', frutas);
console.log('Última fruta removida:', ultimaFruta);

// Método: shift() - Removendo o primeiro elemento do array
let primeiraFruta = frutas.shift();
console.log('Método shift():', frutas);
console.log('Primeira fruta removida:', primeiraFruta);

// Método: unshift() - Adicionando elementos ao início do array
frutas.unshift('Pêssego', 'Limão');
console.log('Método unshift():', frutas);

// Método: slice() - Criando uma cópia de parte do array
let copiaFrutas = frutas.slice(1, 3);
console.log('Método slice():', copiaFrutas);

// Método: indexOf() - Encontrando a posição de um elemento no array
let indiceMorango = frutas.indexOf('Morango');
console.log('Método indexOf() - Índice do Morango:', indiceMorango);

// Método: splice() - Removendo e/ou adicionando elementos em posições específicas
frutas.splice(2, 1, 'Pera', 'Kiwi');
console.log('Método splice():', frutas);

// Método: forEach() - Iterando sobre elementos do array
console.log('Método forEach() - Iterando sobre elementos do array:');
frutas.forEach(function(fruta, indice) {
  console.log('Índice', indice, ':', fruta);
});

// Método: map() - Criando um novo array com base em uma função de mapeamento
let frutasUpperCase = frutas.map(function(fruta) {
  return fruta.toUpperCase();
});
console.log('Método map() - Array com frutas em maiúsculas:', frutasUpperCase);
