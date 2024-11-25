// For Each method
// doesn't return any thing.
const transactions = [12,-34,56,90,-100]

let debitvalues = new Array()
let creditvalues = new Array()

transactions.forEach((val,index,arr)=>{

    if(val>0){
        debitvalues.push(val)
    }else if(val<0){
        creditvalues.push(val)
    }
}
)

console.log(`debit values : ${debitvalues}`)

console.log(`credit values : ${creditvalues}`)


// Map method
// map returns an array.
// behaves similar to foreach

const transactions2 = [12,-34,56,90,-100]
const updatedtransactions = transactions2.map((val,index,arr)=>{

    if(val>0){
        return (val*2)
    }else if(val<0){
        return(val*2)
    }
}
)

console.log(updatedtransactions)

// Filter method
// map returns an array.
// used for filtering the array passed.
const transactions3 = [12,-34,56,90,-100]
const newarr = transactions3.filter((val,index,arr)=>{
         if(val > 10){return val}
})

console.log(newarr)

//=========
const values = [1,2,3,4,5]

const result = values.reduce((val)=>  val+=val )

console.log(result)