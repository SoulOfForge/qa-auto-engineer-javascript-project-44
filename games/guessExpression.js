import readlineSync from 'readline-sync';
import {name} from '../src/cli.js';

export default () => {
    console.log(`What is the result of the expression?`)
    let numOfCorrectAns = 0;
    // switch(expressionToGuess){
    //     case 1: 
        
    // }
    for(let i = 0; i < 3; i++){
        const expressionToGuess = Math.floor(Math.random() * 3) + 1;
        const variableX = Math.floor(Math.random() * 100) + 1;
        const variableY = Math.floor(Math.random() * 100) + 1;
        let userAns = '';
        let expressionAns = 0;
        let checkAns = true;
        switch (expressionToGuess){
            case 1: //+
                expressionAns = variableX + variableY;
                console.log(`Question: ${variableX} + ${variableY}`);
                userAns = readlineSync.question('Your answer: ');
                checkAns = ((expressionAns) === (~~userAns)) ? true : false;
            break
            case 2://-
                expressionAns = variableX - variableY;
                console.log(`Question: ${variableX} - ${variableY}`);
                userAns = readlineSync.question('Your answer: ');
                checkAns = ((expressionAns) === (~~userAns)) ? true : false;
            break
            case 3://*
                expressionAns = variableX * variableY;
                console.log(`Question: ${variableX} * ${variableY}`);
                userAns = readlineSync.question('Your answer: ');
                checkAns = ((expressionAns) === (~~userAns)) ? true : false;
            break
        }
        if(checkAns === true){
            console.log(`Correct!`);
        }
        else{
            console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${expressionAns}'.`);
            console.log(`Let's try again, ${name}!`);
            return 0;
        }
    }
    console.log(`Congratulations, ${name}!`)
  };