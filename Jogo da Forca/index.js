const readline = require("readline-sync");

function start(){
    console.log(" Hangman Game  ___");
    console.log("              |   |");
    console.log("              |   o");
    console.log("              |  /|\ ");
    console.log("              |  / \ ");
    console.log("              |     ");
    
    let word = readline.question("\nInput the word for Game ");
    let word2 = word;
    let lenword = word.length;
    console.log(`The word have ${lenword} letters`);
    let count = 0;
    let failed = 0;
    for (i =0; i < lenword;i++){
    
        let letter = readline.question("Input the letter ");
        let check = word.indexOf(letter);
        let lenletter = word.length;
        if (check >= 0){
            console.log("The letter has in the word");
            word = word.replace(`${letter}`,'');
            count = count +1;
        }
        else{
            console.log("The letter hasn't in the word");
            failed = failed + 1;
        }
        if (lenletter <= 0 && lenword == count){
            console.log(`Congratulations !!, the word is ${word2}`);
            count = 0;
        }
        if (lenletter <= 3 && failed >=1 ){
            console.log(`Failed !!, the word is ${word2}`);
            failed =0;
            break;
        }
    };

}


start();