export const brainPrimeQuestion = 'Answer "yes" if given number is prime, otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const sayPrimeOrNot = (num) => ((isPrime(num)) ? ['yes', num] : ['no', num]);

export { sayPrimeOrNot };
