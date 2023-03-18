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
    
    for (i =0; i < lenword;i++){
    
        let letter = readline.question("Input the letter ");
        let check = word.indexOf(letter);
        let lenletter = word.length;
        console.log(`${lenletter}`);

        if (check >= 0){
            console.log("The letter has in the word");
            word = word.replace(`${letter}`,'');
            console.log(`${word}`);
        }
        else{
            console.log("The letter hasn't in the word");
        }
        if (lenletter <= 0 && lenword ==1){
            console.log(`Congratulations !!, the word is ${word2}`);
        }
        else{
            console.log(`Failed !!, the word is ${word2}`);
        }
    };

}


start();