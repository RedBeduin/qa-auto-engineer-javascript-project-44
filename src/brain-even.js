export const brainEvenQuestion = 'Answer "yes" if the number odd otherwise answer "no"';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  return false;
};

const sayEvenOrNot = (num) => ((isEven(num)) ? ['yes', num] : ['no', num]);

export { sayEvenOrNot };
