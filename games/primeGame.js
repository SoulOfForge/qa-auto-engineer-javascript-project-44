import readlineSync from 'readline-sync';
import {name} from '../src/cli.js';

function isPrime(num) {
    if(num === 1 || num === 2){
        return true;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
 }

export default () => {
    console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`)
    for(let i = 0; i < 3; i++){
        const numToGuess = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${numToGuess}`);
        const userAns = readlineSync.question('Your answer: ');
        const checkAns = (isPrime(numToGuess)) ? true : false;
        if((checkAns === true && userAns.toLowerCase() === "yes") || (checkAns === false && userAns.toLowerCase() === "no")){
            console.log(`Correct!`);
        }
        else{
            if(userAns.toLowerCase() === "yes"){
                console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
            }
            else if(userAns.toLowerCase() === "no"){
                console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`);
            }
            else{
                console.log(`you should answer "yes" or "no" only.`);
            }
            return 0;
        }
    }
        console.log(`Congratulations, ${name}!`)
  };