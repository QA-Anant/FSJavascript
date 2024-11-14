// function expression - assigning a function to constant variable, it has function keyword, but not function name,
// that why to assignn value the function is assigned to a consta variable
// Anonymous function- without name of function
const sum = function(a,b)
{
    let c = a+b;
    console.log(`Sum of ${a} and ${b} is ${c}`)

}

sum(10,20)