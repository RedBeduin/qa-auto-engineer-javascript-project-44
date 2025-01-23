import readlineSync from 'readline-sync';
import { randomNumberGeneratorX10 } from './utils.js';

const engine = (gameFunc, question) => {
  console.log('Welcome to the Brain Games!');
  const UserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${UserName}!`);
  console.log(question);
  const numberArray = [];
  for (let i = 0; i < 3; i += 1) {
    numberArray[i] = randomNumberGeneratorX10();
    const [functionValue, functionTask] = gameFunc(numberArray[i]);
    console.log(`Question: ${functionTask}`);

    const answer = readlineSync.question('Your answer: ');
    if (answer === `${functionValue}`) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulation, ${UserName}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(.Correct answer was '${functionValue}'.\nLet's try again, ${UserName}!`);
      return Error('Wrong answer');
    }
  }
  return 'Congratulations!';
};

export default engine;
