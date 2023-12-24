// Promises em JavaScript

// Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona

// Criando uma Promise
var minhaPromise = new Promise(function(resolve, reject) {
    // A função passada para o construtor Promise é executada imediatamente.
    // Ela recebe duas funções como parâmetros: resolve e reject - estas funções são predefinidas pelo JavaScript

    // Simulando uma operação assíncrona com setTimeout
    setTimeout(function() {
        // Se tudo ocorreu bem, chamamos resolve
        resolve("Operação concluída!");
    }, 1000);
});

// Lidando com o resultado da Promise
// O método 'then' é usado para especificar o que fazer quando a Promise é resolvida
minhaPromise.then(function(resultado) {
    console.log(resultado);  // Saída: "Operação concluída!"
});

//exemplo básico de como usar Promises:

// Exemplo de uma função que retorna uma Promise
function aguardarTempo(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Aguardou ${ms} milissegundos`);
      }, ms);
    });
  }
  
  // Usando a Promise
  aguardarTempo(2000)
    .then(resultado => {
      console.log(resultado); // Saída: Aguardou 2000 milissegundos
      return 42;
    })
    .then(valor => {
      console.log(`O valor é ${valor}`); // Saída: O valor é 42
    })
    .catch(erro => {
      console.error('Ocorreu um erro:', erro);
    })
    .finally(() => {
      console.log('Operação concluída.');
    });

    
    /*Neste exemplo:

aguardarTempo é uma função que retorna uma Promise. Dentro do construtor da Promise,
 usamos setTimeout para simular uma operação assíncrona que aguarda um determinado tempo.
Usamos o método .then() para lidar com o sucesso da Promise. 
O próximo .then() é encadeado para mostrar como os resultados podem ser passados adiante.
O método .catch() é usado para tratar erros caso ocorram durante a execução da Promise.
O método .finally() é opcional e é executado independentemente
 de a Promise ter sido resolvida ou rejeitada.
A utilização de Promises facilita a leitura e manutenção do código, 
especialmente quando há várias operações assíncronas a serem realizadas em sequência.
 O código com Promises tende a ser mais limpo e evita o aninhamento excessivo de callbacks 
 (callback hell).
*/