// Selection Sort practise

// only 1 swap per iteraion
// find the smallest number and place it in the begining.
// implements using 2 loops


const arr = [100,12,92,10,24,56,34]

function sortBySelectionSort(arr){
    for(let i =0; i < arr.length; i++){
        let smallestindex = i;
        for ( let j = i+1; j < arr.length; j++)
        {
            if(arr[j] < arr[smallestindex])
                smallestindex = j;
        }

        if(smallestindex != i)
        {
            let temp = arr[smallestindex]
            arr[smallestindex] = arr[i]
            arr[i] = temp
        }

        console.log(arr)
    }
    return arr
}

const sortedarr = sortBySelectionSort(arr)
console.log(`Sorted Array ${sortedarr}`)