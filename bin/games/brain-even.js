import readlineSync from 'readline-sync';
import {engine} from '../engine.js';

let brainEvenQuestion = 'Answer "yes" if the number is even, otherwise answer "no".'; 

const isEven = (num) => {
  if(num % 2 === 0)
  {
    return ['yes', num];
  }
  else
  {
    return ['no', num];
  }
};
 
engine(isEven, brainEvenQuestion);
