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


//Protótipo Básico:

// Criando um objeto literal
let animal = {
    tipo: 'Desconhecido',
    som: function() {
      console.log('Som desconhecido');
    }
  };
  
  // Criando um objeto que herda do protótipo 'animal'
  let gato = Object.create(animal);
  gato.tipo = 'Gato';
  gato.som = function() {
    console.log('Miau!');
  };
  
  // Chamando métodos do objeto 'gato' e do protótipo 'animal'
  gato.som();  // Saída: Miau!
  animal.som();  // Saída: Som desconhecido

  
  //Função Construtora e Protótipo:

  // Função construtora para criar objetos 'Carro'
function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  
  // Adicionando um método ao protótipo da função construtora
  Carro.prototype.exibirInfo = function() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
  };
  
  // Criando instâncias usando a função construtora
  let carro1 = new Carro('Toyota', 'Corolla', 2022);
  let carro2 = new Carro('Honda', 'Civic', 2021);
  
  // Chamando o método do protótipo
  carro1.exibirInfo();  // Saída: Marca: Toyota, Modelo: Corolla, Ano: 2022
  carro2.exibirInfo();  // Saída: Marca: Honda, Modelo: Civic, Ano: 2021

  
  //Herança com Object.setPrototypeOf:

  // Objeto protótipo
let forma = {
    area: function() {
      console.log('Área desconhecida');
    }
  };
  
  // Objeto que herda do protótipo 'forma'
  let quadrado = {
    lado: 5
  };
  
  // Estabelecendo a herança usando Object.setPrototypeOf
  Object.setPrototypeOf(quadrado, forma);
  
  // Chamando o método do protótipo
  quadrado.area();  // Saída: Área desconhecida

  
  