import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
let UserName = readlineSync.question('May I have your name? '); 
console.log(`Hello, ${UserName}!`);
console.log('Find the greatest common divisor of given numbers.');
for (let i = 0; i < 3; i++)
{ 
  let firstnum = Math.round(Math.random()*100);
  while (firstnum === 0)
  {
    firstnum = Math.round(Math.random()*100);
  }
  let secondnum = Math.round(Math.random()*100);
  while (secondnum === 0)
  {
    secondnum = Math.round(Math.random()*100);
  }
     
  let div;  
  for (div = (firstnum > secondnum) ? secondnum : firstnum; div > 0; div--) 
  {  
    if (firstnum % div === 0 && secondnum % div === 0)
    {
      break;
    }
  }       
          
  console.log(`Question: ${firstnum} ${secondnum}`);       
  let answer  = readlineSync.question('Your answer: ');
  if (+(answer) === div) 
  {    
    console.log('Correct!');
    if (i === 2)
    {  
      console.log(`Congratulations, ${UserName}!`);    
    }
  }
  else
  {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${div}'.\nLet's try again, ${UserName}!`); 
    break;
  }     
}
 