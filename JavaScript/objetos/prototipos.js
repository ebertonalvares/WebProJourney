// Protótipos em JavaScript

// Criando um objeto com um protótipo
var meuPrototipo = {
    falar: function() {
        console.log("Olá, protótipo!");
    }
};

// Criando um objeto que usa 'meuPrototipo' como seu protótipo
var meuObjeto = Object.create(meuPrototipo);

// Chamando a função 'falar' que é herdada de 'meuPrototipo'
meuObjeto.falar();
