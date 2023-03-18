//Declaration of constant type readline-sync
const readline = require("readline-sync");


//Function main
function start(){
    console.log("Calculator from two numbers");
    console.log("Select the operation math - 1.Sum 2.Sub 3.Div 4.Mult");
    let oper = readline.questionInt("\nInput the operation Math ");
    let number = readline.questionInt("\nInput the first number: ");
    let number2 = readline.questionInt("Input the second number: ");
    let result;
    switch(oper){
        case 1:
            result = number + number2;
            break;
        case 2:
            result = number - number2;
            break;
        case 3:
            result = number/number2;
            break;
        case 4: 
            result = number * number2;
            break;
    }
    console.log("\nThe result is: ",result);
    console.log("\nFinish program.");
}


start();