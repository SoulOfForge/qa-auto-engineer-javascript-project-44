import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';

export default () => {
  console.log('Find the greatest common divisor of given numbers.');
  let gcdAns;
  for (let i = 0; i < 3; i += 1) {
    let varX = Math.floor(Math.random() * 100) + 1;
    let varY = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${varX} ${varY}`);
    const userAns = readlineSync.question('Your answer: ');
    while (varX !== 0 && varY !== 0) {
      if (varX > varY) {
        varX %= varY;
      } else {
        varY %= varX;
      }
    }
    gcdAns = varX + varY;
    if ((gcdAns === parseInt(userAns, 10)) === true) {
      console.log('Correct!');
    } else {
      console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${gcdAns}'.`);
      console.log(`Let's try again, ${getName()}!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${getName()}!`);
  return 0;
};
