import { randomNumberGeneratorX10 } from '../../src/utils.js';
import engine from '../../src/engine.js';

const braingcdQuestion = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  let firstnum = randomNumberGeneratorX10();
  while (firstnum === 0) {
    firstnum = randomNumberGeneratorX10();
  }
  let secondnum = randomNumberGeneratorX10();
  while (secondnum === 0) {
    secondnum = randomNumberGeneratorX10();
  }
  let divided;
  let divider;
  divided = (firstnum > secondnum) ? firstnum : secondnum;
  divider = (divided === firstnum) ? secondnum : firstnum;
  while (divided % divider !== 0) {
    const rest = divided % divider;
    divided = divider;
    divider = rest;
  }
  const braingcdTask = `${firstnum} ${secondnum}`;
  return [divider, braingcdTask];
};

engine(gcd, braingcdQuestion);
