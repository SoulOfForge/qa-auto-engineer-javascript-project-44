import readlineSync from 'readline-sync';
import { getName } from '../cli.js';

export default () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const expressionToGuess = Math.floor(Math.random() * 3) + 1;
    const variableX = Math.floor(Math.random() * 100) + 1;
    const variableY = Math.floor(Math.random() * 100) + 1;
    let userAns = '';
    let expressionAns = 0;
    let checkAns = true;
    switch (expressionToGuess) {
      case 1: //+
        expressionAns = variableX + variableY;
        console.log(`Question: ${variableX} + ${variableY}`);
        userAns = readlineSync.question('Your answer: ');
        checkAns = (expressionAns === parseInt(userAns, 10));
        break;
      case 2://-
        expressionAns = variableX - variableY;
        console.log(`Question: ${variableX} - ${variableY}`);
        userAns = readlineSync.question('Your answer: ');
        checkAns = (expressionAns === parseInt(userAns, 10));
        break;
      case 3://*
        expressionAns = variableX * variableY;
        console.log(`Question: ${variableX} * ${variableY}`);
        userAns = readlineSync.question('Your answer: ');
        checkAns = (expressionAns === parseInt(userAns, 10));
        break;
      default:
    }
    if (checkAns === true) {
      console.log('Correct!');
    } else {
      console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${expressionAns}'.`);
      console.log(`Let's try again, ${getName()}!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${getName()}!`);
  return 0;
};
