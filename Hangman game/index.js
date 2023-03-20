const readline = require("readline-sync");
var randomWords = require('random-words');

function start(){
    console.log(" Hangman Game  ___   ");
    console.log("              |   |  ");
    console.log("              |   o  ");
    console.log("              |  /|\ ");
    console.log("              |  / \ ");
    console.log("              |      ");
    
    let word = randomWords();
    let checkword = word;
    let lenword = word.length;
    console.log(`\nThe word have ${lenword} letters`);
    let count = 0;
    let failed = 0;
    for (i =0; i < lenword;i++){
    
        let letter = readline.question("\nInput the letter ");
        let check = word.indexOf(letter);
        let lenletter = word.length;
        if (check >= 0){
            console.log("The letter has in the word");
            word = word.replace(`${letter}`,'');
            count = count + 1;
        }
        else{
            console.log("The letter hasn't in the word");
            failed = failed + 1;
        }
        if (lenletter <= 0 && lenword == count){
            console.log(`Congratulations !!, the word is ${checkword}`);
            count = 0;
        }
        if (lenletter <= 3 && failed >=1 ){
            console.log(`Failed !!, the word is ${checkword}`);
            failed =0;
            break;
        }
    };

}


start();