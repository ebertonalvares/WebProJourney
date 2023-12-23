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
