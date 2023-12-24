// Variáveis em JavaScript

// Declarando uma variável com 'var'
// 'var' é usado para declarar uma variável que pode ser alterada posteriormente
var minhaVariavel;

// Atribuindo um valor a uma variável
// Você pode atribuir um valor a uma variável usando o operador '='
minhaVariavel = "Olá, Mundo!";

// Declarando e atribuindo um valor a uma variável
// Você também pode declarar uma variável e atribuir um valor a ela na mesma linha
var minhaOutraVariavel = "Olá, JavaScript!";

// Declarando uma variável com 'let'
// 'let' é semelhante a 'var', mas tem algumas diferenças importantes relacionadas ao escopo
let minhaVariavelLet = "Olá, let!";

// Declarando uma constante com 'const'
// 'const' é usado para declarar uma variável cujo valor não pode ser alterado
const minhaConstante = "Olá, const!";


//Declaração de Variáveis:

//Variáveis com let (preferencial para variáveis que podem ser reatribuídas):
let saldo = 1000;  // Declaração e atribuição de uma variável
console.log('Saldo:', saldo);

let cidade;  // Declaração de variável sem atribuição
cidade = 'Rio de Janeiro';  // Atribuição posterior
console.log('Cidade:', cidade);

saldo = 1500;  // Reatribuição de valor
console.log('Novo Saldo:', saldo);

//Variáveis com const (preferencial para constantes, cujo valor não será alterado):

const PI = 3.14;  // Declaração e atribuição de uma constante
console.log('Valor de PI:', PI);

// PI = 3.14159;  // Tentativa de reatribuição (gerará um erro)
// console.log('Novo Valor de PI:', PI);

