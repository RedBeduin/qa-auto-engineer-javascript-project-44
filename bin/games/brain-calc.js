import readlineSync from 'readline-sync';
import {engine} from '../engine.js'

let brainCalcQuestion = 'What is the result of the expression?'; 

const calc = (num) => {
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
 
  let firstnum = Math.round(Math.random());
  let secondnum = Math.round(Math.random());
  let resultOfOperation;    
  if (operation === '+')
  { 
    resultOfOperation = firstnum + secondnum;
  }
  else if (operation === '*')
  { 
    resultOfOperation = firstnum * secondnum;
  }
  else
  { 
    resultOfOperation = firstnum - secondnum;
  }

  let brainCalcTask = `${firstnum} ${operation} ${secondnum}`;

  return [resultOfOperation, brainCalcTask];
};

engine(calc, brainCalcQuestion);