import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';

function isPrime(num) {
  if (num === 1 || num === 2) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numToGuess = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${numToGuess}`);
    const userAns = readlineSync.question('Your answer: ');
    const checkAns = !!(isPrime(numToGuess));
    if ((checkAns === true && userAns.toLowerCase() === 'yes') || (checkAns === false && userAns.toLowerCase() === 'no')) {
      console.log('Correct!');
    } else {
      if (userAns.toLowerCase() === 'yes') {
        console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      } else if (userAns.toLowerCase() === 'no') {
        console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
      }
      console.log(`Let's try again, ${getName}!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${getName}!`);
  return 0;
};
