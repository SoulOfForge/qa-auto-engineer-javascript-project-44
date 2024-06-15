import readlineSync from 'readline-sync';
export let name = '';
export default () => {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
