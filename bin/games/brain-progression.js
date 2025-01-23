import { randomNumberGenerator } from '../../src/utils.js';
import engine from '../../src/engine.js';

const brainProgressionQuestion = 'What number is missing in the progression?';

const hiddenNum = () => {
  const pack = [];
  const questionPack = [];
  pack[0] = randomNumberGenerator();
  const increase = randomNumberGenerator();
  for (let pos = 1; pos < 11; pos += 1) {
    pack[pos] = pack[pos - 1] + increase;
  }
  const indexOfHiddenElement = randomNumberGenerator();
  for (let pos = 0; pos < 11; pos += 1) {
    if (pos === indexOfHiddenElement) {
      questionPack[pos] = '..';
    } else {
      questionPack[pos] = pack[pos];
    }
  }
  let convertedQuestionPack = `${questionPack[0]}`;
  for (let n = 1; n < 11; n += 1) {
    convertedQuestionPack += ` ${questionPack[n]}`;
  }

  return [pack[indexOfHiddenElement], convertedQuestionPack];
};

engine(hiddenNum, brainProgressionQuestion);
