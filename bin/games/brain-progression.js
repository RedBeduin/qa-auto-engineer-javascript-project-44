import readlineSync from 'readline-sync';
import {randomNumberGeneratorX10, randomNumberGenerator} from '../utils.js';
import {engine} from '../engine.js';
 
let brainProgressionQuestion = 'What number is missing in the progression?';

const hiddenNum = (num) => {
  let pack = [];
  let questionPack = [];  
  pack[0] = randomNumberGenerator();
  let increase = randomNumberGenerator();
  for(let pos = 1; pos < 11; pos++) 
  {   
    pack[pos] = pack[pos-1] + increase;
  }
  let indexOfHiddenElement = randomNumberGenerator();
  for (let pos = 0; pos < 11; pos++)
  {
    if(pos === indexOfHiddenElement)
    {
      questionPack[pos] = '..';
    }      
    else
    {
      questionPack[pos] = pack[pos];
    }    
  }
  let convertedQuestionPack = `${questionPack[0]}`;
  for(let n = 1; n < 11; n++) 
  {  
    convertedQuestionPack = convertedQuestionPack + ` ${questionPack[n]}`; 
  }
  
  return [pack[indexOfHiddenElement], convertedQuestionPack];
     
 
}; 
 
engine(hiddenNum, brainProgressionQuestion);  
