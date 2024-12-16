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

    for(let i=1; i < arr.length ; i++ )
    {
        let cv = arr[i];
        let CVNI = i; //<---- whole game is to find this right spot for the  

        for(let j = i-1 ; j >= 0 ; j--)
        {
            
        }

    }
}

const sortedarray = findElementUsingInsertionSort(arr)