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


//Exemplo de Classe:

// Definição de uma classe chamada 'Pessoa'
class Pessoa {
    // Método construtor para inicializar propriedades
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    // Método de instância para exibir informações da pessoa
    exibirInfo() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
  }
  
  // Criando uma instância da classe Pessoa
  let pessoa1 = new Pessoa('João', 30);
  
  // Chamando o método da instância
  pessoa1.exibirInfo();  // Saída: Nome: João, Idade: 30

  
  //Herança em Classes:

  // Definição de uma classe 'Estudante' que herda de 'Pessoa'
class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
      // Chamando o construtor da classe pai (Pessoa)
      super(nome, idade);
      this.curso = curso;
    }
  
    // Novo método específico para estudantes
    exibirCurso() {
      console.log(`Curso: ${this.curso}`);
    }
  }
  
  // Criando uma instância da classe Estudante
  let estudante1 = new Estudante('Maria', 25, 'Engenharia');
  
  // Chamando métodos da classe pai (Pessoa) e da classe filha (Estudante)
  estudante1.exibirInfo();  // Saída: Nome: Maria, Idade: 25
  estudante1.exibirCurso();  // Saída: Curso: Engenharia

  
  //Métodos Estáticos em Classes:

  // Definição de uma classe 'Calculadora' com método estático
class Calculadora {
    static somar(a, b) {
      return a + b;
    }
  
    static subtrair(a, b) {
      return a - b;
    }
  }
  
  // Chamando métodos estáticos sem criar uma instância da classe
  let resultadoSoma = Calculadora.somar(5, 3);
  console.log('Soma:', resultadoSoma);  // Saída: Soma: 8
  
  let resultadoSubtracao = Calculadora.subtrair(10, 4);
  console.log('Subtração:', resultadoSubtracao);  // Saída: Subtração: 6

  
  