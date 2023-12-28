// Async/Await em JavaScript

// A palavra-chave 'async' é usada para declarar uma função assíncrona
async function minhaFuncaoAssincrona() {
    // A palavra-chave 'await' é usada para esperar uma Promise ser resolvida
    var resultado = await minhaPromise;
    console.log(resultado);  // Saída: "Operação concluída!"
}

// Chamando a função assíncrona
minhaFuncaoAssincrona();


//Exemplo básico de como usar async/await:

// Função assíncrona que simula uma operação assíncrona
function aguardarTempo(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  
  // Função assíncrona usando async/await
  async function exemploAsync() {
    console.log('Início da Função Async');
  
    try {
      // Await é usado para esperar que a Promise seja resolvida
      await aguardarTempo(2000);
      console.log('Após aguardar 2000 milissegundos');
  
      // Pode-se usar await com outras operações assíncronas
      const resultado = await Promise.resolve('Resultado da Promise');
      console.log('Resultado:', resultado);
    } catch (erro) {
      console.error('Ocorreu um erro:', erro);
    }
  
    console.log('Fim da Função Async');
  }
  
  // Chamando a função assíncrona
  exemploAsync();

  
  /*Neste exemplo:

  aguardarTempo é uma função que retorna uma Promise e simula uma operação assíncrona 
  (como uma requisição à API ou leitura de arquivo) ao aguardar um determinado tempo.
  exemploAsync é uma função assíncrona que usa await para esperar que a Promise seja resolvida.
   Ela também demonstra como tratar erros usando um bloco try/catch.
  O código é mais fácil de ler e entender, pois a lógica assíncrona se parece com código síncrono.
  Lembre-se de que uma função que usa async sempre retorna uma Promise. 
  Se a função assíncrona não especificar explicitamente um valor de retorno,
   ela retornará uma Promise resolvida com o valor undefined.
  
  Essa abordagem torna o código mais limpo e evita o chamado "Callback Hell" 
  (aninhamento excessivo de callbacks).*/ 