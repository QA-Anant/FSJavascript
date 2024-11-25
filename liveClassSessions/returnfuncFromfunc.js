// Store it like a variable
// pass it like a argument
// return it as a function



function output(){

   return  (a,b) =>
    {
        let c = a+b;
        //console.log(`sum of a,b : ${c}`)
        return c;
    }

    // const data = sum(a,b)
    // return data;
}

const result = output()

console.log(` result is :  ${result(2,3)}`)