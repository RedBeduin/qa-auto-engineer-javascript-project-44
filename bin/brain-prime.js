import readlineSync from 'readline-sync';

const isPrime = (num) => {
  if (num < 2)
  {
    return false;
  }
  
  if(num === 2)  
  {
    return true;
  }   
  
  for(let i = 2; i < num; i++)  
  {
    if (num % i === 0)
    {
      return false;  
    } 
  } 
  
  return true;
} 

const sayNumPrimeOrNot = (num) => {
  if(isPrime(num) === true)
  {
    return 'yes';
  }
  else if(isPrime(num) === false)
  {
    return 'no';
  }
}

console.log('Welcome to the Brain Games!');
let UserName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${UserName}!`);
console.log('Answer "yes" if the number is prime, otherwise answer "no".');
let num = [];
for(let i = 0; i < 3; i++)
  { 
    num[i] =  Math.round(Math.random()*100);
    console.log('Question: '+num[i] );
    let answer = readlineSync.question('Your answer: ');
    if (answer === sayNumPrimeOrNot(num[i]))
    {
      console.log('Correct!')
      if(i === 2) console.log(`Congratulations, ${UserName}!`) 
    }
    else
    {
      console.log(`'${answer}' is wrong answer ;(.Correct answer was '${sayNumPrimeOrNot(num[i])}'.\nLet's try again, ${UserName}!`);
      break; 
    }
  }