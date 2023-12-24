// Tipos de dados em JavaScript

// Números
var numero = 10;

// Strings
var string = "Olá, Mundo!";

// Booleanos
var verdadeiro = true;
var falso = false;

// Objeto
var objeto = {};

// Array
var array = [];

// Null
var nulo = null;

// Undefined
var indefinido;


//Tipos Primitivos:

//Números:
let numeroInteiro = 42;  // Número inteiro
let numeroDecimal = 3.14;  // Número decimal (ponto flutuante)
let numeroNegativo = -7;  // Número negativo

console.log('Número Inteiro:', numeroInteiro);
console.log('Número Decimal:', numeroDecimal);
console.log('Número Negativo:', numeroNegativo);
//Strings:
let texto = 'Olá, mundo!';  // String

console.log('Texto:', texto);
//Booleanos:
let verdadeiro = true;  // Booleano true
let falso = false;     // Booleano false

console.log('Booleano True:', verdadeiro);
console.log('Booleano False:', falso);
//Undefined e Null:
let indefinido;  // Valor padrão é undefined
let nulo = null;  // Valor nulo

console.log('Indefinido:', indefinido);
console.log('Nulo:', nulo);


//Tipos de Referência:

//Arrays:
let arrayNumeros = [1, 2, 3, 4, 5];  // Array de números
let arrayStrings = ['maçã', 'banana', 'morango'];  // Array de strings

console.log('Array de Números:', arrayNumeros);
console.log('Array de Strings:', arrayStrings);
//Objetos:
let pessoa = {
    nome: 'João',
    idade: 25,
    cidade: 'São Paulo'
  };  // Objeto com propriedades
  
  console.log('Objeto Pessoa:', pessoa);
//Funções:
function somar(a, b) {
    return a + b;
  }  // Função que retorna a soma de dois números
  
  console.log('Resultado da Soma:', somar(3, 4));
  