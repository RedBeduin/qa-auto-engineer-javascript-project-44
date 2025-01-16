import readlineSync from 'readline-sync';
import {randomNumberGeneratorX10} from '../utils.js';
import {engine} from '../engine.js';

let braingcdQuestion = 'Find the greatest common divisor of given numbers.';

const gcd = (num) => {



  let firstnum = randomNumberGeneratorX10();
  while (firstnum === 0)
  {
    firstnum = randomNumberGeneratorX10();
  }
  let secondnum = randomNumberGeneratorX10();
  while (secondnum === 0)
  {
    secondnum = randomNumberGeneratorX10();
  }
  let divided;   
  let divider;
  divided = (firstnum > secondnum) ? firstnum : secondnum;  
  divider = (divided === firstnum) ? secondnum : firstnum;
  while (divided % divider !== 0)
  {
    let rest = divided % divider;
    divided = divider;
    divider = rest;
  }
  let braingcdTask = `${firstnum} ${secondnum}`;
  return [divider, braingcdTask];
  
}

engine(gcd, braingcdQuestion);
