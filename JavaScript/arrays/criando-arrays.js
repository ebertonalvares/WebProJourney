// Criando arrays em JavaScript

// Um array é uma coleção especial de objetos, com índices em vez de nomes para acessar os elementos

// Criando um array vazio
var meuArray = [];

// Adicionando elementos ao array
// Você pode adicionar elementos a um array usando o método 'push'
meuArray.push("elemento1");
meuArray.push("elemento2");

// Acessando elementos do array
// Você pode acessar os elementos de um array referindo-se ao índice do elemento
console.log(meuArray[0]);  // Saída: "elemento1"

// Criando um array
let numeros = [1, 2, 3, 4, 5];

// Acessando elementos do array
console.log('Array de números:', numeros);
console.log('Primeiro número:', numeros[0]);
console.log('Segundo número:', numeros[1]);

// Modificando elementos do array
numeros[1] = 10;
console.log('Array após modificar o segundo número:', numeros);

// Adicionando elementos ao final do array
numeros.push(6);
console.log('Array após adicionar o número 6:', numeros);

// Removendo o último elemento do array
let ultimoNumero = numeros.pop();
console.log('Array após remover o último número:', numeros);
console.log('Número removido:', ultimoNumero);

// Iterando sobre elementos do array com um loop for
console.log('Iterando sobre elementos do array com loop for:');
for (let i = 0; i < numeros.length; i++) {
  console.log('Índice', i, ':', numeros[i]);
}

// Iterando sobre elementos do array com forEach
console.log('Iterando sobre elementos do array com forEach:');
numeros.forEach(function(numero, indice) {
  console.log('Índice', indice, ':', numero);
});

// Encontrando a posição de um elemento no array
let indiceTres = numeros.indexOf(3);
console.log('Índice do número 3:', indiceTres);

// Removendo um elemento específico do array
numeros.splice(indiceTres, 1);
console.log('Array após remover o número 3:', numeros);
