// Classes em JavaScript

// Uma classe é um tipo de função, mas em vez de usar a palavra-chave 'function' para iniciar, usamos a palavra-chave 'class'
class MinhaClasse {
    constructor() {
        this.mensagem = "Olá, classe!";
    }

    falar() {
        console.log(this.mensagem);
    }
}

// Criando um objeto da classe
var meuObjeto = new MinhaClasse();

// Chamando o método 'falar' do objeto
meuObjeto.falar();  // Saída: "Olá, classe!"
