/* eslint-disable */
import checkUserAns from './checkUserAns.js';
import randomNum from './randomNum.js';
import readlineSync from 'readline-sync';

function isPrime(num) {
    if (num === 1 || num === 2) {
      return true;
    }
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num !== 1;
}

const gcdFun = (varX, varY) => {
    while (varX !== 0 && varY !== 0) {
        if (varX > varY) {
          varX %= varY;
        } else {
          varY %= varX;
        }
    }
    return varX + varY;
}

const questionToSolve = (question) => {
    console.log(`Question:${question}`)
}

const getUserAns = () => {
    return readlineSync.question('Your answer: ');
}

const evenGame = (numToGuess) =>{
    questionToSolve(` ${numToGuess}`);
    const userAns = getUserAns();
    const rightAns = numToGuess % 2;
    const checkAns = (rightAns === 0 && userAns.toLowerCase() === 'yes') ? true : !!((rightAns === 1 && userAns.toLowerCase() === 'no'));
    return checkUserAns(checkAns, userAns, rightAns);
}

const gcdGame = (varX, varY) =>{
    questionToSolve(` ${varX.toString()} ${varY.toString()}`);
    const userAns = getUserAns();
    const rightAns = gcdFun(varX, varY);
    const checkAns = ((rightAns === parseInt(userAns, 10)) ? true : false)
    return checkUserAns(checkAns, userAns, rightAns);
}

const calcGame = (variableX, variableY, expressionToGuess) =>{
    let rightAns;
    switch (expressionToGuess) {
        case 1: //+
          rightAns = variableX + variableY;
          questionToSolve(` ${variableX} + ${variableY}`);
          break;
        case 2://-
          rightAns = variableX - variableY;
          questionToSolve(` ${variableX} - ${variableY}`);
          break;
        case 3://*
          rightAns = variableX * variableY;
          questionToSolve(` ${variableX} * ${variableY}`);
          break;
        default:
            break;
      }
    const userAns = getUserAns();
    const checkAns = (rightAns === parseInt(userAns, 10));
    return checkUserAns(checkAns, userAns, rightAns);
}

const primeGame = (numToGuess) =>{
    questionToSolve(` ${numToGuess}`);
    const userAns = getUserAns();
    const rightAns = !!(isPrime(numToGuess));
    const checkAns = ((rightAns === true && userAns.toLowerCase() === 'yes') || (rightAns === false && userAns.toLowerCase() === 'no'));
    return checkUserAns(checkAns, userAns, rightAns);
}

const progressionGame = (stepOfProgression,startOfProgression,missInProgression) =>{
    let questionString = '';
    let rightAns = 0;
    for (let j = 1; j <= 10; j += 1) {
        if (j === missInProgression) {
          questionString += ' ..';
          rightAns = startOfProgression;
          startOfProgression += stepOfProgression;
        } else {
          questionString += ` ${startOfProgression}`;
          startOfProgression += stepOfProgression;
        }
    }
    questionToSolve(`${questionString}`);
    const userAns = getUserAns();
    const checkAns = (rightAns === parseInt(userAns, 10)) ? true : false;
    return checkUserAns(checkAns, userAns, rightAns);
}

export default (gameType) => {
    switch (gameType) {
        case 'brain-even':
            
          return evenGame(randomNum(100));
        break;
        
        case 'brain-gcd':
            return gcdGame(randomNum(100),randomNum(100));
        break;
        
        case 'brain-calc':
            return calcGame(randomNum(100),randomNum(100),randomNum(3));
        break;
        
        case 'brain-prime':
            return primeGame(randomNum(100));
        break;

        default:
            return progressionGame(randomNum(20),randomNum(100),randomNum(10));
        break;
    }
};
