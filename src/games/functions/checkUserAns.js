export default (checkRes, userAns, rightAns) => {
  if (checkRes === true) {
    console.log('Correct!');
    return true;
  }

  if (userAns.toLowerCase() === 'no') {
    console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
  } else if (userAns.toLowerCase() === 'yes') {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
  } else {
    console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${rightAns}'.`);
  }
  return false;
};
