import readlineSync from 'readline-sync';
import { getName } from '../cli.js';

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let numOfCorrectAns = 0;
  for (let i = 0; i < 3; i += 1) {
    const numToGuess = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${numToGuess}`);
    const userAns = readlineSync.question('Your answer: ');
    const checkAns = (numToGuess % 2 === 0 && userAns.toLowerCase() === 'yes') ? true : !!((numToGuess % 2 === 1 && userAns.toLowerCase() === 'no'));
    if (checkAns === true) {
      console.log('Correct!');
      numOfCorrectAns += 1;
    } else {
      if (userAns.toLowerCase() === 'yes') {
        console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      } else {
        console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
      }
      console.log(`Let's try again, ${getName()}!`);
      return 0;
    }
  }
  if (numOfCorrectAns === 3) {
    console.log(`Congratulations, ${getName()}!`);
  }
  return 0;
};
