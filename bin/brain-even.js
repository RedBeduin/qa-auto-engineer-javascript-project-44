#!/usr/bin/env node
import engine from '../src/engine.js';
// import { sayEvenOrNot, brainEvenQuestion } from '../src/brain-even.js';

const brainEvenQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  return false;
};

const sayEvenOrNot = (num) => ((isEven(num)) ? ['yes', num] : ['no', num]);

engine(sayEvenOrNot, brainEvenQuestion);
