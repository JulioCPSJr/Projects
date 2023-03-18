//Declaration of constant type readline-sync
const readline = require("readline-sync");


//Function main
function start(){
    console.log("Calculator for sum from two numbers");
    let number = readline.questionInt("Input the first number: ");
    let number2 = readline.questionInt("Input the second number: ");

    let sum = number + number2;
    console.log("\nThe sum is: ",sum);
    console.log("\nFinish program.");
}


start();