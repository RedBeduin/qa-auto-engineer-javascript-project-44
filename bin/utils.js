import readlineSync from 'readline-sync';
const randomNumberGeneratorX10 = () => { 
  return Math.round(Math.random()*100);
};
const randomNumberGenerator  = () => {
  return Math.round(Math.random()*10);
}


export {randomNumberGeneratorX10, randomNumberGenerator}; 