/* eslint-disable */

import questionToAsk from './questionToAsk.js';
import playerName from '../../cli.js'
import gamesAlgorithm from './gamesAlgorithm.js';
import gameCheck from './gameCheck.js';
import readlineSync from 'readline-sync';

export default (gameType) => {
    const Name = playerName();
    console.log(questionToAsk(gameType));
    for(let i = 0; i < 3; i += 1){
        const taskQuestion = gamesAlgorithm(gameType);
        if(taskQuestion === false){
            console.log(`Let's try again, ${Name}!`);
            return 0;
        }  
    }
    console.log(`Congratulations, ${Name}`);

    return 0;
};
