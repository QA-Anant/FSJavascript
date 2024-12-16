// Linear Search algorithm
// works on unsorted array

const value = 77
const arr= [1,2,3,4,77,8,9,99]

function performLinearSearch(arr,value) {
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i]==value)
        {
            return i // element is found, let's return it.
        }
    }
    return -1
}

const foundPos = performLinearSearch(arr,value)

console.log(`value was found at position ${foundPos}`)
