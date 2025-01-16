import readlineSync from 'readline-sync';
import {engine} from '../engine.js';

let brainPrimeQuestion = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {  
  if (num < 2)
  {
    return ['no', num];
  }
  
  if(num === 2) 
  {
    return ['yes', num];
  }   
  
  for(let i = 2; i < num; i++)  
  {
    if (num % i === 0)
    {
      return ['no', num];   
    } 
  } 
  
  return ['yes', num];
} 
 


engine(isPrime, brainPrimeQuestion);