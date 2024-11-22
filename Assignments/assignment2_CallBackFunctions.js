// Return function from function

// Function declarartion
function firstname (){
    return function fname (a){
        console.log(`Firstname is ${a}`);
    }
}

const fname1 = firstname();
fname1("Anant"); //calling function


//Anonymous function
function lastname (){
    return function (a){
        console.log(`Lastname is ${a}`);
    }
}

const lname = lastname();
lname("Jain"); //calling function

//Arrow function
function middlename (){
    return (a)=> console.log(`Middlename is ${a}`);
    
}

const mname = middlename();
mname("A"); //calling function


function f1(a, f2) {
    console.log(a + 10);
    f2(); 
}

function f3() {
    console.log("callback function");
}

f1(5, f3);


