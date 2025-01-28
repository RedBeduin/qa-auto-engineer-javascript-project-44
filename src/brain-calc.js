import { randomNumberGenerator } from './utils.js';

export const brainCalcQuestion = 'What is the result of the expression?';

const calc = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const firstnum = randomNumberGenerator();
  const secondnum = randomNumberGenerator();
  let resultOfOperation;
  if (operation === '+') {
    resultOfOperation = firstnum + secondnum;
  } else if (operation === '*') {
    resultOfOperation = firstnum * secondnum;
  } else {
    resultOfOperation = firstnum - secondnum;
  }

  const brainCalcTask = `${firstnum} ${operation} ${secondnum}`;

  return [resultOfOperation, brainCalcTask];
};

export { calc };
