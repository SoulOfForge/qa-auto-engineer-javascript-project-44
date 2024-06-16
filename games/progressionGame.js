import readlineSync from 'readline-sync';
import {name} from '../src/cli.js';

export default () => {
    console.log(`What number is missing in the progression??`)
    for(let i = 0; i < 3; i++){
        const stepOfProgression = Math.floor(Math.random() * 20) + 1;
        var startOfProgression = Math.floor(Math.random() * 100) + 1;
        const missInProgression = Math.floor(Math.random() * 10);
        var questionString = '';
        var progressionAns = 0;
        var userAns = '';
        for(let j = 0; j < 10; j++){
            if(j === missInProgression){
                questionString += ` ..`;
                progressionAns = startOfProgression;
                startOfProgression += stepOfProgression;
            }
            else{
                questionString += ` ${startOfProgression}`;
                startOfProgression += stepOfProgression;               
            }
        }
        console.log(`Question:${questionString}`);
        userAns = readlineSync.question('Your answer: ');

        if(progressionAns === ~~userAns){
            console.log(`Correct!`);
        }
        else{
            console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${progressionAns}'.`);
            console.log(`Let's try again, ${name}!`);
            return 0;
        }
    }
    console.log(`Congratulations, ${name}!`)
  };