//Declara uma constante do tipo readline-sync
const readline = require("readline-sync");


//função principal do nosso sistema
function start(){
    console.log("Calculator for sum from two numbers");
    let numero = readline.questionInt("Entre com o primeiro numero: ");
    let numero2 = readline.questionInt("Entre com o segundo numero: ");

    let sum = numero + numero2;
    console.log("The sum is: ",sum);
    console.log("Fim de Programa.");
}


start();