// Controle de fluxo com switch-case em JavaScript

var fruta = "maçã";

// A instrução 'switch' é usada para selecionar um dos muitos blocos de código a serem executados
switch (fruta) {
    case "banana":
        console.log("Eu sou uma banana.");
        break;
    case "maçã":
        console.log("Eu sou uma maçã.");
        break;
    default:
        console.log("Eu não sou uma banana nem uma maçã.");
}


//Exemplo com switch-case:


let diaSemana = 'Segunda';

// Utiliza o switch para verificar o dia da semana
switch (diaSemana) {
  case 'Segunda':
    console.log('É o primeiro dia útil da semana.');
    break;
  case 'Quarta':
    console.log('Estamos no meio da semana.');
    break;
  case 'Sexta':
    console.log('Chegou o final de semana!');
    break;
  default:
    console.log('Outro dia da semana.');
}
