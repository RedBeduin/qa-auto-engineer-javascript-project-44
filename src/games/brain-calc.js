import { randomNumberGenerator } from '../utils.js';

export const brainCalcQuestion = 'What is the result of the expression?';

const calculator = (firstnum, secondnum, operation) => {
  switch (operation) {
    case '+':
      return firstnum + secondnum;
    case '-':
      return firstnum - secondnum;
    case '*':
      return firstnum * secondnum;
  }
};

const calc = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const firstnum = randomNumberGenerator();
  const secondnum = randomNumberGenerator();
  let resultOfOperation;
  if (operation === '+') {
    resultOfOperation = calculator(firstnum, secondnum, '+');
  } else if (operation === '*') {
    resultOfOperation = calculator(firstnum, secondnum, '*');
  } else {
    resultOfOperation = calculator(firstnum, secondnum, '-');
  }

  const brainCalcTask = `${firstnum} ${operation} ${secondnum}`;

  return [resultOfOperation, brainCalcTask];
};

export { calc };
