// CallBack Functions - A way to pass functions as parameter to another function


// Normal function Declaration way
function sum(a,b){
    let c = a+b;
    return c;
}

function calculate(a,b,fn){
    return fn(a,b)
}

let result = calculate(5,6,sum);
console.log(`result : ${result}`) // Result : result : 11


// Anonymous function expression way

const sum = function(a,b){
    let c = a+b;
    return c;
}

function calculate(a,b,fn){
    return fn(a,b)
}

let result2 = calculate(5,6,sum);
console.log(`result : ${result2}`)