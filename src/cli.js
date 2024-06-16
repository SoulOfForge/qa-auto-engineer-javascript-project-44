import readlineSync from 'readline-sync';

let name;
export default () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const getName = () => name;
