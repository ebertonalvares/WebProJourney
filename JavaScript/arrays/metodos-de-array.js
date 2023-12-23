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
