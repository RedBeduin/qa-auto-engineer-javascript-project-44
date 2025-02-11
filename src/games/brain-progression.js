import randomInt from '../utils.js';

export const brainProgressionQuestion = 'What number is missing in the progression?';

const hiddenNum = (indexOfHiddenEl, packToConvert) => {
  const questionPack = [];
  for (let pos = 0; pos < 11; pos += 1) {
    if (pos === indexOfHiddenEl) {
      questionPack[pos] = '..';
    } else {
      questionPack[pos] = packToConvert[pos];
    }
  }
  return questionPack;
};

const progression = () => {
  const pack = [];
  pack[0] = randomInt(1, 999);
  const increase = randomInt(1, 999);
  for (let pos = 1; pos < 11; pos += 1) {
    pack[pos] = pack[pos - 1] + increase;
  }
  const indexOfHiddenElement = randomInt(0, 9);
  const questionPack = hiddenNum(indexOfHiddenElement, pack);
  let convertedQuestionPack = `${questionPack[0]}`;
  for (let n = 1; n < 11; n += 1) {
    convertedQuestionPack += ` ${questionPack[n]}`;
  }

  return [pack[indexOfHiddenElement], convertedQuestionPack];
};

export { progression };
