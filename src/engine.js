import readlineSync from 'readline-sync';
import randomInt from './utils.js';

const engine = (gameFunc, question) => {
  console.log('Welcome to the Brain Games!');
  const UserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${UserName}!`);
  console.log(question);
  const numberArray = [];
  const numOfRounds = 3;
  for (let i = 0; i < numOfRounds; i += 1) {
    numberArray[i] = randomInt(1, 999);
    const [functionValue, functionTask] = gameFunc(numberArray[i]);
    console.log(`Question: ${functionTask}`);

    const answer = readlineSync.question('Your answer: ');
    if (answer === `${functionValue}`) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(.Correct answer was '${functionValue}'.\nLet's try again, ${UserName}!`);
      return Error('Wrong answer');
    }
  }
  console.log(`Congratulations, ${UserName}!`);
  return 0;
};

export default engine;
