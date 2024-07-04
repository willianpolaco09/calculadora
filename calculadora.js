const prompt = require('prompt-sync')();

while (true) {
    console.log(`
    === Menu de Calculadora ===
    1. Adicao(+)
    2. Subtracao(-)
    3. Multiplicacao (*)
    4. Divisao (/)
    5. Porcentagem (%)
    0. Sair 
    `);
    
    let opcao = prompt('Escolha uma opção: ');
    let numero1 = +prompt ("Digite um numero ")
    let numero2 = +prompt ("Digite outro numero ")
  
    if ( isNaN (numero1) || isNaN (numero2)){
      console.log("Por favor, insira números válidos");
    }else
    if (opcao == "1"){
    Adicao (numero1, numero2)
    } else if (opcao == "2"){
      Subtracao (numero1, numero2)
    }else if (opcao == "3"){
      Multiplicacao (numero1, numero2)
    }else if (opcao == "4"){
      Divisao (numero1, numero2)
    }else if (opcao == "5"){
      Porcentagem (numero1, numero2 )
    }else if (opcao == "0"){
     process.exit()
    }else {
      invalida()
    }
}

function Adicao(num1, num2){
  console.log( num1 + num2)
}
 function Subtracao(num1, num2){
  console.log(num1 - num2)
 }
 function Multiplicacao(num1, num2){
  console.log(num1 * num2);
 }
 function Divisao (num1, num2){
  console.log(num1 / num2);
 }
 function Porcentagem (num1, num2){
  console.log(num1 % num2 /100);
 }
 function invalida () {
  console.log("Opção inválida,. digite outro numero");
 }