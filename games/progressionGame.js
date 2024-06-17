import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';

export default () => {
  console.log('What number is missing in the progression??');
  for (let i = 0; i < 3; i += 1) {
    const stepOfProgression = Math.floor(Math.random() * 20) + 1;
    let startOfProgression = Math.floor(Math.random() * 100) + 1;
    const missInProgression = Math.floor(Math.random() * 10);
    let questionString = '';
    let progressionAns = 0;
    let userAns = '';
    for (let j = 0; j < 10; j += 1) {
      if (j === missInProgression) {
        questionString += ' ..';
        progressionAns = startOfProgression;
        startOfProgression += stepOfProgression;
      } else {
        questionString += ` ${startOfProgression}`;
        startOfProgression += stepOfProgression;
      }
    }
    console.log(`Question:${questionString}`);
    userAns = readlineSync.question('Your answer: ');

    if (progressionAns === parseInt(userAns, 10)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${progressionAns}'.`);
      console.log(`Let's try again, ${getName()}!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${getName()}!`);
  return 0;
};
