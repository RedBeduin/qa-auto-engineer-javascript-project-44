import readlineSync from 'readline-sync';

const isEven = (num) => {
  if(num % 2 === 0)
  {
    return true
  }
  else 
  {
    return false
  }
}

const sayNumEvOrNot = (num) => {
  if(isEven(num) === true)
  {
    return 'yes';
  }
  else
  {
    return 'no';
  }
}
 
console.log('Welcome to the Brain Games!');
let UserName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${UserName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let num = [];
for(let i = 0; i < 3; i++)
  { 
    num[i] =  Math.round(Math.random()*100);
    console.log('Question: '+num[i] );
    let answer = readlineSync.question('Your answer: ');
    if (answer === sayNumEvOrNot(num[i]))
    {
      console.log('Correct!')
      if(i === 2) console.log(`Congratulations, ${UserName}!`) 
    }
    else
    {
      console.log(`${answer} is wrong answer ;(.Correct answer was ${sayNumEvOrNot(num[i])}.\nLet's try again, ${UserName}!`);
      break; 
    }
  }