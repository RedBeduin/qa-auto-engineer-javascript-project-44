import readlineSync from 'readline-sync';
import {randomNumberGeneratorX10} from '../bin/utils.js';

const engine = (gameFunc, question) => {
  console.log('Welcome to the Brain Games!');
  let UserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${UserName}!`);
  console.log(question);
  let numberArray = [];
  for (let i = 0; i < 3; i++)
  {
    numberArray[i] = randomNumberGeneratorX10();
    let functionParams = ['value', 'task'];
    functionParams[0] = gameFunc(numberArray[i])[0];
    functionParams[1] = gameFunc(numberArray[i])[1];
    
     
    console.log('Question: '+functionParams[1]);

    let answer = readlineSync.question('Your answer: ');
    if (answer === `${functionParams[0]}`)
    {
      console.log('Correct!')
      if(i === 2)
      {
        console.log(`Congratulation, ${UserName}!`)  
      }  
    }
    else
    {
      console.log(`'${answer}' is wrong answer ;(.Correct answer was '${functionParams[0]}'.\nLet's try again, ${UserName}!`);
      return Error('Wrong answer');
    }  
  }
};    

export {engine};

