// Program to use forEach() of array.
// Problem: Given an array of strings, count how many times each element appears and print the result.

const fruits = ['apple', 'banana', 'orange', 'apple', 'apple'];
console.log(`Fruit Array : [ ${fruits}]`)
// Initialize an empty object to store the counts
const count = {};

fruits.forEach((fruit)=>{
    if(count[fruit]){
        count[fruit]++
    }else{
        count[fruit] = 1
    }
})

for(const fruit in count){
    console.log(`count of ${fruit} is ${count[fruit]}`)
}


// Program to use map() of array
// Problem : Double the Values of the array
const numbers = [1, 2, 3, 4, 5];
console.log(`numbers Array : [ ${numbers}]`)


const doubleNumberArray = numbers.map((val)=>{
    calculate = val*2
    return calculate
})

console.log(`doubleNumberArray : ${doubleNumberArray}`)

// Program to use filter() of array
// Problem: Filter Odd Numbers
// Description: You are given an array of numbers. Your task is to create a new array that contains only the odd numbers from the original array.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredArray = numbersArray.filter(
    (num) =>{
    if(num%2 != 0){
        return true;
    }else{
        return false;
    }
})

console.log(`filtered Array value : ${filteredArray}`)


// Program to use reduce() of Array
// Problem : multiply all numbers in the given array 

const values = [1,2,3,4,5,6]

const finalvalue = values.reduce(
    (pv,cv)=>{
        return pv*cv;
    },1
)
console.log(`${finalvalue}`)