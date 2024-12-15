import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
let UserName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${UserName}!`);
console.log('What is the result of the expression?');
let num = [];
for (let i = 0; i < 3; i++)
{   let firstnum = Math.round(Math.random()*100); 
    let secondnum = Math.round(Math.random()*100);
    let operation;
    let operationDecide = Math.random();
    if (operationDecide < 0.34)
    {
        operation = '+';
        num[i] = firstnum + secondnum;
    }
    else if (operationDecide > 0.66)
    {
        operation = '*';
        num[i] = firstnum * secondnum;
    }
    else
    {
        operation = '-';
        num[i] = firstnum - secondnum;
    }
console.log(`Question: ${firstnum} ${operation} ${secondnum}`);       
let answer = readlineSync.question('Your answer: ');
if(+(answer) === num[i]) 
{    
  console.log('Correct!');
  if(i === 2) 
  {  
    console.log(`Congratulations, ${UserName}!`);    
  }  
}
else
{
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${num[i]}'.\nLet's try again, ${UserName}!`);
    break;
}     
}