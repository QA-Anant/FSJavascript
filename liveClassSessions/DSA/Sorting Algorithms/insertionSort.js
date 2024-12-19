// Insertion Sort

/*
          [4,8,5,7,65,9]
     |----------------------|
    [4]               [8,5,7,10,9]
sorted section - un sorted section

// assume that the first element is part of a sorted section
// and the remaining part becomes the unsorted section


*/

const arr = [4,8,5,7,65,9]


function findElementUsingInsertionSort(arr){

    for(let i=1; i < arr.length ; i++ ) //<-- this will skim through the unsorted section [8,5,7,10,9]
    {
        let cv = arr[i];
        let CVNI = i; //<---- whole game is to find this right spot for the  

        for(let j = i-1 ; j >= 0 ; j--) // <-- this will skim through the sorted section [4]
        {
            if(cv < arr[j]) // element of unsorted compared to the element of sorted array
            {
                arr[j+1] = arr[j]
                CVNI = j
            }
        }
        arr[CVNI] = cv;

    }
    return arr;
}

const sortedarray = findElementUsingInsertionSort(arr)
console.log(`Sorted array using insertion sort ${sortedarray}`)