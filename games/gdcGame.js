import readlineSync from 'readline-sync';
import {name} from '../src/cli.js';

export default () => {
    console.log(`Find the greatest common divisor of given numbers.`)
    let gcdAns;
    for(let i = 0; i < 3; i++){
        let varX = Math.floor(Math.random() * 100) + 1;
        let varY = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${varX} ${varY}`);
        const userAns = readlineSync.question('Your answer: ');
        while (varX != 0 & varY != 0){
            if(varX > varY){
                varX = varX % varY;
            }else{
                varY = varY % varX;
            }
        }
        gcdAns = varX + varY
        const checkAns = (gcdAns === ~~userAns) ? true : false;
        if(checkAns === true){
            console.log(`Correct!`);
        }
        else{
            console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${gcdAns}'.`);
            console.log(`Let's try again, ${name}!`);
            return 0;
        }
    }
        console.log(`Congratulations, ${name}!`)
  };