// array.from()
const name = 'Anant'
const arr = Array.from(name)
console.log(arr)


//Array Like Structure
const obj = {
    length : 3,
}
const arr2 = Array.from(obj, ()=>'Anant')
console.log(arr2)

//Array Like Structure for key value pair
i = 0
const arr3 = Array.from(obj, (v,k)=> i++)
console.log(arr3)

//Array of Array
const arr4 = Array.from(obj, ()=>[])
console.log(arr4)

const arr5 = {
    length : 10,
}

const arr6 = Array.from(arr5, (v,k)=>0)
console.log(arr6)

const arr7 = [100,34,3042,3534,3058]
const maxvalue = Math.max(...arr7)
console.log(maxvalue)