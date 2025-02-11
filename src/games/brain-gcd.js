import randomInt from '../utils.js';

export const braingcdQuestion = 'Find the greatest common divisor of given numbers.';

const euclidAlgorithm = (firstnum, secondnum) => {
  let divided;
  let divider;
  divided = (firstnum > secondnum) ? firstnum : secondnum;
  divider = (divided === firstnum) ? secondnum : firstnum;
  while (divided % divider !== 0) {
    const rest = divided % divider;
    divided = divider;
    divider = rest;
  }
  return divider;
};

const gcd = () => {
  const firstnum = randomInt(1, 999);
  const secondnum = randomInt(1, 999);

  const braingcdTask = `${firstnum} ${secondnum}`;
  return [euclidAlgorithm(firstnum, secondnum), braingcdTask];
};

export { gcd };
