// Async/Await em JavaScript

// A palavra-chave 'async' é usada para declarar uma função assíncrona
async function minhaFuncaoAssincrona() {
    // A palavra-chave 'await' é usada para esperar uma Promise ser resolvida
    var resultado = await minhaPromise;
    console.log(resultado);  // Saída: "Operação concluída!"
}

// Chamando a função assíncrona
minhaFuncaoAssincrona();
