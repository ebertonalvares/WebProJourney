// Criando objetos em JavaScript

// Um objeto é uma coleção de propriedades relacionadas

// Criando um objeto vazio
var meuObjeto = {};

// Adicionando propriedades ao objeto
// As propriedades de um objeto são definidas como pares de nome/valor
meuObjeto.nome = "Meu Objeto";
meuObjeto.tipo = "Objeto";

// Acessando propriedades do objeto
// Você pode acessar as propriedades de um objeto usando a notação de ponto
console.log(meuObjeto.nome);  // Saída: "Meu Objeto"


//Notação Literal:

// Criando um objeto usando notação literal
let pessoa = {
    nome: 'Alice',
    idade: 28,
    cidade: 'São Paulo',
    exibirInfo: function() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Cidade: ${this.cidade}`);
    }
  };
  
  // Chamando o método do objeto
  pessoa.exibirInfo();  // Saída: Nome: Alice, Idade: 28, Cidade: São Paulo

  
  //Construtor de Objetos:

  // Usando uma função construtora para criar objetos
function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.exibirInfo = function() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    };
  }
  
  // Criando instâncias usando o construtor
  let carro1 = new Carro('Toyota', 'Corolla', 2022);
  let carro2 = new Carro('Honda', 'Civic', 2021);
  
  // Chamando o método das instâncias
  carro1.exibirInfo();  // Saída: Marca: Toyota, Modelo: Corolla, Ano: 2022
  carro2.exibirInfo();  // Saída: Marca: Honda, Modelo: Civic, Ano: 2021

  
  //Factory Function (Função Fábrica):

  // Usando uma função fábrica para criar objetos
function criarPessoa(nome, idade, cidade) {
    return {
      nome: nome,
      idade: idade,
      cidade: cidade,
      exibirInfo: function() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Cidade: ${this.cidade}`);
      }
    };
  }
  
  // Criando instância usando a função fábrica
  let pessoa1 = criarPessoa('Carlos', 35, 'Rio de Janeiro');
  
  // Chamando o método da instância
  pessoa1.exibirInfo();  // Saída: Nome: Carlos, Idade: 35, Cidade: Rio de Janeiro
  