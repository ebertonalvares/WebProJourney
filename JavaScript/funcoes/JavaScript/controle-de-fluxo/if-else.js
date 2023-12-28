// Controle de fluxo com if-else em JavaScript

var numero = 10;

// A instrução 'if' é usada para executar um bloco de código se uma condição for verdadeira
if (numero > 0) {
    console.log("O número é positivo.");
} 
// A instrução 'else if' é usada para especificar uma nova condição se a primeira condição for falsa
else if (numero < 0) {
    console.log("O número é negativo.");
} 
// A instrução 'else' é usada para especificar um bloco de código a ser executado se todas as condições forem falsas
else {
    console.log("O número é zero.");
}


//Exemplo básico com if:

let idade = 18;

// Verifica se a idade é maior ou igual a 18
if (idade >= 18) {
  console.log('Você é maior de idade.');
} else {
  console.log('Você é menor de idade.');
}


//Exemplo com if, else if e else:


let nota = 85;

// Verifica a nota em diferentes faixas
if (nota >= 90) {
  console.log('Nota A');
} else if (nota >= 80) {
  console.log('Nota B');
} else if (nota >= 70) {
  console.log('Nota C');
} else {
  console.log('Nota D');
}


//Exemplo com operador ternário:


let temperatura = 25;
// Usa o operador ternário para determinar o valor de 'clima'
let clima = (temperatura > 30) ? 'Quente' : 'Frio';
console.log('O clima é:', clima);
