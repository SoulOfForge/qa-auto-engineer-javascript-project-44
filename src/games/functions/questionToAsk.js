export default (gameType) => {
  if (gameType === 'brain-even') {
    return 'Answer "yes" if the number is even, otherwise answer "no".';
  }
  if (gameType === 'brain-gcd') {
    return 'Find the greatest common divisor of given numbers.';
  }
  if (gameType === 'brain-calc') {
    return 'What is the result of the expression?';
  }
  if (gameType === 'brain-prime') {
    return 'Answer "yes" if given number is prime. Otherwise answer "no".';
  }
  return 'What number is missing in the progression   ?';
};
