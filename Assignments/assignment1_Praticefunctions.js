/* Practise Functions in Javascript
1) Practise function declaration : assign a fucntion to a variable
2) Practise function expression - Annonymouse function, Arrow function
3) use all 3 fucntion and call the fucntion using variable
*/

// Practise function declaration : assign a fucntion to a variable

function calculate(a,b){
    let c = a+b;
    console.log(`sum of ${a} and ${b} is ${c}`)
}

calculate(3,5) // Result : sum of 3 and 5 is 8

//2) Practise function expression - Annonymouse function, Arrow function

const calculate = function (a,b){
    let c = a+b;
    console.log(`sum of ${a} and ${b} is ${c}`)
}

calculate(4,5) // Result : sum of 4 and 5 is 9

const calculate = (a,b) => {
    let c = a+b;
    console.log(`sum of ${a} and ${b} is ${c}`)
}

calculate(5,6) // sum of 5 and 6 is 11

// single line method body example

const calculate = (a,b) =>  console.log(`sum of ${a} and ${b} is ${a+b}`)
calculate(6,7) // Result : sum of 6 and 7 is 13


const calculate = (a,b) =>  a+b
let result = calculate(7,8)
console.log(`result value is ${result}`) // Result : result value is 15