import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
let UserName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${UserName}!`);
console.log('What number is missing in the progression?');
let pack = [];
let questionPack = []; 
for (let i = 0; i < 3; i++)
{
  pack[i] = [];
  questionPack[i]=[];
  pack[i][0] = Math.round(Math.random()*10);
  let increas = Math.round(Math.random()*10);
  for(let j = 1; j < 11; j++) 
  {    
    pack[i][j] = pack[i][j-1] + increas;
  } 
  let indexOfHiddenElement = Math.round(Math.random()*10);
  for (let j = 0; j < 11; j++)
  {
    if(j === indexOfHiddenElement)
    {
      questionPack[i][j] = '..';
    }      
    else
    {
      questionPack[i][j] = pack[i][j];
    }    
  }
  let convertedQuestionPack = `${questionPack[i][0]}`;
  for(let n = 1; n < 11; n++)
  {  
    convertedQuestionPack = convertedQuestionPack + ` ${questionPack[i][n]}`; 
  }  
  console.log(`Question: ${convertedQuestionPack}`); 
  let answer = readlineSync.question('Your answer: ');
  if (+(answer) === pack[i][indexOfHiddenElement]) 
    {    
      console.log('Correct!');
      if (i === 2)
      {  
        console.log(`Congratulations, ${UserName}!`);    
      }
    }
    else
    {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${pack[i][indexOfHiddenElement]}'.\nLet's try again, ${UserName}!`); 
      break;
    }     
};
