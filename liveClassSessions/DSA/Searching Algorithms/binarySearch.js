// Binary Search

const itemtoSearch = 100
const arr = [25,34,45,56,67,99,100]

// Using for loop
/*
function findElementUsingBinarySearchForLoop(arr, itemtoSearch){
    let startindex = 0
    let endindex = arr.length-1;

    for(let i=0; i < arr.length; i++){
    
     let midindex = Math.floor((startindex+endindex)/2)

        if(itemtoSearch == arr[midindex])
        {
            return midindex // target item found at the midpoint
        }else if(itemtoSearch > arr[midindex])
        {
            startindex = midindex+1 // Move the startindex pointer to the right of midindex
        }else{
            endindex = midindex-1 // Move the endindex pointer to the left of midindex
        }        
    }
    console.log(`Not found value between ${startindex} and ${endindex}`)
    return -1
}
*/

// Using WhileLoop
function findElementUsingBinarySearchForLoop(arr, itemtoSearch){
    let startindex = 0
    let endindex = arr.length-1;

    while(startindex<=endindex){
    
     let midindex = Math.floor((startindex+endindex)/2)

        if(itemtoSearch == arr[midindex])
        {
            return midindex // target item found at the midpoint
        }else if(itemtoSearch > arr[midindex])
        {
            startindex = midindex+1 // Move the startindex pointer to the right of midindex
        }else{
            endindex = midindex-1 // Move the endindex pointer to the left of midindex
        }        
    }
    console.log(`Not found value between ${startindex} and ${endindex}`)
    return -1
}


const positionOfElement = findElementUsingBinarySearchForLoop(arr,itemtoSearch)
console.log(`Element ${itemtoSearch} was found in array at position ${positionOfElement}`)