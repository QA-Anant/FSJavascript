
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